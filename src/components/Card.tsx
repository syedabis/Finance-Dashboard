import React from "react";

const Card = () => {
  return (
    <div className="bg-black rounded-2xl p-4 sm:p-6 text-white relative overflow-hidden">
      <div className="flex justify-between items-start mb-4 sm:mb-6">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center">
          <span className="text-black font-bold text-sm sm:text-lg">S</span>
        </div>
        <div className="flex space-x-1">
          <div className="w-1 h-4 sm:h-6 bg-lime-400 rounded-full"></div>
          <div className="w-1 h-4 sm:h-6 bg-lime-400 rounded-full"></div>
          <div className="w-1 h-4 sm:h-6 bg-lime-400 rounded-full"></div>
        </div>
      </div>
      <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Danielle M.</h3>

      <div className="flex justify-between text-sm">
        <div className="flex flex-col gap-1 sm:gap-2 mb-3 sm:mb-4">
          <p className="text-xs sm:text-sm text-gray-300">Balance Amount</p>
          <div className="text-2xl sm:text-4xl font-bold">$562,000</div>
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-6">
          <div>
            <p className="text-xs sm:text-sm text-gray-300">EXP</p>
            <p className="text-xs sm:text-sm">11/29</p>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-300">CVV</p>
            <p className="text-xs sm:text-sm">323</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
