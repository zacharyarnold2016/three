import "./style.css";
import {
  generateSphere,
  generateTorus,
  generateLighting,
  generateSolidSphere,
} from "./utility/generators.js";
import {
  createRenderer,
  createCamera,
  createController,
} from "./utility/renderer.js";

import * as THREE from "three";

const scene = new THREE.Scene();

const renderer = await createRenderer();
const camera = createCamera();
const controls = createController(camera, renderer);
const { ambientLight, pointLight } = generateLighting();
const torus = generateTorus(20, 2.5, 20, 100, "#8E41E0");
const torus2 = generateTorus(12, 2.5, 20, 100, "#48D3F8");
const torus3 = generateTorus(30, 1, 20, 100, "#8E41E0");

const sphere = generateSphere();
const sphere2 = generateSphere(3, 50, 50, "#48D3F8");
const sphere3 = generateSphere(3, 50, 50, "#48D3F8");
const sphere4 = generateSphere(3, 50, 50, "#48D3F8");
const sphere5 = generateSphere(3, 50, 50, "#48D3F8");
sphere2.position.x = 30;
sphere3.position.x = -30;
sphere4.position.y = 30;
sphere5.position.y = -30;

scene.add(
  ambientLight,
  pointLight,
  torus,
  torus2,
  sphere,
  torus3,
  sphere2,
  sphere3,
  sphere4,
  sphere5
);

const animate = () => {
  requestAnimationFrame(animate);
  rotateAll(torus);
  rotateAll(torus2, -0.005, -0.005);
  rotateAll(sphere, 0, 0.005, 0);
  controls.update();
  renderer.render(scene, camera);
};

const addStar = () => {
  const geometry = new THREE.OctahedronGeometry(0.35);
  const colors = ["#B43BFA", "#ffffff", "#00D8F5"];
  const color = colors[Math.round(Math.random() * 2)];
  const material = new THREE.MeshStandardMaterial({ color });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(200));

  star.position.set(x, y, z);
  scene.add(star);
};

const rotateAll = (target, x = 0.005, y = 0.005, z = 0.005) => {
  target.rotation.x += x;
  target.rotation.y += y;
  target.rotation.z += z;
};
Array(200).fill().forEach(addStar);

animate();
