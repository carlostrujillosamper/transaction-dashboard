import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { TransactionTable } from "./components/Transactions/TransactionTable";

function App() {
  return (
    <ChakraProvider>
      <TransactionTable />
    </ChakraProvider>
  );
}

export default App;
