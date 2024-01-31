import Carro from "./../img/carrito.png";

function CartWidget() {
    return(
    <a className="nav-link blanco" href="">
        <img className="carrito" src={Carro} />
        <p className="bubble">1</p>
    </a>
    )
}

export default CartWidget;