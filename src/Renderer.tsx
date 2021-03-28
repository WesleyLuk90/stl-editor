import {
    AmbientLight,
    DirectionalLight,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class Renderer {
    scene = new Scene();
    camera = new PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    renderer = new WebGLRenderer();

    controls = new OrbitControls(this.camera, this.renderer.domElement);

    constructor() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.camera.position.z = 100;

        this.scene.add(new AmbientLight(0x404040));

        const light = new DirectionalLight(0xffffff);
        light.position.set(1, 1, 1);
        this.scene.add(light);
        const light2 = new DirectionalLight(0xffffff, 0.25);
        light2.position.set(-1, 1, -1);
        this.scene.add(light2);
        this.animate();
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}
