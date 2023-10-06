import "./App.css"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, AsciiRenderer} from "@react-three/drei"
import Cube from "./Cube"

function App() {
  
  
  return (
    <div className="box">
      <Canvas>
        <axesHelper
          scale={2}
          position={[0, 0, 0]}
          onUpdate={(self) => self.setColors("#ff2080", "#20ff80", "#2080ff")}
        />

        {/* <OrbitControls /> */}
        <AsciiRenderer />
        <color attach="background" args={["black"]} />
        <Cube />
      </Canvas>
      <div className="loading">
        <p>|----------|</p>
        <p>||||||||||||||||||</p>
        <p>|----------|</p>
      </div>
    </div>
  )
}

export default App
