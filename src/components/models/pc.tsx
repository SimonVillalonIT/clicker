import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html, useProgress } from "@react-three/drei";
import * as THREE from "three";

const CanvasLoader = () => {
    const { progress } = useProgress();

    return (
        <Html as="div" className="flex flex-col items-center justify-center" center>
            <span className="canvas-loader"></span>
            <p className="mt-10 text-sm font-bold text-white">{progress.toFixed(2)}%</p>
        </Html>
    );
};

function PcModel() {
    const pc = useGLTF("/models/old_pc.glb");
    const pcRef = React.useRef<THREE.mesh>(null);

    const [direction, setDirection] = React.useState(1); // Estado para controlar la dirección de la rotación

    // Velocidad de rotación
    const rotationSpeed = 0.001;

    useFrame(() => {
        // Rotación en el eje Y
        if (!pcRef.current) return;
        pcRef.current.rotation.y += rotationSpeed * direction;

        // Si la rotación alcanza los límites, cambiar la dirección
        if (pcRef.current.rotation.y >= 0.2 || pcRef.current.rotation.y <= -0.2) {
            setDirection(direction * -1); // Cambiar la dirección
        }
    });

    return (
        <mesh ref={pcRef}>
            <hemisphereLight intensity={3} groundColor="black" />
            <spotLight position={[-20, 50, -20]} angle={0.12} intensity={100} />
            <pointLight intensity={100} />
            <primitive
                object={pc.scene}
                scale={8}
                position={[0, -3, 0]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
}

function PcCanvas() {
    return (
        <Canvas
            className="h-48 w-48"
            frameloop="always"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <React.Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <PcModel />
            </React.Suspense>

            <Preload all />
        </Canvas>
    );
}

export default PcCanvas;
