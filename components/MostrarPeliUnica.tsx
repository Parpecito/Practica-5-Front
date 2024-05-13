import { FunctionComponent } from "preact";
import { films } from "../types.ts";


const MostrarPeliUnica: FunctionComponent<{f:films}> = (props) => {
    return (
        <div class="Unico">
            <h1>{props.f.name}</h1>
            <p>{props.f._id}</p>
            <p>{props.f.brand}</p>
            <p>{props.f.description}</p>
            <img src={props.f.staticImageUrl} alt={props.f.name} />
            <p>{props.f.iso}</p>
            <p>{props.f.process}</p>
            <p>FormatThirtyFive: {props.f.formatThirtyFive ? "Sí" : "No"}</p>
            <p>FormatoOneTwenty: {props.f.formatOneTwenty ? "Sí" : "No"}</p>
            <p>Color: {props.f.color ? "Sí" : "No"}</p>
            <span> {props.f.customDescription.length > 0 && props.f.customDescription.map((key) => {
                return (
                    <li key={key}>
                        <span>{key}</span>
                    </li>
                )
            })}
            </span>
            <span> {props.f.keyFeatures.length > 0 && props.f.keyFeatures.map((key) => {
                return (
                    <li key={key._id}>
                        <span>{key.feature}</span>
                    </li>
                )
            })}
            </span>
            <p>{props.f.dataAdded}</p>
            <p>{props.f.__v}</p>
            

        </div>
    )
}
export default MostrarPeliUnica