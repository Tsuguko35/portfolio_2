import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const PixelateCanvas = () => {
  const canvasRef = useRef();
  const [renderer, setRenderer] = useState(null);
  const [pixelationStrength, setPixelationStrength] = useState(1);

  useEffect(() => {
    const width = canvasRef.current.clientWidth;
    const height = canvasRef.current.clientHeight;

    // Create the Three.js renderer
    const newRenderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    newRenderer.setSize(width, height);
    setRenderer(newRenderer);

    // Create a scene, camera, and geometry
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const geometry = new THREE.PlaneGeometry(4, 4);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    const animate = () => {
      requestAnimationFrame(animate);
      newRenderer.render(scene, camera);
    };
    animate();

    // Resize on window resize
    const handleResize = () => {
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      newRenderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const canvasWidth = canvasRef.current.clientWidth;
    const canvasHeight = canvasRef.current.clientHeight;

    const mouseXRatio = offsetX / canvasWidth;
    const mouseYRatio = offsetY / canvasHeight;

    // Set pixelation strength based on cursor position
    const strength = Math.floor(mouseXRatio * 10) + 1;
    setPixelationStrength(strength);
  };

  useEffect(() => {
    if (renderer) {
      renderer.domElement.style.filter = `blur(${pixelationStrength}px)`;
    }
  }, [pixelationStrength, renderer]);

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default PixelateCanvas;
