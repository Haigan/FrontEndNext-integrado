import React from "react";
import styles from "./styles.module.scss";
import Head from "next/head";
import { Header } from "@/components/Header";

export default function Pedido() {
  return (
    <>
      <Head>
        <title>Pedido - Estabelecimento</title>
      </Head>
      <div>
        <Header />
        <h1 className={styles.colorPedido}>PEDIDO</h1>
      </div>
    </>
  );
}
