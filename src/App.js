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
      <Canvas height={800} width={800} />
    </div>
  );
}

export default App;
