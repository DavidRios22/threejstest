import "./App.css"
import { useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { AsciiRenderer } from "@react-three/drei"
import Cube from "./Cube"

function App() {
  const [pipeColors, setPipeColors] = useState(Array(10).fill("black"))
  const [continueChange, setContinueChange] = useState(true)
  const [isContinueGreen, setIsContinueGreen] = useState(true)

  const continueStyle = {
    color: isContinueGreen ? "#04FF00" : "black",
    margin: 0,
    textDecoration: "underline",
    cursor: "pointer"
  }

  const continueClick = () => {
    console.log("hello");
  }

  useEffect(() => {
    const continueIfElse = () => {
      setContinueChange(false)
    }
    setTimeout(continueIfElse, 4600)

    const delay = setTimeout(() => {
      const revealPipes = () => {
        setPipeColors((prevColors) => {
          const updatedColors = [...prevColors]
          const nextIndex = updatedColors.findIndex(
            (color) => color === "black"
          )
          if (nextIndex >= 0) {
            updatedColors[nextIndex] = "white"
          }
          return updatedColors
        })
      }

      const intervalId = setInterval(revealPipes, 200)

      setTimeout(() => {
        clearInterval(intervalId)

        // Set all pipes to black one second after they have appeared
        setTimeout(() => {
          setPipeColors(Array(10).fill("black"))
        }, 1000)
      }, 2000)

      const flashingInterval = setInterval(() => {
        setIsContinueGreen((prevState) => !prevState)
      }, 600)

      return () => {
        clearInterval(intervalId)
        clearInterval(flashingInterval)
      }
    }, 1000)

    return () => {
      clearTimeout(delay)
    }
  }, [])

  return (
    <div className="box">
      <Canvas>
        <AsciiRenderer />
        <color attach="background" args={["black"]} />
        <Cube />
      </Canvas>
      <div className="loading">
        {continueChange ? (
          pipeColors.map((color, index) => (
            <span key={index} style={{ color }}>
              {"/"}
            </span>
          ))
        ) : (
          <p onClick={continueClick} style={continueStyle}>continue</p>
        )}
      </div>
    </div>
  )
}

export default App
