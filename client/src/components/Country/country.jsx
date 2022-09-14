import { Link } from "react-router-dom";
import s from "./country.module.css"

export default function Country({ idApi, img , name , continent, population}) {
    return (
        <Link to={"/home/" + idApi}>
        <div className={s.country}>
        <img className={s.imgCountry} src={img} alt={name} width="200px" height="120px" />
        <h3 className={s.name}>{name}</h3>
        <p className={s.continente}> Continente : {continent}</p>
        <p className={s.poblacion}>Poblacion : {population}</p>
    </div>
        </Link>
    )
}