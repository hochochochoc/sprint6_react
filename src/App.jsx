import BudgetCalculator from "./pages/BudgetCalculator";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/calculator" element={<BudgetCalculator />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
