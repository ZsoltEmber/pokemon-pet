import {useState} from "react";
function FightUI({onAgileAttack, onStrongAttack, fighter, foe}) {
    const [attack, setAttack] = useState(false);
    const [run, setRun] = useState(false)


    return (
        <div className={"UI-container"}>
            <div className={"fight-menu"}>
                <button onClick={() => {
                    setAttack(true)
                    setRun(false);
                }}>Attack
                </button>
                <button
                    onClick={() => {
                        setAttack(false)
                        setRun(true);
                    }}>Run
                </button>
            </div>

            {attack && <div className={"attack-menu"}>
                <button
                    onClick={()=> onAgileAttack(fighter, foe)}
                >Agile</button>
                <button
                onClick={()=> onStrongAttack(fighter, foe)}>Strong</button>
            </div>}

            {run && <div className={"attack-menu"}>
                <button>Yes</button>
                <button>No</button>
            </div>}
        </div>
    )

}


export default FightUI;