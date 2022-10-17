import CareScale from './CareScale'
import '../style/PlantItem.css'
import {useState} from 'react'
import { FaSearchengin } from 'react-icons/fa';
import {Button, Modal} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"


function handleClick(e) {
    console.log('✨ Ceci est mon event :', e)
}

function PlantItem({cover, name, water, light, price, category, details}) {

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)

    return (
        <div>
            <li className='lmj-plant-item' onClick={() => handleClick(name)}>
                <span className='lmj-plant-item-price'>{price}€</span>
                <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}/>
                {name}
                <div>
                    <CareScale careType='water' scaleValue={water}/>
                    <CareScale careType='light' scaleValue={light}/>
                </div>
                <Button variant="secondary" onClick={handleShow} title='detail'>
                    <FaSearchengin />
                </Button>
            </li>

            <Modal show={show}>
                <Modal.Header onClick={() => setShow(false)} closeButton>
                    <Modal.Title><h1>{name} </h1> cat : {category} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <li className='lmj-plant-item' onClick={() => handleClick(name)}>
                        <span className='lmj-plant-item-price'>{price}€</span>
                        <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}/>
                        {name}
                        <div>
                            <CareScale careType='water' scaleValue={water}/>
                            <CareScale careType='light' scaleValue={light}/>
                        </div>
                        <span>{details}</span>
                    </li>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>Close </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default PlantItem