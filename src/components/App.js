import '../style/App.css';
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from "./Shoppinglist";
import logo from '../assets/logo.png'
function App() {
    return (
        <div>
            <Banner>
                <img src={logo} alt='La maisonjungle' className='lmj-logo' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            <Cart/>
            <ShoppingList />
        </div>
    );
}

export default App;
