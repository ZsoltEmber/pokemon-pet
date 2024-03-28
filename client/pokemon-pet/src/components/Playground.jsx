
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Loading from "./Loading.jsx";
import Pokemon from "./Pokemon.jsx";

function Playground() {
    const [pokemon, setPokemon] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch("/api/pokemon");
            const data = await response.json();
            setPokemon(data)
        }
        fetchPokemon()
        console.log(pokemon)
    }, []);


    return (
        pokemon.length > 0 ?
            <div>
                {pokemon ? <div>
                        {pokemon.map(poke =><Pokemon key={poke._id} pokemon={poke} />)}
                </div> : <Loading/>}
            </div> :
            navigate("/chooseStarter")
    );
}

export default Playground;