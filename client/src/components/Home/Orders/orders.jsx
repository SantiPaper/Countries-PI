import { useDispatch } from "react-redux";
import {  orderPopulation } from "../../../redux/actions";
import {  orderCountries } from "../../../redux/actions";
import s from "./orders.module.css"

export default function Ordened({ setCurrentPage}) {
  const dispatch = useDispatch();

  function onSelectChange(e) {
    dispatch(orderCountries(e.target.value));
    setCurrentPage(1)
  }

  function onSelectChangee(e) {
    dispatch(orderPopulation(e.target.value));
    setCurrentPage(1)
  }


  return (
    <div className={s.divFlex}>
    <select className={s.select1} name="All" onChange={onSelectChange}>
      <option className={s.hidden_option} hidden={true} >Ordenes A-Z</option>
      <option className={s.radius} value="low">A-Z</option>
      <option className={s.radius} value="top">Z-A</option>
    </select>
    
    <select  className={s.select2} name="select" onChange={onSelectChangee}>
      <option hidden={true} >Ordenes poblacion</option>
      <option className={s.radius} value="low">Ascendente</option>
      <option className={s.radius} value="top">Descendente</option>
    </select>
   
    </div>
  );
}

