import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postActivity, getActivities, getCountries } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import s from "./createActivity.module.css"


function validateInput(input) {
 let error =  {}
 if(!input.name){
  error.name = "Falta asignar nombre a la actividad"
 }else if (input.name.length > 20){
  error.name = "El nombre es demasiado largo, intentelo denuevo"
 }else if(/[@=$%+"&|< >#0-9]/.test(input.name)){
  error.name = "No se permiten numeros ni simbolos en el nombre de la actividad"
 }
 if(!input.difficulty[0]){
   error.difficulty = "Tiene que seleccionar una dificultad"
}
if(!input.duration){
  error.duration = "Se debe asignar una duracion de actividad"
}else if(input.duration > 300){
  error.duration = "La duracion maxima es de 300 minutos"
}else if(input.duration < 20){
  error.duration = "La duracion minima es de 20 minutos"
}

if(!input.season[0]){
  error.season = "Se debe asignar una temporada"
}

if(!input.countries[0]){
  error.countries = "Se debe seleccionar al menos un pais para asignar la actividad"
}

return error

}





  const CreateActivity = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const acts = useSelector((state) => state.activities)

  const history = useHistory();
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [] ,
  });

  const [error, setError] = useState({});




  useEffect(() => {
    dispatch(getCountries());
  }, []);


  useEffect(() => {
    dispatch(getActivities());
  },[dispatch])

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
 
    
    
    
  }

  function handleCheck(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
    
   
    
  }

  function handleSelect(e) {
    
    setInput({
      ...input,
      countries: input.countries.includes(e.target.value) ? input.countries : [...input.countries, e.target.value]
    });

    
    ;
    
  }

  

  function handleSubmit(e) {
    if(input.name === "" ||
    error.name ||
    input.difficulty === "" ||
    error.difficulty ||
    input.duration === "" ||
    error.duration ||
    input.season === "" ||
    error.season ||
    input.countries[0] === "" ||
    error.countries){
      setError(validateInput({...input,[e.target.name]: e.target.value}))
         e.preventDefault();
    }
    else if (acts.includes(input.name)){
      alert('Actividad creada, intente con otro nombre')
    } else {
      e.preventDefault();
      dispatch(postActivity(input));
      alert("Actividad creada con exito");
      history.push("/");
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: ["Verano", "Otoño", "Invierno", "Primavera"],
        countries: "",
      });
    }
    
  }

  function handleDelete(e) {
    e.preventDefault();
    
    setInput({
      ...input,
     countries: input.countries.filter((i) => i !==  e.target.textContent.trim()),
    });
  }

  



  return (
    <div className={s.background}>

       
        <Link to="/">
          <button className={s.buton} > Volver al inicio 🏠</button>
        </Link>
      

      <div className={s.BoxGral}>
      <div className={s.create}>
      <h1 >CREAR ACTIVIDAD</h1>
      </div>
      <div className={s.alimentacion}>
      <form className={s.form} onSubmit={(e) => handleSubmit(e)} autoComplete="off" >
        <div className={s.place}>
          <label className={s.name}>Nombre de la actividad</label>
          <input className={s.nameActivity}
            type="text"
            name="name"
            value={input.name}
            placeholder="Escribela aqui!"
            onChange={(e) => handleChange(e)}
           />
           <div className={s.error}>
           {error.name && <p className={s.pName}>{error.name}</p>}
           </div>
        </div>

          <div className={s.boxDifficulty}>
            <div className={s.divDifficulty}>
          <label className={s.difficulty}>Dificultad de la actividad</label>
          </div>
          <div className={s.selectDif}>
            <select  className={s.inputDif}
            name="difficulty"
            onChange={(e) => handleChange(e)}
            
            value={input.difficulty}
          >
            <option className={s.centerOption} value="">Seleccione dificultad de la actividad</option>
            <option className={s.centerOption} value="1">1</option>
            <option className={s.centerOption} value="2">2</option>
            <option className={s.centerOption} value="3">3</option>
            <option className={s.centerOption} value="4">4</option>
            <option className={s.centerOption} value="5">5</option>
          </select>
          <div className={s.error}>
          {error.difficulty && <p>{error.difficulty}</p>}
          </div>
        </div>
        </div>

        <div className={s.boxDifficulty}>
          <label className={s.name}>Duracion en minutos</label>
          <input className={s.minutos}
            type="number"
            value={input.duration}
            name="duration"
            placeholder="Min 20 - Max 300"
            onChange={(e) => handleChange(e)}
          />
          <div className={s.error}>
          {error.duration && <p>{error.duration}</p>}
          </div>
        </div>

        <div className={s.boxDifficultyy}>
          <label className={s.nameTemp}>Temporada</label>
          <div  className={s.backgroundDif}>
            <label  className={s.margin}>
              <input 
                 type="radio"
                name="season"
                value="Verano"
                onChange={(e) => handleCheck(e)}
                
              />
              Verano
            </label>
            <label className={s.margin}>
              <input
                 type="radio"
                name="season"
                value="Otoño"
                onChange={(e) => handleCheck(e)}
                />
              Otoño
            </label>
            <label className={s.margin}>
              <input
                type="radio"
                name="season"
                value="Invierno"
                onChange={(e) => handleCheck(e)}
                
              />
              Invierno
            </label>
            <label className={s.margin}>
              <input 
                 type="radio"
                name="season"
                value="Primavera"
                onChange={(e) => handleCheck(e)}
                
              />
              Primavera
            </label>
          </div>
          <div className={s.error}>
          {error.season && <p>{error.season}</p>}
          </div>
        </div>

        <div className={s.boxDifficultyyy}>
         
          <label className={s.name}>Pais donde se realiza la actividad</label>
          <div className={s.divCountries}>
            <br />
              <div className={s.barrita}>
              
            <select className={s.select} onChange={(e) => handleSelect(e)}  name="countries" >
              <option className={s.centerOption} hidden={true} >Listado de paises</option>
              {countries.map((c) => (
                <option className={s.centerOption} key={c.name} value={c.idApi} >
                  {c.name}
                </option>
              ))}
            </select>
            </div>
          <div className={s.boxCountries}>
            {input.countries.map((u , i)  => (
               <div key={i}  className={s.tamañoPaises} value={u} onClick ={(e) => handleDelete(e)}>
                <h5>{u}</h5>
              </div>
              
            ))} </div>
            

            <button className={s.boton} 
            type="submit"
             >Crear actividad</button>
          </div>
          <div className={s.error}>
          {error.countries && <p>{error.countries}</p>}
          </div>
        </div>
        
        </form>
        
      
      </div>

      
      </div>
    </div>
  );
};

export default CreateActivity