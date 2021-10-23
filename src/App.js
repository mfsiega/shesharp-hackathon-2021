import "./App.css";
import React from "react";
import WelcomeBackground from "./welcome-background/welcome-background";
import SheSharpTroopl from "./shesharp-x-troopl/shesharp-x-troopl";
import Canvas from "./Canvas";

function App() {
  return (
    <div className="App">
      <WelcomeBackground>
        <SheSharpTroopl />
        <h1>Welcome to the Hackathon 2021</h1>
      </WelcomeBackground>
      <div className="canvas-container">
        <div className="canvas-border">
          <Canvas height={400} width={800} />
        </div>
      </div>
    </div>
  );
}

export default App;
