import { Component } from "react";

class Producto extends Component{
    render(){
        const {producto} = this.props
        return(
            <div>
                <img alt={producto.name} src={producto.img}/>
                <h3>{producto.name}</h3>
                <p>precio: ${producto.price}</p>
            </div>
        );
    }
}
export default Producto;