import { getProductsById } from "./AsyncMock";
import { Link, NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function ItemDetailContainer() {
    let { productid } = useParams();
    const [producto, setProducto] = useState([]);
        useEffect(()=>{
            getProductsById(productid)
                .then((response) => {
                    setProducto(response);
                })
                .catch((error)=> console.log(error))
        }, [])
    
    let volver = `<- Volver`
    
    return (
        <div className="container contenedor">
            <div className="row link">
                <NavLink to="/productos" className="volver">{volver}</NavLink>
            </div>
            <div className="row itemIndividual">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <img  className="img-fluid" src={producto.img}/>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h1>{producto.nombre}</h1>
                    <h2>${producto.precio} CLP</h2>
                    <p className="comentario">{producto.comentario}</p>
                    <p>id:{producto.id}</p>
                </div>
            </div>
        </div>
    )

}

export default ItemDetailContainer;
