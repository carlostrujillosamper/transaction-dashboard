import { useQuery } from "react-query";
import { fetchTransactionsByClient } from "../../api/transactions";
import { FetchTransactionsOptions } from "../../api/types";
import { useState } from "react";
import { mockData } from "../../mocks/transactions/mockData";

interface IApiError {
  message: string;
  description: string;
  statusCode: string | number;
}

export function useDashboard() {
  const [clientId, setClientId] = useState<string>("");

  const fetchDataOptions: FetchTransactionsOptions = {
    clientId: clientId,
    startDate: "ISO-DATE-STRING",
    endDate: "ISO-DATE-STRING",
    cursor: "",
    pageSize: 100,
  };

  const { data, error, isLoading } = useQuery(
    ["data", fetchDataOptions],
    () => fetchTransactionsByClient(fetchDataOptions),
    {
      keepPreviousData: true,
      onError: (error: IApiError) => error,
      retry: false,
      initialData: mockData,
    }
  );
  return { data, error, isLoading, setClientId };
}
