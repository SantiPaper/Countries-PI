import React from "react";
import s from "./paginado.module.css"
import { useState } from "react";

const Paginate = ({ countriesPage, allCountries, paginado }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPage); i++) {
    pageNumbers.push(i);
  }

  const [Page, setPage] = useState(1)

  function cambiarPage(e) {
    setPage(e.target.value)
  }
  

  return (
    <div className={s.bordeP}>
    <nav >
      <ul className={s.ul} >
        {pageNumbers.map((e) => (
          <button  onClick={() => paginado(e)} key={e} className={s.button}>
            {e}
          </button>
        ))}
      </ul>
    </nav>
    </div>

  );
};

export default Paginate;