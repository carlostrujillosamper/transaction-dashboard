import { FetchTransactionsOptions, TransactionsResponse } from "./types";
const BASE_URL = "/api/transactions";

export const fetchTransactions = async ({
  accountId,
  startDate,
  endDate,
  cursor,
  pageSize = 100,
}: FetchTransactionsOptions): Promise<TransactionsResponse> => {
  try {
    const queryString = `?accountId=${accountId}${
      startDate ? `&startDate=${startDate}` : ""
    }${endDate ? `&endDate=${endDate}` : ""}${
      cursor ? `&cursor=${cursor}` : ""
    }&pageSize=${pageSize}`;
    const response = await fetch(`${BASE_URL}${queryString}`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch transactions. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

