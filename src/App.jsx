import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import Footer from "./components/Footer/Footer";


const App =()=> {
  
  return (
    <>
        <Navbar />
        <Home />
        <Register />
        <Login />
        <Cart />
        <Footer />
    </>
  );
}

export default App;
