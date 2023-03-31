import Ensemble from "../Pages/Ensemble";
import buttonText from "./Bouton";
import Navbar from "./Header/navbar";

export default function Menu (){
    return (
        <div className="menu">
            <Navbar />
            <Ensemble />
        </div>
    );
}