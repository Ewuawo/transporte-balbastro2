import * as React from "react";
import item from './Item';

function ItemList () {
    return(
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <ul>
                
                <li>{item.title}</li>;
               
            </ul>
        </div>
    )
}
export default ItemList;