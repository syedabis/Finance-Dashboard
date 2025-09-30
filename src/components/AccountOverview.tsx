import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LuNfc } from "react-icons/lu";

const AccountOverview = () => {
  return (
    <div className="bg-black rounded-2xl p-4 sm:p-6 text-white relative overflow-hidden">
      <div className="flex justify-between items-start mb-4 sm:mb-6">
        <div className="rounded-lg flex items-center justify-center gap-2">
          <Avatar>
            <AvatarImage src="/images/boy.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h3 className="text-base sm:text-lg font-medium">Abis Hussain</h3>
        </div>
        <LuNfc className="text-xl sm:text-3xl text-lime-400" />
      </div>

      <div className="space-y-3 sm:space-y-4">
        {/* Total Cheques Issued */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs sm:text-sm text-gray-300">Total Cheques Issued</p>
            <p className="text-lg sm:text-xl font-bold">150 cheques</p>
          </div>
          <div className="text-right">
            <p className="text-xs sm:text-sm text-gray-300">Value</p>
            <p className="text-lg sm:text-xl font-bold">$500,000</p>
          </div>
        </div>

        {/* Pending Amount */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs sm:text-sm text-gray-300">Pending Amount</p>
            <p className="text-lg sm:text-xl font-bold text-yellow-400">$130,000</p>
          </div>
          <div className="text-right">
            <p className="text-xs sm:text-sm text-gray-300">40 cheques</p>
          </div>
        </div>

        {/* Cleared Amount */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs sm:text-sm text-gray-300">Cleared Amount</p>
            <p className="text-lg sm:text-xl font-bold text-lime-400">$350,000</p>
          </div>
          <div className="text-right">
            <p className="text-xs sm:text-sm text-gray-300">100 cheques</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
