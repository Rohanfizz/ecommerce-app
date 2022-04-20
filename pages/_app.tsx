import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme1 } from "../src/themes/theme";
import Layout from "../src/components/UI/Layout";
import { RecoilRoot } from "recoil";
import { AnimateSharedLayout } from "framer-motion";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <RecoilRoot>
            <ChakraProvider theme={theme1}>
                <AnimateSharedLayout>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </AnimateSharedLayout>
            </ChakraProvider>
        </RecoilRoot>
    );
};

export default MyApp;
