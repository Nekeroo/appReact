import React from "react";

function About() {
    return(
        <div>
            <h1>A propos de ce site web</h1>
            <p>Ce site web permet de voir l'utilisation de <b>React</b> avec l'API de <b><a href="https://framagit.org/">Framagit</a></b></p>
            <h3 className="littleTitle">
                Fonctionnalités disponibles
            </h3>
            <ul>
                <li>Possiblité de voir les projets attitrés à l'utilisateur Nekeroo</li>
                <li>Possibilité de voir les issues attribués à un projet sélectionné
                    <br/>
                    En cliquant sur l'issue, on arrive sur la page framagit concernant l'issue
                </li>
            </ul>
        </div>
    )
}

export default About