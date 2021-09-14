import * as React from "react";
import Card from './Card';
import ItemList from './ItemList';
import "./ItemListContainer.css";

function ItemListContainer () {
    return(
        <div className="ItemListContainer">
            <h2>Bienvenidos espacio provisorio</h2>
            <Card/>
            <ItemList/>
        </div>
            
            
    )
}
export default ItemListContainer;