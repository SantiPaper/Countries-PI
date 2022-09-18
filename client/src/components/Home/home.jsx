import React from "react";
import s from "./home.module.css"
import SearchBar from "./SearchBar/searchBar";
import { Link } from "react-router-dom";
import FilterActivities from "./Filters/filters";
import { getActivities, getCountries } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Paginate from "../Paginado/paginado";
import Country from "../Country/country";
import Ordened from "./Orders/orders";

export default function Homee() {
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, []);        

  

  const [currentPage, setCurrentPage] = useState(1);
  
  
  
  const [countriesPage ] = useState(10);
  /* const [countriesPage2 ] = useState(9); */


  

  
  
  
  const lastCountrie = currentPage * countriesPage; // 10-20 etc
  const firstCountrie = lastCountrie - countriesPage; //   1-10
  
  
  
  let currentCountries = allCountries.slice(firstCountrie, lastCountrie);
   if(currentPage > 1){
     currentCountries = allCountries.slice(firstCountrie, lastCountrie);
   } else {
     currentCountries = allCountries.slice(firstCountrie, 9);
   }



      
  
  /* const currentCountries = allCountries.slice(firstCountrie, lastCountrie);  */

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  

  if(currentCountries.length === 0) {
    return (
      <div>
         
            <div className={s.divBotton}>
          <Link to="/home">
          <button className={s.botonLoading} onClick={(c) =>  handleClick(c) } > Recargar paises </button>
        </Link>
          </div>
        <div className={s.boxLoading}>
          <h1 className={s.cargandoPaises}>Cargando paises..</h1>
        </div>
          <div className={s.div_loading}>
          <img className={s.loading} src = "https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" alt="Img"  />
         </div>
          </div>)

  } 

  function handleClick(c) {
    c.preventDefault();
    dispatch(getCountries());
    setCurrentPage(1)
  }

  return (
    
    <div>
      
      <button  onClick={(c) =>  handleClick(c) } className={s.refresh}  > Volver a cargar paises </button>
      
      <div className={s.search}>
        <SearchBar className={s.busqueda} />
      </div>
      
      <div className={s.paginate}>
        <Paginate 
          countriesPage={countriesPage}
          allCountries={allCountries.length}
          paginado={paginado}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      

      <div className={s.contCreate}>
        <Link to="/createActivity">
          <button className={s.create}></button>
        </Link>
      </div>


      

      <div className={s.ordenes}>
      <FilterActivities  setCurrentPage={setCurrentPage} />
      <Ordened setCurrentPage={setCurrentPage}/>
      
      </div>

      <div className={s.container}>
      {currentCountries.map((e) => {
            return (
              <Country
                key={e.idApi}
                idApi={e.idApi}
                name={e.name}
                continent={e.continent}
                img={e.img}
                population={e.population}
              />
            );
          })}
      </div>
    </div>
  );
}
