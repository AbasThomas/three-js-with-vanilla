import * as THREE from 'three';

// 1. Get the canvas element
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
if (!canvas) {
  throw new Error('Canvas element not found');
}

// 2. Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 3. Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 4. Create geometries and materials
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585' });
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshLambertMaterial({ color: '#b4b4b3' });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// 5. Add a light source
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

// 6. Create the renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// 7. Render loop
function animate() {
  requestAnimationFrame(animate);
  dodecahedron.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
