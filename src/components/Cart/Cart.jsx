import React, { useState } from "react";
import {pizzaCart} from '../Home/Pizzas2';
import { formatoPrecio } from "../../utils/formatoPrecio";
import "./Cart.css";

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

    const incrementaCantidad = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        );
    };

    const decreceCantidad = (id) => {
        setCart(
        cart
            .map((item) =>
            item.id === id ? { ...item, count: item.count - 1 } : item
            )
            .filter((item) => item.count > 0)
        );
    };

    const total = cart.reduce(
        (acc, item) => acc + Number(item.price) * Number(item.count),
        0
    );

    return (
        <div className="cart-container container mt-5">
            
            <div className="mb-4">
                <h2 className="h3 fw-bold text-dark">🛒 Detalles del pedido</h2>
                <p className="text-muted">Agrega tus pizzas favoritas</p>
            </div>
            
            <div className="mx-auto mb-3" style={{ maxWidth: '500px' }}>
                {cart.length === 0 ? (
                    <p className="empty-cart">Tu carrito está vacío</p>
                ) : (
                    <div>
                        {cart.map((pizza) => (
                            <div key={pizza.id} className="cart-item">
                                <img src={pizza.img} alt={pizza.name} className="cart-img" />
                                <div className="cart-details">
                                    <h5>{pizza.name}</h5>
                                    <p>{formatoPrecio(pizza.price)}</p>
                                    <div className="cart-actions">
                                    <button
                                        className="btn btn-sm btn-outline-danger"
                                        onClick={() => decreceCantidad(pizza.id)}
                                    >
                                        ➖
                                    </button>
                                    <span className="mx-2">{pizza.count}</span>
                                    <button
                                        className="btn btn-sm btn-outline-success"
                                        onClick={() => incrementaCantidad(pizza.id)}
                                    >
                                        ➕
                                    </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <hr />

                        <h4>Total: {formatoPrecio(total)}</h4>

                        <button className="btn btn-dark w-100 mt-3">Pagar</button>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Cart;