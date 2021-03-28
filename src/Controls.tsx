import React from "react";
import { Import } from "./Import";

export function Controls() {
    function onImport(file: File) {
        console.log(file);
    }

    return <Import onImport={onImport} />;
}
