import React from "react";
import { ChevronDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Statistics = () => {
  const chequeBreakdown = [
    {
      id: 1,
      name: "Cleared",
      percentage: 70,
      amount: "$350,000",
      color: "bg-lime-400 text-black",
    },
    {
      id: 2,
      name: "In Processing",
      percentage: 26,
      amount: "$130,000",
      color: "bg-black text-white",
    },
    {
      id: 3,
      name: "Returned",
      percentage: 4,
      amount: "$20,000",
      color: "bg-gray-500 text-white",
    },
    {
      id: 4,
      name: "In Processing",
      percentage: 26,
      amount: "$130,000",
      color: "bg-black text-white",
    },
    {
      id: 5,
      name: "Returned",
      percentage: 4,
      amount: "$20,000",
      color: "bg-gray-500 text-white",
    },
    {
      id: 6,
      name: "In Processing",
      percentage: 26,
      amount: "$130,000",
      color: "bg-black text-white",
    },
    {
      id: 7,
      name: "Returned",
      percentage: 4,
      amount: "$20,000",
      color: "bg-gray-500 text-white",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-black">
          Cheque Statistics
        </h3>
        <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 cursor-pointer">
          <span>This Month</span>
          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
        </div>
      </div>
      <div className="mb-4 sm:mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs sm:text-sm text-gray-500">
            Total Issued ($500,000)
          </span>
          <span className="text-xs sm:text-sm text-lime-500 font-medium">
            Cleared ($350,000)
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div className="flex h-1">
            <div
              className="bg-lime-400 rounded-l-full"
              style={{ width: "70%" }}
            ></div>
            <div className="bg-black" style={{ width: "26%" }}></div>
            <div
              className="bg-gray-500 rounded-r-full"
              style={{ width: "4%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-6 sm:mb-10 mt-3 sm:mt-4">
        <div className="relative w-32 h-32 sm:w-48 sm:h-48">
          {/* Donut Chart */}
          <svg
            className="w-32 h-32 sm:w-48 sm:h-48 transform -rotate-90"
            viewBox="0 0 100 100"
          >
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="12"
            />
            {/* Cleared segment (70%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#a3e635"
              strokeWidth="12"
              strokeDasharray={`${2 * Math.PI * 40 * 0.7} ${2 * Math.PI * 40}`}
              strokeLinecap="round"
            />
            {/* In Processing segment (26%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#000000"
              strokeWidth="12"
              strokeDasharray={`${2 * Math.PI * 40 * 0.26} ${2 * Math.PI * 40}`}
              strokeDashoffset={`-${2 * Math.PI * 40 * 0.7}`}
              strokeLinecap="round"
            />
            {/* Returned segment (4%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#6b7280"
              strokeWidth="12"
              strokeDasharray={`${2 * Math.PI * 40 * 0.04} ${2 * Math.PI * 40}`}
              strokeDashoffset={`-${2 * Math.PI * 40 * 0.96}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs text-gray-600">Total Value</span>
            <span className="text-sm sm:text-lg font-bold text-black">
              $500,000
            </span>
          </div>
        </div>
      </div>

      {/* Cheque Breakdown */}
      <ScrollArea className="h-[210px]">
        <div className="space-y-2 sm:space-y-3">
          {chequeBreakdown.map((cheque) => (
            <div key={cheque.id} className="flex justify-between items-center">
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <div
                  className={`p-1 sm:p-2 w-8 h-6 sm:w-10 sm:h-8 mr-1 sm:mr-2 ${cheque.color} text-xs rounded-md`}
                >
                  {cheque.percentage}%
                </div>
                <span className="text-sm sm:text-lg text-black">
                  {cheque.name}
                </span>
              </div>
              <span className="text-xs font-medium text-black">
                {cheque.amount}
              </span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Statistics;
