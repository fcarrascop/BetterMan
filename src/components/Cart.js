import { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import { NavLink } from "react-router-dom";

function Cart() {
    const { DeleteList, CartList, Lista, UpdateList, DeleteItem, setPedido } = useContext(CartContext);
    const [Total,setTotal] = useState(0);
    const [Productos, setProductos] = useState([]);

    if (Lista == ""){
        UpdateList()
    }

    useEffect(()=>{
        if (CartList != "") {
            let listado = []; 
            CartList.forEach((item)=>{
                let encuentro = Lista.find((it)=> it.id == item.id);
                encuentro =
                    {
                        "id": item.id,
                        "cantidad": item.cantidad,
                        "nombre": encuentro.nombre,
                        "precio": encuentro.precio,
                        "img": encuentro.img
                    }
                listado.push(encuentro);
            });
            setProductos(listado);
        }
    },[CartList])
    


    useEffect(()=>{
        let total = 0;
        Productos.forEach((item)=>{
            total += item.cantidad * item.precio;
        });
        setTotal(total);
    },[Productos])

    return (
        <div className="container">
            <h1>Bienvenido al carrito</h1>
            <div className="indicativosCarrito row">
                                    <div className="col-2">
                                        <p> Referencia </p>
                                    </div>
                                    <div className="col-3">
                                        <p>Nombre</p>  
                                    </div>
                                    <div className="col-2">
                                        <p>Cantidad</p> 
                                    </div>
                                    <div className="col-2">
                                        <p>Precio</p> 
                                    </div>
                                    <div className="col-2">
                                        <p>Total</p>
                                    </div>
                                    <div className="col-1">
                                        <p>Eliminar</p>
                                    </div>
                            </div>
            {
                (Productos != "") ? (
                    Productos.map((item)=> {
                        return (
                            <div className="productosCarrito row" key={item.id}>
                                    <div className="col-2">
                                        <img src={item.img} />
                                    </div>
                                    <div className="col-3">
                                        <p>{item.nombre}</p>  
                                    </div>
                                    <div className="col-2">
                                        <p>{item.cantidad}</p>
                                    </div>
                                    <div className="col-2">
                                        <p>{item.precio}</p>  
                                    </div>
                                    <div className="col-2">
                                        <p>{item.cantidad * item.precio}</p>
                                    </div>
                                    <div className="col-1">
                                        <button onClick={()=>{
                                            DeleteItem(item.id);
                                            setProductos(Productos.filter((it)=> it.id != item.id))
                                            }}>X</button>
                                    </div>
                            </div>
                                
                            
                        )
                    })
                ) : (<p>No hay producto</p>)
            }
            <h4>Total boleta: {Total}</h4>
            <button className="mas" onClick={()=>{
                DeleteList();
                setProductos([]);
            }}>
                Eliminar Lista
            </button>
            <NavLink to="/checkout" onClick={()=>{
                setPedido(Productos)
            }} className="mas">
                Checkout
            </NavLink>
        </div>
    )
}

export default Cart;