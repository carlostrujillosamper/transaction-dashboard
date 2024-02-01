import React, { createContext, useContext, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { fetchTransactionsByClient } from "../../api/transactions";
import {
  FetchTransactionsOptions,
  TransactionsResponse,
} from "../../api/types";
import { mockData } from "../../mocks/transactions/mockData";

interface IApiError {
  message: string;
  description: string;
  statusCode: string | number;
}

interface DashboardContextProps {
  transactions: TransactionsResponse["transactions"] | undefined;
  totalCountTransactions: number;
  error: IApiError | null;
  isLoading: boolean;
  setClientId: React.Dispatch<React.SetStateAction<string>>;
  setNumberOfPagesLeftWithData: React.Dispatch<React.SetStateAction<number>>;
}

const DashboardContext = createContext<DashboardContextProps>(
  {} as DashboardContextProps
);

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within a DashboardProvider"
    );
  }
  return context;
};

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const MIN_NUMBER_OF_PAGES_TILL_RETRIGGER = 4;
  const [clientId, setClientId] = useState<string>("");
  const [numberOfPagesLeftWithData, setNumberOfPagesLeftWithData] =
    useState<number>(Number.MAX_SAFE_INTEGER);
  const [totalData, setTotalData] = useState<TransactionsResponse["transactions"] | null>();
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
        return lastPage.pagination.cursor;
      },
      onSuccess: (data) =>{
        setTotalData(data.pages.map((page) => page.transactions).flat());
      },
    }
  );

  React.useEffect(() => {
    if (numberOfPagesLeftWithData <= MIN_NUMBER_OF_PAGES_TILL_RETRIGGER ) {
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
