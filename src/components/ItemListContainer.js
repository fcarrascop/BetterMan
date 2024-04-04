import ItemCard from "./ItemCard";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const ItemListContainer = () => {
    let { productcategory } = useParams();
    const { UpdateList, Lista } = useContext(CartContext);

    if (Lista == "") {
        UpdateList();
    }
    
    let productos = productcategory ? Lista.filter((prod) => prod.categoria == productcategory) : Lista;

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