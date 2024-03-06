import { Link, NavLink } from "react-router-dom";

function ItemCard({nombre, id, img, precio}) {
    return (
        (
            <div className="itemCard col-xl-4 col-md-6 col-xs-12">
                <img src={img} className="itemCardImg img-fluid "/>

                <h3> {nombre}</h3>
                <h4> ${precio} CLP</h4>
                <NavLink className="mas" to={`/productos/id/${id}`}>Más</NavLink>

            </div>
        )
    )
}

export default ItemCard; 
