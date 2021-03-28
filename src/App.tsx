import React, { useMemo } from "react";
import "./App.css";
import { Display } from "./Display";
import { Renderer } from "./Renderer";

export function App() {
  const renderer = useMemo(() => new Renderer(), []);

  return (
    <div className="App">
      <Display renderer={renderer} />
    </div>
  );
}
