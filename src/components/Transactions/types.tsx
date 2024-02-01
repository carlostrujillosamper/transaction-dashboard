export interface Transaction {
  coin: string;
  transaction_id: string;
  date: string;
  amount: number;
  status: TransactionStatus;
  description: string;
  account: Account;
  card_payment: CardPayment;
}

export interface Account {
  account_id: string;
  client_id: string;
  account_type: AccountType;
  balance_before: number;
  balance_after: number;
}

export interface CardPayment {
  card_type: CardType;
  last_four_digits: number;
  transaction_amount: number;
  transaction_date: string;
  merchant_details: {
    merchant_name: string;
    merchant_id: string;
    location: string;
    category: string;
  };
  status: CardPaymentStatus;
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

export enum Coin {
  BITCOIN = "bitcoin",
  ETHEREUM = "ethereum",
  SOLANA = "solana",
  DOGECOIN = "dogecoin"
}
