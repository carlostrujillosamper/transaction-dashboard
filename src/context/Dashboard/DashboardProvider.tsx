import { useState, useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { fetchTransactionsByClient } from "../../api/transactions";
import {
  FetchTransactionsOptions,
  TransactionsResponse,
} from "../../api/types";
import { mockData } from "../../mocks/transactions/mockData";
import { DashboardContextProps, IApiError } from "./types";
import { DashboardContext } from "./DashboardContext";

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const MIN_NUMBER_OF_PAGES_TILL_RETRIGGER = 4;

  const [clientId, setClientId] = useState<string>("");

  const [numberOfPagesLeftWithData, setNumberOfPagesLeftWithData] =
    useState<number>(Number.MAX_SAFE_INTEGER);

  const [totalData, setTotalData] = useState<
    TransactionsResponse["transactions"] | null
  >();
  const [numberOfFetches, setNumberOfFetches] = useState<number>(0);

  const fetchDataOptions: FetchTransactionsOptions = {
    clientId: clientId,
    startDate: "ISO-DATE-STRING",
    endDate: "ISO-DATE-STRING",
    cursor: "",
    pageSize: 100,
  };

  const { data, error, isLoading, fetchNextPage } = useInfiniteQuery(
    ["data", fetchDataOptions],
    () => fetchTransactionsByClient(fetchDataOptions),
    {
      keepPreviousData: true,
      onError: (error: IApiError) => error,
      retry: false,
      initialData: () => {
        return {
          pageParams: [],
          pages: [mockData],
        };
      },
      getNextPageParam: (lastPage) => {
        // If there are no more pages, server would return no cursor which would prevent further refetching
        return lastPage.pagination.cursor;
      },
      onSuccess: (data) => {
        setTotalData([
          ...(totalData ?? []),
          ...data.pages[numberOfFetches].transactions,
        ]);
      },
    }
  );
  useEffect(() => {
    if (numberOfPagesLeftWithData <= MIN_NUMBER_OF_PAGES_TILL_RETRIGGER) {
      setNumberOfFetches((prev) => prev + 1);
      fetchNextPage();
    }
  }, [fetchNextPage, numberOfPagesLeftWithData]);

  const contextValue: DashboardContextProps = {
    transactions: totalData ?? [],
    totalCountTransactions: data?.pages[0].totalCountTransactions ?? 0,
    error,
    isLoading,
    setClientId,
    setNumberOfPagesLeftWithData,
  };

  return (
    <DashboardContext.Provider value={contextValue}>
      {children}
    </DashboardContext.Provider>
  );
}
