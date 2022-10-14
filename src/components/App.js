import '../style/App.css';
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from "./Shoppinglist";
import Footer from "./Footer";
import logo from '../assets/logo.png'

function App() {
    // return (
    //     <div>
    //         <Banner>
    //             <img src={logo} alt='La maisonjungle' className='lmj-logo' />
    //             <h1 className='lmj-title'>La maison jungle</h1>
    //         </Banner>
    //         <QuestionForm />
    //         <Cart/>
    //         <ShoppingList />
    //         <Cat />
    //         <Footer />
    //     </div>
    // );

    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo'/>
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart/>
                <ShoppingList/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;
