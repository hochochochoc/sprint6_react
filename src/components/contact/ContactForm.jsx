import React from "react";
import { useBudget } from "../../contexts/BudgetContext";

const ContactForm = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    selectedServices,
    pageCount,
    langCount,
    setBudgets,
    totalPrice,
  } = useBudget();

  const handleSubmit = () => {
    const newBudget = {
      timestamp: Date.now(),
      name,
      email,
      phone,
      services: Object.entries(selectedServices)
        .filter(([_, isSelected]) => isSelected)
        .map(([title]) => title),
      pageCount: selectedServices.Web ? pageCount : 1,
      langCount: selectedServices.Web ? langCount : 1,
      totalPrice,
    };

    // console.log("New budget created:", newBudget);
    setBudgets((prev) => [...prev, newBudget]);
  };

  return (
    <div>
      <div className="my-8 flex w-auto flex-col rounded-lg border border-gray-100 py-6 shadow-lg">
        <h2 className="mb-1 ml-3 text-xl font-bold md:ml-7">
          Demanar pressupost
        </h2>

        <div className="flex flex-col justify-between px-7 md:flex-row">
          <div className="flex justify-between space-x-5">
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
            />
          </div>

          <div className="flex justify-center">
            <button
              className="mt-4 px-16 md:px-3 h-9 md:w-auto rounded border bg-green-700 md:ml-3 font-semibold text-white md:hover:border-green-500 md:hover:border-transparent md:hover:bg-white md:hover:text-green-700 md:mt-0 active:bg-white active:text-green-700 inline-flex items-center space-x-2"
              onClick={handleSubmit}
            >
              <span>Sol·licitar</span>

              <span className="hidden lg:inline"> pressupost</span>
              <svg
                className="w-5 h-auto"
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
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full ">
        <div className="z-0 border-t-4 border-dashed border-grey w-full absolute top-1/2 transform -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default ContactForm;
