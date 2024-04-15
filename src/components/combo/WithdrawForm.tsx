//I preferred using react-hook-forms for better performance and better validation
//(though it's a simple form, felt like it's still better to keep using react-hook-forms)

import { FC } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Button,
  Form,
  NumberInput,
  Radio,
  Select,
  TextArea,
} from "@/components/ui";

const toOptions = [
  { label: "به حساب", value: "account" },
  { label: "به کیف پول", value: "wallet" },
];

//how should i translate Pardakhtyari! :))
const destinationOptions = [
  { label: "کیف پول اصلی", value: "main" },
  { label: "کیف پول پرداختیاری", value: "help" },
  { label: "کیف پول تسویه", value: "withdraw" },
];

const formSchema = z.object({
  to: z.enum(["wallet", "account"]),
  destination: z.string().min(1, "مقصد تسویه اجباری است"),
  price: z.number().min(1, "مبلغ تسویه اجباری است"),
  details: z.string().optional(),
});
type FormSchema = z.infer<typeof formSchema>;

type Props = { onSubmit: SubmitHandler<FormSchema>; onCancel: () => void };

export const WithdrawForm: FC<Props> = ({ onSubmit, onCancel }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: {
      to: "account",
      destination: "",
      details: "",
      price: 0,
    },
    resolver: zodResolver(formSchema),
  });

  return (
    <Form className="space-y-5 py-5">
      <Controller
        control={control}
        name="to"
        render={({ field: { onChange, value } }) => {
          return (
            <Radio.Group
              options={toOptions}
              onChange={onChange}
              value={value}
              optionType="button"
              buttonStyle="solid"
            />
          );
        }}
      />
      <Controller
        control={control}
        name="destination"
        render={({ field: { onChange, value } }) => {
          return (
            <Select
              title="مقصد تسویه"
              placeHolder="انتخاب حساب مقصد"
              onChange={onChange}
              value={value}
              error={errors.destination?.message}
              options={destinationOptions}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="price"
        render={({ field: { onChange, value } }) => {
          return (
            <NumberInput
              title="مبلغ تسویه"
              suffix="ریال"
              onChange={onChange}
              error={errors.price?.message}
              value={value}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="details"
        render={({ field: { onChange, value } }) => {
          return (
            <TextArea
              title="توضیحات (بابت)"
              onChange={onChange}
              value={value}
            />
          );
        }}
      />
      <div className="ltr-dir flex gap-3 border-t border-neutral-300 pt-5">
        <Button type="primary" onClick={handleSubmit(onSubmit)}>
          ثبت درخواست تسویه
        </Button>
        <Button
          onClick={() => {
            reset();
            onCancel();
          }}
        >
          انصراف
        </Button>
      </div>
    </Form>
  );
};
