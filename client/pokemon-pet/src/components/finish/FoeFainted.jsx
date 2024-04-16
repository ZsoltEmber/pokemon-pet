import "./Finish.css";
import pokeBallLogo from '/Poké_Ball_icon.svg.png'
import {useNavigate} from "react-router-dom";

function FoeFainted({pokemon}) {

    const navigate = useNavigate()

    const foe = {
        name: pokemon.name,
        front: pokemon.sprites.versions['generation-v']['black-white'].animated.front_default,
        back: pokemon.sprites.versions['generation-v']['black-white'].animated.back_default,
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        xp: 0,
        height: pokemon.height,
        types: pokemon.types,
    }

    const catchPokemon = async (foe) => {
        console.log(foe)
        const response = await fetch(`/api/pokemon/catch`, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(foe),
        })
        const foeData = await response.json();

    }

    return (
        <div className={"finish-root"}>
            <h1>The Wild {pokemon.name.toUpperCase()} has fainted</h1>
            <div className="center-container">
                <img src={pokeBallLogo} className="finish-logo" alt="Poke logo"/>
                <img src={foe.front} className={"fainted-foe-sprite"} alt={pokemon.name}/>
                <div className="button-container">
                    <button onClick={() => {
                        catchPokemon(foe)
                        navigate("/playground")
                    }}>Catch
                    </button>
                    <button onClick={() => navigate("/playground")}>Let it be</button>
                </div>
            </div>
        </div>
    )
}

export default FoeFainted;



