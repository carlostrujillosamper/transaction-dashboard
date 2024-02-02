import * as React from "react";

import { Transaction } from "../types";

export const useTransactionTable = (transactions: Transaction[])=> {
  const [transactionId, setTransactionId] = React.useState<string | undefined>(
    undefined
  );
  const selectedTransaction = React.useMemo(() => {
    if (!transactionId) return null;
    return transactions.find(
      (transaction) => transaction.transaction_id === transactionId
    );
  }, [transactions, transactionId]);

  return {
    transactionId,
    setTransactionId,
    selectedTransaction,
  };
}
