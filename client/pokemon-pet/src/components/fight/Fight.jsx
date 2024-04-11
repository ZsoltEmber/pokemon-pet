import {useEffect, useState} from "react";
import "./Fight.css"
import Foe from "./Foe.jsx";
import Fighter from "./Fighter.jsx";
import ChooseFighter from "./ChooseFighter.jsx";
import Stats from "./Stats.jsx";
import FightUI from "./FightUI.jsx";
import Logger from "./Logger.jsx";
function Fight() {

    const [fighter, setFighter] = useState(null)
    const [foe, setFoe] = useState(null)
    const [logs, setLogs] = useState( [])
    const [foeHp, setFoeHp] = useState()
    const [fighterHp, setFighterHp] = useState()
    function getRandomInt(min, max) {
        const minRounded = Math.ceil(min);
        const maxRounded = Math.floor(max);
        return Math.floor(Math.random() * (maxRounded - minRounded) + minRounded);
    }

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

    function handleSelect(fighter){
        setFighter(fighter);
        setLogs([`A wild ${foe.name.toUpperCase()} appeared`, `Let's go ${fighter.nickName? fighter.nickName.toUpperCase() : fighter.name.toUpperCase()}`]);
    }

    function handleAgileAttack(fighter, foe){
        const random = getRandomInt(217, 256);
        const foeDefense = foe.stats[2]["base_stat"];
        const agileAttackDamage= (((((2/5+2)*fighter.attack*100/foeDefense)/50)+2)*random/255)*1.5
        setLogs(prevState => [...prevState, `${fighter.name.toUpperCase()} used Agile Attack`])
        setFoeHp(prevState => prevState - agileAttackDamage)
        
    }

    function handleStrongAttack(fighter, foe){
        const random = getRandomInt(217, 256);
        const chance = getRandomInt(0, 4);
        const fighterName= fighter.nickName? fighter.nickName : fighter.name.toUpperCase();
        console.log(chance)

        if(chance !== 0) {
            const foeDefense = foe.stats[2]["base_stat"];
            const agileAttackDamage = (((((2 / 5 + 2) * fighter.attack * 100 / foeDefense) / 50) + 2) * random / 255) * 2.0
            setLogs(prevState => [...prevState, `${fighter.name.toUpperCase()} used Strong Attack`])
            setFoeHp(prevState => prevState - agileAttackDamage)
        }
        else{
            setLogs(prevState => [...prevState, `${fighterName} used Strong Attack`])
            setLogs(prevState => [...prevState, `${fighterName} but it failed...`])
        }
    }


    return (
        <div className={"fight-root"}>
            {foe && (<div className={"foe"}><Foe pokemon={foe}/></div>)}
            {foe && <div className={"foe-stats"}><Stats pokemon={foe}/></div>}
            {fighter ? (<div className={"fighter"}><Fighter pokemon={fighter}/></div>) : (
                <ChooseFighter onSelect={handleSelect}/>)}
            {fighter && <div className={"fighter-stats"}><Stats pokemon={fighter}/></div>}
            {fighter && <FightUI
                onLog={setLogs}
                onAgileAttack={handleAgileAttack}
                onStrongAttack={handleStrongAttack}
                fighter={fighter}
                foe={foe}/>}
            {fighter && foe && <Logger logs={...logs}></Logger>}
        </div>
    )
}

export default Fight;