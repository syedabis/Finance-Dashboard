import React from "react";
import { MoreVertical } from "lucide-react";

const Limit = () => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 h-[280px] flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h3 className="text-base sm:text-lg font-semibold text-black">💳 Daily Spending Limit</h3>
          <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">🔄 Used Today:</span>
            <span className="text-sm font-medium text-black">$2,500 / $20,000</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">📅 Period:</span>
            <span className="text-sm font-medium text-black">Sept 30, 2025</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">🟩 Progress:</span>
            <span className="text-sm font-medium text-black">12.5%</span>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-green-500 h-3 rounded-full" style={{ width: '12.5%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800 flex items-center gap-2">
          <span>⚠️</span>
          <span>Warning: You are nearing your daily limit!</span>
        </p>
      </div>
    </div>
  );
};

export default Limit;
