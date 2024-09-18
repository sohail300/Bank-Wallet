"use client";
import React, { useState } from "react";
import {
  Home,
  ArrowUpCircle,
  ArrowDownCircle,
  RefreshCw,
  History,
} from "lucide-react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabs = [
    { name: "Dashboard", link: "dashboard", icon: <Home size={20} /> },
    { name: "Deposit", link: "deposit", icon: <ArrowUpCircle size={20} /> },
    { name: "Withdraw", link: "withdraw", icon: <ArrowDownCircle size={20} /> },
    { name: "Transfer", link: "transfer", icon: <RefreshCw size={20} /> },
    {
      name: "Transaction History",
      link: "history",
      icon: <History size={20} />,
    },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">My Wallet</h2>
      </div>
      <nav className="flex-1">
        <ul>
          {tabs.map((tab) => (
            <li key={tab.name}>
              <Link href={`/${tab.link}`}>
                <button
                  onClick={() => setActiveTab(tab.name)}
                  className={`w-full flex items-center px-4 py-3 text-left transition-colors duration-200
                  ${
                    activeTab === tab.name
                      ? "bg-gray-100 text-green-600 border-r-4 border-green-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="mr-3">{tab.icon}</span>
                  <span className="text-sm font-medium">{tab.name}</span>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
