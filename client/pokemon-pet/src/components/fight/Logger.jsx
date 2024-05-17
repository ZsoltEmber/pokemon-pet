import React, { useEffect, useRef } from 'react';

function Logger({ logs }) {
    const loggerEndRef = useRef(null);

    useEffect(() => {
        loggerEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    return (
        <div className="logger-container">
            {logs.map((log, index) => (
                <p className="log" key={index}>{log}</p>
            ))}
            <div ref={loggerEndRef} />
        </div>
    );
}

export default Logger;
