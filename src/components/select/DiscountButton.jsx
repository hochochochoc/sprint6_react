import React, { useState } from "react";
import { useBudget } from "../../contexts/BudgetContext";

const DiscountButton = () => {
  const { isAnnual, toggleIsAnnual } = useBudget();

  return (
    <div>
      <label className="flex justify-center cursor-pointer mt-3">
        <span className="mr-3 text-xs font-medium text-gray-900 dark:text-gray-300">
          Pagament mensual
        </span>
        <input
          type="checkbox"
          checked={isAnnual}
          onChange={toggleIsAnnual}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        <span className="ml-3 text-xs font-medium text-gray-900 dark:text-gray-300">
          Pagament anual
        </span>
      </label>
    </div>
  );
};

export default DiscountButton;
