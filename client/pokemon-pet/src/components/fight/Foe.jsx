function Foe({pokemon}){


    const foe = {
        name: name,
        front: pokemon.sprites.versions['generation-v']['black-white'].animated.front_default,
        back: pokemon.sprites.versions['generation-v']['black-white'].animated.back_default,
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        xp: 0,
        types: pokemon.types,
    }


    return(
        <div>
            <div className="pokemonNickname" name={foe._id} >{foe.name.toUpperCase() }
            </div>
            <img className="sprite" name={foe._id} src={foe.front} alt={foe.name}>
            </img>
        </div>
    )
}


export default Foe;