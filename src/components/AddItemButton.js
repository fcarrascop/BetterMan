import { useContext } from "react";
import {CartContext} from "./context/CartContext"
import { useNavigate } from "react-router-dom";


function AddItemButton({ id, cantidad }) {
    const {AddItem} = useContext(CartContext);
    const navigate = useNavigate()
    const Agregar = (idItem, cantidadItem) => {
        if (cantidadItem !== 0) {
            AddItem(idItem, cantidadItem);
            navigate("/cart");
        }
        else {
            console.log("No hacer nada")
        }
    }
    return (
        <button  onClick={()=>{Agregar(id, cantidad)}}>
                Agregar al carrito
        </button>
        
    )

}

export default AddItemButton;