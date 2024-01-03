import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Tween } from 'tween.js';

const MergingDrops = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  const drops = [];

  const createDrop = (x, color) => {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color });
    const drop = new THREE.Mesh(geometry, material);
    drop.position.x = x;
    scene.add(drop);
    return drop;
  };

  const mergeDrops = () => {
    new Tween(drops[0].position)
      .to({ x: 0, y: 0, z: 0 }, 1000)
      .start();

    new Tween(drops[1].position)
      .to({ x: 0, y: 0, z: 0 }, 1000)
      .start();
  };

  const separateDrops = () => {
    new Tween(drops[0].position)
      .to({ x: -1, y: 0, z: 0 }, 1000)
      .start();

    new Tween(drops[1].position)
      .to({ x: 1, y: 0, z: 0 }, 1000)
      .start();
  };

  const animate = () => {
    requestAnimationFrame(animate);

    // Очистка ресурсов при размонтировании компонента
    renderer.render(scene, camera);
  };

  const mount = useRef();

  useEffect(() => {
    // Инициализация сцены, камеры и рендерера
    camera.position.z = 5;
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);

    // Создание двух капель разного цвета
    drops.push(createDrop(-1, 0x00ff00)); // Зеленая капля
    drops.push(createDrop(1, 0x0000ff));  // Синяя капля

    // Запуск анимации слияния и разъединения
    animate();
    mergeDrops();

    // Через 2 секунды начать анимацию разъединения
    setTimeout(() => {
      separateDrops();
    }, 2000);

    // Через 4 секунды снова начать анимацию слияния и так далее
    setInterval(() => {
      mergeDrops();
      setTimeout(() => {
        separateDrops();
      }, 2000);
    }, 4000);

    return () => {
      // Очистка ресурсов при размонтировании компонента
      drops.forEach(drop => scene.remove(drop));
      renderer.dispose();
    };
  }, []);

  return <div ref={mount} />;
};

export default MergingDrops;
