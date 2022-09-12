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
  const [, setOrdered] = useState("");
 

  const lastCountrie = currentPage * countriesPage; //10
  const firstCountrie = lastCountrie - countriesPage; //   0


  const currentCountries = allCountries.slice(firstCountrie, lastCountrie); // 0,1,2,3,4,5,6,7,8,9

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  

  if(currentCountries.length === 0) {
    return (
    <div>
          <img src = "https://cdefis.edu.mx/wp-content/uploads/2022/06/Earth.gif" alt="Img"  />
    </div>)
  } 

  function handleClick(c) {
    c.preventDefault();
    dispatch(getCountries());
  }

  return (
    
    <div>
      
      <button onClick={(c) =>  handleClick(c) } className={s.refresh}> Volver a cargar paises </button>
      
      <div className={s.search}>
        <SearchBar className={s.busqueda} />
      </div>
      
      <div className={s.paginate}>
        <Paginate 
          countriesPage={countriesPage}
          allCountries={allCountries.length}
          paginado={paginado}
        />
      </div>

      

      <div className={s.contCreate}>
        <Link to="/createActivity">
          <button className={s.create}></button>
        </Link>
      </div>


      

      <div className={s.ordenes}>
      <FilterActivities  setCurrentPage={setCurrentPage} />
      <Ordened setCurrentPage={setCurrentPage} setOrdered={setOrdered}/>
      
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
