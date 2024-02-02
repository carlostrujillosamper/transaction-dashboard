import { Box, Heading, Select, Spinner, Text, VStack } from "@chakra-ui/react";
import { TransactionTable } from "../../components/Transactions/TransactionTable/TransactionTable";
import { HttpError } from "../../components/common/HTTPError/HTTPError";
import { useDashboardContext } from "../../context/Dashboard/useDashboardContext";

export function Dashboard() {
  const { error, isLoading, setClientId } = useDashboardContext();
  return (
    <>
      <VStack>
        <Box w="100%">
          <Heading as="h1" size="xl" textAlign="left">
            Dashboard
          </Heading>
          <Text fontWeight={200} fontSize="25px" textAlign="left" color="grey">
            Transaction List
          </Text>
        </Box>
        <Box
          border="1px solid #F4F8FA"
          rounded={5}
          boxShadow="md"
          w="100%"
          padding={4}
          bgColor="#F4F8FA"
          marginBottom="2%"
        >
          <Select
            placeholder="Select Client"
            w="20%"
            bgColor="white"
            name="client"
            onChange={(e) => setClientId(e.target.value)}
          >
            <option value="option1">Client 1</option>
            <option value="option2">Client 2</option>
          </Select>
        </Box>
        {isLoading && <Spinner />}
        {error ? <HttpError message={error.message} /> : <TransactionTable />}
      </VStack>
    </>
  );
}
