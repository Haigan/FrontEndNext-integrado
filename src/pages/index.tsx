import { useContext, FormEvent, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/home.module.scss";

import logoImg from "../../public/logo.png";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

import { AuthContext } from "@/pages/contexts/AuthContext";

import { toast } from "react-toastify";

import Link from "next/link";

import { canSSRGuest } from "@/utils/canSSRGuest";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (email === "" || password === "") {
      toast.error("Preencha os campos!");
      return;
    }

    //inicio do loandig
    setLoading(true);

    let data = {
      email,
      password,
    };
    await signIn(data);

    //fim do loading
    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Estabelecimento - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo pizzaria" />

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" loading={loading}>
              Acessar
            </Button>
          </form>

          <Link href="/signup" legacyBehavior>
            <a className={styles.text}>Não possui uma conta? cadastre-se</a>
          </Link>
        </div>
      </div>
    </>
  );
}

//TUDO ISSO ACONTECE APENAS NO LADO SERVIDOR, FORA DO FRONT
export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
