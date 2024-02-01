import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { TransactionTable } from "./components/Transactions/TransactionTable/TransactionTable";

function App() {
  return (
    <ChakraProvider>
      <TransactionTable />
    </ChakraProvider>
  );
}

export default App;
