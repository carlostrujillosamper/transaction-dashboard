import { createContext } from "react";
import { DashboardContextProps } from "./types";



export const DashboardContext = createContext<DashboardContextProps>(
  {} as DashboardContextProps
);

