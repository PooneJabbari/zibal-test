//Originally i needed to have an Input. but then i realized we only need a number input so i thought why not?

import { FC } from "react";
import { Input as BaseInput } from "antd";
import { ErrorText } from "./ErrorText";

type Props = {
  title: string;
  suffix: string;
  value: number;
  onChange: (text: number) => void;
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
      <BaseInput
        type="number"
        suffix={<p className="text-neutral-300">{suffix}</p>}
        value={value}
        onChange={(e) => onChange(e.target.valueAsNumber)}
      />
      <ErrorText error={error} />
    </div>
  );
};
