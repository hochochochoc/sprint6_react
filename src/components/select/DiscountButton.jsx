import React from "react";
import { useBudget } from "../../contexts/BudgetContext";

const DiscountButton = () => {
  const { isAnnual, toggleIsAnnual } = useBudget();

  return (
    <div className="flex justify-center py-4">
      <label className="group flex items-center space-x-4 cursor-pointer">
        <span
          className={`text-sm font-medium transition-colors duration-200 ${
            !isAnnual ? "text-gray-900" : "text-gray-500"
          }`}
        >
          Pagament mensual
        </span>

        <div className="relative">
          <input
            type="checkbox"
            checked={isAnnual}
            onChange={toggleIsAnnual}
            className="sr-only peer"
          />
          <div
            className="h-7 w-14 rounded-full bg-gray-200 transition-colors duration-200 
                        peer-focus:ring-4 peer-focus:ring-green-100
                        peer-checked:bg-green-500"
          ></div>
          <div
            className="absolute left-1 top-1 h-5 w-5 transform rounded-full 
                        bg-white shadow-md transition-transform duration-200 
                        peer-checked:translate-x-7"
          ></div>
        </div>

        <span
          className={`text-sm font-medium transition-colors duration-200 ${
            isAnnual ? "text-gray-900" : "text-gray-500"
          }`}
        >
          Pagament anual
        </span>
      </label>
    </div>
  );
};

export default DiscountButton;
