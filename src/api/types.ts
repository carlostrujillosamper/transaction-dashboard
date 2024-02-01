import { Transaction } from "../components/Transactions/types";

export interface TransactionsResponse {
  transactions: Transaction[];
  totalTransactions: number;
  totalAmount: number;
}

export  interface FetchTransactionsOptions {
  accountId: string;
  startDate?: string;
  endDate?: string;
  cursor?: string; // Cursor for pagination
  pageSize?: number; // Number of transactions per page
}
