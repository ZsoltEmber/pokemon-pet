import { useEffect, useState } from "react";
import Starter from "./Starter.jsx";

function ChooseStarter() {
    const [bulbasaur, setBulbasaur] = useState();
    const [charmander, setCharmander] = useState();
    const [squirtle, setSquirtle] = useState();

    useEffect(() => {
        const fetchBasePokemon = async () => {
            for (let i = 1; i <= 7; i += 3) {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                const data = await response.json();
                switch (data.id) {
                    case 1:
                        setBulbasaur(data);
                        break;
                    case 4:
                        setCharmander(data);
                        break;
                    case 7:
                        setSquirtle(data);
                        break;
                }
            }
        }
        fetchBasePokemon()
    }, []);


    return (
        <div>
            <h1 className={"title"}>CHOOSE YOUR STARTER</h1>
            {
           (bulbasaur && charmander && squirtle) ?
           <div className={"starters-container"}>
            <Starter pokemon={bulbasaur}/>
            <Starter pokemon={charmander}/>
            <Starter pokemon={squirtle}/>
            </div>
            : <div>

               </div>
        }

        </div>
    )
}

export default ChooseStarter;