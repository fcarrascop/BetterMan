import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddItemButton from "./AddItemButton";

import { db } from "../components/config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
const itemsCollectionRef = collection(db, "Items");


function ItemQuantitySelector({id}) {
    let { productid } = useParams();
    // Cambiar esta mierda
    const [numero, setNumero] = useState(12);
    const [contador, setContador] = useState(0);
    useEffect(() => {
        getDocs(query(itemsCollectionRef, where("id", "==", Number(productid))))
            .then((response) => {
                response.forEach((respuesta) => {
                    setNumero((respuesta.data().stock));
                })
            })
            .catch((error) => console.log(error))
    }, [numero]);

    const AgregarItem = () => {
        if (numero > 0) {
            setNumero(numero-1);
            setContador(contador+1)
        }
    }

    const QuitarItem = () => {
        if (contador > 0) {
            setContador(contador-1)
            setNumero(numero+1)
        }
    }
    

    return (
        <div>
            <p>stock:{numero}</p>
            <div className="d-flex flex-column">
                <div className="container d-flex justify-content-evenly">
                    <p className="">Items: {contador}</p>
                    <div>
                        <button className="mas" onClick={AgregarItem} type="button">+</button>
                        <button className="mas" onClick={QuitarItem} type="button">-</button>

                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <AddItemButton id={productid} cantidad={contador}/>
                </div>
                
            </div>

        </div>
    )
}

export default ItemQuantitySelector;