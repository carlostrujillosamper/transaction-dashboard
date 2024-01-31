import * as React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import MOCKED_TRANSACTIONS from "../../mocks/transactions/transactions.json";
import {
  Transaction,
  TransactionStatus,
  AccountType,
  CardType,
  CardPaymentStatus,
} from "./types";
import { Table } from "../common/Table/Table";

const defaultData: Transaction[] = MOCKED_TRANSACTIONS.map((transaction) => ({
  ...transaction,
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

const columnHelper = createColumnHelper<Transaction>();

const columns = [
  columnHelper.accessor("transaction_id", {
    header: () => "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("date", {
    header: () => "Date",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("amount", {
    header: () => "Amount",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("description", {
    header: "Description",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("account.account_id", {
    header: "Account ID",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("account.account_type", {
    header: "Type",
    cell: (info) => info.renderValue(),
  }),
];

export function TransactionTable() {
  const [data] = React.useState(() => [...defaultData]);

  return <Table data={data} columns={columns} hasPagination />;
}
