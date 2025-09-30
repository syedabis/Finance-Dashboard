import React from "react";
import { MoreVertical } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

const ChequeActivity = () => {
  const todayActivities = [
    {
      id: 1,
      status: "Cleared",
      amount: "Rs 8,000",
      chequeNumber: "Chq#12335",
      payee: "Nuricon System",
      time: "2:04 AM",
      statusColor: "bg-green-500"
    },
    {
      id: 2,
      status: "Cleared",
      amount: "Rs 8,000",
      chequeNumber: "Chq#12335",
      payee: "Liaquat Traders",
      time: "2:04 AM",
      statusColor: "bg-green-500"
    },
    {
      id: 3,
      status: "Returned (Signature Mismatch)",
      amount: "Rs 8,000",
      chequeNumber: "Chq#12335",
      payee: "Liaquat Traders",
      time: "2:04 AM",
      statusColor: "bg-yellow-500"
    },
    {
      id: 2,
      status: "Cleared",
      amount: "Rs 8,000",
      chequeNumber: "Chq#12335",
      payee: "Liaquat Traders",
      time: "2:04 AM",
      statusColor: "bg-green-500"
    },
    {
      id: 3,
      status: "Returned (Signature Mismatch)",
      amount: "Rs 8,000",
      chequeNumber: "Chq#12335",
      payee: "Liaquat Traders",
      time: "2:04 AM",
      statusColor: "bg-yellow-500"
    }
  ];

  const yesterdayActivities = [
    {
      id: 4,
      status: "Cleared",
      amount: "Rs 8,000",
      chequeNumber: "Chq#12335",
      payee: "Nuricon System",
      time: "2:04 AM",
      statusColor: "bg-green-500"
    },
    {
      id: 5,
      status: "Cleared",
      amount: "Rs 8,000",
      chequeNumber: "Chq#12335",
      payee: "Liaquat Traders",
      time: "2:04 AM",
      statusColor: "bg-green-500"
    },
    {
      id: 6,
      status: "Returned (Signature Mismatch)",
      amount: "Rs 8,000",
      chequeNumber: "Chq#12335",
      payee: "Liaquat Traders",
      time: "2:04 AM",
      statusColor: "bg-yellow-500"
    },
    {
      id: 7,
      status: "Returned (Signature Mismatch)",
      amount: "Rs 8,000",
      chequeNumber: "Chq#12335",
      payee: "Liaquat Traders",
      time: "2:04 AM",
      statusColor: "bg-yellow-500"
    },
    {
      id: 6,
      status: "Returned (Signature Mismatch)",
      amount: "Rs 8,000",
      chequeNumber: "Chq#12335",
      payee: "Liaquat Traders",
      time: "2:04 AM",
      statusColor: "bg-yellow-500"
    },
    {
      id: 7,
      status: "Returned (Signature Mismatch)",
      amount: "Rs 8,000",
      chequeNumber: "Chq#12335",
      payee: "Liaquat Traders",
      time: "2:04 AM",
      statusColor: "bg-yellow-500"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-black">Recent Activity</h3>
        <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
      </div>

      {/* Today Section */}
      <ScrollArea className="h-[575px]">
      <div className="mb-3 sm:mb-4">
        <span className="text-xs sm:text-sm text-gray-600">Today</span>
      </div>
      <div className="mb-4 sm:mb-6">
        <div className="space-y-3 sm:space-y-4">
          {todayActivities.map((activity, index) => {
            return (
              <div key={activity.id} className="flex items-start gap-2 sm:gap-3">
                <div>
                  <div className={`w-6 h-6 rounded-full ${activity.statusColor}`}></div>
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-black">
                    {activity.status} - {activity.amount} - {activity.chequeNumber} ({activity.payee}) - {activity.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Yesterday Section */}
      <div className="mb-3 sm:mb-4">
        <span className="text-xs sm:text-sm text-gray-600">Yesterday</span>
      </div>
      <div>
        <div className="space-y-3 sm:space-y-4">
          {yesterdayActivities.map((activity, index) => {
            return (
              <div key={activity.id} className="flex items-start gap-2 sm:gap-3">
                <div>
                  <div className={`w-6 h-6 rounded-full ${activity.statusColor}`}></div>
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-black">
                    {activity.status} - {activity.amount} - {activity.chequeNumber} ({activity.payee}) - {activity.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </ScrollArea>
    </div>
  );
};

export default ChequeActivity;
