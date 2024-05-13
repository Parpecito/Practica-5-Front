import { FreshContext, Handlers } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import AllProyects from "../components/AllProyects.tsx";
import { Proyecto, filmsResponse } from "../types.ts";


export const handler: Handlers={
    GET: (req:Request, ctx:FreshContext<unknown,Proyecto>)=>{
        //Quiero coger todos los datos que me llegan de la cookie
        const cookies=getCookies(req.headers)
        const proyectos=cookies.find((cookie)=>cookie.startsWith("proyectos="))

        return ctx.render(JSON.parse(proyectos.split("=")[1]))
    }
}

export default function Page(props: FreshContext<unknown,Proyecto>) {
    const proyecto=props.data
    return (
        <div>
            <AllProyects nombre={proyecto.nombre} peliculas={proyecto.peliculas}/>
        </div>
    );
}