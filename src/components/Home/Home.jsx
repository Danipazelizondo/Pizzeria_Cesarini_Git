import './Home.css';
import Header from "./components_home/Header";
import CardPizza from "./components_home/CardPizza";

const Home =()=> {
    return (
        <>
            <Header />
            <div className="container mt-4">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <CardPizza
                        name="Napolitana"
                        price={5950}
                        ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                        img="pizza1"
                    />
                    <CardPizza
                        name="Española"
                        price={6950}
                        ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                        img="pizza2"
                    />
                    <CardPizza
                        name="Pepperoni"
                        price={6950}
                        ingredients={["mozzarella", "pepperoni", "orégano"]}
                        img="pizza3"
                    />
                </div>
            </div>
        </>
    );
}

export default Home;