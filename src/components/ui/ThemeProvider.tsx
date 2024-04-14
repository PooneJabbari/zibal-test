import { ConfigProvider, ThemeConfig } from "antd";
import { FC, PropsWithChildren } from "react";
import localFont from "next/font/local";

const shabnam = localFont({
  src: "../../../public/fonts/Shabnam.ttf",
  weight: "400",
});

const theme: ThemeConfig = { token: shabnam.style };

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};
