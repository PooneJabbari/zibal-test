//I exported all of the necessary components from antd and the ones i needed to make some change to
// why i didn't use antd directly inside combos and main components?
//because this way imports are clean. and if we ever want to change the ui library or have one of our own, we wont need to make changes all over the code.

export * from "./icon";
export { ThemeProvider } from "./ThemeProvider";
export { Layout } from "./Layout";
export { Select } from "./Select";
export { NumberInput } from "./NumberInput";
export { TextArea } from "./TextArea";
export { ErrorText } from "./ErrorText";
export {
  Table,
  Button,
  type TableColumnType,
  Modal,
  Radio,
  Form,
  Input,
  type InputRef,
} from "antd";

export {
  type FilterConfirmProps,
  type FilterDropdownProps,
} from "antd/es/table/interface";
