import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCountryById, clearDetail } from "../../redux/actions";
import { useEffect } from "react";
import s from "./countryDetail.module.css";

export default function DetailCountries() {
  const dispatch = useDispatch();
  const { idApi } = useParams();
  const detailCountry = useSelector((state) => state.countriesDetail);

   useEffect(() => {
    dispatch(getCountryById(idApi));
  }, []); 
  
  if (detailCountry.length > 2 || detailCountry.length < 1) {
    return (
      <div >
        <img className={s.cargando} src="https://raw.githubusercontent.com/gist/brudnak/aba00c9a1c92d226f68e8ad8ba1e0a40/raw/e1e4a92f6072d15014f19aa8903d24a1ac0c41a4/nyan-cat.gif" alt="Img" />
        <Link to="/home">
          <button className={s.refresh}> Volver al inicio</button>
        </Link>
      </div>
    );
  }

  return (
    <div className={s.fondo}>
      <div className={s.backToHome}>
      <Link to="/home">
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
                
                <p>Capital: {detailCountry.capital}</p>
                <p>Continente:{detailCountry.continent}</p>
                <p>Poblacion: {detailCountry.population}</p>
                <p>Subregion: {detailCountry.subregion}</p>
                <p>Area: {detailCountry.area}</p>
                <p>Codigo: {detailCountry.idApi}</p>
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
              detailCountry.activities.map((activity) => {
                return ( 
                    <div className={s.description}>
                    <p className={s.activityStuf}>
                      {" "}
                      {activity.name.toUpperCase()}
                    </p>
                    <p className={s.activityStuf}>
                      Dificultad: {activity.difficulty}
                    </p>
                    <p className={s.activityStuf}>
                      Duracion: {activity.duration}
                    </p>
                    <p className={s.activityStuf}>
                      Temporada: {activity.season}
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
}

{
  /* <div className={s.activities}>
<div className={s.nameOfActivities}>
<h2>Actividades turisticas ⛷️</h2>
</div>
<div className={s.boxDescription}>
{detailCountry.activities ? (
 detailCountry.activities.map((activity) => {
   return (
     <div className={s.description}>
       <p className={s.activityStuf}> {activity.name.toUpperCase()}</p>
       <p className={s.activityStuf}>Dificultad: {activity.difficulty}</p>
       <p className={s.activityStuf}>Duracion: {activity.duration}</p>
       <p className={s.activityStuf}>Temporada: {activity.season}</p>
     </div>
   );
 })
) : (
 <>
   <h2>No hay actividades</h2>
  
 </>
)}

</div>
</div> */
}
