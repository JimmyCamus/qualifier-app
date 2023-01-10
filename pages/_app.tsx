import "../styles/globals.css";
import { Montserrat } from "@next/font/google";
import Layout from "../components/layout";
import { UserProvider } from "../lib/contexts/user.context";
import { NextPageContext } from "next";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps, user }: any) {
  return (
    <main className={montserrat.className}>
      <UserProvider>
        <Layout>
          <Component {...pageProps} user={user} />
        </Layout>
      </UserProvider>
    </main>
  );
}

App.getInitialProps = async ({ ctx }: { ctx: NextPageContext }) => {
  let user = {};
  if (ctx.req?.headers.cookie) {
    const token = ctx.req?.headers.cookie?.split("=")[1];
    const userDataResponse = await fetch(
      `${process.env.SERVER_URL}/auth/profile`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "aplication/json",
          "Content-Type": "application/json",
        },
      }
    );

    user = await userDataResponse.json();
  }

  return {
    user,
  };
};
