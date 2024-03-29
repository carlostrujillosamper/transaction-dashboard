import {
  AccountType,
  CardPaymentStatus,
  CardType,
  Coin,
  Transaction,
  TransactionStatus,
} from "../components/Transactions/types";
import MOCKED_TRANSACTIONS from "../mocks/transactions/transactions.json";
import { FetchTransactionsOptions, TransactionsResponse } from "./types";

// Get Transactions:

// ## Endpoint: GET /api/transactions
// ## Description: Retrieve a list of banking transactions.
// ## Query Parameters:
//    clientId (string, required): The unique identifier for the client.
//    startDate (string, optional): Start date for filtering transactions (format: 'ISO').
//    endDate (string, optional): End date for filtering transactions (format: 'ISO').
// Response:
// 200 OK with JSON body:

export const fetchTransactionsByClient = async ({
  clientId,
  startDate,
  endDate,
  cursor,
  pageSize = 100,
}: FetchTransactionsOptions): Promise<TransactionsResponse> => {
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

  try {
    const queryString = `?clientId=${clientId}${
      startDate ? `&startDate=${startDate}` : ""
    }${endDate ? `&endDate=${endDate}` : ""}${
      cursor ? `&cursor=${cursor}` : ""
    }&pageSize=${pageSize}`;

    console.log("queryString needed if we were actually calling a backend", queryString);
    /////////////////////////////////////////////////////////////////

    //actual fetch call to the server if there was a real server

    // const response = await fetch(`api/v1/transactions${queryString}`);

    // if (!response.ok) {
    //   throw new Error(
    //     `Failed to fetch transactions. Status: ${response.status}`
    //   );
    // }

    // const data = await response.json();
    // return data;
    /////////////////////////////////////////////////////////////////

    // fake implementation of the fetch call

    if (clientId && clientId === "option2") {
      throw new Error("Client not found Status: 404");
    }
    return {
      transactions: defaultData,
      totalCountTransactions: 120,
      totalAmountInDollars: 100000000,
      pagination: {
        cursor: "eyJwYWdlIjoxMDAsImN1cnNvciI6Im5vbmUifQ==",
        pageSize: 100,
      },
    };
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};
