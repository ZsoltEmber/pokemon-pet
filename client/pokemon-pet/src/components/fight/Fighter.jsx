function Fighter({pokemon}){


    const fighter = {
        name: pokemon.name,
        front: pokemon.front,
        back: pokemon.back,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        xp: pokemon.xp,
        height: pokemon.height,
        types: pokemon.types,
    }


    return (
        <div>
            <img className="fighter-sprite"
                 src={fighter.back}
                 alt={fighter.name}>
            </img>
        </div>
    )
}


export default Fighter;