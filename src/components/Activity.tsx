import React from "react";
import { MoreVertical, FileText, CheckCircle, XCircle } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "./ui/scroll-area";

const ChequeActivity = () => {
  const todayActivities = [
    {
      id: 1,
      name: "John Smith",
      image: "/images/boy.png",
      action: "issued cheque #12345 for $5,000",
      time: "16:05",
      icon: FileText,
      color: "text-blue-500"
    },
    {
      id: 2,
      name: "System",
      image: "/images/girl.png",
      action: "cheque #12340 returned due to insufficient funds",
      time: "13:05",
      icon: XCircle,
      color: "text-red-500"
    },
    {
      id: 3,
      name: "Bank",
      image: "/images/boy.png",
      action: "cheque #12335 cleared for $8,000",
      time: "02:05",
      icon: CheckCircle,
      color: "text-lime-500"
    }
  ];

  const yesterdayActivities = [
    {
      id: 4,
      name: "John Smith",
      image: "/images/boy.png",
      action: "issued cheque #12298 for $3,500",
      time: "21:05",
      icon: FileText,
      color: "text-blue-500"
    },
    {
      id: 5,
      name: "Bank",
      image: "/images/girl.png",
      action: "cheque #12295 cleared for $12,000",
      time: "09:05",
      icon: CheckCircle,
      color: "text-lime-500"
    },
    {
      id: 6,
      name: "System",
      image: "/images/girl.png",
      action: "cheque #12290 returned - signature mismatch",
      time: "18:30",
      icon: XCircle,
      color: "text-red-500"
    },
    {
      id: 7,
      name: "John Smith",
      image: "/images/boy.png",
      action: "issued cheque #12285 for $7,200",
      time: "15:45",
      icon: FileText,
      color: "text-blue-500"
    },
    {
      id: 8,
      name: "Bank",
      image: "/images/girl.png",
      action: "cheque #12280 cleared for $4,500",
      time: "12:20",
      icon: CheckCircle,
      color: "text-lime-500"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-black">Recent Activity</h3>
        <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
      </div>

      {/* Today Section */}
      <ScrollArea className="h-[500px]">
      <div className="mb-3 sm:mb-4">
        <span className="text-xs sm:text-sm text-gray-600">Today</span>
      </div>
      <div className="relative mb-4 sm:mb-6">
        {/* Timeline line - stops before last item */}
        <div className="absolute left-3 sm:left-4 top-0 w-px bg-gray-300" style={{ height: `${(todayActivities.length - 1) * 4}rem` }}></div>
        
        <div className="space-y-3 sm:space-y-4">
          {todayActivities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div key={activity.id} className="flex items-start gap-2 sm:gap-3 relative">
                <div className="relative z-10">
                  <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                    <AvatarImage src={activity.image} alt={activity.name} />
                    <AvatarFallback>{activity.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-black">
                    <span className="font-semibold">{activity.name}</span> {activity.action}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <IconComponent className={`w-3 h-3 ${activity.color}`} />
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
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
      <div className="relative">
        {/* Timeline line - stops before last item */}
        <div className="absolute left-3 sm:left-4 top-0 w-px bg-gray-300" style={{ height: `${(yesterdayActivities.length - 1) * 4}rem` }}></div>
        
        <div className="space-y-3 sm:space-y-4">
          {yesterdayActivities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div key={activity.id} className="flex items-start gap-2 sm:gap-3 relative">
                <div className="relative z-10">
                  <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                    <AvatarImage src={activity.image} alt={activity.name} />
                    <AvatarFallback>{activity.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-black">
                    <span className="font-semibold">{activity.name}</span> {activity.action}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <IconComponent className={`w-3 h-3 ${activity.color}`} />
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
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
