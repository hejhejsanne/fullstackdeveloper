"use client";

import dynamic from "next/dynamic";

const ShaderBackground = dynamic(
  () => import("@/components/ShaderBackground"),
  { ssr: false },
);

export default function ShaderBackgroundLoader() {
  return <ShaderBackground />;
}
