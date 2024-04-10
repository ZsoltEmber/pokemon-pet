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


    return (
        <div className={"fight-root"}>
            {foe && (<div className={"foe"}><Foe pokemon={foe}/></div>)}
            {foe && <div className={"foe-stats"}><Stats pokemon={foe}/></div>}
            {fighter ? (<div className={"fighter"}><Fighter pokemon={fighter}/></div>) : (
                <ChooseFighter onSelect={handleSelect}/>)}
            {fighter && <div className={"fighter-stats"}><Stats pokemon={fighter}/></div>}
            {fighter && <FightUI onLog={setLogs} foe={foe} fighter={fighter} />}
            {fighter && foe && <Logger logs={...logs}></Logger>}
        </div>
    )
}

export default Fight;