import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  HStack,
  Flex,
  Tag
} from "@chakra-ui/react";
import { Transaction } from "./types";
import { formatDollarAmount } from "../../utils/formatDollarAmount";
import { getReadableDate } from "../../utils/getReadableDate";
import { CreditCardStatus } from "./CreditCardStatusTag";
import { CreditCardBanner } from "./CreditCardBanner";

interface TransactionCardDetailProps {
  transaction: Transaction;
}

export function TransactionCardDetail({
  transaction,
}: TransactionCardDetailProps) {
  return (
    <Card w="100%">
      <CreditCardBanner
        creditCard={transaction.card_payment.card_type}
        lastFourDigits={transaction.card_payment.last_four_digits}
      />
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">
            {transaction.card_payment.merchant_details.merchant_name}
          </Heading>
          <HStack>
            <Tag
            >{transaction.card_payment.merchant_details.category}</Tag>
            <Tag
            >{transaction.card_payment.merchant_details.location}</Tag>
          </HStack>
          <Text>
            {getReadableDate(transaction.card_payment.transaction_date)}
          </Text>
          <Flex justifyContent={"space-between"}>
            <Text fontSize="2xl">
              {formatDollarAmount(transaction.card_payment.transaction_amount)}
            </Text>
            <CreditCardStatus status={transaction.card_payment.status} />
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}
