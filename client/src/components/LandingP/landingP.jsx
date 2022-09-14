import React from "react";
import { Link } from "react-router-dom";
import s from "./landing.module.css"



export default function LaningPage(){
    return(
        <div className={s.landingPage}>
            <div className={s.container}>
            {<img className={s.img} src="https://3.bp.blogspot.com/-RzsAO993gtw/W1dFHnTUrGI/AAAAAAAAp-M/2_lCCA7eKJMWMqP2hOM794dEcLZGjoMewCEwYBhgL/s1600/world_flags_globe_2.gif" alt="" />}
            <h1 className={s.bienvenidos}>Countries PI</h1>
            </div>
            <div className={s.containerBoton}>
                <Link to="/home">
                    <button className={s.boton}>Continuar</button>
                </Link>
            </div>
        </div>
    )
}

