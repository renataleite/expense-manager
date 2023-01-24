import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionalContextType {
  transactions: Transaction[];
}

interface TransactionalProviderProps {
  children: ReactNode;
}
export const TransactionsContext = createContext(
  {} as TransactionalContextType
);

export function TransactionsProvider({ children }: TransactionalProviderProps) {
  const [transactions, setTransaction] = useState<Transaction[]>([]);
  async function loadTransactions() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();

    console.log(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
