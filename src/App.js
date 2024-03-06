import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./css/index.css";


import ItemListConteiner from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/"/>
            <Route index element={<Home/>}/>
            <Route path="productos" element={<ItemListConteiner/>}/>
            <Route path="productos/categoria/:productcategory" element={<ItemListConteiner/>}/>
            <Route path="productos/id/:productid" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<h2>404 NOT FOUND</h2>}/>
          <Route path="/BetterMan" element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
