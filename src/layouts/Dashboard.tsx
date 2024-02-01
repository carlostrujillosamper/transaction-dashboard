import {
  Box,
  HStack,
  Text,
  VStack,
  Heading,
  Select,
} from "@chakra-ui/react";
import { TransactionTable } from "../components/Transactions/TransactionTable/TransactionTable";

export function Dashboard() {
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
          <HStack spacing={4} >
            <Select
              placeholder="Select Client"
              w="20%"
              bgColor="white"
            >
              <option value="option1">Client 1</option>
              <option value="option2">Client 2</option>
            </Select>
            <Select
              placeholder="Select TimeFrame"
              w="20%"
              bgColor="white"
            >
              <option value="option1">Last Month</option>
              <option value="option2">Last 3 months</option>
              <option value="option2">Last 6 months</option>
              <option value="option2">Last Year</option>
            </Select>
          </HStack>
        </Box>
        <TransactionTable />
      </VStack>
    </>
  );
}
