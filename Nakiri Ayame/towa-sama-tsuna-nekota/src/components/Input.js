"use client"

export default function Input() {

    function cambio() {
        console.log("CAMBIE")
    }

    return(
        <>
            <input type="text" onChange={cambio}></input>
        </>
    )
}