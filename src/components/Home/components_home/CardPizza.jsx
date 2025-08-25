import React from 'react'
import './CardPizza.css';
import { formatoPrecio } from "../../../utils/formatoPrecio";
import pizza1 from "../../../assets/img/pizza1.jpg"
import pizza2 from "../../../assets/img/pizza2.jpg";
import pizza3 from "../../../assets/img/pizza3.webp";

const CardPizza = ({ name, price, ingredients, img }) => {
const pizzaImages = {
    pizza1,
    pizza2,
    pizza3,
};


    return (
        <div className="col mb-4">
            <div className="pizza-card card h-100 shadow-sm">
                <img src={pizzaImages[img]} className="card-img-top" alt={name} />
                
                <div className="card-body text-center d-flex flex-column justify-content-between">
                    <h5 className="card-title fw-bold mb-3">{name}</h5>

                    <hr />

                    <div className="pizza-ingredients">
                        <p className="ingredients-label">Ingredientes:</p>
                        <p className="ingredients-list">🍕 {ingredients.join(", ")}</p>
                    </div>

                    <hr />

                    <p className="pizza-price"> Precio: ${price.toLocaleString("es-CL")}</p>
                

                    <div className="d-flex justify-content-center gap-2 mt-3">
                        <button className="btn btn-outline-secondary btn-sm">Ver Más 👀</button>
                        <button className="btn btn-dark btn-sm">Añadir 🛒</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;