import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
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
