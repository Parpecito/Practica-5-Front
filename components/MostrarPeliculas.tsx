import { FunctionComponent } from "preact";
import { filmsResponse } from "../types.ts";



const MostrarPeliculas: FunctionComponent<filmsResponse>=(props)=>{
    const {film}=props

    return(
        <div>
           {film.map((film)=>(
               <div key={film._id}>
                <a href={`/film/${film._id}`}>
                     <h1>{film.name}</h1>
                     <p>{film.description}</p>
                     <img src={film.staticImageUrl} alt={film.name}/>
                        <p>{film.iso}</p>
                </a>
                </div>
              ))}

        </div>
    )
}
export default MostrarPeliculas