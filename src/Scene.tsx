import React, { useCallback, useEffect, useState } from "react";
import { Renderer } from "./Renderer";

export function Scene() {
  const [renderer, setRenderer] = useState<null | Renderer>();
  const containerCallback = useCallback<(node: HTMLDivElement) => void>(
    (node) => {
      if (renderer != null) {
        node.appendChild(renderer.renderer.domElement);
      }
    },
    [renderer]
  );

  useEffect(() => {
    const rend = new Renderer();
    setRenderer(rend);
  }, []);

  return <div ref={containerCallback}></div>;
}
