
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Pokemon from "./Pokemon.jsx";
import "./Playground.css"

function Playground() {
    const [pokemon, setPokemon] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        document.body.classList.add("playground-body");
        const fetchPokemon = async () => {
            const response = await fetch("/api/pokemon");
            const data = await response.json();
            setPokemon(data)
        }
        fetchPokemon()
        return () => {
            document.body.classList.remove("playground-body");
        };
    }, []);


    return (
        <div className="playground-root">
            <div className="playground-container">
            {pokemon.length > 0 ? (
                <div className="playground-content">
                    {pokemon.map((poke) => (
                        <Pokemon key={poke._id} pokemon={poke} />
                    ))}
                </div>
            ) : (
                navigate("/chooseStarter")
            )}
        </div>
                    <button
                        className={"fight-button"}
                        onClick={() => navigate("/fight")}
                    >Fight</button>
        </div>
    );
}

export default Playground;