import { Tag } from "@chakra-ui/react";

export function CreditCardStatus({
  status,
}: {
  status: string;
}) {
  switch (status) {
    case "reverted":
      return <Tag colorScheme="red">Reverted</Tag>;
    case "declined":
      return <Tag colorScheme="red">Declined</Tag>;
    case "settled":
      return <Tag colorScheme="green">Settled</Tag>;
    case "processing":
        return <Tag colorScheme="yellow">Processing</Tag>;
    default:
      return null;
  }
}
