import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="relative z-10 flex h-screen flex-col justify-center">
        <div className="flex flex-col items-center text-center">
          <p className="text-4xl">Benvinguts!</p>
          <p className="text-md mt-1">
            Presupostly és una aplicació per al càlcul de pressupostos de llocs
            web.
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            className="rounded border bg-green-500 px-12 py-3 text-xl font-semibold text-white hover:border-green-500 hover:border-transparent hover:bg-white hover:text-green-700"
            onClick={() => navigate("/calculator")}
          >
            Comença ara
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
