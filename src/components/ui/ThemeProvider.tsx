//I could keep this in app.tsx but i didn't. because:
//This, too,  may change if we choose another ui library and I had to import antd in app.tsx which will have to be changed if we change the ui library. but most of ui libraries have a ThemeProvider at the end of the day.

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
