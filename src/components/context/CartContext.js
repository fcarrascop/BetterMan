import React, { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [CartList, setCartList] = useState([]);
    const [Contador, setContador] = useState(0)

    const AddItem = (id = 0, cantidad = 0) => {
        if (CartList) {
            const Lista = CartList;
            let info = {"id": id, "cantidad": cantidad};
            Lista.push(info);
            setCartList(Lista);
        }
        else if (cantidad !== 0){
            let info = [{"id": id, "cantidad": cantidad}];
            setCartList(info)
        }
    }

    const DeleteList = () => {
        setCartList([]);
        setContador(0);
        console.log("Lista eliminada")
    }

    const DeleteItem = (id) => {
        const Lista = CartList.filter((item) => item.id = !id);
        setCartList(Lista);
    }

    const CartCount = () => {
        if (CartList) {
            CartList.map((contado)=>{
                setContador(Contador + Number(contado.cantidad) )
            })
        }
    }

    return (
        <CartContext.Provider value={{ CartList, AddItem, DeleteList, DeleteItem, CartCount }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;