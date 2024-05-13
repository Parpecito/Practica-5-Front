import MostrarPeliculas from "../components/MostrarPeliculas.tsx";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { films } from "../types.ts";
import axios from "npm:axios";
import OpcionesFiltros from "../islands/OpcionesFiltros.tsx";

export const handler: Handlers={
  GET: async(_req:Request,ctx:FreshContext<unknown,films[]>)=>{
    try {
      const response= await axios.get<films[]>(`https://filmapi.vercel.app/api/films`)
      const data=response.data
  
      const mapearpeliculas = data.map((film) => film.brand)
      const filtrar_no_repetidas_marcas:string[]=[]
      mapearpeliculas.forEach((brand) => {
        if (!filtrar_no_repetidas_marcas.includes(brand)) {
          filtrar_no_repetidas_marcas.push(brand)
        }
      })
      const mapearIsos = data.map((film) => film.iso)
      const filtrar_no_repetidos_ISOS:number[]=[]
      mapearIsos.forEach((iso) => {
        if (!filtrar_no_repetidos_ISOS.includes(iso)) {
          filtrar_no_repetidos_ISOS.push(iso)
        }
      })
  
     
  
      return ctx.render({films:data,marcas:filtrar_no_repetidas_marcas,isos:filtrar_no_repetidos_ISOS})
    } catch (error) {
      throw new Error('No se pudo obtener la lista de películas');
    }

  }
}


export default function Home(props: PageProps) {
  const marcas=props.data.marcas
  const isos=props.data.isos
  return (
    <>
    
    <OpcionesFiltros films={props.data.films} marcas={marcas} ISOS={isos} />
   
    </>
  );
}
//<FilterMarca />
// <MostrarPeliculas film={props.data.films}/>
