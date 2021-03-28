import React, { useCallback } from "react";
import { Renderer } from "./Renderer";

export function Display({ renderer }: { renderer: Renderer }) {
    const containerCallback = useCallback<(node: HTMLDivElement) => void>(
        (node) => {
            if (renderer != null && node != null) {
                node.appendChild(renderer.renderer.domElement);
            }
        },
        [renderer]
    );

    return <div ref={containerCallback}></div>;
}
