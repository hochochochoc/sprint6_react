import React from "react";
import { useBudget } from "../../contexts/BudgetContext";
import InfoLang from "./info/InfoLang";
import InfoPage from "./info/InfoPage";

const PageLangInputs = () => {
  const { pageCount, setPageCount, langCount, setLangCount } = useBudget();

  return (
    <div className="flex flex-col space-y-2">
      <div className="mr-3 flex justify-end md:mr-7 items-center">
        <InfoLang />
        <button
          className=" mx-1 flex h-3 w-3 items-center justify-center rounded-lg border border-gray-400 text-xs leading-none text-gray-400"
          onClick={() => {
            const newCount = pageCount > 1 ? pageCount - 1 : pageCount;
            setPageCount(newCount);
          }}
        >
          <svg
            className="h-2 w-2 text-gray-400 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
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
          className="w-8 h-6 rounded-lg border border-gray-400 text-center outline-none text-sm"
          type="number"
          value={pageCount}
          onChange={(e) => setPageCount(Number(e.target.value))}
        />
        <button
          className="mx-1 flex h-3 w-3 items-center justify-center rounded-lg border border-gray-400 text-xs leading-none text-gray-400"
          onClick={() => {
            const newCount = pageCount + 1;
            setPageCount(newCount);
          }}
        >
          <svg
            className="h-2 w-2 text-gray-400 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
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
      <div className="mr-3 flex justify-end md:mr-7 items-center">
        <InfoPage />
        <button
          className="mx-1 flex h-3 w-3 items-center justify-center rounded-lg border border-gray-400 text-xs leading-none text-gray-400"
          onClick={() => {
            const newCount = langCount > 1 ? langCount - 1 : langCount;
            setLangCount(newCount);
          }}
        >
          <svg
            className="h-2 w-2 text-gray-400 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
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
          className="w-8 h-6 rounded-lg border border-gray-400 text-center outline-none text-sm"
          type="number"
          value={langCount}
          onChange={(e) => setLangCount(Number(e.target.value))}
        />
        <button
          className="mx-1 flex h-3 w-3 items-center justify-center rounded-lg border border-gray-400 text-xs leading-none text-gray-400"
          onClick={() => {
            const newCount = langCount + 1;
            setLangCount(newCount);
          }}
        >
          <svg
            className="h-2 w-2 text-gray-400 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
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
    </div>
  );
};

export default PageLangInputs;
