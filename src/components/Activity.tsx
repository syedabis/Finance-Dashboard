import React from "react";
import { MoreVertical } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Activity = () => {
  const todayActivities = [
    {
      id: 1,
      name: "Jamie Smith",
      action: "updated account settings",
      time: "16:05"
    },
    {
      id: 2,
      name: "Alex Johnson",
      action: "logged in",
      time: "13:05"
    },
    {
      id: 3,
      name: "Morgan Lee",
      action: "added a new savings goal for vacation",
      time: "02:05"
    }
  ];

  const yesterdayActivities = [
    {
      id: 4,
      name: "Taylor Green",
      action: "reviewed recent transactions",
      time: "21:05"
    },
    {
      id: 5,
      name: "Wilson Baptista",
      action: "transferred funds to emergency fund",
      time: "09:05"
    },
    {
      id: 6,
      name: "Sarah Johnson",
      action: "updated payment method",
      time: "18:30"
    },
    {
      id: 7,
      name: "Michael Chen",
      action: "created new budget category",
      time: "15:45"
    },
    {
      id: 8,
      name: "Emma Davis",
      action: "set up automatic savings",
      time: "12:20"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-black">Recent Activity</h3>
        <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
      </div>

      {/* Today Section */}
      <div className="mb-3 sm:mb-4">
        <span className="text-xs sm:text-sm text-gray-600">Today</span>
      </div>
      <div className="relative mb-4 sm:mb-6">
        {/* Timeline line - stops before last item */}
        <div className="absolute left-3 sm:left-4 top-0 w-px bg-gray-300" style={{ height: `${(todayActivities.length - 1) * 3.5}rem` }}></div>
        
        <div className="space-y-3 sm:space-y-4">
          {todayActivities.map((activity, index) => (
            <div key={activity.id} className="flex items-start gap-2 sm:gap-3 relative">
              <div className="relative z-10">
                <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt={activity.name} />
                  <AvatarFallback>{activity.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-black">
                  <span className="font-semibold">{activity.name}</span> {activity.action}
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Yesterday Section */}
      <div className="mb-3 sm:mb-4">
        <span className="text-xs sm:text-sm text-gray-600">Yesterday</span>
      </div>
      <div className="relative">
        {/* Timeline line - stops before last item */}
        <div className="absolute left-3 sm:left-4 top-0 w-px bg-gray-300" style={{ height: `${(yesterdayActivities.length - 1) * 3.5}rem` }}></div>
        
        <div className="space-y-3 sm:space-y-4">
          {yesterdayActivities.map((activity, index) => (
            <div key={activity.id} className="flex items-start gap-2 sm:gap-3 relative">
              <div className="relative z-10">
                <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt={activity.name} />
                  <AvatarFallback>{activity.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-black">
                  <span className="font-semibold">{activity.name}</span> {activity.action}
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;
