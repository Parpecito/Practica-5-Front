import { FunctionComponent } from "preact";


const EliminarProyecto: FunctionComponent=()=>{
     
    

    return(
        <div>
            <h1>Eliminar Proyecto</h1>
            <form action="/eliminarProyecto" method="post">
                <label for="nombre">Nombre del proyecto</label>
                <input type="text" name="nombre" id="nombre"/>
                <input type="submit" value="Eliminar"/>
            </form>
        </div>
    )
}
export default EliminarProyecto