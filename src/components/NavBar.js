import "./NavBar.css";
import CartWidget from './CartWidget';
//import ItemListContainer from "./ItemListContainer";
function NavBar() {
    return (
        <div id="navegador">
            <ul>
                 <li>Transporte Balbastro</li>
                 <li><a href="#">Inicio</a></li>
                 <li><a href="#">Nosotros</a></li>
                 <li><a href="#">Servicios</a></li>
                 <li><a href="#">Contacto</a></li>
                 <li><a href="#"><CartWidget/></a></li>
            </ul>
        </div>

    );
}
export default NavBar;
