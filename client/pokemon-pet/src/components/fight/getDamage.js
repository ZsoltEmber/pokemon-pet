import getRandomInt from "./getRandomInt.js";

function getDamage(fighterAttack, foeDefense) {
    return ((((2 / 5 + 2) * fighterAttack * 100 / foeDefense) / 50) + 2) * getRandomInt(217, 256) / 255;
}

export default getDamage;