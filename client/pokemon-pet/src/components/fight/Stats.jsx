function Stats({pokemon}) {
    const typesData = [pokemon.types]
    let types = [];
    pokemon.types.map(type => (types.push(type.type.name)));

    return (
            <div className={"stats-container"}>
                <div> {pokemon.name.toUpperCase()}</div>
                <div className={"hp"}>hp: {pokemon.hasOwnProperty("stats")? pokemon.stats[0].base_stat : pokemon.hp}</div>
                <div className={"type"}>
                    type: {types.join(", ")}
                </div>
            </div>
        )
}

export default Stats;