import { plantList } from '../datas/plantList'
import CareScale from '../components/CareScale'
import PlantItem from "./PlantItem";
import '../style/Shoppinglist.css'

function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            {/*<ul  className='lmj-plant-list'>*/}
            {/*    {plantList.map((plant) => (*/}
            {/*        <li key={plant.id}  className='lmj-plant-item'>{plant.name}*/}
            {/*            {plant.isBestSale && plant.category === "extérieur" && <span>🔥</span>}*/}
            {/*            {plant.isSpecialOffer  && <div>solde</div> }*/}
            {/*            <CareScale careType='light' scaleValue={plant.light} />*/}
            {/*            <CareScale careType='water' scaleValue={plant.water} />*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}

            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light }) => (
                    <PlantItem
                        key={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                    />
                ))}
            </ul>

        </div>
    )
}

export default ShoppingList