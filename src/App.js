import "./App.css";
import React from "react";
import WelcomeBackground from "./welcome-background/welcome-background";
import SheSharpTroopl from "./shesharp-x-troopl/shesharp-x-troopl";
import Canvas from "./Canvas";

function App() {
  return (
    <div className="App">
      <Canvas height={400} width={800} />
      <SheSharpTroopl style={{textAlign: "right"}}/>
    </div>
  );
}

export default App;
