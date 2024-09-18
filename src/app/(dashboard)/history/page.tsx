import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownLeft, RefreshCw } from "lucide-react";

type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: "deposit" | "withdrawal" | "transfer";
};

const TransactionHistory: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: "1",
      date: "2024-03-15",
      description: "Deposit",
      amount: 5000,
      type: "deposit",
    },
    {
      id: "2",
      date: "2024-03-14",
      description: "Withdrawal",
      amount: -150,
      type: "withdrawal",
    },
    {
      id: "3",
      date: "2024-03-13",
      description: "Payment",
      amount: -500,
      type: "transfer",
    },
    {
      id: "4",
      date: "2024-03-12",
      description: "Withdrawal",
      amount: -75,
      type: "withdrawal",
    },
    {
      id: "5",
      date: "2024-03-11",
      description: "Deposit",
      amount: 1000,
      type: "deposit",
    },
  ];

  const getTypeDetails = (type: Transaction["type"]) => {
    switch (type) {
      case "deposit":
        return {
          color: "text-green-600",
          icon: <ArrowDownLeft size={16} color="green" />,
        };
      case "withdrawal":
        return {
          color: "text-red-600",
          icon: <ArrowUpRight size={16} color="red" />,
        };
      case "transfer":
        return {
          color: "text-orange-600",
          icon: <RefreshCw size={16} color="orange" />,
        };
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Current Balance</h2>

      <h2 className="text-2xl font-bold mb-6">Transaction History</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[160px]">Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">
                  {transaction.date}
                </TableCell>
                <TableCell className={`flex items-center gap-1 `}>
                  {getTypeDetails(transaction.type).icon}
                  {transaction.description}
                </TableCell>
                <TableCell
                  className={`text-right ${
                    getTypeDetails(transaction.type).color
                  }
                  `}
                >
                  ${Math.abs(transaction.amount).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionHistory;
