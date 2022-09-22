import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { filterActivity } from "../../../redux/actions"; 
import { filteredContinent } from "../../../redux/actions";
import s from "./filters.module.css"


const FilterActivities = ({setCurrentPage}) => {
    const dispatch = useDispatch();
    const activitiesCreate = useSelector((state) => state.activities)
    
     

     
    function handleFilter(e){
        e.preventDefault();
        dispatch(filterActivity(e.target.value));
        setCurrentPage(1)
        
    } 

    function handleFilteredContinent(e) {
        e.preventDefault();
         dispatch(filteredContinent(e.target.value));
         setCurrentPage(1)
      } 

    
 
    return (
        <div className={s.divFlex}>
            <select className={s.select1} onChange= {(e) => handleFilter(e)}>
                <option  hidden={true} value='none'>Seleccione actividad</option>
                {activitiesCreate && activitiesCreate.map(e => {
                    return (
                        <option  className={s.radius} key={e.id} value={e.name}>
                            {e} 
                            </option>
                    )})}
            </select>
             
            
                <select className={s.select2} onChange={(e) => handleFilteredContinent(e)}>
                <option className={s.radius} hidden={true} value="All">Todos</option>
                <option className={s.radius} value="Americas">America</option>
                <option className={s.radius} value="Asia">Asia</option>
                 <option className={s.radius} value="Africa">Africa</option>
                 <option className={s.radius} value="Europe">Europa</option>
                <option className={s.radius} value="Oceania">Oceania</option>
                  <option className={s.radius} value="Antarctic">Antarctic</option>
                </select>
                
             

        </div>

    )
    
}

export default FilterActivities