import { useDisclosure } from "@chakra-ui/react";
import { Modal } from "../../common/Modal/Modal";
import { Table } from "../../common/Table/Table";
import { TransactionCardDetail } from "../TransactionCardDetail";
import { useTransactionTable } from "./useTransactionTable";
import { createColumnHelper } from "@tanstack/react-table";
import { Text } from "@chakra-ui/react";
import { getReadableDate } from "../../../utils/getReadableDate";
import { CryptoLogo } from "../CryptoLogo";
import { TransactionStatusTag } from "../TransactionStatusTag";
import { Transaction, TransactionStatus } from "../types";

export function TransactionTable() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, selectedTransaction, setTransactionId, transactionId } = useTransactionTable();
  const columnHelper = createColumnHelper<Transaction>();

  const columns = [
    columnHelper.accessor("coin", {
      header: () => "Crypto",
      cell: (info) => <CryptoLogo coin={info.getValue()} />,
    }),
    columnHelper.accessor("transaction_id", {
      header: () => "TRANSACTION ID",
      cell: (info) => <Text fontWeight={400}>{info.getValue()}</Text>,
    }),
    columnHelper.accessor("date", {
      header: () => "Date",
      cell: (info) => (
        <Text fontWeight={200}>{getReadableDate(info.getValue())}</Text>
      ),
    }),
    columnHelper.accessor("amount", {
      header: () => "Amount",
      cell: (info) => <Text fontWeight={700}>{`${info.getValue()}`}</Text>,
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
      cell: (info) => <Text fontWeight={200}>{info.getValue()}</Text>,
    }),
  ];

  return (
    <>
      <Table
        data={data}
        columns={columns}
        hasPagination
        onRowClick={onOpen}
        rowDataId={"transaction_id"}
        dataIdSetter={setTransactionId}
        selectedRowId={transactionId}
      />
      {selectedTransaction && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <TransactionCardDetail transaction={selectedTransaction} />
        </Modal>
      )}
    </>
  );
}
