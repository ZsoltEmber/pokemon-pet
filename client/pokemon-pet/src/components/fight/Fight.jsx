import {useEffect, useState} from "react";
import "./Fight.css"
import Foe from "./Foe.jsx";
import Fighter from "./Fighter.jsx";
import ChooseFighter from "./ChooseFighter.jsx";
import Stats from "./Stats.jsx";
import FightUI from "./FightUI.jsx";
import Logger from "./Logger.jsx";
import fightRule from "./FightRule.js";


function Fight() {

    const [fighter, setFighter] = useState(null)
    const [foe, setFoe] = useState(null)
    const [logs, setLogs] = useState([])
    const [foeHp, setFoeHp] = useState()
    const [fighterHp, setFighterHp] = useState()

    useEffect(() => {
        document.body.classList.add("fight-body");
        const randomId = getRandomInt(494, 650);
        const fetchFoe = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            const foeData = await response.json();
            setFoe(foeData);
            setFoeHp(foeData.stats[0]["base_stat"]);
        }

        fetchFoe();
        return () => {
            document.body.classList.remove("fight-body");
        };
    }, []);
    function getRandomInt(min, max) {
        //The maximum is exclusive and the minimum is inclusive
        const minRounded = Math.ceil(min);
        const maxRounded = Math.floor(max);
        return Math.floor(Math.random() * (maxRounded - minRounded) + minRounded);
    }

    function baseFormula(fighterAttack, foeDefense) {
        return ((((2 / 5 + 2) * fighterAttack * 100 / foeDefense) / 50) + 2) * getRandomInt(217, 256) / 255;
    }


    function handleSelect(fighter) {
        setFighter(fighter);
        setFighterHp(fighter.hp)
        setLogs([`A wild ${foe.name.toUpperCase()} appeared`, `Let's go ${fighter.nickName ? fighter.nickName.toUpperCase() : fighter.name.toUpperCase()}`]);
    }

    function extractTypes(pokemon) {
        const types = [];
        for (const type of pokemon.types) {
            types.push(type.type.name)
        }
        return types;
    }

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

    function foeTurn(fighter, foe) {
        const chance = getRandomInt(0, 4);
        const foeName = foe.name.toUpperCase();
        const foeAttack = foe.stats[1]["base_stat"];
        const fighterDefense = fighter.defense;
        const isSuperEffective = isStrongAgainst(foe, fighter);
        let strongAttackDamage = baseFormula(foeAttack, fighterDefense) * 2;
        let agileAttackDamage = baseFormula(foeAttack, fighterDefense) * 1.5;


        if (chance === 0) {
            setLogs(prevState => [...prevState, `${foeName} used Agile Attack`])
            if (isSuperEffective) {
                agileAttackDamage *= 2;
                setLogs(prevState => [...prevState, `it is SUPER EFFECTIVE!`])
            }
            setFighterHp(prevState => prevState - Math.floor(agileAttackDamage))
        } else if (chance === 1) {
            if (isSuperEffective) {
                setLogs(prevState => [...prevState, `${foeName} used Strong Attack`])
                strongAttackDamage *= 2;
                setLogs(prevState => [...prevState, `it is SUPER EFFECTIVE!`])
            }
            setFighterHp(prevState => prevState - Math.floor(strongAttackDamage))

        } else if (chance === 2) {
            setLogs(prevState => [...prevState, `${foeName} used Strong Attack`, `...but it failed`])
        } else {
            setLogs(prevState => [...prevState, `${foeName}'s attack missed`])
        }

    }

    function handleAgileAttack(fighter, foe) {
        const foeDefense = foe.stats[2]["base_stat"];
        const fighterName = fighter.nickName ? fighter.nickName : fighter.name.toUpperCase();
        const isSuperEffective = isStrongAgainst(fighter, foe)

        let agileAttackDamage = baseFormula(fighter.attack, foeDefense) * 1.5
        setLogs(prevState => [...prevState, `${fighterName} used Agile Attack`])
        if (isSuperEffective) {
            agileAttackDamage *= 2;
            setLogs(prevState => [...prevState, `It is SUPER EFFECTIVE`])
        }
        setFoeHp(prevState => prevState - Math.floor(agileAttackDamage))

        setTimeout(() => {
        foeTurn(fighter, foe)
        }, "1000");
    }

    function handleStrongAttack(fighter, foe) {
        const chance = getRandomInt(0, 4);
        const fighterName = fighter.nickName ? fighter.nickName : fighter.name.toUpperCase();
        const isSuperEffective = isStrongAgainst(fighter, foe)

        if (chance !== 0) {
            const foeDefense = foe.stats[2]["base_stat"];
            let StrongAttackDamage = baseFormula(fighter.attack, foeDefense) * 2.0


            setLogs(prevState => [...prevState, `${fighterName} used Strong Attack`])

            if (isSuperEffective) {
                StrongAttackDamage *= 2;
                setLogs(prevState => [...prevState, `It is SUPER EFFECTIVE`])
            }

            setFoeHp(prevState => prevState - Math.floor(StrongAttackDamage))

        } else {
            setLogs(prevState => [...prevState, `${fighterName} used Strong Attack`])
            setLogs(prevState => [...prevState, `${fighterName} but it failed...`])
        }
        setTimeout(() => {
            foeTurn(fighter, foe)
        }, "1000");
    }


    return (
        <div className={"fight-root"}>
            {foe && (<div className={"foe"}><Foe pokemon={foe}/></div>)}
            {foe && <div className={"foe-stats"}>
                <Stats
                    pokemon={foe}
                    hp={foeHp}/>
            </div>}
            {fighter ? (<div className={"fighter"}><Fighter pokemon={fighter}/></div>) : (
                <ChooseFighter onSelect={handleSelect}/>)}
            {fighter && <div
                className={"fighter-stats"}>
                <Stats
                    pokemon={fighter}
                    hp={fighterHp}/>
            </div>}
            {fighter && <FightUI
                onLog={setLogs}
                onAgileAttack={handleAgileAttack}
                onStrongAttack={handleStrongAttack}
                fighter={fighter}
                foe={foe}

            />}
            {fighter && foe && <Logger logs={...logs}></Logger>}
        </div>
    )
}

export default Fight;