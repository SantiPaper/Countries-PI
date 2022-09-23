import React from "react";
import s from "./paginado.module.css"


const Paginate = ({ countriesPage, allCountries, paginado, setCurrentPage, currentPage,firstCountryPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPage); i++) {
    pageNumbers.push(i);
  }


  const sumar = () => {
   
    if(currentPage === pageNumbers.length  || currentPage === 25) {
      return
    } else{
    setCurrentPage(currentPage + 1)
  }
  }

  const restar = () => {
    if( currentPage === 1){
      return
    }else{
      setCurrentPage(currentPage - 1)
  }
  }
  const marto = (e) => {
  if( currentPage === pageNumbers[e - 1]){
    return true
  } else{
    return false
  }
  }

  return (
    <div className={s.gral}>
    <div className={s.bordeP}>
    <nav className={s.navi} >
      <ul className={s.ul} >
      <button  className={s.nav}  onClick={(e) => restar(e)} >🡸</button>
        {pageNumbers.map((e) => (
          <button  onClick={() => paginado(e)} key={e} className={marto(e) ? s.buttonf : s.button}>
            {e}
          </button>
        ))}
        <button  className={s.nav}  onClick={(e)=> sumar(e)} >🡺</button>
      </ul>
    </nav>
    </div>
    </div>

  );
};

export default Paginate;

