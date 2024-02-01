import { Tag } from "../common/Tag/Tag";

export function CreditCardStatus({
  status,
}: {
  status: string;
}) {
  switch (status) {
    case "reverted":
      return <Tag label="Reverted" color="red" />;
    case "declined":
      return <Tag label="Declined" color="red" />;
    case "settled":
      return <Tag label="Settled" color="green" />;
    case "processing":
        return <Tag label="Processing" color="yellow" />;
    default:
      return null;
  }
}
