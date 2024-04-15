import type { FC } from "react";

type Props = {
  error?: string | undefined;
  className?: string | undefined;
};

export const ErrorText: FC<Props> = ({ error, className }) => {
  if (!error) {
    return null;
  }

  return <p className="text-xs text-red-400">{error}</p>;
};
