import { useDispatch } from "react-redux";
import { searchCountries } from "../../../redux/actions";
import { useState } from "react";
import s from "./searchBar.module.css"




export default function SearchBar(){

    const [search, setSearch] = useState("")

    const dispatch = useDispatch()

    function onSubmit(e){
     e.preventDefault();
     dispatch(searchCountries(search))
     setSearch("")
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
    </div>
    )
}