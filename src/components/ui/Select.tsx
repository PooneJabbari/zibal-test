import React, { FC } from "react";
import { Select as BaseSelect } from "antd";
import { ErrorText } from "./ErrorText";

const filterOption = (
  input: string,
  option?: { label: string; value: string },
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

type Props = {
  title: string;
  placeHolder: string;
  onChange: (text: string) => void;
  options: { value: string; label: string }[];
  value: string;
  error?: string;
};

export const Select: FC<Props> = ({
  title,
  placeHolder,
  onChange,
  options,
  value,
  error,
}) => (
  <div className="space-y-3">
    <p>{title}</p>
    <BaseSelect
      direction="rtl"
      className="w-full"
      value={value}
      showSearch
      placeholder={placeHolder}
      onChange={onChange}
      filterOption={filterOption}
      options={options}
      notFoundContent="پیدا نشد"
    />
    <ErrorText error={error} />
  </div>
);
