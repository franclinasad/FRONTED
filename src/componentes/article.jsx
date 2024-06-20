import React from "react"

import { ServicioCliente } from "./serviceClient"
import {  Inicio } from "./index"
import { John } from "./imagen"
import { TipoPago } from "./tipoPago"
import Productos from "./productos"
import Ofertas from "./ofertas"
import Carito from "./Carito"
import Pedidos from "./Pedidos"



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
            case 'Productos':
                return <Productos/>
            case 'Ofertas':
                return <Ofertas/>
            case 'Carito':
                return <Carito/>
            case 'Pedidos':
                return <Pedidos/>   
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