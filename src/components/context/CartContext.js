// Contexto
import React, { createContext, useState, useEffect } from "react";
// Base de datos
import { db } from "../../components/config/firebase";
import { collection, getDocs } from "firebase/firestore";
const itemsCollectionRef = collection(db, "Items");

export const CartContext = createContext()

// Context provider
const CartContextProvider = ({ children }) => {
    const [CartList, setCartList] = useState([]);
    const [ContadorItems, setContadorItems] = useState(0);
    const [Lista, setLista] = useState([]);

    const UpdateList = () => {
        useEffect(()=> {
            getDocs(itemsCollectionRef)
                .then(response => {
                    let info = [];
                    response.forEach((doc)=>{
                        info.push(doc.data())
                    });
                    setLista(info);
                })
                .catch(error => {
                    console.error(error)
                })
        },[])
    }
    
    const AddItem = (id = 0, cantidad = 0) => {
        if (CartList != "") {
            let Listado = CartList;
            let index = Listado.findIndex((item)=> item.id == id);
            if (index != -1) {
                Listado[index].cantidad += cantidad;
            }
            else {
                let info = {
                    "id": id,
                    "cantidad": cantidad
                }
                Listado.push(info)
            }
            setCartList(Listado)
        }
        else{
            let Listado = CartList;
            let info = {
                "id": id,
                "cantidad": cantidad
            }
            Listado.push(info);
            setCartList(Listado);
        }
    }

    const DeleteList = () => {
        setCartList([]);
        setContadorItems(0);
    }

    const DeleteItem = (id) => {
        const Lista = CartList.filter((item) => item.id != id);
        setCartList(Lista);
    }

    const CartCount = () => {
        if (CartList) {
            CartList.map((contado)=>{
                setContadorItems(ContadorItems + Number(contado.cantidad) )
            })
        }
    }

    return (
        <CartContext.Provider value={{CartList, Lista, setLista, UpdateList, AddItem, DeleteList, DeleteItem, CartCount}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;