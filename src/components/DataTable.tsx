import { Data, Status, data } from "@/api/data";
import { FC } from "react";
import { TableColumnsType, Table, CopyOutlinedIcon, Button } from "./ui";
import { formatTime } from "@/utils/timeFormatter";
import { formatPrice } from "@/utils/priceFormatter";
import { formatCardNumber } from "@/utils/cardNumberFormatter";

const columns: TableColumnsType<Data> = [
  {
    title: "شماره تراکنش",
    render: (value) => (
      <Button
        dir="ltr"
        type="text"
        icon={<CopyOutlinedIcon className="text-md text-blue-500" />}
        className="flex flex-row items-center gap-3"
        onClick={() => navigator.clipboard.writeText(value)}
      >
        {value}
      </Button>
    ),
    dataIndex: "trackId",
    key: "trackId",
  },
  {
    title: "وضعیت تراکنش",
    render: (value) => Status[value],
    dataIndex: "status",
    key: "status",
  },
  {
    title: "تاریخ پرداخت",
    render: (value) => formatTime(value),
    dataIndex: "paidAt",
    key: "paidAt",
  },
  {
    title: "مبلغ",
    render: (value) => formatPrice(value, "﷼"),
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "شماره کارت",
    // render: (value) => formatCardNumber(value),

    dataIndex: "cardNumber",
    key: "cardNumber",
  },
];

export const DataTable: FC = () => {
  return <Table dataSource={data} direction="rtl" columns={columns} />;
};
