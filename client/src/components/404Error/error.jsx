import s from "./error.module.css"
import { Link } from "react-router-dom"



  export default function Error() {


      return  (
        <div className={s.fondo}>
            <div className={s.boxError} >
            <div className={s.divError}>
              
              <h1 className={s.margin}>Error 404</h1>
              <h3 >not found 😕</h3>
            <Link to="/">
              <div className={s.boton}>
                <h5  >Continuar</h5></div>
                    
                </Link>
              </div>
            
           </div>
        </div>
        
        
      )
}

