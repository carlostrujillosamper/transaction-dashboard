export interface Transaction {
  transaction_id: string;
  date: string;
  amount: number;
  status: "pending" | "posted" | "cancelled";
  description: string;
  account: Account;
  card_payment: CardPayment;
}

export interface Account {
  account_id: string;
  client_id: string;
  account_type: "checking" | "savings" | "MMA" | "CD";
  balance_before: number;
  balance_after: number;
}

export interface CardPayment {
  card_type: "visa" | "mastercard" | "amex";
  last_four_digits: number;
  transaction_amount: number;
  transaction_date: string;
  merchant_details: {
    merchant_name: string;
    merchant_id: string;
    location: string;
    category: string;
  };
  status: "reverted" | "declined" | "settled" | "processing";
}

export enum TransactionStatus {
  PENDING = "pending",
  POSTED = "posted",
  CANCELLED = "cancelled",
}

export enum AccountType {
  CHECKING = "checking",
  SAVINGS = "savings",
  MMA = "MMA",
  CD = "CD",
}

export enum CardType {
  VISA = "visa",
  MASTERCARD = "mastercard",
  AMEX = "amex",
}

export enum CardPaymentStatus {
  REVERTED = "reverted",
  DECLINED = "declined",
  SETTLED = "settled",
  PROCESSING = "processing",
}
