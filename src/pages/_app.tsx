import "../../styles/globals.scss";
import type { AppProps } from "next/app";

import { AuthProvider } from "@/pages/contexts/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
