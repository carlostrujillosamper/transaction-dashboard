import { Tag } from "@chakra-ui/react";
import { CardPaymentStatus } from "./types";

export function CreditCardStatus({ status }: { status: CardPaymentStatus }) {
  switch (status) {
    case CardPaymentStatus.REVERTED:
      return <Tag colorScheme="red">Reverted</Tag>;
    case CardPaymentStatus.DECLINED:
      return <Tag colorScheme="red">Declined</Tag>;
    case CardPaymentStatus.SETTLED:
      return <Tag colorScheme="green">Settled</Tag>;
    case CardPaymentStatus.PROCESSING:
      return <Tag colorScheme="yellow">Processing</Tag>;
    default:
      return null;
  }
}
