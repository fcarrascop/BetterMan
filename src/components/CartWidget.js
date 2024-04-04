import Carro from "./../img/carrito.png";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";

function CartWidget() {
    const { CartList } = useContext(CartContext);
    const [Contador, setContador] = useState(0)
    useEffect(()=>{
        if (CartList.length != 0) {
            let cantidad = 0;
            CartList.forEach((item)=>{
                cantidad += item.cantidad
            })
            setContador(cantidad)
        }
    },[CartList])

    return (
        <div className="nav-link blanco">
            <img className="carrito" src={Carro}/>
            <p className="bubble">{Contador}</p>
        </div>
    )
}

export default CartWidget;