import '../style/Cart.css'
import {useEffect, useState} from 'react'
import plus from "../assets/plus.jpg";
import moins from "../assets/moins.png";

function Cart({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(true)
    // const [activeCategory, setActiveCategory] = useState('')
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )

    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])

    function sortCart(myArray) {
        return myArray.sort((a, b) =>
            (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
        )
    }

    function removeOneItem(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        const cartFilteredCurrentPlant = cart.filter(
            (plant) => plant.name !== name
        )
        let result
        if (currentPlantSaved.amount > 1) {
            result = [...cartFilteredCurrentPlant,
                {name, price, amount: currentPlantSaved.amount - 1}]
        } else {
            result = [...cartFilteredCurrentPlant]
        }
        updateCart(sortCart(result))
    }

    function addOneItem(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        const cartFilteredCurrentPlant = cart.filter(
            (plant) => plant.name !== name
        )
        let result = [...cartFilteredCurrentPlant,
            {name, price, amount: currentPlantSaved.amount + 1}]
        updateCart(sortCart(result))
    }


    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Close
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Basket</h2>
                    <ul>
                        {cart
                            .map(({name, price, amount}, index) => (
                                <div className='lmj-container justify-content-between' key={`${name}-${index}`}>
                                    <img alt='' onClick={() => removeOneItem(name, price)} className='imgtest' src={moins}/>
                                    <div> {name} {price}€ x {amount}</div>
                                    <img onClick={() => addOneItem(name, price)} alt='' className='imgtest' src={plus}/>
                                </div>
                            ))}

                    </ul>
                    <h3>Total :{total}€</h3>
                    <button onClick={() => updateCart([])}>Close basket</button>
                </div>
            ) : (
                <div>Basket is empty</div>
            )}
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Open basket
            </button>
        </div>
    )
}

export default Cart