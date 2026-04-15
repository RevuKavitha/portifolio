"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

type JourneyScene3DProps = {
  progress: number;
  speed: number;
};

type TrainModelProps = {
  position: THREE.Vector3;
  yaw: number;
  speed: number;
};

const TMP_A = new THREE.Vector3();
const TMP_B = new THREE.Vector3();
const TMP_C = new THREE.Vector3();
const LOOK_AT = new THREE.Vector3();

function getCurvePoint(t: number) {
  const clamped = Math.min(1, Math.max(0, t));
  const x = Math.sin(clamped * Math.PI * 1.7) * 1.9;
  const y = 0.08;
  const z = THREE.MathUtils.lerp(9.5, -9.5, clamped);
  return new THREE.Vector3(x, y, z);
}

function getCurveYaw(t: number) {
  const p0 = getCurvePoint(Math.max(0, t - 0.01));
  const p1 = getCurvePoint(Math.min(1, t + 0.01));
  const dir = p1.sub(p0).normalize();
  return Math.atan2(dir.x, dir.z);
}

function TrainModel({ position, yaw, speed }: TrainModelProps) {
  const group = useRef<THREE.Group>(null);
  const wheelA = useRef<THREE.Mesh>(null);
  const wheelB = useRef<THREE.Mesh>(null);
  const wheelC = useRef<THREE.Mesh>(null);
  const smokeA = useRef<THREE.Mesh>(null);
  const smokeB = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!group.current) return;

    group.current.position.lerp(position, 0.14);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, yaw, 0.12);

    const rot = delta * (2 + speed * 11);
    if (wheelA.current) wheelA.current.rotation.z -= rot;
    if (wheelB.current) wheelB.current.rotation.z -= rot;
    if (wheelC.current) wheelC.current.rotation.z -= rot;

    const t = state.clock.elapsedTime;
    const drift = speed > 0.04 ? 1 : 0.25;

    if (smokeA.current) {
      smokeA.current.position.y = 0.95 + ((t * 0.6 * drift) % 1.2);
      smokeA.current.position.x = -0.24 + Math.sin(t * 1.7) * 0.05;
      (smokeA.current.material as THREE.MeshStandardMaterial).opacity = Math.max(
        0,
        0.32 - smokeA.current.position.y * 0.22
      );
    }
    if (smokeB.current) {
      smokeB.current.position.y = 0.92 + (((t + 0.7) * 0.58 * drift) % 1.2);
      smokeB.current.position.x = -0.2 + Math.cos(t * 1.4) * 0.04;
      (smokeB.current.material as THREE.MeshStandardMaterial).opacity = Math.max(
        0,
        0.28 - smokeB.current.position.y * 0.2
      );
    }
  });

  return (
    <group ref={group} position={position}>
      <mesh position={[0, 0.28, 0]} castShadow>
        <boxGeometry args={[0.8, 0.44, 1.35]} />
        <meshStandardMaterial color="#dbe5f1" metalness={0.7} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0.43, -0.1]} castShadow>
        <boxGeometry args={[0.55, 0.26, 0.75]} />
        <meshStandardMaterial color="#f5f8fc" metalness={0.72} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.36, 0.55]} castShadow>
        <boxGeometry args={[0.6, 0.26, 0.58]} />
        <meshStandardMaterial color="#facc15" metalness={0.25} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.43, -0.45]}>
        <boxGeometry args={[0.42, 0.18, 0.2]} />
        <meshStandardMaterial emissive="#38bdf8" emissiveIntensity={0.8} color="#0f172a" />
      </mesh>

      <mesh position={[0, 0.3, -0.74]}>
        <pointLight color="#67e8f9" intensity={2.1} distance={5} decay={2.2} />
        <sphereGeometry args={[0.07, 18, 18]} />
        <meshStandardMaterial emissive="#67e8f9" emissiveIntensity={2} color="#a5f3fc" />
      </mesh>

      <mesh ref={wheelA} position={[-0.24, 0.06, -0.45]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.08, 22]} />
        <meshStandardMaterial color="#111827" metalness={0.6} roughness={0.5} />
      </mesh>
      <mesh ref={wheelB} position={[0.24, 0.06, -0.05]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.08, 22]} />
        <meshStandardMaterial color="#111827" metalness={0.6} roughness={0.5} />
      </mesh>
      <mesh ref={wheelC} position={[-0.24, 0.06, 0.35]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.08, 22]} />
        <meshStandardMaterial color="#111827" metalness={0.6} roughness={0.5} />
      </mesh>

      <mesh ref={smokeA} position={[-0.22, 0.95, -0.2]}>
        <sphereGeometry args={[0.09, 14, 14]} />
        <meshStandardMaterial color="#cbd5e1" transparent opacity={0.2} />
      </mesh>
      <mesh ref={smokeB} position={[-0.17, 0.9, -0.16]}>
        <sphereGeometry args={[0.07, 14, 14]} />
        <meshStandardMaterial color="#e2e8f0" transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

