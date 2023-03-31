import dataMenu from "../components/dataMenu";

export default function Ensemble(){
    const menu=dataMenu;

    return(
        <div>
                {menu.map((plat)=>{
                    if (plat.category !== "| Boissons |"){
                    return(
                        <ul>
                        <li><span>{plat.name}</span> <span>{plat.category}</span> <span>{plat.prix}</span></li>
                        </ul>
                    )}
                }
            )}
                
        </div>
    );
}