import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export interface ProductEngineProps {
  active: number;
  paused: boolean;
  following: boolean;
  resetKey: number;
  onSelect: (index: number) => void;
  onInspect: (index: number) => void;
}

/** Original, procedural Entwy scene. No external models, textures, or global API. */
export default function EntwyProductEngine(props: ProductEngineProps) {
  const host = useRef<HTMLDivElement>(null);
  const latest = useRef(props);
  const [status, setStatus] = useState<'loading' | 'ready' | 'fallback'>('loading');
  useEffect(() => { latest.current = props; }, [props]);

  useEffect(() => {
    const root = host.current;
    if (!root) return;
    let renderer: THREE.WebGLRenderer | undefined;
    let controls: OrbitControls | undefined;
    let observer: IntersectionObserver | undefined;
    let resize: ResizeObserver | undefined;
    let frame = 0;
    let disposed = false;
    const resources: (() => void)[] = [];
    const geometries = new Set<THREE.BufferGeometry>();
    const materials = new Set<THREE.Material>();
    const textures = new Set<THREE.Texture>();
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let reduced = motion.matches;
    const handleMotion = () => { reduced = motion.matches; };
    motion.addEventListener('change', handleMotion);
    resources.push(() => motion.removeEventListener('change', handleMotion));
    function cleanup() {
      disposed = true;
      cancelAnimationFrame(frame);
      observer?.disconnect();
      resize?.disconnect();
      resources.forEach((dispose) => dispose());
      controls?.dispose();
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      textures.forEach((texture) => texture.dispose());
      renderer?.dispose();
      renderer?.forceContextLoss();
      renderer?.domElement.remove();
    }
    try {
      const scene = new THREE.Scene();
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
      const gl = renderer;
      gl.setPixelRatio(Math.min(devicePixelRatio, 1.75));
      gl.setClearColor(0x000000, 0);
      gl.outputColorSpace = THREE.SRGBColorSpace;
      gl.toneMapping = THREE.ACESFilmicToneMapping;
      gl.toneMappingExposure = 1.05;
      gl.shadowMap.enabled = true;
      gl.shadowMap.type = THREE.PCFSoftShadowMap;
      gl.domElement.setAttribute('aria-hidden', 'true');
      root.appendChild(gl.domElement);
      const environment = new RoomEnvironment();
      const pmrem = new THREE.PMREMGenerator(gl);
      const env = pmrem.fromScene(environment, .04);
      scene.environment = env.texture;
      scene.environmentIntensity = .65;
      resources.push(() => env.dispose());
      environment.dispose();
      pmrem.dispose();
      scene.add(new THREE.HemisphereLight(0xfffaf0, 0x92716a, 2));
      const key = new THREE.DirectionalLight(0xfff3e6, 3);
      key.position.set(-5, 10, 7);
      key.castShadow = true;
      key.shadow.mapSize.set(1024, 1024);
      Object.assign(key.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: .5, far: 30 });
      key.shadow.normalBias = .035;
      scene.add(key);
      resources.push(() => key.shadow.dispose());
      const fill = new THREE.DirectionalLight(0xe8eafa, 2);
      fill.position.set(5, 5, -5);
      scene.add(fill);
      const camera = new THREE.PerspectiveCamera(34, 1, .1, 80);
      const home = new THREE.Vector3(9, 10, 12);
      camera.position.copy(home);
      controls = new OrbitControls(camera, gl.domElement);
      const orbit = controls;
      orbit.target.set(0, .3, 0);
      orbit.enableDamping = true;
      orbit.enablePan = false;
      orbit.enableZoom = false;
      orbit.minPolarAngle = .4;
      orbit.maxPolarAngle = 1.25;
      orbit.rotateSpeed = .45;
      // One-finger gestures always scroll the landing page on touch screens.
      orbit.enableRotate = matchMedia('(pointer: fine)').matches;
      gl.domElement.style.touchAction = 'pan-y';
      orbit.update();

      function material(color: number, metalness = 0, roughness = .45) {
        const mat = new THREE.MeshStandardMaterial({ color, metalness, roughness });
        materials.add(mat);
        return mat;
      }
      const ivory = material(0xf4eade, .18, .32);
      const porcelain = material(0xfffaf3, .12, .28);
      const steel = material(0xb2b7bb, .85, .24);
      const ink = material(0x493d3b, .4, .4);
      const orange = material(0xff621e, .25, .28);
      const blush = material(0xd1a2a0, .35, .4);
      const dark = material(0x413b42, .35, .3);
      const light = material(0xff853c, .15, .2);
      light.emissive.set(0xff5c13);
      light.emissiveIntensity = .6;
      const makeMesh = (geometry: THREE.BufferGeometry, mat: THREE.Material, parent: THREE.Object3D, x = 0, y = 0, z = 0) => {
        geometries.add(geometry);
        const mesh = new THREE.Mesh(geometry, mat);
        mesh.position.set(x, y, z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        parent.add(mesh);
        return mesh;
      };
      const box = (parent: THREE.Object3D, w: number, h: number, d: number, x: number, y: number, z: number, mat = ivory, radius = .08) =>
        makeMesh(new RoundedBoxGeometry(w, h, d, 3, Math.min(radius, h / 2, w / 2, d / 2)), mat, parent, x, y, z);
      const cylinder = (parent: THREE.Object3D, radius: number, height: number, x: number, y: number, z: number, mat = steel) =>
        makeMesh(new THREE.CylinderGeometry(radius, radius, height, 48), mat, parent, x, y, z);
      const tube = (parent: THREE.Object3D, points: THREE.Vector3[], radius: number, mat: THREE.Material) => {
        const curve = new THREE.CatmullRomCurve3(points);
        makeMesh(new THREE.TubeGeometry(curve, 32, radius, 8, false), mat, parent);
        return curve;
      };
      const assembly = new THREE.Group();
      scene.add(assembly);
      const shadow = new THREE.ShadowMaterial({ opacity: .16 });
      materials.add(shadow);
      const ground = makeMesh(new THREE.PlaneGeometry(200, 200), shadow, scene, 0, -.62, 0);
      ground.rotation.x = -Math.PI / 2;
      ground.castShadow = false;
      const positions = [new THREE.Vector3(-2.8, 0, 1.6), new THREE.Vector3(-2.8, 0, -1.65), new THREE.Vector3(0, 0, 0), new THREE.Vector3(2.8, 0, -1.65), new THREE.Vector3(2.8, 0, 1.6)];
      const groups = positions.map((position, i) => {
        const group = new THREE.Group();
        group.position.copy(position);
        group.userData.station = i;
        assembly.add(group);
        box(group, 2.38, .18, 2.22, 0, .02, 0, ink);
        box(group, 2.32, .045, 2.16, 0, .135, 0, steel);
        box(group, 2.27, .07, 2.1, 0, .19, 0, ivory);
        for (const x of [-1.02, 1.02]) for (const z of [-.91, .91]) {
          cylinder(group, .055, .035, x, .25, z, steel);
          box(group, .07, .008, .012, x, .27, z, ink, .002);
        }
        return group;
      });
      const selectionRings = groups.map(group => box(group, 2.15, .025, .045, 0, .24, 1.03, light, .01));
      // A layered chassis, inset channels, fasteners and feet make one connected device.
      box(assembly, 9.2, .22, 6.5, 0, -.28, 0, ink, .16);
      box(assembly, 9.12, .075, 6.42, 0, -.13, 0, steel, .12);
      box(assembly, 9, .08, 6.3, 0, -.055, 0, ivory, .12);
      for (const x of [-4.12, 4.12]) for (const z of [-2.78, 2.78]) {
        cylinder(assembly, .2, .2, x, -.48, z, dark);
        cylinder(assembly, .065, .025, x, .002, z, steel);
      }
      for (let i = 0; i < 25; i++) box(assembly, .085, .1, .025, -2.8 + i * .23, -.29, 3.26, steel, .008);
      function plaque(parent: THREE.Object3D, text: string, x: number, y: number, z: number, width = 1.95) {
        const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = 100;
        const context = canvas.getContext('2d')!;
        context.fillStyle = '#493d3b'; context.fillRect(0, 0, 512, 100);
        context.fillStyle = '#fff5e9'; context.font = '500 40px sans-serif'; context.textAlign = 'center'; context.textBaseline = 'middle'; context.fillText(text, 256, 52);
        const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; textures.add(texture);
        const mat = new THREE.MeshBasicMaterial({ map: texture }); materials.add(mat);
        const mesh = makeMesh(new THREE.PlaneGeometry(width, width * 100 / 512), mat, parent, x, y, z);
        mesh.rotation.x = -Math.PI / 3;
        return mesh;
      }
      ['01  Strategy', '02  Design', '03  AI & agents', '04  Engineering', '05  Growth'].forEach((name, i) => plaque(groups[i], name, 0, .35, 1.03));
      plaque(assembly, 'ENTWY  /  PRODUCT SYSTEM', 0, -.23, 3.28, 2.85).rotation.x = 0;
      // Strategy: a drafting table, blueprint sheets, and a copper pencil.
      const strategy = groups[0];
      [-.7, .7].forEach((x) => box(strategy, .12, .65, .95, x, .55, 0, steel));
      box(strategy, 1.95, .13, 1.4, 0, .91, 0, porcelain);
      const blueprint = document.createElement('canvas');
      blueprint.width = 512; blueprint.height = 384;
      const ctx = blueprint.getContext('2d')!;
      ctx.fillStyle = '#eee6dc'; ctx.fillRect(0, 0, 512, 384);
      ctx.strokeStyle = '#d2c5ba'; ctx.lineWidth = 1;
      for (let x = 0; x < 512; x += 32) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 384); ctx.stroke(); }
      for (let y = 0; y < 384; y += 32) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(512, y); ctx.stroke(); }
      ctx.strokeStyle = '#755354'; ctx.lineWidth = 5;
      [[50, 65, 160, 105], [295, 65, 150, 105], [175, 240, 160, 90]].forEach(([x,y,w,h]) => ctx.strokeRect(x,y,w,h));
      ctx.beginPath(); ctx.moveTo(210, 115); ctx.lineTo(295, 115); ctx.moveTo(370, 170); ctx.lineTo(370, 280); ctx.lineTo(335, 280); ctx.stroke();
      ctx.fillStyle = '#f16a30'; ctx.fillRect(66, 80, 75, 14); ctx.fillRect(190, 255, 65, 12);
      const texture = new THREE.CanvasTexture(blueprint); texture.colorSpace = THREE.SRGBColorSpace; textures.add(texture);
      const paper = new THREE.MeshStandardMaterial({ map: texture, roughness: .7 }); materials.add(paper);
      const sheet = makeMesh(new THREE.PlaneGeometry(1.55, 1.13), paper, strategy, -.08, .985, 0);
      sheet.rotation.x = -Math.PI / 2;
      const pencil = box(strategy, .065, .06, .9, .84, 1.01, .1, orange, .015); pencil.rotation.y = -.16;
      // Design: layered interface surfaces with real, dimensional UI blocks.
      const design = groups[1];
      function screen(parent: THREE.Object3D, x: number, y: number, z: number, width: number, height: number) {
        box(parent, width, height, .12, x, y, z, steel);
        box(parent, width - .09, height - .09, .06, x, y, z + .09, porcelain);
        box(parent, width - .3, .11, .03, x, y + height * .3, z + .14, blush, .025);
        box(parent, width * .26, height * .4, .04, x - width * .24, y - .07, z + .15, orange, .035);
        for (let j = 0; j < 3; j++) box(parent, width * .35, .065, .035, x + width * .15, y + .12 - j * .19, z + .15, ivory, .02);
      }
      screen(design, -.24, 1.35, -.25, 1.8, 1.35);
      box(design, .15, .5, .15, -.24, .55, -.25, steel);
      box(design, .65, .07, .42, -.24, .32, -.22, steel);
      screen(design, .66, .92, .35, .66, 1.18);
      // AI: a suspended faceted core inside two machined orbital rings.
      const ai = groups[2];
      cylinder(ai, .69, .3, 0, .43, 0, ink);
      cylinder(ai, .61, .07, 0, .61, 0, orange);
      const core = makeMesh(new THREE.IcosahedronGeometry(.56, 1), orange, ai, 0, 1.4, 0);
      const cage = new THREE.Group(); cage.position.y = 1.4; ai.add(cage);
      [0, 1].forEach((i) => {
        const ring = makeMesh(new THREE.TorusGeometry(.91, .045, 12, 80), steel, cage);
        ring.rotation.y = i * Math.PI / 2;
        ring.rotation.x = .35;
      });
      cylinder(ai, .12, .44, 0, .86, 0, steel);
      // Engineering: a stepped modular stack with ports, vents, and status lights.
      const engineering = groups[3];
      for (let i = 0; i < 3; i++) {
        box(engineering, 1.7, .38, 1.1, 0, .49 + i * .43, 0, i === 1 ? steel : porcelain);
        box(engineering, 1.45, .22, .025, 0, .49 + i * .43, .56, dark, .035);
        for (let k = 0; k < 5; k++) box(engineering, .075, .1, .035, -.52 + k * .19, .49 + i * .43, .585, steel, .015);
        makeMesh(new THREE.SphereGeometry(.045, 12, 8), light, engineering, .57, .49 + i * .43, .61);
      }
      box(engineering, .72, .08, .67, .25, 1.63, 0, orange);
      // Growth: rising translucent-looking ceramic bars and a distribution arc.
      const growth = groups[4];
      [.44, .76, 1.15, 1.62].forEach((h, i) => box(growth, .33, h, .48, -.65 + i * .43, .25 + h / 2, 0, i === 3 ? orange : i === 2 ? blush : porcelain));
      tube(growth, [new THREE.Vector3(-.9,.5,.57), new THREE.Vector3(-.4,.8,.57), new THREE.Vector3(.15,1.25,.57), new THREE.Vector3(.78,1.92,.57)], .028, steel);
      makeMesh(new THREE.SphereGeometry(.085, 16, 12), orange, growth, .78, 1.92, .57);

      // A visible project travels between all five services, not disconnected ornaments.
      const journey = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-2.8, .08, .2), new THREE.Vector3(-4.2, .08, 0),
        new THREE.Vector3(-4.15, .08, -2.8), new THREE.Vector3(-1.3, .08, -2.8),
        new THREE.Vector3(-1.3, .08, -.15), new THREE.Vector3(1.35, .08, -.15),
        new THREE.Vector3(1.35, .08, -2.8), new THREE.Vector3(4.15, .08, -2.8),
        new THREE.Vector3(4.15, .08, .1), new THREE.Vector3(4.15, .08, 2.85),
        new THREE.Vector3(0, .08, 2.85), new THREE.Vector3(-4.15, .08, 2.85),
        new THREE.Vector3(-4.15, .08, .1),
      ], true, 'catmullrom', .15);
      makeMesh(new THREE.TubeGeometry(journey, 180, .105, 8, true), ink, assembly);
      makeMesh(new THREE.TubeGeometry(journey, 180, .038, 8, true), orange, assembly);
      const packets = [0, 1, 2].map(() => {
        const packet = new THREE.Group(); assembly.add(packet);
        box(packet, .32, .13, .24, 0, .13, 0, orange, .035);
        box(packet, .2, .014, .13, 0, .205, 0, porcelain, .015);
        return packet;
      });
      // The design station has a keyboard, engineering has a fan and cable harness.
      box(design, 1, .05, .35, -.25, .28, .58, steel, .025);
      for (let row = 0; row < 3; row++) for (let col = 0; col < 9; col++) box(design, .075, .025, .065, -.65 + col * .1, .315, .48 + row * .09, ink, .006);
      const fan = new THREE.Group(); engineering.add(fan); fan.position.set(.45, 1.68, -.05);
      cylinder(fan, .25, .045, 0, 0, 0, ink);
      for (let i = 0; i < 6; i++) { const blade = box(fan, .29, .02, .05, 0, .03, 0, steel, .008); blade.rotation.y = i * Math.PI / 3; }
      tube(engineering, [new THREE.Vector3(-.8,.4,-.4), new THREE.Vector3(-1,1,-.5), new THREE.Vector3(-.8,1.65,-.4)], .045, orange);
      for (let i = 0; i < 3; i++) box(strategy, 1.5, .035, 1, .06 * i, .99 + i * .04, -.05, ivory, .02);
      sheet.position.y = 1.12; pencil.position.y = 1.14;

      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();
      function hit(event: PointerEvent) {
        const rect = gl.domElement.getBoundingClientRect();
        pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
        raycaster.setFromCamera(pointer, camera);
        const intersections = raycaster.intersectObjects(groups.filter(group => group.visible), true);
        let object: THREE.Object3D | null = intersections[0]?.object ?? null;
        while (object && object.userData.station === undefined) object = object.parent;
        return object?.userData.station as number | undefined;
      }
      let downX = 0, downY = 0;
      const down = (event: PointerEvent) => { downX = event.clientX; downY = event.clientY; };
      const up = (event: PointerEvent) => {
        if (Math.hypot(event.clientX - downX, event.clientY - downY) > 6) return;
        const index = hit(event); if (index !== undefined) latest.current.onInspect(index);
      };
      const move = (event: PointerEvent) => { gl.domElement.style.cursor = hit(event) === undefined ? 'grab' : 'pointer'; };
      gl.domElement.addEventListener('pointerdown', down);
      gl.domElement.addEventListener('pointerup', up);
      gl.domElement.addEventListener('pointermove', move);
      resources.push(() => { gl.domElement.removeEventListener('pointerdown', down); gl.domElement.removeEventListener('pointerup', up); gl.domElement.removeEventListener('pointermove', move); });
      const lost = (event: Event) => { event.preventDefault(); cancelAnimationFrame(frame); setStatus('fallback'); };
      gl.domElement.addEventListener('webglcontextlost', lost);
      resources.push(() => gl.domElement.removeEventListener('webglcontextlost', lost));
      function fit() {
        const width = root!.clientWidth, height = root!.clientHeight;
        gl.setSize(width, height);
        camera.aspect = width / Math.max(height, 1);
        camera.fov = width < 440 ? 43 : 34;
        camera.updateProjectionMatrix();
      }
      fit(); resize = new ResizeObserver(fit); resize.observe(root);
      let visible = true, last = 0, time = 0, reset = latest.current.resetKey, tourTime = 0, lastStage = -1, wasFollowing = false;
      const animate = (now: number) => {
        if (disposed) return;
        const elapsed = Math.max(0, (now - last) / 1000 || 0);
        const dt = Math.min(elapsed, .05); last = now;
        const state = latest.current;
        if (!state.paused && !reduced) time += dt;
        if (reset !== state.resetKey) { reset = state.resetKey; camera.position.copy(home); orbit.target.set(0, .3, 0); }
        groups.forEach((group, i) => {
          group.visible = true;
          group.position.copy(positions[i]);
          selectionRings[i].visible = i === state.active;
        });
        core.rotation.y = time * .3;
        core.position.y = 1.4 + (reduced ? 0 : Math.sin(time * 1.5) * .055);
        cage.rotation.y = -time * .1;
        if (state.following) {
          if (!wasFollowing) { tourTime = 0; lastStage = -1; }
          if (!state.paused) tourTime += elapsed;
          const stage = Math.floor(tourTime / 4) % 5;
          if (stage !== lastStage) { lastStage = stage; state.onSelect(stage); }
        }
        wasFollowing = state.following;
        packets.forEach((packet, i) => {
          const t = (time * .035 + i / 3) % 1;
          packet.position.copy(journey.getPoint(t));
          const tangent = journey.getTangent(t);
          packet.rotation.y = Math.atan2(tangent.x, tangent.z);
        });
        fan.rotation.y = time * 2;
        orbit.update();
        gl.render(scene, camera);
        frame = requestAnimationFrame(animate);
      };
      function resume() {
        cancelAnimationFrame(frame);
        if (visible && !document.hidden && !disposed) { last = performance.now(); frame = requestAnimationFrame(animate); }
      }
      observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; resume(); }, { threshold: .01 });
      observer.observe(root);
      document.addEventListener('visibilitychange', resume);
      resources.push(() => document.removeEventListener('visibilitychange', resume));
      gl.render(scene, camera);
      setStatus('ready');
      resume();
    } catch (error) {
      console.warn('Entwy product engine is using its static fallback.', error);
      cleanup();
      setStatus('fallback');
    }
    return cleanup;
  }, []);

  return <div className="product-engine-scene" data-status={status}>
    <div ref={host} className="product-engine-canvas" role="img" aria-label="The complete Entwy product system: five labeled stations on one chassis, with project packets moving between strategy, design, AI, engineering and growth. Drag to rotate or select a service below." />
    {status !== 'ready' && <div className="product-engine-fallback" role="status">
      <div className="engine-fallback-core">entwy<span>Connected by design</span></div>
      <div className="engine-fallback-parts">{['Strategy', 'Design', 'AI & agents', 'Engineering', 'Growth'].map((label, i) => <button key={label} onClick={() => props.onInspect(i)} aria-pressed={props.active === i}>{label}</button>)}</div>
      <p>{status === 'loading' ? 'Preparing your product studio…' : 'Explore the studio using the service buttons.'}</p>
    </div>}
  </div>;
}
