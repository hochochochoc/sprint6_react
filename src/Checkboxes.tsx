import { useState } from "react";

interface CheckboxData {
  title: string;
  description: string;
  price: number;
}

interface CheckboxesProps {
  isAnnual: boolean;
  prices: number[];
  checkboxStatuses: boolean[];
  handleCheckboxChange: (index: number, price: number) => void;
  checkboxPrice: number;
  handleApplyDiscount: () => void;
  pageCount: number;
  setPageCount: (count: number) => void;
  langCount: number;
  setLangCount: (count: number) => void;
  pageCountError: string;
  langCountError: string;
  setPageCountError: (message: string) => void;
  setLangCountError: (message: string) => void;
  totalPrice: number;
  searchParams: URLSearchParams;
  setSearchParams: (params: URLSearchParams) => void;
}

const checkboxData: CheckboxData[] = [
  {
    title: "Seo",
    description: "Programació d'una web responsive completa",
    price: 300,
  },
  {
    title: "Ads",
    description: "Programació d'una web responsive completa",
    price: 400,
  },
  {
    title: "Web",
    description: "Programació d'una web responsive completa",
    price: 500,
  },
];

function Checkboxes(props: CheckboxesProps) {
  const {
    isAnnual,
    prices,
    checkboxStatuses,
    handleCheckboxChange,

    handleApplyDiscount,
    pageCount,
    setPageCount,
    langCount,
    setLangCount,
    pageCountError,
    langCountError,
    totalPrice,
    searchParams,
    setSearchParams,
    setPageCountError,
    setLangCountError,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [popupLengIsOpen, setPopupLengIsOpen] = useState(false);

  return (
    <div>
      <div>
        <div>
          <label className="flex justify-center cursor-pointer mt-3">
            <span className="mr-3 text-xs font-medium text-gray-900 dark:text-gray-300">
              Pagament mensual
            </span>
            <input
              type="checkbox"
              checked={isAnnual}
              onChange={handleApplyDiscount}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            <span className="ml-3 text-xs font-medium text-gray-900 dark:text-gray-300">
              Pagament anual
            </span>
          </label>
        </div>

        <div>
          {checkboxData.map((item, index) => (
            <div key={index}>
              <div className="my-8 flex w-auto flex-col rounded-lg border border-gray-100 py-6 shadow-lg">
                <div className="flex justify-between">
                  <div className="ml-3 flex flex-col pr-1 md:ml-7 md:pr-0">
                    <div>
                      <h2 className="text-xl font-bold">{item.title}</h2>
                      <p className="md:text-md text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-2xl flex-col">
                    <div className="text-sm font-semibold text-orange-400 text-center">
                      {isAnnual && <p>Ahorra un 20%</p>}
                      {!isAnnual && <br></br>}
                    </div>
                    <div className=" font-bold flex flex-row">
                      <span className="text-md  md:text-2xl">
                        {prices[index]}
                      </span>
                      <span className="flex items-end pb-0.5 text-sm">€</span>
                    </div>
                  </div>

                  <div className="ml-4 mr-3 flex items-center md:mr-7">
                    <input
                      type="checkbox"
                      id={`checkbox-${index}`}
                      checked={checkboxStatuses[index]}
                      onChange={() =>
                        handleCheckboxChange(index, prices[index])
                      }
                    />
                    <p className="mb-1 ml-2 hidden text-sm md:block">Afegir</p>
                  </div>
                </div>
                {checkboxStatuses[2] && index === checkboxData.length - 1 && (
                  <div className="ml-3 flex flex-col justify-between md:ml-7">
                    <div className="mb-2 flex justify-end">
                      <div className="mr-10 text-sm flex items-center">
                        <button
                          className=" mx-1  flex h-3 w-3 items-center justify-center rounded-lg border border-gray-400 text-xs leading-none text-gray-400"
                          onClick={() => setIsOpen(true)}
                        >
                          !
                        </button>

                        {isOpen && (
                          <div
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6 "
                            onClick={() => setIsOpen(false)}
                          >
                            <div
                              className="bg-white rounded-lg p-10 max-w-sm mx-auto "
                              onClick={(e) => e.stopPropagation()}
                            >
                              <h2 className="text-lg font-medium text-center">
                                Número de pàgines
                              </h2>
                              <p className="mt-2 text-gray-600 text-center">
                                Afegeix les pàgines que tindrà el teu projecte.
                                El cost de cada pàgina és de 30€.
                              </p>
                            </div>
                          </div>
                        )}

                        <p>Nombre de pàgines: </p>
                      </div>

                      <div className="mr-3 flex justify-end md:mr-7">
                        <button
                          className=" mx-1 mt-2 flex h-3 w-3 items-center justify-center rounded-lg border border-gray-400 text-xs leading-none text-gray-400"
                          onClick={() => {
                            const newCount =
                              pageCount > 1 ? pageCount - 1 : pageCount;
                            setPageCount(newCount);
                            searchParams.set("pages", newCount.toString());
                            setSearchParams(searchParams);
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
                          className="w-7 h-6 rounded-lg border border-gray-400 text-center outline-none"
                          type="number"
                          value={pageCount}
                          onChange={(e) => {
                            const newCount = parseInt(e.target.value, 10);
                            if (isNaN(newCount) || newCount < 1) {
                              setPageCountError(
                                "El nombre de pàgines seleccionats ha de ser com a mínim 1."
                              );
                            } else {
                              setPageCountError("");
                            }
                            setPageCount(newCount);
                            searchParams.set("pages", newCount.toString());
                            setSearchParams(searchParams);
                          }}
                        />
                        {pageCountError && (
                          <div style={{ color: "red" }}>{pageCountError}</div>
                        )}
                        <button
                          className="mx-1 mt-2 flex h-3 w-3 items-center justify-center rounded-lg border border-gray-400 text-xs leading-none text-gray-400"
                          onClick={() => {
                            const newCount = pageCount + 1;
                            setPageCount(newCount);
                            searchParams.set("pages", newCount.toString());
                            setSearchParams(searchParams);
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
                    <div className="flex justify-end">
                      <div className="mr-10 text-sm flex items-center">
                        <button
                          className=" mx-1  flex h-3 w-3 items-center justify-center rounded-lg border border-gray-400 text-xs leading-none text-gray-400"
                          onClick={() => setPopupLengIsOpen(true)}
                        >
                          !
                        </button>

                        {popupLengIsOpen && (
                          <div
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6 "
                            onClick={() => setPopupLengIsOpen(false)}
                          >
                            <div
                              className="bg-white rounded-lg p-10 max-w-sm mx-auto "
                              onClick={(e) => e.stopPropagation()}
                            >
                              <h2 className="text-lg font-medium text-center">
                                Número de llenguatges
                              </h2>
                              <p className="mt-2 text-gray-600 text-center">
                                Afegeix les llenguatges que tindrà el teu
                                projecte. El cost de cada llenguatge és de 30€.
                              </p>
                            </div>
                          </div>
                        )}
                        <p>Número de llenguatges: </p>
                      </div>

                      <div className="mr-3 flex justify-end md:mr-7">
                        <button
                          className="mx-1 mt-2 flex h-3 w-3 items-center justify-center rounded-lg border border-gray-400 text-xs leading-none text-gray-400"
                          onClick={() => {
                            const newCount =
                              langCount > 1 ? langCount - 1 : langCount;
                            setLangCount(newCount);
                            searchParams.set("lang", newCount.toString());
                            setSearchParams(searchParams);
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
                          className="w-7 h-6 rounded-lg border border-gray-400 text-center outline-none"
                          type="number"
                          value={langCount}
                          onChange={(e) => {
                            const newCount = parseInt(e.target.value, 10);
                            if (isNaN(newCount) || newCount < 1) {
                              setLangCountError(
                                "El nombre de llenguatges seleccionats ha de ser com a mínim 1."
                              );
                            } else {
                              setLangCountError("");
                            }
                            setLangCount(newCount);
                            searchParams.set("lang", newCount.toString());
                            setSearchParams(searchParams);
                          }}
                        />
                        {langCountError && (
                          <div style={{ color: "red" }}>{langCountError}</div>
                        )}
                        <button
                          className="mx-1 mt-2 flex h-3 w-3 items-center justify-center rounded-lg border border-gray-400 text-xs leading-none text-gray-400"
                          onClick={() => {
                            const newCount = langCount + 1;
                            setLangCount(newCount);
                            searchParams.set("lang", newCount.toString());
                            setSearchParams(searchParams);
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
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className="flex w-full justify-end font-bold">
            <div className="mb-5 mr-2 flex w-full justify-between md:w-2/5">
              <span className="items-start text-xl">Preu pressuposat:</span>
              <div className="flex items-end">
                <span className="text-2xl"> {totalPrice}</span>
                <span className="pb-0.5 text-sm">€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Checkboxes;
