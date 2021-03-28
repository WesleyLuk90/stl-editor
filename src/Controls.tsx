import React from "react";
import { Mesh } from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import "./Controls.css";
import { Import } from "./Import";
import { Renderer } from "./Renderer";

export function Controls({ renderer }: { renderer: Renderer }) {
    async function onImport(file: File) {
        console.log(file);
        const loader = new STLLoader();
        const buffer = await file.arrayBuffer();
        const geometry = loader.parse(buffer);
        const object = new Mesh(geometry);
        renderer.scene.add(object);
    }

    return (
        <div className="controls">
            <div className="panel">
                <Import onImport={onImport} />
            </div>
        </div>
    );
}
