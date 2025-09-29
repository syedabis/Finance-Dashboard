import React from "react";
import { Plus, ArrowUpDown, DollarSign, Clock } from "lucide-react";

const ActionButtons = () => {
  return (
    <div className="grid grid-cols-2 h-[280px]">
      <div className="bg-gray-100 rounded-tl-2xl border-b border-r border-white p-3 sm:p-5 flex flex-col items-center justify-center cursor-pointer">
        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3">
          <Plus className="w-6 h-6 sm:w-10 sm:h-10 text-black" />
        </div>
        <span className="text-xs sm:text-sm font-medium text-black">Top Up</span>
      </div>
      <div className="bg-gray-100 rounded-tr-2xl p-3 sm:p-5 flex flex-col items-center justify-center cursor-pointer">
        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3">
          <ArrowUpDown className="w-6 h-6 sm:w-10 sm:h-10 text-black" />
        </div>
        <span className="text-xs sm:text-sm font-medium text-black">Transfer</span>
      </div>
      <div className="bg-gray-100 rounded-bl-2xl p-3 sm:p-5 flex flex-col items-center justify-center cursor-pointer">
        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3">
          <DollarSign className="w-6 h-6 sm:w-10 sm:h-10 text-black" />
        </div>
        <span className="text-xs sm:text-sm font-medium text-black">Request</span>
      </div>
      <div className="bg-gray-100 rounded-br-2xl border-t border-l border-white p-3 sm:p-5 flex flex-col items-center justify-center cursor-pointer">
        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3">
          <Clock className="w-6 h-6 sm:w-10 sm:h-10 text-black" />
        </div>
        <span className="text-xs sm:text-sm font-medium text-black">History</span>
      </div>
    </div>
  );
};

export default ActionButtons;
