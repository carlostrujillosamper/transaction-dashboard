import { TransactionsResponse } from "../../api/types";

export interface IApiError {
  message: string;
  description: string;
  statusCode: string | number;
}

export interface DashboardContextProps {
  transactions: TransactionsResponse["transactions"] | undefined;
  totalCountTransactions: number;
  error: IApiError | null;
  isLoading: boolean;
  setClientId: React.Dispatch<React.SetStateAction<string>>;
  setNumberOfPagesLeftWithData: React.Dispatch<React.SetStateAction<number>>;
}
