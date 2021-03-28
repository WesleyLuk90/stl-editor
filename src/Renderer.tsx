import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

export class Renderer {
  scene = new Scene();
  camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new WebGLRenderer();

  constructor() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
