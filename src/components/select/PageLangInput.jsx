import React from "react";
import { useBudget } from "../../contexts/BudgetContext";
import InfoLang from "./info/InfoLang";
import InfoPage from "./info/InfoPage";

const NumberInput = ({ value, onChange, onIncrement, onDecrement }) => (
  <div className="flex items-center space-x-2">
    <button
      className="flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-50 active:bg-gray-100 transition-colors"
      onClick={onDecrement}
    >
      <svg className="h-3 w-3 text-gray-500" fill="none" viewBox="0 0 18 2">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h16"
        />
      </svg>
    </button>

    <input
      className="h-8 w-12 rounded-md border border-gray-300 text-center text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
      type="number"
      value={value}
      onChange={onChange}
    />

    <button
      className="flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-50 active:bg-gray-100 transition-colors"
      onClick={onIncrement}
    >
      <svg className="h-3 w-3 text-gray-500" fill="none" viewBox="0 0 18 18">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 1v16M1 9h16"
        />
      </svg>
    </button>
  </div>
);

const PageLangInputs = () => {
  const { pageCount, setPageCount, langCount, setLangCount } = useBudget();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-end space-x-3">
        <InfoLang />
        <NumberInput
          value={pageCount}
          onChange={(e) => setPageCount(Number(e.target.value))}
          onDecrement={() => setPageCount(Math.max(1, pageCount - 1))}
          onIncrement={() => setPageCount(pageCount + 1)}
        />
      </div>

      <div className="flex items-center justify-end space-x-3">
        <InfoPage />
        <NumberInput
          value={langCount}
          onChange={(e) => setLangCount(Number(e.target.value))}
          onDecrement={() => setLangCount(Math.max(1, langCount - 1))}
          onIncrement={() => setLangCount(langCount + 1)}
        />
      </div>
    </div>
  );
};

export default PageLangInputs;
