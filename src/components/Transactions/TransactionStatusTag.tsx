import { TransactionStatus } from "./types";
import { Tag } from "@chakra-ui/react";

export function TransactionStatusTag({
  status,
}: {
  status: TransactionStatus;
}) {
  switch (status) {
    case TransactionStatus.PENDING:
      return <Tag colorScheme="yellow">Pending</Tag>;
    case TransactionStatus.CANCELLED:
      return <Tag colorScheme="red">Cancelled</Tag>;
    case TransactionStatus.POSTED:
      return <Tag colorScheme="green">Posted</Tag>;
    default:
      return null;
  }
}
