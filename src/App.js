import "./App.css";
import ShopPage from "./components/shopPage/ShopPage";
import Nav from "./components/navBar/Nav";
import { Outlet } from "react-router-dom";
import CardsGrid from "./components/CardsGrid";
import ChargingPage from "./components/chargingPage/ChargingPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      {/* <CardsGrid /> */}
      <ChargingPage />
    </div>
  );
}

export default App;
