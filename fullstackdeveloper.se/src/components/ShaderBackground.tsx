"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function ShaderBackground() {
  return (
    <ShaderGradientCanvas
      style={{ position: "fixed", inset: 0, zIndex: -1 }}
      fov={45}
      pixelDensity={1}
    >
      <ShaderGradient
        animate="on"
        brightness={1.2}
        cAzimuthAngle={180}
        cDistance={2.9}
        cPolarAngle={120}
        cameraZoom={1}
        color1="#ebedff"
        color2="#f3f2f8"
        color3="#dbf8ff"
        envPreset="city"
        grain="off"
        lightType="3d"
        positionX={0}
        positionY={1.8}
        positionZ={0}
        reflection={0.1}
        rotationX={0}
        rotationY={0}
        rotationZ={-90}
        shader="defaults"
        type="waterPlane"
        uAmplitude={0}
        uDensity={1}
        uFrequency={5.5}
        uSpeed={0.2}
        uStrength={3}
        uTime={0.2}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  );
}
