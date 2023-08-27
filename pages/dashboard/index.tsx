import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import DashboardMain from "../../src/components/Dashboard/DashboardMain";
import ProtectedRoutes from "../../src/components/Util/ProtectedRoutes";

const AdminDashboardPage = () => {
    const router = useRouter();
    return (
        // <Box h="100%" w="100">
            <ProtectedRoutes>
                {/* <DashboardMain /> */}
            </ProtectedRoutes>
        // </Box>
    );
};

export default AdminDashboardPage;
