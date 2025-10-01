import React from "react";
import { MoreVertical } from "lucide-react";
import { MdOutlineToday } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { GiDuration } from "react-icons/gi";
import { IoCardOutline } from "react-icons/io5";
import { IoWarning } from "react-icons/io5";


const Limit = () => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 h-[280px] flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h3 className="text-base sm:text-lg font-semibold text-black flex items-center"><IoCardOutline className="w-4 h-4 mr-2 sm:w-5 sm:h-5 text-black" /> Daily Spending Limit</h3>
          <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 flex gap-2"><MdOutlineToday className="w-4 h-4 sm:w-5 sm:h-5 text-black" /> Used Today:</span>
            <span className="text-sm font-medium text-black">Rs 2,500 / Rs 20,000</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 flex gap-2"><GiDuration className="w-4 h-4 sm:w-5 sm:h-5 text-black" /> Period:</span>
            <span className="text-sm font-medium text-black">Sept 30, 2025</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 flex gap-2"><GiProgression className="w-4 h-4 sm:w-5 sm:h-5 text-black" /> Progress:</span>
            <span className="text-sm font-medium text-black">12.5%</span>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-lime-400 h-3 rounded-full" style={{ width: '12.5%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-md text-yellow-800 flex items-center gap-2">
          <IoWarning className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
          <span>Warning: You are nearing your daily limit!</span>
        </p>
      </div>
    </div>
  );
};

export default Limit;
