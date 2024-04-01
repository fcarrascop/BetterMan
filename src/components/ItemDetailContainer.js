import ItemQuantitySelector from "./ItemQuantitySelector";
import { useState, useEffect, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CartContext } from "./context/CartContext";

function ItemDetailContainer() {
    let { productid } = useParams();
    const { UpdateList, Lista } = useContext(CartContext);
    const [Producto, setProducto] = useState([]); 
    
    if (Lista) {
        UpdateList();
    }

    useEffect(()=>{
        let info = Lista.find((item) => item.id == productid);
        setProducto(info);
    }, [Lista]);
    

    let volver = `<- Volver`

    return (
        <div className="container contenedor">
            <div className="row link">
                <NavLink to="/productos" className="volver">{volver}</NavLink>
            </div>
            {Producto ? (
            <div className="row itemIndividual">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <img className="img-fluid" src={Producto.img} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h1>{Producto.nombre}</h1>
                    <h2>${Producto.precio} CLP</h2>
                    <p className="comentario">{Producto.comentario}</p>
                    <p>id:{Producto.id}</p>
                    <ItemQuantitySelector stock={Producto.stock} id={Producto.id}/>
                </div>
            </div>
            ): (<p>cargando</p>)}
        </div>
    )

}

export default ItemDetailContainer;
