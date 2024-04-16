function Pokemon({pokemon}) {


    return (
        <div className={"pokemon-container"}>
            <div
                className="pokemon-nickname">{pokemon.nickName ? pokemon.nickName.toUpperCase() : pokemon.name.toUpperCase()}
            </div>
            <img className="sprite" name={pokemon._id} src={pokemon.front} alt={pokemon.name}>
            </img>
        </div>
    )
}


export default Pokemon;