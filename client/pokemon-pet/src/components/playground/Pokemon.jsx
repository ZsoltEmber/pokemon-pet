function Pokemon({pokemon}){


    return(
        <div>
            <div className="pokemonNickname" name={pokemon._id} >{pokemon.nickName? pokemon.nickName.toUpperCase() : pokemon.name.toUpperCase() }
            </div>
            <img className="sprite" name={pokemon._id} src={pokemon.front} alt={pokemon.name}>
            </img>
        </div>
    )
}


export default Pokemon;