import React from "react";
import { ChevronDown } from "lucide-react";

const Statistics = () => {
  const expenseBreakdown = [
    {
      id: 1,
      name: "Rent & Living",
      percentage: 60,
      amount: "$2,100",
      color: "bg-black text-white",
    },
    {
      id: 2,
      name: "Investment",
      percentage: 15,
      amount: "$525",
      color: "bg-lime-500 text-white",
    },
    {
      id: 3,
      name: "Education",
      percentage: 12,
      amount: "$420",
      color: "bg-gray-300 text-black",
    },
    {
      id: 4,
      name: "Food & Drink",
      percentage: 8,
      amount: "$280",
      color: "bg-gray-400 text-black",
    },
    {
      id: 5,
      name: "Entertainment",
      percentage: 5,
      amount: "$175",
      color: "bg-gray-500 text-white",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-black">Statistic</h3>
        <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 cursor-pointer">
          <span>This Month</span>
          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
        </div>
      </div>
      <div className="mb-4 sm:mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs sm:text-sm text-gray-500">Income ($4,800)</span>
          <span className="text-xs sm:text-sm text-lime-500 font-medium">
            Expense ($3,500)
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div className="flex h-1">
            <div
              className="bg-gray-300 rounded-l-full"
              style={{ width: "43%" }}
            ></div>
            <div
              className="bg-lime-500 rounded-r-full"
              style={{ width: "57%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-6 sm:mb-10 mt-3 sm:mt-4">
        <div className="relative w-32 h-32 sm:w-48 sm:h-48">
          {/* Donut Chart */}
          <svg className="w-32 h-32 sm:w-48 sm:h-48 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="12"
            />
            {/* Black segment (60%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#000000"
              strokeWidth="12"
              strokeDasharray={`${2 * Math.PI * 40 * 0.6} ${2 * Math.PI * 40}`}
              strokeLinecap="round"
            />
            {/* Lime green segment (15%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#84cc16"
              strokeWidth="12"
              strokeDasharray={`${2 * Math.PI * 40 * 0.15} ${2 * Math.PI * 40}`}
              strokeDashoffset={`-${2 * Math.PI * 40 * 0.6}`}
              strokeLinecap="round"
            />
            {/* Light gray segment 1 (12%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#d1d5db"
              strokeWidth="12"
              strokeDasharray={`${2 * Math.PI * 40 * 0.12} ${2 * Math.PI * 40}`}
              strokeDashoffset={`-${2 * Math.PI * 40 * 0.75}`}
              strokeLinecap="round"
            />
            {/* Light gray segment 2 (8%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#d1d5db"
              strokeWidth="12"
              strokeDasharray={`${2 * Math.PI * 40 * 0.08} ${2 * Math.PI * 40}`}
              strokeDashoffset={`-${2 * Math.PI * 40 * 0.87}`}
              strokeLinecap="round"
            />
            {/* Light gray segment 3 (5%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#d1d5db"
              strokeWidth="12"
              strokeDasharray={`${2 * Math.PI * 40 * 0.05} ${2 * Math.PI * 40}`}
              strokeDashoffset={`-${2 * Math.PI * 40 * 0.95}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs text-gray-600">Total Expense</span>
            <span className="text-sm sm:text-lg font-bold text-black">$3,500</span>
          </div>
        </div>
      </div>

      {/* Expense Breakdown */}
      <div className="space-y-2 sm:space-y-3">
        {expenseBreakdown.map((expense) => (
          <div key={expense.id} className="flex justify-between items-center">
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              <div className={`p-1 sm:p-2 w-8 h-6 sm:w-10 sm:h-8 mr-1 sm:mr-2 ${expense.color} text-xs rounded-md`}>
                {expense.percentage}%
              </div>
              <span className="text-sm sm:text-lg text-black">{expense.name}</span>
            </div>
            <span className="text-xs font-medium text-black">
              {expense.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
