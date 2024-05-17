function getRandomInt(min, max) {
    //The maximum is exclusive and the minimum is inclusive
    const minRounded = Math.ceil(min);
    const maxRounded = Math.floor(max);
    return Math.floor(Math.random() * (maxRounded - minRounded) + minRounded);
}


export default getRandomInt;