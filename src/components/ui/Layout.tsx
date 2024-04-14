import { Layout as BaseLayout, Menu } from "antd";
import { FC, PropsWithChildren } from "react";
import { FireFilledIcon } from "./icon";

const { Header, Content } = BaseLayout;

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BaseLayout className="h-screen">
      <Header className="items-center flex">
        <FireFilledIcon className="text-3xl text-neutral-200" />
      </Header>
      <Content className="p-12">
        <div className="p-6 rounded-lg bg-slate-200 min-h-full shadow-xl shadow-slate-300 rtl-dir">
          {children}
        </div>
      </Content>
    </BaseLayout>
  );
};
