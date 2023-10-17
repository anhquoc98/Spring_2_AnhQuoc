import './App.css';
import Header from "./component/home/Header";
import Home from "./component/home/Home";
import Login from "./component/Login";
import ProductDetail from "./component/product/ProductDetail";
import Product from "./component/product/Product";
import Cart from "./component/cart/Cart";
import Footer from "./component/home/Footer";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/product-detail/:id' element={<ProductDetail/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
            <Footer/></>
    );
}

export default App;
