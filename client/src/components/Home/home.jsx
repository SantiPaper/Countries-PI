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
import Loading from "../Loading/loading";
import { useParams } from "react-router-dom";


export default function Homee() {
  const dispatch = useDispatch();
  const { name } = useParams();

  const allCountries = useSelector((state) => state.countries);
  const allActivities = useSelector((state) => state.activities)
  


  
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, []);        

  
 

  const [currentPage, setCurrentPage] = useState(1);
  
  
  
  const [countriesPage ] = useState(10);
  /* const [countriesPage2 ] = useState(9); */


  

  
  
  
  const lastCountrie = currentPage* countriesPage; // 10-20 etc
  const firstCountrie = lastCountrie - countriesPage; //   1-10
  
  
  /* 
  let currentCountries = allCountries.slice(firstCountrie, lastCountrie);
   if(currentPage > 1){
     currentCountries = allCountries.slice(firstCountrie, lastCountrie);
   } else {
     currentCountries = allCountries.slice(firstCountrie, 9);
   } */

   const searchi = () => {
if(typeof(allCountries) === "string"){
  return false
}else{
  return true
}
}




      
  
  const currentCountries = allCountries.slice(firstCountrie, lastCountrie); 

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  

  if(currentCountries.length === 0) {
    return (
      <div>
      {/* <div className={s.search}>
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
      </div> */}
      <Loading/>
      </div>
      
    )
  } 

  function handleClick(c) {
    c.preventDefault();
    dispatch(getCountries());
    setCurrentPage(1)
  }

  return (
    
    <div className={s.body}>
      
      <button  onClick={(c) =>  handleClick(c) } className={s.refresh}  > Volver a cargar paises </button>
      {searchi() ?
      <div /* className={s.divGeneral} */ >
        <SearchBar 
         currentPage={currentPage}
        setCurrentPage={setCurrentPage} />
        
         {/*  <Link to={"/home/about"}>
        <button className={s.buton}>About</button>
        </Link> */}
        
      </div> : null}
      

      {searchi() ?
      <div className={s.paginate}>
        <Paginate 
          countriesPage={countriesPage}
          allCountries={allCountries.length}
          paginado={paginado}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div> : null}

      
      {searchi() ?
      <div className={s.contCreate}>
        <Link to="/createActivity">
          <button className={s.create}></button>
        </Link>
      </div> : null}


      
       {searchi() ?
      <div className={s.ordenes}>
      <FilterActivities  setCurrentPage={setCurrentPage} />
      <Ordened setCurrentPage={setCurrentPage}/>
      
      </div> : null}

      <div className={s.container}>
        <div>
          
        </div> 
        {searchi() ?
      currentCountries.map((e) => {
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
          }) : <Loading/>}
      </div>
    </div>
  );
}
