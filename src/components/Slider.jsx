import dataSlider from "./dataSlider";
import { useEffect, useState } from "react";
import "./slider.css";
import Navbar from "./Header/navbar";
import Footer from "./Footer/footer";

let position = 0;
let interval = null;

export default function Slider () {
    const [currentSlide, setCurrentSlide] = useState(dataSlider[0]);

    const nextSlide = ()=>{
        position++;
        if (position > dataSlider.length-1){
            position = 0;
        }
        setCurrentSlide(dataSlider[position]);
    }
    
    useEffect(()=>{
        interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
});
    return (
        <div>
            <h1>Chantal vous accueille à sa table !</h1>
            <figure>
                <img src={currentSlide.url} alt={currentSlide.alt} />
                <figcaption>{currentSlide.alt}</figcaption>
            </figure>
            <Navbar />
            <Footer />
        </div>
    );
        
    
}