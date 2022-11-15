const rotate = (target, x = 0.005, y = 0.005, z = 0.005) => {
  target.rotation.x += x;
  target.rotation.y += y;
  target.rotation.z += z;
};

export default rotate;
