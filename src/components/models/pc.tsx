import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
    const { progress } = useProgress();
    return (
        <Html
            as="div"
            center
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <span className="canvas-loader"></span>
            <p
                style={{
                    fontSize: 14,
                    color: "#F1F1F1",
                    fontWeight: 800,
                    marginTop: 40,
                }}
            >
                {progress.toFixed(2)}%
            </p>
        </Html>
    );
};

function PcModel() {
    const pc = useGLTF("/models/scene.gltf");
    return (
        <mesh>
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
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <PcModel />
            </Suspense>

            <Preload all />
        </Canvas>
    );
}

export default PcCanvas;
