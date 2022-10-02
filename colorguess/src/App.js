import React from "react";
import { useEffect, useState } from "react";


import Panel from "./Components/Panel/Panel";
import Navbar from "./Components/Navbar/Navbar";
import Description from "./Components/Description/Description";

function App() {
  const [notFound, setNotFound] = useState(false);
  const [answer, setAnswer] = useState([]);
  const [color, setColor] = useState();
  
  const randGen = () => {
    let c1 = 0 + Math.floor(Math.random() * (255 - 0 + 1));
    let c2 = 0 + Math.floor(Math.random() * (255 - 0 + 1));
    let c3 = 0 + Math.floor(Math.random() * (255 - 0 + 1));
  
    return `rgb(${c1}, ${c2}, ${c3})`;
  }

  const check = (ans) => {
    if(ans === color){
      setNotFound(false);
      newColors();
    } 
    else{
      setNotFound(true);
    }
  }
  
  const newColors = () => {
    const actualColor = randGen();
    setColor(actualColor);
    setAnswer([randGen(), randGen(), actualColor].sort(() => (0.5 - Math.random())));
  }

  useEffect(() => {
    newColors();
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <div className="cont">{notFound && <div className="wrong" style={{color: "red"}}>Wrong Choice</div>}</div>

      <Panel color={color}/>
      
      <div className="btns">
        {answer.map((item) => (
          <button key={item} className="btn" onClick={() => check(item)}>{item}</button>
        ))}
      </div>

      <Description/>

    </div>
  );
}

export default App;
