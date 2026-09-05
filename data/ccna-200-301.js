/**
 * Cisco CCNA 200-301 Question Bank – CodingHamme Test Prep
 * Modules: mod1–mod5 (200 each) — Network Infrastructure, Switching, IP Routing,
 *          Network Services & Security, AI and Network Operations
 * Types: single 10% | multiselect 30% | dragdrop 30% | hotspot 30%
 */
export const PRODUCT_CODE = "CCNA-200-301";
export const questions = [
  {
    "id": 1,
    "qid": "CCNA-MOD1-001",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "Which cable type is required between two switches when Auto-MDIX is disabled?",
    "scenario": "<div class=\"scenario-text\"><p>Legacy switch ports without Auto-MDIX need the correct copper cable.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Straight-through UTP"
      },
      {
        "id": "b",
        "text": "Crossover UTP"
      },
      {
        "id": "c",
        "text": "Rollover console"
      },
      {
        "id": "d",
        "text": "Coaxial RG-59"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Switch-to-switch links historically required crossover cables when Auto-MDIX was unavailable."
  },
  {
    "id": 2,
    "qid": "CCNA-MOD1-002",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "What is the maximum recommended length for a 1000BASE-T copper segment?",
    "scenario": "<div class=\"scenario-text\"><p>A workstation reports intermittent link on a long copper run.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "55 meters"
      },
      {
        "id": "b",
        "text": "100 meters"
      },
      {
        "id": "c",
        "text": "300 meters"
      },
      {
        "id": "d",
        "text": "2 kilometers"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Twisted-pair Ethernet (including 1000BASE-T) is limited to 100 m for reliable operation."
  },
  {
    "id": 3,
    "qid": "CCNA-MOD1-003",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "Which symptom most strongly indicates a duplex mismatch on a copper link?",
    "scenario": "<div class=\"scenario-text\"><p>An access port shows high late collisions and runts while the far end shows few errors.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Both ends report full duplex and zero errors"
      },
      {
        "id": "b",
        "text": "One end full duplex, other half duplex, with late collisions"
      },
      {
        "id": "c",
        "text": "Link light is off on both ends"
      },
      {
        "id": "d",
        "text": "Interface counters show only input drops"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Duplex mismatch often produces late collisions on the half-duplex side and FCS/runt errors on the full-duplex side."
  },
  {
    "id": 4,
    "qid": "CCNA-MOD1-004",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "Which fiber connector type is commonly used on modern Cisco SFP/SFP+ optics?",
    "scenario": "<div class=\"scenario-text\"><p>A technician is reseating a single-mode transceiver.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "ST"
      },
      {
        "id": "b",
        "text": "SC"
      },
      {
        "id": "c",
        "text": "LC"
      },
      {
        "id": "d",
        "text": "BNC"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "LC connectors dominate modern SFP and SFP+ optics."
  },
  {
    "id": 5,
    "qid": "CCNA-MOD1-005",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE valid causes of a copper link not coming up.",
    "scenario": "<div class=\"scenario-text\"><p>A new access port remains down/down after cabling.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Faulty or unterminated cable"
      },
      {
        "id": "b",
        "text": "Speed mismatch with no autoneg"
      },
      {
        "id": "c",
        "text": "Incorrect VLAN on the access port"
      },
      {
        "id": "d",
        "text": "Administrative shutdown on the interface"
      },
      {
        "id": "e",
        "text": "OSPF process ID mismatch"
      }
    ],
    "correct": [
      "a",
      "b",
      "d"
    ],
    "selectCount": 3,
    "explanation": "Layer-1/2 link issues include cable faults, speed mismatch, and admin-down. VLAN and OSPF do not prevent link up."
  },
  {
    "id": 6,
    "qid": "CCNA-MOD1-006",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO pinout standards used for TIA/EIA Ethernet cabling.",
    "scenario": "<div class=\"scenario-text\"><p>Review structured cabling documentation.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "T568A"
      },
      {
        "id": "b",
        "text": "T568B"
      },
      {
        "id": "c",
        "text": "RS-232 DB9"
      },
      {
        "id": "d",
        "text": "SCSI-3"
      },
      {
        "id": "e",
        "text": "HDMI Type A"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "T568A and T568B define the eight-pin Ethernet pinouts."
  },
  {
    "id": 7,
    "qid": "CCNA-MOD1-007",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE symptoms consistent with a fiber dirty connector or high loss.",
    "scenario": "<div class=\"scenario-text\"><p>A 10G fiber link flaps and shows CRC errors.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Elevated CRC/FCS errors"
      },
      {
        "id": "b",
        "text": "Optical Rx power below threshold"
      },
      {
        "id": "c",
        "text": "Link flaps under load"
      },
      {
        "id": "d",
        "text": "DHCP pool exhaustion"
      },
      {
        "id": "e",
        "text": "Native VLAN mismatch only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Dirty or high-loss fiber causes CRC errors, low Rx power, and flaps—not DHCP or native VLAN issues."
  },
  {
    "id": 8,
    "qid": "CCNA-MOD1-008",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO correct statements about straight-through vs crossover cables.",
    "scenario": "<div class=\"scenario-text\"><p>Choose the correct patch cable for device types.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Straight-through connects unlike devices (PC to switch)"
      },
      {
        "id": "b",
        "text": "Crossover connects like devices (switch to switch) when Auto-MDIX is off"
      },
      {
        "id": "c",
        "text": "Rollover is used for Ethernet uplink"
      },
      {
        "id": "d",
        "text": "Crossover is required for all SFP links"
      },
      {
        "id": "e",
        "text": "Straight-through is never used with modern NICs"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Straight-through for unlike devices; crossover for like devices without Auto-MDIX."
  },
  {
    "id": 9,
    "qid": "CCNA-MOD1-009",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE checks when troubleshooting a transceiver not recognized.",
    "scenario": "<div class=\"scenario-text\"><p>show interface reports 'unsupported transceiver'.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Verify DOM optical levels if supported"
      },
      {
        "id": "b",
        "text": "Confirm transceiver is Cisco-compatible or allow-unsupported is set"
      },
      {
        "id": "c",
        "text": "Reseat or replace the SFP"
      },
      {
        "id": "d",
        "text": "Change OSPF hello timer"
      },
      {
        "id": "e",
        "text": "Disable spanning-tree globally"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Unrecognized optics are resolved by compatibility, reseating, and checking optical power—not routing or STP globals."
  },
  {
    "id": 10,
    "qid": "CCNA-MOD1-010",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO causes of late collisions on an Ethernet interface.",
    "scenario": "<div class=\"scenario-text\"><p>Counters show rising late collisions.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Duplex mismatch"
      },
      {
        "id": "b",
        "text": "Excessive cable length or segment issues on half-duplex media"
      },
      {
        "id": "c",
        "text": "Correct full-duplex on both ends with short cable"
      },
      {
        "id": "d",
        "text": "DNS misconfiguration"
      },
      {
        "id": "e",
        "text": "Missing default gateway only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Late collisions point to duplex mismatch or shared-media/length problems."
  },
  {
    "id": 11,
    "qid": "CCNA-MOD1-011",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE valid fiber media types for campus uplinks.",
    "scenario": "<div class=\"scenario-text\"><p>Design a fiber backbone between buildings.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "OM3/OM4 multimode"
      },
      {
        "id": "b",
        "text": "OS1/OS2 single-mode"
      },
      {
        "id": "c",
        "text": "Category 6A copper only"
      },
      {
        "id": "d",
        "text": "Single-mode with appropriate LR optics"
      },
      {
        "id": "e",
        "text": "USB 3.0"
      }
    ],
    "correct": [
      "a",
      "b",
      "d"
    ],
    "selectCount": 3,
    "explanation": "Multimode OM3/OM4 and single-mode OS1/OS2 with matching optics are standard; copper and USB are not campus fiber uplinks."
  },
  {
    "id": 12,
    "qid": "CCNA-MOD1-012",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO interface commands useful for cabling diagnosis on Cisco IOS.",
    "scenario": "<div class=\"scenario-text\"><p>Collect evidence for a Layer-1 ticket.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "show interfaces"
      },
      {
        "id": "b",
        "text": "show controllers"
      },
      {
        "id": "c",
        "text": "show ip ospf neighbor"
      },
      {
        "id": "d",
        "text": "show vlan brief"
      },
      {
        "id": "e",
        "text": "debug ip packet detail only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "show interfaces and show controllers expose link status, errors, and PHY details."
  },
  {
    "id": 13,
    "qid": "CCNA-MOD1-013",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE possible results of a speed mismatch with autonegotiation disabled.",
    "scenario": "<div class=\"scenario-text\"><p>Both ends are hard-coded to different speeds.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Link stays down"
      },
      {
        "id": "b",
        "text": "Unreliable or no connectivity"
      },
      {
        "id": "c",
        "text": "Error counters may increment"
      },
      {
        "id": "d",
        "text": "OSPF forms FULL adjacency immediately"
      },
      {
        "id": "e",
        "text": "VLAN database is wiped"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Hard-coded speed mismatch typically yields down or errored links, not routing/VLAN side effects."
  },
  {
    "id": 14,
    "qid": "CCNA-MOD1-014",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO best practices for copper patch cords in a rack.",
    "scenario": "<div class=\"scenario-text\"><p>Reduce intermittent access-port issues.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Use certified Cat5e/Cat6/Cat6A as appropriate"
      },
      {
        "id": "b",
        "text": "Avoid sharp bends below minimum bend radius"
      },
      {
        "id": "c",
        "text": "Run power and data in the same tight bundle indefinitely"
      },
      {
        "id": "d",
        "text": "Use flat satin cable for all 10G runs"
      },
      {
        "id": "e",
        "text": "Disable CDP on every access port for cabling"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Certified category cable and proper bend radius prevent physical faults."
  },
  {
    "id": 15,
    "qid": "CCNA-MOD1-015",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE indicators of a bad or intermittent copper pair.",
    "scenario": "<div class=\"scenario-text\"><p>A PoE phone and data PC share a cable plant.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Flapping link lights"
      },
      {
        "id": "b",
        "text": "CRC and input errors"
      },
      {
        "id": "c",
        "text": "PoE device fails to power while data link is marginal"
      },
      {
        "id": "d",
        "text": "Correct /30 mask on a loopback"
      },
      {
        "id": "e",
        "text": "Successful traceroute to remote AS"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Flaps, CRC errors, and PoE failure point to physical pair problems."
  },
  {
    "id": 16,
    "qid": "CCNA-MOD1-016",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO differences between 1000BASE-LX and 1000BASE-SX.",
    "scenario": "<div class=\"scenario-text\"><p>Choose optics for a long building-to-building run.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "LX is typically single-mode long reach"
      },
      {
        "id": "b",
        "text": "SX is multimode short reach"
      },
      {
        "id": "c",
        "text": "SX is always single-mode 10 km"
      },
      {
        "id": "d",
        "text": "LX cannot use LC connectors"
      },
      {
        "id": "e",
        "text": "Both require coaxial connectors"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "LX is long-reach (often SM); SX is short-reach multimode."
  },
  {
    "id": 17,
    "qid": "CCNA-MOD1-017",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match each cable type to its typical use case.",
    "scenario": "<div class=\"scenario-text\"><p>Select the correct cable for each connection type.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Straight-through"
      },
      {
        "id": "i2",
        "text": "Crossover"
      },
      {
        "id": "i3",
        "text": "Rollover"
      },
      {
        "id": "i4",
        "text": "Single-mode fiber"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "PC to switch"
      },
      {
        "id": "z2",
        "label": "Switch to switch (no Auto-MDIX)"
      },
      {
        "id": "z3",
        "label": "Console to router RJ45"
      },
      {
        "id": "z4",
        "label": "Long-distance building uplink"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Straight-through for unlike devices; crossover for like devices; rollover for console; SM fiber for distance."
  },
  {
    "id": 18,
    "qid": "CCNA-MOD1-018",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match each error counter to its most likely physical cause.",
    "scenario": "<div class=\"scenario-text\"><p>Interpret show interfaces output.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "CRC / FCS errors"
      },
      {
        "id": "i2",
        "text": "Late collisions"
      },
      {
        "id": "i3",
        "text": "Runts"
      },
      {
        "id": "i4",
        "text": "Input drops"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Duplex mismatch or noise"
      },
      {
        "id": "z2",
        "label": "Half-duplex collision domain issues"
      },
      {
        "id": "z3",
        "label": "Undersized frames / collision fragments"
      },
      {
        "id": "z4",
        "label": "CPU or buffer congestion"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "CRC often noise/duplex; late collisions half-duplex; runts undersized; input drops congestion."
  },
  {
    "id": 19,
    "qid": "CCNA-MOD1-019",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Order the steps to diagnose a down copper access port.",
    "scenario": "<div class=\"scenario-text\"><p>Port is down/down after a move.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Verify cable continuity and seating"
      },
      {
        "id": "c2",
        "text": "Check interface status and errors"
      },
      {
        "id": "c3",
        "text": "Confirm speed/duplex settings"
      },
      {
        "id": "c4",
        "text": "Test with known-good cable/port"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Physical seating first, then status/errors, speed/duplex, then swap testing."
  },
  {
    "id": 20,
    "qid": "CCNA-MOD1-020",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match media type to approximate maximum distance (typical).",
    "scenario": "<div class=\"scenario-text\"><p>Plan campus cabling distances.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Cat6 UTP 1000BASE-T"
      },
      {
        "id": "i2",
        "text": "OM3 multimode 10G"
      },
      {
        "id": "i3",
        "text": "OS2 single-mode 10G LR"
      },
      {
        "id": "i4",
        "text": "Cat5e 100BASE-TX"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "100 meters"
      },
      {
        "id": "z2",
        "label": "~300 meters"
      },
      {
        "id": "z3",
        "label": "10 kilometers"
      },
      {
        "id": "z4",
        "label": "100 meters (FastE)"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Copper 100 m; OM3 10G hundreds of meters; LR SM ~10 km; Cat5e FastE 100 m."
  },
  {
    "id": 21,
    "qid": "CCNA-MOD1-021",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match Cisco interface LED behavior to meaning (generalized).",
    "scenario": "<div class=\"scenario-text\"><p>Use visual indicators during field work.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Solid green"
      },
      {
        "id": "i2",
        "text": "Amber / orange"
      },
      {
        "id": "i3",
        "text": "Blinking green"
      },
      {
        "id": "i4",
        "text": "Off"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Link up, normal"
      },
      {
        "id": "z2",
        "label": "Error / blocked / PoE issue variants"
      },
      {
        "id": "z3",
        "label": "Activity / traffic"
      },
      {
        "id": "z4",
        "label": "No link"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Green solid = link; blinking = activity; amber often problem; off = no link."
  },
  {
    "id": 22,
    "qid": "CCNA-MOD1-022",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match each pinout concept to description.",
    "scenario": "<div class=\"scenario-text\"><p>Explain structured cabling to a junior tech.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "T568B"
      },
      {
        "id": "i2",
        "text": "Crossover"
      },
      {
        "id": "i3",
        "text": "Auto-MDIX"
      },
      {
        "id": "i4",
        "text": "PoE pairs"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Common modern Ethernet pinout standard"
      },
      {
        "id": "z2",
        "label": "Swaps TX/RX pairs for like devices"
      },
      {
        "id": "z3",
        "label": "Automatically corrects MDI/MDI-X"
      },
      {
        "id": "z4",
        "label": "Power delivered over spare or data pairs"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "T568B is common; crossover swaps pairs; Auto-MDIX adapts; PoE uses pairs for power."
  },
  {
    "id": 23,
    "qid": "CCNA-MOD1-023",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Order steps to verify a new fiber uplink.",
    "scenario": "<div class=\"scenario-text\"><p>Bring up a 10G SM fiber between closets.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Inspect and clean connectors"
      },
      {
        "id": "c2",
        "text": "Seat matching LR optics"
      },
      {
        "id": "c3",
        "text": "Confirm link and DOM levels"
      },
      {
        "id": "c4",
        "text": "Verify error-free counters under traffic"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Clean first, install optics, check link/DOM, then validate with traffic."
  },
  {
    "id": 24,
    "qid": "CCNA-MOD1-024",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match problem to first diagnostic command.",
    "scenario": "<div class=\"scenario-text\"><p>Efficient Layer-1 troubleshooting.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Suspected cable fault"
      },
      {
        "id": "i2",
        "text": "Suspected duplex issue"
      },
      {
        "id": "i3",
        "text": "Suspected optic failure"
      },
      {
        "id": "i4",
        "text": "Suspected admin down"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "show interfaces / cable test if supported"
      },
      {
        "id": "z2",
        "label": "show interfaces status + counters"
      },
      {
        "id": "z3",
        "label": "show interfaces transceiver"
      },
      {
        "id": "z4",
        "label": "show running-config interface"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Match the symptom class to the most direct show command."
  },
  {
    "id": 25,
    "qid": "CCNA-MOD1-025",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match Ethernet standard to medium.",
    "scenario": "<div class=\"scenario-text\"><p>Select technology for a closet uplink.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "1000BASE-T"
      },
      {
        "id": "i2",
        "text": "1000BASE-SX"
      },
      {
        "id": "i3",
        "text": "10GBASE-LR"
      },
      {
        "id": "i4",
        "text": "100BASE-FX"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Copper twisted pair"
      },
      {
        "id": "z2",
        "label": "Multimode fiber"
      },
      {
        "id": "z3",
        "label": "Single-mode fiber long reach"
      },
      {
        "id": "z4",
        "label": "Multimode Fast Ethernet fiber"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "BASE-T copper; SX MM fiber; LR SM fiber; FX FastE fiber."
  },
  {
    "id": 26,
    "qid": "CCNA-MOD1-026",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Order the actions when Auto-MDIX is disabled and link is down between switches.",
    "scenario": "<div class=\"scenario-text\"><p>Two switches will not link on copper.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Confirm Auto-MDIX disabled"
      },
      {
        "id": "c2",
        "text": "Replace straight-through with crossover"
      },
      {
        "id": "c3",
        "text": "Verify link up"
      },
      {
        "id": "c4",
        "text": "Document the exception"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Confirm setting, use crossover, verify, document."
  },
  {
    "id": 27,
    "qid": "CCNA-MOD1-027",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match PoE term to meaning.",
    "scenario": "<div class=\"scenario-text\"><p>Troubleshoot IP phone power.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "PoE (802.3af)"
      },
      {
        "id": "i2",
        "text": "PoE+ (802.3at)"
      },
      {
        "id": "i3",
        "text": "UPOE"
      },
      {
        "id": "i4",
        "text": "Inline power denied"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Up to ~15.4 W"
      },
      {
        "id": "z2",
        "label": "Up to ~30 W"
      },
      {
        "id": "z3",
        "label": "Higher power Cisco proprietary/standard variants"
      },
      {
        "id": "z4",
        "label": "Switch refused to power the PD"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "af ~15W; at ~30W; UPOE higher; denied means switch did not grant power."
  },
  {
    "id": 28,
    "qid": "CCNA-MOD1-028",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match layer of the OSI model to cabling concern.",
    "scenario": "<div class=\"scenario-text\"><p>Classify physical faults.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Broken wire"
      },
      {
        "id": "i2",
        "text": "CRC errors on interface"
      },
      {
        "id": "i3",
        "text": "Incorrect default gateway"
      },
      {
        "id": "i4",
        "text": "TCP port blocked"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Layer 1"
      },
      {
        "id": "z2",
        "label": "Layer 1/2 symptom"
      },
      {
        "id": "z3",
        "label": "Layer 3"
      },
      {
        "id": "z4",
        "label": "Layer 4"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Cable breaks L1; CRC L1/L2; gateway L3; TCP port L4."
  },
  {
    "id": 29,
    "qid": "CCNA-MOD1-029",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the cable segment most likely causing the CRC errors on Gi0/1.",
    "scenario": "<div class=\"scenario-text\"><p>SW1 Gi0/1 shows rising CRC errors; other ports are clean.</p></div>",
    "nodes": [
      {
        "id": "c1",
        "label": "Patch to PC",
        "x": 20,
        "y": 40
      },
      {
        "id": "c2",
        "label": "Gi0/1 copper",
        "x": 50,
        "y": 40
      },
      {
        "id": "c3",
        "label": "Uplink fiber",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "c2"
    ],
    "explanation": "CRC on Gi0/1 points to that copper segment or its terminations."
  },
  {
    "id": 30,
    "qid": "CCNA-MOD1-030",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the device that should use a crossover cable to SW1 if Auto-MDIX is off.",
    "scenario": "<div class=\"scenario-text\"><p>SW1 connects to a router, a PC, and another switch.</p></div>",
    "nodes": [
      {
        "id": "d1",
        "label": "PC-A",
        "x": 20,
        "y": 50
      },
      {
        "id": "d2",
        "label": "R1",
        "x": 50,
        "y": 50
      },
      {
        "id": "d3",
        "label": "SW2",
        "x": 80,
        "y": 50
      }
    ],
    "correct": [
      "d3"
    ],
    "explanation": "Switch-to-switch requires crossover when Auto-MDIX is disabled."
  },
  {
    "id": 31,
    "qid": "CCNA-MOD1-031",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the interface most likely hard-coded to the wrong duplex.",
    "scenario": "<div class=\"scenario-text\"><p>PC-A has late collisions; switch port is full duplex.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "SW Gi0/1\nfull",
        "x": 30,
        "y": 40
      },
      {
        "id": "p2",
        "label": "PC NIC\nhalf?",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "p2"
    ],
    "explanation": "Late collisions on the host side often mean the NIC is half duplex while the switch is full."
  },
  {
    "id": 32,
    "qid": "CCNA-MOD1-032",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the fiber run that needs cleaning based on low Rx power on SW2.",
    "scenario": "<div class=\"scenario-text\"><p>SW1 Tx is normal; SW2 Rx is below threshold on the same link.</p></div>",
    "nodes": [
      {
        "id": "f1",
        "label": "SW1 local patch",
        "x": 20,
        "y": 40
      },
      {
        "id": "f2",
        "label": "Building fiber",
        "x": 50,
        "y": 40
      },
      {
        "id": "f3",
        "label": "SW2 local patch",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "f2"
    ],
    "explanation": "Low Rx at SW2 with normal Tx at SW1 implicates the intermediate fiber path or far-side connector."
  },
  {
    "id": 33,
    "qid": "CCNA-MOD1-033",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the port that should be checked for PoE budget exhaustion.",
    "scenario": "<div class=\"scenario-text\"><p>Three phones work; a fourth phone on Gi0/8 fails to power.</p></div>",
    "nodes": [
      {
        "id": "a1",
        "label": "Gi0/1\nPhone",
        "x": 20,
        "y": 40
      },
      {
        "id": "a2",
        "label": "Gi0/8\nNo power",
        "x": 50,
        "y": 40
      },
      {
        "id": "a3",
        "label": "Gi0/24\nUplink",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "a2"
    ],
    "explanation": "The port that fails to power the PD is the one to investigate for PoE."
  },
  {
    "id": 34,
    "qid": "CCNA-MOD1-034",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the link that is the best candidate for a TDR/cable diagnostic.",
    "scenario": "<div class=\"scenario-text\"><p>Only one access user reports intermittent disconnects; uplink is stable.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "User drop",
        "x": 25,
        "y": 45
      },
      {
        "id": "l2",
        "label": "Stack link",
        "x": 55,
        "y": 45
      },
      {
        "id": "l3",
        "label": "Core uplink",
        "x": 85,
        "y": 45
      }
    ],
    "correct": [
      "l1"
    ],
    "explanation": "Intermittent single-user issues point to that station’s copper run."
  },
  {
    "id": 35,
    "qid": "CCNA-MOD1-035",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two interface lines that indicate a duplex mismatch risk.",
    "scenario": "<div class=\"scenario-text\"><p>Review the partial interface configuration.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "speed 100"
      },
      {
        "id": "l2",
        "label": "duplex full"
      },
      {
        "id": "l3",
        "label": "duplex half"
      },
      {
        "id": "l4",
        "label": "negotiation auto"
      }
    ],
    "correct": [
      "l2",
      "l3"
    ],
    "selectCount": 2,
    "explanation": "Having both duplex full and duplex half in play (or mixed ends) indicates mismatch risk."
  },
  {
    "id": 36,
    "qid": "CCNA-MOD1-036",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that administratively disables the interface.",
    "scenario": "<div class=\"scenario-text\"><p>A port remains down after cabling is verified good.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "switchport mode access"
      },
      {
        "id": "l2",
        "label": "shutdown"
      },
      {
        "id": "l3",
        "label": "spanning-tree portfast"
      },
      {
        "id": "l4",
        "label": "description Access"
      }
    ],
    "correct": [
      "l2"
    ],
    "selectCount": 1,
    "explanation": "The shutdown command administratively disables the interface."
  },
  {
    "id": 37,
    "qid": "CCNA-MOD1-037",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines related to hard-coding speed and duplex.",
    "scenario": "<div class=\"scenario-text\"><p>Autonegotiation was disabled on an access port.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "speed 100"
      },
      {
        "id": "l2",
        "label": "duplex full"
      },
      {
        "id": "l3",
        "label": "switchport access vlan 10"
      },
      {
        "id": "l4",
        "label": "no cdp enable"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "speed and duplex commands hard-code those parameters."
  },
  {
    "id": 38,
    "qid": "CCNA-MOD1-038",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that enables Auto-MDIX (where supported).",
    "scenario": "<div class=\"scenario-text\"><p>Restore automatic cable type detection.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "mdix auto"
      },
      {
        "id": "l2",
        "label": "speed auto"
      },
      {
        "id": "l3",
        "label": "duplex auto"
      },
      {
        "id": "l4",
        "label": "no shutdown"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "mdix auto enables Auto-MDIX on supporting platforms."
  },
  {
    "id": 39,
    "qid": "CCNA-MOD1-039",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that should be verified for a fiber uplink interface.",
    "scenario": "<div class=\"scenario-text\"><p>10G SM uplink configuration fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "speed 10000"
      },
      {
        "id": "l2",
        "label": "duplex full"
      },
      {
        "id": "l3",
        "label": "switchport access vlan 1"
      },
      {
        "id": "l4",
        "label": "channel-group 1 mode on"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Fiber uplinks typically show explicit or negotiated high speed and full duplex."
  },
  {
    "id": 40,
    "qid": "CCNA-MOD1-040",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that removes interface from Layer-2 switchport mode (routed port).",
    "scenario": "<div class=\"scenario-text\"><p>Convert a port for a router-on-a-stick or L3 link.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "no switchport"
      },
      {
        "id": "l2",
        "label": "switchport mode trunk"
      },
      {
        "id": "l3",
        "label": "ip address 10.0.0.1 255.255.255.252"
      },
      {
        "id": "l4",
        "label": "negotiation auto"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "no switchport makes the port a routed Layer-3 interface."
  },
  {
    "id": 41,
    "qid": "CCNA-MOD1-041",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "What is the usable host range for 192.168.10.0/27?",
    "scenario": "<div class=\"scenario-text\"><p>Assign static addresses from a /27 subnet.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "192.168.10.1 – 192.168.10.30"
      },
      {
        "id": "b",
        "text": "192.168.10.1 – 192.168.10.62"
      },
      {
        "id": "c",
        "text": "192.168.10.0 – 192.168.10.31"
      },
      {
        "id": "d",
        "text": "192.168.10.1 – 192.168.10.254"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "A /27 has 32 addresses; network .0, broadcast .31, usable .1–.30."
  },
  {
    "id": 42,
    "qid": "CCNA-MOD1-042",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "Which address is the IPv4 loopback?",
    "scenario": "<div class=\"scenario-text\"><p>Test local IP stack on a host.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "0.0.0.0"
      },
      {
        "id": "b",
        "text": "127.0.0.1"
      },
      {
        "id": "c",
        "text": "255.255.255.255"
      },
      {
        "id": "d",
        "text": "169.254.0.1"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "127.0.0.1 is the IPv4 loopback address."
  },
  {
    "id": 43,
    "qid": "CCNA-MOD1-043",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "What does a /128 indicate for an IPv6 address?",
    "scenario": "<div class=\"scenario-text\"><p>Review a host IPv6 configuration.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "A link-local only network"
      },
      {
        "id": "b",
        "text": "A single host address (128-bit prefix)"
      },
      {
        "id": "c",
        "text": "A /64 LAN prefix"
      },
      {
        "id": "d",
        "text": "An anycast range"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "IPv6 /128 is a host route to one address."
  },
  {
    "id": 44,
    "qid": "CCNA-MOD1-044",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "Which protocol maps IPv4 addresses to MAC addresses on a LAN?",
    "scenario": "<div class=\"scenario-text\"><p>A host cannot reach its default gateway on the same subnet.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "DNS"
      },
      {
        "id": "b",
        "text": "ARP"
      },
      {
        "id": "c",
        "text": "NDP only"
      },
      {
        "id": "d",
        "text": "DHCPv6"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "ARP resolves IPv4 to MAC on the local segment."
  },
  {
    "id": 45,
    "qid": "CCNA-MOD1-045",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE valid reasons a host cannot reach a remote subnet.",
    "scenario": "<div class=\"scenario-text\"><p>Local ping works; remote ping fails.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Missing or incorrect default gateway"
      },
      {
        "id": "b",
        "text": "Router missing return route"
      },
      {
        "id": "c",
        "text": "ACL blocking the traffic"
      },
      {
        "id": "d",
        "text": "Correct ARP entry for gateway"
      },
      {
        "id": "e",
        "text": "Same subnet mask on both hosts in one VLAN"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Remote failure with local success points to gateway, routing, or ACL issues."
  },
  {
    "id": 46,
    "qid": "CCNA-MOD1-046",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO characteristics of IPv6 link-local addresses.",
    "scenario": "<div class=\"scenario-text\"><p>Inspect fe80:: addresses on interfaces.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Fe80::/10 prefix"
      },
      {
        "id": "b",
        "text": "Used for on-link communication and NDP"
      },
      {
        "id": "c",
        "text": "Globally routable on the Internet"
      },
      {
        "id": "d",
        "text": "Require DHCP only"
      },
      {
        "id": "e",
        "text": "Replace all unique local addresses"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Link-local fe80::/10 is mandatory for on-link and Neighbor Discovery."
  },
  {
    "id": 47,
    "qid": "CCNA-MOD1-047",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE causes of an incomplete ARP entry.",
    "scenario": "<div class=\"scenario-text\"><p>show arp shows incomplete for the gateway.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Gateway is down or unreachable at L2"
      },
      {
        "id": "b",
        "text": "Wrong VLAN / segment"
      },
      {
        "id": "c",
        "text": "Firewall blocking ARP"
      },
      {
        "id": "d",
        "text": "Correct static route exists"
      },
      {
        "id": "e",
        "text": "DNS server is unreachable only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Incomplete ARP means no MAC reply—L2 reachability, VLAN, or filtering."
  },
  {
    "id": 48,
    "qid": "CCNA-MOD1-048",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO correct statements about 10.0.0.0/8.",
    "scenario": "<div class=\"scenario-text\"><p>Classify private addressing.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "It is an RFC 1918 private range"
      },
      {
        "id": "b",
        "text": "It is not globally routable on the public Internet by default"
      },
      {
        "id": "c",
        "text": "It is a multicast block"
      },
      {
        "id": "d",
        "text": "It is reserved only for loopback"
      },
      {
        "id": "e",
        "text": "It requires a /32 mask always"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "10.0.0.0/8 is private (RFC 1918) and not public-routable by default."
  },
  {
    "id": 49,
    "qid": "CCNA-MOD1-049",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE IPv6 address types a dual-stack host may use.",
    "scenario": "<div class=\"scenario-text\"><p>Review host IPv6 addressing.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Link-local"
      },
      {
        "id": "b",
        "text": "Global unicast"
      },
      {
        "id": "c",
        "text": "Unique local"
      },
      {
        "id": "d",
        "text": "IPv4-mapped only as the sole address"
      },
      {
        "id": "e",
        "text": "Class E IPv4"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Hosts commonly have link-local plus global and/or unique local."
  },
  {
    "id": 50,
    "qid": "CCNA-MOD1-050",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO tools to verify Layer-3 reachability.",
    "scenario": "<div class=\"scenario-text\"><p>Confirm path beyond the gateway.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "ping"
      },
      {
        "id": "b",
        "text": "traceroute / tracert"
      },
      {
        "id": "c",
        "text": "show mac address-table only"
      },
      {
        "id": "d",
        "text": "show vlan brief only"
      },
      {
        "id": "e",
        "text": "cable TDR only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "ping and traceroute validate L3 reachability and path."
  },
  {
    "id": 51,
    "qid": "CCNA-MOD1-051",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE symptoms of overlapping subnets.",
    "scenario": "<div class=\"scenario-text\"><p>Two VLANs were accidentally given the same prefix.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Intermittent reachability"
      },
      {
        "id": "b",
        "text": "Unpredictable ARP behavior"
      },
      {
        "id": "c",
        "text": "Asymmetric routing symptoms"
      },
      {
        "id": "d",
        "text": "Perfect OSPF FULL on all links always"
      },
      {
        "id": "e",
        "text": "Fiber DOM values change"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Overlapping subnets cause ambiguous ARP and inconsistent paths."
  },
  {
    "id": 52,
    "qid": "CCNA-MOD1-052",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO correct mask lengths for a point-to-point IPv4 link using efficient addressing.",
    "scenario": "<div class=\"scenario-text\"><p>Conserve addresses on WAN links.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "/30"
      },
      {
        "id": "b",
        "text": "/31 where supported"
      },
      {
        "id": "c",
        "text": "/24 only"
      },
      {
        "id": "d",
        "text": "/16 only"
      },
      {
        "id": "e",
        "text": "/8 only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "/30 provides two hosts; /31 is supported on many modern platforms for P2P."
  },
  {
    "id": 53,
    "qid": "CCNA-MOD1-053",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE steps when a static route does not appear in the routing table.",
    "scenario": "<div class=\"scenario-text\"><p>ip route was configured but is missing.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Verify next-hop reachability"
      },
      {
        "id": "b",
        "text": "Check administrative distance vs better routes"
      },
      {
        "id": "c",
        "text": "Confirm syntax and outgoing interface"
      },
      {
        "id": "d",
        "text": "Disable all interfaces"
      },
      {
        "id": "e",
        "text": "Erase the startup-config immediately"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Static routes need valid next hop and must win AD comparison."
  },
  {
    "id": 54,
    "qid": "CCNA-MOD1-054",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO differences between ARP and NDP.",
    "scenario": "<div class=\"scenario-text\"><p>Compare IPv4 vs IPv6 neighbor resolution.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "ARP is IPv4; NDP is IPv6"
      },
      {
        "id": "b",
        "text": "NDP uses ICMPv6 Neighbor Solicitation/Advertisement"
      },
      {
        "id": "c",
        "text": "ARP uses ICMPv6 exclusively"
      },
      {
        "id": "d",
        "text": "NDP cannot discover routers"
      },
      {
        "id": "e",
        "text": "ARP is only used on serial links"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "ARP serves IPv4; NDP (ICMPv6) serves IPv6 neighbor and router discovery."
  },
  {
    "id": 55,
    "qid": "CCNA-MOD1-055",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE valid host IPv4 troubleshooting checks.",
    "scenario": "<div class=\"scenario-text\"><p>PC has no connectivity to any network.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "ipconfig / ifconfig for address and mask"
      },
      {
        "id": "b",
        "text": "Default gateway present and reachable"
      },
      {
        "id": "c",
        "text": "DNS servers configured if name resolution needed"
      },
      {
        "id": "d",
        "text": "OSPF area on the PC"
      },
      {
        "id": "e",
        "text": "Switch native VLAN on the PC NIC"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Host checks: address/mask, gateway, DNS—not OSPF areas on endpoints."
  },
  {
    "id": 56,
    "qid": "CCNA-MOD1-056",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO reasons a host might use APIPA (169.254.x.x).",
    "scenario": "<div class=\"scenario-text\"><p>Windows PC shows 169.254 address.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "DHCP server unreachable"
      },
      {
        "id": "b",
        "text": "No valid static IP configured and DHCP failed"
      },
      {
        "id": "c",
        "text": "Correct static IP with working gateway"
      },
      {
        "id": "d",
        "text": "IPv6-only network intentionally"
      },
      {
        "id": "e",
        "text": "Successful DORA completion"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "APIPA appears when DHCP fails and no static IP is set."
  },
  {
    "id": 57,
    "qid": "CCNA-MOD1-057",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match each IPv4 address class/usage to example.",
    "scenario": "<div class=\"scenario-text\"><p>Classify addressing.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Private RFC1918"
      },
      {
        "id": "i2",
        "text": "Loopback"
      },
      {
        "id": "i3",
        "text": "Link-local APIPA"
      },
      {
        "id": "i4",
        "text": "Multicast"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "10.0.0.0/8"
      },
      {
        "id": "z2",
        "label": "127.0.0.1"
      },
      {
        "id": "z3",
        "label": "169.254.0.0/16"
      },
      {
        "id": "z4",
        "label": "224.0.0.0/4"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Private, loopback, APIPA, and multicast ranges."
  },
  {
    "id": 58,
    "qid": "CCNA-MOD1-058",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match troubleshooting symptom to likely layer.",
    "scenario": "<div class=\"scenario-text\"><p>Isolate OSI layer for IP faults.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "No link light"
      },
      {
        "id": "i2",
        "text": "ARP incomplete"
      },
      {
        "id": "i3",
        "text": "Wrong gateway"
      },
      {
        "id": "i4",
        "text": "TCP reset from server"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Layer 1"
      },
      {
        "id": "z2",
        "label": "Layer 2"
      },
      {
        "id": "z3",
        "label": "Layer 3"
      },
      {
        "id": "z4",
        "label": "Layer 4+"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Link L1; ARP L2; gateway L3; TCP L4+."
  },
  {
    "id": 59,
    "qid": "CCNA-MOD1-059",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Order steps to troubleshoot host cannot reach Internet.",
    "scenario": "<div class=\"scenario-text\"><p>Local LAN works; Internet fails.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Verify default gateway"
      },
      {
        "id": "c2",
        "text": "Ping gateway"
      },
      {
        "id": "c3",
        "text": "Ping public IP"
      },
      {
        "id": "c4",
        "text": "Test DNS resolution"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Gateway config → ping gateway → ping public IP → DNS."
  },
  {
    "id": 60,
    "qid": "CCNA-MOD1-060",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match IPv6 prefix to type.",
    "scenario": "<div class=\"scenario-text\"><p>Identify IPv6 address categories.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "fe80::/10"
      },
      {
        "id": "i2",
        "text": "fc00::/7"
      },
      {
        "id": "i3",
        "text": "2000::/3"
      },
      {
        "id": "i4",
        "text": "ff00::/8"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Link-local"
      },
      {
        "id": "z2",
        "label": "Unique local"
      },
      {
        "id": "z3",
        "label": "Global unicast"
      },
      {
        "id": "z4",
        "label": "Multicast"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Standard IPv6 prefix classifications."
  },
  {
    "id": 61,
    "qid": "CCNA-MOD1-061",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match command to purpose on a Cisco router.",
    "scenario": "<div class=\"scenario-text\"><p>IPv4 verification toolkit.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "show ip interface brief"
      },
      {
        "id": "i2",
        "text": "show ip route"
      },
      {
        "id": "i3",
        "text": "show ip arp"
      },
      {
        "id": "i4",
        "text": "ping"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Interface IP and status"
      },
      {
        "id": "z2",
        "label": "Routing table"
      },
      {
        "id": "z3",
        "label": "ARP cache"
      },
      {
        "id": "z4",
        "label": "Reachability test"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Brief status, routes, ARP, and ping."
  },
  {
    "id": 62,
    "qid": "CCNA-MOD1-062",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Order subnetting steps for a /26 network.",
    "scenario": "<div class=\"scenario-text\"><p>Derive host range from prefix.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Identify block size (64)"
      },
      {
        "id": "c2",
        "text": "Find network and broadcast"
      },
      {
        "id": "c3",
        "text": "List usable hosts"
      },
      {
        "id": "c4",
        "text": "Assign addresses avoiding network/broadcast"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Block size → network/broadcast → usable → assign."
  },
  {
    "id": 63,
    "qid": "CCNA-MOD1-063",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match problem to remediation.",
    "scenario": "<div class=\"scenario-text\"><p>Quick IP fixes.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Wrong mask on host"
      },
      {
        "id": "i2",
        "text": "Missing default route on router"
      },
      {
        "id": "i3",
        "text": "Duplicate IP"
      },
      {
        "id": "i4",
        "text": "Stale ARP"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Correct subnet mask"
      },
      {
        "id": "z2",
        "label": "Add default or specific route"
      },
      {
        "id": "z3",
        "label": "Resolve conflict / release address"
      },
      {
        "id": "z4",
        "label": "Clear ARP cache"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Match each fault class to the direct fix."
  },
  {
    "id": 64,
    "qid": "CCNA-MOD1-064",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match PDU name to layer for IP stack.",
    "scenario": "<div class=\"scenario-text\"><p>Consistent terminology.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Frame"
      },
      {
        "id": "i2",
        "text": "Packet"
      },
      {
        "id": "i3",
        "text": "Segment"
      },
      {
        "id": "i4",
        "text": "Bit"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Data Link"
      },
      {
        "id": "z2",
        "label": "Network"
      },
      {
        "id": "z3",
        "label": "Transport"
      },
      {
        "id": "z4",
        "label": "Physical"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Frame L2, packet L3, segment L4, bit L1."
  },
  {
    "id": 65,
    "qid": "CCNA-MOD1-065",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Order IPv6 neighbor discovery related messages (conceptual).",
    "scenario": "<div class=\"scenario-text\"><p>Host joins an IPv6 LAN.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Router Solicitation (optional)"
      },
      {
        "id": "c2",
        "text": "Router Advertisement"
      },
      {
        "id": "c3",
        "text": "Neighbor Solicitation for DAD/resolution"
      },
      {
        "id": "c4",
        "text": "Neighbor Advertisement"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "RS/RA for routers; NS/NA for neighbor resolution and DAD."
  },
  {
    "id": 66,
    "qid": "CCNA-MOD1-066",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match mask to number of usable IPv4 hosts (approx).",
    "scenario": "<div class=\"scenario-text\"><p>Subnet sizing.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "/24"
      },
      {
        "id": "i2",
        "text": "/30"
      },
      {
        "id": "i3",
        "text": "/16"
      },
      {
        "id": "i4",
        "text": "/32"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "254 hosts"
      },
      {
        "id": "z2",
        "label": "2 hosts"
      },
      {
        "id": "z3",
        "label": "65534 hosts"
      },
      {
        "id": "z4",
        "label": "1 host (host route)"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Classic usable host counts by prefix length."
  },
  {
    "id": 67,
    "qid": "CCNA-MOD1-067",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match traceroute observation to meaning.",
    "scenario": "<div class=\"scenario-text\"><p>Interpret path analysis.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "* * * timeouts"
      },
      {
        "id": "i2",
        "text": "Hops stop at edge router"
      },
      {
        "id": "i3",
        "text": "Path completes to destination"
      },
      {
        "id": "i4",
        "text": "Private IPs in middle hops"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Filtering or no ICMP response"
      },
      {
        "id": "z2",
        "label": "Possible missing route beyond edge"
      },
      {
        "id": "z3",
        "label": "End-to-end L3 path OK"
      },
      {
        "id": "z4",
        "label": "Traversal of private infrastructure"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Interpret common traceroute patterns."
  },
  {
    "id": 68,
    "qid": "CCNA-MOD1-068",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match IPv4 header field to role.",
    "scenario": "<div class=\"scenario-text\"><p>Packet analysis basics.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "TTL"
      },
      {
        "id": "i2",
        "text": "Source address"
      },
      {
        "id": "i3",
        "text": "Destination address"
      },
      {
        "id": "i4",
        "text": "Protocol"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Hop limit / loop prevention"
      },
      {
        "id": "z2",
        "label": "Sender identity"
      },
      {
        "id": "z3",
        "label": "Intended receiver"
      },
      {
        "id": "z4",
        "label": "Upper-layer protocol number"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "TTL, addresses, and protocol fields."
  },
  {
    "id": 69,
    "qid": "CCNA-MOD1-069",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the router that is missing a route back to the client subnet.",
    "scenario": "<div class=\"scenario-text\"><p>Client reaches R1 but responses never return from the remote server path.</p></div>",
    "nodes": [
      {
        "id": "r1",
        "label": "R1\nedge",
        "x": 25,
        "y": 40
      },
      {
        "id": "r2",
        "label": "R2\ncore",
        "x": 55,
        "y": 40
      },
      {
        "id": "r3",
        "label": "R3\nremote",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "r3"
    ],
    "explanation": "If forward path works but return fails, the remote router often lacks the return route."
  },
  {
    "id": 70,
    "qid": "CCNA-MOD1-070",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the host with an APIPA address that indicates DHCP failure.",
    "scenario": "<div class=\"scenario-text\"><p>Address labels are shown on each PC.</p></div>",
    "nodes": [
      {
        "id": "h1",
        "label": "PC1\n10.1.1.10",
        "x": 20,
        "y": 40
      },
      {
        "id": "h2",
        "label": "PC2\n169.254.5.5",
        "x": 50,
        "y": 40
      },
      {
        "id": "h3",
        "label": "PC3\n10.1.1.12",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "h2"
    ],
    "explanation": "169.254.x.x is APIPA, indicating DHCP failure."
  },
  {
    "id": 71,
    "qid": "CCNA-MOD1-071",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the interface that should be the default gateway for VLAN 10 hosts.",
    "scenario": "<div class=\"scenario-text\"><p>SVI and physical interfaces are labeled.</p></div>",
    "nodes": [
      {
        "id": "i1",
        "label": "Lo0\n1.1.1.1",
        "x": 20,
        "y": 40
      },
      {
        "id": "i2",
        "label": "Vlan10\n10.10.10.1",
        "x": 50,
        "y": 40
      },
      {
        "id": "i3",
        "label": "Gi0/0\n20.0.0.1",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "i2"
    ],
    "explanation": "Hosts in VLAN 10 use the VLAN 10 SVI as gateway."
  },
  {
    "id": 72,
    "qid": "CCNA-MOD1-072",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the device where you should check the IPv6 RA configuration.",
    "scenario": "<div class=\"scenario-text\"><p>Hosts lack default routers on an IPv6-only segment.</p></div>",
    "nodes": [
      {
        "id": "d1",
        "label": "Host",
        "x": 20,
        "y": 50
      },
      {
        "id": "d2",
        "label": "L3 switch\nSVI",
        "x": 50,
        "y": 50
      },
      {
        "id": "d3",
        "label": "DHCP-only box",
        "x": 80,
        "y": 50
      }
    ],
    "correct": [
      "d2"
    ],
    "explanation": "Router Advertisements are sent by the L3 interface (SVI/router) on the link."
  },
  {
    "id": 73,
    "qid": "CCNA-MOD1-073",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the link where an ACL is most likely blocking return traffic.",
    "scenario": "<div class=\"scenario-text\"><p>Asymmetric path: outbound via primary, return via backup filtered link.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "Primary out",
        "x": 30,
        "y": 30
      },
      {
        "id": "l2",
        "label": "Backup return",
        "x": 30,
        "y": 70
      },
      {
        "id": "l3",
        "label": "LAN",
        "x": 70,
        "y": 50
      }
    ],
    "correct": [
      "l2"
    ],
    "explanation": "Return path filtering on the backup link is a classic ACL misplacement."
  },
  {
    "id": 74,
    "qid": "CCNA-MOD1-074",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the subnet that overlaps with 192.168.1.0/24.",
    "scenario": "<div class=\"scenario-text\"><p>Identify the overlapping prefix in the diagram labels.</p></div>",
    "nodes": [
      {
        "id": "n1",
        "label": "192.168.1.0/25",
        "x": 25,
        "y": 40
      },
      {
        "id": "n2",
        "label": "10.0.0.0/8",
        "x": 55,
        "y": 40
      },
      {
        "id": "n3",
        "label": "172.16.0.0/16",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "n1"
    ],
    "explanation": "192.168.1.0/25 is contained in 192.168.1.0/24 and overlaps."
  },
  {
    "id": 75,
    "qid": "CCNA-MOD1-075",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that define a static default route.",
    "scenario": "<div class=\"scenario-text\"><p>Partial router configuration.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip route 0.0.0.0 0.0.0.0 203.0.113.1"
      },
      {
        "id": "l2",
        "label": "ip route 10.0.0.0 255.0.0.0 null0"
      },
      {
        "id": "l3",
        "label": "ip default-gateway 203.0.113.1"
      },
      {
        "id": "l4",
        "label": "router ospf 1"
      }
    ],
    "correct": [
      "l1",
      "l3"
    ],
    "selectCount": 2,
    "explanation": "ip route 0.0.0.0/0 and ip default-gateway (on L2 devices) relate to default forwarding."
  },
  {
    "id": 76,
    "qid": "CCNA-MOD1-076",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that assigns an IPv4 address to the interface.",
    "scenario": "<div class=\"scenario-text\"><p>Interface configuration fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip address 10.1.1.1 255.255.255.0"
      },
      {
        "id": "l2",
        "label": "no shutdown"
      },
      {
        "id": "l3",
        "label": "description Uplink"
      },
      {
        "id": "l4",
        "label": "duplex full"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "ip address sets the interface IPv4 address and mask."
  },
  {
    "id": 77,
    "qid": "CCNA-MOD1-077",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines needed for a basic IPv6-enabled interface.",
    "scenario": "<div class=\"scenario-text\"><p>Enable IPv6 on a LAN interface.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ipv6 enable"
      },
      {
        "id": "l2",
        "label": "ipv6 address 2001:db8:1::1/64"
      },
      {
        "id": "l3",
        "label": "ip address 10.1.1.1 255.255.255.0"
      },
      {
        "id": "l4",
        "label": "speed 1000"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "ipv6 enable and/or an explicit ipv6 address activate IPv6 on the interface."
  },
  {
    "id": 78,
    "qid": "CCNA-MOD1-078",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that would blackhole traffic to a prefix.",
    "scenario": "<div class=\"scenario-text\"><p>Static route options under review.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip route 10.9.9.0 255.255.255.0 null0"
      },
      {
        "id": "l2",
        "label": "ip route 10.9.9.0 255.255.255.0 10.1.1.2"
      },
      {
        "id": "l3",
        "label": "ip route 0.0.0.0 0.0.0.0 203.0.113.1"
      },
      {
        "id": "l4",
        "label": "ip name-server 8.8.8.8"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "A static route to Null0 discards matching traffic."
  },
  {
    "id": 79,
    "qid": "CCNA-MOD1-079",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that could cause an overlapping subnet on this router.",
    "scenario": "<div class=\"scenario-text\"><p>Two interfaces configured with conflicting prefixes.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip address 192.168.1.1 255.255.255.0"
      },
      {
        "id": "l2",
        "label": "ip address 192.168.1.129 255.255.255.128"
      },
      {
        "id": "l3",
        "label": "ip address 10.0.0.1 255.0.0.0"
      },
      {
        "id": "l4",
        "label": "ipv6 address 2001:db8::1/64"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "192.168.1.0/24 and 192.168.1.128/25 overlap."
  },
  {
    "id": 80,
    "qid": "CCNA-MOD1-080",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that enables IPv6 routing on the device.",
    "scenario": "<div class=\"scenario-text\"><p>Global configuration for IPv6 forwarding.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ipv6 unicast-routing"
      },
      {
        "id": "l2",
        "label": "ip routing"
      },
      {
        "id": "l3",
        "label": "ipv6 address autoconfig"
      },
      {
        "id": "l4",
        "label": "ipv6 nd suppress-ra"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "ipv6 unicast-routing enables IPv6 forwarding on Cisco routers."
  },
  {
    "id": 81,
    "qid": "CCNA-MOD1-081",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "What does CAPWAP provide in a Cisco lightweight AP architecture?",
    "scenario": "<div class=\"scenario-text\"><p>Centralized wireless design with a WLC.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "A routing protocol for APs"
      },
      {
        "id": "b",
        "text": "Encapsulation tunnel between AP and WLC"
      },
      {
        "id": "c",
        "text": "A replacement for 802.11"
      },
      {
        "id": "d",
        "text": "Layer-3 switching only"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CAPWAP tunnels control and data between lightweight APs and the wireless LAN controller."
  },
  {
    "id": 82,
    "qid": "CCNA-MOD1-082",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "Which wireless security standard is preferred over WPA2 for modern enterprise SSIDs?",
    "scenario": "<div class=\"scenario-text\"><p>Update a corporate WLAN security policy.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "WEP"
      },
      {
        "id": "b",
        "text": "WPA3"
      },
      {
        "id": "c",
        "text": "Open authentication only"
      },
      {
        "id": "d",
        "text": "WPA1-PSK"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "WPA3 is the current preferred standard; WEP and WPA1 are obsolete."
  },
  {
    "id": 83,
    "qid": "CCNA-MOD1-083",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "In a hypervisor environment, what is a virtual switch primarily responsible for?",
    "scenario": "<div class=\"scenario-text\"><p>VMs on the same host need connectivity.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Physical fiber splicing"
      },
      {
        "id": "b",
        "text": "L2 forwarding between VMs and physical NICs"
      },
      {
        "id": "c",
        "text": "Replacing the core router"
      },
      {
        "id": "d",
        "text": "Terminating BGP only"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "vSwitches provide Layer-2 connectivity for virtual machines and uplink to physical NICs."
  },
  {
    "id": 84,
    "qid": "CCNA-MOD1-084",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "Which 802.11 frame type is used to discover available networks?",
    "scenario": "<div class=\"scenario-text\"><p>A client scans before associating.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Data frame"
      },
      {
        "id": "b",
        "text": "Beacon / probe request-response"
      },
      {
        "id": "c",
        "text": "RTS only"
      },
      {
        "id": "d",
        "text": "Block ACK only"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Beacons and probe request/response frames advertise and discover SSIDs."
  },
  {
    "id": 85,
    "qid": "CCNA-MOD1-085",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE components of a typical Cisco lightweight wireless solution.",
    "scenario": "<div class=\"scenario-text\"><p>Design a campus WLAN.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Lightweight AP"
      },
      {
        "id": "b",
        "text": "Wireless LAN Controller"
      },
      {
        "id": "c",
        "text": "CAPWAP tunnel"
      },
      {
        "id": "d",
        "text": "Frame Relay switch"
      },
      {
        "id": "e",
        "text": "ISDN dialer"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "LAPs, WLC, and CAPWAP form the lightweight architecture."
  },
  {
    "id": 86,
    "qid": "CCNA-MOD1-086",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO advantages of virtualization for network labs.",
    "scenario": "<div class=\"scenario-text\"><p>Build a CCNA practice environment.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Multiple virtual routers/switches on one host"
      },
      {
        "id": "b",
        "text": "Snapshot and reset topologies easily"
      },
      {
        "id": "c",
        "text": "Eliminates need for IP addressing"
      },
      {
        "id": "d",
        "text": "Removes all licensing considerations always"
      },
      {
        "id": "e",
        "text": "Guarantees production performance"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Virtual labs pack multiple nodes and support snapshots."
  },
  {
    "id": 87,
    "qid": "CCNA-MOD1-087",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE client states or steps toward 802.11 association (simplified).",
    "scenario": "<div class=\"scenario-text\"><p>Trace wireless client onboarding.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Scanning / probing"
      },
      {
        "id": "b",
        "text": "Authentication"
      },
      {
        "id": "c",
        "text": "Association"
      },
      {
        "id": "d",
        "text": "OSPF adjacency"
      },
      {
        "id": "e",
        "text": "VTP update"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Scan, authenticate, associate—then higher-layer work."
  },
  {
    "id": 88,
    "qid": "CCNA-MOD1-088",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO causes of wireless client inability to obtain an IP.",
    "scenario": "<div class=\"scenario-text\"><p>Client associates but has no connectivity.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "DHCP server unreachable from the WLAN VLAN"
      },
      {
        "id": "b",
        "text": "Wrong VLAN on AP/WLC interface for the SSID"
      },
      {
        "id": "c",
        "text": "Correct DNS only"
      },
      {
        "id": "d",
        "text": "Fiber bend radius on core"
      },
      {
        "id": "e",
        "text": "STP root priority perfect"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "After association, DHCP still depends on VLAN and server reachability."
  },
  {
    "id": 89,
    "qid": "CCNA-MOD1-089",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE wireless troubleshooting checks on the client.",
    "scenario": "<div class=\"scenario-text\"><p>User reports weak Wi-Fi.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Signal strength / RSSI"
      },
      {
        "id": "b",
        "text": "Correct SSID and security type"
      },
      {
        "id": "c",
        "text": "IP address and gateway after connect"
      },
      {
        "id": "d",
        "text": "OSPF cost on the laptop"
      },
      {
        "id": "e",
        "text": "Switch native VLAN on the SSID name"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "RF, SSID/security, and IP stack are primary client checks."
  },
  {
    "id": 90,
    "qid": "CCNA-MOD1-090",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO hypervisor networking modes often used in labs.",
    "scenario": "<div class=\"scenario-text\"><p>Connect VMs to each other and the host.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Bridged"
      },
      {
        "id": "b",
        "text": "NAT"
      },
      {
        "id": "c",
        "text": "Token Ring only"
      },
      {
        "id": "d",
        "text": "FDDI mandatory"
      },
      {
        "id": "e",
        "text": "Frame Relay LMI"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Bridged and NAT are common vNIC modes."
  },
  {
    "id": 91,
    "qid": "CCNA-MOD1-091",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE RF factors that affect WLAN coverage.",
    "scenario": "<div class=\"scenario-text\"><p>Survey a floor for AP placement.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Frequency band (2.4 vs 5/6 GHz)"
      },
      {
        "id": "b",
        "text": "Obstacles and walls"
      },
      {
        "id": "c",
        "text": "AP power and antenna pattern"
      },
      {
        "id": "d",
        "text": "BGP AS number"
      },
      {
        "id": "e",
        "text": "Console baud rate"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Band, obstacles, and AP RF settings drive coverage."
  },
  {
    "id": 92,
    "qid": "CCNA-MOD1-092",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO roles of a wireless LAN controller.",
    "scenario": "<div class=\"scenario-text\"><p>Centralize AP management.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Push configuration to lightweight APs"
      },
      {
        "id": "b",
        "text": "Centralize client authentication policy options"
      },
      {
        "id": "c",
        "text": "Replace all copper cabling"
      },
      {
        "id": "d",
        "text": "Terminate every OSPF adjacency for PCs"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "WLC configures APs and centralizes WLAN policy."
  },
  {
    "id": 93,
    "qid": "CCNA-MOD1-093",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE signs of wireless interference or poor RF.",
    "scenario": "<div class=\"scenario-text\"><p>Users report drops in one area.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "High retry rates"
      },
      {
        "id": "b",
        "text": "Low SNR"
      },
      {
        "id": "c",
        "text": "Roaming failures between APs"
      },
      {
        "id": "d",
        "text": "Perfect copper CRC counters only"
      },
      {
        "id": "e",
        "text": "Correct NTP stratum"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Retries, low SNR, and roam issues indicate RF problems."
  },
  {
    "id": 94,
    "qid": "CCNA-MOD1-094",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO virtualization terms correctly paired.",
    "scenario": "<div class=\"scenario-text\"><p>Discuss data center connectivity.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "VM = virtual machine"
      },
      {
        "id": "b",
        "text": "vSwitch = virtual Layer-2 switch"
      },
      {
        "id": "c",
        "text": "CAPWAP = copper pinout standard"
      },
      {
        "id": "d",
        "text": "WPA3 = routing protocol"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "VM and vSwitch are core virtualization networking terms."
  },
  {
    "id": 95,
    "qid": "CCNA-MOD1-095",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE steps when an AP will not join the WLC.",
    "scenario": "<div class=\"scenario-text\"><p>New AP stays in discovery.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Verify DHCP option 43 or DNS for WLC"
      },
      {
        "id": "b",
        "text": "Confirm IP reachability to WLC"
      },
      {
        "id": "c",
        "text": "Check certificates/time if required"
      },
      {
        "id": "d",
        "text": "Disable all switch uplinks"
      },
      {
        "id": "e",
        "text": "Erase client laptop OS"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Discovery needs DHCP/DNS/IP reachability and valid trust/time."
  },
  {
    "id": 96,
    "qid": "CCNA-MOD1-096",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO benefits of 5 GHz vs 2.4 GHz for dense offices.",
    "scenario": "<div class=\"scenario-text\"><p>Choose band for capacity.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "More non-overlapping channels"
      },
      {
        "id": "b",
        "text": "Generally less interference from legacy devices"
      },
      {
        "id": "c",
        "text": "Longer range always through concrete"
      },
      {
        "id": "d",
        "text": "Lower free-space path loss always"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "5 GHz offers more channels and often cleaner spectrum; range is typically shorter."
  },
  {
    "id": 97,
    "qid": "CCNA-MOD1-097",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match wireless component to function.",
    "scenario": "<div class=\"scenario-text\"><p>Lightweight architecture roles.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Lightweight AP"
      },
      {
        "id": "i2",
        "text": "WLC"
      },
      {
        "id": "i3",
        "text": "CAPWAP"
      },
      {
        "id": "i4",
        "text": "SSID"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "RF radio endpoint"
      },
      {
        "id": "z2",
        "label": "Central controller"
      },
      {
        "id": "z3",
        "label": "AP-WLC tunnel"
      },
      {
        "id": "z4",
        "label": "Network name clients join"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "AP radios, WLC control, CAPWAP tunnel, SSID name."
  },
  {
    "id": 98,
    "qid": "CCNA-MOD1-098",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match virtualization term to definition.",
    "scenario": "<div class=\"scenario-text\"><p>Server virtualization basics.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Hypervisor"
      },
      {
        "id": "i2",
        "text": "vNIC"
      },
      {
        "id": "i3",
        "text": "vSwitch"
      },
      {
        "id": "i4",
        "text": "Snapshot"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Software layer hosting VMs"
      },
      {
        "id": "z2",
        "label": "Virtual network interface on a VM"
      },
      {
        "id": "z3",
        "label": "Software switch for VMs"
      },
      {
        "id": "z4",
        "label": "Point-in-time VM state"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Hypervisor, vNIC, vSwitch, snapshot."
  },
  {
    "id": 99,
    "qid": "CCNA-MOD1-099",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Order simplified wireless client join process.",
    "scenario": "<div class=\"scenario-text\"><p>Client connects to corporate SSID.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Scan for SSID"
      },
      {
        "id": "c2",
        "text": "Authenticate"
      },
      {
        "id": "c3",
        "text": "Associate"
      },
      {
        "id": "c4",
        "text": "Obtain IP (DHCP)"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Scan → auth → associate → DHCP."
  },
  {
    "id": 100,
    "qid": "CCNA-MOD1-100",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match 802.11 security to description.",
    "scenario": "<div class=\"scenario-text\"><p>WLAN security evolution.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "WEP"
      },
      {
        "id": "i2",
        "text": "WPA2-PSK"
      },
      {
        "id": "i3",
        "text": "WPA3-Enterprise"
      },
      {
        "id": "i4",
        "text": "Open"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Obsolete weak encryption"
      },
      {
        "id": "z2",
        "label": "Personal pre-shared key (modern legacy)"
      },
      {
        "id": "z3",
        "label": "802.1X with improved crypto"
      },
      {
        "id": "z4",
        "label": "No encryption"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "WEP obsolete; WPA2-PSK personal; WPA3-Enterprise; open = none."
  },
  {
    "id": 101,
    "qid": "CCNA-MOD1-101",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match problem to wireless layer focus.",
    "scenario": "<div class=\"scenario-text\"><p>Isolate WLAN faults.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "No SSIDs visible"
      },
      {
        "id": "i2",
        "text": "Associates but no IP"
      },
      {
        "id": "i3",
        "text": "IP OK but cannot roam"
      },
      {
        "id": "i4",
        "text": "Intermittent high retries"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "RF / AP down / band"
      },
      {
        "id": "z2",
        "label": "VLAN / DHCP path"
      },
      {
        "id": "z3",
        "label": "Controller / mobility config"
      },
      {
        "id": "z4",
        "label": "Interference / channel"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Map symptom class to RF, DHCP, mobility, or interference."
  },
  {
    "id": 102,
    "qid": "CCNA-MOD1-102",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Order AP join to WLC (lightweight) high-level steps.",
    "scenario": "<div class=\"scenario-text\"><p>Factory AP on a prepared VLAN.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "AP obtains IP"
      },
      {
        "id": "c2",
        "text": "AP discovers WLC"
      },
      {
        "id": "c3",
        "text": "AP joins WLC"
      },
      {
        "id": "c4",
        "text": "AP downloads config/image as needed"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "DHCP → discover → join → image/config."
  },
  {
    "id": 103,
    "qid": "CCNA-MOD1-103",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match cloud connectivity model to idea.",
    "scenario": "<div class=\"scenario-text\"><p>Hybrid network discussion.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "IaaS"
      },
      {
        "id": "i2",
        "text": "SaaS"
      },
      {
        "id": "i3",
        "text": "VPN to cloud"
      },
      {
        "id": "i4",
        "text": "Direct Connect / ExpressRoute style"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Infrastructure rented as VMs/networks"
      },
      {
        "id": "z2",
        "label": "Software delivered as service"
      },
      {
        "id": "z3",
        "label": "Encrypted tunnel overlay"
      },
      {
        "id": "z4",
        "label": "Private connectivity to cloud provider"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "IaaS, SaaS, VPN, and private cloud interconnect."
  },
  {
    "id": 104,
    "qid": "CCNA-MOD1-104",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match RF metric to meaning.",
    "scenario": "<div class=\"scenario-text\"><p>Read a wireless survey.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "RSSI"
      },
      {
        "id": "i2",
        "text": "SNR"
      },
      {
        "id": "i3",
        "text": "Channel utilization"
      },
      {
        "id": "i4",
        "text": "Retry rate"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Received signal strength"
      },
      {
        "id": "z2",
        "label": "Signal vs noise quality"
      },
      {
        "id": "z3",
        "label": "How busy the channel is"
      },
      {
        "id": "z4",
        "label": "Frames needing retransmission"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "RSSI, SNR, utilization, retries."
  },
  {
    "id": 105,
    "qid": "CCNA-MOD1-105",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match vSwitch uplink failure symptom to check.",
    "scenario": "<div class=\"scenario-text\"><p>VM networking down.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "All VMs on host offline"
      },
      {
        "id": "i2",
        "text": "One VM offline"
      },
      {
        "id": "i3",
        "text": "Only external access fails"
      },
      {
        "id": "i4",
        "text": "Inter-VM on same port group OK"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Physical NIC / uplink"
      },
      {
        "id": "z2",
        "label": "vNIC or VM settings"
      },
      {
        "id": "z3",
        "label": "Uplink path / physical network"
      },
      {
        "id": "z4",
        "label": "Local vSwitch segment OK"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Scope from host-wide vs single VM vs external path."
  },
  {
    "id": 106,
    "qid": "CCNA-MOD1-106",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Order steps to isolate wireless vs wired fault for one user.",
    "scenario": "<div class=\"scenario-text\"><p>User says Wi-Fi is broken.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Test same user on wired"
      },
      {
        "id": "c2",
        "text": "Test another device on same SSID"
      },
      {
        "id": "c3",
        "text": "Check client RF and IP"
      },
      {
        "id": "c4",
        "text": "Escalate to WLC/AP logs if RF OK"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Compare wired, other clients, local RF/IP, then controller."
  },
  {
    "id": 107,
    "qid": "CCNA-MOD1-107",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match 802.11 band to rough characteristic.",
    "scenario": "<div class=\"scenario-text\"><p>Band planning.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "2.4 GHz"
      },
      {
        "id": "i2",
        "text": "5 GHz"
      },
      {
        "id": "i3",
        "text": "6 GHz (Wi-Fi 6E)"
      },
      {
        "id": "i4",
        "text": "Sub-1 GHz IoT (general)"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Longer range, more interference, fewer channels"
      },
      {
        "id": "z2",
        "label": "More channels, shorter range"
      },
      {
        "id": "z3",
        "label": "Wide spectrum, modern clients"
      },
      {
        "id": "z4",
        "label": "Long range low rate IoT niches"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Band trade-offs for planning."
  },
  {
    "id": 108,
    "qid": "CCNA-MOD1-108",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match CAPWAP mode concept to description.",
    "scenario": "<div class=\"scenario-text\"><p>Split-MAC architecture idea.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Control plane on WLC"
      },
      {
        "id": "i2",
        "text": "RF on AP"
      },
      {
        "id": "i3",
        "text": "Central switching"
      },
      {
        "id": "i4",
        "text": "FlexConnect local switching"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Management/auth centralized"
      },
      {
        "id": "z2",
        "label": "Radio stays at edge"
      },
      {
        "id": "z3",
        "label": "User data through WLC"
      },
      {
        "id": "z4",
        "label": "User data bridged locally at AP"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Control vs RF vs data path modes."
  },
  {
    "id": 109,
    "qid": "CCNA-MOD1-109",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the AP that failed to join the controller.",
    "scenario": "<div class=\"scenario-text\"><p>Three APs show joined; one remains in discovery.</p></div>",
    "nodes": [
      {
        "id": "a1",
        "label": "AP-1\nJoined",
        "x": 20,
        "y": 40
      },
      {
        "id": "a2",
        "label": "AP-2\nDiscovery",
        "x": 50,
        "y": 40
      },
      {
        "id": "a3",
        "label": "AP-3\nJoined",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "a2"
    ],
    "explanation": "The AP still in discovery has not joined the WLC."
  },
  {
    "id": 110,
    "qid": "CCNA-MOD1-110",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the SSID that a WPA3-only client should join.",
    "scenario": "<div class=\"scenario-text\"><p>SSIDs advertised with different security.</p></div>",
    "nodes": [
      {
        "id": "s1",
        "label": "Guest\nOpen",
        "x": 20,
        "y": 40
      },
      {
        "id": "s2",
        "label": "Corp\nWPA3",
        "x": 50,
        "y": 40
      },
      {
        "id": "s3",
        "label": "Legacy\nWEP",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "s2"
    ],
    "explanation": "WPA3-only clients require a WPA3 SSID."
  },
  {
    "id": 111,
    "qid": "CCNA-MOD1-111",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the virtual switch uplink that is down.",
    "scenario": "<div class=\"scenario-text\"><p>VM traffic to the physical network fails; inter-VM works.</p></div>",
    "nodes": [
      {
        "id": "u1",
        "label": "vmnic0\nDown",
        "x": 30,
        "y": 40
      },
      {
        "id": "u2",
        "label": "vSwitch0",
        "x": 55,
        "y": 40
      },
      {
        "id": "u3",
        "label": "VM-A",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "u1"
    ],
    "explanation": "Down physical uplink (vmnic) isolates VMs from the external network."
  },
  {
    "id": 112,
    "qid": "CCNA-MOD1-112",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the controller that APs in Branch-1 should join for central management.",
    "scenario": "<div class=\"scenario-text\"><p>Two WLCs exist; Branch-1 is mapped to the primary campus controller.</p></div>",
    "nodes": [
      {
        "id": "w1",
        "label": "WLC-Campus",
        "x": 30,
        "y": 40
      },
      {
        "id": "w2",
        "label": "WLC-DR",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "w1"
    ],
    "explanation": "Branch-1 is designed to join the campus primary WLC."
  },
  {
    "id": 113,
    "qid": "CCNA-MOD1-113",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the band where a legacy 2.4-only IoT device must connect.",
    "scenario": "<div class=\"scenario-text\"><p>Dual-band APs serve 2.4 and 5 GHz.</p></div>",
    "nodes": [
      {
        "id": "b1",
        "label": "2.4 GHz",
        "x": 30,
        "y": 40
      },
      {
        "id": "b2",
        "label": "5 GHz",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "b1"
    ],
    "explanation": "2.4-only clients must use the 2.4 GHz radio."
  },
  {
    "id": 114,
    "qid": "CCNA-MOD1-114",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the path that carries CAPWAP from AP to WLC.",
    "scenario": "<div class=\"scenario-text\"><p>Data center WLC and access-layer AP are shown.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "CAPWAP tunnel",
        "x": 50,
        "y": 30
      },
      {
        "id": "p2",
        "label": "Local switch only",
        "x": 20,
        "y": 70
      },
      {
        "id": "p3",
        "label": "Client radio",
        "x": 80,
        "y": 70
      }
    ],
    "correct": [
      "p1"
    ],
    "explanation": "CAPWAP is the AP–WLC tunnel path."
  },
  {
    "id": 115,
    "qid": "CCNA-MOD1-115",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that relate to AP management addressing.",
    "scenario": "<div class=\"scenario-text\"><p>Switch interface toward an AP.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "switchport access vlan 100"
      },
      {
        "id": "l2",
        "label": "description AP management"
      },
      {
        "id": "l3",
        "label": "ip route 0.0.0.0 0.0.0.0 10.0.0.1"
      },
      {
        "id": "l4",
        "label": "router ospf 1"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "AP management VLAN and description identify the AP-facing access port."
  },
  {
    "id": 116,
    "qid": "CCNA-MOD1-116",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that would trunk multiple VLANs toward a hypervisor host.",
    "scenario": "<div class=\"scenario-text\"><p>Host runs multiple VM networks.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "switchport mode trunk"
      },
      {
        "id": "l2",
        "label": "switchport mode access"
      },
      {
        "id": "l3",
        "label": "spanning-tree portfast"
      },
      {
        "id": "l4",
        "label": "power inline never"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "Trunk mode carries multiple VLANs to a hypervisor."
  },
  {
    "id": 117,
    "qid": "CCNA-MOD1-117",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines appropriate on an AP access port with PortFast.",
    "scenario": "<div class=\"scenario-text\"><p>Edge port toward a lightweight AP.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "switchport mode access"
      },
      {
        "id": "l2",
        "label": "spanning-tree portfast"
      },
      {
        "id": "l3",
        "label": "switchport mode trunk"
      },
      {
        "id": "l4",
        "label": "no cdp run"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Access mode + PortFast is common for AP edge ports (when not trunking multiple SSIDs locally)."
  },
  {
    "id": 118,
    "qid": "CCNA-MOD1-118",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that disables PoE on a port (if phones/APs should not draw power).",
    "scenario": "<div class=\"scenario-text\"><p>Port mistakenly powering a device.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "power inline never"
      },
      {
        "id": "l2",
        "label": "power inline auto"
      },
      {
        "id": "l3",
        "label": "speed 1000"
      },
      {
        "id": "l4",
        "label": "duplex full"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "power inline never disables PoE on the port."
  },
  {
    "id": 119,
    "qid": "CCNA-MOD1-119",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that help an AP discover the WLC via DHCP.",
    "scenario": "<div class=\"scenario-text\"><p>DHCP pool options fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "option 43 hex ..."
      },
      {
        "id": "l2",
        "label": "default-router 10.10.10.1"
      },
      {
        "id": "l3",
        "label": "dns-server 10.10.10.10"
      },
      {
        "id": "l4",
        "label": "network 10.10.10.0 255.255.255.0"
      }
    ],
    "correct": [
      "l1",
      "l3"
    ],
    "selectCount": 2,
    "explanation": "Option 43 and DNS are common WLC discovery methods; both appear in DHCP pools."
  },
  {
    "id": 120,
    "qid": "CCNA-MOD1-120",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that creates a VLAN for wireless users.",
    "scenario": "<div class=\"scenario-text\"><p>Switch global config fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "vlan 40"
      },
      {
        "id": "l2",
        "label": "interface vlan 40"
      },
      {
        "id": "l3",
        "label": "ip helper-address 10.1.1.5"
      },
      {
        "id": "l4",
        "label": "name WIFI-USERS"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "vlan 40 creates the Layer-2 VLAN for Wi-Fi users."
  },
  {
    "id": 121,
    "qid": "CCNA-MOD1-121",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "A host can ping its gateway but not a remote server. Where is the problem most likely?",
    "scenario": "<div class=\"scenario-text\"><p>Local subnet works; remote fails.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Host NIC driver only"
      },
      {
        "id": "b",
        "text": "Beyond the gateway (routing/ACL/remote)"
      },
      {
        "id": "c",
        "text": "Switch native VLAN only"
      },
      {
        "id": "d",
        "text": "Console cable"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Local success and remote failure place the fault beyond the gateway."
  },
  {
    "id": 122,
    "qid": "CCNA-MOD1-122",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "Which host setting must match the VLAN’s subnet to communicate on that VLAN?",
    "scenario": "<div class=\"scenario-text\"><p>PC moved to a new access port.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Default gateway in another subnet without routing"
      },
      {
        "id": "b",
        "text": "IP address and mask for the VLAN subnet"
      },
      {
        "id": "c",
        "text": "OSPF process ID"
      },
      {
        "id": "d",
        "text": "VTP domain name on the PC"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "The host IP/mask must belong to the VLAN’s subnet."
  },
  {
    "id": 123,
    "qid": "CCNA-MOD1-123",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "What is the first check when a user cannot access any network resource?",
    "scenario": "<div class=\"scenario-text\"><p>Helpdesk Tier-1 isolation.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Core BGP table"
      },
      {
        "id": "b",
        "text": "Link light / physical connectivity and IP config"
      },
      {
        "id": "c",
        "text": "Change all STP priorities"
      },
      {
        "id": "d",
        "text": "Rebuild the entire campus"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Start with physical link and basic IP configuration on the client path."
  },
  {
    "id": 124,
    "qid": "CCNA-MOD1-124",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "Which VLAN-related misconfiguration isolates a client on an access port?",
    "scenario": "<div class=\"scenario-text\"><p>Port is up; client has no connectivity to peers.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Correct access VLAN matching the SVI"
      },
      {
        "id": "b",
        "text": "Wrong access VLAN assignment"
      },
      {
        "id": "c",
        "text": "PortFast enabled"
      },
      {
        "id": "d",
        "text": "CDP enabled"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Wrong access VLAN places the client in an unintended broadcast domain."
  },
  {
    "id": 125,
    "qid": "CCNA-MOD1-125",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE client-side checks for no network access.",
    "scenario": "<div class=\"scenario-text\"><p>Laptop will not connect after docking.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Link status / cable / Wi-Fi radio"
      },
      {
        "id": "b",
        "text": "IP address, mask, gateway"
      },
      {
        "id": "c",
        "text": "DNS settings if names fail"
      },
      {
        "id": "d",
        "text": "Switch VTP password on laptop"
      },
      {
        "id": "e",
        "text": "Router BGP ASN on laptop"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Physical/radio, IP stack, and DNS are client-side basics."
  },
  {
    "id": 126,
    "qid": "CCNA-MOD1-126",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO results of placing a client in the wrong access VLAN.",
    "scenario": "<div class=\"scenario-text\"><p>Port configured for VLAN 20 instead of 10.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Cannot reach VLAN 10 resources"
      },
      {
        "id": "b",
        "text": "May get DHCP from VLAN 20 pool if present"
      },
      {
        "id": "c",
        "text": "Automatically fixes OSPF"
      },
      {
        "id": "d",
        "text": "Disables STP globally"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Wrong VLAN means wrong broadcast domain and possibly wrong DHCP."
  },
  {
    "id": 127,
    "qid": "CCNA-MOD1-127",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE network-side checks when one client is isolated.",
    "scenario": "<div class=\"scenario-text\"><p>Only one desk is affected.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Switch port status and VLAN"
      },
      {
        "id": "b",
        "text": "Port security / sticky MAC violations"
      },
      {
        "id": "c",
        "text": "Cable from wall to switch"
      },
      {
        "id": "d",
        "text": "Internet exchange routes worldwide"
      },
      {
        "id": "e",
        "text": "Change root bridge randomly"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Single-client issues: port, security, cable."
  },
  {
    "id": 128,
    "qid": "CCNA-MOD1-128",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO reasons a client might resolve names but not open web pages.",
    "scenario": "<div class=\"scenario-text\"><p>DNS works; HTTP fails.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "HTTP/HTTPS blocked by firewall"
      },
      {
        "id": "b",
        "text": "Proxy settings incorrect"
      },
      {
        "id": "c",
        "text": "DNS server down completely"
      },
      {
        "id": "d",
        "text": "No IP address at all"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Name resolution OK implies IP works; app path or proxy may fail."
  },
  {
    "id": 129,
    "qid": "CCNA-MOD1-129",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE steps in a structured client isolation flow.",
    "scenario": "<div class=\"scenario-text\"><p>Formal troubleshooting method.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Define the problem scope"
      },
      {
        "id": "b",
        "text": "Gather information (IP, VLAN, errors)"
      },
      {
        "id": "c",
        "text": "Hypothesize and test"
      },
      {
        "id": "d",
        "text": "Reload every core device first"
      },
      {
        "id": "e",
        "text": "Disable all monitoring"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Scope, gather, hypothesize/test—avoid random core reloads."
  },
  {
    "id": 130,
    "qid": "CCNA-MOD1-130",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO indicators of a port-security violation on the client port.",
    "scenario": "<div class=\"scenario-text\"><p>Port is err-disabled or limits MACs.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "show port-security interface reports violation"
      },
      {
        "id": "b",
        "text": "Port status err-disabled or restrict mode drops"
      },
      {
        "id": "c",
        "text": "Perfect OSPF FULL on the PC"
      },
      {
        "id": "d",
        "text": "Native VLAN matches on all trunks always"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Port-security status and err-disable are key indicators."
  },
  {
    "id": 131,
    "qid": "CCNA-MOD1-131",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE valid gateway-related client faults.",
    "scenario": "<div class=\"scenario-text\"><p>Cannot leave the local subnet.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "No default gateway configured"
      },
      {
        "id": "b",
        "text": "Gateway IP wrong"
      },
      {
        "id": "c",
        "text": "Gateway down or unreachable"
      },
      {
        "id": "d",
        "text": "Correct /32 host route to self only as gateway"
      },
      {
        "id": "e",
        "text": "DNS TTL too low only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Missing, wrong, or unreachable gateway blocks remote access."
  },
  {
    "id": 132,
    "qid": "CCNA-MOD1-132",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO tools appropriate on a Windows client for connectivity tests.",
    "scenario": "<div class=\"scenario-text\"><p>User laptop troubleshooting.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "ping"
      },
      {
        "id": "b",
        "text": "ipconfig /all"
      },
      {
        "id": "c",
        "text": "show ip route on the laptop as IOS"
      },
      {
        "id": "d",
        "text": "debug ip packet on the laptop IOS"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "ping and ipconfig are standard Windows tools."
  },
  {
    "id": 133,
    "qid": "CCNA-MOD1-133",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE causes of intermittent single-client disconnects.",
    "scenario": "<div class=\"scenario-text\"><p>One user flaps; others stable.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Bad patch cable"
      },
      {
        "id": "b",
        "text": "Failing NIC"
      },
      {
        "id": "c",
        "text": "Port flapping due to cable/NIC"
      },
      {
        "id": "d",
        "text": "Global OSPF timer mismatch campus-wide"
      },
      {
        "id": "e",
        "text": "Missing Internet default on ISP only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Intermittent single-client issues are often cable/NIC/port."
  },
  {
    "id": 134,
    "qid": "CCNA-MOD1-134",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO VLAN access port commands relevant to client connectivity.",
    "scenario": "<div class=\"scenario-text\"><p>Configure wall port for data VLAN 15.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "switchport mode access"
      },
      {
        "id": "b",
        "text": "switchport access vlan 15"
      },
      {
        "id": "c",
        "text": "ip routing"
      },
      {
        "id": "d",
        "text": "router ospf 1"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Access mode and access VLAN place the client correctly."
  },
  {
    "id": 135,
    "qid": "CCNA-MOD1-135",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE data points to collect before escalating a client ticket.",
    "scenario": "<div class=\"scenario-text\"><p>Prepare handoff notes.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Client IP/MAC"
      },
      {
        "id": "b",
        "text": "Switch port and VLAN"
      },
      {
        "id": "c",
        "text": "Error counters on the port"
      },
      {
        "id": "d",
        "text": "CEO calendar"
      },
      {
        "id": "e",
        "text": "Unrelated branch OSPF database"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "IP/MAC, port/VLAN, and counters are essential escalation data."
  },
  {
    "id": 136,
    "qid": "CCNA-MOD1-136",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO differences between testing by IP vs by name.",
    "scenario": "<div class=\"scenario-text\"><p>Narrow DNS vs path issues.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "IP success + name failure suggests DNS"
      },
      {
        "id": "b",
        "text": "Name success proves DNS path at least partially works"
      },
      {
        "id": "c",
        "text": "Name success proves no firewall exists"
      },
      {
        "id": "d",
        "text": "IP failure always means DNS is wrong"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Compare IP vs hostname tests to isolate DNS."
  },
  {
    "id": 137,
    "qid": "CCNA-MOD1-137",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match client symptom to first check.",
    "scenario": "<div class=\"scenario-text\"><p>Fast isolation map.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "No link light"
      },
      {
        "id": "i2",
        "text": "Link up, no IP"
      },
      {
        "id": "i3",
        "text": "IP OK, no remote"
      },
      {
        "id": "i4",
        "text": "Names fail, IP works"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Cable / port / NIC"
      },
      {
        "id": "z2",
        "label": "VLAN / DHCP"
      },
      {
        "id": "z3",
        "label": "Gateway / routing"
      },
      {
        "id": "z4",
        "label": "DNS"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Map symptom to the first logical check."
  },
  {
    "id": 138,
    "qid": "CCNA-MOD1-138",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Order Tier-1 client troubleshooting steps.",
    "scenario": "<div class=\"scenario-text\"><p>Phone support script.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Confirm physical/Wi-Fi connection"
      },
      {
        "id": "c2",
        "text": "Check IP/gateway"
      },
      {
        "id": "c3",
        "text": "Test ping gateway"
      },
      {
        "id": "c4",
        "text": "Test remote IP then DNS"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Physical → IP → gateway ping → remote/DNS."
  },
  {
    "id": 139,
    "qid": "CCNA-MOD1-139",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match switch feature to client impact when misconfigured.",
    "scenario": "<div class=\"scenario-text\"><p>Access-edge mistakes.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Wrong access VLAN"
      },
      {
        "id": "i2",
        "text": "Port security violation"
      },
      {
        "id": "i3",
        "text": "shutdown"
      },
      {
        "id": "i4",
        "text": "Storm control extreme"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Wrong network/DHCP domain"
      },
      {
        "id": "z2",
        "label": "Port blocked or limited"
      },
      {
        "id": "z3",
        "label": "Link administratively down"
      },
      {
        "id": "z4",
        "label": "Traffic dropped under load"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "VLAN, security, shutdown, storm control effects."
  },
  {
    "id": 140,
    "qid": "CCNA-MOD1-140",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match host command (Windows) to purpose.",
    "scenario": "<div class=\"scenario-text\"><p>Client toolkit.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "ipconfig /all"
      },
      {
        "id": "i2",
        "text": "ping"
      },
      {
        "id": "i3",
        "text": "nslookup"
      },
      {
        "id": "i4",
        "text": "tracert"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Display IP configuration"
      },
      {
        "id": "z2",
        "label": "Test reachability"
      },
      {
        "id": "z3",
        "label": "Query DNS"
      },
      {
        "id": "z4",
        "label": "Trace path"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "ipconfig, ping, nslookup, tracert."
  },
  {
    "id": 141,
    "qid": "CCNA-MOD1-141",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Order steps to recover a port-security err-disabled port.",
    "scenario": "<div class=\"scenario-text\"><p>Port is err-disabled after violation.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Identify violation cause"
      },
      {
        "id": "c2",
        "text": "Correct MAC/cable issue"
      },
      {
        "id": "c3",
        "text": "shutdown then no shutdown"
      },
      {
        "id": "c4",
        "text": "Verify client connectivity"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Find cause, fix, bounce port, verify."
  },
  {
    "id": 142,
    "qid": "CCNA-MOD1-142",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match connectivity test result to conclusion.",
    "scenario": "<div class=\"scenario-text\"><p>Interpret tests.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Ping gateway fails"
      },
      {
        "id": "i2",
        "text": "Ping gateway OK, remote fails"
      },
      {
        "id": "i3",
        "text": "Ping IP OK, name fails"
      },
      {
        "id": "i4",
        "text": "All pings OK"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Local L2/L3 or host IP issue"
      },
      {
        "id": "z2",
        "label": "Routing/ACL beyond gateway"
      },
      {
        "id": "z3",
        "label": "DNS issue"
      },
      {
        "id": "z4",
        "label": "Basic IP path healthy"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Classic interpretation of ping outcomes."
  },
  {
    "id": 143,
    "qid": "CCNA-MOD1-143",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match edge security feature to client symptom when triggered.",
    "scenario": "<div class=\"scenario-text\"><p>Security on access ports.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "BPDU Guard"
      },
      {
        "id": "i2",
        "text": "Port security"
      },
      {
        "id": "i3",
        "text": "DHCP snooping"
      },
      {
        "id": "i4",
        "text": "DAI"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Port err-disable on BPDU"
      },
      {
        "id": "z2",
        "label": "MAC limit / violation action"
      },
      {
        "id": "z3",
        "label": "Rogue DHCP blocked"
      },
      {
        "id": "z4",
        "label": "Invalid ARP dropped"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "BPDU Guard, port security, snooping, DAI effects."
  },
  {
    "id": 144,
    "qid": "CCNA-MOD1-144",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Order documentation fields for a client incident.",
    "scenario": "<div class=\"scenario-text\"><p>Ticket quality.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "User and location"
      },
      {
        "id": "c2",
        "text": "Symptoms and scope"
      },
      {
        "id": "c3",
        "text": "IP/MAC/port/VLAN"
      },
      {
        "id": "c4",
        "text": "Actions taken and result"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Who/where → symptoms → technical IDs → actions."
  },
  {
    "id": 145,
    "qid": "CCNA-MOD1-145",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match PC setting to network effect.",
    "scenario": "<div class=\"scenario-text\"><p>Host configuration errors.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Wrong static IP"
      },
      {
        "id": "i2",
        "text": "Wrong mask"
      },
      {
        "id": "i3",
        "text": "Wrong gateway"
      },
      {
        "id": "i4",
        "text": "Wrong DNS"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "May not be in correct subnet"
      },
      {
        "id": "z2",
        "label": "Incorrect local network boundary"
      },
      {
        "id": "z3",
        "label": "No path off subnet"
      },
      {
        "id": "z4",
        "label": "Names fail"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Static IP, mask, gateway, DNS effects."
  },
  {
    "id": 146,
    "qid": "CCNA-MOD1-146",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match escalation target to issue type.",
    "scenario": "<div class=\"scenario-text\"><p>Who handles what.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Cable cut in wall"
      },
      {
        "id": "i2",
        "text": "Wrong VLAN on switch"
      },
      {
        "id": "i3",
        "text": "Missing core route"
      },
      {
        "id": "i4",
        "text": "DNS zone error"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Cabling / facilities"
      },
      {
        "id": "z2",
        "label": "LAN switching team"
      },
      {
        "id": "z3",
        "label": "Routing team"
      },
      {
        "id": "z4",
        "label": "DNS / AD team"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Route tickets to the right team."
  },
  {
    "id": 147,
    "qid": "CCNA-MOD1-147",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Order checks when VoIP phone and PC share a port (data+voice).",
    "scenario": "<div class=\"scenario-text\"><p>Phone up, PC down or vice versa.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Verify voice and data VLANs"
      },
      {
        "id": "c2",
        "text": "Check switchport voice vlan"
      },
      {
        "id": "c3",
        "text": "Confirm PC access VLAN"
      },
      {
        "id": "c4",
        "text": "Test each device independently"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Voice/data VLAN design → voice config → access VLAN → isolate devices."
  },
  {
    "id": 148,
    "qid": "CCNA-MOD1-148",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match layer-2 client isolation cause to remediation.",
    "scenario": "<div class=\"scenario-text\"><p>Fixes at the edge.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Err-disabled port"
      },
      {
        "id": "i2",
        "text": "Wrong VLAN"
      },
      {
        "id": "i3",
        "text": "Bad cable"
      },
      {
        "id": "i4",
        "text": "Port in blocking STP"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Correct cause + bounce port"
      },
      {
        "id": "z2",
        "label": "Set correct access VLAN"
      },
      {
        "id": "z3",
        "label": "Replace cable"
      },
      {
        "id": "z4",
        "label": "Fix topology / PortFast edge"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Match cause to remediation."
  },
  {
    "id": 149,
    "qid": "CCNA-MOD1-149",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the access switch port connected to the isolated user.",
    "scenario": "<div class=\"scenario-text\"><p>Only PC-4 has no connectivity; others on SW1 are fine.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "Gi0/1\nPC1 OK",
        "x": 20,
        "y": 40
      },
      {
        "id": "p2",
        "label": "Gi0/4\nPC4",
        "x": 50,
        "y": 40
      },
      {
        "id": "p3",
        "label": "Gi0/24\nUplink",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "p2"
    ],
    "explanation": "The port facing the isolated PC is the focus."
  },
  {
    "id": 150,
    "qid": "CCNA-MOD1-150",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the VLAN that the client should use for data.",
    "scenario": "<div class=\"scenario-text\"><p>Voice VLAN 20 and data VLAN 10 are deployed; PC needs data.</p></div>",
    "nodes": [
      {
        "id": "v1",
        "label": "VLAN 10\nData",
        "x": 30,
        "y": 40
      },
      {
        "id": "v2",
        "label": "VLAN 20\nVoice",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "v1"
    ],
    "explanation": "PCs use the data VLAN."
  },
  {
    "id": 151,
    "qid": "CCNA-MOD1-151",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the device where DNS should be verified for name failures.",
    "scenario": "<div class=\"scenario-text\"><p>Ping by IP works; names fail for one user.</p></div>",
    "nodes": [
      {
        "id": "d1",
        "label": "Client PC",
        "x": 25,
        "y": 40
      },
      {
        "id": "d2",
        "label": "Core SW",
        "x": 55,
        "y": 40
      },
      {
        "id": "d3",
        "label": "Fiber IX",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "d1"
    ],
    "explanation": "Start with the client DNS settings when only names fail."
  },
  {
    "id": 152,
    "qid": "CCNA-MOD1-152",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the gateway SVI the client must use.",
    "scenario": "<div class=\"scenario-text\"><p>Client is in VLAN 30.</p></div>",
    "nodes": [
      {
        "id": "g1",
        "label": "Vlan10\n10.10.10.1",
        "x": 20,
        "y": 40
      },
      {
        "id": "g2",
        "label": "Vlan30\n10.30.30.1",
        "x": 50,
        "y": 40
      },
      {
        "id": "g3",
        "label": "Vlan50\n10.50.50.1",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "g2"
    ],
    "explanation": "VLAN 30 hosts use the VLAN 30 SVI as gateway."
  },
  {
    "id": 153,
    "qid": "CCNA-MOD1-153",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the cable to replace first for a single flapping desk.",
    "scenario": "<div class=\"scenario-text\"><p>Wall jack to PC patch is suspect; uplink is stable.</p></div>",
    "nodes": [
      {
        "id": "c1",
        "label": "PC patch",
        "x": 30,
        "y": 40
      },
      {
        "id": "c2",
        "label": "Uplink fiber",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "c1"
    ],
    "explanation": "Single-desk flaps → replace the user patch first."
  },
  {
    "id": 154,
    "qid": "CCNA-MOD1-154",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the port-security protected port that likely violated.",
    "scenario": "<div class=\"scenario-text\"><p>One port is err-disabled after a hub was inserted.</p></div>",
    "nodes": [
      {
        "id": "e1",
        "label": "Gi0/5\nerr-disabled",
        "x": 30,
        "y": 40
      },
      {
        "id": "e2",
        "label": "Gi0/6\nconnected",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "e1"
    ],
    "explanation": "Err-disabled is the port-security violation state to investigate."
  },
  {
    "id": 155,
    "qid": "CCNA-MOD1-155",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that assign a client access port to VLAN 15.",
    "scenario": "<div class=\"scenario-text\"><p>Access port configuration.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "switchport mode access"
      },
      {
        "id": "l2",
        "label": "switchport access vlan 15"
      },
      {
        "id": "l3",
        "label": "switchport mode trunk"
      },
      {
        "id": "l4",
        "label": "ip address 10.1.1.1 255.255.255.0"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Access mode and access VLAN place the client in VLAN 15."
  },
  {
    "id": 156,
    "qid": "CCNA-MOD1-156",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that enables PortFast on an edge port.",
    "scenario": "<div class=\"scenario-text\"><p>Reduce client STP delay.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "spanning-tree portfast"
      },
      {
        "id": "l2",
        "label": "spanning-tree mode rapid-pvst"
      },
      {
        "id": "l3",
        "label": "spanning-tree vlan 1 root primary"
      },
      {
        "id": "l4",
        "label": "no cdp enable"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "spanning-tree portfast enables edge behavior."
  },
  {
    "id": 157,
    "qid": "CCNA-MOD1-157",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that configure basic port security.",
    "scenario": "<div class=\"scenario-text\"><p>Limit to one MAC and violate shutdown.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "switchport port-security"
      },
      {
        "id": "l2",
        "label": "switchport port-security maximum 1"
      },
      {
        "id": "l3",
        "label": "ip dhcp snooping"
      },
      {
        "id": "l4",
        "label": "mls qos"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Enable port-security and set maximum MAC count."
  },
  {
    "id": 158,
    "qid": "CCNA-MOD1-158",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that defines the voice VLAN on an access port.",
    "scenario": "<div class=\"scenario-text\"><p>IP phone + PC on same switch port.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "switchport voice vlan 20"
      },
      {
        "id": "l2",
        "label": "switchport access vlan 10"
      },
      {
        "id": "l3",
        "label": "spanning-tree portfast"
      },
      {
        "id": "l4",
        "label": "power inline auto"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "switchport voice vlan sets the voice VLAN."
  },
  {
    "id": 159,
    "qid": "CCNA-MOD1-159",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines required to bring up an access interface that was shut.",
    "scenario": "<div class=\"scenario-text\"><p>Port was administratively down.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "no shutdown"
      },
      {
        "id": "l2",
        "label": "switchport mode access"
      },
      {
        "id": "l3",
        "label": "shutdown"
      },
      {
        "id": "l4",
        "label": "description was-shut"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "no shutdown enables the port; access mode is typical for clients."
  },
  {
    "id": 160,
    "qid": "CCNA-MOD1-160",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that would err-disable recovery related configuration (global).",
    "scenario": "<div class=\"scenario-text\"><p>Automatically recover from some err-disable causes.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "errdisable recovery cause psecure-violation"
      },
      {
        "id": "l2",
        "label": "switchport port-security"
      },
      {
        "id": "l3",
        "label": "spanning-tree portfast"
      },
      {
        "id": "l4",
        "label": "ip routing"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "errdisable recovery cause enables automatic recovery for listed causes."
  },
  {
    "id": 161,
    "qid": "CCNA-MOD1-161",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "What is the correct order of the DHCPv4 DORA process?",
    "scenario": "<div class=\"scenario-text\"><p>Client obtains an address from DHCP.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Request, Discover, Ack, Offer"
      },
      {
        "id": "b",
        "text": "Discover, Offer, Request, Acknowledge"
      },
      {
        "id": "c",
        "text": "Offer, Discover, Ack, Request"
      },
      {
        "id": "d",
        "text": "Ack, Request, Offer, Discover"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "DORA = Discover, Offer, Request, Acknowledge."
  },
  {
    "id": 162,
    "qid": "CCNA-MOD1-162",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "Which command on a Cisco router relays DHCP to a remote server?",
    "scenario": "<div class=\"scenario-text\"><p>Clients are on a different subnet than the DHCP server.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "ip helper-address"
      },
      {
        "id": "b",
        "text": "ip dhcp pool"
      },
      {
        "id": "c",
        "text": "ip route 0.0.0.0"
      },
      {
        "id": "d",
        "text": "ip name-server"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "ip helper-address forwards DHCP broadcasts to a unicast server."
  },
  {
    "id": 163,
    "qid": "CCNA-MOD1-163",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "What address range indicates APIPA after DHCP failure on Windows?",
    "scenario": "<div class=\"scenario-text\"><p>PC shows limited connectivity.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "10.0.0.0/8"
      },
      {
        "id": "b",
        "text": "169.254.0.0/16"
      },
      {
        "id": "c",
        "text": "192.168.0.0/16"
      },
      {
        "id": "d",
        "text": "127.0.0.0/8"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "169.254.0.0/16 is Automatic Private IP Addressing."
  },
  {
    "id": 164,
    "qid": "CCNA-MOD1-164",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "single",
    "prompt": "Why must a router’s own interface address be excluded from a DHCP pool?",
    "scenario": "<div class=\"scenario-text\"><p>Router is DHCP server for 192.168.10.0/24 with Gi0/0 = 192.168.10.1.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "To avoid assigning the gateway address to a client"
      },
      {
        "id": "b",
        "text": "Because DHCP cannot use /24"
      },
      {
        "id": "c",
        "text": "To disable NAT"
      },
      {
        "id": "d",
        "text": "To enable OSPF"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Excluding the gateway prevents address conflicts with the router interface."
  },
  {
    "id": 165,
    "qid": "CCNA-MOD1-165",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE steps of successful DHCPv4 operation (DORA).",
    "scenario": "<div class=\"scenario-text\"><p>Verify the exchange on a SPAN capture.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Discover from client"
      },
      {
        "id": "b",
        "text": "Offer from server"
      },
      {
        "id": "c",
        "text": "Request from client"
      },
      {
        "id": "d",
        "text": "OSPF LSA flood"
      },
      {
        "id": "e",
        "text": "STP reconvergence only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Discover, Offer, Request (then Ack) form DORA."
  },
  {
    "id": 166,
    "qid": "CCNA-MOD1-166",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO reasons a client receives no DHCP Offer.",
    "scenario": "<div class=\"scenario-text\"><p>Discover is seen; no Offer.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "No DHCP server or relay on the segment"
      },
      {
        "id": "b",
        "text": "ACL blocking UDP 67/68"
      },
      {
        "id": "c",
        "text": "Correct static IP already"
      },
      {
        "id": "d",
        "text": "Perfect fiber light levels only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Missing server/relay or blocked DHCP ports prevent Offers."
  },
  {
    "id": 167,
    "qid": "CCNA-MOD1-167",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE valid DHCP pool configuration elements on IOS.",
    "scenario": "<div class=\"scenario-text\"><p>Build a LAN pool.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "network statement"
      },
      {
        "id": "b",
        "text": "default-router"
      },
      {
        "id": "c",
        "text": "dns-server"
      },
      {
        "id": "d",
        "text": "router ospf 1"
      },
      {
        "id": "e",
        "text": "switchport mode access"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "network, default-router, and dns-server are core pool options."
  },
  {
    "id": 168,
    "qid": "CCNA-MOD1-168",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO effects of an exhausted DHCP pool.",
    "scenario": "<div class=\"scenario-text\"><p>Many clients show APIPA.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "New clients cannot obtain leases"
      },
      {
        "id": "b",
        "text": "Need larger scope or shorter lease / free addresses"
      },
      {
        "id": "c",
        "text": "OSPF metrics change automatically"
      },
      {
        "id": "d",
        "text": "VTP mode becomes transparent"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Exhaustion blocks new leases until addresses are freed or scope expanded."
  },
  {
    "id": 169,
    "qid": "CCNA-MOD1-169",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE symptoms of a rogue DHCP server.",
    "scenario": "<div class=\"scenario-text\"><p>Clients get unexpected gateways.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Wrong default gateway on clients"
      },
      {
        "id": "b",
        "text": "Unexpected DNS servers"
      },
      {
        "id": "c",
        "text": "Asymmetric or broken routing for users"
      },
      {
        "id": "d",
        "text": "Correct authorized server only on all clients"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Rogue DHCP hands out wrong gateway/DNS and breaks paths."
  },
  {
    "id": 170,
    "qid": "CCNA-MOD1-170",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO uses of ip helper-address.",
    "scenario": "<div class=\"scenario-text\"><p>Centralize DHCP servers.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Forward DHCP broadcasts to remote servers"
      },
      {
        "id": "b",
        "text": "Forward other selected UDP services when configured"
      },
      {
        "id": "c",
        "text": "Replace all static routes"
      },
      {
        "id": "d",
        "text": "Disable spanning tree"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Helper addresses relay DHCP and can relay other UDP broadcasts."
  },
  {
    "id": 171,
    "qid": "CCNA-MOD1-171",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE show/debug tools for DHCP on Cisco IOS.",
    "scenario": "<div class=\"scenario-text\"><p>Diagnose pool and bindings.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "show ip dhcp binding"
      },
      {
        "id": "b",
        "text": "show ip dhcp pool"
      },
      {
        "id": "c",
        "text": "debug ip dhcp server packets"
      },
      {
        "id": "d",
        "text": "show mac address-table only"
      },
      {
        "id": "e",
        "text": "show vlan brief only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Bindings, pool stats, and DHCP debug are primary tools."
  },
  {
    "id": 172,
    "qid": "CCNA-MOD1-172",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO causes of DHCP clients on wrong subnet.",
    "scenario": "<div class=\"scenario-text\"><p>Addresses do not match the access VLAN.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Relay points to wrong server/scope"
      },
      {
        "id": "b",
        "text": "Client in wrong VLAN receiving another pool"
      },
      {
        "id": "c",
        "text": "Correct helper and VLAN always"
      },
      {
        "id": "d",
        "text": "Copper length exactly 100 m"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Wrong relay/scope or wrong VLAN yields wrong subnet leases."
  },
  {
    "id": 173,
    "qid": "CCNA-MOD1-173",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE best practices for DHCP security on access ports.",
    "scenario": "<div class=\"scenario-text\"><p>Limit rogue servers.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Enable DHCP snooping"
      },
      {
        "id": "b",
        "text": "Trust only uplink ports"
      },
      {
        "id": "c",
        "text": "Rate-limit DHCP on untrusted ports"
      },
      {
        "id": "d",
        "text": "Disable all client DHCP forever"
      },
      {
        "id": "e",
        "text": "Turn off all logging"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Snooping, trust uplinks, and rate limits harden DHCP."
  },
  {
    "id": 174,
    "qid": "CCNA-MOD1-174",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO lease-related issues.",
    "scenario": "<div class=\"scenario-text\"><p>Clients lose connectivity periodically.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Very short lease with unreliable renew"
      },
      {
        "id": "b",
        "text": "Server unavailable at renew time"
      },
      {
        "id": "c",
        "text": "OSPF hello multiplier"
      },
      {
        "id": "d",
        "text": "CDP timer only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Lease length and server availability at renew affect stability."
  },
  {
    "id": 175,
    "qid": "CCNA-MOD1-175",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select THREE fields commonly delivered by DHCP to clients.",
    "scenario": "<div class=\"scenario-text\"><p>Beyond just the IP address.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Subnet mask"
      },
      {
        "id": "b",
        "text": "Default gateway"
      },
      {
        "id": "c",
        "text": "DNS servers"
      },
      {
        "id": "d",
        "text": "OSPF area ID"
      },
      {
        "id": "e",
        "text": "VTP password"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Mask, gateway, and DNS are standard DHCP options."
  },
  {
    "id": 176,
    "qid": "CCNA-MOD1-176",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "multiselect",
    "prompt": "Select TWO reasons to use excluded-address in an IOS pool.",
    "scenario": "<div class=\"scenario-text\"><p>Protect static assignments.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Reserve gateway and static servers"
      },
      {
        "id": "b",
        "text": "Prevent DHCP from offering those addresses"
      },
      {
        "id": "c",
        "text": "Increase OSPF cost"
      },
      {
        "id": "d",
        "text": "Force all clients to APIPA"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Exclusions protect statically assigned addresses including the gateway."
  },
  {
    "id": 177,
    "qid": "CCNA-MOD1-177",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Order the DHCPv4 DORA messages.",
    "scenario": "<div class=\"scenario-text\"><p>Client boots with DHCP.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Discover"
      },
      {
        "id": "c2",
        "text": "Offer"
      },
      {
        "id": "c3",
        "text": "Request"
      },
      {
        "id": "c4",
        "text": "Acknowledge"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Discover → Offer → Request → Acknowledge."
  },
  {
    "id": 178,
    "qid": "CCNA-MOD1-178",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match DHCP role to device.",
    "scenario": "<div class=\"scenario-text\"><p>Centralized DHCP design.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "DHCP client"
      },
      {
        "id": "i2",
        "text": "DHCP server"
      },
      {
        "id": "i3",
        "text": "Relay agent"
      },
      {
        "id": "i4",
        "text": "Snooping switch"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Requests address"
      },
      {
        "id": "z2",
        "label": "Offers leases from pool"
      },
      {
        "id": "z3",
        "label": "Forwards broadcasts to server"
      },
      {
        "id": "z4",
        "label": "Filters untrusted DHCP messages"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Client, server, relay, snooping roles."
  },
  {
    "id": 179,
    "qid": "CCNA-MOD1-179",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match IOS DHCP command to purpose.",
    "scenario": "<div class=\"scenario-text\"><p>Server configuration.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "ip dhcp pool LAN"
      },
      {
        "id": "i2",
        "text": "network 10.1.1.0 255.255.255.0"
      },
      {
        "id": "i3",
        "text": "default-router 10.1.1.1"
      },
      {
        "id": "i4",
        "text": "ip dhcp excluded-address 10.1.1.1"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Create named pool"
      },
      {
        "id": "z2",
        "label": "Define pool subnet"
      },
      {
        "id": "z3",
        "label": "Set gateway option"
      },
      {
        "id": "z4",
        "label": "Prevent leasing an address"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Pool, network, default-router, excluded-address."
  },
  {
    "id": 180,
    "qid": "CCNA-MOD1-180",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Order steps to implement DHCP relay on an SVI.",
    "scenario": "<div class=\"scenario-text\"><p>Clients remote from server.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Ensure SVI is up with IP"
      },
      {
        "id": "c2",
        "text": "Configure ip helper-address"
      },
      {
        "id": "c3",
        "text": "Verify server reachability"
      },
      {
        "id": "c4",
        "text": "Test client lease"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "SVI up → helper → reachability → client test."
  },
  {
    "id": 181,
    "qid": "CCNA-MOD1-181",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match problem to DHCP-focused check.",
    "scenario": "<div class=\"scenario-text\"><p>Symptom-driven diagnosis.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "APIPA on clients"
      },
      {
        "id": "i2",
        "text": "Wrong gateway via DHCP"
      },
      {
        "id": "i3",
        "text": "Some clients work, new ones fail"
      },
      {
        "id": "i4",
        "text": "Only remote subnet fails"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Server/relay/scope down"
      },
      {
        "id": "z2",
        "label": "Rogue or wrong pool options"
      },
      {
        "id": "z3",
        "label": "Pool exhaustion"
      },
      {
        "id": "z4",
        "label": "Missing helper on SVI"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "APIPA, wrong options, exhaustion, missing helper."
  },
  {
    "id": 182,
    "qid": "CCNA-MOD1-182",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match UDP port to DHCP message direction (classic).",
    "scenario": "<div class=\"scenario-text\"><p>Firewall rules for DHCP.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "UDP 67"
      },
      {
        "id": "i2",
        "text": "UDP 68"
      },
      {
        "id": "i3",
        "text": "TCP 22"
      },
      {
        "id": "i4",
        "text": "UDP 53"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "DHCP server"
      },
      {
        "id": "z2",
        "label": "DHCP client"
      },
      {
        "id": "z3",
        "label": "SSH"
      },
      {
        "id": "z4",
        "label": "DNS"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "67 server, 68 client, 22 SSH, 53 DNS."
  },
  {
    "id": 183,
    "qid": "CCNA-MOD1-183",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Order recovery when pool is exhausted.",
    "scenario": "<div class=\"scenario-text\"><p>No free leases.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "show ip dhcp binding / pool"
      },
      {
        "id": "c2",
        "text": "Clear stale bindings if safe"
      },
      {
        "id": "c3",
        "text": "Expand network or reduce lease"
      },
      {
        "id": "c4",
        "text": "Verify new clients obtain leases"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Inspect → clear if appropriate → expand → verify."
  },
  {
    "id": 184,
    "qid": "CCNA-MOD1-184",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match snooping concept to meaning.",
    "scenario": "<div class=\"scenario-text\"><p>DHCP security.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Trusted port"
      },
      {
        "id": "i2",
        "text": "Untrusted port"
      },
      {
        "id": "i3",
        "text": "Binding table"
      },
      {
        "id": "i4",
        "text": "Option 82"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "DHCP server path allowed"
      },
      {
        "id": "z2",
        "label": "Client edge filtered"
      },
      {
        "id": "z3",
        "label": "IP-MAC-port lease tracking"
      },
      {
        "id": "z4",
        "label": "Relay agent information option"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Trust, untrusted, bindings, option 82."
  },
  {
    "id": 185,
    "qid": "CCNA-MOD1-185",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match message to sender in DORA.",
    "scenario": "<div class=\"scenario-text\"><p>Who sends what.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Discover"
      },
      {
        "id": "i2",
        "text": "Offer"
      },
      {
        "id": "i3",
        "text": "Request"
      },
      {
        "id": "i4",
        "text": "Ack"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Client broadcast"
      },
      {
        "id": "z2",
        "label": "Server offer"
      },
      {
        "id": "z3",
        "label": "Client selects offer"
      },
      {
        "id": "z4",
        "label": "Server confirms lease"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Client Discover/Request; server Offer/Ack."
  },
  {
    "id": 186,
    "qid": "CCNA-MOD1-186",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Order IOS steps to create a basic DHCP pool.",
    "scenario": "<div class=\"scenario-text\"><p>New LAN segment.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "ip dhcp excluded-address ..."
      },
      {
        "id": "c2",
        "text": "ip dhcp pool NAME"
      },
      {
        "id": "c3",
        "text": "network ..."
      },
      {
        "id": "c4",
        "text": "default-router ..."
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Exclude first, then pool, network, default-router."
  },
  {
    "id": 187,
    "qid": "CCNA-MOD1-187",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match helper-address placement to rule.",
    "scenario": "<div class=\"scenario-text\"><p>Where to configure relay.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "SVI of client VLAN"
      },
      {
        "id": "i2",
        "text": "Physical interface of client subnet"
      },
      {
        "id": "i3",
        "text": "Loopback only always"
      },
      {
        "id": "i4",
        "text": "Console line"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Common for L3 switches"
      },
      {
        "id": "z2",
        "label": "Common for router interfaces"
      },
      {
        "id": "z3",
        "label": "Not typical for user DHCP"
      },
      {
        "id": "z4",
        "label": "Invalid for DHCP relay"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Helper on the client-facing L3 interface/SVI."
  },
  {
    "id": 188,
    "qid": "CCNA-MOD1-188",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "dragdrop",
    "prompt": "Match lease state concept to description.",
    "scenario": "<div class=\"scenario-text\"><p>Bindings understanding.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Active binding"
      },
      {
        "id": "i2",
        "text": "Expired"
      },
      {
        "id": "i3",
        "text": "Excluded"
      },
      {
        "id": "i4",
        "text": "Conflict"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Currently leased to a client"
      },
      {
        "id": "z2",
        "label": "Lease time ended"
      },
      {
        "id": "z3",
        "label": "Not available from pool"
      },
      {
        "id": "z4",
        "label": "Address detected in use"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Active, expired, excluded, conflict."
  },
  {
    "id": 189,
    "qid": "CCNA-MOD1-189",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the router interface that needs ip helper-address.",
    "scenario": "<div class=\"scenario-text\"><p>Clients on VLAN 10; DHCP server on a remote segment.</p></div>",
    "nodes": [
      {
        "id": "i1",
        "label": "Vlan10\nSVI",
        "x": 30,
        "y": 40
      },
      {
        "id": "i2",
        "label": "Lo0",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "i1"
    ],
    "explanation": "Helper is configured on the client-facing SVI."
  },
  {
    "id": 190,
    "qid": "CCNA-MOD1-190",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the server that is the authorized DHCP server.",
    "scenario": "<div class=\"scenario-text\"><p>Two hosts offer DHCP; only one is approved.</p></div>",
    "nodes": [
      {
        "id": "s1",
        "label": "DHCP-OK\n10.1.1.5",
        "x": 30,
        "y": 40
      },
      {
        "id": "s2",
        "label": "Rogue\n10.1.1.99",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "s1"
    ],
    "explanation": "The authorized server is the legitimate DHCP source."
  },
  {
    "id": 191,
    "qid": "CCNA-MOD1-191",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the pool that is exhausted based on labels.",
    "scenario": "<div class=\"scenario-text\"><p>Pool A has 0 free; Pool B has free addresses.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "Pool-A\n0 free",
        "x": 30,
        "y": 40
      },
      {
        "id": "p2",
        "label": "Pool-B\n50 free",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "p1"
    ],
    "explanation": "0 free indicates exhaustion."
  },
  {
    "id": 192,
    "qid": "CCNA-MOD1-192",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the client that received an APIPA address.",
    "scenario": "<div class=\"scenario-text\"><p>Address labels on three PCs.</p></div>",
    "nodes": [
      {
        "id": "c1",
        "label": "PC1\n10.1.1.50",
        "x": 20,
        "y": 40
      },
      {
        "id": "c2",
        "label": "PC2\n169.254.8.8",
        "x": 50,
        "y": 40
      },
      {
        "id": "c3",
        "label": "PC3\n10.1.1.51",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "c2"
    ],
    "explanation": "169.254.x.x is APIPA."
  },
  {
    "id": 193,
    "qid": "CCNA-MOD1-193",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the switch port that should be DHCP snooping trusted.",
    "scenario": "<div class=\"scenario-text\"><p>Uplink toward the real DHCP server path.</p></div>",
    "nodes": [
      {
        "id": "t1",
        "label": "Gi0/1\nAccess PC",
        "x": 25,
        "y": 40
      },
      {
        "id": "t2",
        "label": "Gi0/24\nUplink",
        "x": 75,
        "y": 40
      }
    ],
    "correct": [
      "t2"
    ],
    "explanation": "Uplinks toward servers are trusted; access ports are untrusted."
  },
  {
    "id": 194,
    "qid": "CCNA-MOD1-194",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "prompt": "Click the interface address that must be excluded from the pool.",
    "scenario": "<div class=\"scenario-text\"><p>Router serves 192.168.10.0/24; gateway is on Gi0/0.</p></div>",
    "nodes": [
      {
        "id": "g1",
        "label": "Gi0/0\n192.168.10.1",
        "x": 30,
        "y": 40
      },
      {
        "id": "g2",
        "label": "Gi0/1\n10.0.0.1",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "g1"
    ],
    "explanation": "Exclude the gateway on the same subnet as the pool."
  },
  {
    "id": 195,
    "qid": "CCNA-MOD1-195",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that define the DHCP pool subnet and gateway.",
    "scenario": "<div class=\"scenario-text\"><p>IOS DHCP pool fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "network 10.1.1.0 255.255.255.0"
      },
      {
        "id": "l2",
        "label": "default-router 10.1.1.1"
      },
      {
        "id": "l3",
        "label": "ip route 0.0.0.0 0.0.0.0 10.1.1.1"
      },
      {
        "id": "l4",
        "label": "router ospf 1"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "network and default-router are pool definitions."
  },
  {
    "id": 196,
    "qid": "CCNA-MOD1-196",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that excludes the gateway from DHCP.",
    "scenario": "<div class=\"scenario-text\"><p>Prevent leasing 10.1.1.1.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip dhcp excluded-address 10.1.1.1"
      },
      {
        "id": "l2",
        "label": "ip dhcp pool LAN"
      },
      {
        "id": "l3",
        "label": "dns-server 8.8.8.8"
      },
      {
        "id": "l4",
        "label": "lease 0 8"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "ip dhcp excluded-address prevents offering that address."
  },
  {
    "id": 197,
    "qid": "CCNA-MOD1-197",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that enable DHCP relay on an SVI.",
    "scenario": "<div class=\"scenario-text\"><p>VLAN 20 clients need remote DHCP.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "interface Vlan20"
      },
      {
        "id": "l2",
        "label": "ip helper-address 10.9.9.9"
      },
      {
        "id": "l3",
        "label": "ip dhcp pool VLAN20"
      },
      {
        "id": "l4",
        "label": "shutdown"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Helper is applied under the client-facing interface/SVI."
  },
  {
    "id": 198,
    "qid": "CCNA-MOD1-198",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that enables DHCP snooping globally.",
    "scenario": "<div class=\"scenario-text\"><p>Begin DHCP security configuration.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip dhcp snooping"
      },
      {
        "id": "l2",
        "label": "ip dhcp snooping vlan 10"
      },
      {
        "id": "l3",
        "label": "ip dhcp pool X"
      },
      {
        "id": "l4",
        "label": "ip helper-address 1.1.1.1"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "ip dhcp snooping enables the feature globally."
  },
  {
    "id": 199,
    "qid": "CCNA-MOD1-199",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that trust an uplink for DHCP snooping.",
    "scenario": "<div class=\"scenario-text\"><p>Uplink toward DHCP server.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "interface GigabitEthernet0/24"
      },
      {
        "id": "l2",
        "label": "ip dhcp snooping trust"
      },
      {
        "id": "l3",
        "label": "switchport mode access"
      },
      {
        "id": "l4",
        "label": "spanning-tree portfast"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Under the uplink interface, ip dhcp snooping trust marks it trusted."
  },
  {
    "id": 200,
    "qid": "CCNA-MOD1-200",
    "moduleId": "mod1",
    "module": "Network Infrastructure and Connectivity",
    "domain": "Network Infrastructure and Connectivity",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that sets DNS servers in a DHCP pool.",
    "scenario": "<div class=\"scenario-text\"><p>Clients need name resolution options.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "dns-server 10.1.1.10 10.1.1.11"
      },
      {
        "id": "l2",
        "label": "default-router 10.1.1.1"
      },
      {
        "id": "l3",
        "label": "network 10.1.1.0 /24"
      },
      {
        "id": "l4",
        "label": "domain-name example.com"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "dns-server configures DNS options in the pool."
  },
  {
    "id": 201,
    "qid": "CCNA-MOD2-001",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "Which native VLAN behavior on an 802.1Q trunk can lead to security vulnerabilities or traffic leakage?",
    "scenario": "<div class=\"scenario-text\"><p>Two switches are connected via an 802.1Q trunk where SW1 uses native VLAN 1 and SW2 uses native VLAN 10.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Control plane traffic is dropped automatically"
      },
      {
        "id": "b",
        "text": "Untagged frames are placed into different VLANs on each side, creating a cross-VLAN leak"
      },
      {
        "id": "c",
        "text": "Trunk protocol automatically changes SW2 to native VLAN 1"
      },
      {
        "id": "d",
        "text": "Spanning Tree immediately disables both switch ports"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "A native VLAN mismatch causes untagged frames to be interpreted in different VLANs on each switch, resulting in inter-VLAN leakage."
  },
  {
    "id": 202,
    "qid": "CCNA-MOD2-002",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "What is the IEEE standard for VLAN tagging on trunks?",
    "scenario": "<div class=\"scenario-text\"><p>Confirm the encapsulation used on inter-switch links.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "802.1D"
      },
      {
        "id": "b",
        "text": "802.1Q"
      },
      {
        "id": "c",
        "text": "802.3ad"
      },
      {
        "id": "d",
        "text": "802.11n"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "IEEE 802.1Q defines the 4-byte VLAN tag inserted into Ethernet frames."
  },
  {
    "id": 203,
    "qid": "CCNA-MOD2-003",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "Which command displays trunk status and native VLAN on a Cisco switch?",
    "scenario": "<div class=\"scenario-text\"><p>Verify trunk operation after configuration.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "show vlan brief"
      },
      {
        "id": "b",
        "text": "show interfaces trunk"
      },
      {
        "id": "c",
        "text": "show mac address-table"
      },
      {
        "id": "d",
        "text": "show ip interface brief"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "show interfaces trunk lists mode, encapsulation, status, native VLAN, and allowed VLANs."
  },
  {
    "id": 204,
    "qid": "CCNA-MOD2-004",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "What is the default VLAN for unconfigured Cisco access ports?",
    "scenario": "<div class=\"scenario-text\"><p>A new port has no switchport access vlan statement.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "VLAN 0"
      },
      {
        "id": "b",
        "text": "VLAN 1"
      },
      {
        "id": "c",
        "text": "VLAN 100"
      },
      {
        "id": "d",
        "text": "VLAN 999"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Unconfigured access ports belong to VLAN 1 by default."
  },
  {
    "id": 205,
    "qid": "CCNA-MOD2-005",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE characteristics of 802.1Q trunking.",
    "scenario": "<div class=\"scenario-text\"><p>Design inter-switch connectivity for a campus.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Inserts a 4-byte tag into the Ethernet frame"
      },
      {
        "id": "b",
        "text": "Supports multiple VLANs over a single physical link"
      },
      {
        "id": "c",
        "text": "Requires ISL on both ends"
      },
      {
        "id": "d",
        "text": "Native VLAN frames are typically untagged"
      },
      {
        "id": "e",
        "text": "Only works between Cisco devices"
      }
    ],
    "correct": [
      "a",
      "b",
      "d"
    ],
    "selectCount": 3,
    "explanation": "802.1Q tags frames, carries multiple VLANs, and leaves native VLAN untagged. It is an IEEE standard."
  },
  {
    "id": 206,
    "qid": "CCNA-MOD2-006",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO true statements about the native VLAN.",
    "scenario": "<div class=\"scenario-text\"><p>Review trunk security practices.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Frames on the native VLAN are untagged on 802.1Q trunks"
      },
      {
        "id": "b",
        "text": "Native VLAN should match on both ends of a trunk"
      },
      {
        "id": "c",
        "text": "Native VLAN traffic is always encrypted"
      },
      {
        "id": "d",
        "text": "VLAN 1 cannot be changed as native"
      },
      {
        "id": "e",
        "text": "Native VLAN is only for voice"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Native VLAN frames are untagged; mismatched natives cause connectivity and security issues."
  },
  {
    "id": 207,
    "qid": "CCNA-MOD2-007",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE benefits of using VLANs.",
    "scenario": "<div class=\"scenario-text\"><p>Justify segmentation to management.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Broadcast domain segmentation"
      },
      {
        "id": "b",
        "text": "Improved security through isolation"
      },
      {
        "id": "c",
        "text": "Flexible logical grouping of users"
      },
      {
        "id": "d",
        "text": "Eliminates need for any routing"
      },
      {
        "id": "e",
        "text": "Automatically encrypts all traffic"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "VLANs segment broadcasts, isolate traffic, and group users logically. Routing is still needed between VLANs."
  },
  {
    "id": 208,
    "qid": "CCNA-MOD2-008",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO commands to place an interface in access mode for VLAN 20.",
    "scenario": "<div class=\"scenario-text\"><p>Configure a wall port for data VLAN 20.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "switchport mode access"
      },
      {
        "id": "b",
        "text": "switchport access vlan 20"
      },
      {
        "id": "c",
        "text": "switchport mode trunk"
      },
      {
        "id": "d",
        "text": "channel-group 1 mode active"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Access mode and access VLAN assign the port to VLAN 20 only."
  },
  {
    "id": 209,
    "qid": "CCNA-MOD2-009",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE causes of a trunk not forming.",
    "scenario": "<div class=\"scenario-text\"><p>Two switches fail to establish a trunk.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "DTP mode mismatch (e.g., access vs trunk)"
      },
      {
        "id": "b",
        "text": "Native VLAN mismatch warnings"
      },
      {
        "id": "c",
        "text": "Allowed VLAN lists with no common VLANs"
      },
      {
        "id": "d",
        "text": "Correct matching trunk config on both ends"
      },
      {
        "id": "e",
        "text": "Identical hostnames"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Mode, native VLAN, and allowed-VLAN issues prevent useful trunking."
  },
  {
    "id": 210,
    "qid": "CCNA-MOD2-010",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO purposes of the switchport nonegotiate command.",
    "scenario": "<div class=\"scenario-text\"><p>Harden an access port.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Disable DTP negotiation"
      },
      {
        "id": "b",
        "text": "Prevent dynamic trunk formation"
      },
      {
        "id": "c",
        "text": "Enable VTP pruning"
      },
      {
        "id": "d",
        "text": "Start OSPF on the port"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "nonegotiate stops DTP, reducing VLAN-hopping risk on access ports."
  },
  {
    "id": 211,
    "qid": "CCNA-MOD2-011",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE items shown by show interfaces trunk.",
    "scenario": "<div class=\"scenario-text\"><p>Collect trunk evidence.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Port mode (on/desirable/auto)"
      },
      {
        "id": "b",
        "text": "Encapsulation (802.1Q)"
      },
      {
        "id": "c",
        "text": "Native VLAN and allowed VLANs"
      },
      {
        "id": "d",
        "text": "OSPF neighbor state"
      },
      {
        "id": "e",
        "text": "DHCP pool utilization"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Trunk show command focuses on mode, encapsulation, native, and allowed VLANs."
  },
  {
    "id": 212,
    "qid": "CCNA-MOD2-012",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO risks of leaving native VLAN as VLAN 1 on trunks.",
    "scenario": "<div class=\"scenario-text\"><p>Security review of edge trunks.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "VLAN 1 often carries management/default traffic"
      },
      {
        "id": "b",
        "text": "Attackers may exploit untagged native frames"
      },
      {
        "id": "c",
        "text": "It forces LACP off"
      },
      {
        "id": "d",
        "text": "It disables PortFast globally"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "VLAN 1 as native is a common attack surface; use an unused native VLAN."
  },
  {
    "id": 213,
    "qid": "CCNA-MOD2-013",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE steps to create and assign VLAN 50 named SALES.",
    "scenario": "<div class=\"scenario-text\"><p>New department VLAN on an access switch.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "vlan 50"
      },
      {
        "id": "b",
        "text": "name SALES"
      },
      {
        "id": "c",
        "text": "switchport access vlan 50 on the port"
      },
      {
        "id": "d",
        "text": "router ospf 1"
      },
      {
        "id": "e",
        "text": "ip route 0.0.0.0 0.0.0.0"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Create VLAN, name it, assign on access ports."
  },
  {
    "id": 214,
    "qid": "CCNA-MOD2-014",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO differences between access and trunk ports.",
    "scenario": "<div class=\"scenario-text\"><p>Choose port mode for a server vs inter-switch link.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Access carries a single VLAN untagged (typically)"
      },
      {
        "id": "b",
        "text": "Trunk carries multiple VLANs with tagging"
      },
      {
        "id": "c",
        "text": "Access always requires LACP"
      },
      {
        "id": "d",
        "text": "Trunk cannot use 802.1Q"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Access = one VLAN; trunk = multiple tagged VLANs."
  },
  {
    "id": 215,
    "qid": "CCNA-MOD2-015",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE valid trunk encapsulation or mode related checks.",
    "scenario": "<div class=\"scenario-text\"><p>Troubleshoot a down trunk.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Both sides support 802.1Q"
      },
      {
        "id": "b",
        "text": "Operational mode is trunk"
      },
      {
        "id": "c",
        "text": "Speed/duplex compatible"
      },
      {
        "id": "d",
        "text": "BGP AS matches"
      },
      {
        "id": "e",
        "text": "DNS server reachable"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Encapsulation support, operational trunk mode, and link parameters matter."
  },
  {
    "id": 216,
    "qid": "CCNA-MOD2-016",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO effects of pruning a VLAN from a trunk allowed list.",
    "scenario": "<div class=\"scenario-text\"><p>Limit VLANs on a trunk.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "That VLAN's traffic is not forwarded on the trunk"
      },
      {
        "id": "b",
        "text": "Broadcasts for that VLAN do not cross the trunk"
      },
      {
        "id": "c",
        "text": "The VLAN is deleted from the switch database"
      },
      {
        "id": "d",
        "text": "STP is disabled campus-wide"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Disallowing a VLAN stops its frames on that trunk; the VLAN may still exist locally."
  },
  {
    "id": 217,
    "qid": "CCNA-MOD2-017",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match VLAN-related command to purpose.",
    "scenario": "<div class=\"scenario-text\"><p>IOS VLAN toolkit.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "vlan 30"
      },
      {
        "id": "i2",
        "text": "name VOICE"
      },
      {
        "id": "i3",
        "text": "switchport mode trunk"
      },
      {
        "id": "i4",
        "text": "switchport trunk native vlan 999"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Create VLAN 30"
      },
      {
        "id": "z2",
        "label": "Name the VLAN"
      },
      {
        "id": "z3",
        "label": "Enable trunking"
      },
      {
        "id": "z4",
        "label": "Set native VLAN"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Create, name, trunk mode, native VLAN commands."
  },
  {
    "id": 218,
    "qid": "CCNA-MOD2-018",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match trunk problem to symptom.",
    "scenario": "<div class=\"scenario-text\"><p>Interpret trunk faults.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Native VLAN mismatch"
      },
      {
        "id": "i2",
        "text": "No common allowed VLANs"
      },
      {
        "id": "i3",
        "text": "One side access mode"
      },
      {
        "id": "i4",
        "text": "Speed mismatch"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "CDP/STP warnings; possible leak"
      },
      {
        "id": "z2",
        "label": "No user VLANs pass"
      },
      {
        "id": "z3",
        "label": "Trunk does not form"
      },
      {
        "id": "z4",
        "label": "Link down or unreliable"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Map common trunk faults to observable symptoms."
  },
  {
    "id": 219,
    "qid": "CCNA-MOD2-019",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Order steps to configure a basic 802.1Q trunk.",
    "scenario": "<div class=\"scenario-text\"><p>Uplink between access and distribution.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Enter interface config"
      },
      {
        "id": "c2",
        "text": "switchport trunk encapsulation dot1q (if required)"
      },
      {
        "id": "c3",
        "text": "switchport mode trunk"
      },
      {
        "id": "c4",
        "text": "Verify with show interfaces trunk"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Interface → encapsulation if needed → mode trunk → verify."
  },
  {
    "id": 220,
    "qid": "CCNA-MOD2-020",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match DTP mode to behavior.",
    "scenario": "<div class=\"scenario-text\"><p>Dynamic trunking protocol options.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "trunk"
      },
      {
        "id": "i2",
        "text": "dynamic desirable"
      },
      {
        "id": "i3",
        "text": "dynamic auto"
      },
      {
        "id": "i4",
        "text": "access"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Permanent trunk"
      },
      {
        "id": "z2",
        "label": "Actively tries to form trunk"
      },
      {
        "id": "z3",
        "label": "Willing to trunk if neighbor initiates"
      },
      {
        "id": "z4",
        "label": "Permanent access; no trunk"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "trunk, desirable, auto, access behaviors."
  },
  {
    "id": 221,
    "qid": "CCNA-MOD2-021",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match VLAN type to typical use.",
    "scenario": "<div class=\"scenario-text\"><p>Campus VLAN design.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Data VLAN"
      },
      {
        "id": "i2",
        "text": "Voice VLAN"
      },
      {
        "id": "i3",
        "text": "Native VLAN"
      },
      {
        "id": "i4",
        "text": "Management VLAN"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "User workstations"
      },
      {
        "id": "z2",
        "label": "IP phones"
      },
      {
        "id": "z3",
        "label": "Untagged trunk frames"
      },
      {
        "id": "z4",
        "label": "Switch SVIs / admin access"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Data, voice, native, management roles."
  },
  {
    "id": 222,
    "qid": "CCNA-MOD2-022",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Order troubleshooting steps for inter-VLAN failure on a trunk.",
    "scenario": "<div class=\"scenario-text\"><p>VLAN 10 works locally but not across trunk.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Confirm VLAN exists on both switches"
      },
      {
        "id": "c2",
        "text": "Check allowed VLAN list on trunk"
      },
      {
        "id": "c3",
        "text": "Verify trunk is up"
      },
      {
        "id": "c4",
        "text": "Test end-to-end connectivity"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "VLAN present → allowed → trunk up → test."
  },
  {
    "id": 223,
    "qid": "CCNA-MOD2-023",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match show command output focus.",
    "scenario": "<div class=\"scenario-text\"><p>Choose the right show command.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "show vlan brief"
      },
      {
        "id": "i2",
        "text": "show interfaces trunk"
      },
      {
        "id": "i3",
        "text": "show interfaces switchport"
      },
      {
        "id": "i4",
        "text": "show vtp status"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "VLAN list and access ports"
      },
      {
        "id": "z2",
        "label": "Trunk operational data"
      },
      {
        "id": "z3",
        "label": "Per-port admin/oper mode"
      },
      {
        "id": "z4",
        "label": "VTP domain and mode"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Match command to information needed."
  },
  {
    "id": 224,
    "qid": "CCNA-MOD2-024",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match security control to VLAN/trunk risk mitigated.",
    "scenario": "<div class=\"scenario-text\"><p>Harden Layer 2 edges.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "switchport nonegotiate"
      },
      {
        "id": "i2",
        "text": "Unused native VLAN"
      },
      {
        "id": "i3",
        "text": "Allowed VLAN pruning"
      },
      {
        "id": "i4",
        "text": "Disable unused ports"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "DTP / VLAN hopping"
      },
      {
        "id": "z2",
        "label": "Native VLAN attacks"
      },
      {
        "id": "z3",
        "label": "Unnecessary VLAN propagation"
      },
      {
        "id": "z4",
        "label": "Unused edge attack surface"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Map controls to risks."
  },
  {
    "id": 225,
    "qid": "CCNA-MOD2-025",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Order steps to add VLAN 40 to an existing trunk allowed list.",
    "scenario": "<div class=\"scenario-text\"><p>Extend a trunk for a new department.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Create VLAN 40 if missing"
      },
      {
        "id": "c2",
        "text": "switchport trunk allowed vlan add 40"
      },
      {
        "id": "c3",
        "text": "Verify on both switches"
      },
      {
        "id": "c4",
        "text": "Test client in VLAN 40 across trunk"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Create → allow add → verify → test."
  },
  {
    "id": 226,
    "qid": "CCNA-MOD2-026",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match frame type on a trunk to VLAN handling.",
    "scenario": "<div class=\"scenario-text\"><p>802.1Q behavior.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Tagged frame VLAN 20"
      },
      {
        "id": "i2",
        "text": "Untagged frame"
      },
      {
        "id": "i3",
        "text": "Frame for disallowed VLAN"
      },
      {
        "id": "i4",
        "text": "BPDU on trunk"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Forwarded in VLAN 20"
      },
      {
        "id": "z2",
        "label": "Associated with native VLAN"
      },
      {
        "id": "z3",
        "label": "Dropped / not forwarded"
      },
      {
        "id": "z4",
        "label": "Used by STP per VLAN or common"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Tagged, untagged/native, disallowed, BPDU handling."
  },
  {
    "id": 227,
    "qid": "CCNA-MOD2-027",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match VTP mode to characteristic (overview).",
    "scenario": "<div class=\"scenario-text\"><p>VLAN distribution options.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Server"
      },
      {
        "id": "i2",
        "text": "Client"
      },
      {
        "id": "i3",
        "text": "Transparent"
      },
      {
        "id": "i4",
        "text": "Off"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Can create/modify VLANs; advertises"
      },
      {
        "id": "z2",
        "label": "Learns VLANs; cannot create locally"
      },
      {
        "id": "z3",
        "label": "Does not participate; passes advertisements"
      },
      {
        "id": "z4",
        "label": "VTP disabled"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Server, client, transparent, off."
  },
  {
    "id": 228,
    "qid": "CCNA-MOD2-028",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match inter-switch link requirement to setting.",
    "scenario": "<div class=\"scenario-text\"><p>Build a working trunk.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Same native VLAN"
      },
      {
        "id": "i2",
        "text": "Compatible trunk mode"
      },
      {
        "id": "i3",
        "text": "Matching speed/duplex"
      },
      {
        "id": "i4",
        "text": "Overlapping allowed VLANs"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Avoid untagged mismatch"
      },
      {
        "id": "z2",
        "label": "Operational trunk status"
      },
      {
        "id": "z3",
        "label": "Stable physical link"
      },
      {
        "id": "z4",
        "label": "User VLANs can pass"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Native, mode, link params, allowed list."
  },
  {
    "id": 229,
    "qid": "CCNA-MOD2-029",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the switch port that should be configured as a trunk.",
    "scenario": "<div class=\"scenario-text\"><p>SW1 connects to SW2 and to two access PCs.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "Gi0/1\nPC-A",
        "x": 20,
        "y": 40
      },
      {
        "id": "p2",
        "label": "Gi0/2\nto SW2",
        "x": 50,
        "y": 40
      },
      {
        "id": "p3",
        "label": "Gi0/3\nPC-B",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "p2"
    ],
    "explanation": "The inter-switch link must be a trunk to carry multiple VLANs."
  },
  {
    "id": 230,
    "qid": "CCNA-MOD2-030",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the VLAN that is the native VLAN on this trunk based on labels.",
    "scenario": "<div class=\"scenario-text\"><p>Trunk shows native VLAN 99; data VLANs 10 and 20.</p></div>",
    "nodes": [
      {
        "id": "v1",
        "label": "VLAN 10\nData",
        "x": 20,
        "y": 40
      },
      {
        "id": "v2",
        "label": "VLAN 99\nNative",
        "x": 50,
        "y": 40
      },
      {
        "id": "v3",
        "label": "VLAN 20\nData",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "v2"
    ],
    "explanation": "Native VLAN is the untagged VLAN on the trunk—here VLAN 99."
  },
  {
    "id": 231,
    "qid": "CCNA-MOD2-031",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the access port assigned to the wrong VLAN for the PC.",
    "scenario": "<div class=\"scenario-text\"><p>PC should be in VLAN 10; port labels show assignments.</p></div>",
    "nodes": [
      {
        "id": "a1",
        "label": "Gi0/1\nVLAN 10",
        "x": 25,
        "y": 40
      },
      {
        "id": "a2",
        "label": "Gi0/2\nVLAN 30",
        "x": 55,
        "y": 40
      },
      {
        "id": "a3",
        "label": "Gi0/24\nTrunk",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "a2"
    ],
    "explanation": "Gi0/2 in VLAN 30 is wrong for a VLAN 10 user."
  },
  {
    "id": 232,
    "qid": "CCNA-MOD2-032",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the trunk that has a native VLAN mismatch.",
    "scenario": "<div class=\"scenario-text\"><p>SW1 native 1; SW2 native 10 on the same link.</p></div>",
    "nodes": [
      {
        "id": "t1",
        "label": "Trunk A\nNative match",
        "x": 30,
        "y": 40
      },
      {
        "id": "t2",
        "label": "Trunk B\n1 vs 10",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "t2"
    ],
    "explanation": "Native 1 vs 10 is a mismatch."
  },
  {
    "id": 233,
    "qid": "CCNA-MOD2-033",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the switch where you should create VLAN 40 first in a VTP client environment.",
    "scenario": "<div class=\"scenario-text\"><p>SW-A is VTP server; SW-B is client.</p></div>",
    "nodes": [
      {
        "id": "s1",
        "label": "SW-A\nServer",
        "x": 30,
        "y": 40
      },
      {
        "id": "s2",
        "label": "SW-B\nClient",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "s1"
    ],
    "explanation": "VLAN creation is done on the VTP server."
  },
  {
    "id": 234,
    "qid": "CCNA-MOD2-034",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the link that carries multiple tagged VLANs.",
    "scenario": "<div class=\"scenario-text\"><p>Access links vs inter-switch trunk.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "PC access",
        "x": 25,
        "y": 40
      },
      {
        "id": "l2",
        "label": "SW1-SW2\nTrunk",
        "x": 55,
        "y": 40
      },
      {
        "id": "l3",
        "label": "Phone access",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "l2"
    ],
    "explanation": "Only the trunk carries multiple tagged VLANs."
  },
  {
    "id": 235,
    "qid": "CCNA-MOD2-035",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that correctly configure an access port in VLAN 15.",
    "scenario": "<div class=\"scenario-text\"><p>Interface configuration fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "switchport mode access"
      },
      {
        "id": "l2",
        "label": "switchport access vlan 15"
      },
      {
        "id": "l3",
        "label": "switchport mode trunk"
      },
      {
        "id": "l4",
        "label": "channel-group 1 mode on"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Access mode and access VLAN 15."
  },
  {
    "id": 236,
    "qid": "CCNA-MOD2-036",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines required for a static 802.1Q trunk.",
    "scenario": "<div class=\"scenario-text\"><p>Distribution uplink configuration.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "switchport mode trunk"
      },
      {
        "id": "l2",
        "label": "switchport trunk encapsulation dot1q"
      },
      {
        "id": "l3",
        "label": "switchport access vlan 1"
      },
      {
        "id": "l4",
        "label": "spanning-tree portfast"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Encapsulation (where needed) and mode trunk."
  },
  {
    "id": 237,
    "qid": "CCNA-MOD2-037",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that sets the native VLAN to 999.",
    "scenario": "<div class=\"scenario-text\"><p>Trunk security hardening.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "switchport trunk native vlan 999"
      },
      {
        "id": "l2",
        "label": "switchport mode trunk"
      },
      {
        "id": "l3",
        "label": "switchport nonegotiate"
      },
      {
        "id": "l4",
        "label": "no cdp enable"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "switchport trunk native vlan sets the native VLAN."
  },
  {
    "id": 238,
    "qid": "CCNA-MOD2-038",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that disable DTP on an access port.",
    "scenario": "<div class=\"scenario-text\"><p>Prevent dynamic trunking on edge ports.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "switchport mode access"
      },
      {
        "id": "l2",
        "label": "switchport nonegotiate"
      },
      {
        "id": "l3",
        "label": "switchport mode dynamic desirable"
      },
      {
        "id": "l4",
        "label": "channel-group 2 mode active"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Access mode plus nonegotiate stops DTP."
  },
  {
    "id": 239,
    "qid": "CCNA-MOD2-039",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that adds VLAN 40 to the trunk allowed list without replacing the list.",
    "scenario": "<div class=\"scenario-text\"><p>Extend allowed VLANs carefully.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "switchport trunk allowed vlan add 40"
      },
      {
        "id": "l2",
        "label": "switchport trunk allowed vlan 40"
      },
      {
        "id": "l3",
        "label": "vlan 40"
      },
      {
        "id": "l4",
        "label": "name SALES"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "The add keyword appends without wiping the existing allowed list."
  },
  {
    "id": 240,
    "qid": "CCNA-MOD2-040",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that create VLAN 50 named ENGINEERING.",
    "scenario": "<div class=\"scenario-text\"><p>Global VLAN database configuration.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "vlan 50"
      },
      {
        "id": "l2",
        "label": "name ENGINEERING"
      },
      {
        "id": "l3",
        "label": "interface vlan 50"
      },
      {
        "id": "l4",
        "label": "ip address 10.50.0.1 255.255.255.0"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "vlan 50 and name create and label the Layer-2 VLAN."
  },
  {
    "id": 241,
    "qid": "CCNA-MOD2-041",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "Which STP state allows a port to forward user data frames?",
    "scenario": "<div class=\"scenario-text\"><p>Verify Spanning Tree port states on an access switch.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Blocking"
      },
      {
        "id": "b",
        "text": "Listening"
      },
      {
        "id": "c",
        "text": "Learning"
      },
      {
        "id": "d",
        "text": "Forwarding"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Only the Forwarding state passes user data."
  },
  {
    "id": 242,
    "qid": "CCNA-MOD2-042",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "Which Rapid PVST+ port role is the best path toward the root bridge on a non-root switch?",
    "scenario": "<div class=\"scenario-text\"><p>Analyze spanning-tree roles on an access-layer switch.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Designated"
      },
      {
        "id": "b",
        "text": "Root"
      },
      {
        "id": "c",
        "text": "Alternate"
      },
      {
        "id": "d",
        "text": "Backup"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "The Root port is the best path to the root bridge."
  },
  {
    "id": 243,
    "qid": "CCNA-MOD2-043",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "What does BPDU Guard do when a BPDU is received on a PortFast-enabled edge port?",
    "scenario": "<div class=\"scenario-text\"><p>Protect against accidental switch connections on edge ports.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Ignores the BPDU"
      },
      {
        "id": "b",
        "text": "Err-disables the port"
      },
      {
        "id": "c",
        "text": "Becomes the root bridge"
      },
      {
        "id": "d",
        "text": "Enables trunking"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "BPDU Guard err-disables the port to protect the edge."
  },
  {
    "id": 244,
    "qid": "CCNA-MOD2-044",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "How is the root bridge elected in STP?",
    "scenario": "<div class=\"scenario-text\"><p>Multiple switches advertise BPDUs.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Highest MAC address"
      },
      {
        "id": "b",
        "text": "Lowest Bridge ID (priority + MAC)"
      },
      {
        "id": "c",
        "text": "Highest priority value only"
      },
      {
        "id": "d",
        "text": "Fastest CPU"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Lowest Bridge ID wins; priority is most significant, then MAC."
  },
  {
    "id": 245,
    "qid": "CCNA-MOD2-045",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE RSTP (802.1w) port states.",
    "scenario": "<div class=\"scenario-text\"><p>Compare 802.1D vs RSTP states.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Discarding"
      },
      {
        "id": "b",
        "text": "Learning"
      },
      {
        "id": "c",
        "text": "Forwarding"
      },
      {
        "id": "d",
        "text": "Blocking as a separate long-term state"
      },
      {
        "id": "e",
        "text": "Listening as a separate long-term state"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "RSTP uses Discarding, Learning, and Forwarding."
  },
  {
    "id": 246,
    "qid": "CCNA-MOD2-046",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO criteria used in root bridge election.",
    "scenario": "<div class=\"scenario-text\"><p>Bridge ID comparison.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Bridge priority"
      },
      {
        "id": "b",
        "text": "MAC address (tie-breaker)"
      },
      {
        "id": "c",
        "text": "IP address of SVI"
      },
      {
        "id": "d",
        "text": "Number of VLANs"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Priority first, then MAC address."
  },
  {
    "id": 247,
    "qid": "CCNA-MOD2-047",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE STP port roles in a stable topology.",
    "scenario": "<div class=\"scenario-text\"><p>Identify roles on non-root switches.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Root"
      },
      {
        "id": "b",
        "text": "Designated"
      },
      {
        "id": "c",
        "text": "Alternate"
      },
      {
        "id": "d",
        "text": "BGP speaker"
      },
      {
        "id": "e",
        "text": "DHCP relay"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Root, Designated, and Alternate (or Backup) are STP roles."
  },
  {
    "id": 248,
    "qid": "CCNA-MOD2-048",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO benefits of PortFast on edge ports.",
    "scenario": "<div class=\"scenario-text\"><p>Optimize client access ports.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Faster transition to forwarding"
      },
      {
        "id": "b",
        "text": "Avoids unnecessary 30-second delay for end hosts"
      },
      {
        "id": "c",
        "text": "Makes the port the root bridge"
      },
      {
        "id": "d",
        "text": "Disables all security"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "PortFast skips listening/learning delays for edge devices."
  },
  {
    "id": 249,
    "qid": "CCNA-MOD2-049",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE causes of an STP topology change or reconvergence.",
    "scenario": "<div class=\"scenario-text\"><p>Unexpected reconvergence events.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Link failure"
      },
      {
        "id": "b",
        "text": "New switch introducing superior BPDUs"
      },
      {
        "id": "c",
        "text": "Root bridge failure"
      },
      {
        "id": "d",
        "text": "Correct static default route only"
      },
      {
        "id": "e",
        "text": "DNS TTL expiry"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Link/root changes and superior BPDUs drive reconvergence."
  },
  {
    "id": 250,
    "qid": "CCNA-MOD2-050",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO statements about Rapid PVST+.",
    "scenario": "<div class=\"scenario-text\"><p>Cisco spanning-tree modes.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Runs a rapid spanning tree instance per VLAN"
      },
      {
        "id": "b",
        "text": "Faster convergence than classic PVST"
      },
      {
        "id": "c",
        "text": "Uses only a single instance for all VLANs always"
      },
      {
        "id": "d",
        "text": "Eliminates need for any BPDUs"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Rapid PVST+ is per-VLAN with rapid timers/behaviors."
  },
  {
    "id": 251,
    "qid": "CCNA-MOD2-051",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE verification commands for STP.",
    "scenario": "<div class=\"scenario-text\"><p>Collect STP evidence.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "show spanning-tree"
      },
      {
        "id": "b",
        "text": "show spanning-tree root"
      },
      {
        "id": "c",
        "text": "show spanning-tree interface"
      },
      {
        "id": "d",
        "text": "show ip ospf neighbor"
      },
      {
        "id": "e",
        "text": "show vlan brief only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "show spanning-tree variants expose root, roles, and states."
  },
  {
    "id": 252,
    "qid": "CCNA-MOD2-052",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO effects of setting spanning-tree vlan 1 priority 4096.",
    "scenario": "<div class=\"scenario-text\"><p>Influence root election.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Lowers Bridge ID for VLAN 1"
      },
      {
        "id": "b",
        "text": "Increases chance of becoming root for VLAN 1"
      },
      {
        "id": "c",
        "text": "Disables PortFast globally"
      },
      {
        "id": "d",
        "text": "Changes native VLAN to 4096"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Lower priority improves root election odds for that VLAN."
  },
  {
    "id": 253,
    "qid": "CCNA-MOD2-053",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE loop-prevention related features.",
    "scenario": "<div class=\"scenario-text\"><p>Edge and STP safety.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "STP / RSTP"
      },
      {
        "id": "b",
        "text": "BPDU Guard"
      },
      {
        "id": "c",
        "text": "Root Guard"
      },
      {
        "id": "d",
        "text": "NAT overload"
      },
      {
        "id": "e",
        "text": "WPA3 only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "STP, BPDU Guard, and Root Guard protect against loops and bad roots."
  },
  {
    "id": 254,
    "qid": "CCNA-MOD2-054",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO reasons a port stays in blocking/discarding.",
    "scenario": "<div class=\"scenario-text\"><p>Port never forwards.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "It is an Alternate or Backup port"
      },
      {
        "id": "b",
        "text": "STP has blocked it to prevent a loop"
      },
      {
        "id": "c",
        "text": "PortFast forces blocking forever"
      },
      {
        "id": "d",
        "text": "CDP is disabled"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Non-designated ports block to break loops."
  },
  {
    "id": 255,
    "qid": "CCNA-MOD2-055",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE differences of RSTP vs classic STP timers behavior.",
    "scenario": "<div class=\"scenario-text\"><p>Convergence expectations.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "RSTP converges faster"
      },
      {
        "id": "b",
        "text": "RSTP uses proposal/agreement handshake"
      },
      {
        "id": "c",
        "text": "RSTP edge ports can forward quickly with PortFast"
      },
      {
        "id": "d",
        "text": "RSTP requires Frame Relay"
      },
      {
        "id": "e",
        "text": "RSTP eliminates all MAC learning"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Faster convergence, proposal/agreement, and edge optimizations."
  },
  {
    "id": 256,
    "qid": "CCNA-MOD2-056",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO correct actions if a user switch is plugged into a PortFast+BPDU Guard port.",
    "scenario": "<div class=\"scenario-text\"><p>Accidental switch on edge.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Port err-disables on BPDU receipt"
      },
      {
        "id": "b",
        "text": "Investigate and correct the topology"
      },
      {
        "id": "c",
        "text": "Core automatically becomes access switch"
      },
      {
        "id": "d",
        "text": "VTP domain is erased"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "BPDU Guard err-disables; then fix the cabling/design."
  },
  {
    "id": 257,
    "qid": "CCNA-MOD2-057",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match STP port role to description.",
    "scenario": "<div class=\"scenario-text\"><p>Stable Layer-2 topology roles.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Root port"
      },
      {
        "id": "i2",
        "text": "Designated port"
      },
      {
        "id": "i3",
        "text": "Alternate port"
      },
      {
        "id": "i4",
        "text": "Disabled"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Best path to root on non-root switch"
      },
      {
        "id": "z2",
        "label": "Forwards for a segment toward downstream"
      },
      {
        "id": "z3",
        "label": "Backup path to root; discarding"
      },
      {
        "id": "z4",
        "label": "Administratively or fault down"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Root, Designated, Alternate, Disabled."
  },
  {
    "id": 258,
    "qid": "CCNA-MOD2-058",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match RSTP state to behavior.",
    "scenario": "<div class=\"scenario-text\"><p>802.1w states.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Discarding"
      },
      {
        "id": "i2",
        "text": "Learning"
      },
      {
        "id": "i3",
        "text": "Forwarding"
      },
      {
        "id": "i4",
        "text": "Listening (legacy concept)"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "No forward user data; may process BPDUs"
      },
      {
        "id": "z2",
        "label": "Builds MAC table; no user forward"
      },
      {
        "id": "z3",
        "label": "Forwards user frames"
      },
      {
        "id": "z4",
        "label": "Merged into Discarding in RSTP"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Discarding, Learning, Forwarding; Listening absorbed."
  },
  {
    "id": 259,
    "qid": "CCNA-MOD2-059",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Order classic STP port state progression toward forwarding (simplified).",
    "scenario": "<div class=\"scenario-text\"><p>Without PortFast.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Blocking"
      },
      {
        "id": "c2",
        "text": "Listening"
      },
      {
        "id": "c3",
        "text": "Learning"
      },
      {
        "id": "c4",
        "text": "Forwarding"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Blocking → Listening → Learning → Forwarding."
  },
  {
    "id": 260,
    "qid": "CCNA-MOD2-060",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match feature to protection goal.",
    "scenario": "<div class=\"scenario-text\"><p>STP edge security.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "PortFast"
      },
      {
        "id": "i2",
        "text": "BPDU Guard"
      },
      {
        "id": "i3",
        "text": "Root Guard"
      },
      {
        "id": "i4",
        "text": "Loop Guard"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Fast edge forwarding"
      },
      {
        "id": "z2",
        "label": "Err-disable on unexpected BPDU"
      },
      {
        "id": "z3",
        "label": "Prevent inferior switch becoming root"
      },
      {
        "id": "z4",
        "label": "Prevent unidirectional link loops"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "PortFast, BPDU Guard, Root Guard, Loop Guard."
  },
  {
    "id": 261,
    "qid": "CCNA-MOD2-061",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match Bridge ID component to role in election.",
    "scenario": "<div class=\"scenario-text\"><p>Who becomes root.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Priority"
      },
      {
        "id": "i2",
        "text": "MAC address"
      },
      {
        "id": "i3",
        "text": "Lower priority value"
      },
      {
        "id": "i4",
        "text": "Extended system ID (VLAN)"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Primary comparison field"
      },
      {
        "id": "z2",
        "label": "Tie-breaker"
      },
      {
        "id": "z3",
        "label": "More likely to win root"
      },
      {
        "id": "z4",
        "label": "Per-VLAN uniqueness in PVST"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Priority, MAC, lower wins, extended system ID."
  },
  {
    "id": 262,
    "qid": "CCNA-MOD2-062",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Order steps to make SW1 root for VLAN 10.",
    "scenario": "<div class=\"scenario-text\"><p>Force root placement.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Enter global config"
      },
      {
        "id": "c2",
        "text": "spanning-tree vlan 10 priority 4096"
      },
      {
        "id": "c3",
        "text": "Verify show spanning-tree vlan 10"
      },
      {
        "id": "c4",
        "text": "Confirm other switches see SW1 as root"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Config → priority → verify local → verify domain."
  },
  {
    "id": 263,
    "qid": "CCNA-MOD2-063",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match problem to STP-related cause.",
    "scenario": "<div class=\"scenario-text\"><p>Layer-2 symptoms.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Broadcast storm"
      },
      {
        "id": "i2",
        "text": "Slow client first connect"
      },
      {
        "id": "i3",
        "text": "Wrong root bridge"
      },
      {
        "id": "i4",
        "text": "Edge port err-disabled"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "STP failed / loop"
      },
      {
        "id": "z2",
        "label": "Missing PortFast"
      },
      {
        "id": "z3",
        "label": "Priority/MAC not as designed"
      },
      {
        "id": "z4",
        "label": "BPDU Guard triggered"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Storm, delay, bad root, BPDU Guard."
  },
  {
    "id": 264,
    "qid": "CCNA-MOD2-064",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match PVST+ concept to meaning.",
    "scenario": "<div class=\"scenario-text\"><p>Per-VLAN spanning tree.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Instance per VLAN"
      },
      {
        "id": "i2",
        "text": "Load sharing opportunity"
      },
      {
        "id": "i3",
        "text": "More BPDUs"
      },
      {
        "id": "i4",
        "text": "Root can differ per VLAN"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Separate topology calculation"
      },
      {
        "id": "z2",
        "label": "Different blocked ports per VLAN"
      },
      {
        "id": "z3",
        "label": "Control plane overhead"
      },
      {
        "id": "z4",
        "label": "Primary root placement flexibility"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Per-VLAN instances enable load sharing and flexible roots."
  },
  {
    "id": 265,
    "qid": "CCNA-MOD2-065",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Order investigation of unexpected root bridge.",
    "scenario": "<div class=\"scenario-text\"><p>SW3 became root unintentionally.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "show spanning-tree root"
      },
      {
        "id": "c2",
        "text": "Identify priority and MAC of winner"
      },
      {
        "id": "c3",
        "text": "Adjust designed root priority"
      },
      {
        "id": "c4",
        "text": "Verify reconvergence to intended root"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Identify root → compare BID → fix priority → verify."
  },
  {
    "id": 266,
    "qid": "CCNA-MOD2-066",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match timer/concept (classic STP) to approximate role.",
    "scenario": "<div class=\"scenario-text\"><p>Legacy timer awareness.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Hello"
      },
      {
        "id": "i2",
        "text": "Max Age"
      },
      {
        "id": "i3",
        "text": "Forward Delay"
      },
      {
        "id": "i4",
        "text": "Diameter"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "BPDU interval from root"
      },
      {
        "id": "z2",
        "label": "BPDU freshness limit"
      },
      {
        "id": "z3",
        "label": "Listening/Learning delay"
      },
      {
        "id": "z4",
        "label": "Network size assumption"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Hello, Max Age, Forward Delay, diameter."
  },
  {
    "id": 267,
    "qid": "CCNA-MOD2-067",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match command to STP action.",
    "scenario": "<div class=\"scenario-text\"><p>Configuration mapping.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "spanning-tree mode rapid-pvst"
      },
      {
        "id": "i2",
        "text": "spanning-tree portfast"
      },
      {
        "id": "i3",
        "text": "spanning-tree bpduguard enable"
      },
      {
        "id": "i4",
        "text": "spanning-tree vlan 1 root primary"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Set STP mode"
      },
      {
        "id": "z2",
        "label": "Edge port optimization"
      },
      {
        "id": "z3",
        "label": "Guard edge against BPDUs"
      },
      {
        "id": "z4",
        "label": "Macro to set root priority"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Mode, PortFast, BPDU Guard, root primary macro."
  },
  {
    "id": 268,
    "qid": "CCNA-MOD2-068",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match blocked port scenario to role name.",
    "scenario": "<div class=\"scenario-text\"><p>Why a port does not forward.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Alternate path to root"
      },
      {
        "id": "i2",
        "text": "Redundant designated on segment"
      },
      {
        "id": "i3",
        "text": "Admin down"
      },
      {
        "id": "i4",
        "text": "Root port on non-root"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Alternate"
      },
      {
        "id": "z2",
        "label": "Backup"
      },
      {
        "id": "z3",
        "label": "Disabled"
      },
      {
        "id": "z4",
        "label": "Root (forwards)"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Alternate vs Backup vs Disabled; Root forwards."
  },
  {
    "id": 269,
    "qid": "CCNA-MOD2-069",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the switch that will be elected Root Bridge.",
    "scenario": "<div class=\"scenario-text\"><p>Bridge IDs: SW1 32768:0001.aaaa.1111; SW2 24576:0001.bbbb.2222; SW3 32768:0001.cccc.0000.</p></div>",
    "nodes": [
      {
        "id": "sw1",
        "label": "SW1\n32768:…1111",
        "x": 20,
        "y": 40
      },
      {
        "id": "sw2",
        "label": "SW2\n24576:…2222",
        "x": 50,
        "y": 40
      },
      {
        "id": "sw3",
        "label": "SW3\n32768:…0000",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "sw2"
    ],
    "explanation": "Lowest priority 24576 makes SW2 the root."
  },
  {
    "id": 270,
    "qid": "CCNA-MOD2-070",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the Root Port on SW-Access toward the root.",
    "scenario": "<div class=\"scenario-text\"><p>Root is SW-Core; SW-Access has two uplinks.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "Gi0/1\nRoot port",
        "x": 30,
        "y": 30
      },
      {
        "id": "p2",
        "label": "Gi0/2\nAlternate",
        "x": 30,
        "y": 70
      },
      {
        "id": "p3",
        "label": "Gi0/24\nAccess",
        "x": 70,
        "y": 50
      }
    ],
    "correct": [
      "p1"
    ],
    "explanation": "Root port is the best path to the root bridge."
  },
  {
    "id": 271,
    "qid": "CCNA-MOD2-071",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the port that BPDU Guard would err-disable if a switch is plugged in.",
    "scenario": "<div class=\"scenario-text\"><p>Edge ports have PortFast and BPDU Guard.</p></div>",
    "nodes": [
      {
        "id": "e1",
        "label": "Gi0/5\nPortFast",
        "x": 30,
        "y": 40
      },
      {
        "id": "e2",
        "label": "Gi0/24\nUplink",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "e1"
    ],
    "explanation": "BPDU Guard acts on PortFast edge ports receiving BPDUs."
  },
  {
    "id": 272,
    "qid": "CCNA-MOD2-072",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the Designated Port on the segment between SW1 and SW2.",
    "scenario": "<div class=\"scenario-text\"><p>SW1 is root; SW2 is downstream.</p></div>",
    "nodes": [
      {
        "id": "d1",
        "label": "SW1 Gi0/1\nDP",
        "x": 30,
        "y": 40
      },
      {
        "id": "d2",
        "label": "SW2 Gi0/1\nRP",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "d1"
    ],
    "explanation": "On the root, the port facing the segment is Designated."
  },
  {
    "id": 273,
    "qid": "CCNA-MOD2-073",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the switch that should NOT be root based on design labels.",
    "scenario": "<div class=\"scenario-text\"><p>Intended root is Core; Access shows lower priority by mistake.</p></div>",
    "nodes": [
      {
        "id": "c1",
        "label": "Core\nPriority 4096",
        "x": 30,
        "y": 40
      },
      {
        "id": "c2",
        "label": "Access\nPriority 0",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "c2"
    ],
    "explanation": "Priority 0 on Access would incorrectly win root election."
  },
  {
    "id": 274,
    "qid": "CCNA-MOD2-074",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the Alternate port that is discarding to prevent a loop.",
    "scenario": "<div class=\"scenario-text\"><p>Triangle topology with one blocked uplink.</p></div>",
    "nodes": [
      {
        "id": "a1",
        "label": "Gi0/1\nForwarding",
        "x": 25,
        "y": 40
      },
      {
        "id": "a2",
        "label": "Gi0/2\nDiscarding",
        "x": 55,
        "y": 40
      },
      {
        "id": "a3",
        "label": "Gi0/3\nAccess",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "a2"
    ],
    "explanation": "Discarding/blocking Alternate breaks the loop."
  },
  {
    "id": 275,
    "qid": "CCNA-MOD2-075",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that enable PortFast and BPDU Guard on an interface.",
    "scenario": "<div class=\"scenario-text\"><p>Edge port hardening.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "spanning-tree portfast"
      },
      {
        "id": "l2",
        "label": "spanning-tree bpduguard enable"
      },
      {
        "id": "l3",
        "label": "switchport mode trunk"
      },
      {
        "id": "l4",
        "label": "channel-group 1 mode active"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "PortFast and BPDU Guard are the edge pair."
  },
  {
    "id": 276,
    "qid": "CCNA-MOD2-076",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that sets Rapid PVST+ mode globally.",
    "scenario": "<div class=\"scenario-text\"><p>Configure spanning-tree mode.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "spanning-tree mode rapid-pvst"
      },
      {
        "id": "l2",
        "label": "spanning-tree mode pvst"
      },
      {
        "id": "l3",
        "label": "spanning-tree portfast default"
      },
      {
        "id": "l4",
        "label": "spanning-tree vlan 1 root primary"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "rapid-pvst enables Rapid PVST+."
  },
  {
    "id": 277,
    "qid": "CCNA-MOD2-077",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that influence VLAN 10 root election toward this switch.",
    "scenario": "<div class=\"scenario-text\"><p>Make this switch root for VLAN 10.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "spanning-tree vlan 10 priority 4096"
      },
      {
        "id": "l2",
        "label": "spanning-tree vlan 10 root primary"
      },
      {
        "id": "l3",
        "label": "spanning-tree portfast"
      },
      {
        "id": "l4",
        "label": "switchport mode access"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Explicit priority or root primary macro lowers BID for VLAN 10."
  },
  {
    "id": 278,
    "qid": "CCNA-MOD2-078",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that enables BPDU Guard by default on PortFast ports.",
    "scenario": "<div class=\"scenario-text\"><p>Global edge security.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "spanning-tree portfast bpduguard default"
      },
      {
        "id": "l2",
        "label": "spanning-tree mode mst"
      },
      {
        "id": "l3",
        "label": "no spanning-tree vlan 1"
      },
      {
        "id": "l4",
        "label": "spanning-tree loopguard default"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "portfast bpduguard default applies Guard to PortFast ports."
  },
  {
    "id": 279,
    "qid": "CCNA-MOD2-079",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines related to Root Guard on an uplink.",
    "scenario": "<div class=\"scenario-text\"><p>Prevent downstream switch from becoming root.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "interface GigabitEthernet0/24"
      },
      {
        "id": "l2",
        "label": "spanning-tree guard root"
      },
      {
        "id": "l3",
        "label": "spanning-tree portfast"
      },
      {
        "id": "l4",
        "label": "switchport access vlan 10"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Root Guard is applied under the interface facing potential rogue roots."
  },
  {
    "id": 280,
    "qid": "CCNA-MOD2-080",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that would disable STP for VLAN 1 (generally not recommended).",
    "scenario": "<div class=\"scenario-text\"><p>Dangerous configuration review.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "no spanning-tree vlan 1"
      },
      {
        "id": "l2",
        "label": "spanning-tree mode rapid-pvst"
      },
      {
        "id": "l3",
        "label": "spanning-tree portfast"
      },
      {
        "id": "l4",
        "label": "spanning-tree backbonefast"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "no spanning-tree vlan disables STP for that VLAN."
  },
  {
    "id": 281,
    "qid": "CCNA-MOD2-081",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "Which protocol is the IEEE standard for link aggregation?",
    "scenario": "<div class=\"scenario-text\"><p>Choose negotiation protocol for multivendor aggregation.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "PAgP"
      },
      {
        "id": "b",
        "text": "LACP"
      },
      {
        "id": "c",
        "text": "DTP"
      },
      {
        "id": "d",
        "text": "VTP"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "LACP (802.3ad/802.1AX) is the IEEE standard; PAgP is Cisco proprietary."
  },
  {
    "id": 282,
    "qid": "CCNA-MOD2-082",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "Which LACP mode actively initiates negotiation?",
    "scenario": "<div class=\"scenario-text\"><p>Configure channel-group for aggressive formation.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "passive"
      },
      {
        "id": "b",
        "text": "active"
      },
      {
        "id": "c",
        "text": "auto"
      },
      {
        "id": "d",
        "text": "desirable"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "LACP active initiates; passive only responds."
  },
  {
    "id": 283,
    "qid": "CCNA-MOD2-083",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "What must match on member interfaces for an EtherChannel to form?",
    "scenario": "<div class=\"scenario-text\"><p>Bundle fails between two switches.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Interface descriptions only"
      },
      {
        "id": "b",
        "text": "Speed, duplex, and switchport configuration consistency"
      },
      {
        "id": "c",
        "text": "Hostnames"
      },
      {
        "id": "d",
        "text": "NTP servers"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Members need matching speed/duplex and compatible switchport settings."
  },
  {
    "id": 284,
    "qid": "CCNA-MOD2-084",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "Which command shows EtherChannel status summary?",
    "scenario": "<div class=\"scenario-text\"><p>Verify Port-Channel 1 members.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "show etherchannel summary"
      },
      {
        "id": "b",
        "text": "show vlan brief"
      },
      {
        "id": "c",
        "text": "show ip route"
      },
      {
        "id": "d",
        "text": "show mac address-table"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "show etherchannel summary lists groups, protocol, and member status."
  },
  {
    "id": 285,
    "qid": "CCNA-MOD2-085",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE requirements for EtherChannel members.",
    "scenario": "<div class=\"scenario-text\"><p>Bundle Gi0/1 and Gi0/2.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Same speed and duplex"
      },
      {
        "id": "b",
        "text": "Compatible switchport mode"
      },
      {
        "id": "c",
        "text": "Consistent trunk/access settings"
      },
      {
        "id": "d",
        "text": "Different native VLANs on purpose"
      },
      {
        "id": "e",
        "text": "One port shut"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Speed/duplex and switchport parameters must align."
  },
  {
    "id": 286,
    "qid": "CCNA-MOD2-086",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO LACP modes.",
    "scenario": "<div class=\"scenario-text\"><p>IEEE negotiation modes.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "active"
      },
      {
        "id": "b",
        "text": "passive"
      },
      {
        "id": "c",
        "text": "desirable"
      },
      {
        "id": "d",
        "text": "auto"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "LACP uses active and passive."
  },
  {
    "id": 287,
    "qid": "CCNA-MOD2-087",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO PAgP modes.",
    "scenario": "<div class=\"scenario-text\"><p>Cisco proprietary negotiation.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "desirable"
      },
      {
        "id": "b",
        "text": "auto"
      },
      {
        "id": "c",
        "text": "active"
      },
      {
        "id": "d",
        "text": "passive"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "PAgP uses desirable and auto."
  },
  {
    "id": 288,
    "qid": "CCNA-MOD2-088",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE verification commands for EtherChannel.",
    "scenario": "<div class=\"scenario-text\"><p>Confirm Port-Channel health.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "show etherchannel summary"
      },
      {
        "id": "b",
        "text": "show etherchannel port-channel"
      },
      {
        "id": "c",
        "text": "show interfaces port-channel"
      },
      {
        "id": "d",
        "text": "show ip ospf database"
      },
      {
        "id": "e",
        "text": "show vlan brief only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "EtherChannel and Port-Channel show commands."
  },
  {
    "id": 289,
    "qid": "CCNA-MOD2-089",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO reasons a channel fails to form.",
    "scenario": "<div class=\"scenario-text\"><p>Members stay independent.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Mode mismatch (e.g., active vs auto with no partner)"
      },
      {
        "id": "b",
        "text": "Speed mismatch on members"
      },
      {
        "id": "c",
        "text": "Identical configs on both ends"
      },
      {
        "id": "d",
        "text": "Matching LACP active/active"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Negotiation mode and physical parameter mismatches prevent bundling."
  },
  {
    "id": 290,
    "qid": "CCNA-MOD2-090",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE advantages of EtherChannel.",
    "scenario": "<div class=\"scenario-text\"><p>Justify aggregation.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Increased bandwidth"
      },
      {
        "id": "b",
        "text": "Redundancy without STP blocking all links"
      },
      {
        "id": "c",
        "text": "Simplified logical topology"
      },
      {
        "id": "d",
        "text": "Eliminates need for IP addressing"
      },
      {
        "id": "e",
        "text": "Replaces all routing protocols"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Bandwidth, redundancy, and simpler logical links."
  },
  {
    "id": 291,
    "qid": "CCNA-MOD2-091",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO valid channel-group mode pairings that form a channel.",
    "scenario": "<div class=\"scenario-text\"><p>Partner compatibility.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "LACP active + active"
      },
      {
        "id": "b",
        "text": "LACP active + passive"
      },
      {
        "id": "c",
        "text": "LACP passive + passive only"
      },
      {
        "id": "d",
        "text": "PAgP auto + auto only always"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "At least one side must actively negotiate (active or desirable)."
  },
  {
    "id": 292,
    "qid": "CCNA-MOD2-092",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE Layer-3 EtherChannel characteristics.",
    "scenario": "<div class=\"scenario-text\"><p>Routed Port-Channel.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "no switchport on members and Port-Channel"
      },
      {
        "id": "b",
        "text": "IP address on Port-Channel interface"
      },
      {
        "id": "c",
        "text": "Members still need consistent physical params"
      },
      {
        "id": "d",
        "text": "Requires access VLAN on members"
      },
      {
        "id": "e",
        "text": "Must use PAgP only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "L3 EC uses routed interfaces and IP on the Port-Channel."
  },
  {
    "id": 293,
    "qid": "CCNA-MOD2-093",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO load-balancing considerations.",
    "scenario": "<div class=\"scenario-text\"><p>Traffic distribution across members.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Hash based on addresses/ports depending on platform config"
      },
      {
        "id": "b",
        "text": "Not all flows use all links equally"
      },
      {
        "id": "c",
        "text": "STP is disabled forever by EtherChannel"
      },
      {
        "id": "d",
        "text": "Native VLAN becomes 0"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Hash-based distribution; individual flows pin to a member."
  },
  {
    "id": 294,
    "qid": "CCNA-MOD2-094",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE steps to configure LACP trunk EtherChannel.",
    "scenario": "<div class=\"scenario-text\"><p>Access to distribution uplink pair.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "channel-group N mode active on members"
      },
      {
        "id": "b",
        "text": "Configure Port-Channel as trunk"
      },
      {
        "id": "c",
        "text": "Match member switchport settings"
      },
      {
        "id": "d",
        "text": "Assign different speeds per member"
      },
      {
        "id": "e",
        "text": "Disable all STP"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "LACP mode, Port-Channel trunking, consistent members."
  },
  {
    "id": 295,
    "qid": "CCNA-MOD2-095",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO show indicators of a successful bundle.",
    "scenario": "<div class=\"scenario-text\"><p>Read summary output.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Members marked as P (bundled in port-channel)"
      },
      {
        "id": "b",
        "text": "Protocol shows LACP or PAgP as configured"
      },
      {
        "id": "c",
        "text": "Members all stand-alone with no flags"
      },
      {
        "id": "d",
        "text": "Interface is administratively down"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Bundled flags and correct protocol indicate success."
  },
  {
    "id": 296,
    "qid": "CCNA-MOD2-096",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE common EtherChannel troubleshooting checks.",
    "scenario": "<div class=\"scenario-text\"><p>Bundle will not come up.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Compare member running-configs"
      },
      {
        "id": "b",
        "text": "Check show etherchannel summary"
      },
      {
        "id": "c",
        "text": "Verify no err-disabled members"
      },
      {
        "id": "d",
        "text": "Change BGP AS numbers"
      },
      {
        "id": "e",
        "text": "Erase VLAN 1"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Config consistency, summary status, and member health."
  },
  {
    "id": 297,
    "qid": "CCNA-MOD2-097",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match EtherChannel mode to description.",
    "scenario": "<div class=\"scenario-text\"><p>Negotiation behavior.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "LACP Active"
      },
      {
        "id": "i2",
        "text": "LACP Passive"
      },
      {
        "id": "i3",
        "text": "PAgP Desirable"
      },
      {
        "id": "i4",
        "text": "Static On"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Initiates LACP"
      },
      {
        "id": "z2",
        "label": "Responds to LACP only"
      },
      {
        "id": "z3",
        "label": "Initiates PAgP"
      },
      {
        "id": "z4",
        "label": "Forces channel without protocol"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Active, Passive, Desirable, On."
  },
  {
    "id": 298,
    "qid": "CCNA-MOD2-098",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match protocol to standard/ownership.",
    "scenario": "<div class=\"scenario-text\"><p>Choose for multivendor.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "LACP"
      },
      {
        "id": "i2",
        "text": "PAgP"
      },
      {
        "id": "i3",
        "text": "Static On"
      },
      {
        "id": "i4",
        "text": "DTP"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "IEEE standard"
      },
      {
        "id": "z2",
        "label": "Cisco proprietary"
      },
      {
        "id": "z3",
        "label": "No negotiation protocol"
      },
      {
        "id": "z4",
        "label": "Trunk negotiation (not EC)"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "LACP IEEE; PAgP Cisco; On static; DTP is trunking."
  },
  {
    "id": 299,
    "qid": "CCNA-MOD2-099",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Order steps to build an LACP Layer-2 EtherChannel.",
    "scenario": "<div class=\"scenario-text\"><p>Two uplinks to distribution.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Configure members channel-group mode active"
      },
      {
        "id": "c2",
        "text": "Configure Port-Channel trunk settings"
      },
      {
        "id": "c3",
        "text": "Ensure member consistency"
      },
      {
        "id": "c4",
        "text": "Verify show etherchannel summary"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Members → Po trunk → consistency → verify."
  },
  {
    "id": 300,
    "qid": "CCNA-MOD2-100",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match failure cause to symptom.",
    "scenario": "<div class=\"scenario-text\"><p>EtherChannel troubleshooting map.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Mode passive+passive"
      },
      {
        "id": "i2",
        "text": "Speed mismatch"
      },
      {
        "id": "i3",
        "text": "One member access one trunk"
      },
      {
        "id": "i4",
        "text": "Correct active+active"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "No negotiation starts"
      },
      {
        "id": "z2",
        "label": "Member suspended/not bundled"
      },
      {
        "id": "z3",
        "label": "Inconsistent switchport"
      },
      {
        "id": "z4",
        "label": "Channel forms"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Passive pair fails; mismatches suspend; consistency succeeds."
  },
  {
    "id": 301,
    "qid": "CCNA-MOD2-101",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match interface type to EtherChannel use.",
    "scenario": "<div class=\"scenario-text\"><p>L2 vs L3 bundles.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "switchport trunk on Po"
      },
      {
        "id": "i2",
        "text": "no switchport + IP on Po"
      },
      {
        "id": "i3",
        "text": "Members channel-group"
      },
      {
        "id": "i4",
        "text": "show etherchannel load-balance"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Layer-2 EtherChannel"
      },
      {
        "id": "z2",
        "label": "Layer-3 EtherChannel"
      },
      {
        "id": "z3",
        "label": "Physical member assignment"
      },
      {
        "id": "z4",
        "label": "Hash algorithm view"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "L2 trunk Po, L3 routed Po, members, load-balance."
  },
  {
    "id": 302,
    "qid": "CCNA-MOD2-102",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Order verification after EtherChannel change.",
    "scenario": "<div class=\"scenario-text\"><p>Confirm production uplink.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "show etherchannel summary"
      },
      {
        "id": "c2",
        "text": "show interfaces port-channel"
      },
      {
        "id": "c3",
        "text": "Check STP sees single logical link"
      },
      {
        "id": "c4",
        "text": "Test traffic and failover"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Summary → Po interface → STP → traffic test."
  },
  {
    "id": 303,
    "qid": "CCNA-MOD2-103",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match load-balance hash input examples to idea.",
    "scenario": "<div class=\"scenario-text\"><p>Why one flow uses one link.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "src-dst IP"
      },
      {
        "id": "i2",
        "text": "src-dst MAC"
      },
      {
        "id": "i3",
        "text": "Single TCP flow"
      },
      {
        "id": "i4",
        "text": "Many varied flows"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "L3 hash option"
      },
      {
        "id": "z2",
        "label": "L2 hash option"
      },
      {
        "id": "z3",
        "label": "Pins to one member"
      },
      {
        "id": "z4",
        "label": "Spreads across members"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Hash fields and flow distribution behavior."
  },
  {
    "id": 304,
    "qid": "CCNA-MOD2-104",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match Cisco command fragment to intent.",
    "scenario": "<div class=\"scenario-text\"><p>EC configuration language.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "channel-group 1 mode active"
      },
      {
        "id": "i2",
        "text": "interface Port-channel1"
      },
      {
        "id": "i3",
        "text": "no switchport"
      },
      {
        "id": "i4",
        "text": "channel-group 1 mode on"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "LACP member"
      },
      {
        "id": "z2",
        "label": "Logical bundle interface"
      },
      {
        "id": "z3",
        "label": "Routed member/Po prep"
      },
      {
        "id": "z4",
        "label": "Static bundle member"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "active, Po interface, routed, on."
  },
  {
    "id": 305,
    "qid": "CCNA-MOD2-105",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match redundancy behavior to EtherChannel property.",
    "scenario": "<div class=\"scenario-text\"><p>Member failure.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "One member down"
      },
      {
        "id": "i2",
        "text": "All members down"
      },
      {
        "id": "i3",
        "text": "Member restored"
      },
      {
        "id": "i4",
        "text": "Misconfigured new member"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Bundle continues on remaining"
      },
      {
        "id": "z2",
        "label": "Port-Channel down"
      },
      {
        "id": "z3",
        "label": "Rejoins if compatible"
      },
      {
        "id": "z4",
        "label": "May not join / suspend"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Partial failure, total failure, recovery, bad member."
  },
  {
    "id": 306,
    "qid": "CCNA-MOD2-106",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Order rollback if EtherChannel breaks production.",
    "scenario": "<div class=\"scenario-text\"><p>Emergency response.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Identify failed members via summary"
      },
      {
        "id": "c2",
        "text": "Shut bad members or remove channel-group"
      },
      {
        "id": "c3",
        "text": "Restore single-link connectivity"
      },
      {
        "id": "c4",
        "text": "Fix config and re-enable carefully"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Identify → isolate → restore → fix properly."
  },
  {
    "id": 307,
    "qid": "CCNA-MOD2-107",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match platform note to practice.",
    "scenario": "<div class=\"scenario-text\"><p>Safe bundling habits.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Configure identically before no shut"
      },
      {
        "id": "i2",
        "text": "Prefer LACP for multivendor"
      },
      {
        "id": "i3",
        "text": "Avoid mixing on and LACP"
      },
      {
        "id": "i4",
        "text": "Document Po ID and members"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Prevent partial/inconsistent join"
      },
      {
        "id": "z2",
        "label": "Standards-based negotiation"
      },
      {
        "id": "z3",
        "label": "Incompatible modes"
      },
      {
        "id": "z4",
        "label": "Operational clarity"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Consistency, LACP preference, mode purity, docs."
  },
  {
    "id": 308,
    "qid": "CCNA-MOD2-108",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match EtherChannel term to definition.",
    "scenario": "<div class=\"scenario-text\"><p>Vocabulary.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Member interface"
      },
      {
        "id": "i2",
        "text": "Port-Channel"
      },
      {
        "id": "i3",
        "text": "Channel-group"
      },
      {
        "id": "i4",
        "text": "Bundle"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Physical link in the group"
      },
      {
        "id": "z2",
        "label": "Logical interface"
      },
      {
        "id": "z3",
        "label": "Config binding command/ID"
      },
      {
        "id": "z4",
        "label": "Resulting aggregated link"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Member, Po, channel-group, bundle."
  },
  {
    "id": 309,
    "qid": "CCNA-MOD2-109",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the Port-Channel that is successfully bundled.",
    "scenario": "<div class=\"scenario-text\"><p>Po1 shows (SU); Po2 shows (SD) or independent.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "Po1\n(SU)",
        "x": 30,
        "y": 40
      },
      {
        "id": "p2",
        "label": "Po2\nDown",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "p1"
    ],
    "explanation": "(SU) indicates Layer-2 Port-Channel up."
  },
  {
    "id": 310,
    "qid": "CCNA-MOD2-110",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the member interface that failed to join the channel.",
    "scenario": "<div class=\"scenario-text\"><p>Gi0/1 and Gi0/2 in group 1; Gi0/2 suspended.</p></div>",
    "nodes": [
      {
        "id": "m1",
        "label": "Gi0/1\nP",
        "x": 30,
        "y": 40
      },
      {
        "id": "m2",
        "label": "Gi0/2\nSuspended",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "m2"
    ],
    "explanation": "Suspended member did not join the bundle."
  },
  {
    "id": 311,
    "qid": "CCNA-MOD2-111",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the preferred protocol for a multivendor EtherChannel.",
    "scenario": "<div class=\"scenario-text\"><p>Cisco switch to non-Cisco switch aggregation.</p></div>",
    "nodes": [
      {
        "id": "pr1",
        "label": "LACP",
        "x": 30,
        "y": 40
      },
      {
        "id": "pr2",
        "label": "PAgP",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "pr1"
    ],
    "explanation": "LACP is the IEEE standard for multivendor use."
  },
  {
    "id": 312,
    "qid": "CCNA-MOD2-112",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the logical interface that should receive the IP address for an L3 EtherChannel.",
    "scenario": "<div class=\"scenario-text\"><p>Routed bundle between cores.</p></div>",
    "nodes": [
      {
        "id": "i1",
        "label": "Gi0/1\nMember",
        "x": 25,
        "y": 40
      },
      {
        "id": "i2",
        "label": "Port-channel1",
        "x": 55,
        "y": 40
      },
      {
        "id": "i3",
        "label": "Vlan1",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "i2"
    ],
    "explanation": "IP belongs on the Port-Channel logical interface."
  },
  {
    "id": 313,
    "qid": "CCNA-MOD2-113",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the pair of links that should be bundled as one EtherChannel.",
    "scenario": "<div class=\"scenario-text\"><p>Two parallel uplinks between SW-A and SW-B.</p></div>",
    "nodes": [
      {
        "id": "u1",
        "label": "Dual uplinks\nA↔B",
        "x": 30,
        "y": 40
      },
      {
        "id": "u2",
        "label": "Single access\nPC",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "u1"
    ],
    "explanation": "Parallel inter-switch links are EtherChannel candidates."
  },
  {
    "id": 314,
    "qid": "CCNA-MOD2-114",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the switch where channel-group mode active should be configured for LACP.",
    "scenario": "<div class=\"scenario-text\"><p>Both peers support LACP; either/both may be active.</p></div>",
    "nodes": [
      {
        "id": "s1",
        "label": "SW1",
        "x": 30,
        "y": 40
      },
      {
        "id": "s2",
        "label": "SW2",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "s1"
    ],
    "explanation": "Active can be on either side; selecting SW1 as the configuration focus is valid."
  },
  {
    "id": 315,
    "qid": "CCNA-MOD2-115",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that put Gi0/1 into LACP channel-group 1.",
    "scenario": "<div class=\"scenario-text\"><p>Member interface fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "interface GigabitEthernet0/1"
      },
      {
        "id": "l2",
        "label": "channel-group 1 mode active"
      },
      {
        "id": "l3",
        "label": "channel-group 1 mode auto"
      },
      {
        "id": "l4",
        "label": "shutdown"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Interface plus channel-group mode active."
  },
  {
    "id": 316,
    "qid": "CCNA-MOD2-116",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that prevent this EtherChannel from forming properly.",
    "scenario": "<div class=\"scenario-text\"><p>Review physical interface config intended for LACP.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "switchport mode trunk"
      },
      {
        "id": "l2",
        "label": "channel-group 1 mode auto"
      },
      {
        "id": "l3",
        "label": "speed 100"
      },
      {
        "id": "l4",
        "label": "description Uplink"
      }
    ],
    "correct": [
      "l2",
      "l3"
    ],
    "selectCount": 2,
    "explanation": "mode auto is PAgP not LACP; speed 100 may mismatch 1G partners."
  },
  {
    "id": 317,
    "qid": "CCNA-MOD2-117",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that enters the Port-Channel logical interface.",
    "scenario": "<div class=\"scenario-text\"><p>Configure the bundle interface.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "interface Port-channel1"
      },
      {
        "id": "l2",
        "label": "interface GigabitEthernet0/1"
      },
      {
        "id": "l3",
        "label": "vlan 10"
      },
      {
        "id": "l4",
        "label": "line vty 0 4"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "interface Port-channel1 selects the logical bundle."
  },
  {
    "id": 318,
    "qid": "CCNA-MOD2-118",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines for a Layer-3 Port-Channel IP configuration.",
    "scenario": "<div class=\"scenario-text\"><p>Routed EtherChannel.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "no switchport"
      },
      {
        "id": "l2",
        "label": "ip address 10.0.0.1 255.255.255.252"
      },
      {
        "id": "l3",
        "label": "switchport mode trunk"
      },
      {
        "id": "l4",
        "label": "switchport access vlan 1"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "no switchport and IP address make it L3."
  },
  {
    "id": 319,
    "qid": "CCNA-MOD2-119",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that forces a static EtherChannel without LACP/PAgP.",
    "scenario": "<div class=\"scenario-text\"><p>channel-group mode options.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "channel-group 2 mode on"
      },
      {
        "id": "l2",
        "label": "channel-group 2 mode active"
      },
      {
        "id": "l3",
        "label": "channel-group 2 mode desirable"
      },
      {
        "id": "l4",
        "label": "channel-group 2 mode passive"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "mode on forces bundling without negotiation."
  },
  {
    "id": 320,
    "qid": "CCNA-MOD2-120",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that should match on both member interfaces.",
    "scenario": "<div class=\"scenario-text\"><p>Consistency requirements snippet.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "speed 1000"
      },
      {
        "id": "l2",
        "label": "switchport mode trunk"
      },
      {
        "id": "l3",
        "label": "description link-a"
      },
      {
        "id": "l4",
        "label": "cdp enable"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Speed and switchport mode must match across members."
  },
  {
    "id": 321,
    "qid": "CCNA-MOD2-121",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "Which factor most directly reduces SNR for wireless clients?",
    "scenario": "<div class=\"scenario-text\"><p>Users report weak Wi-Fi in one area.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Increased noise or interference"
      },
      {
        "id": "b",
        "text": "Correct DHCP pool size"
      },
      {
        "id": "c",
        "text": "Matching native VLAN on copper"
      },
      {
        "id": "d",
        "text": "OSPF hello timer"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Noise and interference lower signal-to-noise ratio."
  },
  {
    "id": 322,
    "qid": "CCNA-MOD2-122",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "Which band typically offers more non-overlapping channels for dense offices?",
    "scenario": "<div class=\"scenario-text\"><p>Plan capacity for a high-density floor.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "2.4 GHz"
      },
      {
        "id": "b",
        "text": "5 GHz"
      },
      {
        "id": "c",
        "text": "Sub-GHz only"
      },
      {
        "id": "d",
        "text": "Infrared only"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "5 GHz provides many more non-overlapping channels than 2.4 GHz."
  },
  {
    "id": 323,
    "qid": "CCNA-MOD2-123",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "What does CAPWAP provide between a lightweight AP and WLC?",
    "scenario": "<div class=\"scenario-text\"><p>Centralized wireless architecture.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "A copper pinout standard"
      },
      {
        "id": "b",
        "text": "An encapsulation tunnel for control/data"
      },
      {
        "id": "c",
        "text": "A replacement for Ethernet"
      },
      {
        "id": "d",
        "text": "An STP mode"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "CAPWAP tunnels AP–WLC control and optionally data."
  },
  {
    "id": 324,
    "qid": "CCNA-MOD2-124",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "Which physical issue commonly degrades AP coverage through walls?",
    "scenario": "<div class=\"scenario-text\"><p>Survey shows dead zones behind elevators.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Attenuation by obstacles"
      },
      {
        "id": "b",
        "text": "Perfect free-space only"
      },
      {
        "id": "c",
        "text": "CDP version mismatch"
      },
      {
        "id": "d",
        "text": "VTP password"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Walls, metal, and elevators attenuate RF significantly."
  },
  {
    "id": 325,
    "qid": "CCNA-MOD2-125",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE RF factors affecting WLAN coverage.",
    "scenario": "<div class=\"scenario-text\"><p>AP placement planning.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Frequency band"
      },
      {
        "id": "b",
        "text": "Obstacles and walls"
      },
      {
        "id": "c",
        "text": "AP power and antenna pattern"
      },
      {
        "id": "d",
        "text": "BGP AS number"
      },
      {
        "id": "e",
        "text": "Console baud rate"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Band, obstacles, and AP RF settings drive coverage."
  },
  {
    "id": 326,
    "qid": "CCNA-MOD2-126",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO symptoms of wireless interference.",
    "scenario": "<div class=\"scenario-text\"><p>Users report drops.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "High retry rates"
      },
      {
        "id": "b",
        "text": "Low SNR"
      },
      {
        "id": "c",
        "text": "Perfect copper CRC only"
      },
      {
        "id": "d",
        "text": "Stable wired-only users unaffected by RF"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Retries and low SNR indicate RF problems."
  },
  {
    "id": 327,
    "qid": "CCNA-MOD2-127",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE client checks for Wi-Fi failure.",
    "scenario": "<div class=\"scenario-text\"><p>Laptop will not stay connected.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "SSID and security type"
      },
      {
        "id": "b",
        "text": "Signal strength"
      },
      {
        "id": "c",
        "text": "IP address after association"
      },
      {
        "id": "d",
        "text": "OSPF cost on laptop"
      },
      {
        "id": "e",
        "text": "Switch VTP mode on laptop"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "SSID/security, RF, and IP stack."
  },
  {
    "id": 328,
    "qid": "CCNA-MOD2-128",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO causes of AP not joining WLC.",
    "scenario": "<div class=\"scenario-text\"><p>AP stuck in discovery.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "No DHCP/DNS/option 43 for WLC"
      },
      {
        "id": "b",
        "text": "No IP reachability to WLC"
      },
      {
        "id": "c",
        "text": "Correct CAPWAP and join"
      },
      {
        "id": "d",
        "text": "Perfect client SNR only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Discovery and reachability are required for join."
  },
  {
    "id": 329,
    "qid": "CCNA-MOD2-129",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE 2.4 GHz characteristics vs 5 GHz.",
    "scenario": "<div class=\"scenario-text\"><p>Band comparison.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Longer range generally"
      },
      {
        "id": "b",
        "text": "More interference sources historically"
      },
      {
        "id": "c",
        "text": "Fewer non-overlapping channels"
      },
      {
        "id": "d",
        "text": "Always higher throughput than 5 GHz"
      },
      {
        "id": "e",
        "text": "Immune to microwaves"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "2.4 GHz: longer range, interference, few channels."
  },
  {
    "id": 330,
    "qid": "CCNA-MOD2-130",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO mechanical/physical AP deployment issues.",
    "scenario": "<div class=\"scenario-text\"><p>Install quality.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "AP mounted behind metal obstruction"
      },
      {
        "id": "b",
        "text": "Antenna orientation incorrect"
      },
      {
        "id": "c",
        "text": "Perfect channel plan only"
      },
      {
        "id": "d",
        "text": "Correct DHCP option 43 only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Mounting and antenna orientation are physical factors."
  },
  {
    "id": 331,
    "qid": "CCNA-MOD2-131",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE non-Wi-Fi interference sources in 2.4 GHz.",
    "scenario": "<div class=\"scenario-text\"><p>Spectrum awareness.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Microwave ovens"
      },
      {
        "id": "b",
        "text": "Bluetooth"
      },
      {
        "id": "c",
        "text": "Some cordless phones"
      },
      {
        "id": "d",
        "text": "Single-mode fiber light"
      },
      {
        "id": "e",
        "text": "OSPF hellos"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Microwaves, Bluetooth, and cordless phones interfere in 2.4 GHz."
  },
  {
    "id": 332,
    "qid": "CCNA-MOD2-132",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO reasons a client associates but gets no IP.",
    "scenario": "<div class=\"scenario-text\"><p>WLAN works at RF only.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Wrong VLAN on SSID/dynamic interface"
      },
      {
        "id": "b",
        "text": "DHCP server unreachable from WLAN VLAN"
      },
      {
        "id": "c",
        "text": "RSSI excellent only"
      },
      {
        "id": "d",
        "text": "WPA3 working only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "After association, VLAN and DHCP path still matter."
  },
  {
    "id": 333,
    "qid": "CCNA-MOD2-133",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE channel planning best practices (general).",
    "scenario": "<div class=\"scenario-text\"><p>Reduce co-channel interference.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Avoid overlapping same-channel APs nearby"
      },
      {
        "id": "b",
        "text": "Prefer 5 GHz for capacity"
      },
      {
        "id": "c",
        "text": "Tune power to reduce bleed"
      },
      {
        "id": "d",
        "text": "Use only channel 1 for all APs always"
      },
      {
        "id": "e",
        "text": "Disable all security"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Non-overlap, 5 GHz capacity, power control."
  },
  {
    "id": 334,
    "qid": "CCNA-MOD2-134",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO indicators of multipath or poor RF environment.",
    "scenario": "<div class=\"scenario-text\"><p>Odd coverage pattern.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "High retries with moderate RSSI"
      },
      {
        "id": "b",
        "text": "Sudden nulls near reflective surfaces"
      },
      {
        "id": "c",
        "text": "Perfect wired STP"
      },
      {
        "id": "d",
        "text": "Native VLAN match on fiber"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Retries with OK RSSI and spatial nulls suggest multipath/reflections."
  },
  {
    "id": 335,
    "qid": "CCNA-MOD2-135",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE AP join prerequisites (lightweight).",
    "scenario": "<div class=\"scenario-text\"><p>Factory AP on access VLAN.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "IP address via DHCP or static"
      },
      {
        "id": "b",
        "text": "Reachability to WLC"
      },
      {
        "id": "c",
        "text": "Time/certificates if required"
      },
      {
        "id": "d",
        "text": "Local OSPF adjacency on AP"
      },
      {
        "id": "e",
        "text": "VTP server role on AP"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "IP, reachability, and trust/time."
  },
  {
    "id": 336,
    "qid": "CCNA-MOD2-136",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO benefits of lowering AP transmit power in dense areas.",
    "scenario": "<div class=\"scenario-text\"><p>High-density design.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Smaller cells"
      },
      {
        "id": "b",
        "text": "Less co-channel interference"
      },
      {
        "id": "c",
        "text": "Guaranteed longer range"
      },
      {
        "id": "d",
        "text": "Disables CAPWAP"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Lower power shrinks cells and reduces CCI."
  },
  {
    "id": 337,
    "qid": "CCNA-MOD2-137",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match RF metric to meaning.",
    "scenario": "<div class=\"scenario-text\"><p>Read a survey.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "RSSI"
      },
      {
        "id": "i2",
        "text": "SNR"
      },
      {
        "id": "i3",
        "text": "Channel utilization"
      },
      {
        "id": "i4",
        "text": "Retry rate"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Received signal strength"
      },
      {
        "id": "z2",
        "label": "Signal vs noise"
      },
      {
        "id": "z3",
        "label": "How busy the channel is"
      },
      {
        "id": "z4",
        "label": "Retransmissions"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "RSSI, SNR, utilization, retries."
  },
  {
    "id": 338,
    "qid": "CCNA-MOD2-138",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match band to rough trait.",
    "scenario": "<div class=\"scenario-text\"><p>Band planning.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "2.4 GHz"
      },
      {
        "id": "i2",
        "text": "5 GHz"
      },
      {
        "id": "i3",
        "text": "6 GHz"
      },
      {
        "id": "i4",
        "text": "Wired Ethernet"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Longer range, fewer channels"
      },
      {
        "id": "z2",
        "label": "More channels, shorter range"
      },
      {
        "id": "z3",
        "label": "Wide modern spectrum"
      },
      {
        "id": "z4",
        "label": "Not an RF band"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "2.4, 5, 6 GHz vs wired."
  },
  {
    "id": 339,
    "qid": "CCNA-MOD2-139",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Order wireless client join (simplified).",
    "scenario": "<div class=\"scenario-text\"><p>SSID connect path.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Scan/probe"
      },
      {
        "id": "c2",
        "text": "Authenticate"
      },
      {
        "id": "c3",
        "text": "Associate"
      },
      {
        "id": "c4",
        "text": "DHCP for IP"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Scan → auth → associate → DHCP."
  },
  {
    "id": 340,
    "qid": "CCNA-MOD2-140",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match problem to RF focus.",
    "scenario": "<div class=\"scenario-text\"><p>Isolate wireless faults.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "No SSIDs visible"
      },
      {
        "id": "i2",
        "text": "Associates, no IP"
      },
      {
        "id": "i3",
        "text": "High retries"
      },
      {
        "id": "i4",
        "text": "Works only near AP"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "AP down / wrong band / RF"
      },
      {
        "id": "z2",
        "label": "VLAN/DHCP"
      },
      {
        "id": "z3",
        "label": "Interference"
      },
      {
        "id": "z4",
        "label": "Coverage / power / obstacles"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Visibility, DHCP, interference, coverage."
  },
  {
    "id": 341,
    "qid": "CCNA-MOD2-141",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match physical install issue to effect.",
    "scenario": "<div class=\"scenario-text\"><p>AP mounting.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "AP above metal ceiling tile"
      },
      {
        "id": "i2",
        "text": "Antenna pointed into wall"
      },
      {
        "id": "i3",
        "text": "AP in hallway center"
      },
      {
        "id": "i4",
        "text": "Co-channel neighbor too close"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Attenuated signal"
      },
      {
        "id": "z2",
        "label": "Poor pattern where needed"
      },
      {
        "id": "z3",
        "label": "Often good coverage start"
      },
      {
        "id": "z4",
        "label": "CCI / contention"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Metal, orientation, placement, CCI."
  },
  {
    "id": 342,
    "qid": "CCNA-MOD2-142",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Order AP join to controller (lightweight).",
    "scenario": "<div class=\"scenario-text\"><p>Discovery path.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "AP gets IP"
      },
      {
        "id": "c2",
        "text": "AP discovers WLC"
      },
      {
        "id": "c3",
        "text": "AP joins WLC"
      },
      {
        "id": "c4",
        "text": "AP receives config/image"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "IP → discover → join → config."
  },
  {
    "id": 343,
    "qid": "CCNA-MOD2-143",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match interference source to band most affected (typical).",
    "scenario": "<div class=\"scenario-text\"><p>Spectrum issues.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Microwave oven"
      },
      {
        "id": "i2",
        "text": "Bluetooth headset"
      },
      {
        "id": "i3",
        "text": "DFS radar event"
      },
      {
        "id": "i4",
        "text": "Neighbor 5 GHz AP same channel"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "2.4 GHz"
      },
      {
        "id": "z2",
        "label": "2.4 GHz"
      },
      {
        "id": "z3",
        "label": "5 GHz DFS channels"
      },
      {
        "id": "z4",
        "label": "5 GHz CCI"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Microwaves/BT on 2.4; DFS and CCI on 5."
  },
  {
    "id": 344,
    "qid": "CCNA-MOD2-144",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match CAPWAP idea to role.",
    "scenario": "<div class=\"scenario-text\"><p>Split-MAC awareness.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "AP"
      },
      {
        "id": "i2",
        "text": "WLC"
      },
      {
        "id": "i3",
        "text": "CAPWAP tunnel"
      },
      {
        "id": "i4",
        "text": "SSID"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "RF edge device"
      },
      {
        "id": "z2",
        "label": "Centralized control"
      },
      {
        "id": "z3",
        "label": "AP–controller transport"
      },
      {
        "id": "z4",
        "label": "Network name"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "AP, WLC, tunnel, SSID."
  },
  {
    "id": 345,
    "qid": "CCNA-MOD2-145",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Order RF troubleshooting for one area outage.",
    "scenario": "<div class=\"scenario-text\"><p>Floor wing has poor Wi-Fi.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Confirm wired users OK"
      },
      {
        "id": "c2",
        "text": "Check AP status and power"
      },
      {
        "id": "c3",
        "text": "Survey RSSI/SNR/retries"
      },
      {
        "id": "c4",
        "text": "Adjust channel/power/placement"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Scope wired → AP health → RF metrics → remediate."
  },
  {
    "id": 346,
    "qid": "CCNA-MOD2-146",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match client state failure point to layer focus.",
    "scenario": "<div class=\"scenario-text\"><p>Where join breaks.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Cannot see SSID"
      },
      {
        "id": "i2",
        "text": "Fails passphrase/802.1X"
      },
      {
        "id": "i3",
        "text": "Associates; web fails by name"
      },
      {
        "id": "i4",
        "text": "Roams drop calls"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "RF/AP/SSID broadcast"
      },
      {
        "id": "z2",
        "label": "Security/AAA"
      },
      {
        "id": "z3",
        "label": "DNS/path after IP"
      },
      {
        "id": "z4",
        "label": "Mobility/coverage gaps"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Visibility, auth, DNS, roaming."
  },
  {
    "id": 347,
    "qid": "CCNA-MOD2-147",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match deploy recommendation to goal.",
    "scenario": "<div class=\"scenario-text\"><p>Better WLAN design.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Use 5 GHz primary"
      },
      {
        "id": "i2",
        "text": "Limit 2.4 power"
      },
      {
        "id": "i3",
        "text": "Avoid metal mount"
      },
      {
        "id": "i4",
        "text": "Separate SSIDs carefully"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Capacity"
      },
      {
        "id": "z2",
        "label": "Reduce sticky/CCI on 2.4"
      },
      {
        "id": "z3",
        "label": "Preserve pattern"
      },
      {
        "id": "z4",
        "label": "Policy and RF load planning"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Capacity, 2.4 control, mounting, SSID strategy."
  },
  {
    "id": 348,
    "qid": "CCNA-MOD2-148",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match tool type to wireless use.",
    "scenario": "<div class=\"scenario-text\"><p>Operations toolkit.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Spectrum analyzer"
      },
      {
        "id": "i2",
        "text": "Site survey"
      },
      {
        "id": "i3",
        "text": "Controller client view"
      },
      {
        "id": "i4",
        "text": "Cable tester"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Find non-Wi-Fi interference"
      },
      {
        "id": "z2",
        "label": "Plan coverage"
      },
      {
        "id": "z3",
        "label": "See association/state"
      },
      {
        "id": "z4",
        "label": "Wired plant only"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Spectrum, survey, WLC view, cable tester."
  },
  {
    "id": 349,
    "qid": "CCNA-MOD2-149",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the AP that failed to join the controller.",
    "scenario": "<div class=\"scenario-text\"><p>AP-1 and AP-3 joined; AP-2 remains in discovery.</p></div>",
    "nodes": [
      {
        "id": "a1",
        "label": "AP-1\nJoined",
        "x": 20,
        "y": 40
      },
      {
        "id": "a2",
        "label": "AP-2\nDiscovery",
        "x": 50,
        "y": 40
      },
      {
        "id": "a3",
        "label": "AP-3\nJoined",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "a2"
    ],
    "explanation": "Discovery state means join has not completed."
  },
  {
    "id": 350,
    "qid": "CCNA-MOD2-150",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the band a 2.4-only IoT device must use.",
    "scenario": "<div class=\"scenario-text\"><p>Dual-band AP radios.</p></div>",
    "nodes": [
      {
        "id": "b1",
        "label": "2.4 GHz",
        "x": 30,
        "y": 40
      },
      {
        "id": "b2",
        "label": "5 GHz",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "b1"
    ],
    "explanation": "2.4-only clients require the 2.4 GHz radio."
  },
  {
    "id": 351,
    "qid": "CCNA-MOD2-151",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the location most likely to cause RF attenuation for the AP.",
    "scenario": "<div class=\"scenario-text\"><p>AP placement options on a floor plan.</p></div>",
    "nodes": [
      {
        "id": "loc1",
        "label": "Open hallway",
        "x": 25,
        "y": 40
      },
      {
        "id": "loc2",
        "label": "Behind elevator\ncore",
        "x": 55,
        "y": 40
      },
      {
        "id": "loc3",
        "label": "Ceiling center\noffice",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "loc2"
    ],
    "explanation": "Elevator cores and heavy metal severely attenuate RF."
  },
  {
    "id": 352,
    "qid": "CCNA-MOD2-152",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the SSID appropriate for a WPA3-Enterprise laptop.",
    "scenario": "<div class=\"scenario-text\"><p>SSIDs: Guest Open, Corp WPA3, Legacy WEP.</p></div>",
    "nodes": [
      {
        "id": "s1",
        "label": "Guest\nOpen",
        "x": 20,
        "y": 40
      },
      {
        "id": "s2",
        "label": "Corp\nWPA3",
        "x": 50,
        "y": 40
      },
      {
        "id": "s3",
        "label": "Legacy\nWEP",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "s2"
    ],
    "explanation": "WPA3-Enterprise clients use the WPA3 SSID."
  },
  {
    "id": 353,
    "qid": "CCNA-MOD2-153",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the path that carries CAPWAP from AP to WLC.",
    "scenario": "<div class=\"scenario-text\"><p>AP at edge, WLC in data center.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "CAPWAP",
        "x": 50,
        "y": 30
      },
      {
        "id": "p2",
        "label": "Local only",
        "x": 20,
        "y": 70
      },
      {
        "id": "p3",
        "label": "Client RF",
        "x": 80,
        "y": 70
      }
    ],
    "correct": [
      "p1"
    ],
    "explanation": "CAPWAP is the AP–WLC tunnel."
  },
  {
    "id": 354,
    "qid": "CCNA-MOD2-154",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the AP with likely co-channel interference from a neighbor on the same channel.",
    "scenario": "<div class=\"scenario-text\"><p>Two APs both on channel 36 close together.</p></div>",
    "nodes": [
      {
        "id": "x1",
        "label": "AP-A ch36",
        "x": 30,
        "y": 40
      },
      {
        "id": "x2",
        "label": "AP-B ch36",
        "x": 45,
        "y": 40
      },
      {
        "id": "x3",
        "label": "AP-C ch149",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "x1"
    ],
    "explanation": "Either co-channel neighbor is valid; AP-A is highlighted as one of the pair."
  },
  {
    "id": 355,
    "qid": "CCNA-MOD2-155",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines related to AP switchport access and description.",
    "scenario": "<div class=\"scenario-text\"><p>Access switch port toward AP.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "switchport mode access"
      },
      {
        "id": "l2",
        "label": "description AP-FLOOR2"
      },
      {
        "id": "l3",
        "label": "ip route 0.0.0.0 0.0.0.0 1.1.1.1"
      },
      {
        "id": "l4",
        "label": "router ospf 1"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Access mode and description for the AP port."
  },
  {
    "id": 356,
    "qid": "CCNA-MOD2-156",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that trunks multiple VLANs toward a hypervisor or multi-SSID AP path when required.",
    "scenario": "<div class=\"scenario-text\"><p>Port may carry several user VLANs.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "switchport mode trunk"
      },
      {
        "id": "l2",
        "label": "switchport mode access"
      },
      {
        "id": "l3",
        "label": "spanning-tree portfast"
      },
      {
        "id": "l4",
        "label": "power inline never"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "Trunk mode carries multiple VLANs."
  },
  {
    "id": 357,
    "qid": "CCNA-MOD2-157",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines appropriate for an AP edge port with PortFast.",
    "scenario": "<div class=\"scenario-text\"><p>Wired port to lightweight AP.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "switchport mode access"
      },
      {
        "id": "l2",
        "label": "spanning-tree portfast"
      },
      {
        "id": "l3",
        "label": "channel-group 1 mode on"
      },
      {
        "id": "l4",
        "label": "no cdp run"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Access + PortFast is common for single-VLAN AP ports."
  },
  {
    "id": 358,
    "qid": "CCNA-MOD2-158",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that disables PoE on a port.",
    "scenario": "<div class=\"scenario-text\"><p>Stop powering a device.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "power inline never"
      },
      {
        "id": "l2",
        "label": "power inline auto"
      },
      {
        "id": "l3",
        "label": "speed 1000"
      },
      {
        "id": "l4",
        "label": "duplex full"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "power inline never disables PoE."
  },
  {
    "id": 359,
    "qid": "CCNA-MOD2-159",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two DHCP-related lines that help AP discover a WLC.",
    "scenario": "<div class=\"scenario-text\"><p>DHCP pool options.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "option 43 hex ..."
      },
      {
        "id": "l2",
        "label": "dns-server 10.10.10.10"
      },
      {
        "id": "l3",
        "label": "spanning-tree mode rapid-pvst"
      },
      {
        "id": "l4",
        "label": "vlan 10"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Option 43 and DNS are common WLC discovery methods."
  },
  {
    "id": 360,
    "qid": "CCNA-MOD2-160",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that creates a wireless user VLAN.",
    "scenario": "<div class=\"scenario-text\"><p>Switch global config.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "vlan 40"
      },
      {
        "id": "l2",
        "label": "interface vlan 40"
      },
      {
        "id": "l3",
        "label": "ip helper-address 10.1.1.5"
      },
      {
        "id": "l4",
        "label": "name WIFI"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "vlan 40 creates the Layer-2 VLAN."
  },
  {
    "id": 361,
    "qid": "CCNA-MOD2-161",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "Which protocol is the IEEE standard for device discovery?",
    "scenario": "<div class=\"scenario-text\"><p>Multivendor environment needs neighbor discovery.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "CDP"
      },
      {
        "id": "b",
        "text": "LLDP"
      },
      {
        "id": "c",
        "text": "VTP"
      },
      {
        "id": "d",
        "text": "PAgP"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "LLDP is IEEE 802.1AB; CDP is Cisco proprietary."
  },
  {
    "id": 362,
    "qid": "CCNA-MOD2-162",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "Which command displays CDP neighbors on a Cisco switch?",
    "scenario": "<div class=\"scenario-text\"><p>Map directly connected Cisco devices.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "show cdp neighbors"
      },
      {
        "id": "b",
        "text": "show lldp neighbors"
      },
      {
        "id": "c",
        "text": "show vlan brief"
      },
      {
        "id": "d",
        "text": "show ip route"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "show cdp neighbors lists CDP-discovered devices."
  },
  {
    "id": 363,
    "qid": "CCNA-MOD2-163",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "What information does CDP typically advertise?",
    "scenario": "<div class=\"scenario-text\"><p>Interpret show cdp neighbors detail.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Device ID, platform, capabilities, local/remote interfaces"
      },
      {
        "id": "b",
        "text": "Only OSPF metrics"
      },
      {
        "id": "c",
        "text": "Only DHCP leases"
      },
      {
        "id": "d",
        "text": "Only wireless RSSI"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "CDP shares identity, platform, capabilities, and interface mapping."
  },
  {
    "id": 364,
    "qid": "CCNA-MOD2-164",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "single",
    "prompt": "Which command disables CDP globally on a Cisco device?",
    "scenario": "<div class=\"scenario-text\"><p>Security hardening where discovery is undesired.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "no cdp run"
      },
      {
        "id": "b",
        "text": "no lldp run"
      },
      {
        "id": "c",
        "text": "no spanning-tree"
      },
      {
        "id": "d",
        "text": "no ip routing"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "no cdp run disables CDP globally."
  },
  {
    "id": 365,
    "qid": "CCNA-MOD2-165",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE data elements commonly shown by CDP/LLDP.",
    "scenario": "<div class=\"scenario-text\"><p>Neighbor detail output.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Device identifier / hostname"
      },
      {
        "id": "b",
        "text": "Local and remote interfaces"
      },
      {
        "id": "c",
        "text": "Platform / capabilities"
      },
      {
        "id": "d",
        "text": "OSPF LSDB full dump"
      },
      {
        "id": "e",
        "text": "User passwords"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "ID, interfaces, and platform/capabilities are standard."
  },
  {
    "id": 366,
    "qid": "CCNA-MOD2-166",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO differences between CDP and LLDP.",
    "scenario": "<div class=\"scenario-text\"><p>Protocol comparison.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "CDP is Cisco proprietary"
      },
      {
        "id": "b",
        "text": "LLDP is IEEE standard"
      },
      {
        "id": "c",
        "text": "CDP works only on Frame Relay"
      },
      {
        "id": "d",
        "text": "LLDP cannot show interfaces"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "CDP proprietary; LLDP standards-based."
  },
  {
    "id": 367,
    "qid": "CCNA-MOD2-167",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE reasons to use discovery protocols.",
    "scenario": "<div class=\"scenario-text\"><p>Operational value.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Document cabling topology"
      },
      {
        "id": "b",
        "text": "Verify expected neighbors"
      },
      {
        "id": "c",
        "text": "Troubleshoot mispatched ports"
      },
      {
        "id": "d",
        "text": "Replace all routing protocols"
      },
      {
        "id": "e",
        "text": "Encrypt user data frames"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Topology documentation and verification."
  },
  {
    "id": 368,
    "qid": "CCNA-MOD2-168",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO interface-level controls for CDP.",
    "scenario": "<div class=\"scenario-text\"><p>Per-port hardening.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "cdp enable"
      },
      {
        "id": "b",
        "text": "no cdp enable"
      },
      {
        "id": "c",
        "text": "ip route 0.0.0.0"
      },
      {
        "id": "d",
        "text": "vlan 1"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Per-interface enable/disable of CDP."
  },
  {
    "id": 369,
    "qid": "CCNA-MOD2-169",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE security considerations for discovery protocols.",
    "scenario": "<div class=\"scenario-text\"><p>Limit information leakage.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Disable on untrusted edge ports if policy requires"
      },
      {
        "id": "b",
        "text": "Discovery data reveals device types"
      },
      {
        "id": "c",
        "text": "May aid attackers in mapping"
      },
      {
        "id": "d",
        "text": "Always transmit passwords in clear via CDP"
      },
      {
        "id": "e",
        "text": "Mandatory on every Internet-facing interface"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Edge disable policies; info disclosure risk."
  },
  {
    "id": 370,
    "qid": "CCNA-MOD2-170",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO show commands for LLDP on Cisco IOS.",
    "scenario": "<div class=\"scenario-text\"><p>LLDP verification.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "show lldp neighbors"
      },
      {
        "id": "b",
        "text": "show lldp neighbors detail"
      },
      {
        "id": "c",
        "text": "show cdp neighbors only always"
      },
      {
        "id": "d",
        "text": "show vlan brief only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "show lldp neighbors and detail."
  },
  {
    "id": 371,
    "qid": "CCNA-MOD2-171",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE capabilities bits/roles often advertised.",
    "scenario": "<div class=\"scenario-text\"><p>Interpret capabilities field.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Switch"
      },
      {
        "id": "b",
        "text": "Router"
      },
      {
        "id": "c",
        "text": "IGMP capable / phone etc."
      },
      {
        "id": "d",
        "text": "DHCP pool name only"
      },
      {
        "id": "e",
        "text": "STP priority only as capability name"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Device capability flags include switch, router, and others."
  },
  {
    "id": 372,
    "qid": "CCNA-MOD2-172",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO conditions where neighbors might not appear.",
    "scenario": "<div class=\"scenario-text\"><p>Empty neighbor table.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Protocol disabled on link"
      },
      {
        "id": "b",
        "text": "Layer-1 down"
      },
      {
        "id": "c",
        "text": "Perfect physical and enabled protocol"
      },
      {
        "id": "d",
        "text": "Matching native VLAN only without link"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Disabled protocol or down link prevents discovery."
  },
  {
    "id": 373,
    "qid": "CCNA-MOD2-173",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE troubleshooting steps when expected neighbor is missing.",
    "scenario": "<div class=\"scenario-text\"><p>CDP/LLDP gap.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Check link up"
      },
      {
        "id": "b",
        "text": "Confirm cdp/lldp enabled both sides"
      },
      {
        "id": "c",
        "text": "show cdp/lldp neighbors"
      },
      {
        "id": "d",
        "text": "Change OSPF process ID randomly"
      },
      {
        "id": "e",
        "text": "Delete all VLANs"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Link, enablement, and show commands."
  },
  {
    "id": 374,
    "qid": "CCNA-MOD2-174",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO benefits of LLDP in multivendor campus.",
    "scenario": "<div class=\"scenario-text\"><p>Mixed switch environment.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Standard interoperability"
      },
      {
        "id": "b",
        "text": "Neighbor info across vendors"
      },
      {
        "id": "c",
        "text": "Replaces need for IP addressing"
      },
      {
        "id": "d",
        "text": "Forces PAgP on"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "LLDP works across vendors supporting 802.1AB."
  },
  {
    "id": 375,
    "qid": "CCNA-MOD2-175",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select THREE fields useful from show cdp neighbors detail.",
    "scenario": "<div class=\"scenario-text\"><p>Deep neighbor view.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "IP address (if advertised)"
      },
      {
        "id": "b",
        "text": "IOS version / platform"
      },
      {
        "id": "c",
        "text": "Duplex and interface IDs"
      },
      {
        "id": "d",
        "text": "User AD password"
      },
      {
        "id": "e",
        "text": "Wireless PSK"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Management IP, version/platform, interfaces."
  },
  {
    "id": 376,
    "qid": "CCNA-MOD2-176",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "multiselect",
    "prompt": "Select TWO global enable commands.",
    "scenario": "<div class=\"scenario-text\"><p>Turn discovery on.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "cdp run"
      },
      {
        "id": "b",
        "text": "lldp run"
      },
      {
        "id": "c",
        "text": "no cdp run as enable"
      },
      {
        "id": "d",
        "text": "vlan 1 name default as discovery"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "cdp run and lldp run enable the protocols globally."
  },
  {
    "id": 377,
    "qid": "CCNA-MOD2-177",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match protocol to ownership.",
    "scenario": "<div class=\"scenario-text\"><p>Discovery protocol choice.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "CDP"
      },
      {
        "id": "i2",
        "text": "LLDP"
      },
      {
        "id": "i3",
        "text": "VTP"
      },
      {
        "id": "i4",
        "text": "DTP"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Cisco proprietary discovery"
      },
      {
        "id": "z2",
        "label": "IEEE discovery"
      },
      {
        "id": "z3",
        "label": "VLAN distribution"
      },
      {
        "id": "z4",
        "label": "Trunk negotiation"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "CDP, LLDP, VTP, DTP roles."
  },
  {
    "id": 378,
    "qid": "CCNA-MOD2-178",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match command to function.",
    "scenario": "<div class=\"scenario-text\"><p>Discovery CLI.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "show cdp neighbors"
      },
      {
        "id": "i2",
        "text": "show cdp neighbors detail"
      },
      {
        "id": "i3",
        "text": "no cdp enable"
      },
      {
        "id": "i4",
        "text": "cdp timer"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Summary neighbor table"
      },
      {
        "id": "z2",
        "label": "Detailed neighbor info"
      },
      {
        "id": "z3",
        "label": "Disable on interface"
      },
      {
        "id": "z4",
        "label": "Adjust advertisement interval"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Summary, detail, interface disable, timer."
  },
  {
    "id": 379,
    "qid": "CCNA-MOD2-179",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Order steps to map a closet with CDP.",
    "scenario": "<div class=\"scenario-text\"><p>Document patching.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Ensure CDP enabled"
      },
      {
        "id": "c2",
        "text": "show cdp neighbors"
      },
      {
        "id": "c3",
        "text": "Record remote device and ports"
      },
      {
        "id": "c4",
        "text": "Update documentation"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Enable → show → record → document."
  },
  {
    "id": 380,
    "qid": "CCNA-MOD2-180",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match security action to discovery risk.",
    "scenario": "<div class=\"scenario-text\"><p>Harden edges.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "no cdp enable on access"
      },
      {
        "id": "i2",
        "text": "lldp run only where needed"
      },
      {
        "id": "i3",
        "text": "Monitor neighbor changes"
      },
      {
        "id": "i4",
        "text": "Advertise on Internet edge freely"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Reduce endpoint info leak"
      },
      {
        "id": "z2",
        "label": "Limit LLDP scope"
      },
      {
        "id": "z3",
        "label": "Detect topology surprises"
      },
      {
        "id": "z4",
        "label": "Increases exposure"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Edge disable, scoped LLDP, monitoring, avoid open edge."
  },
  {
    "id": 381,
    "qid": "CCNA-MOD2-181",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match output field to meaning.",
    "scenario": "<div class=\"scenario-text\"><p>Read neighbor tables.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Device ID"
      },
      {
        "id": "i2",
        "text": "Local Intrfce"
      },
      {
        "id": "i3",
        "text": "Capability"
      },
      {
        "id": "i4",
        "text": "Platform"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Neighbor identity"
      },
      {
        "id": "z2",
        "label": "This device's port"
      },
      {
        "id": "z3",
        "label": "Neighbor role flags"
      },
      {
        "id": "z4",
        "label": "Neighbor hardware/software family"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Device ID, local interface, capability, platform."
  },
  {
    "id": 382,
    "qid": "CCNA-MOD2-182",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Order troubleshooting missing LLDP neighbor.",
    "scenario": "<div class=\"scenario-text\"><p>Expected peer not listed.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Verify link up"
      },
      {
        "id": "c2",
        "text": "Check lldp run / interface allow"
      },
      {
        "id": "c3",
        "text": "show lldp neighbors"
      },
      {
        "id": "c4",
        "text": "Compare with CDP if Cisco peer"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Link → enable → show → compare."
  },
  {
    "id": 383,
    "qid": "CCNA-MOD2-183",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match discovery use case to protocol preference.",
    "scenario": "<div class=\"scenario-text\"><p>When to use what.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Cisco-only closet"
      },
      {
        "id": "i2",
        "text": "Multivendor"
      },
      {
        "id": "i3",
        "text": "Disable on public ports"
      },
      {
        "id": "i4",
        "text": "Phone discovery (often)"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "CDP sufficient"
      },
      {
        "id": "z2",
        "label": "LLDP preferred/additionally"
      },
      {
        "id": "z3",
        "label": "no cdp/lldp enable"
      },
      {
        "id": "z4",
        "label": "CDP/LLDP for voice VLAN features"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Cisco-only, multivendor, public, phones."
  },
  {
    "id": 384,
    "qid": "CCNA-MOD2-184",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match timer concept to protocol knobs.",
    "scenario": "<div class=\"scenario-text\"><p>Tuning advertisements.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "cdp timer"
      },
      {
        "id": "i2",
        "text": "cdp holdtime"
      },
      {
        "id": "i3",
        "text": "lldp timer"
      },
      {
        "id": "i4",
        "text": "lldp holdtime"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "CDP send interval"
      },
      {
        "id": "z2",
        "label": "CDP neighbor expiry"
      },
      {
        "id": "z3",
        "label": "LLDP send interval"
      },
      {
        "id": "z4",
        "label": "LLDP neighbor expiry"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Timer vs holdtime for CDP and LLDP."
  },
  {
    "id": 385,
    "qid": "CCNA-MOD2-185",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match capability letter/role (conceptual) to device type.",
    "scenario": "<div class=\"scenario-text\"><p>Interpret capability codes.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "S"
      },
      {
        "id": "i2",
        "text": "R"
      },
      {
        "id": "i3",
        "text": "H"
      },
      {
        "id": "i4",
        "text": "I"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Switch"
      },
      {
        "id": "z2",
        "label": "Router"
      },
      {
        "id": "z3",
        "label": "Host"
      },
      {
        "id": "z4",
        "label": "IGMP related"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Common capability associations."
  },
  {
    "id": 386,
    "qid": "CCNA-MOD2-186",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Order documentation fields from a CDP detail capture.",
    "scenario": "<div class=\"scenario-text\"><p>Build a cable map entry.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Local switch and port"
      },
      {
        "id": "c2",
        "text": "Remote device ID"
      },
      {
        "id": "c3",
        "text": "Remote port"
      },
      {
        "id": "c4",
        "text": "Platform and IP if present"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Local → remote ID → remote port → platform/IP."
  },
  {
    "id": 387,
    "qid": "CCNA-MOD2-187",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match problem to discovery clue.",
    "scenario": "<div class=\"scenario-text\"><p>Using neighbors operationally.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Unexpected phone on data port"
      },
      {
        "id": "i2",
        "text": "Wrong remote hostname on uplink"
      },
      {
        "id": "i3",
        "text": "No neighbors on uplink"
      },
      {
        "id": "i4",
        "text": "Neighbor shows half duplex"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Mispatch or voice config"
      },
      {
        "id": "z2",
        "label": "Cabling to wrong device"
      },
      {
        "id": "z3",
        "label": "Link/protocol issue"
      },
      {
        "id": "z4",
        "label": "Duplex mismatch evidence"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Map discovery anomalies to causes."
  },
  {
    "id": 388,
    "qid": "CCNA-MOD2-188",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "dragdrop",
    "prompt": "Match global vs interface control.",
    "scenario": "<div class=\"scenario-text\"><p>Where commands apply.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "cdp run"
      },
      {
        "id": "i2",
        "text": "no cdp run"
      },
      {
        "id": "i3",
        "text": "cdp enable"
      },
      {
        "id": "i4",
        "text": "no cdp enable"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Global enable"
      },
      {
        "id": "z2",
        "label": "Global disable"
      },
      {
        "id": "z3",
        "label": "Interface enable"
      },
      {
        "id": "z4",
        "label": "Interface disable"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Global vs interface CDP controls."
  },
  {
    "id": 389,
    "qid": "CCNA-MOD2-189",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the interface where the CDP neighbor SW2 is connected.",
    "scenario": "<div class=\"scenario-text\"><p>show cdp neighbors lists SW2 on Gi0/24.</p></div>",
    "nodes": [
      {
        "id": "if1",
        "label": "Gi0/1\nPC",
        "x": 25,
        "y": 40
      },
      {
        "id": "if2",
        "label": "Gi0/24\nSW2",
        "x": 55,
        "y": 40
      },
      {
        "id": "if3",
        "label": "Gi0/2\nPhone",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "if2"
    ],
    "explanation": "Neighbor SW2 appears on Gi0/24."
  },
  {
    "id": 390,
    "qid": "CCNA-MOD2-190",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the protocol to use for multivendor discovery.",
    "scenario": "<div class=\"scenario-text\"><p>Cisco and non-Cisco switches intermixed.</p></div>",
    "nodes": [
      {
        "id": "pr1",
        "label": "CDP only",
        "x": 30,
        "y": 40
      },
      {
        "id": "pr2",
        "label": "LLDP",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "pr2"
    ],
    "explanation": "LLDP is the standards-based choice for multivendor."
  },
  {
    "id": 391,
    "qid": "CCNA-MOD2-191",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the port that should have discovery disabled per edge policy.",
    "scenario": "<div class=\"scenario-text\"><p>Uplink needs CDP; public access port should not advertise.</p></div>",
    "nodes": [
      {
        "id": "e1",
        "label": "Gi0/1\nPublic PC",
        "x": 30,
        "y": 40
      },
      {
        "id": "e2",
        "label": "Gi0/24\nUplink",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "e1"
    ],
    "explanation": "Untrusted edge ports often disable CDP/LLDP."
  },
  {
    "id": 392,
    "qid": "CCNA-MOD2-192",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the device that is a Cisco IP Phone based on capability labels.",
    "scenario": "<div class=\"scenario-text\"><p>Neighbors: SW-Core, Phone, Router.</p></div>",
    "nodes": [
      {
        "id": "d1",
        "label": "SW-Core\nS",
        "x": 20,
        "y": 40
      },
      {
        "id": "d2",
        "label": "IP-Phone\nH T",
        "x": 50,
        "y": 40
      },
      {
        "id": "d3",
        "label": "R1\nR",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "d2"
    ],
    "explanation": "Phone capabilities typically include host/phone indicators."
  },
  {
    "id": 393,
    "qid": "CCNA-MOD2-193",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the link with no discovery neighbors because it is down.",
    "scenario": "<div class=\"scenario-text\"><p>Gi0/5 is down/down; Gi0/6 is up with a neighbor.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "Gi0/5\ndown",
        "x": 30,
        "y": 40
      },
      {
        "id": "l2",
        "label": "Gi0/6\nup+CDP",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "l1"
    ],
    "explanation": "Down links cannot form discovery adjacencies."
  },
  {
    "id": 394,
    "qid": "CCNA-MOD2-194",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "prompt": "Click the switch that is the CDP neighbor of SW-Access on its uplink.",
    "scenario": "<div class=\"scenario-text\"><p>Topology: SW-Access ↔ SW-Dist ↔ Core.</p></div>",
    "nodes": [
      {
        "id": "n1",
        "label": "SW-Dist",
        "x": 50,
        "y": 30
      },
      {
        "id": "n2",
        "label": "Core",
        "x": 50,
        "y": 70
      },
      {
        "id": "n3",
        "label": "PC",
        "x": 20,
        "y": 50
      }
    ],
    "correct": [
      "n1"
    ],
    "explanation": "Direct CDP neighbor on the uplink is SW-Dist."
  },
  {
    "id": 395,
    "qid": "CCNA-MOD2-195",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that disable CDP on an interface.",
    "scenario": "<div class=\"scenario-text\"><p>Edge port hardening.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "interface GigabitEthernet0/10"
      },
      {
        "id": "l2",
        "label": "no cdp enable"
      },
      {
        "id": "l3",
        "label": "cdp run"
      },
      {
        "id": "l4",
        "label": "lldp run"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Under the interface, no cdp enable disables CDP."
  },
  {
    "id": 396,
    "qid": "CCNA-MOD2-196",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that enables LLDP globally.",
    "scenario": "<div class=\"scenario-text\"><p>Turn on IEEE discovery.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "lldp run"
      },
      {
        "id": "l2",
        "label": "cdp run"
      },
      {
        "id": "l3",
        "label": "no lldp run"
      },
      {
        "id": "l4",
        "label": "vtp mode transparent"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "lldp run enables LLDP globally."
  },
  {
    "id": 397,
    "qid": "CCNA-MOD2-197",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that disable CDP globally.",
    "scenario": "<div class=\"scenario-text\"><p>Remove CDP from the device entirely.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "no cdp run"
      },
      {
        "id": "l2",
        "label": "! CDP disabled globally"
      },
      {
        "id": "l3",
        "label": "cdp enable"
      },
      {
        "id": "l4",
        "label": "lldp transmit"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "no cdp run is the global disable (comment optional context)."
  },
  {
    "id": 398,
    "qid": "CCNA-MOD2-198",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that adjusts CDP advertisement interval to 30 seconds.",
    "scenario": "<div class=\"scenario-text\"><p>Tune CDP timer.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "cdp timer 30"
      },
      {
        "id": "l2",
        "label": "cdp holdtime 90"
      },
      {
        "id": "l3",
        "label": "lldp timer 30"
      },
      {
        "id": "l4",
        "label": "spanning-tree mode rapid-pvst"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "cdp timer sets the send interval."
  },
  {
    "id": 399,
    "qid": "CCNA-MOD2-199",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines related to enabling LLDP transmit/receive on an interface (concept).",
    "scenario": "<div class=\"scenario-text\"><p>Per-interface LLDP control.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "lldp transmit"
      },
      {
        "id": "l2",
        "label": "lldp receive"
      },
      {
        "id": "l3",
        "label": "no cdp run"
      },
      {
        "id": "l4",
        "label": "switchport mode access"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "lldp transmit and lldp receive control per-interface LLDP."
  },
  {
    "id": 400,
    "qid": "CCNA-MOD2-200",
    "moduleId": "mod2",
    "module": "Switching and Network Access",
    "domain": "Switching and Network Access",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that sets CDP holdtime to 120 seconds.",
    "scenario": "<div class=\"scenario-text\"><p>Neighbor expiry tuning.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "cdp holdtime 120"
      },
      {
        "id": "l2",
        "label": "cdp timer 60"
      },
      {
        "id": "l3",
        "label": "lldp holdtime 120"
      },
      {
        "id": "l4",
        "label": "clock timezone UTC 0"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "cdp holdtime controls how long a neighbor entry is kept."
  },
  {
    "id": 401,
    "qid": "CCNA-MOD3-001",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "Which route will a router select when forwarding a packet destined for 10.1.1.35?",
    "scenario": "<div class=\"scenario-text\"><p>The routing table contains 10.1.1.0/24 [110/20], 10.1.1.32/27 [90/307200], 10.1.1.32/28 [120/4], and 0.0.0.0/0 [1/0].</p></div>",
    "options": [
      {
        "id": "a",
        "text": "10.1.1.0/24 [110/20]"
      },
      {
        "id": "b",
        "text": "10.1.1.32/27 [90/307200]"
      },
      {
        "id": "c",
        "text": "10.1.1.32/28 [120/4]"
      },
      {
        "id": "d",
        "text": "0.0.0.0/0 [1/0]"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Longest prefix match wins: /28 is more specific than /27 or /24, regardless of AD or metric."
  },
  {
    "id": 402,
    "qid": "CCNA-MOD3-002",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "What is the default administrative distance of OSPF?",
    "scenario": "<div class=\"scenario-text\"><p>Compare route sources during preference selection.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "90"
      },
      {
        "id": "b",
        "text": "100"
      },
      {
        "id": "c",
        "text": "110"
      },
      {
        "id": "d",
        "text": "120"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "OSPF default AD is 110; EIGRP internal is 90; RIP is 120; static is 1."
  },
  {
    "id": 403,
    "qid": "CCNA-MOD3-003",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "What does a route with code 'C' indicate in show ip route?",
    "scenario": "<div class=\"scenario-text\"><p>Interpret routing table codes.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Static route"
      },
      {
        "id": "b",
        "text": "Directly connected network"
      },
      {
        "id": "c",
        "text": "OSPF route"
      },
      {
        "id": "d",
        "text": "EIGRP route"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "C = connected; S = static; O = OSPF; D = EIGRP."
  },
  {
    "id": 404,
    "qid": "CCNA-MOD3-004",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "Which value is used as the primary tie-breaker when two routes have equal prefix length?",
    "scenario": "<div class=\"scenario-text\"><p>Multiple paths to the same prefix with different sources.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Administrative distance"
      },
      {
        "id": "b",
        "text": "Metric only always"
      },
      {
        "id": "c",
        "text": "Interface bandwidth only"
      },
      {
        "id": "d",
        "text": "Hostname alphabetically"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "After longest match, lower administrative distance is preferred."
  },
  {
    "id": 405,
    "qid": "CCNA-MOD3-005",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE components evaluated during IPv4 route lookup.",
    "scenario": "<div class=\"scenario-text\"><p>Packet forwarding decision process.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Longest prefix match"
      },
      {
        "id": "b",
        "text": "Administrative distance"
      },
      {
        "id": "c",
        "text": "Metric (when AD ties)"
      },
      {
        "id": "d",
        "text": "VLAN ID on the packet only"
      },
      {
        "id": "e",
        "text": "CDP neighbor count"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Longest match first, then AD, then metric within the same protocol."
  },
  {
    "id": 406,
    "qid": "CCNA-MOD3-006",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO characteristics of a gateway of last resort.",
    "scenario": "<div class=\"scenario-text\"><p>Default routing behavior.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Matches 0.0.0.0/0"
      },
      {
        "id": "b",
        "text": "Used when no more specific route exists"
      },
      {
        "id": "c",
        "text": "Always preferred over /32 host routes"
      },
      {
        "id": "d",
        "text": "Requires OSPF only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Default route is 0.0.0.0/0 and is last resort after specific matches fail."
  },
  {
    "id": 407,
    "qid": "CCNA-MOD3-007",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE default administrative distances.",
    "scenario": "<div class=\"scenario-text\"><p>Route source preference.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Connected = 0"
      },
      {
        "id": "b",
        "text": "Static = 1"
      },
      {
        "id": "c",
        "text": "OSPF = 110"
      },
      {
        "id": "d",
        "text": "RIP = 5"
      },
      {
        "id": "e",
        "text": "EIGRP internal = 255"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Connected 0, static 1, OSPF 110 are correct defaults."
  },
  {
    "id": 408,
    "qid": "CCNA-MOD3-008",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO meanings of 'S*' in show ip route.",
    "scenario": "<div class=\"scenario-text\"><p>Default static notation.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Static route"
      },
      {
        "id": "b",
        "text": "Candidate default (star)"
      },
      {
        "id": "c",
        "text": "OSPF external"
      },
      {
        "id": "d",
        "text": "Connected secondary"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "S = static; * marks candidate default."
  },
  {
    "id": 409,
    "qid": "CCNA-MOD3-009",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE reasons a route may be in the table but not used for a destination.",
    "scenario": "<div class=\"scenario-text\"><p>Forwarding vs table presence.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Longer prefix exists"
      },
      {
        "id": "b",
        "text": "Better AD route exists for same prefix"
      },
      {
        "id": "c",
        "text": "Next-hop is unreachable (depending on tracking)"
      },
      {
        "id": "d",
        "text": "The route code is C"
      },
      {
        "id": "e",
        "text": "Interface is up/up with connected"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "More specific prefixes, better AD, or invalid next-hop can prevent use."
  },
  {
    "id": 410,
    "qid": "CCNA-MOD3-010",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO differences between routing table and CEF FIB (conceptually).",
    "scenario": "<div class=\"scenario-text\"><p>Forwarding architecture.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "RIB holds all learned routes"
      },
      {
        "id": "b",
        "text": "FIB is optimized forwarding structure"
      },
      {
        "id": "c",
        "text": "FIB replaces need for any RIB always"
      },
      {
        "id": "d",
        "text": "RIB only stores MAC addresses"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "RIB is control-plane table; FIB/CEF is optimized data-plane."
  },
  {
    "id": 411,
    "qid": "CCNA-MOD3-011",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE valid route sources on a Cisco router.",
    "scenario": "<div class=\"scenario-text\"><p>Codes in show ip route.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Connected"
      },
      {
        "id": "b",
        "text": "Static"
      },
      {
        "id": "c",
        "text": "OSPF"
      },
      {
        "id": "d",
        "text": "Spanning Tree"
      },
      {
        "id": "e",
        "text": "VTP"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Connected, static, and dynamic protocols populate the RIB."
  },
  {
    "id": 412,
    "qid": "CCNA-MOD3-012",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO effects of equal-cost multipath (ECMP).",
    "scenario": "<div class=\"scenario-text\"><p>Multiple same-prefix routes.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Load sharing across equal metric paths"
      },
      {
        "id": "b",
        "text": "Requires same AD and metric from same protocol typically"
      },
      {
        "id": "c",
        "text": "Forces only one path always"
      },
      {
        "id": "d",
        "text": "Disables CEF"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "ECMP shares traffic across equal-cost paths."
  },
  {
    "id": 413,
    "qid": "CCNA-MOD3-013",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE pieces of information in a typical routing table entry.",
    "scenario": "<div class=\"scenario-text\"><p>Read show ip route output.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Prefix and mask"
      },
      {
        "id": "b",
        "text": "AD and metric"
      },
      {
        "id": "c",
        "text": "Next-hop and/or exit interface"
      },
      {
        "id": "d",
        "text": "STP port role"
      },
      {
        "id": "e",
        "text": "DHCP lease time"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Prefix, AD/metric, and forwarding info are core."
  },
  {
    "id": 414,
    "qid": "CCNA-MOD3-014",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO true statements about longest prefix match.",
    "scenario": "<div class=\"scenario-text\"><p>10.1.1.5 vs competing routes.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "/32 beats /24 for that host"
      },
      {
        "id": "b",
        "text": "AD is considered only after prefix length"
      },
      {
        "id": "c",
        "text": "AD always overrides prefix length"
      },
      {
        "id": "d",
        "text": "Metric always overrides prefix length"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Most specific prefix wins first; AD is secondary."
  },
  {
    "id": 415,
    "qid": "CCNA-MOD3-015",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE causes of a packet being dropped after route lookup.",
    "scenario": "<div class=\"scenario-text\"><p>Unsuccessful forwarding.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "No matching route including default"
      },
      {
        "id": "b",
        "text": "Null0 discard route"
      },
      {
        "id": "c",
        "text": "Unresolvable next-hop recursively"
      },
      {
        "id": "d",
        "text": "Valid connected route exists"
      },
      {
        "id": "e",
        "text": "CEF adjacency complete"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "No route, Null0, or unresolved next-hop leads to drop."
  },
  {
    "id": 416,
    "qid": "CCNA-MOD3-016",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO roles of administrative distance.",
    "scenario": "<div class=\"scenario-text\"><p>Preference between protocols.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Ranks trustworthiness of route sources"
      },
      {
        "id": "b",
        "text": "Lower AD is preferred for same prefix"
      },
      {
        "id": "c",
        "text": "Replaces metric within OSPF"
      },
      {
        "id": "d",
        "text": "Sets OSPF cost automatically"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "AD compares sources; lower wins for identical prefixes."
  },
  {
    "id": 417,
    "qid": "CCNA-MOD3-017",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match Administrative Distance to default source.",
    "scenario": "<div class=\"scenario-text\"><p>Route preference values.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Static"
      },
      {
        "id": "i2",
        "text": "Internal EIGRP"
      },
      {
        "id": "i3",
        "text": "OSPF"
      },
      {
        "id": "i4",
        "text": "RIP"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "AD 1"
      },
      {
        "id": "z2",
        "label": "AD 90"
      },
      {
        "id": "z3",
        "label": "AD 110"
      },
      {
        "id": "z4",
        "label": "AD 120"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Static 1, EIGRP 90, OSPF 110, RIP 120."
  },
  {
    "id": 418,
    "qid": "CCNA-MOD3-018",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match routing table code to meaning.",
    "scenario": "<div class=\"scenario-text\"><p>show ip route legend.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "C"
      },
      {
        "id": "i2",
        "text": "S"
      },
      {
        "id": "i3",
        "text": "O"
      },
      {
        "id": "i4",
        "text": "D"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Connected"
      },
      {
        "id": "z2",
        "label": "Static"
      },
      {
        "id": "z3",
        "label": "OSPF"
      },
      {
        "id": "z4",
        "label": "EIGRP"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "C connected, S static, O OSPF, D EIGRP."
  },
  {
    "id": 419,
    "qid": "CCNA-MOD3-019",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Order the route selection process.",
    "scenario": "<div class=\"scenario-text\"><p>How a router chooses a path.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Longest prefix match"
      },
      {
        "id": "c2",
        "text": "Lowest administrative distance"
      },
      {
        "id": "c3",
        "text": "Lowest metric (same protocol)"
      },
      {
        "id": "c4",
        "text": "Load share if equal cost"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Prefix → AD → metric → ECMP."
  },
  {
    "id": 420,
    "qid": "CCNA-MOD3-020",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match route type to typical AD.",
    "scenario": "<div class=\"scenario-text\"><p>Source trust ranking.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Connected"
      },
      {
        "id": "i2",
        "text": "eBGP"
      },
      {
        "id": "i3",
        "text": "Internal EIGRP"
      },
      {
        "id": "i4",
        "text": "Unknown / infinite"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "0"
      },
      {
        "id": "z2",
        "label": "20"
      },
      {
        "id": "z3",
        "label": "90"
      },
      {
        "id": "z4",
        "label": "255"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Connected 0, eBGP 20, EIGRP 90, 255 unusable."
  },
  {
    "id": 421,
    "qid": "CCNA-MOD3-021",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match forwarding outcome to condition.",
    "scenario": "<div class=\"scenario-text\"><p>Lookup results.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Glean / connected"
      },
      {
        "id": "i2",
        "text": "Next-hop recursive"
      },
      {
        "id": "i3",
        "text": "Null0"
      },
      {
        "id": "i4",
        "text": "No route"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "ARP for destination on interface"
      },
      {
        "id": "z2",
        "label": "Resolve next-hop then forward"
      },
      {
        "id": "z3",
        "label": "Silently discard"
      },
      {
        "id": "z4",
        "label": "Drop / ICMP unreachable"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Connected, recursive, Null0, no route."
  },
  {
    "id": 422,
    "qid": "CCNA-MOD3-022",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Order troubleshooting when wrong path is used.",
    "scenario": "<div class=\"scenario-text\"><p>Unexpected next-hop.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "show ip route <dest>"
      },
      {
        "id": "c2",
        "text": "Compare prefix lengths"
      },
      {
        "id": "c3",
        "text": "Compare AD values"
      },
      {
        "id": "c4",
        "text": "Inspect metric and next-hop reachability"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Show route → prefix → AD → metric/next-hop."
  },
  {
    "id": 423,
    "qid": "CCNA-MOD3-023",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match term to definition.",
    "scenario": "<div class=\"scenario-text\"><p>Routing vocabulary.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "RIB"
      },
      {
        "id": "i2",
        "text": "FIB"
      },
      {
        "id": "i3",
        "text": "Metric"
      },
      {
        "id": "i4",
        "text": "AD"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Routing Information Base"
      },
      {
        "id": "z2",
        "label": "Forwarding Information Base"
      },
      {
        "id": "z3",
        "label": "Protocol cost to destination"
      },
      {
        "id": "z4",
        "label": "Source preference value"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "RIB, FIB, metric, AD."
  },
  {
    "id": 424,
    "qid": "CCNA-MOD3-024",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match default route presentation to meaning.",
    "scenario": "<div class=\"scenario-text\"><p>0.0.0.0/0 variants.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "S*"
      },
      {
        "id": "i2",
        "text": "O*E2"
      },
      {
        "id": "i3",
        "text": "Gateway of last resort is ..."
      },
      {
        "id": "i4",
        "text": "Candidate default"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Static default"
      },
      {
        "id": "z2",
        "label": "OSPF external default"
      },
      {
        "id": "z3",
        "label": "Active default in use"
      },
      {
        "id": "z4",
        "label": "Eligible to be default"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Static default, OSPF default, active gateway, candidate."
  },
  {
    "id": 425,
    "qid": "CCNA-MOD3-025",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Order CEF-related verification (high level).",
    "scenario": "<div class=\"scenario-text\"><p>Data plane checks.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Confirm route in RIB"
      },
      {
        "id": "c2",
        "text": "Check CEF entry for prefix"
      },
      {
        "id": "c3",
        "text": "Verify adjacency for next-hop"
      },
      {
        "id": "c4",
        "text": "Test forwarding with ping/traceroute"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "RIB → CEF → adjacency → test."
  },
  {
    "id": 426,
    "qid": "CCNA-MOD3-026",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match equal-prefix conflict resolution.",
    "scenario": "<div class=\"scenario-text\"><p>Same /24 from two sources.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "OSPF vs static AD 1"
      },
      {
        "id": "i2",
        "text": "Two OSPF paths cost 10 vs 20"
      },
      {
        "id": "i3",
        "text": "Two OSPF paths both cost 10"
      },
      {
        "id": "i4",
        "text": "Connected vs anything"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Static wins (lower AD)"
      },
      {
        "id": "z2",
        "label": "Lower cost wins"
      },
      {
        "id": "z3",
        "label": "ECMP possible"
      },
      {
        "id": "z4",
        "label": "Connected wins (AD 0)"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "AD, metric, ECMP, connected."
  },
  {
    "id": 427,
    "qid": "CCNA-MOD3-027",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match packet destination to selected prefix class.",
    "scenario": "<div class=\"scenario-text\"><p>Conceptual longest match.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Host route /32"
      },
      {
        "id": "i2",
        "text": "Subnet /24"
      },
      {
        "id": "i3",
        "text": "Summary /16"
      },
      {
        "id": "i4",
        "text": "Default /0"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Most specific if present"
      },
      {
        "id": "z2",
        "label": "Typical LAN match"
      },
      {
        "id": "z3",
        "label": "Less specific aggregate"
      },
      {
        "id": "z4",
        "label": "Last resort"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "/32 > /24 > /16 > /0 preference order by length."
  },
  {
    "id": 428,
    "qid": "CCNA-MOD3-028",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match problem to RIB symptom.",
    "scenario": "<div class=\"scenario-text\"><p>Operational clues.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Wrong next-hop in table"
      },
      {
        "id": "i2",
        "text": "Route missing"
      },
      {
        "id": "i3",
        "text": "Route flapping"
      },
      {
        "id": "i4",
        "text": "Null0 for destination"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Policy or redistribution issue"
      },
      {
        "id": "z2",
        "label": "Protocol/adjacency failure"
      },
      {
        "id": "z3",
        "label": "Unstable link or neighbor"
      },
      {
        "id": "z4",
        "label": "Intentional discard / summary"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Map symptoms to likely causes."
  },
  {
    "id": 429,
    "qid": "CCNA-MOD3-029",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the route entry that will forward packets to 10.1.1.35.",
    "scenario": "<div class=\"scenario-text\"><p>Table shows /24, /27, /28 covering 10.1.1.0 space.</p></div>",
    "nodes": [
      {
        "id": "r1",
        "label": "10.1.1.0/24",
        "x": 20,
        "y": 40
      },
      {
        "id": "r2",
        "label": "10.1.1.32/27",
        "x": 50,
        "y": 40
      },
      {
        "id": "r3",
        "label": "10.1.1.32/28",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "r3"
    ],
    "explanation": "Longest match /28 covers 10.1.1.32–47 including .35."
  },
  {
    "id": 430,
    "qid": "CCNA-MOD3-030",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the route source with the best (lowest) default AD.",
    "scenario": "<div class=\"scenario-text\"><p>Sources: Static AD1, OSPF AD110, RIP AD120.</p></div>",
    "nodes": [
      {
        "id": "s1",
        "label": "Static\nAD 1",
        "x": 25,
        "y": 40
      },
      {
        "id": "s2",
        "label": "OSPF\nAD 110",
        "x": 55,
        "y": 40
      },
      {
        "id": "s3",
        "label": "RIP\nAD 120",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "s1"
    ],
    "explanation": "Static AD 1 is best among these."
  },
  {
    "id": 431,
    "qid": "CCNA-MOD3-031",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the gateway of last resort.",
    "scenario": "<div class=\"scenario-text\"><p>Routing table highlights default and specific routes.</p></div>",
    "nodes": [
      {
        "id": "g1",
        "label": "0.0.0.0/0\nvia 203.0.113.1",
        "x": 30,
        "y": 40
      },
      {
        "id": "g2",
        "label": "10.0.0.0/8\nvia 10.1.1.2",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "g1"
    ],
    "explanation": "0.0.0.0/0 is the gateway of last resort."
  },
  {
    "id": 432,
    "qid": "CCNA-MOD3-032",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the directly connected network.",
    "scenario": "<div class=\"scenario-text\"><p>Codes C, S, O shown on three prefixes.</p></div>",
    "nodes": [
      {
        "id": "c1",
        "label": "C 192.168.1.0/24",
        "x": 25,
        "y": 40
      },
      {
        "id": "c2",
        "label": "S 10.0.0.0/8",
        "x": 55,
        "y": 40
      },
      {
        "id": "c3",
        "label": "O 172.16.0.0/16",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "c1"
    ],
    "explanation": "C indicates connected."
  },
  {
    "id": 433,
    "qid": "CCNA-MOD3-033",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the next-hop that should be used for ECMP if both costs are equal.",
    "scenario": "<div class=\"scenario-text\"><p>Two equal-cost OSPF paths listed.</p></div>",
    "nodes": [
      {
        "id": "n1",
        "label": "via 10.0.0.2\ncost 10",
        "x": 30,
        "y": 40
      },
      {
        "id": "n2",
        "label": "via 10.0.0.6\ncost 10",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "n1"
    ],
    "explanation": "Either equal-cost next-hop is valid; selecting the first is acceptable for ECMP awareness."
  },
  {
    "id": 434,
    "qid": "CCNA-MOD3-034",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the route that is a discard (Null0) summary.",
    "scenario": "<div class=\"scenario-text\"><p>Prevention of loops with summary.</p></div>",
    "nodes": [
      {
        "id": "d1",
        "label": "10.0.0.0/8\nvia Null0",
        "x": 30,
        "y": 40
      },
      {
        "id": "d2",
        "label": "10.1.1.0/24\nvia 10.0.0.2",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "d1"
    ],
    "explanation": "Null0 indicates intentional discard."
  },
  {
    "id": 435,
    "qid": "CCNA-MOD3-035",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that installs a static default route via next-hop.",
    "scenario": "<div class=\"scenario-text\"><p>Static routing configuration fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip route 0.0.0.0 0.0.0.0 203.0.113.1"
      },
      {
        "id": "l2",
        "label": "ip route 10.0.0.0 255.0.0.0 10.1.1.2"
      },
      {
        "id": "l3",
        "label": "router ospf 1"
      },
      {
        "id": "l4",
        "label": "network 10.0.0.0 0.255.255.255 area 0"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "ip route 0.0.0.0 0.0.0.0 installs the default route."
  },
  {
    "id": 436,
    "qid": "CCNA-MOD3-036",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that would prefer static over OSPF for the same prefix.",
    "scenario": "<div class=\"scenario-text\"><p>AD comparison scenario.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip route 10.1.1.0 255.255.255.0 10.0.0.2"
      },
      {
        "id": "l2",
        "label": "router ospf 1"
      },
      {
        "id": "l3",
        "label": "network 10.1.1.0 0.0.0.255 area 0"
      },
      {
        "id": "l4",
        "label": "ip route 10.1.1.0 255.255.255.0 10.0.0.2 130"
      }
    ],
    "correct": [
      "l1",
      "l4"
    ],
    "selectCount": 2,
    "explanation": "Default static AD 1 beats OSPF; AD 130 would float behind OSPF."
  },
  {
    "id": 437,
    "qid": "CCNA-MOD3-037",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that creates a host route to a single IPv4 address.",
    "scenario": "<div class=\"scenario-text\"><p>Static host route syntax.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip route 10.1.1.10 255.255.255.255 10.0.0.2"
      },
      {
        "id": "l2",
        "label": "ip route 10.1.1.0 255.255.255.0 10.0.0.2"
      },
      {
        "id": "l3",
        "label": "ip route 0.0.0.0 0.0.0.0 10.0.0.2"
      },
      {
        "id": "l4",
        "label": "ip default-gateway 10.0.0.2"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "/32 mask creates a host route."
  },
  {
    "id": 438,
    "qid": "CCNA-MOD3-038",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that sets a floating static with AD 250.",
    "scenario": "<div class=\"scenario-text\"><p>Backup static behind OSPF.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip route 0.0.0.0 0.0.0.0 10.0.0.2 250"
      },
      {
        "id": "l2",
        "label": "ip route 0.0.0.0 0.0.0.0 10.0.0.2"
      },
      {
        "id": "l3",
        "label": "router ospf 1"
      },
      {
        "id": "l4",
        "label": "passive-interface default"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "Trailing 250 sets administrative distance for floating static."
  },
  {
    "id": 439,
    "qid": "CCNA-MOD3-039",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines related to exit-interface static route style.",
    "scenario": "<div class=\"scenario-text\"><p>Alternative static syntax.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip route 10.9.9.0 255.255.255.0 GigabitEthernet0/1"
      },
      {
        "id": "l2",
        "label": "ip route 10.9.9.0 255.255.255.0 10.0.0.2"
      },
      {
        "id": "l3",
        "label": "router eigrp 100"
      },
      {
        "id": "l4",
        "label": "network 10.0.0.0"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Exit-interface vs next-hop static forms."
  },
  {
    "id": 440,
    "qid": "CCNA-MOD3-040",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that would blackhole traffic matching the prefix.",
    "scenario": "<div class=\"scenario-text\"><p>Null0 static.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip route 10.9.9.0 255.255.255.0 Null0"
      },
      {
        "id": "l2",
        "label": "ip route 10.9.9.0 255.255.255.0 10.0.0.2"
      },
      {
        "id": "l3",
        "label": "ip route 0.0.0.0 0.0.0.0 203.0.113.1"
      },
      {
        "id": "l4",
        "label": "ip name-server 8.8.8.8"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "Null0 discards matching traffic."
  },
  {
    "id": 441,
    "qid": "CCNA-MOD3-041",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "Which command configures a default static route using a next-hop IP?",
    "scenario": "<div class=\"scenario-text\"><p>Edge router needs a gateway of last resort.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "ip route 0.0.0.0 0.0.0.0 203.0.113.1"
      },
      {
        "id": "b",
        "text": "ip route 0.0.0.0 255.255.255.255 203.0.113.1"
      },
      {
        "id": "c",
        "text": "ipv6 route ::/0 203.0.113.1"
      },
      {
        "id": "d",
        "text": "ip default-network 203.0.113.0"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "ip route 0.0.0.0 0.0.0.0 <next-hop> installs the IPv4 default."
  },
  {
    "id": 442,
    "qid": "CCNA-MOD3-042",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "What is a floating static route primarily used for?",
    "scenario": "<div class=\"scenario-text\"><p>Backup path when dynamic routing fails.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Primary preferred path always"
      },
      {
        "id": "b",
        "text": "Backup with higher AD than primary protocol"
      },
      {
        "id": "c",
        "text": "Replacing all OSPF"
      },
      {
        "id": "d",
        "text": "NAT only"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Floating statics use higher AD so they install only when better routes disappear."
  },
  {
    "id": 443,
    "qid": "CCNA-MOD3-043",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "Which IPv6 command installs a default route via next-hop 2001:db8:1::1?",
    "scenario": "<div class=\"scenario-text\"><p>IPv6 static default configuration.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "ipv6 route ::/0 2001:db8:1::1"
      },
      {
        "id": "b",
        "text": "ip route 0.0.0.0 0.0.0.0 2001:db8:1::1"
      },
      {
        "id": "c",
        "text": "ipv6 route 0::0/0 GigabitEthernet0/0"
      },
      {
        "id": "d",
        "text": "ipv6 default 2001:db8:1::1"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "ipv6 route ::/0 <next-hop> is the IPv6 default static."
  },
  {
    "id": 444,
    "qid": "CCNA-MOD3-044",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "Why might a static route with exit interface only be problematic on Ethernet?",
    "scenario": "<div class=\"scenario-text\"><p>ip route 10.0.0.0 255.0.0.0 GigabitEthernet0/0 without next-hop.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Router may ARP for every destination as if connected"
      },
      {
        "id": "b",
        "text": "It always fails to install"
      },
      {
        "id": "c",
        "text": "It disables CEF permanently"
      },
      {
        "id": "d",
        "text": "It requires OSPF"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Ethernet exit-interface statics can cause recursive ARP for each destination; next-hop IP is preferred."
  },
  {
    "id": 445,
    "qid": "CCNA-MOD3-045",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE valid static route use cases.",
    "scenario": "<div class=\"scenario-text\"><p>When statics are appropriate.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Stub edge default"
      },
      {
        "id": "b",
        "text": "Floating backup"
      },
      {
        "id": "c",
        "text": "Precise traffic engineering"
      },
      {
        "id": "d",
        "text": "Replacing campus-wide OSPF always"
      },
      {
        "id": "e",
        "text": "Dynamic neighbor discovery"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Defaults, floating backups, and deliberate TE are common static uses."
  },
  {
    "id": 446,
    "qid": "CCNA-MOD3-046",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO characteristics of a floating static route.",
    "scenario": "<div class=\"scenario-text\"><p>AD tuning.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Higher AD than the primary route source"
      },
      {
        "id": "b",
        "text": "Installs when primary is withdrawn"
      },
      {
        "id": "c",
        "text": "Lower AD than connected"
      },
      {
        "id": "d",
        "text": "Always preferred over OSPF"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Higher AD keeps it standby until primary fails."
  },
  {
    "id": 447,
    "qid": "CCNA-MOD3-047",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE IPv6 static route forms.",
    "scenario": "<div class=\"scenario-text\"><p>IPv6 static syntax variety.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "ipv6 route prefix/len next-hop"
      },
      {
        "id": "b",
        "text": "ipv6 route prefix/len exit-interface"
      },
      {
        "id": "c",
        "text": "ipv6 route ::/0 next-hop"
      },
      {
        "id": "d",
        "text": "ip route ::/0 next-hop"
      },
      {
        "id": "e",
        "text": "ipv6 ospf 1 area 0 as static"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Prefix with next-hop, exit-interface, and default ::/0."
  },
  {
    "id": 448,
    "qid": "CCNA-MOD3-048",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO reasons a static route may not appear in the table.",
    "scenario": "<div class=\"scenario-text\"><p>Missing static.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Exit interface is down"
      },
      {
        "id": "b",
        "text": "Next-hop is not resolvable and interface-based rules fail"
      },
      {
        "id": "c",
        "text": "AD is 1"
      },
      {
        "id": "d",
        "text": "Prefix is correctly configured"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Down interface or unresolvable next-hop prevents installation."
  },
  {
    "id": 449,
    "qid": "CCNA-MOD3-049",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE differences between next-hop and exit-interface statics.",
    "scenario": "<div class=\"scenario-text\"><p>Syntax trade-offs.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Next-hop requires recursive resolution"
      },
      {
        "id": "b",
        "text": "Exit-interface on multiaccess may ARP for destinations"
      },
      {
        "id": "c",
        "text": "Both can install in RIB when valid"
      },
      {
        "id": "d",
        "text": "Exit-interface always needs OSPF"
      },
      {
        "id": "e",
        "text": "Next-hop cannot be used for defaults"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Resolution behavior differs; both are valid when configured correctly."
  },
  {
    "id": 450,
    "qid": "CCNA-MOD3-050",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO commands to verify static routes.",
    "scenario": "<div class=\"scenario-text\"><p>Confirmation after config.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "show ip route static"
      },
      {
        "id": "b",
        "text": "show ip route"
      },
      {
        "id": "c",
        "text": "show vlan brief only"
      },
      {
        "id": "d",
        "text": "show spanning-tree only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "show ip route and filtered static view."
  },
  {
    "id": 451,
    "qid": "CCNA-MOD3-051",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE components of a floating default static.",
    "scenario": "<div class=\"scenario-text\"><p>Backup Internet path.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Prefix 0.0.0.0 0.0.0.0"
      },
      {
        "id": "b",
        "text": "Backup next-hop"
      },
      {
        "id": "c",
        "text": "AD higher than primary (e.g., 250)"
      },
      {
        "id": "d",
        "text": "OSPF process ID as AD"
      },
      {
        "id": "e",
        "text": "VLAN 1 native"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Default prefix, backup next-hop, elevated AD."
  },
  {
    "id": 452,
    "qid": "CCNA-MOD3-052",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO IPv4 host route masks.",
    "scenario": "<div class=\"scenario-text\"><p>Single address static.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "255.255.255.255"
      },
      {
        "id": "b",
        "text": "/32"
      },
      {
        "id": "c",
        "text": "/24 only"
      },
      {
        "id": "d",
        "text": "/0 only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Host routes use /32 or 255.255.255.255."
  },
  {
    "id": 453,
    "qid": "CCNA-MOD3-053",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE best practices for static routing at scale.",
    "scenario": "<div class=\"scenario-text\"><p>Avoid operational pain.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Document purpose and AD"
      },
      {
        "id": "b",
        "text": "Prefer dynamic protocols for large meshes"
      },
      {
        "id": "c",
        "text": "Use floating statics thoughtfully"
      },
      {
        "id": "d",
        "text": "Use only exit-interface on all Ethernet defaults"
      },
      {
        "id": "e",
        "text": "Disable all show commands"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Documentation, dynamic at scale, careful floating design."
  },
  {
    "id": 454,
    "qid": "CCNA-MOD3-054",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO effects of ip route ... permanent (where supported).",
    "scenario": "<div class=\"scenario-text\"><p>Permanent keyword.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Route may remain even if interface drops (platform-dependent behavior)"
      },
      {
        "id": "b",
        "text": "Changes withdrawal behavior vs non-permanent"
      },
      {
        "id": "c",
        "text": "Forces OSPF on"
      },
      {
        "id": "d",
        "text": "Sets AD to 0"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "permanent alters interface-state dependency on some platforms."
  },
  {
    "id": 455,
    "qid": "CCNA-MOD3-055",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE verification points after adding a static.",
    "scenario": "<div class=\"scenario-text\"><p>Post-change checklist.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Route present in RIB"
      },
      {
        "id": "b",
        "text": "Correct next-hop/interface"
      },
      {
        "id": "c",
        "text": "Traffic follows expected path"
      },
      {
        "id": "d",
        "text": "STP root changed"
      },
      {
        "id": "e",
        "text": "VTP domain matched"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "RIB presence, next-hop correctness, data-plane test."
  },
  {
    "id": 456,
    "qid": "CCNA-MOD3-056",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO IPv6 default route next-hop qualities.",
    "scenario": "<div class=\"scenario-text\"><p>IPv6 static default.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Usually a link-local or global next-hop on path"
      },
      {
        "id": "b",
        "text": "Must be reachable for successful forwarding"
      },
      {
        "id": "c",
        "text": "Must be an OSPFv2 RID"
      },
      {
        "id": "d",
        "text": "Must be a VLAN ID"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Reachable IPv6 next-hop is required."
  },
  {
    "id": 457,
    "qid": "CCNA-MOD3-057",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match static route type to example.",
    "scenario": "<div class=\"scenario-text\"><p>Classify statics.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Default"
      },
      {
        "id": "i2",
        "text": "Network"
      },
      {
        "id": "i3",
        "text": "Host"
      },
      {
        "id": "i4",
        "text": "Floating"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "0.0.0.0/0"
      },
      {
        "id": "z2",
        "label": "10.0.0.0/8"
      },
      {
        "id": "z3",
        "label": "10.1.1.10/32"
      },
      {
        "id": "z4",
        "label": "AD 250 backup"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Default, network, host, floating."
  },
  {
    "id": 458,
    "qid": "CCNA-MOD3-058",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match command fragment to purpose.",
    "scenario": "<div class=\"scenario-text\"><p>Static CLI map.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "ip route 0.0.0.0 0.0.0.0 1.2.3.4"
      },
      {
        "id": "i2",
        "text": "ip route 10.0.0.0 255.0.0.0 Gi0/1"
      },
      {
        "id": "i3",
        "text": "ip route 10.1.1.0 255.255.255.0 1.2.3.4 200"
      },
      {
        "id": "i4",
        "text": "ipv6 route ::/0 2001:db8::1"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "IPv4 default via next-hop"
      },
      {
        "id": "z2",
        "label": "IPv4 via exit interface"
      },
      {
        "id": "z3",
        "label": "Floating static"
      },
      {
        "id": "z4",
        "label": "IPv6 default"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Default, exit-if, floating, IPv6 default."
  },
  {
    "id": 459,
    "qid": "CCNA-MOD3-059",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Order steps to add a floating static backup for OSPF.",
    "scenario": "<div class=\"scenario-text\"><p>AD 110 primary.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Identify backup next-hop"
      },
      {
        "id": "c2",
        "text": "Configure static with AD > 110"
      },
      {
        "id": "c3",
        "text": "Verify not installed while OSPF present"
      },
      {
        "id": "c4",
        "text": "Withdraw OSPF path and confirm install"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Next-hop → AD config → verify standby → failover test."
  },
  {
    "id": 460,
    "qid": "CCNA-MOD3-060",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match failure mode to static symptom.",
    "scenario": "<div class=\"scenario-text\"><p>Why static misbehaves.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Next-hop down"
      },
      {
        "id": "i2",
        "text": "AD too low vs dynamic"
      },
      {
        "id": "i3",
        "text": "Exit interface down"
      },
      {
        "id": "i4",
        "text": "Wrong mask"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Route may withdraw or blackhole"
      },
      {
        "id": "z2",
        "label": "Static takes over unintentionally"
      },
      {
        "id": "z3",
        "label": "Route removed from table"
      },
      {
        "id": "z4",
        "label": "Wrong destinations matched"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Next-hop, AD, interface, mask issues."
  },
  {
    "id": 461,
    "qid": "CCNA-MOD3-061",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match IPv6 static element to role.",
    "scenario": "<div class=\"scenario-text\"><p>IPv6 static anatomy.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "::/0"
      },
      {
        "id": "i2",
        "text": "2001:db8:1::/64"
      },
      {
        "id": "i3",
        "text": "FE80::1"
      },
      {
        "id": "i4",
        "text": "GigabitEthernet0/0"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Default prefix"
      },
      {
        "id": "z2",
        "label": "Specific prefix"
      },
      {
        "id": "z3",
        "label": "Link-local next-hop option"
      },
      {
        "id": "z4",
        "label": "Exit interface option"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Default, specific, LL next-hop, exit-if."
  },
  {
    "id": 462,
    "qid": "CCNA-MOD3-062",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Order verification of a new static default.",
    "scenario": "<div class=\"scenario-text\"><p>Confirm gateway of last resort.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "show ip route"
      },
      {
        "id": "c2",
        "text": "Confirm S* default"
      },
      {
        "id": "c3",
        "text": "ping remote Internet target"
      },
      {
        "id": "c4",
        "text": "traceroute to validate path"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Show → S* → ping → traceroute."
  },
  {
    "id": 463,
    "qid": "CCNA-MOD3-063",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match AD value to static design intent.",
    "scenario": "<div class=\"scenario-text\"><p>Choosing AD numbers.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "AD 1"
      },
      {
        "id": "i2",
        "text": "AD 110"
      },
      {
        "id": "i3",
        "text": "AD 250"
      },
      {
        "id": "i4",
        "text": "AD 255"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Prefer over most dynamic"
      },
      {
        "id": "z2",
        "label": "Tie OSPF default (unusual)"
      },
      {
        "id": "z3",
        "label": "Classic floating behind OSPF"
      },
      {
        "id": "z4",
        "label": "Unusable / do not use"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "1 primary, 110 special, 250 float, 255 invalid."
  },
  {
    "id": 464,
    "qid": "CCNA-MOD3-064",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match platform note to practice.",
    "scenario": "<div class=\"scenario-text\"><p>Safe static design.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Prefer next-hop on Ethernet"
      },
      {
        "id": "i2",
        "text": "Track interface or IP if available"
      },
      {
        "id": "i3",
        "text": "Document floating purpose"
      },
      {
        "id": "i4",
        "text": "Avoid overlapping conflicting statics"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Reduce recursive ARP issues"
      },
      {
        "id": "z2",
        "label": "Faster failure detection"
      },
      {
        "id": "z3",
        "label": "Operational clarity"
      },
      {
        "id": "z4",
        "label": "Prevent ambiguous forwarding"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Next-hop preference, tracking, docs, no conflicts."
  },
  {
    "id": 465,
    "qid": "CCNA-MOD3-065",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Order steps to replace a wrong static.",
    "scenario": "<div class=\"scenario-text\"><p>Correct a bad route.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Identify incorrect static"
      },
      {
        "id": "c2",
        "text": "no ip route ... existing"
      },
      {
        "id": "c3",
        "text": "Configure correct static"
      },
      {
        "id": "c4",
        "text": "Verify RIB and forwarding"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Find → remove → add → verify."
  },
  {
    "id": 466,
    "qid": "CCNA-MOD3-066",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match recursive routing problem to description.",
    "scenario": "<div class=\"scenario-text\"><p>Static pointing to unreachable.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Next-hop not in RIB"
      },
      {
        "id": "i2",
        "text": "Recursive loop"
      },
      {
        "id": "i3",
        "text": "Valid connected next-hop"
      },
      {
        "id": "i4",
        "text": "Default points to itself"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Static may not install usefully"
      },
      {
        "id": "z2",
        "label": "Resolution cycles"
      },
      {
        "id": "z3",
        "label": "Healthy resolution"
      },
      {
        "id": "z4",
        "label": "Blackhole risk"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Unresolved, loop, healthy, self-default."
  },
  {
    "id": 467,
    "qid": "CCNA-MOD3-067",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match IPv4 vs IPv6 static keyword.",
    "scenario": "<div class=\"scenario-text\"><p>Protocol family.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "ip route"
      },
      {
        "id": "i2",
        "text": "ipv6 route"
      },
      {
        "id": "i3",
        "text": "0.0.0.0/0"
      },
      {
        "id": "i4",
        "text": "::/0"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "IPv4 static command"
      },
      {
        "id": "z2",
        "label": "IPv6 static command"
      },
      {
        "id": "z3",
        "label": "IPv4 default prefix"
      },
      {
        "id": "z4",
        "label": "IPv6 default prefix"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "ip/ipv6 route and default prefixes."
  },
  {
    "id": 468,
    "qid": "CCNA-MOD3-068",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match floating static test to expected result.",
    "scenario": "<div class=\"scenario-text\"><p>Failover validation.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Primary up"
      },
      {
        "id": "i2",
        "text": "Primary down"
      },
      {
        "id": "i3",
        "text": "Primary restored"
      },
      {
        "id": "i4",
        "text": "AD set lower than primary"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Floating not in table"
      },
      {
        "id": "z2",
        "label": "Floating installs"
      },
      {
        "id": "z3",
        "label": "Floating withdraws again"
      },
      {
        "id": "z4",
        "label": "Floating becomes primary (misconfig)"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Standby, active, restore, misconfig."
  },
  {
    "id": 469,
    "qid": "CCNA-MOD3-069",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the router that should originate the static default toward the branch.",
    "scenario": "<div class=\"scenario-text\"><p>HQ has Internet edge; Branch is stub.</p></div>",
    "nodes": [
      {
        "id": "r1",
        "label": "HQ-Edge",
        "x": 30,
        "y": 40
      },
      {
        "id": "r2",
        "label": "Branch",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "r1"
    ],
    "explanation": "HQ-Edge provides the default toward the Internet for the branch path design."
  },
  {
    "id": 470,
    "qid": "CCNA-MOD3-070",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the static that is floating (higher AD).",
    "scenario": "<div class=\"scenario-text\"><p>Two statics to same prefix with AD 1 and AD 250.</p></div>",
    "nodes": [
      {
        "id": "f1",
        "label": "AD 1\nprimary",
        "x": 30,
        "y": 40
      },
      {
        "id": "f2",
        "label": "AD 250\nfloating",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "f2"
    ],
    "explanation": "AD 250 is the floating backup."
  },
  {
    "id": 471,
    "qid": "CCNA-MOD3-071",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the next-hop that should be used for the IPv6 default.",
    "scenario": "<div class=\"scenario-text\"><p>IPv6 defaults via 2001:db8:1::1 vs link-local options labeled.</p></div>",
    "nodes": [
      {
        "id": "n1",
        "label": "2001:db8:1::1",
        "x": 30,
        "y": 40
      },
      {
        "id": "n2",
        "label": "Invalid ::",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "n1"
    ],
    "explanation": "Valid global next-hop for ::/0."
  },
  {
    "id": 472,
    "qid": "CCNA-MOD3-072",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the interface that is down causing the static via that interface to withdraw.",
    "scenario": "<div class=\"scenario-text\"><p>Static depends on Gi0/1; Gi0/1 is down.</p></div>",
    "nodes": [
      {
        "id": "i1",
        "label": "Gi0/1\ndown",
        "x": 30,
        "y": 40
      },
      {
        "id": "i2",
        "label": "Gi0/2\nup",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "i1"
    ],
    "explanation": "Exit-interface static tracks interface state."
  },
  {
    "id": 473,
    "qid": "CCNA-MOD3-073",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the host route among the listed prefixes.",
    "scenario": "<div class=\"scenario-text\"><p>/24, /16, and /32 shown.</p></div>",
    "nodes": [
      {
        "id": "h1",
        "label": "10.1.1.0/24",
        "x": 20,
        "y": 40
      },
      {
        "id": "h2",
        "label": "10.1.1.10/32",
        "x": 50,
        "y": 40
      },
      {
        "id": "h3",
        "label": "10.0.0.0/16",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "h2"
    ],
    "explanation": "/32 is a host route."
  },
  {
    "id": 474,
    "qid": "CCNA-MOD3-074",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the path that is the backup floating static.",
    "scenario": "<div class=\"scenario-text\"><p>Primary OSPF path and backup static path drawn.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "OSPF primary",
        "x": 30,
        "y": 30
      },
      {
        "id": "p2",
        "label": "Static AD250",
        "x": 30,
        "y": 70
      }
    ],
    "correct": [
      "p2"
    ],
    "explanation": "Higher AD static is the backup path."
  },
  {
    "id": 475,
    "qid": "CCNA-MOD3-075",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that configures an IPv4 default static via 203.0.113.1.",
    "scenario": "<div class=\"scenario-text\"><p>Static default config.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip route 0.0.0.0 0.0.0.0 203.0.113.1"
      },
      {
        "id": "l2",
        "label": "ip route 10.0.0.0 255.0.0.0 10.1.1.2"
      },
      {
        "id": "l3",
        "label": "ipv6 route ::/0 2001:db8::1"
      },
      {
        "id": "l4",
        "label": "router ospf 1"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "IPv4 default uses 0.0.0.0/0."
  },
  {
    "id": 476,
    "qid": "CCNA-MOD3-076",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that configures a floating static with AD 250.",
    "scenario": "<div class=\"scenario-text\"><p>Backup static syntax.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip route 0.0.0.0 0.0.0.0 10.0.0.2 250"
      },
      {
        "id": "l2",
        "label": "ip route 0.0.0.0 0.0.0.0 10.0.0.2"
      },
      {
        "id": "l3",
        "label": "router ospf 1"
      },
      {
        "id": "l4",
        "label": "network 10.0.0.0 0.255.255.255 area 0"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "AD 250 at end of ip route makes it floating."
  },
  {
    "id": 477,
    "qid": "CCNA-MOD3-077",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that configure IPv6 static default and a network static.",
    "scenario": "<div class=\"scenario-text\"><p>IPv6 static examples.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ipv6 route ::/0 2001:db8:1::1"
      },
      {
        "id": "l2",
        "label": "ipv6 route 2001:db8:2::/64 2001:db8:1::1"
      },
      {
        "id": "l3",
        "label": "ip route 0.0.0.0 0.0.0.0 1.1.1.1"
      },
      {
        "id": "l4",
        "label": "ipv6 unicast-routing"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Both are ipv6 route statements."
  },
  {
    "id": 478,
    "qid": "CCNA-MOD3-078",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that uses exit-interface style for a static.",
    "scenario": "<div class=\"scenario-text\"><p>Alternative static form.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip route 10.9.9.0 255.255.255.0 GigabitEthernet0/1"
      },
      {
        "id": "l2",
        "label": "ip route 10.9.9.0 255.255.255.0 10.0.0.2"
      },
      {
        "id": "l3",
        "label": "router eigrp 1"
      },
      {
        "id": "l4",
        "label": "network 10.0.0.0"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "Exit interface without next-hop IP."
  },
  {
    "id": 479,
    "qid": "CCNA-MOD3-079",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that creates a /32 host static.",
    "scenario": "<div class=\"scenario-text\"><p>Host route configuration.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip route 192.0.2.10 255.255.255.255 203.0.113.1"
      },
      {
        "id": "l2",
        "label": "ip route 192.0.2.0 255.255.255.0 203.0.113.1"
      },
      {
        "id": "l3",
        "label": "ip route 0.0.0.0 0.0.0.0 203.0.113.1"
      },
      {
        "id": "l4",
        "label": "ip default-gateway 203.0.113.1"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "255.255.255.255 is host mask."
  },
  {
    "id": 480,
    "qid": "CCNA-MOD3-080",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that must be removed to clear a wrong static default.",
    "scenario": "<div class=\"scenario-text\"><p>Cleanup of mistaken defaults.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip route 0.0.0.0 0.0.0.0 198.51.100.1"
      },
      {
        "id": "l2",
        "label": "ip route 0.0.0.0 0.0.0.0 203.0.113.1 250"
      },
      {
        "id": "l3",
        "label": "router ospf 1"
      },
      {
        "id": "l4",
        "label": "hostname EDGE"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Both are static defaults to remove."
  },
  {
    "id": 481,
    "qid": "CCNA-MOD3-081",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "Which OSPF network type elects a DR and BDR by default on Ethernet?",
    "scenario": "<div class=\"scenario-text\"><p>Multi-access segment behavior.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Point-to-point"
      },
      {
        "id": "b",
        "text": "Broadcast"
      },
      {
        "id": "c",
        "text": "Loopback"
      },
      {
        "id": "d",
        "text": "Non-broadcast without config"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Broadcast network type elects DR/BDR; point-to-point does not."
  },
  {
    "id": 482,
    "qid": "CCNA-MOD3-082",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "What is the default OSPF cost for a 100 Mbps interface with reference bandwidth 100 Mbps?",
    "scenario": "<div class=\"scenario-text\"><p>Cost = ref-bw / interface-bw.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "10"
      },
      {
        "id": "c",
        "text": "100"
      },
      {
        "id": "d",
        "text": "1000"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "With default reference 100 Mbps, FastEthernet cost is 1."
  },
  {
    "id": 483,
    "qid": "CCNA-MOD3-083",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "Which parameter must match for OSPFv2 neighbors on a link?",
    "scenario": "<div class=\"scenario-text\"><p>Adjacency stuck in INIT/2WAY issues.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Process ID"
      },
      {
        "id": "b",
        "text": "Area ID"
      },
      {
        "id": "c",
        "text": "Router hostname"
      },
      {
        "id": "d",
        "text": "VTP domain"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Area ID must match; process ID is local."
  },
  {
    "id": 484,
    "qid": "CCNA-MOD3-084",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "How is the OSPF Router ID selected by default preference order?",
    "scenario": "<div class=\"scenario-text\"><p>RID election without router-id command.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Highest loopback IP, then highest active interface IP"
      },
      {
        "id": "b",
        "text": "Lowest MAC only"
      },
      {
        "id": "c",
        "text": "Hostname hash only"
      },
      {
        "id": "d",
        "text": "Random each boot always"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Manual router-id wins; else highest loopback, else highest up interface IP."
  },
  {
    "id": 485,
    "qid": "CCNA-MOD3-085",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE requirements for OSPFv2 adjacency.",
    "scenario": "<div class=\"scenario-text\"><p>Neighbors will not form.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Matching area ID"
      },
      {
        "id": "b",
        "text": "Matching Hello/Dead timers"
      },
      {
        "id": "c",
        "text": "Compatible authentication"
      },
      {
        "id": "d",
        "text": "Matching process ID"
      },
      {
        "id": "e",
        "text": "Identical Router IDs"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Area, timers, auth must match; process ID is local; RIDs must be unique."
  },
  {
    "id": 486,
    "qid": "CCNA-MOD3-086",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO roles of the Designated Router.",
    "scenario": "<div class=\"scenario-text\"><p>Broadcast segment.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Adjacency hub on multi-access"
      },
      {
        "id": "b",
        "text": "Generates Network LSA for the segment"
      },
      {
        "id": "c",
        "text": "Replaces all ABRs"
      },
      {
        "id": "d",
        "text": "Disables SPF"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "DR is adjacency hub and originates type-2 LSA."
  },
  {
    "id": 487,
    "qid": "CCNA-MOD3-087",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE OSPF packet types used in adjacency/DB exchange.",
    "scenario": "<div class=\"scenario-text\"><p>Packet functions.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Hello"
      },
      {
        "id": "b",
        "text": "DBD"
      },
      {
        "id": "c",
        "text": "LSR/LSU/LSAck set"
      },
      {
        "id": "d",
        "text": "ARP Reply"
      },
      {
        "id": "e",
        "text": "STP BPDU"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Hello, DBD, and LSA exchange packets."
  },
  {
    "id": 488,
    "qid": "CCNA-MOD3-088",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO effects of passive-interface in OSPF.",
    "scenario": "<div class=\"scenario-text\"><p>Security and control.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Stops Hello transmission on that interface"
      },
      {
        "id": "b",
        "text": "Still advertises the network if in OSPF"
      },
      {
        "id": "c",
        "text": "Forms more neighbors"
      },
      {
        "id": "d",
        "text": "Changes RID automatically"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Passive stops Hellos but can still advertise the prefix."
  },
  {
    "id": 489,
    "qid": "CCNA-MOD3-089",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE factors in DR election.",
    "scenario": "<div class=\"scenario-text\"><p>Who becomes DR.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Highest interface priority"
      },
      {
        "id": "b",
        "text": "Highest RID if priority ties"
      },
      {
        "id": "c",
        "text": "Priority 0 cannot be DR"
      },
      {
        "id": "d",
        "text": "Lowest MAC always wins first"
      },
      {
        "id": "e",
        "text": "Hostname alphabetical only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Priority, then RID; 0 is ineligible."
  },
  {
    "id": 490,
    "qid": "CCNA-MOD3-090",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO valid OSPF network types on Cisco.",
    "scenario": "<div class=\"scenario-text\"><p>Interface network type.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "point-to-point"
      },
      {
        "id": "b",
        "text": "broadcast"
      },
      {
        "id": "c",
        "text": "token-ring-only mandatory"
      },
      {
        "id": "d",
        "text": "IS-IS level-1"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "point-to-point and broadcast are common."
  },
  {
    "id": 491,
    "qid": "CCNA-MOD3-091",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE verification commands for OSPFv2.",
    "scenario": "<div class=\"scenario-text\"><p>Operational checks.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "show ip ospf neighbor"
      },
      {
        "id": "b",
        "text": "show ip ospf interface"
      },
      {
        "id": "c",
        "text": "show ip route ospf"
      },
      {
        "id": "d",
        "text": "show vlan brief only"
      },
      {
        "id": "e",
        "text": "show cdp neighbors only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Neighbor, interface, and OSPF routes."
  },
  {
    "id": 492,
    "qid": "CCNA-MOD3-092",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO reasons neighbors stay in 2-WAY only (non-DR).",
    "scenario": "<div class=\"scenario-text\"><p>Expected vs stuck.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Normal on broadcast for non-DR pairs"
      },
      {
        "id": "b",
        "text": "DR/BDR full adjacency still forms"
      },
      {
        "id": "c",
        "text": "Always indicates timer mismatch"
      },
      {
        "id": "d",
        "text": "Always indicates area mismatch"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Non-DR routers remain 2-WAY with each other by design."
  },
  {
    "id": 493,
    "qid": "CCNA-MOD3-093",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE multi-area OSPF roles.",
    "scenario": "<div class=\"scenario-text\"><p>Hierarchy components.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "ABR connects areas"
      },
      {
        "id": "b",
        "text": "ASBR injects external routes"
      },
      {
        "id": "c",
        "text": "Area 0 is backbone"
      },
      {
        "id": "d",
        "text": "VTP server is required"
      },
      {
        "id": "e",
        "text": "STP root is ABR"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "ABR, ASBR, and backbone area 0."
  },
  {
    "id": 494,
    "qid": "CCNA-MOD3-094",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO cost manipulation methods.",
    "scenario": "<div class=\"scenario-text\"><p>Influence path selection.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "ip ospf cost on interface"
      },
      {
        "id": "b",
        "text": "auto-cost reference-bandwidth"
      },
      {
        "id": "c",
        "text": "Change VLAN ID"
      },
      {
        "id": "d",
        "text": "Change CDP timer"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Manual cost and reference-bandwidth affect metric."
  },
  {
    "id": 495,
    "qid": "CCNA-MOD3-095",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE single-area OSPF configuration elements.",
    "scenario": "<div class=\"scenario-text\"><p>Basic enablement.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "router ospf <pid>"
      },
      {
        "id": "b",
        "text": "network statement or interface ip ospf"
      },
      {
        "id": "c",
        "text": "router-id (recommended)"
      },
      {
        "id": "d",
        "text": "spanning-tree mode rapid-pvst"
      },
      {
        "id": "e",
        "text": "vtp mode transparent"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Process, network/interface enable, RID."
  },
  {
    "id": 496,
    "qid": "CCNA-MOD3-096",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO MTU-related OSPF issues.",
    "scenario": "<div class=\"scenario-text\"><p>ExStart/Exchange problems.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "MTU mismatch can block DBD exchange"
      },
      {
        "id": "b",
        "text": "ip ospf mtu-ignore may work around"
      },
      {
        "id": "c",
        "text": "MTU mismatch always fixes RID"
      },
      {
        "id": "d",
        "text": "MTU sets Hello interval"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "MTU mismatch stalls adjacency; mtu-ignore is a workaround."
  },
  {
    "id": 497,
    "qid": "CCNA-MOD3-097",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match OSPF state to meaning.",
    "scenario": "<div class=\"scenario-text\"><p>Neighbor FSM highlights.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Down"
      },
      {
        "id": "i2",
        "text": "Init"
      },
      {
        "id": "i3",
        "text": "2-Way"
      },
      {
        "id": "i4",
        "text": "Full"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "No Hello received"
      },
      {
        "id": "z2",
        "label": "Hello received"
      },
      {
        "id": "z3",
        "label": "Bidirectional Hello"
      },
      {
        "id": "z4",
        "label": "LSDB synchronized"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Down, Init, 2-Way, Full."
  },
  {
    "id": 498,
    "qid": "CCNA-MOD3-098",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match LSA type (basic) to description.",
    "scenario": "<div class=\"scenario-text\"><p>OSPF database.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Type 1 Router"
      },
      {
        "id": "i2",
        "text": "Type 2 Network"
      },
      {
        "id": "i3",
        "text": "Type 3 Summary"
      },
      {
        "id": "i4",
        "text": "Type 5 External"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "From each router about links"
      },
      {
        "id": "z2",
        "label": "From DR about multi-access"
      },
      {
        "id": "z3",
        "label": "From ABR about inter-area"
      },
      {
        "id": "z4",
        "label": "From ASBR about external"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Router, Network, Summary, External."
  },
  {
    "id": 499,
    "qid": "CCNA-MOD3-099",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Order OSPF adjacency formation (simplified).",
    "scenario": "<div class=\"scenario-text\"><p>From down to full.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Hello exchange"
      },
      {
        "id": "c2",
        "text": "2-Way"
      },
      {
        "id": "c3",
        "text": "DBD/LSR/LSU"
      },
      {
        "id": "c4",
        "text": "Full"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Hello → 2-Way → DB exchange → Full."
  },
  {
    "id": 500,
    "qid": "CCNA-MOD3-100",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match network type to DR behavior.",
    "scenario": "<div class=\"scenario-text\"><p>Election necessity.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Broadcast"
      },
      {
        "id": "i2",
        "text": "Point-to-point"
      },
      {
        "id": "i3",
        "text": "Point-to-multipoint"
      },
      {
        "id": "i4",
        "text": "Loopback"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "DR/BDR elected"
      },
      {
        "id": "z2",
        "label": "No DR"
      },
      {
        "id": "z3",
        "label": "Typically no DR"
      },
      {
        "id": "z4",
        "label": "Advertised as /32"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Broadcast elects; P2P does not; loopback /32."
  },
  {
    "id": 501,
    "qid": "CCNA-MOD3-101",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match command to OSPF purpose.",
    "scenario": "<div class=\"scenario-text\"><p>CLI mapping.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "router ospf 10"
      },
      {
        "id": "i2",
        "text": "network 10.0.0.0 0.255.255.255 area 0"
      },
      {
        "id": "i3",
        "text": "router-id 1.1.1.1"
      },
      {
        "id": "i4",
        "text": "passive-interface Gi0/1"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Start OSPF process"
      },
      {
        "id": "z2",
        "label": "Enable OSPF on matching interfaces"
      },
      {
        "id": "z3",
        "label": "Set RID"
      },
      {
        "id": "z4",
        "label": "Suppress Hellos"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Process, network, RID, passive."
  },
  {
    "id": 502,
    "qid": "CCNA-MOD3-102",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Order DR election preference.",
    "scenario": "<div class=\"scenario-text\"><p>Priority and RID.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Highest priority wins"
      },
      {
        "id": "c2",
        "text": "If tie, highest RID"
      },
      {
        "id": "c3",
        "text": "Priority 0 ineligible"
      },
      {
        "id": "c4",
        "text": "Existing DR usually retained until reset"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Rule 1"
      },
      {
        "id": "s2",
        "label": "Rule 2"
      },
      {
        "id": "s3",
        "label": "Rule 3"
      },
      {
        "id": "s4",
        "label": "Rule 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Priority → RID → 0 ineligible → sticky DR behavior."
  },
  {
    "id": 503,
    "qid": "CCNA-MOD3-103",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match area design rule to reason.",
    "scenario": "<div class=\"scenario-text\"><p>Multi-area OSPF.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Area 0 backbone"
      },
      {
        "id": "i2",
        "text": "ABR"
      },
      {
        "id": "i3",
        "text": "Stub area idea"
      },
      {
        "id": "i4",
        "text": "Virtual link (rare)"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "All areas connect via backbone"
      },
      {
        "id": "z2",
        "label": "Router in area 0 and non-zero"
      },
      {
        "id": "z3",
        "label": "Block type 5 / default injection options"
      },
      {
        "id": "z4",
        "label": "Repair discontinuous backbone"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Backbone, ABR, stub, virtual link."
  },
  {
    "id": 504,
    "qid": "CCNA-MOD3-104",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match problem to likely OSPF cause.",
    "scenario": "<div class=\"scenario-text\"><p>Troubleshooting map.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Stuck in Init"
      },
      {
        "id": "i2",
        "text": "Stuck in ExStart"
      },
      {
        "id": "i3",
        "text": "No routes installed"
      },
      {
        "id": "i4",
        "text": "Wrong path cost"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Hello/ACLs/timers"
      },
      {
        "id": "z2",
        "label": "MTU mismatch"
      },
      {
        "id": "z3",
        "label": "Filter/area/SPF issue"
      },
      {
        "id": "z4",
        "label": "Interface cost design"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Init, ExStart, missing routes, cost."
  },
  {
    "id": 505,
    "qid": "CCNA-MOD3-105",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Order basic single-area enablement.",
    "scenario": "<div class=\"scenario-text\"><p>New OSPF domain.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "router ospf 1"
      },
      {
        "id": "c2",
        "text": "router-id 1.1.1.1"
      },
      {
        "id": "c3",
        "text": "network ... area 0"
      },
      {
        "id": "c4",
        "text": "verify neighbors and routes"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Process → RID → network → verify."
  },
  {
    "id": 506,
    "qid": "CCNA-MOD3-106",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match timer to default (broadcast).",
    "scenario": "<div class=\"scenario-text\"><p>Hello/Dead awareness.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Hello"
      },
      {
        "id": "i2",
        "text": "Dead"
      },
      {
        "id": "i3",
        "text": "SPF throttle (concept)"
      },
      {
        "id": "i4",
        "text": "LSA refresh"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "10 seconds"
      },
      {
        "id": "z2",
        "label": "40 seconds"
      },
      {
        "id": "z3",
        "label": "Controls recalc rate"
      },
      {
        "id": "z4",
        "label": "Periodic LSA aging/refresh"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Hello 10, Dead 40 on broadcast defaults."
  },
  {
    "id": 507,
    "qid": "CCNA-MOD3-107",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match interface command to effect.",
    "scenario": "<div class=\"scenario-text\"><p>Per-interface OSPF.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "ip ospf 1 area 0"
      },
      {
        "id": "i2",
        "text": "ip ospf cost 50"
      },
      {
        "id": "i3",
        "text": "ip ospf priority 0"
      },
      {
        "id": "i4",
        "text": "ip ospf network point-to-point"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Enable OSPF on interface"
      },
      {
        "id": "z2",
        "label": "Set metric cost"
      },
      {
        "id": "z3",
        "label": "Never become DR"
      },
      {
        "id": "z4",
        "label": "Force P2P type"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Enable, cost, priority 0, network type."
  },
  {
    "id": 508,
    "qid": "CCNA-MOD3-108",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match ABR vs ASBR.",
    "scenario": "<div class=\"scenario-text\"><p>Special router roles.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "ABR"
      },
      {
        "id": "i2",
        "text": "ASBR"
      },
      {
        "id": "i3",
        "text": "Internal router"
      },
      {
        "id": "i4",
        "text": "Backbone router"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Connects areas; type 3 LSAs"
      },
      {
        "id": "z2",
        "label": "Injects external routes"
      },
      {
        "id": "z3",
        "label": "All interfaces in one area"
      },
      {
        "id": "z4",
        "label": "Has interface in area 0"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "ABR, ASBR, internal, backbone."
  },
  {
    "id": 509,
    "qid": "CCNA-MOD3-109",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the router that will become DR on the multi-access segment.",
    "scenario": "<div class=\"scenario-text\"><p>Priorities: R1=1, R2=2, R3=1; RIDs differ.</p></div>",
    "nodes": [
      {
        "id": "r1",
        "label": "R1\nPri 1",
        "x": 20,
        "y": 40
      },
      {
        "id": "r2",
        "label": "R2\nPri 2",
        "x": 50,
        "y": 40
      },
      {
        "id": "r3",
        "label": "R3\nPri 1",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "r2"
    ],
    "explanation": "Highest priority wins DR election."
  },
  {
    "id": 510,
    "qid": "CCNA-MOD3-110",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the ABR between Area 0 and Area 1.",
    "scenario": "<div class=\"scenario-text\"><p>Topology with Area 0 core and Area 1 edge.</p></div>",
    "nodes": [
      {
        "id": "a1",
        "label": "R-Core\nArea0 only",
        "x": 25,
        "y": 40
      },
      {
        "id": "a2",
        "label": "R-ABR\nA0+A1",
        "x": 55,
        "y": 40
      },
      {
        "id": "a3",
        "label": "R-Leaf\nArea1",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "a2"
    ],
    "explanation": "ABR has interfaces in both areas."
  },
  {
    "id": 511,
    "qid": "CCNA-MOD3-111",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the interface that should be passive for a LAN without OSPF routers.",
    "scenario": "<div class=\"scenario-text\"><p>User access VLAN SVI vs uplink.</p></div>",
    "nodes": [
      {
        "id": "i1",
        "label": "Vlan10\nusers",
        "x": 30,
        "y": 40
      },
      {
        "id": "i2",
        "label": "Gi0/1\nuplink",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "i1"
    ],
    "explanation": "Passive on user-facing interfaces prevents unnecessary Hellos."
  },
  {
    "id": 512,
    "qid": "CCNA-MOD3-112",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the neighbor state that indicates full adjacency.",
    "scenario": "<div class=\"scenario-text\"><p>Neighbor table shows Full and 2-Way.</p></div>",
    "nodes": [
      {
        "id": "s1",
        "label": "Full/DR",
        "x": 30,
        "y": 40
      },
      {
        "id": "s2",
        "label": "2-Way/DROTHER",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "s1"
    ],
    "explanation": "Full means LSDB synchronized."
  },
  {
    "id": 513,
    "qid": "CCNA-MOD3-113",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the router ID that should win if priorities are equal.",
    "scenario": "<div class=\"scenario-text\"><p>All priority 1; RIDs 1.1.1.1, 2.2.2.2, 3.3.3.3.</p></div>",
    "nodes": [
      {
        "id": "id1",
        "label": "1.1.1.1",
        "x": 20,
        "y": 40
      },
      {
        "id": "id2",
        "label": "2.2.2.2",
        "x": 50,
        "y": 40
      },
      {
        "id": "id3",
        "label": "3.3.3.3",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "id3"
    ],
    "explanation": "Highest RID wins when priority ties."
  },
  {
    "id": 514,
    "qid": "CCNA-MOD3-114",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the link that is point-to-point for OSPF (no DR).",
    "scenario": "<div class=\"scenario-text\"><p>Serial/P2P vs Ethernet LAN segment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "P2P WAN",
        "x": 30,
        "y": 40
      },
      {
        "id": "l2",
        "label": "LAN switch\nsegment",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "l1"
    ],
    "explanation": "Point-to-point has no DR election."
  },
  {
    "id": 515,
    "qid": "CCNA-MOD3-115",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that enable OSPFv2 on interfaces in area 0 via network statement.",
    "scenario": "<div class=\"scenario-text\"><p>Classic OSPF configuration.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "router ospf 1"
      },
      {
        "id": "l2",
        "label": "network 10.0.0.0 0.255.255.255 area 0"
      },
      {
        "id": "l3",
        "label": "spanning-tree mode rapid-pvst"
      },
      {
        "id": "l4",
        "label": "vtp mode transparent"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Process and network statement."
  },
  {
    "id": 516,
    "qid": "CCNA-MOD3-116",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that sets the OSPF router ID.",
    "scenario": "<div class=\"scenario-text\"><p>Stable RID configuration.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "router-id 1.1.1.1"
      },
      {
        "id": "l2",
        "label": "network 10.0.0.0 0.0.0.255 area 0"
      },
      {
        "id": "l3",
        "label": "passive-interface default"
      },
      {
        "id": "l4",
        "label": "auto-cost reference-bandwidth 1000"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "router-id sets the RID."
  },
  {
    "id": 517,
    "qid": "CCNA-MOD3-117",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that make Gi0/1 passive and set cost 50 on Gi0/2.",
    "scenario": "<div class=\"scenario-text\"><p>Interface-level OSPF tuning.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "passive-interface GigabitEthernet0/1"
      },
      {
        "id": "l2",
        "label": "interface GigabitEthernet0/2"
      },
      {
        "id": "l3",
        "label": "ip ospf cost 50"
      },
      {
        "id": "l4",
        "label": "ip address 10.0.0.1 255.255.255.0"
      }
    ],
    "correct": [
      "l1",
      "l3"
    ],
    "selectCount": 2,
    "explanation": "passive-interface and ip ospf cost."
  },
  {
    "id": 518,
    "qid": "CCNA-MOD3-118",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that prevents this router from becoming DR on an interface.",
    "scenario": "<div class=\"scenario-text\"><p>Priority configuration.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip ospf priority 0"
      },
      {
        "id": "l2",
        "label": "ip ospf priority 255"
      },
      {
        "id": "l3",
        "label": "ip ospf cost 1"
      },
      {
        "id": "l4",
        "label": "ip ospf hello-interval 10"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "Priority 0 makes the router ineligible for DR."
  },
  {
    "id": 519,
    "qid": "CCNA-MOD3-119",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that set point-to-point OSPF network type on an interface.",
    "scenario": "<div class=\"scenario-text\"><p>Force P2P over Ethernet.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "interface GigabitEthernet0/0"
      },
      {
        "id": "l2",
        "label": "ip ospf network point-to-point"
      },
      {
        "id": "l3",
        "label": "ip ospf network broadcast"
      },
      {
        "id": "l4",
        "label": "negotiation auto"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Interface context and point-to-point network type."
  },
  {
    "id": 520,
    "qid": "CCNA-MOD3-120",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that raises reference bandwidth so Gigabit costs are differentiated.",
    "scenario": "<div class=\"scenario-text\"><p>auto-cost reference-bandwidth.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "auto-cost reference-bandwidth 1000"
      },
      {
        "id": "l2",
        "label": "ip ospf cost 1"
      },
      {
        "id": "l3",
        "label": "bandwidth 1000000"
      },
      {
        "id": "l4",
        "label": "router-id 1.1.1.1"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "reference-bandwidth in Mbps recalculates costs."
  },
  {
    "id": 521,
    "qid": "CCNA-MOD3-121",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "How do OSPFv3 neighbors typically form adjacency on a link?",
    "scenario": "<div class=\"scenario-text\"><p>IPv6 OSPF neighbor discovery.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Using IPv6 link-local addresses"
      },
      {
        "id": "b",
        "text": "Using only global unicast for Hello"
      },
      {
        "id": "c",
        "text": "Using IPv4 RID exclusively for transport"
      },
      {
        "id": "d",
        "text": "Using MAC broadcasts only without IP"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "OSPFv3 uses link-local addresses for Hello and adjacency on the link."
  },
  {
    "id": 522,
    "qid": "CCNA-MOD3-122",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "Which command enables OSPFv3 on an interface for the IPv6 address family (common style)?",
    "scenario": "<div class=\"scenario-text\"><p>Interface-centric OSPFv3 configuration.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "ipv6 ospf 1 area 0"
      },
      {
        "id": "b",
        "text": "ip ospf 1 area 0"
      },
      {
        "id": "c",
        "text": "ospfv3 1 ipv6 area 0"
      },
      {
        "id": "d",
        "text": "Both interface styles exist depending on IOS mode"
      }
    ],
    "correct": [
      "d"
    ],
    "explanation": "Classic ipv6 ospf and newer ospfv3 AF syntax both appear in curricula/platforms."
  },
  {
    "id": 523,
    "qid": "CCNA-MOD3-123",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "What must be unique for OSPFv3 similar to OSPFv2?",
    "scenario": "<div class=\"scenario-text\"><p>Router identification.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Router ID (32-bit)"
      },
      {
        "id": "b",
        "text": "Process ID globally across AS"
      },
      {
        "id": "c",
        "text": "Interface MAC only"
      },
      {
        "id": "d",
        "text": "Hostname only"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Router ID remains a unique 32-bit value even for OSPFv3."
  },
  {
    "id": 524,
    "qid": "CCNA-MOD3-124",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "Which address is NOT required on an interface for OSPFv3 to form a link adjacency?",
    "scenario": "<div class=\"scenario-text\"><p>Minimum addressing for OSPFv3.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "IPv6 link-local"
      },
      {
        "id": "b",
        "text": "Global unicast (not strictly required for link adjacency)"
      },
      {
        "id": "c",
        "text": "IPv4 address always mandatory"
      },
      {
        "id": "d",
        "text": "IPv4 and IPv6 both mandatory"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Link-local is sufficient for adjacency; global is needed to advertise global prefixes."
  },
  {
    "id": 525,
    "qid": "CCNA-MOD3-125",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE OSPFv3 characteristics vs OSPFv2.",
    "scenario": "<div class=\"scenario-text\"><p>Protocol differences.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Runs over IPv6"
      },
      {
        "id": "b",
        "text": "Uses link-local for transport on link"
      },
      {
        "id": "c",
        "text": "Supports address families"
      },
      {
        "id": "d",
        "text": "Requires IPv4 on every interface always"
      },
      {
        "id": "e",
        "text": "Cannot use areas"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "IPv6 transport, link-local, and AF support."
  },
  {
    "id": 526,
    "qid": "CCNA-MOD3-126",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO ways to enable OSPFv3 on interfaces.",
    "scenario": "<div class=\"scenario-text\"><p>Configuration styles.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "ipv6 ospf <pid> area <area>"
      },
      {
        "id": "b",
        "text": "ospfv3 <pid> ipv6 area <area>"
      },
      {
        "id": "c",
        "text": "ip ospf area only for v3"
      },
      {
        "id": "d",
        "text": "vtp mode ospfv3"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Classic and AF-style interface commands."
  },
  {
    "id": 527,
    "qid": "CCNA-MOD3-127",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE verification commands useful for OSPFv3.",
    "scenario": "<div class=\"scenario-text\"><p>Operational checks.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "show ipv6 ospf neighbor"
      },
      {
        "id": "b",
        "text": "show ipv6 ospf interface"
      },
      {
        "id": "c",
        "text": "show ipv6 route ospf"
      },
      {
        "id": "d",
        "text": "show vlan brief only"
      },
      {
        "id": "e",
        "text": "show cdp neighbors only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Neighbor, interface, and IPv6 OSPF routes."
  },
  {
    "id": 528,
    "qid": "CCNA-MOD3-128",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO reasons OSPFv3 adjacency fails.",
    "scenario": "<div class=\"scenario-text\"><p>Troubleshooting v3.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Missing link-local / IPv6 not enabled"
      },
      {
        "id": "b",
        "text": "Area mismatch"
      },
      {
        "id": "c",
        "text": "Matching timers and area always fail"
      },
      {
        "id": "d",
        "text": "RID identical is required"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "IPv6 enablement and area matching are critical."
  },
  {
    "id": 529,
    "qid": "CCNA-MOD3-129",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE similarities between OSPFv2 and OSPFv3.",
    "scenario": "<div class=\"scenario-text\"><p>Shared concepts.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Areas and hierarchy"
      },
      {
        "id": "b",
        "text": "DR/BDR on multi-access"
      },
      {
        "id": "c",
        "text": "LSAs and SPF"
      },
      {
        "id": "d",
        "text": "Identical packet encoding always"
      },
      {
        "id": "e",
        "text": "Same IPv4-only transport"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Areas, DR/BDR, and SPF remain."
  },
  {
    "id": 530,
    "qid": "CCNA-MOD3-130",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO Router ID facts for OSPFv3.",
    "scenario": "<div class=\"scenario-text\"><p>RID still matters.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "32-bit value"
      },
      {
        "id": "b",
        "text": "Can be set with router-id"
      },
      {
        "id": "c",
        "text": "Must be an IPv6 global address"
      },
      {
        "id": "d",
        "text": "Must equal interface MAC"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "32-bit RID, manually set preferred."
  },
  {
    "id": 531,
    "qid": "CCNA-MOD3-131",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE multi-area OSPFv3 ideas.",
    "scenario": "<div class=\"scenario-text\"><p>Hierarchy in v3.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Area 0 backbone"
      },
      {
        "id": "b",
        "text": "ABR between areas"
      },
      {
        "id": "c",
        "text": "Type 3 inter-area info"
      },
      {
        "id": "d",
        "text": "VLANs replace areas"
      },
      {
        "id": "e",
        "text": "STP replaces SPF"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Backbone, ABR, inter-area LSAs."
  },
  {
    "id": 532,
    "qid": "CCNA-MOD3-132",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO instance ID uses (conceptual).",
    "scenario": "<div class=\"scenario-text\"><p>OSPFv3 instances.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Separate OSPFv3 processes/instances on a link"
      },
      {
        "id": "b",
        "text": "Allow multiple adjacencies contexts"
      },
      {
        "id": "c",
        "text": "Replace IPv6 addressing"
      },
      {
        "id": "d",
        "text": "Disable all Hellos permanently"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Instance IDs separate OSPFv3 contexts."
  },
  {
    "id": 533,
    "qid": "CCNA-MOD3-133",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE prerequisites before OSPFv3 Hellos are sent.",
    "scenario": "<div class=\"scenario-text\"><p>Bring-up checklist.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "IPv6 enabled on interface"
      },
      {
        "id": "b",
        "text": "OSPFv3 enabled for area"
      },
      {
        "id": "c",
        "text": "Interface up/up"
      },
      {
        "id": "d",
        "text": "IPv4 address mandatory"
      },
      {
        "id": "e",
        "text": "CDP required"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "IPv6, OSPFv3 enable, interface up."
  },
  {
    "id": 534,
    "qid": "CCNA-MOD3-134",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO address family concepts (newer CLI).",
    "scenario": "<div class=\"scenario-text\"><p>AF-aware OSPFv3.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "ipv6 address-family under router ospfv3"
      },
      {
        "id": "b",
        "text": "Independent IPv4/IPv6 AF options on some platforms"
      },
      {
        "id": "c",
        "text": "AF replaces need for areas"
      },
      {
        "id": "d",
        "text": "AF disables RID"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Address families separate protocol contexts."
  },
  {
    "id": 535,
    "qid": "CCNA-MOD3-135",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE differences in LSA handling philosophy (high level).",
    "scenario": "<div class=\"scenario-text\"><p>v3 design notes.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "IPv6 prefixes carried in newer LSA types"
      },
      {
        "id": "b",
        "text": "Transport separates from prefix advertisement"
      },
      {
        "id": "c",
        "text": "Link-local used on wire"
      },
      {
        "id": "d",
        "text": "OSPFv3 cannot flood LSAs"
      },
      {
        "id": "e",
        "text": "No SPF in v3"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Prefix LSAs, transport split, link-local."
  },
  {
    "id": 536,
    "qid": "CCNA-MOD3-136",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO passive-interface effects in OSPFv3.",
    "scenario": "<div class=\"scenario-text\"><p>Same idea as v2.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Suppresses Hellos on passive interfaces"
      },
      {
        "id": "b",
        "text": "Can still advertise prefixes"
      },
      {
        "id": "c",
        "text": "Forces DR election on passive"
      },
      {
        "id": "d",
        "text": "Changes IPv6 link-local"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "No Hellos; prefixes may still advertise."
  },
  {
    "id": 537,
    "qid": "CCNA-MOD3-137",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match OSPFv3 term to meaning.",
    "scenario": "<div class=\"scenario-text\"><p>v3 vocabulary.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Link-local"
      },
      {
        "id": "i2",
        "text": "Router ID"
      },
      {
        "id": "i3",
        "text": "Area ID"
      },
      {
        "id": "i4",
        "text": "Instance ID"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Adjacency transport address"
      },
      {
        "id": "z2",
        "label": "32-bit router identity"
      },
      {
        "id": "z3",
        "label": "Hierarchical domain segment"
      },
      {
        "id": "z4",
        "label": "Separates processes on a link"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Link-local, RID, area, instance."
  },
  {
    "id": 538,
    "qid": "CCNA-MOD3-138",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match command style to era/form.",
    "scenario": "<div class=\"scenario-text\"><p>OSPFv3 enablement.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "ipv6 ospf 1 area 0"
      },
      {
        "id": "i2",
        "text": "ospfv3 1 ipv6 area 0"
      },
      {
        "id": "i3",
        "text": "router ospfv3 1"
      },
      {
        "id": "i4",
        "text": "address-family ipv6 unicast"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Classic interface command"
      },
      {
        "id": "z2",
        "label": "Newer interface AF style"
      },
      {
        "id": "z3",
        "label": "Process start"
      },
      {
        "id": "z4",
        "label": "AF under process"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Classic, new interface, process, AF."
  },
  {
    "id": 539,
    "qid": "CCNA-MOD3-139",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Order OSPFv3 bring-up on a link.",
    "scenario": "<div class=\"scenario-text\"><p>From IPv6 to Full.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Enable IPv6 on interface"
      },
      {
        "id": "c2",
        "text": "Enable OSPFv3 area on interface"
      },
      {
        "id": "c3",
        "text": "Verify link-local neighbors"
      },
      {
        "id": "c4",
        "text": "Confirm Full and routes"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "IPv6 → OSPFv3 → neighbor → Full/routes."
  },
  {
    "id": 540,
    "qid": "CCNA-MOD3-140",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match verification command to info.",
    "scenario": "<div class=\"scenario-text\"><p>show commands.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "show ipv6 ospf neighbor"
      },
      {
        "id": "i2",
        "text": "show ipv6 ospf interface"
      },
      {
        "id": "i3",
        "text": "show ipv6 route ospf"
      },
      {
        "id": "i4",
        "text": "show ipv6 ospf database"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Adjacency table"
      },
      {
        "id": "z2",
        "label": "Per-interface OSPFv3 state"
      },
      {
        "id": "z3",
        "label": "OSPFv3-learned routes"
      },
      {
        "id": "z4",
        "label": "LSA database"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Neighbor, interface, route, database."
  },
  {
    "id": 541,
    "qid": "CCNA-MOD3-141",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match problem to v3-specific check.",
    "scenario": "<div class=\"scenario-text\"><p>Troubleshoot OSPFv3.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "No Hellos"
      },
      {
        "id": "i2",
        "text": "Area mismatch"
      },
      {
        "id": "i3",
        "text": "No global routes"
      },
      {
        "id": "i4",
        "text": "RID conflict"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "IPv6 enable / OSPFv3 enable"
      },
      {
        "id": "z2",
        "label": "Align area IDs"
      },
      {
        "id": "z3",
        "label": "Prefix advertisement / AF"
      },
      {
        "id": "z4",
        "label": "Unique router-id"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Enablement, area, prefixes, RID."
  },
  {
    "id": 542,
    "qid": "CCNA-MOD3-142",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match OSPFv2 vs OSPFv3 transport.",
    "scenario": "<div class=\"scenario-text\"><p>On-the-wire difference.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "OSPFv2"
      },
      {
        "id": "i2",
        "text": "OSPFv3"
      },
      {
        "id": "i3",
        "text": "Both"
      },
      {
        "id": "i4",
        "text": "Neither"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "IPv4 protocol 89"
      },
      {
        "id": "z2",
        "label": "IPv6 / link-local Hellos"
      },
      {
        "id": "z3",
        "label": "SPF / areas concept"
      },
      {
        "id": "z4",
        "label": "Uses TCP 179"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "v2 IPv4, v3 IPv6, shared concepts, not BGP."
  },
  {
    "id": 543,
    "qid": "CCNA-MOD3-143",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Order multi-area OSPFv3 design steps.",
    "scenario": "<div class=\"scenario-text\"><p>Add Area 1.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Keep Area 0 backbone"
      },
      {
        "id": "c2",
        "text": "Configure ABR interfaces in both areas"
      },
      {
        "id": "c3",
        "text": "Enable Area 1 routers"
      },
      {
        "id": "c4",
        "text": "Verify inter-area routes"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Backbone → ABR → Area 1 → verify."
  },
  {
    "id": 544,
    "qid": "CCNA-MOD3-144",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match AF concept to benefit.",
    "scenario": "<div class=\"scenario-text\"><p>Address families.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Separate IPv6 AF"
      },
      {
        "id": "i2",
        "text": "Process isolation"
      },
      {
        "id": "i3",
        "text": "Instance ID"
      },
      {
        "id": "i4",
        "text": "Single topology SPF"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "IPv6 protocol context"
      },
      {
        "id": "z2",
        "label": "Independent policy per AF"
      },
      {
        "id": "z3",
        "label": "Multiple contexts per link"
      },
      {
        "id": "z4",
        "label": "One SPF tree per topology"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "AF, isolation, instance, SPF."
  },
  {
    "id": 545,
    "qid": "CCNA-MOD3-145",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match passive use in OSPFv3.",
    "scenario": "<div class=\"scenario-text\"><p>Where to passive.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "User LAN interface"
      },
      {
        "id": "i2",
        "text": "Core P2P link"
      },
      {
        "id": "i3",
        "text": "Loopback for RID stability"
      },
      {
        "id": "i4",
        "text": "Internet edge without OSPF peers"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Often passive"
      },
      {
        "id": "z2",
        "label": "Usually active Hellos"
      },
      {
        "id": "z3",
        "label": "May be passive / advertised"
      },
      {
        "id": "z4",
        "label": "Passive or not in OSPF"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "LAN passive, core active, loopback, edge."
  },
  {
    "id": 546,
    "qid": "CCNA-MOD3-146",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Order RID stability practice for OSPFv3.",
    "scenario": "<div class=\"scenario-text\"><p>Avoid RID churn.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Configure router-id explicitly"
      },
      {
        "id": "c2",
        "text": "Prefer loopback addressing design"
      },
      {
        "id": "c3",
        "text": "Reload or clear process if RID must change"
      },
      {
        "id": "c4",
        "text": "Verify with show ipv6 ospf"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Set RID → loopback design → clear if needed → verify."
  },
  {
    "id": 547,
    "qid": "CCNA-MOD3-147",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match LSA role concept shared with v2.",
    "scenario": "<div class=\"scenario-text\"><p>Still true in v3.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Router LSA role"
      },
      {
        "id": "i2",
        "text": "Network LSA role"
      },
      {
        "id": "i3",
        "text": "Inter-area info"
      },
      {
        "id": "i4",
        "text": "External info"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Describes router links"
      },
      {
        "id": "z2",
        "label": "Describes multi-access from DR"
      },
      {
        "id": "z3",
        "label": "From ABR"
      },
      {
        "id": "z4",
        "label": "From ASBR"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Router, network, inter-area, external roles."
  },
  {
    "id": 548,
    "qid": "CCNA-MOD3-148",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match show output focus for v3 adjacency.",
    "scenario": "<div class=\"scenario-text\"><p>Reading neighbors.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "State Full"
      },
      {
        "id": "i2",
        "text": "State Init"
      },
      {
        "id": "i3",
        "text": "Interface ID"
      },
      {
        "id": "i4",
        "text": "Dead timer"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Adjacency complete"
      },
      {
        "id": "z2",
        "label": "Hello seen one-way"
      },
      {
        "id": "z3",
        "label": "Local interface reference"
      },
      {
        "id": "z4",
        "label": "Holdtime remaining"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Full, Init, if-id, dead timer."
  },
  {
    "id": 549,
    "qid": "CCNA-MOD3-149",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the interface address type OSPFv3 uses for Hellos on the link.",
    "scenario": "<div class=\"scenario-text\"><p>Global vs link-local labels.</p></div>",
    "nodes": [
      {
        "id": "a1",
        "label": "FE80::1\nlink-local",
        "x": 30,
        "y": 40
      },
      {
        "id": "a2",
        "label": "2001:db8::1\nglobal",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "a1"
    ],
    "explanation": "OSPFv3 Hellos use link-local."
  },
  {
    "id": 550,
    "qid": "CCNA-MOD3-150",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the ABR for OSPFv3 Area 0 and Area 1.",
    "scenario": "<div class=\"scenario-text\"><p>Same hierarchy idea as v2.</p></div>",
    "nodes": [
      {
        "id": "b1",
        "label": "Internal A1",
        "x": 20,
        "y": 40
      },
      {
        "id": "b2",
        "label": "ABR A0/A1",
        "x": 50,
        "y": 40
      },
      {
        "id": "b3",
        "label": "Internal A0",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "b2"
    ],
    "explanation": "ABR sits on area border."
  },
  {
    "id": 551,
    "qid": "CCNA-MOD3-151",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the router that needs ipv6 unicast-routing enabled to forward IPv6.",
    "scenario": "<div class=\"scenario-text\"><p>OSPFv3 routing vs host-only.</p></div>",
    "nodes": [
      {
        "id": "r1",
        "label": "Router\nforwarding",
        "x": 30,
        "y": 40
      },
      {
        "id": "r2",
        "label": "Host only",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "r1"
    ],
    "explanation": "Routers need IPv6 routing enabled to forward."
  },
  {
    "id": 552,
    "qid": "CCNA-MOD3-152",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the neighbor state showing successful OSPFv3 adjacency.",
    "scenario": "<div class=\"scenario-text\"><p>Full vs Down labels.</p></div>",
    "nodes": [
      {
        "id": "s1",
        "label": "Full",
        "x": 30,
        "y": 40
      },
      {
        "id": "s2",
        "label": "Down",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "s1"
    ],
    "explanation": "Full is synchronized adjacency."
  },
  {
    "id": 553,
    "qid": "CCNA-MOD3-153",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the process that should have a unique Router ID.",
    "scenario": "<div class=\"scenario-text\"><p>Two OSPFv3 processes on a router.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "OSPFv3 PID 1\nRID 1.1.1.1",
        "x": 30,
        "y": 40
      },
      {
        "id": "p2",
        "label": "OSPFv3 PID 2\nRID 1.1.1.1",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "p2"
    ],
    "explanation": "Duplicate RIDs across processes/routers cause problems; unique RIDs required."
  },
  {
    "id": 554,
    "qid": "CCNA-MOD3-154",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the link where instance ID mismatch would prevent adjacency.",
    "scenario": "<div class=\"scenario-text\"><p>Two ends of a P2P link with instance labels.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "R1 inst 0 ↔ R2 inst 1",
        "x": 50,
        "y": 40
      },
      {
        "id": "l2",
        "label": "Matched inst 0",
        "x": 50,
        "y": 70
      }
    ],
    "correct": [
      "l1"
    ],
    "explanation": "Instance ID must match on the link."
  },
  {
    "id": 555,
    "qid": "CCNA-MOD3-155",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that enable OSPFv3 area 0 on an interface (classic style).",
    "scenario": "<div class=\"scenario-text\"><p>Interface OSPFv3 enablement.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "interface GigabitEthernet0/0"
      },
      {
        "id": "l2",
        "label": "ipv6 ospf 1 area 0"
      },
      {
        "id": "l3",
        "label": "ip ospf 1 area 0"
      },
      {
        "id": "l4",
        "label": "ipv6 address 2001:db8::1/64"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Interface and ipv6 ospf area."
  },
  {
    "id": 556,
    "qid": "CCNA-MOD3-156",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that sets OSPFv3 router ID under the process.",
    "scenario": "<div class=\"scenario-text\"><p>RID configuration.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "router-id 1.1.1.1"
      },
      {
        "id": "l2",
        "label": "ipv6 router ospf 1"
      },
      {
        "id": "l3",
        "label": "area 0 range 2001:db8::/32"
      },
      {
        "id": "l4",
        "label": "passive-interface default"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "router-id command sets the 32-bit RID."
  },
  {
    "id": 557,
    "qid": "CCNA-MOD3-157",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines related to enabling IPv6 routing and an interface address.",
    "scenario": "<div class=\"scenario-text\"><p>Prerequisites for OSPFv3 data plane.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ipv6 unicast-routing"
      },
      {
        "id": "l2",
        "label": "ipv6 address 2001:db8:1::1/64"
      },
      {
        "id": "l3",
        "label": "ip route 0.0.0.0 0.0.0.0 1.1.1.1"
      },
      {
        "id": "l4",
        "label": "vtp mode transparent"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Unicast-routing and IPv6 address."
  },
  {
    "id": 558,
    "qid": "CCNA-MOD3-158",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that places an interface in OSPFv3 area 1.",
    "scenario": "<div class=\"scenario-text\"><p>Multi-area interface assignment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ipv6 ospf 1 area 1"
      },
      {
        "id": "l2",
        "label": "ipv6 ospf 1 area 0"
      },
      {
        "id": "l3",
        "label": "ip ospf 1 area 1"
      },
      {
        "id": "l4",
        "label": "passive-interface Gi0/1"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "area 1 in the ipv6 ospf command."
  },
  {
    "id": 559,
    "qid": "CCNA-MOD3-159",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that would appear in a newer ospfv3 AF configuration approach.",
    "scenario": "<div class=\"scenario-text\"><p>AF-style process.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "router ospfv3 1"
      },
      {
        "id": "l2",
        "label": "address-family ipv6 unicast"
      },
      {
        "id": "l3",
        "label": "ip route 0.0.0.0 0.0.0.0 Null0"
      },
      {
        "id": "l4",
        "label": "vlan 10"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "router ospfv3 and address-family ipv6."
  },
  {
    "id": 560,
    "qid": "CCNA-MOD3-160",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that suppresses OSPFv3 Hellos on an interface.",
    "scenario": "<div class=\"scenario-text\"><p>Passive interface for v3.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "passive-interface GigabitEthernet0/1"
      },
      {
        "id": "l2",
        "label": "ipv6 ospf 1 area 0"
      },
      {
        "id": "l3",
        "label": "ipv6 enable"
      },
      {
        "id": "l4",
        "label": "no shutdown"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "passive-interface suppresses Hellos."
  },
  {
    "id": 561,
    "qid": "CCNA-MOD3-161",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "What is the primary purpose of HSRP?",
    "scenario": "<div class=\"scenario-text\"><p>First-hop redundancy for clients.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Provide a virtual IP gateway shared by routers"
      },
      {
        "id": "b",
        "text": "Replace OSPF entirely"
      },
      {
        "id": "c",
        "text": "Encrypt all LAN traffic"
      },
      {
        "id": "d",
        "text": "Negotiate trunks"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "HSRP presents a virtual IP/MAC so hosts keep a single default gateway while routers provide redundancy."
  },
  {
    "id": 562,
    "qid": "CCNA-MOD3-162",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "Which HSRP state is the forwarding active gateway?",
    "scenario": "<div class=\"scenario-text\"><p>HSRP role names.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Speak"
      },
      {
        "id": "b",
        "text": "Standby"
      },
      {
        "id": "c",
        "text": "Active"
      },
      {
        "id": "d",
        "text": "Listen"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "Active forwards traffic for the virtual IP; Standby is ready to take over."
  },
  {
    "id": 563,
    "qid": "CCNA-MOD3-163",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "What happens when HSRP preemption is enabled and a higher-priority router recovers?",
    "scenario": "<div class=\"scenario-text\"><p>Priority 110 recovers while priority 100 is Active.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Higher priority takes Active role again"
      },
      {
        "id": "b",
        "text": "Nothing until manual failover"
      },
      {
        "id": "c",
        "text": "Both become Active permanently"
      },
      {
        "id": "d",
        "text": "Virtual IP changes"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Preemption allows the preferred higher-priority router to reassume Active."
  },
  {
    "id": 564,
    "qid": "CCNA-MOD3-164",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "single",
    "prompt": "Which protocol is an IETF standard similar in goal to HSRP?",
    "scenario": "<div class=\"scenario-text\"><p>Standards-based FHRP.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "VRRP"
      },
      {
        "id": "b",
        "text": "GLBP only"
      },
      {
        "id": "c",
        "text": "PAgP"
      },
      {
        "id": "d",
        "text": "DTP"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "VRRP is the open standard; HSRP is Cisco proprietary; GLBP adds per-host load balancing."
  },
  {
    "id": 565,
    "qid": "CCNA-MOD3-165",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE HSRP components.",
    "scenario": "<div class=\"scenario-text\"><p>Virtual gateway anatomy.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Virtual IP"
      },
      {
        "id": "b",
        "text": "Virtual MAC"
      },
      {
        "id": "c",
        "text": "Active/Standby roles"
      },
      {
        "id": "d",
        "text": "OSPF RID mandatory as VIP"
      },
      {
        "id": "e",
        "text": "STP root as VIP"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "VIP, vMAC, and Active/Standby."
  },
  {
    "id": 566,
    "qid": "CCNA-MOD3-166",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO triggers for HSRP failover to Standby.",
    "scenario": "<div class=\"scenario-text\"><p>When Active fails.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Active stops Hellos past holdtime"
      },
      {
        "id": "b",
        "text": "Tracked object failure if configured"
      },
      {
        "id": "c",
        "text": "VTP update"
      },
      {
        "id": "d",
        "text": "CDP timer expiry only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Hello loss and tracking can trigger failover."
  },
  {
    "id": 567,
    "qid": "CCNA-MOD3-167",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE differences or relations among HSRP/VRRP/GLBP.",
    "scenario": "<div class=\"scenario-text\"><p>FHRP family.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "HSRP Cisco proprietary"
      },
      {
        "id": "b",
        "text": "VRRP standard"
      },
      {
        "id": "c",
        "text": "GLBP can load-balance per host"
      },
      {
        "id": "d",
        "text": "All replace BGP"
      },
      {
        "id": "e",
        "text": "All require Access ports only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "HSRP proprietary, VRRP standard, GLBP load-shares."
  },
  {
    "id": 568,
    "qid": "CCNA-MOD3-168",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO effects of raising HSRP priority.",
    "scenario": "<div class=\"scenario-text\"><p>Influence Active election.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "More likely to become Active"
      },
      {
        "id": "b",
        "text": "With preemption, can reclaim Active"
      },
      {
        "id": "c",
        "text": "Changes OSPF cost automatically"
      },
      {
        "id": "d",
        "text": "Disables Standby"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Higher priority wins Active; preemption reclaims."
  },
  {
    "id": 569,
    "qid": "CCNA-MOD3-169",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE verification commands for HSRP.",
    "scenario": "<div class=\"scenario-text\"><p>Operational checks.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "show standby"
      },
      {
        "id": "b",
        "text": "show standby brief"
      },
      {
        "id": "c",
        "text": "show standby all"
      },
      {
        "id": "d",
        "text": "show vlan brief only"
      },
      {
        "id": "e",
        "text": "show cdp neighbors only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "show standby variants."
  },
  {
    "id": 570,
    "qid": "CCNA-MOD3-170",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO virtual MAC properties in HSRP.",
    "scenario": "<div class=\"scenario-text\"><p>Client ARP behavior.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Derived from HSRP group and version"
      },
      {
        "id": "b",
        "text": "Hosts ARP for VIP and learn vMAC"
      },
      {
        "id": "c",
        "text": "Equals physical MAC always"
      },
      {
        "id": "d",
        "text": "Changes every Hello"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Well-known virtual MAC pattern; hosts cache vMAC."
  },
  {
    "id": 571,
    "qid": "CCNA-MOD3-171",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE HSRP configuration elements.",
    "scenario": "<div class=\"scenario-text\"><p>Basic enablement.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "standby <group> ip <vip>"
      },
      {
        "id": "b",
        "text": "standby priority"
      },
      {
        "id": "c",
        "text": "standby preempt"
      },
      {
        "id": "d",
        "text": "spanning-tree mode mst required"
      },
      {
        "id": "e",
        "text": "vtp password as VIP"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "VIP, priority, preempt."
  },
  {
    "id": 572,
    "qid": "CCNA-MOD3-172",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO reasons both routers show Active (split-brain style issues).",
    "scenario": "<div class=\"scenario-text\"><p>Mis-design symptoms.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "No Layer-2 path for Hellos between peers"
      },
      {
        "id": "b",
        "text": "Different VIP/group misconfig"
      },
      {
        "id": "c",
        "text": "Perfect Hello path"
      },
      {
        "id": "d",
        "text": "Identical priorities with preemption always safe"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Hello path breaks or group/VIP mismatch can dual-active."
  },
  {
    "id": 573,
    "qid": "CCNA-MOD3-173",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE tracking use cases with HSRP.",
    "scenario": "<div class=\"scenario-text\"><p>Object tracking.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Track uplink interface"
      },
      {
        "id": "b",
        "text": "Decrement priority on failure"
      },
      {
        "id": "c",
        "text": "Failover before VIP becomes blackhole"
      },
      {
        "id": "d",
        "text": "Track VTP revision only"
      },
      {
        "id": "e",
        "text": "Track CDP version only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Track uplinks and decrement priority to failover early."
  },
  {
    "id": 574,
    "qid": "CCNA-MOD3-174",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO GLBP characteristics.",
    "scenario": "<div class=\"scenario-text\"><p>Compared to HSRP.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "AVG and AVF roles"
      },
      {
        "id": "b",
        "text": "Per-host MAC load balancing options"
      },
      {
        "id": "c",
        "text": "Only one forwarder ever"
      },
      {
        "id": "d",
        "text": "No virtual IP"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "GLBP uses AVG/AVF and can load-balance."
  },
  {
    "id": 575,
    "qid": "CCNA-MOD3-175",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select THREE client-side effects of FHRP.",
    "scenario": "<div class=\"scenario-text\"><p>What hosts see.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Single default gateway IP"
      },
      {
        "id": "b",
        "text": "Stable ARP to virtual MAC"
      },
      {
        "id": "c",
        "text": "No reconfiguration on failover"
      },
      {
        "id": "d",
        "text": "Must run HSRP themselves"
      },
      {
        "id": "e",
        "text": "Must change gateway on each fail"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Stable VIP/vMAC; hosts unchanged on failover."
  },
  {
    "id": 576,
    "qid": "CCNA-MOD3-176",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "multiselect",
    "prompt": "Select TWO version notes (HSRPv1 vs v2 conceptual).",
    "scenario": "<div class=\"scenario-text\"><p>Group ranges / IPv6.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "v2 supports larger group ID space and IPv6 options on platforms"
      },
      {
        "id": "b",
        "text": "v1 classic IPv4 groups 0–255"
      },
      {
        "id": "c",
        "text": "v1 requires GLBP"
      },
      {
        "id": "d",
        "text": "v2 eliminates Active role"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "v2 expands capabilities; v1 is classic IPv4 range."
  },
  {
    "id": 577,
    "qid": "CCNA-MOD3-177",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match FHRP protocol to trait.",
    "scenario": "<div class=\"scenario-text\"><p>Choose the right tool.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "HSRP"
      },
      {
        "id": "i2",
        "text": "VRRP"
      },
      {
        "id": "i3",
        "text": "GLBP"
      },
      {
        "id": "i4",
        "text": "OSPF"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Cisco proprietary gateway redundancy"
      },
      {
        "id": "z2",
        "label": "IETF standard gateway redundancy"
      },
      {
        "id": "z3",
        "label": "Cisco load-balancing FHRP"
      },
      {
        "id": "z4",
        "label": "Routing protocol not FHRP"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "HSRP, VRRP, GLBP, OSPF."
  },
  {
    "id": 578,
    "qid": "CCNA-MOD3-178",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match HSRP state to role.",
    "scenario": "<div class=\"scenario-text\"><p>State machine basics.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Active"
      },
      {
        "id": "i2",
        "text": "Standby"
      },
      {
        "id": "i3",
        "text": "Speak"
      },
      {
        "id": "i4",
        "text": "Listen"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Forwards for VIP"
      },
      {
        "id": "z2",
        "label": "Ready to take over"
      },
      {
        "id": "z3",
        "label": "Participating in election"
      },
      {
        "id": "z4",
        "label": "Aware but not elected"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Active, Standby, Speak, Listen."
  },
  {
    "id": 579,
    "qid": "CCNA-MOD3-179",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Order HSRP failover when Active dies.",
    "scenario": "<div class=\"scenario-text\"><p>No preemption complications.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Active stops Hellos"
      },
      {
        "id": "c2",
        "text": "Standby holdtime expires"
      },
      {
        "id": "c3",
        "text": "Standby becomes Active"
      },
      {
        "id": "c4",
        "text": "Hosts keep using VIP/vMAC"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Hello loss → timeout → new Active → hosts unchanged."
  },
  {
    "id": 580,
    "qid": "CCNA-MOD3-180",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match config knob to effect.",
    "scenario": "<div class=\"scenario-text\"><p>HSRP tuning.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "standby priority"
      },
      {
        "id": "i2",
        "text": "standby preempt"
      },
      {
        "id": "i3",
        "text": "standby track"
      },
      {
        "id": "i4",
        "text": "standby ip"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Election preference"
      },
      {
        "id": "z2",
        "label": "Reclaim Active when better"
      },
      {
        "id": "z3",
        "label": "Tie priority to object"
      },
      {
        "id": "z4",
        "label": "Define VIP"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Priority, preempt, track, VIP."
  },
  {
    "id": 581,
    "qid": "CCNA-MOD3-181",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match problem to FHRP symptom.",
    "scenario": "<div class=\"scenario-text\"><p>Troubleshooting.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Dual Active"
      },
      {
        "id": "i2",
        "text": "No standby"
      },
      {
        "id": "i3",
        "text": "VIP not answering"
      },
      {
        "id": "i4",
        "text": "Slow failover"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Hello path broken / mismatch"
      },
      {
        "id": "z2",
        "label": "Only one router configured"
      },
      {
        "id": "z3",
        "label": "Wrong VIP or interface down"
      },
      {
        "id": "z4",
        "label": "Timers / tracking not tuned"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Dual active, solo, VIP fail, slow fail."
  },
  {
    "id": 582,
    "qid": "CCNA-MOD3-182",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Order basic HSRP pair configuration.",
    "scenario": "<div class=\"scenario-text\"><p>Two routers one VIP.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Configure same VIP/group on both"
      },
      {
        "id": "c2",
        "text": "Set priorities (prefer one)"
      },
      {
        "id": "c3",
        "text": "Enable preempt on preferred"
      },
      {
        "id": "c4",
        "text": "Verify show standby"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "VIP/group → priority → preempt → verify."
  },
  {
    "id": 583,
    "qid": "CCNA-MOD3-183",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match virtual MAC idea to protocol.",
    "scenario": "<div class=\"scenario-text\"><p>What hosts ARP.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "HSRP vMAC"
      },
      {
        "id": "i2",
        "text": "VRRP vMAC"
      },
      {
        "id": "i3",
        "text": "GLBP AVF MAC"
      },
      {
        "id": "i4",
        "text": "Physical burned-in"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Well-known Cisco HSRP pattern"
      },
      {
        "id": "z2",
        "label": "Standard VRRP pattern"
      },
      {
        "id": "z3",
        "label": "Per-forwarder MAC in GLBP"
      },
      {
        "id": "z4",
        "label": "Not used as VIP MAC"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "HSRP, VRRP, GLBP, physical."
  },
  {
    "id": 584,
    "qid": "CCNA-MOD3-184",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match tracking design to intent.",
    "scenario": "<div class=\"scenario-text\"><p>Avoid blackholes.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Track WAN interface"
      },
      {
        "id": "i2",
        "text": "Decrement 20"
      },
      {
        "id": "i3",
        "text": "Preempt enabled"
      },
      {
        "id": "i4",
        "text": "No tracking"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Detect uplink loss"
      },
      {
        "id": "z2",
        "label": "Drop priority below peer"
      },
      {
        "id": "z3",
        "label": "Allow return to preferred"
      },
      {
        "id": "z4",
        "label": "Failover only on router death"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Track, decrement, preempt, no track."
  },
  {
    "id": 585,
    "qid": "CCNA-MOD3-185",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match client gateway config to FHRP.",
    "scenario": "<div class=\"scenario-text\"><p>What to put on PCs.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Default gateway = VIP"
      },
      {
        "id": "i2",
        "text": "Default gateway = Active physical IP"
      },
      {
        "id": "i3",
        "text": "Two gateways without FHRP"
      },
      {
        "id": "i4",
        "text": "No gateway"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Correct FHRP design"
      },
      {
        "id": "z2",
        "label": "Breaks on Active failure"
      },
      {
        "id": "z3",
        "label": "Messy client failover"
      },
      {
        "id": "z4",
        "label": "No remote access"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "VIP correct; physical IP fragile."
  },
  {
    "id": 586,
    "qid": "CCNA-MOD3-186",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Order verification after HSRP change.",
    "scenario": "<div class=\"scenario-text\"><p>Priority updated.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "show standby brief"
      },
      {
        "id": "c2",
        "text": "Confirm Active/Standby roles"
      },
      {
        "id": "c3",
        "text": "Ping VIP from client"
      },
      {
        "id": "c4",
        "text": "Failover test shut Active"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Show → roles → ping VIP → test failover."
  },
  {
    "id": 587,
    "qid": "CCNA-MOD3-187",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match GLBP role to function.",
    "scenario": "<div class=\"scenario-text\"><p>Load-balancing FHRP.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "AVG"
      },
      {
        "id": "i2",
        "text": "AVF"
      },
      {
        "id": "i3",
        "text": "Active (HSRP term)"
      },
      {
        "id": "i4",
        "text": "DR"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Assigns MACs / answers ARP"
      },
      {
        "id": "z2",
        "label": "Forwards traffic for a MAC"
      },
      {
        "id": "z3",
        "label": "HSRP forwarder role"
      },
      {
        "id": "z4",
        "label": "OSPF multi-access role"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "AVG, AVF, HSRP Active, OSPF DR."
  },
  {
    "id": 588,
    "qid": "CCNA-MOD3-188",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "dragdrop",
    "prompt": "Match Hello path requirement to design rule.",
    "scenario": "<div class=\"scenario-text\"><p>HSRP peers communication.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Same VLAN/segment for group"
      },
      {
        "id": "i2",
        "text": "Matching group number"
      },
      {
        "id": "i3",
        "text": "Matching VIP"
      },
      {
        "id": "i4",
        "text": "Layer-3 only path without L2"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Hellos must be received"
      },
      {
        "id": "z2",
        "label": "Peers in same group"
      },
      {
        "id": "z3",
        "label": "Same virtual gateway"
      },
      {
        "id": "z4",
        "label": "Can cause dual-active"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "L2 segment, group, VIP, no L2 risk."
  },
  {
    "id": 589,
    "qid": "CCNA-MOD3-189",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the router that is HSRP Active based on priority labels.",
    "scenario": "<div class=\"scenario-text\"><p>R1 priority 100; R2 priority 150 with preempt.</p></div>",
    "nodes": [
      {
        "id": "h1",
        "label": "R1\nPri 100",
        "x": 30,
        "y": 40
      },
      {
        "id": "h2",
        "label": "R2\nPri 150",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "h2"
    ],
    "explanation": "Higher priority with preempt is Active."
  },
  {
    "id": 590,
    "qid": "CCNA-MOD3-190",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the address clients should use as default gateway.",
    "scenario": "<div class=\"scenario-text\"><p>Physical IPs and VIP shown.</p></div>",
    "nodes": [
      {
        "id": "v1",
        "label": "VIP\n10.1.1.1",
        "x": 30,
        "y": 40
      },
      {
        "id": "v2",
        "label": "R1 phys\n10.1.1.2",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "v1"
    ],
    "explanation": "Clients use the virtual IP."
  },
  {
    "id": 591,
    "qid": "CCNA-MOD3-191",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the protocol that is IETF standard FHRP.",
    "scenario": "<div class=\"scenario-text\"><p>HSRP vs VRRP labels.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "HSRP",
        "x": 30,
        "y": 40
      },
      {
        "id": "p2",
        "label": "VRRP",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "p2"
    ],
    "explanation": "VRRP is the standard."
  },
  {
    "id": 592,
    "qid": "CCNA-MOD3-192",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the Standby router.",
    "scenario": "<div class=\"scenario-text\"><p>Active and Standby roles labeled.</p></div>",
    "nodes": [
      {
        "id": "a1",
        "label": "Active",
        "x": 30,
        "y": 40
      },
      {
        "id": "a2",
        "label": "Standby",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "a2"
    ],
    "explanation": "Standby waits to take over."
  },
  {
    "id": 593,
    "qid": "CCNA-MOD3-193",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the uplink that should be tracked to avoid blackholing.",
    "scenario": "<div class=\"scenario-text\"><p>Active router's WAN vs LAN-only link.</p></div>",
    "nodes": [
      {
        "id": "u1",
        "label": "WAN uplink",
        "x": 30,
        "y": 40
      },
      {
        "id": "u2",
        "label": "LAN only",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "u1"
    ],
    "explanation": "Track the WAN so priority drops if uplink fails."
  },
  {
    "id": 594,
    "qid": "CCNA-MOD3-194",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "prompt": "Click the FHRP that can assign different virtual MACs per host for load balancing.",
    "scenario": "<div class=\"scenario-text\"><p>HSRP vs GLBP.</p></div>",
    "nodes": [
      {
        "id": "g1",
        "label": "HSRP",
        "x": 30,
        "y": 40
      },
      {
        "id": "g2",
        "label": "GLBP",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "g2"
    ],
    "explanation": "GLBP supports per-host load balancing via AVFs."
  },
  {
    "id": 595,
    "qid": "CCNA-MOD3-195",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that configure HSRP group 1 with VIP 10.1.1.1.",
    "scenario": "<div class=\"scenario-text\"><p>Basic HSRP interface config.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "interface Vlan10"
      },
      {
        "id": "l2",
        "label": "standby 1 ip 10.1.1.1"
      },
      {
        "id": "l3",
        "label": "ip route 0.0.0.0 0.0.0.0 10.0.0.1"
      },
      {
        "id": "l4",
        "label": "router ospf 1"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Interface and standby ip."
  },
  {
    "id": 596,
    "qid": "CCNA-MOD3-196",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that set priority 150 and enable preempt.",
    "scenario": "<div class=\"scenario-text\"><p>Preferred Active configuration.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "standby 1 priority 150"
      },
      {
        "id": "l2",
        "label": "standby 1 preempt"
      },
      {
        "id": "l3",
        "label": "standby 1 ip 10.1.1.1"
      },
      {
        "id": "l4",
        "label": "no shutdown"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Priority and preempt."
  },
  {
    "id": 597,
    "qid": "CCNA-MOD3-197",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that tracks GigabitEthernet0/1 and decrements priority by 30.",
    "scenario": "<div class=\"scenario-text\"><p>Object tracking with HSRP.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "standby 1 track GigabitEthernet0/1 30"
      },
      {
        "id": "l2",
        "label": "standby 1 priority 150"
      },
      {
        "id": "l3",
        "label": "standby 1 ip 10.1.1.1"
      },
      {
        "id": "l4",
        "label": "ip ospf cost 10"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "standby track ties priority to interface state."
  },
  {
    "id": 598,
    "qid": "CCNA-MOD3-198",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that would be wrong for a working HSRP pair (mismatch example).",
    "scenario": "<div class=\"scenario-text\"><p>Misconfiguration review.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "standby 1 ip 10.1.1.1"
      },
      {
        "id": "l2",
        "label": "standby 2 ip 10.1.1.2"
      },
      {
        "id": "l3",
        "label": "standby 1 priority 100"
      },
      {
        "id": "l4",
        "label": "standby 1 preempt"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Different group/VIP pairing breaks the pair—group and VIP must match across peers."
  },
  {
    "id": 599,
    "qid": "CCNA-MOD3-199",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that sets HSRP version 2 on an interface (where supported).",
    "scenario": "<div class=\"scenario-text\"><p>Version selection.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "standby version 2"
      },
      {
        "id": "l2",
        "label": "standby 1 ip 10.1.1.1"
      },
      {
        "id": "l3",
        "label": "standby 1 priority 110"
      },
      {
        "id": "l4",
        "label": "vrrp 1 ip 10.1.1.1"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "standby version 2 enables HSRPv2."
  },
  {
    "id": 600,
    "qid": "CCNA-MOD3-200",
    "moduleId": "mod3",
    "module": "IP Routing",
    "domain": "IP Routing",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines related to VRRP virtual IP configuration style.",
    "scenario": "<div class=\"scenario-text\"><p>Standards-based alternative.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "vrrp 1 ip 10.1.1.1"
      },
      {
        "id": "l2",
        "label": "vrrp 1 priority 150"
      },
      {
        "id": "l3",
        "label": "standby 1 ip 10.1.1.1"
      },
      {
        "id": "l4",
        "label": "glbp 1 ip 10.1.1.1"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "vrrp ip and priority lines."
  },
  {
    "id": 601,
    "qid": "CCNA-MOD4-001",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "Which DNS record type maps a hostname to an IPv4 address?",
    "scenario": "<div class=\"scenario-text\"><p>Resolve www.example.com to 203.0.113.10.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "A"
      },
      {
        "id": "b",
        "text": "AAAA"
      },
      {
        "id": "c",
        "text": "PTR"
      },
      {
        "id": "d",
        "text": "MX"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "A records map names to IPv4 addresses; AAAA maps to IPv6; PTR is reverse; MX is mail."
  },
  {
    "id": 602,
    "qid": "CCNA-MOD4-002",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "Which protocol provides encrypted file transfer over SSH?",
    "scenario": "<div class=\"scenario-text\"><p>Replace insecure FTP for device image transfers.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "TFTP"
      },
      {
        "id": "b",
        "text": "FTP"
      },
      {
        "id": "c",
        "text": "SFTP / SCP"
      },
      {
        "id": "d",
        "text": "HTTP"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "SFTP and SCP run over SSH and encrypt the session; TFTP/FTP do not."
  },
  {
    "id": 603,
    "qid": "CCNA-MOD4-003",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "What does a PTR record provide?",
    "scenario": "<div class=\"scenario-text\"><p>Reverse DNS lookup for 203.0.113.10.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Hostname for an IP address"
      },
      {
        "id": "b",
        "text": "Mail exchanger for a domain"
      },
      {
        "id": "c",
        "text": "IPv6 address only"
      },
      {
        "id": "d",
        "text": "CNAME alias only"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "PTR records map IP addresses back to hostnames (reverse DNS)."
  },
  {
    "id": 604,
    "qid": "CCNA-MOD4-004",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "Which DHCP message does the client send to accept an offered lease?",
    "scenario": "<div class=\"scenario-text\"><p>DORA process mid-exchange.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Discover"
      },
      {
        "id": "b",
        "text": "Offer"
      },
      {
        "id": "c",
        "text": "Request"
      },
      {
        "id": "d",
        "text": "Decline only"
      }
    ],
    "correct": [
      "c"
    ],
    "explanation": "After Offer, the client sends Request to accept the lease; server replies with Ack."
  },
  {
    "id": 605,
    "qid": "CCNA-MOD4-005",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE DNS record types and their roles.",
    "scenario": "<div class=\"scenario-text\"><p>Name resolution design.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "A maps name to IPv4"
      },
      {
        "id": "b",
        "text": "AAAA maps name to IPv6"
      },
      {
        "id": "c",
        "text": "CNAME aliases one name to another"
      },
      {
        "id": "d",
        "text": "PTR maps name to MAC only"
      },
      {
        "id": "e",
        "text": "MX maps to OSPF RID"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "A, AAAA, and CNAME are core forward/alias records."
  },
  {
    "id": 606,
    "qid": "CCNA-MOD4-006",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO secure alternatives to FTP/TFTP for file transfer.",
    "scenario": "<div class=\"scenario-text\"><p>Protect credentials and payload.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "SFTP"
      },
      {
        "id": "b",
        "text": "SCP"
      },
      {
        "id": "c",
        "text": "TFTP with no auth"
      },
      {
        "id": "d",
        "text": "HTTP cleartext only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "SFTP and SCP use SSH encryption."
  },
  {
    "id": 607,
    "qid": "CCNA-MOD4-007",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE DHCP troubleshooting checks when clients get no address.",
    "scenario": "<div class=\"scenario-text\"><p>DHCP failure isolation.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Server reachability / helper-address"
      },
      {
        "id": "b",
        "text": "Pool availability and exclusions"
      },
      {
        "id": "c",
        "text": "Snooping trust on server path"
      },
      {
        "id": "d",
        "text": "STP root priority only"
      },
      {
        "id": "e",
        "text": "VTP domain name only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Helper, pool health, and snooping trust are primary."
  },
  {
    "id": 608,
    "qid": "CCNA-MOD4-008",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO characteristics of an MX record.",
    "scenario": "<div class=\"scenario-text\"><p>Email delivery DNS.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Points to a mail server hostname"
      },
      {
        "id": "b",
        "text": "Includes preference values"
      },
      {
        "id": "c",
        "text": "Stores user passwords"
      },
      {
        "id": "d",
        "text": "Replaces A records entirely"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "MX names the mail host and preference order."
  },
  {
    "id": 609,
    "qid": "CCNA-MOD4-009",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE components of a DHCP pool on IOS.",
    "scenario": "<div class=\"scenario-text\"><p>LAN addressing service.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "network statement"
      },
      {
        "id": "b",
        "text": "default-router"
      },
      {
        "id": "c",
        "text": "dns-server"
      },
      {
        "id": "d",
        "text": "router ospf 1"
      },
      {
        "id": "e",
        "text": "spanning-tree mode rapid-pvst"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "network, default-router, and dns-server are standard pool options."
  },
  {
    "id": 610,
    "qid": "CCNA-MOD4-010",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO reasons to prefer SCP/SFTP over TFTP in production.",
    "scenario": "<div class=\"scenario-text\"><p>Operational security.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Encryption of credentials and data"
      },
      {
        "id": "b",
        "text": "Authentication via SSH keys/passwords"
      },
      {
        "id": "c",
        "text": "Faster than any other protocol always"
      },
      {
        "id": "d",
        "text": "No need for IP addressing"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Security and authentication are the drivers."
  },
  {
    "id": 611,
    "qid": "CCNA-MOD4-011",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE DNS troubleshooting steps for failed name resolution.",
    "scenario": "<div class=\"scenario-text\"><p>Client cannot resolve names.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Verify client DNS server settings"
      },
      {
        "id": "b",
        "text": "Test with nslookup/dig"
      },
      {
        "id": "c",
        "text": "Confirm DNS server reachability"
      },
      {
        "id": "d",
        "text": "Change native VLAN only"
      },
      {
        "id": "e",
        "text": "Disable all ACLs blindly"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Client config, query tools, and path to DNS server."
  },
  {
    "id": 612,
    "qid": "CCNA-MOD4-012",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO UDP ports associated with DNS queries (classic).",
    "scenario": "<div class=\"scenario-text\"><p>Firewall rules for DNS.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "53"
      },
      {
        "id": "b",
        "text": "UDP 53 primarily for queries"
      },
      {
        "id": "c",
        "text": "TCP 22 only"
      },
      {
        "id": "d",
        "text": "UDP 67 only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "DNS uses port 53 (UDP for most queries; TCP for larger/zone)."
  },
  {
    "id": 613,
    "qid": "CCNA-MOD4-013",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE secure management file-transfer practices.",
    "scenario": "<div class=\"scenario-text\"><p>Device image and config handling.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Use SCP/SFTP instead of TFTP when possible"
      },
      {
        "id": "b",
        "text": "Authenticate servers/keys"
      },
      {
        "id": "c",
        "text": "Limit source IPs via ACL"
      },
      {
        "id": "d",
        "text": "Leave TFTP open to Internet"
      },
      {
        "id": "e",
        "text": "Share enable secret in filenames"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Encrypted protocols, auth, and ACL limits."
  },
  {
    "id": 614,
    "qid": "CCNA-MOD4-014",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO symptoms of exhausted DHCP pool.",
    "scenario": "<div class=\"scenario-text\"><p>No free leases.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "New clients fail to obtain addresses"
      },
      {
        "id": "b",
        "text": "May see APIPA on Windows clients"
      },
      {
        "id": "c",
        "text": "OSPF neighbors drop always"
      },
      {
        "id": "d",
        "text": "STP reconverges campus-wide"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "No leases left yields failed DHCP and APIPA."
  },
  {
    "id": 615,
    "qid": "CCNA-MOD4-015",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE record types used in a typical web + mail domain.",
    "scenario": "<div class=\"scenario-text\"><p>DNS zone contents.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "A / AAAA for web hosts"
      },
      {
        "id": "b",
        "text": "MX for mail"
      },
      {
        "id": "c",
        "text": "CNAME for www alias"
      },
      {
        "id": "d",
        "text": "OSPF type-5 LSA"
      },
      {
        "id": "e",
        "text": "HSRP virtual MAC as DNS"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Address, mail, and alias records."
  },
  {
    "id": 616,
    "qid": "CCNA-MOD4-016",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO helper-address roles beyond DHCP.",
    "scenario": "<div class=\"scenario-text\"><p>ip helper-address services.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Can forward other selected UDP broadcasts"
      },
      {
        "id": "b",
        "text": "Primarily used to relay DHCP to remote servers"
      },
      {
        "id": "c",
        "text": "Replaces all static routes"
      },
      {
        "id": "d",
        "text": "Disables DNS permanently"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "DHCP relay is primary; other UDP helpers possible."
  },
  {
    "id": 617,
    "qid": "CCNA-MOD4-017",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match DNS record to purpose.",
    "scenario": "<div class=\"scenario-text\"><p>Zone file roles.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "A"
      },
      {
        "id": "i2",
        "text": "AAAA"
      },
      {
        "id": "i3",
        "text": "PTR"
      },
      {
        "id": "i4",
        "text": "MX"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Name → IPv4"
      },
      {
        "id": "z2",
        "label": "Name → IPv6"
      },
      {
        "id": "z3",
        "label": "IP → Name"
      },
      {
        "id": "z4",
        "label": "Mail exchanger"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "A, AAAA, PTR, MX."
  },
  {
    "id": 618,
    "qid": "CCNA-MOD4-018",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match transfer method to security level.",
    "scenario": "<div class=\"scenario-text\"><p>File transfer choices.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "TFTP"
      },
      {
        "id": "i2",
        "text": "FTP"
      },
      {
        "id": "i3",
        "text": "SFTP"
      },
      {
        "id": "i4",
        "text": "SCP"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "No encryption, UDP"
      },
      {
        "id": "z2",
        "label": "Cleartext credentials risk"
      },
      {
        "id": "z3",
        "label": "SSH-based encrypted"
      },
      {
        "id": "z4",
        "label": "SSH secure copy"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "TFTP, FTP, SFTP, SCP."
  },
  {
    "id": 619,
    "qid": "CCNA-MOD4-019",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Order DHCPv4 DORA steps.",
    "scenario": "<div class=\"scenario-text\"><p>Lease acquisition.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Discover"
      },
      {
        "id": "c2",
        "text": "Offer"
      },
      {
        "id": "c3",
        "text": "Request"
      },
      {
        "id": "c4",
        "text": "Acknowledge"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Discover → Offer → Request → Ack."
  },
  {
    "id": 620,
    "qid": "CCNA-MOD4-020",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match DHCP option to typical use.",
    "scenario": "<div class=\"scenario-text\"><p>Pool options.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "default-router"
      },
      {
        "id": "i2",
        "text": "dns-server"
      },
      {
        "id": "i3",
        "text": "domain-name"
      },
      {
        "id": "i4",
        "text": "lease"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Gateway for clients"
      },
      {
        "id": "z2",
        "label": "DNS resolvers"
      },
      {
        "id": "z3",
        "label": "DNS suffix"
      },
      {
        "id": "z4",
        "label": "Lease duration"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Gateway, DNS, domain, lease."
  },
  {
    "id": 621,
    "qid": "CCNA-MOD4-021",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match problem to DNS check.",
    "scenario": "<div class=\"scenario-text\"><p>Name resolution faults.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Wrong DNS IP on client"
      },
      {
        "id": "i2",
        "text": "Missing A record"
      },
      {
        "id": "i3",
        "text": "PTR missing"
      },
      {
        "id": "i4",
        "text": "DNS server down"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "All names fail for that client"
      },
      {
        "id": "z2",
        "label": "Specific name fails"
      },
      {
        "id": "z3",
        "label": "Reverse lookup fails"
      },
      {
        "id": "z4",
        "label": "Widespread resolution failure"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Client DNS, missing A, PTR, server down."
  },
  {
    "id": 622,
    "qid": "CCNA-MOD4-022",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Order secure image copy to a router.",
    "scenario": "<div class=\"scenario-text\"><p>Replace TFTP habit.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Ensure SSH reachability"
      },
      {
        "id": "c2",
        "text": "Use scp/sftp from server or to device"
      },
      {
        "id": "c3",
        "text": "Verify image checksum"
      },
      {
        "id": "c4",
        "text": "Boot new image after validation"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "SSH → transfer → verify → boot."
  },
  {
    "id": 623,
    "qid": "CCNA-MOD4-023",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match port to service.",
    "scenario": "<div class=\"scenario-text\"><p>Common services.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "UDP/TCP 53"
      },
      {
        "id": "i2",
        "text": "UDP 67/68"
      },
      {
        "id": "i3",
        "text": "TCP 22"
      },
      {
        "id": "i4",
        "text": "TCP 21"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "DNS"
      },
      {
        "id": "z2",
        "label": "DHCP"
      },
      {
        "id": "z3",
        "label": "SSH / SFTP / SCP"
      },
      {
        "id": "z4",
        "label": "FTP control"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "DNS, DHCP, SSH, FTP."
  },
  {
    "id": 624,
    "qid": "CCNA-MOD4-024",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match CNAME use case to example.",
    "scenario": "<div class=\"scenario-text\"><p>Alias records.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "www → host1.example.com"
      },
      {
        "id": "i2",
        "text": "mail → mailhost"
      },
      {
        "id": "i3",
        "text": "A record only"
      },
      {
        "id": "i4",
        "text": "PTR only"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Web alias"
      },
      {
        "id": "z2",
        "label": "Service alias pattern"
      },
      {
        "id": "z3",
        "label": "Direct address mapping"
      },
      {
        "id": "z4",
        "label": "Reverse mapping"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "CNAME vs A vs PTR."
  },
  {
    "id": 625,
    "qid": "CCNA-MOD4-025",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Order DHCP relay configuration on SVI.",
    "scenario": "<div class=\"scenario-text\"><p>Remote server design.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "SVI up with IP"
      },
      {
        "id": "c2",
        "text": "ip helper-address <server>"
      },
      {
        "id": "c3",
        "text": "Verify server path"
      },
      {
        "id": "c4",
        "text": "Test client lease"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "SVI → helper → path → test."
  },
  {
    "id": 626,
    "qid": "CCNA-MOD4-026",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match transfer protocol to transport.",
    "scenario": "<div class=\"scenario-text\"><p>How data moves.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "TFTP"
      },
      {
        "id": "i2",
        "text": "FTP"
      },
      {
        "id": "i3",
        "text": "SFTP"
      },
      {
        "id": "i4",
        "text": "SCP"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "UDP 69"
      },
      {
        "id": "z2",
        "label": "TCP 21/data ports"
      },
      {
        "id": "z3",
        "label": "SSH subsystem"
      },
      {
        "id": "z4",
        "label": "SSH remote copy"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "UDP TFTP, FTP TCP, SFTP/SCP via SSH."
  },
  {
    "id": 627,
    "qid": "CCNA-MOD4-027",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match DHCP message to sender.",
    "scenario": "<div class=\"scenario-text\"><p>DORA actors.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Discover"
      },
      {
        "id": "i2",
        "text": "Offer"
      },
      {
        "id": "i3",
        "text": "Request"
      },
      {
        "id": "i4",
        "text": "Ack"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Client broadcast"
      },
      {
        "id": "z2",
        "label": "Server"
      },
      {
        "id": "z3",
        "label": "Client selection"
      },
      {
        "id": "z4",
        "label": "Server confirm"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Client, server, client, server."
  },
  {
    "id": 628,
    "qid": "CCNA-MOD4-028",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match DNS failure scope to first check.",
    "scenario": "<div class=\"scenario-text\"><p>Isolate impact.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "One PC only"
      },
      {
        "id": "i2",
        "text": "One subnet"
      },
      {
        "id": "i3",
        "text": "Entire site"
      },
      {
        "id": "i4",
        "text": "One name only"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Client DNS settings"
      },
      {
        "id": "z2",
        "label": "Helper / ACL / gateway"
      },
      {
        "id": "z3",
        "label": "DNS servers / WAN"
      },
      {
        "id": "z4",
        "label": "Specific zone record"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Scope drives first check."
  },
  {
    "id": 629,
    "qid": "CCNA-MOD4-029",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the DNS record type that maps names to IPv6 addresses.",
    "scenario": "<div class=\"scenario-text\"><p>Record type labels on a zone diagram.</p></div>",
    "nodes": [
      {
        "id": "r1",
        "label": "A",
        "x": 20,
        "y": 40
      },
      {
        "id": "r2",
        "label": "AAAA",
        "x": 50,
        "y": 40
      },
      {
        "id": "r3",
        "label": "PTR",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "r2"
    ],
    "explanation": "AAAA maps hostname to IPv6."
  },
  {
    "id": 630,
    "qid": "CCNA-MOD4-030",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the protocol that encrypts file transfer over SSH.",
    "scenario": "<div class=\"scenario-text\"><p>Transfer options shown.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "TFTP",
        "x": 25,
        "y": 40
      },
      {
        "id": "p2",
        "label": "SFTP/SCP",
        "x": 55,
        "y": 40
      },
      {
        "id": "p3",
        "label": "FTP",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "p2"
    ],
    "explanation": "SFTP/SCP use SSH."
  },
  {
    "id": 631,
    "qid": "CCNA-MOD4-031",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the router interface that needs ip helper-address for remote DHCP.",
    "scenario": "<div class=\"scenario-text\"><p>Clients on VLAN 20; server on another subnet.</p></div>",
    "nodes": [
      {
        "id": "i1",
        "label": "Vlan20\nSVI",
        "x": 30,
        "y": 40
      },
      {
        "id": "i2",
        "label": "Lo0",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "i1"
    ],
    "explanation": "Helper on the client-facing SVI."
  },
  {
    "id": 632,
    "qid": "CCNA-MOD4-032",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the client that received APIPA after DHCP failure.",
    "scenario": "<div class=\"scenario-text\"><p>Address labels on PCs.</p></div>",
    "nodes": [
      {
        "id": "c1",
        "label": "PC1\n10.1.1.50",
        "x": 25,
        "y": 40
      },
      {
        "id": "c2",
        "label": "PC2\n169.254.10.10",
        "x": 55,
        "y": 40
      },
      {
        "id": "c3",
        "label": "PC3\n10.1.1.51",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "c2"
    ],
    "explanation": "169.254.x.x is APIPA."
  },
  {
    "id": 633,
    "qid": "CCNA-MOD4-033",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the server that should receive DNS queries from clients.",
    "scenario": "<div class=\"scenario-text\"><p>DNS vs DHCP roles labeled.</p></div>",
    "nodes": [
      {
        "id": "s1",
        "label": "DNS\n10.1.1.53",
        "x": 30,
        "y": 40
      },
      {
        "id": "s2",
        "label": "DHCP\n10.1.1.5",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "s1"
    ],
    "explanation": "DNS server handles name queries."
  },
  {
    "id": 634,
    "qid": "CCNA-MOD4-034",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the transfer path that should use SCP instead of TFTP.",
    "scenario": "<div class=\"scenario-text\"><p>Internet-exposed path vs closed lab.</p></div>",
    "nodes": [
      {
        "id": "t1",
        "label": "Over Internet\nto edge",
        "x": 30,
        "y": 40
      },
      {
        "id": "t2",
        "label": "Isolated lab\nair-gap",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "t1"
    ],
    "explanation": "Untrusted paths need encryption (SCP/SFTP)."
  },
  {
    "id": 635,
    "qid": "CCNA-MOD4-035",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that define DNS servers in a DHCP pool.",
    "scenario": "<div class=\"scenario-text\"><p>IOS DHCP pool fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "dns-server 10.1.1.10 10.1.1.11"
      },
      {
        "id": "l2",
        "label": "default-router 10.1.1.1"
      },
      {
        "id": "l3",
        "label": "network 10.1.1.0 255.255.255.0"
      },
      {
        "id": "l4",
        "label": "lease 0 8"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "dns-server and related pool options; dns-server is required focus."
  },
  {
    "id": 636,
    "qid": "CCNA-MOD4-036",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that sets the default gateway option in a DHCP pool.",
    "scenario": "<div class=\"scenario-text\"><p>Client gateway via DHCP.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "default-router 10.1.1.1"
      },
      {
        "id": "l2",
        "label": "dns-server 8.8.8.8"
      },
      {
        "id": "l3",
        "label": "network 10.1.1.0 /24"
      },
      {
        "id": "l4",
        "label": "ip dhcp excluded-address 10.1.1.1"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "default-router sets the gateway option."
  },
  {
    "id": 637,
    "qid": "CCNA-MOD4-037",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that enable DHCP relay on VLAN 30.",
    "scenario": "<div class=\"scenario-text\"><p>Remote DHCP server design.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "interface Vlan30"
      },
      {
        "id": "l2",
        "label": "ip helper-address 10.9.9.9"
      },
      {
        "id": "l3",
        "label": "ip dhcp pool VLAN30"
      },
      {
        "id": "l4",
        "label": "shutdown"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Helper under the client SVI."
  },
  {
    "id": 638,
    "qid": "CCNA-MOD4-038",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that excludes the gateway from DHCP allocation.",
    "scenario": "<div class=\"scenario-text\"><p>Protect static addresses.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip dhcp excluded-address 10.1.1.1"
      },
      {
        "id": "l2",
        "label": "ip dhcp pool LAN"
      },
      {
        "id": "l3",
        "label": "network 10.1.1.0 255.255.255.0"
      },
      {
        "id": "l4",
        "label": "dns-server 10.1.1.10"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "excluded-address prevents leasing that IP."
  },
  {
    "id": 639,
    "qid": "CCNA-MOD4-039",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that create a basic DHCP pool for 10.2.2.0/24.",
    "scenario": "<div class=\"scenario-text\"><p>New LAN pool.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip dhcp pool FLOOR2"
      },
      {
        "id": "l2",
        "label": "network 10.2.2.0 255.255.255.0"
      },
      {
        "id": "l3",
        "label": "router ospf 1"
      },
      {
        "id": "l4",
        "label": "spanning-tree mode rapid-pvst"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Pool name and network statement."
  },
  {
    "id": 640,
    "qid": "CCNA-MOD4-040",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that configures domain-name in a DHCP pool.",
    "scenario": "<div class=\"scenario-text\"><p>DNS suffix for clients.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "domain-name example.com"
      },
      {
        "id": "l2",
        "label": "dns-server 10.1.1.10"
      },
      {
        "id": "l3",
        "label": "default-router 10.1.1.1"
      },
      {
        "id": "l4",
        "label": "lease 7"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "domain-name sets the DNS suffix option."
  },
  {
    "id": 641,
    "qid": "CCNA-MOD4-041",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "Which ACL type filters on source IP only?",
    "scenario": "<div class=\"scenario-text\"><p>Simplest IPv4 ACL choice.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Standard ACL"
      },
      {
        "id": "b",
        "text": "Extended ACL"
      },
      {
        "id": "c",
        "text": "Reflexive only"
      },
      {
        "id": "d",
        "text": "Time-based only"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Standard ACLs match source IP only; extended match source, dest, protocol, ports."
  },
  {
    "id": 642,
    "qid": "CCNA-MOD4-042",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "Where should an extended ACL typically be placed?",
    "scenario": "<div class=\"scenario-text\"><p>ACL placement best practice.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "As close to the source as practical"
      },
      {
        "id": "b",
        "text": "Only on the destination LAN always"
      },
      {
        "id": "c",
        "text": "Only on loopbacks"
      },
      {
        "id": "d",
        "text": "Never on interfaces"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Extended ACLs are often placed close to the source to drop unwanted traffic early."
  },
  {
    "id": 643,
    "qid": "CCNA-MOD4-043",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "What is the wildcard mask for a /24 subnet in an ACL?",
    "scenario": "<div class=\"scenario-text\"><p>Match 192.168.1.0/24.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "0.0.0.255"
      },
      {
        "id": "b",
        "text": "255.255.255.0"
      },
      {
        "id": "c",
        "text": "0.0.255.255"
      },
      {
        "id": "d",
        "text": "255.255.255.255"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Wildcard 0.0.0.255 matches a /24; it is the inverse of the subnet mask."
  },
  {
    "id": 644,
    "qid": "CCNA-MOD4-044",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "What is the implicit final statement in every ACL?",
    "scenario": "<div class=\"scenario-text\"><p>ACL end behavior.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "permit ip any any"
      },
      {
        "id": "b",
        "text": "deny ip any any"
      },
      {
        "id": "c",
        "text": "permit icmp any any"
      },
      {
        "id": "d",
        "text": "deny tcp any any eq 23"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "Every ACL ends with an implicit deny all."
  },
  {
    "id": 645,
    "qid": "CCNA-MOD4-045",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE differences between standard and extended ACLs.",
    "scenario": "<div class=\"scenario-text\"><p>ACL type comparison.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Standard matches source only"
      },
      {
        "id": "b",
        "text": "Extended can match protocol and ports"
      },
      {
        "id": "c",
        "text": "Extended can match destination"
      },
      {
        "id": "d",
        "text": "Standard matches destination ports only"
      },
      {
        "id": "e",
        "text": "Standard requires TCP only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Standard = source; extended = L3/L4 fields."
  },
  {
    "id": 646,
    "qid": "CCNA-MOD4-046",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO correct wildcard examples.",
    "scenario": "<div class=\"scenario-text\"><p>Mask inversion.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "0.0.0.255 for /24"
      },
      {
        "id": "b",
        "text": "0.0.0.0 for host"
      },
      {
        "id": "c",
        "text": "255.255.255.0 for /24 host match"
      },
      {
        "id": "d",
        "text": "0.255.255.255 for /32"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "/24 → 0.0.0.255; host → 0.0.0.0."
  },
  {
    "id": 647,
    "qid": "CCNA-MOD4-047",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE ACL placement guidelines.",
    "scenario": "<div class=\"scenario-text\"><p>Where to apply.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Extended near source when possible"
      },
      {
        "id": "b",
        "text": "Standard near destination often"
      },
      {
        "id": "c",
        "text": "Apply inbound or outbound as designed"
      },
      {
        "id": "d",
        "text": "Always only on VLAN 1"
      },
      {
        "id": "e",
        "text": "Never use named ACLs"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Source/destination placement and direction matter."
  },
  {
    "id": 648,
    "qid": "CCNA-MOD4-048",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO named ACL advantages.",
    "scenario": "<div class=\"scenario-text\"><p>Named vs numbered.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Easier to identify purpose"
      },
      {
        "id": "b",
        "text": "Can edit lines more flexibly on modern IOS"
      },
      {
        "id": "c",
        "text": "Bypass implicit deny"
      },
      {
        "id": "d",
        "text": "Disable sequence numbers forever"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Readability and editability."
  },
  {
    "id": 649,
    "qid": "CCNA-MOD4-049",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE elements an extended ACL can match.",
    "scenario": "<div class=\"scenario-text\"><p>Rich matching.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Source IP"
      },
      {
        "id": "b",
        "text": "Destination IP"
      },
      {
        "id": "c",
        "text": "TCP/UDP port"
      },
      {
        "id": "d",
        "text": "STP port role"
      },
      {
        "id": "e",
        "text": "VTP password"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "L3 addresses and L4 ports."
  },
  {
    "id": 650,
    "qid": "CCNA-MOD4-050",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO reasons traffic hits implicit deny.",
    "scenario": "<div class=\"scenario-text\"><p>Unexpected drops.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "No matching permit before end"
      },
      {
        "id": "b",
        "text": "ACL applied in the direction of traffic"
      },
      {
        "id": "c",
        "text": "permit ip any any is first always"
      },
      {
        "id": "d",
        "text": "ACL not applied on interface"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "No permit match + applied direction = drop."
  },
  {
    "id": 651,
    "qid": "CCNA-MOD4-051",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE verification commands for ACLs.",
    "scenario": "<div class=\"scenario-text\"><p>Confirm hits and config.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "show access-lists"
      },
      {
        "id": "b",
        "text": "show ip interface"
      },
      {
        "id": "c",
        "text": "show running-config | section access-list"
      },
      {
        "id": "d",
        "text": "show vlan brief only"
      },
      {
        "id": "e",
        "text": "show cdp neighbors only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "ACL contents, interface application, and config."
  },
  {
    "id": 652,
    "qid": "CCNA-MOD4-052",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO IPv6 ACL traits.",
    "scenario": "<div class=\"scenario-text\"><p>IPv6 filtering.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Use ipv6 traffic-filter on interfaces"
      },
      {
        "id": "b",
        "text": "Implicit rules differ slightly from IPv4"
      },
      {
        "id": "c",
        "text": "Identical to numbered standard IPv4 only"
      },
      {
        "id": "d",
        "text": "Cannot match ports"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "traffic-filter apply; IPv6 implicit rules differ."
  },
  {
    "id": 653,
    "qid": "CCNA-MOD4-053",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE common ACL mistakes.",
    "scenario": "<div class=\"scenario-text\"><p>Avoid operational errors.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Wrong order of ACE lines"
      },
      {
        "id": "b",
        "text": "Wrong direction on interface"
      },
      {
        "id": "c",
        "text": "Missing permit for return/management traffic"
      },
      {
        "id": "d",
        "text": "Using OSPF cost as wildcard"
      },
      {
        "id": "e",
        "text": "Setting native VLAN in ACL"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Order, direction, and necessary permits."
  },
  {
    "id": 654,
    "qid": "CCNA-MOD4-054",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO correct ACE examples conceptually.",
    "scenario": "<div class=\"scenario-text\"><p>Read ACL lines.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "permit tcp any host 10.1.1.10 eq 22"
      },
      {
        "id": "b",
        "text": "deny ip 10.0.0.0 0.255.255.255 any"
      },
      {
        "id": "c",
        "text": "permit vlan 10 any any"
      },
      {
        "id": "d",
        "text": "deny mac any any"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "TCP port and source network ACEs are valid IPv4 ACL forms."
  },
  {
    "id": 655,
    "qid": "CCNA-MOD4-055",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE sequence-number benefits on modern ACLs.",
    "scenario": "<div class=\"scenario-text\"><p>Editable lists.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Insert lines without full rewrite"
      },
      {
        "id": "b",
        "text": "Delete specific entries"
      },
      {
        "id": "c",
        "text": "Reorder with care"
      },
      {
        "id": "d",
        "text": "Eliminate implicit deny"
      },
      {
        "id": "e",
        "text": "Replace need for show commands"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Insert, delete, maintain order."
  },
  {
    "id": 656,
    "qid": "CCNA-MOD4-056",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO interface ACL direction meanings.",
    "scenario": "<div class=\"scenario-text\"><p>in vs out.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "in = traffic entering the interface"
      },
      {
        "id": "b",
        "text": "out = traffic leaving the interface"
      },
      {
        "id": "c",
        "text": "in = only OSPF"
      },
      {
        "id": "d",
        "text": "out = only CDP"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Inbound vs outbound relative to the interface."
  },
  {
    "id": 657,
    "qid": "CCNA-MOD4-057",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match ACL type to capability.",
    "scenario": "<div class=\"scenario-text\"><p>Standard vs extended.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Standard numbered"
      },
      {
        "id": "i2",
        "text": "Extended numbered"
      },
      {
        "id": "i3",
        "text": "Named extended"
      },
      {
        "id": "i4",
        "text": "IPv6 ACL"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Source IP only (1-99/1300-1999)"
      },
      {
        "id": "z2",
        "label": "L3/L4 matching"
      },
      {
        "id": "z3",
        "label": "Named + L3/L4"
      },
      {
        "id": "z4",
        "label": "ipv6 traffic-filter"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Standard, extended, named, IPv6."
  },
  {
    "id": 658,
    "qid": "CCNA-MOD4-058",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match wildcard to prefix intent.",
    "scenario": "<div class=\"scenario-text\"><p>Mask skill.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "0.0.0.0"
      },
      {
        "id": "i2",
        "text": "0.0.0.255"
      },
      {
        "id": "i3",
        "text": "0.0.255.255"
      },
      {
        "id": "i4",
        "text": "255.255.255.255"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Host /32"
      },
      {
        "id": "z2",
        "label": "/24"
      },
      {
        "id": "z3",
        "label": "/16"
      },
      {
        "id": "z4",
        "label": "Any"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Host, /24, /16, any."
  },
  {
    "id": 659,
    "qid": "CCNA-MOD4-059",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Order ACL processing for a packet.",
    "scenario": "<div class=\"scenario-text\"><p>Top-down evaluation.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Evaluate first ACE"
      },
      {
        "id": "c2",
        "text": "Match → apply permit/deny"
      },
      {
        "id": "c3",
        "text": "No match → next ACE"
      },
      {
        "id": "c4",
        "text": "End → implicit deny"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "First ACE → match action → next → implicit deny."
  },
  {
    "id": 660,
    "qid": "CCNA-MOD4-060",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match placement recommendation to ACL type.",
    "scenario": "<div class=\"scenario-text\"><p>Design guidance.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Extended near source"
      },
      {
        "id": "i2",
        "text": "Standard near destination"
      },
      {
        "id": "i3",
        "text": "Inbound on edge"
      },
      {
        "id": "i4",
        "text": "Outbound on edge"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Drop early with rich match"
      },
      {
        "id": "z2",
        "label": "Filter after routing to dest network"
      },
      {
        "id": "z3",
        "label": "Control traffic entering device/network"
      },
      {
        "id": "z4",
        "label": "Control traffic leaving interface"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Source, dest, in, out."
  },
  {
    "id": 661,
    "qid": "CCNA-MOD4-061",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match command to purpose.",
    "scenario": "<div class=\"scenario-text\"><p>ACL CLI.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "access-list 10 deny 10.1.1.0 0.0.0.255"
      },
      {
        "id": "i2",
        "text": "ip access-group 10 in"
      },
      {
        "id": "i3",
        "text": "ip access-list extended FILTER"
      },
      {
        "id": "l4",
        "text": "permit tcp any any eq 443"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Standard ACE"
      },
      {
        "id": "z2",
        "label": "Apply ACL to interface"
      },
      {
        "id": "z3",
        "label": "Create named extended"
      },
      {
        "id": "z4",
        "label": "HTTPS permit ACE"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "l4"
      ]
    },
    "explanation": "Standard ACE, apply, named, permit HTTPS."
  },
  {
    "id": 662,
    "qid": "CCNA-MOD4-062",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Order steps to add a deny without breaking management.",
    "scenario": "<div class=\"scenario-text\"><p>Safe ACL change.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Identify required permit traffic"
      },
      {
        "id": "c2",
        "text": "Build ACL offline / with permits first"
      },
      {
        "id": "c3",
        "text": "Apply with care (or ACL replace)"
      },
      {
        "id": "c4",
        "text": "Verify access and counters"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Map permits → build → apply → verify."
  },
  {
    "id": 663,
    "qid": "CCNA-MOD4-063",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match mistake to result.",
    "scenario": "<div class=\"scenario-text\"><p>ACL pitfalls.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "permit any any first"
      },
      {
        "id": "i2",
        "text": "deny any any then permits"
      },
      {
        "id": "i3",
        "text": "Wrong direction"
      },
      {
        "id": "i4",
        "text": "No ACL applied"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Later denies never hit"
      },
      {
        "id": "z2",
        "label": "All traffic denied early"
      },
      {
        "id": "z3",
        "label": "Filter does not affect intended path"
      },
      {
        "id": "z4",
        "label": "No filtering effect"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Order and application mistakes."
  },
  {
    "id": 664,
    "qid": "CCNA-MOD4-064",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match protocol keyword to port example.",
    "scenario": "<div class=\"scenario-text\"><p>Extended ACE ports.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "eq 22"
      },
      {
        "id": "i2",
        "text": "eq 23"
      },
      {
        "id": "i3",
        "text": "eq 80"
      },
      {
        "id": "i4",
        "text": "eq 443"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "SSH"
      },
      {
        "id": "z2",
        "label": "Telnet"
      },
      {
        "id": "z3",
        "label": "HTTP"
      },
      {
        "id": "z4",
        "label": "HTTPS"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "22, 23, 80, 443."
  },
  {
    "id": 665,
    "qid": "CCNA-MOD4-065",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match IPv4 vs IPv6 ACL apply command.",
    "scenario": "<div class=\"scenario-text\"><p>Family-specific apply.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "ip access-group"
      },
      {
        "id": "i2",
        "text": "ipv6 traffic-filter"
      },
      {
        "id": "i3",
        "text": "access-class"
      },
      {
        "id": "i4",
        "text": "ip access-list standard"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "IPv4 interface ACL"
      },
      {
        "id": "z2",
        "label": "IPv6 interface ACL"
      },
      {
        "id": "z3",
        "label": "VTY line ACL"
      },
      {
        "id": "z4",
        "label": "Create standard list"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "IPv4 apply, IPv6 apply, VTY, create."
  },
  {
    "id": 666,
    "qid": "CCNA-MOD4-066",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Order troubleshooting ACL drops.",
    "scenario": "<div class=\"scenario-text\"><p>User cannot connect.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Confirm ACL applied and direction"
      },
      {
        "id": "c2",
        "text": "Review ACE order and matches"
      },
      {
        "id": "c3",
        "text": "Check hit counters"
      },
      {
        "id": "c4",
        "text": "Adjust ACE / retest"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Apply → order → counters → fix."
  },
  {
    "id": 667,
    "qid": "CCNA-MOD4-067",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match ACE action to effect.",
    "scenario": "<div class=\"scenario-text\"><p>Permit vs deny.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "permit"
      },
      {
        "id": "i2",
        "text": "deny"
      },
      {
        "id": "i3",
        "text": "log"
      },
      {
        "id": "i4",
        "text": "implicit deny"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Allow matching traffic"
      },
      {
        "id": "z2",
        "label": "Drop matching traffic"
      },
      {
        "id": "z3",
        "label": "Record matches"
      },
      {
        "id": "z4",
        "label": "Drop all remaining"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Permit, deny, log, implicit."
  },
  {
    "id": 668,
    "qid": "CCNA-MOD4-068",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match numbered range to type (classic).",
    "scenario": "<div class=\"scenario-text\"><p>1-99 vs 100-199.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "1-99"
      },
      {
        "id": "i2",
        "text": "100-199"
      },
      {
        "id": "i3",
        "text": "1300-1999"
      },
      {
        "id": "i4",
        "text": "2000-2699"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Standard"
      },
      {
        "id": "z2",
        "label": "Extended"
      },
      {
        "id": "z3",
        "label": "Standard expanded"
      },
      {
        "id": "z4",
        "label": "Extended expanded"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Classic standard/extended ranges."
  },
  {
    "id": 669,
    "qid": "CCNA-MOD4-069",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the interface where an inbound ACL would filter traffic from PC-A first.",
    "scenario": "<div class=\"scenario-text\"><p>PC-A → SW → R1 → Internet path.</p></div>",
    "nodes": [
      {
        "id": "i1",
        "label": "R1 Gi0/0\ntoward PC",
        "x": 30,
        "y": 40
      },
      {
        "id": "i2",
        "label": "R1 Gi0/1\ntoward Internet",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "i1"
    ],
    "explanation": "Inbound on the PC-facing interface filters source traffic early."
  },
  {
    "id": 670,
    "qid": "CCNA-MOD4-070",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the ACL type appropriate to filter only by source subnet.",
    "scenario": "<div class=\"scenario-text\"><p>Simple source filter needed.</p></div>",
    "nodes": [
      {
        "id": "t1",
        "label": "Standard",
        "x": 30,
        "y": 40
      },
      {
        "id": "t2",
        "label": "Extended",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "t1"
    ],
    "explanation": "Standard ACLs match source only."
  },
  {
    "id": 671,
    "qid": "CCNA-MOD4-071",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the ACE that will match first for host 10.1.1.5 traffic.",
    "scenario": "<div class=\"scenario-text\"><p>Ordered list visualization.</p></div>",
    "nodes": [
      {
        "id": "e1",
        "label": "1 permit 10.1.1.0/24",
        "x": 30,
        "y": 25
      },
      {
        "id": "e2",
        "label": "2 deny host 10.1.1.5",
        "x": 30,
        "y": 55
      },
      {
        "id": "e3",
        "label": "implicit deny",
        "x": 30,
        "y": 80
      }
    ],
    "correct": [
      "e1"
    ],
    "explanation": "Top-down: broader permit matches before later deny."
  },
  {
    "id": 672,
    "qid": "CCNA-MOD4-072",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the device that should host the extended ACL closest to the attacker source.",
    "scenario": "<div class=\"scenario-text\"><p>Filter spoofed traffic from Branch.</p></div>",
    "nodes": [
      {
        "id": "d1",
        "label": "Branch edge",
        "x": 25,
        "y": 40
      },
      {
        "id": "d2",
        "label": "Core",
        "x": 55,
        "y": 40
      },
      {
        "id": "d3",
        "label": "DC",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "d1"
    ],
    "explanation": "Place extended ACL near the source."
  },
  {
    "id": 673,
    "qid": "CCNA-MOD4-073",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the wildcard that matches a single host.",
    "scenario": "<div class=\"scenario-text\"><p>Wildcard options shown.</p></div>",
    "nodes": [
      {
        "id": "w1",
        "label": "0.0.0.0",
        "x": 25,
        "y": 40
      },
      {
        "id": "w2",
        "label": "0.0.0.255",
        "x": 55,
        "y": 40
      },
      {
        "id": "w3",
        "label": "255.255.255.255",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "w1"
    ],
    "explanation": "0.0.0.0 matches one host."
  },
  {
    "id": 674,
    "qid": "CCNA-MOD4-074",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the direction that filters traffic leaving toward the Internet on WAN.",
    "scenario": "<div class=\"scenario-text\"><p>WAN interface directions.</p></div>",
    "nodes": [
      {
        "id": "dir1",
        "label": "out\nto Internet",
        "x": 30,
        "y": 40
      },
      {
        "id": "dir2",
        "label": "in\nfrom Internet",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "dir1"
    ],
    "explanation": "Outbound on WAN filters traffic leaving to the Internet."
  },
  {
    "id": 675,
    "qid": "CCNA-MOD4-075",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that causes Telnet from 10.1.1.5 to be permitted unexpectedly.",
    "scenario": "<div class=\"scenario-text\"><p>ACL order problem.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip access-list extended SECURE_IN"
      },
      {
        "id": "l2",
        "label": "permit ip host 10.1.1.5 any"
      },
      {
        "id": "l3",
        "label": "deny tcp host 10.1.1.5 host 192.168.1.100 eq 23"
      },
      {
        "id": "l4",
        "label": "permit ip any any"
      }
    ],
    "correct": [
      "l2"
    ],
    "selectCount": 1,
    "explanation": "Broad permit before specific deny shadows the deny."
  },
  {
    "id": 676,
    "qid": "CCNA-MOD4-076",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that create and apply a standard ACL inbound.",
    "scenario": "<div class=\"scenario-text\"><p>Standard ACL apply pattern.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "access-list 10 permit 10.1.1.0 0.0.0.255"
      },
      {
        "id": "l2",
        "label": "ip access-group 10 in"
      },
      {
        "id": "l3",
        "label": "router ospf 1"
      },
      {
        "id": "l4",
        "label": "vlan 10"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Create ACL 10 and apply inbound."
  },
  {
    "id": 677,
    "qid": "CCNA-MOD4-077",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that permits SSH to a specific host.",
    "scenario": "<div class=\"scenario-text\"><p>Extended ACE example.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "permit tcp any host 10.1.1.10 eq 22"
      },
      {
        "id": "l2",
        "label": "deny ip any any"
      },
      {
        "id": "l3",
        "label": "permit ip any any"
      },
      {
        "id": "l4",
        "label": "access-list 10 permit any"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "TCP eq 22 to the host is SSH."
  },
  {
    "id": 678,
    "qid": "CCNA-MOD4-078",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that define a named extended ACL header and a permit HTTPS ACE.",
    "scenario": "<div class=\"scenario-text\"><p>Named ACL fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip access-list extended WEB_OUT"
      },
      {
        "id": "l2",
        "label": "permit tcp any any eq 443"
      },
      {
        "id": "l3",
        "label": "access-list 10 permit any"
      },
      {
        "id": "l4",
        "label": "vlan 20"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Named extended header and HTTPS permit."
  },
  {
    "id": 679,
    "qid": "CCNA-MOD4-079",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that applies an IPv6 ACL to an interface.",
    "scenario": "<div class=\"scenario-text\"><p>IPv6 filter apply.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ipv6 traffic-filter FILTER_V6 in"
      },
      {
        "id": "l2",
        "label": "ip access-group FILTER_V6 in"
      },
      {
        "id": "l3",
        "label": "access-class 10 in"
      },
      {
        "id": "l4",
        "label": "ipv6 address 2001:db8::1/64"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "ipv6 traffic-filter applies IPv6 ACLs."
  },
  {
    "id": 680,
    "qid": "CCNA-MOD4-080",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that should be reviewed when VTY access is filtered.",
    "scenario": "<div class=\"scenario-text\"><p>Line access-class usage.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "line vty 0 4"
      },
      {
        "id": "l2",
        "label": "access-class 99 in"
      },
      {
        "id": "l3",
        "label": "ip access-group 99 in"
      },
      {
        "id": "l4",
        "label": "router ospf 1"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "VTY lines use access-class, not interface access-group."
  },
  {
    "id": 681,
    "qid": "CCNA-MOD4-081",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "Which command configures PAT (NAT overload) using the outside interface IP?",
    "scenario": "<div class=\"scenario-text\"><p>Many inside hosts share one public IP.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "ip nat inside source list 1 interface GigabitEthernet0/0/0 overload"
      },
      {
        "id": "b",
        "text": "ip nat outside source static ..."
      },
      {
        "id": "c",
        "text": "ip nat pool only without overload"
      },
      {
        "id": "d",
        "text": "ip nat inside destination list 1"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "list + interface + overload enables PAT using the interface address."
  },
  {
    "id": 682,
    "qid": "CCNA-MOD4-082",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "What does static NAT provide?",
    "scenario": "<div class=\"scenario-text\"><p>Publish an internal server.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "One-to-one permanent mapping"
      },
      {
        "id": "b",
        "text": "Many-to-one port translation only"
      },
      {
        "id": "c",
        "text": "No translation"
      },
      {
        "id": "d",
        "text": "Only IPv6 translation"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Static NAT maps a fixed inside local to inside global."
  },
  {
    "id": 683,
    "qid": "CCNA-MOD4-083",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "Which command marks the inside interface for NAT?",
    "scenario": "<div class=\"scenario-text\"><p>Identify inside vs outside.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "ip nat inside"
      },
      {
        "id": "b",
        "text": "ip nat outside"
      },
      {
        "id": "c",
        "text": "ip nat enable"
      },
      {
        "id": "d",
        "text": "ip nat pool inside"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "ip nat inside marks the inside interface."
  },
  {
    "id": 684,
    "qid": "CCNA-MOD4-084",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "What is the primary difference between dynamic NAT and PAT?",
    "scenario": "<div class=\"scenario-text\"><p>Address conservation.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "PAT translates ports to multiplex many hosts on few globals"
      },
      {
        "id": "b",
        "text": "Dynamic NAT always uses ports"
      },
      {
        "id": "c",
        "text": "PAT requires one global per host"
      },
      {
        "id": "d",
        "text": "Dynamic NAT is only static"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "PAT (overload) uses port translation; dynamic NAT uses a pool of globals without port multiplexing by default."
  },
  {
    "id": 685,
    "qid": "CCNA-MOD4-085",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE NAT address terms.",
    "scenario": "<div class=\"scenario-text\"><p>Inside local/global vocabulary.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Inside local"
      },
      {
        "id": "b",
        "text": "Inside global"
      },
      {
        "id": "c",
        "text": "Outside local/global concepts"
      },
      {
        "id": "d",
        "text": "STP local"
      },
      {
        "id": "e",
        "text": "VTP global"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Inside local/global and outside local/global terminology."
  },
  {
    "id": 686,
    "qid": "CCNA-MOD4-086",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO characteristics of PAT.",
    "scenario": "<div class=\"scenario-text\"><p>Overload behavior.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Many inside locals share few/one inside globals"
      },
      {
        "id": "b",
        "text": "Uses port numbers to distinguish sessions"
      },
      {
        "id": "c",
        "text": "Requires unique public IP per host"
      },
      {
        "id": "d",
        "text": "Disables TCP"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Port multiplexing enables address sharing."
  },
  {
    "id": 687,
    "qid": "CCNA-MOD4-087",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE steps to configure basic PAT.",
    "scenario": "<div class=\"scenario-text\"><p>Internet access for LAN.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Define ACL of inside sources"
      },
      {
        "id": "b",
        "text": "ip nat inside source list ... interface ... overload"
      },
      {
        "id": "c",
        "text": "Mark inside/outside interfaces"
      },
      {
        "id": "d",
        "text": "Enable VTP pruning"
      },
      {
        "id": "e",
        "text": "Set native VLAN 999 only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "ACL, overload command, interface roles."
  },
  {
    "id": 688,
    "qid": "CCNA-MOD4-088",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO static NAT use cases.",
    "scenario": "<div class=\"scenario-text\"><p>Fixed mappings.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Publish internal web server"
      },
      {
        "id": "b",
        "text": "Map specific host to specific public IP"
      },
      {
        "id": "c",
        "text": "Hide thousands of hosts on one IP without ports"
      },
      {
        "id": "d",
        "text": "Replace all DHCP"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Static is one-to-one for servers/hosts."
  },
  {
    "id": 689,
    "qid": "CCNA-MOD4-089",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE verification commands for NAT.",
    "scenario": "<div class=\"scenario-text\"><p>Confirm translations.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "show ip nat translations"
      },
      {
        "id": "b",
        "text": "show ip nat statistics"
      },
      {
        "id": "c",
        "text": "clear ip nat translation *"
      },
      {
        "id": "d",
        "text": "show vlan brief only"
      },
      {
        "id": "e",
        "text": "show cdp neighbors only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Translations, stats, and clear."
  },
  {
    "id": 690,
    "qid": "CCNA-MOD4-090",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO reasons NAT translations fail to appear.",
    "scenario": "<div class=\"scenario-text\"><p>No entries.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Missing inside/outside interface marks"
      },
      {
        "id": "b",
        "text": "ACL not matching source traffic"
      },
      {
        "id": "c",
        "text": "Correct overload and matching ACL"
      },
      {
        "id": "d",
        "text": "Interfaces up and traffic flowing"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Interface roles and ACL match are required."
  },
  {
    "id": 691,
    "qid": "CCNA-MOD4-091",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE components of a NAT pool configuration.",
    "scenario": "<div class=\"scenario-text\"><p>Dynamic NAT pool.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "ip nat pool NAME start end"
      },
      {
        "id": "b",
        "text": "prefix-length or netmask"
      },
      {
        "id": "c",
        "text": "ip nat inside source list pool NAME"
      },
      {
        "id": "d",
        "text": "spanning-tree portfast"
      },
      {
        "id": "e",
        "text": "vtp mode transparent"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Pool definition and binding to ACL."
  },
  {
    "id": 692,
    "qid": "CCNA-MOD4-092",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO effects of overload keyword.",
    "scenario": "<div class=\"scenario-text\"><p>PAT enablement.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Enables port address translation"
      },
      {
        "id": "b",
        "text": "Allows many-to-one IP mapping"
      },
      {
        "id": "c",
        "text": "Forces static only"
      },
      {
        "id": "d",
        "text": "Disables inside interface"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Overload = PAT."
  },
  {
    "id": 693,
    "qid": "CCNA-MOD4-093",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE troubleshooting steps when users cannot reach Internet via NAT.",
    "scenario": "<div class=\"scenario-text\"><p>PAT path broken.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Check inside/outside marks"
      },
      {
        "id": "b",
        "text": "Verify ACL matches users"
      },
      {
        "id": "c",
        "text": "show ip nat translations while testing"
      },
      {
        "id": "d",
        "text": "Change OSPF RID randomly"
      },
      {
        "id": "e",
        "text": "Disable all routing"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Marks, ACL, live translations."
  },
  {
    "id": 694,
    "qid": "CCNA-MOD4-094",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO differences between static and dynamic NAT.",
    "scenario": "<div class=\"scenario-text\"><p>Mapping style.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Static is fixed one-to-one"
      },
      {
        "id": "b",
        "text": "Dynamic takes free address from pool"
      },
      {
        "id": "c",
        "text": "Static requires overload always"
      },
      {
        "id": "d",
        "text": "Dynamic cannot use pools"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Fixed vs pool-based mapping."
  },
  {
    "id": 695,
    "qid": "CCNA-MOD4-095",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE packets fields relevant to PAT uniqueness.",
    "scenario": "<div class=\"scenario-text\"><p>Session identity.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Inside local IP"
      },
      {
        "id": "b",
        "text": "Inside local port"
      },
      {
        "id": "c",
        "text": "Inside global port"
      },
      {
        "id": "d",
        "text": "STP port role"
      },
      {
        "id": "e",
        "text": "CDP version"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "IP and ports identify translations."
  },
  {
    "id": 696,
    "qid": "CCNA-MOD4-096",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO outside interface requirements for PAT with interface overload.",
    "scenario": "<div class=\"scenario-text\"><p>WAN side.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Marked ip nat outside"
      },
      {
        "id": "b",
        "text": "Has usable global IP"
      },
      {
        "id": "c",
        "text": "Must be passive OSPF only"
      },
      {
        "id": "d",
        "text": "Must disable ICMP"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Outside mark and a global address."
  },
  {
    "id": 697,
    "qid": "CCNA-MOD4-097",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match NAT type to description.",
    "scenario": "<div class=\"scenario-text\"><p>Static, dynamic, PAT.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Static NAT"
      },
      {
        "id": "i2",
        "text": "Dynamic NAT"
      },
      {
        "id": "i3",
        "text": "PAT / overload"
      },
      {
        "id": "i4",
        "text": "No NAT"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Fixed one-to-one"
      },
      {
        "id": "z2",
        "label": "Pool of globals, one-to-one temporary"
      },
      {
        "id": "z3",
        "label": "Many-to-one with ports"
      },
      {
        "id": "z4",
        "label": "Addresses unchanged"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Static, dynamic, PAT, none."
  },
  {
    "id": 698,
    "qid": "CCNA-MOD4-098",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match address term to example role.",
    "scenario": "<div class=\"scenario-text\"><p>Inside/outside local/global.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Inside local"
      },
      {
        "id": "i2",
        "text": "Inside global"
      },
      {
        "id": "i3",
        "text": "Outside global"
      },
      {
        "id": "i4",
        "text": "Outside local"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Private host address as seen inside"
      },
      {
        "id": "z2",
        "label": "Translated public address of inside host"
      },
      {
        "id": "z3",
        "label": "Real address of external host"
      },
      {
        "id": "z4",
        "label": "How outside appears to inside (optional)"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "IL, IG, OG, OL."
  },
  {
    "id": 699,
    "qid": "CCNA-MOD4-099",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Order PAT configuration steps.",
    "scenario": "<div class=\"scenario-text\"><p>LAN Internet access.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "ACL matching inside sources"
      },
      {
        "id": "c2",
        "text": "ip nat inside / ip nat outside"
      },
      {
        "id": "c3",
        "text": "ip nat inside source list ... overload"
      },
      {
        "id": "c4",
        "text": "Verify translations"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "ACL → marks → overload → verify."
  },
  {
    "id": 700,
    "qid": "CCNA-MOD4-100",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match command fragment to NAT role.",
    "scenario": "<div class=\"scenario-text\"><p>CLI map.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "ip nat inside"
      },
      {
        "id": "i2",
        "text": "ip nat outside"
      },
      {
        "id": "i3",
        "text": "ip nat inside source static"
      },
      {
        "id": "i4",
        "text": "overload"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Mark inside interface"
      },
      {
        "id": "z2",
        "label": "Mark outside interface"
      },
      {
        "id": "z3",
        "label": "Permanent one-to-one"
      },
      {
        "id": "z4",
        "label": "Enable PAT"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Inside, outside, static, PAT."
  },
  {
    "id": 701,
    "qid": "CCNA-MOD4-101",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match failure symptom to likely cause.",
    "scenario": "<div class=\"scenario-text\"><p>NAT troubleshooting.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "No translations"
      },
      {
        "id": "i2",
        "text": "Translations but no return"
      },
      {
        "id": "i3",
        "text": "Only some hosts work"
      },
      {
        "id": "i4",
        "text": "Pool exhausted"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "ACL/marks missing"
      },
      {
        "id": "z2",
        "label": "Routing/firewall on outside"
      },
      {
        "id": "z3",
        "label": "ACL too narrow"
      },
      {
        "id": "z4",
        "label": "Dynamic pool too small"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "No xlate, return path, ACL scope, pool size."
  },
  {
    "id": 702,
    "qid": "CCNA-MOD4-102",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Order static NAT for a server publish.",
    "scenario": "<div class=\"scenario-text\"><p>Map 10.1.1.10 to 203.0.113.10.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "ip nat inside source static 10.1.1.10 203.0.113.10"
      },
      {
        "id": "c2",
        "text": "Mark inside and outside interfaces"
      },
      {
        "id": "c3",
        "text": "Ensure routing to 203.0.113.10"
      },
      {
        "id": "c4",
        "text": "Test from outside"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Static map → marks → routing → test."
  },
  {
    "id": 703,
    "qid": "CCNA-MOD4-103",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match pool keyword to meaning.",
    "scenario": "<div class=\"scenario-text\"><p>Dynamic NAT pool.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "ip nat pool"
      },
      {
        "id": "i2",
        "text": "prefix-length"
      },
      {
        "id": "i3",
        "text": "list"
      },
      {
        "id": "i4",
        "text": "overload"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Define global range"
      },
      {
        "id": "z2",
        "label": "Mask for pool"
      },
      {
        "id": "z3",
        "label": "ACL of subjects"
      },
      {
        "id": "z4",
        "label": "PAT mode"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Pool, prefix, list, overload."
  },
  {
    "id": 704,
    "qid": "CCNA-MOD4-104",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match traffic direction to NAT processing side.",
    "scenario": "<div class=\"scenario-text\"><p>Inside source typical.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Host to Internet"
      },
      {
        "id": "i2",
        "text": "Internet to static server"
      },
      {
        "id": "i3",
        "text": "Inside local viewed in xlate"
      },
      {
        "id": "i4",
        "text": "Inside global viewed in xlate"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Source translated on way out"
      },
      {
        "id": "z2",
        "label": "Destination translated on way in"
      },
      {
        "id": "z3",
        "label": "Original private address"
      },
      {
        "id": "z4",
        "label": "Public mapped address"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Outbound SA, inbound DA, IL, IG."
  },
  {
    "id": 705,
    "qid": "CCNA-MOD4-105",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Order clear and retest after ACL fix.",
    "scenario": "<div class=\"scenario-text\"><p>Stale translations.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Fix ACL"
      },
      {
        "id": "c2",
        "text": "clear ip nat translation *"
      },
      {
        "id": "c3",
        "text": "Generate new traffic"
      },
      {
        "id": "c4",
        "text": "show ip nat translations"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Fix → clear → traffic → show."
  },
  {
    "id": 706,
    "qid": "CCNA-MOD4-106",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match PAT scale concern to mitigation.",
    "scenario": "<div class=\"scenario-text\"><p>Large user counts.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Port exhaustion risk"
      },
      {
        "id": "i2",
        "text": "Multiple public IPs"
      },
      {
        "id": "i3",
        "text": "Logging/accounting"
      },
      {
        "id": "i4",
        "text": "Hairpin needs"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Monitor xlate counts"
      },
      {
        "id": "z2",
        "label": "Pool of globals + overload"
      },
      {
        "id": "z3",
        "label": "NetFlow/syslog options"
      },
      {
        "id": "z4",
        "label": "Special NAT order considerations"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Ports, more globals, logs, hairpin."
  },
  {
    "id": 707,
    "qid": "CCNA-MOD4-107",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match show command output focus.",
    "scenario": "<div class=\"scenario-text\"><p>What you look for.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "show ip nat translations"
      },
      {
        "id": "i2",
        "text": "show ip nat statistics"
      },
      {
        "id": "i3",
        "text": "show run | section nat"
      },
      {
        "id": "i4",
        "text": "show ip access-lists"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Active xlate entries"
      },
      {
        "id": "z2",
        "label": "Counters / pool usage"
      },
      {
        "id": "z3",
        "label": "NAT configuration"
      },
      {
        "id": "z4",
        "label": "Interesting traffic ACL"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Xlate, stats, config, ACL."
  },
  {
    "id": 708,
    "qid": "CCNA-MOD4-108",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match inside source vs outside source (concept).",
    "scenario": "<div class=\"scenario-text\"><p>Less common outside source.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Inside source"
      },
      {
        "id": "i2",
        "text": "Outside source"
      },
      {
        "id": "i3",
        "text": "Static inside"
      },
      {
        "id": "i4",
        "text": "Overload"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Typical Internet access PAT/NAT"
      },
      {
        "id": "z2",
        "label": "Translate outside addresses (special cases)"
      },
      {
        "id": "z3",
        "label": "Fixed server mapping"
      },
      {
        "id": "z4",
        "label": "Port multiplexing"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Inside source common; outside source special."
  },
  {
    "id": 709,
    "qid": "CCNA-MOD4-109",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the interface that should be marked ip nat outside.",
    "scenario": "<div class=\"scenario-text\"><p>LAN and WAN interfaces labeled.</p></div>",
    "nodes": [
      {
        "id": "i1",
        "label": "Gi0/0\nLAN",
        "x": 30,
        "y": 40
      },
      {
        "id": "i2",
        "label": "Gi0/1\nWAN",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "i2"
    ],
    "explanation": "WAN toward Internet is outside."
  },
  {
    "id": 710,
    "qid": "CCNA-MOD4-110",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the NAT type that maps many users to one public IP using ports.",
    "scenario": "<div class=\"scenario-text\"><p>Static vs PAT labels.</p></div>",
    "nodes": [
      {
        "id": "n1",
        "label": "Static NAT",
        "x": 30,
        "y": 40
      },
      {
        "id": "n2",
        "label": "PAT overload",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "n2"
    ],
    "explanation": "PAT uses ports for many-to-one."
  },
  {
    "id": 711,
    "qid": "CCNA-MOD4-111",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the address that is the inside global for a translated host.",
    "scenario": "<div class=\"scenario-text\"><p>Host 10.1.1.50 appears as 203.0.113.5 externally.</p></div>",
    "nodes": [
      {
        "id": "a1",
        "label": "10.1.1.50\ninside local",
        "x": 30,
        "y": 40
      },
      {
        "id": "a2",
        "label": "203.0.113.5\ninside global",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "a2"
    ],
    "explanation": "Inside global is the public mapped address."
  },
  {
    "id": 712,
    "qid": "CCNA-MOD4-112",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the router that performs NAT for the branch Internet access.",
    "scenario": "<div class=\"scenario-text\"><p>Branch edge vs core labels.</p></div>",
    "nodes": [
      {
        "id": "r1",
        "label": "Branch-Edge\nNAT",
        "x": 30,
        "y": 40
      },
      {
        "id": "r2",
        "label": "Core",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "r1"
    ],
    "explanation": "Edge toward ISP typically runs NAT."
  },
  {
    "id": 713,
    "qid": "CCNA-MOD4-113",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the pool that is exhausted.",
    "scenario": "<div class=\"scenario-text\"><p>Pool A 0 free; Pool B available.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "Pool-A\n0 free",
        "x": 30,
        "y": 40
      },
      {
        "id": "p2",
        "label": "Pool-B\n20 free",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "p1"
    ],
    "explanation": "0 free means exhaustion."
  },
  {
    "id": 714,
    "qid": "CCNA-MOD4-114",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the server mapping that is static NAT.",
    "scenario": "<div class=\"scenario-text\"><p>Fixed vs dynamic labels.</p></div>",
    "nodes": [
      {
        "id": "s1",
        "label": "10.1.1.10 ↔ 203.0.113.10\nstatic",
        "x": 30,
        "y": 40
      },
      {
        "id": "s2",
        "label": "Dynamic pool\nxlate",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "s1"
    ],
    "explanation": "Fixed one-to-one is static NAT."
  },
  {
    "id": 715,
    "qid": "CCNA-MOD4-115",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that enables PAT using the outside interface IP.",
    "scenario": "<div class=\"scenario-text\"><p>Overload configuration.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip nat inside source list 1 interface GigabitEthernet0/0/0 overload"
      },
      {
        "id": "l2",
        "label": "ip nat inside source static 10.1.1.10 203.0.113.10"
      },
      {
        "id": "l3",
        "label": "ip nat pool POOL 203.0.113.1 203.0.113.10 prefix-length 28"
      },
      {
        "id": "l4",
        "label": "access-list 1 permit 10.0.0.0 0.255.255.255"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "list + interface + overload = PAT."
  },
  {
    "id": 716,
    "qid": "CCNA-MOD4-116",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that mark inside and outside interfaces.",
    "scenario": "<div class=\"scenario-text\"><p>NAT interface roles.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip nat inside"
      },
      {
        "id": "l2",
        "label": "ip nat outside"
      },
      {
        "id": "l3",
        "label": "ip address 10.1.1.1 255.255.255.0"
      },
      {
        "id": "l4",
        "label": "no shutdown"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "inside and outside marks."
  },
  {
    "id": 717,
    "qid": "CCNA-MOD4-117",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that configures static NAT for a server.",
    "scenario": "<div class=\"scenario-text\"><p>One-to-one mapping.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip nat inside source static 10.1.1.10 203.0.113.10"
      },
      {
        "id": "l2",
        "label": "ip nat inside source list 1 interface Gi0/0 overload"
      },
      {
        "id": "l3",
        "label": "ip nat pool POOL ..."
      },
      {
        "id": "l4",
        "label": "access-list 1 permit any"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "static keyword creates permanent mapping."
  },
  {
    "id": 718,
    "qid": "CCNA-MOD4-118",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that define a NAT pool and bind it with an ACL (non-overload).",
    "scenario": "<div class=\"scenario-text\"><p>Dynamic NAT pool.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip nat pool POOL 203.0.113.20 203.0.113.30 prefix-length 28"
      },
      {
        "id": "l2",
        "label": "ip nat inside source list 1 pool POOL"
      },
      {
        "id": "l3",
        "label": "ip nat inside source list 1 interface Gi0/0 overload"
      },
      {
        "id": "l4",
        "label": "ip route 0.0.0.0 0.0.0.0 203.0.113.1"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Pool definition and list-to-pool binding."
  },
  {
    "id": 719,
    "qid": "CCNA-MOD4-119",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that defines interesting traffic for NAT.",
    "scenario": "<div class=\"scenario-text\"><p>ACL for inside sources.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "access-list 1 permit 10.1.0.0 0.0.255.255"
      },
      {
        "id": "l2",
        "label": "ip nat inside"
      },
      {
        "id": "l3",
        "label": "ip nat outside"
      },
      {
        "id": "l4",
        "label": "overload"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "ACL defines which inside addresses are translated."
  },
  {
    "id": 720,
    "qid": "CCNA-MOD4-120",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines useful to clear and inspect translations.",
    "scenario": "<div class=\"scenario-text\"><p>Operational NAT commands.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "clear ip nat translation *"
      },
      {
        "id": "l2",
        "label": "show ip nat translations"
      },
      {
        "id": "l3",
        "label": "vlan 10"
      },
      {
        "id": "l4",
        "label": "spanning-tree mode rapid-pvst"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "clear and show translations."
  },
  {
    "id": 721,
    "qid": "CCNA-MOD4-121",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "Which protocol encrypts the entire TACACS+ packet payload?",
    "scenario": "<div class=\"scenario-text\"><p>Compare AAA transport security.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "TACACS+"
      },
      {
        "id": "b",
        "text": "RADIUS (password only by design)"
      },
      {
        "id": "c",
        "text": "FTP"
      },
      {
        "id": "d",
        "text": "TFTP"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "TACACS+ encrypts the full payload; RADIUS typically encrypts only the password."
  },
  {
    "id": 722,
    "qid": "CCNA-MOD4-122",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "Which port does TACACS+ use by default?",
    "scenario": "<div class=\"scenario-text\"><p>Firewall rules for AAA.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "UDP 1812"
      },
      {
        "id": "b",
        "text": "TCP 49"
      },
      {
        "id": "c",
        "text": "UDP 53"
      },
      {
        "id": "d",
        "text": "TCP 22"
      }
    ],
    "correct": [
      "b"
    ],
    "explanation": "TACACS+ uses TCP 49; RADIUS uses UDP 1812/1813 (or older 1645/1646)."
  },
  {
    "id": 723,
    "qid": "CCNA-MOD4-123",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "What does the command aaa new-model enable?",
    "scenario": "<div class=\"scenario-text\"><p>First step for modern AAA on IOS.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "AAA method lists and server-based auth models"
      },
      {
        "id": "b",
        "text": "Only local enable secret"
      },
      {
        "id": "c",
        "text": "VTP version 3"
      },
      {
        "id": "d",
        "text": "OSPFv3 only"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "aaa new-model enables the AAA framework for method lists and external servers."
  },
  {
    "id": 724,
    "qid": "CCNA-MOD4-124",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "Which AAA function answers 'what did the user do?'",
    "scenario": "<div class=\"scenario-text\"><p>Authentication vs authorization vs accounting.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Accounting"
      },
      {
        "id": "b",
        "text": "Authentication"
      },
      {
        "id": "c",
        "text": "Authorization only"
      },
      {
        "id": "d",
        "text": "NAT"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Accounting records user activity; authentication verifies identity; authorization determines permissions."
  },
  {
    "id": 725,
    "qid": "CCNA-MOD4-125",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE AAA components.",
    "scenario": "<div class=\"scenario-text\"><p>Framework pillars.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Authentication"
      },
      {
        "id": "b",
        "text": "Authorization"
      },
      {
        "id": "c",
        "text": "Accounting"
      },
      {
        "id": "d",
        "text": "Advertisement"
      },
      {
        "id": "e",
        "text": "Aggregation only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "AuthN, AuthZ, Accounting."
  },
  {
    "id": 726,
    "qid": "CCNA-MOD4-126",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO TACACS+ characteristics vs RADIUS.",
    "scenario": "<div class=\"scenario-text\"><p>Protocol comparison.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Full packet encryption"
      },
      {
        "id": "b",
        "text": "TCP 49"
      },
      {
        "id": "c",
        "text": "Password-only encryption typical of RADIUS"
      },
      {
        "id": "d",
        "text": "UDP only for TACACS+"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "TACACS+ encrypts payload and uses TCP 49."
  },
  {
    "id": 727,
    "qid": "CCNA-MOD4-127",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE RADIUS traits.",
    "scenario": "<div class=\"scenario-text\"><p>When RADIUS is used.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "UDP 1812/1813 common"
      },
      {
        "id": "b",
        "text": "Encrypts password field"
      },
      {
        "id": "c",
        "text": "Widely used for 802.1X/network access"
      },
      {
        "id": "d",
        "text": "TCP 49 only"
      },
      {
        "id": "e",
        "text": "Full payload encryption identical to TACACS+ always"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "UDP ports, password encryption, network access use."
  },
  {
    "id": 728,
    "qid": "CCNA-MOD4-128",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO reasons to prefer TACACS+ for device administration.",
    "scenario": "<div class=\"scenario-text\"><p>Admin CLI access.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Command authorization granularity"
      },
      {
        "id": "b",
        "text": "Full encryption of body"
      },
      {
        "id": "c",
        "text": "Only works for Wi-Fi"
      },
      {
        "id": "d",
        "text": "Cannot do accounting"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Command-level control and encryption favor TACACS+ for admin."
  },
  {
    "id": 729,
    "qid": "CCNA-MOD4-129",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE steps to use RADIUS for login.",
    "scenario": "<div class=\"scenario-text\"><p>Basic server-based login.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "aaa new-model"
      },
      {
        "id": "b",
        "text": "radius server / aaa group server"
      },
      {
        "id": "c",
        "text": "aaa authentication login method list"
      },
      {
        "id": "d",
        "text": "vtp mode server"
      },
      {
        "id": "e",
        "text": "passive-interface default"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "new-model, server definition, login method."
  },
  {
    "id": 730,
    "qid": "CCNA-MOD4-130",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO local fallback benefits.",
    "scenario": "<div class=\"scenario-text\"><p>Method list design.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Access if AAA server is down"
      },
      {
        "id": "b",
        "text": "Specified after group in method list"
      },
      {
        "id": "c",
        "text": "Removes need for any username"
      },
      {
        "id": "d",
        "text": "Disables accounting always"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "local after group provides fallback."
  },
  {
    "id": 731,
    "qid": "CCNA-MOD4-131",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE verification points for AAA login issues.",
    "scenario": "<div class=\"scenario-text\"><p>Cannot log in remotely.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Server reachability and key"
      },
      {
        "id": "b",
        "text": "Method list applied on lines"
      },
      {
        "id": "c",
        "text": "aaa new-model present"
      },
      {
        "id": "d",
        "text": "Native VLAN only"
      },
      {
        "id": "e",
        "text": "STP root priority"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Server, method list, new-model."
  },
  {
    "id": 732,
    "qid": "CCNA-MOD4-132",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO accounting use cases.",
    "scenario": "<div class=\"scenario-text\"><p>What accounting records.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Session start/stop"
      },
      {
        "id": "b",
        "text": "Command logging with TACACS+"
      },
      {
        "id": "c",
        "text": "Replaces Syslog entirely always"
      },
      {
        "id": "d",
        "text": "Sets OSPF costs"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Session and command accounting."
  },
  {
    "id": 733,
    "qid": "CCNA-MOD4-133",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE security best practices for AAA.",
    "scenario": "<div class=\"scenario-text\"><p>Harden admin access.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Use TACACS+/RADIUS not shared local only"
      },
      {
        "id": "b",
        "text": "Unique keys per server"
      },
      {
        "id": "c",
        "text": "Fallback local with strong accounts"
      },
      {
        "id": "d",
        "text": "Same password everywhere including enable"
      },
      {
        "id": "e",
        "text": "Disable all logging"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Central AAA, unique keys, strong local fallback."
  },
  {
    "id": 734,
    "qid": "CCNA-MOD4-134",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO differences in authorization scope.",
    "scenario": "<div class=\"scenario-text\"><p>Admin vs network access.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "TACACS+ can authorize individual commands"
      },
      {
        "id": "b",
        "text": "RADIUS often used for network/VPN/802.1X authorization attributes"
      },
      {
        "id": "c",
        "text": "RADIUS always does per-command IOS CLI"
      },
      {
        "id": "d",
        "text": "TACACS+ cannot authenticate"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Command authZ vs attribute-based network authZ."
  },
  {
    "id": 735,
    "qid": "CCNA-MOD4-135",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE method list ideas.",
    "scenario": "<div class=\"scenario-text\"><p>Flexible AAA.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Named lists applied per line/service"
      },
      {
        "id": "b",
        "text": "default list used if none specified"
      },
      {
        "id": "c",
        "text": "Sequence of methods (group then local)"
      },
      {
        "id": "d",
        "text": "One global list only ever"
      },
      {
        "id": "e",
        "text": "Method lists replace ACLs"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Named, default, sequenced methods."
  },
  {
    "id": 736,
    "qid": "CCNA-MOD4-136",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO ports to allow toward RADIUS servers.",
    "scenario": "<div class=\"scenario-text\"><p>Firewall path.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "UDP 1812"
      },
      {
        "id": "b",
        "text": "UDP 1813"
      },
      {
        "id": "c",
        "text": "TCP 49 only as RADIUS"
      },
      {
        "id": "d",
        "text": "UDP 69 only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "1812 auth, 1813 accounting."
  },
  {
    "id": 737,
    "qid": "CCNA-MOD4-137",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match AAA protocol to transport/security.",
    "scenario": "<div class=\"scenario-text\"><p>TACACS+ vs RADIUS.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "TACACS+ encryption"
      },
      {
        "id": "i2",
        "text": "RADIUS encryption"
      },
      {
        "id": "i3",
        "text": "TACACS+ port"
      },
      {
        "id": "i4",
        "text": "RADIUS ports"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Full payload"
      },
      {
        "id": "z2",
        "label": "Password field primarily"
      },
      {
        "id": "z3",
        "label": "TCP 49"
      },
      {
        "id": "z4",
        "label": "UDP 1812/1813"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Full vs password; TCP 49 vs UDP 1812/13."
  },
  {
    "id": 738,
    "qid": "CCNA-MOD4-138",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match AAA function to question answered.",
    "scenario": "<div class=\"scenario-text\"><p>A-A-A meaning.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Authentication"
      },
      {
        "id": "i2",
        "text": "Authorization"
      },
      {
        "id": "i3",
        "text": "Accounting"
      },
      {
        "id": "i4",
        "text": "Advertisement"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Who are you?"
      },
      {
        "id": "z2",
        "label": "What may you do?"
      },
      {
        "id": "z3",
        "label": "What did you do?"
      },
      {
        "id": "z4",
        "label": "Not an AAA pillar"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Who, what allowed, what done."
  },
  {
    "id": 739,
    "qid": "CCNA-MOD4-139",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Order basic AAA login with RADIUS.",
    "scenario": "<div class=\"scenario-text\"><p>Server-based device login.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "aaa new-model"
      },
      {
        "id": "c2",
        "text": "Define radius server / key"
      },
      {
        "id": "c3",
        "text": "aaa authentication login default group radius local"
      },
      {
        "id": "c4",
        "text": "Apply to lines if using named list"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "new-model → server → method → apply."
  },
  {
    "id": 740,
    "qid": "CCNA-MOD4-140",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match method keyword to meaning.",
    "scenario": "<div class=\"scenario-text\"><p>Method lists.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "group radius"
      },
      {
        "id": "i2",
        "text": "local"
      },
      {
        "id": "i3",
        "text": "line"
      },
      {
        "id": "i4",
        "text": "none"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Query RADIUS servers"
      },
      {
        "id": "z2",
        "label": "Local username database"
      },
      {
        "id": "z3",
        "label": "Line password"
      },
      {
        "id": "z4",
        "label": "No authentication"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "group, local, line, none."
  },
  {
    "id": 741,
    "qid": "CCNA-MOD4-141",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match problem to AAA check.",
    "scenario": "<div class=\"scenario-text\"><p>Login failures.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Server unreachable"
      },
      {
        "id": "i2",
        "text": "Key mismatch"
      },
      {
        "id": "i3",
        "text": "No fallback local"
      },
      {
        "id": "i4",
        "text": "Method list not on VTY"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Timeouts to AAA"
      },
      {
        "id": "z2",
        "label": "Rejects from server"
      },
      {
        "id": "z3",
        "label": "Lockout if servers down"
      },
      {
        "id": "z4",
        "label": "Still uses other auth"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Reachability, key, fallback, apply."
  },
  {
    "id": 742,
    "qid": "CCNA-MOD4-142",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Order recovery when AAA locks admins out.",
    "scenario": "<div class=\"scenario-text\"><p>Break-glass.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Console local access if available"
      },
      {
        "id": "c2",
        "text": "Fix server/key/method list"
      },
      {
        "id": "c3",
        "text": "Test login with fallback"
      },
      {
        "id": "c4",
        "text": "Document change"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Console → fix → test → document."
  },
  {
    "id": 743,
    "qid": "CCNA-MOD4-143",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match use case to preferred protocol tendency.",
    "scenario": "<div class=\"scenario-text\"><p>Admin vs network access.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "IOS command authorization"
      },
      {
        "id": "i2",
        "text": "802.1X / VPN attributes"
      },
      {
        "id": "i3",
        "text": "Simple network login accounting"
      },
      {
        "id": "i4",
        "text": "Device admin with full encryption"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "TACACS+ strong fit"
      },
      {
        "id": "z2",
        "label": "RADIUS strong fit"
      },
      {
        "id": "z3",
        "label": "RADIUS common"
      },
      {
        "id": "z4",
        "label": "TACACS+ strong fit"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "TACACS+ admin; RADIUS network access."
  },
  {
    "id": 744,
    "qid": "CCNA-MOD4-144",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match CLI element to role.",
    "scenario": "<div class=\"scenario-text\"><p>AAA building blocks.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "aaa new-model"
      },
      {
        "id": "i2",
        "text": "radius server HOST"
      },
      {
        "id": "i3",
        "text": "aaa group server radius G"
      },
      {
        "id": "i4",
        "text": "login authentication LIST"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Enable AAA framework"
      },
      {
        "id": "z2",
        "label": "Define server"
      },
      {
        "id": "z3",
        "label": "Group servers"
      },
      {
        "id": "z4",
        "label": "Apply list on line"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Framework, server, group, apply."
  },
  {
    "id": 745,
    "qid": "CCNA-MOD4-145",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match accounting type to example.",
    "scenario": "<div class=\"scenario-text\"><p>What gets logged.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Network accounting"
      },
      {
        "id": "i2",
        "text": "Connection accounting"
      },
      {
        "id": "i3",
        "text": "EXEC accounting"
      },
      {
        "id": "i4",
        "text": "Command accounting"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Session network usage"
      },
      {
        "id": "z2",
        "label": "Outbound connections"
      },
      {
        "id": "z3",
        "label": "Shell sessions"
      },
      {
        "id": "z4",
        "label": "Commands entered"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Network, connection, EXEC, command."
  },
  {
    "id": 746,
    "qid": "CCNA-MOD4-146",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Order test of new RADIUS login list.",
    "scenario": "<div class=\"scenario-text\"><p>Validate safely.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Keep console on local"
      },
      {
        "id": "c2",
        "text": "Apply list to one VTY range first"
      },
      {
        "id": "c3",
        "text": "Test RADIUS user"
      },
      {
        "id": "c4",
        "text": "Expand after success"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Protect console → limited apply → test → expand."
  },
  {
    "id": 747,
    "qid": "CCNA-MOD4-147",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match key/secret practice to risk mitigated.",
    "scenario": "<div class=\"scenario-text\"><p>AAA secrets.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Unique key per server"
      },
      {
        "id": "i2",
        "text": "Strong key length"
      },
      {
        "id": "i3",
        "text": "Restrict CoA sources"
      },
      {
        "id": "i4",
        "text": "Same key on all devices/servers"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Blast radius of leak"
      },
      {
        "id": "z2",
        "label": "Brute force resistance"
      },
      {
        "id": "z3",
        "label": "Unauthorized dynamic changes"
      },
      {
        "id": "z4",
        "label": "Increases risk"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Unique, strong, restrict, avoid shared."
  },
  {
    "id": 748,
    "qid": "CCNA-MOD4-148",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match fallback order example to behavior.",
    "scenario": "<div class=\"scenario-text\"><p>group radius local.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "RADIUS up"
      },
      {
        "id": "i2",
        "text": "RADIUS down"
      },
      {
        "id": "i3",
        "text": "local only list"
      },
      {
        "id": "i4",
        "text": "none method"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Authenticate via RADIUS"
      },
      {
        "id": "z2",
        "label": "Fall back to local users"
      },
      {
        "id": "z3",
        "label": "Only local database"
      },
      {
        "id": "z4",
        "label": "No auth (dangerous)"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "RADIUS, fallback, local-only, none."
  },
  {
    "id": 749,
    "qid": "CCNA-MOD4-149",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the protocol that uses TCP 49 and full payload encryption.",
    "scenario": "<div class=\"scenario-text\"><p>TACACS+ vs RADIUS labels.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "TACACS+",
        "x": 30,
        "y": 40
      },
      {
        "id": "p2",
        "label": "RADIUS",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "p1"
    ],
    "explanation": "TACACS+ is TCP 49 with full encryption."
  },
  {
    "id": 750,
    "qid": "CCNA-MOD4-150",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the AAA server that should be reachable for 802.1X.",
    "scenario": "<div class=\"scenario-text\"><p>RADIUS vs TACACS+ placement for network access.</p></div>",
    "nodes": [
      {
        "id": "s1",
        "label": "RADIUS\n1812",
        "x": 30,
        "y": 40
      },
      {
        "id": "s2",
        "label": "TACACS+\n49",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "s1"
    ],
    "explanation": "802.1X commonly uses RADIUS."
  },
  {
    "id": 751,
    "qid": "CCNA-MOD4-151",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the line access method that should keep local fallback during AAA changes.",
    "scenario": "<div class=\"scenario-text\"><p>Console vs VTY risk.</p></div>",
    "nodes": [
      {
        "id": "a1",
        "label": "Console",
        "x": 30,
        "y": 40
      },
      {
        "id": "a2",
        "label": "All VTYs\nimmediately",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "a1"
    ],
    "explanation": "Keep console on local while testing VTY AAA."
  },
  {
    "id": 752,
    "qid": "CCNA-MOD4-152",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the function that records commands a user executed.",
    "scenario": "<div class=\"scenario-text\"><p>AuthN vs AuthZ vs Accounting.</p></div>",
    "nodes": [
      {
        "id": "f1",
        "label": "Accounting",
        "x": 25,
        "y": 40
      },
      {
        "id": "f2",
        "label": "Authentication",
        "x": 55,
        "y": 40
      },
      {
        "id": "f3",
        "label": "Authorization",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "f1"
    ],
    "explanation": "Accounting records activity including commands."
  },
  {
    "id": 753,
    "qid": "CCNA-MOD4-153",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the device that must share the correct RADIUS key with the server.",
    "scenario": "<div class=\"scenario-text\"><p>NAS and server trust.</p></div>",
    "nodes": [
      {
        "id": "d1",
        "label": "Switch NAS",
        "x": 30,
        "y": 40
      },
      {
        "id": "d2",
        "label": "User PC only",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "d1"
    ],
    "explanation": "The network device (NAS) shares the RADIUS key with the server."
  },
  {
    "id": 754,
    "qid": "CCNA-MOD4-154",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the method that runs if RADIUS servers are unreachable in 'group radius local'.",
    "scenario": "<div class=\"scenario-text\"><p>Fallback behavior.</p></div>",
    "nodes": [
      {
        "id": "m1",
        "label": "local",
        "x": 30,
        "y": 40
      },
      {
        "id": "m2",
        "label": "none",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "m1"
    ],
    "explanation": "local is the fallback after group radius."
  },
  {
    "id": 755,
    "qid": "CCNA-MOD4-155",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that enables the AAA framework.",
    "scenario": "<div class=\"scenario-text\"><p>First AAA command.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "aaa new-model"
      },
      {
        "id": "l2",
        "label": "radius server RS1"
      },
      {
        "id": "l3",
        "label": "username admin privilege 15"
      },
      {
        "id": "l4",
        "label": "line vty 0 4"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "aaa new-model enables AAA."
  },
  {
    "id": 756,
    "qid": "CCNA-MOD4-156",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that define a RADIUS server and its key.",
    "scenario": "<div class=\"scenario-text\"><p>Server definition.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "radius server RS1"
      },
      {
        "id": "l2",
        "label": "key SECRETKEY"
      },
      {
        "id": "l3",
        "label": "aaa new-model"
      },
      {
        "id": "l4",
        "label": "login authentication default"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Server name and shared key."
  },
  {
    "id": 757,
    "qid": "CCNA-MOD4-157",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that sets login authentication to RADIUS then local.",
    "scenario": "<div class=\"scenario-text\"><p>Method list default.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "aaa authentication login default group radius local"
      },
      {
        "id": "l2",
        "label": "aaa authorization exec default local"
      },
      {
        "id": "l3",
        "label": "aaa accounting exec default start-stop group radius"
      },
      {
        "id": "l4",
        "label": "enable secret cisco"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "group radius local orders RADIUS then local."
  },
  {
    "id": 758,
    "qid": "CCNA-MOD4-158",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that apply a named login list to VTY lines.",
    "scenario": "<div class=\"scenario-text\"><p>Named list application.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "line vty 0 4"
      },
      {
        "id": "l2",
        "label": "login authentication VTY_RADIUS"
      },
      {
        "id": "l3",
        "label": "ip access-group 10 in"
      },
      {
        "id": "l4",
        "label": "transport input ssh"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Under VTY, login authentication LIST."
  },
  {
    "id": 759,
    "qid": "CCNA-MOD4-159",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that configures TACACS+ server key context (classic style concept).",
    "scenario": "<div class=\"scenario-text\"><p>TACACS+ key.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "tacacs server TS1 / key ..."
      },
      {
        "id": "l2",
        "label": "radius server RS1"
      },
      {
        "id": "l3",
        "label": "aaa new-model"
      },
      {
        "id": "l4",
        "label": "username admin"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "TACACS+ server definition includes key."
  },
  {
    "id": 760,
    "qid": "CCNA-MOD4-160",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines related to enabling AAA accounting for EXEC sessions.",
    "scenario": "<div class=\"scenario-text\"><p>Accounting configuration.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "aaa accounting exec default start-stop group radius"
      },
      {
        "id": "l2",
        "label": "aaa authentication login default group radius local"
      },
      {
        "id": "l3",
        "label": "vlan 10"
      },
      {
        "id": "l4",
        "label": "spanning-tree mode rapid-pvst"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Accounting exec and related AAA login context."
  },
  {
    "id": 761,
    "qid": "CCNA-MOD4-161",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "What does DHCP Snooping primarily protect against?",
    "scenario": "<div class=\"scenario-text\"><p>Rogue DHCP servers on access ports.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Rogue DHCP servers offering bad gateways"
      },
      {
        "id": "b",
        "text": "OSPF spoofing only"
      },
      {
        "id": "c",
        "text": "BGP hijacks only"
      },
      {
        "id": "d",
        "text": "Wi-Fi deauth only"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "DHCP Snooping filters DHCP server messages on untrusted ports."
  },
  {
    "id": 762,
    "qid": "CCNA-MOD4-162",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "Which feature validates ARP using the DHCP Snooping binding table?",
    "scenario": "<div class=\"scenario-text\"><p>Mitigate ARP spoofing.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Dynamic ARP Inspection (DAI)"
      },
      {
        "id": "b",
        "text": "Storm Control only"
      },
      {
        "id": "c",
        "text": "Port Security only"
      },
      {
        "id": "d",
        "text": "Root Guard only"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "DAI checks ARP against DHCP bindings (and static entries)."
  },
  {
    "id": 763,
    "qid": "CCNA-MOD4-163",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "What must be true for DAI to work effectively?",
    "scenario": "<div class=\"scenario-text\"><p>Dependency chain.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "DHCP Snooping enabled and bindings populated"
      },
      {
        "id": "b",
        "text": "VTP transparent only"
      },
      {
        "id": "c",
        "text": "OSPF passive only"
      },
      {
        "id": "d",
        "text": "NAT overload only"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "DAI relies on the DHCP Snooping binding database."
  },
  {
    "id": 764,
    "qid": "CCNA-MOD4-164",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "single",
    "prompt": "Which command trusts a port for DHCP Snooping?",
    "scenario": "<div class=\"scenario-text\"><p>Uplink toward real DHCP server.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "ip dhcp snooping trust"
      },
      {
        "id": "b",
        "text": "ip arp inspection trust"
      },
      {
        "id": "c",
        "text": "ip verify source"
      },
      {
        "id": "d",
        "text": "spanning-tree portfast"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "ip dhcp snooping trust marks the port as trusted for DHCP messages."
  },
  {
    "id": 765,
    "qid": "CCNA-MOD4-165",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE Layer-2 security features.",
    "scenario": "<div class=\"scenario-text\"><p>Campus edge hardening.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "DHCP Snooping"
      },
      {
        "id": "b",
        "text": "Dynamic ARP Inspection"
      },
      {
        "id": "c",
        "text": "Storm Control"
      },
      {
        "id": "d",
        "text": "BGP prefix lists"
      },
      {
        "id": "e",
        "text": "OSPF areas only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Snooping, DAI, and storm control are L2 edge tools."
  },
  {
    "id": 766,
    "qid": "CCNA-MOD4-166",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO ports that should be DHCP Snooping trusted.",
    "scenario": "<div class=\"scenario-text\"><p>Trust design.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Uplinks toward DHCP server"
      },
      {
        "id": "b",
        "text": "Links to other trusted switches on server path"
      },
      {
        "id": "c",
        "text": "All user access ports"
      },
      {
        "id": "d",
        "text": "All ports by default after enable"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Trust server-facing paths; untrust access ports."
  },
  {
    "id": 767,
    "qid": "CCNA-MOD4-167",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE steps to enable DAI on a VLAN.",
    "scenario": "<div class=\"scenario-text\"><p>ARP spoofing defense.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Enable DHCP Snooping globally and on VLAN"
      },
      {
        "id": "b",
        "text": "Build bindings"
      },
      {
        "id": "c",
        "text": "ip arp inspection vlan <id>"
      },
      {
        "id": "d",
        "text": "Disable all trunks"
      },
      {
        "id": "e",
        "text": "Turn off PortFast everywhere"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Snooping first, then DAI on VLAN."
  },
  {
    "id": 768,
    "qid": "CCNA-MOD4-168",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO Storm Control purposes.",
    "scenario": "<div class=\"scenario-text\"><p>Traffic rate limits.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Limit broadcast/multicast/unicast storms"
      },
      {
        "id": "b",
        "text": "Protect CPU and bandwidth from floods"
      },
      {
        "id": "c",
        "text": "Replace STP"
      },
      {
        "id": "d",
        "text": "Encrypt ARP"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Rate-limit storms to protect resources."
  },
  {
    "id": 769,
    "qid": "CCNA-MOD4-169",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE RA Guard concepts (IPv6).",
    "scenario": "<div class=\"scenario-text\"><p>Rogue router advertisements.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Filter RAs on untrusted ports"
      },
      {
        "id": "b",
        "text": "Allow RAs only from trusted routers"
      },
      {
        "id": "c",
        "text": "Protect host default router info"
      },
      {
        "id": "d",
        "text": "Replace DHCPv4 only"
      },
      {
        "id": "e",
        "text": "Disable IPv6 globally always"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "RA Guard filters rogue IPv6 RAs."
  },
  {
    "id": 770,
    "qid": "CCNA-MOD4-170",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO port-security related ideas still relevant with snooping.",
    "scenario": "<div class=\"scenario-text\"><p>Complementary controls.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Limit MAC count on access ports"
      },
      {
        "id": "b",
        "text": "Violation actions shutdown/restrict/protect"
      },
      {
        "id": "c",
        "text": "Replace need for DAI"
      },
      {
        "id": "d",
        "text": "Disable DHCP entirely"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "MAC limits and violation modes."
  },
  {
    "id": 771,
    "qid": "CCNA-MOD4-171",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE verification commands for DHCP Snooping/DAI.",
    "scenario": "<div class=\"scenario-text\"><p>Confirm bindings and status.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "show ip dhcp snooping binding"
      },
      {
        "id": "b",
        "text": "show ip dhcp snooping"
      },
      {
        "id": "c",
        "text": "show ip arp inspection"
      },
      {
        "id": "d",
        "text": "show vlan brief only"
      },
      {
        "id": "e",
        "text": "show cdp neighbors only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Bindings, snooping status, ARP inspection status."
  },
  {
    "id": 772,
    "qid": "CCNA-MOD4-172",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO risks if all ports are trusted for snooping.",
    "scenario": "<div class=\"scenario-text\"><p>Misconfiguration.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Rogue DHCP can serve clients"
      },
      {
        "id": "b",
        "text": "Bindings may be unreliable"
      },
      {
        "id": "c",
        "text": "Perfect security"
      },
      {
        "id": "d",
        "text": "Automatic RA Guard"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Trusting access ports defeats snooping."
  },
  {
    "id": 773,
    "qid": "CCNA-MOD4-173",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE symptoms of ARP spoofing without DAI.",
    "scenario": "<div class=\"scenario-text\"><p>Attack indicators.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Wrong gateway MAC in client ARP"
      },
      {
        "id": "b",
        "text": "Traffic interception"
      },
      {
        "id": "c",
        "text": "Intermittent connectivity"
      },
      {
        "id": "d",
        "text": "OSPF cost change only"
      },
      {
        "id": "e",
        "text": "VTP revision jump only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Bad ARP, interception, instability."
  },
  {
    "id": 774,
    "qid": "CCNA-MOD4-174",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO IPv6 L2 security features.",
    "scenario": "<div class=\"scenario-text\"><p>IPv6 edge.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "RA Guard"
      },
      {
        "id": "b",
        "text": "DHCPv6 Guard / related controls"
      },
      {
        "id": "c",
        "text": "OSPFv2 only features"
      },
      {
        "id": "d",
        "text": "PAgP only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "RA Guard and DHCPv6 Guard class features."
  },
  {
    "id": 775,
    "qid": "CCNA-MOD4-175",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select THREE binding table uses.",
    "scenario": "<div class=\"scenario-text\"><p>Why bindings matter.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "DAI validation"
      },
      {
        "id": "b",
        "text": "IP Source Guard options"
      },
      {
        "id": "c",
        "text": "Visibility of client leases on switch"
      },
      {
        "id": "d",
        "text": "Replace routing table"
      },
      {
        "id": "e",
        "text": "Set STP priority"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "DAI, IPSG, and visibility."
  },
  {
    "id": 776,
    "qid": "CCNA-MOD4-176",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "multiselect",
    "prompt": "Select TWO storm-control configuration ideas.",
    "scenario": "<div class=\"scenario-text\"><p>Rate limiting.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Set rising threshold for broadcast"
      },
      {
        "id": "b",
        "text": "Action shutdown or trap"
      },
      {
        "id": "c",
        "text": "Disable all multicasts forever always"
      },
      {
        "id": "d",
        "text": "Replace ACLs entirely"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Threshold and action."
  },
  {
    "id": 777,
    "qid": "CCNA-MOD4-177",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match L2 security feature to threat mitigated.",
    "scenario": "<div class=\"scenario-text\"><p>Control mapping.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "DHCP Snooping"
      },
      {
        "id": "i2",
        "text": "DAI"
      },
      {
        "id": "i3",
        "text": "Storm Control"
      },
      {
        "id": "i4",
        "text": "RA Guard"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Rogue DHCP"
      },
      {
        "id": "z2",
        "label": "ARP spoofing"
      },
      {
        "id": "z3",
        "label": "L2 floods"
      },
      {
        "id": "z4",
        "label": "Rogue IPv6 RAs"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Snooping, DAI, storm, RA Guard."
  },
  {
    "id": 778,
    "qid": "CCNA-MOD4-178",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match trust state to port role.",
    "scenario": "<div class=\"scenario-text\"><p>Snooping trust.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Trusted"
      },
      {
        "id": "i2",
        "text": "Untrusted"
      },
      {
        "id": "i3",
        "text": "Uplink to server"
      },
      {
        "id": "i4",
        "text": "Access to PC"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Allow DHCP server messages"
      },
      {
        "id": "z2",
        "label": "Block server messages from clients"
      },
      {
        "id": "z3",
        "label": "Should be trusted"
      },
      {
        "id": "z4",
        "label": "Should be untrusted"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Trust vs untrust roles."
  },
  {
    "id": 779,
    "qid": "CCNA-MOD4-179",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Order enablement of DAI on a user VLAN.",
    "scenario": "<div class=\"scenario-text\"><p>Dependency order.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "ip dhcp snooping"
      },
      {
        "id": "c2",
        "text": "ip dhcp snooping vlan 20"
      },
      {
        "id": "c3",
        "text": "Trust uplinks"
      },
      {
        "id": "c4",
        "text": "ip arp inspection vlan 20"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Global snooping → VLAN → trust → DAI."
  },
  {
    "id": 780,
    "qid": "CCNA-MOD4-180",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match command to feature.",
    "scenario": "<div class=\"scenario-text\"><p>CLI association.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "ip dhcp snooping trust"
      },
      {
        "id": "i2",
        "text": "ip arp inspection vlan 10"
      },
      {
        "id": "i3",
        "text": "storm-control broadcast level 2.0"
      },
      {
        "id": "i4",
        "text": "ipv6 nd raguard"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "DHCP Snooping"
      },
      {
        "id": "z2",
        "label": "DAI"
      },
      {
        "id": "z3",
        "label": "Storm Control"
      },
      {
        "id": "z4",
        "label": "RA Guard"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Trust, DAI VLAN, storm, RA Guard."
  },
  {
    "id": 781,
    "qid": "CCNA-MOD4-181",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match binding source to entry type.",
    "scenario": "<div class=\"scenario-text\"><p>How bindings form.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "DHCP lease snooped"
      },
      {
        "id": "i2",
        "text": "Static binding configured"
      },
      {
        "id": "i3",
        "text": "No snooping"
      },
      {
        "id": "i4",
        "text": "Trusted port DHCP"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Dynamic binding"
      },
      {
        "id": "z2",
        "label": "Static binding"
      },
      {
        "id": "z3",
        "label": "No useful bindings"
      },
      {
        "id": "z4",
        "label": "Server path allowed"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Dynamic, static, none, trusted path."
  },
  {
    "id": 782,
    "qid": "CCNA-MOD4-182",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Order response to rogue DHCP incident.",
    "scenario": "<div class=\"scenario-text\"><p>Containment.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Identify untrusted port offering DHCP"
      },
      {
        "id": "c2",
        "text": "Shut/errdisable port"
      },
      {
        "id": "c3",
        "text": "Verify snooping trust design"
      },
      {
        "id": "c4",
        "text": "Clear bad client leases / renew"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Find → shut → fix trust → renew clients."
  },
  {
    "id": 783,
    "qid": "CCNA-MOD4-183",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match storm-control traffic type to example.",
    "scenario": "<div class=\"scenario-text\"><p>What can be limited.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Broadcast"
      },
      {
        "id": "i2",
        "text": "Multicast"
      },
      {
        "id": "i3",
        "text": "Unicast"
      },
      {
        "id": "i4",
        "text": "Unknown unicast"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "FF:FF:FF:FF:FF:FF floods"
      },
      {
        "id": "z2",
        "label": "Group floods"
      },
      {
        "id": "z3",
        "label": "One-to-one frames rate"
      },
      {
        "id": "z4",
        "label": "Flooding when MAC unknown"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Broadcast, multicast, unicast, unknown unicast."
  },
  {
    "id": 784,
    "qid": "CCNA-MOD4-184",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match IPv6 guard feature to target.",
    "scenario": "<div class=\"scenario-text\"><p>IPv6 edge security.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "RA Guard"
      },
      {
        "id": "i2",
        "text": "DHCPv6 Guard"
      },
      {
        "id": "i3",
        "text": "Source Guard ideas"
      },
      {
        "id": "i4",
        "text": "DAI (IPv4 ARP)"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Rogue Router Advertisements"
      },
      {
        "id": "z2",
        "label": "Rogue DHCPv6 servers"
      },
      {
        "id": "z3",
        "label": "IP/MAC binding enforcement"
      },
      {
        "id": "z4",
        "label": "IPv4 ARP validation"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "RA, DHCPv6, source, DAI."
  },
  {
    "id": 785,
    "qid": "CCNA-MOD4-185",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Order verification after enabling snooping.",
    "scenario": "<div class=\"scenario-text\"><p>Confirm health.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "show ip dhcp snooping"
      },
      {
        "id": "c2",
        "text": "show ip dhcp snooping binding"
      },
      {
        "id": "c3",
        "text": "Generate client DHCP"
      },
      {
        "id": "c4",
        "text": "Confirm binding appears"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Status → bindings → test → confirm."
  },
  {
    "id": 786,
    "qid": "CCNA-MOD4-186",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match misconfig to impact.",
    "scenario": "<div class=\"scenario-text\"><p>L2 security mistakes.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Access port trusted"
      },
      {
        "id": "i2",
        "text": "Uplink untrusted"
      },
      {
        "id": "i3",
        "text": "DAI without snooping"
      },
      {
        "id": "i4",
        "text": "Storm level 100%"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Rogue DHCP allowed"
      },
      {
        "id": "z2",
        "label": "Valid DHCP blocked"
      },
      {
        "id": "z3",
        "label": "No bindings / drops"
      },
      {
        "id": "z4",
        "label": "No effective limiting"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Wrong trust, no bindings, ineffective storm."
  },
  {
    "id": 787,
    "qid": "CCNA-MOD4-187",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match feature dependency.",
    "scenario": "<div class=\"scenario-text\"><p>What relies on what.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "DAI"
      },
      {
        "id": "i2",
        "text": "IP Source Guard"
      },
      {
        "id": "i3",
        "text": "DHCP Snooping"
      },
      {
        "id": "i4",
        "text": "Port-security"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Needs bindings"
      },
      {
        "id": "z2",
        "label": "Often needs bindings"
      },
      {
        "id": "z3",
        "label": "Builds bindings"
      },
      {
        "id": "z4",
        "label": "MAC count independent"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "DAI/IPSG need bindings; snooping builds; port-sec separate."
  },
  {
    "id": 788,
    "qid": "CCNA-MOD4-188",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "dragdrop",
    "prompt": "Match action keyword to result.",
    "scenario": "<div class=\"scenario-text\"><p>Violation / storm actions.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "shutdown"
      },
      {
        "id": "i2",
        "text": "restrict"
      },
      {
        "id": "i3",
        "text": "protect"
      },
      {
        "id": "i4",
        "text": "trap"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Err-disable port"
      },
      {
        "id": "z2",
        "label": "Drop excess + log/counter"
      },
      {
        "id": "z3",
        "label": "Drop excess silently"
      },
      {
        "id": "z4",
        "label": "SNMP notification option"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Shutdown, restrict, protect, trap."
  },
  {
    "id": 789,
    "qid": "CCNA-MOD4-189",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the switch port that MUST be trusted for DHCP Snooping.",
    "scenario": "<div class=\"scenario-text\"><p>Uplink to DHCP server vs access PCs.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "Gi0/1\nto DHCP",
        "x": 25,
        "y": 40
      },
      {
        "id": "p2",
        "label": "Gi0/2\nPC-A",
        "x": 55,
        "y": 40
      },
      {
        "id": "p3",
        "label": "Gi0/3\nPC-B",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "p1"
    ],
    "explanation": "Server-facing uplink must be trusted."
  },
  {
    "id": 790,
    "qid": "CCNA-MOD4-190",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the feature that blocks rogue DHCP offers on access ports.",
    "scenario": "<div class=\"scenario-text\"><p>Feature names labeled.</p></div>",
    "nodes": [
      {
        "id": "f1",
        "label": "DHCP Snooping",
        "x": 30,
        "y": 40
      },
      {
        "id": "f2",
        "label": "Root Guard",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "f1"
    ],
    "explanation": "DHCP Snooping filters server messages on untrusted ports."
  },
  {
    "id": 791,
    "qid": "CCNA-MOD4-191",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the feature that validates ARP against bindings.",
    "scenario": "<div class=\"scenario-text\"><p>DAI vs Storm Control.</p></div>",
    "nodes": [
      {
        "id": "f1",
        "label": "DAI",
        "x": 30,
        "y": 40
      },
      {
        "id": "f2",
        "label": "Storm Control",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "f1"
    ],
    "explanation": "DAI validates ARP using bindings."
  },
  {
    "id": 792,
    "qid": "CCNA-MOD4-192",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the access port that should remain untrusted.",
    "scenario": "<div class=\"scenario-text\"><p>User ports vs uplink.</p></div>",
    "nodes": [
      {
        "id": "a1",
        "label": "Gi0/5\nUser",
        "x": 30,
        "y": 40
      },
      {
        "id": "a2",
        "label": "Gi0/24\nUplink trusted",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "a1"
    ],
    "explanation": "User access ports stay untrusted."
  },
  {
    "id": 793,
    "qid": "CCNA-MOD4-193",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the IPv6 feature that filters rogue Router Advertisements.",
    "scenario": "<div class=\"scenario-text\"><p>RA Guard vs DHCPv4 Snooping labels.</p></div>",
    "nodes": [
      {
        "id": "v1",
        "label": "RA Guard",
        "x": 30,
        "y": 40
      },
      {
        "id": "v2",
        "label": "DHCPv4 Snooping",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "v1"
    ],
    "explanation": "RA Guard targets IPv6 RAs."
  },
  {
    "id": 794,
    "qid": "CCNA-MOD4-194",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "prompt": "Click the binding table that DAI consults.",
    "scenario": "<div class=\"scenario-text\"><p>Sources of truth labeled.</p></div>",
    "nodes": [
      {
        "id": "b1",
        "label": "DHCP Snooping\nbindings",
        "x": 30,
        "y": 40
      },
      {
        "id": "b2",
        "label": "MAC address\ntable only",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "b1"
    ],
    "explanation": "DAI uses DHCP Snooping bindings."
  },
  {
    "id": 795,
    "qid": "CCNA-MOD4-195",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that enable DHCP Snooping globally and for VLAN 20.",
    "scenario": "<div class=\"scenario-text\"><p>Snooping enablement.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip dhcp snooping"
      },
      {
        "id": "l2",
        "label": "ip dhcp snooping vlan 20"
      },
      {
        "id": "l3",
        "label": "ip arp inspection vlan 20"
      },
      {
        "id": "l4",
        "label": "spanning-tree portfast"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Global and VLAN snooping."
  },
  {
    "id": 796,
    "qid": "CCNA-MOD4-196",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that trusts an uplink for DHCP Snooping.",
    "scenario": "<div class=\"scenario-text\"><p>Trusted port.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip dhcp snooping trust"
      },
      {
        "id": "l2",
        "label": "ip arp inspection trust"
      },
      {
        "id": "l3",
        "label": "ip verify source"
      },
      {
        "id": "l4",
        "label": "no cdp enable"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "ip dhcp snooping trust."
  },
  {
    "id": 797,
    "qid": "CCNA-MOD4-197",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that enable DAI on VLAN 20 after snooping is ready.",
    "scenario": "<div class=\"scenario-text\"><p>DAI activation.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip arp inspection vlan 20"
      },
      {
        "id": "l2",
        "label": "ip dhcp snooping vlan 20"
      },
      {
        "id": "l3",
        "label": "vlan 20"
      },
      {
        "id": "l4",
        "label": "name USERS"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "DAI VLAN and dependency on snooping VLAN."
  },
  {
    "id": 798,
    "qid": "CCNA-MOD4-198",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that configures storm control for broadcasts at 2%.",
    "scenario": "<div class=\"scenario-text\"><p>Storm Control example.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "storm-control broadcast level 2.0"
      },
      {
        "id": "l2",
        "label": "storm-control action shutdown"
      },
      {
        "id": "l3",
        "label": "ip dhcp snooping"
      },
      {
        "id": "l4",
        "label": "ip arp inspection vlan 1"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "storm-control broadcast level sets threshold."
  },
  {
    "id": 799,
    "qid": "CCNA-MOD4-199",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines related to RA Guard policy application concept.",
    "scenario": "<div class=\"scenario-text\"><p>IPv6 RA filtering.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ipv6 nd raguard policy POL"
      },
      {
        "id": "l2",
        "label": "ipv6 nd raguard attach-policy POL"
      },
      {
        "id": "l3",
        "label": "ip dhcp snooping trust"
      },
      {
        "id": "l4",
        "label": "ip nat inside"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Policy define and attach for RA Guard."
  },
  {
    "id": 800,
    "qid": "CCNA-MOD4-200",
    "moduleId": "mod4",
    "module": "Network Services and Security",
    "domain": "Network Services and Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that shows DHCP Snooping bindings (verification).",
    "scenario": "<div class=\"scenario-text\"><p>Operational check command.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "show ip dhcp snooping binding"
      },
      {
        "id": "l2",
        "label": "show ip arp inspection"
      },
      {
        "id": "l3",
        "label": "show vlan brief"
      },
      {
        "id": "l4",
        "label": "show cdp neighbors"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "show ip dhcp snooping binding lists bindings."
  },
  {
    "id": 801,
    "qid": "CCNA-MOD5-001",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "Which Catalyst Center capability uses machine learning to baseline performance and detect anomalies?",
    "scenario": "<div class=\"scenario-text\"><p>Wireless clients report intermittent issues; AI analytics is enabled.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "AI Analytics / Assurance insights"
      },
      {
        "id": "b",
        "text": "Only static threshold SNMP traps"
      },
      {
        "id": "c",
        "text": "Manual show commands exclusively"
      },
      {
        "id": "d",
        "text": "VTP pruning only"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Catalyst Center AI Analytics learns baselines and flags anomalies beyond simple static thresholds."
  },
  {
    "id": 802,
    "qid": "CCNA-MOD5-002",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "What primary visibility does Cisco ThousandEyes provide in operations?",
    "scenario": "<div class=\"scenario-text\"><p>End-to-end path and application experience monitoring.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Internet and WAN path / endpoint experience insights"
      },
      {
        "id": "b",
        "text": "Only local switch CAM tables"
      },
      {
        "id": "c",
        "text": "Only STP root elections"
      },
      {
        "id": "d",
        "text": "Only VTP revision numbers"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "ThousandEyes focuses on path and application experience from enterprise and Internet vantage points."
  },
  {
    "id": 803,
    "qid": "CCNA-MOD5-003",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "Cisco Spaces is primarily associated with which operational insight?",
    "scenario": "<div class=\"scenario-text\"><p>Location and presence analytics in venues.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Location / presence analytics"
      },
      {
        "id": "b",
        "text": "Only OSPF cost calculation"
      },
      {
        "id": "c",
        "text": "Only ACL line numbers"
      },
      {
        "id": "d",
        "text": "Only BGP AS path length"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Cisco Spaces provides location and engagement analytics from wireless and IoT signals."
  },
  {
    "id": 804,
    "qid": "CCNA-MOD5-004",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "What does predictive insight in Catalyst Center Assurance typically help operators do?",
    "scenario": "<div class=\"scenario-text\"><p>Anticipate issues before user impact.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Identify trends and likely future problems"
      },
      {
        "id": "b",
        "text": "Replace all physical cabling automatically"
      },
      {
        "id": "c",
        "text": "Disable all monitoring"
      },
      {
        "id": "d",
        "text": "Erase device configs nightly"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Predictive analytics surfaces trends so teams can act before widespread impact."
  },
  {
    "id": 805,
    "qid": "CCNA-MOD5-005",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE sources of telemetry used by modern AI network analytics platforms.",
    "scenario": "<div class=\"scenario-text\"><p>Data feeding assurance engines.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Streaming telemetry / model-driven data"
      },
      {
        "id": "b",
        "text": "SNMP and Syslog"
      },
      {
        "id": "c",
        "text": "Client and application experience probes"
      },
      {
        "id": "d",
        "text": "Handwritten sticky notes only"
      },
      {
        "id": "e",
        "text": "Paper cable diagrams only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Telemetry, classic management protocols, and experience probes feed AI analytics."
  },
  {
    "id": 806,
    "qid": "CCNA-MOD5-006",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO benefits of anomaly detection over static thresholds alone.",
    "scenario": "<div class=\"scenario-text\"><p>Dynamic environments.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Learns normal baselines per context"
      },
      {
        "id": "b",
        "text": "Reduces noise from fixed thresholds that do not adapt"
      },
      {
        "id": "c",
        "text": "Eliminates all false positives forever"
      },
      {
        "id": "d",
        "text": "Removes need for any human review"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Baselines adapt; static thresholds often over/under-alert."
  },
  {
    "id": 807,
    "qid": "CCNA-MOD5-007",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE Cisco operational platforms relevant to AI-driven ops.",
    "scenario": "<div class=\"scenario-text\"><p>Cisco portfolio awareness.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Catalyst Center (DNA Center)"
      },
      {
        "id": "b",
        "text": "ThousandEyes"
      },
      {
        "id": "c",
        "text": "Cisco Spaces"
      },
      {
        "id": "d",
        "text": "Only HyperTerminal"
      },
      {
        "id": "e",
        "text": "Only TFTP servers"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Catalyst Center, ThousandEyes, and Spaces are core modern ops tools."
  },
  {
    "id": 808,
    "qid": "CCNA-MOD5-008",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO roles of Assurance in Catalyst Center.",
    "scenario": "<div class=\"scenario-text\"><p>What Assurance delivers.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Health scores for clients, devices, and applications"
      },
      {
        "id": "b",
        "text": "Guided troubleshooting and insights"
      },
      {
        "id": "c",
        "text": "Replaces all CLI forever mandatorily"
      },
      {
        "id": "d",
        "text": "Disables SNMP globally"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Health scoring and guided insights are primary Assurance value."
  },
  {
    "id": 809,
    "qid": "CCNA-MOD5-009",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE location-analytics use cases for Cisco Spaces.",
    "scenario": "<div class=\"scenario-text\"><p>Venue and campus insights.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Presence and dwell analytics"
      },
      {
        "id": "b",
        "text": "Asset tracking patterns"
      },
      {
        "id": "c",
        "text": "Engagement and wayfinding data"
      },
      {
        "id": "d",
        "text": "OSPF adjacency formation"
      },
      {
        "id": "e",
        "text": "BGP route reflection"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Presence, assets, and engagement—not routing protocols."
  },
  {
    "id": 810,
    "qid": "CCNA-MOD5-010",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO ThousandEyes test types commonly used by network teams.",
    "scenario": "<div class=\"scenario-text\"><p>Path and app visibility.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Network path / agent-to-agent or cloud tests"
      },
      {
        "id": "b",
        "text": "HTTP / page-load application tests"
      },
      {
        "id": "c",
        "text": "Only STP root guard tests"
      },
      {
        "id": "d",
        "text": "Only VTP domain tests"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Path and HTTP/app tests are common ThousandEyes workloads."
  },
  {
    "id": 811,
    "qid": "CCNA-MOD5-011",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE indicators that AI analytics may surface for wireless issues.",
    "scenario": "<div class=\"scenario-text\"><p>Client experience problems.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Onboarding failures"
      },
      {
        "id": "b",
        "text": "RF interference patterns"
      },
      {
        "id": "c",
        "text": "Roaming anomalies"
      },
      {
        "id": "d",
        "text": "Incorrect OSPF process ID only"
      },
      {
        "id": "e",
        "text": "Missing BGP community only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Onboarding, RF, and roaming are wireless assurance signals."
  },
  {
    "id": 812,
    "qid": "CCNA-MOD5-012",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO reasons to combine controller analytics with path visibility tools.",
    "scenario": "<div class=\"scenario-text\"><p>Holistic ops.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Campus device health vs Internet path problems"
      },
      {
        "id": "b",
        "text": "Separate local vs external root causes"
      },
      {
        "id": "c",
        "text": "Eliminate need for any DNS"
      },
      {
        "id": "d",
        "text": "Disable all Syslog"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Local assurance and external path tools complement each other."
  },
  {
    "id": 813,
    "qid": "CCNA-MOD5-013",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE data-quality requirements for reliable ML network insights.",
    "scenario": "<div class=\"scenario-text\"><p>Garbage-in risks.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Consistent time synchronization"
      },
      {
        "id": "b",
        "text": "Adequate telemetry coverage"
      },
      {
        "id": "c",
        "text": "Clean inventory and site hierarchy"
      },
      {
        "id": "d",
        "text": "Random device reloads daily"
      },
      {
        "id": "e",
        "text": "Duplicate serial numbers preferred"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Time sync, coverage, and clean inventory improve ML quality."
  },
  {
    "id": 814,
    "qid": "CCNA-MOD5-014",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO limitations operators should remember about AI insights.",
    "scenario": "<div class=\"scenario-text\"><p>Human-in-the-loop.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Insights still need validation for change control"
      },
      {
        "id": "b",
        "text": "Coverage gaps can hide issues"
      },
      {
        "id": "c",
        "text": "AI always replaces change boards"
      },
      {
        "id": "d",
        "text": "ML never needs telemetry"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Validate insights; incomplete data limits accuracy."
  },
  {
    "id": 815,
    "qid": "CCNA-MOD5-015",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE Catalyst Center operational workflows enhanced by AI.",
    "scenario": "<div class=\"scenario-text\"><p>Day-2 operations.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Issue detection and triage"
      },
      {
        "id": "b",
        "text": "Root-cause suggestions"
      },
      {
        "id": "c",
        "text": "Trend and capacity signals"
      },
      {
        "id": "d",
        "text": "Manual serial console only"
      },
      {
        "id": "e",
        "text": "Paper runbooks exclusively"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Detection, RCA suggestions, and trends."
  },
  {
    "id": 816,
    "qid": "CCNA-MOD5-016",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO integration partners often paired with Catalyst Center ops.",
    "scenario": "<div class=\"scenario-text\"><p>Ecosystem.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "ISE for identity context"
      },
      {
        "id": "b",
        "text": "ThousandEyes for path experience"
      },
      {
        "id": "c",
        "text": "Only analog modems"
      },
      {
        "id": "d",
        "text": "Only Frame Relay switches"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "ISE and ThousandEyes commonly extend context and path visibility."
  },
  {
    "id": 817,
    "qid": "CCNA-MOD5-017",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match platform to primary insight domain.",
    "scenario": "<div class=\"scenario-text\"><p>Cisco ops tools.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Catalyst Center Assurance"
      },
      {
        "id": "i2",
        "text": "ThousandEyes"
      },
      {
        "id": "i3",
        "text": "Cisco Spaces"
      },
      {
        "id": "i4",
        "text": "Classic SNMP only"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Campus device/client health"
      },
      {
        "id": "z2",
        "label": "Internet/WAN path experience"
      },
      {
        "id": "z3",
        "label": "Location / presence"
      },
      {
        "id": "z4",
        "label": "Static polling without AI baselines"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Assurance, ThousandEyes, Spaces, classic SNMP."
  },
  {
    "id": 818,
    "qid": "CCNA-MOD5-018",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match AI ops concept to meaning.",
    "scenario": "<div class=\"scenario-text\"><p>Vocabulary.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Baseline"
      },
      {
        "id": "i2",
        "text": "Anomaly"
      },
      {
        "id": "i3",
        "text": "Predictive insight"
      },
      {
        "id": "i4",
        "text": "Static threshold"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Learned normal behavior"
      },
      {
        "id": "z2",
        "label": "Deviation from normal"
      },
      {
        "id": "z3",
        "label": "Forward-looking risk signal"
      },
      {
        "id": "z4",
        "label": "Fixed numeric limit"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Baseline, anomaly, predictive, static."
  },
  {
    "id": 819,
    "qid": "CCNA-MOD5-019",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Order typical Assurance triage steps.",
    "scenario": "<div class=\"scenario-text\"><p>From alert to action.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Review health score / issue"
      },
      {
        "id": "c2",
        "text": "Inspect suggested root cause"
      },
      {
        "id": "c3",
        "text": "Validate with telemetry/CLI"
      },
      {
        "id": "c4",
        "text": "Apply change / monitor"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Score → suggestion → validate → act."
  },
  {
    "id": 820,
    "qid": "CCNA-MOD5-020",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match visibility gap to compensating tool.",
    "scenario": "<div class=\"scenario-text\"><p>Coverage design.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Campus AP/client RF"
      },
      {
        "id": "i2",
        "text": "SaaS path over Internet"
      },
      {
        "id": "i3",
        "text": "Floor presence heatmaps"
      },
      {
        "id": "i4",
        "text": "Device inventory drift"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Wireless assurance"
      },
      {
        "id": "z2",
        "label": "ThousandEyes"
      },
      {
        "id": "z3",
        "label": "Cisco Spaces"
      },
      {
        "id": "z4",
        "label": "Controller inventory / compliance"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "RF, path, presence, inventory."
  },
  {
    "id": 821,
    "qid": "CCNA-MOD5-021",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match ML ops risk to mitigation.",
    "scenario": "<div class=\"scenario-text\"><p>Responsible AI ops.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Missing telemetry sites"
      },
      {
        "id": "i2",
        "text": "Clock skew"
      },
      {
        "id": "i3",
        "text": "Blind trust of suggestions"
      },
      {
        "id": "i4",
        "text": "Alert fatigue"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Expand collectors / sensors"
      },
      {
        "id": "z2",
        "label": "NTP discipline"
      },
      {
        "id": "z3",
        "label": "Human validation gates"
      },
      {
        "id": "z4",
        "label": "Tune baselines / severity"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Coverage, time, validation, tuning."
  },
  {
    "id": 822,
    "qid": "CCNA-MOD5-022",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Order onboarding a site into AI analytics.",
    "scenario": "<div class=\"scenario-text\"><p>Data readiness.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Accurate site hierarchy / inventory"
      },
      {
        "id": "c2",
        "text": "Enable telemetry / collectors"
      },
      {
        "id": "c3",
        "text": "Allow learning period"
      },
      {
        "id": "c4",
        "text": "Review baselines and issues"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Inventory → telemetry → learn → review."
  },
  {
    "id": 823,
    "qid": "CCNA-MOD5-023",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match experience metric to domain.",
    "scenario": "<div class=\"scenario-text\"><p>What is measured.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Client onboarding time"
      },
      {
        "id": "i2",
        "text": "Application page load"
      },
      {
        "id": "i3",
        "text": "Path loss / latency hops"
      },
      {
        "id": "i4",
        "text": "Dwell time in zone"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Wireless assurance"
      },
      {
        "id": "z2",
        "label": "App experience test"
      },
      {
        "id": "z3",
        "label": "Network path test"
      },
      {
        "id": "z4",
        "label": "Location analytics"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Onboarding, page load, path, dwell."
  },
  {
    "id": 824,
    "qid": "CCNA-MOD5-024",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match Catalyst Center function to plane-ish role.",
    "scenario": "<div class=\"scenario-text\"><p>Controller functions.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Assurance"
      },
      {
        "id": "i2",
        "text": "Inventory / Design"
      },
      {
        "id": "i3",
        "text": "Policy integration points"
      },
      {
        "id": "i4",
        "text": "SWIM image management"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Health and AI insights"
      },
      {
        "id": "z2",
        "label": "Topology and device truth"
      },
      {
        "id": "z3",
        "label": "Access intent hooks"
      },
      {
        "id": "z4",
        "label": "Software lifecycle"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Assurance, design, policy, SWIM."
  },
  {
    "id": 825,
    "qid": "CCNA-MOD5-025",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Order response to a predictive capacity warning.",
    "scenario": "<div class=\"scenario-text\"><p>Before saturation.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Confirm trend with utilization data"
      },
      {
        "id": "c2",
        "text": "Identify top talkers / apps"
      },
      {
        "id": "c3",
        "text": "Plan capacity or QoS change"
      },
      {
        "id": "c4",
        "text": "Implement and re-baseline"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Confirm → analyze → plan → implement."
  },
  {
    "id": 826,
    "qid": "CCNA-MOD5-026",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match external dependency signal to likely tool.",
    "scenario": "<div class=\"scenario-text\"><p>Where to look first.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "SaaS slow only off-net"
      },
      {
        "id": "i2",
        "text": "Single floor wireless bad"
      },
      {
        "id": "i3",
        "text": "All sites high CPU on edge"
      },
      {
        "id": "i4",
        "text": "Lobby occupancy spike"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "ThousandEyes path/app"
      },
      {
        "id": "z2",
        "label": "Wireless assurance / RF"
      },
      {
        "id": "z3",
        "label": "Device health assurance"
      },
      {
        "id": "z4",
        "label": "Spaces presence"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Path, RF, device, presence."
  },
  {
    "id": 827,
    "qid": "CCNA-MOD5-027",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match data source to protocol/family.",
    "scenario": "<div class=\"scenario-text\"><p>How data arrives.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "gNMI / model-driven telemetry"
      },
      {
        "id": "i2",
        "text": "SNMP polls/traps"
      },
      {
        "id": "i3",
        "text": "Syslog messages"
      },
      {
        "id": "i4",
        "text": "Active path probes"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Streaming subscription"
      },
      {
        "id": "z2",
        "label": "Classic management"
      },
      {
        "id": "z3",
        "label": "Event logs"
      },
      {
        "id": "z4",
        "label": "Synthetic testing"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "MDT, SNMP, Syslog, probes."
  },
  {
    "id": 828,
    "qid": "CCNA-MOD5-028",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match AI ops outcome to operator action.",
    "scenario": "<div class=\"scenario-text\"><p>Close the loop.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Anomaly on AP channel"
      },
      {
        "id": "i2",
        "text": "Rising WAN loss to SaaS"
      },
      {
        "id": "i3",
        "text": "Inventory mismatch"
      },
      {
        "id": "i4",
        "text": "Dwell hotspot congestion"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "RF redesign / channel plan"
      },
      {
        "id": "z2",
        "label": "Provider / path escalation"
      },
      {
        "id": "z3",
        "label": "Rediscover / correct CMDB"
      },
      {
        "id": "z4",
        "label": "Space planning / AP density"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "RF, path, inventory, space."
  },
  {
    "id": 829,
    "qid": "CCNA-MOD5-029",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the platform component that uses ML for dynamic baselines and wireless anomaly detection.",
    "scenario": "<div class=\"scenario-text\"><p>Catalyst Center architecture labels.</p></div>",
    "nodes": [
      {
        "id": "n1",
        "label": "AI Analytics\nEngine",
        "x": 20,
        "y": 40
      },
      {
        "id": "n2",
        "label": "ISE Auth",
        "x": 50,
        "y": 40
      },
      {
        "id": "n3",
        "label": "WLC Local",
        "x": 80,
        "y": 40
      }
    ],
    "correct": [
      "n1"
    ],
    "explanation": "AI Analytics Engine provides ML baselines and anomaly detection."
  },
  {
    "id": 830,
    "qid": "CCNA-MOD5-030",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the tool best suited to diagnose Internet path issues to a SaaS provider.",
    "scenario": "<div class=\"scenario-text\"><p>Ops tool choices.</p></div>",
    "nodes": [
      {
        "id": "t1",
        "label": "ThousandEyes",
        "x": 30,
        "y": 40
      },
      {
        "id": "t2",
        "label": "Local CAM table",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "t1"
    ],
    "explanation": "ThousandEyes specializes in path and app experience."
  },
  {
    "id": 831,
    "qid": "CCNA-MOD5-031",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the platform used for location and presence analytics.",
    "scenario": "<div class=\"scenario-text\"><p>Spaces vs Assurance labels.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "Cisco Spaces",
        "x": 30,
        "y": 40
      },
      {
        "id": "p2",
        "label": "vBond only",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "p1"
    ],
    "explanation": "Cisco Spaces focuses on location/presence."
  },
  {
    "id": 832,
    "qid": "CCNA-MOD5-032",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the site that likely lacks telemetry coverage for reliable AI insights.",
    "scenario": "<div class=\"scenario-text\"><p>Collector coverage map.</p></div>",
    "nodes": [
      {
        "id": "s1",
        "label": "HQ\nfull telemetry",
        "x": 25,
        "y": 40
      },
      {
        "id": "s2",
        "label": "Branch-X\nno collectors",
        "x": 55,
        "y": 40
      },
      {
        "id": "s3",
        "label": "DC\nfull telemetry",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "s2"
    ],
    "explanation": "No collectors means blind spots for analytics."
  },
  {
    "id": 833,
    "qid": "CCNA-MOD5-033",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the metric type that is an application experience signal.",
    "scenario": "<div class=\"scenario-text\"><p>Metric labels.</p></div>",
    "nodes": [
      {
        "id": "m1",
        "label": "Page load time",
        "x": 30,
        "y": 40
      },
      {
        "id": "m2",
        "label": "STP root priority",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "m1"
    ],
    "explanation": "Page load is an app experience metric."
  },
  {
    "id": 834,
    "qid": "CCNA-MOD5-034",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the Assurance view that would first show a campus-wide client health drop.",
    "scenario": "<div class=\"scenario-text\"><p>Health score domains.</p></div>",
    "nodes": [
      {
        "id": "h1",
        "label": "Client health",
        "x": 30,
        "y": 40
      },
      {
        "id": "h2",
        "label": "VTP domain",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "h1"
    ],
    "explanation": "Client health aggregates onboarding and experience."
  },
  {
    "id": 835,
    "qid": "CCNA-MOD5-035",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the JSON key that would typically carry a device health score in an analytics API response concept.",
    "scenario": "<div class=\"scenario-text\"><p>Sample assurance-style payload fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "\"deviceId\": \"FCW1234\""
      },
      {
        "id": "l2",
        "label": "\"healthScore\": 3"
      },
      {
        "id": "l3",
        "label": "\"hostname\": \"edge-01\""
      },
      {
        "id": "l4",
        "label": "\"siteId\": \"global\""
      }
    ],
    "correct": [
      "l2"
    ],
    "selectCount": 1,
    "explanation": "healthScore conveys the numeric health assessment."
  },
  {
    "id": 836,
    "qid": "CCNA-MOD5-036",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that indicate an anomaly flag in a sample insight object.",
    "scenario": "<div class=\"scenario-text\"><p>Insight payload fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "\"anomaly\": true"
      },
      {
        "id": "l2",
        "label": "\"baselineDeviation\": 2.4"
      },
      {
        "id": "l3",
        "label": "\"serial\": \"FOC999\""
      },
      {
        "id": "l4",
        "label": "\"vendor\": \"Cisco\""
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "anomaly and baselineDeviation signal deviation from normal."
  },
  {
    "id": 837,
    "qid": "CCNA-MOD5-037",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line representing a ThousandEyes-style test type field for HTTP.",
    "scenario": "<div class=\"scenario-text\"><p>Test definition fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "\"testType\": \"http-server\""
      },
      {
        "id": "l2",
        "label": "\"agentId\": \"12345\""
      },
      {
        "id": "l3",
        "label": "\"interval\": 120"
      },
      {
        "id": "l4",
        "label": "\"enabled\": true"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "testType identifies the synthetic check kind."
  },
  {
    "id": 838,
    "qid": "CCNA-MOD5-038",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two configuration-oriented lines that enable streaming telemetry subscription conceptually.",
    "scenario": "<div class=\"scenario-text\"><p>MDT-style intent.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "telemetry ietf subscription 101"
      },
      {
        "id": "l2",
        "label": " encoding encode-kvgpb"
      },
      {
        "id": "l3",
        "label": "spanning-tree mode rapid-pvst"
      },
      {
        "id": "l4",
        "label": "vtp mode transparent"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Subscription and encoding are core MDT elements."
  },
  {
    "id": 839,
    "qid": "CCNA-MOD5-039",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that would hold a site hierarchy path used by analytics grouping.",
    "scenario": "<div class=\"scenario-text\"><p>Inventory context fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "\"siteHierarchy\": \"Global/Area1/Building2\""
      },
      {
        "id": "l2",
        "label": "\"macAddress\": \"aa:bb:cc:dd:ee:ff\""
      },
      {
        "id": "l3",
        "label": "\"softwareType\": \"IOS-XE\""
      },
      {
        "id": "l4",
        "label": "\"upTime\": 86400"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "siteHierarchy groups devices for analytics."
  },
  {
    "id": 840,
    "qid": "CCNA-MOD5-040",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that represent a client onboarding failure insight.",
    "scenario": "<div class=\"scenario-text\"><p>Wireless issue sample.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "\"issueType\": \"onboarding\""
      },
      {
        "id": "l2",
        "label": "\"failureCategory\": \"dhcp\""
      },
      {
        "id": "l3",
        "label": "\"vlanId\": 20"
      },
      {
        "id": "l4",
        "label": "\"switchport\": \"Gi1/0/10\""
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "issueType and failureCategory describe the onboarding problem."
  },
  {
    "id": 841,
    "qid": "CCNA-MOD5-041",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "Which HTTP method retrieves a resource without modifying server state?",
    "scenario": "<div class=\"scenario-text\"><p>Audit device inventory via REST API.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "GET"
      },
      {
        "id": "b",
        "text": "POST"
      },
      {
        "id": "c",
        "text": "PUT"
      },
      {
        "id": "d",
        "text": "DELETE"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "GET is safe and idempotent for retrieval; POST creates, PUT updates, DELETE removes."
  },
  {
    "id": 842,
    "qid": "CCNA-MOD5-042",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "Which HTTP status code indicates successful creation of a resource?",
    "scenario": "<div class=\"scenario-text\"><p>POST to create a new object returns success.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "201 Created"
      },
      {
        "id": "b",
        "text": "404 Not Found"
      },
      {
        "id": "c",
        "text": "500 Internal Server Error"
      },
      {
        "id": "d",
        "text": "301 Moved Permanently"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "201 Created is the standard success code for resource creation."
  },
  {
    "id": 843,
    "qid": "CCNA-MOD5-043",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "Which data format is most commonly used in modern network controller REST APIs?",
    "scenario": "<div class=\"scenario-text\"><p>Payload encoding for automation scripts.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "JSON"
      },
      {
        "id": "b",
        "text": "Only binary ASN.1 exclusive"
      },
      {
        "id": "c",
        "text": "Only COBOL copybooks"
      },
      {
        "id": "d",
        "text": "Only YAML for every HTTP body always"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "JSON is the dominant REST payload format for controllers and devices."
  },
  {
    "id": 844,
    "qid": "CCNA-MOD5-044",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "What does HTTP 401 typically indicate?",
    "scenario": "<div class=\"scenario-text\"><p>API call rejected before resource access.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Unauthorized — authentication required or failed"
      },
      {
        "id": "b",
        "text": "Resource permanently deleted only"
      },
      {
        "id": "c",
        "text": "Gateway timeout only"
      },
      {
        "id": "d",
        "text": "Successful OK"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "401 means authentication is missing or invalid."
  },
  {
    "id": 845,
    "qid": "CCNA-MOD5-045",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE HTTP methods and their typical uses.",
    "scenario": "<div class=\"scenario-text\"><p>REST verb map.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "GET retrieves"
      },
      {
        "id": "b",
        "text": "POST creates"
      },
      {
        "id": "c",
        "text": "DELETE removes"
      },
      {
        "id": "d",
        "text": "GET always deletes"
      },
      {
        "id": "e",
        "text": "DELETE always creates"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "GET read, POST create, DELETE remove."
  },
  {
    "id": 846,
    "qid": "CCNA-MOD5-046",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO characteristics of idempotent HTTP methods.",
    "scenario": "<div class=\"scenario-text\"><p>Safe retries.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Multiple identical requests yield same effect"
      },
      {
        "id": "b",
        "text": "GET and PUT are classic examples"
      },
      {
        "id": "c",
        "text": "POST is always idempotent by definition"
      },
      {
        "id": "d",
        "text": "DELETE never can be idempotent"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Idempotent methods can be repeated safely; GET/PUT are common examples."
  },
  {
    "id": 847,
    "qid": "CCNA-MOD5-047",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE common REST response status families.",
    "scenario": "<div class=\"scenario-text\"><p>Status code literacy.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "2xx success"
      },
      {
        "id": "b",
        "text": "4xx client error"
      },
      {
        "id": "c",
        "text": "5xx server error"
      },
      {
        "id": "d",
        "text": "9xx cable fault only"
      },
      {
        "id": "e",
        "text": "0xx STP only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "2xx, 4xx, and 5xx are primary families."
  },
  {
    "id": 848,
    "qid": "CCNA-MOD5-048",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO JSON traits useful in network automation.",
    "scenario": "<div class=\"scenario-text\"><p>Payload handling.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Key-value structure easily parsed in Python"
      },
      {
        "id": "b",
        "text": "Human-readable text encoding"
      },
      {
        "id": "c",
        "text": "Requires proprietary binary only"
      },
      {
        "id": "d",
        "text": "Cannot represent nested objects"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Readable and parser-friendly nested structures."
  },
  {
    "id": 849,
    "qid": "CCNA-MOD5-049",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE Python requests concepts for API calls.",
    "scenario": "<div class=\"scenario-text\"><p>Scripting basics.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "requests.get / requests.post"
      },
      {
        "id": "b",
        "text": "headers for auth tokens"
      },
      {
        "id": "c",
        "text": "response.json() parsing"
      },
      {
        "id": "d",
        "text": "Only Telnetlib for REST"
      },
      {
        "id": "e",
        "text": "Only FTP for JSON"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "HTTP methods, headers, and JSON parsing."
  },
  {
    "id": 850,
    "qid": "CCNA-MOD5-050",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO authentication patterns common to controller APIs.",
    "scenario": "<div class=\"scenario-text\"><p>Secure access.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Token / Bearer auth after login"
      },
      {
        "id": "b",
        "text": "API key headers"
      },
      {
        "id": "c",
        "text": "Cleartext passwords in every URL forever"
      },
      {
        "id": "d",
        "text": "No auth on production controllers"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Tokens and API keys are common; cleartext URLs are not."
  },
  {
    "id": 851,
    "qid": "CCNA-MOD5-051",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE elements of a well-formed REST request.",
    "scenario": "<div class=\"scenario-text\"><p>Request anatomy.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Method and URL"
      },
      {
        "id": "b",
        "text": "Headers (content-type, auth)"
      },
      {
        "id": "c",
        "text": "Optional JSON body"
      },
      {
        "id": "d",
        "text": "OSPF hello only"
      },
      {
        "id": "e",
        "text": "STP BPDU only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Method, URL, headers, and body as needed."
  },
  {
    "id": 852,
    "qid": "CCNA-MOD5-052",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO meanings of HTTP 404 vs 403.",
    "scenario": "<div class=\"scenario-text\"><p>Client errors.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "404 resource not found"
      },
      {
        "id": "b",
        "text": "403 forbidden (authenticated but not allowed)"
      },
      {
        "id": "c",
        "text": "404 means server crash"
      },
      {
        "id": "d",
        "text": "403 means success"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Not found vs forbidden."
  },
  {
    "id": 853,
    "qid": "CCNA-MOD5-053",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE RESTCONF / YANG related ideas.",
    "scenario": "<div class=\"scenario-text\"><p>Model-driven APIs.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "YANG models define structure"
      },
      {
        "id": "b",
        "text": "RESTCONF uses HTTP"
      },
      {
        "id": "c",
        "text": "JSON or XML encoding options"
      },
      {
        "id": "d",
        "text": "YANG replaces Ethernet PHY"
      },
      {
        "id": "e",
        "text": "RESTCONF is only Telnet"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "YANG models with RESTCONF over HTTP."
  },
  {
    "id": 854,
    "qid": "CCNA-MOD5-054",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO rate-limiting / pagination reasons in APIs.",
    "scenario": "<div class=\"scenario-text\"><p>Large inventories.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Protect controller performance"
      },
      {
        "id": "b",
        "text": "Return manageable page sizes"
      },
      {
        "id": "c",
        "text": "Force full table dumps always"
      },
      {
        "id": "d",
        "text": "Disable JSON"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Protect servers and chunk large results."
  },
  {
    "id": 855,
    "qid": "CCNA-MOD5-055",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE troubleshooting steps for a failed API call.",
    "scenario": "<div class=\"scenario-text\"><p>Automation debug.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Check status code and error body"
      },
      {
        "id": "b",
        "text": "Verify token expiry / credentials"
      },
      {
        "id": "c",
        "text": "Confirm URL and method"
      },
      {
        "id": "d",
        "text": "Only reboot all switches"
      },
      {
        "id": "e",
        "text": "Disable NTP permanently"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Status, auth, and URL/method first."
  },
  {
    "id": 856,
    "qid": "CCNA-MOD5-056",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO Content-Type values for JSON APIs.",
    "scenario": "<div class=\"scenario-text\"><p>Headers.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "application/json"
      },
      {
        "id": "b",
        "text": "application/yang-data+json (RESTCONF style)"
      },
      {
        "id": "c",
        "text": "text/html only always"
      },
      {
        "id": "d",
        "text": "image/png only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "application/json and YANG-data JSON variants."
  },
  {
    "id": 857,
    "qid": "CCNA-MOD5-057",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match HTTP method to operation.",
    "scenario": "<div class=\"scenario-text\"><p>CRUD mapping.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "GET"
      },
      {
        "id": "i2",
        "text": "POST"
      },
      {
        "id": "i3",
        "text": "PUT"
      },
      {
        "id": "i4",
        "text": "DELETE"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Read resource"
      },
      {
        "id": "z2",
        "label": "Create resource"
      },
      {
        "id": "z3",
        "label": "Replace/update resource"
      },
      {
        "id": "z4",
        "label": "Remove resource"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "GET, POST, PUT, DELETE."
  },
  {
    "id": 858,
    "qid": "CCNA-MOD5-058",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match status code to meaning.",
    "scenario": "<div class=\"scenario-text\"><p>HTTP literacy.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "200"
      },
      {
        "id": "i2",
        "text": "201"
      },
      {
        "id": "i3",
        "text": "401"
      },
      {
        "id": "i4",
        "text": "500"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "OK"
      },
      {
        "id": "z2",
        "label": "Created"
      },
      {
        "id": "z3",
        "label": "Unauthorized"
      },
      {
        "id": "z4",
        "label": "Server error"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "200, 201, 401, 500."
  },
  {
    "id": 859,
    "qid": "CCNA-MOD5-059",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Order steps for a Python GET with token auth.",
    "scenario": "<div class=\"scenario-text\"><p>Script flow.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Obtain auth token"
      },
      {
        "id": "c2",
        "text": "requests.get with Authorization header"
      },
      {
        "id": "c3",
        "text": "Check status_code"
      },
      {
        "id": "c4",
        "text": "Parse response.json()"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Token → GET → status → parse."
  },
  {
    "id": 860,
    "qid": "CCNA-MOD5-060",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match encoding to use case.",
    "scenario": "<div class=\"scenario-text\"><p>Payload formats.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "JSON"
      },
      {
        "id": "i2",
        "text": "XML"
      },
      {
        "id": "i3",
        "text": "YAML"
      },
      {
        "id": "i4",
        "text": "Plain text log"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Most REST API bodies"
      },
      {
        "id": "z2",
        "label": "Some NETCONF/legacy APIs"
      },
      {
        "id": "z3",
        "label": "Ansible playbooks"
      },
      {
        "id": "z4",
        "label": "Human log lines"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "JSON, XML, YAML, text."
  },
  {
    "id": 861,
    "qid": "CCNA-MOD5-061",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match error to first fix.",
    "scenario": "<div class=\"scenario-text\"><p>API failures.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "401"
      },
      {
        "id": "i2",
        "text": "404"
      },
      {
        "id": "i3",
        "text": "415"
      },
      {
        "id": "i4",
        "text": "429"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Fix credentials/token"
      },
      {
        "id": "z2",
        "label": "Fix URL/resource path"
      },
      {
        "id": "z3",
        "label": "Fix Content-Type"
      },
      {
        "id": "z4",
        "label": "Backoff / rate limit"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Auth, path, content-type, rate."
  },
  {
    "id": 862,
    "qid": "CCNA-MOD5-062",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Order safe POST of a new resource.",
    "scenario": "<div class=\"scenario-text\"><p>Create flow.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Build valid JSON body"
      },
      {
        "id": "c2",
        "text": "POST with auth headers"
      },
      {
        "id": "c3",
        "text": "Expect 201 and Location"
      },
      {
        "id": "c4",
        "text": "GET created resource to verify"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Body → POST → 201 → verify."
  },
  {
    "id": 863,
    "qid": "CCNA-MOD5-063",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match Python snippet intent to call.",
    "scenario": "<div class=\"scenario-text\"><p>requests usage.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "requests.get(url, headers=h)"
      },
      {
        "id": "i2",
        "text": "requests.post(url, json=payload)"
      },
      {
        "id": "i3",
        "text": "r.raise_for_status()"
      },
      {
        "id": "i4",
        "text": "r.json()"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Retrieve"
      },
      {
        "id": "z2",
        "label": "Create with JSON body"
      },
      {
        "id": "z3",
        "label": "Fail on HTTP errors"
      },
      {
        "id": "z4",
        "label": "Parse JSON body"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "GET, POST, raise, parse."
  },
  {
    "id": 864,
    "qid": "CCNA-MOD5-064",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match REST principle to practice.",
    "scenario": "<div class=\"scenario-text\"><p>API design literacy.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Resource-oriented URLs"
      },
      {
        "id": "i2",
        "text": "Stateless requests"
      },
      {
        "id": "i3",
        "text": "Standard methods"
      },
      {
        "id": "i4",
        "text": "Hypermedia optional HATEOAS"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "/devices/123 not /getDevice"
      },
      {
        "id": "z2",
        "label": "Auth token each call"
      },
      {
        "id": "z3",
        "label": "GET/POST/PUT/DELETE"
      },
      {
        "id": "z4",
        "label": "Links in responses"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "URLs, stateless, verbs, hypermedia."
  },
  {
    "id": 865,
    "qid": "CCNA-MOD5-065",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Order debug of 400 Bad Request on POST.",
    "scenario": "<div class=\"scenario-text\"><p>Client-side payload issues.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Inspect error message body"
      },
      {
        "id": "c2",
        "text": "Validate JSON syntax"
      },
      {
        "id": "c3",
        "text": "Check required fields vs schema"
      },
      {
        "id": "c4",
        "text": "Retry corrected payload"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Message → syntax → schema → retry."
  },
  {
    "id": 866,
    "qid": "CCNA-MOD5-066",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match header to purpose.",
    "scenario": "<div class=\"scenario-text\"><p>Common headers.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Authorization"
      },
      {
        "id": "i2",
        "text": "Content-Type"
      },
      {
        "id": "i3",
        "text": "Accept"
      },
      {
        "id": "i4",
        "text": "X-RateLimit-Remaining"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Credentials / token"
      },
      {
        "id": "z2",
        "label": "Body format sent"
      },
      {
        "id": "z3",
        "label": "Preferred response format"
      },
      {
        "id": "z4",
        "label": "Quota signal"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Auth, content-type, accept, rate."
  },
  {
    "id": 867,
    "qid": "CCNA-MOD5-067",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match NETCONF/RESTCONF idea to transport.",
    "scenario": "<div class=\"scenario-text\"><p>Model-driven access.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "NETCONF"
      },
      {
        "id": "i2",
        "text": "RESTCONF"
      },
      {
        "id": "i3",
        "text": "gNMI"
      },
      {
        "id": "i4",
        "text": "Classic SNMP"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "SSH + XML RPC"
      },
      {
        "id": "z2",
        "label": "HTTP + YANG data"
      },
      {
        "id": "z3",
        "label": "gRPC telemetry/config"
      },
      {
        "id": "z4",
        "label": "UDP/TCP OID polling"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "NETCONF, RESTCONF, gNMI, SNMP."
  },
  {
    "id": 868,
    "qid": "CCNA-MOD5-068",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match pagination concept to field example.",
    "scenario": "<div class=\"scenario-text\"><p>Large lists.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "offset / limit"
      },
      {
        "id": "i2",
        "text": "next page link"
      },
      {
        "id": "i3",
        "text": "total count"
      },
      {
        "id": "i4",
        "text": "single unbounded dump"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Numeric paging"
      },
      {
        "id": "z2",
        "label": "Cursor / link style"
      },
      {
        "id": "z3",
        "label": "Result size metadata"
      },
      {
        "id": "z4",
        "label": "Avoid on huge inventories"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Offset, link, total, avoid dump."
  },
  {
    "id": 869,
    "qid": "CCNA-MOD5-069",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the HTTP method used for safe retrieval without side effects.",
    "scenario": "<div class=\"scenario-text\"><p>Method labels on API client.</p></div>",
    "nodes": [
      {
        "id": "m1",
        "label": "GET",
        "x": 20,
        "y": 40
      },
      {
        "id": "m2",
        "label": "POST",
        "x": 45,
        "y": 40
      },
      {
        "id": "m3",
        "label": "DELETE",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "m1"
    ],
    "explanation": "GET retrieves without modifying state."
  },
  {
    "id": 870,
    "qid": "CCNA-MOD5-070",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the status code that indicates successful resource creation.",
    "scenario": "<div class=\"scenario-text\"><p>Response codes shown.</p></div>",
    "nodes": [
      {
        "id": "c1",
        "label": "201",
        "x": 25,
        "y": 40
      },
      {
        "id": "c2",
        "label": "404",
        "x": 55,
        "y": 40
      },
      {
        "id": "c3",
        "label": "500",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "c1"
    ],
    "explanation": "201 Created."
  },
  {
    "id": 871,
    "qid": "CCNA-MOD5-071",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the payload format most common for controller REST APIs.",
    "scenario": "<div class=\"scenario-text\"><p>Encoding options.</p></div>",
    "nodes": [
      {
        "id": "f1",
        "label": "JSON",
        "x": 30,
        "y": 40
      },
      {
        "id": "f2",
        "label": "COBOL",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "f1"
    ],
    "explanation": "JSON dominates modern REST APIs."
  },
  {
    "id": 872,
    "qid": "CCNA-MOD5-072",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the status that means authentication failed or is missing.",
    "scenario": "<div class=\"scenario-text\"><p>401 vs 200.</p></div>",
    "nodes": [
      {
        "id": "s1",
        "label": "401",
        "x": 30,
        "y": 40
      },
      {
        "id": "s2",
        "label": "200",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "s1"
    ],
    "explanation": "401 Unauthorized."
  },
  {
    "id": 873,
    "qid": "CCNA-MOD5-073",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the Python call that sends a JSON body to create a resource.",
    "scenario": "<div class=\"scenario-text\"><p>requests examples.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "requests.post(..., json=)",
        "x": 30,
        "y": 40
      },
      {
        "id": "p2",
        "label": "requests.get(...)",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "p1"
    ],
    "explanation": "POST with json= creates with a JSON body."
  },
  {
    "id": 874,
    "qid": "CCNA-MOD5-074",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the model-driven protocol that uses HTTP and YANG data.",
    "scenario": "<div class=\"scenario-text\"><p>NETCONF vs RESTCONF.</p></div>",
    "nodes": [
      {
        "id": "r1",
        "label": "RESTCONF",
        "x": 30,
        "y": 40
      },
      {
        "id": "r2",
        "label": "SNMPv1 only",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "r1"
    ],
    "explanation": "RESTCONF is HTTP + YANG."
  },
  {
    "id": 875,
    "qid": "CCNA-MOD5-075",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line with the JSON syntax error (missing comma).",
    "scenario": "<div class=\"scenario-text\"><p>Malformed payload causing HTTP 400.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "{"
      },
      {
        "id": "l2",
        "label": "  \"name\": \"Gi0/0/1\","
      },
      {
        "id": "l3",
        "label": "  \"enabled\": true"
      },
      {
        "id": "l4",
        "label": "  \"description\": \"Uplink\""
      },
      {
        "id": "l5",
        "label": "}"
      }
    ],
    "correct": [
      "l3"
    ],
    "selectCount": 1,
    "explanation": "Missing comma after true before next property."
  },
  {
    "id": 876,
    "qid": "CCNA-MOD5-076",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that set Authorization and Content-Type for a JSON POST.",
    "scenario": "<div class=\"scenario-text\"><p>Python headers fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "headers = {\"Authorization\": \"Bearer TOKEN\""
      },
      {
        "id": "l2",
        "label": "             \"Content-Type\": \"application/json\"}"
      },
      {
        "id": "l3",
        "label": "url = 'https://controller/api/v1/devices'"
      },
      {
        "id": "l4",
        "label": "print('debug')"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Authorization and Content-Type headers."
  },
  {
    "id": 877,
    "qid": "CCNA-MOD5-077",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that parses a JSON response body in Python requests.",
    "scenario": "<div class=\"scenario-text\"><p>Response handling.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "data = response.json()"
      },
      {
        "id": "l2",
        "label": "response.status_code"
      },
      {
        "id": "l3",
        "label": "requests.get(url)"
      },
      {
        "id": "l4",
        "label": "print(url)"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "response.json() parses the body."
  },
  {
    "id": 878,
    "qid": "CCNA-MOD5-078",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that form a minimal successful GET pattern.",
    "scenario": "<div class=\"scenario-text\"><p>Safe read pattern.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "r = requests.get(url, headers=headers)"
      },
      {
        "id": "l2",
        "label": "r.raise_for_status()"
      },
      {
        "id": "l3",
        "label": "os.system('rm -rf /')"
      },
      {
        "id": "l4",
        "label": "telnetlib.Telnet()"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "GET then raise_for_status for errors."
  },
  {
    "id": 879,
    "qid": "CCNA-MOD5-079",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that would be wrong as a safe idempotent inventory read.",
    "scenario": "<div class=\"scenario-text\"><p>Method selection mistake.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "GET /dna/intent/api/v1/network-device"
      },
      {
        "id": "l2",
        "label": "DELETE /dna/intent/api/v1/network-device"
      },
      {
        "id": "l3",
        "label": "Accept: application/json"
      },
      {
        "id": "l4",
        "label": "Authorization: Bearer ..."
      }
    ],
    "correct": [
      "l2"
    ],
    "selectCount": 1,
    "explanation": "DELETE is not a safe inventory read."
  },
  {
    "id": 880,
    "qid": "CCNA-MOD5-080",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two status-related lines indicating client vs server fault families.",
    "scenario": "<div class=\"scenario-text\"><p>Status family comments.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "# 4xx client errors"
      },
      {
        "id": "l2",
        "label": "# 5xx server errors"
      },
      {
        "id": "l3",
        "label": "# 2xx success"
      },
      {
        "id": "l4",
        "label": "# 1xx informational"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "4xx client, 5xx server."
  },
  {
    "id": 881,
    "qid": "CCNA-MOD5-081",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "Which configuration management tool is agentless and typically uses YAML playbooks over SSH?",
    "scenario": "<div class=\"scenario-text\"><p>Automate IOS-XE compliance across many switches.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Ansible"
      },
      {
        "id": "b",
        "text": "Requires local agent on every switch always"
      },
      {
        "id": "c",
        "text": "Only Puppet with no YAML option"
      },
      {
        "id": "d",
        "text": "Only manual Notepad"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Ansible is agentless (SSH/NETCONF) and uses YAML playbooks."
  },
  {
    "id": 882,
    "qid": "CCNA-MOD5-082",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "What does Infrastructure as Code (IaC) emphasize?",
    "scenario": "<div class=\"scenario-text\"><p>Repeatable network changes.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Declarative, versioned definitions of desired state"
      },
      {
        "id": "b",
        "text": "Only one-time GUI clicks with no history"
      },
      {
        "id": "c",
        "text": "Random CLI without review"
      },
      {
        "id": "d",
        "text": "Untracked production edits"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "IaC treats infrastructure definitions as versioned code."
  },
  {
    "id": 883,
    "qid": "CCNA-MOD5-083",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "Which tool traditionally uses a pull model with agents on managed nodes?",
    "scenario": "<div class=\"scenario-text\"><p>Compare agent vs agentless architectures.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Puppet (classic agent pull)"
      },
      {
        "id": "b",
        "text": "Ansible push agentless"
      },
      {
        "id": "c",
        "text": "Only TFTP"
      },
      {
        "id": "d",
        "text": "Only ping"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Classic Puppet uses agents that pull catalogs from a master."
  },
  {
    "id": 884,
    "qid": "CCNA-MOD5-084",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "What is a primary advantage of agentless network automation?",
    "scenario": "<div class=\"scenario-text\"><p>Managing network OS devices.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "No permanent agent to install/maintain on devices"
      },
      {
        "id": "b",
        "text": "Requires agents on every IOS-XE box"
      },
      {
        "id": "c",
        "text": "Blocks SSH permanently"
      },
      {
        "id": "d",
        "text": "Disables APIs"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Agentless tools avoid installing and maintaining device-side agents."
  },
  {
    "id": 885,
    "qid": "CCNA-MOD5-085",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE Ansible characteristics for network automation.",
    "scenario": "<div class=\"scenario-text\"><p>Tool profile.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Agentless over SSH/NETCONF"
      },
      {
        "id": "b",
        "text": "YAML playbooks"
      },
      {
        "id": "c",
        "text": "Push-based execution"
      },
      {
        "id": "d",
        "text": "Requires Ruby agents on switches"
      },
      {
        "id": "e",
        "text": "Pull-only with no control node"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Agentless, YAML, push model."
  },
  {
    "id": 886,
    "qid": "CCNA-MOD5-086",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO IaC benefits.",
    "scenario": "<div class=\"scenario-text\"><p>Why version infrastructure.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Repeatable environments"
      },
      {
        "id": "b",
        "text": "Change history and review via Git"
      },
      {
        "id": "c",
        "text": "Guarantees zero outages always"
      },
      {
        "id": "d",
        "text": "Removes need for testing"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Repeatability and auditable history."
  },
  {
    "id": 887,
    "qid": "CCNA-MOD5-087",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE elements of an Ansible playbook structure.",
    "scenario": "<div class=\"scenario-text\"><p>YAML anatomy.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "hosts inventory target"
      },
      {
        "id": "b",
        "text": "tasks list"
      },
      {
        "id": "c",
        "text": "modules / parameters"
      },
      {
        "id": "d",
        "text": "Only binary ELF sections"
      },
      {
        "id": "e",
        "text": "Only STP BPDUs"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Hosts, tasks, modules."
  },
  {
    "id": 888,
    "qid": "CCNA-MOD5-088",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO differences between Ansible and classic Puppet.",
    "scenario": "<div class=\"scenario-text\"><p>Architecture contrast.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Ansible agentless push; Puppet often agent pull"
      },
      {
        "id": "b",
        "text": "Ansible YAML; Puppet DSL/manifests"
      },
      {
        "id": "c",
        "text": "Both require agents on all network devices always"
      },
      {
        "id": "d",
        "text": "Neither can use SSH"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Agentless push vs agent pull; language differences."
  },
  {
    "id": 889,
    "qid": "CCNA-MOD5-089",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE source-control practices for network IaC.",
    "scenario": "<div class=\"scenario-text\"><p>Git workflow.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Branch for changes"
      },
      {
        "id": "b",
        "text": "Peer review / PR"
      },
      {
        "id": "c",
        "text": "Tag releases"
      },
      {
        "id": "d",
        "text": "Commit secrets in plain text"
      },
      {
        "id": "e",
        "text": "Force push to main unrestricted"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Branch, review, tag—avoid secret commits."
  },
  {
    "id": 890,
    "qid": "CCNA-MOD5-090",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO Chef concepts at a high level.",
    "scenario": "<div class=\"scenario-text\"><p>DevOps tool literacy.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Recipes / cookbooks"
      },
      {
        "id": "b",
        "text": "Agent-based convergence ideas"
      },
      {
        "id": "c",
        "text": "Only Ethernet auto-MDIX"
      },
      {
        "id": "d",
        "text": "Only copper categories"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Recipes and agent convergence model."
  },
  {
    "id": 891,
    "qid": "CCNA-MOD5-091",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE risks of untracked CLI changes in production.",
    "scenario": "<div class=\"scenario-text\"><p>Why IaC matters.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Configuration drift"
      },
      {
        "id": "b",
        "text": "Hard-to-audit history"
      },
      {
        "id": "c",
        "text": "Difficult rollback"
      },
      {
        "id": "d",
        "text": "Automatic perfect documentation"
      },
      {
        "id": "e",
        "text": "Guaranteed compliance"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Drift, weak audit, hard rollback."
  },
  {
    "id": 892,
    "qid": "CCNA-MOD5-092",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO inventory ideas in Ansible.",
    "scenario": "<div class=\"scenario-text\"><p>Target selection.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Groups of hosts"
      },
      {
        "id": "b",
        "text": "Host variables / group vars"
      },
      {
        "id": "c",
        "text": "Only one global IP ever"
      },
      {
        "id": "d",
        "text": "Inventory cannot include network devices"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Groups and variables organize targets."
  },
  {
    "id": 893,
    "qid": "CCNA-MOD5-093",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE validation steps before applying automation at scale.",
    "scenario": "<div class=\"scenario-text\"><p>Safe rollout.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Dry-run / check mode where available"
      },
      {
        "id": "b",
        "text": "Lab pilot"
      },
      {
        "id": "c",
        "text": "Incremental batches"
      },
      {
        "id": "d",
        "text": "All devices at once with no backup"
      },
      {
        "id": "e",
        "text": "Skip logging"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Check mode, pilot, batches."
  },
  {
    "id": 894,
    "qid": "CCNA-MOD5-094",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO secrets-handling practices.",
    "scenario": "<div class=\"scenario-text\"><p>Credentials in automation.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Vault / secret stores"
      },
      {
        "id": "b",
        "text": "Least-privilege service accounts"
      },
      {
        "id": "c",
        "text": "Hardcode enable passwords in Git"
      },
      {
        "id": "d",
        "text": "Email passwords in playbooks"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Vaults and least privilege."
  },
  {
    "id": 895,
    "qid": "CCNA-MOD5-095",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE module types used with network devices in Ansible.",
    "scenario": "<div class=\"scenario-text\"><p>Network modules.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "ios_config / cli modules"
      },
      {
        "id": "b",
        "text": "NETCONF modules"
      },
      {
        "id": "c",
        "text": "REST API modules"
      },
      {
        "id": "d",
        "text": "Only printer modules"
      },
      {
        "id": "e",
        "text": "Only SCSI modules"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "CLI, NETCONF, and API modules."
  },
  {
    "id": 896,
    "qid": "CCNA-MOD5-096",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO reasons teams adopt CI for network pipelines.",
    "scenario": "<div class=\"scenario-text\"><p>Automation maturity.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Automated lint/test of playbooks"
      },
      {
        "id": "b",
        "text": "Consistent promotion of changes"
      },
      {
        "id": "c",
        "text": "Eliminate all change records"
      },
      {
        "id": "d",
        "text": "Ban peer review"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Tests and consistent promotion."
  },
  {
    "id": 897,
    "qid": "CCNA-MOD5-097",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match tool to architecture trait.",
    "scenario": "<div class=\"scenario-text\"><p>Ansible / Puppet / Chef.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Ansible"
      },
      {
        "id": "i2",
        "text": "Puppet (classic)"
      },
      {
        "id": "i3",
        "text": "Chef"
      },
      {
        "id": "i4",
        "text": "Manual CLI only"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Agentless push, YAML"
      },
      {
        "id": "z2",
        "label": "Agent pull, manifests"
      },
      {
        "id": "z3",
        "label": "Agent, recipes/cookbooks"
      },
      {
        "id": "z4",
        "label": "No IaC"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Ansible, Puppet, Chef, manual."
  },
  {
    "id": 898,
    "qid": "CCNA-MOD5-098",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match IaC practice to benefit.",
    "scenario": "<div class=\"scenario-text\"><p>Operational outcomes.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Git versioning"
      },
      {
        "id": "i2",
        "text": "Peer-reviewed PRs"
      },
      {
        "id": "i3",
        "text": "Automated tests"
      },
      {
        "id": "i4",
        "text": "Secrets in vault"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "History and rollback points"
      },
      {
        "id": "z2",
        "label": "Catch mistakes early"
      },
      {
        "id": "z3",
        "label": "Validate before merge"
      },
      {
        "id": "z4",
        "label": "Reduce credential leakage"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Git, PR, tests, vault."
  },
  {
    "id": 899,
    "qid": "CCNA-MOD5-099",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Order a safe Ansible change to production switches.",
    "scenario": "<div class=\"scenario-text\"><p>Rollout discipline.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Update playbook in Git branch"
      },
      {
        "id": "c2",
        "text": "Review and CI checks"
      },
      {
        "id": "c3",
        "text": "Pilot on lab/canary"
      },
      {
        "id": "c4",
        "text": "Batched production run"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Branch → review → pilot → batch."
  },
  {
    "id": 900,
    "qid": "CCNA-MOD5-100",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match Ansible keyword to meaning.",
    "scenario": "<div class=\"scenario-text\"><p>Playbook literacy.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "hosts"
      },
      {
        "id": "i2",
        "text": "tasks"
      },
      {
        "id": "i3",
        "text": "become"
      },
      {
        "id": "i4",
        "text": "handlers"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Target selection"
      },
      {
        "id": "z2",
        "label": "Ordered work units"
      },
      {
        "id": "z3",
        "label": "Privilege escalation"
      },
      {
        "id": "z4",
        "label": "Reactive tasks on notify"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "hosts, tasks, become, handlers."
  },
  {
    "id": 901,
    "qid": "CCNA-MOD5-101",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match drift symptom to control.",
    "scenario": "<div class=\"scenario-text\"><p>Detect and correct.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Unexpected ACL line"
      },
      {
        "id": "i2",
        "text": "Golden config in Git"
      },
      {
        "id": "i3",
        "text": "Scheduled compliance play"
      },
      {
        "id": "i4",
        "text": "No source of truth"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Out-of-band change"
      },
      {
        "id": "z2",
        "label": "Desired state reference"
      },
      {
        "id": "z3",
        "label": "Periodic enforcement"
      },
      {
        "id": "z4",
        "label": "Uncontrolled environment"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Drift, SoT, enforce, chaos."
  },
  {
    "id": 902,
    "qid": "CCNA-MOD5-102",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Order recovery after a bad automated push.",
    "scenario": "<div class=\"scenario-text\"><p>Rollback mindset.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Stop further batches"
      },
      {
        "id": "c2",
        "text": "Assess impact / logs"
      },
      {
        "id": "c3",
        "text": "Rollback via known good config"
      },
      {
        "id": "c4",
        "text": "Postmortem and pipeline fix"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Stop → assess → rollback → fix pipeline."
  },
  {
    "id": 903,
    "qid": "CCNA-MOD5-103",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match secret anti-pattern to risk.",
    "scenario": "<div class=\"scenario-text\"><p>Credential hygiene.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Password in playbook Git"
      },
      {
        "id": "i2",
        "text": "World-readable vault file"
      },
      {
        "id": "i3",
        "text": "Shared root SSH key"
      },
      {
        "id": "i4",
        "text": "Short-lived scoped tokens"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Credential leak in history"
      },
      {
        "id": "z2",
        "label": "Unauthorized read of secrets"
      },
      {
        "id": "z3",
        "label": "Broad blast radius"
      },
      {
        "id": "z4",
        "label": "Preferred pattern"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Leak, exposure, blast, tokens."
  },
  {
    "id": 904,
    "qid": "CCNA-MOD5-104",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match execution model to direction.",
    "scenario": "<div class=\"scenario-text\"><p>Push vs pull.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Ansible control node"
      },
      {
        "id": "i2",
        "text": "Puppet agent"
      },
      {
        "id": "i3",
        "text": "Scheduled CI runner"
      },
      {
        "id": "i4",
        "text": "Device-initiated only"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Pushes tasks to devices"
      },
      {
        "id": "z2",
        "label": "Pulls catalog periodically"
      },
      {
        "id": "z3",
        "label": "Pipeline-triggered push"
      },
      {
        "id": "z4",
        "label": "No central orchestration"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Push, pull, CI push, none."
  },
  {
    "id": 905,
    "qid": "CCNA-MOD5-105",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Order inventory expansion for new sites.",
    "scenario": "<div class=\"scenario-text\"><p>Scale Ansible.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Add hosts/groups to inventory"
      },
      {
        "id": "c2",
        "text": "Define group_vars"
      },
      {
        "id": "c3",
        "text": "Limit play to new group"
      },
      {
        "id": "c4",
        "text": "Verify then remove limit"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Inventory → vars → limit → expand."
  },
  {
    "id": 906,
    "qid": "CCNA-MOD5-106",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match module action to IOS example intent.",
    "scenario": "<div class=\"scenario-text\"><p>Network modules.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "ios_config"
      },
      {
        "id": "i2",
        "text": "ios_command"
      },
      {
        "id": "i3",
        "text": "ios_facts"
      },
      {
        "id": "i4",
        "text": "template"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Apply configuration lines"
      },
      {
        "id": "z2",
        "label": "Run show commands"
      },
      {
        "id": "z3",
        "label": "Gather device facts"
      },
      {
        "id": "z4",
        "label": "Render config from Jinja"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "config, command, facts, template."
  },
  {
    "id": 907,
    "qid": "CCNA-MOD5-107",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match pipeline stage to quality gate.",
    "scenario": "<div class=\"scenario-text\"><p>CI for network.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Lint YAML"
      },
      {
        "id": "i2",
        "text": "Syntax / ansible-playbook --syntax-check"
      },
      {
        "id": "i3",
        "text": "Molecule / lab test"
      },
      {
        "id": "i4",
        "text": "Production apply"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Style and structure"
      },
      {
        "id": "z2",
        "label": "Playbook parse validity"
      },
      {
        "id": "z3",
        "label": "Behavioral validation"
      },
      {
        "id": "z4",
        "label": "After gates pass"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Lint, syntax, lab, prod."
  },
  {
    "id": 908,
    "qid": "CCNA-MOD5-108",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match role abstraction benefit.",
    "scenario": "<div class=\"scenario-text\"><p>Ansible roles.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Reusable role"
      },
      {
        "id": "i2",
        "text": "defaults/vars separation"
      },
      {
        "id": "i3",
        "text": "handlers for restart"
      },
      {
        "id": "i4",
        "text": "Monolithic 5k-line playbook"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Share across playbooks"
      },
      {
        "id": "z2",
        "label": "Override cleanly"
      },
      {
        "id": "z3",
        "label": "Idempotent service bounce"
      },
      {
        "id": "z4",
        "label": "Hard to maintain"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Reuse, vars, handlers, monolith."
  },
  {
    "id": 909,
    "qid": "CCNA-MOD5-109",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the tool that is agentless and uses YAML playbooks.",
    "scenario": "<div class=\"scenario-text\"><p>Automation tool labels.</p></div>",
    "nodes": [
      {
        "id": "t1",
        "label": "Ansible",
        "x": 30,
        "y": 40
      },
      {
        "id": "t2",
        "label": "Classic Puppet agent",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "t1"
    ],
    "explanation": "Ansible is agentless with YAML playbooks."
  },
  {
    "id": 910,
    "qid": "CCNA-MOD5-110",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the practice that treats network definitions as versioned code.",
    "scenario": "<div class=\"scenario-text\"><p>IaC vs ad-hoc.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "Infrastructure as Code",
        "x": 30,
        "y": 40
      },
      {
        "id": "p2",
        "label": "Untracked CLI only",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "p1"
    ],
    "explanation": "IaC versions desired state."
  },
  {
    "id": 911,
    "qid": "CCNA-MOD5-111",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the execution model used by Ansible control nodes.",
    "scenario": "<div class=\"scenario-text\"><p>Push vs pull.</p></div>",
    "nodes": [
      {
        "id": "e1",
        "label": "Push to devices",
        "x": 30,
        "y": 40
      },
      {
        "id": "e2",
        "label": "Device-only pull agents",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "e1"
    ],
    "explanation": "Ansible pushes from the control node."
  },
  {
    "id": 912,
    "qid": "CCNA-MOD5-112",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the inventory object that groups branch switches together.",
    "scenario": "<div class=\"scenario-text\"><p>Inventory structure.</p></div>",
    "nodes": [
      {
        "id": "g1",
        "label": "[branches]",
        "x": 30,
        "y": 40
      },
      {
        "id": "g2",
        "label": "random single IP",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "g1"
    ],
    "explanation": "Groups organize hosts in inventory."
  },
  {
    "id": 913,
    "qid": "CCNA-MOD5-113",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the safer place to store automation credentials.",
    "scenario": "<div class=\"scenario-text\"><p>Secrets handling.</p></div>",
    "nodes": [
      {
        "id": "s1",
        "label": "Vault / secret store",
        "x": 30,
        "y": 40
      },
      {
        "id": "s2",
        "label": "Public Git playbook",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "s1"
    ],
    "explanation": "Use vaults, not public repos."
  },
  {
    "id": 914,
    "qid": "CCNA-MOD5-114",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the stage that should run before production apply.",
    "scenario": "<div class=\"scenario-text\"><p>Pipeline stages.</p></div>",
    "nodes": [
      {
        "id": "c1",
        "label": "Lab / CI tests",
        "x": 30,
        "y": 40
      },
      {
        "id": "c2",
        "label": "Blind prod push",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "c1"
    ],
    "explanation": "Test before production."
  },
  {
    "id": 915,
    "qid": "CCNA-MOD5-115",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that define a minimal Ansible play targeting routers.",
    "scenario": "<div class=\"scenario-text\"><p>Playbook fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "- hosts: routers"
      },
      {
        "id": "l2",
        "label": "  tasks:"
      },
      {
        "id": "l3",
        "label": "    - name: show version"
      },
      {
        "id": "l4",
        "label": "      ios_command: commands: show version"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "hosts and tasks begin a play."
  },
  {
    "id": 916,
    "qid": "CCNA-MOD5-116",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that applies ios_config to set a description.",
    "scenario": "<div class=\"scenario-text\"><p>Network module example.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ios_config: lines: ['description Uplink']"
      },
      {
        "id": "l2",
        "label": "hosts: switches"
      },
      {
        "id": "l3",
        "label": "gather_facts: no"
      },
      {
        "id": "l4",
        "label": "connection: network_cli"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "ios_config applies configuration lines."
  },
  {
    "id": 917,
    "qid": "CCNA-MOD5-117",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that represent inventory group and host.",
    "scenario": "<div class=\"scenario-text\"><p>INI-style inventory fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "[core]"
      },
      {
        "id": "l2",
        "label": "core-sw1 ansible_host=10.1.1.2"
      },
      {
        "id": "l3",
        "label": "---"
      },
      {
        "id": "l4",
        "label": "tasks:"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Group header and host entry."
  },
  {
    "id": 918,
    "qid": "CCNA-MOD5-118",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that enables privilege escalation in a play.",
    "scenario": "<div class=\"scenario-text\"><p>become keyword.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "become: true"
      },
      {
        "id": "l2",
        "label": "hosts: all"
      },
      {
        "id": "l3",
        "label": "gather_facts: false"
      },
      {
        "id": "l4",
        "label": "name: demo"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "become escalates privileges."
  },
  {
    "id": 919,
    "qid": "CCNA-MOD5-119",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that should NOT appear in a public playbook repository.",
    "scenario": "<div class=\"scenario-text\"><p>Secret leak examples.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ansible_password: P@ssw0rd"
      },
      {
        "id": "l2",
        "label": "ios_config: lines: ['enable secret cisco']"
      },
      {
        "id": "l3",
        "label": "hosts: lab"
      },
      {
        "id": "l4",
        "label": "gather_facts: no"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Passwords and enable secrets must not be committed."
  },
  {
    "id": 920,
    "qid": "CCNA-MOD5-120",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that runs a playbook check mode (dry-run concept).",
    "scenario": "<div class=\"scenario-text\"><p>Safe validation flag.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ansible-playbook site.yml --check"
      },
      {
        "id": "l2",
        "label": "ansible-playbook site.yml --forks 50"
      },
      {
        "id": "l3",
        "label": "ansible all -m ping"
      },
      {
        "id": "l4",
        "label": "git commit -am 'wip'"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "--check is dry-run mode."
  },
  {
    "id": 921,
    "qid": "CCNA-MOD5-121",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "Which SNMPv3 security level provides authentication and encryption?",
    "scenario": "<div class=\"scenario-text\"><p>Secure monitoring design.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "authPriv"
      },
      {
        "id": "b",
        "text": "noAuthNoPriv"
      },
      {
        "id": "c",
        "text": "authNoPriv only"
      },
      {
        "id": "d",
        "text": "community public"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "authPriv authenticates and encrypts; noAuthNoPriv is least secure."
  },
  {
    "id": 922,
    "qid": "CCNA-MOD5-122",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "Which Syslog severity is more severe than warnings but less than critical?",
    "scenario": "<div class=\"scenario-text\"><p>Severity ranking.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "errors (3)"
      },
      {
        "id": "b",
        "text": "debug (7)"
      },
      {
        "id": "c",
        "text": "informational (6)"
      },
      {
        "id": "d",
        "text": "emergency only (0) as next after warning"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Order: emerg 0 … err 3, warning 4, notice 5, info 6, debug 7."
  },
  {
    "id": 923,
    "qid": "CCNA-MOD5-123",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "What does NetFlow/IPFIX primarily export?",
    "scenario": "<div class=\"scenario-text\"><p>Traffic analysis.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Flow records of traffic conversations"
      },
      {
        "id": "b",
        "text": "Only STP topology changes"
      },
      {
        "id": "c",
        "text": "Only VTP advertisements"
      },
      {
        "id": "d",
        "text": "Only CDP neighbor names"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "NetFlow/IPFIX export flow records for traffic analysis."
  },
  {
    "id": 924,
    "qid": "CCNA-MOD5-124",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "Model-driven streaming telemetry commonly uses which approaches?",
    "scenario": "<div class=\"scenario-text\"><p>Modern telemetry stack.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "gRPC/gNMI, NETCONF, RESTCONF subscriptions"
      },
      {
        "id": "b",
        "text": "Only SNMPv1 communities"
      },
      {
        "id": "c",
        "text": "Only Syslog over UDP 514 forever exclusive"
      },
      {
        "id": "d",
        "text": "Only ping"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "MDT uses model-driven protocols such as gNMI/gRPC and YANG-based interfaces."
  },
  {
    "id": 925,
    "qid": "CCNA-MOD5-125",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE SNMPv3 security levels.",
    "scenario": "<div class=\"scenario-text\"><p>Security model.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "noAuthNoPriv"
      },
      {
        "id": "b",
        "text": "authNoPriv"
      },
      {
        "id": "c",
        "text": "authPriv"
      },
      {
        "id": "d",
        "text": "authSuperEncryptOnly"
      },
      {
        "id": "e",
        "text": "community-v2-only as v3 level"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "The three standard SNMPv3 levels."
  },
  {
    "id": 926,
    "qid": "CCNA-MOD5-126",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO advantages of streaming telemetry over pure SNMP polling.",
    "scenario": "<div class=\"scenario-text\"><p>Modern monitoring.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Push of subscribed data at higher cadence"
      },
      {
        "id": "b",
        "text": "Model-structured data"
      },
      {
        "id": "c",
        "text": "Eliminates all need for any logs"
      },
      {
        "id": "d",
        "text": "Works only offline"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Push cadence and structured models."
  },
  {
    "id": 927,
    "qid": "CCNA-MOD5-127",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE Syslog severity names in order concept (high to low impact examples).",
    "scenario": "<div class=\"scenario-text\"><p>Severity literacy.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "emergency"
      },
      {
        "id": "b",
        "text": "alert"
      },
      {
        "id": "c",
        "text": "critical"
      },
      {
        "id": "d",
        "text": "debug as highest impact"
      },
      {
        "id": "e",
        "text": "informational as emergency"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "emerg, alert, crit are high impact; debug is lowest."
  },
  {
    "id": 928,
    "qid": "CCNA-MOD5-128",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO NetFlow use cases.",
    "scenario": "<div class=\"scenario-text\"><p>Flow data value.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Top talkers identification"
      },
      {
        "id": "b",
        "text": "Capacity and anomaly signals"
      },
      {
        "id": "c",
        "text": "Replace all AAA"
      },
      {
        "id": "d",
        "text": "Configure VLANs directly"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Talkers and capacity/anomaly analysis."
  },
  {
    "id": 929,
    "qid": "CCNA-MOD5-129",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE components of a telemetry subscription concept.",
    "scenario": "<div class=\"scenario-text\"><p>MDT building blocks.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Sensor / xpath paths"
      },
      {
        "id": "b",
        "text": "Encoding (e.g., kvGPB)"
      },
      {
        "id": "c",
        "text": "Receiver / collector destination"
      },
      {
        "id": "d",
        "text": "Only copper pinouts"
      },
      {
        "id": "e",
        "text": "Only TIA-568 color codes"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Paths, encoding, receiver."
  },
  {
    "id": 930,
    "qid": "CCNA-MOD5-130",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO SNMPv2c weaknesses vs SNMPv3.",
    "scenario": "<div class=\"scenario-text\"><p>Why upgrade.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Community strings as weak auth"
      },
      {
        "id": "b",
        "text": "No encryption of payloads by default"
      },
      {
        "id": "c",
        "text": "authPriv built-in always"
      },
      {
        "id": "d",
        "text": "Mandatory TLS only"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Communities and lack of encryption."
  },
  {
    "id": 931,
    "qid": "CCNA-MOD5-131",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE places Syslog messages may be sent.",
    "scenario": "<div class=\"scenario-text\"><p>Log destinations.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Local buffer"
      },
      {
        "id": "b",
        "text": "External Syslog server"
      },
      {
        "id": "c",
        "text": "Console / monitor sessions"
      },
      {
        "id": "d",
        "text": "Only OSPF LSDB"
      },
      {
        "id": "e",
        "text": "Only BGP RIB"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Buffer, server, console/monitor."
  },
  {
    "id": 932,
    "qid": "CCNA-MOD5-132",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO IPFIX relationships to NetFlow.",
    "scenario": "<div class=\"scenario-text\"><p>Standards.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "IPFIX is the IETF standardized flow export"
      },
      {
        "id": "b",
        "text": "NetFlow v9 influenced IPFIX"
      },
      {
        "id": "c",
        "text": "IPFIX is only Layer-1"
      },
      {
        "id": "d",
        "text": "IPFIX replaces Ethernet"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "IPFIX standardizes flow export; NetFlow v9 was influential."
  },
  {
    "id": 933,
    "qid": "CCNA-MOD5-133",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE monitoring signals for interface health.",
    "scenario": "<div class=\"scenario-text\"><p>What to watch.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Errors / drops counters"
      },
      {
        "id": "b",
        "text": "Utilization"
      },
      {
        "id": "c",
        "text": "Oper status changes"
      },
      {
        "id": "d",
        "text": "VTP password"
      },
      {
        "id": "e",
        "text": "CDP version only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Errors, utilization, status."
  },
  {
    "id": 934,
    "qid": "CCNA-MOD5-134",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO reasons to prefer authPriv for management planes.",
    "scenario": "<div class=\"scenario-text\"><p>Security posture.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Confidentiality of polled data"
      },
      {
        "id": "b",
        "text": "Integrity/authentication of messages"
      },
      {
        "id": "c",
        "text": "Faster than all other options always"
      },
      {
        "id": "d",
        "text": "No keys required"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Encryption and authentication."
  },
  {
    "id": 935,
    "qid": "CCNA-MOD5-135",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE collector-side concerns for telemetry at scale.",
    "scenario": "<div class=\"scenario-text\"><p>Operations.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Ingestion capacity"
      },
      {
        "id": "b",
        "text": "Time synchronization"
      },
      {
        "id": "c",
        "text": "Storage retention"
      },
      {
        "id": "d",
        "text": "Disable all exporters"
      },
      {
        "id": "e",
        "text": "Drop NTP intentionally"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Capacity, time sync, retention."
  },
  {
    "id": 936,
    "qid": "CCNA-MOD5-136",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO facility concepts in Syslog.",
    "scenario": "<div class=\"scenario-text\"><p>Facilities.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Local0–local7 often used for devices"
      },
      {
        "id": "b",
        "text": "Facility helps classify message source type"
      },
      {
        "id": "c",
        "text": "Facility replaces severity"
      },
      {
        "id": "d",
        "text": "Facility is only MAC addresses"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Local facilities and classification."
  },
  {
    "id": 937,
    "qid": "CCNA-MOD5-137",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match SNMPv3 level to protection.",
    "scenario": "<div class=\"scenario-text\"><p>Security levels.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "noAuthNoPriv"
      },
      {
        "id": "i2",
        "text": "authNoPriv"
      },
      {
        "id": "i3",
        "text": "authPriv"
      },
      {
        "id": "i4",
        "text": "community public"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Neither auth nor privacy"
      },
      {
        "id": "z2",
        "label": "Auth only"
      },
      {
        "id": "z3",
        "label": "Auth + encryption"
      },
      {
        "id": "z4",
        "label": "Not an SNMPv3 level"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "noAuthNoPriv, authNoPriv, authPriv, community."
  },
  {
    "id": 938,
    "qid": "CCNA-MOD5-138",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match severity number to name (selected).",
    "scenario": "<div class=\"scenario-text\"><p>Syslog scale.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "0"
      },
      {
        "id": "i2",
        "text": "3"
      },
      {
        "id": "i3",
        "text": "4"
      },
      {
        "id": "i4",
        "text": "7"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "emergency"
      },
      {
        "id": "z2",
        "label": "errors"
      },
      {
        "id": "z3",
        "label": "warning"
      },
      {
        "id": "z4",
        "label": "debug"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "0 emerg, 3 err, 4 warning, 7 debug."
  },
  {
    "id": 939,
    "qid": "CCNA-MOD5-139",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Order enabling secure SNMPv3 monitoring.",
    "scenario": "<div class=\"scenario-text\"><p>Hardening steps.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Create views / groups / users"
      },
      {
        "id": "c2",
        "text": "authPriv credentials"
      },
      {
        "id": "c3",
        "text": "Restrict source ACLs"
      },
      {
        "id": "c4",
        "text": "Disable insecure communities"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Users → authPriv → ACL → remove communities."
  },
  {
    "id": 940,
    "qid": "CCNA-MOD5-140",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match export technology to data type.",
    "scenario": "<div class=\"scenario-text\"><p>What is sent.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "NetFlow/IPFIX"
      },
      {
        "id": "i2",
        "text": "Syslog"
      },
      {
        "id": "i3",
        "text": "SNMP traps"
      },
      {
        "id": "i4",
        "text": "MDT gNMI stream"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Flow records"
      },
      {
        "id": "z2",
        "label": "Event text messages"
      },
      {
        "id": "z3",
        "label": "Async OID notifications"
      },
      {
        "id": "z4",
        "label": "Subscribed YANG paths"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Flows, logs, traps, MDT."
  },
  {
    "id": 941,
    "qid": "CCNA-MOD5-141",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match problem to telemetry signal.",
    "scenario": "<div class=\"scenario-text\"><p>Where it shows.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Interface errors rising"
      },
      {
        "id": "i2",
        "text": "Link down syslog"
      },
      {
        "id": "i3",
        "text": "Top talker flood"
      },
      {
        "id": "i4",
        "text": "CPU YANG path spike"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Interface counters / SNMP"
      },
      {
        "id": "z2",
        "label": "Syslog event"
      },
      {
        "id": "z3",
        "label": "NetFlow analysis"
      },
      {
        "id": "z4",
        "label": "Streaming telemetry"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Counters, syslog, flows, MDT."
  },
  {
    "id": 942,
    "qid": "CCNA-MOD5-142",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Order NetFlow deployment basics.",
    "scenario": "<div class=\"scenario-text\"><p>From device to collector.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Define flow record/exporter"
      },
      {
        "id": "c2",
        "text": "Apply to interfaces"
      },
      {
        "id": "c3",
        "text": "Collector receives"
      },
      {
        "id": "c4",
        "text": "Analyze top talkers"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Define → apply → collect → analyze."
  },
  {
    "id": 943,
    "qid": "CCNA-MOD5-143",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match transport concern to protocol.",
    "scenario": "<div class=\"scenario-text\"><p>How data moves.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "SNMP polling"
      },
      {
        "id": "i2",
        "text": "Syslog default"
      },
      {
        "id": "i3",
        "text": "gRPC telemetry"
      },
      {
        "id": "i4",
        "text": "NetFlow export"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "UDP/TCP OID get"
      },
      {
        "id": "z2",
        "label": "UDP 514 often"
      },
      {
        "id": "z3",
        "label": "HTTP/2 streaming"
      },
      {
        "id": "z4",
        "label": "UDP export packets"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "SNMP, Syslog, gRPC, NetFlow."
  },
  {
    "id": 944,
    "qid": "CCNA-MOD5-144",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match retention need to data type.",
    "scenario": "<div class=\"scenario-text\"><p>Storage planning.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "High-cardinality flows"
      },
      {
        "id": "i2",
        "text": "Security Syslog"
      },
      {
        "id": "i3",
        "text": "Interface counters 1m"
      },
      {
        "id": "i4",
        "text": "Debug Syslog"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Aggressive rollups"
      },
      {
        "id": "z2",
        "label": "Longer compliance keep"
      },
      {
        "id": "z3",
        "label": "Time-series metrics DB"
      },
      {
        "id": "z4",
        "label": "Short ephemeral"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Rollup flows, keep security logs, TSDB counters, short debug."
  },
  {
    "id": 945,
    "qid": "CCNA-MOD5-145",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Order response to missing telemetry from a site.",
    "scenario": "<div class=\"scenario-text\"><p>Coverage gap.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Confirm exporter/subscription config"
      },
      {
        "id": "c2",
        "text": "Check reachability to collector"
      },
      {
        "id": "c3",
        "text": "Verify ACL/firewall path"
      },
      {
        "id": "c4",
        "text": "Validate data arrives"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Config → reachability → ACL → validate."
  },
  {
    "id": 946,
    "qid": "CCNA-MOD5-146",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match SNMPv2c vs v3 operational choice.",
    "scenario": "<div class=\"scenario-text\"><p>When to use what.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Legacy read-only lab"
      },
      {
        "id": "i2",
        "text": "Production management plane"
      },
      {
        "id": "i3",
        "text": "Encrypted auth required"
      },
      {
        "id": "i4",
        "text": "Public community on Internet"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "v2c may be tolerated isolated"
      },
      {
        "id": "z2",
        "label": "Prefer v3"
      },
      {
        "id": "z3",
        "label": "authPriv"
      },
      {
        "id": "z4",
        "label": "Unacceptable"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Lab, prod, authPriv, never public Internet."
  },
  {
    "id": 947,
    "qid": "CCNA-MOD5-147",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match collector role to function.",
    "scenario": "<div class=\"scenario-text\"><p>Monitoring architecture.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Flow collector"
      },
      {
        "id": "i2",
        "text": "Syslog server"
      },
      {
        "id": "i3",
        "text": "Telemetry receiver"
      },
      {
        "id": "i4",
        "text": "NMS poller"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Ingest NetFlow/IPFIX"
      },
      {
        "id": "z2",
        "label": "Store/parse logs"
      },
      {
        "id": "z3",
        "label": "gNMI/gRPC sessions"
      },
      {
        "id": "z4",
        "label": "SNMP GET schedules"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Flows, logs, MDT, SNMP."
  },
  {
    "id": 948,
    "qid": "CCNA-MOD5-148",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match encoding to MDT context.",
    "scenario": "<div class=\"scenario-text\"><p>How data is serialized.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "kvGPB"
      },
      {
        "id": "i2",
        "text": "JSON"
      },
      {
        "id": "i3",
        "text": "XML"
      },
      {
        "id": "i4",
        "text": "Community string"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Common compact telemetry encoding"
      },
      {
        "id": "z2",
        "label": "RESTCONF style bodies"
      },
      {
        "id": "z3",
        "label": "NETCONF RPC bodies"
      },
      {
        "id": "z4",
        "label": "Not an MDT encoding"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "kvGPB, JSON, XML, not community."
  },
  {
    "id": 949,
    "qid": "CCNA-MOD5-149",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the SNMPv3 level that provides authentication and encryption.",
    "scenario": "<div class=\"scenario-text\"><p>Security level labels.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "authPriv",
        "x": 25,
        "y": 40
      },
      {
        "id": "l2",
        "label": "noAuthNoPriv",
        "x": 55,
        "y": 40
      },
      {
        "id": "l3",
        "label": "authNoPriv",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "l1"
    ],
    "explanation": "authPriv = auth + privacy."
  },
  {
    "id": 950,
    "qid": "CCNA-MOD5-150",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the technology that exports flow records for traffic analysis.",
    "scenario": "<div class=\"scenario-text\"><p>Monitoring technologies.</p></div>",
    "nodes": [
      {
        "id": "t1",
        "label": "NetFlow/IPFIX",
        "x": 30,
        "y": 40
      },
      {
        "id": "t2",
        "label": "VTP",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "t1"
    ],
    "explanation": "NetFlow/IPFIX export flows."
  },
  {
    "id": 951,
    "qid": "CCNA-MOD5-151",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the Syslog severity that is debug (least severe).",
    "scenario": "<div class=\"scenario-text\"><p>Severity labels.</p></div>",
    "nodes": [
      {
        "id": "s1",
        "label": "0 emergency",
        "x": 25,
        "y": 40
      },
      {
        "id": "s2",
        "label": "7 debug",
        "x": 55,
        "y": 40
      },
      {
        "id": "s3",
        "label": "3 errors",
        "x": 85,
        "y": 40
      }
    ],
    "correct": [
      "s2"
    ],
    "explanation": "Debug is severity 7."
  },
  {
    "id": 952,
    "qid": "CCNA-MOD5-152",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the collector that should receive model-driven streaming telemetry.",
    "scenario": "<div class=\"scenario-text\"><p>Collector roles.</p></div>",
    "nodes": [
      {
        "id": "c1",
        "label": "Telemetry receiver",
        "x": 30,
        "y": 40
      },
      {
        "id": "c2",
        "label": "Only TFTP server",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "c1"
    ],
    "explanation": "MDT needs a telemetry receiver/collector."
  },
  {
    "id": 953,
    "qid": "CCNA-MOD5-153",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the SNMPv2c element that is a weak shared secret.",
    "scenario": "<div class=\"scenario-text\"><p>v2c weakness.</p></div>",
    "nodes": [
      {
        "id": "w1",
        "label": "Community string",
        "x": 30,
        "y": 40
      },
      {
        "id": "w2",
        "label": "authPriv user",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "w1"
    ],
    "explanation": "Community strings are weak shared secrets."
  },
  {
    "id": 954,
    "qid": "CCNA-MOD5-154",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the export that helps identify top talkers.",
    "scenario": "<div class=\"scenario-text\"><p>Flow vs STP.</p></div>",
    "nodes": [
      {
        "id": "f1",
        "label": "NetFlow",
        "x": 30,
        "y": 40
      },
      {
        "id": "f2",
        "label": "STP BPDUs only",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "f1"
    ],
    "explanation": "NetFlow identifies top talkers."
  },
  {
    "id": 955,
    "qid": "CCNA-MOD5-155",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that sets SNMPv3 authPriv style user concept.",
    "scenario": "<div class=\"scenario-text\"><p>SNMPv3 configuration fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "snmp-server user NMS GRP v3 auth sha PASS priv aes 128 KEY"
      },
      {
        "id": "l2",
        "label": "snmp-server community public RO"
      },
      {
        "id": "l3",
        "label": "snmp-server host 10.1.1.10 public"
      },
      {
        "id": "l4",
        "label": "logging host 10.1.1.20"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "User with auth and priv keywords is authPriv."
  },
  {
    "id": 956,
    "qid": "CCNA-MOD5-156",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that send Syslog to an external server and set trap level.",
    "scenario": "<div class=\"scenario-text\"><p>Syslog destination config.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "logging host 10.9.9.9"
      },
      {
        "id": "l2",
        "label": "logging trap informational"
      },
      {
        "id": "l3",
        "label": "snmp-server community private"
      },
      {
        "id": "l4",
        "label": "ntp server 10.1.1.1"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "logging host and logging trap."
  },
  {
    "id": 957,
    "qid": "CCNA-MOD5-157",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that applies a NetFlow monitor to an interface (concept).",
    "scenario": "<div class=\"scenario-text\"><p>Flow apply.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "ip flow monitor MON input"
      },
      {
        "id": "l2",
        "label": "switchport mode access"
      },
      {
        "id": "l3",
        "label": "spanning-tree portfast"
      },
      {
        "id": "l4",
        "label": "description access"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "ip flow monitor applies the monitor."
  },
  {
    "id": 958,
    "qid": "CCNA-MOD5-158",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines related to a telemetry subscription definition.",
    "scenario": "<div class=\"scenario-text\"><p>MDT subscription fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "telemetry ietf subscription 100"
      },
      {
        "id": "l2",
        "label": " encoding encode-kvgpb"
      },
      {
        "id": "l3",
        "label": "vtp mode server"
      },
      {
        "id": "l4",
        "label": "vlan 10"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Subscription id and encoding."
  },
  {
    "id": 959,
    "qid": "CCNA-MOD5-159",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that restricts SNMP access by ACL conceptually.",
    "scenario": "<div class=\"scenario-text\"><p>SNMP ACL binding.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "snmp-server group GRP v3 priv access 99"
      },
      {
        "id": "l2",
        "label": "snmp-server community public RO"
      },
      {
        "id": "l3",
        "label": "logging console"
      },
      {
        "id": "l4",
        "label": "service timestamps log datetime"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "access ACL on SNMP group restricts sources."
  },
  {
    "id": 960,
    "qid": "CCNA-MOD5-160",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that disable an insecure community after v3 is ready.",
    "scenario": "<div class=\"scenario-text\"><p>Hardening cleanup.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "no snmp-server community public"
      },
      {
        "id": "l2",
        "label": "no snmp-server community private"
      },
      {
        "id": "l3",
        "label": "snmp-server user NMS GRP v3 auth sha X priv aes 128 Y"
      },
      {
        "id": "l4",
        "label": "logging buffered 16384"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Remove public/private communities."
  },
  {
    "id": 961,
    "qid": "CCNA-MOD5-161",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "Which Cisco SD-WAN component provides the centralized management GUI and policies UI?",
    "scenario": "<div class=\"scenario-text\"><p>Identify controller roles.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "vManage (Catalyst SD-WAN Manager)"
      },
      {
        "id": "b",
        "text": "vSmart only"
      },
      {
        "id": "c",
        "text": "vBond only"
      },
      {
        "id": "d",
        "text": "Only WAN Edge data plane"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "vManage is the management plane GUI and orchestration UI."
  },
  {
    "id": 962,
    "qid": "CCNA-MOD5-162",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "What is the primary role of vSmart in Cisco SD-WAN?",
    "scenario": "<div class=\"scenario-text\"><p>Control plane function.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Control plane — OMP routes and centralized policy"
      },
      {
        "id": "b",
        "text": "Only data plane forwarding"
      },
      {
        "id": "c",
        "text": "Only DHCP server"
      },
      {
        "id": "d",
        "text": "Only Syslog collector"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "vSmart handles OMP and control policies."
  },
  {
    "id": 963,
    "qid": "CCNA-MOD5-163",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "What does vBond primarily provide during SD-WAN bring-up?",
    "scenario": "<div class=\"scenario-text\"><p>Orchestration plane.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Orchestration — authentication and initial connectivity / NAT traversal help"
      },
      {
        "id": "b",
        "text": "Only packet forwarding"
      },
      {
        "id": "c",
        "text": "Only NetFlow collection"
      },
      {
        "id": "d",
        "text": "Only Spanning Tree"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "vBond validates and orchestrates initial edge onboarding."
  },
  {
    "id": 964,
    "qid": "CCNA-MOD5-164",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "single",
    "prompt": "In SD-Access, which plane is primarily concerned with VXLAN data forwarding?",
    "scenario": "<div class=\"scenario-text\"><p>Fabric planes.</p></div>",
    "options": [
      {
        "id": "a",
        "text": "Data plane"
      },
      {
        "id": "b",
        "text": "Only management plane GUI"
      },
      {
        "id": "c",
        "text": "Only AAA server"
      },
      {
        "id": "d",
        "text": "Only NTP"
      }
    ],
    "correct": [
      "a"
    ],
    "explanation": "Data plane carries user traffic (e.g., VXLAN encapsulation)."
  },
  {
    "id": 965,
    "qid": "CCNA-MOD5-165",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE Cisco SD-WAN controller/edge roles.",
    "scenario": "<div class=\"scenario-text\"><p>Architecture map.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "vManage management"
      },
      {
        "id": "b",
        "text": "vSmart control"
      },
      {
        "id": "c",
        "text": "vBond orchestration"
      },
      {
        "id": "d",
        "text": "vSTP root bridge only"
      },
      {
        "id": "e",
        "text": "vVTP server only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "vManage, vSmart, vBond are core controller roles."
  },
  {
    "id": 966,
    "qid": "CCNA-MOD5-166",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO characteristics of overlay vs underlay.",
    "scenario": "<div class=\"scenario-text\"><p>SDN fabrics.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Overlay carries virtual network services"
      },
      {
        "id": "b",
        "text": "Underlay provides IP reachability between nodes"
      },
      {
        "id": "c",
        "text": "Overlay replaces physics of fiber"
      },
      {
        "id": "d",
        "text": "Underlay is only a GUI"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Overlay services on underlay transport."
  },
  {
    "id": 967,
    "qid": "CCNA-MOD5-167",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE SD-Access fabric ideas.",
    "scenario": "<div class=\"scenario-text\"><p>Campus fabric.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Control plane node roles"
      },
      {
        "id": "b",
        "text": "Edge/border nodes"
      },
      {
        "id": "c",
        "text": "VXLAN data plane"
      },
      {
        "id": "d",
        "text": "Only Frame Relay DLCIs"
      },
      {
        "id": "e",
        "text": "Only ATM PVCs"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Control, edge/border, VXLAN."
  },
  {
    "id": 968,
    "qid": "CCNA-MOD5-168",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO WAN Edge responsibilities.",
    "scenario": "<div class=\"scenario-text\"><p>Data plane devices.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "IPsec fabric forwarding"
      },
      {
        "id": "b",
        "text": "Local site connectivity"
      },
      {
        "id": "c",
        "text": "Replace vManage GUI"
      },
      {
        "id": "d",
        "text": "Host the only vBond forever exclusively"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Data plane forwarding and site attachment."
  },
  {
    "id": 969,
    "qid": "CCNA-MOD5-169",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE benefits of centralized SD-WAN policy.",
    "scenario": "<div class=\"scenario-text\"><p>Why controllers.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Consistent intent across sites"
      },
      {
        "id": "b",
        "text": "Centralized application-aware routing"
      },
      {
        "id": "c",
        "text": "Easier change at scale"
      },
      {
        "id": "d",
        "text": "Eliminates all underlay needs"
      },
      {
        "id": "e",
        "text": "Removes encryption always"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Consistency, app routing, scale."
  },
  {
    "id": 970,
    "qid": "CCNA-MOD5-170",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO OMP-related ideas.",
    "scenario": "<div class=\"scenario-text\"><p>SD-WAN control.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Overlay Management Protocol between vSmart and edges"
      },
      {
        "id": "b",
        "text": "Carries route and service information in overlay"
      },
      {
        "id": "c",
        "text": "Only Layer-1 copper protocol"
      },
      {
        "id": "d",
        "text": "Replaces Ethernet FCS"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "OMP is the SD-WAN control protocol family concept."
  },
  {
    "id": 971,
    "qid": "CCNA-MOD5-171",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE underlay requirements for a healthy fabric.",
    "scenario": "<div class=\"scenario-text\"><p>Foundations.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "IP reachability between nodes"
      },
      {
        "id": "b",
        "text": "Adequate MTU for overlay"
      },
      {
        "id": "c",
        "text": "Time sync and reachable controllers"
      },
      {
        "id": "d",
        "text": "No routing of any kind"
      },
      {
        "id": "e",
        "text": "Disabled all interfaces"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Reachability, MTU, controller access."
  },
  {
    "id": 972,
    "qid": "CCNA-MOD5-172",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO management-plane access best practices.",
    "scenario": "<div class=\"scenario-text\"><p>Controller security.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Restrict admin networks / VPN"
      },
      {
        "id": "b",
        "text": "Strong AAA for controllers"
      },
      {
        "id": "c",
        "text": "Expose vManage to whole Internet open"
      },
      {
        "id": "d",
        "text": "Shared admin password on billboard"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Restrict and strong AAA."
  },
  {
    "id": 973,
    "qid": "CCNA-MOD5-173",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE plane separations in controller architectures.",
    "scenario": "<div class=\"scenario-text\"><p>Plane literacy.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Management plane"
      },
      {
        "id": "b",
        "text": "Control plane"
      },
      {
        "id": "c",
        "text": "Data plane"
      },
      {
        "id": "d",
        "text": "Coffee plane"
      },
      {
        "id": "e",
        "text": "Paper plane only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "Management, control, data."
  },
  {
    "id": 974,
    "qid": "CCNA-MOD5-174",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO SD-Access policy concepts at high level.",
    "scenario": "<div class=\"scenario-text\"><p>Campus intent.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Group-based / scalable group ideas with ISE"
      },
      {
        "id": "b",
        "text": "Fabric-wide segmentation intent"
      },
      {
        "id": "c",
        "text": "Only per-port manual VLAN forever exclusive"
      },
      {
        "id": "d",
        "text": "No identity integration"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Group-based policy and fabric segmentation."
  },
  {
    "id": 975,
    "qid": "CCNA-MOD5-175",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select THREE onboarding steps conceptually for a new WAN Edge.",
    "scenario": "<div class=\"scenario-text\"><p>Bring-up.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Reach vBond"
      },
      {
        "id": "b",
        "text": "Authenticate / receive configuration"
      },
      {
        "id": "c",
        "text": "Form control connections to vSmart"
      },
      {
        "id": "d",
        "text": "Disable underlay permanently"
      },
      {
        "id": "e",
        "text": "Skip certificates always"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "selectCount": 3,
    "explanation": "vBond reachability, auth, vSmart control."
  },
  {
    "id": 976,
    "qid": "CCNA-MOD5-176",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "multiselect",
    "prompt": "Select TWO differences between traditional WAN and SD-WAN ops.",
    "scenario": "<div class=\"scenario-text\"><p>Operational shift.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      {
        "id": "a",
        "text": "Centralized policy vs per-box CLI sprawl"
      },
      {
        "id": "b",
        "text": "App-aware path control overlays"
      },
      {
        "id": "c",
        "text": "No need for any transport underlay"
      },
      {
        "id": "d",
        "text": "Elimination of encryption needs"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "selectCount": 2,
    "explanation": "Central policy and app-aware overlays."
  },
  {
    "id": 977,
    "qid": "CCNA-MOD5-177",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match SD-WAN component to plane/function.",
    "scenario": "<div class=\"scenario-text\"><p>Controller map.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "vManage"
      },
      {
        "id": "i2",
        "text": "vSmart"
      },
      {
        "id": "i3",
        "text": "vBond"
      },
      {
        "id": "i4",
        "text": "WAN Edge"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Management GUI / config"
      },
      {
        "id": "z2",
        "label": "Control / OMP policy"
      },
      {
        "id": "z3",
        "label": "Orchestration / auth bring-up"
      },
      {
        "id": "z4",
        "label": "Data plane forwarding"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "vManage, vSmart, vBond, Edge."
  },
  {
    "id": 978,
    "qid": "CCNA-MOD5-178",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match fabric plane to concern.",
    "scenario": "<div class=\"scenario-text\"><p>SD-Access style.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Control plane"
      },
      {
        "id": "i2",
        "text": "Data plane"
      },
      {
        "id": "i3",
        "text": "Management plane"
      },
      {
        "id": "i4",
        "text": "Underlay routing"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Endpoint identity mapping"
      },
      {
        "id": "z2",
        "label": "VXLAN forwarding"
      },
      {
        "id": "z3",
        "label": "Orchestration / GUI"
      },
      {
        "id": "z4",
        "label": "IP connectivity foundation"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Control, data, management, underlay."
  },
  {
    "id": 979,
    "qid": "CCNA-MOD5-179",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Order SD-WAN edge onboarding.",
    "scenario": "<div class=\"scenario-text\"><p>Bring-up sequence.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Contact vBond"
      },
      {
        "id": "c2",
        "text": "Authenticate / validate"
      },
      {
        "id": "c3",
        "text": "Learn vSmart / vManage"
      },
      {
        "id": "c4",
        "text": "Establish control and data tunnels"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "vBond → auth → controllers → tunnels."
  },
  {
    "id": 980,
    "qid": "CCNA-MOD5-180",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match design term to meaning.",
    "scenario": "<div class=\"scenario-text\"><p>Overlay literacy.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Overlay"
      },
      {
        "id": "i2",
        "text": "Underlay"
      },
      {
        "id": "i3",
        "text": "Fabric edge"
      },
      {
        "id": "i4",
        "text": "Border"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Virtual network services"
      },
      {
        "id": "z2",
        "label": "Physical/IP transport"
      },
      {
        "id": "z3",
        "label": "Access switch role"
      },
      {
        "id": "z4",
        "label": "Exit to external networks"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Overlay, underlay, edge, border."
  },
  {
    "id": 981,
    "qid": "CCNA-MOD5-181",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match failure to first plane to check.",
    "scenario": "<div class=\"scenario-text\"><p>Plane isolation troubleshooting.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "GUI unreachable"
      },
      {
        "id": "i2",
        "text": "OMP down"
      },
      {
        "id": "i3",
        "text": "User traffic blackhole"
      },
      {
        "id": "i4",
        "text": "Cannot onboard new edge"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Management plane path to vManage"
      },
      {
        "id": "z2",
        "label": "Control plane to vSmart"
      },
      {
        "id": "z3",
        "label": "Data plane / underlay"
      },
      {
        "id": "z4",
        "label": "Orchestration / vBond path"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Mgmt, control, data, orchestration."
  },
  {
    "id": 982,
    "qid": "CCNA-MOD5-182",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Order underlay validation before overlay.",
    "scenario": "<div class=\"scenario-text\"><p>Foundation first.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "IP reachability between nodes"
      },
      {
        "id": "c2",
        "text": "MTU supports overlay"
      },
      {
        "id": "c3",
        "text": "Controller reachability"
      },
      {
        "id": "c4",
        "text": "Bring up overlay services"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "IP → MTU → controllers → overlay."
  },
  {
    "id": 983,
    "qid": "CCNA-MOD5-183",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match policy type to SD-WAN intent example.",
    "scenario": "<div class=\"scenario-text\"><p>Central policy.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "App-aware routing"
      },
      {
        "id": "i2",
        "text": "Topology / isolation"
      },
      {
        "id": "i3",
        "text": "Security / zone ideas"
      },
      {
        "id": "i4",
        "text": "CLI one-off on single edge"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Path preference by application"
      },
      {
        "id": "z2",
        "label": "Site connectivity rules"
      },
      {
        "id": "z3",
        "label": "Segmentation controls"
      },
      {
        "id": "z4",
        "label": "Not centralized intent"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "App routing, topology, security, one-off."
  },
  {
    "id": 984,
    "qid": "CCNA-MOD5-184",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match node role in SD-Access campus.",
    "scenario": "<div class=\"scenario-text\"><p>Fabric roles.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Edge node"
      },
      {
        "id": "i2",
        "text": "Border node"
      },
      {
        "id": "i3",
        "text": "Control plane node"
      },
      {
        "id": "i4",
        "text": "WLC fabric mode ideas"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "User access attachment"
      },
      {
        "id": "z2",
        "label": "External network handoff"
      },
      {
        "id": "z3",
        "label": "LISP/control mapping"
      },
      {
        "id": "z4",
        "label": "Wireless integration"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Edge, border, CP, wireless."
  },
  {
    "id": 985,
    "qid": "CCNA-MOD5-185",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Order secure controller access hardening.",
    "scenario": "<div class=\"scenario-text\"><p>Protect management plane.</p></div>",
    "items": [
      {
        "id": "c1",
        "text": "Place controllers on protected networks"
      },
      {
        "id": "c2",
        "text": "Enforce AAA / RBAC"
      },
      {
        "id": "c3",
        "text": "TLS and cert hygiene"
      },
      {
        "id": "c4",
        "text": "Audit admin actions"
      }
    ],
    "zones": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      },
      {
        "id": "s4",
        "label": "Step 4"
      }
    ],
    "correct": {
      "s1": [
        "c1"
      ],
      "s2": [
        "c2"
      ],
      "s3": [
        "c3"
      ],
      "s4": [
        "c4"
      ]
    },
    "explanation": "Network → AAA → TLS → audit."
  },
  {
    "id": 986,
    "qid": "CCNA-MOD5-186",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match transport underlay example to use.",
    "scenario": "<div class=\"scenario-text\"><p>What underlay provides.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "MPLS or Internet circuits"
      },
      {
        "id": "i2",
        "text": "Campus L3 core"
      },
      {
        "id": "i3",
        "text": "IPsec overlay tunnels"
      },
      {
        "id": "i4",
        "text": "VXLAN in fabric"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "SD-WAN site transport"
      },
      {
        "id": "z2",
        "label": "SD-Access underlay"
      },
      {
        "id": "z3",
        "label": "SD-WAN secure overlay"
      },
      {
        "id": "z4",
        "label": "Campus fabric data plane"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "WAN transport, campus underlay, IPsec, VXLAN."
  },
  {
    "id": 987,
    "qid": "CCNA-MOD5-187",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match scale concern to mitigation.",
    "scenario": "<div class=\"scenario-text\"><p>Controller architecture ops.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "Control connection storms"
      },
      {
        "id": "i2",
        "text": "Policy complexity"
      },
      {
        "id": "i3",
        "text": "Certificate expiry"
      },
      {
        "id": "i4",
        "text": "Underlay MTU mismatch"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Staged onboarding / capacity planning"
      },
      {
        "id": "z2",
        "label": "Templates and intent models"
      },
      {
        "id": "z3",
        "label": "Lifecycle monitoring"
      },
      {
        "id": "z4",
        "label": "Clamp/adjust MTU end-to-end"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "Capacity, templates, certs, MTU."
  },
  {
    "id": 988,
    "qid": "CCNA-MOD5-188",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "dragdrop",
    "prompt": "Match visibility tool to SD-WAN ops need.",
    "scenario": "<div class=\"scenario-text\"><p>Day-2.</p></div>",
    "items": [
      {
        "id": "i1",
        "text": "vManage dashboards"
      },
      {
        "id": "i2",
        "text": "ThousandEyes path tests"
      },
      {
        "id": "i3",
        "text": "NetFlow on edges"
      },
      {
        "id": "i4",
        "text": "Local edge CLI only forever"
      }
    ],
    "zones": [
      {
        "id": "z1",
        "label": "Central health and policy status"
      },
      {
        "id": "z2",
        "label": "Internet path experience"
      },
      {
        "id": "z3",
        "label": "Site traffic composition"
      },
      {
        "id": "z4",
        "label": "Limited scale visibility"
      }
    ],
    "correct": {
      "z1": [
        "i1"
      ],
      "z2": [
        "i2"
      ],
      "z3": [
        "i3"
      ],
      "z4": [
        "i4"
      ]
    },
    "explanation": "vManage, ThousandEyes, NetFlow, limited CLI."
  },
  {
    "id": 989,
    "qid": "CCNA-MOD5-189",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the SD-WAN component that provides the management GUI.",
    "scenario": "<div class=\"scenario-text\"><p>Controller roles labeled.</p></div>",
    "nodes": [
      {
        "id": "c1",
        "label": "vManage",
        "x": 20,
        "y": 40
      },
      {
        "id": "c2",
        "label": "vSmart",
        "x": 45,
        "y": 40
      },
      {
        "id": "c3",
        "label": "vBond",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "c1"
    ],
    "explanation": "vManage is the management GUI."
  },
  {
    "id": 990,
    "qid": "CCNA-MOD5-190",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the component responsible for OMP control plane policies.",
    "scenario": "<div class=\"scenario-text\"><p>Control vs data.</p></div>",
    "nodes": [
      {
        "id": "c1",
        "label": "vSmart",
        "x": 30,
        "y": 40
      },
      {
        "id": "c2",
        "label": "WAN Edge only",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "c1"
    ],
    "explanation": "vSmart is the control plane controller."
  },
  {
    "id": 991,
    "qid": "CCNA-MOD5-191",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the component used first for edge authentication/orchestration.",
    "scenario": "<div class=\"scenario-text\"><p>Bring-up path.</p></div>",
    "nodes": [
      {
        "id": "c1",
        "label": "vBond",
        "x": 30,
        "y": 40
      },
      {
        "id": "c2",
        "label": "Random access switch",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "c1"
    ],
    "explanation": "vBond orchestrates initial authentication."
  },
  {
    "id": 992,
    "qid": "CCNA-MOD5-192",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the plane that forwards user VXLAN traffic in a campus fabric.",
    "scenario": "<div class=\"scenario-text\"><p>Plane labels.</p></div>",
    "nodes": [
      {
        "id": "p1",
        "label": "Data plane",
        "x": 30,
        "y": 40
      },
      {
        "id": "p2",
        "label": "Management GUI only",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "p1"
    ],
    "explanation": "Data plane carries user traffic."
  },
  {
    "id": 993,
    "qid": "CCNA-MOD5-193",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the network that should remain reachable for controllers and edges (foundation).",
    "scenario": "<div class=\"scenario-text\"><p>Overlay vs underlay.</p></div>",
    "nodes": [
      {
        "id": "u1",
        "label": "Underlay IP",
        "x": 30,
        "y": 40
      },
      {
        "id": "u2",
        "label": "Only overlay without underlay",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "u1"
    ],
    "explanation": "Underlay IP reachability is required."
  },
  {
    "id": 994,
    "qid": "CCNA-MOD5-194",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "prompt": "Click the node role that attaches user access ports in SD-Access.",
    "scenario": "<div class=\"scenario-text\"><p>Fabric roles.</p></div>",
    "nodes": [
      {
        "id": "r1",
        "label": "Edge node",
        "x": 30,
        "y": 40
      },
      {
        "id": "r2",
        "label": "vBond cloud only",
        "x": 70,
        "y": 40
      }
    ],
    "correct": [
      "r1"
    ],
    "explanation": "Edge nodes attach users."
  },
  {
    "id": 995,
    "qid": "CCNA-MOD5-195",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that identify vManage and vSmart roles in a design note.",
    "scenario": "<div class=\"scenario-text\"><p>Architecture notes fragment.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "vManage: management plane GUI"
      },
      {
        "id": "l2",
        "label": "vSmart: control plane OMP"
      },
      {
        "id": "l3",
        "label": "vlan 10"
      },
      {
        "id": "l4",
        "label": "spanning-tree mode rapid-pvst"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "vManage management; vSmart control."
  },
  {
    "id": 996,
    "qid": "CCNA-MOD5-196",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that describes vBond orchestration responsibility.",
    "scenario": "<div class=\"scenario-text\"><p>Role description.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "vBond: authenticate edges / orchestrate bring-up"
      },
      {
        "id": "l2",
        "label": "vManage: only data plane"
      },
      {
        "id": "l3",
        "label": "Edge: only GUI"
      },
      {
        "id": "l4",
        "label": "Underlay: only VXLAN"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "vBond handles authentication and orchestration."
  },
  {
    "id": 997,
    "qid": "CCNA-MOD5-197",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines that contrast overlay and underlay.",
    "scenario": "<div class=\"scenario-text\"><p>Design definitions.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "overlay: virtual services / tunnels"
      },
      {
        "id": "l2",
        "label": "underlay: IP reachability transport"
      },
      {
        "id": "l3",
        "label": "access-list 10 permit any"
      },
      {
        "id": "l4",
        "label": "hostname R1"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Overlay services vs underlay transport."
  },
  {
    "id": 998,
    "qid": "CCNA-MOD5-198",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that would be wrong as a data-plane device primary role.",
    "scenario": "<div class=\"scenario-text\"><p>Role mismatch.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "WAN Edge: IPsec data plane forwarding"
      },
      {
        "id": "l2",
        "label": "WAN Edge: sole enterprise vManage replacement"
      },
      {
        "id": "l3",
        "label": "vSmart: OMP control"
      },
      {
        "id": "l4",
        "label": "vBond: orchestration"
      }
    ],
    "correct": [
      "l2"
    ],
    "selectCount": 1,
    "explanation": "WAN Edge is data plane, not the management controller."
  },
  {
    "id": 999,
    "qid": "CCNA-MOD5-199",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the two lines related to SD-Access edge and border roles.",
    "scenario": "<div class=\"scenario-text\"><p>Campus fabric roles.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "edge: user access attachment"
      },
      {
        "id": "l2",
        "label": "border: external handoff"
      },
      {
        "id": "l3",
        "label": "vtp password cisco"
      },
      {
        "id": "l4",
        "label": "native vlan 1"
      }
    ],
    "correct": [
      "l1",
      "l2"
    ],
    "selectCount": 2,
    "explanation": "Edge attaches users; border exits fabric."
  },
  {
    "id": 1000,
    "qid": "CCNA-MOD5-200",
    "moduleId": "mod5",
    "module": "AI and Network Operations",
    "domain": "AI and Network Operations",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that states a prerequisite underlay condition for overlay success.",
    "scenario": "<div class=\"scenario-text\"><p>Foundation checklist.</p></div>",
    "nodes": [
      {
        "id": "l1",
        "label": "underlay: end-to-end IP reachability + adequate MTU"
      },
      {
        "id": "l2",
        "label": "disable all routing in underlay"
      },
      {
        "id": "l3",
        "label": "remove certificates from edges"
      },
      {
        "id": "l4",
        "label": "block vBond permanently"
      }
    ],
    "correct": [
      "l1"
    ],
    "selectCount": 1,
    "explanation": "Reachability and MTU are underlay prerequisites."
  }
];

export default questions;
