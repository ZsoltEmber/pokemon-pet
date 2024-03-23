function Starter({pokemon}) {
    const sprite = pokemon.sprites["versions"]["generation-v"]["black-white"].animated.front_default
    const name = pokemon.name
    return(
        <div className={"starter-container"}>
            <p>{name.toUpperCase()}</p>
            <img
                className={"starter-img"}
            src={sprite}

            />
        </div>
    )
}

export default Starter