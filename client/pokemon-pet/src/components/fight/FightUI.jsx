import {useState} from "react";
function FightUI({onAgileAttack, onStrongAttack, fighter, foe}) {
    const [attack, setAttack] = useState(false);
    const [run, setRun] = useState(false)


    return (
        <div className={"UI-container"}>
            <div className={"fight-menu"}>
                <button
                    className={"attack-button"} onClick={() => {
                    setAttack(true)
                    setRun(false);
                }}>Attack
                </button>
                <button
                    className={"attack-button"}
                    onClick={() => {
                        setAttack(false)
                        setRun(true);
                    }}>Run
                </button>
            </div>

            {attack && <div className={"attack-menu"}>
                <button
                    className={"attack-button agile-button"}
                    onClick={()=> onAgileAttack(fighter, foe)}
                >Agile
                </button>
                <button
                    className={"attack-button strong-button"}
                    onClick={()=> onStrongAttack(fighter, foe)}
                >Strong
                </button>
            </div>}

            {run && <div className={"attack-menu"}>
                <button className={"attack-button"}>Yes</button>
                <button className={"attack-button"}>No</button>
            </div>}
        </div>
    )

}


export default FightUI;