import React from "react";
import {
  MoreVertical,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChequeStatusSummary = () => {
  const chequeStatuses = [
    {
      id: 1,
      name: "Issued Cheques",
      icon: FileText,
      count: 150,
      amount: "Rs 500,000",
      percentage: 100,
      color: "bg-gray-500 text-white",
      isLast: false,
    },
    {
      id: 2,
      name: "Cleared Cheques",
      icon: CheckCircle,
      count: 100,
      amount: "Rs 350,000",
      percentage: 70,
      color: "bg-lime-500 text-white",
      isLast: false,
    },
    {
      id: 3,
      name: "Returned Cheques",
      icon: XCircle,
      count: 10,
      amount: "Rs 20,000",
      percentage: 7,
      color: "bg-red-500 text-white",
      isLast: false,
    },
    {
      id: 4,
      name: "In Processing",
      icon: Clock,
      count: 40,
      amount: "Rs 130,000",
      percentage: 26,
      color: "bg-yellow-500 text-black",
      isLast: true,
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
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
              Rs 500,000
            </span>
          </div>
        </div>
      </div>

      <ScrollArea className="h-[380px]">
        {chequeStatuses.map((status) => {
          const IconComponent = status.icon;
          return (
            <div
              key={status.id}
              className={`bg-white border border-gray-200 rounded-xl p-3 sm:p-4 ${
                status.isLast ? "" : "mb-3 sm:mb-4"
              }`}
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-black">
                    {status.name}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-black">
                    ({status.count} cheques)
                  </span>
                </div>
                <MoreVertical className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              </div>
              <div className="w-full mb-2 sm:mb-3">
                <Progress
                  value={status.percentage}
                  className="h-2 sm:h-3 bg-lime-400 [&>div]:bg-black [&>div]:rounded-full"
                />
              </div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs sm:text-sm text-gray-600">
                  {status.amount}
                </span>
              </div>
            </div>
          );
        })}
      </ScrollArea>
    </div>
  );
};

export default ChequeStatusSummary;
