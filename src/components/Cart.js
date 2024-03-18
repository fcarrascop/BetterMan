import { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";

import { db } from "../components/config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
const itemsCollectionRef = collection(db, "Items");

function Cart() {
    const { DeleteList, CartList } = useContext(CartContext);
    const [Total,setTotal] = useState(0);
    const [Productos, setProductos] = useState([]);

    useEffect(()=> {
        getDocs(itemsCollectionRef)
            .then(response => {
                let info = [];
                response.forEach((doc)=>{
                    info.push(doc.data())
                });
                setProductos(info);
            })
            .catch(error => {
                console.error(error)
            })
            
    },[Productos])


    return (
        <div className="container">
            <h1>Bienvenido al carrito</h1>
            {
                (CartList.length !== 0) ? (
                    CartList.map((item) => {
                        const Lista = Productos;
                        let product = (Lista.find((it) => (it.id == item.id))) ? (Lista.find((it) => (it.id == item.id))) : {"id": 0, "categoria":"-", "img":"-", "comentario":"-", "nombre": "-", "precio": 0, "stock": 0};
                        let costo = (item.cantidad)*(product.precio);
                        if (costo) {
                            setTotal(costo)
                        };
                        return (
                            <p key={item.id}>
                                <span>{product.nombre}</span>,  
                                <span>{product.precio}</span>,  
                                <span>{item.cantidad}</span>, 
                                <span>TOTAL:{costo}</span></p>
                                
                        )
                    })
                ) : (<p>No hay producto</p>)
            }
            <button onClick={()=>{
                DeleteList();

            }}>Eliminar Lista</button>
            <h4>{Total}</h4>
        </div>
    )
}

export default Cart;