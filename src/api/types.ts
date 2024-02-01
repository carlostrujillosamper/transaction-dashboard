import { Transaction } from "../components/Transactions/types";

export interface TransactionsResponse {
  transactions: Transaction[];
  totalCountTransactions: number;
  totalAmountInDollars: number;
  pagination: {
    cursor: string;
    pageSize: number;
  };
}

export interface FetchTransactionsOptions {
  clientId: string;
  startDate?: string;
  endDate?: string;
  cursor?: string; // Cursor for pagination
  pageSize?: number; // Number of transactions per page
}
