import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FloatingSphere = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));

  const animate = () => {
    requestAnimationFrame(animate);

    // Добавьте анимацию плавания здесь
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  const mount = useRef();

  useEffect(() => {
    // Инициализация сцены, камеры и рендерера
    camera.position.z = 10;
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);
    scene.add(sphere);

    animate();

    return () => {
      // Очистка ресурсов при размонтировании компонента
      scene.remove(sphere);
      sphere.geometry.dispose();
      sphere.material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mount} style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />;
};

export default FloatingSphere;
