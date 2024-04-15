//Originally i needed to have an Input. but then i realized how cool InputNumber is so i thought why not?

import { FC } from "react";
import { InputNumber } from "antd";
import { ErrorText } from "./ErrorText";

type Props = {
  title: string;
  suffix: string;
  value: number;
  onChange: (text: number | null) => void;
  error?: string;
};

export const NumberInput: FC<Props> = ({
  onChange,
  title,
  value,
  suffix,
  error,
}) => {
  return (
    <div className="space-y-3">
      <p>{title}</p>
      <InputNumber<number>
        value={value}
        className="w-full"
        suffix={<p className="text-neutral-300">{suffix}</p>}
        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        parser={(value) =>
          value?.replace(/\$\s?|(,*)/g, "") as unknown as number
        }
        onChange={onChange}
      />
      <ErrorText error={error} />
    </div>
  );
};
