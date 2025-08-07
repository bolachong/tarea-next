"use client" //

export default function Button() {
    function imprimir() {
        console.log("Me han clickeado tio")
    }
    return(
        <>
            <button onClick={imprimir}>Clickeame</button>
        </>
    )
}