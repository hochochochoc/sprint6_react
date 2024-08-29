import React from "react";
import { BudgetProvider } from "../contexts/BudgetContext";
import ServiceSelection from "../components/select/ServiceSelection";
import TotalPrice from "../components/calculate/TotalPrice";
import ContactForm from "../components/contact/ContactForm";
import BudgetDisplay from "../components/list/BudgetDisplay";
import Header from "../components/select/Header";
import { useNavigate } from "react-router-dom";

const BudgetCalculator = () => {
  const navigate = useNavigate();

  return (
    <BudgetProvider>
      <div className="p-4 max-w-5xl mx-auto">
        <button
          className="rounded border bg-white py-3 text-sm font-semibold text-black border-transparent hover:text-blue-300"
          onClick={() => navigate("/")}
        >
          Tornar al Onboarding
        </button>
        <Header />
        <ServiceSelection />
        <TotalPrice />
        <ContactForm />
        <BudgetDisplay />
      </div>
    </BudgetProvider>
  );
};

export default BudgetCalculator;
