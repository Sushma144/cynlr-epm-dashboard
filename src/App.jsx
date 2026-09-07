import { useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const navigation = [
    {
      section: "PROGRAM",
      items: [
        { name: "Dashboard", icon: "▦" },
        { name: "Program Plan", icon: "☷" },
        { name: "Tasks", icon: "✓" },
        { name: "Dependencies", icon: "↗" },
        { name: "Resources", icon: "◉" },
      ],
    },
    {
      section: "CONTROL",
      items: [
        { name: "Risks", icon: "⚠" },
        { name: "KPIs", icon: "◫" },
      ],
    },
  ];

  const pageInfo = {
    Dashboard: {
      title: "Engineering Program Management",
      breadcrumb: "PROGRAM / DASHBOARD",
    },

      "Program Plan": {
      title: "Program Plan",
      breadcrumb: "PROGRAM / PLAN",
    },
    
    Tasks: {
      title: "Tasks",
      breadcrumb: "PROGRAM / TASKS",
    },
    Dependencies: {
      title: "Dependencies",
      breadcrumb: "PROGRAM / DEPENDENCIES",
    },
    Resources: {
      title: "Resources",
      breadcrumb: "PROGRAM / RESOURCES",
    },
    Risks: {
      title: "Risk Management",
      breadcrumb: "CONTROL / RISKS",
    },
    KPIs: {
      title: "Program KPIs",
      breadcrumb: "CONTROL / KPIs",
    },
  };
function renderDashboard() {
  const phases = [
    {
      number: "01",
      name: "Track Moving Objects",
      description:
        "Demonstrate moving-object tracking using robot freedom and the CynLr vision stack.",
      status: "Foundation",
    },
    {
      number: "02",
      name: "Track & Grasp",
      description:
        "Extend tracking into robot interaction using FANUC robot freedom and the 7th Axis RTU.",
      status: "Integration",
    },
    {
      number: "03",
      name: "Validation & Demonstration",
      description:
        "Validate the integrated PoC and assess reliability and production scalability potential.",
      status: "Validation",
    },
  ];

  const focusAreas = [
    {
      icon: "◉",
      title: "Vision",
      text: "Object identification and continuous moving-target tracking.",
    },
    {
      icon: "✦",
      title: "Robotics",
      text: "Robot motion coordination and interaction with moving targets.",
    },
    {
      icon: "⚙",
      title: "Integration",
      text: "Coordinate software, hardware, controls and mechanical systems.",
    },
    {
      icon: "◆",
      title: "Program Control",
      text: "Manage dependencies, risks, resources, milestones and validation.",
    },
  ];

  return (
    <div className="dashboard">

 
      {/* Header */}
<div className="dashboard-header">
  <div className="dashboard-header-left">
  

    <h5>
     Program control view for the intelligent automation PoC — tracking phases, dependencies, risks, resources and success indicators.
    </h5>
  </div>

 

   
</div>

      {/* Hero */}
      <div className="dashboard-hero">

        <div className="dashboard-hero-content">

          <div className="hero-eyebrow">
            INTELLIGENT AUTOMATION · FINAL GENERAL ASSEMBLY
          </div>

          <h2>
            Vision-guided robotics for
            <br />
            continuously moving targets
          </h2>

          <p>
            A program-management framework for coordinating the vision,
            robotics, controls, mechanical, electronics and integration
            activities required to demonstrate the PoC.
          </p>

          <div className="hero-tags">
            <span>◉ &nbsp; Moving Object Tracking</span>
            <span>✦ &nbsp; Robot Coordination</span>
            <span>▮ &nbsp; PoC Validation</span>
          </div>

        </div>

        <div className="dashboard-hero-side">

          <div className="hero-side-label">
            PROGRAM OBJECTIVE
          </div>

          <div className="hero-side-value">
            Continuous
            <br />
            Interaction
          </div>

          <div className="hero-side-line"></div>

          <p>
            Demonstrate the ability of the vision stack to guide robots
            while targets remain in motion.
          </p>

        </div>

      </div>

      {/* Program Structure */}
      <div className="section-heading">
        <div>
          <h2>Program Structure</h2>
          <p>
            Three logical stages from technical foundation to PoC validation.
          </p>
        </div>
      </div>

      <div className="dashboard-phase-grid">

        {phases.map((phase) => (
          <div
            className="dashboard-phase-card"
            key={phase.number}
          >

            <div className="dashboard-phase-top">

              <span className="dashboard-phase-number">
                {phase.number}
              </span>

              <span className="dashboard-phase-status">
                {phase.status}
              </span>

            </div>

            <h3>{phase.name}</h3>

            <p>{phase.description}</p>

          </div>
        ))}

      </div>

      {/* Program Control Areas */}
      <div className="section-heading">
        <div>
          <h2>Program Control Areas</h2>
          <p>
            Core areas being monitored throughout the program lifecycle.
          </p>
        </div>
      </div>

      <div className="focus-grid">

        {focusAreas.map((area) => (
          <div className="focus-card" key={area.title}>

            <div className="focus-card-icon">
              {area.icon}
            </div>

            <div>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </div>

          </div>
        ))}

      </div>

      {/* Bottom Section */}
      <div className="dashboard-bottom-grid">

        {/* Dependencies */}
        <div className="panel">

          <div className="panel-header">
            <div>
              <h2>Critical Program Dependencies</h2>
              <p>
                Dependencies requiring attention before downstream
                integration.
              </p>
            </div>
          </div>

          <div className="dashboard-list">

            <div className="dashboard-list-item">
              <span className="list-indicator high"></span>

              <div>
                <strong>Hardware & Procurement</strong>
                <p>
                  Imported components and fabrication lead times.
                </p>
              </div>
            </div>

            <div className="dashboard-list-item">
              <span className="list-indicator high"></span>

              <div>
                <strong>Robot Integration</strong>
                <p>
                  FANUC support and robot/vision integration.
                </p>
              </div>
            </div>

            <div className="dashboard-list-item">
              <span className="list-indicator medium"></span>

              <div>
                <strong>Simulation & Technical Support</strong>
                <p>
                  External agencies and specialist technical dependencies.
                </p>
              </div>
            </div>

            <div className="dashboard-list-item">
              <span className="list-indicator high"></span>

              <div>
                <strong>Multi-Robot Synchronization</strong>
                <p>
                  Real-time kinematic and motion-control constraints.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Success Framework */}
        <div className="panel">

          <div className="panel-header">
            <div>
              <h2>Success Framework</h2>
              <p>
                How program health should be evaluated.
              </p>
            </div>
          </div>

          <div className="success-framework">

            <div className="success-item">
              <span>01</span>

              <div>
                <strong>Technical Readiness</strong>
                <p>
                  Vision and robot capabilities are ready for integration.
                </p>
              </div>
            </div>

            <div className="success-item">
              <span>02</span>

              <div>
                <strong>Integration Readiness</strong>
                <p>
                  Hardware and software systems work together reliably.
                </p>
              </div>
            </div>

            <div className="success-item">
              <span>03</span>

              <div>
                <strong>PoC Demonstration</strong>
                <p>
                  Integrated system demonstrates the intended moving-target
                  interaction.
                </p>
              </div>
            </div>

            <div className="success-item">
              <span>04</span>

              <div>
                <strong>Scalability Assessment</strong>
                <p>
                  Evidence supports evaluation of future production scaling.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

  const renderProgramPlan = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Track Moving Objects",
      description:
        "Demonstrate moving-object tracking and integrate the FANUC CRx robot with the CynLr vision system.",
      status: "Foundation",
      milestones: [
        "Moving object tracking demonstration",
        "FANUC CRx integration",
        "Vision-to-robot communication",
      ],
    },
    {
      phase: "Phase 2",
      title: "Track & Grasp",
      description:
        "Extend tracking to interaction and grasping using FANUC robot freedom and the 7th Axis RTU.",
      status: "Integration",
      milestones: [
        "Moving conveyor tracking",
        "Robot interaction with moving targets",
        "7th Axis RTU integration",
        "Application development",
      ],
    },
    {
      phase: "Phase 3",
      title: "Validation & Demonstration",
      description:
        "Validate the integrated system and demonstrate whether the PoC can scale toward production use.",
      status: "Validation",
      milestones: [
        "End-to-end system validation",
        "Reliability assessment",
        "PoC demonstration",
        "Production scalability assessment",
      ],
    },
  ];

  return (
    <section className="content">
      {/* Page Introduction */}
      <div className="intro">
        <div>
          <h2>Program Plan</h2>
          <p>
            Execution structure for the Visual Adaptable Robot PoC,
            from moving-object tracking through system validation.
          </p>
        </div>

        <button className="primary-button">
          + Add Milestone
        </button>
      </div>

      {/* Program Overview */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-top">
            <span>Program Phases</span>
            <span className="stat-icon">◆</span>
          </div>

          <div className="stat-value">3</div>

          <p>Execution phases</p>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span>Core Workstreams</span>
            <span className="stat-icon">◉</span>
          </div>

          <div className="stat-value">4</div>

          <p>Cross-functional teams</p>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span>Critical Dependencies</span>
            <span className="stat-icon warning">!</span>
          </div>

          <div className="stat-value">4+</div>

          <p>Hardware & integration dependencies</p>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span>PoC Focus</span>
            <span className="stat-icon">↗</span>
          </div>

          <div className="stat-value">RT</div>

          <p>Real-time tracking & interaction</p>
        </div>
      </div>

      {/* Phase Plan */}
      <section className="panel">
        <div className="panel-header">
          <div>
            <h3>Phase Execution Plan</h3>
            <p>
              Major phases, outcomes and milestone checkpoints
            </p>
          </div>
        </div>

        <div className="phase-plan">
          {phases.map((phase, index) => (
            <div className="phase-plan-card" key={phase.phase}>
              <div className="phase-plan-header">
                <div className="phase-number">
                  0{index + 1}
                </div>

                <div>
                  <span className="phase-label">
                    {phase.phase}
                  </span>

                  <h3>{phase.title}</h3>
                </div>

                <span className="workstream-status">
                  {phase.status}
                </span>
              </div>

              <p className="phase-description">
                {phase.description}
              </p>

              <div className="milestone-title">
                Key Milestones
              </div>

              <div className="milestone-list">
                {phase.milestones.map((milestone, milestoneIndex) => (
                  <div
                    className="milestone-item"
                    key={milestone}
                  >
                    <span className="milestone-check">
                      {milestoneIndex + 1}
                    </span>

                    <span>{milestone}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workstream Plan */}
      <section className="panel activity-panel">
        <div className="panel-header">
          <div>
            <h3>Cross-Functional Workstreams</h3>
            <p>
              Engineering domains required for program execution
            </p>
          </div>
        </div>

        <div className="workstream-grid">
          <div className="workstream">
            <span className="workstream-number">01</span>

            <div>
              <strong>Vision / ML</strong>
              <p>
                Object detection, tracking and target interaction
              </p>
            </div>

            <span className="workstream-status">
              Core
            </span>
          </div>

          <div className="workstream">
            <span className="workstream-number">02</span>

            <div>
              <strong>Robotics & Control</strong>
              <p>
                Robot motion, synchronization and control
              </p>
            </div>

            <span className="workstream-status">
              Core
            </span>
          </div>

          <div className="workstream">
            <span className="workstream-number">03</span>

            <div>
              <strong>Mechanical / Electronics</strong>
              <p>
                Mounts, tooling, sensors and hardware integration
              </p>
            </div>

            <span className="workstream-status">
              Support
            </span>
          </div>

          <div className="workstream">
            <span className="workstream-number">04</span>

            <div>
              <strong>System Integration</strong>
              <p>
                End-to-end integration, testing and validation
              </p>
            </div>

            <span className="workstream-status">
              Core
            </span>
          </div>
        </div>
      </section>

      {/* Program Dependencies */}
      <section className="panel">
        <div className="panel-header">
          <div>
            <h3>Program Constraints</h3>
            <p>
              Dependencies that can influence schedule and execution
            </p>
          </div>

          <button
            className="view-button"
            onClick={() => setActivePage("Dependencies")}
          >
            View dependencies →
          </button>
        </div>

        <div className="dependency-list">
          <div className="dependency">
            <div className="dependency-status high"></div>

            <div className="dependency-content">
              <strong>Hardware Procurement</strong>
              <span>
                Imported A-class components may introduce lead time.
              </span>
            </div>

            <span className="risk-label high-label">
              High
            </span>
          </div>

          <div className="dependency">
            <div className="dependency-status medium"></div>

            <div className="dependency-content">
              <strong>FANUC Support</strong>
              <span>
                External robot support availability can affect integration.
              </span>
            </div>

            <span className="risk-label medium-label">
              Medium
            </span>
          </div>

          <div className="dependency">
            <div className="dependency-status medium"></div>

            <div className="dependency-content">
              <strong>Kinematic Library</strong>
              <span>
                Real-time multi-robot synchronization may be constrained.
              </span>
            </div>

            <span className="risk-label medium-label">
              Medium
            </span>
          </div>
        </div>
      </section>
    </section>
  );
};

 const renderTasks = () => {
  const tasks = [
    {
      id: "01",
      activity: "Vision System",
      subActivity: "Object detection and identification",
      workstream: "Vision / ML",
      resource: "Vision Engineer",
      effort: "TBD",
      location: "CynLr facility",
      status: "In Progress",
      priority: "High",
    },
    {
      id: "02",
      activity: "Moving Object Tracking",
      subActivity: "Continuous target tracking on conveyor",
      workstream: "Vision / ML",
      resource: "Vision Engineer",
      effort: "TBD",
      location: "CynLr facility",
      status: "In Progress",
      priority: "High",
    },
    {
      id: "03",
      activity: "FANUC Integration",
      subActivity: "Integrate FANUC CRx with vision stack",
      workstream: "Robotics",
      resource: "Robotics Engineer",
      effort: "TBD",
      location: "Integration Lab",
      status: "Planned",
      priority: "High",
    },
    {
      id: "04",
      activity: "Robot Motion Control",
      subActivity: "Coordinate robot motion with moving target",
      workstream: "Robotics & Control",
      resource: "Controls Engineer",
      effort: "TBD",
      location: "Integration Lab",
      status: "Planned",
      priority: "High",
    },
    {
      id: "05",
      activity: "7th Axis RTU",
      subActivity: "Integrate robot with 7th Axis RTU",
      workstream: "Robotics",
      resource: "Controls Engineer",
      effort: "TBD",
      location: "Integration Lab",
      status: "Planned",
      priority: "High",
    },
    {
      id: "06",
      activity: "Tooling & Gripper",
      subActivity: "Adaptable gripper and tooling setup",
      workstream: "Mechanical",
      resource: "Mechanical Engineer",
      effort: "TBD",
      location: "Mechanical Lab",
      status: "Planned",
      priority: "Medium",
    },
    {
      id: "07",
      activity: "Hardware Integration",
      subActivity: "Sensors, robot and supporting hardware",
      workstream: "Electronics",
      resource: "Electronics Engineer",
      effort: "TBD",
      location: "Integration Lab",
      status: "Planned",
      priority: "Medium",
    },
    {
      id: "08",
      activity: "System Integration",
      subActivity: "End-to-end vision and robot integration",
      workstream: "Integration",
      resource: "Integration Team",
      effort: "TBD",
      location: "Test Area",
      status: "Planned",
      priority: "High",
    },
    {
      id: "09",
      activity: "Validation",
      subActivity: "Tracking, interaction and reliability testing",
      workstream: "Integration",
      resource: "Validation Team",
      effort: "TBD",
      location: "Test Area",
      status: "Planned",
      priority: "High",
    },
    {
      id: "10",
      activity: "PoC Demonstration",
      subActivity: "Demonstrate production scalability potential",
      workstream: "Program",
      resource: "Cross-functional Team",
      effort: "TBD",
      location: "Customer / Demo Area",
      status: "Planned",
      priority: "High",
    },
  ];

  return (
    <section className="content">
      {/* Page Header */}
      <div className="intro">
        <div>
          <h2>Tasks</h2>
          <p>
            Cross-functional engineering activities supporting the
            Visual Adaptable Robot PoC.
          </p>
        </div>

        <button className="primary-button">
          + Add Task
        </button>
      </div>

      {/* Task Summary */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-top">
            <span>Total Activities</span>
            <span className="stat-icon">☷</span>
          </div>

          <div className="stat-value">
            {tasks.length}
          </div>

          <p>Program activities</p>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span>In Progress</span>
            <span className="stat-icon">↗</span>
          </div>

          <div className="stat-value">
            {
              tasks.filter(
                (task) => task.status === "In Progress"
              ).length
            }
          </div>

          <p>Currently active</p>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span>High Priority</span>
            <span className="stat-icon warning">!</span>
          </div>

          <div className="stat-value">
            {
              tasks.filter(
                (task) => task.priority === "High"
              ).length
            }
          </div>

          <p>Requires attention</p>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span>Workstreams</span>
            <span className="stat-icon">◉</span>
          </div>

          <div className="stat-value">7</div>

          <p>Cross-functional domains</p>
        </div>
      </div>

      {/* Task Table */}
      <section className="panel task-table-panel">
        <div className="panel-header">
          <div>
            <h3>Engineering Activity Register</h3>
            <p>
              Activity, resource, effort and execution information
            </p>
          </div>

          <button
            className="view-button"
            onClick={() => setActivePage("Program Plan")}
          >
            View program plan →
          </button>
        </div>

        <div className="task-table-wrapper">
          <table className="task-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Activity</th>
                <th>Sub-activity</th>
                <th>Workstream</th>
                <th>Resource</th>
                <th>Effort</th>
                <th>Location</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>
                    <span className="task-id">
                      {task.id}
                    </span>
                  </td>

                  <td>
                    <strong className="task-name">
                      {task.activity}
                    </strong>
                  </td>

                  <td>
                    <span className="task-subactivity">
                      {task.subActivity}
                    </span>
                  </td>

                  <td>
                    <span className="workstream-tag">
                      {task.workstream}
                    </span>
                  </td>

                  <td>
                    <span className="resource-text">
                      {task.resource}
                    </span>
                  </td>

                  <td>
                    <span className="effort-text">
                      {task.effort}
                    </span>
                  </td>

                  <td>
                    <span className="location-text">
                      {task.location}
                    </span>
                  </td>

                  <td>
                    <span
                      className={
                        task.priority === "High"
                          ? "priority-badge high-priority"
                          : "priority-badge medium-priority"
                      }
                    >
                      {task.priority}
                    </span>
                  </td>

                  <td>
                    <span
                      className={
                        task.status === "In Progress"
                          ? "task-status in-progress"
                          : "task-status planned"
                      }
                    >
                      <span className="status-dot-small"></span>
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Planning Note */}
      <section className="panel">
        <div className="panel-header">
          <div>
            <h3>Planning Notes</h3>
            <p>
              Program-management assumptions and constraints
            </p>
          </div>
        </div>

        <div className="planning-notes">
          <div className="planning-note">
            <span>01</span>
            <div>
              <strong>Effort Estimation</strong>
              <p>
                Effort hours should be finalized after engineering
                decomposition and resource availability are confirmed.
              </p>
            </div>
          </div>

          <div className="planning-note">
            <span>02</span>
            <div>
              <strong>External Dependencies</strong>
              <p>
                FANUC support, hardware procurement and external
                fabrication can influence task sequencing.
              </p>
            </div>
          </div>

          <div className="planning-note">
            <span>03</span>
            <div>
              <strong>Integration Sequence</strong>
              <p>
                Vision, robot control, mechanical setup and system
                integration need coordinated execution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

  const renderDependencies = () => {
    const dependencies = [
      ["RTU / 7th Axis", "Hardware availability", "High"],
      ["FANUC Support", "Robot integration support", "Medium"],
      ["Hardware Procurement", "Imported A-class components", "High"],
      ["Kinematic Library", "Multi-robot synchronization", "Medium"],
      ["External Vendors", "Fabrication and machining", "Medium"],
    ];

    return (
      <section className="content">
        <div className="intro">
          <div>
            <h2>Dependencies</h2>
            <p>
              Internal and external dependencies that can affect the PoC.
            </p>
          </div>
        </div>

        <section className="panel">
          <div className="panel-header">
            <div>
              <h3>Critical Dependencies</h3>
              <p>Items requiring program-level coordination</p>
            </div>
          </div>

          <div className="dependency-list">
            {dependencies.map((item, index) => (
              <div className="dependency" key={index}>
                <div
                  className={`dependency-status ${
                    item[2] === "High" ? "high" : "medium"
                  }`}
                ></div>

                <div className="dependency-content">
                  <strong>{item[0]}</strong>
                  <span>{item[1]}</span>
                </div>

                <span
                  className={
                    item[2] === "High"
                      ? "risk-label high-label"
                      : "risk-label medium-label"
                  }
                >
                  {item[2]}
                </span>
              </div>
            ))}
          </div>
        </section>
      </section>
    );
  };

  function renderResources() {
  const resources = [
    {
      category: "Software",
      resources: "Vision / ML Engineers",
      responsibility: "Object detection, identification and moving-object tracking",
      location: "CynLr Facility",
      priority: "High",
    },
    {
      category: "Robotics",
      resources: "Robotics Engineers",
      responsibility: "FANUC CRx integration and robot motion coordination",
      location: "Integration Lab",
      priority: "High",
    },
    {
      category: "Controls",
      resources: "Controls Engineers",
      responsibility: "Robot control, RTU integration and synchronization",
      location: "Integration Lab",
      priority: "High",
    },
    {
      category: "Mechanical",
      resources: "Mechanical Engineers",
      responsibility: "Gripper, tooling and mechanical integration",
      location: "Mechanical Lab",
      priority: "Medium",
    },
    {
      category: "Electronics",
      resources: "Electronics Engineers",
      responsibility: "Sensors, hardware interfaces and supporting electronics",
      location: "Integration Lab",
      priority: "Medium",
    },
    {
      category: "Solutions",
      resources: "Solutions Engineers",
      responsibility: "System architecture, integration and technical feasibility",
      location: "CynLr Facility",
      priority: "High",
    },
    {
      category: "Program",
      resources: "Program Manager",
      responsibility: "Planning, coordination, dependencies, risks and milestones",
      location: "Program Office",
      priority: "High",
    },
    {
      category: "External",
      resources: "Vendors / Partners",
      responsibility: "Fabrication, machining, procurement and specialist support",
      location: "External",
      priority: "Medium",
    },
  ];

  return (
    <>
      <div className="page-header">
        <div>
          <div className="breadcrumb">CONTROL / RESOURCES</div>
          <h1>Resources</h1>
          <p>
            Cross-functional resources required to execute the automation PoC.
          </p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">RESOURCE GROUPS</div>
          <div className="stat-value">08</div>
          <div className="stat-caption">Cross-functional categories</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">HIGH PRIORITY</div>
          <div className="stat-value">05</div>
          <div className="stat-caption">Critical to PoC execution</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">INTERNAL</div>
          <div className="stat-value">07</div>
          <div className="stat-caption">Engineering and program teams</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">EXTERNAL</div>
          <div className="stat-value">01</div>
          <div className="stat-caption">Partners and vendors</div>
        </div>
      </div>

      <div className="panel resource-panel">
        <div className="panel-header">
          <div>
            <h2>Resource Register</h2>
            <p>
              Roles, responsibilities and locations supporting the program.
            </p>
          </div>
        </div>

        <div className="resource-table-wrapper">
          <table className="resource-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Resource</th>
                <th>Primary Responsibility</th>
                <th>Location</th>
                <th>Priority</th>
              </tr>
            </thead>

            <tbody>
              {resources.map((item) => (
                <tr key={item.category}>
                  <td>
                    <span className="resource-category">
                      {item.category}
                    </span>
                  </td>

                  <td>
                    <strong className="resource-name">
                      {item.resources}
                    </strong>
                  </td>

                  <td>
                    <span className="resource-responsibility">
                      {item.responsibility}
                    </span>
                  </td>

                  <td>
                    <span className="resource-location">
                      {item.location}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`resource-priority ${
                        item.priority === "High"
                          ? "resource-high"
                          : "resource-medium"
                      }`}
                    >
                      {item.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2>Resource Planning Principles</h2>
            <p>
              How resources should be allocated during the PoC.
            </p>
          </div>
        </div>

        <div className="resource-principles">
          <div className="resource-principle">
            <span>01</span>
            <div>
              <strong>Cross-functional Allocation</strong>
              <p>
                Coordinate software, robotics, controls, mechanical and
                electronics resources around integration milestones.
              </p>
            </div>
          </div>

          <div className="resource-principle">
            <span>02</span>
            <div>
              <strong>Integration-focused Capacity</strong>
              <p>
                Prioritize engineering availability around system integration,
                validation and demonstration activities.
              </p>
            </div>
          </div>

          <div className="resource-principle">
            <span>03</span>
            <div>
              <strong>External Resource Control</strong>
              <p>
                Track vendor and partner commitments closely because
                fabrication, procurement and specialist support can affect
                program timelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

 function renderRisks() {
  const risks = [
    {
      id: "R-01",
      risk: "Imported component procurement delays",
      category: "Procurement",
      probability: "High",
      impact: "High",
      owner: "Program Team",
      mitigation:
        "Identify critical components early and track procurement milestones closely.",
      status: "Open",
    },
    {
      id: "R-02",
      risk: "External fabrication or machining delays",
      category: "External",
      probability: "Medium",
      impact: "High",
      owner: "Mechanical Team",
      mitigation:
        "Track vendor commitments and maintain alternate fabrication options where practical.",
      status: "Open",
    },
    {
      id: "R-03",
      risk: "FANUC support availability",
      category: "Integration",
      probability: "Medium",
      impact: "High",
      owner: "Robotics Team",
      mitigation:
        "Schedule vendor support early and escalate integration blockers quickly.",
      status: "Monitoring",
    },
    {
      id: "R-04",
      risk: "Limited real-time multi-robot kinematic libraries",
      category: "Technical",
      probability: "High",
      impact: "High",
      owner: "Controls Team",
      mitigation:
        "Validate the synchronization approach through early technical experiments.",
      status: "Monitoring",
    },
    {
      id: "R-05",
      risk: "Advanced simulation dependency",
      category: "Technical",
      probability: "Medium",
      impact: "Medium",
      owner: "Solutions Team",
      mitigation:
        "Define simulation requirements early and confirm external agency availability.",
      status: "Open",
    },
    {
      id: "R-06",
      risk: "Cross-functional integration bottleneck",
      category: "Program",
      probability: "Medium",
      impact: "High",
      owner: "Program Manager",
      mitigation:
        "Use staged integration and coordinate engineering work around critical milestones.",
      status: "Monitoring",
    },
  ];

  return (
    <>
      <div className="page-header">
        <div>
          <div className="breadcrumb">CONTROL / RISKS</div>
          <h1>Risks</h1>
          <p>
            Identify, assess and mitigate risks that can affect PoC execution.
          </p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">TOTAL RISKS</div>
          <div className="stat-value">06</div>
          <div className="stat-caption">Tracked program risks</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">HIGH IMPACT</div>
          <div className="stat-value">05</div>
          <div className="stat-caption">Require active mitigation</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">HIGH PROBABILITY</div>
          <div className="stat-value">02</div>
          <div className="stat-caption">Potentially significant</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">MONITORING</div>
          <div className="stat-value">03</div>
          <div className="stat-caption">Under active review</div>
        </div>
      </div>

      <div className="panel risk-panel">
        <div className="panel-header">
          <div>
            <h2>Risk Register</h2>
            <p>
              Risk probability, impact, ownership and mitigation actions.
            </p>
          </div>
        </div>

        <div className="risk-table-wrapper">
          <table className="risk-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Risk</th>
                <th>Category</th>
                <th>Probability</th>
                <th>Impact</th>
                <th>Owner</th>
                <th>Mitigation</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {risks.map((item) => (
                <tr key={item.id}>
                  <td>
                    <span className="risk-id">{item.id}</span>
                  </td>

                  <td>
                    <strong className="risk-name">
                      {item.risk}
                    </strong>
                  </td>

                  <td>
                    <span className="risk-category">
                      {item.category}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`risk-level ${
                        item.probability === "High"
                          ? "risk-high"
                          : "risk-medium"
                      }`}
                    >
                      {item.probability}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`risk-level ${
                        item.impact === "High"
                          ? "risk-high"
                          : "risk-medium"
                      }`}
                    >
                      {item.impact}
                    </span>
                  </td>

                  <td>
                    <span className="risk-owner">
                      {item.owner}
                    </span>
                  </td>

                  <td>
                    <span className="risk-mitigation">
                      {item.mitigation}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`risk-status ${
                        item.status === "Monitoring"
                          ? "risk-monitoring"
                          : "risk-open"
                      }`}
                    >
                      <span className="risk-status-dot"></span>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2>Risk Management Approach</h2>
            <p>
              Use the risk register as an active program-control mechanism.
            </p>
          </div>
        </div>

        <div className="risk-principles">
          <div className="risk-principle">
            <span>01</span>
            <div>
              <strong>Identify</strong>
              <p>
                Capture technical, procurement, vendor and integration risks
                before they become blockers.
              </p>
            </div>
          </div>

          <div className="risk-principle">
            <span>02</span>
            <div>
              <strong>Assess</strong>
              <p>
                Evaluate probability and impact to determine which risks need
                immediate attention.
              </p>
            </div>
          </div>

          <div className="risk-principle">
            <span>03</span>
            <div>
              <strong>Mitigate</strong>
              <p>
                Assign an owner and define a practical mitigation action for
                every significant risk.
              </p>
            </div>
          </div>

          <div className="risk-principle">
            <span>04</span>
            <div>
              <strong>Review</strong>
              <p>
                Review high-impact risks during program checkpoints and
                escalate risks that threaten critical integration milestones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

 function renderKPIs() {
  const kpis = [
    {
      name: "Moving Object Tracking",
      type: "Leading",
      measure: "Tracking stability during motion",
      target: "Defined during validation",
      purpose: "Indicates readiness for robot interaction",
      status: "On Track",
    },
    {
      name: "Vision Identification",
      type: "Leading",
      measure: "Reliable object identification",
      target: "Validation threshold",
      purpose: "Confirms vision readiness",
      status: "On Track",
    },
    {
      name: "Robot-Target Synchronization",
      type: "Leading",
      measure: "Successful coordinated motion",
      target: "Validation threshold",
      purpose: "Measures control readiness",
      status: "Monitoring",
    },
    {
      name: "Pick / Interaction Reliability",
      type: "Lagging",
      measure: "Successful interaction attempts",
      target: "Defined during PoC",
      purpose: "Measures system performance",
      status: "Monitoring",
    },
    {
      name: "End-to-End PoC Success",
      type: "Lagging",
      measure: "Successful integrated demonstrations",
      target: "PoC acceptance criteria",
      purpose: "Measures overall outcome",
      status: "Pending",
    },
    {
      name: "Production Scalability Readiness",
      type: "Lagging",
      measure: "Evidence supporting production scaling",
      target: "Program assessment",
      purpose: "Evaluates scalability potential",
      status: "Pending",
    },
  ];

  return (
    <>
      <div className="page-header">
        <div>
          <div className="breadcrumb">CONTROL / KPIs</div>
          <h1>KPIs & Success Metrics</h1>
          <p>
            Track leading indicators, lagging outcomes and program health.
          </p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">TOTAL KPIs</div>
          <div className="stat-value">06</div>
          <div className="stat-caption">Program success indicators</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">LEADING</div>
          <div className="stat-value">03</div>
          <div className="stat-caption">Predict future readiness</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">LAGGING</div>
          <div className="stat-value">03</div>
          <div className="stat-caption">Measure achieved outcomes</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">ACTIVE</div>
          <div className="stat-value">04</div>
          <div className="stat-caption">Currently being monitored</div>
        </div>
      </div>

      <div className="panel kpi-panel">
        <div className="panel-header">
          <div>
            <h2>KPI Register</h2>
            <p>
              Leading and lagging indicators for technical and program
              performance.
            </p>
          </div>
        </div>

        <div className="kpi-table-wrapper">
          <table className="kpi-table">
            <thead>
              <tr>
                <th>KPI</th>
                <th>Indicator</th>
                <th>Measure</th>
                <th>Target</th>
                <th>Purpose</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {kpis.map((item) => (
                <tr key={item.name}>
                  <td>
                    <strong className="kpi-name">
                      {item.name}
                    </strong>
                  </td>

                  <td>
                    <span
                      className={`kpi-type ${
                        item.type === "Leading"
                          ? "kpi-leading"
                          : "kpi-lagging"
                      }`}
                    >
                      {item.type}
                    </span>
                  </td>

                  <td>
                    <span className="kpi-measure">
                      {item.measure}
                    </span>
                  </td>

                  <td>
                    <span className="kpi-target">
                      {item.target}
                    </span>
                  </td>

                  <td>
                    <span className="kpi-purpose">
                      {item.purpose}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`kpi-status ${
                        item.status === "On Track"
                          ? "kpi-on-track"
                          : item.status === "Monitoring"
                          ? "kpi-monitoring"
                          : "kpi-pending"
                      }`}
                    >
                      <span className="kpi-status-dot"></span>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2>Leading vs Lagging Indicators</h2>
            <p>
              Use both types of indicators to avoid measuring success only
              after the result is achieved.
            </p>
          </div>
        </div>

        <div className="indicator-grid">
          <div className="indicator-card">
            <div className="indicator-header">
              <span className="indicator-number">L</span>
              <div>
                <strong>Leading Indicators</strong>
                <span>Predictive health signals</span>
              </div>
            </div>

            <ul>
              <li>Vision identification readiness</li>
              <li>Moving-object tracking stability</li>
              <li>Robot-target synchronization readiness</li>
              <li>Integration milestone completion</li>
            </ul>
          </div>

          <div className="indicator-card">
            <div className="indicator-header">
              <span className="indicator-number">G</span>
              <div>
                <strong>Lagging Indicators</strong>
                <span>Outcome measurements</span>
              </div>
            </div>

            <ul>
              <li>Successful pick / interaction attempts</li>
              <li>End-to-end PoC demonstrations</li>
              <li>System reliability during validation</li>
              <li>Evidence of production scalability</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2>Reward / Loss Check & Balance</h2>
            <p>
              A simple decision framework for balancing speed, technical
              feasibility and program risk.
            </p>
          </div>
        </div>

        <div className="balance-grid">
          <div className="balance-card reward-card">
            <div className="balance-label">REWARD SIGNAL</div>
            <strong>Positive Progress</strong>
            <p>
              Recognize teams when critical milestones, integration
              objectives and validation outcomes are achieved with acceptable
              risk.
            </p>

            <div className="balance-items">
              <span>✓ Milestone achieved</span>
              <span>✓ Integration validated</span>
              <span>✓ Risk reduced</span>
            </div>
          </div>

          <div className="balance-card loss-card">
            <div className="balance-label">LOSS SIGNAL</div>
            <strong>Corrective Action</strong>
            <p>
              Trigger escalation or replanning when dependencies, technical
              blockers or risks threaten critical program outcomes.
            </p>

            <div className="balance-items">
              <span>! Milestone at risk</span>
              <span>! Critical dependency blocked</span>
              <span>! Risk exceeds tolerance</span>
            </div>
          </div>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2>Success Measurement Framework</h2>
            <p>
              Recommended review loop for program checkpoints.
            </p>
          </div>
        </div>

        <div className="kpi-review-flow">
          <div className="kpi-flow-step">
            <span>01</span>
            <strong>Measure</strong>
            <p>Collect current KPI evidence.</p>
          </div>

          <div className="kpi-flow-arrow">→</div>

          <div className="kpi-flow-step">
            <span>02</span>
            <strong>Compare</strong>
            <p>Compare progress against agreed targets.</p>
          </div>

          <div className="kpi-flow-arrow">→</div>

          <div className="kpi-flow-step">
            <span>03</span>
            <strong>Act</strong>
            <p>Mitigate risks or adjust the plan.</p>
          </div>

          <div className="kpi-flow-arrow">→</div>

          <div className="kpi-flow-step">
            <span>04</span>
            <strong>Review</strong>
            <p>Confirm outcome at the next checkpoint.</p>
          </div>
        </div>
      </div>
    </>
  );
}

  const renderPage = () => {
    switch (activePage) {
      case "Program Plan":
        return renderProgramPlan();

      case "Tasks":
        return renderTasks();

      case "Dependencies":
        return renderDependencies();

      case "Resources":
        return renderResources();

      case "Risks":
        return renderRisks();

      case "KPIs":
        return renderKPIs();

      case "Dashboard":
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-mark">C</div>

          <div>
            <h2>CynLr</h2>
            <span>EPM Program</span>
          </div>
        </div>

        <nav className="navigation">
          {navigation.map((group) => (
            <div key={group.section}>
              <div className="nav-section-title">
                {group.section}
              </div>

              {group.items.map((item) => (
                <button
                  key={item.name}
                  className={`nav-item ${
                    activePage === item.name ? "active" : ""
                  }`}
                  onClick={() => setActivePage(item.name)}
                >
                  <span>{item.icon}</span>
                  {item.name}
                </button>
              ))}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="status-dot"></div>

          <div>
            <strong>PoC Program</strong>
            <span>Active</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="breadcrumb">
              {pageInfo[activePage].breadcrumb}
            </p>

            <h1>{pageInfo[activePage].title}</h1>
          </div>

          <div className="header-right">
            <span className="program-badge">
              PoC · Active
            </span>

            <div className="avatar">SB</div>
          </div>
        </header>

        {renderPage()}
      </main>
    </div>
  );
}

export default App;