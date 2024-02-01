import * as React from "react";

import MOCKED_TRANSACTIONS from "../../../mocks/transactions/transactions.json";
import {
  AccountType,
  CardPaymentStatus,
  CardType,
  Coin,
  Transaction,
  TransactionStatus,
} from "../types";


export function useTransactionTable() {
    const defaultData: Transaction[] = MOCKED_TRANSACTIONS.map(
      (transaction) => ({
        ...transaction,
        coin: transaction.coin as Coin,
        status: transaction.status as TransactionStatus,
        account: {
          ...transaction.account,
          account_type: transaction.account.account_type as AccountType,
        },
        card_payment: {
          ...transaction.card_payment,
          card_type: transaction.card_payment.card_type as CardType,
          status: transaction.card_payment.status as CardPaymentStatus,
        },
      })
    );

  const [data] = React.useState(() => [...defaultData]);
  const [transactionId, setTransactionId] = React.useState<string | undefined>(undefined);

  const selectedTransaction = React.useMemo(() => {
    if (!transactionId) return null;
    return data.find(
      (transaction) => transaction.transaction_id === transactionId
    );
  }, [data, transactionId]);
  return {
    data,
    transactionId,
    setTransactionId,
    selectedTransaction,
  };
}
