// src/ThreeComponent.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// import Logo from "../assets/images/Product1.jpg"

const ThreeComponent = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Plane geometry
    const geometry = new THREE.PlaneGeometry(5, 5); // Set width and height as needed

    // Load PNG texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('../assets/images/logo.jpg');

    // Material with texture
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotation or animation logic if needed

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default ThreeComponent;
