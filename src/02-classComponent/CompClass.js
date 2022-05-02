import React, {Component} from "react";


export default class CompClass extends Component{

    constructor(){
        //propiedades y metodos
        super();
        this.center = 'SocraTech'
        this.course = ['React', 'Node']
        this.saludar = () => {console.log('hola')}
    }

    render() {
        return(
            <>
                <h1>Mi primer componenete de clase</h1>
                <p>{this.course[0]}</p>
            </>
        )
    }




}