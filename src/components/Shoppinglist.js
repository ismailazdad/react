import {plantList} from '../datas/plantList'
import {useState} from 'react'
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import { MdOutlineAdd} from 'react-icons/md';
import '../style/Shoppinglist.css'

function ShoppingList({cart, updateCart}) {
    const [activeCategory, setActiveCategory] = useState('')
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    function sortCart(myArray) {
        return myArray.sort((a, b) =>
            (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
        )
    }

    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        let result = []
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            result = [
                ...cartFilteredCurrentPlant,
                {name, price, amount: currentPlantSaved.amount + 1}
            ]
        } else {
            result = [...cart, {name, price, amount: 1}]
        }
        updateCart(sortCart(result))
    }

    return (
        <div className='lmj-shopping-list'>
            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover, name, water, light, price, category,details}) =>
                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <PlantItem
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                price={price}
                                category={category}
                                details={details}
                            />
                            <button title="add article" onClick={() => addToCart(name, price)}><MdOutlineAdd /></button>
                        </div>) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList