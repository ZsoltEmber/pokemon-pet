function extractTypes(pokemon) {
    const types = [];
    for (const type of pokemon.types) {
        types.push(type.type.name)
    }
    return types;
}
export default extractTypes;