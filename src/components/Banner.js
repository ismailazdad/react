
// import logo from '../assets/logo.png'
import '../style/Banner.css'
// import '../components/Recommendation'
import Recommendation from "./Recommendation";



// function Banner() {
//     const name = "La maison jungle"
//     return (
//         <div className='lmj-banner'>
//             <div className='lmj-banner-row'>
//                 <img src={logo} alt='La maisonjungle' className='lmj-logo' />
//                 <h1 className='lmj-title'>{name}</h1>
//             </div>
//             <Recommendation />
//         </div>
//     )
// }

//autre possibilite appeler le composant children, cela
//permet d appeler le composant sans forcement savoir ce que contient le dom children
function Banner({ children }) {
    return <div className='lmj-banner'>{children}
        <Recommendation />
    </div>
}

export default Banner