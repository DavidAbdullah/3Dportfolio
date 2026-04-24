import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ scale, position, isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor='#4e4d5c' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={3} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        // Slight rotation adjustment for a better profile view on mobile
        rotation={isMobile ? [-0.01, -0.2, -0.1] : [-0.01, -0.1, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // PROPORTIONAL SCALING MATH
  // Base scale is 0.75 for desktop (widths > 1200px).
  // It shrinks dynamically as width decreases, with a floor of 0.35 for tiny screens.
  const dynamicScale = Math.max(0.35, Math.min(0.75, (width / 1400) * 0.75));
  
  // Adjust position: push it lower and further back on mobile (width < 600)
  const isMobile = width < 600;
  const dynamicPosition = isMobile ? [0, -4.5, -2.2] : [0, -3.25, -1.5];

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      // Increasing FOV slightly on mobile can also help the model feel "smaller"
      camera={{ position: [20, 3, 5], fov: isMobile ? 35 : 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers 
            scale={dynamicScale} 
            position={dynamicPosition} 
            isMobile={isMobile} 
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;