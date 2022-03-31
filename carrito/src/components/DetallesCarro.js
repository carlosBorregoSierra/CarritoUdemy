import { Component } from "react";

const styles = {
    detallesCarro: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
    }
}

class DetallesCarro extends Component{
    render(){
        const {carro} = this.props;
        console.log(carro)
        return(
            <div style={styles.detallesCarro}>
                <ul>
                    {carro.map(x => <li key={x.name}>{x.name}</li>)}
                </ul>
            </div>
        );
    }
}
export default DetallesCarro;