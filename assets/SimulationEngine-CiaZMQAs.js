(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const ss=[{id:"atlas",url:"/robots/atlas.html",name:"Atlas (Electric & Hydraulic)",shortName:"Atlas",era:"2013 – 2026 (In Serial Production)",category:"Bipedal Humanoid",tagline:"From DARPA Hydraulic Parkour Pioneer to 56-DOF All-Electric Industrial Humanoid",cardSummary:"Explore both the 2026 CES Production All-Electric Atlas (56 DOF, 360° swivel joints, 13-DOF direct-drive hands) and the legendary 3D-printed Hydraulic Research Atlas executing superhuman floor get-ups, backflips, parkour vaults, and automotive part handling.",miniSpecs:{dof:"56 DOF (2026)",actuation:"Direct-Drive Electric",reach:"2.3 m / 1.9 m Tall"},variants:[{id:"electric_2026",label:"2026 Production Electric Atlas (56 DOF)"},{id:"hydraulic_2016",label:"2016–2024 Hydraulic HD Atlas (28 DOF)"}],defaultEnv:"factory",introduction:["Atlas represents the pinnacle of dynamic humanoid robotics—a machine whose thirteen-year evolution mirrors the transformation of robotics itself from tethered disaster-response prototypes into foundation-model-powered industrial coworkers. Originally unveiled in July 2013 for the DARPA Robotics Challenge (DRC) as a 330-pound electro-hydraulic giant, Atlas became the world’s premier research testbed for whole-body dynamic balance, Model Predictive Control (MPC), multi-platform parkour, and momentum-coupled manipulation.","In April 2024, Boston Dynamics retired the iconic hydraulic Atlas after 15 years of hydraulic humanoid R&D and introduced a clean-sheet, all-electric successor—culminating in the production-ready All-Electric Atlas unveiled alongside Hyundai Motor Group at CES in January 2026 and entering serial production in March 2026. Standing 1.9 meters tall with a 2.3-meter reach and 56 degrees of freedom, the production Atlas replaces pressurized oil lines with custom ultra-high-torque rotary electric actuators that are quieter, cleaner, and stronger than elite human athletes.","Crucially, Boston Dynamics engineered Electric Atlas for superhuman efficiency rather than strict anatomical mimicry: its hips, waist, and illuminated ring-sensor head swivel continuously through 360 degrees, allowing the robot to invert its knees backward to stand effortlessly from a prone position or transfer heavy automotive roof racks between workstations without stepping to turn around. Paired with Google DeepMind Gemini Robotics models, Toyota Research Institute Large Behavior Models (LBMs), autonomous battery hot-swapping (4-hour runtime), and the October 2026 13-DOF four-finger direct-drive hand, Atlas now operates inside Hyundai’s Georgia Metaplant and semiconductor fab programs."],specs:[["Current Generation","CES 2026 Production All-Electric (Serial Prod. Mar 2026)"],["Height / Max Reach","1.90 m (6 ft 3 in) / 2.30 m vertical & lateral reach"],["Degrees of Freedom","56 total DOF (including two 13-DOF 4-finger hands)"],["Joint Range of Motion","360° continuous swivel at pelvis, waist & head"],["Actuation System","Custom high-torque rotary & encapsulated direct-drive electric"],["Heavy Lift Demonstrated","Up to 45+ kg (100-lb appliance whole-body bear-hug)"],["Battery & Uptime","~4 hours per pack + autonomous self-service battery hot-swap"],["AI & Control Stack","Sim-to-Real RL + Whole-Body MPC + TRI LBM / DeepMind Gemini"]],movements:[{id:"superhuman_getup",name:"360° Superhuman Floor Get-Up & Swivel",tag:"Electric Kinematics",description:"Starts flat on the ground, folds knees backward past 180° into a reverse squat to rise vertically, then swivels hips, torso, and ring-head 360° independently.",controlLaw:"Beyond-Human Inverse Kinematics + Whole-Body RL",peakTorqueNm:410,peakPowerW:2650},{id:"backflip",name:"Explosive Standing Backflip",tag:"Centroidal MPC",description:"Deep counter-movement crouch, explosive triple-extension launch, mid-air tucked 360° pitch rotation, and compliant deep-knee shock absorption.",controlLaw:"Trajectory Optimization + Online Landing MPC",peakTorqueNm:540,peakPowerW:5200},{id:"factory_manip",name:"180° Waist-Swivel Factory Part Transfer",tag:"LBM / Physical AI",description:"Picks an automotive assembly module from the front rack and rotates the upper torso 180° while keeping both feet planted to place it onto the rear station.",controlLaw:"TRI Large Behavior Model + Whole-Body Impedance",peakTorqueNm:320,peakPowerW:1850},{id:"parkour_vault",name:"Plyometric Box Jump & Parkour Stride",tag:"Dynamic Vision",description:"Approaches a stepped plyometric box obstacle, plants dynamically, leaps onto the upper deck, and rebounds cleanly back to floor level.",controlLaw:"Perception-in-Loop Footstep Planner + Centroidal MPC",peakTorqueNm:485,peakPowerW:4400},{id:"sprint",name:"Athletic Bipedal Sprint",tag:"Aerial Phase",description:"Full aerial-phase running gait with counter-rotating shoulder/pelvis angular momentum cancellation and heel-to-toe compliant ground strike.",controlLaw:"Spring-Loaded Bipedal RL Locomotion Policy",peakTorqueNm:365,peakPowerW:3100}],generationTable:{columns:["Subsystem / Metric","DRC Atlas (2013–2015)","HD Hydraulic Atlas (2016–2024)","Electric Prototype (2024–2025)","Production Atlas (2026)"],rows:[["Height & Mass","1.88 m · 150 kg (330 lb)","1.50 m · 80–89 kg (176–196 lb)","~1.75 m · ~85 kg","1.90 m · Optimized industrial mass"],["Actuation","External hose electro-hydraulic","3D-printed vascular hydraulic manifolds","Custom high-torque rotary electric","Automotive-grade rotary + direct-drive electric"],["Degrees of Freedom","28 DOF","28 DOF","~36+ body DOF + 7-DOF grippers","56 DOF (with dual 13-DOF 4-finger hands)"],["Control Architecture","Quasi-static ZMP / hand-tuned states","Online Whole-Body MPC (2018+)","Sim-to-Real RL + TRI LBMs","RL + Gemini Robotics + Fleet Integration"],["End-Effectors","Third-party Sandia/iRobot hands","1-DOF / 2-DOF pinch & hook grippers","3-finger 7-DOF adaptive grippers","4-finger 13-DOF direct-drive tool hands (Oct 2026)"],["Factory Suitability","Tethered / loud hydraulic pump","High maintenance; oil leak risk on failure","Clean, quiet, 360° swivel validation","4-hr battery + autonomous hot-swap; serial prod."]]},improvements:[{subsystem:"Actuation & Powertrain",era:"2013 → 2016 → 2024",title:"From Pressurized Hydraulic Hoses to 3D-Printed Manifolds to Custom Electric Actuators",before:"3,000-psi hydraulic pump, loud cooling fans, external hoses, and catastrophic oil sprays if a seal ruptured.",after:"Whisper-quiet custom high-torque pancake electric rotary actuators delivering greater peak torque-to-weight with zero fluid risk.",detail:"In 2016, Boston Dynamics first revolutionized hydraulic Atlas by 3D-printing titanium/aluminum leg bones with integrated vascular fluid channels and custom micro-valves, cutting robot weight nearly in half (150 kg to 80 kg) to enable backflips. Yet hydraulics remained unacceptable on clean automotive and semiconductor factory floors. Over several years of stealth R&D unveiled in April 2024, Boston Dynamics engineered proprietary compact electric actuators with higher specific torque than their hydraulic predecessors, full regenerative braking, and clean solid-state reliability."},{subsystem:"Kinematic Morphology",era:"2024 – 2026",title:"Superhuman 360° Continuous Swivel Joints",before:"Human-constrained joint stops (~90–140° flexion) requiring multi-step foot shuffling to turn 180° in tight aisles.",after:"Continuous 360° rotation at hips, waist, and neck enabling zero-footstep front-to-back material transfer.",detail:"By freeing Electric Atlas from hydraulic hoses crossing joint boundaries, engineers introduced slip-ring/high-flex electric joints capable of full 360° rotation. In narrow factory line-side cells, Atlas keeps its feet planted facing a parts bin, picks a heavy component, rotates only its upper torso and head 180° to place it on an assembly carrier, and swivels back—slashing cycle time, floor wear, and fall risk."},{subsystem:"Control Stack & Physical AI",era:"2017 → 2021 → 2026",title:"Finite State Machines → Whole-Body MPC → LBMs & Gemini Foundation Models",before:"Months of manual C++ trajectory scripting per parkour stunt; brittle if a box shifted by a few centimeters.",after:"GPU-trained Sim-to-Real RL policies + TRI Large Behavior Models + Google DeepMind Gemini Robotics ER.",detail:"Around 2018–2021, Boston Dynamics replaced offline trajectory playback with real-time Model Predictive Control (MPC) solving centroidal momentum optimization dozens of times per second. Between 2024 and 2026, they fused MPC priors with massive Sim-to-Real Reinforcement Learning (allowing Atlas to bear-hug 100-lb fridges and recover from unseen slips) and visuomotor Large Behavior Models—compressing new industrial skill authoring from ~1 year to just hours."},{subsystem:"Dexterous Manipulation",era:"Oct 2026 Upgrade",title:"New 13-DOF Four-Finger Encapsulated Direct-Drive Production Hand",before:"Simple 2-DOF parallel hooks (HD Atlas) and 3-finger 7-DOF grasping grippers (2024 Electric prototype).",after:"Mass-manufacturable 4-finger (no pinky), 13-DOF hand with encapsulated direct-drive actuators and tactile compliance.",detail:"Announced October 1, 2026, Boston Dynamics redesigned Atlas’s hands specifically for in-hand reorientation and triggered factory power tools. Eliminating delicate tendon cables and gearboxes that shatter under shock loads, encapsulated direct-drive actuators provide backdrivable force transparency—ideal for contact-rich Sim-to-Real RL policies."},{subsystem:"Enterprise Uptime & Manufacturing",era:"Jan – Nov 2026",title:"56-DOF Serial Production Design & Autonomous Battery Hot-Swapping",before:"20–45 minute research battery runs requiring a technician hoist and manual pack replacement.",after:"Up to 4-hour industrial runtime per charge plus autonomous walk-up battery hot-swapping for 24/7 multi-shift operation.",detail:"Unveiled at CES January 2026 with Hyundai Motor Group, Production Atlas standardized harnesses, sealed exterior shrouds, and automotive-volume DFM (Design for Manufacturing). When battery state-of-charge drops, Atlas walks autonomously to a swap kiosk and exchanges its own battery pack in minutes, supporting deployments at Hyundai Metaplant America and GlobalFoundries semiconductor fabs."}]},{id:"spot",url:"/robots/spot.html",name:"Spot & Spot Arm",shortName:"Spot",era:"2015 – 2026 (Spot 5.2 Shipping)",category:"Commercial Agile Quadruped",tagline:"World’s Most Widely Deployed Industrial Legged Robot — Now Powered by Gemini & Agentic Orbit",cardSummary:'Simulate Spot’s agile terrain trotting, uncanny "chicken-head" 6-DOF Spot Arm world-space stabilization, autonomous door opening, stair climbing, self-righting, and choreographed dance across six industrial and outdoor environments.',miniSpecs:{dof:"12 Leg + 6 Arm DOF",actuation:"Brushless Electric",reach:"1,500+ Global Fleet"},variants:[{id:"spot_arm_cam2",label:"2026 Spot 5.2 + 6-DOF Arm & Spot Cam 2"},{id:"spot_base",label:"Spot Inspection Base Deck (12 DOF)"}],defaultEnv:"construction",introduction:["Spot is the robot that turned dynamic legged mobility from viral laboratory demonstrations into an indispensable daily industrial tool across power utilities, offshore oil rigs, nuclear decommissioning zones, construction sites, mines, and semiconductor fabs. Descending from the hydraulic Spot Classic (2015) and the breakthrough all-electric SpotMini (2016–2017), Spot launched commercially in June 2020 weighing roughly 32.7 kg (72 lb) with 12 brushless electric leg degrees of freedom, 360-degree stereo depth perception, IP54 weather sealing, and innate terrain-reflex stability.",'When equipped with the 6-DOF Spot Arm (introduced 2021), Spot transforms from a mobile sensor carrier into an agile mobile manipulator. Because the arm’s inverse kinematics are unified with the 12 actuators in its four legs, Spot coordinates whole-body motion effortlessly—keeping its gripper locked at a sub-centimeter point in 3D space while its torso pitches, rolls, and squats underneath ("chicken-head" stabilization), pulling open heavy latched industrial doors while stepping backward, and turning high-torque valves.',"Through 2026, Boston Dynamics accelerated Spot’s intelligence dramatically: Spot 5.1 (January 2026) introduced the Spot Cam 2 pan-tilt-zoom/thermal/360° payload and enterprise-hardened door opening across 2,500+ doors; the March 2026 FieldAI integration slashed dynamic construction inspection times by over 90%; and Spot 5.2 (September 2026) integrated Google Gemini Robotics ER 1.6 visual reasoning, 20+ gas detection, visual vibration analysis, and an asset-centric Orbit MCP layer that lets AI agents autonomously dispatch Spot whenever factory PLC sensors or security cameras fire an alert."],specs:[["Current Release","Spot 5.2 + Orbit Asset-Centric Fleet OS (Sept 2026)"],["Mass","32.7 kg base / ~41 kg with 6-DOF Spot Arm"],["Degrees of Freedom","12 leg DOF (3 per leg: hip X/Y + knee) + 6-DOF Spot Arm"],["Max Speed & Slope","1.6 m/s (3.6 mph) · ±30° slopes & industrial stairs"],["Payload Capacity","14 kg (30 lb) deck payload · 11 kg peak arm lift / 5 kg full extension"],["Ingress & Temp Rating","IP54 rain & dust protection · −20°C to +55°C operating window"],["2026 Sensor Suite","5x Stereo RGB-D pairs + Spot Cam 2 (4K PTZ, Thermal, 360°, Acoustic)"],["AI & Dispatch","Gemini Robotics ER 1.6 + FieldAI Foundation Models + MCP API"]],movements:[{id:"chicken_head",name:'Gyro "Chicken-Head" Arm Stabilization',tag:"Whole-Body IK",description:"Locks the 6-DOF Spot Arm gripper onto a fixed 3D spatial target reticle while the quadruped torso pitches, rolls, yaws, and squats dynamically underneath.",controlLaw:"Unified 18-DOF Task-Space Inverse Kinematics",peakTorqueNm:95,peakPowerW:480},{id:"trot",name:"Adaptive Rough-Terrain Trot Gait",tag:"Terrain Reflex",description:"Synchronized diagonal leg-pair trot adapting foot swing clearance and ankle-free ground contact reflexes to local terrain slope and friction.",controlLaw:"Perception-Guided Raibert Trot + Slip Reflex",peakTorqueNm:118,peakPowerW:620},{id:"door_valve",name:"Autonomous Valve & Door Manipulation",tag:"Spot 5.1 Workflow",description:"Approaches an industrial manifold/handle, extends the 6-DOF arm to grasp, coordinates torso lean and wrist torque to actuate, and backs clear.",controlLaw:"Force-Compliant Whole-Body Grasp Controller",peakTorqueNm:132,peakPowerW:590},{id:"stair_climb",name:"High-Clearance Stair & Obstacle Climb",tag:"360° Stereo SLAM",description:"Measures riser geometry with onboard stereo depth cameras and executes high-clearance deliberate quadruped stepping over multi-step structures.",controlLaw:"Local Elevation Map Footstep Optimization",peakTorqueNm:156,peakPowerW:790},{id:"uptown_dance",name:'"Uptown Spot" Choreographed Dance',tag:"Choreographer SDK",description:"Rhythmic prances, body-wave undulations, lateral crossovers, and expressive swan-like Spot Arm flourishes.",controlLaw:"Boston Dynamics Choreographer Beat-Synced IK",peakTorqueNm:125,peakPowerW:710},{id:"self_right",name:"Roll-Over Self-Righting Recovery",tag:"Fall Resilience",description:"Starts tipped onto its side after a fall, braces outer knees and Spot Arm against the floor to roll onto its belly, tucks legs, and stands.",controlLaw:"Multi-Contact Self-Righting Recovery Sequence",peakTorqueNm:168,peakPowerW:840}],generationTable:{columns:["Feature / Era","Spot Classic (2015)","SpotMini Proto (2016–2018)","Commercial Spot 1.0–3.x (2020–2023)","Spot 5.1 / 5.2 (2026)"],rows:[["Powertrain","Hydraulic (73 kg / 160 lb)","First all-electric geared BLDC (~25–30 kg)","Custom brushless electric (32.7 kg, IP54)","Hardened electric + extended thermal envelope (up to 55°C)"],["Manipulation","None","5-DOF early electric neck-arm","6-DOF integrated Spot Arm + LED gripper camera","Production door-opening (2,500+ doors) + compliant tool workflows"],["Inspection Payloads","Roof-mounted spinning LiDAR","Stereo test rigs","Spot Cam+, EAP LiDAR, Fluke acoustic imager","Spot Cam 2 (4K PTZ, radiometric thermal, 360°), 20+ gas sensors"],["Autonomy & AI","Teleoperated / basic leader-follow","Early fiducial AutoWalk","Fiducial AutoWalk + Orbit scheduled routes","FieldAI foundation nav + Gemini ER 1.6 + MCP agentic dispatch"],["Inspection Analytics","Raw video feed only","Basic obstacle avoidance","Gauge reading & thermal threshold alerts","Video anomaly AI, visual vibration & partial-discharge checks"]]},improvements:[{subsystem:"Electrification Breakthrough",era:"2015 → 2017 → 2020",title:"From 160-lb Hydraulic Spot Classic to 72-lb Whisper-Quiet All-Electric Spot",before:"2015 Spot Classic required an onboard hydraulic pump, weighed 73 kg, and was too loud and maintenance-heavy for indoor facilities.",after:"12 modular electric rotary actuators sealed to IP54, cutting weight by >55% and operating quietly inside offices, hospitals, and cleanrooms.",detail:"SpotMini (2016) proved Boston Dynamics could port its legendary hydraulic reflex balance onto low-gear-ratio brushless electric motors with high-bandwidth torque sensing. By eliminating hydraulic plumbing and sheathing knees in impact-absorbing elastomer bumpers, Spot achieved thousands-of-hours MTBF—accumulating over 900 km and 90,000+ autonomous inspections in single semiconductor fab sites alone."},{subsystem:"Unified Whole-Body Arm Control",era:"2021 – 2026",title:"Coupling 6 Arm Degrees of Freedom with 12 Leg Actuators",before:"Conventional mobile manipulators must stop driving, lock wheel brakes, and move a stiff arm within a tiny workspace.",after:"18-DOF unified solver automatically leans, squats, and steps the quadruped body to expand arm reach and absorb external forces.",detail:"When a user commands Spot’s gripper forward, Spot’s controller doesn’t stop at shoulder extension—it smoothly pitches the hips forward and widens its stance to maximize leverage. In Spot 5.1 (Jan 2026), Boston Dynamics productized autonomous door-opening workflows validated across 2,500+ doors at 18 beta industrial sites."},{subsystem:"Foundation-Model Navigation",era:"March 2026",title:"FieldAI Partnership for Unstructured, Changing Job Sites",before:"AutoWalk required pre-recorded routes and AprilTag fiducial markers; moving scaffolding or mud piles could stall missions.",after:"Field Foundation Models enable mapless, adaptive exploration and semantic obstacle reasoning in daily-changing construction & mining sites.",detail:"Announced in early 2026, integrating FieldAI’s risk-aware foundation models allowed Spot fleets across North America, Europe, and Asia to navigate dynamic construction sites without brittle pre-taught rails—cutting site documentation and safety inspection time by more than 90%, and enabling autonomous safety patrols in Utah’s Copper One mine."},{subsystem:"Multimodal Perception & Payloads",era:"Jan – Sept 2026",title:"Spot Cam 2 & Google Gemini Robotics ER 1.6 Visual Intelligence",before:"Narrow task-specific CNN detectors trained individually for one dial gauge or valve type at a time.",after:"Spot Cam 2 optical/thermal/360° fusion analyzed by Gemini Robotics ER 1.6 plus visual vibration, partial-discharge, and 20+ gas detection.",detail:"Upgrading Spot’s AIVI-Learning pipeline with Google Gemini Robotics ER 1.6 (April–Sept 2026) allowed Spot to interpret complex multi-second video clips—spotting subtle oil weeps, loose safety guards, belt flutter, and abnormal equipment motion using zero-shot and few-shot natural-language prompts."},{subsystem:"Enterprise Fleet Architecture",era:"Sept 2026 (Spot 5.2)",title:"Asset-Centric Orbit Software & Model Context Protocol (MCP) Agentic Dispatch",before:"Robot-centric route scheduling disconnected from factory MES/CMMS databases and fixed building sensors.",after:"Orbit 5.2 mirrors enterprise asset hierarchies and exposes an open API/MCP layer so AI agents dispatch Spot on live sensor events.",detail:"Rather than walking blind fixed loops every two hours, Spot 5.2 connects directly to plant PLC sensors and fixed security cameras. When a fixed vibration sensor on Pump #14 spikes, an enterprise AI agent dispatches Spot via MCP from its self-charging dock directly to that asset for immediate thermal, acoustic, and gas verification."}]},{id:"stretch",url:"/robots/stretch.html",name:"Stretch (Gen 1 & Gen 2)",shortName:"Stretch",era:"2021 – Nov 2026 (Stretch Gen 2)",category:"Autonomous Warehouse Mobile Manipulator",tagline:"Purpose-Built Logistics Workhorse — Re-Engineered in Nov 2026 with >360° Continuous Joints & 1,000-Case/hr Multipick",cardSummary:"Watch Stretch unload stacked freight trailers with its 7-DOF industrial crane arm, multi-zone SmartGripper vacuum array, omnidirectional pallet-sized base, and November 2026 Gen 2 continuous-rotation joints.",miniSpecs:{dof:"7-DOF Arm + Omni Base",actuation:"Continuous >360° Electric",reach:"Up to 1,000 Cases / Hr"},variants:[{id:"stretch_gen2",label:"Nov 2026 Stretch Gen 2 (Multipick + Floodlights)"},{id:"stretch_gen1",label:"2021–2025 Stretch Gen 1 Commercial"}],defaultEnv:"warehouse",introduction:["Stretch is Boston Dynamics’ first robot engineered from a blank sheet of paper specifically for a single massive commercial bottleneck: autonomously unloading floor-loaded freight trailers and shipping containers in distribution warehouses. Drawing hard lessons from the experimental two-wheeled Handle prototype, engineers traded dynamic two-wheel balancing for a rock-solid, omnidirectional wheeled base occupying the exact footprint of a standard warehouse pallet—allowing Stretch to drive straight down narrow trailer aisles, traverse dock leveler plates, and turn with zero swing radius.","Rising from that counterweighted base is a custom lightweight 7-degree-of-freedom industrial manipulator arm with gigantic reach (handling stacks over 3 meters tall and boxes up to 23 kg / 50 lb) paired with a perception mast and high-flow multi-zone SmartGripper vacuum pad. Unlike fixed industrial robot arms bolted to warehouse floors, Stretch rolls directly into the belly of dark 40-foot shipping containers while feeding a telescoping takeaway conveyor.","On November 3, 2026—backed by more than 100,000 real-world customer operating hours and tens of millions of unloaded boxes across global retailers like DHL, Otto Group, and Gap—Boston Dynamics unveiled Stretch Gen 2. Stretch Gen 2 introduces continuous-rotation joints that sweep past 360 degrees without hitting mechanical hard stops, eliminates 81% of internal cabling (~half a mile of wire!), integrates high-output trailer floodlights and day-one pre-trained package vision, upgrades valve precision for high-speed multipick (up to 1,000 cases/hour), and pairs a two-shift battery with 75-minute fast charging."],specs:[["Latest Generation","Stretch Gen 2 (Unveiled November 3, 2026)"],["Peak Throughput","Up to 1,000 cases/hour (with dynamic Multipick)"],["Max Case Weight","23 kg (50 lb) single or combined multi-box pick"],["Arm Architecture","7-DOF custom lightweight arm w/ >360° continuous-rotation joints"],["Mobile Base","4-corner independent steerable/driven omni-directional pallet footprint"],["End-Effector","Upgraded multi-valve SmartGripper vacuum array + precision force/suction sensing"],["Vision & Lighting","Zero-programming pre-trained 3D vision + integrated dark-trailer floodlights"],["Battery & Charging","2 full work shifts runtime · 75-min fast charge to 90%"]],movements:[{id:"multipick_unload",name:"Gen 2 High-Speed Multipick Unloading",tag:"1,000 Cases/Hr",description:"Pre-trained vision scans the cargo stack, SmartGripper acquires two corrugated cases simultaneously, and swings onto the moving roller conveyor.",controlLaw:"Multi-Box Grasp Planner + Minimum-Jerk Swing Trajectory",peakTorqueNm:380,peakPowerW:1950},{id:"continuous_360",name:">360° Continuous Joint Stress-Free Sweep",tag:"Nov 2026 Gen 2",description:"Demonstrates Gen 2 continuous-rotation shoulder/wrist joints orbiting continuously beyond 360° without braking against cable hard stops.",controlLaw:"Unbounded Slip-Ring Rotary Trajectory Control",peakTorqueNm:260,peakPowerW:1320},{id:"omni_maneuver",name:"Omnidirectional Dock & Aisle Maneuvering",tag:"Zero-Swing Base",description:"Steers all four corner wheel pods independently to crab laterally, pivot in place inside tight trailers, and stabilize the high mast.",controlLaw:"Coordinated Swerve-Drive Kinematics + Tip-Over Guard",peakTorqueNm:290,peakPowerW:1450},{id:"dark_trailer_scan",name:"Dark-Trailer Floodlight Scan & High-Stack Pick",tag:"Zero-Shot Vision",description:"Engages mast floodlights, sweeps optical 3D frustum across top-row disordered cases, and extends telescopic arm 3m high for extraction.",controlLaw:"Pre-Trained 3D Package Segmentation + Collision-Free IK",peakTorqueNm:345,peakPowerW:1720}],generationTable:{columns:["Engineering Area","Handle Warehouse Proto (2019)","Stretch Gen 1 (2021–2025)","Stretch Gen 2 (Nov 2026)"],rows:[["Base Stability","Dynamic 2-wheel active balance + swinging tail","Static-stable 4-pod omni-base w/ internal counterweight","Hardened omni-base w/ recessed E-stop & impact-resistant panels"],["Joint Rotation Limits","Limited swing arc","<360° bounded joints hitting mechanical stops",">360° continuous-rotation joints eliminating hard-stop shock"],["Internal Wiring Harness","Prototype exposed bundles","Complex multi-branch internal harness","81% less internal cabling (~0.5 mile removed) + automotive connectors"],["Throughput & Grasping","~300–360 pallets/cases research rate","Up to ~800 cases/hr single/early multipick","Up to 1,000 cases/hr w/ refined fast-acting vacuum valves & multipick"],["Vision & Illumination","Structured warehouse lighting required","Perception mast + customer calibration","Day-one pre-trained universal package AI + integrated trailer floodlights"],["Power & Charging","Short research packs","1-shift standard battery / optional tether","Full 2-shift battery + 75-minute fast charge to 90%"]]},improvements:[{subsystem:"Architecture Pivot",era:"2019 → 2021",title:"Replacing Handle’s Swinging Tail with a Compact Counterweighted Omni-Base",before:"Handle needed a 1.5-meter swinging rear counterweight tail to balance on two wheels—creating safety clearance hazards inside cramped trailers.",after:"A pallet-sized square omnidirectional base housing batteries and counterweight mass low to the floor, requiring zero swing tail.",detail:"Inside a 2.4-meter-wide shipping container alongside a takeaway conveyor, every centimeter of aisle clearance matters. By placing battery mass inside a swerve-steered square base and building a custom lightweight aluminum/carbon 7-DOF crane arm instead of buying a heavy cast-iron industrial arm, Stretch achieved industrial reach without anchoring bolts."},{subsystem:"Mechanical Longevity",era:"Nov 2026 (Gen 2)",title:"Continuous-Rotation Joints (>360°) Eliminating Mechanical Hard Stops",before:"Gen 1 joints had rotational limits; rapid repetitive unloading occasionally drove joints toward end-of-travel stops, causing high mechanical stress.",after:"Continuous-rotation joints pass smoothly beyond 360° in either direction, choosing the shortest angular path on every box cycle.",detail:"After analyzing 100,000+ hours of warehouse telemetry, Boston Dynamics identified deceleration near rotational limits and long unwind reversals as major contributors to mechanical fatigue and cycle-time loss. Gen 2’s unbounded rotary joints eliminate hard-stop shock loads completely."},{subsystem:"Electrical Reliability",era:"Nov 2026 (Gen 2)",title:"Cutting 81% of Internal Cabling (~Half a Mile) & Automotive-Grade Connectors",before:"Nearly a full kilometer of flexing internal signal/power wires susceptible to chafe, pinch, and intermittent vibration faults.",after:"81% reduction in internal wire length plus vibration-proof automotive-grade connectors engineered for dock-plate impacts.",detail:"Driving across steel dock levelers and cycling high-torque picks thousands of times per shift subjects warehouse robots to punishing shock spectra. Consolidating power/data buses reduced internal cabling by roughly half a mile per robot—dramatically cutting mean-time-to-repair (MTTR) and eliminating the #1 cause of intermittent downtime."},{subsystem:"End-Effector & Throughput",era:"2023 → Nov 2026",title:"High-Precision Vacuum Valves & Dynamic Multipick up to 1,000 Cases/Hour",before:"Single-box acquisition cycles bottlenecked throughput when trailers contained thousands of small shoeboxes or lightweight cartons.",after:"Upgraded zoned vacuum valves, sharper differential pressure sensing, and intelligent Multipick grabbing 2+ adjacent boxes simultaneously.",detail:"Stretch Gen 2’s redesigned SmartGripper actuates individual suction zones faster and senses seal integrity with surgical precision—allowing the motion planner to sweep two side-by-side boxes in a single fluid trajectory and recover mid-air if corrugated cardboard delaminates or shifts."},{subsystem:"Perception & Dock Operations",era:"Nov 2026 (Gen 2)",title:"Zero-Programming Pre-Trained Vision, Onboard Floodlights & 75-Min Fast Charge",before:"Dimly lit unpowered trailers degraded camera contrast, and new SKU packaging styles sometimes needed site tuning.",after:"Integrated high-lumen trailer lighting, day-one pre-trained vision across taped/shrink-wrapped/printed boxes, recessed E-stops, and 2-shift fast-charge batteries.",detail:"Gen 2 rolls straight into pitch-black trailers and recognizes virtually any polybag-free parcel geometry out of the box. Recessed emergency stops and ruggedized exterior panels prevent falling boxes from triggering false E-stops, while 75-minute 90% fast charging keeps docks running round-the-clock."}]},{id:"handle",url:"/robots/handle.html",name:"Handle (Hybrid Wheeled-Legged)",shortName:"Handle",era:"2017 – 2019 (R&D Bridge to Stretch)",category:"Dynamic Wheeled-Legged Counterbalanced Robot",tagline:"Combining the Flat-Ground Efficiency of Wheels with the Explosive 4-Foot Jumping & Terrain Agility of Legs",cardSummary:"Simulate Handle’s dynamic inverted-pendulum two-wheel balance, 4-foot vertical obstacle jumps, banked figure-8 carving, and 2019 swinging-tail counterbalanced crate manipulation.",miniSpecs:{dof:"10 Actuated DOF",actuation:"Electric + Hydraulic",reach:"1.2 m (4 ft) Vertical Jump"},variants:[{id:"handle_2019",label:"2019 Counterbalanced Warehouse Raptor"},{id:"handle_2017",label:"2017 Wheeled-Humanoid Research Prototype"}],defaultEnv:"lab",introduction:["Unveiled in February 2017, Handle answered a provocative engineering question from founder Marc Raibert: what happens if you attach Boston Dynamics’ dynamic legged balance controllers to motorized wheels? Standing 6.5 feet (1.98 m) tall and travelling at 9 mph (14.5 km/h), Handle used just 10 actuated joints—far fewer than a quadruped or humanoid—by combining electric drive wheels for efficient flat-floor rolling with high-power hydraulic leg and hip actuators for rough terrain, stairs, and explosive vertical leaps.","Unlike static wheeled carts that tip over on slopes or curbs, Handle operated continuously as a non-linear 3D inverted pendulum: pitching forward to accelerate, banking sharply inward like a downhill slalom skier around corners, spinning 360 degrees in deep squats, and compressing its articulated legs to vault 4 feet (1.2 meters) straight over barriers while rolling at speed.",'In March 2019, Boston Dynamics radically reimagined Handle for warehouse pallet building—transforming its upper body from dual humanoid arms into an avian "ostrich/velociraptor" silhouette featuring a single overhead vacuum-cup neck counterbalanced by a massive swinging rear battery tail. While customers loved its physics defying elegance, warehouse trials revealed that static-base omnidirectional footprints were safer and denser inside trailers—making Handle the direct architectural stepping stone to the commercial Stretch robot.'],specs:[["Operational Era","2017 Research Reveal → 2019 Warehouse Reimagining"],["Standing Height","1.98 m (6 ft 6 in)"],["Top Rolling Speed","14.5 km/h (9 mph)"],["Vertical Jump Clearance","1.22 m (4.0 ft) explosive wheeled leap"],["Actuated Joints","10 DOF (hybrid electric wheel drive + hydraulic leg/spine links)"],["Payload Capacity","~15 kg (33 lb) vacuum-grasped warehouse totes/boxes (2019)"],["Range per Charge","~24 km (15 miles) — 4x to 5x more efficient than pure legged gait"],["Historical Legacy","Validated warehouse vision & vacuum grasping that birthed Stretch"]],movements:[{id:"hurdle_jump",name:"4-Foot Explosive Wheeled Hurdle Jump",tag:"Hybrid Hydraulic",description:"Cruises on two wheels, compresses multi-link hydraulic knees deeply, launches 1.2m vertically over a barrier, and cushions landing on spinning wheels.",controlLaw:"Wheeled Inverted-Pendulum + Ballistic Flight Pitch Control",peakTorqueNm:460,peakPowerW:4100},{id:"tail_counterbalance",name:"Swinging-Tail Counterbalanced Crate Pick",tag:"2019 Raptor Config",description:"Extends overhead vacuum neck forward to lift a heavy 15 kg crate while dynamically swinging the rear counterweight tail backward to zero net pitch torque.",controlLaw:"Coupled Centroidal Zero-Moment Wheel Balance",peakTorqueNm:310,peakPowerW:1680},{id:"banked_carve",name:"High-Speed Banked Figure-8 Carve",tag:"Centripetal Lean",description:"Carves S-curves at high speed, leaning inward up to 22° and asymmetrically telescoping left/right leg struts like a slalom skier.",controlLaw:"Differential Leg-Length Roll Banking + LQR Wheel Balance",peakTorqueNm:245,peakPowerW:1520},{id:"hurricane_squat",name:"360° Hurricane Squat Spin",tag:"Decoupled CoM",description:"Spins rapidly in place via differential wheel torque while pumping center-of-mass height smoothly between full crouch and full extension.",controlLaw:"Decoupled Vertical-Compliance Yaw Controller",peakTorqueNm:275,peakPowerW:1890}],generationTable:{columns:["Aspect","Pure Humanoid Atlas (2016)","Handle Gen 1 (2017)","Handle Reimagined (2019)","Commercial Stretch (2021–2026)"],rows:[["Locomotion Mode","Bipedal footsteps only","2 motorized wheels + 2 hydraulic legs","2 motorized wheels + articulated knees","4-pod static-stable omni-wheels"],["Upper Morphology","Dual humanoid arms","Dual forward lifting arms","Single overhead suction neck + swinging tail","7-DOF industrial crane arm + perception mast"],["Energy Cost of Transport","High (continuous foot strike losses)","Low on flat ground (15-mile range)","Low rolling energy + regenerative braking","Multi-shift continuous warehouse duty"],["Counterbalance Method","Ankle torque + stepping","Fore-aft wheel acceleration","Active 1-DOF heavy rear tail pendulum","Low-CG weighted square base"]]},improvements:[{subsystem:"Energetic Efficiency",era:"2017 Innovation",title:"10-DOF Wheeled-Legged Hybrid Slashing Cost-of-Transport by ~75%",before:"Pure legged robots expend substantial energy accelerating, decelerating, and cushioning limbs on flat concrete floors.",after:"Electric hub/drive wheels roll nearly losslessly on smooth concrete while active hydraulic legs absorb curbs, ramps, stairs, and jumps.",detail:"By combining wheels and legs rather than treating them as rival paradigms, Handle reduced total actuator count to just 10 DOF—lowering hardware cost while achieving a 15-mile battery range and 9 mph cruising speed."},{subsystem:"Asymmetric Leg Suspension",era:"2017 Control",title:"Independent Left/Right Leg Length Control on Cambered Slopes & Stairs",before:"Segway-style two-wheelers tip sideways or jar violently if one wheel hits a curb or uneven snowbank.",after:"Independent hydraulic knee actuators telescope one leg short and the other long in milliseconds, keeping the pelvis dead level.",detail:"Handle demonstrated rolling down flights of stairs and riding with one wheel up on a tilted ramp and the other on flat pavement, proving active leg suspension dramatically expands wheeled terrain envelopes."},{subsystem:"Dynamic Counterweight Mechanics",era:"2017 → 2019",title:"Reimagining Dual Arms into the Avian Swinging-Tail Warehouse Architecture",before:"2017 Handle held boxes close to its chest between two short arms, limiting pallet stacking depth to shallow reaches.",after:"2019 Handle mounted a deep-reaching overhead vacuum arm offset by an actuated rear battery tail swinging dynamically behind the wheels.",detail:"To reach 1.2 meters deep onto standard pallets without falling forward off its two wheels, engineers turned Handle’s heavy battery into a live moving counterweight—swinging aft in exact proportion to payload weight and arm extension."},{subsystem:"Commercial Lessons Learned",era:"2019 → 2021",title:"How Handle’s Warehouse Trials Directly Engineered Stretch",before:"Swinging tail swept wide arcs behind the robot, and power-loss on a 2-wheel inverted pendulum required mechanical catch stands.",after:'Vision algorithms ("Pick") and zoned vacuum grippers transferred directly onto Stretch’s intrinsically stable 4-wheel omni-base.',detail:"Boston Dynamics never viewed retiring Handle as a setback: Handle’s 2019 warehouse pilots validated 2D/3D corrugated box vision, force-controlled palletizing, and pneumatic suction arrays—all of which shipped commercially on Stretch two years later."}]},{id:"bigdog",url:"/robots/bigdog.html",name:"BigDog & LS3 (AlphaDog)",shortName:"BigDog & LS3",era:"2005 – 2015 (DARPA Rough-Terrain Pioneers)",category:"Heavy-Payload Hydraulic Quadrupeds",tagline:"The Legendary DARPA Pack Mules That Proved Animal-Grade Reflexive Balance on Mud, Rubble & Sheet Ice",cardSummary:"Experience the historic 2005 BigDog and 2012 LS3 (AlphaDog) carrying 340–400 lb loads over boulders, surviving violent lateral kicks on low-friction ice, bounding at 7 mph, and rolling upright from inverted falls.",miniSpecs:{dof:"16 Hydraulic DOF",actuation:"Engine-Driven Hydraulic",reach:"340–400 lb Payload"},variants:[{id:"bigdog_2005",label:"2005 BigDog (Original DARPA Reflex Quadruped)"},{id:"ls3_2012",label:"2012 LS3 / AlphaDog (Quietened 400-lb Pack Mule)"}],defaultEnv:"arctic",introduction:["When Boston Dynamics released footage of BigDog in 2005–2008—trotting up muddy 35-degree forest trails, scrambling across loose brick rubble, and scrambling wildly yet staying upright after being kicked hard on a frozen parking lot—millions of viewers experienced an uncanny valley moment: a headless four-legged machine moving with the unmistakable reflexive urgency of a living animal. Funded by DARPA alongside NASA JPL and Harvard’s Concord Field Station, BigDog proved that legged machines could go where wheels and tank tracks stalled.","Inside BigDog’s steel truss frame roared a water-cooled 15-horsepower two-stroke go-kart engine spinning an ultra-high-pressure hydraulic pump feeding 16 low-friction hydraulic leg actuators (four per leg: hip abduction/adduction, hip flexion/extension, knee, and pneumatic/spring compliant lower shin). Fifty onboard sensors measured joint position, hydraulic cylinder force, inertial attitude, engine RPM, and oil pressure at 500 Hz so a central QNX real-time computer could adjust foot placement mid-slip.",'In 2012, Boston Dynamics unveiled its major military evolution: the Legged Squad Support System (LS3, nicknamed "AlphaDog"). LS3 boosted payload capacity to 400 lb over a 20-mile mission without refueling, enclosed its torso in a cylindrical composite shell so the robot could roll right-side-up after flipping down embankments, added stereo/LiDAR autonomous human-leader following, and slashed acoustic signature tenfold (~10 dB reduction) compared to BigDog’s lawnmower-like shriek.'],specs:[["Lineage Span","BigDog (2005–2010) → LS3 / AlphaDog (2012–2015)"],["Dimensions & Mass","BigDog: 0.91 m L · 109 kg | LS3: 1.7 m tall · ~590 kg gross"],["Payload Capacity","BigDog: 154 kg (340 lb) | LS3: 181 kg (400 lb) + 20-mi fuel"],["Leg Architecture","16 hydraulic servo actuators (4 DOF/leg) + compliant shin springs"],["Powerplant","BigDog: 15-hp 2-stroke gas engine | LS3: Muffled 4-stroke engine"],["Top Speed","BigDog: 6.4 km/h (4 mph) | LS3: 11.3 km/h (7 mph) jogging"],["Navigation Sensors","Gyro/IMU + Joint load cells + Stereo Vision + Spinning LiDAR"],["Signature Breakthrough","Zero-vision reflexive cross-step balance recovery on sheet ice"]],movements:[{id:"ice_slip_recovery",name:"Iconic Ice-Slip & Lateral Kick Recovery",tag:"2008 Viral Milestone",description:"Mid-trot, a strong lateral disturbance kicks the chassis sideways; hooves skitter across low-friction ice before rapid cross-stepping arrests roll momentum.",controlLaw:"500 Hz Capture-Point Reflex Foot-Placement Controller",peakTorqueNm:520,peakPowerW:6800},{id:"heavy_march",name:"340–400 lb Heavy-Pack Rough Terrain March",tag:"Compliant Shins",description:"Powerful deliberate four-beat walk/trot over uneven rock heights with visible axial spring compression absorbing impact loads.",controlLaw:"Force-Feedback Virtual Model Ground Adaptation",peakTorqueNm:480,peakPowerW:5100},{id:"ls3_bound",name:"7 mph Squad-Support Jogging Bound",tag:"LS3 Upgrade",description:"Energetic bounding trot developed on LS3 to keep pace with sprinting infantry squads across open fields.",controlLaw:"Elastic-Return Quadruped Trotting/Bounding Gait",peakTorqueNm:560,peakPowerW:7900},{id:"ls3_roll_recover",name:"Cylindrical Hull Roll-Over Self-Righting",tag:"LS3 Armor Shell",description:"Uses LS3’s rounded upper barrel fairing and wide hip abduction range to roll from a 135° ditch capsize cleanly back onto all four hooves.",controlLaw:"High-Torque Hip Abduction Roll Sequence",peakTorqueNm:610,peakPowerW:6200}],generationTable:{columns:["Capability","BigDog (2005–2008)","LS3 / AlphaDog (2012–2015)","Modern Descendant: Spot (2020–2026)"],rows:[["Prime Power","Loud 2-stroke single-cylinder go-kart engine","Acoustically muffled 4-stroke engine (~10x quieter)","All-electric Li-ion battery pack (whisper quiet)"],["Payload & Range","340 lb · short field test endurance","400 lb · 20 miles in 24 hours without refueling","30 lb industrial sensor/arm payload · continuous dock recharge"],["Capsize Recovery","Could become stranded if flipped completely inverted","Rounded barrel shell rolls upright autonomously","Full 180° leg/arm self-righting in <8 seconds"],["Perception","Primarily blind proprioceptive leg reflexes + early stereo","Rotating LiDAR + stereo vision autonomous leader-following","360° RGB-D + Spot Cam 2 + Gemini / FieldAI foundation models"]]},improvements:[{subsystem:"Proprioceptive Reflex Control",era:"2005 – 2008",title:"Blind Tactile Ground Adaptation & Capture-Point Cross-Stepping",before:"Earlier legged robots required meticulous laser scans of every rock and froze if a foot slipped unexpectedly.",after:"Hydraulic cylinder load cells sensed early or late ground contact instantly, adapting leg compliance without needing camera sight.",detail:'Even with its optical cameras covered, BigDog could climb rubble piles and survive violent lateral kicks on ice. Its controller continuously estimated lateral velocity and center-of-pressure, thrusting swing legs across the body midline to place hooves directly at the predicted "capture point" where kinetic energy converts cleanly back into upright posture.'},{subsystem:"Acoustic & Thermal Engineering",era:"2005 → 2012 (LS3)",title:'10x Noise Reduction from BigDog’s "Angry Swarm of Bees" to Muffled LS3',before:"BigDog’s high-RPM 2-stroke engine emitted >90 dB high-pitched exhaust noise, giving away squad positions from kilometers away.",after:"LS3 redesigned the powerpack around a muffled, lower-RPM 4-stroke engine and insulated composite cowling (~10 dB / 10x acoustic power reduction).",detail:"U.S. Marine Corps field trials in Hawaii and Fort Devens highlighted acoustic stealth as critical. While LS3 cut noise tenfold, Marines ultimately wanted near-silent reconnaissance—prompting Boston Dynamics to build the electric Spot prototype and pivot permanently toward electric actuation."},{subsystem:"Mechanical Survivability",era:"2012 (LS3)",title:"Cylindrical Roll-Over Hull & All-Weather Sealing",before:"BigDog’s exposed valves, heat exchangers, and flat top frame risked damage or stranding if tumbled down a steep ravine.",after:"LS3’s armored barrel-shaped torso protected internal hydraulics from mud/rain and acted as a smooth rocker for autonomous self-righting.",detail:"When tumbled onto its back in ditches during field exercises, LS3 tucked its inner legs and pushed off with its outer hips to roll across its rounded upper shell right back onto all fours—carrying 400 lb of squad water, batteries, and gear."},{subsystem:"Autonomous Outdoor Perception",era:"2010 – 2014",title:'Stereo + LiDAR "Follow-the-Leader" & Voice Command Integration',before:"Manual joystick steering by a nearby operator.",after:"Real-time 3D LiDAR/stereo human tracking, tree/boulder avoidance, and GPS waypoint pathfinding.",detail:'LS3 locked visually onto an infantry squad leader’s torso geometry, autonomously picking walkable paths around trees and boulders at speeds up to 7 mph while responding to spoken tactical commands ("Engine On", "Follow Tight", "Wait").'}]},{id:"cheetah",url:"/robots/cheetah.html",name:"Cheetah & WildCat",shortName:"Cheetah & WildCat",era:"2012 – 2013 (DARPA Maximum Mobility)",category:"High-Speed Flexible-Spine Galloping Quadrupeds",tagline:"28.3 mph Land-Speed World Record — Outrunning Usain Bolt via Articulated Spine Flexion & Outdoor Bounding",cardSummary:"Simulate Cheetah’s world-record 28.3 mph rotary gallop—complete with concave/convex articulated spine flexing and full aerial flight phases—plus WildCat’s untethered 20 mph banked outdoor cornering and skid-stops.",miniSpecs:{dof:"Articulated Spine + 12 Leg DOF",actuation:"High-Flow Hydraulics",reach:"28.3 mph (45.5 km/h) Record"},variants:[{id:"cheetah_2012",label:"2012 Cheetah (28.3 mph World-Record Lab Rig)"},{id:"wildcat_2013",label:"2013 WildCat (Untethered Outdoor Galloper)"}],defaultEnv:"rocky",introduction:["Funded by DARPA’s Maximum Mobility and Manipulation (M3) program, Cheetah set an astonishing milestone in September 2012 that still stands in robotics lore: accelerating across a high-speed laboratory treadmill to 28.3 miles per hour (45.5 km/h)—shattering MIT’s 1989 13.1 mph planar biped record and surpassing Usain Bolt’s fastest 100-meter human peak speed of 27.8 mph.","How did Boston Dynamics more than double legged running speeds? Instead of treating the robot’s torso as a rigid brick, engineers studied biological cheetahs and greyhounds to build an actuated, multi-segment flexible spine. On every gallop cycle, Cheetah flexed its back concavely so its hind feet swung far ahead of its front hooves, then snapped its spine into full extension simultaneously with hip propulsion—dramatically lengthening effective stride and launching all four feet high off the ground in extended ballistic flight phases.","Just thirteen months later in October 2013, Boston Dynamics severed the laboratory hydraulic tether and rolled out WildCat into an asphalt parking lot. Carrying an onboard methanol-fueled two-stroke engine, hydraulic accumulator, fuel tank, and roll-cage armor, WildCat thundered untethered at 19–20 mph (32 km/h) using both rotary galloping and pronking/bounding gaits—leaning aggressively into tight banked turns like a motorcycle and executing rapid four-foot skid-stops."],specs:[["World Speed Record","Cheetah: 28.3 mph (45.5 km/h / 12.67 m/s) — Sept 2012"],["Untethered Outdoor Speed","WildCat: ~20 mph (32 km/h) free-running — Oct 2013"],["WildCat Mass","~154 kg (340 lb) self-contained w/ engine & hydraulic pack"],["Key Morphological Secret","Actuated articulated sagittal spine synced to hindlimb phase"],["Leg Design","Ultra-low-inertia composite shins + tensile bio-tendon struts"],["High-Speed Gaits","Rotary/Transverse Gallop, Synchronized Bounding, Banked Carving"],["Ground Contact Time","<85 milliseconds per footfall at peak 28.3 mph sprint"],["Power Source","Offboard hydraulic tether (Cheetah) → Onboard methanol engine (WildCat)"]],movements:[{id:"spine_gallop",name:"28.3 mph Articulated-Spine Rotary Gallop",tag:"World Speed Record",description:"Full biological gallop: spine arches deeply as hindlimbs cross ahead of forelimbs, then extends explosively into prolonged 4-foot aerial suspension.",controlLaw:"Phase-Locked Spine-Hip Impulse + Millisecond Swing Placement",peakTorqueNm:590,peakPowerW:9200},{id:"bounding",name:"Synchronized Elastic Bounding / Pronking",tag:"Spring Tendons",description:"Forelegs strike and launch together followed by paired hindlegs, storing and returning kinetic energy across composite lower-leg flexures.",controlLaw:"Dual-SLIP Pitch-Oscillation Bounding Controller",peakTorqueNm:510,peakPowerW:7600},{id:"banked_turn",name:"WildCat 25° Banked High-Speed Turn",tag:"Untethered Outdoor",description:"Carves an outdoor circle at high speed while banking its roll angle inward to align resultant ground-reaction vectors right through the CoM.",controlLaw:"Centripetal Roll-Angle Alignment + Differential Stride Length",peakTorqueNm:475,peakPowerW:6900},{id:"skid_stop",name:"Emergency Pitch-Back Skid-Stop",tag:"Kinetic Dissipation",description:"Rapidly pitches torso aft, drops center of gravity, and plants forelimbs ahead of CoM to arrest 20 mph forward momentum without somersaulting.",controlLaw:"High-Deceleration Pitch-Arrest Braking Controller",peakTorqueNm:545,peakPowerW:5400}],generationTable:{columns:["Engineering Dimension","Rigid-Back Quadrupeds (BigDog)","Cheetah Lab Rig (2012)","WildCat Untethered (2013)"],rows:[["Torso Spine","Rigid steel rectangular frame","Actuated flexible back flexing in pitch","Reinforced outdoor semi-compliant spine + roll cage"],["Distal Leg Inertia","Heavy steel actuators down the leg","Proximal actuators + ultra-light composite shins & tendons","Ruggedized carbon/elastomer outdoor feet + high-flow valves"],["Top Speed","4 mph (6.4 km/h)","28.3 mph (45.5 km/h) tethered w/ pitch boom","20 mph (32 km/h) completely untethered in 3D"],["Steering & Braking","Slow yaw trotting","1D straight-line treadmill sprint","25° banked high-speed turns & rapid skid-stops"]]},improvements:[{subsystem:"Biomechanical Morphology",era:"2012 Breakthrough",title:"Phase-Synchronized Articulated Spine Flexion & Extension",before:"Rigid robot torsos restricted hip stride sweep and wasted horizontal momentum on every foot strike.",after:"Dynamic spine flexion added ~25–30% effective stride length and raised foot swing velocity relative to ground.",detail:"At 28.3 mph, each foot touches the ground for less than 85 milliseconds. By curling its back during gathered flight and snapping it straight during hindleg extension, Cheetah matched the ground-backward foot speed to forward running speed—minimizing braking impact spikes at touchdown."},{subsystem:"Distal Mass Minimization",era:"2012 Mechanical Design",title:"Bio-Inspired Tensile Tendons & Ultra-Low-Inertia Limbs",before:"Swinging heavy lower legs forward at 4+ cycles per second creates massive inertial reaction torques that pitch the body wildly.",after:"Concentrating heavy hydraulic cylinders up inside the hips while driving featherweight composite shins with tension bands.",detail:"Just like thoroughbred horses and biological cheetahs have slender ankles driven by upper-thigh muscle bellies and long Achilles tendons, Cheetah placed mass near the torso center of rotation and used passive tensile straps along the leg bone to resist bending stresses with minimal weight."},{subsystem:"Untethered Power Packaging",era:"2012 → 2013 (WildCat)",title:"Severing the Lab Hose: Self-Contained Power, Cooling & 3D Roll Control",before:"Cheetah relied on a massive offboard building hydraulic pump and a lightweight lateral boom preventing side-to-side drift.",after:"WildCat packed a methanol-fueled engine, hydraulic accumulators, cooling radiators, and full 6-DOF roll/yaw stabilization onboard.",detail:"Going from a constrained 2D sagittal treadmill to full 3D outdoor asphalt required stabilizing roll and yaw at 20 mph while carrying 340 lb of self-contained powerplant—plus crash cages capable of surviving high-speed tumbles unscathed."},{subsystem:"High-Speed Maneuverability",era:"2013 (WildCat)",title:"Centripetal Banked Cornering & Anti-Pitch-Over Skid Braking",before:"Turning upright at 20 mph generates lateral tipping moments that flip high-CG quadrupeds outward.",after:"WildCat computed turn radius vs. speed in real time, banking its torso 20–25° inward so ground reaction forces remained purely axial along the legs.",detail:"Those high-speed centripetal banking equations pioneered on WildCat directly informed dynamic turning controllers later deployed on Handle, Spot, and sprinting Atlas."}]},{id:"sandflea-rhex",url:"/robots/sandflea-rhex.html",name:"SandFlea & RHex (Micro-Pioneers)",shortName:"SandFlea & RHex",era:"2002 – 2012 (Extreme Micro-Mobility Scouts)",category:"Ballistic Jumping & Compliant Hexapod Scouts",tagline:"Small Footprint, Giant Reach — 30-Foot CO₂ Rooftop Launches & 6-Legged Compliant C-Leg Terrain Scrambling",cardSummary:"Switch between the 11-lb SandFlea firing its CO₂ piston to vault 30 feet onto elevated rooftops with mid-air wheel-gyro stabilization, and the 2002 RHex hexapod conquering boulders and upside-down flips with rotating compliant C-legs.",miniSpecs:{dof:"4WD+Piston / 6 C-Legs",actuation:"CO₂ Ballistic / Buehler Clock",reach:"30 ft (9 m) Vertical Leap"},variants:[{id:"sandflea_2012",label:"2012 SandFlea (30-ft CO₂ Ballistic Jumper)"},{id:"rhex_2002",label:"2002 RHex (Compliant C-Leg Hexapod)"}],defaultEnv:"construction",introduction:["Not every Boston Dynamics breakthrough required a 300-pound humanoid or go-kart engine. Across the 2000s and early 2010s, Boston Dynamics created a legendary family of backpack-portable micro-robots—led by RHex (2002), RiSE (2005), LittleDog (2006), and SandFlea (2012)—engineered to let dismounted scouts and rescue teams overcome obstacles dozens of times taller than the robots themselves.","Weighing just 11 pounds (5 kg), SandFlea drove swiftly like a ruggedized four-wheel-drive reconnaissance rover on flat streets—until encountering compound walls, balconies, or two-story buildings. Stopping on a dime, SandFlea extended a rear tilt piston to angle its chassis upward at 70 degrees and fired an onboard compressed CO₂ cylinder piston, launching the entire robot up to 30 feet (9 meters) into the air! Even more remarkably, SandFlea spun its four beveled wheels dynamically during ballistic flight to act as inertial reaction wheels—keeping its onboard camera horizon-level in mid-air and guaranteeing a flat, cushioned four-wheel touchdown (up to 25 jumps per CO₂ cartridge).",'Beside it in this dual-pioneer simulator is RHex, the rugged sealed hexapod co-developed out of DARPA’s biomimetic cockroach locomotion program. Instead of complex multi-joint legs requiring dozens of fragile ankle sensors, RHex used six single-motor semicircular fiberglass "C-legs" driven by a dual-speed "Buehler clock" alternating tripod gait—scrambling effortlessly through boulder fields, stairs, mud, swampland, and even driving seamlessly upside down after a 180-degree flip.'],specs:[["SandFlea Mass & Jump","5.0 kg (11 lb) · Jumps 1–9 m (up to 30 ft) high, 25x per CO₂ charge"],["SandFlea Flight Control","Active wheel-momentum gyroscopic pitch & roll attitude stabilization"],["RHex Mass & Actuators","12.5 kg (~28 lb) · Only 6 brushless DC hip motors (1 DOF per leg)"],["RHex Leg Compliance","Tuned curved fiberglass C-springs providing passive mechanical preflex"],["RHex Symmetric Hull","IP67 waterproof sealed body · Fully invertible upside-down operation"],["Related Micro-Lineage","RiSE (2005 micro-spine vertical wall climber) & LittleDog (2006 ML testbed)"],["Primary Sponsor","DARPA / U.S. Army Rapid Equipping Force (REF)"],["Enduring Principle","Morphological intelligence: letting passive compliance & physics do the work"]],movements:[{id:"rooftop_launch",name:"SandFlea: 30-Foot CO₂ Ballistic Rooftop Launch",tag:"CO₂ Pneumatic + Gyro",description:"SandFlea rears back on its launch foot, fires its pneumatic piston to arc high onto an elevated two-story platform, stabilizes pitch mid-air, pauses to scan, and leaps back down.",controlLaw:"Ballistic Launch Aiming + Reaction-Wheel Mid-Air Attitude Control",peakTorqueNm:85,peakPowerW:3200},{id:"sandflea_recon",name:"SandFlea: High-Speed 4WD Skid-Steer Recon",tag:"Differential 4WD",description:"Zips across terrain on oversized beveled shock-absorbing wheels with rapid zero-radius skid-steer reconnaissance spins.",controlLaw:"High-Rate Skid-Steer Velocity & IMU Yaw Control",peakTorqueNm:42,peakPowerW:310},{id:"rhex_tripod",name:"RHex: Buehler-Clock Alternating Tripod Scramble",tag:"6 Compliant C-Legs",description:"Switches to RHex: L1+R2+L3 and R1+L2+R3 semicircular fiberglass legs alternate between slow ground-propulsion sweep and rapid aerial return.",controlLaw:"Dual-Frequency Phase-Locked Buehler Clock Oscillator",peakTorqueNm:68,peakPowerW:420},{id:"rhex_invert",name:"RHex: 180° Inverted Flip & Bidirectional Drive",tag:"Symmetric Chassis",description:"Demonstrates RHex’s symmetric hull whipping its C-legs to flip 180° upside down and immediately reversing clock phase to keep running.",controlLaw:"IMU Orientation Detection + Instant Phase-Inversion Gait",peakTorqueNm:92,peakPowerW:540}],generationTable:{columns:["Design Trait","Precision Explorer / Early Hoppers","RHex (2002–2010)","RiSE & LittleDog (2005–2008)","SandFlea (2012)"],rows:[["Obstacle Strategy","Single-mode blind hopping","Compliant 6-leg climbing over 3x leg-height rocks","Vertical wall micro-claws (RiSE) / ML foot placement (LittleDog)","Fast 4WD rolling + 30-ft ballistic jump over entire buildings"],["Flight / Terrain Control","Uncontrolled tumble after hop",'Passive fiberglass spring "preflex" stability',"High-precision mocap / force-sensing toes","Active gyro wheel-spin keeps camera & landing flat in flight"],["Mechanical Complexity","Minimal","Ultra-rugged: only 6 sealed rotary shafts","High (18+ micro-actuators on RiSE)","Compact dual-mode electric drive + CO₂ launch cylinder"]]},improvements:[{subsystem:"Mid-Air Attitude Stabilization",era:"2009 → 2012 (SandFlea)",title:"From Uncontrolled Tumbling Hoppers to Precision Gyro-Stabilized Rooftop Landings",before:"Boston Dynamics’ earlier Precision Urban Hopper (2009) tumbled end-over-end through the air and crashed blindly onto its cushioned wheels.",after:"SandFlea actively accelerated and braked its four oversized wheels mid-flight as reaction wheels, holding pitch within ±2° for crisp 4-wheel landings.",detail:"Tumbling prevented scouts from seeing over walls mid-jump and risked bouncing off narrow rooftop ledges. By conserving angular momentum between wheel spin and body pitch, SandFlea delivered crystal-clear stabilized video throughout its 30-foot arc and landed softly on windowsills and compound roofs."},{subsystem:"Morphological Computation",era:"2002 – 2010 (RHex)",title:'Replacing Fragile Multi-Joint Ankles with Tuned Fiberglass C-Leg "Preflexes"',before:"Multi-jointed insect hexapods needed 18 to 24 fragile motors and jammed easily in mud, vines, or surf.",after:"Six sealed single-shaft rotary hips spinning tuned S-glass/epoxy curved springs with zero exposed knee joints.",detail:'Inspired by cockroach biomechanics discovered by Robert Full and Martin Buehler, RHex proved passive mechanical viscoelasticity responds to sudden rock impacts faster than any digital microprocessor loop ("preflexes")—allowing RHex to swim, trudge through marshes, and climb full staircases.'},{subsystem:"Dual-Speed Buehler Clock",era:"2002 Control Law",title:"Piecewise-Linear Slow-Stance / Fast-Swing Phase Synchronization",before:"Constant-speed spinning paddles bounce violently vertical and slip on stairs.",after:"Modulating motor angular velocity within every 360° revolution: slow high-torque ground contact phase + rapid aerial recirculation.",detail:"By tuning just four scalar clock parameters (duty factor, stance duration, phase offset, and sweep angle), RHex transitioned seamlessly between alternating tripod running, pronking leaps, stair climbing, and amphibious paddling."},{subsystem:"Scientific Legacy",era:"2006 → 2026",title:"How LittleDog & RiSE Seeded Modern Reinforcement Learning & Force Sensing",before:"Academic labs lacked standardized rugged hardware to test machine-learning locomotion policies.",after:"DARPA distributed Boston Dynamics’ LittleDog across top AI universities (Stanford, MIT, USC, CMU, Penn), launching learned terrain traversal.",detail:"Many of the world’s leading robotics researchers who pioneered modern learned footstep planning, tactile compliance, and Sim-to-Real RL cut their teeth directly on Boston Dynamics’ LittleDog and RHex platforms."}]}],bm=Object.fromEntries(ss.map(i=>[i.id,i]));function wm(i="home",e="./"){const t=[{id:"home",label:"Overview & Innovations",href:`${e}index.html`},...ss.map(n=>({id:n.id,label:n.shortName,href:`${e}robots/${n.id}.html`}))];return`
    <header class="site-header">
      <div class="header-inner">
        <a href="${e}index.html" class="brand-link" title="Boston Dynamics 3D Simulation & Innovations Portal">
          <img
            src="${e}images/bd-logo.png"
            alt="Boston Dynamics Logo"
            class="bd-official-logo"
          />
          <span class="brand-divider"></span>
          <span class="brand-sub-badge">3D Sim &amp; Archive</span>
        </a>
        <nav class="main-nav" aria-label="Robot Simulation Pages">
          ${t.map(n=>`
            <a href="${n.href}" class="nav-item ${n.id===i?"active":""}">
              <span class="nav-dot"></span>
              ${n.label}
            </a>
          `).join("")}
        </nav>
      </div>
    </header>
  `}function Em(i="./"){return`
    <footer class="site-footer">
      <div class="container footer-inner">
        <div>
          <a href="${i}index.html" class="footer-logo-pill">
            <img src="${i}images/bd-logo.png" alt="Boston Dynamics Logo" />
          </a>
          <div style="font-weight: 700; color: #ffffff;">
            Interactive 3D Robotics Simulation &amp; 1992–2026 Engineering Archive
          </div>
          <div style="margin-top: 4px; font-size: 12.5px; color: #93b4d1;">
            Covering 34 years of dynamic balance, hydraulic &amp; direct-drive electric actuation, and Physical AI.
          </div>
          <div style="margin-top: 6px; font-size: 11.5px; color: #7fa2c2;">
            Independent educational 3D simulation &amp; archival project. Boston Dynamics® name, logo, and press photography are property of Boston Dynamics, Inc.
          </div>
        </div>
        <div class="footer-links">
          <a href="${i}index.html">Main Portal</a>
          <a href="${i}index.html#innovations">1992–2026 Timeline</a>
          ${ss.map(e=>`<a href="${i}robots/${e.id}.html">${e.shortName} 3D</a>`).join("")}
        </div>
      </div>
    </footer>

    <!-- Full-Resolution Archival Photo Lightbox -->
    <div class="lightbox-backdrop" id="photo-lightbox" role="dialog" aria-modal="true">
      <div class="lightbox-dialog">
        <div class="lightbox-img-wrap">
          <img id="lightbox-img" src="" alt="" />
        </div>
        <div class="lightbox-meta">
          <div>
            <div id="lightbox-title" style="font-weight: 800; color: var(--bd-navy); font-size: 16px;"></div>
            <div id="lightbox-caption" style="font-size: 13.5px; color: var(--text-secondary); margin-top: 2px;"></div>
          </div>
          <button class="lightbox-close" id="lightbox-close-btn">Close ✕</button>
        </div>
      </div>
    </div>
  `}function Tm(){const i=document.getElementById("photo-lightbox"),e=document.getElementById("lightbox-img"),t=document.getElementById("lightbox-title"),n=document.getElementById("lightbox-caption"),o=document.getElementById("lightbox-close-btn");i&&(document.addEventListener("click",r=>{const s=r.target.closest("[data-lightbox-src]");if(s){r.preventDefault(),e.src=s.dataset.lightboxSrc,e.alt=s.dataset.lightboxTitle||"Boston Dynamics Robot Photograph",t.textContent=s.dataset.lightboxTitle||"",n.textContent=s.dataset.lightboxCaption||"",i.classList.add("open");return}(r.target===i||r.target===o)&&i.classList.remove("open")}),document.addEventListener("keydown",r=>{r.key==="Escape"&&i.classList.remove("open")}))}const Am=[{id:"lab",name:"Waltham R&D Lab",shortMeta:"μ=0.92 · Flat Grid",friction:.92,description:"Calibrated motion-capture test arena with metric grid floor, plyometric parkour blocks, and studio lighting."},{id:"factory",name:"Automotive Factory",shortMeta:"μ=0.86 · Epoxy Bay",friction:.86,description:"Hyundai-inspired manufacturing workcell with parts sequencing racks, safety lanes, and industrial sodium/LED bays."},{id:"rocky",name:"Rocky Mars Trail",shortMeta:"μ=0.74 · Uneven",friction:.74,description:"Unstructured boulder field and undulating red-ochre granite ridges testing footstep placement and ankle compliance."},{id:"arctic",name:"Arctic Ice Proving",shortMeta:"μ=0.28 · Low-Grip",friction:.28,description:"Specular frozen sheet ice and snowdrifts replicating BigDog & Spot low-traction slip recovery trials."},{id:"warehouse",name:"Logistics Dock",shortMeta:"μ=0.84 · Freight Bay",friction:.84,description:"High-volume distribution loading dock with freight trailer bay, stacked corrugated cases, and takeaway conveyors."},{id:"construction",name:"Construction Site",shortMeta:"μ=0.68 · Obstacles",friction:.68,description:"Dynamic active jobsite with steel scaffolding frames, concrete slabs, gravel piles, and safety perimeters."}],Rm=[{id:"all",label:"All Innovations (1992–2026)"},{id:"locomotion",label:"Dynamic Balance & Locomotion"},{id:"actuation",label:"Actuation & Mechanical Design"},{id:"control",label:"MPC, RL & Physical AI"},{id:"manipulation",label:"Whole-Body Manipulation & Hands"},{id:"commercial",label:"Fleet Autonomy & Industrial Scale"}],Cm=[{year:"1992",category:"control",categoryLabel:"Simulation & Dynamics",title:"MIT Leg Lab Spin-Off & Dynamic Hopping Foundations",description:"Marc Raibert spins Boston Dynamics out of the MIT Leg Laboratory, translating pioneering Spring-Loaded Inverted Pendulum (SLIP) 1-legged, 2-legged, and 4-legged dynamic balance mathematics into commercial simulation and robotics engineering.",impact:"Shifted robotics away from slow, quasi-static Zero-Moment-Point (ZMP) walking toward energetic, animal-like dynamic balance."},{year:"1993–1999",category:"control",categoryLabel:"3D Physics Simulation",title:"DI-Guy Real-Time Human Simulation & Sony AIBO Consulting",description:"Before building commercial hardware, Boston Dynamics creates DI-Guy for the U.S. Navy NAWCTSD—real-time physics-blended 3D human character simulation for aircraft carrier flight-deck training—and consults with Sony on quadruped kinematics for AIBO.",impact:"Established Boston Dynamics’ simulation-first DNA, proving high-DOF motion control in virtual physics before cutting metal."},{year:"2002",category:"locomotion",categoryLabel:"Compliant Hexapod",title:"RHex: Buehler-Clock Compliant C-Leg Mobility",description:"Built from multi-university DARPA CBS/BIODYNOTICS research, RHex uses just six single-actuator rotating semicircular fiberglass legs synchronized in an alternating tripod clock to scramble over boulders, mud, stairs, and marshland.",impact:'Demonstrated that mechanical leg compliance ("preflexes") drastically reduces sensor and compute complexity on extreme terrain.'},{year:"2005",category:"locomotion",categoryLabel:"Hydraulic Quadruped",title:"BigDog: Reflexive Rough-Terrain Balance & Ice Recovery",description:"Powered by a 15-hp two-stroke go-kart engine driving high-pressure hydraulic servo valves across 16 leg actuators, BigDog carries 340 lb over rubble, snow, and mud—famously recovering from violent lateral kicks and sheet-ice slips without falling.",impact:"World’s first untethered rough-terrain legged robot capable of animal-grade reflexive push recovery under heavy military pack loads."},{year:"2005–2006",category:"locomotion",categoryLabel:"Micro-Spines & Learning",title:"RiSE Vertical Wall Climber & LittleDog Learning Platform",description:"RiSE uses micro-surgical compliant claws to climb vertical brick, stucco, and tree bark, while LittleDog provides universities with a precision-mocap quadruped testbed for machine-learning footstep planning.",impact:"Seeded modern learned terrain-perception algorithms later deployed on Spot and electric Atlas."},{year:"2009",category:"actuation",categoryLabel:"Anthropomorphic Biped",title:"PETMAN: Heel-to-Toe Humanoid Gait & Simulated Physiology",description:"Engineered for the U.S. Army to test chemical-warfare protective suits under realistic stress, PETMAN becomes the first anthropomorphic biped to walk dynamically heel-to-toe at 4.4 mph, perform push-ups/squats, and regulate skin temperature and artificial sweating.",impact:"Direct mechanical and hydraulic control ancestor to the DARPA Atlas humanoid."},{year:"2012",category:"actuation",categoryLabel:"Ballistic Micro-Scout",title:"SandFlea: 30-Foot CO₂ Piston Ballistic Launch & Gyro Flight",description:"Weighing just 11 lb, SandFlea drives like an agile 4WD RC scout until encountering walls or two-story buildings—rearing up on a pneumatic kickstand and firing a CO₂ piston to launch 30 feet vertically while spinning wheels act as mid-air pitch gyroscopes.",impact:"Proved multi-modal wheeled-ballistic locomotion with active angular-momentum attitude control during flight and landing."},{year:"2012",category:"locomotion",categoryLabel:"Land Speed Record",title:"Cheetah: 28.3 mph Articulated-Spine Rotary Gallop",description:"Using an articulated flexible spine synchronized with lightweight tendon-inspired legs, Cheetah hits 28.3 mph (45.5 km/h) on a laboratory treadmill—shattering the legged robot speed record and surpassing Usain Bolt’s peak human sprint speed.",impact:"Proved torso flexion-extension dramatically increases stride length and elastic energy transfer at high Froude numbers."},{year:"2012–2013",category:"locomotion",categoryLabel:"Untethered Field Quadrupeds",title:"LS3 (AlphaDog) Quietened Pack Mule & Untethered WildCat",description:"LS3 upgrades BigDog to carry 400 lb over 20 miles with 10x quieter acoustics, cylindrical roll-recovery, and LiDAR human-leader tracking. WildCat takes Cheetah’s flexible-spine galloping outdoors untethered at 20 mph with aggressive banked turns.",impact:"Validated autonomous outdoor perception (stereo + LiDAR) fused with high-speed dynamic gaits."},{year:"2013–2015",category:"manipulation",categoryLabel:"Disaster Humanoid",title:"DARPA Robotics Challenge (DRC) Hydraulic Atlas",description:"Unveiled in July 2013 at 6 ft 2 in and 330 lb with 28 hydraulic degrees of freedom, DRC Atlas serves as the hardware platform for top global robotics teams navigating rubble, driving vehicles, turning valves, and operating power tools.",impact:"Catalyzed whole-body inverse kinematics and perception-in-the-loop humanoid manipulation worldwide."},{year:"2016",category:"actuation",categoryLabel:"Additive Manufacturing",title:"Next-Gen Atlas: 3D-Printed Hydraulic Legs & SpotMini Electric Shift",description:"Boston Dynamics slashes Atlas down to 1.5 m and 80 kg by 3D-printing titanium/aluminum leg structures with internal vascular hydraulic fluid channels instead of external hoses. Simultaneously, SpotMini debuts Boston Dynamics’ first all-electric quiet quadruped with a 5-DOF arm.",impact:"Massive leap in power-to-weight ratio unlocked humanoid backflips (2017), while quiet electric actuators paved the path to commercial products."},{year:"2017–2019",category:"manipulation",categoryLabel:"Hybrid Wheeled-Legged",title:"Handle: Dynamic Wheeled Balance & Swinging-Tail Counterweight",description:'Combining wheels on flat ground with multi-jointed legs for 4-foot obstacle jumps, Handle later evolves in 2019 into a counterbalanced warehouse "ostrich" using a heavy swinging battery tail to offset 15-kg suction picks at high speed.',impact:"Directly informed the dedicated engineering architecture of the commercial Stretch warehouse robot."},{year:"2018–2021",category:"control",categoryLabel:"Model Predictive Control",title:"Whole-Body MPC: Multi-Platform Parkour, Vaults & Synchronized Dance",description:'Replacing hand-crafted state machines with real-time online Model Predictive Control (MPC), Atlas reasons ahead across multi-step trajectories—leaping across sloped plyo boxes, executing balance-beam vaults, and dancing in "Do You Love Me?" alongside Spot and Handle.',impact:"Unified perception-driven footstep planning with whole-body centroidal momentum optimization at millisecond control rates."},{year:"2020–2021",category:"commercial",categoryLabel:"First Commercial Fleet",title:"Spot Enterprise Commercialization, Self-Charging Dock & 6-DOF Spot Arm",description:'Spot becomes Boston Dynamics’ first commercial product in June 2020, followed in 2021 by the self-charging Spot Enterprise dock and the 6-DOF Spot Arm capable of opening doors, turning industrial valves, and executing gyro-stabilized "chicken-head" tracking.',impact:"Transitioned Boston Dynamics from DARPA R&D lab into a global industrial inspection enterprise with 1,500+ units deployed."},{year:"2021–2023",category:"commercial",categoryLabel:"Logistics & Fleet Software",title:'Stretch Warehouse Launch, Orbit Fleet Software & "Atlas Gets a Grip"',description:"Stretch enters commercial logistics for autonomous trailer unloading with a compact omni-directional base and high-flow SmartGripper. Orbit centralizes multi-site fleet management, while research Atlas demonstrates momentum-coupled heavy plank throwing on construction scaffolds.",impact:"Proved whole-body manipulation where legs, hips, and arms share reaction forces to move objects up to half the robot’s own mass."},{year:"Apr 2024",category:"actuation",categoryLabel:"All-Electric Humanoid",title:"Hydraulic Atlas Retired; All-Electric Superhuman Atlas Unveiled",description:"After 15 years of hydraulic humanoids, Boston Dynamics retires HD Atlas and reveals an all-new electric Atlas featuring custom ultra-high-torque rotary electric actuators, zero hydraulic fluid risk, and 360° continuous-swivel joints stronger than elite human athletes.",impact:"Eliminated hydraulic leaks and acoustic noise for clean manufacturing plants while surpassing human range-of-motion constraints."},{year:"2024–2025",category:"control",categoryLabel:"Large Behavior Models",title:"TRI Large Behavior Models (LBMs) & Sim-to-Real Whole-Body RL",description:"Partnering with Toyota Research Institute (TRI) and leveraging GPU-accelerated Reinforcement Learning, electric Atlas demonstrates end-to-end visuomotor Large Behavior Models autonomously sequencing complex multi-step part sorting and recovery without scripted rules.",impact:"Compressed new robot behavior authoring from nearly a year of manual control engineering down to hours of training."},{year:"Jan–Mar 2026",category:"commercial",categoryLabel:"Serial Humanoid Production",title:"CES 2026 Production Atlas, DeepMind Gemini Partnership & Factory Rollout",description:"At CES (Jan 5, 2026), Boston Dynamics and Hyundai unveil the production 56-DOF Electric Atlas (1.9 m tall, 2.3 m reach, 4-hr runtime with autonomous battery hot-swapping) and partner with Google DeepMind on Gemini Robotics foundation models. Serial production begins March 2026, with field work sorting roof racks at Hyundai Metaplant Georgia.",impact:"First enterprise-grade dynamic humanoid entering serial production for automotive manufacturing and physical AI research."},{year:"Mar–Sep 2026",category:"commercial",categoryLabel:"Agentic Industrial AI",title:"FieldAI Construction Autonomy & Spot 5.2 with Gemini + MCP Orbit",description:"Spot 5.1 introduces Spot Cam 2 and validated autonomous door-opening across 2,500+ doors; FieldAI partnership cuts construction documentation time by >90%. In Sept 2026, Spot 5.2 re-architects Orbit around enterprise assets, adds Gemini Robotics ER 1.6 visual inspections, 20+ gas detection, and an MCP layer enabling AI agents to autonomously dispatch Spot on PLC/camera triggers.",impact:"Transformed mobile robots from scheduled route followers into event-driven, foundation-model-powered autonomous industrial agents."},{year:"Oct–Nov 2026",category:"manipulation",categoryLabel:"Dexterous Production Scale",title:"Atlas 13-DOF Direct-Drive Hand, Stretch Gen 2 & Semiconductor Fabs",description:"Oct 2026: Atlas gains a mass-manufacturable 4-finger, 13-DOF encapsulated direct-drive hand built for tool use and sim-to-real RL. Nov 3, 2026: Stretch Gen 2 debuts with >360° continuous-rotation joints, 81% less internal cabling, two-shift fast-charge batteries, and 1,000-case/hr multipick. Nov 17, 2026: GlobalFoundries joins as the first semiconductor fab early adopter for Atlas.",impact:"Completed the reliability, dexterity, and uptime engineering needed for continuous multi-shift manufacturing and logistics."}],Pm=[{title:"1. Dynamic Balance & Centroidal Momentum",evolution:"SLIP Hoppers (1980s) → Reflex Balance (BigDog) → Online MPC (Atlas) → Sim-to-Real RL (2026)",body:"Unlike traditional robots that keep their center of mass strictly inside a static polygon of flat feet, Boston Dynamics pioneered dynamic stability—continuously trading kinetic and potential energy, using angular momentum of swinging limbs and rapid cross-stepping foot placement to stay balanced even on sheet ice or mid-backflip."},{title:"2. High-Power-Density Actuation Evolution",evolution:"Gas-Hydraulic Servo Valves → 3D-Printed Vascular Hydraulics → Custom Direct-Drive Electric Rotary Actuators",body:"For two decades, hydraulics delivered unmatched force-to-weight density for BigDog, Cheetah, and HD Atlas—culminating in 3D-printed leg manifolds with internal oil arteries. In 2024–2026, custom high-torque pancake electric actuators finally exceeded hydraulic strength-to-weight while running whisper-quiet, leak-free, and enabling 360° continuous joint rotation."},{title:"3. Beyond-Anthropomorphic Kinematics",evolution:"Human-Mimicking PETMAN → Hybrid Wheeled Handle → 360° Superhuman Electric Atlas & Stretch Gen 2",body:"Boston Dynamics deliberately decoupled form from strict human imitation. Electric Atlas fits human factory aisles (1.9 m) yet rotates its hips, waist, and head 360° continuously so it can transfer heavy automotive parts front-to-back without wasting footsteps. Stretch Gen 2 similarly uses >360° continuous joints to eliminate mechanical hard-stop stress."},{title:"4. Whole-Body Manipulation & Dexterous End-Effectors",evolution:"Pinch Hooks → 6-DOF Gyro Spot Arm → Multipick Vacuum SmartGripper → 13-DOF Direct-Drive Hand",body:"Rather than bolting an isolated arm onto a static base, every joint participates in manipulation: Spot pitches its torso to extend arm reach; Stretch coordinates its omni-base and mast; and Atlas couples ankle push-off through hip torque into its Oct 2026 13-DOF 4-finger encapsulated direct-drive hands to bear-hug 100-lb loads or operate triggered tools."},{title:"5. Physical AI, LBMs & Agentic Fleet Software",evolution:"Hand-Tuned Finite State Machines → Perception-in-Loop MPC → TRI LBMs, DeepMind Gemini & MCP Orbit",body:"Combining parallelized physics simulation with Toyota Research Institute Large Behavior Models, Google DeepMind Gemini Robotics ER, and FieldAI foundation models compressed behavior authoring from ~12 months to hours—while Orbit 5.2’s MCP layer lets factory PLC alerts dispatch robots autonomously."},{title:"6. Industrial Uptime & Design-for-Maintainability",evolution:"Tethered Lab Rigs → IP54 Spot Dock → Autonomous Atlas Battery Hot-Swap & 81% Harness Reduction",body:"Scaling past 2,000+ commercial deployments taught Boston Dynamics ruthless reliability engineering: Stretch Gen 2 strips out half a mile (81%) of internal wiring and adopts automotive-grade vibration connectors, while Production Atlas swaps its own depleted battery packs autonomously for 24/7 factory shifts."}],Dm=[{src:"images/fleet-atlas-spot.jpg",plate:"FIELD PLATE 01 · INDUSTRIAL DEPLOYMENT (2026)",title:"Production All-Electric Atlas & Spot 5.2 in Industrial Plant",caption:"Production-ready 56-DOF All-Electric Atlas (right) alongside Spot equipped with Spot Cam 2 and autonomous LiDAR payload (left)."},{src:"images/fleet-spot-stretch.jpg",plate:"FIELD PLATE 02 · WAREHOUSE LOGISTICS",title:"Spot Arm & Commercial Stretch Side-by-Side on Loading Dock",caption:"Spot with its 6-DOF manipulator arm paired with Stretch and its green multi-zone SmartGripper vacuum array."},{src:"images/atlas-hydraulic-parkour.jpg",plate:"ARCHIVE PLATE 03 · WALTHAM R&D LAB (2021)",title:"Dual Hydraulic HD Atlas Robots Executing Multi-Obstacle Parkour",caption:"Two 3D-printed vascular-hydraulic Atlas humanoids vaulting balance beams and plywood boxes using online Model Predictive Control."},{src:"images/rhex-rocks.jpg",plate:"ARCHIVE PLATE 04 · DARPA HERITAGE (2002)",title:"RHex Compliant C-Leg Hexapod Scaling Granite Outcrops",caption:"Early biomimetic hexapod using six single-actuator curved fiberglass spring legs to conquer rough outdoor rock ledges."}],Lm={atlas:{cardThumb:"images/fleet-atlas-spot.jpg",gallery:[{src:"images/fleet-atlas-spot.jpg",era:"2026 Production Era",title:"Production All-Electric Atlas & Spot in Industrial Facility",caption:"Serial-production Electric Atlas (1.9 m tall, 56 DOF, sealed industrial shrouds, illuminated ring-sensor head) deployed alongside Spot."},{src:"images/atlas-electric-lab.jpg",era:"April 2024 Reveal",title:"All-Electric Atlas Prototype in Waltham Robotics Lab",caption:"First public look at custom high-torque rotary electric hip/knee actuators and 360° swivel joints on Waltham’s signature blue test mat."},{src:"images/atlas-hydraulic-parkour.jpg",era:"2016–2024 Hydraulic Era",title:"Dual Hydraulic Research Atlas Units Performing Beam Vaults",caption:"The retired 80-kg electro-hydraulic HD Atlas generation featuring 3D-printed leg manifolds and protective upper-torso roll cages."}]},spot:{cardThumb:"images/spot-arm-cam2.jpg",gallery:[{src:"images/spot-arm-cam2.jpg",era:"2026 Spot 5.1 / 5.2",title:"Spot Equipped with 6-DOF Spot Arm & Spot Cam 2 Payload",caption:"Full industrial inspection configuration combining the front 6-DOF manipulator arm with rear Spot Cam 2 optical/thermal/acoustic sensors."},{src:"images/spot-valve.jpg",era:"Manipulation Workflow",title:"Close-Up of Spot Arm Gripper & Optical Camera Approaching Valve",caption:"Integrated LED illuminator and in-hand RGB-D camera inside Spot Arm’s jaws aligning for high-torque industrial valve rotation."},{src:"images/fleet-spot-stretch.jpg",era:"Enterprise Fleet",title:"Spot & Stretch Multi-Robot Warehouse Deployment",caption:"Spot patrolling loading-bay floors alongside Stretch—mirroring joint enterprise deployments such as Otto Group in Europe."}]},stretch:{cardThumb:"images/stretch-container.jpg",gallery:[{src:"images/stretch-container.jpg",era:"Commercial Trailer Unloading",title:"Stretch Unloading Corrugated Cases onto Telescoping Conveyor",caption:"7-DOF crane arm and green multi-zone SmartGripper vacuum array transferring freight inside a shipping container."},{src:"images/stretch-proto.jpg",era:"Early R&D Architecture",title:"Pre-Production Stretch Engineering Prototype in Test Bay",caption:"Exposed pneumatic manifolds and high-flex cable chains on early Stretch hardware—highlighting why Nov 2026 Gen 2 cut 81% of internal wiring."},{src:"images/fleet-spot-stretch.jpg",era:"Pallet-Footprint Base",title:"Omnidirectional Base & Perception Mast Architecture",caption:"Compact weighted square base occupying the footprint of a standard pallet for zero-swing maneuvering in narrow aisles."}]},handle:{cardThumb:"images/handle-warehouse.jpg",gallery:[{src:"images/handle-warehouse.jpg",era:"2019 Warehouse Reimagining",title:'Counterbalanced "Ostrich" Handle Palletizing Cardboard Cases',caption:"Overhead force-controlled suction arm offset dynamically by the heavy rear battery counterweight swinging aft behind its two wheels."},{src:"images/handle-2017-stairs.webp",era:"2017 Hybrid Research Proto",title:"Original Wheeled-Humanoid Handle Descending Outdoor Stairs",caption:"Active hydraulic knee suspension absorbing concrete steps outside Boston Dynamics’ winter test yard while balancing on motorized wheels."}]},bigdog:{cardThumb:"images/ls3-forest.webp",gallery:[{src:"images/bigdog-forest.jpg",era:"2005–2008 DARPA BigDog",title:"BigDog Carrying Heavy Tactical Packs Across Forest Boulders",caption:"Engine-driven hydraulic servo actuators and 50 onboard proprioceptive sensors enabling blind reflexive balance over uneven rocks."},{src:"images/ls3-forest.webp",era:"2012 LS3 (AlphaDog)",title:"Legged Squad Support System (LS3) Autonomous Woods Trial",caption:"Front stereo vision array, rotating LiDAR dome, and 10x quieter muffled powerplant navigating New England forest slopes."}]},cheetah:{cardThumb:"images/cheetah-treadmill.jpg",gallery:[{src:"images/cheetah-treadmill.jpg",era:"Sept 2012 · 28.3 mph Record",title:"DARPA Cheetah Galloping at World-Record Speed on Lab Treadmill",caption:"Articulated flexible spine, proximal hydraulic cylinders, and featherweight bio-tendon legs outrunning Usain Bolt’s peak human sprint."},{src:"images/wildcat-outdoor.webp",era:"Oct 2013 · Untethered Outdoor",title:"WildCat Bounding Free-Running Across Asphalt Test Lot",caption:"Self-contained methanol-engine hydraulic quadruped demonstrating full four-foot aerial suspension and 25° banked cornering at 20 mph."}]},"sandflea-rhex":{cardThumb:"images/rhex-rocks.jpg",gallery:[{src:"images/sandflea-launch.png",era:"2012 SandFlea (11 lb)",title:"SandFlea Angled at 70° on Rear Launch Piston Before 30-ft Leap",caption:"Oversized beveled reaction wheels spin mid-flight as gyroscopes to keep onboard cameras level and guarantee flat rooftop landings."},{src:"images/rhex-rocks.jpg",era:"2002 RHex Hexapod",title:"Ruggedized RHex Scrambling Up Steep Granite Ledges",caption:"Six sealed single-motor curved fiberglass C-legs synchronized by a dual-speed Buehler clock for compliant all-terrain mobility."}]}},Im={2002:"images/rhex-rocks.jpg",2005:"images/bigdog-forest.jpg",2012:"images/cheetah-treadmill.jpg","2012–2013":"images/wildcat-outdoor.webp","2017–2019":"images/handle-warehouse.jpg","2018–2021":"images/atlas-hydraulic-parkour.jpg","2020–2021":"images/spot-valve.jpg","2021–2023":"images/stretch-container.jpg","Apr 2024":"images/atlas-electric-lab.jpg","Jan–Mar 2026":"images/fleet-atlas-spot.jpg","Mar–Sep 2026":"images/spot-arm-cam2.jpg","Oct–Nov 2026":"images/fleet-spot-stretch.jpg"};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const as="170",mi={ROTATE:0,DOLLY:1,PAN:2},fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pl=0,Ps=1,Dl=2,Va=1,Wa=2,dn=3,Dn=0,Pt=1,Ht=2,Cn=0,gi=1,Ds=2,Ls=3,Is=4,Ll=5,Hn=100,Il=101,Ul=102,Nl=103,Fl=104,Ol=200,kl=201,Bl=202,zl=203,yr=204,Mr=205,Hl=206,Gl=207,Vl=208,Wl=209,Xl=210,ql=211,Yl=212,jl=213,Zl=214,Sr=0,br=1,wr=2,xi=3,Er=4,Tr=5,Ar=6,Rr=7,Xa=0,Kl=1,$l=2,Pn=0,Jl=1,Ql=2,ec=3,qa=4,tc=5,nc=6,ic=7,Ya=300,yi=301,Mi=302,Cr=303,Pr=304,Io=306,_n=1e3,Vn=1001,Dr=1002,Kt=1003,oc=1004,Yi=1005,en=1006,Ho=1007,Wn=1008,vn=1009,ja=1010,Za=1011,Bi=1012,ls=1013,Xn=1014,un=1015,Hi=1016,cs=1017,hs=1018,Si=1020,Ka=35902,$a=1021,Ja=1022,Zt=1023,Qa=1024,el=1025,_i=1026,bi=1027,tl=1028,ds=1029,nl=1030,us=1031,fs=1033,bo=33776,wo=33777,Eo=33778,To=33779,Lr=35840,Ir=35841,Ur=35842,Nr=35843,Fr=36196,Or=37492,kr=37496,Br=37808,zr=37809,Hr=37810,Gr=37811,Vr=37812,Wr=37813,Xr=37814,qr=37815,Yr=37816,jr=37817,Zr=37818,Kr=37819,$r=37820,Jr=37821,Ao=36492,Qr=36494,es=36495,il=36283,ts=36284,ns=36285,is=36286,rc=3200,sc=3201,ol=0,ac=1,Rn="",Bt="srgb",Ei="srgb-linear",Uo="linear",ot="srgb",Jn=7680,Us=519,lc=512,cc=513,hc=514,rl=515,dc=516,uc=517,fc=518,pc=519,Ns=35044,Fs="300 es",fn=2e3,Co=2001;class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const r=o.indexOf(t);r!==-1&&o.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const o=n.slice(0);for(let r=0,s=o.length;r<s;r++)o[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Os=1234567;const Oi=Math.PI/180,zi=180/Math.PI;function Ti(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function ps(i,e){return(i%e+e)%e}function mc(i,e,t,n,o){return n+(i-e)*(o-n)/(t-e)}function gc(i,e,t){return i!==e?(t-i)/(e-i):0}function ki(i,e,t){return(1-t)*i+t*e}function _c(i,e,t,n){return ki(i,e,1-Math.exp(-t*n))}function vc(i,e=1){return e-Math.abs(ps(i,e*2)-e)}function xc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function yc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Mc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Sc(i,e){return i+Math.random()*(e-i)}function bc(i){return i*(.5-Math.random())}function wc(i){i!==void 0&&(Os=i);let e=Os+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ec(i){return i*Oi}function Tc(i){return i*zi}function Ac(i){return(i&i-1)===0&&i!==0}function Rc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pc(i,e,t,n,o){const r=Math.cos,s=Math.sin,a=r(t/2),l=s(t/2),c=r((e+n)/2),d=s((e+n)/2),u=r((e-n)/2),f=s((e-n)/2),m=r((n-e)/2),_=s((n-e)/2);switch(o){case"XYX":i.set(a*d,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*d,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*d,a*c);break;case"XZX":i.set(a*d,l*_,l*m,a*c);break;case"YXY":i.set(l*m,a*d,l*_,a*c);break;case"ZYZ":i.set(l*_,l*m,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const he={DEG2RAD:Oi,RAD2DEG:zi,generateUUID:Ti,clamp:wt,euclideanModulo:ps,mapLinear:mc,inverseLerp:gc,lerp:ki,damp:_c,pingpong:vc,smoothstep:xc,smootherstep:yc,randInt:Mc,randFloat:Sc,randFloatSpread:bc,seededRandom:wc,degToRad:Ec,radToDeg:Tc,isPowerOfTwo:Ac,ceilPowerOfTwo:Rc,floorPowerOfTwo:Cc,setQuaternionFromProperEuler:Pc,normalize:Et,denormalize:ui};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6],this.y=o[1]*t+o[4]*n+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),o=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*o+e.x,this.y=r*o+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,o,r,s,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,o,r,s,a,l,c)}set(e,t,n,o,r,s,a,l,c){const d=this.elements;return d[0]=e,d[1]=o,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,r=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],f=n[2],m=n[5],_=n[8],g=o[0],p=o[3],h=o[6],y=o[1],S=o[4],v=o[7],A=o[2],w=o[5],T=o[8];return r[0]=s*g+a*y+l*A,r[3]=s*p+a*S+l*w,r[6]=s*h+a*v+l*T,r[1]=c*g+d*y+u*A,r[4]=c*p+d*S+u*w,r[7]=c*h+d*v+u*T,r[2]=f*g+m*y+_*A,r[5]=f*p+m*S+_*w,r[8]=f*h+m*v+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],o=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*a*c-n*r*d+n*a*l+o*r*c-o*s*l}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*s-a*c,f=a*l-d*r,m=c*r-s*l,_=t*u+n*f+o*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(o*c-d*n)*g,e[2]=(a*n-o*s)*g,e[3]=f*g,e[4]=(d*t-o*l)*g,e[5]=(o*r-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,o,r,s,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-o*c,o*l,-o*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Go.makeScale(e,t)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<9;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new Ge;function sl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Po(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dc(){const i=Po("canvas");return i.style.display="block",i}const ks={};function Ni(i){i in ks||(ks[i]=!0,console.warn(i))}function Lc(i,e,t){return new Promise(function(n,o){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Ic(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Uc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ot&&(i.r=pn(i.r),i.g=pn(i.g),i.b=pn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ot&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Rn?Uo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Bs=[.64,.33,.3,.6,.15,.06],zs=[.2126,.7152,.0722],Hs=[.3127,.329],Gs=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vs=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[Ei]:{primaries:Bs,whitePoint:Hs,transfer:Uo,toXYZ:Gs,fromXYZ:Vs,luminanceCoefficients:zs,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:Bs,whitePoint:Hs,transfer:ot,toXYZ:Gs,fromXYZ:Vs,luminanceCoefficients:zs,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}});let Qn;class Nc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qn===void 0&&(Qn=Po("canvas")),Qn.width=e.width,Qn.height=e.height;const n=Qn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Po("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),r=o.data;for(let s=0;s<r.length;s++)r[s]=pn(r[s]/255)*255;return n.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pn(t[n]/255)*255):t[n]=pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fc=0;class al{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let r;if(Array.isArray(o)){r=[];for(let s=0,a=o.length;s<a;s++)o[s].isDataTexture?r.push(Vo(o[s].image)):r.push(Vo(o[s]))}else r=Vo(o);n.url=r}return t||(e.images[this.uuid]=n),n}}function Vo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oc=0;class At extends jn{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=Vn,o=Vn,r=en,s=Wn,a=Zt,l=vn,c=At.DEFAULT_ANISOTROPY,d=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Ti(),this.name="",this.source=new al(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ya)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _n:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case Dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _n:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case Dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Ya;At.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,o=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,o){return this.x=e,this.y=t,this.z=n,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*o+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*o+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*o+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*o+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,o,r;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(m+1)/2,A=(h+1)/2,w=(d+f)/4,T=(u+g)/4,C=(_+p)/4;return S>v&&S>A?S<.01?(n=0,o=.707106781,r=.707106781):(n=Math.sqrt(S),o=w/n,r=T/n):v>A?v<.01?(n=.707106781,o=0,r=.707106781):(o=Math.sqrt(v),n=w/o,r=C/o):A<.01?(n=.707106781,o=.707106781,r=0):(r=Math.sqrt(A),n=T/r,o=C/r),this.set(n,o,r,t),this}let y=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(f-d)*(f-d));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(u-g)/y,this.z=(f-d)/y,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kc extends jn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const o={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new At(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let o=0,r=this.textures.length;o<r;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,o=e.textures.length;n<o;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new al(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends kc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ll extends At{constructor(e=null,t=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bc extends At{constructor(e=null,t=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yn{constructor(e=0,t=0,n=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=o}static slerpFlat(e,t,n,o,r,s,a){let l=n[o+0],c=n[o+1],d=n[o+2],u=n[o+3];const f=r[s+0],m=r[s+1],_=r[s+2],g=r[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==f||c!==m||d!==_){let p=1-a;const h=l*f+c*m+d*_+u*g,y=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const A=Math.sqrt(S),w=Math.atan2(A,h*y);p=Math.sin(p*w)/A,a=Math.sin(a*w)/A}const v=a*y;if(l=l*p+f*v,c=c*p+m*v,d=d*p+_*v,u=u*p+g*v,p===1-a){const A=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=A,c*=A,d*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,o,r,s){const a=n[o],l=n[o+1],c=n[o+2],d=n[o+3],u=r[s],f=r[s+1],m=r[s+2],_=r[s+3];return e[t]=a*_+d*u+l*m-c*f,e[t+1]=l*_+d*f+c*u-a*m,e[t+2]=c*_+d*m+a*f-l*u,e[t+3]=d*_-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,o){return this._x=e,this._y=t,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,o=e._y,r=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(o/2),u=a(r/2),f=l(n/2),m=l(o/2),_=l(r/2);switch(s){case"XYZ":this._x=f*d*u+c*m*_,this._y=c*m*u-f*d*_,this._z=c*d*_+f*m*u,this._w=c*d*u-f*m*_;break;case"YXZ":this._x=f*d*u+c*m*_,this._y=c*m*u-f*d*_,this._z=c*d*_-f*m*u,this._w=c*d*u+f*m*_;break;case"ZXY":this._x=f*d*u-c*m*_,this._y=c*m*u+f*d*_,this._z=c*d*_+f*m*u,this._w=c*d*u-f*m*_;break;case"ZYX":this._x=f*d*u-c*m*_,this._y=c*m*u+f*d*_,this._z=c*d*_-f*m*u,this._w=c*d*u+f*m*_;break;case"YZX":this._x=f*d*u+c*m*_,this._y=c*m*u+f*d*_,this._z=c*d*_-f*m*u,this._w=c*d*u-f*m*_;break;case"XZY":this._x=f*d*u-c*m*_,this._y=c*m*u-f*d*_,this._z=c*d*_+f*m*u,this._w=c*d*u+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,o=Math.sin(n);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],o=t[4],r=t[8],s=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(s-o)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(d-l)/m,this._x=.25*m,this._y=(o+s)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(o+s)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(s-o)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const o=Math.min(1,t/n);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,o=e._y,r=e._z,s=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+s*a+o*c-r*l,this._y=o*d+s*l+r*a-n*c,this._z=r*d+s*c+n*l-o*a,this._w=s*d-n*a-o*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,o=this._y,r=this._z,s=this._w;let a=s*e._w+n*e._x+o*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=o,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*o+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=s*u+this._w*f,this._x=n*u+this._x*f,this._y=o*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(o*Math.sin(e),o*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ws.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ws.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,o=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*o,this.y=r[1]*t+r[4]*n+r[7]*o,this.z=r[2]*t+r[5]*n+r[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*o+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*o+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*o+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*o+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,o=this.z,r=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*o-a*n),d=2*(a*t-r*o),u=2*(r*n-s*t);return this.x=t+l*c+s*u-a*d,this.y=n+l*d+a*c-r*u,this.z=o+l*u+r*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,o=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*o,this.y=r[1]*t+r[5]*n+r[9]*o,this.z=r[2]*t+r[6]*n+r[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,o=e.y,r=e.z,s=t.x,a=t.y,l=t.z;return this.x=o*l-r*a,this.y=r*s-n*l,this.z=n*a-o*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wo.copy(this).projectOnVector(e),this.sub(Wo)}reflect(e){return this.sub(Wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,o=this.z-e.z;return t*t+n*n+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const o=Math.sin(t)*e;return this.x=o*Math.sin(n),this.y=Math.cos(t)*e,this.z=o*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wo=new N,Ws=new Yn;class Gi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Xt):Xt.fromBufferAttribute(r,s),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ji.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ji.copy(n.boundingBox)),ji.applyMatrix4(e.matrixWorld),this.union(ji)}const o=e.children;for(let r=0,s=o.length;r<s;r++)this.expandByObject(o[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pi),Zi.subVectors(this.max,Pi),ei.subVectors(e.a,Pi),ti.subVectors(e.b,Pi),ni.subVectors(e.c,Pi),Mn.subVectors(ti,ei),Sn.subVectors(ni,ti),Un.subVectors(ei,ni);let t=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-Un.z,Un.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,Un.z,0,-Un.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-Un.y,Un.x,0];return!Xo(t,ei,ti,ni,Zi)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,ei,ti,ni,Zi))?!1:(Ki.crossVectors(Mn,Sn),t=[Ki.x,Ki.y,Ki.z],Xo(t,ei,ti,ni,Zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new N,new N,new N,new N,new N,new N,new N,new N],Xt=new N,ji=new Gi,ei=new N,ti=new N,ni=new N,Mn=new N,Sn=new N,Un=new N,Pi=new N,Zi=new N,Ki=new N,Nn=new N;function Xo(i,e,t,n,o){for(let r=0,s=i.length-3;r<=s;r+=3){Nn.fromArray(i,r);const a=o.x*Math.abs(Nn.x)+o.y*Math.abs(Nn.y)+o.z*Math.abs(Nn.z),l=e.dot(Nn),c=t.dot(Nn),d=n.dot(Nn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const zc=new Gi,Di=new N,qo=new N;class Vi{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zc.setFromPoints(e).getCenter(n);let o=0;for(let r=0,s=e.length;r<s;r++)o=Math.max(o,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Di.subVectors(e,this.center);const t=Di.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),o=(n-this.radius)*.5;this.center.addScaledVector(Di,o/n),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Di.copy(e.center).add(qo)),this.expandByPoint(Di.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new N,Yo=new N,$i=new N,bn=new N,jo=new N,Ji=new N,Zo=new N;class No{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,n,o){Yo.copy(e).add(t).multiplyScalar(.5),$i.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(Yo);const r=e.distanceTo(t)*.5,s=-this.direction.dot($i),a=bn.dot(this.direction),l=-bn.dot($i),c=bn.lengthSq(),d=Math.abs(1-s*s);let u,f,m,_;if(d>0)if(u=s*l-a,f=s*a-l,_=r*d,u>=0)if(f>=-_)if(f<=_){const g=1/d;u*=g,f*=g,m=u*(u+s*f+2*a)+f*(s*u+f+2*l)+c}else f=r,u=Math.max(0,-(s*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(s*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-s*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(s*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=s>0?-r:r,u=Math.max(0,-(s*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),o&&o.copy(Yo).addScaledVector($i,f),m}intersectSphere(e,t){an.subVectors(e.center,this.origin);const n=an.dot(this.direction),o=an.dot(an)-n*n,r=e.radius*e.radius;if(o>r)return null;const s=Math.sqrt(r-o),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,o,r,s,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,o=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,o=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,s=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,s=(e.min.y-f.y)*d),n>s||r>o||((r>n||isNaN(n))&&(n=r),(s<o||isNaN(o))&&(o=s),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>o)||((a>n||n!==n)&&(n=a),(l<o||o!==o)&&(o=l),o<0)?null:this.at(n>=0?n:o,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,n,o,r){jo.subVectors(t,e),Ji.subVectors(n,e),Zo.crossVectors(jo,Ji);let s=this.direction.dot(Zo),a;if(s>0){if(o)return null;a=1}else if(s<0)a=-1,s=-s;else return null;bn.subVectors(this.origin,e);const l=a*this.direction.dot(Ji.crossVectors(bn,Ji));if(l<0)return null;const c=a*this.direction.dot(jo.cross(bn));if(c<0||l+c>s)return null;const d=-a*bn.dot(Zo);return d<0?null:this.at(d/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,n,o,r,s,a,l,c,d,u,f,m,_,g,p){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,o,r,s,a,l,c,d,u,f,m,_,g,p)}set(e,t,n,o,r,s,a,l,c,d,u,f,m,_,g,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=o,h[1]=r,h[5]=s,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=u,h[14]=f,h[3]=m,h[7]=_,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,o=1/ii.setFromMatrixColumn(e,0).length(),r=1/ii.setFromMatrixColumn(e,1).length(),s=1/ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,o=e.y,r=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(o),c=Math.sin(o),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=s*d,m=s*u,_=a*d,g=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*d,m=l*u,_=c*d,g=c*u;t[0]=f+g*a,t[4]=_*a-m,t[8]=s*c,t[1]=s*u,t[5]=s*d,t[9]=-a,t[2]=m*a-_,t[6]=g+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*d,m=l*u,_=c*d,g=c*u;t[0]=f-g*a,t[4]=-s*u,t[8]=_+m*a,t[1]=m+_*a,t[5]=s*d,t[9]=g-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*d,m=s*u,_=a*d,g=a*u;t[0]=l*d,t[4]=_*c-m,t[8]=f*c+g,t[1]=l*u,t[5]=g*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,_=a*l,g=a*c;t[0]=l*d,t[4]=g-f*u,t[8]=_*u+m,t[1]=u,t[5]=s*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*u+_,t[10]=f-g*u}else if(e.order==="XZY"){const f=s*l,m=s*c,_=a*l,g=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+g,t[5]=s*d,t[9]=m*u-_,t[2]=_*u-m,t[6]=a*d,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hc,e,Gc)}lookAt(e,t,n){const o=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),wn.crossVectors(n,Lt),wn.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),wn.crossVectors(n,Lt)),wn.normalize(),Qi.crossVectors(Lt,wn),o[0]=wn.x,o[4]=Qi.x,o[8]=Lt.x,o[1]=wn.y,o[5]=Qi.y,o[9]=Lt.y,o[2]=wn.z,o[6]=Qi.z,o[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,r=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],f=n[9],m=n[13],_=n[2],g=n[6],p=n[10],h=n[14],y=n[3],S=n[7],v=n[11],A=n[15],w=o[0],T=o[4],C=o[8],M=o[12],x=o[1],P=o[5],D=o[9],U=o[13],O=o[2],X=o[6],W=o[10],G=o[14],L=o[3],H=o[7],Q=o[11],ee=o[15];return r[0]=s*w+a*x+l*O+c*L,r[4]=s*T+a*P+l*X+c*H,r[8]=s*C+a*D+l*W+c*Q,r[12]=s*M+a*U+l*G+c*ee,r[1]=d*w+u*x+f*O+m*L,r[5]=d*T+u*P+f*X+m*H,r[9]=d*C+u*D+f*W+m*Q,r[13]=d*M+u*U+f*G+m*ee,r[2]=_*w+g*x+p*O+h*L,r[6]=_*T+g*P+p*X+h*H,r[10]=_*C+g*D+p*W+h*Q,r[14]=_*M+g*U+p*G+h*ee,r[3]=y*w+S*x+v*O+A*L,r[7]=y*T+S*P+v*X+A*H,r[11]=y*C+S*D+v*W+A*Q,r[15]=y*M+S*U+v*G+A*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],o=e[8],r=e[12],s=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],m=e[14],_=e[3],g=e[7],p=e[11],h=e[15];return _*(+r*l*u-o*c*u-r*a*f+n*c*f+o*a*m-n*l*m)+g*(+t*l*m-t*c*f+r*s*f-o*s*m+o*c*d-r*l*d)+p*(+t*c*u-t*a*m-r*s*u+n*s*m+r*a*d-n*c*d)+h*(-o*a*d-t*l*u+t*a*f+o*s*u-n*s*f+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],m=e[11],_=e[12],g=e[13],p=e[14],h=e[15],y=u*p*c-g*f*c+g*l*m-a*p*m-u*l*h+a*f*h,S=_*f*c-d*p*c-_*l*m+s*p*m+d*l*h-s*f*h,v=d*g*c-_*u*c+_*a*m-s*g*m-d*a*h+s*u*h,A=_*u*l-d*g*l-_*a*f+s*g*f+d*a*p-s*u*p,w=t*y+n*S+o*v+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=y*T,e[1]=(g*f*r-u*p*r-g*o*m+n*p*m+u*o*h-n*f*h)*T,e[2]=(a*p*r-g*l*r+g*o*c-n*p*c-a*o*h+n*l*h)*T,e[3]=(u*l*r-a*f*r-u*o*c+n*f*c+a*o*m-n*l*m)*T,e[4]=S*T,e[5]=(d*p*r-_*f*r+_*o*m-t*p*m-d*o*h+t*f*h)*T,e[6]=(_*l*r-s*p*r-_*o*c+t*p*c+s*o*h-t*l*h)*T,e[7]=(s*f*r-d*l*r+d*o*c-t*f*c-s*o*m+t*l*m)*T,e[8]=v*T,e[9]=(_*u*r-d*g*r-_*n*m+t*g*m+d*n*h-t*u*h)*T,e[10]=(s*g*r-_*a*r+_*n*c-t*g*c-s*n*h+t*a*h)*T,e[11]=(d*a*r-s*u*r-d*n*c+t*u*c+s*n*m-t*a*m)*T,e[12]=A*T,e[13]=(d*g*o-_*u*o+_*n*f-t*g*f-d*n*p+t*u*p)*T,e[14]=(_*a*o-s*g*o-_*n*l+t*g*l+s*n*p-t*a*p)*T,e[15]=(s*u*o-d*a*o+d*n*l-t*u*l-s*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,o=e.y,r=e.z;return t[0]*=n,t[4]*=o,t[8]*=r,t[1]*=n,t[5]*=o,t[9]*=r,t[2]*=n,t[6]*=o,t[10]*=r,t[3]*=n,t[7]*=o,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,o))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),o=Math.sin(t),r=1-n,s=e.x,a=e.y,l=e.z,c=r*s,d=r*a;return this.set(c*s+n,c*a-o*l,c*l+o*a,0,c*a+o*l,d*a+n,d*l-o*s,0,c*l-o*a,d*l+o*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,o,r,s){return this.set(1,n,r,0,e,1,s,0,t,o,1,0,0,0,0,1),this}compose(e,t,n){const o=this.elements,r=t._x,s=t._y,a=t._z,l=t._w,c=r+r,d=s+s,u=a+a,f=r*c,m=r*d,_=r*u,g=s*d,p=s*u,h=a*u,y=l*c,S=l*d,v=l*u,A=n.x,w=n.y,T=n.z;return o[0]=(1-(g+h))*A,o[1]=(m+v)*A,o[2]=(_-S)*A,o[3]=0,o[4]=(m-v)*w,o[5]=(1-(f+h))*w,o[6]=(p+y)*w,o[7]=0,o[8]=(_+S)*T,o[9]=(p-y)*T,o[10]=(1-(f+g))*T,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,n){const o=this.elements;let r=ii.set(o[0],o[1],o[2]).length();const s=ii.set(o[4],o[5],o[6]).length(),a=ii.set(o[8],o[9],o[10]).length();this.determinant()<0&&(r=-r),e.x=o[12],e.y=o[13],e.z=o[14],qt.copy(this);const c=1/r,d=1/s,u=1/a;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=d,qt.elements[5]*=d,qt.elements[6]*=d,qt.elements[8]*=u,qt.elements[9]*=u,qt.elements[10]*=u,t.setFromRotationMatrix(qt),n.x=r,n.y=s,n.z=a,this}makePerspective(e,t,n,o,r,s,a=fn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-o),u=(t+e)/(t-e),f=(n+o)/(n-o);let m,_;if(a===fn)m=-(s+r)/(s-r),_=-2*s*r/(s-r);else if(a===Co)m=-s/(s-r),_=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,o,r,s,a=fn){const l=this.elements,c=1/(t-e),d=1/(n-o),u=1/(s-r),f=(t+e)*c,m=(n+o)*d;let _,g;if(a===fn)_=(s+r)*u,g=-2*u;else if(a===Co)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<16;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ii=new N,qt=new dt,Hc=new N(0,0,0),Gc=new N(1,1,1),wn=new N,Qi=new N,Lt=new N,Xs=new dt,qs=new Yn;class tn{constructor(e=0,t=0,n=0,o=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,o=this._order){return this._x=e,this._y=t,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const o=e.elements,r=o[0],s=o[4],a=o[8],l=o[1],c=o[5],d=o[9],u=o[2],f=o[6],m=o[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-wt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qs.setFromEuler(this),this.setFromQuaternion(qs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vc=0;const Ys=new N,oi=new Yn,ln=new dt,eo=new N,Li=new N,Wc=new N,Xc=new Yn,js=new N(1,0,0),Zs=new N(0,1,0),Ks=new N(0,0,1),$s={type:"added"},qc={type:"removed"},ri={type:"childadded",child:null},Ko={type:"childremoved",child:null};class mt extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new N,t=new tn,n=new Yn,o=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ge}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(js,e)}rotateY(e){return this.rotateOnAxis(Zs,e)}rotateZ(e){return this.rotateOnAxis(Ks,e)}translateOnAxis(e,t){return Ys.copy(e).applyQuaternion(this.quaternion),this.position.add(Ys.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(js,e)}translateY(e){return this.translateOnAxis(Zs,e)}translateZ(e){return this.translateOnAxis(Ks,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?eo.copy(e):eo.set(e,t,n);const o=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Li,eo,this.up):ln.lookAt(eo,Li,this.up),this.quaternion.setFromRotationMatrix(ln),o&&(ln.extractRotation(o.matrixWorld),oi.setFromRotationMatrix(ln),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($s),ri.child=e,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qc),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($s),ri.child=e,this.dispatchEvent(ri),ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const o=this.children;for(let r=0,s=o.length;r<s;r++)o[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,e,Wc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,Xc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let r=0,s=o.length;r<s;r++)o[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));o.material=a}else o.material=r(e.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];o.animations.push(r(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),u=s(e.shapes),f=s(e.skeletons),m=s(e.animations),_=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=o,n;function s(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const o=e.children[n];this.add(o.clone())}return this}}mt.DEFAULT_UP=new N(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new N,cn=new N,$o=new N,hn=new N,si=new N,ai=new N,Js=new N,Jo=new N,Qo=new N,er=new N,tr=new ft,nr=new ft,ir=new ft;class jt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,o){o.subVectors(n,t),Yt.subVectors(e,t),o.cross(Yt);const r=o.lengthSq();return r>0?o.multiplyScalar(1/Math.sqrt(r)):o.set(0,0,0)}static getBarycoord(e,t,n,o,r){Yt.subVectors(o,t),cn.subVectors(n,t),$o.subVectors(e,t);const s=Yt.dot(Yt),a=Yt.dot(cn),l=Yt.dot($o),c=cn.dot(cn),d=cn.dot($o),u=s*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-a*d)*f,_=(s*d-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,o){return this.getBarycoord(e,t,n,o,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,n,o,r,s,a,l){return this.getBarycoord(e,t,n,o,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hn.x),l.addScaledVector(s,hn.y),l.addScaledVector(a,hn.z),l)}static getInterpolatedAttribute(e,t,n,o,r,s){return tr.setScalar(0),nr.setScalar(0),ir.setScalar(0),tr.fromBufferAttribute(e,t),nr.fromBufferAttribute(e,n),ir.fromBufferAttribute(e,o),s.setScalar(0),s.addScaledVector(tr,r.x),s.addScaledVector(nr,r.y),s.addScaledVector(ir,r.z),s}static isFrontFacing(e,t,n,o){return Yt.subVectors(n,t),cn.subVectors(e,t),Yt.cross(cn).dot(o)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,o){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,n,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Yt.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,o,r){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,o,r)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,o=this.b,r=this.c;let s,a;si.subVectors(o,n),ai.subVectors(r,n),Jo.subVectors(e,n);const l=si.dot(Jo),c=ai.dot(Jo);if(l<=0&&c<=0)return t.copy(n);Qo.subVectors(e,o);const d=si.dot(Qo),u=ai.dot(Qo);if(d>=0&&u<=d)return t.copy(o);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(n).addScaledVector(si,s);er.subVectors(e,r);const m=si.dot(er),_=ai.dot(er);if(_>=0&&m<=_)return t.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(ai,a);const p=d*_-m*u;if(p<=0&&u-d>=0&&m-_>=0)return Js.subVectors(r,o),a=(u-d)/(u-d+(m-_)),t.copy(o).addScaledVector(Js,a);const h=1/(p+g+f);return s=g*h,a=f*h,t.copy(n).addScaledVector(si,s).addScaledVector(ai,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},to={h:0,s:0,l:0};function or(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,o=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,o),this}setHSL(e,t,n,o=$e.workingColorSpace){if(e=ps(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=or(s,r,e+1/3),this.g=or(s,r,e),this.b=or(s,r,e-1/3)}return $e.toWorkingColorSpace(this,o),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=o[1],a=o[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=o[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=hl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return $e.fromWorkingColorSpace(bt.copy(this),e),Math.round(wt(bt.r*255,0,255))*65536+Math.round(wt(bt.g*255,0,255))*256+Math.round(wt(bt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,o=bt.g,r=bt.b,s=Math.max(n,o,r),a=Math.min(n,o,r);let l,c;const d=(a+s)/2;if(a===s)l=0,c=0;else{const u=s-a;switch(c=d<=.5?u/(s+a):u/(2-s-a),s){case n:l=(o-r)/u+(o<r?6:0);break;case o:l=(r-n)/u+2;break;case r:l=(n-o)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Bt){$e.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,o=bt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(e,t,n){return this.getHSL(En),this.setHSL(En.h+e,En.s+t,En.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(to);const n=ki(En.h,to.h,t),o=ki(En.s,to.s,t),r=ki(En.l,to.l,t);return this.setHSL(n,o,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,o=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*o,this.g=r[1]*t+r[4]*n+r[7]*o,this.b=r[2]*t+r[5]*n+r[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new qe;qe.NAMES=hl;let Yc=0;class Zn extends jn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Ti(),this.name="",this.blending=gi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yr,this.blendDst=Mr,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Us,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jn,this.stencilZFail=Jn,this.stencilZPass=Jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yr&&(n.blendSrc=this.blendSrc),this.blendDst!==Mr&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Us&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(t){const r=o(e.textures),s=o(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const o=t.length;n=new Array(o);for(let r=0;r!==o;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nn extends Zn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new N,no=new Ue;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ns,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let o=0,r=this.itemSize;o<r;o++)this.array[e+o]=t.array[n+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,o){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),o=Et(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this}setXYZW(e,t,n,o,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),o=Et(o,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ns&&(e.usage=this.usage),e}}class dl extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ul extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jc=0;const Ot=new dt,rr=new mt,li=new N,It=new Gi,Ii=new Gi,xt=new N;class yt extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sl(e)?ul:dl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return rr.lookAt(e),rr.updateMatrix(),this.applyMatrix4(rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let o=0,r=e.length;o<r;o++){const s=e[o];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new st(n,3))}else{for(let n=0,o=t.count;n<o;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const r=t[n];It.setFromBufferAttribute(r),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];Ii.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(It.min,Ii.min),It.expandByPoint(xt),xt.addVectors(It.max,Ii.max),It.expandByPoint(xt)):(It.expandByPoint(Ii.min),It.expandByPoint(Ii.max))}It.getCenter(n);let o=0;for(let r=0,s=e.count;r<s;r++)xt.fromBufferAttribute(e,r),o=Math.max(o,n.distanceToSquared(xt));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)xt.fromBufferAttribute(a,c),l&&(li.fromBufferAttribute(e,c),xt.add(li)),o=Math.max(o,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,o=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new N,l[C]=new N;const c=new N,d=new N,u=new N,f=new Ue,m=new Ue,_=new Ue,g=new N,p=new N;function h(C,M,x){c.fromBufferAttribute(n,C),d.fromBufferAttribute(n,M),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,C),m.fromBufferAttribute(r,M),_.fromBufferAttribute(r,x),d.sub(c),u.sub(c),m.sub(f),_.sub(f);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(P),p.copy(u).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(P),a[C].add(g),a[M].add(g),a[x].add(g),l[C].add(p),l[M].add(p),l[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,M=y.length;C<M;++C){const x=y[C],P=x.start,D=x.count;for(let U=P,O=P+D;U<O;U+=3)h(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const S=new N,v=new N,A=new N,w=new N;function T(C){A.fromBufferAttribute(o,C),w.copy(A);const M=a[C];S.copy(M),S.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(w,M);const P=v.dot(l[C])<0?-1:1;s.setXYZW(C,S.x,S.y,S.z,P)}for(let C=0,M=y.length;C<M;++C){const x=y[C],P=x.start,D=x.count;for(let U=P,O=P+D;U<O;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const o=new N,r=new N,s=new N,a=new N,l=new N,c=new N,d=new N,u=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);o.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),d.subVectors(s,r),u.subVectors(o,r),d.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(d),l.add(d),c.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)o.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),d.subVectors(s,r),u.subVectors(o,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,f=new c.constructor(l.length*d);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*d;for(let h=0;h<d;h++)f[_++]=c[m++]}return new $t(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,o=this.attributes;for(const a in o){const l=o[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){const f=c[d],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const o={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];d.push(m.toJSON(e.data))}d.length>0&&(o[l]=d,r=!0)}r&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const o=e.attributes;for(const c in o){const d=o[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let f=0,m=u.length;f<m;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qs=new dt,Fn=new No,io=new Vi,ea=new N,oo=new N,ro=new N,so=new N,sr=new N,ao=new N,ta=new N,lo=new N;class V extends mt{constructor(e=new yt,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=o.length;r<s;r++){const a=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,o=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(o,e);const a=this.morphTargetInfluences;if(r&&a){ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],u=r[l];d!==0&&(sr.fromBufferAttribute(u,e),s?ao.addScaledVector(sr,d):ao.addScaledVector(sr.sub(t),d))}t.add(ao)}return t}raycast(e,t){const n=this.geometry,o=this.material,r=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),Fn.copy(e.ray).recast(e.near),!(io.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(io,ea)===null||Fn.origin.distanceToSquared(ea)>(e.far-e.near)**2))&&(Qs.copy(r).invert(),Fn.copy(e.ray).applyMatrix4(Qs),!(n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fn)))}_computeIntersections(e,t,n){let o;const r=this.geometry,s=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,g=f.length;_<g;_++){const p=f[_],h=s[p.materialIndex],y=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let v=y,A=S;v<A;v+=3){const w=a.getX(v),T=a.getX(v+1),C=a.getX(v+2);o=co(this,h,e,n,c,d,u,w,T,C),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const y=a.getX(p),S=a.getX(p+1),v=a.getX(p+2);o=co(this,s,e,n,c,d,u,y,S,v),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,g=f.length;_<g;_++){const p=f[_],h=s[p.materialIndex],y=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=y,A=S;v<A;v+=3){const w=v,T=v+1,C=v+2;o=co(this,h,e,n,c,d,u,w,T,C),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const y=p,S=p+1,v=p+2;o=co(this,s,e,n,c,d,u,y,S,v),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Zc(i,e,t,n,o,r,s,a){let l;if(e.side===Pt?l=n.intersectTriangle(s,r,o,!0,a):l=n.intersectTriangle(o,r,s,e.side===Dn,a),l===null)return null;lo.copy(a),lo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(lo);return c<t.near||c>t.far?null:{distance:c,point:lo.clone(),object:i}}function co(i,e,t,n,o,r,s,a,l,c){i.getVertexPosition(a,oo),i.getVertexPosition(l,ro),i.getVertexPosition(c,so);const d=Zc(i,e,t,n,oo,ro,so,ta);if(d){const u=new N;jt.getBarycoord(ta,oo,ro,so,u),o&&(d.uv=jt.getInterpolatedAttribute(o,a,l,c,u,new Ue)),r&&(d.uv1=jt.getInterpolatedAttribute(r,a,l,c,u,new Ue)),s&&(d.normal=jt.getInterpolatedAttribute(s,a,l,c,u,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};jt.getNormal(oo,ro,so,f.normal),d.face=f,d.barycoord=u}return d}class se extends yt{constructor(e=1,t=1,n=1,o=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:o,heightSegments:r,depthSegments:s};const a=this;o=Math.floor(o),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],d=[],u=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,s,r,0),_("z","y","x",1,-1,n,t,-e,s,r,1),_("x","z","y",1,1,e,n,t,o,s,2),_("x","z","y",1,-1,e,n,-t,o,s,3),_("x","y","z",1,-1,e,t,n,o,r,4),_("x","y","z",-1,-1,e,t,-n,o,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(u,2));function _(g,p,h,y,S,v,A,w,T,C,M){const x=v/T,P=A/C,D=v/2,U=A/2,O=w/2,X=T+1,W=C+1;let G=0,L=0;const H=new N;for(let Q=0;Q<W;Q++){const ee=Q*P-U;for(let xe=0;xe<X;xe++){const _e=xe*x-D;H[g]=_e*y,H[p]=ee*S,H[h]=O,c.push(H.x,H.y,H.z),H[g]=0,H[p]=0,H[h]=w>0?1:-1,d.push(H.x,H.y,H.z),u.push(xe/T),u.push(1-Q/C),G+=1}}for(let Q=0;Q<C;Q++)for(let ee=0;ee<T;ee++){const xe=f+ee+X*Q,_e=f+ee+X*(Q+1),j=f+(ee+1)+X*(Q+1),$=f+(ee+1)+X*Q;l.push(xe,_e,$),l.push(_e,j,$),L+=6}a.addGroup(m,L,M),m+=L,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new se(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const o=i[t][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=o.clone():Array.isArray(o)?e[t][n]=o.slice():e[t][n]=o}}return e}function Tt(i){const e={};for(let t=0;t<i.length;t++){const n=wi(i[t]);for(const o in n)e[o]=n[o]}return e}function Kc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const $c={clone:wi,merge:Tt};var Jc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Zn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jc,this.fragmentShader=Qc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=Kc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const s=this.uniforms[o].value;s&&s.isTexture?t.uniforms[o]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[o]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[o]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[o]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[o]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[o]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[o]={type:"m4",value:s.toArray()}:t.uniforms[o]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pl extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new N,na=new Ue,ia=new Ue;class zt extends pl{constructor(e=50,t=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zi*2*Math.atan(Math.tan(Oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,na,ia),t.subVectors(ia,na)}setViewOffset(e,t,n,o,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oi*.5*this.fov)/this.zoom,n=2*t,o=this.aspect*n,r=-.5*o;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*o/l,t-=s.offsetY*n/c,o*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+o,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ci=-90,hi=1;class eh extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new zt(ci,hi,e,t);o.layers=this.layers,this.add(o);const r=new zt(ci,hi,e,t);r.layers=this.layers,this.add(r);const s=new zt(ci,hi,e,t);s.layers=this.layers,this.add(s);const a=new zt(ci,hi,e,t);a.layers=this.layers,this.add(a);const l=new zt(ci,hi,e,t);l.layers=this.layers,this.add(l);const c=new zt(ci,hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,o,r,s,a,l]=t;for(const c of t)this.remove(c);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Co)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,o),e.render(t,r),e.setRenderTarget(n,1,o),e.render(t,s),e.setRenderTarget(n,2,o),e.render(t,a),e.setRenderTarget(n,3,o),e.render(t,l),e.setRenderTarget(n,4,o),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,o),e.render(t,d),e.setRenderTarget(u,f,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ml extends At{constructor(e,t,n,o,r,s,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:yi,super(e,t,n,o,r,s,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class th extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},o=[n,n,n,n,n,n];this.texture=new ml(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new se(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:Cn});r.uniforms.tEquirect.value=t;const s=new V(o,r),a=t.minFilter;return t.minFilter===Wn&&(t.minFilter=en),new eh(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,o){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,o);e.setRenderTarget(r)}}const ar=new N,nh=new N,ih=new Ge;class An{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,o){return this.normal.set(e,t,n),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const o=ar.subVectors(n,t).cross(nh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ar),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/o;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ih.getNormalMatrix(e),o=this.coplanarPoint(ar).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new Vi,ho=new N;class ms{constructor(e=new An,t=new An,n=new An,o=new An,r=new An,s=new An){this.planes=[e,t,n,o,r,s]}set(e,t,n,o,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(o),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn){const n=this.planes,o=e.elements,r=o[0],s=o[1],a=o[2],l=o[3],c=o[4],d=o[5],u=o[6],f=o[7],m=o[8],_=o[9],g=o[10],p=o[11],h=o[12],y=o[13],S=o[14],v=o[15];if(n[0].setComponents(l-r,f-c,p-m,v-h).normalize(),n[1].setComponents(l+r,f+c,p+m,v+h).normalize(),n[2].setComponents(l+s,f+d,p+_,v+y).normalize(),n[3].setComponents(l-s,f-d,p-_,v-y).normalize(),n[4].setComponents(l-a,f-u,p-g,v-S).normalize(),t===fn)n[5].setComponents(l+a,f+u,p+g,v+S).normalize();else if(t===Co)n[5].setComponents(a,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(e){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const t=this.planes,n=e.center,o=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const o=t[n];if(ho.x=o.normal.x>0?e.max.x:e.min.x,ho.y=o.normal.y>0?e.max.y:e.min.y,ho.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gl(){let i=null,e=!1,t=null,n=null;function o(r,s){t(r,s),n=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function oh(i){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const d=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,d);else{u.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<u.length;m++){const _=u[f],g=u[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,u[f]=g)}u.length=f+1;for(let m=0,_=u.length;m<_;m++){const g=u[m];i.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:o,remove:r,update:s}}class kt extends yt{constructor(e=1,t=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:o};const r=e/2,s=t/2,a=Math.floor(n),l=Math.floor(o),c=a+1,d=l+1,u=e/a,f=t/l,m=[],_=[],g=[],p=[];for(let h=0;h<d;h++){const y=h*f-s;for(let S=0;S<c;S++){const v=S*u-r;_.push(v,-y,0),g.push(0,0,1),p.push(S/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<a;y++){const S=y+c*h,v=y+c*(h+1),A=y+1+c*(h+1),w=y+1+c*h;m.push(S,v,w),m.push(v,A,w)}this.setIndex(m),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(g,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.width,e.height,e.widthSegments,e.heightSegments)}}var rh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ah=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ch=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ph=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_h=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ch=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ph=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ih=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Oh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$h=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,id=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,od=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ad=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ld=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_d=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Md=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ad=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Id=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$d=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ou=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ru=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,au=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,du=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_u=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Su=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Eu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Au=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ru=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Du=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Iu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ou=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:rh,alphahash_pars_fragment:sh,alphamap_fragment:ah,alphamap_pars_fragment:lh,alphatest_fragment:ch,alphatest_pars_fragment:hh,aomap_fragment:dh,aomap_pars_fragment:uh,batching_pars_vertex:fh,batching_vertex:ph,begin_vertex:mh,beginnormal_vertex:gh,bsdfs:_h,iridescence_fragment:vh,bumpmap_pars_fragment:xh,clipping_planes_fragment:yh,clipping_planes_pars_fragment:Mh,clipping_planes_pars_vertex:Sh,clipping_planes_vertex:bh,color_fragment:wh,color_pars_fragment:Eh,color_pars_vertex:Th,color_vertex:Ah,common:Rh,cube_uv_reflection_fragment:Ch,defaultnormal_vertex:Ph,displacementmap_pars_vertex:Dh,displacementmap_vertex:Lh,emissivemap_fragment:Ih,emissivemap_pars_fragment:Uh,colorspace_fragment:Nh,colorspace_pars_fragment:Fh,envmap_fragment:Oh,envmap_common_pars_fragment:kh,envmap_pars_fragment:Bh,envmap_pars_vertex:zh,envmap_physical_pars_fragment:$h,envmap_vertex:Hh,fog_vertex:Gh,fog_pars_vertex:Vh,fog_fragment:Wh,fog_pars_fragment:Xh,gradientmap_pars_fragment:qh,lightmap_pars_fragment:Yh,lights_lambert_fragment:jh,lights_lambert_pars_fragment:Zh,lights_pars_begin:Kh,lights_toon_fragment:Jh,lights_toon_pars_fragment:Qh,lights_phong_fragment:ed,lights_phong_pars_fragment:td,lights_physical_fragment:nd,lights_physical_pars_fragment:id,lights_fragment_begin:od,lights_fragment_maps:rd,lights_fragment_end:sd,logdepthbuf_fragment:ad,logdepthbuf_pars_fragment:ld,logdepthbuf_pars_vertex:cd,logdepthbuf_vertex:hd,map_fragment:dd,map_pars_fragment:ud,map_particle_fragment:fd,map_particle_pars_fragment:pd,metalnessmap_fragment:md,metalnessmap_pars_fragment:gd,morphinstance_vertex:_d,morphcolor_vertex:vd,morphnormal_vertex:xd,morphtarget_pars_vertex:yd,morphtarget_vertex:Md,normal_fragment_begin:Sd,normal_fragment_maps:bd,normal_pars_fragment:wd,normal_pars_vertex:Ed,normal_vertex:Td,normalmap_pars_fragment:Ad,clearcoat_normal_fragment_begin:Rd,clearcoat_normal_fragment_maps:Cd,clearcoat_pars_fragment:Pd,iridescence_pars_fragment:Dd,opaque_fragment:Ld,packing:Id,premultiplied_alpha_fragment:Ud,project_vertex:Nd,dithering_fragment:Fd,dithering_pars_fragment:Od,roughnessmap_fragment:kd,roughnessmap_pars_fragment:Bd,shadowmap_pars_fragment:zd,shadowmap_pars_vertex:Hd,shadowmap_vertex:Gd,shadowmask_pars_fragment:Vd,skinbase_vertex:Wd,skinning_pars_vertex:Xd,skinning_vertex:qd,skinnormal_vertex:Yd,specularmap_fragment:jd,specularmap_pars_fragment:Zd,tonemapping_fragment:Kd,tonemapping_pars_fragment:$d,transmission_fragment:Jd,transmission_pars_fragment:Qd,uv_pars_fragment:eu,uv_pars_vertex:tu,uv_vertex:nu,worldpos_vertex:iu,background_vert:ou,background_frag:ru,backgroundCube_vert:su,backgroundCube_frag:au,cube_vert:lu,cube_frag:cu,depth_vert:hu,depth_frag:du,distanceRGBA_vert:uu,distanceRGBA_frag:fu,equirect_vert:pu,equirect_frag:mu,linedashed_vert:gu,linedashed_frag:_u,meshbasic_vert:vu,meshbasic_frag:xu,meshlambert_vert:yu,meshlambert_frag:Mu,meshmatcap_vert:Su,meshmatcap_frag:bu,meshnormal_vert:wu,meshnormal_frag:Eu,meshphong_vert:Tu,meshphong_frag:Au,meshphysical_vert:Ru,meshphysical_frag:Cu,meshtoon_vert:Pu,meshtoon_frag:Du,points_vert:Lu,points_frag:Iu,shadow_vert:Uu,shadow_frag:Nu,sprite_vert:Fu,sprite_frag:Ou},de={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Qt={basic:{uniforms:Tt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Tt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new qe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Tt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Tt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Tt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new qe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Tt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Tt([de.points,de.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Tt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Tt([de.common,de.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Tt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Tt([de.sprite,de.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Tt([de.common,de.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Tt([de.lights,de.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Qt.physical={uniforms:Tt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const uo={r:0,b:0,g:0},kn=new tn,ku=new dt;function Bu(i,e,t,n,o,r,s){const a=new qe(0);let l=r===!0?0:1,c,d,u=null,f=0,m=null;function _(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function g(y){let S=!1;const v=_(y);v===null?h(a,l):v&&v.isColor&&(h(v,1),S=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,S){const v=_(S);v&&(v.isCubeTexture||v.mapping===Io)?(d===void 0&&(d=new V(new se(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:wi(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(d)),kn.copy(S.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ku.makeRotationFromEuler(kn)),d.material.toneMapped=$e.getTransfer(v.colorSpace)!==ot,(u!==v||f!==v.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,u=v,f=v.version,m=i.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new V(new kt(2,2),new Ln({name:"BackgroundMaterial",uniforms:wi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=$e.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,m=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,S){y.getRGB(uo,fl(i)),n.buffers.color.setClear(uo.r,uo.g,uo.b,S,s)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(a,l)},render:g,addToRenderList:p}}function zu(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},o=f(null);let r=o,s=!1;function a(x,P,D,U,O){let X=!1;const W=u(U,D,P);r!==W&&(r=W,c(r.object)),X=m(x,U,D,O),X&&_(x,U,D,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(X||s)&&(s=!1,v(x,P,D,U),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function d(x){return i.deleteVertexArray(x)}function u(x,P,D){const U=D.wireframe===!0;let O=n[x.id];O===void 0&&(O={},n[x.id]=O);let X=O[P.id];X===void 0&&(X={},O[P.id]=X);let W=X[U];return W===void 0&&(W=f(l()),X[U]=W),W}function f(x){const P=[],D=[],U=[];for(let O=0;O<t;O++)P[O]=0,D[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:U,object:x,attributes:{},index:null}}function m(x,P,D,U){const O=r.attributes,X=P.attributes;let W=0;const G=D.getAttributes();for(const L in G)if(G[L].location>=0){const Q=O[L];let ee=X[L];if(ee===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor)),Q===void 0||Q.attribute!==ee||ee&&Q.data!==ee.data)return!0;W++}return r.attributesNum!==W||r.index!==U}function _(x,P,D,U){const O={},X=P.attributes;let W=0;const G=D.getAttributes();for(const L in G)if(G[L].location>=0){let Q=X[L];Q===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor));const ee={};ee.attribute=Q,Q&&Q.data&&(ee.data=Q.data),O[L]=ee,W++}r.attributes=O,r.attributesNum=W,r.index=U}function g(){const x=r.newAttributes;for(let P=0,D=x.length;P<D;P++)x[P]=0}function p(x){h(x,0)}function h(x,P){const D=r.newAttributes,U=r.enabledAttributes,O=r.attributeDivisors;D[x]=1,U[x]===0&&(i.enableVertexAttribArray(x),U[x]=1),O[x]!==P&&(i.vertexAttribDivisor(x,P),O[x]=P)}function y(){const x=r.newAttributes,P=r.enabledAttributes;for(let D=0,U=P.length;D<U;D++)P[D]!==x[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function S(x,P,D,U,O,X,W){W===!0?i.vertexAttribIPointer(x,P,D,O,X):i.vertexAttribPointer(x,P,D,U,O,X)}function v(x,P,D,U){g();const O=U.attributes,X=D.getAttributes(),W=P.defaultAttributeValues;for(const G in X){const L=X[G];if(L.location>=0){let H=O[G];if(H===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(H=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(H=x.instanceColor)),H!==void 0){const Q=H.normalized,ee=H.itemSize,xe=e.get(H);if(xe===void 0)continue;const _e=xe.buffer,j=xe.type,$=xe.bytesPerElement,z=j===i.INT||j===i.UNSIGNED_INT||H.gpuType===ls;if(H.isInterleavedBufferAttribute){const Y=H.data,ne=Y.stride,Se=H.offset;if(Y.isInstancedInterleavedBuffer){for(let De=0;De<L.locationSize;De++)h(L.location+De,Y.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let De=0;De<L.locationSize;De++)p(L.location+De);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let De=0;De<L.locationSize;De++)S(L.location+De,ee/L.locationSize,j,Q,ne*$,(Se+ee/L.locationSize*De)*$,z)}else{if(H.isInstancedBufferAttribute){for(let Y=0;Y<L.locationSize;Y++)h(L.location+Y,H.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Y=0;Y<L.locationSize;Y++)p(L.location+Y);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Y=0;Y<L.locationSize;Y++)S(L.location+Y,ee/L.locationSize,j,Q,ee*$,ee/L.locationSize*Y*$,z)}}else if(W!==void 0){const Q=W[G];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(L.location,Q);break;case 3:i.vertexAttrib3fv(L.location,Q);break;case 4:i.vertexAttrib4fv(L.location,Q);break;default:i.vertexAttrib1fv(L.location,Q)}}}}y()}function A(){C();for(const x in n){const P=n[x];for(const D in P){const U=P[D];for(const O in U)d(U[O].object),delete U[O];delete P[D]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const D in P){const U=P[D];for(const O in U)d(U[O].object),delete U[O];delete P[D]}delete n[x.id]}function T(x){for(const P in n){const D=n[P];if(D[x.id]===void 0)continue;const U=D[x.id];for(const O in U)d(U[O].object),delete U[O];delete D[x.id]}}function C(){M(),s=!0,r!==o&&(r=o,c(r.object))}function M(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function Hu(i,e,t){let n;function o(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function s(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=d[_];t.update(m,n,1)}function l(c,d,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)s(c[_],d[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=d[g]*f[g];t.update(_,n,1)}}this.setMode=o,this.render=r,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Gu(i,e,t,n){let o;function r(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function s(T){return!(T!==Zt&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===Hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==un&&!C)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function Vu(i){const e=this;let t=null,n=0,o=!1,r=!1;const s=new An,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||o;return o=f,n=u.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,m){const _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,h=i.get(u);if(!o||_===null||_.length===0||r&&!p)r?d(null):c();else{const y=r?0:n,S=y*4;let v=h.clippingState||null;l.value=v,v=d(_,f,S,m);for(let A=0;A!==S;++A)v[A]=t[A];h.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,m,_){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const h=m+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<h)&&(p=new Float32Array(h));for(let S=0,v=m;S!==g;++S,v+=4)s.copy(u[S]).applyMatrix4(y,a),s.normal.toArray(p,v),p[v+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Wu(i){let e=new WeakMap;function t(s,a){return a===Cr?s.mapping=yi:a===Pr&&(s.mapping=Mi),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===Cr||a===Pr)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new th(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",o),t(c.texture,s.mapping)}else return null}}return s}function o(s){const a=s.target;a.removeEventListener("dispose",o);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class _l extends pl{constructor(e=-1,t=1,n=1,o=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=o,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,o,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let r=n-e,s=n+e,a=o+t,l=o-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pi=4,oa=[.125,.215,.35,.446,.526,.582],Gn=20,lr=new _l,ra=new qe;let cr=null,hr=0,dr=0,ur=!1;const zn=(1+Math.sqrt(5))/2,di=1/zn,sa=[new N(-zn,di,0),new N(zn,di,0),new N(-di,0,zn),new N(di,0,zn),new N(0,zn,-di),new N(0,zn,di),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class aa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,o=100){cr=this._renderer.getRenderTarget(),hr=this._renderer.getActiveCubeFace(),dr=this._renderer.getActiveMipmapLevel(),ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,o,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ha(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ca(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cr,hr,dr),this._renderer.xr.enabled=ur,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yi||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cr=this._renderer.getRenderTarget(),hr=this._renderer.getActiveCubeFace(),dr=this._renderer.getActiveMipmapLevel(),ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Hi,format:Zt,colorSpace:Ei,depthBuffer:!1},o=la(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=la(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xu(r)),this._blurMaterial=qu(r,e,t)}return o}_compileMaterial(e){const t=new V(this._lodPlanes[0],e);this._renderer.compile(t,lr)}_sceneToCubeUV(e,t,n,o){const a=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(ra),d.toneMapping=Pn,d.autoClear=!1;const m=new nn({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),_=new V(new se,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(ra),g=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):y===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const S=this._cubeSize;fo(o,y*S,h>2?S:0,S,S),d.setRenderTarget(o),g&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,o=e.mapping===yi||e.mapping===Mi;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ha()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ca());const r=o?this._cubemapMaterial:this._equirectMaterial,s=new V(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;fo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,lr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let r=1;r<o;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sa[(o-r-1)%sa.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,o,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,o,"latitudinal",r),this._halfBlur(s,e,n,n,o,"longitudinal",r)}_halfBlur(e,t,n,o,r,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new V(this._lodPlanes[o],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Gn-1),g=r/_,p=isFinite(r)?1+Math.floor(d*g):Gn;p>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gn}`);const h=[];let y=0;for(let T=0;T<Gn;++T){const C=T/g,M=Math.exp(-C*C/2);h.push(M),T===0?y+=M:T<p&&(y+=2*M)}for(let T=0;T<h.length;T++)h[T]=h[T]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-n;const v=this._sizeLods[o],A=3*v*(o>S-pi?o-S+pi:0),w=4*(this._cubeSize-v);fo(t,A,w,3*v,2*v),l.setRenderTarget(t),l.render(u,lr)}}function Xu(i){const e=[],t=[],n=[];let o=i;const r=i-pi+1+oa.length;for(let s=0;s<r;s++){const a=Math.pow(2,o);t.push(a);let l=1/a;s>i-pi?l=oa[s-i+pi-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,_=6,g=3,p=2,h=1,y=new Float32Array(g*_*m),S=new Float32Array(p*_*m),v=new Float32Array(h*_*m);for(let w=0;w<m;w++){const T=w%3*2/3-1,C=w>2?0:-1,M=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];y.set(M,g*_*w),S.set(f,p*_*w);const x=[w,w,w,w,w,w];v.set(x,h*_*w)}const A=new yt;A.setAttribute("position",new $t(y,g)),A.setAttribute("uv",new $t(S,p)),A.setAttribute("faceIndex",new $t(v,h)),e.push(A),o>pi&&o--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function la(i,e,t){const n=new qn(i,e,t);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(i,e,t,n,o){i.viewport.set(e,t,n,o),i.scissor.set(e,t,n,o)}function qu(i,e,t){const n=new Float32Array(Gn),o=new N(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function ca(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function ha(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function gs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yu(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Cr||l===Pr,d=l===yi||l===Mi;if(c||d){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new aa(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&o(m)?(t===null&&(t=new aa(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function o(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function ju(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let o;switch(n){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(n)}return e[n]=o,o}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const o=t(n);return o===null&&Ni("THREE.WebGLRenderer: "+n+" extension not supported."),o}}}function Zu(i,e,t,n){const o={},r=new WeakMap;function s(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,h=g.length;p<h;p++)e.remove(g[p])}f.removeEventListener("dispose",s),delete o[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return o[f.id]===!0||(f.addEventListener("dispose",s),o[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)e.update(f[_],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,h=g.length;p<h;p++)e.update(g[p],i.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,_=u.attributes.position;let g=0;if(m!==null){const y=m.array;g=m.version;for(let S=0,v=y.length;S<v;S+=3){const A=y[S+0],w=y[S+1],T=y[S+2];f.push(A,w,w,T,T,A)}}else if(_!==void 0){const y=_.array;g=_.version;for(let S=0,v=y.length/3-1;S<v;S+=3){const A=S+0,w=S+1,T=S+2;f.push(A,w,w,T,T,A)}}else return;const p=new(sl(f)?ul:dl)(f,1);p.version=g;const h=r.get(u);h&&e.remove(h),r.set(u,p)}function d(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function Ku(i,e,t){let n;function o(f){n=f}let r,s;function a(f){r=f.type,s=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*s),t.update(m,n,1)}function c(f,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,f*s,_),t.update(m,n,_))}function d(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,_);let p=0;for(let h=0;h<_;h++)p+=m[h];t.update(p,n,1)}function u(f,m,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)c(f[h]/s,m[h],g[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,g,0,_);let h=0;for(let y=0;y<_;y++)h+=m[y]*g[y];t.update(h,n,1)}}this.setMode=o,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function $u(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:n}}function Ju(i,e,t){const n=new WeakMap,o=new ft;function r(s,a,l){const c=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let v=a.attributes.position.count*S,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const w=new Float32Array(v*A*4*u),T=new ll(w,v,A,u);T.type=un,T.needsUpdate=!0;const C=S*4;for(let x=0;x<u;x++){const P=p[x],D=h[x],U=y[x],O=v*A*4*x;for(let X=0;X<P.count;X++){const W=X*C;m===!0&&(o.fromBufferAttribute(P,X),w[O+W+0]=o.x,w[O+W+1]=o.y,w[O+W+2]=o.z,w[O+W+3]=0),_===!0&&(o.fromBufferAttribute(D,X),w[O+W+4]=o.x,w[O+W+5]=o.y,w[O+W+6]=o.z,w[O+W+7]=0),g===!0&&(o.fromBufferAttribute(U,X),w[O+W+8]=o.x,w[O+W+9]=o.y,w[O+W+10]=o.z,w[O+W+11]=U.itemSize===4?o.w:1)}}f={count:u,texture:T,size:new Ue(v,A)},n.set(a,f),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Qu(i,e,t,n){let o=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(o.get(u)!==c&&(e.update(u),o.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),o.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),o.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;o.get(f)!==c&&(f.update(),o.set(f,c))}return u}function s(){o=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}class vl extends At{constructor(e,t,n,o,r,s,a,l,c,d=_i){if(d!==_i&&d!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===_i&&(n=Xn),n===void 0&&d===bi&&(n=Si),super(null,o,r,s,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xl=new At,da=new vl(1,1),yl=new ll,Ml=new Bc,Sl=new ml,ua=[],fa=[],pa=new Float32Array(16),ma=new Float32Array(9),ga=new Float32Array(4);function Ai(i,e,t){const n=i[0];if(n<=0||n>0)return i;const o=e*t;let r=ua[o];if(r===void 0&&(r=new Float32Array(o),ua[o]=r),e!==0){n.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(r,a)}return r}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fo(i,e){let t=fa[e];t===void 0&&(t=new Int32Array(e),fa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ef(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function rf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;ga.set(n),i.uniformMatrix2fv(this.addr,!1,ga),vt(t,n)}}function sf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;ma.set(n),i.uniformMatrix3fv(this.addr,!1,ma),vt(t,n)}}function af(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;pa.set(n),i.uniformMatrix4fv(this.addr,!1,pa),vt(t,n)}}function lf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function uf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function gf(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o);let r;this.type===i.SAMPLER_2D_SHADOW?(da.compareFunction=rl,r=da):r=xl,t.setTexture2D(e||r,o)}function _f(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture3D(e||Ml,o)}function vf(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTextureCube(e||Sl,o)}function xf(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture2DArray(e||yl,o)}function yf(i){switch(i){case 5126:return ef;case 35664:return tf;case 35665:return nf;case 35666:return of;case 35674:return rf;case 35675:return sf;case 35676:return af;case 5124:case 35670:return lf;case 35667:case 35671:return cf;case 35668:case 35672:return hf;case 35669:case 35673:return df;case 5125:return uf;case 36294:return ff;case 36295:return pf;case 36296:return mf;case 35678:case 36198:case 36298:case 36306:case 35682:return gf;case 35679:case 36299:case 36307:return _f;case 35680:case 36300:case 36308:case 36293:return vf;case 36289:case 36303:case 36311:case 36292:return xf}}function Mf(i,e){i.uniform1fv(this.addr,e)}function Sf(i,e){const t=Ai(e,this.size,2);i.uniform2fv(this.addr,t)}function bf(i,e){const t=Ai(e,this.size,3);i.uniform3fv(this.addr,t)}function wf(i,e){const t=Ai(e,this.size,4);i.uniform4fv(this.addr,t)}function Ef(i,e){const t=Ai(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Tf(i,e){const t=Ai(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Af(i,e){const t=Ai(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Rf(i,e){i.uniform1iv(this.addr,e)}function Cf(i,e){i.uniform2iv(this.addr,e)}function Pf(i,e){i.uniform3iv(this.addr,e)}function Df(i,e){i.uniform4iv(this.addr,e)}function Lf(i,e){i.uniform1uiv(this.addr,e)}function If(i,e){i.uniform2uiv(this.addr,e)}function Uf(i,e){i.uniform3uiv(this.addr,e)}function Nf(i,e){i.uniform4uiv(this.addr,e)}function Ff(i,e,t){const n=this.cache,o=e.length,r=Fo(t,o);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let s=0;s!==o;++s)t.setTexture2D(e[s]||xl,r[s])}function Of(i,e,t){const n=this.cache,o=e.length,r=Fo(t,o);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let s=0;s!==o;++s)t.setTexture3D(e[s]||Ml,r[s])}function kf(i,e,t){const n=this.cache,o=e.length,r=Fo(t,o);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let s=0;s!==o;++s)t.setTextureCube(e[s]||Sl,r[s])}function Bf(i,e,t){const n=this.cache,o=e.length,r=Fo(t,o);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let s=0;s!==o;++s)t.setTexture2DArray(e[s]||yl,r[s])}function zf(i){switch(i){case 5126:return Mf;case 35664:return Sf;case 35665:return bf;case 35666:return wf;case 35674:return Ef;case 35675:return Tf;case 35676:return Af;case 5124:case 35670:return Rf;case 35667:case 35671:return Cf;case 35668:case 35672:return Pf;case 35669:case 35673:return Df;case 5125:return Lf;case 36294:return If;case 36295:return Uf;case 36296:return Nf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ff;case 35679:case 36299:case 36307:return Of;case 35680:case 36300:case 36308:case 36293:return kf;case 36289:case 36303:case 36311:case 36292:return Bf}}class Hf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yf(t.type)}}class Gf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zf(t.type)}}class Vf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const o=this.seq;for(let r=0,s=o.length;r!==s;++r){const a=o[r];a.setValue(e,t[a.id],n)}}}const fr=/(\w+)(\])?(\[|\.)?/g;function _a(i,e){i.seq.push(e),i.map[e.id]=e}function Wf(i,e,t){const n=i.name,o=n.length;for(fr.lastIndex=0;;){const r=fr.exec(n),s=fr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===o){_a(t,c===void 0?new Hf(a,i,e):new Gf(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Vf(a),_a(t,u)),t=u}}}class Ro{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const r=e.getActiveUniform(t,o),s=e.getUniformLocation(t,r.name);Wf(r,s,this)}}setValue(e,t,n,o){const r=this.map[t];r!==void 0&&r.setValue(e,n,o)}setOptional(e,t,n){const o=t[n];o!==void 0&&this.setValue(e,n,o)}static upload(e,t,n,o){for(let r=0,s=t.length;r!==s;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,o)}}static seqWithValue(e,t){const n=[];for(let o=0,r=e.length;o!==r;++o){const s=e[o];s.id in t&&n.push(s)}return n}}function va(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Xf=37297;let qf=0;function Yf(i,e){const t=i.split(`
`),n=[],o=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=o;s<r;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}const xa=new Ge;function jf(i){$e._getMatrix(xa,$e.workingColorSpace,i);const e=`mat3( ${xa.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case Uo:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ya(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),o=i.getShaderInfoLog(e).trim();if(n&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+o+`

`+Yf(i.getShaderSource(e),s)}else return o}function Zf(i,e){const t=jf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Kf(i,e){let t;switch(e){case Jl:t="Linear";break;case Ql:t="Reinhard";break;case ec:t="Cineon";break;case qa:t="ACESFilmic";break;case nc:t="AgX";break;case ic:t="Neutral";break;case tc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const po=new N;function $f(){$e.getLuminanceCoefficients(po);const i=po.x.toFixed(4),e=po.y.toFixed(4),t=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fi).join(`
`)}function Qf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ep(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){const r=i.getActiveAttrib(e,o),s=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[s]={type:r.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function Fi(i){return i!==""}function Ma(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tp=/^[ \t]*#include +<([\w\d./]+)>/gm;function os(i){return i.replace(tp,ip)}const np=new Map;function ip(i,e){let t=We[e];if(t===void 0){const n=np.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return os(t)}const op=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ba(i){return i.replace(op,rp)}function rp(i,e,t,n){let o="";for(let r=parseInt(e);r<parseInt(t);r++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return o}function wa(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Va?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wa?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(e="SHADOWMAP_TYPE_VSM"),e}function ap(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yi:case Mi:e="ENVMAP_TYPE_CUBE";break;case Io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Mi:e="ENVMAP_MODE_REFRACTION";break}return e}function cp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xa:e="ENVMAP_BLENDING_MULTIPLY";break;case Kl:e="ENVMAP_BLENDING_MIX";break;case $l:e="ENVMAP_BLENDING_ADD";break}return e}function hp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function dp(i,e,t,n){const o=i.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=sp(t),c=ap(t),d=lp(t),u=cp(t),f=hp(t),m=Jf(t),_=Qf(r),g=o.createProgram();let p,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fi).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fi).join(`
`),h.length>0&&(h+=`
`)):(p=[wa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fi).join(`
`),h=[wa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?We.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Kf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Zf("linearToOutputTexel",t.outputColorSpace),$f(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fi).join(`
`)),s=os(s),s=Ma(s,t),s=Sa(s,t),a=os(a),a=Ma(a,t),a=Sa(a,t),s=ba(s),a=ba(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Fs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=y+p+s,v=y+h+a,A=va(o,o.VERTEX_SHADER,S),w=va(o,o.FRAGMENT_SHADER,v);o.attachShader(g,A),o.attachShader(g,w),t.index0AttributeName!==void 0?o.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(g,0,"position"),o.linkProgram(g);function T(P){if(i.debug.checkShaderErrors){const D=o.getProgramInfoLog(g).trim(),U=o.getShaderInfoLog(A).trim(),O=o.getShaderInfoLog(w).trim();let X=!0,W=!0;if(o.getProgramParameter(g,o.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,g,A,w);else{const G=ya(o,A,"vertex"),L=ya(o,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(g,o.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+G+`
`+L)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(U===""||O==="")&&(W=!1);W&&(P.diagnostics={runnable:X,programLog:D,vertexShader:{log:U,prefix:p},fragmentShader:{log:O,prefix:h}})}o.deleteShader(A),o.deleteShader(w),C=new Ro(o,g),M=ep(o,g)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=o.getProgramParameter(g,Xf)),x},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qf++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=w,this}let up=0;class fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,o=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(o)===!1&&(s.add(o),o.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new pp(e),t.set(e,n)),n}}class pp{constructor(e){this.id=up++,this.code=e,this.usedTimes=0}}function mp(i,e,t,n,o,r,s){const a=new cl,l=new fp,c=new Set,d=[],u=o.logarithmicDepthBuffer,f=o.vertexTextures;let m=o.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,x,P,D,U){const O=D.fog,X=U.geometry,W=M.isMeshStandardMaterial?D.environment:null,G=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),L=G&&G.mapping===Io?G.image.height:null,H=_[M.type];M.precision!==null&&(m=o.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const Q=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ee=Q!==void 0?Q.length:0;let xe=0;X.morphAttributes.position!==void 0&&(xe=1),X.morphAttributes.normal!==void 0&&(xe=2),X.morphAttributes.color!==void 0&&(xe=3);let _e,j,$,z;if(H){const it=Qt[H];_e=it.vertexShader,j=it.fragmentShader}else _e=M.vertexShader,j=M.fragmentShader,l.update(M),$=l.getVertexShaderID(M),z=l.getFragmentShaderID(M);const Y=i.getRenderTarget(),ne=i.state.buffers.depth.getReversed(),Se=U.isInstancedMesh===!0,De=U.isBatchedMesh===!0,Le=!!M.map,Ae=!!M.matcap,nt=!!G,I=!!M.aoMap,Fe=!!M.lightMap,Oe=!!M.bumpMap,Be=!!M.normalMap,be=!!M.displacementMap,Qe=!!M.emissiveMap,Re=!!M.metalnessMap,R=!!M.roughnessMap,b=M.anisotropy>0,q=M.clearcoat>0,ie=M.dispersion>0,re=M.iridescence>0,te=M.sheen>0,Ce=M.transmission>0,fe=b&&!!M.anisotropyMap,ve=q&&!!M.clearcoatMap,Ke=q&&!!M.clearcoatNormalMap,le=q&&!!M.clearcoatRoughnessMap,ye=re&&!!M.iridescenceMap,Ie=re&&!!M.iridescenceThicknessMap,Ne=te&&!!M.sheenColorMap,Me=te&&!!M.sheenRoughnessMap,je=!!M.specularMap,Ve=!!M.specularColorMap,at=!!M.specularIntensityMap,F=Ce&&!!M.transmissionMap,ue=Ce&&!!M.thicknessMap,J=!!M.gradientMap,oe=!!M.alphaMap,ge=M.alphaTest>0,pe=!!M.alphaHash,ze=!!M.extensions;let ut=Pn;M.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ut=i.toneMapping);const Mt={shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:_e,fragmentShader:j,defines:M.defines,customVertexShaderID:$,customFragmentShaderID:z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:De,batchingColor:De&&U._colorsTexture!==null,instancing:Se,instancingColor:Se&&U.instanceColor!==null,instancingMorph:Se&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ei,alphaToCoverage:!!M.alphaToCoverage,map:Le,matcap:Ae,envMap:nt,envMapMode:nt&&G.mapping,envMapCubeUVHeight:L,aoMap:I,lightMap:Fe,bumpMap:Oe,normalMap:Be,displacementMap:f&&be,emissiveMap:Qe,normalMapObjectSpace:Be&&M.normalMapType===ac,normalMapTangentSpace:Be&&M.normalMapType===ol,metalnessMap:Re,roughnessMap:R,anisotropy:b,anisotropyMap:fe,clearcoat:q,clearcoatMap:ve,clearcoatNormalMap:Ke,clearcoatRoughnessMap:le,dispersion:ie,iridescence:re,iridescenceMap:ye,iridescenceThicknessMap:Ie,sheen:te,sheenColorMap:Ne,sheenRoughnessMap:Me,specularMap:je,specularColorMap:Ve,specularIntensityMap:at,transmission:Ce,transmissionMap:F,thicknessMap:ue,gradientMap:J,opaque:M.transparent===!1&&M.blending===gi&&M.alphaToCoverage===!1,alphaMap:oe,alphaTest:ge,alphaHash:pe,combine:M.combine,mapUv:Le&&g(M.map.channel),aoMapUv:I&&g(M.aoMap.channel),lightMapUv:Fe&&g(M.lightMap.channel),bumpMapUv:Oe&&g(M.bumpMap.channel),normalMapUv:Be&&g(M.normalMap.channel),displacementMapUv:be&&g(M.displacementMap.channel),emissiveMapUv:Qe&&g(M.emissiveMap.channel),metalnessMapUv:Re&&g(M.metalnessMap.channel),roughnessMapUv:R&&g(M.roughnessMap.channel),anisotropyMapUv:fe&&g(M.anisotropyMap.channel),clearcoatMapUv:ve&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(M.sheenRoughnessMap.channel),specularMapUv:je&&g(M.specularMap.channel),specularColorMapUv:Ve&&g(M.specularColorMap.channel),specularIntensityMapUv:at&&g(M.specularIntensityMap.channel),transmissionMapUv:F&&g(M.transmissionMap.channel),thicknessMapUv:ue&&g(M.thicknessMap.channel),alphaMapUv:oe&&g(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Be||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(Le||oe),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ne,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:xe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ut,decodeVideoTexture:Le&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===ot,decodeVideoTextureEmissive:Qe&&M.emissiveMap.isVideoTexture===!0&&$e.getTransfer(M.emissiveMap.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ht,flipSided:M.side===Pt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ze&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&M.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function h(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)x.push(P),x.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(y(x,M),S(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function y(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function S(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const x=_[M.type];let P;if(x){const D=Qt[x];P=$c.clone(D.uniforms)}else P=M.uniforms;return P}function A(M,x){let P;for(let D=0,U=d.length;D<U;D++){const O=d[D];if(O.cacheKey===x){P=O,++P.usedTimes;break}}return P===void 0&&(P=new dp(i,x,M,r),d.push(P)),P}function w(M){if(--M.usedTimes===0){const x=d.indexOf(M);d[x]=d[d.length-1],d.pop(),M.destroy()}}function T(M){l.remove(M)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:T,programs:d,dispose:C}}function gp(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function o(s,a,l){i.get(s)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:o,dispose:r}}function _p(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ea(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ta(){const i=[];let e=0;const t=[],n=[],o=[];function r(){e=0,t.length=0,n.length=0,o.length=0}function s(u,f,m,_,g,p){let h=i[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},i[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=m,h.groupOrder=_,h.renderOrder=u.renderOrder,h.z=g,h.group=p),e++,h}function a(u,f,m,_,g,p){const h=s(u,f,m,_,g,p);m.transmission>0?n.push(h):m.transparent===!0?o.push(h):t.push(h)}function l(u,f,m,_,g,p){const h=s(u,f,m,_,g,p);m.transmission>0?n.unshift(h):m.transparent===!0?o.unshift(h):t.unshift(h)}function c(u,f){t.length>1&&t.sort(u||_p),n.length>1&&n.sort(f||Ea),o.length>1&&o.sort(f||Ea)}function d(){for(let u=e,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:o,init:r,push:a,unshift:l,finish:d,sort:c}}function vp(){let i=new WeakMap;function e(n,o){const r=i.get(n);let s;return r===void 0?(s=new Ta,i.set(n,[s])):o>=r.length?(s=new Ta,r.push(s)):s=r[o],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function xp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new qe};break;case"SpotLight":t={position:new N,direction:new N,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function yp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Mp=0;function Sp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bp(i){const e=new xp,t=yp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const o=new N,r=new dt,s=new dt;function a(c){let d=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,_=0,g=0,p=0,h=0,y=0,S=0,v=0,A=0,w=0,T=0;c.sort(Sp);for(let M=0,x=c.length;M<x;M++){const P=c[M],D=P.color,U=P.intensity,O=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=D.r*U,u+=D.g*U,f+=D.b*U;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],U);T++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const G=P.shadow,L=t.get(P);L.shadowIntensity=G.intensity,L.shadowBias=G.bias,L.shadowNormalBias=G.normalBias,L.shadowRadius=G.radius,L.shadowMapSize=G.mapSize,n.directionalShadow[m]=L,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=P.shadow.matrix,y++}n.directional[m]=W,m++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(D).multiplyScalar(U),W.distance=O,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[g]=W;const G=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,G.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[g]=G.matrix,P.castShadow){const L=t.get(P);L.shadowIntensity=G.intensity,L.shadowBias=G.bias,L.shadowNormalBias=G.normalBias,L.shadowRadius=G.radius,L.shadowMapSize=G.mapSize,n.spotShadow[g]=L,n.spotShadowMap[g]=X,v++}g++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(D).multiplyScalar(U),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=W,p++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const G=P.shadow,L=t.get(P);L.shadowIntensity=G.intensity,L.shadowBias=G.bias,L.shadowNormalBias=G.normalBias,L.shadowRadius=G.radius,L.shadowMapSize=G.mapSize,L.shadowCameraNear=G.camera.near,L.shadowCameraFar=G.camera.far,n.pointShadow[_]=L,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=P.shadow.matrix,S++}n.point[_]=W,_++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(U),W.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[h]=W,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==m||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==p||C.hemiLength!==h||C.numDirectionalShadows!==y||C.numPointShadows!==S||C.numSpotShadows!==v||C.numSpotMaps!==A||C.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,C.directionalLength=m,C.pointLength=_,C.spotLength=g,C.rectAreaLength=p,C.hemiLength=h,C.numDirectionalShadows=y,C.numPointShadows=S,C.numSpotShadows=v,C.numSpotMaps=A,C.numLightProbes=T,n.version=Mp++)}function l(c,d){let u=0,f=0,m=0,_=0,g=0;const p=d.matrixWorldInverse;for(let h=0,y=c.length;h<y;h++){const S=c[h];if(S.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(o),v.direction.transformDirection(p),u++}else if(S.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(o),v.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),s.identity(),r.copy(S.matrixWorld),r.premultiply(p),s.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),_++}else if(S.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Aa(i){const e=new bp(i),t=[],n=[];function o(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function s(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:s}}function wp(i){let e=new WeakMap;function t(o,r=0){const s=e.get(o);let a;return s===void 0?(a=new Aa(i),e.set(o,[a])):r>=s.length?(a=new Aa(i),s.push(a)):a=s[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Ep extends Zn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tp extends Zn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ap=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cp(i,e,t){let n=new ms;const o=new Ue,r=new Ue,s=new ft,a=new Ep({depthPacking:sc}),l=new Tp,c={},d=t.maxTextureSize,u={[Dn]:Pt,[Pt]:Dn,[Ht]:Ht},f=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Ap,fragmentShader:Rp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new yt;_.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new V(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Va;let h=this.type;this.render=function(w,T,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Cn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const U=h!==dn&&this.type===dn,O=h===dn&&this.type!==dn;for(let X=0,W=w.length;X<W;X++){const G=w[X],L=G.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;o.copy(L.mapSize);const H=L.getFrameExtents();if(o.multiply(H),r.copy(L.mapSize),(o.x>d||o.y>d)&&(o.x>d&&(r.x=Math.floor(d/H.x),o.x=r.x*H.x,L.mapSize.x=r.x),o.y>d&&(r.y=Math.floor(d/H.y),o.y=r.y*H.y,L.mapSize.y=r.y)),L.map===null||U===!0||O===!0){const ee=this.type!==dn?{minFilter:Kt,magFilter:Kt}:{};L.map!==null&&L.map.dispose(),L.map=new qn(o.x,o.y,ee),L.map.texture.name=G.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const Q=L.getViewportCount();for(let ee=0;ee<Q;ee++){const xe=L.getViewport(ee);s.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),D.viewport(s),L.updateMatrices(G,ee),n=L.getFrustum(),v(T,C,L.camera,G,this.type)}L.isPointLightShadow!==!0&&this.type===dn&&y(L,C),L.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(M,x,P)};function y(w,T){const C=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new qn(o.x,o.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,C,f,g,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,C,m,g,null)}function S(w,T,C,M){let x=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)x=P;else if(x=C.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=x.uuid,U=T.uuid;let O=c[D];O===void 0&&(O={},c[D]=O);let X=O[U];X===void 0&&(X=x.clone(),O[U]=X,T.addEventListener("dispose",A)),x=X}if(x.visible=T.visible,x.wireframe=T.wireframe,M===dn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:u[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const D=i.properties.get(x);D.light=C}return x}function v(w,T,C,M,x){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===dn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const U=e.update(w),O=w.material;if(Array.isArray(O)){const X=U.groups;for(let W=0,G=X.length;W<G;W++){const L=X[W],H=O[L.materialIndex];if(H&&H.visible){const Q=S(w,H,M,x);w.onBeforeShadow(i,w,T,C,U,Q,L),i.renderBufferDirect(C,null,U,Q,w,L),w.onAfterShadow(i,w,T,C,U,Q,L)}}}else if(O.visible){const X=S(w,O,M,x);w.onBeforeShadow(i,w,T,C,U,X,null),i.renderBufferDirect(C,null,U,X,w,null),w.onAfterShadow(i,w,T,C,U,X,null)}}const D=w.children;for(let U=0,O=D.length;U<O;U++)v(D[U],T,C,M,x)}function A(w){w.target.removeEventListener("dispose",A);for(const C in c){const M=c[C],x=w.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const Pp={[Sr]:br,[wr]:Ar,[Er]:Rr,[xi]:Tr,[br]:Sr,[Ar]:wr,[Rr]:Er,[Tr]:xi};function Dp(i,e){function t(){let F=!1;const ue=new ft;let J=null;const oe=new ft(0,0,0,0);return{setMask:function(ge){J!==ge&&!F&&(i.colorMask(ge,ge,ge,ge),J=ge)},setLocked:function(ge){F=ge},setClear:function(ge,pe,ze,ut,Mt){Mt===!0&&(ge*=ut,pe*=ut,ze*=ut),ue.set(ge,pe,ze,ut),oe.equals(ue)===!1&&(i.clearColor(ge,pe,ze,ut),oe.copy(ue))},reset:function(){F=!1,J=null,oe.set(-1,0,0,0)}}}function n(){let F=!1,ue=!1,J=null,oe=null,ge=null;return{setReversed:function(pe){if(ue!==pe){const ze=e.get("EXT_clip_control");ue?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const ut=ge;ge=null,this.setClear(ut)}ue=pe},getReversed:function(){return ue},setTest:function(pe){pe?Y(i.DEPTH_TEST):ne(i.DEPTH_TEST)},setMask:function(pe){J!==pe&&!F&&(i.depthMask(pe),J=pe)},setFunc:function(pe){if(ue&&(pe=Pp[pe]),oe!==pe){switch(pe){case Sr:i.depthFunc(i.NEVER);break;case br:i.depthFunc(i.ALWAYS);break;case wr:i.depthFunc(i.LESS);break;case xi:i.depthFunc(i.LEQUAL);break;case Er:i.depthFunc(i.EQUAL);break;case Tr:i.depthFunc(i.GEQUAL);break;case Ar:i.depthFunc(i.GREATER);break;case Rr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=pe}},setLocked:function(pe){F=pe},setClear:function(pe){ge!==pe&&(ue&&(pe=1-pe),i.clearDepth(pe),ge=pe)},reset:function(){F=!1,J=null,oe=null,ge=null,ue=!1}}}function o(){let F=!1,ue=null,J=null,oe=null,ge=null,pe=null,ze=null,ut=null,Mt=null;return{setTest:function(it){F||(it?Y(i.STENCIL_TEST):ne(i.STENCIL_TEST))},setMask:function(it){ue!==it&&!F&&(i.stencilMask(it),ue=it)},setFunc:function(it,Vt,on){(J!==it||oe!==Vt||ge!==on)&&(i.stencilFunc(it,Vt,on),J=it,oe=Vt,ge=on)},setOp:function(it,Vt,on){(pe!==it||ze!==Vt||ut!==on)&&(i.stencilOp(it,Vt,on),pe=it,ze=Vt,ut=on)},setLocked:function(it){F=it},setClear:function(it){Mt!==it&&(i.clearStencil(it),Mt=it)},reset:function(){F=!1,ue=null,J=null,oe=null,ge=null,pe=null,ze=null,ut=null,Mt=null}}}const r=new t,s=new n,a=new o,l=new WeakMap,c=new WeakMap;let d={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,h=null,y=null,S=null,v=null,A=null,w=null,T=new qe(0,0,0),C=0,M=!1,x=null,P=null,D=null,U=null,O=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,G=0;const L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(L)[1]),W=G>=1):L.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),W=G>=2);let H=null,Q={};const ee=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),_e=new ft().fromArray(ee),j=new ft().fromArray(xe);function $(F,ue,J,oe){const ge=new Uint8Array(4),pe=i.createTexture();i.bindTexture(F,pe),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<J;ze++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(ue+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return pe}const z={};z[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),z[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),z[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),s.setFunc(xi),Oe(!1),Be(Ps),Y(i.CULL_FACE),I(Cn);function Y(F){d[F]!==!0&&(i.enable(F),d[F]=!0)}function ne(F){d[F]!==!1&&(i.disable(F),d[F]=!1)}function Se(F,ue){return u[F]!==ue?(i.bindFramebuffer(F,ue),u[F]=ue,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function De(F,ue){let J=m,oe=!1;if(F){J=f.get(ue),J===void 0&&(J=[],f.set(ue,J));const ge=F.textures;if(J.length!==ge.length||J[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,ze=ge.length;pe<ze;pe++)J[pe]=i.COLOR_ATTACHMENT0+pe;J.length=ge.length,oe=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,oe=!0);oe&&i.drawBuffers(J)}function Le(F){return _!==F?(i.useProgram(F),_=F,!0):!1}const Ae={[Hn]:i.FUNC_ADD,[Il]:i.FUNC_SUBTRACT,[Ul]:i.FUNC_REVERSE_SUBTRACT};Ae[Nl]=i.MIN,Ae[Fl]=i.MAX;const nt={[Ol]:i.ZERO,[kl]:i.ONE,[Bl]:i.SRC_COLOR,[yr]:i.SRC_ALPHA,[Xl]:i.SRC_ALPHA_SATURATE,[Vl]:i.DST_COLOR,[Hl]:i.DST_ALPHA,[zl]:i.ONE_MINUS_SRC_COLOR,[Mr]:i.ONE_MINUS_SRC_ALPHA,[Wl]:i.ONE_MINUS_DST_COLOR,[Gl]:i.ONE_MINUS_DST_ALPHA,[ql]:i.CONSTANT_COLOR,[Yl]:i.ONE_MINUS_CONSTANT_COLOR,[jl]:i.CONSTANT_ALPHA,[Zl]:i.ONE_MINUS_CONSTANT_ALPHA};function I(F,ue,J,oe,ge,pe,ze,ut,Mt,it){if(F===Cn){g===!0&&(ne(i.BLEND),g=!1);return}if(g===!1&&(Y(i.BLEND),g=!0),F!==Ll){if(F!==p||it!==M){if((h!==Hn||v!==Hn)&&(i.blendEquation(i.FUNC_ADD),h=Hn,v=Hn),it)switch(F){case gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ds:i.blendFunc(i.ONE,i.ONE);break;case Ls:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Is:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ds:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ls:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Is:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,S=null,A=null,w=null,T.set(0,0,0),C=0,p=F,M=it}return}ge=ge||ue,pe=pe||J,ze=ze||oe,(ue!==h||ge!==v)&&(i.blendEquationSeparate(Ae[ue],Ae[ge]),h=ue,v=ge),(J!==y||oe!==S||pe!==A||ze!==w)&&(i.blendFuncSeparate(nt[J],nt[oe],nt[pe],nt[ze]),y=J,S=oe,A=pe,w=ze),(ut.equals(T)===!1||Mt!==C)&&(i.blendColor(ut.r,ut.g,ut.b,Mt),T.copy(ut),C=Mt),p=F,M=!1}function Fe(F,ue){F.side===Ht?ne(i.CULL_FACE):Y(i.CULL_FACE);let J=F.side===Pt;ue&&(J=!J),Oe(J),F.blending===gi&&F.transparent===!1?I(Cn):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const oe=F.stencilWrite;a.setTest(oe),oe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Qe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(F){x!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),x=F)}function Be(F){F!==Pl?(Y(i.CULL_FACE),F!==P&&(F===Ps?i.cullFace(i.BACK):F===Dl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ne(i.CULL_FACE),P=F}function be(F){F!==D&&(W&&i.lineWidth(F),D=F)}function Qe(F,ue,J){F?(Y(i.POLYGON_OFFSET_FILL),(U!==ue||O!==J)&&(i.polygonOffset(ue,J),U=ue,O=J)):ne(i.POLYGON_OFFSET_FILL)}function Re(F){F?Y(i.SCISSOR_TEST):ne(i.SCISSOR_TEST)}function R(F){F===void 0&&(F=i.TEXTURE0+X-1),H!==F&&(i.activeTexture(F),H=F)}function b(F,ue,J){J===void 0&&(H===null?J=i.TEXTURE0+X-1:J=H);let oe=Q[J];oe===void 0&&(oe={type:void 0,texture:void 0},Q[J]=oe),(oe.type!==F||oe.texture!==ue)&&(H!==J&&(i.activeTexture(J),H=J),i.bindTexture(F,ue||z[F]),oe.type=F,oe.texture=ue)}function q(){const F=Q[H];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ke(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(F){_e.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),_e.copy(F))}function Me(F){j.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),j.copy(F))}function je(F,ue){let J=c.get(ue);J===void 0&&(J=new WeakMap,c.set(ue,J));let oe=J.get(F);oe===void 0&&(oe=i.getUniformBlockIndex(ue,F.name),J.set(F,oe))}function Ve(F,ue){const oe=c.get(ue).get(F);l.get(ue)!==oe&&(i.uniformBlockBinding(ue,oe,F.__bindingPointIndex),l.set(ue,oe))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},H=null,Q={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,h=null,y=null,S=null,v=null,A=null,w=null,T=new qe(0,0,0),C=0,M=!1,x=null,P=null,D=null,U=null,O=null,_e.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:Y,disable:ne,bindFramebuffer:Se,drawBuffers:De,useProgram:Le,setBlending:I,setMaterial:Fe,setFlipSided:Oe,setCullFace:Be,setLineWidth:be,setPolygonOffset:Qe,setScissorTest:Re,activeTexture:R,bindTexture:b,unbindTexture:q,compressedTexImage2D:ie,compressedTexImage3D:re,texImage2D:ye,texImage3D:Ie,updateUBOMapping:je,uniformBlockBinding:Ve,texStorage2D:Ke,texStorage3D:le,texSubImage2D:te,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Ne,viewport:Me,reset:at}}function Ra(i,e,t,n){const o=Lp(n);switch(t){case $a:return i*e;case Qa:return i*e;case el:return i*e*2;case tl:return i*e/o.components*o.byteLength;case ds:return i*e/o.components*o.byteLength;case nl:return i*e*2/o.components*o.byteLength;case us:return i*e*2/o.components*o.byteLength;case Ja:return i*e*3/o.components*o.byteLength;case Zt:return i*e*4/o.components*o.byteLength;case fs:return i*e*4/o.components*o.byteLength;case bo:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Eo:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ir:case Nr:return Math.max(i,16)*Math.max(e,8)/4;case Lr:case Ur:return Math.max(i,8)*Math.max(e,8)/2;case Fr:case Or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Hr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Zr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Kr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $r:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Jr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ao:case Qr:case es:return Math.ceil(i/4)*Math.ceil(e/4)*16;case il:case ts:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ns:case is:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lp(i){switch(i){case vn:case ja:return{byteLength:1,components:1};case Bi:case Za:case Hi:return{byteLength:2,components:1};case cs:case hs:return{byteLength:2,components:4};case Xn:case ls:case un:return{byteLength:4,components:1};case Ka:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ip(i,e,t,n,o,r,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,d=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,b){return m?new OffscreenCanvas(R,b):Po("canvas")}function g(R,b,q){let ie=1;const re=Re(R);if((re.width>q||re.height>q)&&(ie=q/Math.max(re.width,re.height)),ie<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const te=Math.floor(ie*re.width),Ce=Math.floor(ie*re.height);u===void 0&&(u=_(te,Ce));const fe=b?_(te,Ce):u;return fe.width=te,fe.height=Ce,fe.getContext("2d").drawImage(R,0,0,te,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+te+"x"+Ce+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function p(R){return R.generateMipmaps}function h(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,b,q,ie,re=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=b;if(b===i.RED&&(q===i.FLOAT&&(te=i.R32F),q===i.HALF_FLOAT&&(te=i.R16F),q===i.UNSIGNED_BYTE&&(te=i.R8)),b===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(te=i.R8UI),q===i.UNSIGNED_SHORT&&(te=i.R16UI),q===i.UNSIGNED_INT&&(te=i.R32UI),q===i.BYTE&&(te=i.R8I),q===i.SHORT&&(te=i.R16I),q===i.INT&&(te=i.R32I)),b===i.RG&&(q===i.FLOAT&&(te=i.RG32F),q===i.HALF_FLOAT&&(te=i.RG16F),q===i.UNSIGNED_BYTE&&(te=i.RG8)),b===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(te=i.RG8UI),q===i.UNSIGNED_SHORT&&(te=i.RG16UI),q===i.UNSIGNED_INT&&(te=i.RG32UI),q===i.BYTE&&(te=i.RG8I),q===i.SHORT&&(te=i.RG16I),q===i.INT&&(te=i.RG32I)),b===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(te=i.RGB8UI),q===i.UNSIGNED_SHORT&&(te=i.RGB16UI),q===i.UNSIGNED_INT&&(te=i.RGB32UI),q===i.BYTE&&(te=i.RGB8I),q===i.SHORT&&(te=i.RGB16I),q===i.INT&&(te=i.RGB32I)),b===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),q===i.UNSIGNED_INT&&(te=i.RGBA32UI),q===i.BYTE&&(te=i.RGBA8I),q===i.SHORT&&(te=i.RGBA16I),q===i.INT&&(te=i.RGBA32I)),b===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),b===i.RGBA){const Ce=re?Uo:$e.getTransfer(ie);q===i.FLOAT&&(te=i.RGBA32F),q===i.HALF_FLOAT&&(te=i.RGBA16F),q===i.UNSIGNED_BYTE&&(te=Ce===ot?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(R,b){let q;return R?b===null||b===Xn||b===Si?q=i.DEPTH24_STENCIL8:b===un?q=i.DEPTH32F_STENCIL8:b===Bi&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xn||b===Si?q=i.DEPTH_COMPONENT24:b===un?q=i.DEPTH_COMPONENT32F:b===Bi&&(q=i.DEPTH_COMPONENT16),q}function A(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Kt&&R.minFilter!==en?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function w(R){const b=R.target;b.removeEventListener("dispose",w),C(b),b.isVideoTexture&&d.delete(b)}function T(R){const b=R.target;b.removeEventListener("dispose",T),x(b)}function C(R){const b=n.get(R);if(b.__webglInit===void 0)return;const q=R.source,ie=f.get(q);if(ie){const re=ie[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&M(R),Object.keys(ie).length===0&&f.delete(q)}n.remove(R)}function M(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const q=R.source,ie=f.get(q);delete ie[b.__cacheKey],s.memory.textures--}function x(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let re=0;re<b.__webglFramebuffer[ie].length;re++)i.deleteFramebuffer(b.__webglFramebuffer[ie][re]);else i.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)i.deleteFramebuffer(b.__webglFramebuffer[ie]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=R.textures;for(let ie=0,re=q.length;ie<re;ie++){const te=n.get(q[ie]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),s.memory.textures--),n.remove(q[ie])}n.remove(R)}let P=0;function D(){P=0}function U(){const R=P;return R>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),P+=1,R}function O(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function X(R,b){const q=n.get(R);if(R.isVideoTexture&&be(R),R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(q,R,b);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+b)}function W(R,b){const q=n.get(R);if(R.version>0&&q.__version!==R.version){j(q,R,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+b)}function G(R,b){const q=n.get(R);if(R.version>0&&q.__version!==R.version){j(q,R,b);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+b)}function L(R,b){const q=n.get(R);if(R.version>0&&q.__version!==R.version){$(q,R,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+b)}const H={[_n]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[Dr]:i.MIRRORED_REPEAT},Q={[Kt]:i.NEAREST,[oc]:i.NEAREST_MIPMAP_NEAREST,[Yi]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Ho]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},ee={[lc]:i.NEVER,[pc]:i.ALWAYS,[cc]:i.LESS,[rl]:i.LEQUAL,[hc]:i.EQUAL,[fc]:i.GEQUAL,[dc]:i.GREATER,[uc]:i.NOTEQUAL};function xe(R,b){if(b.type===un&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===en||b.magFilter===Ho||b.magFilter===Yi||b.magFilter===Wn||b.minFilter===en||b.minFilter===Ho||b.minFilter===Yi||b.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,H[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,H[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,H[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Q[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Q[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Kt||b.minFilter!==Yi&&b.minFilter!==Wn||b.type===un&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function _e(R,b){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",w));const ie=b.source;let re=f.get(ie);re===void 0&&(re={},f.set(ie,re));const te=O(b);if(te!==R.__cacheKey){re[te]===void 0&&(re[te]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,q=!0),re[te].usedTimes++;const Ce=re[R.__cacheKey];Ce!==void 0&&(re[R.__cacheKey].usedTimes--,Ce.usedTimes===0&&M(b)),R.__cacheKey=te,R.__webglTexture=re[te].texture}return q}function j(R,b,q){let ie=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ie=i.TEXTURE_3D);const re=_e(R,b),te=b.source;t.bindTexture(ie,R.__webglTexture,i.TEXTURE0+q);const Ce=n.get(te);if(te.version!==Ce.__version||re===!0){t.activeTexture(i.TEXTURE0+q);const fe=$e.getPrimaries($e.workingColorSpace),ve=b.colorSpace===Rn?null:$e.getPrimaries(b.colorSpace),Ke=b.colorSpace===Rn||fe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let le=g(b.image,!1,o.maxTextureSize);le=Qe(b,le);const ye=r.convert(b.format,b.colorSpace),Ie=r.convert(b.type);let Ne=S(b.internalFormat,ye,Ie,b.colorSpace,b.isVideoTexture);xe(ie,b);let Me;const je=b.mipmaps,Ve=b.isVideoTexture!==!0,at=Ce.__version===void 0||re===!0,F=te.dataReady,ue=A(b,le);if(b.isDepthTexture)Ne=v(b.format===bi,b.type),at&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,Ne,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Ne,le.width,le.height,0,ye,Ie,null));else if(b.isDataTexture)if(je.length>0){Ve&&at&&t.texStorage2D(i.TEXTURE_2D,ue,Ne,je[0].width,je[0].height);for(let J=0,oe=je.length;J<oe;J++)Me=je[J],Ve?F&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Me.width,Me.height,ye,Ie,Me.data):t.texImage2D(i.TEXTURE_2D,J,Ne,Me.width,Me.height,0,ye,Ie,Me.data);b.generateMipmaps=!1}else Ve?(at&&t.texStorage2D(i.TEXTURE_2D,ue,Ne,le.width,le.height),F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,ye,Ie,le.data)):t.texImage2D(i.TEXTURE_2D,0,Ne,le.width,le.height,0,ye,Ie,le.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ve&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Ne,je[0].width,je[0].height,le.depth);for(let J=0,oe=je.length;J<oe;J++)if(Me=je[J],b.format!==Zt)if(ye!==null)if(Ve){if(F)if(b.layerUpdates.size>0){const ge=Ra(Me.width,Me.height,b.format,b.type);for(const pe of b.layerUpdates){const ze=Me.data.subarray(pe*ge/Me.data.BYTES_PER_ELEMENT,(pe+1)*ge/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,pe,Me.width,Me.height,1,ye,ze)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Me.width,Me.height,le.depth,ye,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Ne,Me.width,Me.height,le.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Me.width,Me.height,le.depth,ye,Ie,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,Ne,Me.width,Me.height,le.depth,0,ye,Ie,Me.data)}else{Ve&&at&&t.texStorage2D(i.TEXTURE_2D,ue,Ne,je[0].width,je[0].height);for(let J=0,oe=je.length;J<oe;J++)Me=je[J],b.format!==Zt?ye!==null?Ve?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Me.width,Me.height,ye,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,J,Ne,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?F&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Me.width,Me.height,ye,Ie,Me.data):t.texImage2D(i.TEXTURE_2D,J,Ne,Me.width,Me.height,0,ye,Ie,Me.data)}else if(b.isDataArrayTexture)if(Ve){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Ne,le.width,le.height,le.depth),F)if(b.layerUpdates.size>0){const J=Ra(le.width,le.height,b.format,b.type);for(const oe of b.layerUpdates){const ge=le.data.subarray(oe*J/le.data.BYTES_PER_ELEMENT,(oe+1)*J/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,le.width,le.height,1,ye,Ie,ge)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ye,Ie,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,le.width,le.height,le.depth,0,ye,Ie,le.data);else if(b.isData3DTexture)Ve?(at&&t.texStorage3D(i.TEXTURE_3D,ue,Ne,le.width,le.height,le.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ye,Ie,le.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,le.width,le.height,le.depth,0,ye,Ie,le.data);else if(b.isFramebufferTexture){if(at)if(Ve)t.texStorage2D(i.TEXTURE_2D,ue,Ne,le.width,le.height);else{let J=le.width,oe=le.height;for(let ge=0;ge<ue;ge++)t.texImage2D(i.TEXTURE_2D,ge,Ne,J,oe,0,ye,Ie,null),J>>=1,oe>>=1}}else if(je.length>0){if(Ve&&at){const J=Re(je[0]);t.texStorage2D(i.TEXTURE_2D,ue,Ne,J.width,J.height)}for(let J=0,oe=je.length;J<oe;J++)Me=je[J],Ve?F&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ye,Ie,Me):t.texImage2D(i.TEXTURE_2D,J,Ne,ye,Ie,Me);b.generateMipmaps=!1}else if(Ve){if(at){const J=Re(le);t.texStorage2D(i.TEXTURE_2D,ue,Ne,J.width,J.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Ie,le)}else t.texImage2D(i.TEXTURE_2D,0,Ne,ye,Ie,le);p(b)&&h(ie),Ce.__version=te.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function $(R,b,q){if(b.image.length!==6)return;const ie=_e(R,b),re=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+q);const te=n.get(re);if(re.version!==te.__version||ie===!0){t.activeTexture(i.TEXTURE0+q);const Ce=$e.getPrimaries($e.workingColorSpace),fe=b.colorSpace===Rn?null:$e.getPrimaries(b.colorSpace),ve=b.colorSpace===Rn||Ce===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ke=b.isCompressedTexture||b.image[0].isCompressedTexture,le=b.image[0]&&b.image[0].isDataTexture,ye=[];for(let oe=0;oe<6;oe++)!Ke&&!le?ye[oe]=g(b.image[oe],!0,o.maxCubemapSize):ye[oe]=le?b.image[oe].image:b.image[oe],ye[oe]=Qe(b,ye[oe]);const Ie=ye[0],Ne=r.convert(b.format,b.colorSpace),Me=r.convert(b.type),je=S(b.internalFormat,Ne,Me,b.colorSpace),Ve=b.isVideoTexture!==!0,at=te.__version===void 0||ie===!0,F=re.dataReady;let ue=A(b,Ie);xe(i.TEXTURE_CUBE_MAP,b);let J;if(Ke){Ve&&at&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,je,Ie.width,Ie.height);for(let oe=0;oe<6;oe++){J=ye[oe].mipmaps;for(let ge=0;ge<J.length;ge++){const pe=J[ge];b.format!==Zt?Ne!==null?Ve?F&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge,0,0,pe.width,pe.height,Ne,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge,je,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge,0,0,pe.width,pe.height,Ne,Me,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge,je,pe.width,pe.height,0,Ne,Me,pe.data)}}}else{if(J=b.mipmaps,Ve&&at){J.length>0&&ue++;const oe=Re(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,je,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(le){Ve?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ye[oe].width,ye[oe].height,Ne,Me,ye[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,je,ye[oe].width,ye[oe].height,0,Ne,Me,ye[oe].data);for(let ge=0;ge<J.length;ge++){const ze=J[ge].image[oe].image;Ve?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge+1,0,0,ze.width,ze.height,Ne,Me,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge+1,je,ze.width,ze.height,0,Ne,Me,ze.data)}}else{Ve?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ne,Me,ye[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,je,Ne,Me,ye[oe]);for(let ge=0;ge<J.length;ge++){const pe=J[ge];Ve?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge+1,0,0,Ne,Me,pe.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge+1,je,Ne,Me,pe.image[oe])}}}p(b)&&h(i.TEXTURE_CUBE_MAP),te.__version=re.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function z(R,b,q,ie,re,te){const Ce=r.convert(q.format,q.colorSpace),fe=r.convert(q.type),ve=S(q.internalFormat,Ce,fe,q.colorSpace),Ke=n.get(b),le=n.get(q);if(le.__renderTarget=b,!Ke.__hasExternalTextures){const ye=Math.max(1,b.width>>te),Ie=Math.max(1,b.height>>te);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,te,ve,ye,Ie,b.depth,0,Ce,fe,null):t.texImage2D(re,te,ve,ye,Ie,0,Ce,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Be(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,re,le.__webglTexture,0,Oe(b)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,re,le.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(R,b,q){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const ie=b.depthTexture,re=ie&&ie.isDepthTexture?ie.type:null,te=v(b.stencilBuffer,re),Ce=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=Oe(b);Be(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,te,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,te,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,te,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,R)}else{const ie=b.textures;for(let re=0;re<ie.length;re++){const te=ie[re],Ce=r.convert(te.format,te.colorSpace),fe=r.convert(te.type),ve=S(te.internalFormat,Ce,fe,te.colorSpace),Ke=Oe(b);q&&Be(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,ve,b.width,b.height):Be(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke,ve,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ve,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ne(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=n.get(b.depthTexture);ie.__renderTarget=b,(!ie.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X(b.depthTexture,0);const re=ie.__webglTexture,te=Oe(b);if(b.depthTexture.format===_i)Be(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(b.depthTexture.format===bi)Be(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Se(R){const b=n.get(R),q=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const ie=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ie){const re=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ie.removeEventListener("dispose",re)};ie.addEventListener("dispose",re),b.__depthDisposeCallback=re}b.__boundDepthTexture=ie}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ne(b.__webglFramebuffer,R)}else if(q){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]===void 0)b.__webglDepthbuffer[ie]=i.createRenderbuffer(),Y(b.__webglDepthbuffer[ie],R,!1);else{const re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,te)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Y(b.__webglDepthbuffer,R,!1);else{const ie=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(R,b,q){const ie=n.get(R);b!==void 0&&z(ie.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Se(R)}function Le(R){const b=R.texture,q=n.get(R),ie=n.get(b);R.addEventListener("dispose",T);const re=R.textures,te=R.isWebGLCubeRenderTarget===!0,Ce=re.length>1;if(Ce||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=b.version,s.memory.textures++),te){q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[fe]=[];for(let ve=0;ve<b.mipmaps.length;ve++)q.__webglFramebuffer[fe][ve]=i.createFramebuffer()}else q.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)q.__webglFramebuffer[fe]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let fe=0,ve=re.length;fe<ve;fe++){const Ke=n.get(re[fe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),s.memory.textures++)}if(R.samples>0&&Be(R)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){const ve=re[fe];q.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[fe]);const Ke=r.convert(ve.format,ve.colorSpace),le=r.convert(ve.type),ye=S(ve.internalFormat,Ke,le,ve.colorSpace,R.isXRRenderTarget===!0),Ie=Oe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ye,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,q.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Y(q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),xe(i.TEXTURE_CUBE_MAP,b);for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)z(q.__webglFramebuffer[fe][ve],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else z(q.__webglFramebuffer[fe],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(b)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,ve=re.length;fe<ve;fe++){const Ke=re[fe],le=n.get(Ke);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),xe(i.TEXTURE_2D,Ke),z(q.__webglFramebuffer,R,Ke,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),p(Ke)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,ie.__webglTexture),xe(fe,b),b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)z(q.__webglFramebuffer[ve],R,b,i.COLOR_ATTACHMENT0,fe,ve);else z(q.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,fe,0);p(b)&&h(fe),t.unbindTexture()}R.depthBuffer&&Se(R)}function Ae(R){const b=R.textures;for(let q=0,ie=b.length;q<ie;q++){const re=b[q];if(p(re)){const te=y(R),Ce=n.get(re).__webglTexture;t.bindTexture(te,Ce),h(te),t.unbindTexture()}}}const nt=[],I=[];function Fe(R){if(R.samples>0){if(Be(R)===!1){const b=R.textures,q=R.width,ie=R.height;let re=i.COLOR_BUFFER_BIT;const te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(R),fe=b.length>1;if(fe)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[ve]);const Ke=n.get(b[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ke,0)}i.blitFramebuffer(0,0,q,ie,0,0,q,ie,re,i.NEAREST),l===!0&&(nt.length=0,I.length=0,nt.push(i.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.resolveDepthBuffer===!1&&(nt.push(te),I.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[ve]);const Ke=n.get(b[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Oe(R){return Math.min(o.maxSamples,R.samples)}function Be(R){const b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function be(R){const b=s.render.frame;d.get(R)!==b&&(d.set(R,b),R.update())}function Qe(R,b){const q=R.colorSpace,ie=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||q!==Ei&&q!==Rn&&($e.getTransfer(q)===ot?(ie!==Zt||re!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function Re(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=G,this.setTextureCube=L,this.rebindTextures=De,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=z,this.useMultisampledRTT=Be}function Up(i,e){function t(n,o=Rn){let r;const s=$e.getTransfer(o);if(n===vn)return i.UNSIGNED_BYTE;if(n===cs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ka)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ja)return i.BYTE;if(n===Za)return i.SHORT;if(n===Bi)return i.UNSIGNED_SHORT;if(n===ls)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Hi)return i.HALF_FLOAT;if(n===$a)return i.ALPHA;if(n===Ja)return i.RGB;if(n===Zt)return i.RGBA;if(n===Qa)return i.LUMINANCE;if(n===el)return i.LUMINANCE_ALPHA;if(n===_i)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===tl)return i.RED;if(n===ds)return i.RED_INTEGER;if(n===nl)return i.RG;if(n===us)return i.RG_INTEGER;if(n===fs)return i.RGBA_INTEGER;if(n===bo||n===wo||n===Eo||n===To)if(s===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lr||n===Ir||n===Ur||n===Nr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ir)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ur)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fr||n===Or||n===kr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fr||n===Or)return s===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kr)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Br||n===zr||n===Hr||n===Gr||n===Vr||n===Wr||n===Xr||n===qr||n===Yr||n===jr||n===Zr||n===Kr||n===$r||n===Jr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Br)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zr)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hr)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gr)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vr)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wr)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xr)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qr)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yr)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jr)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zr)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kr)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$r)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jr)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ao||n===Qr||n===es)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ao)return s===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===es)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===il||n===ts||n===ns||n===is)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ts)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ns)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===is)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Np extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ae extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fp={type:"move"};class pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let o=null,r=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),h=this._getHandJoint(c,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(o=t.getPose(e.targetRaySpace,n),o===null&&r!==null&&(o=r),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fp)))}return a!==null&&(a.visible=o!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Op=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const o=new At,r=e.properties.get(o);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ln({vertexShader:Op,fragmentShader:kp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new V(new kt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zp extends jn{constructor(e,t){super();const n=this;let o=null,r=1,s=null,a="local-floor",l=1,c=null,d=null,u=null,f=null,m=null,_=null;const g=new Bp,p=t.getContextAttributes();let h=null,y=null;const S=[],v=[],A=new Ue;let w=null;const T=new zt;T.viewport=new ft;const C=new zt;C.viewport=new ft;const M=[T,C],x=new Np;let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let $=S[j];return $===void 0&&($=new pr,S[j]=$),$.getTargetRaySpace()},this.getControllerGrip=function(j){let $=S[j];return $===void 0&&($=new pr,S[j]=$),$.getGripSpace()},this.getHand=function(j){let $=S[j];return $===void 0&&($=new pr,S[j]=$),$.getHandSpace()};function U(j){const $=v.indexOf(j.inputSource);if($===-1)return;const z=S[$];z!==void 0&&(z.update(j.inputSource,j.frame,c||s),z.dispatchEvent({type:j.type,data:j.inputSource}))}function O(){o.removeEventListener("select",U),o.removeEventListener("selectstart",U),o.removeEventListener("selectend",U),o.removeEventListener("squeeze",U),o.removeEventListener("squeezestart",U),o.removeEventListener("squeezeend",U),o.removeEventListener("end",O),o.removeEventListener("inputsourceschange",X);for(let j=0;j<S.length;j++){const $=v[j];$!==null&&(v[j]=null,S[j].disconnect($))}P=null,D=null,g.reset(),e.setRenderTarget(h),m=null,f=null,u=null,o=null,y=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return o},this.setSession=async function(j){if(o=j,o!==null){if(h=e.getRenderTarget(),o.addEventListener("select",U),o.addEventListener("selectstart",U),o.addEventListener("selectend",U),o.addEventListener("squeeze",U),o.addEventListener("squeezestart",U),o.addEventListener("squeezeend",U),o.addEventListener("end",O),o.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),o.renderState.layers===void 0){const $={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(o,t,$),o.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new qn(m.framebufferWidth,m.framebufferHeight,{format:Zt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let $=null,z=null,Y=null;p.depth&&(Y=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=p.stencil?bi:_i,z=p.stencil?Si:Xn);const ne={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:r};u=new XRWebGLBinding(o,t),f=u.createProjectionLayer(ne),o.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new qn(f.textureWidth,f.textureHeight,{format:Zt,type:vn,depthTexture:new vl(f.textureWidth,f.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await o.requestReferenceSpace(a),_e.setContext(o),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(j){for(let $=0;$<j.removed.length;$++){const z=j.removed[$],Y=v.indexOf(z);Y>=0&&(v[Y]=null,S[Y].disconnect(z))}for(let $=0;$<j.added.length;$++){const z=j.added[$];let Y=v.indexOf(z);if(Y===-1){for(let Se=0;Se<S.length;Se++)if(Se>=v.length){v.push(z),Y=Se;break}else if(v[Se]===null){v[Se]=z,Y=Se;break}if(Y===-1)break}const ne=S[Y];ne&&ne.connect(z)}}const W=new N,G=new N;function L(j,$,z){W.setFromMatrixPosition($.matrixWorld),G.setFromMatrixPosition(z.matrixWorld);const Y=W.distanceTo(G),ne=$.projectionMatrix.elements,Se=z.projectionMatrix.elements,De=ne[14]/(ne[10]-1),Le=ne[14]/(ne[10]+1),Ae=(ne[9]+1)/ne[5],nt=(ne[9]-1)/ne[5],I=(ne[8]-1)/ne[0],Fe=(Se[8]+1)/Se[0],Oe=De*I,Be=De*Fe,be=Y/(-I+Fe),Qe=be*-I;if($.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Qe),j.translateZ(be),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ne[10]===-1)j.projectionMatrix.copy($.projectionMatrix),j.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Re=De+be,R=Le+be,b=Oe-Qe,q=Be+(Y-Qe),ie=Ae*Le/R*Re,re=nt*Le/R*Re;j.projectionMatrix.makePerspective(b,q,ie,re,Re,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function H(j,$){$===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices($.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(o===null)return;let $=j.near,z=j.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(z=g.depthFar)),x.near=C.near=T.near=$,x.far=C.far=T.far=z,(P!==x.near||D!==x.far)&&(o.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,D=x.far),T.layers.mask=j.layers.mask|2,C.layers.mask=j.layers.mask|4,x.layers.mask=T.layers.mask|C.layers.mask;const Y=j.parent,ne=x.cameras;H(x,Y);for(let Se=0;Se<ne.length;Se++)H(ne[Se],Y);ne.length===2?L(x,T,C):x.projectionMatrix.copy(T.projectionMatrix),Q(j,x,Y)};function Q(j,$,z){z===null?j.matrix.copy($.matrixWorld):(j.matrix.copy(z.matrixWorld),j.matrix.invert(),j.matrix.multiply($.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy($.projectionMatrix),j.projectionMatrixInverse.copy($.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=zi*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let ee=null;function xe(j,$){if(d=$.getViewerPose(c||s),_=$,d!==null){const z=d.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Y=!1;z.length!==x.cameras.length&&(x.cameras.length=0,Y=!0);for(let Se=0;Se<z.length;Se++){const De=z[Se];let Le=null;if(m!==null)Le=m.getViewport(De);else{const nt=u.getViewSubImage(f,De);Le=nt.viewport,Se===0&&(e.setRenderTargetTextures(y,nt.colorTexture,f.ignoreDepthValues?void 0:nt.depthStencilTexture),e.setRenderTarget(y))}let Ae=M[Se];Ae===void 0&&(Ae=new zt,Ae.layers.enable(Se),Ae.viewport=new ft,M[Se]=Ae),Ae.matrix.fromArray(De.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(De.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Le.x,Le.y,Le.width,Le.height),Se===0&&(x.matrix.copy(Ae.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Y===!0&&x.cameras.push(Ae)}const ne=o.enabledFeatures;if(ne&&ne.includes("depth-sensing")){const Se=u.getDepthInformation(z[0]);Se&&Se.isValid&&Se.texture&&g.init(e,Se,o.renderState)}}for(let z=0;z<S.length;z++){const Y=v[z],ne=S[z];Y!==null&&ne!==void 0&&ne.update(Y,$,c||s)}ee&&ee(j,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),_=null}const _e=new gl;_e.setAnimationLoop(xe),this.setAnimationLoop=function(j){ee=j},this.dispose=function(){}}}const Bn=new tn,Hp=new dt;function Gp(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,fl(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function o(p,h,y,S,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),u(p,h)):h.isMeshPhongMaterial?(r(p,h),d(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,v)):h.isMeshMatcapMaterial?(r(p,h),_(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),g(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,y,S):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Pt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Pt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const y=e.get(h),S=y.envMap,v=y.envMapRotation;S&&(p.envMap.value=S,Bn.copy(v),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),p.envMapRotation.value.setFromMatrix4(Hp.makeRotationFromEuler(Bn)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,y,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*y,p.scale.value=S*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function d(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,y){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Pt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const y=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function Vp(i,e,t,n){let o={},r={},s=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const v=S.program;n.uniformBlockBinding(y,v)}function c(y,S){let v=o[y.id];v===void 0&&(_(y),v=d(y),o[y.id]=v,y.addEventListener("dispose",p));const A=S.program;n.updateUBOMapping(y,A);const w=e.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function d(y){const S=u();y.__bindingPointIndex=S;const v=i.createBuffer(),A=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function u(){for(let y=0;y<a;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=o[y.id],v=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,T=v.length;w<T;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,x=C.length;M<x;M++){const P=C[M];if(m(P,w,M,A)===!0){const D=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let O=0;for(let X=0;X<U.length;X++){const W=U[X],G=g(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,D+O,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,O),O+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,S,v,A){const w=y.value,T=S+"_"+v;if(A[T]===void 0)return typeof w=="number"||typeof w=="boolean"?A[T]=w:A[T]=w.clone(),!0;{const C=A[T];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[T]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(y){const S=y.uniforms;let v=0;const A=16;for(let T=0,C=S.length;T<C;T++){const M=Array.isArray(S[T])?S[T]:[S[T]];for(let x=0,P=M.length;x<P;x++){const D=M[x],U=Array.isArray(D.value)?D.value:[D.value];for(let O=0,X=U.length;O<X;O++){const W=U[O],G=g(W),L=v%A,H=L%G.boundary,Q=L+H;v+=H,Q!==0&&A-Q<G.storage&&(v+=A-Q),D.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=G.storage}}}const w=v%A;return w>0&&(v+=A-w),y.__size=v,y.__cache={},this}function g(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function p(y){const S=y.target;S.removeEventListener("dispose",p);const v=s.indexOf(S.__bindingPointIndex);s.splice(v,1),i.deleteBuffer(o[S.id]),delete o[S.id],delete r[S.id]}function h(){for(const y in o)i.deleteBuffer(o[y]);s=[],o={},r={}}return{bind:l,update:c,dispose:h}}class Wp{constructor(e={}){const{canvas:t=Dc(),context:n=null,depth:o=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,h=null;const y=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this.toneMapping=Pn,this.toneMappingExposure=1;const v=this;let A=!1,w=0,T=0,C=null,M=-1,x=null;const P=new ft,D=new ft;let U=null;const O=new qe(0);let X=0,W=t.width,G=t.height,L=1,H=null,Q=null;const ee=new ft(0,0,W,G),xe=new ft(0,0,W,G);let _e=!1;const j=new ms;let $=!1,z=!1;const Y=new dt,ne=new dt,Se=new N,De=new ft,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function nt(){return C===null?L:1}let I=n;function Fe(E,k){return t.getContext(E,k)}try{const E={alpha:!0,depth:o,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${as}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),I===null){const k="webgl2";if(I=Fe(k,E),I===null)throw Fe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Oe,Be,be,Qe,Re,R,b,q,ie,re,te,Ce,fe,ve,Ke,le,ye,Ie,Ne,Me,je,Ve,at,F;function ue(){Oe=new ju(I),Oe.init(),Ve=new Up(I,Oe),Be=new Gu(I,Oe,e,Ve),be=new Dp(I,Oe),Be.reverseDepthBuffer&&f&&be.buffers.depth.setReversed(!0),Qe=new $u(I),Re=new gp,R=new Ip(I,Oe,be,Re,Be,Ve,Qe),b=new Wu(v),q=new Yu(v),ie=new oh(I),at=new zu(I,ie),re=new Zu(I,ie,Qe,at),te=new Qu(I,re,ie,Qe),Ne=new Ju(I,Be,R),le=new Vu(Re),Ce=new mp(v,b,q,Oe,Be,at,le),fe=new Gp(v,Re),ve=new vp,Ke=new wp(Oe),Ie=new Bu(v,b,q,be,te,m,l),ye=new Cp(v,te,Be),F=new Vp(I,Qe,Be,be),Me=new Hu(I,Oe,Qe),je=new Ku(I,Oe,Qe),Qe.programs=Ce.programs,v.capabilities=Be,v.extensions=Oe,v.properties=Re,v.renderLists=ve,v.shadowMap=ye,v.state=be,v.info=Qe}ue();const J=new zp(v,I);this.xr=J,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(E){E!==void 0&&(L=E,this.setSize(W,G,!1))},this.getSize=function(E){return E.set(W,G)},this.setSize=function(E,k,Z=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,G=k,t.width=Math.floor(E*L),t.height=Math.floor(k*L),Z===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(W*L,G*L).floor()},this.setDrawingBufferSize=function(E,k,Z){W=E,G=k,L=Z,t.width=Math.floor(E*Z),t.height=Math.floor(k*Z),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(ee)},this.setViewport=function(E,k,Z,K){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,k,Z,K),be.viewport(P.copy(ee).multiplyScalar(L).round())},this.getScissor=function(E){return E.copy(xe)},this.setScissor=function(E,k,Z,K){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,k,Z,K),be.scissor(D.copy(xe).multiplyScalar(L).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(E){be.setScissorTest(_e=E)},this.setOpaqueSort=function(E){H=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(E=!0,k=!0,Z=!0){let K=0;if(E){let B=!1;if(C!==null){const ce=C.texture.format;B=ce===fs||ce===us||ce===ds}if(B){const ce=C.texture.type,me=ce===vn||ce===Xn||ce===Bi||ce===Si||ce===cs||ce===hs,we=Ie.getClearColor(),Ee=Ie.getClearAlpha(),ke=we.r,He=we.g,Te=we.b;me?(_[0]=ke,_[1]=He,_[2]=Te,_[3]=Ee,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=ke,g[1]=He,g[2]=Te,g[3]=Ee,I.clearBufferiv(I.COLOR,0,g))}else K|=I.COLOR_BUFFER_BIT}k&&(K|=I.DEPTH_BUFFER_BIT),Z&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ve.dispose(),Ke.dispose(),Re.dispose(),b.dispose(),q.dispose(),te.dispose(),at.dispose(),F.dispose(),Ce.dispose(),J.dispose(),J.removeEventListener("sessionstart",Ss),J.removeEventListener("sessionend",bs),In.stop()};function oe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=Qe.autoReset,k=ye.enabled,Z=ye.autoUpdate,K=ye.needsUpdate,B=ye.type;ue(),Qe.autoReset=E,ye.enabled=k,ye.autoUpdate=Z,ye.needsUpdate=K,ye.type=B}function pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ze(E){const k=E.target;k.removeEventListener("dispose",ze),ut(k)}function ut(E){Mt(E),Re.remove(E)}function Mt(E){const k=Re.get(E).programs;k!==void 0&&(k.forEach(function(Z){Ce.releaseProgram(Z)}),E.isShaderMaterial&&Ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,Z,K,B,ce){k===null&&(k=Le);const me=B.isMesh&&B.matrixWorld.determinant()<0,we=Al(E,k,Z,K,B);be.setMaterial(K,me);let Ee=Z.index,ke=1;if(K.wireframe===!0){if(Ee=re.getWireframeAttribute(Z),Ee===void 0)return;ke=2}const He=Z.drawRange,Te=Z.attributes.position;let Je=He.start*ke,lt=(He.start+He.count)*ke;ce!==null&&(Je=Math.max(Je,ce.start*ke),lt=Math.min(lt,(ce.start+ce.count)*ke)),Ee!==null?(Je=Math.max(Je,0),lt=Math.min(lt,Ee.count)):Te!=null&&(Je=Math.max(Je,0),lt=Math.min(lt,Te.count));const ct=lt-Je;if(ct<0||ct===1/0)return;at.setup(B,K,we,Z,Ee);let Rt,et=Me;if(Ee!==null&&(Rt=ie.get(Ee),et=je,et.setIndex(Rt)),B.isMesh)K.wireframe===!0?(be.setLineWidth(K.wireframeLinewidth*nt()),et.setMode(I.LINES)):et.setMode(I.TRIANGLES);else if(B.isLine){let Pe=K.linewidth;Pe===void 0&&(Pe=1),be.setLineWidth(Pe*nt()),B.isLineSegments?et.setMode(I.LINES):B.isLineLoop?et.setMode(I.LINE_LOOP):et.setMode(I.LINE_STRIP)}else B.isPoints?et.setMode(I.POINTS):B.isSprite&&et.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)et.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))et.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Pe=B._multiDrawStarts,rn=B._multiDrawCounts,tt=B._multiDrawCount,Wt=Ee?ie.get(Ee).bytesPerElement:1,$n=Re.get(K).currentProgram.getUniforms();for(let Dt=0;Dt<tt;Dt++)$n.setValue(I,"_gl_DrawID",Dt),et.render(Pe[Dt]/Wt,rn[Dt])}else if(B.isInstancedMesh)et.renderInstances(Je,ct,B.count);else if(Z.isInstancedBufferGeometry){const Pe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,rn=Math.min(Z.instanceCount,Pe);et.renderInstances(Je,ct,rn)}else et.render(Je,ct)};function it(E,k,Z){E.transparent===!0&&E.side===Ht&&E.forceSinglePass===!1?(E.side=Pt,E.needsUpdate=!0,qi(E,k,Z),E.side=Dn,E.needsUpdate=!0,qi(E,k,Z),E.side=Ht):qi(E,k,Z)}this.compile=function(E,k,Z=null){Z===null&&(Z=E),h=Ke.get(Z),h.init(k),S.push(h),Z.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),E!==Z&&E.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights();const K=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ce=B.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){const we=ce[me];it(we,Z,B),K.add(we)}else it(ce,Z,B),K.add(ce)}),S.pop(),h=null,K},this.compileAsync=function(E,k,Z=null){const K=this.compile(E,k,Z);return new Promise(B=>{function ce(){if(K.forEach(function(me){Re.get(me).currentProgram.isReady()&&K.delete(me)}),K.size===0){B(E);return}setTimeout(ce,10)}Oe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Vt=null;function on(E){Vt&&Vt(E)}function Ss(){In.stop()}function bs(){In.start()}const In=new gl;In.setAnimationLoop(on),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(E){Vt=E,J.setAnimationLoop(E),E===null?In.stop():In.start()},J.addEventListener("sessionstart",Ss),J.addEventListener("sessionend",bs),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(k),k=J.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,k,C),h=Ke.get(E,S.length),h.init(k),S.push(h),ne.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),j.setFromProjectionMatrix(ne),z=this.localClippingEnabled,$=le.init(this.clippingPlanes,z),p=ve.get(E,y.length),p.init(),y.push(p),J.enabled===!0&&J.isPresenting===!0){const ce=v.xr.getDepthSensingMesh();ce!==null&&zo(ce,k,-1/0,v.sortObjects)}zo(E,k,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(H,Q),Ae=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Ae&&Ie.addToRenderList(p,E),this.info.render.frame++,$===!0&&le.beginShadows();const Z=h.state.shadowsArray;ye.render(Z,E,k),$===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=p.opaque,B=p.transmissive;if(h.setupLights(),k.isArrayCamera){const ce=k.cameras;if(B.length>0)for(let me=0,we=ce.length;me<we;me++){const Ee=ce[me];Es(K,B,E,Ee)}Ae&&Ie.render(E);for(let me=0,we=ce.length;me<we;me++){const Ee=ce[me];ws(p,E,Ee,Ee.viewport)}}else B.length>0&&Es(K,B,E,k),Ae&&Ie.render(E),ws(p,E,k);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,k),at.resetDefaultState(),M=-1,x=null,S.pop(),S.length>0?(h=S[S.length-1],$===!0&&le.setGlobalState(v.clippingPlanes,h.state.camera)):h=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function zo(E,k,Z,K){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){K&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ne);const me=te.update(E),we=E.material;we.visible&&p.push(E,me,we,Z,De.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const me=te.update(E),we=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),De.copy(me.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(ne)),Array.isArray(we)){const Ee=me.groups;for(let ke=0,He=Ee.length;ke<He;ke++){const Te=Ee[ke],Je=we[Te.materialIndex];Je&&Je.visible&&p.push(E,me,Je,Z,De.z,Te)}}else we.visible&&p.push(E,me,we,Z,De.z,null)}}const ce=E.children;for(let me=0,we=ce.length;me<we;me++)zo(ce[me],k,Z,K)}function ws(E,k,Z,K){const B=E.opaque,ce=E.transmissive,me=E.transparent;h.setupLightsView(Z),$===!0&&le.setGlobalState(v.clippingPlanes,Z),K&&be.viewport(P.copy(K)),B.length>0&&Xi(B,k,Z),ce.length>0&&Xi(ce,k,Z),me.length>0&&Xi(me,k,Z),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Es(E,k,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[K.id]===void 0&&(h.state.transmissionRenderTarget[K.id]=new qn(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Hi:vn,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ce=h.state.transmissionRenderTarget[K.id],me=K.viewport||P;ce.setSize(me.z,me.w);const we=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(O),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Ae&&Ie.render(Z);const Ee=v.toneMapping;v.toneMapping=Pn;const ke=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),h.setupLightsView(K),$===!0&&le.setGlobalState(v.clippingPlanes,K),Xi(E,Z,K),R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Te=0,Je=k.length;Te<Je;Te++){const lt=k[Te],ct=lt.object,Rt=lt.geometry,et=lt.material,Pe=lt.group;if(et.side===Ht&&ct.layers.test(K.layers)){const rn=et.side;et.side=Pt,et.needsUpdate=!0,Ts(ct,Z,K,Rt,et,Pe),et.side=rn,et.needsUpdate=!0,He=!0}}He===!0&&(R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce))}v.setRenderTarget(we),v.setClearColor(O,X),ke!==void 0&&(K.viewport=ke),v.toneMapping=Ee}function Xi(E,k,Z){const K=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ce=E.length;B<ce;B++){const me=E[B],we=me.object,Ee=me.geometry,ke=K===null?me.material:K,He=me.group;we.layers.test(Z.layers)&&Ts(we,k,Z,Ee,ke,He)}}function Ts(E,k,Z,K,B,ce){E.onBeforeRender(v,k,Z,K,B,ce),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(v,k,Z,K,E,ce),B.transparent===!0&&B.side===Ht&&B.forceSinglePass===!1?(B.side=Pt,B.needsUpdate=!0,v.renderBufferDirect(Z,k,K,B,E,ce),B.side=Dn,B.needsUpdate=!0,v.renderBufferDirect(Z,k,K,B,E,ce),B.side=Ht):v.renderBufferDirect(Z,k,K,B,E,ce),E.onAfterRender(v,k,Z,K,B,ce)}function qi(E,k,Z){k.isScene!==!0&&(k=Le);const K=Re.get(E),B=h.state.lights,ce=h.state.shadowsArray,me=B.state.version,we=Ce.getParameters(E,B.state,ce,k,Z),Ee=Ce.getProgramCacheKey(we);let ke=K.programs;K.environment=E.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(E.isMeshStandardMaterial?q:b).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",ze),ke=new Map,K.programs=ke);let He=ke.get(Ee);if(He!==void 0){if(K.currentProgram===He&&K.lightsStateVersion===me)return Rs(E,we),He}else we.uniforms=Ce.getUniforms(E),E.onBeforeCompile(we,v),He=Ce.acquireProgram(we,Ee),ke.set(Ee,He),K.uniforms=we.uniforms;const Te=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=le.uniform),Rs(E,we),K.needsLights=Cl(E),K.lightsStateVersion=me,K.needsLights&&(Te.ambientLightColor.value=B.state.ambient,Te.lightProbe.value=B.state.probe,Te.directionalLights.value=B.state.directional,Te.directionalLightShadows.value=B.state.directionalShadow,Te.spotLights.value=B.state.spot,Te.spotLightShadows.value=B.state.spotShadow,Te.rectAreaLights.value=B.state.rectArea,Te.ltc_1.value=B.state.rectAreaLTC1,Te.ltc_2.value=B.state.rectAreaLTC2,Te.pointLights.value=B.state.point,Te.pointLightShadows.value=B.state.pointShadow,Te.hemisphereLights.value=B.state.hemi,Te.directionalShadowMap.value=B.state.directionalShadowMap,Te.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Te.spotShadowMap.value=B.state.spotShadowMap,Te.spotLightMatrix.value=B.state.spotLightMatrix,Te.spotLightMap.value=B.state.spotLightMap,Te.pointShadowMap.value=B.state.pointShadowMap,Te.pointShadowMatrix.value=B.state.pointShadowMatrix),K.currentProgram=He,K.uniformsList=null,He}function As(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Ro.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Rs(E,k){const Z=Re.get(E);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function Al(E,k,Z,K,B){k.isScene!==!0&&(k=Le),R.resetTextureUnits();const ce=k.fog,me=K.isMeshStandardMaterial?k.environment:null,we=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ei,Ee=(K.isMeshStandardMaterial?q:b).get(K.envMap||me),ke=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,He=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Te=!!Z.morphAttributes.position,Je=!!Z.morphAttributes.normal,lt=!!Z.morphAttributes.color;let ct=Pn;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ct=v.toneMapping);const Rt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,et=Rt!==void 0?Rt.length:0,Pe=Re.get(K),rn=h.state.lights;if($===!0&&(z===!0||E!==x)){const Ft=E===x&&K.id===M;le.setState(K,E,Ft)}let tt=!1;K.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==rn.state.version||Pe.outputColorSpace!==we||B.isBatchedMesh&&Pe.batching===!1||!B.isBatchedMesh&&Pe.batching===!0||B.isBatchedMesh&&Pe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Pe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Pe.instancing===!1||!B.isInstancedMesh&&Pe.instancing===!0||B.isSkinnedMesh&&Pe.skinning===!1||!B.isSkinnedMesh&&Pe.skinning===!0||B.isInstancedMesh&&Pe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pe.instancingMorph===!1&&B.morphTexture!==null||Pe.envMap!==Ee||K.fog===!0&&Pe.fog!==ce||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==le.numPlanes||Pe.numIntersection!==le.numIntersection)||Pe.vertexAlphas!==ke||Pe.vertexTangents!==He||Pe.morphTargets!==Te||Pe.morphNormals!==Je||Pe.morphColors!==lt||Pe.toneMapping!==ct||Pe.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Pe.__version=K.version);let Wt=Pe.currentProgram;tt===!0&&(Wt=qi(K,k,B));let $n=!1,Dt=!1,Ri=!1;const ht=Wt.getUniforms(),Jt=Pe.uniforms;if(be.useProgram(Wt.program)&&($n=!0,Dt=!0,Ri=!0),K.id!==M&&(M=K.id,Dt=!0),$n||x!==E){be.buffers.depth.getReversed()?(Y.copy(E.projectionMatrix),Ic(Y),Uc(Y),ht.setValue(I,"projectionMatrix",Y)):ht.setValue(I,"projectionMatrix",E.projectionMatrix),ht.setValue(I,"viewMatrix",E.matrixWorldInverse);const xn=ht.map.cameraPosition;xn!==void 0&&xn.setValue(I,Se.setFromMatrixPosition(E.matrixWorld)),Be.logarithmicDepthBuffer&&ht.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ht.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Dt=!0,Ri=!0)}if(B.isSkinnedMesh){ht.setOptional(I,B,"bindMatrix"),ht.setOptional(I,B,"bindMatrixInverse");const Ft=B.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),ht.setValue(I,"boneTexture",Ft.boneTexture,R))}B.isBatchedMesh&&(ht.setOptional(I,B,"batchingTexture"),ht.setValue(I,"batchingTexture",B._matricesTexture,R),ht.setOptional(I,B,"batchingIdTexture"),ht.setValue(I,"batchingIdTexture",B._indirectTexture,R),ht.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&ht.setValue(I,"batchingColorTexture",B._colorsTexture,R));const Ci=Z.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&Ne.update(B,Z,Wt),(Dt||Pe.receiveShadow!==B.receiveShadow)&&(Pe.receiveShadow=B.receiveShadow,ht.setValue(I,"receiveShadow",B.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Jt.envMap.value=Ee,Jt.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&k.environment!==null&&(Jt.envMapIntensity.value=k.environmentIntensity),Dt&&(ht.setValue(I,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&Rl(Jt,Ri),ce&&K.fog===!0&&fe.refreshFogUniforms(Jt,ce),fe.refreshMaterialUniforms(Jt,K,L,G,h.state.transmissionRenderTarget[E.id]),Ro.upload(I,As(Pe),Jt,R)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ro.upload(I,As(Pe),Jt,R),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ht.setValue(I,"center",B.center),ht.setValue(I,"modelViewMatrix",B.modelViewMatrix),ht.setValue(I,"normalMatrix",B.normalMatrix),ht.setValue(I,"modelMatrix",B.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ft=K.uniformsGroups;for(let xn=0,yn=Ft.length;xn<yn;xn++){const Cs=Ft[xn];F.update(Cs,Wt),F.bind(Cs,Wt)}}return Wt}function Rl(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Cl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,k,Z){Re.get(E.texture).__webglTexture=k,Re.get(E.depthTexture).__webglTexture=Z;const K=Re.get(E);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const Z=Re.get(E);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,Z=0){C=E,w=k,T=Z;let K=!0,B=null,ce=!1,me=!1;if(E){const Ee=Re.get(E);if(Ee.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(I.FRAMEBUFFER,null),K=!1;else if(Ee.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Ee.__hasExternalTextures)R.rebindTextures(E,Re.get(E.texture).__webglTexture,Re.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Te=E.depthTexture;if(Ee.__boundDepthTexture!==Te){if(Te!==null&&Re.has(Te)&&(E.width!==Te.image.width||E.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(me=!0);const He=Re.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[k])?B=He[k][Z]:B=He[k],ce=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?B=Re.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?B=He[Z]:B=He,P.copy(E.viewport),D.copy(E.scissor),U=E.scissorTest}else P.copy(ee).multiplyScalar(L).floor(),D.copy(xe).multiplyScalar(L).floor(),U=_e;if(be.bindFramebuffer(I.FRAMEBUFFER,B)&&K&&be.drawBuffers(E,B),be.viewport(P),be.scissor(D),be.setScissorTest(U),ce){const Ee=Re.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ee.__webglTexture,Z)}else if(me){const Ee=Re.get(E.texture),ke=k||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ee.__webglTexture,Z||0,ke)}M=-1},this.readRenderTargetPixels=function(E,k,Z,K,B,ce,me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){be.bindFramebuffer(I.FRAMEBUFFER,we);try{const Ee=E.texture,ke=Ee.format,He=Ee.type;if(!Be.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-K&&Z>=0&&Z<=E.height-B&&I.readPixels(k,Z,K,B,Ve.convert(ke),Ve.convert(He),ce)}finally{const Ee=C!==null?Re.get(C).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(E,k,Z,K,B,ce,me){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){const Ee=E.texture,ke=Ee.format,He=Ee.type;if(!Be.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-K&&Z>=0&&Z<=E.height-B){be.bindFramebuffer(I.FRAMEBUFFER,we);const Te=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.bufferData(I.PIXEL_PACK_BUFFER,ce.byteLength,I.STREAM_READ),I.readPixels(k,Z,K,B,Ve.convert(ke),Ve.convert(He),0);const Je=C!==null?Re.get(C).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,Je);const lt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Lc(I,lt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ce),I.deleteBuffer(Te),I.deleteSync(lt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,Z=0){E.isTexture!==!0&&(Ni("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const K=Math.pow(2,-Z),B=Math.floor(E.image.width*K),ce=Math.floor(E.image.height*K),me=k!==null?k.x:0,we=k!==null?k.y:0;R.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,me,we,B,ce),be.unbindTexture()},this.copyTextureToTexture=function(E,k,Z=null,K=null,B=0){E.isTexture!==!0&&(Ni("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,E=arguments[1],k=arguments[2],B=arguments[3]||0,Z=null);let ce,me,we,Ee,ke,He,Te,Je,lt;const ct=E.isCompressedTexture?E.mipmaps[B]:E.image;Z!==null?(ce=Z.max.x-Z.min.x,me=Z.max.y-Z.min.y,we=Z.isBox3?Z.max.z-Z.min.z:1,Ee=Z.min.x,ke=Z.min.y,He=Z.isBox3?Z.min.z:0):(ce=ct.width,me=ct.height,we=ct.depth||1,Ee=0,ke=0,He=0),K!==null?(Te=K.x,Je=K.y,lt=K.z):(Te=0,Je=0,lt=0);const Rt=Ve.convert(k.format),et=Ve.convert(k.type);let Pe;k.isData3DTexture?(R.setTexture3D(k,0),Pe=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(R.setTexture2DArray(k,0),Pe=I.TEXTURE_2D_ARRAY):(R.setTexture2D(k,0),Pe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const rn=I.getParameter(I.UNPACK_ROW_LENGTH),tt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Wt=I.getParameter(I.UNPACK_SKIP_PIXELS),$n=I.getParameter(I.UNPACK_SKIP_ROWS),Dt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ee),I.pixelStorei(I.UNPACK_SKIP_ROWS,ke),I.pixelStorei(I.UNPACK_SKIP_IMAGES,He);const Ri=E.isDataArrayTexture||E.isData3DTexture,ht=k.isDataArrayTexture||k.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Jt=Re.get(E),Ci=Re.get(k),Ft=Re.get(Jt.__renderTarget),xn=Re.get(Ci.__renderTarget);be.bindFramebuffer(I.READ_FRAMEBUFFER,Ft.__webglFramebuffer),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let yn=0;yn<we;yn++)Ri&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.get(E).__webglTexture,B,He+yn),E.isDepthTexture?(ht&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.get(k).__webglTexture,B,lt+yn),I.blitFramebuffer(Ee,ke,ce,me,Te,Je,ce,me,I.DEPTH_BUFFER_BIT,I.NEAREST)):ht?I.copyTexSubImage3D(Pe,B,Te,Je,lt+yn,Ee,ke,ce,me):I.copyTexSubImage2D(Pe,B,Te,Je,lt+yn,Ee,ke,ce,me);be.bindFramebuffer(I.READ_FRAMEBUFFER,null),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ht?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Pe,B,Te,Je,lt,ce,me,we,Rt,et,ct.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Pe,B,Te,Je,lt,ce,me,we,Rt,ct.data):I.texSubImage3D(Pe,B,Te,Je,lt,ce,me,we,Rt,et,ct):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,Te,Je,ce,me,Rt,et,ct.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,Te,Je,ct.width,ct.height,Rt,ct.data):I.texSubImage2D(I.TEXTURE_2D,B,Te,Je,ce,me,Rt,et,ct);I.pixelStorei(I.UNPACK_ROW_LENGTH,rn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Wt),I.pixelStorei(I.UNPACK_SKIP_ROWS,$n),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Dt),B===0&&k.generateMipmaps&&I.generateMipmap(Pe),be.unbindTexture()},this.copyTextureToTexture3D=function(E,k,Z=null,K=null,B=0){return E.isTexture!==!0&&(Ni("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,K=arguments[1]||null,E=arguments[2],k=arguments[3],B=arguments[4]||0),Ni('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,Z,K,B)},this.initRenderTarget=function(E){Re.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){w=0,T=0,C=null,be.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class _s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=t}clone(){return new _s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xp extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Oo extends Zn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Do=new N,Lo=new N,Ca=new dt,Ui=new No,mo=new Vi,mr=new N,Pa=new N;class vs extends mt{constructor(e=new yt,t=new Oo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let o=1,r=t.count;o<r;o++)Do.fromBufferAttribute(t,o-1),Lo.fromBufferAttribute(t,o),n[o]=n[o-1],n[o]+=Do.distanceTo(Lo);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(o),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;Ca.copy(o).invert(),Ui.copy(e.ray).applyMatrix4(Ca);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const m=Math.max(0,s.start),_=Math.min(d.count,s.start+s.count);for(let g=m,p=_-1;g<p;g+=c){const h=d.getX(g),y=d.getX(g+1),S=go(this,e,Ui,l,h,y);S&&t.push(S)}if(this.isLineLoop){const g=d.getX(_-1),p=d.getX(m),h=go(this,e,Ui,l,g,p);h&&t.push(h)}}else{const m=Math.max(0,s.start),_=Math.min(f.count,s.start+s.count);for(let g=m,p=_-1;g<p;g+=c){const h=go(this,e,Ui,l,g,g+1);h&&t.push(h)}if(this.isLineLoop){const g=go(this,e,Ui,l,_-1,m);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=o.length;r<s;r++){const a=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function go(i,e,t,n,o,r){const s=i.geometry.attributes.position;if(Do.fromBufferAttribute(s,o),Lo.fromBufferAttribute(s,r),t.distanceSqToSegment(Do,Lo,mr,Pa)>n)return;mr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(mr);if(!(l<e.near||l>e.far))return{distance:l,point:Pa.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Da=new N,La=new N;class qp extends vs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let o=0,r=t.count;o<r;o+=2)Da.fromBufferAttribute(t,o),La.fromBufferAttribute(t,o+1),n[o]=o===0?0:n[o-1],n[o+1]=n[o]+Da.distanceTo(La);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bl extends Zn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ia=new dt,rs=new No,_o=new Vi,vo=new N;class Yp extends mt{constructor(e=new yt,t=new bl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(o),_o.radius+=r,e.ray.intersectsSphere(_o)===!1)return;Ia.copy(o).invert(),rs.copy(e.ray).applyMatrix4(Ia);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let _=f,g=m;_<g;_++){const p=c.getX(_);vo.fromBufferAttribute(u,p),Ua(vo,p,l,o,e,t,this)}}else{const f=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let _=f,g=m;_<g;_++)vo.fromBufferAttribute(u,_),Ua(vo,_,l,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=o.length;r<s;r++){const a=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ua(i,e,t,n,o,r,s){const a=rs.distanceSqToPoint(i);if(a<t){const l=new N;rs.closestPointToPoint(i,l),l.applyMatrix4(n);const c=o.ray.origin.distanceTo(l);if(c<o.near||c>o.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class xs extends At{constructor(e,t,n,o,r,s,a,l,c){super(e,t,n,o,r,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ye extends yt{constructor(e=1,t=1,n=1,o=32,r=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:o,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:l};const c=this;o=Math.floor(o),r=Math.floor(r);const d=[],u=[],f=[],m=[];let _=0;const g=[],p=n/2;let h=0;y(),s===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(m,2));function y(){const v=new N,A=new N;let w=0;const T=(t-e)/n;for(let C=0;C<=r;C++){const M=[],x=C/r,P=x*(t-e)+e;for(let D=0;D<=o;D++){const U=D/o,O=U*l+a,X=Math.sin(O),W=Math.cos(O);A.x=P*X,A.y=-x*n+p,A.z=P*W,u.push(A.x,A.y,A.z),v.set(X,T,W).normalize(),f.push(v.x,v.y,v.z),m.push(U,1-x),M.push(_++)}g.push(M)}for(let C=0;C<o;C++)for(let M=0;M<r;M++){const x=g[M][C],P=g[M+1][C],D=g[M+1][C+1],U=g[M][C+1];(e>0||M!==0)&&(d.push(x,P,U),w+=3),(t>0||M!==r-1)&&(d.push(P,D,U),w+=3)}c.addGroup(h,w,0),h+=w}function S(v){const A=_,w=new Ue,T=new N;let C=0;const M=v===!0?e:t,x=v===!0?1:-1;for(let D=1;D<=o;D++)u.push(0,p*x,0),f.push(0,x,0),m.push(.5,.5),_++;const P=_;for(let D=0;D<=o;D++){const O=D/o*l+a,X=Math.cos(O),W=Math.sin(O);T.x=M*W,T.y=p*x,T.z=M*X,u.push(T.x,T.y,T.z),f.push(0,x,0),w.x=X*.5+.5,w.y=W*.5*x+.5,m.push(w.x,w.y),_++}for(let D=0;D<o;D++){const U=A+D,O=P+D;v===!0?d.push(O,O+1,U):d.push(O+1,O,U),C+=3}c.addGroup(h,C,v===!0?1:2),h+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ye(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wi extends Ye{constructor(e=1,t=1,n=32,o=1,r=!1,s=0,a=Math.PI*2){super(0,e,t,n,o,r,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:o,openEnded:r,thetaStart:s,thetaLength:a}}static fromJSON(e){return new Wi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ys extends yt{constructor(e=[],t=[],n=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:o};const r=[],s=[];a(o),c(n),d(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(s,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const S=new N,v=new N,A=new N;for(let w=0;w<t.length;w+=3)m(t[w+0],S),m(t[w+1],v),m(t[w+2],A),l(S,v,A,y)}function l(y,S,v,A){const w=A+1,T=[];for(let C=0;C<=w;C++){T[C]=[];const M=y.clone().lerp(v,C/w),x=S.clone().lerp(v,C/w),P=w-C;for(let D=0;D<=P;D++)D===0&&C===w?T[C][D]=M:T[C][D]=M.clone().lerp(x,D/P)}for(let C=0;C<w;C++)for(let M=0;M<2*(w-C)-1;M++){const x=Math.floor(M/2);M%2===0?(f(T[C][x+1]),f(T[C+1][x]),f(T[C][x])):(f(T[C][x+1]),f(T[C+1][x+1]),f(T[C+1][x]))}}function c(y){const S=new N;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(y),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function d(){const y=new N;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const v=p(y)/2/Math.PI+.5,A=h(y)/Math.PI+.5;s.push(v,1-A)}_(),u()}function u(){for(let y=0;y<s.length;y+=6){const S=s[y+0],v=s[y+2],A=s[y+4],w=Math.max(S,v,A),T=Math.min(S,v,A);w>.9&&T<.1&&(S<.2&&(s[y+0]+=1),v<.2&&(s[y+2]+=1),A<.2&&(s[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function m(y,S){const v=y*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function _(){const y=new N,S=new N,v=new N,A=new N,w=new Ue,T=new Ue,C=new Ue;for(let M=0,x=0;M<r.length;M+=9,x+=6){y.set(r[M+0],r[M+1],r[M+2]),S.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),w.set(s[x+0],s[x+1]),T.set(s[x+2],s[x+3]),C.set(s[x+4],s[x+5]),A.copy(y).add(S).add(v).divideScalar(3);const P=p(A);g(w,x+0,y,P),g(T,x+2,S,P),g(C,x+4,v,P)}}function g(y,S,v,A){A<0&&y.x===1&&(s[S]=y.x-1),v.x===0&&v.z===0&&(s[S]=A/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function h(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.vertices,e.indices,e.radius,e.details)}}class ko extends ys{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,o=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-n,0,-o,n,0,o,-n,0,o,n,-o,-n,0,-o,n,0,o,-n,0,o,n,0,-n,0,-o,n,0,-o,-n,0,o,n,0,o],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ko(e.radius,e.detail)}}class Bo extends yt{constructor(e=.5,t=1,n=32,o=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:o,thetaStart:r,thetaLength:s},n=Math.max(3,n),o=Math.max(1,o);const a=[],l=[],c=[],d=[];let u=e;const f=(t-e)/o,m=new N,_=new Ue;for(let g=0;g<=o;g++){for(let p=0;p<=n;p++){const h=r+p/n*s;m.x=u*Math.cos(h),m.y=u*Math.sin(h),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,d.push(_.x,_.y)}u+=f}for(let g=0;g<o;g++){const p=g*(n+1);for(let h=0;h<n;h++){const y=h+p,S=y,v=y+n+1,A=y+n+2,w=y+1;a.push(S,v,w),a.push(v,A,w)}}this.setIndex(a),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ut extends yt{constructor(e=1,t=32,n=16,o=0,r=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:o,phiLength:r,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+a,Math.PI);let c=0;const d=[],u=new N,f=new N,m=[],_=[],g=[],p=[];for(let h=0;h<=n;h++){const y=[],S=h/n;let v=0;h===0&&s===0?v=.5/t:h===n&&l===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const w=A/t;u.x=-e*Math.cos(o+w*r)*Math.sin(s+S*a),u.y=e*Math.cos(s+S*a),u.z=e*Math.sin(o+w*r)*Math.sin(s+S*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),p.push(w+v,1-S),y.push(c++)}d.push(y)}for(let h=0;h<n;h++)for(let y=0;y<t;y++){const S=d[h][y+1],v=d[h][y],A=d[h+1][y],w=d[h+1][y+1];(h!==0||s>0)&&m.push(S,v,w),(h!==n-1||l<Math.PI)&&m.push(v,A,w)}this.setIndex(m),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(g,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ut(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mn extends yt{constructor(e=1,t=.4,n=12,o=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:o,arc:r},n=Math.floor(n),o=Math.floor(o);const s=[],a=[],l=[],c=[],d=new N,u=new N,f=new N;for(let m=0;m<=n;m++)for(let _=0;_<=o;_++){const g=_/o*r,p=m/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(g),u.y=(e+t*Math.cos(p))*Math.sin(g),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),d.x=e*Math.cos(g),d.y=e*Math.sin(g),f.subVectors(u,d).normalize(),l.push(f.x,f.y,f.z),c.push(_/o),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=o;_++){const g=(o+1)*m+_-1,p=(o+1)*(m-1)+_-1,h=(o+1)*(m-1)+_,y=(o+1)*m+_;s.push(g,p,y),s.push(p,h,y)}this.setIndex(s),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Xe extends Zn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wl extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class jp extends wl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const gr=new dt,Na=new N,Fa=new N;class Zp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Na.setFromMatrixPosition(e.matrixWorld),t.position.copy(Na),Fa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fa),t.updateMatrixWorld(),gr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kp extends Zp{constructor(){super(new _l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Oa extends wl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Kp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ka{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ba=new N;let xo,_r;class $p extends mt{constructor(e=new N(0,0,1),t=new N(0,0,0),n=1,o=16776960,r=n*.2,s=r*.2){super(),this.type="ArrowHelper",xo===void 0&&(xo=new yt,xo.setAttribute("position",new st([0,0,0,0,1,0],3)),_r=new Ye(0,.5,1,5,1),_r.translate(0,-.5,0)),this.position.copy(t),this.line=new vs(xo,new Oo({color:o,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new V(_r,new nn({color:o,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Ba.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Ba,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Jp extends qp{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],o=new yt;o.setAttribute("position",new st(t,3)),o.setAttribute("color",new st(n,3));const r=new Oo({vertexColors:!0,toneMapped:!1});super(o,r),this.type="AxesHelper"}setColors(e,t,n){const o=new qe,r=this.geometry.attributes.color.array;return o.set(e),o.toArray(r,0),o.toArray(r,3),o.set(t),o.toArray(r,6),o.toArray(r,9),o.set(n),o.toArray(r,12),o.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Qp extends jn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:as}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=as);const za={type:"change"},Ms={type:"start"},El={type:"end"},yo=new No,Ha=new An,em=Math.cos(70*he.DEG2RAD),gt=new N,Ct=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vr=1e-6;class tm extends Qp{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mi.ROTATE,MIDDLE:mi.DOLLY,RIGHT:mi.PAN},this.touches={ONE:fi.ROTATE,TWO:fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Yn,this._lastTargetPosition=new N,this._quat=new Yn().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ka,this._sphericalDelta=new ka,this._scale=1,this._panOffset=new N,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new N,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=im.bind(this),this._onPointerDown=nm.bind(this),this._onPointerUp=om.bind(this),this._onContextMenu=dm.bind(this),this._onMouseWheel=am.bind(this),this._onKeyDown=lm.bind(this),this._onTouchStart=cm.bind(this),this._onTouchMove=hm.bind(this),this._onMouseDown=rm.bind(this),this._onMouseMove=sm.bind(this),this._interceptControlDown=um.bind(this),this._interceptControlUp=fm.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(za),this.update(),this.state=rt.NONE}update(e=null){const t=this.object.position;gt.copy(t).sub(this.target),gt.applyQuaternion(this._quat),this._spherical.setFromVector3(gt),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(n)&&isFinite(o)&&(n<-Math.PI?n+=Ct:n>Math.PI&&(n-=Ct),o<-Math.PI?o+=Ct:o>Math.PI&&(o-=Ct),n<=o?this._spherical.theta=Math.max(n,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+o)/2?Math.max(n,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=s!=this._spherical.radius}if(gt.setFromSpherical(this._spherical),gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=gt.length();s=this._clampDistance(a*this._scale);const l=a-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),s=gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(yo.origin.copy(this.object.position),yo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yo.direction))<em?this.object.lookAt(this.target):(Ha.setFromNormalAndCoplanarPoint(this.object.up,this.target),yo.intersectPlane(Ha,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vr||this._lastTargetPosition.distanceToSquared(this.target)>vr?(this.dispatchEvent(za),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ct/60*this.autoRotateSpeed*e:Ct/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){gt.setFromMatrixColumn(t,0),gt.multiplyScalar(-e),this._panOffset.add(gt)}_panUp(e,t){this.screenSpacePanning===!0?gt.setFromMatrixColumn(t,1):(gt.setFromMatrixColumn(t,0),gt.crossVectors(this.object.up,gt)),gt.multiplyScalar(e),this._panOffset.add(gt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;gt.copy(o).sub(this.target);let r=gt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),o=e-n.left,r=t-n.top,s=n.width,a=n.height;this._mouse.x=o/s*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ct*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ct*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Ct*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Ct*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Ct*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Ct*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(n,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(n,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,o=e.pageY-t.y,r=Math.sqrt(n*n+o*o);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),o=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(o,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ct*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ct*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(n,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,o=e.pageY-t.y,r=Math.sqrt(n*n+o*o);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function nm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function im(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function om(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(El),this.state=rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rm(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=rt.DOLLY;break;case mi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=rt.ROTATE}break;case mi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(Ms)}function sm(i){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function am(i){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(i.preventDefault(),this.dispatchEvent(Ms),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(El))}function lm(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function cm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case fi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=rt.TOUCH_ROTATE;break;case fi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=rt.TOUCH_DOLLY_PAN;break;case fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(Ms)}function hm(i){switch(this._trackPointer(i),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=rt.NONE}}function dm(i){this.enabled!==!1&&i.preventDefault()}function um(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const gn=new Map;function Mo({bg:i="#111622",lineMajor:e="rgba(0, 229, 255, 0.28)",lineMinor:t="rgba(255, 255, 255, 0.07)",repeat:n=24}={}){const o=`grid:${i}:${e}:${t}:${n}`;if(gn.has(o))return gn.get(o);const r=document.createElement("canvas");r.width=256,r.height=256;const s=r.getContext("2d");s.fillStyle=i,s.fillRect(0,0,256,256),s.strokeStyle=t,s.lineWidth=1;for(let l=0;l<=256;l+=32)s.beginPath(),s.moveTo(l,0),s.lineTo(l,256),s.stroke(),s.beginPath(),s.moveTo(0,l),s.lineTo(256,l),s.stroke();s.strokeStyle=e,s.lineWidth=2,s.strokeRect(0,0,256,256);const a=new xs(r);return a.wrapS=_n,a.wrapT=_n,a.repeat.set(n,n),a.anisotropy=4,gn.set(o,a),a}function xr({base:i="#6b442b",speckLight:e="#8b5e3c",speckDark:t="#432918",repeat:n=14}={}){const o=`noise:${i}:${e}:${t}:${n}`;if(gn.has(o))return gn.get(o);const r=document.createElement("canvas");r.width=256,r.height=256;const s=r.getContext("2d");s.fillStyle=i,s.fillRect(0,0,256,256);let a=1337;const l=()=>(a=a*16807%2147483647,(a-1)/2147483646);for(let d=0;d<1800;d++){const u=l()*256,f=l()*256,m=1+l()*4;s.fillStyle=l()>.5?e:t,s.globalAlpha=.25+l()*.3,s.beginPath(),s.arc(u,f,m,0,Math.PI*2),s.fill()}s.globalAlpha=1;const c=new xs(r);return c.wrapS=_n,c.wrapT=_n,c.repeat.set(n,n),gn.set(o,c),c}function pm(){const i="hazard_stripe";if(gn.has(i))return gn.get(i);const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d");t.fillStyle="#ffd100",t.fillRect(0,0,128,128),t.fillStyle="#14171f";for(let o=-128;o<256;o+=32)t.beginPath(),t.moveTo(o,0),t.lineTo(o+16,0),t.lineTo(o-48,128),t.lineTo(o-64,128),t.closePath(),t.fill();const n=new xs(e);return n.wrapS=_n,n.wrapT=_n,n.repeat.set(8,1),gn.set(i,n),n}function Kn(){return{spotYellow:new Xe({color:16763904,roughness:.34,metalness:.18}),electricTitanium:new Xe({color:14476270,roughness:.28,metalness:.62}),pearlWhite:new Xe({color:15857146,roughness:.32,metalness:.15}),carbonDark:new Xe({color:1777965,roughness:.5,metalness:.35}),matteBlack:new Xe({color:1119259,roughness:.78,metalness:.12}),gunmetal:new Xe({color:3884377,roughness:.36,metalness:.72}),chrome:new Xe({color:15134199,roughness:.14,metalness:.92}),oliveArmor:new Xe({color:5069123,roughness:.58,metalness:.24}),tanDesert:new Xe({color:11902841,roughness:.62,metalness:.18}),sensorCyan:new Xe({color:58879,emissive:51455,emissiveIntensity:1.4,roughness:.2}),sensorRingWarm:new Xe({color:16777215,emissive:14219007,emissiveIntensity:1.65,roughness:.15}),ledGreen:new Xe({color:1096065,emissive:1096065,emissiveIntensity:1.35}),ledOrange:new Xe({color:16739125,emissive:16739125,emissiveIntensity:1.4}),cardboard:new Xe({color:12159574,roughness:.85,metalness:.04}),cardboardAlt:new Xe({color:10777925,roughness:.86,metalness:.04}),tapeStrip:new Xe({color:14272163,roughness:.5,metalness:.05}),steelBlue:new Xe({color:2840458,roughness:.45,metalness:.55})}}function Nt(i,e,t,n,o=null){const r=new ae,s=new Ye(e,t,i,16);s.translate(0,-i/2,0);const a=new V(s,n);if(a.castShadow=!0,a.receiveShadow=!0,r.add(a),o){const l=new Ut(e*1.04,14,12),c=new V(l,o);c.castShadow=!0,r.add(c)}return r}function Gt(i,e,t,n,o="z"){const r=new ae,s=new V(new Ye(i,i,e,20),t),a=new V(new mn(i*.82,i*.1,8,24),n);return o==="x"?(s.rotation.z=Math.PI/2,a.rotation.y=Math.PI/2):o==="z"&&(s.rotation.x=Math.PI/2),s.castShadow=!0,r.add(s,a),r}function Ze(i,e=.14){const t=new Jp(e);return t.visible=!1,t.userData.isJointAxis=!0,i.add(t),t}function mm(i,e="lab"){const t=new ae;t.name=`env_${e}`;let n=725019,o=.022,r=.92,s=()=>0,a=null,l=null;const c=new jp(14412542,1976635,.85);t.add(c);const d=new Oa(16777215,1.9);d.position.set(6.5,11,6.5),d.castShadow=!0,d.shadow.mapSize.set(2048,2048),d.shadow.camera.near=.5,d.shadow.camera.far=36;const u=9;d.shadow.camera.left=-u,d.shadow.camera.right=u,d.shadow.camera.top=u,d.shadow.camera.bottom=-u,d.shadow.bias=-5e-4,t.add(d);const f=new Oa(3718648,.55);if(f.position.set(-7,5,-6),t.add(f),e==="lab"){n=15003383,o=.016,r=.92,c.color.setHex(16777215),c.groundColor.setHex(9741240),c.intensity=1.05,d.intensity=1.75;const m=Mo({bg:"#d9e3ec",lineMajor:"rgba(11, 49, 79, 0.20)",lineMinor:"rgba(11, 49, 79, 0.07)",repeat:28}),_=new V(new kt(46,46),new Xe({map:m,roughness:.68,metalness:.06}));_.rotation.x=-Math.PI/2,_.receiveShadow=!0,t.add(_);const g=Mo({bg:"#155fa0",lineMajor:"rgba(255, 255, 255, 0.22)",lineMinor:"rgba(255, 255, 255, 0.08)",repeat:6}),p=new V(new kt(7.2,7.2),new Xe({map:g,roughness:.72,metalness:.04}));p.rotation.x=-Math.PI/2,p.position.y=.003,p.receiveShadow=!0,t.add(p);const h=new V(new Bo(3.85,3.98,64),new nn({color:364744,side:Ht}));h.rotation.x=-Math.PI/2,h.position.y=.005,t.add(h);const y=new Xe({color:16317180,metalness:.15,roughness:.45}),S=new Xe({color:364744,emissive:364744,emissiveIntensity:1.2});[[-6.5,-6.5],[6.5,-6.5],[-6.5,6.5],[6.5,6.5]].forEach(([M,x])=>{const P=new V(new se(.28,4.8,.28),y);P.position.set(M,2.4,x),P.castShadow=!0,t.add(P);const D=new V(new se(.28,.18,.28),S);D.position.set(M*.94,4.45,x*.94),t.add(D)});const A=new Xe({color:13215353,roughness:.75}),w=new Xe({map:pm(),roughness:.5}),T=new V(new se(1.4,.45,1.1),A);T.position.set(-4.6,.225,-3.6),T.castShadow=!0,T.receiveShadow=!0;const C=new V(new se(1.42,.06,1.12),w);C.position.set(-4.6,.43,-3.6),t.add(T,C)}else if(e==="factory"){n=988189,o=.02,r=.86,c.color.setHex(16773590),d.color.setHex(16774368),f.color.setHex(16758531);const m=Mo({bg:"#1b222c",lineMajor:"rgba(255, 209, 0, 0.25)",lineMinor:"rgba(255, 255, 255, 0.04)",repeat:18}),_=new V(new kt(48,48),new Xe({map:m,roughness:.26,metalness:.35}));_.rotation.x=-Math.PI/2,_.receiveShadow=!0,t.add(_);const g=new nn({color:16765184});[-3.4,3.4].forEach(S=>{const v=new V(new kt(24,.1),g);v.rotation.x=-Math.PI/2,v.position.set(0,.004,S),t.add(v)});const p=new Xe({color:2450411,roughness:.45,metalness:.5}),h=new Xe({color:3359061,roughness:.55}),y=new Xe({color:16763904,roughness:.35,metalness:.2});[-5.2,5.2].forEach(S=>{const v=new ae;for(let A of[-.9,.9])for(let w of[-.45,.45]){const T=new V(new se(.08,2.6,.08),p);T.position.set(A,1.3,w),T.castShadow=!0,v.add(T)}[.65,1.45,2.25].forEach(A=>{const w=new V(new se(1.9,.06,.98),p);w.position.set(0,A,0),v.add(w);const T=new V(new se(.65,.36,.7),h);T.position.set(-.4,A+.21,0),T.castShadow=!0,v.add(T)}),v.position.set(S,0,-4.8),t.add(v)}),[[-3.6,-3.2],[3.6,-3.2],[-3.6,3.2],[3.6,3.2]].forEach(([S,v])=>{const A=new V(new Ye(.08,.08,.85,14),y);A.position.set(S,.425,v),A.castShadow=!0,t.add(A)})}else if(e==="rocky"){n=2693652,o=.025,r=.74,c.color.setHex(16765606),c.groundColor.setHex(4860957),d.color.setHex(16768954),d.intensity=2.2,f.color.setHex(16743239),s=(y,S)=>{const v=Math.hypot(y,S),A=Math.sin(y*.9)*Math.cos(S*.85)*.055+Math.sin(y*1.9+S*1.4)*.022,w=v>4.2?Math.pow((v-4.2)*.35,1.4)*(.5+.5*Math.sin(y*.6+S*.5)):0;return A+w};const m=new kt(48,48,96,96);m.rotateX(-Math.PI/2);const _=m.attributes.position;for(let y=0;y<_.count;y++){const S=_.getX(y),v=_.getZ(y);_.setY(y,s(S,v))}m.computeVertexNormals();const g=xr({base:"#7c4a30",speckLight:"#a66b49",speckDark:"#472819",repeat:16}),p=new V(m,new Xe({map:g,roughness:.9,metalness:.04}));p.receiveShadow=!0,t.add(p);const h=new Xe({color:7226156,roughness:.88,flatShading:!0});for(let y=0;y<18;y++){const S=y/18*Math.PI*2+.2,v=3.9+y%4*1.35,A=Math.cos(S)*v,w=Math.sin(S)*v,T=.25+y%5*.16,C=new V(new ko(T,1),h);C.scale.set(1.2,.72,.95),C.position.set(A,s(A,w)+T*.4,w),C.rotation.set(y*.7,y*1.1,0),C.castShadow=!0,C.receiveShadow=!0,t.add(C)}({particleSystem:a,particleVel:l}=Ga(220,14720880,.045,-.08)),t.add(a)}else if(e==="arctic"){n=1056046,o=.026,r=.28,c.color.setHex(14742270),c.groundColor.setHex(3359061),d.color.setHex(15792639),f.color.setHex(3718648);const m=xr({base:"#b9d8ea",speckLight:"#f0f9ff",speckDark:"#7faac4",repeat:12}),_=new V(new kt(48,48),new Xe({map:m,roughness:.12,metalness:.28}));_.rotation.x=-Math.PI/2,_.receiveShadow=!0,t.add(_);const g=new Xe({color:15857145,roughness:.75});for(let p=0;p<14;p++){const h=p/14*Math.PI*2,y=4.6+p%3*1.2,S=new V(new Ut(1.1+p%3*.35,16,12),g);S.scale.set(1.6,.38,1.2),S.position.set(Math.cos(h)*y,.05,Math.sin(h)*y),S.receiveShadow=!0,t.add(S)}({particleSystem:a,particleVel:l}=Ga(320,16777215,.055,-.65)),t.add(a)}else if(e==="warehouse"){n=1119517,o=.02,r=.84,c.color.setHex(16708551);const m=Mo({bg:"#222730",lineMajor:"rgba(255, 255, 255, 0.14)",lineMinor:"rgba(255, 255, 255, 0.04)",repeat:20}),_=new V(new kt(48,48),new Xe({map:m,roughness:.55,metalness:.15}));_.rotation.x=-Math.PI/2,_.receiveShadow=!0,t.add(_);const g=new Xe({color:3359061,metalness:.45,roughness:.5}),p=new V(new se(.12,3.2,7.5),g);p.position.set(-4.2,1.6,-2.5);const h=new V(new se(.12,3.2,7.5),g);h.position.set(4.2,1.6,-2.5),t.add(p,h);const y=new Xe({color:11896402,roughness:.85}),S=new Xe({color:8147753,roughness:.9});[-2.8,2.8].forEach(v=>{const A=new V(new se(1.2,.14,1.2),S);A.position.set(v,.07,-4.4),t.add(A);for(let w=0;w<3;w++){const T=new V(new se(.54,.42,.54),y);T.position.set(v-.28,.35+w*.43,-4.4),T.castShadow=!0;const C=T.clone();C.position.x=v+.28,t.add(T,C)}})}else if(e==="construction"){n=1448996,o=.022,r=.68;const m=xr({base:"#4b525c",speckLight:"#67707d",speckDark:"#323740",repeat:18}),_=new V(new kt(48,48),new Xe({map:m,roughness:.88,metalness:.08}));_.rotation.x=-Math.PI/2,_.receiveShadow=!0,t.add(_);const g=new Xe({color:14251782,metalness:.55,roughness:.4}),p=new Xe({color:9593401,roughness:.85}),h=new ae;[[-1.4,-.6],[1.4,-.6],[-1.4,.6],[1.4,.6]].forEach(([v,A])=>{const w=new V(new Ye(.035,.035,3.2,10),g);w.position.set(v,1.6,A),w.castShadow=!0,h.add(w)});const y=new V(new se(2.9,.07,1.25),p);y.position.set(0,1.85,0),y.castShadow=!0,h.add(y),h.position.set(0,0,-4.8),t.add(h);const S=new Xe({color:16734751,roughness:.45});[[-3.4,2.5],[3.4,2.5],[-3.8,-2.2],[3.8,-2.2]].forEach(([v,A])=>{const w=new V(new Wi(.18,.52,14),S);w.position.set(v,.26,A),w.castShadow=!0,t.add(w)})}return i.background=new qe(n),i.fog=new _s(n,o),i.add(t),{id:e,root:t,friction:r,getTerrainHeight:s,update(m){if(a&&l){const _=a.geometry.attributes.position;for(let g=0;g<_.count;g++){let p=_.getY(g)+l.vy*m,h=_.getX(g)+Math.sin(p*1.5+g)*.15*m;p<.05&&(p=6.5),_.setXY(g,h,p)}_.needsUpdate=!0}},dispose(){i.remove(t)}}}function Ga(i,e,t,n){const o=new yt,r=new Float32Array(i*3);for(let a=0;a<i;a++)r[a*3]=(Math.random()-.5)*18,r[a*3+1]=Math.random()*6.5,r[a*3+2]=(Math.random()-.5)*18;o.setAttribute("position",new $t(r,3));const s=new bl({color:e,size:t,transparent:!0,opacity:.65});return{particleSystem:new Yp(o,s),particleVel:{vy:n}}}function Tl(i="electric_2026"){const e=Kn(),t=i!=="hydraulic_2016",n=new ae,o=new ae;n.add(o);const r=new ae;r.position.set(0,.94,0),Ze(r,.18),n.add(r);const s=t?e.electricTitanium:e.pearlWhite,a=t?e.carbonDark:e.matteBlack,l=t?e.sensorCyan:e.spotYellow,c=new V(t?new Ye(.15,.14,.14,20):new se(.28,.15,.22),a);c.castShadow=!0,r.add(c);const d=new ae;d.position.set(0,.08,0),Ze(d,.16),r.add(d);const u=Gt(.11,.07,e.gunmetal,l,"y");d.add(u);const f=new ae;if(f.position.set(0,.05,0),d.add(f),t){const D=new V(new Ye(.185,.135,.44,20),s);D.scale.set(1.12,1,.78),D.position.y=.23,D.castShadow=!0,f.add(D);const U=new V(new se(.22,.24,.16),e.carbonDark);U.position.set(0,.25,.06),f.add(U);const O=new V(new se(.14,.022,.02),e.sensorCyan);O.position.set(0,.31,.145),f.add(O);const X=new V(new se(.21,.28,.11),e.gunmetal);X.position.set(0,.24,-.12),X.castShadow=!0,f.add(X)}else{const D=new V(new se(.42,.48,.34),e.pearlWhite);D.position.set(0,.26,-.02),D.castShadow=!0,f.add(D);const U=new V(new se(.34,.38,.18),e.matteBlack);U.position.set(0,.26,-.22),U.castShadow=!0,f.add(U);const O=new V(new mn(.23,.02,10,24,Math.PI),e.spotYellow);O.position.set(0,.36,.05),f.add(O)}const m=new ae;if(m.position.set(0,.5,0),Ze(m,.13),f.add(m),t){const D=new V(new Ye(.115,.115,.09,28),e.electricTitanium);D.rotation.x=Math.PI/2,D.position.y=.11,D.castShadow=!0,m.add(D);const U=new V(new Ye(.088,.088,.095,28),e.matteBlack);U.rotation.x=Math.PI/2,U.position.set(0,.11,.004),m.add(U);const O=new V(new mn(.092,.014,12,32),e.sensorRingWarm);O.position.set(0,.11,.048),m.add(O)}else{const D=new V(new se(.18,.14,.18),e.carbonDark);D.position.set(0,.09,.02),m.add(D);const U=new V(new se(.15,.045,.02),e.sensorCyan);U.position.set(0,.09,.112),m.add(U)}function _(D){const U=new ae;U.position.set(D*(t?.24:.27),.42,0),Ze(U,.13),f.add(U),U.add(Gt(.068,.075,e.gunmetal,l,"x"));const O=Nt(.31,.055,.046,s);U.add(O);const X=new ae;X.position.set(0,-.31,0),Ze(X,.11),U.add(X),X.add(Gt(.052,.065,e.gunmetal,l,"x"));const W=Nt(.28,.045,.036,a);X.add(W);const G=new ae;if(G.position.set(0,-.28,0),X.add(G),t){const L=new V(new se(.055,.075,.032),e.gunmetal);L.position.y=-.038,G.add(L);for(let Q=-1;Q<=1;Q++){const ee=new V(new se(.013,.058,.014),e.electricTitanium);ee.position.set(Q*.017,-.098,0),G.add(ee)}const H=new V(new se(.015,.048,.015),e.sensorCyan);H.position.set(-D*.032,-.062,.018),H.rotation.z=D*.45,G.add(H)}else{const L=new V(new mn(.038,.012,8,16,Math.PI*1.3),e.spotYellow);L.position.y=-.04,G.add(L)}return{shoulder:U,elbow:X,wrist:G}}const g=_(-1),p=_(1);function h(D){const U=new ae;U.position.set(D*.125,-.04,0),Ze(U,.14),r.add(U),U.add(Gt(.078,.085,e.gunmetal,l,"x"));const O=Nt(.42,.074,.06,s);if(U.add(O),!t){const Q=new V(new Ye(.016,.016,.28,10),e.chrome);Q.position.set(D*.045,-.2,.055),U.add(Q)}const X=new ae;X.position.set(0,-.42,0),Ze(X,.12),U.add(X),X.add(Gt(.064,.078,e.gunmetal,l,"x"));const W=Nt(.41,.058,.042,a);X.add(W);const G=new ae;G.position.set(0,-.41,0),Ze(G,.1),X.add(G);const L=new V(new se(.11,.045,.23),e.gunmetal);L.position.set(0,-.022,.04),L.castShadow=!0,G.add(L);const H=new V(new se(.114,.012,.234),e.matteBlack);return H.position.set(0,-.048,.04),G.add(H),{hip:U,knee:X,ankle:G}}const y=h(-1),S=h(1),v=new ae,A=new V(new se(.44,.18,.26),e.steelBlue),w=new V(new se(.46,.03,.28),e.spotYellow);w.position.y=.08,v.add(A,w),v.visible=!1,f.add(v);const T=new ae,C=new V(new se(.95,.52,.85),e.carbonDark);C.position.set(0,.26,.72),C.castShadow=!0,C.receiveShadow=!0;const M=new V(new se(.97,.04,.87),e.spotYellow);M.position.set(0,.51,.72),T.add(C,M),T.visible=!1,o.add(T);const x=new ae;[-1.05,1.05].forEach(D=>{const U=new V(new se(.75,.82,.42),e.gunmetal);U.position.set(0,.41,D),U.castShadow=!0,U.receiveShadow=!0;const O=new V(new se(.78,.03,.45),e.spotYellow);O.position.set(0,.83,D),x.add(U,O)}),x.visible=!1,o.add(x);function P(){r.position.set(0,.9,0),r.rotation.set(0,0,0),d.rotation.set(0,0,0),f.rotation.set(0,0,0),m.rotation.set(0,0,0),[y,S].forEach(D=>{D.hip.rotation.set(-.18,0,0),D.knee.rotation.set(.36,0,0),D.ankle.rotation.set(-.18,0,0)}),g.shoulder.rotation.set(.12,0,-.14),p.shoulder.rotation.set(.12,0,.14),g.elbow.rotation.set(-.45,0,0),p.elbow.rotation.set(-.45,0,0)}return P(),{root:n,update(D,U,O,X,W){P(),T.visible=O==="parkour_vault",x.visible=O==="factory_manip",v.visible=!1;let G=.25,L=.22,H=.3,Q=.2,ee=.18;if(O==="superhuman_getup"){const $=D%7.5;if($<1.4)r.position.set(0,.14,-.1),r.rotation.x=-Math.PI/2,y.hip.rotation.x=0,S.hip.rotation.x=0,y.knee.rotation.x=0,S.knee.rotation.x=0,g.shoulder.rotation.set(0,0,-.08),p.shoulder.rotation.set(0,0,.08),g.elbow.rotation.x=-.1,p.elbow.rotation.x=-.1,G=.18;else if($<3.2){const z=he.smoothstep($,1.4,3.2);r.position.set(0,he.lerp(.14,.56,z),he.lerp(-.1,.05,z)),r.rotation.x=he.lerp(-Math.PI/2,0,z);const Y=Math.sin(z*Math.PI)*1.45,ne=-Math.sin(z*Math.PI)*1.65;y.hip.rotation.x=Y-.2*z,S.hip.rotation.x=Y-.2*z,y.knee.rotation.x=ne+.4*z,S.knee.rotation.x=ne+.4*z,y.ankle.rotation.x=-(y.hip.rotation.x+y.knee.rotation.x),S.ankle.rotation.x=-(S.hip.rotation.x+S.knee.rotation.x),G=.86,L=.78,H=.92,Q=.85}else if($<4.6){const z=he.smoothstep($,3.2,4.6);r.position.y=he.lerp(.56,.91,z),r.rotation.y=z*Math.PI;const Y=(1-z)*.85;[y,S].forEach(ne=>{ne.hip.rotation.x=-.18-Y,ne.knee.rotation.x=.36+Y*2,ne.ankle.rotation.x=-.18-Y}),G=.68,H=.74}else{const z=he.smoothstep($,4.6,7.2);r.position.y=.91,r.rotation.y=Math.PI+z*Math.PI,d.rotation.y=z*Math.PI*2,m.rotation.y=-z*Math.PI*2,g.shoulder.rotation.set(-.45,0,-.35),p.shoulder.rotation.set(-.45,0,.35),g.elbow.rotation.x=-.8,p.elbow.rotation.x=-.8,G=.44,Q=.88}}else if(O==="backflip"){const $=D%4.4;if($<1){const z=Math.sin($/1*Math.PI*.5);r.position.y=.9-z*.32,f.rotation.x=z*.45,[y,S].forEach(Y=>{Y.hip.rotation.x=-.18-z*.95,Y.knee.rotation.x=.36+z*1.75,Y.ankle.rotation.x=-.18-z*.8}),g.shoulder.rotation.x=.9*z,p.shoulder.rotation.x=.9*z,G=.62,H=.75}else if($<1.28){const z=($-1)/.28;r.position.y=.58+z*.52,f.rotation.x=.45*(1-z)-.25*z,[y,S].forEach(Y=>{Y.hip.rotation.x=-1.13*(1-z)+.1*z,Y.knee.rotation.x=2.11*(1-z)+.05*z,Y.ankle.rotation.x=-.98*(1-z)+.35*z}),g.shoulder.rotation.x=-2.4*z,p.shoulder.rotation.x=-2.4*z,G=.98,L=.99,H=.99,ee=.85}else if($<2.38){const z=($-1.28)/1.1,Y=4*z*(1-z);r.position.y=1.05+Y*.92,r.position.z=-z*.35,r.rotation.x=-z*Math.PI*2;const ne=Math.sin(z*Math.PI);[y,S].forEach(Se=>{Se.hip.rotation.x=-1.45*ne,Se.knee.rotation.x=2.25*ne,Se.ankle.rotation.x=-.4*ne}),g.shoulder.rotation.x=-1.1*ne,p.shoulder.rotation.x=-1.1*ne,g.elbow.rotation.x=-1.4*ne,p.elbow.rotation.x=-1.4*ne,G=.52,L=.48,Q=.94}else if($<3.3){const z=($-2.38)/.92,Y=Math.sin(Math.min(1,z*1.4)*Math.PI)*(1-z*.5);r.position.z=-.35*(1-z),r.position.y=.9-Y*.34,f.rotation.x=Y*.38,[y,S].forEach(ne=>{ne.hip.rotation.x=-.18-Y*.92,ne.knee.rotation.x=.36+Y*1.78,ne.ankle.rotation.x=-.18-Y*.86}),g.shoulder.rotation.x=-1.25*(1-z*.7),p.shoulder.rotation.x=-1.25*(1-z*.7),G=.91,L=.82,H=.95}else{const z=($-3.3)/1.1;g.shoulder.rotation.set(-.3*Math.sin(z*Math.PI),0,-.38),p.shoulder.rotation.set(-.3*Math.sin(z*Math.PI),0,.38)}}else if(O==="factory_manip"){const $=D%6;let z=0,Y=0;if($<1.2)Y=he.smoothstep($,0,1.2)*.42;else if($<3.2){v.visible=!0;const ne=he.smoothstep($,1.2,3.2);z=ne*Math.PI,Y=.42*(1-Math.sin(ne*Math.PI)*.75)}else if($<4.4){v.visible=$<3.9;const ne=he.smoothstep($,3.2,4.4);z=Math.PI,Y=.42*(1-ne)}else{const ne=he.smoothstep($,4.4,6);z=Math.PI*(1-ne)}r.position.y=.88-Y*.18,d.rotation.y=z,f.rotation.x=Y*.55,m.rotation.y=Math.sin(D*1.5)*.15,[y,S].forEach(ne=>{ne.hip.rotation.x=-.22-Y*.35,ne.knee.rotation.x=.44+Y*.7,ne.ankle.rotation.x=-.22-Y*.35}),g.shoulder.rotation.set(-.85-Y*.35,.22,-.05),p.shoulder.rotation.set(-.85-Y*.35,-.22,.05),g.elbow.rotation.x=-.68,p.elbow.rotation.x=-.68,v.position.set(0,.14,.44),G=v.visible?.74:.36,L=v.visible?.65:.3,ee=v.visible?.86:.32,Q=.78}else if(O==="parkour_vault"){const $=D%4.6;if($<1.3){const z=$/1.3;r.position.z=he.lerp(-.75,.02,z);const Y=Math.sin(z*Math.PI*2)*.55;y.hip.rotation.x=-.2+Y,S.hip.rotation.x=-.2-Y,y.knee.rotation.x=.45+Math.max(0,-Y)*.8,S.knee.rotation.x=.45+Math.max(0,Y)*.8,g.shoulder.rotation.x=-Y*.8,p.shoulder.rotation.x=Y*.8,G=.66}else if($<2.2){const z=($-1.3)/.9,Y=Math.sin(z*Math.PI);r.position.z=he.lerp(.02,.72,z),r.position.y=he.lerp(.86,1.38,z)+Y*.35,f.rotation.x=.25*Y,[y,S].forEach(ne=>{ne.hip.rotation.x=-.28-Y*.85,ne.knee.rotation.x=.56+Y*1.35,ne.ankle.rotation.x=-.28-Y*.4}),g.shoulder.rotation.x=-1.5*Y,p.shoulder.rotation.x=-1.5*Y,G=.94,L=.91,H=.96}else if($<3.1)r.position.set(0,1.4,.72),[y,S].forEach(z=>{z.hip.rotation.x=-.25,z.knee.rotation.x=.5,z.ankle.rotation.x=-.25}),G=.38;else{const z=($-3.1)/1.5,Y=Math.sin(z*Math.PI);r.position.z=he.lerp(.72,-.75,z),r.position.y=he.lerp(1.4,.9,z)+Y*.28,[y,S].forEach(ne=>{ne.hip.rotation.x=-.22-Y*.5,ne.knee.rotation.x=.44+Y*.95}),G=.76,H=.82}}else{const $=D*6.2,z=Math.sin($),Y=Math.sin($+Math.PI),ne=Math.abs(Math.cos($));r.position.y=.87+ne*.085,r.position.x=Math.sin($)*.025,f.rotation.x=.22,d.rotation.y=-z*.22,y.hip.rotation.x=-.15+z*.78,S.hip.rotation.x=-.15+Y*.78,y.knee.rotation.x=.35+Math.max(0,-z)*1.25,S.knee.rotation.x=.35+Math.max(0,-Y)*1.25,y.ankle.rotation.x=-.2-z*.32,S.ankle.rotation.x=-.2-Y*.32,g.shoulder.rotation.set(-z*.85,0,-.12),p.shoulder.rotation.set(-Y*.85,0,.12),g.elbow.rotation.x=-1.15,p.elbow.rotation.x=-1.15,G=.72+ne*.14,L=.68+ne*.16,H=.84,Q=.62,ee=.54}const xe=X.getTerrainHeight(r.position.x,r.position.z),_e=he.clamp(1.25-X.friction,.35,1.15);r.position.x+=W.offsetX*_e,r.position.y+=xe,r.rotation.z+=W.leanZ*.85,f.rotation.z+=W.leanZ*.55,Math.abs(W.leanZ)>.02&&(y.hip.rotation.z=-W.leanZ*.9,S.hip.rotation.z=-W.leanZ*.9,g.shoulder.rotation.z-=Math.abs(W.leanZ)*1.8,p.shoulder.rotation.z+=Math.abs(W.leanZ)*1.8,G=Math.min(1,G+.28));const j=new N;return r.getWorldPosition(j),j.y+=.16,{pitchDeg:he.radToDeg(r.rotation.x+f.rotation.x),rollDeg:he.radToDeg(r.rotation.z),comHeight:j.y,torqueRatio:G,powerRatio:L,loads:[{label:"Leg Actuators",value:H},{label:"360° Core/Hip",value:Q},{label:"Arms & 13D Hand",value:ee}],comWorld:j}}}}function gm(i="spot_arm_cam2"){const e=Kn(),t=i!=="spot_base",n=new ae,o=new ae;n.add(o);const r=new ae;r.position.set(0,.56,0),Ze(r,.16),n.add(r);const s=new V(new se(.28,.16,.78),e.spotYellow);s.castShadow=!0,s.receiveShadow=!0,r.add(s);const a=new V(new Ye(.08,.12,.27,8),e.spotYellow);a.rotation.z=Math.PI/2,a.position.set(0,0,.41),r.add(a);const l=new V(new se(.22,.055,.03),e.matteBlack);l.position.set(0,.01,.49),r.add(l);const c=new V(new se(.16,.018,.035),e.sensorCyan);c.position.set(0,.01,.492),r.add(c);const d=new V(new se(.292,.052,.58),e.matteBlack);r.add(d);let u=null,f=null,m=null,_=null,g=null,p=null,h=null;const y=.36,S=.34;if(t){h=new ae,h.position.set(0,.085,-.2),r.add(h);const ee=new V(new Ye(.065,.075,.09,16),e.carbonDark);ee.position.y=.045;const xe=new V(new Ut(.062,16,14),e.gunmetal);xe.position.y=.12;const _e=new V(new Ye(.022,.022,.03,14),e.ledOrange);_e.rotation.x=Math.PI/2,_e.position.set(0,.12,.055),h.add(ee,xe,_e),u=new ae,u.position.set(0,.09,.22),Ze(u,.13),r.add(u);const j=Gt(.075,.06,e.matteBlack,e.spotYellow,"y");u.add(j),f=new ae,f.position.set(0,.04,0),Ze(f,.12),u.add(f);const $=new se(.055,.055,y);$.translate(0,0,y/2);const z=new V($,e.matteBlack);z.castShadow=!0,f.add(z),m=new ae,m.position.set(0,0,y),Ze(m,.11),f.add(m),m.add(Gt(.045,.055,e.gunmetal,e.spotYellow,"x"));const Y=new se(.044,.044,S);Y.translate(0,0,S/2);const ne=new V(Y,e.carbonDark);ne.castShadow=!0,m.add(ne),_=new ae,_.position.set(0,0,S),m.add(_);const Se=new V(new se(.06,.048,.055),e.spotYellow),De=new V(new Ut(.014,10,10),e.sensorCyan);De.position.set(0,.018,.03),g=new V(new se(.014,.022,.075),e.gunmetal),g.position.set(-.024,-.005,.055),p=g.clone(),p.position.x=.024,_.add(Se,De,g,p)}function v(ee,xe){const _e=new ae;_e.position.set(ee*.165,-.01,xe*.31),Ze(_e,.11),r.add(_e),_e.add(Gt(.055,.065,e.matteBlack,e.spotYellow,"z"));const j=new ae;j.position.set(ee*.035,0,0),_e.add(j);const $=Nt(.31,.042,.032,e.spotYellow);j.add($);const z=new ae;z.position.set(0,-.31,0),Ze(z,.09),j.add(z);const Y=new V(new Ut(.042,12,12),e.matteBlack);z.add(Y);const ne=Nt(.32,.026,.018,e.carbonDark);z.add(ne);const Se=new V(new Ut(.032,12,12),e.matteBlack);return Se.position.set(0,-.32,0),Se.castShadow=!0,z.add(Se),{hipRoll:_e,hipPitch:j,knee:z}}const A={fl:v(-1,1),fr:v(1,1),rl:v(-1,-1),rr:v(1,-1)},w=new ae,T=new V(new mn(.075,.007,12,32),e.sensorCyan),C=new V(new Ut(.016,12,12),e.ledGreen);w.add(T,C),w.position.set(0,.82,.74),w.visible=!1,o.add(w);const M=new ae,x=new V(new Ye(.045,.055,.92,14),e.gunmetal);x.position.set(0,.46,.82),x.castShadow=!0;const P=new ae;P.position.set(0,.78,.75);const D=new V(new mn(.13,.018,10,24),e.ledOrange),U=new V(new se(.25,.018,.018),e.gunmetal),O=new V(new se(.018,.25,.018),e.gunmetal);P.add(D,U,O),M.add(x,P),M.visible=!1,o.add(M);const X=new ae;for(let ee=0;ee<3;ee++){const xe=new V(new se(.95,.14*(ee+1),.36),e.gunmetal);xe.position.set(0,.07*(ee+1),.25+ee*.36),xe.castShadow=!0,xe.receiveShadow=!0;const _e=new V(new se(.96,.02,.04),e.spotYellow);_e.position.set(0,.14*(ee+1),.25+ee*.36-.17),X.add(xe,_e)}X.visible=!1,o.add(X);const W=new dt,G=new N;function L(ee){if(!t||!u)return;r.updateMatrixWorld(!0),W.copy(r.matrixWorld).invert(),G.copy(ee).applyMatrix4(W),G.sub(u.position),G.y-=.04;const xe=Math.atan2(G.x,G.z);u.rotation.y=xe;const _e=Math.hypot(G.x,G.z),j=G.y,$=he.clamp(Math.hypot(_e,j)-.05,.16,y+S-.02),z=Math.atan2(j,_e),Y=he.clamp(($*$-y*y-S*S)/(2*y*S),-.98,.98),ne=Math.acos(Y),Se=y+S*Math.cos(ne),De=S*Math.sin(ne),Le=z+Math.atan2(De,Se);f.rotation.x=-Le,m.rotation.x=ne,_.rotation.x=-(f.rotation.x+m.rotation.x)}function H(ee=0){const xe=-.58-ee*.45,_e=1.16+ee*.9;Object.values(A).forEach(j=>{j.hipRoll.rotation.set(0,0,0),j.hipPitch.rotation.set(xe,0,0),j.knee.rotation.set(_e,0,0)})}function Q(){t&&(u.rotation.set(0,0,0),f.rotation.set(-.95,0,0),m.rotation.set(1.85,0,0),_.rotation.set(-.9,0,0))}return{root:n,update(ee,xe,_e,j,$){r.position.set(0,.53,0),r.rotation.set(0,0,0),H(0),Q(),h&&(h.rotation.y=Math.sin(ee*.8)*.45),w.visible=_e==="chicken_head"&&t,M.visible=_e==="door_valve",X.visible=_e==="stair_climb";let z=.28,Y=.24,ne=.34,Se=.34,De=t?.2:.05;if(_e==="chicken_head"){const I=.11*Math.sin(ee*2.1);r.position.y=.5+I,r.position.x=.09*Math.sin(ee*1.4),r.position.z=.07*Math.cos(ee*1.7),r.rotation.x=.22*Math.sin(ee*1.9),r.rotation.z=.24*Math.cos(ee*1.5),r.rotation.y=.26*Math.sin(ee*1.1);const Fe=he.clamp((.55-r.position.y)*2.1,-.25,.55);H(Fe),A.fl.hipRoll.rotation.z=-r.rotation.z*.85,A.fr.hipRoll.rotation.z=-r.rotation.z*.85,A.rl.hipRoll.rotation.z=-r.rotation.z*.85,A.rr.hipRoll.rotation.z=-r.rotation.z*.85,w.rotation.z=ee*1.5,L(w.position),z=.54,Y=.46,De=t?.86:.1,ne=.62,Se=.58}else if(_e==="trot"){const I=ee*7.2,Fe=Math.sin(I),Oe=Math.sin(I+Math.PI);r.position.y=.53+Math.abs(Math.cos(I))*.028,r.rotation.z=Math.sin(I)*.035,r.rotation.x=Math.cos(I*2)*.025;const Be=(be,Qe)=>{const Re=Math.max(0,Qe);be.hipPitch.rotation.x=-.58+Qe*.36-Re*.25,be.knee.rotation.x=1.16+Re*.68};Be(A.fl,Fe),Be(A.rr,Fe),Be(A.fr,Oe),Be(A.rl,Oe),z=.64,Y=.58,ne=.72,Se=.74}else if(_e==="door_valve"){const I=ee%5.6;if(I<1.4){const Fe=he.smoothstep(I,0,1.4);r.position.z=he.lerp(-.12,.14,Fe),r.rotation.x=-.1*Fe,t&&L(new N(0,.78,he.lerp(.5,.74,Fe)))}else if(I<4){const Fe=(I-1.4)/2.6;r.position.z=.14,r.rotation.x=-.1,P.rotation.z=Fe*Math.PI*3,t&&(L(new N(0,.78,.74)),_.rotation.z=Fe*Math.PI*3),z=.76,De=.92}else{const Fe=he.smoothstep(I,4,5.6);r.position.z=he.lerp(.14,-.12,Fe),t&&Fe<.7&&L(new N(0,.74,he.lerp(.74,.45,Fe)))}}else if(_e==="stair_climb"){const I=ee%5.4,Fe=I<3.2?I/3.2:1-(I-3.2)/2.2,Oe=he.lerp(-.45,.88,Fe),Be=he.clamp((Oe+.1)*.38,0,.42);r.position.set(0,.53+Be,Oe),r.rotation.x=-.26*Math.sin(Fe*Math.PI);const be=ee*6.4,Qe=Math.sin(be),Re=Math.sin(be+Math.PI);[[A.fl,Qe],[A.rr,Qe],[A.fr,Re],[A.rl,Re]].forEach(([R,b])=>{const q=Math.max(0,b);R.hipPitch.rotation.x=-.62+b*.34-q*.42,R.knee.rotation.x=1.2+q*.85}),z=.84,Y=.79,ne=.86,Se=.91}else if(_e==="uptown_dance"){const I=ee*5.2;if(r.position.y=.51+Math.abs(Math.sin(I))*.075,r.position.x=Math.sin(I*.5)*.14,r.rotation.y=Math.sin(I*.5)*.32,r.rotation.x=Math.sin(I)*.16,r.rotation.z=Math.cos(I*.5)*.14,Object.entries(A).forEach(([Fe,Oe],Be)=>{const be=I+Be*.8;Oe.hipPitch.rotation.x=-.58+Math.sin(be)*.28,Oe.knee.rotation.x=1.18+Math.cos(be)*.35,Oe.hipRoll.rotation.z=Math.sin(I*.5)*.18}),t){u.rotation.y=Math.sin(I*.5)*.65,f.rotation.x=-1.15+Math.sin(I)*.35,m.rotation.x=1.05+Math.cos(I)*.45,_.rotation.x=Math.sin(I*2)*.4;const Fe=.02+Math.abs(Math.sin(I*2))*.022;g.position.x=-Fe,p.position.x=Fe}z=.71,Y=.68,De=.75}else if(_e==="self_right"){const I=ee%5.2;if(I<1.3)r.position.y=.16,r.rotation.z=-1.58,H(.4),z=.2;else if(I<2.8){const Fe=he.smoothstep(I,1.3,2.8);r.position.y=he.lerp(.16,.22,Math.sin(Fe*Math.PI)),r.rotation.z=he.lerp(-1.58,0,Fe),A.fr.hipRoll.rotation.z=-.9*Math.sin(Fe*Math.PI),A.rr.hipRoll.rotation.z=-.9*Math.sin(Fe*Math.PI),t&&(u.rotation.y=-.8*Math.sin(Fe*Math.PI),f.rotation.x=-.35),z=.94,ne=.95,De=.88}else if(I<4.1){const Fe=he.smoothstep(I,2.8,4.1);r.position.y=he.lerp(.2,.53,Fe),H((1-Fe)*.75),z=.78}}const Le=j.getTerrainHeight(r.position.x,r.position.z),Ae=he.clamp(1.3-j.friction,.35,1.25);r.position.x+=$.offsetX*Ae,r.position.y+=Le,r.rotation.z+=$.leanZ*.75,Math.abs($.leanZ)>.02&&(Object.values(A).forEach(I=>{I.hipRoll.rotation.z-=$.leanZ*1.1}),z=Math.min(1,z+.3));const nt=new N;return r.getWorldPosition(nt),{pitchDeg:he.radToDeg(r.rotation.x),rollDeg:he.radToDeg(r.rotation.z),comHeight:nt.y,torqueRatio:z,powerRatio:Y,loads:[{label:"Forelegs (6D)",value:ne},{label:"Hindlegs (6D)",value:Se},{label:t?"6-DOF Spot Arm":"Payload Deck",value:De}],comWorld:nt}}}}function _m(i="stretch_gen2"){const e=Kn(),t=i!=="stretch_gen1",n=new ae,o=new ae;n.add(o);const r=new ae;r.position.set(0,.14,0),Ze(r,.2),n.add(r);const s=new V(new se(.96,.22,.96),e.matteBlack);s.castShadow=!0,s.receiveShadow=!0,r.add(s);const a=new V(new se(.88,.08,.88),t?e.carbonDark:e.pearlWhite);a.position.y=.14,r.add(a);const l=[];[[-.43,-.43],[.43,-.43],[-.43,.43],[.43,.43]].forEach(([H,Q])=>{const ee=new V(new se(.14,.23,.14),e.spotYellow);ee.position.set(H,0,Q),r.add(ee);const xe=new ae;xe.position.set(H*.82,-.08,Q*.82);const _e=new V(new Ye(.075,.075,.06,16),e.gunmetal);_e.rotation.z=Math.PI/2,xe.add(_e),r.add(xe),l.push(xe)});const c=new ae;c.position.set(-.34,.18,-.34),r.add(c);const d=new V(new se(.065,2.25,.065),e.gunmetal);d.position.y=1.12,d.castShadow=!0,c.add(d);const u=new V(new se(.32,.09,.1),e.matteBlack);u.position.set(.08,2.22,.04),c.add(u);const f=new V(new se(.26,.032,.02),t?e.sensorRingWarm:e.sensorCyan);f.position.set(.08,2.22,.095),c.add(f);const m=new V(new Wi(.65,1.9,16,1,!0),new nn({color:58879,transparent:!0,opacity:.14,side:Ht}));m.position.set(.25,1.55,.82),m.rotation.x=Math.PI*.42,m.visible=!1,c.add(m);const _=new ae;_.position.set(0,.18,0),Ze(_,.22),r.add(_),_.add(Gt(.24,.1,e.gunmetal,t?e.sensorCyan:e.spotYellow,"y"));const g=new V(new se(.22,1.88,.24),t?e.electricTitanium:e.pearlWhite);g.position.set(0,.96,0),g.castShadow=!0,_.add(g);const p=new ae;p.position.set(0,1.35,.12),Ze(p,.16),_.add(p);const h=new V(new se(.26,.24,.22),e.spotYellow);p.add(h);const y=new ae;y.position.set(0,0,.08),p.add(y);const S=new se(.13,.13,.85);S.translate(0,0,.425);const v=new V(S,e.carbonDark);v.castShadow=!0,y.add(v);const A=new ae;A.position.set(0,0,.55),y.add(A);const w=new se(.095,.095,.72);w.translate(0,0,.36);const T=new V(w,e.gunmetal);T.castShadow=!0,A.add(T);const C=new ae;C.position.set(0,0,.72),Ze(C,.14),A.add(C);const M=new ae;C.add(M);const x=new V(new se(.54,.055,.36),e.spotYellow);x.position.set(0,-.06,.12),x.castShadow=!0,M.add(x);for(let H=-.18;H<=.181;H+=.12)for(let Q=.02;Q<=.23;Q+=.1){const ee=new V(new Ye(.026,.036,.035,12),e.matteBlack);ee.position.set(H,-.1,Q),M.add(ee)}const P=new V(new se(.24,.022,.022),e.ledGreen);P.position.set(0,-.025,.29),M.add(P);const D=new ae,U=So(.28,.26,.32,e.cardboard,e.tapeStrip);U.position.set(-.15,-.25,.12);const O=So(.26,.26,.32,e.cardboardAlt,e.tapeStrip);O.position.set(.15,-.25,.12),D.add(U,O),D.visible=!1,t||(O.visible=!1),M.add(D);const X=new ae;for(let H=0;H<4;H++)for(let Q=-2;Q<=2;Q++){const ee=So(.34,.3,.34,(H+Q)%2===0?e.cardboard:e.cardboardAlt,e.tapeStrip);ee.position.set(Q*.36,.15+H*.305,1.65),X.add(ee)}o.add(X);const W=new ae,G=new V(new se(.72,.08,2.3),e.steelBlue);G.position.set(0,.62,-1.75),W.add(G);for(let H of[-.95,-2.55])for(let Q of[-.3,.3]){const ee=new V(new Ye(.028,.028,.62,10),e.gunmetal);ee.position.set(Q,.31,H),W.add(ee)}for(let H=0;H<11;H++){const Q=new V(new Ye(.026,.026,.66,12),e.chrome);Q.rotation.z=Math.PI/2,Q.position.set(0,.665,-.82-H*.185),W.add(Q)}const L=So(.32,.26,.34,e.cardboard,e.tapeStrip);return L.position.set(0,.81,-1.1),W.add(L),o.add(W),{root:n,update(H,Q,ee,xe,_e){r.position.set(0,.14,0),r.rotation.set(0,0,0),_.rotation.set(0,0,0),p.position.y=1.25,y.rotation.set(0,0,0),A.position.z=.32,M.rotation.set(0,0,0),l.forEach(Le=>Le.rotation.set(0,0,0)),D.visible=!1,m.visible=!1,X.visible=ee!=="omni_maneuver",W.visible=ee==="multipick_unload",L.visible=!1;let j=.3,$=.28,z=.35,Y=.4,ne=.22;if(ee==="multipick_unload"){const Le=H%4.6;if(Le<1){const Ae=he.smoothstep(Le,0,1);p.position.y=he.lerp(1.32,1.18,Ae),A.position.z=he.lerp(.18,.62,Ae),j=.52}else if(Le<2.6){D.visible=!0;const Ae=he.smoothstep(Le,1,2.6);p.position.y=1.18+Math.sin(Ae*Math.PI)*.26,A.position.z=.62-Math.sin(Ae*Math.PI)*.34,_.rotation.y=Ae*Math.PI,M.rotation.y=Ae*Math.PI*.5,j=.88,$=.84,z=.92,Y=.89,ne=.96}else if(Le<3.4){D.visible=Le<2.95,L.visible=Le>=2.95;const Ae=(Le-2.6)/.8;_.rotation.y=Math.PI,p.position.y=he.lerp(1.18,1.06,Math.sin(Ae*Math.PI)),A.position.z=.45,L.visible&&(L.position.z=he.lerp(-1.05,-1.65,(Le-2.95)/.45)),j=.54}else{L.visible=!0;const Ae=he.smoothstep(Le,3.4,4.6);L.position.z=he.lerp(-1.65,-2.55,Ae),_.rotation.y=t?he.lerp(Math.PI,Math.PI*2,Ae):he.lerp(Math.PI,0,Ae),p.position.y=1.32,A.position.z=.18,j=.62,z=.78}}else if(ee==="continuous_360")_.rotation.y=H*1.65,M.rotation.y=-H*2.4,p.position.y=1.25+Math.sin(H*2.2)*.25,A.position.z=.35+Math.cos(H*2.2)*.22,D.visible=!0,j=.71,$=.68,z=.9,ne=.88;else if(ee==="omni_maneuver"){const Le=H%8;if(Le<4){const Ae=Le/4*Math.PI*2;r.position.x=Math.sin(Ae)*.85,r.position.z=Math.sin(Ae*2)*.45;const nt=Math.atan2(Math.cos(Ae),Math.cos(Ae*2));l.forEach(I=>{I.rotation.y=nt})}else{const Ae=(Le-4)/4;r.rotation.y=Ae*Math.PI*2,l.forEach((nt,I)=>{nt.rotation.y=(I%2===0?1:-1)*.78}),_.rotation.y=-Ae*Math.PI*2}j=.64,$=.6}else if(ee==="dark_trailer_scan"){m.visible=!0,m.rotation.z=Math.sin(H*2.4)*.28;const Le=.5+.5*Math.sin(H*1.4);p.position.y=he.lerp(1.1,1.72,Le),y.rotation.x=-.18*Le,A.position.z=he.lerp(.22,.64,Le),D.visible=Le>.55,j=.69,Y=.84}const Se=xe.getTerrainHeight(r.position.x,r.position.z);r.position.x+=_e.offsetX*.45,r.position.y+=Se,r.rotation.z+=_e.leanZ*.28;const De=new N;return r.getWorldPosition(De),De.y+=.38,{pitchDeg:he.radToDeg(r.rotation.x),rollDeg:he.radToDeg(r.rotation.z),comHeight:De.y,torqueRatio:j,powerRatio:$,loads:[{label:">360° Waist/Mast",value:z},{label:"7-DOF Crane Arm",value:Y},{label:"SmartGripper Vac",value:ne}],comWorld:De}}}}function So(i,e,t,n,o){const r=new ae,s=new V(new se(i,e,t),n);s.castShadow=!0,s.receiveShadow=!0;const a=new V(new se(i*.18,.006,t*1.01),o);return a.position.y=e/2+.002,r.add(s,a),r}function vm(i="handle_2019"){const e=Kn(),t=i!=="handle_2017",n=new ae,o=new ae;n.add(o);const r=new ae;r.position.set(0,.96,0),Ze(r,.18),n.add(r);const s=new V(new se(.36,.18,.24),t?e.spotYellow:e.pearlWhite);s.castShadow=!0,r.add(s);function a(v){const A=new ae;A.position.set(v*.21,-.04,0),Ze(A,.14),r.add(A),A.add(Gt(.068,.075,e.gunmetal,e.spotYellow,"x"));const w=Nt(.46,.056,.046,e.carbonDark);A.add(w);const T=new ae;T.position.set(0,-.46,0),Ze(T,.12),A.add(T);const C=Nt(.45,.046,.038,t?e.spotYellow:e.pearlWhite);T.add(C);const M=new ae;M.position.set(v*.045,-.45,0),T.add(M);const x=new V(new Ye(.16,.16,.065,24),e.matteBlack);x.rotation.z=Math.PI/2,x.castShadow=!0;const P=new V(new Ye(.095,.095,.07,16),e.gunmetal);P.rotation.z=Math.PI/2;const D=new V(new se(.075,.17,.025),e.spotYellow);return M.add(x,P,D),{hip:A,knee:T,wheelHub:M}}const l=a(-1),c=a(1),d=new ae;d.position.set(0,.08,0),r.add(d);let u=null,f=null,m=null,_=null,g=null;if(t){u=new ae,u.position.set(0,.04,-.1),Ze(u,.15),d.add(u);const v=new se(.12,.1,.62);v.translate(0,0,-.31);const A=new V(v,e.gunmetal),w=new V(new se(.34,.22,.26),e.matteBlack);w.position.set(0,0,-.64),w.castShadow=!0;const T=new V(new se(.35,.04,.27),e.spotYellow);T.position.set(0,.05,-.64),u.add(A,w,T);const C=new V(new se(.22,.56,.18),e.spotYellow);C.position.set(0,.28,.04),C.castShadow=!0,d.add(C),f=new ae,f.position.set(0,.56,.06),Ze(f,.15),d.add(f);const M=new se(.11,.1,.78);M.translate(0,0,.39);const x=new V(M,e.carbonDark);x.castShadow=!0,f.add(x);const P=new V(new se(.36,.045,.28),e.gunmetal);P.position.set(0,-.06,.74),f.add(P),m=new V(new se(.38,.28,.32),e.cardboard),m.position.set(0,-.22,.74),m.castShadow=!0,m.visible=!1,f.add(m)}else{const v=new V(new se(.38,.52,.24),e.pearlWhite);v.position.y=.28,v.castShadow=!0,d.add(v);const A=w=>{const T=new ae;return T.position.set(w*.24,.48,0),d.add(T),T.add(Nt(.52,.048,.036,e.carbonDark)),T};_=A(-1),g=A(1),m=new V(new se(.38,.26,.3),e.cardboard),m.position.set(0,.18,.38),m.visible=!1,d.add(m)}const p=new ae,h=new V(new se(1.5,.07,.07),e.spotYellow);h.position.set(0,.56,0),h.castShadow=!0;const y=new V(new se(.07,.6,.24),e.gunmetal);y.position.set(-.72,.3,0);const S=y.clone();return S.position.x=.72,p.add(h,y,S),p.visible=!1,o.add(p),{root:n,update(v,A,w,T,C){r.position.set(0,.94,0),r.rotation.set(0,0,0),d.rotation.set(0,0,0),p.visible=w==="hurdle_jump",m&&(m.visible=!1);const M=(L,H)=>{l.hip.rotation.x=-.35-L*.65,l.knee.rotation.x=.7+L*1.3,c.hip.rotation.x=-.35-H*.65,c.knee.rotation.x=.7+H*1.3};M(.1,.1),t?(u.rotation.set(-.15,0,0),f.rotation.set(.12,0,0)):(_.rotation.set(-.35,0,0),g.rotation.set(-.35,0,0));let x=.32,P=.28,D=.45,U=.38,O=.3;if(w==="hurdle_jump"){const L=v%3.8,H=he.lerp(-1.45,1.45,L/3.8);if(r.position.z=H,l.wheelHub.rotation.x=v*9,c.wheelHub.rotation.x=v*9,L>1&&L<1.45){const Q=Math.sin((L-1)/.45*Math.PI*.5);r.position.y=.94-Q*.32,M(.1+Q*.75,.1+Q*.75),d.rotation.x=.28*Q,x=.76,U=.88}else if(L>=1.45&&L<2.45){const Q=(L-1.45)/1,ee=Math.sin(Q*Math.PI);r.position.y=.92+ee*.86,M(.15+ee*.85,.15+ee*.85),t&&(u.rotation.x=-.45*ee),x=Q<.25||Q>.8?.97:.45,P=Q<.25?.98:.4,U=.96}else if(L>=2.45&&L<2.95){const Q=Math.sin((L-2.45)/.5*Math.PI);r.position.y=.94-Q*.24,M(.1+Q*.55,.1+Q*.55),x=.82}}else if(w==="tail_counterbalance"){const L=v%5,H=Math.sin(L/5*Math.PI);m.visible=L>.8&&L<4.2,r.position.z=Math.sin(v*2.2)*.14,l.wheelHub.rotation.x=Math.cos(v*2.2)*1.4,c.wheelHub.rotation.x=Math.cos(v*2.2)*1.4,r.position.y=.9-H*.18,M(.15+H*.35,.15+H*.35),t?(f.rotation.x=.45*H-.15,u.rotation.x=.42*H):(_.rotation.x=-1.15*H,g.rotation.x=-1.15*H,d.rotation.x=-.22*H),x=.74,P=.62,O=.94,D=.72}else if(w==="banked_carve"){const L=v*1.75;r.position.x=Math.sin(L)*1.15,r.position.z=Math.sin(L*2)*.55,r.rotation.y=Math.atan2(Math.cos(L)*1.15,Math.cos(L*2)*1.1);const H=-Math.sin(L)*.36;r.rotation.z=H,M(.25+Math.max(0,H)*.65,.25+Math.max(0,-H)*.65),l.wheelHub.rotation.x=v*11,c.wheelHub.rotation.x=v*11,x=.68,P=.66,D=.85}else if(w==="hurricane_squat"){r.rotation.y=v*4.5;const L=.5+.5*Math.sin(v*3.2);r.position.y=.96-L*.36,M(.08+L*.82,.08+L*.82),l.wheelHub.rotation.x=v*8,c.wheelHub.rotation.x=-v*8,t&&(u.rotation.x=-.1+L*.35),x=.79,P=.77,U=.9,D=.84}const X=T.getTerrainHeight(r.position.x,r.position.z),W=he.clamp(1.35-T.friction,.4,1.3);r.position.x+=C.offsetX*W,r.position.y+=X,r.rotation.z+=C.leanZ*.9;const G=new N;return r.getWorldPosition(G),{pitchDeg:he.radToDeg(r.rotation.x+d.rotation.x),rollDeg:he.radToDeg(r.rotation.z),comHeight:G.y,torqueRatio:x,powerRatio:P,loads:[{label:"Hub Drive Wheels",value:D},{label:"Hydraulic Knees",value:U},{label:t?"Tail Counterwt.":"Upper Balance",value:O}],comWorld:G}}}}function xm(i="bigdog_2005"){const e=Kn(),t=i==="ls3_2012",n=new ae,o=new ae;o.position.set(0,.72,0),Ze(o,.18),n.add(o);let r=null;if(t){const l=new V(new Ye(.26,.24,1.08,20),e.oliveArmor);l.rotation.x=Math.PI/2,l.castShadow=!0,o.add(l);const c=new V(new se(.58,.22,.68),e.tanDesert);c.position.set(0,.16,-.05),c.castShadow=!0,o.add(c);const d=new ae;d.position.set(0,.08,.62),o.add(d);const u=new V(new se(.24,.2,.24),e.oliveArmor);r=new V(new Ye(.075,.075,.09,16),e.gunmetal),r.position.y=.14;const f=new V(new Ye(.077,.077,.025,16),e.sensorCyan);f.position.y=.14,d.add(u,r,f)}else{const l=new V(new se(.32,.28,.92),e.carbonDark);l.castShadow=!0,o.add(l),[-.21,.21].forEach(u=>{const f=new V(new se(.12,.22,.56),e.tanDesert);f.position.set(u,.06,-.04),f.castShadow=!0,o.add(f)});const c=new V(new Ye(.045,.045,.34,12),e.chrome);c.rotation.x=Math.PI/2,c.position.set(.1,.17,-.25),o.add(c);const d=new V(new Ye(.045,.065,.32,12),e.matteBlack);d.rotation.x=-.65,d.position.set(0,.14,.52),o.add(d),r=new V(new Ye(.065,.065,.08,16),e.gunmetal),r.position.set(0,.27,.62),o.add(r)}function s(l,c){const d=new ae;d.position.set(l*.21,-.04,c*.38),Ze(d,.13),o.add(d);const u=new ae;d.add(u);const f=Nt(.36,.052,.042,t?e.oliveArmor:e.gunmetal);u.add(f);const m=new V(new Ye(.018,.018,.24,10),e.chrome);m.position.set(0,-.16,.048),u.add(m);const _=new ae;_.position.set(0,-.36,0),Ze(_,.11),u.add(_);const g=Nt(.37,.036,.024,e.carbonDark);_.add(g);const p=new V(new Ye(.038,.038,.08,12),e.spotYellow);p.position.set(0,-.22,0),_.add(p);const h=new V(new Ut(.042,12,12),e.matteBlack);return h.position.set(0,-.37,0),h.castShadow=!0,_.add(h),{hipAbduct:d,hipPitch:u,knee:_,springCollar:p}}const a={fl:s(-1,1),fr:s(1,1),rl:s(-1,-1),rr:s(1,-1)};return{root:n,update(l,c,d,u,f){const m=t?.001:Math.sin(l*58)*.0035;o.position.set(0,.67+m,0),o.rotation.set(0,0,0),r&&(r.rotation.y=l*6),Object.values(a).forEach(w=>{w.hipAbduct.rotation.set(0,0,0),w.hipPitch.rotation.set(-.55,0,0),w.knee.rotation.set(1.1,0,0)});let _=.42,g=.48,p=.52,h=.4,y=.35;if(d==="ice_slip_recovery"){const w=l%5.4,T=l*6.8,C=Math.sin(T),M=Math.sin(T+Math.PI);if(a.fl.hipPitch.rotation.x=-.55+C*.32,a.rr.hipPitch.rotation.x=-.55+C*.32,a.fr.hipPitch.rotation.x=-.55+M*.32,a.rl.hipPitch.rotation.x=-.55+M*.32,w>1.2&&w<3.8){const x=(w-1.2)/2.6,P=Math.sin(x*Math.PI)*Math.exp(-x*1.1)*2.1,D=Math.sin(x*Math.PI*5);o.position.x=P*.58,o.position.y=.62-Math.abs(P)*.12,o.rotation.z=-P*.42+D*.14,o.rotation.y=P*.28,a.fl.hipAbduct.rotation.z=P*.72+D*.35,a.rl.hipAbduct.rotation.z=P*.68-D*.35,a.fr.hipAbduct.rotation.z=P*.78-D*.3,a.rr.hipAbduct.rotation.z=P*.74+D*.3,Object.values(a).forEach((U,O)=>{U.knee.rotation.x=1.22+Math.abs(Math.sin(l*14+O))*.45}),_=.96,g=.92,p=.97,y=.99,h=.88}}else if(d==="heavy_march"){const w=l*4.8;o.position.y=.65+Math.sin(w*2)*.025,o.rotation.z=Math.sin(w)*.055,o.rotation.x=Math.cos(w)*.04,[[a.fl,0],[a.rr,Math.PI*.5],[a.fr,Math.PI],[a.rl,Math.PI*1.5]].forEach(([T,C])=>{const M=Math.sin(w+C),x=Math.max(0,M);T.hipPitch.rotation.x=-.58+M*.34-x*.22,T.knee.rotation.x=1.16+x*.58,T.springCollar.position.y=-.22+Math.max(0,-M)*.035}),_=.76,g=.7,h=.84}else if(d==="ls3_bound"){const w=l*7.6,T=Math.sin(w),C=Math.sin(w-1.15),M=Math.max(0,Math.cos(w));o.position.y=.68+M*.11,o.rotation.x=Math.sin(w)*.18,a.fl.hipPitch.rotation.x=-.5+T*.48,a.fr.hipPitch.rotation.x=-.5+T*.48,a.rl.hipPitch.rotation.x=-.55+C*.52,a.rr.hipPitch.rotation.x=-.55+C*.52,a.fl.knee.rotation.x=1.05+Math.max(0,T)*.55,a.fr.knee.rotation.x=1.05+Math.max(0,T)*.55,a.rl.knee.rotation.x=1.1+Math.max(0,C)*.55,a.rr.knee.rotation.x=1.1+Math.max(0,C)*.55,_=.89,g=.91,p=.92}else if(d==="ls3_roll_recover"){const w=l%5;if(w<1.2)o.position.y=.28,o.rotation.z=2.35;else if(w<3){const T=he.smoothstep(w,1.2,3);o.position.y=he.lerp(.28,.34,Math.sin(T*Math.PI)),o.rotation.z=he.lerp(2.35,0,T),a.fl.hipAbduct.rotation.z=.95*Math.sin(T*Math.PI),a.rl.hipAbduct.rotation.z=.95*Math.sin(T*Math.PI),_=.95,p=.96}else{const T=he.smoothstep(w,3,4.2);o.position.y=he.lerp(.32,.67,T)}}const S=u.getTerrainHeight(o.position.x,o.position.z),v=he.clamp(1.4-u.friction,.4,1.35);o.position.x+=f.offsetX*v,o.position.y+=S,o.rotation.z+=f.leanZ*.85,Math.abs(f.leanZ)>.02&&Object.values(a).forEach(w=>{w.hipAbduct.rotation.z-=f.leanZ*1.15});const A=new N;return o.getWorldPosition(A),{pitchDeg:he.radToDeg(o.rotation.x),rollDeg:he.radToDeg(o.rotation.z),comHeight:A.y,torqueRatio:_,powerRatio:g,loads:[{label:"Servo Hydraulics",value:p},{label:"Shin Compliance",value:h},{label:"Capture Reflex",value:y}],comWorld:A}}}}function ym(i="cheetah_2012"){const e=Kn(),t=i==="wildcat_2013",n=new ae,o=new ae;n.add(o);const r=new ae;r.position.set(0,.66,0),Ze(r,.18),n.add(r),r.add(Gt(.085,.24,e.gunmetal,e.spotYellow,"x"));const s=new ae;Ze(s,.14),r.add(s);const a=new V(new se(t?.34:.24,t?.28:.17,.48),t?e.carbonDark:e.electricTitanium);if(a.position.set(0,.02,.25),a.castShadow=!0,s.add(a),t){const g=new V(new se(.38,.04,.52),e.spotYellow);g.position.set(0,.18,.26),s.add(g)}else{const g=new V(new Wi(.11,.26,4),e.spotYellow);g.rotation.x=Math.PI/2,g.rotation.y=Math.PI/4,g.position.set(0,.03,.56),s.add(g)}const l=new ae;Ze(l,.14),r.add(l);const c=new V(new se(t?.32:.22,t?.25:.15,.46),t?e.oliveArmor:e.gunmetal);c.position.set(0,.02,-.24),c.castShadow=!0,l.add(c);function d(g,p,h){const y=new ae;y.position.set(p*(t?.2:.16),-.02,h),Ze(y,.12),g.add(y),y.add(Gt(.072,.065,e.gunmetal,e.spotYellow,"x"));const S=Nt(.34,.046,.03,e.carbonDark);y.add(S);const v=new V(new Ye(.006,.006,.31,8),e.spotYellow);v.position.set(0,-.16,-.038),y.add(v);const A=new ae;A.position.set(0,-.34,0),Ze(A,.1),y.add(A);const w=Nt(.35,.026,.015,e.electricTitanium);A.add(w);const T=new V(new Ut(.028,10,10),e.matteBlack);return T.position.set(0,-.35,.015),A.add(T),{hip:y,knee:A}}const u={fl:d(s,-1,.36),fr:d(s,1,.36),rl:d(l,-1,-.36),rr:d(l,1,-.36)},f=new ae,m=new nn({color:58879,transparent:!0,opacity:.45}),_=[];for(let g=0;g<14;g++){const p=new V(new se(.025,.006,.65),m);p.position.set((g%7-3)*.38,.015,g<7?-1.4:1.4),f.add(p),_.push(p)}return o.add(f),{root:n,update(g,p,h,y,S){r.position.set(0,.64,0),r.rotation.set(0,0,0),s.rotation.set(0,0,0),l.rotation.set(0,0,0),f.visible=h==="spine_gallop"||h==="bounding";let v=.38,A=.42,w=.35,T=.4,C=.45;if(h==="spine_gallop"){const D=g*10.5,U=Math.sin(D),O=Math.max(0,-U);r.position.y=.63+O*.16+Math.abs(Math.cos(D))*.04,r.rotation.x=Math.cos(D)*.14,s.rotation.x=U*.28,l.rotation.x=-U*.32;const X=(W,G,L)=>{const H=Math.sin(D+G),Q=Math.max(0,H),ee=L?-.45:-.52;W.hip.rotation.x=ee+H*.78,W.knee.rotation.x=.95+Q*.95};X(u.fl,0,!1),X(u.fr,.55,!1),X(u.rr,2.75,!0),X(u.rl,3.3,!0),_.forEach((W,G)=>{W.position.z=((G*.47-g*9.5)%4.4+4.4)%4.4-2.2}),v=.95,A=.98,w=.96,T=.89,C=.98}else if(h==="bounding"){const D=g*8.4,U=Math.sin(D),O=Math.sin(D-1.35);r.position.y=.65+Math.max(0,Math.cos(D))*.15,r.rotation.x=Math.sin(D)*.24,s.rotation.x=Math.sin(D)*.16,l.rotation.x=-Math.sin(D)*.16,[u.fl,u.fr].forEach(X=>{X.hip.rotation.x=-.5+U*.64,X.knee.rotation.x=.98+Math.max(0,U)*.75}),[u.rl,u.rr].forEach(X=>{X.hip.rotation.x=-.48+O*.68,X.knee.rotation.x=.98+Math.max(0,O)*.75}),_.forEach((X,W)=>{X.position.z=((W*.47-g*6.5)%4.4+4.4)%4.4-2.2}),v=.86,A=.85,w=.82,T=.88,C=.9}else if(h==="banked_turn"){const D=g*2.3,U=1.25;r.position.x=Math.cos(D)*U,r.position.z=Math.sin(D)*U,r.rotation.y=-D,r.rotation.z=.42;const O=g*9;s.rotation.y=.16,l.rotation.y=-.16,[[u.fl,0],[u.fr,.5],[u.rl,2.8],[u.rr,3.3]].forEach(([X,W])=>{const G=Math.sin(O+W);X.hip.rotation.x=-.5+G*.62,X.knee.rotation.x=.96+Math.max(0,G)*.72}),v=.83,A=.8,w=.76,T=.85,C=.88}else if(h==="skid_stop"){const D=g%4;if(D<1.6){const U=D/1.6;r.position.z=he.lerp(-1.4,.25,U);const O=g*9.5;[u.fl,u.fr].forEach(X=>{X.hip.rotation.x=-.5+Math.sin(O)*.6,X.knee.rotation.x=.95+Math.max(0,Math.sin(O))*.7}),[u.rl,u.rr].forEach(X=>{X.hip.rotation.x=-.5+Math.cos(O)*.6,X.knee.rotation.x=.95+Math.max(0,Math.cos(O))*.7}),v=.78}else if(D<2.9){const U=he.smoothstep(D,1.6,2.5);r.position.z=he.lerp(.25,.72,U),r.position.y=.52,r.rotation.x=-.32*Math.sin(Math.min(1,(D-1.6)/.8)*Math.PI),[u.fl,u.fr].forEach(O=>{O.hip.rotation.x=.25,O.knee.rotation.x=.55}),[u.rl,u.rr].forEach(O=>{O.hip.rotation.x=-.95,O.knee.rotation.x=1.65}),v=.94,T=.97}else{const U=he.smoothstep(D,2.9,4);r.position.z=he.lerp(.72,-1.4,U)}}const M=y.getTerrainHeight(r.position.x,r.position.z),x=he.clamp(1.35-y.friction,.35,1.25);r.position.x+=S.offsetX*x,r.position.y+=M,r.rotation.z+=S.leanZ*.8;const P=new N;return r.getWorldPosition(P),{pitchDeg:he.radToDeg(r.rotation.x+s.rotation.x*.5),rollDeg:he.radToDeg(r.rotation.z),comHeight:P.y,torqueRatio:v,powerRatio:A,loads:[{label:"Sagittal Spine",value:w},{label:"Fore Tendon Legs",value:T},{label:"Hind Propulsion",value:C}],comWorld:P}}}}function Mm(i="sandflea_2012"){const e=Kn(),t=new ae,n=new ae;t.add(n);const o=new ae;o.position.set(0,.16,0),Ze(o,.16),t.add(o);const r=new V(new se(.36,.11,.46),e.oliveArmor);r.castShadow=!0,o.add(r);const s=new V(new se(.3,.03,.38),e.carbonDark);s.position.y=.065,o.add(s);const a=new V(new Ye(.042,.042,.28,14),e.gunmetal);a.rotation.x=Math.PI/2,a.position.set(0,.09,-.02),o.add(a);const l=new V(new se(.16,.045,.04),e.sensorCyan);l.position.set(0,.035,.235),o.add(l);const c=new V(new Ye(.02,.02,.34,10),e.chrome);c.position.set(0,-.06,-.18),c.visible=!1,o.add(c);const d=new V(new Ut(.18,14,12),new nn({color:14870768,transparent:!0,opacity:.65}));d.visible=!1,n.add(d);const u=[];[[-.23,.19],[.23,.19],[-.23,-.19],[.23,-.19]].forEach(([A,w])=>{const T=new ae;T.position.set(A,0,w);const C=new V(new Ye(.145,.125,.075,20),e.matteBlack);C.rotation.z=A>0?-Math.PI/2:Math.PI/2,C.castShadow=!0;const M=new V(new se(.08,.18,.028),e.spotYellow);T.add(C,M),o.add(T),u.push(T)});const f=new ae,m=new V(new se(1.45,1.75,1.25),e.gunmetal);m.position.set(0,.875,1.35),m.castShadow=!0,m.receiveShadow=!0;const _=new V(new se(1.5,.06,1.3),e.spotYellow);_.position.set(0,1.76,1.35),f.add(m,_),n.add(f);const g=new ae;g.position.set(0,.24,0),Ze(g,.18),t.add(g);const p=new V(new se(.44,.13,.76),e.tanDesert);p.castShadow=!0,g.add(p),[-.068,.068].forEach(A=>{const w=new V(new se(.38,.015,.68),e.carbonDark);w.position.y=A,g.add(w)});const h=new V(new se(.22,.04,.025),e.sensorCyan);h.position.set(0,0,.385),g.add(h);const y=[];[-.27,0,.27].forEach((A,w)=>{[-1,1].forEach(T=>{const C=new ae;C.position.set(T*.25,0,A),Ze(C,.09),g.add(C);const M=new V(new mn(.125,.018,10,22,Math.PI*1.18),e.spotYellow);M.rotation.y=Math.PI/2,M.position.y=-.11,M.castShadow=!0,C.add(M);const x=w%2===0&&T===-1||w%2===1&&T===1;y.push({hipShaft:C,isTripodA:x})})});const S=new ae;for(let A=0;A<6;A++){const w=new V(new ko(.11,0),e.gunmetal);w.scale.set(1.5,.55,1.3),w.position.set((A%2-.5)*.36,.04,-.7+A*.32),w.castShadow=!0,S.add(w)}n.add(S);function v(A){const w=(A%1+1)%1;return w<.58?he.lerp(-.6,.6,w/.58):he.lerp(.6,Math.PI*2-.6,(w-.58)/.42)}return{root:t,update(A,w,T,C,M){const x=T==="rhex_tripod"||T==="rhex_invert"||i==="rhex_2002"&&T!=="rooftop_launch"&&T!=="sandflea_recon";o.visible=!x,g.visible=x,f.visible=!x&&T==="rooftop_launch",S.visible=x,c.visible=!1,d.visible=!1;let P=.25,D=.25,U=x?g:o,O=[];if(x){if(g.position.set(0,.23,0),g.rotation.set(0,0,0),T==="rhex_invert"){const G=A%5.6,L=A*1.85;if(G<2)g.position.y=.23+Math.abs(Math.sin(L*Math.PI*2))*.035,y.forEach(H=>{H.hipShaft.rotation.x=v(L+(H.isTripodA?0:.5))});else if(G<3.1){const H=he.smoothstep(G,2,3.1);g.position.y=.23+Math.sin(H*Math.PI)*.34,g.rotation.z=H*Math.PI,y.forEach(Q=>{Q.hipShaft.rotation.x=H*Math.PI*3}),P=.92,D=.88}else g.rotation.z=Math.PI,g.position.y=.23+Math.abs(Math.sin(L*Math.PI*2))*.035,y.forEach(H=>{H.hipShaft.rotation.x=-v(L+(H.isTripodA?0:.5))}),P=.68}else{const G=A*1.95;g.position.z=Math.sin(A*.9)*.65,g.position.y=.24+Math.abs(Math.sin(G*Math.PI*2))*.045+Math.sin(g.position.z*5)*.03,g.rotation.x=Math.cos(g.position.z*5)*.12,g.rotation.z=Math.sin(G*Math.PI*2)*.06,y.forEach(L=>{L.hipShaft.rotation.x=v(G+(L.isTripodA?0:.5))}),P=.72,D=.65}O=[{label:"Tripod A (L1R2L3)",value:.78},{label:"Tripod B (R1L2R3)",value:.76},{label:"C-Spring Preflex",value:.88}]}else if(o.position.set(0,.145,-1.05),o.rotation.set(0,0,0),T==="rooftop_launch"){const G=A%6.2;if(G<1){const L=he.smoothstep(G,.2,1);o.position.z=he.lerp(-1.35,-.85,Math.min(1,G/.5)),o.rotation.x=-1.12*L,o.position.y=.145+L*.11,c.visible=L>.3,u.forEach(H=>{H.rotation.x=G*6}),P=.38}else if(G<2.45){const L=(G-1)/1.45;L<.22&&(d.visible=!0,d.position.set(0,.2+L*.4,-.88),d.scale.setScalar(.6+L*5.5));const H=he.lerp(-.85,1.32,L),Q=he.lerp(.25,1.93,L),ee=4*L*(1-L)*.95;o.position.set(0,Q+ee,H),o.rotation.x=he.lerp(-1.12,0,Math.min(1,L*1.45)),u.forEach(xe=>{xe.rotation.x=A*24}),P=L<.2?.99:.55,D=L<.2?.99:.48}else if(G<4.1){const L=(G-2.45)/1.65;o.position.set(0,1.93,1.32),o.rotation.y=Math.sin(L*Math.PI*2)*.65,u.forEach((H,Q)=>{H.rotation.x=(Q%2===0?1:-1)*Math.sin(L*Math.PI*2)*2.5}),P=.28}else{const L=(G-4.1)/2.1;if(L<.65){const H=L/.65;o.position.z=he.lerp(1.32,-1.25,H),o.position.y=he.lerp(1.93,.145,H*H)+Math.sin(H*Math.PI)*.28,u.forEach(Q=>{Q.rotation.x=A*18}),P=.52}else{const H=Math.sin((L-.65)/.35*Math.PI);o.position.set(0,.145-H*.03,-1.25),P=.72}}O=[{label:"CO₂ Launch Valve",value:P},{label:"Wheel Pitch Gyro",value:.84},{label:"4WD Skid Drive",value:.45}]}else{const G=A*2.4;o.position.x=Math.cos(G)*1.1,o.position.z=Math.sin(G*2)*.75,o.rotation.y=Math.atan2(-Math.sin(G)*1.1,Math.cos(G*2)*1.5),u.forEach(L=>{L.rotation.x=A*16}),P=.58,D=.54,O=[{label:"CO₂ Launch Valve",value:.08},{label:"IMU Yaw Loop",value:.66},{label:"4WD Skid Drive",value:.82}]}const X=C.getTerrainHeight(U.position.x,U.position.z);U.position.x+=M.offsetX*.75,U.position.y+=X,U.rotation.z+=M.leanZ*.65;const W=new N;return U.getWorldPosition(W),{pitchDeg:he.radToDeg(U.rotation.x),rollDeg:he.radToDeg(U.rotation.z),comHeight:W.y,torqueRatio:P,powerRatio:D,loads:O,comWorld:W}}}}const Sm={atlas:Tl,spot:gm,stretch:_m,handle:vm,bigdog:xm,cheetah:ym,"sandflea-rhex":Mm};class Um{constructor(e,{robotId:t="atlas",variantId:n=null,movementId:o=null,envId:r="lab",onTelemetry:s=null}={}){this.mountEl=e,this.robotId=t,this.variantId=n,this.movementId=o,this.envId=r,this.onTelemetry=s,this.simTime=0,this.speed=1,this.paused=!1,this.showJointAxes=!1,this.showCoM=!0,this.wireframe=!1,this.autoRotate=!1,this.shoveState={offsetX:0,velX:0,leanZ:0,velZ:0,arrowTimer:0,dir:1},this._initScene(),this.setEnvironment(this.envId),this.setRobot(this.robotId,this.variantId,this.movementId),this.setCameraPreset("orbit"),this._startLoop()}_initScene(){const e=Math.max(320,this.mountEl.clientWidth||800),t=Math.max(320,this.mountEl.clientHeight||520);this.scene=new Xp,this.camera=new zt(44,e/t,.1,80),this.camera.position.set(2.6,1.85,3.1),this.renderer=new Wp({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(e,t),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Wa,this.renderer.toneMapping=qa,this.renderer.toneMappingExposure=1.1,this.mountEl.innerHTML="",this.mountEl.appendChild(this.renderer.domElement),this.controls=new tm(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.07,this.controls.minDistance=1.1,this.controls.maxDistance=12,this.controls.maxPolarAngle=Math.PI*.492,this.controls.target.set(0,.8,0),this.comOverlay=new ae,this.comSphere=new V(new Ut(.052,16,16),new nn({color:1096065,depthTest:!1,transparent:!0,opacity:.9})),this.comSphere.renderOrder=999,this.comRing=new V(new Bo(.28,.32,36),new nn({color:1096065,side:Ht,transparent:!0,opacity:.65})),this.comRing.rotation.x=-Math.PI/2;const n=new yt().setFromPoints([new N(0,0,0),new N(0,1,0)]);this.comLine=new vs(n,new Oo({color:58879,transparent:!0,opacity:.7})),this.comOverlay.add(this.comSphere,this.comRing,this.comLine),this.scene.add(this.comOverlay),this.shoveArrow=new $p(new N(1,0,0),new N(-.9,.8,0),.75,16739125,.22,.14),this.shoveArrow.visible=!1,this.scene.add(this.shoveArrow),this.resizeObserver=new ResizeObserver(()=>this._onResize()),this.resizeObserver.observe(this.mountEl)}_onResize(){if(!this.mountEl)return;const e=Math.max(240,this.mountEl.clientWidth),t=Math.max(240,this.mountEl.clientHeight);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}setEnvironment(e){this.envInstance&&this.envInstance.dispose(),this.envId=e,this.envInstance=mm(this.scene,e)}setRobot(e,t=null,n=null){this.rigInstance&&this.scene.remove(this.rigInstance.root),this.robotId=e,t!==null&&(this.variantId=t),n!==null&&(this.movementId=n);const o=Sm[e]||Tl;this.rigInstance=o(this.variantId||void 0),this.scene.add(this.rigInstance.root),this._applyDebugFlags(),this._frameRobotTarget()}setVariant(e){this.variantId=e,this.setRobot(this.robotId,e,this.movementId)}setMovement(e){this.movementId=e,this.simTime=0}setSpeed(e){this.speed=e}togglePause(){return this.paused=!this.paused,this.paused}toggleJointAxes(){return this.showJointAxes=!this.showJointAxes,this._applyDebugFlags(),this.showJointAxes}toggleCoM(){return this.showCoM=!this.showCoM,this.comOverlay.visible=this.showCoM,this.showCoM}toggleWireframe(){return this.wireframe=!this.wireframe,this._applyDebugFlags(),this.wireframe}toggleAutoRotate(){return this.autoRotate=!this.autoRotate,this.controls.autoRotate=this.autoRotate,this.controls.autoRotateSpeed=1.6,this.autoRotate}triggerImpulseShove(){const e=Math.random()>.5?1:-1;this.shoveState.dir=e,this.shoveState.velX=e*2.35,this.shoveState.velZ=-e*3.1,this.shoveState.arrowTimer=.85}setCameraPreset(e){const t=this.robotId==="stretch"||this.robotId==="atlas"||this.robotId==="handle",n=this.robotId==="stretch"?1.05:t?.92:.52,o=this.robotId==="stretch"?4.4:t?3.4:2.55;this.controls.target.set(0,n,0),e==="side"?this.camera.position.set(o*1.18,n+.35,.01):e==="front"?this.camera.position.set(.01,n+.35,o*1.18):e==="top"?this.camera.position.set(.01,o*1.65,.45):this.camera.position.set(o*.82,n+.72,o*.92),this.controls.update()}_frameRobotTarget(){const e=this.robotId==="stretch"||this.robotId==="atlas"||this.robotId==="handle",t=this.robotId==="stretch"?1.05:e?.92:.52;this.controls.target.y=t,this.controls.update()}_applyDebugFlags(){this.rigInstance&&(this.comOverlay.visible=this.showCoM,this.rigInstance.root.traverse(e=>{e.userData&&e.userData.isJointAxis&&(e.visible=this.showJointAxes),e.isMesh&&e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{"wireframe"in n&&(n.wireframe=this.wireframe)})}))}_startLoop(){let e=performance.now(),t=0;const n=o=>{this._raf=requestAnimationFrame(n);const r=Math.min(.05,(o-e)/1e3);e=o;const s=this.paused?0:r*this.speed;if(this.simTime+=s,!this.paused){const c=-22*this.shoveState.offsetX-5.4*this.shoveState.velX;this.shoveState.velX+=c*r,this.shoveState.offsetX+=this.shoveState.velX*r;const d=-26*this.shoveState.leanZ-5.8*this.shoveState.velZ;this.shoveState.velZ+=d*r,this.shoveState.leanZ+=this.shoveState.velZ*r,this.shoveState.arrowTimer>0&&(this.shoveState.arrowTimer-=r)}this.envInstance&&this.envInstance.update(s);let a=null;if(this.rigInstance&&this.envInstance&&(a=this.rigInstance.update(this.simTime,s,this.movementId,this.envInstance,this.shoveState)),a&&a.comWorld){const l=a.comWorld,c=this.envInstance?this.envInstance.getTerrainHeight(l.x,l.z):0,d=Math.abs(this.shoveState.leanZ)>.04;this.comSphere.position.copy(l),this.comSphere.material.color.setHex(d?16739125:1096065),this.comRing.position.set(l.x,c+.012,l.z),this.comRing.material.color.setHex(d?16739125:1096065);const u=this.comLine.geometry.attributes.position;if(u.setXYZ(0,l.x,c+.01,l.z),u.setXYZ(1,l.x,l.y,l.z),u.needsUpdate=!0,this.shoveArrow.visible=this.shoveState.arrowTimer>0,this.shoveArrow.visible){const f=this.shoveState.dir;this.shoveArrow.setDirection(new N(f,0,0)),this.shoveArrow.position.set(l.x-f*.95,l.y+.05,l.z)}t+=r,this.onTelemetry&&t>=.06&&(t=0,this.onTelemetry({...a,recovering:d,friction:this.envInstance.friction}))}this.controls.update(),this.renderer.render(this.scene,this.camera)};this._raf=requestAnimationFrame(n)}dispose(){cancelAnimationFrame(this._raf),this.resizeObserver&&this.resizeObserver.disconnect(),this.renderer.dispose()}}export{Am as E,Dm as H,Rm as I,ss as R,Um as S,Im as T,Lm as a,Pm as b,Em as c,Tm as d,bm as e,Cm as f,wm as r};
