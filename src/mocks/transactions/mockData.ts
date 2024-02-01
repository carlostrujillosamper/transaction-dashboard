import {
  AccountType,
  CardPaymentStatus,
  CardType,
  Coin,
  Transaction,
  TransactionStatus,
} from "../../components/Transactions/types";
import MOCKED_TRANSACTIONS from "./transactions.json";
const defaultData: Transaction[] = MOCKED_TRANSACTIONS.map((transaction) => ({
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
}));

export const mockData = {
  transactions: defaultData,
  totalCountTransactions: 120,
  totalAmountInDollars: 100000000,
  pagination: {
    cursor: "eyJwYWdlIjoxMDAsImN1cnNvciI6Im5vbmUifQ==",
    pageSize: 100,
  },
};
