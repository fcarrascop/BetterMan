import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { db } from "../components/config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
const itemsCollectionRef = collection(db, "Items");


const ItemListContainer = () => {
    let { productcategory } = useParams();
    const [ productos, setProductos ] = useState([]);
    
    let CollectionRef = productcategory ? query(itemsCollectionRef, where ("categoria", "==", productcategory)) : itemsCollectionRef;


    useEffect(()=> {
        getDocs(CollectionRef)
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
            
    },[productos])

    return (
        <article className="itemList container">
            <div className="row">
                <h2> Productos </h2>
            </div>
            <div className="row row-gap-3 gap-0">
                {productos.map((item) => {
                    return (
                        <ItemCard nombre={item.nombre} id={item.id} img={item.img} precio={item.precio} key={item.id} />
                        )
                    })}
            </div>
        </article>
    )
}

export default ItemListContainer;