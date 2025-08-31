import './Home.css';
import Header from "./components_home/Header";
import CardPizza from "./components_home/CardPizza";
import {pizzasData} from './Pizzas2';

const Home =()=> {
    return (
        <>
            <Header />
            <h1 className="h3 fw-bold text-dark">🍕Nuestras Pizzas🍕</h1>
            <div className="container mt-4">
                <div className="row">
                    {pizzasData.map((pizza) => (
                        <div className="col-md-4 mb-4" key={pizza.id}>
                            <CardPizza pizza={pizza} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;