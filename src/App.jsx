import {useState} from "react"
import "./App.css"


function App() {

  const [count, setCounter]=useState(
    {
      Score:76,
      Wicket:2,
      Ball:50
    }
  )
  const Score=count.Score
  const Wicket=count.Wicket
  const Ball=count.Ball
  
  const HandleMatch=(value,verf)=>{
    if(Score>=100){
      return
    }
    // Score
    if(verf==="Score"){
      setCounter(prevState=>{
        return {...prevState,Score:prevState.Score + value}
      })
    }
    // Wicket
    if(verf==="Wicket"){
      if(Wicket >=12){
        return
      }
      setCounter(prevState=>{
        return {...prevState,Wicket:prevState.Wicket + value}
      })
    }
    // Ball
    if(verf==="Ball"){
      setCounter(prevState=>{
        return {...prevState,Ball:prevState.Ball + value}
      })
    }
    console.log(value)
  }
  if(Score >=100){
    var ans="India Won"
  }
  var over=Math.floor(Ball/6)
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              Score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              Wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              `ball`+" "+ Ball + " "+`over`+" "+ over
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button onClick={()=>HandleMatch(1,"Score")} className="addScore1">Add 1</button>
        <button onClick={()=>HandleMatch(4,"Score")} className="addScore4">Add 4</button>
        <button onClick={()=>HandleMatch(6,"Score")}className="addScore6">Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>HandleMatch(1,"Wicket")}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>HandleMatch(1,"Ball")} >Add 1</button>
      </div>

      <h1>{ans}</h1>
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
 
  );
  
}

export default App;
