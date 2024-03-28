
import pokeBallLogo from '/Poké_Ball_icon.svg.png'
import { useNavigate } from "react-router-dom";
import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div>
      <h1>Poké Ranch</h1>
          <img src={pokeBallLogo} className="logo" alt="React logo" />
      </div>
      <div className="card">
        <button onClick={()=> navigate("/playground")}>
          Let's start
        </button>
      </div>
    </>
  )
}

export default App
