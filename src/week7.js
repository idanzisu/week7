import React from "react"
import './App.css';

function App() {
    const [time, setTime] = React.useState(0)
    const [timerOn, setTimeOn] = React.useState(false)

    React.useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [timerOn])

    return (
        <div class="App">
            <h1>Running</h1>
            <h2><i>It's not the distance you must conquer in running, it's yourself.</i></h2>
            <h4>Stopwatch</h4>
            <div class="time">
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <br></br>
            <div>
                {!timerOn && (
                    <button onClick={() => setTimeOn(true)}>Start</button>
                )}
                {timerOn && (
                    <button onClick={() => setTimeOn(false)}>Stop</button>
                )}

                <button onClick={() => setTime(0)}>Reset</button>
            </div>
        </div>
    );
}

<script>
    document.getElementById("button").style.color = "blue";
</script>

export default App;