import { formatPrice } from "@/utils/priceFormatter";
import { FC } from "react";

type Props = {
  balance: number;
};

export const WalletDetails: FC<Props> = ({ balance }) => {
  return (
    <div className="space-y-3 border-y border-neutral-200 py-5">
      <div className="text-md text-neutral-500">موجودی فعلی:</div>
      <div className="text-2xl text-blue-600">
        {formatPrice(balance, "ریال")}
      </div>
    </div>
  );
};
