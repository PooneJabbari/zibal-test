import { Button, Input, InputRef } from "antd";
import { FC, Key, useRef } from "react";
import { SearchOutlinedIcon } from "../ui/icon";
import {
  FilterConfirmProps,
  FilterDropdownProps,
} from "antd/es/table/interface";

const handleSearch = (confirm: FilterDropdownProps["confirm"]) => {
  confirm();
};

const handleReset = (clearFilters: () => void) => {
  clearFilters();
};

type Props = {
  placeHolder: string;
  clearFilters?: (() => void) | undefined;
  selectedKeys: Key[];
  setSelectedKeys: (selectedKeys: Key[]) => void;
  confirm: (param?: FilterConfirmProps) => void;
};

export const FilterForm: FC<Props> = ({
  placeHolder,
  clearFilters,
  selectedKeys,
  setSelectedKeys,
  confirm,
}) => {
  const searchInput = useRef<InputRef>(null);

  return (
    <div className="space-y-3 p-3" onKeyDown={(e) => e.stopPropagation()}>
      <Input
        ref={searchInput}
        className="rtl-dir"
        placeholder={placeHolder}
        value={selectedKeys[0]}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() => handleSearch(confirm)}
      />
      <div className="flex justify-between">
        <Button
          onClick={() => {
            if (clearFilters) {
              handleReset(clearFilters);
              handleSearch(confirm);
            }
          }}
        >
          بیخیال
        </Button>
        <Button
          type="primary"
          onClick={() => handleSearch(confirm)}
          icon={<SearchOutlinedIcon />}
        >
          جستجو
        </Button>
      </div>
    </div>
  );
};
