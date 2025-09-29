import React from "react";
import { MoreVertical } from "lucide-react";

const Limit = () => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 h-[280px] flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h3 className="text-base sm:text-lg font-semibold text-black">Daily Limit</h3>
          <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
        </div>
        <div className="text-xl sm:text-2xl font-bold text-black mb-2">$2,500.00</div>
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <span className="text-xs sm:text-sm text-gray-600">spent of $20,000.00</span>
          <span className="text-xs sm:text-sm font-medium text-black">12.5%</span>
        </div>
      </div>
      
      <div className="w-full bg-lime-400 rounded-xl h-12 sm:h-16">
        <div className="flex h-12 sm:h-16">
          <div className="bg-black w-8 sm:w-10 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Limit;
