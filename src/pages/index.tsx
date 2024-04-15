import React from "react";
import { Layout } from "@/components/ui";
import { DataTable } from "@/components/DataTable";
import { WithdrawModal } from "@/components/WithdrawModal";

const Home = () => (
  <div className="App">
    <Layout>
      <DataTable />
      <WithdrawModal />
    </Layout>
  </div>
);

export default Home;
