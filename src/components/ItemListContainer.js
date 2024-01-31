import BienvenidaImg from "./../img/davidGoggins.jpg";

function ItemListConteiner() {
    return (
        <section className="container">
            <article className="row rowBienvenida">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <img className="img-fluid" src={BienvenidaImg}/>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 bienvenida">
                    <h1>Be strong. Be a man.</h1>
                    <h2>Be a BetterMan.</h2>
                    <p>Bienvenido a la tienda oficial para convertirse en un BetterMan.</p>
                </div>
            </article>
        </section>
    )
}

export default ItemListConteiner;