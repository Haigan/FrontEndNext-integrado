import { canSSRAuth } from "@/utils/cantSSRAuth";
import Head from "next/head";

import { Header } from "@/components/Header";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Painel - Estabelecimento</title>
      </Head>
      <div>
        <Header />
        <h1>Painel</h1>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
