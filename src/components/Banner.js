
import logo from '../assets/logo.png'
import '../style/Banner.css'

function Banner() {
    const name = "La maison jungle"
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='La maisonjungle' className='lmj-logo' />
            <h1 className='lmj-title'>{name}</h1>
        </div>
    )
}

export default Banner