import React, { createContext, useState, useContext, ReactNode } from "react";

interface PriceRecord {
  totalPrice: number;
  seoChecked: boolean;
  adsChecked: boolean;
  webChecked: boolean;
  name: string;
  telephone: string;
  email: string;
  pageCount: number;
  langCount: number;
}

interface RecordsContextType {
  priceRecords: PriceRecord[];
  setPriceRecords: React.Dispatch<React.SetStateAction<PriceRecord[]>>;
  sortedRecords: PriceRecord[];
  setSortedRecords: React.Dispatch<React.SetStateAction<PriceRecord[]>>;
  searchedName: string;
  setSearchedName: React.Dispatch<React.SetStateAction<string>>;
  isAlphabetical: boolean;
  setIsAlphabetical: React.Dispatch<React.SetStateAction<boolean>>;
  isHighToLow: boolean;
  setIsHighToLow: React.Dispatch<React.SetStateAction<boolean>>;
  isOriginal: boolean;
  setIsOriginal: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddRecord: (newRecord: PriceRecord) => void;
  filteredBudgets: () => PriceRecord[];
  handleSortByName: () => void;
  handleSortByAmount: () => void;
  handleSortByIndex: () => void;
}

const RecordsContext = createContext<RecordsContextType | undefined>(undefined);

export const RecordsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [priceRecords, setPriceRecords] = useState<PriceRecord[]>([]);
  const [sortedRecords, setSortedRecords] = useState<PriceRecord[]>([]);
  const [searchedName, setSearchedName] = useState("");
  const [isAlphabetical, setIsAlphabetical] = useState(true);
  const [isHighToLow, setIsHighToLow] = useState(true);
  const [isOriginal, setIsOriginal] = useState(true);

  const handleAddRecord = (newRecord: PriceRecord) => {
    setPriceRecords((prevRecords) => {
      const updatedRecords = [...prevRecords, newRecord];
      setSortedRecords(updatedRecords);
      return updatedRecords;
    });
  };

  const filteredBudgets = () => {
    return searchedName === ""
      ? sortedRecords.length
        ? sortedRecords
        : priceRecords
      : (sortedRecords.length ? sortedRecords : priceRecords).filter((record) =>
          record.name.toLowerCase().includes(searchedName.toLowerCase())
        );
  };

  const handleSortByName = () => {
    const sortedByName = [...priceRecords].sort((a, b) =>
      isAlphabetical
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setSortedRecords(sortedByName);
    setIsAlphabetical(!isAlphabetical);
  };

  const handleSortByAmount = () => {
    const sortedByAmount = [...priceRecords].sort((a, b) =>
      isHighToLow ? b.totalPrice - a.totalPrice : a.totalPrice - b.totalPrice
    );
    setSortedRecords(sortedByAmount);
    setIsHighToLow(!isHighToLow);
  };

  const handleSortByIndex = () => {
    if (isOriginal) {
      setSortedRecords([...priceRecords]);
    } else if (!isOriginal) {
      setSortedRecords([...priceRecords].reverse());
    }
    setIsOriginal(!isOriginal);
  };

  return (
    <RecordsContext.Provider
      value={{
        priceRecords,
        setPriceRecords,
        sortedRecords,
        setSortedRecords,
        searchedName,
        setSearchedName,
        isAlphabetical,
        setIsAlphabetical,
        isHighToLow,
        setIsHighToLow,
        isOriginal,
        setIsOriginal,
        handleAddRecord,
        filteredBudgets,
        handleSortByName,
        handleSortByAmount,
        handleSortByIndex,
      }}
    >
      {children}
    </RecordsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRecords = (): RecordsContextType => {
  const context = useContext(RecordsContext);
  if (!context) {
    throw new Error("useRecords must be used within a RecordsProvider");
  }
  return context;
};
