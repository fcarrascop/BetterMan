import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <header>
            <nav class="navbar navbar-expand-xl">
                <div class="container">
                    <a class="navbar-brand brand header-adj" href="./index.html">
                        BetterMan.
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-center justify-content-end" id="navbarNav">
                        {/* paginas */}
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link blanco" aria-current="page" href="">Guía</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link blanco" href="">Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link blanco" href="">Acerca</a>
                            </li>
                            <li class="nav-item">
                                <CartWidget/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default NavBar;