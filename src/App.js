import "./App.css"
import { Canvas } from "@react-three/fiber"
import { AsciiRenderer} from "@react-three/drei"
import Cube from "./Cube"

function App() {
  const loadingBar = ""
  return (
    <div className="box">
      <Canvas>
        <AsciiRenderer />
        <color attach="background" args={["black"]} />
        <Cube />
      </Canvas>
      <div className="loading">
        <p>{loadingBar}</p>
      </div>
    </div>
  )
}

export default App
