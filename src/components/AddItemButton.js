import { useContext } from "react";
import {CartContext} from "./context/CartContext"
import { useNavigate } from "react-router-dom";


function AddItemButton({ id, cantidad }) {
    const {AddItem} = useContext(CartContext);
    const navigate = useNavigate()
    return (
        <button className="mas"  onClick={()=>{
            if (cantidad !== 0)
                AddItem(id, cantidad);
                navigate("/cart")
        }}>
                Agregar al carrito
        </button>
        
    )
}

export default AddItemButton;