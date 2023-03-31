import dataMenu from "../components/dataMenu";
import Footer from "../components/Footer/footer";

export default function Boissons(){
    const menu=dataMenu;

    return(
        <div>
            <ul>
                {menu.map((plat)=>{
                    if(plat.category === "| Boissons |"){

                    
                    return(
                        <ul>
                        <li><span>{plat.name}</span> <span>{plat.category}</span> <span>{plat.prix}</span></li>
                        </ul>
                    )}
                }
            )}
                
            </ul>
            <Footer />
        </div>
    );
}