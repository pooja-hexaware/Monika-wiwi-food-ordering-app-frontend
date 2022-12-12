import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomeScreen from "./Home/home";
import Restaurants from "./Restaurants/restaurants";
import Restaurant from "./Restaurants/restaurants";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          {/* <Route path="/cart" element={<Cart/>} /> */}
          <Route path="/restaurants" element={<Restaurants/>} />


        </Routes>
      </BrowserRouter>
  );
}

export default App;
