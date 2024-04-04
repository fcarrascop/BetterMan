import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-xl">
                <div className="container">
                    <NavLink className="navbar-brand brand header-adj" to="/">
                        BetterMan.
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center justify-content-end" id="navbarNav">
                        {/* paginas */}

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link blanco" aria-current="page" to="productos">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link blanco" aria-current="page" to="productos/categoria/higiene">Higiene</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link blanco" to="productos/categoria/moda">Moda</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link to="./cart">
                                    <CartWidget />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default NavBar;