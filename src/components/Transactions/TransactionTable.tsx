import * as React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { useDisclosure } from "@chakra-ui/react";

import MOCKED_TRANSACTIONS from "../../mocks/transactions/transactions.json";
import {
  Transaction,
  TransactionStatus,
  AccountType,
  CardType,
  CardPaymentStatus,
} from "./types";
import { Table } from "../common/Table/Table";
import { getReadableDate } from "../../utils/getReadableDate";
import { TransactionStatusTag } from "./TransactionStatusTag";
import { Text } from "../common/Text/Text";
import { Modal } from "../common/Modal/Modal";
import { TransactionCardDetail } from "./TransactionCardDetail";
import { CryptoLogo } from "./CryptoLogo";

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
  columnHelper.accessor("coin", {
    header: () => "Crypto",
    cell: (info) => <CryptoLogo coin={info.getValue()} />,
  }),
  columnHelper.accessor("transaction_id", {
    header: () => "TRANSACTION ID",
    cell: (info) => <Text content={info.getValue()} weight={400} />,
  }),
  columnHelper.accessor("date", {
    header: () => "Date",
    cell: (info) => (
      <Text content={getReadableDate(info.getValue())} weight={200} />
    ),
  }),
  columnHelper.accessor("amount", {
    header: () => "Amount",
    cell: (info) => <Text content={`${info.getValue()}`} weight={700} />,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => {
      const status = info.getValue() as TransactionStatus;
      return <TransactionStatusTag status={status} />;
    },
  }),
  columnHelper.accessor("description", {
    header: "Description",
    cell: (info) => <Text content={info.getValue()} weight={200} />,
  }),
];

export function TransactionTable() {
  const [data] = React.useState(() => [...defaultData]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [transactionId, setTransactionId] = React.useState<string | null>(null);

  const selectedTransaction = React.useMemo(() => {
    if (!transactionId) return null;
    return data.find(
      (transaction) => transaction.transaction_id === transactionId
    );
  }, [data, transactionId]);
  return (
    <>
      <Table
        data={data}
        columns={columns}
        hasPagination
        onRowClick={onOpen}
        rowDataId={"transaction_id"}
        dataIdSetter={setTransactionId}
      />
      {selectedTransaction && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <TransactionCardDetail transaction={selectedTransaction} />
        </Modal>
      )}
    </>
  );
}
