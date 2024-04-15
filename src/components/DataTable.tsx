import { Data, Status, data } from "@/api/data";
import { FC } from "react";
import {
  Table,
  CopyOutlinedIcon,
  Button,
  TableColumnType,
  SearchOutlinedIcon,
} from "./ui";
import { FilterForm } from "./combo";
import { formatTime } from "@/utils/timeFormatter";
import { formatPrice } from "@/utils/priceFormatter";
import { formatCardNumber } from "@/utils/cardNumberFormatter";

const getColumnSearchProps = (): TableColumnType<Data> => ({
  filterDropdown: (props) => (
    <FilterForm placeHolder="جستجوی تراکنش" {...props} />
  ),
  filterIcon: (filtered: boolean) => (
    <SearchOutlinedIcon
      className={`${filtered ? "bg-blue-500 text-neutral-200" : "text-neutral-700"} rounded-lg p-1.5 text-lg`}
    />
  ),
  onFilter: (value, record) =>
    record["trackId"]
      .toString()
      .toLowerCase()
      .includes((value as string).toLowerCase()),
});

const columns: TableColumnType<Data>[] = [
  {
    title: "شماره تراکنش",
    align: "center",
    render: (value) => (
      <Button
        block
        dir="ltr"
        type="text"
        icon={<CopyOutlinedIcon className="text-md text-blue-500" />}
        className="flex flex-row items-center justify-center
          gap-3"
        onClick={() => navigator.clipboard.writeText(value)}
      >
        {value}
      </Button>
    ),
    dataIndex: "trackId",
    key: "trackId",
    ...getColumnSearchProps(),
  },
  {
    title: "وضعیت تراکنش",
    align: "center",
    render: (value) => Status[value],
    dataIndex: "status",
    key: "status",
  },
  {
    title: "تاریخ پرداخت",
    align: "center",
    render: (value) => formatTime(value),
    dataIndex: "paidAt",
    key: "paidAt",
  },
  {
    title: "مبلغ",
    align: "center",
    render: (value) => formatPrice(value, "﷼"),
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "شماره کارت",
    align: "center",
    render: (value) => <div className="ltr-dir">{formatCardNumber(value)}</div>,
    dataIndex: "cardNumber",
    key: "cardNumber",
  },
];

export const DataTable: FC = () => {
  return (
    <Table
      rowKey={(data) => data.trackId}
      dataSource={data}
      direction="rtl"
      columns={columns}
      pagination={false}
    />
  );
};
