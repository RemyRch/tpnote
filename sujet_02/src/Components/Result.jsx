import React from "react";


export default function Result({ data }) {

    const handleCopy = ({ target }) => {

        target.innerText = "Résultat copié"
        target.classList.add("copied")

        setTimeout(() => {
            target.innerText = "Copier le résultat"
            target.classList.remove("copied")
        }, 2000);

        navigator.clipboard.writeText(data);
    }

    return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Résultat : {data}</span>
        <span onClick={handleCopy} style={{ cursor: "pointer" }} className="copy" >Copier le résultat</span>
    </div>
    );
}
