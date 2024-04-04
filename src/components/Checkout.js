import { useContext, useState, useEffect,  } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { db } from "./../components/config/firebase";
import { collection, addDoc } from "firebase/firestore";
const orderCollection = collection(db, "Orders");

function Checkout() {
    let { Pedido, DeleteList } = useContext(CartContext);
    const [Total, setTotal] = useState(0);
    const [Carrito, setCarrito] = useState([]);
    const [OrderID, setOrderID] = useState("");

    useEffect(()=>{
        setCarrito(Pedido)
    },[]);

    useEffect(()=>{
        let total = 0;
        Pedido.forEach((item)=>{
            total += item.cantidad * item.precio;
        });
        setTotal(total);
    },[Carrito]);

    const [Email, setEmail] = useState("");
    const [Nombre, setNombre] = useState("");
    const [ApellidoP, setApellidoP] = useState("");
    const [ApellidoM, setApellidoM] = useState("");

    const HandleConfirms = async (event) => {
        event.preventDefault();

        const docRef = await addDoc(orderCollection, {
            nombre: Nombre,
            apellidoP: ApellidoP,
            apellidoM: ApellidoM,
            email: Email,
            order: Carrito
        })
        setOrderID(docRef.id);
        DeleteList();


    };
        
    return (
        (OrderID != "") ?
        (
            <div className="container">
                <h1>Tu pedido {OrderID} ha sido recibido!</h1>
                <NavLink className="mas" to="/">Volver</NavLink>
            </div>
        ) : 
        (<div className="container">
                <div className="row">

                    <div className="col-6">
                        <h4 className="mb-3">Tus datos</h4>
                        <form className="form-contacto" onSubmit={HandleConfirms}>
                            <label className="form-label" name="name">Nombres</label>
                            <input className="form-control" type="text" name="Nombres" id="name" required placeholder="Tus nombres..." onChange={(e)=>(setNombre(e.target.value))} />

                            <label className="form-label" name="lastname-p">Apellido paterno</label>
                            <input className="form-control" type="text" name="ApellidoP" id="lastname-p" required placeholder="Tu apellido paterno..." onChange={(e)=>(setApellidoP(e.target.value))}/>

                            <label className="form-label" name="lastname-m">Apellido materno</label>
                            <input className="form-control" type="text" name="ApellidoM" id="lastname-m" required placeholder="Tu apellido materno..." onChange={(e)=>(setApellidoM(e.target.value))}/>

                            <label className="form-label" name="email">Correo electrónico</label>
                            <input className="form-control" type="email" name="correo" id="email" required placeholder="Tu correo electrónico..." onChange={(e)=>(setEmail(e.target.value))}/>
                            {
                                (Total == 0) ? 
                                (<h5 className="mas"> No hay productos </h5>) : 
                                (<button className="w-100 btn mas">Confirmar compra</button>)
                            }
                        </form>
                    </div>
                    <div className="col-6">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Tu carrito</span>
                            <span className="badge badge-secondary badge-pill">3</span>
                        </h4>
                        <ul className="list-group mb-3 sticky-top">
                            {
                                (Carrito != "") ? (
                                    Carrito.map((item)=> {
                                        return (
                                            <li key={item.id} className="list-group-item d-flex justify-content-between lh-condensed">
                                                <div>
                                                    <h6 className="my-0">{item.nombre}</h6>
                                                    <small className="text-muted">Cantidad x {item.cantidad}</small>
                                                </div>
                                                <span className="text-muted">{item.precio}</span>
                                            </li>
                                        )
                                    })
                                ) : (<small className="text-muted">No hay items</small>)
                            }
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (CLP)</span>
                                <strong>{Total}</strong>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
        )
}


export default Checkout;