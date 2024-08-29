import React from "react";
import { useBudget } from "../../contexts/BudgetContext";

const TotalPrice = () => {
  const { totalPrice } = useBudget();

  return (
    <div className="flex w-full justify-end font-bold">
      <div className="mb-5 mr-2 flex w-full justify-between md:w-2/5">
        <span className="items-start text-xl">Preu pressuposat:</span>
        <div className="flex items-end">
          <span className="text-2xl"> {totalPrice}</span>
          <span className="pb-0.5 text-sm">€</span>
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
