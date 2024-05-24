import React from "react";

export const TranferenciaBancaria = ()=>{
    return (

        <div>
            <fieldset>
                <legend>

                </legend>

                <label htmlFor="">Tipo de transferencia</label><input type="text" />
                <label htmlFor="">Formato de Pago</label><input type="text" />
                <label htmlFor="">Fecha de Emision</label><input type="date" />
                <label htmlFor="">Persona</label><input type="text" />
                <label htmlFor="">Cuenta Bancaria</label><input type="text" />
                <label htmlFor="">Numero de comprobante</label><input type="number" />
                <label htmlFor="">Descripcion</label><input type="text" />

                <button>TRANSFERENCIA</button>
            </fieldset>
        </div>
    )
}