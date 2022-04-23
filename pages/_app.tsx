import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme1 } from "../src/themes/theme";
import Layout from "../src/components/UI/Layout";
import { RecoilRoot } from "recoil";
import { AnimateSharedLayout } from "framer-motion";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const MyApp = ({ Component, pageProps }: AppProps) => {
    const queryClient = new QueryClient();
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <ChakraProvider theme={theme1}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ChakraProvider>
            <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </RecoilRoot>
    );
};

export default MyApp;
