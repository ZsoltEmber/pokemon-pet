const fightRule = {
    normal: {
        weak: ["rock", "ghost"],
        strong: ["fighting"]
    },
    fighting: {
        weak: ["flying", "psychic", "fairy"],
        strong: ["normal", "rock", "steel", "ice", "dark"]
    },
    flying: {
        weak: ["electric", "rock", "ice"],
        strong: ["fighting", "bug", "grass"]
    },
    poison: {
        weak: ["ground", "psychic"],
        strong: ["grass", "fairy"]
    },
    ground: {
        weak: ["water", "grass", "ice"],
        strong: ["poison", "rock"]
    },
    rock: {
        weak: ["fighting", "ground", "steel", "water", "grass"],
        strong: ["flying", "bug", "fire", "ice"]
    },
    bug: {
        weak: ["flying", "rock", "fire"],
        strong: ["grass", "psychic", "dark"]
    },
    ghost: {
        weak: ["normal", "dark"],
        strong: ["ghost", "psychic"]
    },
    steel: {
        weak: ["fire", "fighting", "ground"],
        strong: ["rock", "ice", "fairy"]
    },
    fire: {
        weak: ["water", "ground", "rock"],
        strong: ["bug", "steel", "grass", "ice"]
    },
    water: {
        weak: ["water", "grass", "dragon"],
        strong: ["fire", "ground", "rock"]
    },
    grass: {
        weak: ["flying", "poison", "bug", "fire", "ice"],
        strong: ["ground", "rock", "water"]
    },
    electric: {
        weak: ["ground"],
        strong: ["flying", "water"]
    },
    psychic: {
        weak: ["bug", "ghost", "dark"],
        strong: ["fighting", "poison"]
    },
    ice: {
        weak: ["fighting", "rock", "steel", "fire"],
        strong: ["flying", "ground", "grass", "dragon"]
    },
    dragon: {
        weak: ["ice", "dragon", "fairy"],
        strong: ["dragon"]
    },
    dark: {
        weak: ["fighting", "bug", "fairy"],
        strong: ["ghost", "psychic"]
    },
    fairy: {
        weak: ["poison", "steel"],
        strong: ["fighting", "dragon", "dark"]
    }
};

export default fightRule