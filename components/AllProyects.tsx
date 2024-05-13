import { FunctionComponent } from "preact";
import { Proyecto, films } from "../types.ts";



const AllProyects: FunctionComponent<Proyecto>=(props)=>{
    const {nombre,peliculas}=props
    return(
        <div>
            <h1>Nombre: {nombre}</h1>
            {peliculas.map((film)=>{
                return(
                    <div key={film._id}>
                            <h1>{film.name}</h1>
                            <p>{film.description}</p>
                            <img src={film.staticImageUrl} alt={film.name}/>
                            <p>{film.iso}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default AllProyects