import { WebGLRenderer, PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const createRenderer = async () => {
  const renderer = new WebGLRenderer({
    canvas: document.querySelector("#bg"),
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  return renderer;
};

const createCamera = () => {
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.setZ(60);
  camera.position.setX(80)

  return camera;
};

const createController = (cam, renderer) => {
  const controls = new OrbitControls(cam, renderer.domElement);
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;

  return controls;
};

export { createRenderer, createCamera, createController };
