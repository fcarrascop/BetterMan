import Carro from "./../img/carrito.png";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";

// Arreglar
function CartWidget() {
    const { CartList, CartCount, Contador } = useContext(CartContext);

    /* const Lista = CartList;
    useEffect(()=>{
        if (Lista) {
            Lista.forEach((element) => {
                setContador(element.cantidad)
            })
        }
        else {
            setContador(0)
        }

        
    },[CartList])
    console.log(CartList); */

    return (
        <div className="nav-link blanco">
            <img className="carrito" src={Carro}/>
            <p className="bubble">{Contador}</p>
        </div>
    )
}

export default CartWidget;