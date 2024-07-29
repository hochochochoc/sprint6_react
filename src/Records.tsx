import React from "react";
import { useRecords } from "./RecordsContext";

const Records: React.FC = () => {
  const {
    filteredBudgets,
    handleSortByName,
    handleSortByAmount,
    handleSortByIndex,
    searchedName,
    setSearchedName,
    isAlphabetical,
    isHighToLow,
    isOriginal,
  } = useRecords();

  return (
    <div className=" flex w-auto flex-col py-6 ">
      <h2 className="text-xl font-bold">Pressupostos en curs:</h2>
      <div className="flex flex-row justify-center md:justify-end">
        <input
          className="mr-3 focus:shadow-outline w-2/5 md:w-100 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          type="text"
          required
          value={searchedName}
          placeholder="Nom buscat"
          onChange={(e) => setSearchedName(e.target.value)}
        />
        <button onClick={handleSortByIndex}>
          Data
          <span className="inline-flex items-center">
            {isOriginal ? (
              <svg
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="inline ml-1 w-4 h-4 justify-start"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                ></path>
              </svg>
            ) : (
              <svg
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="inline ml-1 w-4 h-4 justify-start"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                ></path>
              </svg>
            )}
          </span>
        </button>
        <button className="mx-3" onClick={handleSortByAmount}>
          Import
          <span className="inline-flex items-center ">
            {isHighToLow ? (
              <svg
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="inline ml-1 w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                ></path>
              </svg>
            ) : (
              <svg
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="inline ml-1 w-4 h-4 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                ></path>
              </svg>
            )}
          </span>
        </button>

        <button onClick={handleSortByName}>
          {isAlphabetical ? "Z-A" : "A-Z"}
        </button>
      </div>

      <ul>
        {filteredBudgets().map((record, index) => (
          <div
            key={index}
            className="my-8 flex w-auto flex-row justify-between rounded-lg border border-gray-100 px-7 py-6 shadow-lg"
          >
            <div>
              <div className="text-xl font-bold"> {record.name}</div>
              <div className="md:text-md text-sm text-gray-400">
                {record.telephone}
              </div>
              <div className="md:text-md text-sm text-gray-400 w-full break-all">
                {record.email}
              </div>
            </div>

            <div className="font-bold md:text-md text-sm px-5 w-40">
              <div>
                Serveis<span className="hidden md:inline"> contractats</span>:
              </div>
              {record.webChecked && (
                <div>
                  · Web -{" "}
                  <div>
                    <span className="hidden md:inline">Pàgines:</span>{" "}
                    <span className="inline md:hidden">Pàg.:</span>{" "}
                    {record.pageCount}
                  </div>
                  <span className="hidden md:inline">Llenguatges:</span>{" "}
                  <span className="inline md:hidden">Lleng.:</span>{" "}
                  {record.langCount}
                </div>
              )}
              <div>{record.seoChecked && <div>· SEO</div>}</div>
              <div>{record.adsChecked && <div>· Ads</div>}</div>
              <div></div>
            </div>
            <div>
              <div className="text-gray-400">Total:</div>
              <div className="text-md text-2xl font-bold">
                {record.totalPrice}
                <span className="text-sm">€</span>
              </div>
            </div>

            <br />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Records;
