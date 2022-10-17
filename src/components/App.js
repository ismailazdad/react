import '../style/App.css';
import '../style/Layout.css';
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from "./Shoppinglist";
import Footer from "./Footer";
import logo from '../assets/logo.png'
import {useState, useEffect} from 'react'

function App() {
    const savedCart = localStorage.getItem('cart')
    // const [cart,updateCart] = useState([])
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo'/>
                <h1 className='lmj-title'>The jungle house</h1>
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart}  />
            </div>
            <Footer/>
        </div>
    )
}

export default App;
