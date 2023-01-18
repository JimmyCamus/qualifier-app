import "../styles/globals.css";
import { Montserrat } from "@next/font/google";
import Layout from "../components/layout";
import { UserProvider } from "../lib/contexts/user.context";
import { NextPageContext } from "next";
import { getUser } from "../utils/user.utils";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: any) {
  return (
    <main className={montserrat.className}>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </main>
  );
}
