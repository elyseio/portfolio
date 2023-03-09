import "../components/Banner.css";
import banner from "../assets/evil-morty-matrix.png";


export default function Banner() {
    return(
        <div className="wrapper">
            <div className="image-container">
                <img src={banner} />
            </div>
            <p>
                We,(glitch)...welcome! You've found the portfolio o..of (glitch)... Weird,
                anyway, this is an interactive web terminal.
                For a list of available commands, type <span className="help">'help'</span>.
            </p>
            
        </div>
    )
}