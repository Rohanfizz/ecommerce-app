import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme1 } from "../src/themes/theme";
import Layout from "../src/components/UI/Layout";
import { RecoilRoot } from "recoil";
import { AnimateSharedLayout } from "framer-motion";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RecoilNexus from "recoil-nexus";
import useInitialFetch from "../src/hooks/query/useInitialFetch";
import InitialFetching from "../src/components/Util/InitialFetching";


export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 1000 * 60 * 5,
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: 0,
        },
    },
});


const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <RecoilRoot>
            <RecoilNexus />
            <QueryClientProvider client={queryClient}>
                <InitialFetching>
                    <ChakraProvider theme={theme1}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </ChakraProvider>
                </InitialFetching>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </RecoilRoot>
    );
};

export default MyApp;
