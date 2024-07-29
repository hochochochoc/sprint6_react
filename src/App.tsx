import React, { useEffect, useState, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./index.css";
import { useRecords } from "./RecordsContext";
import Records from "./Records";
import Inputs from "./Inputs";
import Checkboxes from "./Checkboxes";
import ChessboardBackground from "./ChessboardBackground";

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <ChessboardBackground />
      <div className="relative z-10 flex h-screen flex-col justify-between">
        <div className="mt-1/3 flex flex-col items-center text-center">
          <p className="text-4xl">Benvinguts!</p>
          <p className="text-md mt-1">
            Presupostly és una aplicació per al càlcul de pressupostos de llocs
            web.
          </p>
        </div>
        <div className="mb-2/5 flex justify-center">
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

const Calculator: React.FC = () => {
  const navigate = useNavigate();

  interface CheckboxData {
    title: string;
    description: string;
    price: number;
  }

  const checkboxData: CheckboxData[] = useMemo(
    () => [
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
    ],
    []
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const [checkboxPrice, setCheckboxPrice] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [langCount, setLangCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkboxStatuses, setCheckboxStatuses] = useState(
    checkboxData.map(() => false)
  );
  const [name, setName] = useState("Super Mario");
  const [telephone, setTelephone] = useState("222 222 222");
  const [email, setEmail] = useState("jannik.riegel@gmail.com");
  const [isAnnual, setIsAnnual] = useState(false);
  const [prices, setPrices] = useState(checkboxData.map((item) => item.price));
  const [pageCountError, setPageCountError] = useState("");
  const [langCountError, setLangCountError] = useState("");

  const { handleAddRecord } = useRecords();

  useEffect(() => {
    if (pageCount < 1) {
      setPageCount(1);
    }
    if (pageCount === 0) {
      setPageCount(1);
    }
  }, [pageCount]);

  useEffect(() => {
    if (isAnnual) {
      setPrices(checkboxData.map((item) => item.price * 0.8));
    } else {
      setPrices(checkboxData.map((item) => item.price));
    }
  }, [isAnnual, checkboxData]);

  useEffect(() => {
    const initialCheckboxStatuses = checkboxStatuses;
    const initialCheckboxPrice = initialCheckboxStatuses.reduce(
      (acc, checked, index) => {
        return checked ? acc + prices[index] : acc;
      },
      0
    );

    setCheckboxPrice(initialCheckboxPrice);

    const initialTotalPrice =
      initialCheckboxPrice +
      (checkboxStatuses[2] ? pageCount * 30 + langCount * 30 - 60 : 0);
    setTotalPrice(initialTotalPrice);
  }, [prices, checkboxStatuses, pageCount, langCount, isAnnual]);

  useEffect(() => {
    const webChecked = searchParams.get("WebPage") === "true";
    const seoChecked = searchParams.get("CampaingSeo") === "true";
    const adsChecked = searchParams.get("Ads") === "true";
    const pageCount = parseInt(searchParams.get("pages") || "1", 10);
    const langCount = parseInt(searchParams.get("lang") || "1", 10);

    const initialCheckboxStatuses = [seoChecked, adsChecked, webChecked];
    setCheckboxStatuses(initialCheckboxStatuses);

    const initialCheckboxPrice = initialCheckboxStatuses.reduce(
      (acc, checked, index) => {
        return checked ? acc + prices[index] : acc;
      },
      0
    );

    setCheckboxPrice(initialCheckboxPrice);
    setPageCount(pageCount);
    setLangCount(langCount);

    const initialTotalPrice =
      initialCheckboxPrice +
      (webChecked ? pageCount * 30 + langCount * 30 - 60 : 0);
    setTotalPrice(initialTotalPrice);
  }, [searchParams, prices, isAnnual]);

  const handleCheckboxChange = (index: number, price: number) => {
    const isChecked = !checkboxStatuses[index];
    const updatedStatuses = checkboxStatuses.map((status, i) =>
      i === index ? isChecked : status
    );
    setCheckboxStatuses(updatedStatuses);
    setCheckboxPrice((currentPrice) =>
      isChecked ? currentPrice + price : currentPrice - price
    );

    const params = new URLSearchParams(searchParams);
    if (index === 0) {
      params.set("CampaingSeo", isChecked.toString());
    } else if (index === 1) {
      params.set("Ads", isChecked.toString());
    } else if (index === 2) {
      params.set("WebPage", isChecked.toString());
    }

    setSearchParams(params);
  };

  const handleApplyDiscount = () => {
    setIsAnnual(!isAnnual);
  };

  const handleAddRecordClick = () => {
    const newRecord = {
      totalPrice,
      seoChecked: checkboxStatuses[0],
      adsChecked: checkboxStatuses[1],
      webChecked: checkboxStatuses[2],
      name,
      telephone,
      email,
      pageCount,
      langCount,
    };
    handleAddRecord(newRecord);
  };

  return (
    <div className="flex w-full justify-around">
      <div className="flex w-4/5 flex-col">
        <div className="mt-5 hover:text-blue-500">
          <button onClick={() => navigate("/")}>Volver al Onboarding </button>
        </div>
        <div className="relative mt-5 rounded-2xl border border-gray-200 px-4 py-2 sm:px-10 sm:py-14">
          <img
            src="/background.png"
            alt="headline_img"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10">
            <p className="text-center text-3xl font-bold">
              Aconsegueix la millor qualitat
            </p>
          </div>
        </div>
        <div className="mx-auto md:w-4/5">
          <Checkboxes
            isAnnual={isAnnual}
            prices={prices}
            checkboxStatuses={checkboxStatuses}
            handleCheckboxChange={handleCheckboxChange}
            checkboxPrice={checkboxPrice}
            handleApplyDiscount={handleApplyDiscount}
            pageCount={pageCount}
            setPageCount={setPageCount}
            langCount={langCount}
            setLangCount={setLangCount}
            pageCountError={pageCountError}
            langCountError={langCountError}
            totalPrice={totalPrice}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            setPageCountError={setPageCountError}
            setLangCountError={setLangCountError}
          />
        </div>

        <div>
          <div className="mx-auto mt-4 md:w-4/5">
            <Inputs
              name={name}
              setName={setName}
              telephone={telephone}
              setTelephone={setTelephone}
              email={email}
              setEmail={setEmail}
              handleAddRecord={handleAddRecordClick}
            />
          </div>
          <div className="mx-auto mt-4 md:w-4/5">
            <Records />
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
}

export default App;
