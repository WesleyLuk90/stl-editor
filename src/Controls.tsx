import React from "react";
import { Color, Mesh, MeshStandardMaterial } from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import "./Controls.css";
import { Import } from "./Import";
import { Renderer } from "./Renderer";

export function Controls({ renderer }: { renderer: Renderer }) {
    async function onImport(file: File) {
        const loader = new STLLoader();
        const buffer = await file.arrayBuffer();
        const geometry = loader.parse(buffer);
        const material = new MeshStandardMaterial({
            color: new Color(0.5, 0.5, 0.5),
        });
        material.flatShading = true;
        // material.morphNormals = true;
        geometry.computeVertexNormals();
        const object = new Mesh(geometry, material);
        object.rotateX(-Math.PI / 2);
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
