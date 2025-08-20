"use client" //

export default function Button({texto}) {
    function imprimir() {
        console.log("Me han clickeado tio")
    }
    return(
        <>
            <button onClick={imprimir}>{texto}</button>
        </>
    )
}