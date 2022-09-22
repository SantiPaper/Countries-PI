import { useDispatch } from "react-redux";
import { searchCountries } from "../../../redux/actions";
import { useState } from "react";
import s from "./searchBar.module.css"
import { Link } from "react-router-dom";




export default function SearchBar({setCurrentPage,currentPage}){

    const [search, setSearch] = useState("")

    const dispatch = useDispatch()

    function onSubmit(e){
     e.preventDefault();
     dispatch(searchCountries(search))
     setSearch("")
     if(currentPage){
     setCurrentPage(1)
    }
    }


     function onInputChange(e){
    setSearch(e.target.value)
    } 

    

    return (
     <div className={s.santi}>
      <div className={s.divHijo}>
        
      <form className={s.bb} onSubmit={onSubmit} >
        <input className={s.a} type="text" placeholder=" Buscar pais                 | 🔍" onChange ={onInputChange} value={search}/>
        <input className={s.b} type="submit" value = "Buscar" />
      </form>

      </div>
      <div className={s.caca}>
      <Link to={"/home/about"}>
        <button className={s.buton}>About</button>
        </Link> 
        </div>
      
    </div>
    )
}