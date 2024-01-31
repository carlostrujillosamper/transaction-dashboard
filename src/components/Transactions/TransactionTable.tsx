import * as React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import MOCKED_TRANSACTIONS from "../../mocks/transactions/transactions.json";
import {
  Transaction,
  TransactionStatus,
  AccountType,
  CardType,
  CardPaymentStatus,
} from "./types";

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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
