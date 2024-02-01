import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Dashboard } from "./layouts/Dashboard";

function App() {
  return (
    <ChakraProvider>
      <Dashboard />
    </ChakraProvider>
  );
}

export default App;
