import {useNavigate} from "react-router-dom";

function Starter({pokemon}) {
    const sprite = pokemon.sprites["versions"]["generation-v"]["black-white"].animated.front_default
    const name = pokemon.name
    const navigate = useNavigate();

    const starter = {
        name: name,
        nickName: "",
        front: pokemon.sprites.versions['generation-v']['black-white'].animated.front_default,
        back: pokemon.sprites.versions['generation-v']['black-white'].animated.back_default,
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        xp: 0,
        types: pokemon.types,
    }

    const catchPokemon = async ()=>{
        const response = await fetch("/api/pokemon/catch", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(starter)
        })
        const data = response.json();
    }




    return (
        <div onClick={()=> {
            catchPokemon()
            navigate("/playground")
        }} className={"starter-container"}>
            <p>{name.toUpperCase()}</p>
            <img
                className={"starter-img"}
                src={sprite}
            />
        </div>
    )
}

export default Starter