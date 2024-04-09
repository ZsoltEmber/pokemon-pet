import {useEffect, useState} from "react";
import "./Fight.css"
import Foe from "./Foe.jsx";
import Fighter from "./Fighter.jsx";

function Fight(){

    const [fighter, setFighter] = useState()
    const [foe, setFoe] = useState()

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





    return(
        <div className={"fight-root"}>
            {foe && (<div className={"foe"}><Foe pokemon={foe}/></div>)}
            {fighter && (<div className={"fighter"}><Fighter pokemon={fighter}/></div>)}
        </div>
    )
}

export default Fight;