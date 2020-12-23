import react from "react";
import { Link } from "react-router-dom";

const Cabecera = () => {
    <header>
        <h1>Esto es la cabecera</h1>
        <ul>
            <li>
                <Link to="/inicio">Barcos</Link>
            </li>
            <li>
                <Link to="/contacto">Contacto</Link>
            </li>
        </ul>
    </header>
}

export default Cabecera;