function TrackMesh() {
  const sleepers = useMemo(
    () => Array.from({ length: 42 }, (_, i) => i / 41),
    []
  );

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -0.02, 0]}>
        <planeGeometry args={[20, 28]} />
        <meshStandardMaterial color="#020617" roughness={1} metalness={0} />
      </mesh>

      {sleepers.map((t) => {
        const p = getCurvePoint(t);
        return (
          <mesh key={`sl-${t}`} position={[p.x, 0.02, p.z]} castShadow receiveShadow>
            <boxGeometry args={[1.35, 0.05, 0.2]} />
            <meshStandardMaterial color="#4a2f1e" roughness={0.85} />
          </mesh>
        );
      })}

      {[-0.35, 0.35].map((offset) => (
        <group key={`rail-${offset}`}>
          {Array.from({ length: 70 }, (_, i) => i / 69).map((t) => {
            const p = getCurvePoint(t);
            const next = getCurvePoint(Math.min(1, t + 0.01));
            const tangent = next.sub(p).normalize();
            const normal = new THREE.Vector3(-tangent.z, 0, tangent.x).normalize();
            const railPos = p.clone().add(normal.multiplyScalar(offset));
            return (
              <mesh key={`seg-${offset}-${t}`} position={[railPos.x, 0.09, railPos.z]}>
                <boxGeometry args={[0.08, 0.08, 0.36]} />
                <meshStandardMaterial
                  color="#cbd5e1"
                  emissive="#38bdf8"
                  emissiveIntensity={0.12}
                  metalness={0.85}
                  roughness={0.25}
                />
              </mesh>
            );
          })}
        </group>
      ))}
    </group>
  );
}

function SceneContent({ progress, speed }: JourneyScene3DProps) {
  const trainPos = useMemo(() => getCurvePoint(progress), [progress]);
  const trainYaw = useMemo(() => getCurveYaw(progress), [progress]);

  useFrame((state, delta) => {
    const t = Math.min(1, Math.max(0, progress));
    TMP_A.copy(getCurvePoint(t));
    TMP_B.copy(getCurvePoint(Math.min(1, t + 0.045)));

    const cinematicHeight = THREE.MathUtils.lerp(2.1, 1.2, t);
    const sideShift = THREE.MathUtils.lerp(2.7, 1.25, Math.sin(t * Math.PI));
    const backShift = THREE.MathUtils.lerp(3.2, 1.6, t);

    TMP_C.set(TMP_A.x + sideShift, cinematicHeight, TMP_A.z + backShift);

    state.camera.position.lerp(TMP_C, 1 - Math.exp(-delta * 2.8));
    LOOK_AT.set(TMP_B.x, 0.38, TMP_B.z - 0.35);
    state.camera.lookAt(LOOK_AT);
  });

  return (
    <>
      <fog attach="fog" args={["#020617", 8, 22]} />
      <ambientLight intensity={0.36} color="#7dd3fc" />
      <directionalLight position={[4, 6, 3]} intensity={1.25} color="#cbd5e1" castShadow />
      <pointLight position={[-4, 3, 5]} intensity={0.8} color="#22d3ee" />
      <pointLight position={[5, 2.5, -6]} intensity={0.65} color="#8b5cf6" />

      <Float speed={0.6} rotationIntensity={0.05} floatIntensity={0.08}>
        <TrackMesh />
        <TrainModel position={trainPos} yaw={trainYaw} speed={speed} />
      </Float>

      <mesh position={[0, 0.02, -10]}>
        <planeGeometry args={[18, 10]} />
        <meshStandardMaterial color="#0a1022" emissive="#22d3ee" emissiveIntensity={0.05} />
      </mesh>

      <Environment preset="night" />
    </>
  );
}

export default function JourneyScene3D({ progress, speed }: JourneyScene3DProps) {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [2, 1.8, 4], fov: 44 }}
        gl={{ antialias: true, alpha: true }}
      >
        <SceneContent progress={progress} speed={speed} />
      </Canvas>
    </div>
  );
}
