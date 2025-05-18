import * as THREE from 'three';
import { color, Const } from 'three/tsl';
import { Mesh } from 'three/webgpu';

const canvas:HTMLElement = document.getElementById(elementId: 'canvas');
// 1 Create a scene object
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 2 Create a camera object
const camera = new THREE.PerspectiveCamera(fov:75,aspect: window.innerWidth / window.innerHeight, near:0.1, far: 1000);
camera.position.z = 5;

// 3 Create a renderer object

const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585' });
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(width = 2, height = 0.1, depth = 2);
const boxMaterial = new THREE.MeshLambertMaterial({ color: '#b4b4b3',  });

 const box:Mesh = new THREE.Mesh(boxGeometry, boxMaterial);
 box.position.y = -1.5
 scene.add(dodecahedron)
 scene.add(box)

 // 4 Create a light source
const light = new THREE.SpotLight(color:0x006769, intensity:100 );
light.position.set(x : 1, y: 1, z: 1);
  scene.add(light);

// 5 Create a WebGL renderer
const renderer = new THREE.WebGLRenderer( parameters: { canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);