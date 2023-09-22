import * as THREE from 'three'

THREE.ColorManagement.enabled = false

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a geometry for the cube
const geometry = new THREE.BoxGeometry();

// Create a material for the cube
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Create a mesh by combining the geometry and material
const cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(cube);

// Create an animation function
const animate = () => {
requestAnimationFrame(animate);

// Rotate the cube
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;

// Render the scene
renderer.render(scene, camera);
};

// Start the animation
animate();
