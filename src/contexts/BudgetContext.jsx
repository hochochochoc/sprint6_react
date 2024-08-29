import React, { createContext, useContext, useState, useEffect } from "react";
import { checkboxData } from "../data/checkboxData";
import { useNavigate, useSearchParams } from "react-router-dom";

const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [selectedServices, setSelectedServices] = useState({});
  const [pageCount, setPageCount] = useState(1);
  const [langCount, setLangCount] = useState(1);
  const [name, setName] = useState("Super Mario");
  const [email, setEmail] = useState("mario.mario@gmail.com");
  const [phone, setPhone] = useState("123 456 7890");
  const [budgets, setBudgets] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isAnnual, setIsAnnual] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCheckboxChange = (title) => {
    setSelectedServices((prev) => {
      const updatedSelectedServices = {
        ...prev,
        [title]: !prev[title],
      };

      const params = new URLSearchParams(searchParams);
      Object.entries(updatedSelectedServices).forEach(([key, value]) => {
        if (value) {
          params.append("service", key);
        }
      });
      params.set("pages", pageCount.toString());
      params.set("languages", langCount.toString());

      setSearchParams(params);
      return updatedSelectedServices;
    });
  };

  useEffect(() => {
    const servicesFromUrl = searchParams.getAll("service");
    const pagesFromUrl = parseInt(searchParams.get("pages") || "1", 10);
    const languagesFromUrl = parseInt(searchParams.get("languages") || "1", 10);

    const initialServices = {};
    checkboxData.forEach(({ title }) => {
      initialServices[title] = servicesFromUrl.includes(title);
    });

    setSelectedServices(initialServices);
    setPageCount(pagesFromUrl);
    setLangCount(languagesFromUrl);
  }, [searchParams]);

  useEffect(() => {
    const basePrice = Object.entries(selectedServices)
      .filter(([_, isSelected]) => isSelected)
      .reduce(
        (sum, [title]) =>
          sum +
          (isAnnual
            ? checkboxData.find((item) => item.title === title).price * 0.8
            : checkboxData.find((item) => item.title === title).price),
        0
      );

    let additionalCost = 0;
    if (selectedServices.Web) {
      additionalCost = (pageCount - 1 + langCount - 1) * 30;
    }

    setTotalPrice(basePrice + additionalCost);
  }, [selectedServices, pageCount, langCount, isAnnual]);

  const toggleIsAnnual = () => {
    setIsAnnual((prev) => !prev);
  };

  const value = {
    selectedServices,
    setSelectedServices,
    pageCount,
    setPageCount,
    langCount,
    setLangCount,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    budgets,
    setBudgets,
    totalPrice,
    isAnnual,
    toggleIsAnnual,
    handleCheckboxChange,
  };

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
};

export const useBudget = () => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error("useBudget must be used within a BudgetProvider");
  }
  return context;
};
