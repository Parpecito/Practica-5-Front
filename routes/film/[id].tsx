import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { films } from "../../types.ts";
import MostrarPeliUnica from "../../components/MostrarPeliUnica.tsx";


export const handler: Handlers={
    GET: async(_req:Request,ctx: FreshContext<unknown,films[]>)=>{
        const {id}=ctx.params;
        const response= await axios.get<films[]>(`https://filmapi.vercel.app/api/films`)
        const data=response.data
        //console.log(data)
        const film=data.find((film)=>film._id===id)
        if(!film){
            return new Response("Error al buscar la película")
        }
        //console.log(film)

        return ctx.render({film})
    }
}
const Page=(props:PageProps<films[]>)=>{
    return(
        <div>
            <MostrarPeliUnica f={props.data.film}/>
        </div>
    )
}
export default Page