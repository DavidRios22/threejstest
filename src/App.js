import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {

  return (
    <div id='canvas'>
    <Canvas>
      <ambientLight intensity={0.1} />
      <OrbitControls />
      <mesh>
        <boxGeometry args={[1, 1, 1]}/>
        <meshNormalMaterial />
      </mesh>
    </Canvas>
    </div>
  )
}

export default App;
