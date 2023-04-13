import React, { FC, useEffect } from "react";
import initialize from "@/utils/webGlBackgroundScript";

const WebGlBackground: FC = () => {
  useEffect(() => {
    initialize();
  }, []);

  return (
    <canvas
      id="canvas"
      className="web-gl-background"
    />
  );
};

export default WebGlBackground;
