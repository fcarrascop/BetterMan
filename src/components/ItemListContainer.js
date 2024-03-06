import ItemCard from "./ItemCard";
import { getProducts, getProductsByCategory } from "./AsyncMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    let { productcategory } = useParams();
    const [ productos, setProductos ] = useState([]);
    
    let FuncionX = productcategory ? getProductsByCategory : getProducts;


    useEffect(()=> {
        FuncionX(productcategory)
            .then(response => {
                setProductos(response);
            })
            .catch(error => {
                console.error(error)
            })
            
    },[productcategory])

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