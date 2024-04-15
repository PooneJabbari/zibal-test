import { Input } from "antd";
import { TextAreaProps } from "antd/es/input";
import { FC } from "react";
const { TextArea: BaseTextArea } = Input;

type Props = TextAreaProps & { title: string };

export const TextArea: FC<Props> = ({ title, ...props }) => {
  return (
    <div className="space-y-3">
      <p>{title}</p>
      <BaseTextArea {...props} />
    </div>
  );
};
