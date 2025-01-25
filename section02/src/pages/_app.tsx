import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactNode, useEffect } from "react";
import GlobalLayout from "@/components/global-layout";
import { NextPage } from "next";
import SearchableLayout from "@/components/searchable-layout";

type AppPropsWithLayout = AppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout
    || ((page: ReactNode) => <SearchableLayout>{page}</SearchableLayout>);
  
  return (
    <GlobalLayout>
      {getLayout(<Component {...pageProps} />)}
    </GlobalLayout>
  );
}
