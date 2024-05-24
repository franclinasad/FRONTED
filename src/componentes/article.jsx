import React from "react"

import { ServicioCliente } from "./serviceClient"
import {  Inicio } from "./index"
import { John } from "./imagen"
import { TipoPago } from "./tipoPago"


export const Article = ({activeComponent})=>{

    const renderActiveComponent = () => {
        switch (activeComponent){
            case 'ServicioCliente':
                return <ServicioCliente />;
            case 'John':
                return <John />
            case 'Inicio':
                return <Inicio /> 
            case 'TipoPago':
                return <TipoPago/>   
            default:
                return <Inicio />     

        }
    }

    return(
        <div className="relative w-full min-h-screen"> 
            {renderActiveComponent()}
        </div>
    )
}