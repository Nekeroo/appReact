import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <div >
            <NavLink className='navBar' to='/home'>Accueil</NavLink>
            <NavLink className='navBar' to='/projects'>Les Projets</NavLink>
            <NavLink className='navBar' to='/about'>A propos</NavLink>
        </div>
    )
}

export default Nav;