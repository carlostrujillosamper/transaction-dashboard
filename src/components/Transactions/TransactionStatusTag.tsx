import { TransactionStatus } from "./types";
import { Tag } from "../common/Tag/Tag";

export function TransactionStatusTag({
  status,
}: {
  status: TransactionStatus;
}) {
  switch (status) {
    case TransactionStatus.PENDING:
      return <Tag label="Pending" color="yellow" />;
    case TransactionStatus.CANCELLED:
      return <Tag label="Cancelled" color="red" />;
    case TransactionStatus.POSTED:
      return <Tag label="Posted" color="green" />;
    default:
      return null;
  }
}
