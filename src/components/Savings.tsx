import React from "react";
import { AlertTriangle, MoreVertical, Luggage, Home } from "lucide-react";
import { SlPlane } from "react-icons/sl";
import { Progress } from "@/components/ui/progress";


const Savings = () => {
  const savingPlans = [
    {
      id: 1,
      name: "Emergency Fund",
      icon: AlertTriangle,
      currentAmount: "$5,000",
      percentage: 50,
      targetAmount: "$10,000",
      isLast: false
    },
    {
      id: 2,
      name: "Vacation Fund",
      icon: SlPlane,
      currentAmount: "$3,000",
      percentage: 60,
      targetAmount: "$5,000",
      isLast: false
    },
    {
      id: 3,
      name: "Home Down Payment",
      icon: Home,
      currentAmount: "$7,250",
      percentage: 36,
      targetAmount: "$20,000",
      isLast: true
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-black">Saving Plans</h3>
        <span className="text-xs sm:text-sm text-gray-500 cursor-pointer">+ Add Plan</span>
      </div>
      <div className="mb-4 sm:mb-6">
        <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Savings</p>
        <p className="text-xl sm:text-2xl font-bold text-black">$84,500</p>
      </div>

      {savingPlans.map((plan) => {
        const IconComponent = plan.icon;
        return (
          <div 
            key={plan.id}
            className={`bg-white border border-gray-200 rounded-xl p-3 sm:p-4 ${plan.isLast ? '' : 'mb-3 sm:mb-4'}`}
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-black">
                  {plan.name}
                </span>
              </div>
              <MoreVertical className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
            </div>
            <div className="w-full mb-2 sm:mb-3">
              <Progress 
                value={plan.percentage} 
                className="h-2 sm:h-3 bg-lime-400 [&>div]:bg-black [&>div]:rounded-full"
              />
            </div>
            <div className="flex justify-between items-center mb-1">
              <div>
                <span className="text-xs sm:text-sm font-medium text-black">{plan.currentAmount}</span>
                <span className="text-xs sm:text-sm text-gray-600 ml-2">{plan.percentage}%</span>
              </div>
              <span className="text-xs sm:text-sm text-gray-600">Target: {plan.targetAmount}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Savings;
