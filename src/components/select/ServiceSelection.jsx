import React from "react";
import { useBudget } from "../../contexts/BudgetContext";
import { checkboxData } from "../../data/checkboxData";
import PageLangInputs from "./PageLangInput";
import DiscountButton from "./DiscountButton";

const ServiceSelection = () => {
  const { selectedServices, isAnnual, handleCheckboxChange } = useBudget();

  const calculatePrice = (price) => {
    if (isAnnual) {
      return (price * 0.8).toFixed(0);
    }
    return price;
  };

  return (
    <div className="space-y-6">
      <DiscountButton />
      {checkboxData.map(({ title, description, price }) => (
        <div
          key={title}
          className="transform transition-all duration-200 hover:scale-[1.02]"
        >
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
              {/* Title and Description */}
              <div className="flex-1 space-y-2">
                <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                <p className="text-sm text-gray-600 md:text-base">
                  {description}
                </p>
              </div>

              {/* Price Section */}
              <div className="flex items-center justify-between space-x-4 md:flex-col md:items-end">
                <div className="text-center">
                  {isAnnual && (
                    <p className="mb-1 text-sm font-medium text-orange-500">
                      Ahorra un 20%
                    </p>
                  )}
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl font-bold text-gray-900 md:text-3xl">
                      {calculatePrice(price)}
                    </span>
                    <span className="ml-1 text-lg text-gray-600">€</span>
                  </div>
                </div>

                {/* Checkbox */}
                <label className="flex cursor-pointer items-center space-x-3">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded border-gray-300 text-green-600 transition-colors focus:ring-green-500"
                    checked={selectedServices[title] || false}
                    onChange={() => handleCheckboxChange(title)}
                  />
                  <span className="hidden text-sm text-gray-700 md:inline">
                    Afegir
                  </span>
                </label>
              </div>
            </div>

            {/* Language Inputs */}
            {title === "Web" && selectedServices.Web && (
              <div className="mt-6 border-t border-gray-100 pt-6">
                <PageLangInputs />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSelection;
