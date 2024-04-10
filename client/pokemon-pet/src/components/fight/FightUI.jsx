import {useState} from "react";

function FightUI({pokemon}) {
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
                <button>Agile</button>
                <button>Strong</button>
            </div>}

            {run && <div className={"attack-menu"}>
                <button>Yes</button>
                <button>No</button>
            </div>}
        </div>
    )

}


export default FightUI;