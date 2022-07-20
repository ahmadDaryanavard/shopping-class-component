import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

export const SetCartCountContext = React.createContext();
export const CartCountContext = React.createContext();
function App() {
  //when we added item to cart we want to notice that and cart icon in header will change
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App">
      <SetCartCountContext.Provider value={setCartCount}>
        <BrowserRouter>
          <CartCountContext.Provider value={cartCount}>
            <Header />
          </CartCountContext.Provider>

          <Body />

          <Footer />
        </BrowserRouter>
      </SetCartCountContext.Provider>
    </div>
  );
}

export default App;
