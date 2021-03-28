import React, { useMemo } from "react";
import "./App.css";
import { Controls } from "./Controls";
import { Display } from "./Display";
import { Renderer } from "./Renderer";

export function App() {
    const renderer = useMemo(() => new Renderer(), []);

    return (
        <div className="App">
            <Controls renderer={renderer} />
            <Display renderer={renderer} />
        </div>
    );
}
