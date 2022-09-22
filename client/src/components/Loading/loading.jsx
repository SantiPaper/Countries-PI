import s from "./loading.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SearchBar from "../Home/SearchBar/searchBar";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";


const Loading = () => {

const [cargando,setCargando] = useState("Cargando")
const [img,setImg] = useState("https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif")
const dispatch = useDispatch()


useEffect(() => {
    setTimeout(() => {
        setCargando("Busqueda no encontrada :(");
        setImg("https://i.pinimg.com/originals/fb/ed/b2/fbedb25b550829b8b4c4984b45992b39.gif");
    }, 3000);
  }, []);

  
  function handleClick(c) {
    dispatch(getCountries())
  }

  return (
    <div className={s.fondo}>
      <div className={s.box}>
        <div className={s.contCreate}>
        {/* <Link to={"/"}> 
          <button  onClick={(c) =>  handleClick(c) } className={s.refresh}  > Volver a cargar paises </button>
          </Link> */}
           <SearchBar/>
        </div>
        <h1 className={s.activityStuf}>{cargando}</h1>
        <img
          className={s.img}
          src={img}
          alt="loading"
        />
        
      </div>
    </div>
  );
};

export default Loading;
