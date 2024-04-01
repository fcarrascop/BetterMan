import { useState } from "react";
import AddItemButton from "./AddItemButton";


function ItemQuantitySelector({stock, id}) {
    let [Stock, setStock] = useState(0);

    const AgregarItem = () => {
        if (stock > 0 && Stock <= stock - 1) {
            setStock(Stock+1);
        }
    }

    const QuitarItem = () => {
        if (Stock >= 1 && Stock <= stock) {
            setStock(Stock-1)
        }
    }
    

    return (
        <div>
            <p>stock:{stock}</p>
            <div className="d-flex flex-column">
                <div className="container d-flex justify-content-evenly">
                    <p className="">Items: {Stock}</p>
                    <div>
                        <button className="mas" onClick={AgregarItem} type="button">+</button>
                        <button className="mas" onClick={QuitarItem} type="button">-</button>

                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <AddItemButton id={id} cantidad={Stock}/>
                </div>
                
            </div>

        </div>
    )
}

export default ItemQuantitySelector;