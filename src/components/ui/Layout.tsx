//This was not asked for in the explained project. but the screen would look so pale and empty without it. hope you don't mind

import { Layout as BaseLayout } from "antd";
import { FC, PropsWithChildren } from "react";
import { FireFilledIcon } from "./icon";

const { Header, Content } = BaseLayout;

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BaseLayout className="h-screen">
      <Header className="rtl-dir flex items-center">
        <FireFilledIcon className="text-4xl text-blue-100" />
      </Header>
      <Content className="p-12">
        <div className="rtl-dir min-h-full rounded-lg bg-slate-200 p-6 shadow-xl shadow-slate-300">
          {children}
        </div>
      </Content>
    </BaseLayout>
  );
};
