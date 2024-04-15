import { FC, useState } from "react";
import { Modal, Button } from "./ui";
import { WalletDetails, WithdrawForm } from "./combo";

export const WithdrawModal: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-center py-6">
      <Button
        type="primary"
        onClick={() => setIsModalOpen(true)}
        className="justify-center"
      >
        نمایش جزئیات تسویه
      </Button>
      <Modal
        title="تسویه کیف پول"
        className="rtl-dir"
        open={isModalOpen}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
      >
        <WalletDetails balance={15000} />
        <WithdrawForm
          onSubmit={(data) => {
            console.log({ data });
            setIsModalOpen(false);
          }}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};
