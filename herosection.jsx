import { Link } from "react-router-dom"
import { heroData } from "./config"

 export const NotAvialable =() =>{
    return(
        <div className="workingmessage">
        <h1>currently working on this</h1>
        <p>we are coming with the our hero section very soon!</p>
        </div>
    )
}

const Hero = (props) => {
    return(
        <div className="cardhero">
         <Link to="/hero"> <img src={props.herodata.image} alt="hero" /> </Link> 
        </div>
    )
}
const Herosection = () =>  {
    return (
        <div className="container"> 
           {heroData.map((herodata,i) => <Hero key={i} herodata={herodata}/>)}
        </div>
    )
}

export default Herosection;