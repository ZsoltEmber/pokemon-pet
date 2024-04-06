function Foe({pokemon}) {


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

    console.log(foe.height)


    return (
        <div>
            <div className="pokemonNickname">
                {foe.name.toUpperCase()}
            </div>
            <img className="fighter-sprite"
                 src={foe.front}
                 alt={foe.name}>
            </img>
        </div>
    )
}


export default Foe;