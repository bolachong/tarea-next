"use client"

import Button from "./Button"
import Input from "./Input"

export default function Form({texto}) {
    return(
        <>

            <h3>Usuario:</h3>
            <Input></Input>
            <h3>Mail:</h3>
            <Input></Input>
            <h3>Contraseña:</h3>
            <Input></Input>

            <Button texto={texto}></Button>  

        </>
    )
}