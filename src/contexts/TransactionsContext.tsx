import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionalContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface TransactionalProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext(
  {} as TransactionalContextType
);

export function TransactionsProvider({ children }: TransactionalProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const queryParams = {
      _sort: "createdAt",
      _order: "desc",
      q: query || "",
    };

    try {
      const response = await api.post("fetchTransactions", queryParams);
      setTransactions(response.data);
    } catch (e) {
      console.error("Failed to fetch transactions:", e);
    }
  }

  async function createTransaction(data: CreateTransactionInput) {
    console.log("Creating transaction", data);
    const { description, price, category, type } = data;
    const response = await api.post("transactions", {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
