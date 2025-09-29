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
      amount: "$500,000",
      percentage: 100,
      color: "bg-gray-500 text-white",
      isLast: false,
    },
    {
      id: 2,
      name: "Cleared Cheques",
      icon: CheckCircle,
      count: 100,
      amount: "$350,000",
      percentage: 70,
      color: "bg-lime-500 text-white",
      isLast: false,
    },
    {
      id: 3,
      name: "Returned Cheques",
      icon: XCircle,
      count: 10,
      amount: "$20,000",
      percentage: 7,
      color: "bg-red-500 text-white",
      isLast: false,
    },
    {
      id: 4,
      name: "In Processing",
      icon: Clock,
      count: 40,
      amount: "$130,000",
      percentage: 26,
      color: "bg-yellow-500 text-black",
      isLast: true,
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-black">
          Cheque Status
        </h3>
        <span className="text-xs sm:text-sm text-gray-500 cursor-pointer">
          + Add Cheque
        </span>
      </div>
      <div className="mb-4 sm:mb-6">
        <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Summary</p>
        <p className="text-xl sm:text-2xl font-bold text-black">150 cheques</p>
      </div>

      <ScrollArea className="h-[415px]">
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
                <div>
                  <span className="text-xs sm:text-sm font-medium text-black">
                    {status.count} cheques
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600 ml-2">
                    {status.percentage}%
                  </span>
                </div>
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
