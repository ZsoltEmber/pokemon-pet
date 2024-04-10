function Logger({logs}){

    console.log(logs)
    return(
        <div className={"logger-container"}>
            {logs.map(log => <p className={"log"}>{log}</p>)}
        </div>
    )
}


export default Logger;