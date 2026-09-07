# CynLr EPM Dashboard

A frontend Engineering Program Management (EPM) dashboard designed for the CynLr intelligent automation PoC case study.

## Overview

The dashboard provides a centralized program-control view for managing an intelligent automation PoC involving computer vision, robotics, moving-object tracking, robot coordination, hardware integration, and production-readiness validation.

## Dashboard Sections

- **Dashboard** — Overall program control view
- **Program Plan** — Program phases, milestones, workstreams, constraints, and dependencies
- **Tasks** — Activity and sub-activity planning with resource categories, owners, locations, status, and priority
- **Dependencies** — Technical, intra-project, and external dependency tracking
- **Resources** — Cross-functional resource categories and responsibilities
- **Risks** — Risk identification, impact, probability, ownership, and mitigation
- **KPIs** — Leading and lagging indicators for tracking program progress and PoC success

## Program Structure

### Phase 1 — Track Moving Objects
- Moving-object tracking
- Vision system integration
- FANUC CRx integration

### Phase 2 — Track & Grasp
- Moving conveyor interaction
- Robot and 7th Axis RTU integration
- Application development

### Phase 3 — Validation & Demonstration
- End-to-end system integration
- Reliability validation
- PoC demonstration
- Production scalability assessment

## Key Control Areas

- Vision and object identification
- Moving-object tracking
- Robot motion coordination
- FANUC integration
- 7th Axis RTU integration
- Tooling and gripper readiness
- Hardware integration
- End-to-end validation

## Risk & Dependency Management

The dashboard captures important program constraints including:

- Imported component procurement lead times
- External fabrication and machining dependencies
- FANUC support availability
- Multi-robot synchronization challenges
- Advanced simulation dependencies
- Cross-functional integration bottlenecks

## Technology Stack

- React
- JavaScript / JSX
- Vite
- CSS
- Git / GitHub

## Running Locally

Clone the repository and install dependencies:

```bash
npm install