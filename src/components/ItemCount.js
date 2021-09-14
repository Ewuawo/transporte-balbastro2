import * as React from "react";
function ItemCount({ stock, initial,  onAdd }) {
    // Desarrollar lógica
    const[counter, setCounter] = React.useState(1);;
    const handleClick=()=>{
            setCounter((prevState)=>prevState+1);
    };
    const handleClickMenos=()=>{
        setCounter((prevState)=>prevState-1);
};
    return(
        <div className="ItemCount">
            <h2>Contador</h2>
            <h3>Desafio 5</h3>
            <button onClick={handleClick}>+</button>
            <p> Cantidad{counter}</p>
            <button onClick={handleClickMenos}>-</button>
            <button onClick={onAdd}>agregar al Carrito</button>
        </div>
    )
}  
export default ItemCount;
//    const Desafio =()=>{
//        const[counter, setCounter] = React.useState(0);
//        const handleClick=()=>{
//            setCounter((prevState)=>+1);
//        };
//        return(
//            <div>
//                <p> asdaasdsa{counter}</p>
//                <button onClick={handleClick}>+</button>
//            </div>
//        );
//    };
//    export default Desafio;
   