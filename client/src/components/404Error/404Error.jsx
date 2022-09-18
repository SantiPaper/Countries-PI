import s from "./404Error.module.css"
import { Link } from "react-router-dom"



  export default function Error() {


      return  (
        <div className={s.fondo}>
            <div className={s.boxError} >
            <div className={s.divError}>
              <h1>404</h1>
              <h3>not found 😕</h3>
            </div>
            <Link to="/home">
              <div>
                <button className={s.boton}>Continuar
                </button></div>
                    
                </Link>
           </div>
        </div>
        
        
      )
}

