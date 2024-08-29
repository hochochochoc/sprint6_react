import React from "react";
import { useBudget } from "../../contexts/BudgetContext";
import { checkboxData } from "../../data/checkboxData";
import PageLangInputs from "./PageLangInput";
import DiscountButton from "./DiscountButton";

const ServiceSelection = () => {
  const {
    selectedServices,
    setSelectedServices,
    pageCount,
    setPageCount,
    languageCount,
    setLanguageCount,
    isAnnual,
    handleCheckboxChange,
  } = useBudget();

  const calculatePrice = (price) => {
    if (isAnnual) {
      return (price * 0.8).toFixed(0);
    }
    return price;
  };

  return (
    <div>
      <DiscountButton />
      {checkboxData.map(({ title, description, price }) => (
        <div key={title}>
          <div className="my-8 flex w-auto flex-col rounded-lg border border-gray-100 py-6 shadow-lg">
            <div>
              <div className="flex justify-between">
                <div className="ml-3 flex flex-col  pr-1 md:ml-7 md:pr-0">
                  <h2 className="text-xl font-bold">{title}</h2>
                  <p className="md:text-md text-sm">{description}</p>
                </div>

                <div className="flex items-center text-2xl flex-col">
                  <div className="text-sm font-semibold text-orange-400 text-center">
                    {isAnnual && <p>Ahorra un 20%</p>}
                    {!isAnnual && <br></br>}
                  </div>
                  <div className=" font-bold flex flex-row">
                    <span className="text-md  md:text-2xl">
                      {calculatePrice(price)}
                    </span>
                    <span className="flex items-end pb-0.5 text-sm">€</span>
                  </div>
                </div>

                <div className="ml-4 mr-3 flex items-center md:mr-7">
                  <input
                    type="checkbox"
                    className="accent-green-600"
                    id={title}
                    checked={selectedServices[title] || false}
                    onChange={() => handleCheckboxChange(title)}
                  />
                  <p className="mb-1 ml-2 hidden text-sm md:block">Afegir</p>
                </div>
              </div>
              {title === "Web" && selectedServices.Web && <PageLangInputs />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSelection;
