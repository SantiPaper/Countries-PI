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
  const [countriesPage] = useState(10);


 /*  const [, setOrdered] = useState("");
  */

  const lastCountrie = currentPage * countriesPage; // 10-20 etc
  const firstCountrie = lastCountrie - countriesPage; //   1-10 etc 

  const currentCountries = allCountries.slice(firstCountrie, lastCountrie); 

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  

  if(currentCountries.length === 0) {
    return (
    <div>
          <img className={s.loading} src = "https://acegif.com/wp-content/uploads/loading-25.gif" alt="Img"  />
          <Link to="/home">
          <button onClick={(c) =>  handleClick(c) } > Volver al inicio </button>
        </Link>
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
