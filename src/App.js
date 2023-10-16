import "./App.css"
import { useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { AsciiRenderer} from "@react-three/drei"
import Cube from "./Cube"

function App() {

  const [pipeColors, setPipeColors] = useState(Array(10).fill('black'));

  useEffect(() => {
    const delay = setTimeout(() => {
      const revealPipes = () => {
        setPipeColors((prevColors) => {
          const updatedColors = [...prevColors];
          const nextIndex = updatedColors.findIndex((color) => color === 'black');
          if (nextIndex >= 0) {
            updatedColors[nextIndex] = 'white';
          }
          return updatedColors;
        })
      };

      const intervalId = setInterval(revealPipes, 200);

      return () => {
        clearInterval(intervalId);
      };
    }, 1000);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  



  
  return (
    <div className="box">
      <Canvas>
        <AsciiRenderer />
        <color attach="background" args={["black"]} />
        <Cube />
      </Canvas>
      <div className="loading">
        {pipeColors.map((color, index) => (
          <span key={index} style={{ color }}>
            {"/"}
          </span>
        ))}
      </div>
      <p className="continue">continue</p>
    </div>
  )
}

export default App
