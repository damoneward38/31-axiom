// src/types/quantum.types.ts

export type QuantumState = "superposition" | "entangled" | "collapsed" | "idle";

export interface Particle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  energy: number;
  state: QuantumState;
  color: string;
  radius: number;
  lifetime: number;
  age: number;
}

export interface QuantumExperiment {
  id: string;
  name: string;
  description: string;
  status: "running" | "paused" | "completed" | "failed";
  progress: number;
  particleCount: number;
  energyLevel: number;
  createdAt: Date;
  tags: string[];
}

export interface LabConfig {
  maxParticles: number;
  simulationSpeed: number;
  energyDecay: number;
  collisionEnabled: boolean;
  gravityWells: GravityWell[];
}

export interface GravityWell {
  id: string;
  x: number;
  y: number;
  strength: number;
  radius: number;
}

export interface QuantumMetrics {
  fps: number;
  activeParticles: number;
  totalEnergy: number;
  entanglementPairs: number;
  collapseEvents: number;
}