import fightRule from "./fightRule.js";
import extractTypes from "./extractTypes.js";
function isStrongAgainst(attacker, defender) {
    const fighterTypes = extractTypes(attacker)
    let strongAgainst = [];
    const foeTypes = extractTypes(defender)
    for (let i = 0; i < fighterTypes.length; i++) {
        strongAgainst = (fightRule[fighterTypes[i]].strong)
    }
    for (const foeType of foeTypes) {
        if (strongAgainst.includes(foeType)) {
            return true;
        }
    }
    return false;
}

export default isStrongAgainst;