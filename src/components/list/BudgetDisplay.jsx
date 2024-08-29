import React, { useState } from "react";
import { useBudget } from "../../contexts/BudgetContext";

const BudgetDisplay = () => {
  const { budgets, setBudgets } = useBudget();
  const [isHighToLow, setIsHighToLow] = useState(true);
  const [searchedName, setSearchedName] = useState("");
  const [glassClicked, setGlassClicked] = useState(false);
  const [isAlphabetical, setIsAlphabetical] = useState(true);
  const [isAscending, setIsAscending] = useState(true);
  const [focusedSorter, setFocusedSorter] = useState(null);

  const sortBudgetsOrder = () => {
    setBudgets((prev) =>
      [...prev].sort((a, b) => {
        if (isAscending) {
          return a.timestamp - b.timestamp;
        } else if (!isAscending) {
          return b.timestamp - a.timestamp;
        }
      })
    );

    setIsAscending(!isAscending);
  };

  const sortBudgetsName = () => {
    setBudgets((prev) =>
      [...prev].sort((a, b) => {
        if (isAlphabetical) {
          return a.name.localeCompare(b.name);
        } else if (!isAlphabetical) {
          return b.name.localeCompare(a.name);
        }
      })
    );
    setIsAlphabetical(!isAlphabetical);
  };

  const sortBudgetsPrice = () => {
    setBudgets((prev) =>
      [...prev].sort((a, b) => {
        if (isHighToLow) {
          return b.totalPrice - a.totalPrice;
        } else if (!isHighToLow) {
          return a.totalPrice - b.totalPrice;
        }
      })
    );
    setIsHighToLow(!isHighToLow);
  };

  const filteredBudgets = budgets.filter((budget) =>
    budget.name.toLowerCase().includes(searchedName.toLowerCase())
  );

  return (
    <div className=" flex w-auto flex-col py-6 ">
      <h2 className="text-xl font-bold">Pressupostos en curs:</h2>
      <div className="flex flex-row justify-center md:justify-end space-x-3">
        {glassClicked && (
          <input
            className="mr-3 focus:shadow-outline w-1/5 md:w-100 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            required
            value={searchedName}
            placeholder="Nom buscat"
            onChange={(e) => setSearchedName(e.target.value)}
          />
        )}
        <button onClick={() => setGlassClicked(!glassClicked)}>
          <svg
            className="w-6"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            ></path>
          </svg>
        </button>
        <button
          onClick={() => sortBudgetsOrder()}
          className="focus:font-bold focus:outline-none"
          onFocus={() => setFocusedSorter("order")}
          onBlur={() => setFocusedSorter(null)}
        >
          Data{" "}
          <span
            className={`inline-flex items-center ${
              focusedSorter === "order" ? "block" : "hidden"
            }`}
          >
            <svg
              className={` w-3 h-3 justify-start ${
                isAscending ? "" : "rotate-180"
              } duration-0`}
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>
        </button>

        <button
          onClick={() => sortBudgetsPrice()}
          className="focus:font-bold"
          onFocus={() => setFocusedSorter("price")}
          onBlur={() => setFocusedSorter(null)}
        >
          Import
          <span
            className={`inline-flex items-center ${
              focusedSorter === "price" ? "block" : "hidden"
            }`}
          >
            <svg
              className={`ml-1 w-3 h-3 justify-start ${
                isHighToLow ? "" : "rotate-180"
              } duration-0`}
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>
        </button>
        <button
          onClick={() => sortBudgetsName()}
          className="focus:font-bold"
          onFocus={() => setFocusedSorter("name")}
          onBlur={() => setFocusedSorter(null)}
        >
          Nom
          <span
            className={`inline-flex items-center ${
              focusedSorter === "name" ? "block" : "hidden"
            }`}
          >
            <svg
              className={`ml-1 w-3 h-3 justify-start ${
                isAlphabetical ? "" : "rotate-180"
              } duration-0`}
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      {filteredBudgets.map((budget, index) => (
        <div
          key={index}
          className="my-8 flex w-auto flex-row justify-between rounded-lg border border-gray-100 px-7 py-6 shadow-lg"
        >
          <div>
            <div className="text-xl font-bold"> {budget.name}</div>
            <div className="md:text-md text-sm text-gray-400">
              {budget.phone}
            </div>
            <div className="md:text-md text-sm text-gray-400 w-full break-all">
              {budget.email}
            </div>
          </div>

          <div>
            <span>
              Serveis:<br></br>
            </span>
            {budget.services.map((service, i) => (
              <span key={i}>
                · {service}
                {i < budget.services.length - 1 && <br />}
              </span>
            ))}
            {budget.services.includes("Web") && (
              <>
                <p>
                  <span>Pàgines:</span> {budget.pageCount}
                </p>
                <p>
                  <span>Llenguatges:</span> {budget.langCount}
                </p>
              </>
            )}
          </div>

          <div>
            <div className="text-gray-400">Total:</div>
            <div className="text-md text-2xl font-bold">
              {budget.totalPrice}
              <span className="text-sm">€</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BudgetDisplay;
