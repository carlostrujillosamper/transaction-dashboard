import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Dashboard } from "./layouts/Dashboard/Dashboard";
import { DashboardProvider } from "./context/Dashboard/DashboardProvider";

function App() {
  const queryClient = new QueryClient();
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <DashboardProvider>
          <Dashboard />
        </DashboardProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
