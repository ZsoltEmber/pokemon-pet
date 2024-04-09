import {useEffect, useState} from "react";
import Pokemon from "../playground/Pokemon.jsx";
import "./Fight.css"

function ChooseFighter({onSelect}){
    const [allPokemon, setAllPokemon] = useState([])

    useEffect(() => {
        const fetchAllPokemon = async ()=> {
            const response = await fetch("/api/pokemon")
            const allPokemonData = await response.json();
            setAllPokemon(allPokemonData)
        }
        fetchAllPokemon();
    }, []);


    return (
        <div className={"fighter-selector"}>
            {allPokemon && allPokemon.map(pokemon => <div onClick={()=> onSelect(pokemon)}><Pokemon pokemon={pokemon}/></div>)}

        </div>
    )
}

export default ChooseFighter;