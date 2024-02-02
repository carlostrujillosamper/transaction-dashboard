import { Text, useDisclosure } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { getReadableDate } from "../../../utils/getReadableDate";
import { Modal } from "../../common/Modal/Modal";
import { Table } from "../../common/Table/Table";
import { CryptoLogo } from "../CryptoLogo";
import { TransactionCardDetail } from "../TransactionCardDetail";
import { TransactionStatusTag } from "../TransactionStatusTag";
import { Coin, Transaction, TransactionStatus } from "../types";
import { useTransactionTable } from "./useTransactionTable";
import { useDashboardContext } from "../../../context/Dashboard/useDashboardContext";

export function TransactionTable() {
  const { transactions, totalCountTransactions, setNumberOfPagesLeftWithData } = useDashboardContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { selectedTransaction, setTransactionId, transactionId } =
    useTransactionTable(transactions ?? []);

  const columnHelper = createColumnHelper<Transaction>();

  const columns = [
    columnHelper.accessor("coin", {
      header: () => "Crypto",
      cell: (info) => <CryptoLogo coin={info.getValue() as Coin} />,
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
      {transactions?.length && (
        <Table
          data={transactions}
          columns={columns}
          hasPagination
          onRowClick={onOpen}
          rowDataId={"transaction_id"}
          dataIdSetter={setTransactionId}
          selectedRowId={transactionId}
          totalNumberOfRows={totalCountTransactions}
          setNumberOfPagesLeftWithData={setNumberOfPagesLeftWithData}
        />
      )}
      {selectedTransaction && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <TransactionCardDetail transaction={selectedTransaction} />
        </Modal>
      )}
    </>
  );
}
