import { useParams } from "react-router-dom";

export default function Pokemon(par) {
    const params = useParams();
    const id = params.id;
    console.log(par);
    return <>pokemon ID - {id}</>;
}



// import { useParams } from "react-router-dom";

// export default function Pokemon() {
//   const params = useParams();
//   const id = params.pokemonId;
//   return <>pokemon ID - {id}</>;
// }
