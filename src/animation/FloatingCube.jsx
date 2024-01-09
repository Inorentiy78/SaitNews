import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FloatingCube = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 0x00ffff }));

  const animate = () => {
    requestAnimationFrame(animate);

    // Добавьте анимацию плавания здесь
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;

    renderer.render(scene, camera);
  };

  const mount = useRef();

  useEffect(() => {
    // Инициализация сцены, камеры и рендерера
    camera.position.z = 6; //(вперед/назад)
    camera.position.x = -6; //(вправо/влево)
    camera.position.y = 1; // (вверх/вниз)
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);
    scene.add(cube);

    animate();

    return () => {
      // Очистка ресурсов при размонтировании компонента
      scene.remove(cube);
      cube.geometry.dispose();
      cube.material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mount} style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />;
};


export default FloatingCube;