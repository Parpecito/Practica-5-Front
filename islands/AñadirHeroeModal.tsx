import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";


const AñadirHeroeModal: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [nombre, setNombre] = useState<string>("");
    const [imagen, setImagen] = useState<string>("");
    const [descripcion, setDescripcion] = useState<string>("");


    const manejarModal = () => {

        setIsOpen(!isOpen);
    }
    const crearProyecto = () => {
        if (nombre === "" || imagen === "" || descripcion === "") {
            alert("Todos los campos son obligatorios")
        }
        else {
            

            const proyecto = {
                nombre: nombre,
                imagen: imagen,
                descripcion: descripcion
            }
            const cookies = document.cookie.split("; ")
            const proyectos = cookies.find((cookie) => cookie.startsWith("proyectos="))

            if (proyectos) {
                const proyectosArray = JSON.parse(proyectos.split("=")[1])
                proyectosArray.push(proyecto)
                document.cookie = `proyectos=${JSON.stringify(proyectosArray)}`
            }
            else {
                document.cookie = `proyectos=${JSON.stringify([proyecto])}`

            }
        }
    }

    const añadirPelicula = () => {
        crearProyecto();
        setIsOpen(false);
    }


    return (
        <div>
            <button class="button" onClick={manejarModal}>Añadir película</button>

            {isOpen && (
                <div class="modal">
                    <div class="modal-content">
                        <button onClick={crearProyecto}>Crear un proyecto</button>
                        <br />
                        <button onClick={añadirPelicula}>Añadir Pelicula</button>

                        <button class="close" onClick={manejarModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AñadirHeroeModal;