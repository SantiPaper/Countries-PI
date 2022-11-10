import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCountryById } from "../../redux/actions";
import { useEffect } from "react";
import s from "./countryDetail.module.css";
import Error from "../404Error/error";
import loading from "../Loading/loading";
import Loading from "../Loading/loading";

export default function DetailCountries() {
  const dispatch = useDispatch();
  const { idApi } = useParams();
  const detailCountry = useSelector((state) => state.countriesDetail);

   useEffect(() => {
    dispatch(getCountryById(idApi));
  }, []); 
  
  console.log(detailCountry );

  if(idApi === detailCountry.idApi){
    return(
    <div className={s.fondo}>
      <div className={s.backToHome}>
      <Link to="/">
          <button className={s.boton}> </button>
        </Link>
      </div>
      <div className={s.fondo2}>
        <div className={s.nameCountry}>
          <h1> {detailCountry.name.toUpperCase()}</h1>
        </div>

        <div className={s.boxDown}>
          <div className={s.topBox}>
            <div className={s.image}>
              
              <img
                className={s.sizeImg}
                src={`${detailCountry.img}`}
                alt="Imagen bandera"
              />
            </div>

            <div className={s.left}>
              <div className={s.details}>
                
                <p>Capital    :    {detailCountry.capital}</p>
                <p>Continente    :    {detailCountry.continent}</p>
                <p>Poblacion    :     {detailCountry.population}</p>
                <p>Subregion    :     {detailCountry.subregion}</p>
                <p>Area    :     {detailCountry.area}</p>
                <p>Codigo    :     {detailCountry.idApi}</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className={s.activities}>
          <div className={s.nameOfActivities}>
            <h2>Actividades turisticas ⛷️</h2>
          </div>
          <div className={s.boxDescription}>
            {detailCountry.activities.length ? (
              detailCountry.activities.map((e) => {
                return ( 
                    <div key={e.name} className={s.description}>
                    <p className={s.activityStuf}>
                      {" "}
                      {e.name.toUpperCase()}
                    </p>
                    <p className={s.activityStuf}>
                      Dificultad: {e.difficulty}
                    </p>
                    <p className={s.activityStuf}>
                      Duracion: {e.duration}
                    </p>
                    <p className={s.activityStuf}>
                      Temporada: {e.season}
                    </p>
            </div>
            
                )
              })
            ) : (
              <div className={s.no}>
                <h2 > No hay actividades 😔 </h2>
              </div>
            )}
          </div>
        </div>
        </div>
        </div>
        );
} else{
  return (
    <Loading/>
  )
}


}