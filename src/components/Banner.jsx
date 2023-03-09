import { useState } from "react";

import "../components/Banner.css";
import banner from "../assets/evil-morty-matrix.png";

function setMessage() {
    const message = "We,(glitch)...welcome! You've found the portfolio o..of (glitch)... Weird, anyway, this is an interactive web terminal.";
    // const [letter, setLetter] = useState("");

    // setLetter(message);
    // console.log(letter);
    return message;
}



export default function Banner() {
    const message = setMessage();
    
    return(
        <div className="wrapper">
            <div className="image-container">
                <img src={banner} />
            </div>
            <p>
                {message}
            </p>
            <p>
                For a list of available commands, type <span className="help">'help'</span>.
            </p>
            
        </div>
    )
}