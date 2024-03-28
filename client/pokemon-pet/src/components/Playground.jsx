import ChooseStarter from "./ChooseStarter";
import {useEffect, useState} from "react";

function Playground(){
    const [pokemon, setPokemon]= useState();

    useEffect(() => {
        const fetchPokemon = async ()=>{
            const response = await fetch("/api/pokemon");
            setPokemon(response)
        }
        fetchPokemon()
    }, [pokemon]);


    return(
        pokemon?
        <div>
            <ChooseStarter/>
        </div> :
            <div>
                <h1>playground</h1>
            </div>
    );
}

export default Playground;