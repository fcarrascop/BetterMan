import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./css/index.css";

import  { doc, getDoc } from "firebase/firestore";
import db from "./components/config/firebase"

import CartContextProvider from "./components/context/CartContext";

import ItemListConteiner from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart"

// const docRef = doc(db, "Items", "1");
// const docSnap = await getDoc(docRef);

function App() {


  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar/>
          <Routes>
            <Route path="/"/>
              <Route index element={<Home/>}/>
              <Route path="productos" element={<ItemListConteiner/>}/>
              <Route path="productos/categoria/:productcategory" element={<ItemListConteiner/>}/>
              <Route path="productos/id/:productid" element={<ItemDetailContainer/>}/>
            <Route path="*" element={<h2>404 NOT FOUND</h2>}/>
            <Route path="/BetterMan" element={<Navigate to="/"/>}/>
            <Route path="cart" element={<Cart/>}/>
          </Routes>
        </CartContextProvider> 
      </BrowserRouter>
    </div>
  )
}

export default App;
