// Edit this file to customize the portfolio content.
// The website renders from this profile object.
window.portfolioProfile = {
  name: "Muhammad Faisal",
  location: "Diriyah, Riyadh, Saudi Arabia",
  headline: "Siemens Control Systems and BMS Engineer",
  subtitle: "Smart Building Automation - HVAC - Modbus - IoT - Energy Management - EV Infrastructure",
  intro:
    "BMS and Electrical Engineer with 4+ years of hands-on experience delivering smart building automation, HVAC commissioning, and energy management solutions across large-scale commercial and infrastructure projects in Saudi Arabia and Pakistan. Skilled in Embedded systems development and EV infrastructure",
  availability:
    "Open to senior BMS, Building Automation, and Smart Systems Engineering roles across KSA and the wider GCC region.",
  contact: {
    phone: "+966566870827",
    email: "mfaisal1117fs@gmail.com",
    linkedin: "https://www.linkedin.com/in/muhammad-faisal-163870163"
  },
  profileImage: {
    src: "./assets/profile.jpg",
    alt: "Stylized profile console for Muhammad Faisal"
  },
  stats: [
    { value: "4+", label: "Years engineering experience" },
    { value: "15+", label: "NEOM & High Rise operational sites supported" },
    { value: "3", label: "Countries of field and R&D work" },
    { value: "EV", label: "Developed Pakistan's first EV charger" }
  ],
  signal: [
    { label: "BMS commissioning", level: 96 },
    { label: "HVAC controls", level: 90 },
    { label: "Modbus RTU/TCP", level: 92 },
    { label: "Energy optimization", level: 84 },
    { label: "EV power systems", level: 80 }
  ],
  skillGroups: [
    {
      title: "Building Automation",
      items: [
        "Siemens Desigo",
        "PXC controller programming",
        "Thermostat configuration",
        "BMS testing and commissioning",
        "Legacy system upgrades"
      ]
    },
    {
      title: "Controls and Integration",
      items: [
        "Modbus RTU and TCP/IP",
        "RS485 and BACnet workflows",
        "FACP and BMS integration",
        "IoT-based monitoring",
        "Smart energy visibility"
      ]
    },
    {
      title: "Electrical and Embedded",
      items: [
        "Electrical panels",
        "Power electronics",
        "PCB layout and validation",
        "STM , ATmel and ESPrif",
        "EV Infrastructure"
      ]
    }
  ],
  tools: [
    "Siemens TIA Portal",
    "AutoDesk Fusion",
    "AutoDesk Eagle",
    "Desigo",
    "PXC Controllers",
    "Modbus",
    "BACnet",
    "RS485",
    "HVAC",
    "ELV/CCTV",
    "Energy Management"
  ],
  experience: [
    {
      company: "Siemens",
      role: "Electrical Engineer",
      period: "November 2023 - Present",
      location: "Riyadh, Saudi Arabia",
      summary:
        "Working with Siemens Building Technologies on design, execution, and commissioning of Building Management Systems, electrical systems, and smart energy solutions across major commercial and banking sector projects.",
      responsibilities: [
        "Lead commissioning, testing, and troubleshooting of BMS controllers, HVAC systems, and electrical panels.",
        "Configure and program Siemens Desigo and PXC controllers for system integration.",
        "Implement Modbus TCP/IP and RTU communication for seamless device connectivity.",
        "Oversee site upgrades and retrofitting while maintaining operational continuity.",
        "Collaborate with cross-functional teams to meet project standards and deadlines."
      ],
      achievements: [
        "Delivered system upgrades and commissioning at Saudi National Bank Head Office, KAFD, supporting critical infrastructure uptime.",
        "Managed BMS and electrical integration at Granada Business Park, improving energy usage and HVAC performance.",
        "Partnered with Siemens R&D at NEOM to implement BMS and smart energy solutions across 12 operational sites."
      ]
    },
    {
      company: "Tesla-PV, Islamabad, Pakistan",
      role: "Research and Development Engineer",
      period: "August 2021 - November 2023",
      location: "Islamabad, Pakistan",
      summary:
        "Contributed to EV charging systems and power electronics products, including Pakistan first Electric Vehicle charger and charging docking station work.",
      responsibilities: [
        "Designed, prototyped, and tested hardware for EV charging systems and energy products.",
        "Worked on PCB design, component selection, and hardware troubleshooting.",
        "Supported product development, validation, and deployment with cross-functional teams.",
        "Prepared technical documentation and field support for EV charger installations."
      ],
      achievements: [
        "Played a key role in the design and development of Pakistan first EV charger, deployed in multiple locations nationwide.",
        "Designed and developed EZ-Swap, Pakistan first electric bike charging docking station for EZ-bike.",
        "Improved charging system reliability by resolving critical hardware and integration issues.",
        "Supported R&D initiatives in energy storage, power electronics, and renewable integration."
      ]
    }
  ],
  impact: [
    {
      id: "granada-business-park",
      title: "Granada Business Park",
      tag: "Smart infrastructure",
      category: "BMS",
      image: "./assets/project-granada-bms.jpeg",
      text: "BMS upgrade and electrical integration focused on energy usage, HVAC performance, and reliable commissioning for a demanding commercial environment.",
      images: [
        "./assets/gb1.jpg",
        "./assets/gb2.jpg",
        "./assets/gb3.jpg",
        "./assets/gb4.jpg"
      ],
      client: "Granada Business Park",
      location: "Riyadh, Saudi Arabia",
      period: "June 2025 – Present",
      role: "Electrical Engineer – Siemens",
      details: "Led BMS site operations, system upgrades, and electrical integration for Granada Business Park facilities. Planned and implemented upgrades of outdated controllers and thermostats using Siemens TXM modules and Desigo CC. Conducted programming and commissioning of BMS devices including DXRs, PXRs, and HMI interfaces, while coordinating with the client and subcontractors to ensure seamless integration of all automation systems.",
      highlights: [
        "Led full BMS site operations and electrical integration across the facility",
        "Upgraded outdated controllers and thermostats using Siemens TXM modules and Desigo CC",
        "Programmed and commissioned DXR, PXR, and HMI interface devices",
        "Improved reliability of site automation systems ensuring uninterrupted operations",
        "Coordinated with client and subcontractors for seamless automation integration",
        "Provided on-site technical support for electrical, HVAC, and automation systems"
      ],
      tech: ["Siemens Desigo CC", "TXM Modules", "DXR Controllers", "PXR Controllers", "HMI Interfaces", "HVAC Integration", "BACnet"]
    },
    {
      id: "saudi-national-bank",
      title: "Saudi National Bank Head Office",
      tag: "Critical operations",
      category: "Controls",
      image: "./assets/project-snb.jpg",
      text: "System upgrades and commissioning at KAFD with a focus on uninterrupted building operations and dependable controls performance.",
      images: [
        "./assets/snb1.jpg",
        "./assets/snb2.jpg",
        "./assets/snb3.jpg",
        "./assets/snb4.jpg"
      ],
      client: "Saudi National Bank (SNB)",
      location: "KAFD, Riyadh, Saudi Arabia",
      period: "April 2024 – May 2025",
      role: "Electrical Engineer – Siemens",
      details: "Led BMS site operations, system upgrades, and electrical integration for SNB's high-rise head office facility at King Abdullah Financial District. Planned and implemented floor-by-floor upgrades of outdated FCU, VAV, and CAV controllers using Siemens TXM modules and Desigo CC. Programmed and commissioned BMS devices including DXRs and PXRs across Tower and Branch buildings, maintaining full operational continuity throughout the upgrade cycle.",
      highlights: [
        "Managed BMS upgrade across a high-rise banking facility at KAFD with zero operational downtime",
        "Implemented floor-by-floor replacement of FCU, VAV, and CAV controllers",
        "Programmed and commissioned Siemens DXR and PXR controllers throughout the Tower and Branch buildings",
        "Configured Desigo CC for enhanced centralised monitoring and control",
        "Coordinated with SNB facilities team and subcontractors for integration alignment",
        "Provided continuous on-site technical support for electrical, HVAC, and BMS systems"
      ],
      tech: ["Siemens Desigo CC", "DXR2 Controllers", "PXR Controllers", "TXM Modules", "FCU Control", "VAV / CAV", "BACnet MS/TP", "HVAC"]
    },
    {
      id: "neom-sites",
      title: "NEOM Operational Sites",
      tag: "Energy visibility",
      category: "IoT",
      image: "./assets/project-neom.jpg",
      text: "Smart energy and automation solutions across 12 sites integrating BMS, solar systems, FACP, and IoT-based monitoring via Modbus TCP/IP.",
      images: [
        "./assets/neom1.jpg",
        "./assets/neom2.jpg",
        "./assets/neom3.jpg",
        "./assets/neom4.jpg"
      ],
      client: "NEOM",
      location: "NEOM, Saudi Arabia",
      period: "November 2023 – March 2024",
      role: "Electrical Engineer – Siemens",
      details: "Delivered smart energy and BMS integration across 12 NEOM operational sites. Designed customised circuits and programmed Siemens DDC controllers to communicate solar inverter data into the BMS via Modbus TCP/IP. Enabled real-time monitoring and analytics of solar power generation across all zones. Also supported robot shelter integration and FACP connectivity as part of the wider IBMS scope.",
      highlights: [
        "Integrated solar inverter systems with Siemens DDC controllers across 12 NEOM sites",
        "Developed custom Modbus TCP/IP communication layer between solar systems and BMS",
        "Enabled real-time solar power monitoring and analytics through Desigo CC",
        "Resolved a critical Modbus register swap bug causing incorrect solar data readings",
        "Supported robot shelter BMS and FACP integration as part of the IBMS scope",
        "Spearheaded remote site commissioning and support across geographically distributed zones"
      ],
      tech: ["Siemens Desigo CC", "DDC Controllers", "Modbus TCP/IP", "RS485", "Solar Inverter Integration", "FACP Integration", "IoT Monitoring", "BACnet"]
    },
    {
      id: "ev-charging-development",
      title: "EV Charging Development",
      tag: "R&D engineering",
      category: "EV",
      image: "./assets/project-ev-charger.jpg",
      text: "Hardware design, PCB layout, firmware development, and Modbus integration for Pakistan's first AC Electric Vehicle charger and EZ-Swap e-bike docking station.",
      images: [
        "./assets/ev1.jpg",
        "./assets/ev2.jpg",
        "./assets/ev3.jpg",
        "./assets/ev4.jpg"
      ],
      client: "Tesla Industries / EZ-Bike",
      location: "Islamabad, Pakistan",
      period: "January 2020 – October 2023",
      role: "Electrical Engineer – Tesla Industries",
      details: "Designed and developed hardware and firmware for Pakistan's first Electric Vehicle AC charger — the EVX — available in 7kW single-phase and 22kW three-phase variants. Integrated smart features including app control, dynamic power adjustment, peak tariff scheduling, and a web-enabled interface. Also designed the EZ-Swap modular charging dock for Pakistan's first e-bike sharing system. Additional projects included a 30kW DC power supply for industrial HVDC labs, a Zero Export Manager to prevent reverse current flow from on-grid solar inverters, and a Solar Inverter BMS integrating lithium battery data via RS485.",
      highlights: [
        "Designed and built Pakistan's first EV AC charger (EVX) — 7kW single-phase and 22kW three-phase",
        "Integrated smart app control, dynamic power adjustment (1–7kW / 3.6–22kW), and peak tariff scheduling",
        "Designed EZ-Swap modular docking station for Pakistan's first e-bike sharing system",
        "Built a 30kW DC power supply with configurable output for industrial HVDC labs",
        "Engineered Zero Export Manager to prevent reverse current flow from on-grid solar systems",
        "Integrated lithium battery BMS data via RS485 into solar inverter UI for monitoring and control",
        "Designed multi-layer PCBs (up to 4 layers) using Eagle and Altium"
      ],
      tech: ["ESP32", "Arduino", "Modbus RTU", "RS485", "CAN Bus", "Eagle PCB", "Altium", "Nextion HMI", "C / C++", "Power Electronics"]
    },
    {
      id: "riyadh-metro-line3",
      title: "Riyadh Metro Line 3 – Power Shelters",
      tag: "SCADA integration",
      category: "Controls",
      image: "./assets/metro1.jpg",
      text: "Allen Bradley SCADA integration with Siemens BMS for real-time HVAC monitoring and control across Riyadh Metro Line 3 power shelter stations.",
      images: [
        "./assets/metro1.jpg",
        "./assets/metro2.jpg",
        "./assets/metro3.jpg"
      ],
      client: "Riyadh Metro – Line 3",
      location: "Riyadh, Saudi Arabia",
      period: "October 2025 – Present",
      role: "Electrical Engineer – Siemens",
      details: "Working on the integration of Allen Bradley SCADA systems with Siemens BMS across Riyadh Metro Line 3 power shelter stations. Responsibilities include enabling control commands from SCADA to BMS, auto and manual control selection from SCADA, and Modbus integration for sensor and field device data. The project ensures real-time HVAC monitoring and reliable remote control across critical metro infrastructure.",
      highlights: [
        "Integrating Allen Bradley SCADA with Siemens BMS for unified metro infrastructure control",
        "Enabling bi-directional control commands between SCADA and BMS systems",
        "Implementing auto and manual control mode selection from SCADA interface",
        "Configuring Modbus integration for sensors and field devices across power shelters",
        "Monitoring HVAC systems across multiple Line 3 stations in real time"
      ],
      tech: ["Allen Bradley SCADA", "Siemens BMS", "Modbus TCP/IP", "HVAC Monitoring", "Field Device Integration", "Power Shelter Systems"]
    }
  ],
  education: [
    {
      school: "University of Sargodha",
      degree: "Bachelors, Electrical Engineering Technology",
      period: "September 2018 - September 2022"
    },
    {
      school: "Hira College of Technology",
      degree: "Diploma in Electronics, Electrical and Electronics Engineering",
      period: "September 2015 - August 2018"
    }
  ],
  awards: [
    {
      title: "Pride of Performance in R&D",
      issuer: "Tesla Industries",
      year: "2023",
      image: "./assets/award-tesla.jpg"
    }
  ]
};
