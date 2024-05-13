import { FunctionComponent } from "preact";
import { filmsResponse } from "../types.ts";
import AñadirHeroeModal from "./AñadirHeroeModal.tsx";



const MostrarDatosFiltrados: FunctionComponent<filmsResponse> = (props) => {
    const { film } = props
    return (
        <div class="principal">
            <ul>
                <div class="flex-row flex-around">
                    {film.map((film) => {
                        return (
                            <div>
                                <a href={`/film/${film._id}`} class="link">
                                    <h1 >{film.name}</h1>
                                    <span>{film.brand}</span>
                                    <span>{film.description}</span>
                                    <br />
                                    <img src={film.staticImageUrl} alt="imagen" />
                                </a>
                                <AñadirHeroeModal />

                            </div>
                        )
                    })}
                </div>
            </ul>
        </div>
    )
}
export default MostrarDatosFiltrados