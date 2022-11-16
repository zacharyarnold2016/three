import {
  TorusGeometry,
  MeshStandardMaterial,
  SphereGeometry,
  Mesh,
  PointLight,
  AmbientLight,
  OctahedronGeometry,
} from "three";

const generateTorus = (
  radius = 20,
  tubesize = 3,
  segments = 20,
  arc = 200,
  color = 0xffffff
) => {
  const geometry = new TorusGeometry(radius, tubesize, segments, arc);
  const material = new MeshStandardMaterial({ color, wireframe: true });
  const mesh = new Mesh(geometry, material);
  console.log(mesh);

  return mesh;
};

const generateSphere = (
  radius = 5,
  height = 15,
  width = 5,
  color = 0xffffff
) => {
  const geometry = new SphereGeometry(radius, height, width);
  const material = new MeshStandardMaterial({ color, wireframe: true });
  const mesh = new Mesh(geometry, material);

  return mesh;
};

const generateSolidSphere = (
  radius = 5,
  height = 15,
  width = 5,
  color = 0xffffff
) => {
  const geometry = new SphereGeometry(radius, height, width);
  const material = new MeshStandardMaterial({ color });
  const mesh = new Mesh(geometry, material);

  return mesh;
};

const generateLighting = () => {
  const pointLight = new PointLight("0xffffff");
  pointLight.position.set(20, 20, 20);

  // Change this for some funky colors
  const ambientLight = new AmbientLight(0xffffff);

  return { pointLight, ambientLight };
};

export { generateSphere, generateSolidSphere, generateTorus, generateLighting };
