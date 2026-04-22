import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { DOMAIN_META } from '../data/siteContent';
import { getProjectImage } from '../utils/projectVisuals';

const IDLE_BORDER_COLOR = new THREE.Color(0x050508);
const HOVER_BORDER_COLOR = new THREE.Color(0xffffff);
const IDLE_LINE_COLOR = new THREE.Color(0x333344);
const HOVER_LINE_COLOR = new THREE.Color(0xaaaacc);
const DEFAULT_CAMERA_DISTANCE = 24;
const ACTIVE_CAMERA_DISTANCE = 7.8;
const CLICK_DRAG_THRESHOLD = 9;

export default function AtlasExperience({ nodes, activeDomains, activeId, onActivate, paused }) {
  const mountRef = useRef(null);
  const apiRef = useRef(null);
  const activeIdRef = useRef(activeId);
  const activeDomainsRef = useRef(activeDomains);
  const pausedRef = useRef(paused);
  const onActivateRef = useRef(onActivate);

  useEffect(() => {
    activeIdRef.current = activeId;
    apiRef.current?.setActiveById(activeId);
  }, [activeId]);

  useEffect(() => {
    activeDomainsRef.current = activeDomains;
    apiRef.current?.applyFilter(activeDomains);
  }, [activeDomains]);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    onActivateRef.current = onActivate;
  }, [onActivate]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const width = mount.clientWidth || 1200;
    const height = mount.clientHeight || 800;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050508);
    scene.fog = new THREE.FogExp2(0x050508, 0.022);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 220);
    camera.position.set(0, 0, 24);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ReinhardToneMapping;
    mount.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 0.28, 0.12, 0.7);
    composer.addPass(bloomPass);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.065;
    controls.enablePan = false;
    controls.rotateSpeed = 0.55;
    controls.minDistance = 5.8;
    controls.maxDistance = 56;
    controls.autoRotate = false;
    controls.target.set(0, 0, 0);

    const textureLoader = new THREE.TextureLoader();
    const frontGeometry = new THREE.PlaneGeometry(3, 2);
    const borderGeometry = new THREE.PlaneGeometry(3.18, 2.14);

    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(1800);
    for (let i = 0; i < starPositions.length; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 120;
      starPositions[i + 1] = (Math.random() - 0.5) * 80;
      starPositions[i + 2] = -Math.random() * 120;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.06, transparent: true, opacity: 0.46, toneMapped: false })
    );
    scene.add(stars);

    const state = {
      nodeMap: {},
      groups: [],
      lines: [],
      activeGroup: null,
      hoveredGroup: null,
      disposed: false,
    };

    function buildConstellation() {
      const renderedPairs = new Set();

      nodes.forEach((project) => {
        const group = new THREE.Group();
        group.position.set(...project.atlasPosition);
        group.userData = { ...project };

        const borderMaterial = new THREE.MeshBasicMaterial({ color: IDLE_BORDER_COLOR, toneMapped: false });
        const borderMesh = new THREE.Mesh(borderGeometry, borderMaterial);
        borderMesh.position.z = -0.025;
        group.add(borderMesh);
        group.userData.borderMaterial = borderMaterial;

        const faceMaterial = new THREE.MeshBasicMaterial({
          color: 0x26262d,
          transparent: true,
          toneMapped: false,
        });

        const imagePath = getProjectImage(project);
        textureLoader.load(
          imagePath,
          (texture) => {
            texture.colorSpace = THREE.SRGBColorSpace;
            texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
            faceMaterial.map = texture;
            faceMaterial.color.set(0xffffff);
            faceMaterial.needsUpdate = true;
          },
          undefined,
          () => {
            const fallbackColor = DOMAIN_META[project.domains[0]]?.color ?? '#ffffff';
            faceMaterial.color.set(fallbackColor);
            faceMaterial.opacity = 0.32;
          }
        );

        const faceMesh = new THREE.Mesh(frontGeometry, faceMaterial);
        group.add(faceMesh);

        scene.add(group);
        state.groups.push(group);
        state.nodeMap[project.id] = group;
      });

      nodes.forEach((project) => {
        project.connections.forEach((targetId) => {
          const pairKey = [project.id, targetId].sort().join('--');
          if (renderedPairs.has(pairKey)) return;
          renderedPairs.add(pairKey);

          const targetProject = nodes.find((entry) => entry.id === targetId);
          if (!targetProject) return;

          const geometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(...project.atlasPosition),
            new THREE.Vector3(...targetProject.atlasPosition),
          ]);
          const material = new THREE.LineBasicMaterial({
            color: IDLE_LINE_COLOR,
            transparent: true,
            opacity: 0.22,
            toneMapped: false,
          });
          const line = new THREE.Line(geometry, material);
          line.userData = { sourceId: project.id, targetId };
          scene.add(line);
          state.lines.push(line);
        });
      });
    }

    function setActiveById(nextId) {
      state.activeGroup = nextId ? state.nodeMap[nextId] ?? null : null;
      if (state.activeGroup) {
        const focusTarget = state.activeGroup.position.clone();
        const currentOffset = camera.position.clone().sub(controls.target);
        if (currentOffset.lengthSq() < 0.0001) {
          currentOffset.set(0, 0, 1);
        }
        currentOffset.setLength(ACTIVE_CAMERA_DISTANCE);
        focusState.target.copy(focusTarget);
        focusState.position.copy(focusTarget.clone().add(currentOffset));
      } else {
        focusState.target.set(0, 0, 0);
        focusState.position.copy(overview);
      }
      focusState.isTransitioning = true;
      controls.enabled = false;
    }

    function applyFilter(domains = []) {
      state.groups.forEach((group) => {
        group.visible = !domains.length || domains.some((domain) => group.userData.domains.includes(domain));
      });
      state.lines.forEach((line) => {
        const sourceVisible = state.nodeMap[line.userData.sourceId]?.visible;
        const targetVisible = state.nodeMap[line.userData.targetId]?.visible;
        line.visible = Boolean(sourceVisible && targetVisible);
      });
    }

    function updateColors() {
      state.groups.forEach((group) => {
        const accent = DOMAIN_META[group.userData.domains[0]]?.color ?? '#ffffff';
        if (state.activeGroup === group) {
          group.userData.borderMaterial.color.set(accent);
        } else if (state.hoveredGroup === group && !state.activeGroup) {
          group.userData.borderMaterial.color.copy(HOVER_BORDER_COLOR);
        } else {
          group.userData.borderMaterial.color.copy(IDLE_BORDER_COLOR);
        }
      });

      state.lines.forEach((line) => {
        const connectedToActive =
          state.activeGroup &&
          (line.userData.sourceId === state.activeGroup.userData.id || line.userData.targetId === state.activeGroup.userData.id);
        const connectedToHover =
          !state.activeGroup &&
          state.hoveredGroup &&
          (line.userData.sourceId === state.hoveredGroup.userData.id || line.userData.targetId === state.hoveredGroup.userData.id);

        if (connectedToActive) {
          line.material.color.set(DOMAIN_META[state.activeGroup.userData.domains[0]]?.color ?? '#ffffff');
          line.material.opacity = 1;
        } else if (connectedToHover) {
          line.material.color.copy(HOVER_LINE_COLOR);
          line.material.opacity = 0.72;
        } else {
          line.material.color.copy(IDLE_LINE_COLOR);
          line.material.opacity = 0.22;
        }
      });
    }

    buildConstellation();
    const overview = new THREE.Vector3(0, 0, DEFAULT_CAMERA_DISTANCE);
    const focusState = {
      target: new THREE.Vector3(0, 0, 0),
      position: overview.clone(),
      isTransitioning: false,
    };
    applyFilter(activeDomainsRef.current);
    setActiveById(activeIdRef.current);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(9999, 9999);
    const clock = new THREE.Clock();
    const pointerState = {
      downX: 0,
      downY: 0,
      dragged: false,
    };

    function updatePointer(clientX, clientY) {
      const bounds = renderer.domElement.getBoundingClientRect();
      pointer.x = ((clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.y = -((clientY - bounds.top) / bounds.height) * 2 + 1;
    }

    function handlePointerMove(event) {
      updatePointer(event.clientX, event.clientY);
      if (pointerState.dragged) return;
      const deltaX = event.clientX - pointerState.downX;
      const deltaY = event.clientY - pointerState.downY;
      if (Math.hypot(deltaX, deltaY) > CLICK_DRAG_THRESHOLD) {
        pointerState.dragged = true;
      }
    }

    function handleTouchMove(event) {
      if (!event.touches[0]) return;
      updatePointer(event.touches[0].clientX, event.touches[0].clientY);
      if (pointerState.dragged) return;
      const deltaX = event.touches[0].clientX - pointerState.downX;
      const deltaY = event.touches[0].clientY - pointerState.downY;
      if (Math.hypot(deltaX, deltaY) > CLICK_DRAG_THRESHOLD) {
        pointerState.dragged = true;
      }
    }

    function handlePointerDown(event) {
      pointerState.downX = event.clientX;
      pointerState.downY = event.clientY;
      pointerState.dragged = false;
      updatePointer(event.clientX, event.clientY);
    }

    function handleTouchStart(event) {
      if (!event.touches[0]) return;
      pointerState.downX = event.touches[0].clientX;
      pointerState.downY = event.touches[0].clientY;
      pointerState.dragged = false;
      updatePointer(event.touches[0].clientX, event.touches[0].clientY);
    }

    function handleActivate() {
      if (pointerState.dragged) return;
      if (state.hoveredGroup) {
        onActivateRef.current?.(state.hoveredGroup.userData.id);
      }
    }

    function handlePointerLeave() {
      pointer.x = 9999;
      pointer.y = 9999;
    }

    function handleResize() {
      const nextWidth = mount.clientWidth || window.innerWidth;
      const nextHeight = mount.clientHeight || window.innerHeight;
      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight);
      composer.setSize(nextWidth, nextHeight);
      bloomPass.setSize(nextWidth, nextHeight);
    }

    renderer.domElement.addEventListener('pointerdown', handlePointerDown);
    renderer.domElement.addEventListener('pointermove', handlePointerMove);
    renderer.domElement.addEventListener('pointerup', handleActivate);
    renderer.domElement.addEventListener('pointerleave', handlePointerLeave);
    renderer.domElement.addEventListener('touchmove', handleTouchMove, { passive: true });
    renderer.domElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    renderer.domElement.addEventListener('touchend', handleActivate);
    window.addEventListener('resize', handleResize);

    apiRef.current = { setActiveById, applyFilter };

    function animate() {
      if (state.disposed) return;
      requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(state.groups, true);
      state.hoveredGroup = intersects[0]?.object.parent ?? null;
      renderer.domElement.style.cursor = state.hoveredGroup ? 'pointer' : 'default';

      if (focusState.isTransitioning) {
        camera.position.lerp(focusState.position, 0.12);
        controls.target.lerp(focusState.target, 0.14);

        const positionDelta = camera.position.distanceTo(focusState.position);
        const targetDelta = controls.target.distanceTo(focusState.target);
        if (positionDelta < 0.04 && targetDelta < 0.03) {
          camera.position.copy(focusState.position);
          controls.target.copy(focusState.target);
          focusState.isTransitioning = false;
          controls.enabled = true;
        }
      } else if (!pausedRef.current) {
        stars.rotation.y = elapsed * 0.008;
      }

      state.groups.forEach((group) => {
        group.quaternion.copy(camera.quaternion);
      });

      controls.update();
      updateColors();
      composer.render();
    }

    animate();

    return () => {
      state.disposed = true;
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      renderer.domElement.removeEventListener('pointermove', handlePointerMove);
      renderer.domElement.removeEventListener('pointerup', handleActivate);
      renderer.domElement.removeEventListener('pointerleave', handlePointerLeave);
      renderer.domElement.removeEventListener('touchmove', handleTouchMove);
      renderer.domElement.removeEventListener('touchstart', handleTouchStart);
      renderer.domElement.removeEventListener('touchend', handleActivate);
      controls.dispose();
      composer.dispose();
      renderer.dispose();
      frontGeometry.dispose();
      borderGeometry.dispose();
      starGeometry.dispose();
      stars.material.dispose();
      state.groups.forEach((group) => {
        group.traverse((child) => {
          if (child.geometry) child.geometry.dispose();
          if (child.material?.map) child.material.map.dispose();
          if (child.material) child.material.dispose();
        });
      });
      state.lines.forEach((line) => {
        line.geometry.dispose();
        line.material.dispose();
      });
      mount.innerHTML = '';
      apiRef.current = null;
    };
  }, [nodes]);

  return <div ref={mountRef} className="atlas-canvas" aria-hidden="true" />;
}
