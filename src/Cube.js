import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Center } from "@react-three/drei"

export default function Cube() {


  const cubeRef = useRef()

  useFrame(() => {
    cubeRef.current.rotation.y += 0.01
  })

  return (
    <Center position={[-0.3, 0,0]}>
      <mesh
        ref={cubeRef}
        rotation-x={Math.PI * 0.25}
        rotation-y={Math.PI * 0.25}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
    </Center>
  )
}
