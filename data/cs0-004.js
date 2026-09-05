export const PRODUCT_CODE = "CS0-004";
export const questions = [
  {
    "id": 1,
    "qid": "CS0-004-MOD1-001",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "single",
    "prompt": "Which continuous monitoring technique provides the highest fidelity for detecting living-off-the-land binary (LOLBin) abuse in a Windows enterprise environment?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC is tuning detection coverage after multiple confirmed incidents involving signed Microsoft binaries used for lateral movement and credential dumping.</p></div>",
    "options": [
      { "id": "a", "text": "Sysmon Event ID 1 process creation with parent-child process relationship and command-line logging" },
      { "id": "b", "text": "Windows Security Event ID 4624 successful logon monitoring alone" },
      { "id": "c", "text": "NetFlow volume anomaly detection at the perimeter" },
      { "id": "d", "text": "Scheduled vulnerability scanning of all endpoints every 24 hours" }
    ],
    "correct": ["a"],
    "explanation": "Sysmon Event ID 1 captures full process creation telemetry including parent process, image path, and command-line arguments, which is essential for identifying LOLBin abuse (e.g., rundll32, mshta, regsvr32). Event 4624 only shows logons and lacks process context. NetFlow lacks process visibility. Vulnerability scanning is point-in-time and does not detect runtime abuse."
  },
  {
    "id": 2,
    "qid": "CS0-004-MOD1-002",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "multiselect",
    "prompt": "Select THREE telemetry sources that should be prioritized for near-real-time continuous monitoring to detect credential dumping and lateral movement.",
    "scenario": "<div class=\"scenario-text\"><p>An organization is expanding its detection engineering program following a red-team exercise that successfully dumped LSASS and moved laterally using over-pass-the-hash.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Sysmon Event ID 10 (ProcessAccess) targeting lsass.exe" },
      { "id": "b", "text": "Windows Security Event ID 4688 / Sysmon Event ID 1 for suspicious process creation" },
      { "id": "c", "text": "Authentication logs showing NTLM or Kerberos ticket anomalies (Event IDs 4624, 4769, 4776)" },
      { "id": "d", "text": "Daily full disk vulnerability scans" },
      { "id": "e", "text": "Monthly configuration baseline reports" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "ProcessAccess (Sysmon 10) to LSASS is a high-fidelity indicator of credential dumping. Process creation events capture the tools used after dumping. Authentication anomalies reveal lateral movement. Vulnerability scans and monthly baselines are not continuous or near-real-time detection sources."
  },
  {
    "id": 3,
    "qid": "CS0-004-MOD1-003",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "dragdrop",
    "prompt": "Match each detection technique to the primary data source it relies on for continuous monitoring.",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is mapping monitoring capabilities to available telemetry in a hybrid Windows/Linux environment.</p></div>",
    "items": [
      { "id": "i1", "text": "Detecting encoded PowerShell execution" },
      { "id": "i2", "text": "Identifying unusual process injection" },
      { "id": "i3", "text": "Spotting anomalous DNS beaconing" }
    ],
    "zones": [
      { "id": "z1", "label": "Sysmon / EDR Process Creation & Access Events" },
      { "id": "z2", "label": "DNS Query Logs / Passive DNS" },
      { "id": "z3", "label": "Sysmon Event ID 8 / 10 (CreateRemoteThread / ProcessAccess)" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i3"],
      "z3": ["i2"]
    },
    "explanation": "Encoded PowerShell is primarily visible in process creation command-line telemetry. Process injection is best detected via CreateRemoteThread or ProcessAccess events. DNS beaconing is identified through DNS query logs or passive DNS analysis."
  },
  {
    "id": 4,
    "qid": "CS0-004-MOD1-004",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the monitoring sensor placement that provides the best coverage for detecting east-west lateral movement without introducing inline latency.",
    "scenario": "<div class=\"scenario-text\"><p>Review the simplified data-center network diagram. The SOC requires high-fidelity visibility into internal traffic between application tiers.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Perimeter Firewall (inline)", "x": 15, "y": 30 },
      { "id": "node2", "label": "Core Switch SPAN / Network TAP", "x": 50, "y": 50 },
      { "id": "node3", "label": "Internet Edge Router", "x": 85, "y": 30 },
      { "id": "node4", "label": "Endpoint EDR Agent Only", "x": 50, "y": 80 }
    ],
    "correct": ["node2"],
    "explanation": "A SPAN port or passive Network TAP on the core switch captures east-west traffic between tiers without adding latency or a single point of failure. Perimeter firewalls and edge routers only see north-south traffic. EDR alone lacks full network context for lateral movement."
  },
  {
    "id": 5,
    "qid": "CS0-004-MOD1-005",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Sigma rule that contains an error preventing reliable detection of suspicious scheduled task creation.",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is reviewing a Sigma rule intended to alert on schtasks.exe creating tasks that execute from temporary directories.</p></div>",
    "nodes": [
      { "id": "l1", "label": "title: Suspicious Scheduled Task Creation from Temp" },
      { "id": "l2", "label": "logsource:" },
      { "id": "l3", "label": "  product: windows" },
      { "id": "l4", "label": "  service: security" },
      { "id": "l5", "label": "detection:" },
      { "id": "l6", "label": "  selection:" },
      { "id": "l7", "label": "    EventID: 4698" },
      { "id": "l8", "label": "    CommandLine|contains: 'schtasks'" },
      { "id": "l9", "label": "    CommandLine|contains: '\\\\Temp\\\\'" },
      { "id": "l10", "label": "  condition: selection" }
    ],
    "correct": ["l4"],
    "selectCount": 1,
    "explanation": "Scheduled task creation (Event ID 4698) is logged in the Microsoft-Windows-TaskScheduler/Operational channel or Security log depending on configuration, but the more reliable modern source is the TaskScheduler operational log. Using only 'service: security' misses many environments where 4698 is not audited in Security. The rule also incorrectly searches CommandLine on an event that primarily contains Task Content XML, not a command line."
  },
  {
    "id": 6,
    "qid": "CS0-004-MOD1-006",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "single",
    "prompt": "Which architectural control most effectively reduces the blast radius of a compromised workstation while still allowing necessary business communication?",
    "scenario": "<div class=\"scenario-text\"><p>After several ransomware incidents, the architecture team is redesigning the internal network segmentation model.</p></div>",
    "options": [
      { "id": "a", "text": "Micro-segmentation with identity-aware policies and least-privilege east-west controls" },
      { "id": "b", "text": "Flat Layer-2 network with a single large VLAN for all user devices" },
      { "id": "c", "text": "Perimeter firewall only with no internal segmentation" },
      { "id": "d", "text": "Disabling all inter-VLAN routing permanently" }
    ],
    "correct": ["a"],
    "explanation": "Micro-segmentation combined with identity-aware (Zero Trust style) policies limits lateral movement while still permitting required application flows. A flat network and perimeter-only designs maximize blast radius. Completely disabling inter-VLAN routing breaks legitimate business traffic."
  },
  {
    "id": 7,
    "qid": "CS0-004-MOD1-007",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "multiselect",
    "prompt": "Select THREE architecture controls that improve detection and containment of lateral movement in a hybrid cloud environment.",
    "scenario": "<div class=\"scenario-text\"><p>A financial services firm is migrating critical workloads to a hybrid AWS/on-premises architecture and must maintain strong visibility and control.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "VPC Flow Logs and VPC Traffic Mirroring enabled on critical subnets" },
      { "id": "b", "text": "Strict security group and NACLs enforcing least-privilege between tiers" },
      { "id": "c", "text": "Centralized identity with conditional access and continuous validation" },
      { "id": "d", "text": "Disabling all CloudTrail logging to reduce cost" },
      { "id": "e", "text": "Using a single shared security group for all production instances" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "VPC Flow Logs and Traffic Mirroring provide network telemetry. Least-privilege security groups/NACLs limit movement. Centralized identity with continuous validation supports Zero Trust. Disabling CloudTrail removes critical audit data. Shared security groups create excessive permissions."
  },
  {
    "id": 8,
    "qid": "CS0-004-MOD1-008",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "dragdrop",
    "prompt": "Map each network control to its primary security benefit in a modern SecOps architecture.",
    "scenario": "<div class=\"scenario-text\"><p>An architect is documenting the purpose of key controls for the security operations team.</p></div>",
    "items": [
      { "id": "i1", "text": "Network TAP / SPAN for IDS/IPS" },
      { "id": "i2", "text": "Jump hosts / Privileged Access Workstations" },
      { "id": "i3", "text": "Micro-segmentation / Zero Trust Network Access" }
    ],
    "zones": [
      { "id": "z1", "label": "Provides passive, high-fidelity traffic visibility without inline risk" },
      { "id": "z2", "label": "Reduces attack surface for administrative access" },
      { "id": "z3", "label": "Limits lateral movement by enforcing least-privilege flows" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Network TAPs/SPAN give passive full-packet visibility. Jump hosts and PAWs constrain privileged access. Micro-segmentation and ZTNA enforce identity- and context-aware least privilege, limiting east-west movement."
  },
  {
    "id": 9,
    "qid": "CS0-004-MOD1-009",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the component that should be placed out-of-band to provide full-duplex packet capture for threat hunting without risk of network disruption.",
    "scenario": "<div class=\"scenario-text\"><p>Examine the enterprise perimeter and DMZ design. The SOC needs guaranteed packet capture for forensic analysis.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Inline Next-Gen Firewall", "x": 25, "y": 40 },
      { "id": "node2", "label": "Passive Optical TAP", "x": 55, "y": 40 },
      { "id": "node3", "label": "Active Inline IPS", "x": 85, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "A passive optical TAP provides a complete, non-intrusive copy of traffic in both directions and cannot fail closed or introduce latency. Inline firewalls and IPS devices sit in the forwarding path and can disrupt traffic if they fail or become overloaded."
  },
  {
    "id": 10,
    "qid": "CS0-004-MOD1-010",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the configuration line that creates an overly permissive security group rule allowing unrestricted lateral movement.",
    "scenario": "<div class=\"scenario-text\"><p>A cloud security engineer is reviewing an AWS security group attached to a critical application tier.</p></div>",
    "nodes": [
      { "id": "l1", "label": "SecurityGroup: AppTierSG" },
      { "id": "l2", "label": "  Ingress:" },
      { "id": "l3", "label": "    - FromPort: 443" },
      { "id": "l4", "label": "      ToPort: 443" },
      { "id": "l5", "label": "      CidrIp: 10.10.0.0/16" },
      { "id": "l6", "label": "    - FromPort: 0" },
      { "id": "l7", "label": "      ToPort: 65535" },
      { "id": "l8", "label": "      CidrIp: 0.0.0.0/0" },
      { "id": "l9", "label": "  Egress:" },
      { "id": "l10", "label": "    - CidrIp: 0.0.0.0/0" }
    ],
    "correct": ["l6", "l7", "l8"],
    "selectCount": 1,
    "explanation": "The rule allowing ports 0-65535 from 0.0.0.0/0 is fully open and permits unrestricted inbound access from the internet, enabling easy lateral movement and external compromise. The HTTPS rule limited to the internal CIDR is appropriately scoped."
  },
  {
    "id": 11,
    "qid": "CS0-004-MOD1-011",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "single",
    "prompt": "Which SIEM correlation approach is most effective for detecting a multi-stage attack that begins with phishing and progresses to domain admin compromise?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC is redesigning detection logic after an incident that spanned email, endpoint, authentication, and Active Directory logs over several days.</p></div>",
    "options": [
      { "id": "a", "text": "Multi-event correlation rules that chain related telemetry across sources with time windows and entity linking" },
      { "id": "b", "text": "Single high-severity alert on any failed logon" },
      { "id": "c", "text": "Static threshold alerts on total log volume only" },
      { "id": "d", "text": "Manual review of every email gateway log entry" }
    ],
    "correct": ["a"],
    "explanation": "Multi-stage attacks require correlation across disparate log sources (email, endpoint process creation, authentication, AD changes) using entity resolution (user, host, IP) and temporal windows. Single failed-logon alerts generate noise. Volume thresholds and pure manual review do not scale or provide timely detection."
  },
  {
    "id": 12,
    "qid": "CS0-004-MOD1-012",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "multiselect",
    "prompt": "Select THREE best practices when integrating Windows Event Logs and Sysmon into a SIEM for high-fidelity detection.",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineering team is optimizing log ingestion and rule performance for a large Windows estate.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enable command-line auditing and Sysmon with a tuned configuration focused on high-value events" },
      { "id": "b", "text": "Normalize and enrich events with asset criticality, user context, and threat intelligence" },
      { "id": "c", "text": "Filter noisy low-value events (e.g., routine service starts) before or at ingestion" },
      { "id": "d", "text": "Ingest every possible Windows event ID without filtering" },
      { "id": "e", "text": "Disable all process creation logging to reduce volume" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Tuned Sysmon + command-line auditing provides rich process telemetry. Enrichment improves prioritization and reduces false positives. Filtering noise at or before ingestion keeps the SIEM performant. Ingesting everything overwhelms storage and analysts; disabling process creation removes critical detection capability."
  },
  {
    "id": 13,
    "qid": "CS0-004-MOD1-013",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "dragdrop",
    "prompt": "Match each log source to the primary detection use case it best supports in a SIEM.",
    "scenario": "<div class=\"scenario-text\"><p>Analysts are mapping available log sources to detection use cases during a coverage review.</p></div>",
    "items": [
      { "id": "i1", "text": "Sysmon Event ID 1 + 3" },
      { "id": "i2", "text": "Windows Security 4624 / 4625 / 4769" },
      { "id": "i3", "text": "DNS query logs + passive DNS" }
    ],
    "zones": [
      { "id": "z1", "label": "Process creation and network connection correlation" },
      { "id": "z2", "label": "Authentication and Kerberos anomalies" },
      { "id": "z3", "label": "C2 beaconing and domain generation algorithm detection" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Sysmon 1 (process create) and 3 (network connection) enable process-to-network correlation. Security logon and Kerberos events detect authentication abuse. DNS logs are primary for identifying beaconing and DGA activity."
  },
  {
    "id": 14,
    "qid": "CS0-004-MOD1-014",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the SIEM component responsible for normalizing disparate log formats into a common schema before correlation rules are applied.",
    "scenario": "<div class=\"scenario-text\"><p>Review a typical SIEM data pipeline architecture used in enterprise SecOps.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Raw Log Collectors / Agents", "x": 15, "y": 50 },
      { "id": "node2", "label": "Parsing / Normalization / Enrichment Layer", "x": 45, "y": 50 },
      { "id": "node3", "label": "Correlation & Analytics Engine", "x": 75, "y": 50 },
      { "id": "node4", "label": "Alert Console / SOAR", "x": 90, "y": 80 }
    ],
    "correct": ["node2"],
    "explanation": "The parsing, normalization, and enrichment layer converts vendor-specific formats into a common information model so that correlation rules can operate consistently across sources. Collectors only ship data; the analytics engine consumes already-normalized events."
  },
  {
    "id": 15,
    "qid": "CS0-004-MOD1-015",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Splunk SPL search that contains a logic error preventing detection of successful lateral movement via RDP.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is troubleshooting a correlation search intended to find successful RDP logons from unusual source hosts.</p></div>",
    "nodes": [
      { "id": "l1", "label": "index=wineventlog EventCode=4624" },
      { "id": "l2", "label": "| where Logon_Type=10" },
      { "id": "l3", "label": "| stats count by src_ip, dest_host, user" },
      { "id": "l4", "label": "| where count > 5" },
      { "id": "l5", "label": "| where src_ip IN (known_good_jump_hosts)" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "The final where clause filters to only known-good jump hosts, which inverts the intended logic. The search should exclude or alert on sources that are NOT in the known-good list. As written it only surfaces expected administrative activity."
  },
  {
    "id": 16,
    "qid": "CS0-004-MOD1-016",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "single",
    "prompt": "Which Wireshark display filter is most appropriate for isolating potential DNS tunneling traffic in a large PCAP?",
    "scenario": "<div class=\"scenario-text\"><p>A threat hunter is investigating unusually high DNS query volumes from a single internal host to an external domain.</p></div>",
    "options": [
      { "id": "a", "text": "dns.qry.name len > 50 or dns.qry.name contains \".\" and frame.len > 200" },
      { "id": "b", "text": "tcp.port == 80 and http.request" },
      { "id": "c", "text": "arp" },
      { "id": "d", "text": "icmp.type == 8" }
    ],
    "correct": ["a"],
    "explanation": "DNS tunneling often uses long subdomain labels and larger-than-normal DNS packets. Filtering on long query names or elevated frame length helps surface candidates. HTTP, ARP, and ICMP filters target unrelated protocols."
  },
  {
    "id": 17,
    "qid": "CS0-004-MOD1-017",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "multiselect",
    "prompt": "Select THREE indicators visible in packet captures that commonly suggest command-and-control (C2) beaconing.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is reviewing a full-packet capture taken after an endpoint detection of suspicious outbound connections.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Consistent time intervals between connections to the same external IP or domain" },
      { "id": "b", "text": "Small, similarly sized packets or HTTP requests with low variance" },
      { "id": "c", "text": "Use of non-standard ports or protocols that mimic legitimate traffic (e.g., DNS, HTTPS on unusual ports)" },
      { "id": "d", "text": "Large file downloads from trusted software update servers" },
      { "id": "e", "text": "Normal DHCP lease renewals" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Beaconing is characterized by regular timing, low-variance small payloads, and often protocol/port abuse for stealth. Legitimate software updates and DHCP activity do not match these patterns."
  },
  {
    "id": 18,
    "qid": "CS0-004-MOD1-018",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "dragdrop",
    "prompt": "Match each packet analysis technique to the threat it is best suited to uncover.",
    "scenario": "<div class=\"scenario-text\"><p>A network threat hunter is selecting analysis methods based on observed symptoms.</p></div>",
    "items": [
      { "id": "i1", "text": "TLS certificate and JA3/JA3S fingerprint analysis" },
      { "id": "i2", "text": "DNS query length, entropy, and frequency analysis" },
      { "id": "i3", "text": "TCP stream reassembly and HTTP object extraction" }
    ],
    "zones": [
      { "id": "z1", "label": "Encrypted C2 using custom or abused TLS stacks" },
      { "id": "z2", "label": "DNS tunneling or DGA-based C2" },
      { "id": "z3", "label": "Clear-text or weakly encrypted malware download / exfiltration" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "JA3/JA3S and certificate details help identify malware TLS implementations. DNS metadata reveals tunneling and DGA. Stream reassembly and object extraction recover payloads from unencrypted or decryptable sessions."
  },
  {
    "id": 19,
    "qid": "CS0-004-MOD1-019",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the capture point that provides the most complete visibility into both inbound and outbound traffic for a critical server subnet without risking production impact.",
    "scenario": "<div class=\"scenario-text\"><p>The network diagram shows possible sensor locations relative to a server VLAN and core infrastructure.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Inline on the server access switch uplink", "x": 20, "y": 40 },
      { "id": "node2", "label": "Passive TAP on the server VLAN uplink", "x": 50, "y": 40 },
      { "id": "node3", "label": "SPAN from a distant core switch only", "x": 80, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "A passive TAP on the server VLAN uplink delivers full-duplex, lossless capture of all traffic to and from the subnet without introducing a failure point. Inline placement risks outages. Distant SPAN ports often suffer from oversubscription and incomplete visibility."
  },
  {
    "id": 20,
    "qid": "CS0-004-MOD1-020",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the tcpdump command that will cause it to miss relevant traffic for an investigation of possible HTTPS C2 on non-standard ports.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is preparing a targeted packet capture on a Linux sensor.</p></div>",
    "nodes": [
      { "id": "l1", "label": "tcpdump -i eth0 -w capture.pcap" },
      { "id": "l2", "label": "  -s 0" },
      { "id": "l3", "label": "  port 443" },
      { "id": "l4", "label": "  and host 10.10.5.20" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "Restricting the capture to port 443 will miss C2 that uses HTTPS on alternative ports (e.g., 8443, 4443, or high ports). Capturing with a broader filter (or no port filter) and post-filtering is safer when the exact port is unknown."
  },
  {
    "id": 21,
    "qid": "CS0-004-MOD1-021",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "single",
    "prompt": "Which endpoint telemetry source provides the strongest signal for detecting process injection techniques such as process hollowing?",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is prioritizing Sysmon and EDR event types after observing multiple process injection attempts in a recent campaign.</p></div>",
    "options": [
      { "id": "a", "text": "Sysmon Event ID 8 (CreateRemoteThread) and Event ID 10 (ProcessAccess) combined with image and memory region details" },
      { "id": "b", "text": "Windows Event ID 4624 only" },
      { "id": "c", "text": "Scheduled task creation logs alone" },
      { "id": "d", "text": "USB device insertion events" }
    ],
    "correct": ["a"],
    "explanation": "CreateRemoteThread and ProcessAccess events, especially when enriched with target image and memory protection information, are primary indicators of injection. Logon events, scheduled tasks, and USB events do not directly reveal injection behavior."
  },
  {
    "id": 22,
    "qid": "CS0-004-MOD1-022",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "multiselect",
    "prompt": "Select THREE behavioral indicators that, when observed together on an endpoint, strongly suggest credential dumping activity.",
    "scenario": "<div class=\"scenario-text\"><p>An EDR alert has fired on a workstation. The analyst is correlating additional telemetry to confirm intent.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "ProcessAccess to lsass.exe with PROCESS_VM_READ or similar rights from a non-system process" },
      { "id": "b", "text": "Creation of a minidump or use of procdump/comsvcs.dll against lsass" },
      { "id": "c", "text": "Subsequent network connections or process creation consistent with pass-the-hash or over-pass-the-hash tools" },
      { "id": "d", "text": "Normal user opening Outlook and browsing internal SharePoint" },
      { "id": "e", "text": "Routine Windows Update service activity" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Access to LSASS with read permissions, explicit dumping tools or techniques, and follow-on lateral movement or credential use form a high-confidence chain. Legitimate user and update activity are expected noise."
  },
  {
    "id": 23,
    "qid": "CS0-004-MOD1-023",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "dragdrop",
    "prompt": "Map each endpoint behavior to the most likely ATT&CK technique category.",
    "scenario": "<div class=\"scenario-text\"><p>A behavioral analytics rule set is being tuned against MITRE ATT&CK.</p></div>",
    "items": [
      { "id": "i1", "text": "Unusual parent-child relationship: winword.exe spawning powershell.exe with encoded command" },
      { "id": "i2", "text": "Repeated ProcessAccess to lsass.exe followed by network logons with the same credentials" },
      { "id": "i3", "text": "Service installation or scheduled task pointing to a binary in a user-writable directory" }
    ],
    "zones": [
      { "id": "z1", "label": "Execution / Command and Scripting Interpreter" },
      { "id": "z2", "label": "Credential Access / OS Credential Dumping" },
      { "id": "z3", "label": "Persistence" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Office spawning encoded PowerShell is classic malicious execution. LSASS access plus credential reuse indicates dumping. User-writable service or task paths are common persistence mechanisms."
  },
  {
    "id": 24,
    "qid": "CS0-004-MOD1-024",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the endpoint sensor placement that yields the highest-fidelity behavioral telemetry for detecting fileless malware and living-off-the-land techniques.",
    "scenario": "<div class=\"scenario-text\"><p>The architecture diagram shows different endpoint monitoring options available to the SOC.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Network-only IDS on the segment", "x": 20, "y": 40 },
      { "id": "node2", "label": "Kernel-level EDR / Sysmon with full process, image load, and script block logging", "x": 50, "y": 40 },
      { "id": "node3", "label": "Periodic full antivirus scans only", "x": 80, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "Kernel-level EDR or properly configured Sysmon plus PowerShell script block and module logging captures the process tree, image loads, and script content required to detect fileless and LOLBin activity. Network IDS lacks process context. Periodic AV scans miss runtime behavior."
  },
  {
    "id": 25,
    "qid": "CS0-004-MOD1-025",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Sysmon configuration that is incorrectly set and will fail to capture command-line arguments critical for detecting encoded PowerShell.",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is reviewing a Sysmon configuration fragment used across the Windows fleet.</p></div>",
    "nodes": [
      { "id": "l1", "label": "<EventFiltering>" },
      { "id": "l2", "label": "  <ProcessCreate onmatch=\"include\">" },
      { "id": "l3", "label": "    <CommandLine condition=\"is\">true</CommandLine>" },
      { "id": "l4", "label": "    <Image condition=\"end with\">powershell.exe</Image>" },
      { "id": "l5", "label": "  </ProcessCreate>" },
      { "id": "l6", "label": "</EventFiltering>" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "The CommandLine element with condition=\"is\">true is invalid Sysmon syntax for enabling command-line logging. Command-line capture is controlled by the overall Sysmon schema and the presence of the CommandLine field in the event; the correct approach is to include ProcessCreate events and ensure the configuration does not exclude the CommandLine data. The given condition does not enable the desired telemetry."
  },
  {
    "id": 26,
    "qid": "CS0-004-MOD1-026",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "single",
    "prompt": "According to the Pyramid of Pain, which type of indicator is the most costly for an adversary to change and therefore provides the highest long-term defensive value when blocked or detected?",
    "scenario": "<div class=\"scenario-text\"><p>A threat intelligence team is prioritizing which IoCs to operationalize into blocking and detection rules.</p></div>",
    "options": [
      { "id": "a", "text": "TTPs and behavioral patterns (tools, techniques, procedures)" },
      { "id": "b", "text": "File hashes (MD5/SHA-256)" },
      { "id": "c", "text": "IP addresses used for C2" },
      { "id": "d", "text": "Domain names registered for a campaign" }
    ],
    "correct": ["a"],
    "explanation": "The Pyramid of Pain places TTPs at the top: forcing an adversary to change tools and procedures is far more expensive than rotating hashes, IPs, or domains. Hash, IP, and domain indicators are lower on the pyramid and easily replaced."
  },
  {
    "id": 27,
    "qid": "CS0-004-MOD1-027",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "multiselect",
    "prompt": "Select THREE characteristics of high-quality threat intelligence that make it suitable for automated ingestion into a TIP and SOAR platform.",
    "scenario": "<div class=\"scenario-text\"><p>A SecOps team is evaluating commercial and open-source threat feeds for production use.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Structured format (STIX/TAXII, JSON) with consistent schema" },
      { "id": "b", "text": "Confidence scores, first-seen/last-seen timestamps, and context (malware family, campaign)" },
      { "id": "c", "text": "Machine-readable IoCs that can be automatically validated and aged out" },
      { "id": "d", "text": "Unstructured PDF reports only with no extractable indicators" },
      { "id": "e", "text": "Indicators with no expiration or confidence information" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Automation requires structured data, rich metadata for prioritization and context, and the ability to validate and retire stale indicators. Unstructured PDFs and indicators lacking confidence or aging data create operational burden and false positives."
  },
  {
    "id": 28,
    "qid": "CS0-004-MOD1-028",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "dragdrop",
    "prompt": "Map each Indicator of Compromise to its correct tier on the Pyramid of Pain.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is classifying indicators from a recent APT report to decide which to prioritize for detection engineering.</p></div>",
    "items": [
      { "id": "i1", "text": "SHA-256 hash of a dropper binary" },
      { "id": "i2", "text": "C2 IP address observed for 48 hours" },
      { "id": "i3", "text": "Custom PowerShell empire-like stager and lateral movement via WMI" }
    ],
    "zones": [
      { "id": "z1", "label": "Hash Values (Trivial)" },
      { "id": "z2", "label": "IP Addresses (Easy)" },
      { "id": "z3", "label": "TTPs (Tough)" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "File hashes are trivial for adversaries to change. IP addresses are easy to rotate. Custom tooling and specific techniques (TTPs) require significant re-engineering when disrupted."
  },
  {
    "id": 29,
    "qid": "CS0-004-MOD1-029",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the component in a typical TIP architecture that is primarily responsible for automated indicator scoring, deduplication, and aging.",
    "scenario": "<div class=\"scenario-text\"><p>Review the logical architecture of an enterprise Threat Intelligence Platform integrated with the SOC.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Raw Feed Ingestion Connectors", "x": 15, "y": 40 },
      { "id": "node2", "label": "Normalization, Enrichment & Scoring Engine", "x": 50, "y": 40 },
      { "id": "node3", "label": "Analyst Workbench / Manual Review UI", "x": 85, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "The normalization, enrichment, and scoring engine automatically processes incoming indicators, removes duplicates, applies confidence and context, and manages aging. Ingestion connectors only bring data in; the workbench is for human analysis."
  },
  {
    "id": 30,
    "qid": "CS0-004-MOD1-030",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the STIX indicator field that is missing or incorrectly populated, reducing the operational value of this IoC for automated blocking.",
    "scenario": "<div class=\"scenario-text\"><p>A threat intel analyst is reviewing a STIX 2.1 indicator object before publishing it to the production TIP.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"type\": \"indicator\"," },
      { "id": "l3", "label": "  \"spec_version\": \"2.1\"," },
      { "id": "l4", "label": "  \"id\": \"indicator--a1b2c3d4\"," },
      { "id": "l5", "label": "  \"created\": \"2026-09-01T10:00:00.000Z\"," },
      { "id": "l6", "label": "  \"pattern\": \"[file:hashes.'SHA-256' = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855']\"," },
      { "id": "l7", "label": "  \"valid_from\": \"2026-09-01T10:00:00.000Z\"" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l7"],
    "selectCount": 1,
    "explanation": "While valid_from is present, the indicator lacks a valid_until (or equivalent aging information) and confidence/score metadata. Without an expiration or confidence value, automated systems cannot safely age out or prioritize the IoC, leading to long-term false positives or missed prioritization."
  },
  {
    "id": 31,
    "qid": "CS0-004-MOD1-031",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "single",
    "prompt": "What is the primary operational benefit of integrating a SOAR platform with both the SIEM and endpoint detection and response (EDR) tools?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC manager is justifying a SOAR investment after measuring high mean time to respond (MTTR) on common alert types.</p></div>",
    "options": [
      { "id": "a", "text": "Automated enrichment, consistent playbook-driven response, and reduced MTTR for repeatable incident types" },
      { "id": "b", "text": "Complete elimination of the need for human analysts" },
      { "id": "c", "text": "Replacement of the SIEM with a ticketing system only" },
      { "id": "d", "text": "Automatic generation of new zero-day exploits" }
    ],
    "correct": ["a"],
    "explanation": "SOAR orchestrates enrichment from multiple tools and executes standardized response actions, dramatically reducing MTTR for well-defined playbooks. It augments analysts rather than replacing them, does not replace the SIEM, and has no role in generating exploits."
  },
  {
    "id": 32,
    "qid": "CS0-004-MOD1-032",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "multiselect",
    "prompt": "Select THREE capabilities that a mature SOAR implementation should provide when responding to a high-severity EDR alert for ransomware-like behavior.",
    "scenario": "<div class=\"scenario-text\"><p>The SOC is designing an automated response playbook for suspected ransomware activity on an endpoint.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Automatic isolation of the affected endpoint via EDR API" },
      { "id": "b", "text": "Enrichment of the alert with process tree, network connections, and threat intelligence matches" },
      { "id": "c", "text": "Creation of a ticket with all enriched context and notification of the on-call analyst" },
      { "id": "d", "text": "Automatic deletion of all files on the endpoint without analyst review" },
      { "id": "e", "text": "Disabling the entire corporate Active Directory domain" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Isolation, enrichment, and ticket creation with context are standard, high-value automated actions that reduce dwell time while preserving evidence and requiring human oversight for destructive steps. Mass file deletion and domain-wide disruption are far too aggressive for automation."
  },
  {
    "id": 33,
    "qid": "CS0-004-MOD1-033",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "dragdrop",
    "prompt": "Match each SOAR component or practice to its primary purpose in a modern SecOps workflow.",
    "scenario": "<div class=\"scenario-text\"><p>A SOAR engineer is documenting the platform architecture for the security team.</p></div>",
    "items": [
      { "id": "i1", "text": "Playbooks / Runbooks" },
      { "id": "i2", "text": "Integration apps / connectors" },
      { "id": "i3", "text": "Case management & collaboration features" }
    ],
    "zones": [
      { "id": "z1", "label": "Codify repeatable investigation and response steps" },
      { "id": "z2", "label": "Enable bidirectional communication with SIEM, EDR, firewall, TIP, etc." },
      { "id": "z3", "label": "Provide a single pane for analyst work, notes, and hand-offs" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Playbooks encode the logic of response. Connectors provide the technical integrations. Case management keeps human and automated work organized and auditable."
  },
  {
    "id": 34,
    "qid": "CS0-004-MOD1-034",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the stage in a typical SOAR-driven incident response workflow where AI/ML is most commonly applied today to reduce analyst workload.",
    "scenario": "<div class=\"scenario-text\"><p>The workflow diagram shows the major phases of an automated response pipeline.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Alert Ingestion" },
      { "id": "node2", "label": "Enrichment & Scoring / Prioritization", "x": 40, "y": 50 },
      { "id": "node3", "label": "Automated Containment Actions", "x": 70, "y": 50 },
      { "id": "node4", "label": "Final Human Approval for Destructive Actions", "x": 90, "y": 80 }
    ],
    "correct": ["node2"],
    "explanation": "Current practical AI/ML applications in SOAR focus on enrichment, entity extraction, similarity matching, and alert scoring/prioritization to help analysts focus on the highest-risk items. Containment and final destructive actions still typically require human oversight or strict playbook gates."
  },
  {
    "id": 35,
    "qid": "CS0-004-MOD1-035",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Python SOAR playbook snippet that introduces a dangerous race condition or incomplete isolation logic.",
    "scenario": "<div class=\"scenario-text\"><p>A SOAR engineer is reviewing a custom playbook that responds to high-severity EDR ransomware alerts.</p></div>",
    "nodes": [
      { "id": "l1", "label": "def respond_to_ransomware(alert):" },
      { "id": "l2", "label": "    host = alert.get('hostname')" },
      { "id": "l3", "label": "    # Enrich" },
      { "id": "l4", "label": "    intel = tip.lookup(alert.get('sha256'))" },
      { "id": "l5", "label": "    # Isolate" },
      { "id": "l6", "label": "    edr.isolate_host(host)" },
      { "id": "l7", "label": "    # Continue investigation even if isolation fails" },
      { "id": "l8", "label": "    processes = edr.get_process_tree(host)" },
      { "id": "l9", "label": "    return create_case(alert, intel, processes)" }
    ],
    "correct": ["l7"],
    "selectCount": 1,
    "explanation": "The comment and subsequent code path imply that investigation continues regardless of isolation success. In a ransomware scenario the playbook should verify isolation status and escalate or halt further automated actions if isolation fails, otherwise the host remains a risk while the playbook proceeds."
  },
  {
    "id": 36,
    "qid": "CS0-004-MOD1-036",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "multiselect",
    "prompt": "Select THREE metrics that best indicate the effectiveness of a continuous security monitoring program.",
    "scenario": "<div class=\"scenario-text\"><p>The CISO has asked the SOC leadership for objective measures of monitoring maturity.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Mean time to detect (MTTD) for high-severity incidents" },
      { "id": "b", "text": "Coverage percentage of critical ATT&CK techniques by detection rules" },
      { "id": "c", "text": "False positive rate and alert volume per analyst" },
      { "id": "d", "text": "Number of vulnerability scanners deployed" },
      { "id": "e", "text": "Total count of log sources without regard to quality or use" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "MTTD, ATT&CK coverage, and alert quality (false positive rate + volume) directly measure detection effectiveness and operational sustainability. Scanner count and raw log source count are vanity metrics that do not reflect actual detection capability."
  },
  {
    "id": 37,
    "qid": "CS0-004-MOD1-037",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "single",
    "prompt": "When building a SIEM use case for detecting Pass-the-Hash activity, which combination of events provides the strongest correlation signal?",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is creating a new correlation rule after observing PtH in a recent red-team engagement.</p></div>",
    "options": [
      { "id": "a", "text": "Event ID 4624 (Logon Type 3 or 9) from a source that previously showed LSASS ProcessAccess, correlated with 4768/4769 Kerberos anomalies or NTLM authentications" },
      { "id": "b", "text": "Only Event ID 4624 with no additional context" },
      { "id": "c", "text": "Only DNS query logs" },
      { "id": "d", "text": "Only firewall accept logs for port 445" }
    ],
    "correct": ["a"],
    "explanation": "Strong PtH detection correlates credential access (LSASS ProcessAccess) with subsequent network logons (Type 3/9) and authentication anomalies. Single event types or unrelated DNS/firewall logs lack the necessary context and produce excessive noise."
  },
  {
    "id": 38,
    "qid": "CS0-004-MOD1-038",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "dragdrop",
    "prompt": "Match each network analysis artifact to the investigative question it primarily answers.",
    "scenario": "<div class=\"scenario-text\"><p>A hunter is deciding which artifacts to extract from a large PCAP during an incident.</p></div>",
    "items": [
      { "id": "i1", "text": "JA3 / JA3S hashes and TLS certificate details" },
      { "id": "i2", "text": "DNS query names, lengths, and response codes" },
      { "id": "i3", "text": "Full TCP stream and extracted HTTP objects" }
    ],
    "zones": [
      { "id": "z1", "label": "Is this encrypted session using a known malware TLS fingerprint?" },
      { "id": "z2", "label": "Is there evidence of tunneling or DGA activity?" },
      { "id": "z3", "label": "What payload or commands were transferred in clear text?" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "JA3/JA3S and certificates identify malware TLS stacks. DNS metadata reveals tunneling and algorithmically generated domains. Stream reassembly recovers actual transferred content when encryption is absent or broken."
  },
  {
    "id": 39,
    "qid": "CS0-004-MOD1-039",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "multiselect",
    "prompt": "Select THREE endpoint telemetry sources that should be enabled to support high-quality behavioral analytics for detecting living-off-the-land and fileless attacks.",
    "scenario": "<div class=\"scenario-text\"><p>An organization is hardening its Windows endpoints and EDR configuration after multiple LOLBin-based incidents.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Process creation with full command line (Sysmon 1 / 4688)" },
      { "id": "b", "text": "Image/DLL load events and script block logging" },
      { "id": "c", "text": "ProcessAccess and CreateRemoteThread events targeting sensitive processes" },
      { "id": "d", "text": "Only successful logon events with no process context" },
      { "id": "e", "text": "Disabling all PowerShell logging" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Process creation with command lines, image/script load events, and process access/injection telemetry form the core of behavioral detection for LOLBins and fileless techniques. Logon-only data and disabled PowerShell logging remove essential visibility."
  },
  {
    "id": 40,
    "qid": "CS0-004-MOD1-040",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "single",
    "prompt": "When implementing AI-assisted alert triage in a SOAR platform, what is the most important safeguard to maintain?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC is piloting an AI model that scores and recommends actions on incoming SIEM alerts.</p></div>",
    "options": [
      { "id": "a", "text": "Human-in-the-loop approval for high-impact or irreversible containment actions combined with continuous model performance monitoring" },
      { "id": "b", "text": "Fully autonomous execution of all recommended actions including host wipes" },
      { "id": "c", "text": "Complete removal of all analyst review steps" },
      { "id": "d", "text": "Training the model exclusively on a single week of historical alerts with no validation set" }
    ],
    "correct": ["a"],
    "explanation": "AI can accelerate enrichment and prioritization, but high-impact actions (isolation, blocking, account disablement, etc.) require human oversight and the model’s performance must be continuously measured to detect drift or bias. Fully autonomous destructive actions and elimination of review introduce unacceptable risk; poor training practices produce unreliable models."
  },
  {
    "id": 41,
    "qid": "CS0-004-MOD1-041",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "single",
    "prompt": "Which continuous monitoring control provides the earliest reliable indication of a compromised service account being used for lateral movement across multiple systems?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC is refining detection after a red-team exercise successfully abused a service account to move laterally without triggering endpoint alerts on every host.</p></div>",
    "options": [
      { "id": "a", "text": "Correlated authentication anomalies (Event IDs 4624/4769) combined with unusual source hosts and time-of-day deviations" },
      { "id": "b", "text": "Daily vulnerability scan reports only" },
      { "id": "c", "text": "Monthly configuration baseline reviews" },
      { "id": "d", "text": "Firewall accept logs for port 443 alone" }
    ],
    "correct": ["a"],
    "explanation": "Authentication telemetry correlated with source host, account type, and behavioral baselines detects service-account abuse early. Vulnerability scans, monthly baselines, and single-protocol firewall logs lack the necessary identity and temporal context."
  },
  {
    "id": 42,
    "qid": "CS0-004-MOD1-042",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "multiselect",
    "prompt": "Select THREE data sources that should be continuously monitored to detect early-stage ransomware behavior before mass encryption begins.",
    "scenario": "<div class=\"scenario-text\"><p>An organization is strengthening pre-encryption detection after a near-miss incident involving reconnaissance and shadow-copy deletion.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Process creation and command-line telemetry showing vssadmin, wmic, or powershell shadow-copy deletion" },
      { "id": "b", "text": "Unusual spikes in file-system change rates or volume shadow copy service activity" },
      { "id": "c", "text": "Outbound network connections to known ransomware C2 or payment infrastructure" },
      { "id": "d", "text": "Routine Windows Update success events" },
      { "id": "e", "text": "Normal user logon events during business hours" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Shadow-copy deletion commands, abnormal file-system change rates, and C2 communication are strong pre-encryption indicators. Routine update and normal logon events are expected noise and do not signal ransomware staging."
  },
  {
    "id": 43,
    "qid": "CS0-004-MOD1-043",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "dragdrop",
    "prompt": "Match each continuous monitoring objective to the most appropriate primary telemetry source.",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineering team is aligning monitoring objectives with available data sources.</p></div>",
    "items": [
      { "id": "i1", "text": "Detect living-off-the-land binary abuse" },
      { "id": "i2", "text": "Identify anomalous east-west authentication" },
      { "id": "i3", "text": "Spot DNS beaconing or tunneling" }
    ],
    "zones": [
      { "id": "z1", "label": "Sysmon / EDR process creation + command-line" },
      { "id": "z2", "label": "Windows Security / Kerberos authentication logs" },
      { "id": "z3", "label": "DNS query logs or passive DNS" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "LOLBin abuse is visible in process and command-line telemetry. Authentication anomalies appear in Security and Kerberos logs. DNS beaconing and tunneling are identified through DNS metadata."
  },
  {
    "id": 44,
    "qid": "CS0-004-MOD1-044",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the monitoring placement that best enables continuous detection of lateral movement between application tiers without introducing inline failure risk.",
    "scenario": "<div class=\"scenario-text\"><p>Examine the simplified multi-tier application architecture. The SOC requires high-fidelity visibility into internal traffic.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Inline WAF on the web tier only", "x": 20, "y": 30 },
      { "id": "node2", "label": "Passive TAP / SPAN on the core switch linking tiers", "x": 50, "y": 50 },
      { "id": "node3", "label": "Endpoint agents with no network visibility", "x": 80, "y": 30 },
      { "id": "node4", "label": "Perimeter firewall only", "x": 50, "y": 80 }
    ],
    "correct": ["node2"],
    "explanation": "A passive TAP or properly engineered SPAN on the core provides full visibility into east-west traffic between tiers without adding latency or a single point of failure. Inline WAF, endpoint-only, and perimeter-only placements miss internal lateral movement."
  },
  {
    "id": 45,
    "qid": "CS0-004-MOD1-045",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Sigma rule that will cause it to miss encoded PowerShell execution because of an incorrect field or condition.",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is reviewing a Sigma rule intended to catch encoded PowerShell launched by Office applications.</p></div>",
    "nodes": [
      { "id": "l1", "label": "title: Encoded PowerShell from Office" },
      { "id": "l2", "label": "logsource:" },
      { "id": "l3", "label": "  product: windows" },
      { "id": "l4", "label": "  category: process_creation" },
      { "id": "l5", "label": "detection:" },
      { "id": "l6", "label": "  selection:" },
      { "id": "l7", "label": "    ParentImage|endswith:" },
      { "id": "l8", "label": "      - '\\winword.exe'" },
      { "id": "l9", "label": "      - '\\excel.exe'" },
      { "id": "l10", "label": "    CommandLine|contains: '-enc'" },
      { "id": "l11", "label": "  condition: selection" }
    ],
    "correct": ["l10"],
    "selectCount": 1,
    "explanation": "While '-enc' is common, adversaries also use '-EncodedCommand', '-e', and mixed-case variants. A more robust rule would use a case-insensitive regex or multiple contains conditions covering the common short and long forms. Relying solely on the literal '-enc' allows easy evasion."
  },
  {
    "id": 46,
    "qid": "CS0-004-MOD1-046",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "single",
    "prompt": "Which architectural pattern most effectively limits the impact of a compromised user workstation while preserving required access to internal applications?",
    "scenario": "<div class=\"scenario-text\"><p>Following several ransomware incidents that spread rapidly from user devices, the architecture team is redesigning internal access controls.</p></div>",
    "options": [
      { "id": "a", "text": "Zero Trust Network Access (ZTNA) with continuous verification and least-privilege application access" },
      { "id": "b", "text": "Flat Layer-2 network with unrestricted east-west communication" },
      { "id": "c", "text": "Single large VLAN for all user and server systems" },
      { "id": "d", "text": "Perimeter firewall only with no internal controls" }
    ],
    "correct": ["a"],
    "explanation": "ZTNA enforces identity-, device-, and context-aware access to individual applications, sharply reducing lateral movement opportunities. Flat networks and perimeter-only designs maximize blast radius."
  },
  {
    "id": 47,
    "qid": "CS0-004-MOD1-047",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "multiselect",
    "prompt": "Select THREE controls that improve both detection and containment of lateral movement in a hybrid on-premises / cloud environment.",
    "scenario": "<div class=\"scenario-text\"><p>A financial services organization is extending its security architecture into AWS while maintaining on-premises Active Directory.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "VPC Flow Logs and Traffic Mirroring on critical subnets" },
      { "id": "b", "text": "Least-privilege security groups and network ACLs between tiers" },
      { "id": "c", "text": "Centralized identity with conditional access and continuous validation" },
      { "id": "d", "text": "Disabling CloudTrail to reduce storage costs" },
      { "id": "e", "text": "Using one shared security group for all production workloads" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Flow Logs and Traffic Mirroring supply network telemetry. Least-privilege security groups limit movement. Centralized identity with continuous validation supports Zero Trust. Disabling CloudTrail and overly broad security groups weaken both detection and containment."
  },
  {
    "id": 48,
    "qid": "CS0-004-MOD1-048",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "dragdrop",
    "prompt": "Map each architecture control to its primary security operations benefit.",
    "scenario": "<div class=\"scenario-text\"><p>An architect is documenting control purposes for the SOC and detection engineering teams.</p></div>",
    "items": [
      { "id": "i1", "text": "Passive Network TAP / SPAN" },
      { "id": "i2", "text": "Privileged Access Workstations (PAWs) / Jump hosts" },
      { "id": "i3", "text": "Micro-segmentation with identity-aware policies" }
    ],
    "zones": [
      { "id": "z1", "label": "High-fidelity packet visibility without inline risk" },
      { "id": "z2", "label": "Reduced attack surface for administrative access" },
      { "id": "z3", "label": "Limited lateral movement via least-privilege flows" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "TAPs/SPAN provide passive full-packet capture. PAWs and jump hosts constrain privileged sessions. Micro-segmentation enforces least-privilege communication paths."
  },
  {
    "id": 49,
    "qid": "CS0-004-MOD1-049",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the component that should be deployed out-of-band to guarantee full-duplex packet capture for threat hunting and forensics.",
    "scenario": "<div class=\"scenario-text\"><p>Review the enterprise edge and DMZ design. The SOC requires lossless capture with zero risk of disrupting production traffic.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Inline Next-Generation Firewall", "x": 25, "y": 40 },
      { "id": "node2", "label": "Passive Optical Network TAP", "x": 55, "y": 40 },
      { "id": "node3", "label": "Active Inline IPS Appliance", "x": 85, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "A passive optical TAP delivers a complete bidirectional copy of traffic and cannot fail closed or introduce latency. Inline firewalls and IPS devices sit in the forwarding path and can disrupt traffic if they fail or become overloaded."
  },
  {
    "id": 50,
    "qid": "CS0-004-MOD1-050",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the security group rule that creates an overly permissive path enabling unrestricted lateral movement from the internet.",
    "scenario": "<div class=\"scenario-text\"><p>A cloud security engineer is reviewing an AWS security group attached to a critical application tier.</p></div>",
    "nodes": [
      { "id": "l1", "label": "SecurityGroup: AppTierSG" },
      { "id": "l2", "label": "  Ingress:" },
      { "id": "l3", "label": "    - FromPort: 443" },
      { "id": "l4", "label": "      ToPort: 443" },
      { "id": "l5", "label": "      CidrIp: 10.20.0.0/16" },
      { "id": "l6", "label": "    - FromPort: 0" },
      { "id": "l7", "label": "      ToPort: 65535" },
      { "id": "l8", "label": "      CidrIp: 0.0.0.0/0" },
      { "id": "l9", "label": "  Egress:" },
      { "id": "l10", "label": "    - CidrIp: 0.0.0.0/0" }
    ],
    "correct": ["l6"],
    "selectCount": 1,
    "explanation": "The rule opening ports 0-65535 from 0.0.0.0/0 is fully permissive and allows unrestricted inbound access from the internet. The HTTPS rule limited to the internal CIDR is correctly scoped."
  },
  {
    "id": 51,
    "qid": "CS0-004-MOD1-051",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "single",
    "prompt": "Which SIEM design practice most effectively reduces alert fatigue while preserving detection of multi-stage attacks?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC is experiencing high volumes of low-fidelity alerts and missing complex attack chains that span multiple log sources.</p></div>",
    "options": [
      { "id": "a", "text": "Multi-event correlation rules that link related telemetry across sources using entity resolution and time windows" },
      { "id": "b", "text": "Alerting on every individual failed logon event" },
      { "id": "c", "text": "Static volume-threshold alerts with no context" },
      { "id": "d", "text": "Manual review of every raw log entry" }
    ],
    "correct": ["a"],
    "explanation": "Correlation across sources with entity linking and temporal logic surfaces multi-stage activity while suppressing isolated noise. Single-event and pure-volume alerts generate fatigue; pure manual review does not scale."
  },
  {
    "id": 52,
    "qid": "CS0-004-MOD1-052",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "multiselect",
    "prompt": "Select THREE best practices for integrating Windows Event Logs and Sysmon into a SIEM for high-fidelity detection engineering.",
    "scenario": "<div class=\"scenario-text\"><p>A detection team is optimizing ingestion and rule performance for a large Windows environment.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enable command-line auditing and a tuned Sysmon configuration focused on high-value events" },
      { "id": "b", "text": "Normalize and enrich events with asset criticality, user context, and threat intelligence" },
      { "id": "c", "text": "Filter known noisy low-value events before or at ingestion" },
      { "id": "d", "text": "Ingest every possible Windows event ID without filtering" },
      { "id": "e", "text": "Disable process creation logging to reduce volume" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Tuned Sysmon plus command-line auditing supplies rich process telemetry. Enrichment improves prioritization. Filtering noise keeps the platform performant. Ingesting everything overwhelms storage and analysts; disabling process creation removes critical detection capability."
  },
  {
    "id": 53,
    "qid": "CS0-004-MOD1-053",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "dragdrop",
    "prompt": "Match each log source to the primary detection use case it best supports.",
    "scenario": "<div class=\"scenario-text\"><p>Analysts are mapping available log sources to detection use cases during a coverage assessment.</p></div>",
    "items": [
      { "id": "i1", "text": "Sysmon Event ID 1 and Event ID 3" },
      { "id": "i2", "text": "Windows Security 4624 / 4625 / 4769" },
      { "id": "i3", "text": "DNS query logs and passive DNS" }
    ],
    "zones": [
      { "id": "z1", "label": "Process creation and network connection correlation" },
      { "id": "z2", "label": "Authentication and Kerberos anomalies" },
      { "id": "z3", "label": "C2 beaconing and domain-generation algorithm activity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Sysmon process and network events enable process-to-network correlation. Security and Kerberos logs detect authentication abuse. DNS logs are primary for beaconing and DGA detection."
  },
  {
    "id": 54,
    "qid": "CS0-004-MOD1-054",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the SIEM pipeline component responsible for converting vendor-specific log formats into a common schema before correlation rules execute.",
    "scenario": "<div class=\"scenario-text\"><p>Review a typical enterprise SIEM data pipeline architecture.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Raw Log Collectors / Agents", "x": 15, "y": 50 },
      { "id": "node2", "label": "Parsing / Normalization / Enrichment Layer", "x": 45, "y": 50 },
      { "id": "node3", "label": "Correlation & Analytics Engine", "x": 75, "y": 50 },
      { "id": "node4", "label": "Alert Console / SOAR", "x": 90, "y": 80 }
    ],
    "correct": ["node2"],
    "explanation": "The parsing, normalization, and enrichment layer transforms disparate formats into a common information model so correlation rules operate consistently. Collectors only ship data; the analytics engine consumes already-normalized events."
  },
  {
    "id": 55,
    "qid": "CS0-004-MOD1-055",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Splunk SPL that inverts the intended logic and will only surface expected administrative RDP activity instead of anomalous sources.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is troubleshooting a correlation search designed to find successful RDP logons from unusual source hosts.</p></div>",
    "nodes": [
      { "id": "l1", "label": "index=wineventlog EventCode=4624" },
      { "id": "l2", "label": "| where Logon_Type=10" },
      { "id": "l3", "label": "| stats count by src_ip, dest_host, user" },
      { "id": "l4", "label": "| where count > 3" },
      { "id": "l5", "label": "| where src_ip IN (known_good_jump_hosts)" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "The final where clause retains only known-good jump hosts, which is the opposite of the detection goal. The search should exclude known-good sources or alert on sources that are NOT in the approved list."
  },
  {
    "id": 56,
    "qid": "CS0-004-MOD1-056",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "single",
    "prompt": "Which Wireshark display filter is most useful for surfacing potential DNS tunneling candidates in a large PCAP?",
    "scenario": "<div class=\"scenario-text\"><p>A threat hunter is investigating elevated DNS query volume from a single internal host to an external domain.</p></div>",
    "options": [
      { "id": "a", "text": "dns.qry.name len > 40 or (dns and frame.len > 200)" },
      { "id": "b", "text": "tcp.port == 80 and http.request.method == GET" },
      { "id": "c", "text": "arp.opcode == 1" },
      { "id": "d", "text": "icmp.type == 8" }
    ],
    "correct": ["a"],
    "explanation": "DNS tunneling frequently uses long subdomain labels and larger-than-normal packets. Filtering on query-name length or elevated frame length helps isolate candidates. HTTP, ARP, and ICMP filters target unrelated traffic."
  },
  {
    "id": 57,
    "qid": "CS0-004-MOD1-057",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "multiselect",
    "prompt": "Select THREE packet-capture indicators that commonly suggest command-and-control beaconing.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is reviewing a full-packet capture after an endpoint detection of suspicious outbound connections.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Consistent inter-connection intervals to the same external destination" },
      { "id": "b", "text": "Low-variance packet or request sizes" },
      { "id": "c", "text": "Use of non-standard ports or protocol mimicry (DNS, HTTPS on unusual ports)" },
      { "id": "d", "text": "Large legitimate software-update downloads from trusted CDNs" },
      { "id": "e", "text": "Normal DHCP lease-renewal traffic" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Beaconing is characterized by regular timing, low size variance, and often stealthy protocol or port choices. Legitimate updates and DHCP activity do not match these patterns."
  },
  {
    "id": 58,
    "qid": "CS0-004-MOD1-058",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "dragdrop",
    "prompt": "Match each packet-analysis technique to the threat it is best suited to uncover.",
    "scenario": "<div class=\"scenario-text\"><p>A network hunter is selecting analysis methods based on observed symptoms.</p></div>",
    "items": [
      { "id": "i1", "text": "JA3/JA3S fingerprint and TLS certificate analysis" },
      { "id": "i2", "text": "DNS query length, entropy, and frequency analysis" },
      { "id": "i3", "text": "TCP stream reassembly and HTTP object extraction" }
    ],
    "zones": [
      { "id": "z1", "label": "Encrypted C2 using custom or abused TLS stacks" },
      { "id": "z2", "label": "DNS tunneling or DGA-based C2" },
      { "id": "z3", "label": "Clear-text or decryptable malware download / exfiltration" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "JA3/JA3S and certificates identify malware TLS implementations. DNS metadata reveals tunneling and DGA. Stream reassembly recovers payloads from unencrypted or breakable sessions."
  },
  {
    "id": 59,
    "qid": "CS0-004-MOD1-059",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the capture point that provides the most complete visibility into traffic for a critical server subnet without risking production impact.",
    "scenario": "<div class=\"scenario-text\"><p>The network diagram shows possible sensor locations relative to a server VLAN.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Inline on the server access-switch uplink", "x": 20, "y": 40 },
      { "id": "node2", "label": "Passive TAP on the server VLAN uplink", "x": 50, "y": 40 },
      { "id": "node3", "label": "SPAN from a distant, oversubscribed core switch", "x": 80, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "A passive TAP on the server VLAN uplink delivers full-duplex, lossless capture of all traffic to and from the subnet without introducing a failure point. Inline placement risks outages; distant SPAN ports frequently suffer from oversubscription and incomplete visibility."
  },
  {
    "id": 60,
    "qid": "CS0-004-MOD1-060",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the tcpdump filter element that will cause the capture to miss HTTPS C2 traffic running on non-standard ports.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is preparing a targeted packet capture on a Linux sensor for a suspected C2 investigation.</p></div>",
    "nodes": [
      { "id": "l1", "label": "tcpdump -i eth0 -w capture.pcap -s 0" },
      { "id": "l2", "label": "  port 443" },
      { "id": "l3", "label": "  and host 10.10.5.20" }
    ],
    "correct": ["l2"],
    "selectCount": 1,
    "explanation": "Restricting the capture to port 443 will miss C2 that uses HTTPS on alternative ports (8443, 4443, high ports, etc.). Capturing more broadly and filtering post-capture is safer when the exact port is unknown."
  },
  {
    "id": 61,
    "qid": "CS0-004-MOD1-061",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "single",
    "prompt": "Which endpoint telemetry combination provides the strongest signal for detecting process-injection techniques such as process hollowing or reflective DLL injection?",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is prioritizing Sysmon and EDR event types after multiple confirmed process-injection incidents.</p></div>",
    "options": [
      { "id": "a", "text": "Sysmon Event ID 8 (CreateRemoteThread) and Event ID 10 (ProcessAccess) enriched with target image and memory-region details" },
      { "id": "b", "text": "Windows Event ID 4624 alone" },
      { "id": "c", "text": "Scheduled-task creation logs only" },
      { "id": "d", "text": "USB device insertion events" }
    ],
    "correct": ["a"],
    "explanation": "CreateRemoteThread and ProcessAccess events, especially when enriched with target process and memory information, are primary indicators of injection. Logon, scheduled-task, and USB events do not directly reveal injection behavior."
  },
  {
    "id": 62,
    "qid": "CS0-004-MOD1-062",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "multiselect",
    "prompt": "Select THREE behavioral indicators that, when observed together, strongly suggest credential-dumping activity on an endpoint.",
    "scenario": "<div class=\"scenario-text\"><p>An EDR alert has fired. The analyst is correlating additional telemetry to confirm intent before escalating.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "ProcessAccess to lsass.exe with PROCESS_VM_READ or similar rights from a non-system process" },
      { "id": "b", "text": "Creation of a minidump or use of procdump / comsvcs.dll against lsass" },
      { "id": "c", "text": "Subsequent network logons or process creation consistent with pass-the-hash tooling" },
      { "id": "d", "text": "Normal user opening Outlook and accessing internal SharePoint" },
      { "id": "e", "text": "Routine Windows Update service activity" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "LSASS access with read permissions, explicit dumping techniques, and follow-on credential reuse form a high-confidence chain. Legitimate user and update activity are expected noise."
  },
  {
    "id": 63,
    "qid": "CS0-004-MOD1-063",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "dragdrop",
    "prompt": "Map each observed endpoint behavior to the most likely MITRE ATT&CK technique category.",
    "scenario": "<div class=\"scenario-text\"><p>A behavioral analytics rule set is being tuned against ATT&CK.</p></div>",
    "items": [
      { "id": "i1", "text": "winword.exe spawning powershell.exe with an encoded command" },
      { "id": "i2", "text": "Repeated ProcessAccess to lsass.exe followed by network logons using the same credentials" },
      { "id": "i3", "text": "Service or scheduled-task installation pointing to a binary in a user-writable path" }
    ],
    "zones": [
      { "id": "z1", "label": "Execution / Command and Scripting Interpreter" },
      { "id": "z2", "label": "Credential Access / OS Credential Dumping" },
      { "id": "z3", "label": "Persistence" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Office spawning encoded PowerShell is classic malicious execution. LSASS access plus credential reuse indicates dumping. User-writable service or task paths are common persistence mechanisms."
  },
  {
    "id": 64,
    "qid": "CS0-004-MOD1-064",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the endpoint monitoring approach that yields the highest-fidelity behavioral telemetry for detecting fileless malware and living-off-the-land techniques.",
    "scenario": "<div class=\"scenario-text\"><p>The architecture diagram shows different endpoint monitoring options available to the SOC.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Network-only IDS on the segment", "x": 20, "y": 40 },
      { "id": "node2", "label": "Kernel-level EDR / Sysmon with process, image-load, and script-block logging", "x": 50, "y": 40 },
      { "id": "node3", "label": "Periodic full antivirus scans only", "x": 80, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "Kernel-level EDR or properly configured Sysmon plus PowerShell script-block and module logging captures the process tree, image loads, and script content required to detect fileless and LOLBin activity. Network IDS lacks process context; periodic AV scans miss runtime behavior."
  },
  {
    "id": 65,
    "qid": "CS0-004-MOD1-065",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the Sysmon configuration line that is incorrectly written and will fail to capture command-line arguments needed for encoded-PowerShell detection.",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is reviewing a Sysmon configuration fragment used across the Windows fleet.</p></div>",
    "nodes": [
      { "id": "l1", "label": "<EventFiltering>" },
      { "id": "l2", "label": "  <ProcessCreate onmatch=\"include\">" },
      { "id": "l3", "label": "    <CommandLine condition=\"is\">true</CommandLine>" },
      { "id": "l4", "label": "    <Image condition=\"end with\">powershell.exe</Image>" },
      { "id": "l5", "label": "  </ProcessCreate>" },
      { "id": "l6", "label": "</EventFiltering>" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "The CommandLine element with condition=\"is\">true is invalid Sysmon syntax for enabling command-line logging. Command-line data is captured when ProcessCreate events are included and the configuration does not exclude the field; the given condition does not enable the required telemetry."
  },
  {
    "id": 66,
    "qid": "CS0-004-MOD1-066",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "single",
    "prompt": "According to the Pyramid of Pain, which class of indicator forces the greatest cost on an adversary when successfully detected or blocked?",
    "scenario": "<div class=\"scenario-text\"><p>A threat-intelligence team is prioritizing which indicators to operationalize into blocking and detection content.</p></div>",
    "options": [
      { "id": "a", "text": "TTPs and behavioral patterns (tools, techniques, procedures)" },
      { "id": "b", "text": "File hashes (MD5 / SHA-256)" },
      { "id": "c", "text": "IP addresses used for C2" },
      { "id": "d", "text": "Domain names registered for a short-lived campaign" }
    ],
    "correct": ["a"],
    "explanation": "The Pyramid of Pain places TTPs at the apex: forcing an adversary to change tools and procedures is far more expensive than rotating hashes, IPs, or domains. Lower-tier indicators are easily replaced."
  },
  {
    "id": 67,
    "qid": "CS0-004-MOD1-067",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "multiselect",
    "prompt": "Select THREE characteristics of high-quality threat intelligence that make it suitable for automated ingestion into a TIP and SOAR platform.",
    "scenario": "<div class=\"scenario-text\"><p>A SecOps team is evaluating commercial and open-source threat feeds for production use.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Structured format (STIX/TAXII or well-defined JSON) with consistent schema" },
      { "id": "b", "text": "Confidence scores, first-seen / last-seen timestamps, and campaign or malware-family context" },
      { "id": "c", "text": "Machine-readable IoCs that can be automatically validated and aged out" },
      { "id": "d", "text": "Unstructured PDF reports only with no extractable indicators" },
      { "id": "e", "text": "Indicators lacking expiration or confidence information" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Automation requires structured data, rich metadata for prioritization, and the ability to validate and retire stale indicators. Unstructured PDFs and indicators without confidence or aging data create operational burden and false positives."
  },
  {
    "id": 68,
    "qid": "CS0-004-MOD1-068",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "dragdrop",
    "prompt": "Map each Indicator of Compromise to its correct tier on the Pyramid of Pain.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is classifying indicators from a recent APT report to decide prioritization for detection engineering.</p></div>",
    "items": [
      { "id": "i1", "text": "SHA-256 hash of a dropper binary" },
      { "id": "i2", "text": "C2 IP address observed for less than 72 hours" },
      { "id": "i3", "text": "Custom PowerShell stager and lateral movement via WMI" }
    ],
    "zones": [
      { "id": "z1", "label": "Hash Values (Trivial)" },
      { "id": "z2", "label": "IP Addresses (Easy)" },
      { "id": "z3", "label": "TTPs (Tough)" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "File hashes are trivial for adversaries to change. IP addresses are easy to rotate. Custom tooling and specific techniques require significant re-engineering when disrupted."
  },
  {
    "id": 69,
    "qid": "CS0-004-MOD1-069",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the TIP component primarily responsible for automated indicator scoring, deduplication, enrichment, and aging.",
    "scenario": "<div class=\"scenario-text\"><p>Review the logical architecture of an enterprise Threat Intelligence Platform integrated with the SOC.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Raw Feed Ingestion Connectors", "x": 15, "y": 40 },
      { "id": "node2", "label": "Normalization, Enrichment & Scoring Engine", "x": 50, "y": 40 },
      { "id": "node3", "label": "Analyst Workbench / Manual Review UI", "x": 85, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "The normalization, enrichment, and scoring engine automatically processes incoming indicators, removes duplicates, applies confidence and context, and manages aging. Ingestion connectors only bring data in; the workbench supports human analysis."
  },
  {
    "id": 70,
    "qid": "CS0-004-MOD1-070",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the STIX indicator property that is missing or insufficient, reducing the operational value of this IoC for automated blocking and aging.",
    "scenario": "<div class=\"scenario-text\"><p>A threat-intel analyst is reviewing a STIX 2.1 indicator object before publishing it to the production TIP.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"type\": \"indicator\"," },
      { "id": "l3", "label": "  \"spec_version\": \"2.1\"," },
      { "id": "l4", "label": "  \"id\": \"indicator--a1b2c3d4-e5f6\"," },
      { "id": "l5", "label": "  \"created\": \"2026-09-01T10:00:00.000Z\"," },
      { "id": "l6", "label": "  \"pattern\": \"[file:hashes.'SHA-256' = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855']\"," },
      { "id": "l7", "label": "  \"valid_from\": \"2026-09-01T10:00:00.000Z\"" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l7"],
    "selectCount": 1,
    "explanation": "While valid_from is present, the indicator lacks a valid_until (or equivalent aging) and confidence/score metadata. Without expiration or confidence information, automated systems cannot safely age out or prioritize the IoC."
  },
  {
    "id": 71,
    "qid": "CS0-004-MOD1-071",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "single",
    "prompt": "What is the primary operational benefit of integrating a SOAR platform with both the SIEM and EDR tools?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC manager is justifying a SOAR investment after measuring high mean time to respond on common alert types.</p></div>",
    "options": [
      { "id": "a", "text": "Automated enrichment, consistent playbook-driven response, and reduced MTTR for repeatable incident types" },
      { "id": "b", "text": "Complete elimination of the need for human analysts" },
      { "id": "c", "text": "Replacement of the SIEM with a simple ticketing system" },
      { "id": "d", "text": "Automatic generation of new zero-day exploits" }
    ],
    "correct": ["a"],
    "explanation": "SOAR orchestrates enrichment from multiple tools and executes standardized response actions, reducing MTTR for well-defined playbooks. It augments analysts rather than replacing them, does not replace the SIEM, and has no role in generating exploits."
  },
  {
    "id": 72,
    "qid": "CS0-004-MOD1-072",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "multiselect",
    "prompt": "Select THREE capabilities a mature SOAR implementation should provide when responding to a high-severity EDR alert for ransomware-like behavior.",
    "scenario": "<div class=\"scenario-text\"><p>The SOC is designing an automated response playbook for suspected ransomware activity on an endpoint.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Automatic isolation of the affected endpoint via the EDR API" },
      { "id": "b", "text": "Enrichment of the alert with process tree, network connections, and threat-intelligence matches" },
      { "id": "c", "text": "Creation of a ticket containing all enriched context and notification of the on-call analyst" },
      { "id": "d", "text": "Automatic deletion of every file on the endpoint without analyst review" },
      { "id": "e", "text": "Immediate disablement of the entire corporate Active Directory domain" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Isolation, enrichment, and ticket creation with context are standard high-value automated actions that reduce dwell time while preserving evidence and requiring human oversight for destructive steps. Mass file deletion and domain-wide disruption are far too aggressive for automation."
  },
  {
    "id": 73,
    "qid": "CS0-004-MOD1-073",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "dragdrop",
    "prompt": "Match each SOAR component to its primary purpose in a modern SecOps workflow.",
    "scenario": "<div class=\"scenario-text\"><p>A SOAR engineer is documenting the platform architecture for the security team.</p></div>",
    "items": [
      { "id": "i1", "text": "Playbooks / Runbooks" },
      { "id": "i2", "text": "Integration apps / connectors" },
      { "id": "i3", "text": "Case management and collaboration features" }
    ],
    "zones": [
      { "id": "z1", "label": "Codify repeatable investigation and response steps" },
      { "id": "z2", "label": "Enable bidirectional communication with SIEM, EDR, firewall, TIP, etc." },
      { "id": "z3", "label": "Provide a single pane for analyst work, notes, and hand-offs" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Playbooks encode response logic. Connectors provide technical integrations. Case management keeps human and automated work organized and auditable."
  },
  {
    "id": 74,
    "qid": "CS0-004-MOD1-074",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the stage in a typical SOAR-driven incident-response workflow where AI/ML is most commonly applied today to reduce analyst workload.",
    "scenario": "<div class=\"scenario-text\"><p>The workflow diagram shows the major phases of an automated response pipeline.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Alert Ingestion", "x": 15, "y": 50 },
      { "id": "node2", "label": "Enrichment, Scoring & Prioritization", "x": 45, "y": 50 },
      { "id": "node3", "label": "Automated Containment Actions", "x": 75, "y": 50 },
      { "id": "node4", "label": "Final Human Approval for Destructive Actions", "x": 90, "y": 80 }
    ],
    "correct": ["node2"],
    "explanation": "Practical AI/ML applications in SOAR currently focus on enrichment, entity extraction, similarity matching, and alert scoring/prioritization so analysts can focus on the highest-risk items. Containment and final destructive actions still typically require human oversight or strict playbook gates."
  },
  {
    "id": 75,
    "qid": "CS0-004-MOD1-075",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Python SOAR playbook snippet that introduces incomplete isolation logic or an unsafe continuation path.",
    "scenario": "<div class=\"scenario-text\"><p>A SOAR engineer is reviewing a custom playbook that responds to high-severity EDR ransomware alerts.</p></div>",
    "nodes": [
      { "id": "l1", "label": "def respond_to_ransomware(alert):" },
      { "id": "l2", "label": "    host = alert.get('hostname')" },
      { "id": "l3", "label": "    intel = tip.lookup(alert.get('sha256'))" },
      { "id": "l4", "label": "    edr.isolate_host(host)" },
      { "id": "l5", "label": "    # Continue investigation even if isolation fails" },
      { "id": "l6", "label": "    processes = edr.get_process_tree(host)" },
      { "id": "l7", "label": "    return create_case(alert, intel, processes)" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "The comment and subsequent code path imply that investigation continues regardless of isolation success. In a ransomware scenario the playbook should verify isolation status and escalate or halt further automated actions if isolation fails; otherwise the host remains a risk while the playbook proceeds."
  },
  {
    "id": 76,
    "qid": "CS0-004-MOD1-076",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "single",
    "prompt": "Which metric most directly measures the effectiveness of continuous monitoring for high-severity threats?",
    "scenario": "<div class=\"scenario-text\"><p>SOC leadership is preparing a board-level report on detection program performance.</p></div>",
    "options": [
      { "id": "a", "text": "Mean time to detect (MTTD) for confirmed high-severity incidents" },
      { "id": "b", "text": "Total number of log sources ingested regardless of quality" },
      { "id": "c", "text": "Number of vulnerability scanners deployed" },
      { "id": "d", "text": "Count of firewall rules in the rule base" }
    ],
    "correct": ["a"],
    "explanation": "MTTD for high-severity incidents directly reflects how quickly continuous monitoring surfaces real threats. Raw log-source counts, scanner counts, and firewall rule counts are vanity metrics that do not measure detection effectiveness."
  },
  {
    "id": 77,
    "qid": "CS0-004-MOD1-077",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "multiselect",
    "prompt": "Select THREE practices that improve the quality and actionability of SIEM alerts for SOC analysts.",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineering team is reducing alert fatigue while increasing true-positive rates.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enrich alerts with asset criticality, user context, and threat-intelligence matches" },
      { "id": "b", "text": "Apply multi-event correlation and entity linking before generating an alert" },
      { "id": "c", "text": "Suppress or tune known false-positive patterns with documented exceptions" },
      { "id": "d", "text": "Generate an alert for every single failed authentication attempt" },
      { "id": "e", "text": "Disable all enrichment to reduce processing latency" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Enrichment, correlation, and disciplined tuning produce higher-fidelity, contextualized alerts. Alerting on every failed logon and disabling enrichment increase noise and reduce analyst effectiveness."
  },
  {
    "id": 78,
    "qid": "CS0-004-MOD1-078",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "single",
    "prompt": "When investigating possible HTTPS command-and-control on non-standard ports, which capture strategy is most appropriate?",
    "scenario": "<div class=\"scenario-text\"><p>An analyst needs to collect evidence of suspected encrypted C2 without knowing the exact destination port in advance.</p></div>",
    "options": [
      { "id": "a", "text": "Capture broadly (or with a generous port range) and apply protocol and destination filters during analysis" },
      { "id": "b", "text": "Capture only port 443 traffic" },
      { "id": "c", "text": "Capture only ICMP traffic" },
      { "id": "d", "text": "Rely exclusively on NetFlow summary records with no packet content" }
    ],
    "correct": ["a"],
    "explanation": "Because C2 may use any port, a broad capture followed by post-filtering preserves evidence. Restricting to 443 or ICMP risks missing the traffic entirely; NetFlow alone lacks the payload and TLS details needed for deeper analysis."
  },
  {
    "id": 79,
    "qid": "CS0-004-MOD1-079",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "dragdrop",
    "prompt": "Match each endpoint telemetry source to the detection capability it most directly enables.",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is mapping telemetry to detection use cases for a Windows estate.</p></div>",
    "items": [
      { "id": "i1", "text": "Sysmon Event ID 1 with full command line" },
      { "id": "i2", "text": "Sysmon Event ID 10 (ProcessAccess) to lsass.exe" },
      { "id": "i3", "text": "PowerShell Script Block Logging (Event ID 4104)" }
    ],
    "zones": [
      { "id": "z1", "label": "Detection of encoded or suspicious process execution" },
      { "id": "z2", "label": "Detection of credential dumping attempts" },
      { "id": "z3", "label": "Visibility into the content of executed PowerShell scripts" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Process creation with command line reveals encoded or anomalous execution. ProcessAccess to LSASS indicates credential dumping. Script Block Logging exposes the actual PowerShell code that was run."
  },
  {
    "id": 80,
    "qid": "CS0-004-MOD1-080",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "single",
    "prompt": "When deploying AI-assisted alert triage inside a SOAR platform, what is the most critical safeguard?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC is piloting an AI model that scores incoming alerts and recommends response actions.</p></div>",
    "options": [
      { "id": "a", "text": "Human-in-the-loop approval for high-impact or irreversible actions together with continuous monitoring of model performance" },
      { "id": "b", "text": "Fully autonomous execution of every recommended action, including host wipes" },
      { "id": "c", "text": "Complete removal of all analyst review steps" },
      { "id": "d", "text": "Training the model on a single week of data with no hold-out validation set" }
    ],
    "correct": ["a"],
    "explanation": "AI can accelerate enrichment and prioritization, but high-impact actions require human oversight and the model’s performance must be continuously measured to detect drift or bias. Fully autonomous destructive actions and elimination of review introduce unacceptable risk; inadequate training practices produce unreliable models."
  },
  {
    "id": 81,
    "qid": "CS0-004-MOD1-081",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "single",
    "prompt": "Which continuous monitoring approach best detects the early stages of a living-off-the-land attack that uses only built-in Windows binaries?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC is tuning detections after several incidents in which adversaries relied exclusively on signed Microsoft binaries and never dropped custom malware.</p></div>",
    "options": [
      { "id": "a", "text": "Behavioral baselining of process trees, parent-child relationships, and command-line arguments from Sysmon/EDR" },
      { "id": "b", "text": "Signature-based antivirus scans performed once per week" },
      { "id": "c", "text": "Firewall rule-hit counts alone" },
      { "id": "d", "text": "Monthly vulnerability scan reports" }
    ],
    "correct": ["a"],
    "explanation": "LOLBin attacks are best detected by behavioral analytics on process relationships and command lines. Weekly AV signatures, firewall counts, and monthly scans lack the runtime process context required to surface these techniques."
  },
  {
    "id": 82,
    "qid": "CS0-004-MOD1-082",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "multiselect",
    "prompt": "Select THREE continuous-monitoring data sources that provide the highest value for detecting credential access and lateral movement.",
    "scenario": "<div class=\"scenario-text\"><p>An organization is expanding its detection coverage after a red-team exercise that successfully dumped credentials and moved laterally.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Sysmon Event ID 10 (ProcessAccess) targeting lsass.exe" },
      { "id": "b", "text": "Windows Security authentication events (4624, 4769, 4776) with source-host and time context" },
      { "id": "c", "text": "Process-creation events showing tools commonly used after credential dumping" },
      { "id": "d", "text": "Daily full-disk antivirus scans" },
      { "id": "e", "text": "Monthly configuration-compliance reports" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "ProcessAccess to LSASS, authentication anomalies, and post-dump process activity form a high-fidelity detection chain. Periodic AV scans and compliance reports are not continuous and lack runtime behavioral context."
  },
  {
    "id": 83,
    "qid": "CS0-004-MOD1-083",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "dragdrop",
    "prompt": "Match each continuous-monitoring objective to the telemetry source that best supports it.",
    "scenario": "<div class=\"scenario-text\"><p>A detection-engineering team is aligning monitoring goals with available data sources.</p></div>",
    "items": [
      { "id": "i1", "text": "Detect encoded PowerShell and LOLBin execution" },
      { "id": "i2", "text": "Identify anomalous authentication and Kerberos activity" },
      { "id": "i3", "text": "Spot DNS beaconing or tunneling" }
    ],
    "zones": [
      { "id": "z1", "label": "Sysmon / EDR process-creation and command-line logs" },
      { "id": "z2", "label": "Windows Security and Kerberos event logs" },
      { "id": "z3", "label": "DNS query logs or passive DNS" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Process and command-line telemetry reveal LOLBin and encoded-script abuse. Authentication logs surface credential and Kerberos anomalies. DNS logs are the primary source for beaconing and tunneling detection."
  },
  {
    "id": 84,
    "qid": "CS0-004-MOD1-084",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the sensor placement that provides the best continuous visibility into east-west lateral movement without adding inline latency or failure risk.",
    "scenario": "<div class=\"scenario-text\"><p>Examine the simplified data-center architecture. The SOC requires high-fidelity monitoring of traffic between application tiers.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Inline firewall on every tier uplink", "x": 20, "y": 30 },
      { "id": "node2", "label": "Passive TAP / SPAN on the core switch", "x": 50, "y": 50 },
      { "id": "node3", "label": "Perimeter firewall only", "x": 80, "y": 30 },
      { "id": "node4", "label": "Endpoint EDR with no network visibility", "x": 50, "y": 80 }
    ],
    "correct": ["node2"],
    "explanation": "A passive TAP or well-engineered SPAN on the core captures east-west traffic without introducing latency or a single point of failure. Inline firewalls add risk; perimeter-only and endpoint-only placements miss internal lateral movement."
  },
  {
    "id": 85,
    "qid": "CS0-004-MOD1-085",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Sigma rule that contains a logic error that will cause encoded PowerShell launched by Office applications to be missed.",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is reviewing a Sigma rule intended to catch encoded PowerShell spawned by Microsoft Office processes.</p></div>",
    "nodes": [
      { "id": "l1", "label": "title: Encoded PowerShell Spawned by Office" },
      { "id": "l2", "label": "logsource:" },
      { "id": "l3", "label": "  category: process_creation" },
      { "id": "l4", "label": "  product: windows" },
      { "id": "l5", "label": "detection:" },
      { "id": "l6", "label": "  selection:" },
      { "id": "l7", "label": "    ParentImage|endswith:" },
      { "id": "l8", "label": "      - '\\winword.exe'" },
      { "id": "l9", "label": "      - '\\excel.exe'" },
      { "id": "l10", "label": "    CommandLine|contains: '-enc'" },
      { "id": "l11", "label": "  condition: selection" }
    ],
    "correct": ["l10"],
    "selectCount": 1,
    "explanation": "Relying solely on the literal string '-enc' is brittle. Adversaries commonly use '-EncodedCommand', '-e', '-en', and mixed-case variants. A robust rule should use a case-insensitive regular expression or multiple contains conditions covering the common short and long forms."
  },
  {
    "id": 86,
    "qid": "CS0-004-MOD1-086",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "single",
    "prompt": "Which architectural control most effectively reduces the blast radius of a compromised user endpoint while still allowing required access to business applications?",
    "scenario": "<div class=\"scenario-text\"><p>After multiple ransomware incidents that spread rapidly from workstations, the architecture team is redesigning internal access controls.</p></div>",
    "options": [
      { "id": "a", "text": "Zero Trust Network Access (ZTNA) with continuous verification and least-privilege application-level access" },
      { "id": "b", "text": "Flat Layer-2 network with unrestricted east-west communication" },
      { "id": "c", "text": "Single large VLAN containing both user and server systems" },
      { "id": "d", "text": "Perimeter firewall only with no internal segmentation" }
    ],
    "correct": ["a"],
    "explanation": "ZTNA enforces identity-, device-, and context-aware access to individual applications, sharply limiting lateral movement. Flat networks and perimeter-only designs maximize blast radius."
  },
  {
    "id": 87,
    "qid": "CS0-004-MOD1-087",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "multiselect",
    "prompt": "Select THREE architecture controls that simultaneously improve detection and containment of lateral movement in a hybrid cloud environment.",
    "scenario": "<div class=\"scenario-text\"><p>A financial institution is extending its security architecture into AWS while retaining on-premises Active Directory.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "VPC Flow Logs and Traffic Mirroring enabled on critical subnets" },
      { "id": "b", "text": "Least-privilege security groups and network ACLs between application tiers" },
      { "id": "c", "text": "Centralized identity with conditional access and continuous validation" },
      { "id": "d", "text": "Disabling CloudTrail logging to reduce storage cost" },
      { "id": "e", "text": "A single shared security group applied to all production instances" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Flow Logs and Traffic Mirroring supply network telemetry. Least-privilege security groups limit movement. Centralized identity with continuous validation supports Zero Trust. Disabling CloudTrail and overly broad security groups weaken both detection and containment."
  },
  {
    "id": 88,
    "qid": "CS0-004-MOD1-088",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "dragdrop",
    "prompt": "Map each network architecture control to its primary security-operations benefit.",
    "scenario": "<div class=\"scenario-text\"><p>An architect is documenting the purpose of key controls for the SOC and detection-engineering teams.</p></div>",
    "items": [
      { "id": "i1", "text": "Passive Network TAP or SPAN port" },
      { "id": "i2", "text": "Privileged Access Workstations (PAWs) and jump hosts" },
      { "id": "i3", "text": "Micro-segmentation with identity-aware policies" }
    ],
    "zones": [
      { "id": "z1", "label": "High-fidelity packet visibility without inline risk" },
      { "id": "z2", "label": "Reduced attack surface for administrative access" },
      { "id": "z3", "label": "Limited lateral movement through least-privilege flows" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "TAPs and SPAN provide passive full-packet capture. PAWs and jump hosts constrain privileged sessions. Micro-segmentation enforces least-privilege communication paths."
  },
  {
    "id": 89,
    "qid": "CS0-004-MOD1-089",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the component that should be placed out-of-band to guarantee full-duplex packet capture for threat hunting without risk of production disruption.",
    "scenario": "<div class=\"scenario-text\"><p>Review the enterprise edge and DMZ design. The SOC requires lossless capture capability.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Inline Next-Generation Firewall", "x": 25, "y": 40 },
      { "id": "node2", "label": "Passive Optical Network TAP", "x": 55, "y": 40 },
      { "id": "node3", "label": "Active Inline IPS Appliance", "x": 85, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "A passive optical TAP delivers a complete bidirectional copy of traffic and cannot fail closed or introduce latency. Inline firewalls and IPS devices sit in the forwarding path and can disrupt traffic if they fail or become overloaded."
  },
  {
    "id": 90,
    "qid": "CS0-004-MOD1-090",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the security-group rule that creates an overly permissive inbound path from the internet, enabling unrestricted access.",
    "scenario": "<div class=\"scenario-text\"><p>A cloud security engineer is reviewing an AWS security group attached to a critical application tier.</p></div>",
    "nodes": [
      { "id": "l1", "label": "SecurityGroup: AppTierSG" },
      { "id": "l2", "label": "  Ingress:" },
      { "id": "l3", "label": "    - FromPort: 443" },
      { "id": "l4", "label": "      ToPort: 443" },
      { "id": "l5", "label": "      CidrIp: 10.30.0.0/16" },
      { "id": "l6", "label": "    - FromPort: 0" },
      { "id": "l7", "label": "      ToPort: 65535" },
      { "id": "l8", "label": "      CidrIp: 0.0.0.0/0" },
      { "id": "l9", "label": "  Egress:" },
      { "id": "l10", "label": "    - CidrIp: 0.0.0.0/0" }
    ],
    "correct": ["l6"],
    "selectCount": 1,
    "explanation": "The rule opening ports 0-65535 from 0.0.0.0/0 is fully permissive and allows unrestricted inbound access from the internet. The HTTPS rule limited to the internal CIDR is correctly scoped."
  },
  {
    "id": 91,
    "qid": "CS0-004-MOD1-091",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "single",
    "prompt": "Which SIEM correlation strategy is most effective for detecting a multi-stage attack that begins with a phishing email and progresses to domain-administrator compromise?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC is redesigning detection logic after an incident that spanned email, endpoint, authentication, and Active Directory logs over several days.</p></div>",
    "options": [
      { "id": "a", "text": "Multi-event correlation rules that chain related telemetry across sources using entity resolution and time windows" },
      { "id": "b", "text": "Single high-severity alert on any failed logon" },
      { "id": "c", "text": "Static threshold alerts based solely on total log volume" },
      { "id": "d", "text": "Manual review of every email-gateway log entry" }
    ],
    "correct": ["a"],
    "explanation": "Multi-stage attacks require correlation across disparate log sources with entity linking and temporal logic. Single failed-logon alerts generate noise; volume thresholds and pure manual review do not scale or provide timely detection."
  },
  {
    "id": 92,
    "qid": "CS0-004-MOD1-092",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "multiselect",
    "prompt": "Select THREE best practices when integrating Windows Event Logs and Sysmon into a SIEM for high-fidelity detection.",
    "scenario": "<div class=\"scenario-text\"><p>A detection-engineering team is optimizing log ingestion and rule performance for a large Windows estate.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enable command-line auditing and a tuned Sysmon configuration focused on high-value events" },
      { "id": "b", "text": "Normalize and enrich events with asset criticality, user context, and threat intelligence" },
      { "id": "c", "text": "Filter known noisy low-value events before or at ingestion" },
      { "id": "d", "text": "Ingest every possible Windows event ID without filtering" },
      { "id": "e", "text": "Disable all process-creation logging to reduce volume" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Tuned Sysmon plus command-line auditing supplies rich process telemetry. Enrichment improves prioritization. Filtering noise keeps the platform performant. Ingesting everything overwhelms storage and analysts; disabling process creation removes critical detection capability."
  },
  {
    "id": 93,
    "qid": "CS0-004-MOD1-093",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "dragdrop",
    "prompt": "Match each log source to the primary detection use case it best supports in a SIEM.",
    "scenario": "<div class=\"scenario-text\"><p>Analysts are mapping available log sources to detection use cases during a coverage review.</p></div>",
    "items": [
      { "id": "i1", "text": "Sysmon Event ID 1 and Event ID 3" },
      { "id": "i2", "text": "Windows Security 4624 / 4625 / 4769" },
      { "id": "i3", "text": "DNS query logs and passive DNS" }
    ],
    "zones": [
      { "id": "z1", "label": "Process creation and network-connection correlation" },
      { "id": "z2", "label": "Authentication and Kerberos anomalies" },
      { "id": "z3", "label": "C2 beaconing and domain-generation algorithm activity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Sysmon process and network events enable process-to-network correlation. Security and Kerberos logs detect authentication abuse. DNS logs are primary for identifying beaconing and DGA activity."
  },
  {
    "id": 94,
    "qid": "CS0-004-MOD1-094",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the SIEM pipeline component responsible for normalizing disparate log formats into a common schema before correlation rules are applied.",
    "scenario": "<div class=\"scenario-text\"><p>Review a typical enterprise SIEM data-pipeline architecture.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Raw Log Collectors / Agents", "x": 15, "y": 50 },
      { "id": "node2", "label": "Parsing / Normalization / Enrichment Layer", "x": 45, "y": 50 },
      { "id": "node3", "label": "Correlation & Analytics Engine", "x": 75, "y": 50 },
      { "id": "node4", "label": "Alert Console / SOAR", "x": 90, "y": 80 }
    ],
    "correct": ["node2"],
    "explanation": "The parsing, normalization, and enrichment layer converts vendor-specific formats into a common information model so that correlation rules can operate consistently across sources. Collectors only ship data; the analytics engine consumes already-normalized events."
  },
  {
    "id": 95,
    "qid": "CS0-004-MOD1-095",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Splunk SPL search that inverts the intended logic and will surface only expected administrative RDP activity.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is troubleshooting a correlation search designed to find successful RDP logons from unusual source hosts.</p></div>",
    "nodes": [
      { "id": "l1", "label": "index=wineventlog EventCode=4624" },
      { "id": "l2", "label": "| where Logon_Type=10" },
      { "id": "l3", "label": "| stats count by src_ip, dest_host, user" },
      { "id": "l4", "label": "| where count > 2" },
      { "id": "l5", "label": "| where src_ip IN (known_good_jump_hosts)" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "The final where clause retains only known-good jump hosts, which is the opposite of the detection goal. The search should exclude known-good sources or alert on sources that are NOT in the approved list."
  },
  {
    "id": 96,
    "qid": "CS0-004-MOD1-096",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "single",
    "prompt": "Which Wireshark display filter is most appropriate for isolating potential DNS-tunneling traffic in a large PCAP?",
    "scenario": "<div class=\"scenario-text\"><p>A threat hunter is investigating unusually high DNS query volumes from a single internal host to an external domain.</p></div>",
    "options": [
      { "id": "a", "text": "dns.qry.name len > 45 or (dns and frame.len > 200)" },
      { "id": "b", "text": "tcp.port == 80 and http.request" },
      { "id": "c", "text": "arp" },
      { "id": "d", "text": "icmp.type == 8" }
    ],
    "correct": ["a"],
    "explanation": "DNS tunneling often uses long subdomain labels and larger-than-normal DNS packets. Filtering on long query names or elevated frame length helps surface candidates. HTTP, ARP, and ICMP filters target unrelated protocols."
  },
  {
    "id": 97,
    "qid": "CS0-004-MOD1-097",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "multiselect",
    "prompt": "Select THREE indicators visible in packet captures that commonly suggest command-and-control beaconing.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is reviewing a full-packet capture taken after an endpoint detection of suspicious outbound connections.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Consistent time intervals between connections to the same external IP or domain" },
      { "id": "b", "text": "Small, similarly sized packets or HTTP requests with low variance" },
      { "id": "c", "text": "Use of non-standard ports or protocols that mimic legitimate traffic" },
      { "id": "d", "text": "Large file downloads from trusted software-update servers" },
      { "id": "e", "text": "Normal DHCP lease renewals" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Beaconing is characterized by regular timing, low-variance small payloads, and often protocol or port abuse for stealth. Legitimate software updates and DHCP activity do not match these patterns."
  },
  {
    "id": 98,
    "qid": "CS0-004-MOD1-098",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "dragdrop",
    "prompt": "Match each packet-analysis technique to the threat it is best suited to uncover.",
    "scenario": "<div class=\"scenario-text\"><p>A network threat hunter is selecting analysis methods based on observed symptoms.</p></div>",
    "items": [
      { "id": "i1", "text": "TLS certificate and JA3/JA3S fingerprint analysis" },
      { "id": "i2", "text": "DNS query length, entropy, and frequency analysis" },
      { "id": "i3", "text": "TCP stream reassembly and HTTP object extraction" }
    ],
    "zones": [
      { "id": "z1", "label": "Encrypted C2 using custom or abused TLS stacks" },
      { "id": "z2", "label": "DNS tunneling or DGA-based C2" },
      { "id": "z3", "label": "Clear-text or weakly encrypted malware download / exfiltration" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "JA3/JA3S and certificate details help identify malware TLS implementations. DNS metadata reveals tunneling and DGA. Stream reassembly and object extraction recover payloads from unencrypted or decryptable sessions."
  },
  {
    "id": 99,
    "qid": "CS0-004-MOD1-099",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the capture point that provides the most complete visibility into both inbound and outbound traffic for a critical server subnet without risking production impact.",
    "scenario": "<div class=\"scenario-text\"><p>The network diagram shows possible sensor locations relative to a server VLAN and core infrastructure.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Inline on the server access-switch uplink", "x": 20, "y": 40 },
      { "id": "node2", "label": "Passive TAP on the server VLAN uplink", "x": 50, "y": 40 },
      { "id": "node3", "label": "SPAN from a distant core switch only", "x": 80, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "A passive TAP on the server VLAN uplink delivers full-duplex, lossless capture of all traffic to and from the subnet without introducing a failure point. Inline placement risks outages. Distant SPAN ports often suffer from oversubscription and incomplete visibility."
  },
  {
    "id": 100,
    "qid": "CS0-004-MOD1-100",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the tcpdump command that will cause it to miss relevant traffic for an investigation of possible HTTPS C2 on non-standard ports.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is preparing a targeted packet capture on a Linux sensor.</p></div>",
    "nodes": [
      { "id": "l1", "label": "tcpdump -i eth0 -w capture.pcap -s 0" },
      { "id": "l2", "label": "  port 443" },
      { "id": "l3", "label": "  and host 10.10.5.20" }
    ],
    "correct": ["l2"],
    "selectCount": 1,
    "explanation": "Restricting the capture to port 443 will miss C2 that uses HTTPS on alternative ports (e.g., 8443, 4443, or high ports). Capturing with a broader filter and post-filtering is safer when the exact port is unknown."
  },
  {
    "id": 101,
    "qid": "CS0-004-MOD1-101",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "single",
    "prompt": "Which endpoint telemetry source provides the strongest signal for detecting process-injection techniques such as process hollowing?",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is prioritizing Sysmon and EDR event types after observing multiple process-injection attempts in a recent campaign.</p></div>",
    "options": [
      { "id": "a", "text": "Sysmon Event ID 8 (CreateRemoteThread) and Event ID 10 (ProcessAccess) combined with image and memory-region details" },
      { "id": "b", "text": "Windows Event ID 4624 only" },
      { "id": "c", "text": "Scheduled-task creation logs alone" },
      { "id": "d", "text": "USB device insertion events" }
    ],
    "correct": ["a"],
    "explanation": "CreateRemoteThread and ProcessAccess events, especially when enriched with target image and memory-protection information, are primary indicators of injection. Logon events, scheduled tasks, and USB events do not directly reveal injection behavior."
  },
  {
    "id": 102,
    "qid": "CS0-004-MOD1-102",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "multiselect",
    "prompt": "Select THREE behavioral indicators that, when observed together on an endpoint, strongly suggest credential-dumping activity.",
    "scenario": "<div class=\"scenario-text\"><p>An EDR alert has fired on a workstation. The analyst is correlating additional telemetry to confirm intent.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "ProcessAccess to lsass.exe with PROCESS_VM_READ or similar rights from a non-system process" },
      { "id": "b", "text": "Creation of a minidump or use of procdump/comsvcs.dll against lsass" },
      { "id": "c", "text": "Subsequent network connections or process creation consistent with pass-the-hash tools" },
      { "id": "d", "text": "Normal user opening Outlook and browsing internal SharePoint" },
      { "id": "e", "text": "Routine Windows Update service activity" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Access to LSASS with read permissions, explicit dumping tools or techniques, and follow-on lateral movement or credential use form a high-confidence chain. Legitimate user and update activity are expected noise."
  },
  {
    "id": 103,
    "qid": "CS0-004-MOD1-103",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "dragdrop",
    "prompt": "Map each endpoint behavior to the most likely ATT&CK technique category.",
    "scenario": "<div class=\"scenario-text\"><p>A behavioral-analytics rule set is being tuned against MITRE ATT&CK.</p></div>",
    "items": [
      { "id": "i1", "text": "Unusual parent-child relationship: winword.exe spawning powershell.exe with encoded command" },
      { "id": "i2", "text": "Repeated ProcessAccess to lsass.exe followed by network logons with the same credentials" },
      { "id": "i3", "text": "Service installation or scheduled task pointing to a binary in a user-writable directory" }
    ],
    "zones": [
      { "id": "z1", "label": "Execution / Command and Scripting Interpreter" },
      { "id": "z2", "label": "Credential Access / OS Credential Dumping" },
      { "id": "z3", "label": "Persistence" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Office spawning encoded PowerShell is classic malicious execution. LSASS access plus credential reuse indicates dumping. User-writable service or task paths are common persistence mechanisms."
  },
  {
    "id": 104,
    "qid": "CS0-004-MOD1-104",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the endpoint sensor placement that yields the highest-fidelity behavioral telemetry for detecting fileless malware and living-off-the-land techniques.",
    "scenario": "<div class=\"scenario-text\"><p>The architecture diagram shows different endpoint monitoring options available to the SOC.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Network-only IDS on the segment", "x": 20, "y": 40 },
      { "id": "node2", "label": "Kernel-level EDR / Sysmon with full process, image-load, and script-block logging", "x": 50, "y": 40 },
      { "id": "node3", "label": "Periodic full antivirus scans only", "x": 80, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "Kernel-level EDR or properly configured Sysmon plus PowerShell script-block and module logging captures the process tree, image loads, and script content required to detect fileless and LOLBin activity. Network IDS lacks process context. Periodic AV scans miss runtime behavior."
  },
  {
    "id": 105,
    "qid": "CS0-004-MOD1-105",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Sysmon configuration that is incorrectly set and will fail to capture command-line arguments critical for detecting encoded PowerShell.",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is reviewing a Sysmon configuration fragment used across the Windows fleet.</p></div>",
    "nodes": [
      { "id": "l1", "label": "<EventFiltering>" },
      { "id": "l2", "label": "  <ProcessCreate onmatch=\"include\">" },
      { "id": "l3", "label": "    <CommandLine condition=\"is\">true</CommandLine>" },
      { "id": "l4", "label": "    <Image condition=\"end with\">powershell.exe</Image>" },
      { "id": "l5", "label": "  </ProcessCreate>" },
      { "id": "l6", "label": "</EventFiltering>" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "The CommandLine element with condition=\"is\">true is invalid Sysmon syntax for enabling command-line logging. Command-line capture is controlled by the overall Sysmon schema and the presence of the CommandLine field in the event; the correct approach is to include ProcessCreate events and ensure the configuration does not exclude the CommandLine data."
  },
  {
    "id": 106,
    "qid": "CS0-004-MOD1-106",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "single",
    "prompt": "According to the Pyramid of Pain, which type of indicator is the most costly for an adversary to change and therefore provides the highest long-term defensive value when blocked or detected?",
    "scenario": "<div class=\"scenario-text\"><p>A threat-intelligence team is prioritizing which IoCs to operationalize into blocking and detection rules.</p></div>",
    "options": [
      { "id": "a", "text": "TTPs and behavioral patterns (tools, techniques, procedures)" },
      { "id": "b", "text": "File hashes (MD5/SHA-256)" },
      { "id": "c", "text": "IP addresses used for C2" },
      { "id": "d", "text": "Domain names registered for a campaign" }
    ],
    "correct": ["a"],
    "explanation": "The Pyramid of Pain places TTPs at the top: forcing an adversary to change tools and procedures is far more expensive than rotating hashes, IPs, or domains. Hash, IP, and domain indicators are lower on the pyramid and easily replaced."
  },
  {
    "id": 107,
    "qid": "CS0-004-MOD1-107",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "multiselect",
    "prompt": "Select THREE characteristics of high-quality threat intelligence that make it suitable for automated ingestion into a TIP and SOAR platform.",
    "scenario": "<div class=\"scenario-text\"><p>A SecOps team is evaluating commercial and open-source threat feeds for production use.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Structured format (STIX/TAXII, JSON) with consistent schema" },
      { "id": "b", "text": "Confidence scores, first-seen/last-seen timestamps, and context (malware family, campaign)" },
      { "id": "c", "text": "Machine-readable IoCs that can be automatically validated and aged out" },
      { "id": "d", "text": "Unstructured PDF reports only with no extractable indicators" },
      { "id": "e", "text": "Indicators with no expiration or confidence information" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Automation requires structured data, rich metadata for prioritization and context, and the ability to validate and retire stale indicators. Unstructured PDFs and indicators lacking confidence or aging data create operational burden and false positives."
  },
  {
    "id": 108,
    "qid": "CS0-004-MOD1-108",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "dragdrop",
    "prompt": "Map each Indicator of Compromise to its corresponding Pyramid of Pain tier.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is categorizing threat-intelligence indicators to evaluate the impact of remediation actions on adversary operations.</p></div>",
    "items": [
      { "id": "i1", "text": "SHA-256 File Hash" },
      { "id": "i2", "text": "C2 Server IPv4 Address" },
      { "id": "i3", "text": "Custom PowerShell Exfiltration Tool (TTP)" }
    ],
    "zones": [
      { "id": "z1", "label": "Trivial / Easy to Change" },
      { "id": "z2", "label": "Simple / Moderate Impact" },
      { "id": "z3", "label": "Tough / High Impact on Adversary" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "File hashes (SHA-256) are trivial to alter. IP addresses are simple to change. Dynamic TTPs and custom tooling require significant adversary effort to redesign when disrupted."
  },
  {
    "id": 109,
    "qid": "CS0-004-MOD1-109",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the component in a typical TIP architecture that is primarily responsible for automated indicator scoring, deduplication, and aging.",
    "scenario": "<div class=\"scenario-text\"><p>Review the logical architecture of an enterprise Threat Intelligence Platform integrated with the SOC.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Raw Feed Ingestion Connectors", "x": 15, "y": 40 },
      { "id": "node2", "label": "Normalization, Enrichment & Scoring Engine", "x": 50, "y": 40 },
      { "id": "node3", "label": "Analyst Workbench / Manual Review UI", "x": 85, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "The normalization, enrichment, and scoring engine automatically processes incoming indicators, removes duplicates, applies confidence and context, and manages aging. Ingestion connectors only bring data in; the workbench is for human analysis."
  },
  {
    "id": 110,
    "qid": "CS0-004-MOD1-110",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the STIX indicator field that is missing or incorrectly populated, reducing the operational value of this IoC for automated blocking.",
    "scenario": "<div class=\"scenario-text\"><p>A threat-intel analyst is reviewing a STIX 2.1 indicator object before publishing it to the production TIP.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"type\": \"indicator\"," },
      { "id": "l3", "label": "  \"spec_version\": \"2.1\"," },
      { "id": "l4", "label": "  \"id\": \"indicator--a1b2c3d4\"," },
      { "id": "l5", "label": "  \"created\": \"2026-09-01T10:00:00.000Z\"," },
      { "id": "l6", "label": "  \"pattern\": \"[file:hashes.'SHA-256' = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855']\"," },
      { "id": "l7", "label": "  \"valid_from\": \"2026-09-01T10:00:00.000Z\"" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l7"],
    "selectCount": 1,
    "explanation": "While valid_from is present, the indicator lacks a valid_until (or equivalent aging information) and confidence/score metadata. Without an expiration or confidence value, automated systems cannot safely age out or prioritize the IoC, leading to long-term false positives or missed prioritization."
  },
  {
    "id": 111,
    "qid": "CS0-004-MOD1-111",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "single",
    "prompt": "What is the primary operational benefit of integrating a SOAR platform with both the SIEM and endpoint detection and response (EDR) tools?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC manager is justifying a SOAR investment after measuring high mean time to respond (MTTR) on common alert types.</p></div>",
    "options": [
      { "id": "a", "text": "Automated enrichment, consistent playbook-driven response, and reduced MTTR for repeatable incident types" },
      { "id": "b", "text": "Complete elimination of the need for human analysts" },
      { "id": "c", "text": "Replacement of the SIEM with a ticketing system only" },
      { "id": "d", "text": "Automatic generation of new zero-day exploits" }
    ],
    "correct": ["a"],
    "explanation": "SOAR orchestrates enrichment from multiple tools and executes standardized response actions, dramatically reducing MTTR for well-defined playbooks. It augments analysts rather than replacing them, does not replace the SIEM, and has no role in generating exploits."
  },
  {
    "id": 112,
    "qid": "CS0-004-MOD1-112",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "multiselect",
    "prompt": "Select THREE capabilities that a mature SOAR implementation should provide when responding to a high-severity EDR alert for ransomware-like behavior.",
    "scenario": "<div class=\"scenario-text\"><p>The SOC is designing an automated response playbook for suspected ransomware activity on an endpoint.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Automatic isolation of the affected endpoint via EDR API" },
      { "id": "b", "text": "Enrichment of the alert with process tree, network connections, and threat-intelligence matches" },
      { "id": "c", "text": "Creation of a ticket with all enriched context and notification of the on-call analyst" },
      { "id": "d", "text": "Automatic deletion of all files on the endpoint without analyst review" },
      { "id": "e", "text": "Disabling the entire corporate Active Directory domain" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Isolation, enrichment, and ticket creation with context are standard, high-value automated actions that reduce dwell time while preserving evidence and requiring human oversight for destructive steps. Mass file deletion and domain-wide disruption are far too aggressive for automation."
  },
  {
    "id": 113,
    "qid": "CS0-004-MOD1-113",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "dragdrop",
    "prompt": "Match each SOAR component or practice to its primary purpose in a modern SecOps workflow.",
    "scenario": "<div class=\"scenario-text\"><p>A SOAR engineer is documenting the platform architecture for the security team.</p></div>",
    "items": [
      { "id": "i1", "text": "Playbooks / Runbooks" },
      { "id": "i2", "text": "Integration apps / connectors" },
      { "id": "i3", "text": "Case management & collaboration features" }
    ],
    "zones": [
      { "id": "z1", "label": "Codify repeatable investigation and response steps" },
      { "id": "z2", "label": "Enable bidirectional communication with SIEM, EDR, firewall, TIP, etc." },
      { "id": "z3", "label": "Provide a single pane for analyst work, notes, and hand-offs" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Playbooks encode the logic of response. Connectors provide the technical integrations. Case management keeps human and automated work organized and auditable."
  },
  {
    "id": 114,
    "qid": "CS0-004-MOD1-114",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the stage in a typical SOAR-driven incident-response workflow where AI/ML is most commonly applied today to reduce analyst workload.",
    "scenario": "<div class=\"scenario-text\"><p>The workflow diagram shows the major phases of an automated response pipeline.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Alert Ingestion", "x": 15, "y": 50 },
      { "id": "node2", "label": "Enrichment & Scoring / Prioritization", "x": 45, "y": 50 },
      { "id": "node3", "label": "Automated Containment Actions", "x": 75, "y": 50 },
      { "id": "node4", "label": "Final Human Approval for Destructive Actions", "x": 90, "y": 80 }
    ],
    "correct": ["node2"],
    "explanation": "Current practical AI/ML applications in SOAR focus on enrichment, entity extraction, similarity matching, and alert scoring/prioritization to help analysts focus on the highest-risk items. Containment and final destructive actions still typically require human oversight or strict playbook gates."
  },
  {
    "id": 115,
    "qid": "CS0-004-MOD1-115",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Python SOAR playbook snippet that introduces a dangerous race condition or incomplete isolation logic.",
    "scenario": "<div class=\"scenario-text\"><p>A SOAR engineer is reviewing a custom playbook that responds to high-severity EDR ransomware alerts.</p></div>",
    "nodes": [
      { "id": "l1", "label": "def respond_to_ransomware(alert):" },
      { "id": "l2", "label": "    host = alert.get('hostname')" },
      { "id": "l3", "label": "    # Enrich" },
      { "id": "l4", "label": "    intel = tip.lookup(alert.get('sha256'))" },
      { "id": "l5", "label": "    # Isolate" },
      { "id": "l6", "label": "    edr.isolate_host(host)" },
      { "id": "l7", "label": "    # Continue investigation even if isolation fails" },
      { "id": "l8", "label": "    processes = edr.get_process_tree(host)" },
      { "id": "l9", "label": "    return create_case(alert, intel, processes)" }
    ],
    "correct": ["l7"],
    "selectCount": 1,
    "explanation": "The comment and subsequent code path imply that investigation continues regardless of isolation success. In a ransomware scenario the playbook should verify isolation status and escalate or halt further automated actions if isolation fails, otherwise the host remains a risk while the playbook proceeds."
  },
  {
    "id": 116,
    "qid": "CS0-004-MOD1-116",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "multiselect",
    "prompt": "Select THREE metrics that best indicate the effectiveness of a continuous security monitoring program.",
    "scenario": "<div class=\"scenario-text\"><p>The CISO has asked the SOC leadership for objective measures of monitoring maturity.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Mean time to detect (MTTD) for high-severity incidents" },
      { "id": "b", "text": "Coverage percentage of critical ATT&CK techniques by detection rules" },
      { "id": "c", "text": "False-positive rate and alert volume per analyst" },
      { "id": "d", "text": "Number of vulnerability scanners deployed" },
      { "id": "e", "text": "Total count of log sources without regard to quality or use" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "MTTD, ATT&CK coverage, and alert quality (false-positive rate + volume) directly measure detection effectiveness and operational sustainability. Scanner count and raw log-source count are vanity metrics that do not reflect actual detection capability."
  },
  {
    "id": 117,
    "qid": "CS0-004-MOD1-117",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "single",
    "prompt": "When building a SIEM use case for detecting Pass-the-Hash activity, which combination of events provides the strongest correlation signal?",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is creating a new correlation rule after observing PtH in a recent red-team engagement.</p></div>",
    "options": [
      { "id": "a", "text": "Event ID 4624 (Logon Type 3 or 9) from a source that previously showed LSASS ProcessAccess, correlated with 4768/4769 Kerberos anomalies or NTLM authentications" },
      { "id": "b", "text": "Only Event ID 4624 with no additional context" },
      { "id": "c", "text": "Only DNS query logs" },
      { "id": "d", "text": "Only firewall accept logs for port 445" }
    ],
    "correct": ["a"],
    "explanation": "Strong PtH detection correlates credential access (LSASS ProcessAccess) with subsequent network logons (Type 3/9) and authentication anomalies. Single event types or unrelated DNS/firewall logs lack the necessary context and produce excessive noise."
  },
  {
    "id": 118,
    "qid": "CS0-004-MOD1-118",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "dragdrop",
    "prompt": "Match each network-analysis artifact to the investigative question it primarily answers.",
    "scenario": "<div class=\"scenario-text\"><p>A hunter is deciding which artifacts to extract from a large PCAP during an incident.</p></div>",
    "items": [
      { "id": "i1", "text": "JA3 / JA3S hashes and TLS certificate details" },
      { "id": "i2", "text": "DNS query names, lengths, and response codes" },
      { "id": "i3", "text": "Full TCP stream and extracted HTTP objects" }
    ],
    "zones": [
      { "id": "z1", "label": "Is this encrypted session using a known malware TLS fingerprint?" },
      { "id": "z2", "label": "Is there evidence of tunneling or DGA activity?" },
      { "id": "z3", "label": "What payload or commands were transferred in clear text?" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "JA3/JA3S and certificates identify malware TLS stacks. DNS metadata reveals tunneling and algorithmically generated domains. Stream reassembly recovers actual transferred content when encryption is absent or broken."
  },
  {
    "id": 119,
    "qid": "CS0-004-MOD1-119",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "multiselect",
    "prompt": "Select THREE endpoint telemetry sources that should be enabled to support high-quality behavioral analytics for detecting living-off-the-land and fileless attacks.",
    "scenario": "<div class=\"scenario-text\"><p>An organization is hardening its Windows endpoints and EDR configuration after multiple LOLBin-based incidents.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Process creation with full command line (Sysmon 1 / 4688)" },
      { "id": "b", "text": "Image/DLL load events and script-block logging" },
      { "id": "c", "text": "ProcessAccess and CreateRemoteThread events targeting sensitive processes" },
      { "id": "d", "text": "Only successful logon events with no process context" },
      { "id": "e", "text": "Disabling all PowerShell logging" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Process creation with command lines, image/script load events, and process-access/injection telemetry form the core of behavioral detection for LOLBins and fileless techniques. Logon-only data and disabled PowerShell logging remove essential visibility."
  },
  {
    "id": 120,
    "qid": "CS0-004-MOD1-120",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "single",
    "prompt": "When implementing AI-assisted alert triage in a SOAR platform, what is the most important safeguard to maintain?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC is piloting an AI model that scores and recommends actions on incoming SIEM alerts.</p></div>",
    "options": [
      { "id": "a", "text": "Human-in-the-loop approval for high-impact or irreversible containment actions combined with continuous model-performance monitoring" },
      { "id": "b", "text": "Fully autonomous execution of all recommended actions including host wipes" },
      { "id": "c", "text": "Complete removal of all analyst review steps" },
      { "id": "d", "text": "Training the model exclusively on a single week of historical alerts with no validation set" }
    ],
    "correct": ["a"],
    "explanation": "AI can accelerate enrichment and prioritization, but high-impact actions (isolation, blocking, account disablement, etc.) require human oversight and the model’s performance must be continuously measured to detect drift or bias. Fully autonomous destructive actions and elimination of review introduce unacceptable risk; poor training practices produce unreliable models."
  },
  {
    "id": 121,
    "qid": "CS0-004-MOD1-121",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "single",
    "prompt": "Which continuous monitoring technique is most effective for detecting the initial stages of a supply-chain compromise that abuses legitimate software update mechanisms?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC is enhancing detection after a near-miss incident in which a trojanized updater executed with valid digital signatures.</p></div>",
    "options": [
      { "id": "a", "text": "Behavioral analytics on process parent-child relationships, network destinations, and unexpected child processes of known updaters" },
      { "id": "b", "text": "Weekly full antivirus signature scans only" },
      { "id": "c", "text": "Firewall accept-log volume thresholds" },
      { "id": "d", "text": "Monthly vulnerability assessment reports" }
    ],
    "correct": ["a"],
    "explanation": "Supply-chain abuse of legitimate updaters is best detected by behavioral deviations in process trees and network connections rather than signature matching or static reports. Signed binaries evade traditional AV, and volume thresholds lack process context."
  },
  {
    "id": 122,
    "qid": "CS0-004-MOD1-122",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "multiselect",
    "prompt": "Select THREE continuous-monitoring sources that provide early warning of ransomware staging activity before encryption begins.",
    "scenario": "<div class=\"scenario-text\"><p>An organization is strengthening pre-encryption detection after observing shadow-copy deletion and reconnaissance in a prior incident.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Process-creation telemetry showing vssadmin, wmic, or PowerShell commands that delete volume shadow copies" },
      { "id": "b", "text": "Unusual spikes in file-system change rates or mass file-rename activity" },
      { "id": "c", "text": "Outbound connections to known ransomware C2 or payment infrastructure" },
      { "id": "d", "text": "Routine Windows Update success events" },
      { "id": "e", "text": "Normal interactive logons during business hours" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Shadow-copy deletion, abnormal file-system change rates, and C2 communication are strong pre-encryption indicators. Routine update and normal logon events are expected noise."
  },
  {
    "id": 123,
    "qid": "CS0-004-MOD1-123",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "dragdrop",
    "prompt": "Match each continuous-monitoring objective to the most appropriate primary telemetry source.",
    "scenario": "<div class=\"scenario-text\"><p>A detection-engineering team is aligning monitoring objectives with available data sources in a hybrid environment.</p></div>",
    "items": [
      { "id": "i1", "text": "Detect living-off-the-land binary abuse" },
      { "id": "i2", "text": "Identify anomalous east-west authentication patterns" },
      { "id": "i3", "text": "Spot DNS beaconing or tunneling" }
    ],
    "zones": [
      { "id": "z1", "label": "Sysmon / EDR process creation + command-line" },
      { "id": "z2", "label": "Windows Security / Kerberos authentication logs" },
      { "id": "z3", "label": "DNS query logs or passive DNS" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "LOLBin abuse is visible in process and command-line telemetry. Authentication anomalies appear in Security and Kerberos logs. DNS beaconing and tunneling are identified through DNS metadata."
  },
  {
    "id": 124,
    "qid": "CS0-004-MOD1-124",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the monitoring placement that best enables continuous detection of lateral movement between application tiers without introducing inline failure risk.",
    "scenario": "<div class=\"scenario-text\"><p>Examine the simplified multi-tier application architecture. The SOC requires high-fidelity visibility into internal traffic.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Inline WAF on the web tier only", "x": 20, "y": 30 },
      { "id": "node2", "label": "Passive TAP / SPAN on the core switch linking tiers", "x": 50, "y": 50 },
      { "id": "node3", "label": "Endpoint agents with no network visibility", "x": 80, "y": 30 },
      { "id": "node4", "label": "Perimeter firewall only", "x": 50, "y": 80 }
    ],
    "correct": ["node2"],
    "explanation": "A passive TAP or properly engineered SPAN on the core provides full visibility into east-west traffic between tiers without adding latency or a single point of failure. Inline WAF, endpoint-only, and perimeter-only placements miss internal lateral movement."
  },
  {
    "id": 125,
    "qid": "CS0-004-MOD1-125",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Sigma rule that will cause it to miss encoded PowerShell execution because of an incomplete or brittle condition.",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is reviewing a Sigma rule intended to catch encoded PowerShell launched by Office applications.</p></div>",
    "nodes": [
      { "id": "l1", "label": "title: Encoded PowerShell from Office" },
      { "id": "l2", "label": "logsource:" },
      { "id": "l3", "label": "  product: windows" },
      { "id": "l4", "label": "  category: process_creation" },
      { "id": "l5", "label": "detection:" },
      { "id": "l6", "label": "  selection:" },
      { "id": "l7", "label": "    ParentImage|endswith:" },
      { "id": "l8", "label": "      - '\\winword.exe'" },
      { "id": "l9", "label": "      - '\\excel.exe'" },
      { "id": "l10", "label": "    CommandLine|contains: '-enc'" },
      { "id": "l11", "label": "  condition: selection" }
    ],
    "correct": ["l10"],
    "selectCount": 1,
    "explanation": "While '-enc' is common, adversaries also use '-EncodedCommand', '-e', and mixed-case variants. A more robust rule would use a case-insensitive regex or multiple contains conditions covering the common short and long forms. Relying solely on the literal '-enc' allows easy evasion."
  },
  {
    "id": 126,
    "qid": "CS0-004-MOD1-126",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "single",
    "prompt": "Which architectural pattern most effectively limits the impact of a compromised user workstation while preserving required access to internal applications?",
    "scenario": "<div class=\"scenario-text\"><p>Following several ransomware incidents that spread rapidly from user devices, the architecture team is redesigning internal access controls.</p></div>",
    "options": [
      { "id": "a", "text": "Zero Trust Network Access (ZTNA) with continuous verification and least-privilege application access" },
      { "id": "b", "text": "Flat Layer-2 network with unrestricted east-west communication" },
      { "id": "c", "text": "Single large VLAN for all user and server systems" },
      { "id": "d", "text": "Perimeter firewall only with no internal controls" }
    ],
    "correct": ["a"],
    "explanation": "ZTNA enforces identity-, device-, and context-aware access to individual applications, sharply reducing lateral movement opportunities. Flat networks and perimeter-only designs maximize blast radius."
  },
  {
    "id": 127,
    "qid": "CS0-004-MOD1-127",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "multiselect",
    "prompt": "Select THREE controls that improve both detection and containment of lateral movement in a hybrid on-premises / cloud environment.",
    "scenario": "<div class=\"scenario-text\"><p>A financial services organization is extending its security architecture into AWS while maintaining on-premises Active Directory.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "VPC Flow Logs and Traffic Mirroring on critical subnets" },
      { "id": "b", "text": "Least-privilege security groups and network ACLs between tiers" },
      { "id": "c", "text": "Centralized identity with conditional access and continuous validation" },
      { "id": "d", "text": "Disabling CloudTrail to reduce storage costs" },
      { "id": "e", "text": "Using one shared security group for all production workloads" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "VPC Flow Logs and Traffic Mirroring provide network telemetry. Least-privilege security groups/NACLs limit movement. Centralized identity with continuous validation supports Zero Trust. Disabling CloudTrail removes critical audit data. Shared security groups create excessive permissions."
  },
  {
    "id": 128,
    "qid": "CS0-004-MOD1-128",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "dragdrop",
    "prompt": "Map each architecture control to its primary security benefit in a modern SecOps architecture.",
    "scenario": "<div class=\"scenario-text\"><p>An architect is documenting the purpose of key controls for the security operations team.</p></div>",
    "items": [
      { "id": "i1", "text": "Network TAP / SPAN for IDS/IPS" },
      { "id": "i2", "text": "Jump hosts / Privileged Access Workstations" },
      { "id": "i3", "text": "Micro-segmentation / Zero Trust Network Access" }
    ],
    "zones": [
      { "id": "z1", "label": "Provides passive, high-fidelity traffic visibility without inline risk" },
      { "id": "z2", "label": "Reduces attack surface for administrative access" },
      { "id": "z3", "label": "Limits lateral movement by enforcing least-privilege flows" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Network TAPs/SPAN give passive full-packet visibility. Jump hosts and PAWs constrain privileged access. Micro-segmentation and ZTNA enforce identity- and context-aware least privilege, limiting east-west movement."
  },
  {
    "id": 129,
    "qid": "CS0-004-MOD1-129",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the component that should be deployed out-of-band to provide full-duplex packet capture for threat hunting and forensics without risk of network disruption.",
    "scenario": "<div class=\"scenario-text\"><p>Examine the enterprise edge architecture diagram. The SOC requires zero packet loss for sensor inspection without introducing inline failure points.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Inline Firewall", "x": 20, "y": 40 },
      { "id": "node2", "label": "Passive Network TAP", "x": 50, "y": 40 },
      { "id": "node3", "label": "SPAN Port Mirror Switch", "x": 80, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "A physical Network TAP (node2) provides a true out-of-band full-duplex copy of traffic without relying on switch CPU resources like SPAN ports or introducing inline latency/failure vectors like firewalls."
  },
  {
    "id": 130,
    "qid": "CS0-004-MOD1-130",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the configuration line that creates an overly permissive security group rule allowing unrestricted lateral movement.",
    "scenario": "<div class=\"scenario-text\"><p>A cloud security engineer is reviewing an AWS security group attached to a critical application tier.</p></div>",
    "nodes": [
      { "id": "l1", "label": "SecurityGroup: AppTierSG" },
      { "id": "l2", "label": "  Ingress:" },
      { "id": "l3", "label": "    - FromPort: 443" },
      { "id": "l4", "label": "      ToPort: 443" },
      { "id": "l5", "label": "      CidrIp: 10.10.0.0/16" },
      { "id": "l6", "label": "    - FromPort: 0" },
      { "id": "l7", "label": "      ToPort: 65535" },
      { "id": "l8", "label": "      CidrIp: 0.0.0.0/0" },
      { "id": "l9", "label": "  Egress:" },
      { "id": "l10", "label": "    - CidrIp: 0.0.0.0/0" }
    ],
    "correct": ["l6"],
    "selectCount": 1,
    "explanation": "The rule allowing ports 0-65535 from 0.0.0.0/0 is fully open and permits unrestricted inbound access from the internet, enabling easy lateral movement and external compromise. The HTTPS rule limited to the internal CIDR is appropriately scoped."
  },
  {
    "id": 131,
    "qid": "CS0-004-MOD1-131",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "single",
    "prompt": "Which SIEM design practice most effectively reduces alert fatigue while preserving detection of multi-stage attacks?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC is experiencing high volumes of low-fidelity alerts and missing complex attack chains that span multiple log sources.</p></div>",
    "options": [
      { "id": "a", "text": "Multi-event correlation rules that link related telemetry across sources using entity resolution and time windows" },
      { "id": "b", "text": "Alerting on every individual failed logon event" },
      { "id": "c", "text": "Static volume-threshold alerts with no context" },
      { "id": "d", "text": "Manual review of every raw log entry" }
    ],
    "correct": ["a"],
    "explanation": "Correlation across sources with entity linking and temporal logic surfaces multi-stage activity while suppressing isolated noise. Single-event and pure-volume alerts generate fatigue; pure manual review does not scale."
  },
  {
    "id": 132,
    "qid": "CS0-004-MOD1-132",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "multiselect",
    "prompt": "Select THREE best practices for integrating Windows Event Logs and Sysmon into a SIEM for high-fidelity detection engineering.",
    "scenario": "<div class=\"scenario-text\"><p>A detection team is optimizing ingestion and rule performance for a large Windows environment.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enable command-line auditing and a tuned Sysmon configuration focused on high-value events" },
      { "id": "b", "text": "Normalize and enrich events with asset criticality, user context, and threat intelligence" },
      { "id": "c", "text": "Filter known noisy low-value events before or at ingestion" },
      { "id": "d", "text": "Ingest every possible Windows event ID without filtering" },
      { "id": "e", "text": "Disable process creation logging to reduce volume" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Tuned Sysmon plus command-line auditing provides rich process telemetry. Enrichment improves prioritization and reduces false positives. Filtering noise at or before ingestion keeps the SIEM performant. Ingesting everything overwhelms storage and analysts; disabling process creation removes critical detection capability."
  },
  {
    "id": 133,
    "qid": "CS0-004-MOD1-133",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "dragdrop",
    "prompt": "Match each log source to the primary detection use case it best supports.",
    "scenario": "<div class=\"scenario-text\"><p>Analysts are mapping available log sources to detection use cases during a coverage assessment.</p></div>",
    "items": [
      { "id": "i1", "text": "Sysmon Event ID 1 and Event ID 3" },
      { "id": "i2", "text": "Windows Security 4624 / 4625 / 4769" },
      { "id": "i3", "text": "DNS query logs and passive DNS" }
    ],
    "zones": [
      { "id": "z1", "label": "Process creation and network connection correlation" },
      { "id": "z2", "label": "Authentication and Kerberos anomalies" },
      { "id": "z3", "label": "C2 beaconing and domain-generation algorithm detection" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Sysmon 1 (process create) and 3 (network connection) enable process-to-network correlation. Security logon and Kerberos events detect authentication abuse. DNS logs are primary for identifying beaconing and DGA activity."
  },
  {
    "id": 134,
    "qid": "CS0-004-MOD1-134",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the SIEM component responsible for normalizing disparate log formats into a common schema before correlation rules are applied.",
    "scenario": "<div class=\"scenario-text\"><p>Review a typical SIEM data pipeline architecture used in enterprise SecOps.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Raw Log Collectors / Agents", "x": 15, "y": 50 },
      { "id": "node2", "label": "Parsing / Normalization / Enrichment Layer", "x": 45, "y": 50 },
      { "id": "node3", "label": "Correlation & Analytics Engine", "x": 75, "y": 50 },
      { "id": "node4", "label": "Alert Console / SOAR", "x": 90, "y": 80 }
    ],
    "correct": ["node2"],
    "explanation": "The parsing, normalization, and enrichment layer converts vendor-specific formats into a common information model so that correlation rules can operate consistently across sources. Collectors only ship data; the analytics engine consumes already-normalized events."
  },
  {
    "id": 135,
    "qid": "CS0-004-MOD1-135",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Splunk SPL search that contains a logic error preventing detection of successful lateral movement via RDP from unusual sources.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is troubleshooting a correlation search intended to find successful RDP logons from unusual source hosts.</p></div>",
    "nodes": [
      { "id": "l1", "label": "index=wineventlog EventCode=4624" },
      { "id": "l2", "label": "| where Logon_Type=10" },
      { "id": "l3", "label": "| stats count by src_ip, dest_host, user" },
      { "id": "l4", "label": "| where count > 5" },
      { "id": "l5", "label": "| where src_ip IN (known_good_jump_hosts)" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "The final where clause filters to only known-good jump hosts, which inverts the intended logic. The search should exclude or alert on sources that are NOT in the known-good list. As written it only surfaces expected administrative activity."
  },
  {
    "id": 136,
    "qid": "CS0-004-MOD1-136",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "single",
    "prompt": "Which Wireshark display filter is most useful for surfacing potential DNS tunneling candidates in a large PCAP?",
    "scenario": "<div class=\"scenario-text\"><p>A threat hunter is investigating elevated DNS query volume from a single internal host to an external domain.</p></div>",
    "options": [
      { "id": "a", "text": "dns.qry.name len > 40 or (dns and frame.len > 200)" },
      { "id": "b", "text": "tcp.port == 80 and http.request.method == GET" },
      { "id": "c", "text": "arp.opcode == 1" },
      { "id": "d", "text": "icmp.type == 8" }
    ],
    "correct": ["a"],
    "explanation": "DNS tunneling frequently uses long subdomain labels and larger-than-normal packets. Filtering on query-name length or elevated frame length helps isolate candidates. HTTP, ARP, and ICMP filters target unrelated traffic."
  },
  {
    "id": 137,
    "qid": "CS0-004-MOD1-137",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "multiselect",
    "prompt": "Select THREE packet-capture indicators that commonly suggest command-and-control beaconing.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is reviewing a full-packet capture after an endpoint detection of suspicious outbound connections.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Consistent inter-connection intervals to the same external destination" },
      { "id": "b", "text": "Low-variance packet or request sizes" },
      { "id": "c", "text": "Use of non-standard ports or protocol mimicry (DNS, HTTPS on unusual ports)" },
      { "id": "d", "text": "Large legitimate software-update downloads from trusted CDNs" },
      { "id": "e", "text": "Normal DHCP lease-renewal traffic" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Beaconing is characterized by regular timing, low size variance, and often stealthy protocol or port choices. Legitimate updates and DHCP activity do not match these patterns."
  },
  {
    "id": 138,
    "qid": "CS0-004-MOD1-138",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "dragdrop",
    "prompt": "Match each packet-analysis technique to the threat it is best suited to uncover.",
    "scenario": "<div class=\"scenario-text\"><p>A network hunter is selecting analysis methods based on observed symptoms.</p></div>",
    "items": [
      { "id": "i1", "text": "JA3/JA3S fingerprint and TLS certificate analysis" },
      { "id": "i2", "text": "DNS query length, entropy, and frequency analysis" },
      { "id": "i3", "text": "TCP stream reassembly and HTTP object extraction" }
    ],
    "zones": [
      { "id": "z1", "label": "Encrypted C2 using custom or abused TLS stacks" },
      { "id": "z2", "label": "DNS tunneling or DGA-based C2" },
      { "id": "z3", "label": "Clear-text or decryptable malware download / exfiltration" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "JA3/JA3S and certificates identify malware TLS implementations. DNS metadata reveals tunneling and DGA. Stream reassembly recovers payloads from unencrypted or breakable sessions."
  },
  {
    "id": 139,
    "qid": "CS0-004-MOD1-139",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the capture point that provides the most complete visibility into traffic for a critical server subnet without risking production impact.",
    "scenario": "<div class=\"scenario-text\"><p>The network diagram shows possible sensor locations relative to a server VLAN.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Inline on the server access-switch uplink", "x": 20, "y": 40 },
      { "id": "node2", "label": "Passive TAP on the server VLAN uplink", "x": 50, "y": 40 },
      { "id": "node3", "label": "SPAN from a distant, oversubscribed core switch", "x": 80, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "A passive TAP on the server VLAN uplink delivers full-duplex, lossless capture of all traffic to and from the subnet without introducing a failure point. Inline placement risks outages; distant SPAN ports frequently suffer from oversubscription and incomplete visibility."
  },
  {
    "id": 140,
    "qid": "CS0-004-MOD1-140",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the tcpdump filter element that will cause the capture to miss HTTPS C2 traffic running on non-standard ports.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is preparing a targeted packet capture on a Linux sensor for a suspected C2 investigation.</p></div>",
    "nodes": [
      { "id": "l1", "label": "tcpdump -i eth0 -w capture.pcap -s 0" },
      { "id": "l2", "label": "  port 443" },
      { "id": "l3", "label": "  and host 10.10.5.20" }
    ],
    "correct": ["l2"],
    "selectCount": 1,
    "explanation": "Restricting the capture to port 443 will miss C2 that uses HTTPS on alternative ports (8443, 4443, high ports, etc.). Capturing more broadly and filtering post-capture is safer when the exact port is unknown."
  },
  {
    "id": 141,
    "qid": "CS0-004-MOD1-141",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "single",
    "prompt": "Which endpoint telemetry combination provides the strongest signal for detecting process-injection techniques such as process hollowing or reflective DLL injection?",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is prioritizing Sysmon and EDR event types after multiple confirmed process-injection incidents.</p></div>",
    "options": [
      { "id": "a", "text": "Sysmon Event ID 8 (CreateRemoteThread) and Event ID 10 (ProcessAccess) enriched with target image and memory-region details" },
      { "id": "b", "text": "Windows Event ID 4624 alone" },
      { "id": "c", "text": "Scheduled-task creation logs only" },
      { "id": "d", "text": "USB device insertion events" }
    ],
    "correct": ["a"],
    "explanation": "CreateRemoteThread and ProcessAccess events, especially when enriched with target process and memory information, are primary indicators of injection. Logon, scheduled-task, and USB events do not directly reveal injection behavior."
  },
  {
    "id": 142,
    "qid": "CS0-004-MOD1-142",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "multiselect",
    "prompt": "Select THREE behavioral indicators that, when observed together, strongly suggest credential-dumping activity on an endpoint.",
    "scenario": "<div class=\"scenario-text\"><p>An EDR alert has fired. The analyst is correlating additional telemetry to confirm intent before escalating.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "ProcessAccess to lsass.exe with PROCESS_VM_READ or similar rights from a non-system process" },
      { "id": "b", "text": "Creation of a minidump or use of procdump / comsvcs.dll against lsass" },
      { "id": "c", "text": "Subsequent network logons or process creation consistent with pass-the-hash tooling" },
      { "id": "d", "text": "Normal user opening Outlook and accessing internal SharePoint" },
      { "id": "e", "text": "Routine Windows Update service activity" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "LSASS access with read permissions, explicit dumping techniques, and follow-on credential reuse form a high-confidence chain. Legitimate user and update activity are expected noise."
  },
  {
    "id": 143,
    "qid": "CS0-004-MOD1-143",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "dragdrop",
    "prompt": "Map each observed endpoint behavior to the most likely MITRE ATT&CK technique category.",
    "scenario": "<div class=\"scenario-text\"><p>A behavioral analytics rule set is being tuned against ATT&CK.</p></div>",
    "items": [
      { "id": "i1", "text": "winword.exe spawning powershell.exe with an encoded command" },
      { "id": "i2", "text": "Repeated ProcessAccess to lsass.exe followed by network logons using the same credentials" },
      { "id": "i3", "text": "Service or scheduled-task installation pointing to a binary in a user-writable path" }
    ],
    "zones": [
      { "id": "z1", "label": "Execution / Command and Scripting Interpreter" },
      { "id": "z2", "label": "Credential Access / OS Credential Dumping" },
      { "id": "z3", "label": "Persistence" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Office spawning encoded PowerShell is classic malicious execution. LSASS access plus credential reuse indicates dumping. User-writable service or task paths are common persistence mechanisms."
  },
  {
    "id": 144,
    "qid": "CS0-004-MOD1-144",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the endpoint monitoring approach that yields the highest-fidelity behavioral telemetry for detecting fileless malware and living-off-the-land techniques.",
    "scenario": "<div class=\"scenario-text\"><p>The architecture diagram shows different endpoint monitoring options available to the SOC.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Network-only IDS on the segment", "x": 20, "y": 40 },
      { "id": "node2", "label": "Kernel-level EDR / Sysmon with process, image-load, and script-block logging", "x": 50, "y": 40 },
      { "id": "node3", "label": "Periodic full antivirus scans only", "x": 80, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "Kernel-level EDR or properly configured Sysmon plus PowerShell script-block and module logging captures the process tree, image loads, and script content required to detect fileless and LOLBin activity. Network IDS lacks process context; periodic AV scans miss runtime behavior."
  },
  {
    "id": 145,
    "qid": "CS0-004-MOD1-145",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the Sysmon configuration line that is incorrectly written and will fail to capture command-line arguments needed for encoded-PowerShell detection.",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is reviewing a Sysmon configuration fragment used across the Windows fleet.</p></div>",
    "nodes": [
      { "id": "l1", "label": "<EventFiltering>" },
      { "id": "l2", "label": "  <ProcessCreate onmatch=\"include\">" },
      { "id": "l3", "label": "    <CommandLine condition=\"is\">true</CommandLine>" },
      { "id": "l4", "label": "    <Image condition=\"end with\">powershell.exe</Image>" },
      { "id": "l5", "label": "  </ProcessCreate>" },
      { "id": "l6", "label": "</EventFiltering>" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "The CommandLine element with condition=\"is\">true is invalid Sysmon syntax for enabling command-line logging. Command-line data is captured when ProcessCreate events are included and the configuration does not exclude the field; the given condition does not enable the required telemetry."
  },
  {
    "id": 146,
    "qid": "CS0-004-MOD1-146",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "single",
    "prompt": "According to the Pyramid of Pain, which class of indicator forces the greatest cost on an adversary when successfully detected or blocked?",
    "scenario": "<div class=\"scenario-text\"><p>A threat-intelligence team is prioritizing which indicators to operationalize into blocking and detection content.</p></div>",
    "options": [
      { "id": "a", "text": "TTPs and behavioral patterns (tools, techniques, procedures)" },
      { "id": "b", "text": "File hashes (MD5 / SHA-256)" },
      { "id": "c", "text": "IP addresses used for C2" },
      { "id": "d", "text": "Domain names registered for a short-lived campaign" }
    ],
    "correct": ["a"],
    "explanation": "The Pyramid of Pain places TTPs at the apex: forcing an adversary to change tools and procedures is far more expensive than rotating hashes, IPs, or domains. Lower-tier indicators are easily replaced."
  },
  {
    "id": 147,
    "qid": "CS0-004-MOD1-147",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "multiselect",
    "prompt": "Select THREE characteristics of high-quality threat intelligence that make it suitable for automated ingestion into a TIP and SOAR platform.",
    "scenario": "<div class=\"scenario-text\"><p>A SecOps team is evaluating commercial and open-source threat feeds for production use.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Structured format (STIX/TAXII or well-defined JSON) with consistent schema" },
      { "id": "b", "text": "Confidence scores, first-seen / last-seen timestamps, and campaign or malware-family context" },
      { "id": "c", "text": "Machine-readable IoCs that can be automatically validated and aged out" },
      { "id": "d", "text": "Unstructured PDF reports only with no extractable indicators" },
      { "id": "e", "text": "Indicators lacking expiration or confidence information" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Automation requires structured data, rich metadata for prioritization, and the ability to validate and retire stale indicators. Unstructured PDFs and indicators without confidence or aging data create operational burden and false positives."
  },
  {
    "id": 148,
    "qid": "CS0-004-MOD1-148",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "dragdrop",
    "prompt": "Map each Indicator of Compromise to its correct tier on the Pyramid of Pain.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is classifying indicators from a recent APT report to decide prioritization for detection engineering.</p></div>",
    "items": [
      { "id": "i1", "text": "SHA-256 hash of a dropper binary" },
      { "id": "i2", "text": "C2 IP address observed for less than 72 hours" },
      { "id": "i3", "text": "Custom PowerShell stager and lateral movement via WMI" }
    ],
    "zones": [
      { "id": "z1", "label": "Hash Values (Trivial)" },
      { "id": "z2", "label": "IP Addresses (Easy)" },
      { "id": "z3", "label": "TTPs (Tough)" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "File hashes are trivial for adversaries to change. IP addresses are easy to rotate. Custom tooling and specific techniques require significant re-engineering when disrupted."
  },
  {
    "id": 149,
    "qid": "CS0-004-MOD1-149",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the TIP component primarily responsible for automated indicator scoring, deduplication, enrichment, and aging.",
    "scenario": "<div class=\"scenario-text\"><p>Review the logical architecture of an enterprise Threat Intelligence Platform integrated with the SOC.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Raw Feed Ingestion Connectors", "x": 15, "y": 40 },
      { "id": "node2", "label": "Normalization, Enrichment & Scoring Engine", "x": 50, "y": 40 },
      { "id": "node3", "label": "Analyst Workbench / Manual Review UI", "x": 85, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "The normalization, enrichment, and scoring engine automatically processes incoming indicators, removes duplicates, applies confidence and context, and manages aging. Ingestion connectors only bring data in; the workbench supports human analysis."
  },
  {
    "id": 150,
    "qid": "CS0-004-MOD1-150",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the STIX indicator property that is missing or insufficient, reducing the operational value of this IoC for automated blocking and aging.",
    "scenario": "<div class=\"scenario-text\"><p>A threat-intel analyst is reviewing a STIX 2.1 indicator object before publishing it to the production TIP.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"type\": \"indicator\"," },
      { "id": "l3", "label": "  \"spec_version\": \"2.1\"," },
      { "id": "l4", "label": "  \"id\": \"indicator--a1b2c3d4-e5f6\"," },
      { "id": "l5", "label": "  \"created\": \"2026-09-01T10:00:00.000Z\"," },
      { "id": "l6", "label": "  \"pattern\": \"[file:hashes.'SHA-256' = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855']\"," },
      { "id": "l7", "label": "  \"valid_from\": \"2026-09-01T10:00:00.000Z\"" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l7"],
    "selectCount": 1,
    "explanation": "While valid_from is present, the indicator lacks a valid_until (or equivalent aging) and confidence/score metadata. Without expiration or confidence information, automated systems cannot safely age out or prioritize the IoC."
  },
  {
    "id": 151,
    "qid": "CS0-004-MOD1-151",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "single",
    "prompt": "What is the primary operational benefit of integrating a SOAR platform with both the SIEM and EDR tools?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC manager is justifying a SOAR investment after measuring high mean time to respond on common alert types.</p></div>",
    "options": [
      { "id": "a", "text": "Automated enrichment, consistent playbook-driven response, and reduced MTTR for repeatable incident types" },
      { "id": "b", "text": "Complete elimination of the need for human analysts" },
      { "id": "c", "text": "Replacement of the SIEM with a simple ticketing system" },
      { "id": "d", "text": "Automatic generation of new zero-day exploits" }
    ],
    "correct": ["a"],
    "explanation": "SOAR orchestrates enrichment from multiple tools and executes standardized response actions, reducing MTTR for well-defined playbooks. It augments analysts rather than replacing them, does not replace the SIEM, and has no role in generating exploits."
  },
  {
    "id": 152,
    "qid": "CS0-004-MOD1-152",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "multiselect",
    "prompt": "Select THREE capabilities a mature SOAR implementation should provide when responding to a high-severity EDR alert for ransomware-like behavior.",
    "scenario": "<div class=\"scenario-text\"><p>The SOC is designing an automated response playbook for suspected ransomware activity on an endpoint.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Automatic isolation of the affected endpoint via the EDR API" },
      { "id": "b", "text": "Enrichment of the alert with process tree, network connections, and threat-intelligence matches" },
      { "id": "c", "text": "Creation of a ticket containing all enriched context and notification of the on-call analyst" },
      { "id": "d", "text": "Automatic deletion of every file on the endpoint without analyst review" },
      { "id": "e", "text": "Immediate disablement of the entire corporate Active Directory domain" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Isolation, enrichment, and ticket creation with context are standard high-value automated actions that reduce dwell time while preserving evidence and requiring human oversight for destructive steps. Mass file deletion and domain-wide disruption are far too aggressive for automation."
  },
  {
    "id": 153,
    "qid": "CS0-004-MOD1-153",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "dragdrop",
    "prompt": "Match each SOAR component to its primary purpose in a modern SecOps workflow.",
    "scenario": "<div class=\"scenario-text\"><p>A SOAR engineer is documenting the platform architecture for the security team.</p></div>",
    "items": [
      { "id": "i1", "text": "Playbooks / Runbooks" },
      { "id": "i2", "text": "Integration apps / connectors" },
      { "id": "i3", "text": "Case management and collaboration features" }
    ],
    "zones": [
      { "id": "z1", "label": "Codify repeatable investigation and response steps" },
      { "id": "z2", "label": "Enable bidirectional communication with SIEM, EDR, firewall, TIP, etc." },
      { "id": "z3", "label": "Provide a single pane for analyst work, notes, and hand-offs" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Playbooks encode response logic. Connectors provide technical integrations. Case management keeps human and automated work organized and auditable."
  },
  {
    "id": 154,
    "qid": "CS0-004-MOD1-154",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the stage in a typical SOAR-driven incident-response workflow where AI/ML is most commonly applied today to reduce analyst workload.",
    "scenario": "<div class=\"scenario-text\"><p>The workflow diagram shows the major phases of an automated response pipeline.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Alert Ingestion", "x": 15, "y": 50 },
      { "id": "node2", "label": "Enrichment, Scoring & Prioritization", "x": 45, "y": 50 },
      { "id": "node3", "label": "Automated Containment Actions", "x": 75, "y": 50 },
      { "id": "node4", "label": "Final Human Approval for Destructive Actions", "x": 90, "y": 80 }
    ],
    "correct": ["node2"],
    "explanation": "Practical AI/ML applications in SOAR currently focus on enrichment, entity extraction, similarity matching, and alert scoring/prioritization so analysts can focus on the highest-risk items. Containment and final destructive actions still typically require human oversight or strict playbook gates."
  },
  {
    "id": 155,
    "qid": "CS0-004-MOD1-155",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Python SOAR playbook snippet that introduces incomplete isolation logic or an unsafe continuation path.",
    "scenario": "<div class=\"scenario-text\"><p>A SOAR engineer is reviewing a custom playbook that responds to high-severity EDR ransomware alerts.</p></div>",
    "nodes": [
      { "id": "l1", "label": "def respond_to_ransomware(alert):" },
      { "id": "l2", "label": "    host = alert.get('hostname')" },
      { "id": "l3", "label": "    intel = tip.lookup(alert.get('sha256'))" },
      { "id": "l4", "label": "    edr.isolate_host(host)" },
      { "id": "l5", "label": "    # Continue investigation even if isolation fails" },
      { "id": "l6", "label": "    processes = edr.get_process_tree(host)" },
      { "id": "l7", "label": "    return create_case(alert, intel, processes)" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "The comment and subsequent code path imply that investigation continues regardless of isolation success. In a ransomware scenario the playbook should verify isolation status and escalate or halt further automated actions if isolation fails; otherwise the host remains a risk while the playbook proceeds."
  },
  {
    "id": 156,
    "qid": "CS0-004-MOD1-156",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "single",
    "prompt": "Which metric most directly measures the effectiveness of continuous monitoring for high-severity threats?",
    "scenario": "<div class=\"scenario-text\"><p>SOC leadership is preparing a board-level report on detection program performance.</p></div>",
    "options": [
      { "id": "a", "text": "Mean time to detect (MTTD) for confirmed high-severity incidents" },
      { "id": "b", "text": "Total number of log sources ingested regardless of quality" },
      { "id": "c", "text": "Number of vulnerability scanners deployed" },
      { "id": "d", "text": "Count of firewall rules in the rule base" }
    ],
    "correct": ["a"],
    "explanation": "MTTD for high-severity incidents directly reflects how quickly continuous monitoring surfaces real threats. Raw log-source counts, scanner counts, and firewall rule counts are vanity metrics that do not measure detection effectiveness."
  },
  {
    "id": 157,
    "qid": "CS0-004-MOD1-157",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "multiselect",
    "prompt": "Select THREE practices that improve the quality and actionability of SIEM alerts for SOC analysts.",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineering team is reducing alert fatigue while increasing true-positive rates.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enrich alerts with asset criticality, user context, and threat-intelligence matches" },
      { "id": "b", "text": "Apply multi-event correlation and entity linking before generating an alert" },
      { "id": "c", "text": "Suppress or tune known false-positive patterns with documented exceptions" },
      { "id": "d", "text": "Generate an alert for every single failed authentication attempt" },
      { "id": "e", "text": "Disable all enrichment to reduce processing latency" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Enrichment, correlation, and disciplined tuning produce higher-fidelity, contextualized alerts. Alerting on every failed logon and disabling enrichment increase noise and reduce analyst effectiveness."
  },
  {
    "id": 158,
    "qid": "CS0-004-MOD1-158",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "single",
    "prompt": "When investigating possible HTTPS command-and-control on non-standard ports, which capture strategy is most appropriate?",
    "scenario": "<div class=\"scenario-text\"><p>An analyst needs to collect evidence of suspected encrypted C2 without knowing the exact destination port in advance.</p></div>",
    "options": [
      { "id": "a", "text": "Capture broadly (or with a generous port range) and apply protocol and destination filters during analysis" },
      { "id": "b", "text": "Capture only port 443 traffic" },
      { "id": "c", "text": "Capture only ICMP traffic" },
      { "id": "d", "text": "Rely exclusively on NetFlow summary records with no packet content" }
    ],
    "correct": ["a"],
    "explanation": "Because C2 may use any port, a broad capture followed by post-filtering preserves evidence. Restricting to 443 or ICMP risks missing the traffic entirely; NetFlow alone lacks the payload and TLS details needed for deeper analysis."
  },
  {
    "id": 159,
    "qid": "CS0-004-MOD1-159",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "dragdrop",
    "prompt": "Match each endpoint telemetry source to the detection capability it most directly enables.",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is mapping telemetry to detection use cases for a Windows estate.</p></div>",
    "items": [
      { "id": "i1", "text": "Sysmon Event ID 1 with full command line" },
      { "id": "i2", "text": "Sysmon Event ID 10 (ProcessAccess) to lsass.exe" },
      { "id": "i3", "text": "PowerShell Script Block Logging (Event ID 4104)" }
    ],
    "zones": [
      { "id": "z1", "label": "Detection of encoded or suspicious process execution" },
      { "id": "z2", "label": "Detection of credential dumping attempts" },
      { "id": "z3", "label": "Visibility into the content of executed PowerShell scripts" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Process creation with command line reveals encoded or anomalous execution. ProcessAccess to LSASS indicates credential dumping. Script Block Logging exposes the actual PowerShell code that was run."
  },
  {
    "id": 160,
    "qid": "CS0-004-MOD1-160",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "single",
    "prompt": "When deploying AI-assisted alert triage inside a SOAR platform, what is the most critical safeguard?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC is piloting an AI model that scores incoming alerts and recommends response actions.</p></div>",
    "options": [
      { "id": "a", "text": "Human-in-the-loop approval for high-impact or irreversible actions together with continuous monitoring of model performance" },
      { "id": "b", "text": "Fully autonomous execution of every recommended action, including host wipes" },
      { "id": "c", "text": "Complete removal of all analyst review steps" },
      { "id": "d", "text": "Training the model on a single week of data with no hold-out validation set" }
    ],
    "correct": ["a"],
    "explanation": "AI can accelerate enrichment and prioritization, but high-impact actions require human oversight and the model’s performance must be continuously measured to detect drift or bias. Fully autonomous destructive actions and elimination of review introduce unacceptable risk; inadequate training practices produce unreliable models."
  },
  {
    "id": 161,
    "qid": "CS0-004-MOD1-161",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "single",
    "prompt": "Which continuous monitoring control provides the earliest reliable indication that a compromised service account is being used for lateral movement across multiple systems?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC is refining detection after a red-team exercise successfully abused a service account to move laterally without triggering endpoint alerts on every host.</p></div>",
    "options": [
      { "id": "a", "text": "Correlated authentication anomalies (Event IDs 4624/4769) combined with unusual source hosts and time-of-day deviations" },
      { "id": "b", "text": "Daily vulnerability scan reports only" },
      { "id": "c", "text": "Monthly configuration baseline reviews" },
      { "id": "d", "text": "Firewall accept logs for port 443 alone" }
    ],
    "correct": ["a"],
    "explanation": "Authentication telemetry correlated with source host, account type, and behavioral baselines detects service-account abuse early. Vulnerability scans, monthly baselines, and single-protocol firewall logs lack the necessary identity and temporal context."
  },
  {
    "id": 162,
    "qid": "CS0-004-MOD1-162",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "multiselect",
    "prompt": "Select THREE data sources that should be continuously monitored to detect early-stage ransomware behavior before mass encryption begins.",
    "scenario": "<div class=\"scenario-text\"><p>An organization is strengthening pre-encryption detection after a near-miss incident involving reconnaissance and shadow-copy deletion.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Process creation and command-line telemetry showing vssadmin, wmic, or powershell shadow-copy deletion" },
      { "id": "b", "text": "Unusual spikes in file-system change rates or volume shadow copy service activity" },
      { "id": "c", "text": "Outbound network connections to known ransomware C2 or payment infrastructure" },
      { "id": "d", "text": "Routine Windows Update success events" },
      { "id": "e", "text": "Normal user logon events during business hours" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Shadow-copy deletion commands, abnormal file-system change rates, and C2 communication are strong pre-encryption indicators. Routine update and normal logon events are expected noise and do not signal ransomware staging."
  },
  {
    "id": 163,
    "qid": "CS0-004-MOD1-163",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "dragdrop",
    "prompt": "Match each continuous monitoring objective to the telemetry source that best supports it.",
    "scenario": "<div class=\"scenario-text\"><p>A detection-engineering team is aligning monitoring goals with available data sources.</p></div>",
    "items": [
      { "id": "i1", "text": "Detect encoded PowerShell and LOLBin execution" },
      { "id": "i2", "text": "Identify anomalous authentication and Kerberos activity" },
      { "id": "i3", "text": "Spot DNS beaconing or tunneling" }
    ],
    "zones": [
      { "id": "z1", "label": "Sysmon / EDR process-creation and command-line logs" },
      { "id": "z2", "label": "Windows Security and Kerberos event logs" },
      { "id": "z3", "label": "DNS query logs or passive DNS" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Process and command-line telemetry reveal LOLBin and encoded-script abuse. Authentication logs surface credential and Kerberos anomalies. DNS logs are the primary source for beaconing and tunneling detection."
  },
  {
    "id": 164,
    "qid": "CS0-004-MOD1-164",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the sensor placement that provides the best continuous visibility into east-west lateral movement without adding inline latency or failure risk.",
    "scenario": "<div class=\"scenario-text\"><p>Examine the simplified data-center architecture. The SOC requires high-fidelity monitoring of traffic between application tiers.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Inline firewall on every tier uplink", "x": 20, "y": 30 },
      { "id": "node2", "label": "Passive TAP / SPAN on the core switch", "x": 50, "y": 50 },
      { "id": "node3", "label": "Perimeter firewall only", "x": 80, "y": 30 },
      { "id": "node4", "label": "Endpoint EDR with no network visibility", "x": 50, "y": 80 }
    ],
    "correct": ["node2"],
    "explanation": "A passive TAP or well-engineered SPAN on the core captures east-west traffic without introducing latency or a single point of failure. Inline firewalls add risk; perimeter-only and endpoint-only placements miss internal lateral movement."
  },
  {
    "id": 165,
    "qid": "CS0-004-MOD1-165",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Sigma rule that contains a logic error that will cause encoded PowerShell launched by Office applications to be missed.",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is reviewing a Sigma rule intended to catch encoded PowerShell spawned by Microsoft Office processes.</p></div>",
    "nodes": [
      { "id": "l1", "label": "title: Encoded PowerShell Spawned by Office" },
      { "id": "l2", "label": "logsource:" },
      { "id": "l3", "label": "  category: process_creation" },
      { "id": "l4", "label": "  product: windows" },
      { "id": "l5", "label": "detection:" },
      { "id": "l6", "label": "  selection:" },
      { "id": "l7", "label": "    ParentImage|endswith:" },
      { "id": "l8", "label": "      - '\\winword.exe'" },
      { "id": "l9", "label": "      - '\\excel.exe'" },
      { "id": "l10", "label": "    CommandLine|contains: '-enc'" },
      { "id": "l11", "label": "  condition: selection" }
    ],
    "correct": ["l10"],
    "selectCount": 1,
    "explanation": "Relying solely on the literal string '-enc' is brittle. Adversaries commonly use '-EncodedCommand', '-e', '-en', and mixed-case variants. A robust rule should use a case-insensitive regular expression or multiple contains conditions covering the common short and long forms."
  },
  {
    "id": 166,
    "qid": "CS0-004-MOD1-166",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "single",
    "prompt": "Which architectural control most effectively reduces the blast radius of a compromised user endpoint while still allowing required access to business applications?",
    "scenario": "<div class=\"scenario-text\"><p>After multiple ransomware incidents that spread rapidly from workstations, the architecture team is redesigning internal access controls.</p></div>",
    "options": [
      { "id": "a", "text": "Zero Trust Network Access (ZTNA) with continuous verification and least-privilege application-level access" },
      { "id": "b", "text": "Flat Layer-2 network with unrestricted east-west communication" },
      { "id": "c", "text": "Single large VLAN containing both user and server systems" },
      { "id": "d", "text": "Perimeter firewall only with no internal segmentation" }
    ],
    "correct": ["a"],
    "explanation": "ZTNA enforces identity-, device-, and context-aware access to individual applications, sharply limiting lateral movement. Flat networks and perimeter-only designs maximize blast radius."
  },
  {
    "id": 167,
    "qid": "CS0-004-MOD1-167",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "multiselect",
    "prompt": "Select THREE architecture controls that simultaneously improve detection and containment of lateral movement in a hybrid cloud environment.",
    "scenario": "<div class=\"scenario-text\"><p>A financial institution is extending its security architecture into AWS while retaining on-premises Active Directory.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "VPC Flow Logs and Traffic Mirroring enabled on critical subnets" },
      { "id": "b", "text": "Least-privilege security groups and network ACLs between application tiers" },
      { "id": "c", "text": "Centralized identity with conditional access and continuous validation" },
      { "id": "d", "text": "Disabling CloudTrail logging to reduce storage cost" },
      { "id": "e", "text": "A single shared security group applied to all production instances" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Flow Logs and Traffic Mirroring supply network telemetry. Least-privilege security groups limit movement. Centralized identity with continuous validation supports Zero Trust. Disabling CloudTrail and overly broad security groups weaken both detection and containment."
  },
  {
    "id": 168,
    "qid": "CS0-004-MOD1-168",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "dragdrop",
    "prompt": "Map each network architecture control to its primary security-operations benefit.",
    "scenario": "<div class=\"scenario-text\"><p>An architect is documenting the purpose of key controls for the SOC and detection-engineering teams.</p></div>",
    "items": [
      { "id": "i1", "text": "Passive Network TAP or SPAN port" },
      { "id": "i2", "text": "Privileged Access Workstations (PAWs) and jump hosts" },
      { "id": "i3", "text": "Micro-segmentation with identity-aware policies" }
    ],
    "zones": [
      { "id": "z1", "label": "High-fidelity packet visibility without inline risk" },
      { "id": "z2", "label": "Reduced attack surface for administrative access" },
      { "id": "z3", "label": "Limited lateral movement through least-privilege flows" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "TAPs and SPAN provide passive full-packet capture. PAWs and jump hosts constrain privileged sessions. Micro-segmentation enforces least-privilege communication paths."
  },
  {
    "id": 169,
    "qid": "CS0-004-MOD1-169",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the component that should be placed out-of-band to guarantee full-duplex packet capture for threat hunting without risk of production disruption.",
    "scenario": "<div class=\"scenario-text\"><p>Review the enterprise edge and DMZ design. The SOC requires lossless capture capability.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Inline Next-Generation Firewall", "x": 25, "y": 40 },
      { "id": "node2", "label": "Passive Optical Network TAP", "x": 55, "y": 40 },
      { "id": "node3", "label": "Active Inline IPS Appliance", "x": 85, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "A passive optical TAP delivers a complete bidirectional copy of traffic and cannot fail closed or introduce latency. Inline firewalls and IPS devices sit in the forwarding path and can disrupt traffic if they fail or become overloaded."
  },
  {
    "id": 170,
    "qid": "CS0-004-MOD1-170",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "System & Network Architecture Controls",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the security-group rule that creates an overly permissive inbound path from the internet, enabling unrestricted access.",
    "scenario": "<div class=\"scenario-text\"><p>A cloud security engineer is reviewing an AWS security group attached to a critical application tier.</p></div>",
    "nodes": [
      { "id": "l1", "label": "SecurityGroup: AppTierSG" },
      { "id": "l2", "label": "  Ingress:" },
      { "id": "l3", "label": "    - FromPort: 443" },
      { "id": "l4", "label": "      ToPort: 443" },
      { "id": "l5", "label": "      CidrIp: 10.30.0.0/16" },
      { "id": "l6", "label": "    - FromPort: 0" },
      { "id": "l7", "label": "      ToPort: 65535" },
      { "id": "l8", "label": "      CidrIp: 0.0.0.0/0" },
      { "id": "l9", "label": "  Egress:" },
      { "id": "l10", "label": "    - CidrIp: 0.0.0.0/0" }
    ],
    "correct": ["l6"],
    "selectCount": 1,
    "explanation": "The rule opening ports 0-65535 from 0.0.0.0/0 is fully permissive and allows unrestricted inbound access from the internet. The HTTPS rule limited to the internal CIDR is correctly scoped."
  },
  {
    "id": 171,
    "qid": "CS0-004-MOD1-171",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "single",
    "prompt": "Which SIEM correlation strategy is most effective for detecting a multi-stage attack that begins with a phishing email and progresses to domain-administrator compromise?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC is redesigning detection logic after an incident that spanned email, endpoint, authentication, and Active Directory logs over several days.</p></div>",
    "options": [
      { "id": "a", "text": "Multi-event correlation rules that chain related telemetry across sources using entity resolution and time windows" },
      { "id": "b", "text": "Single high-severity alert on any failed logon" },
      { "id": "c", "text": "Static threshold alerts based solely on total log volume" },
      { "id": "d", "text": "Manual review of every email-gateway log entry" }
    ],
    "correct": ["a"],
    "explanation": "Multi-stage attacks require correlation across disparate log sources with entity linking and temporal logic. Single failed-logon alerts generate noise; volume thresholds and pure manual review do not scale or provide timely detection."
  },
  {
    "id": 172,
    "qid": "CS0-004-MOD1-172",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "multiselect",
    "prompt": "Select THREE best practices when integrating Windows Event Logs and Sysmon into a SIEM for high-fidelity detection.",
    "scenario": "<div class=\"scenario-text\"><p>A detection-engineering team is optimizing log ingestion and rule performance for a large Windows estate.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enable command-line auditing and a tuned Sysmon configuration focused on high-value events" },
      { "id": "b", "text": "Normalize and enrich events with asset criticality, user context, and threat intelligence" },
      { "id": "c", "text": "Filter known noisy low-value events before or at ingestion" },
      { "id": "d", "text": "Ingest every possible Windows event ID without filtering" },
      { "id": "e", "text": "Disable all process-creation logging to reduce volume" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Tuned Sysmon plus command-line auditing supplies rich process telemetry. Enrichment improves prioritization. Filtering noise keeps the platform performant. Ingesting everything overwhelms storage and analysts; disabling process creation removes critical detection capability."
  },
  {
    "id": 173,
    "qid": "CS0-004-MOD1-173",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "dragdrop",
    "prompt": "Match each log source to the primary detection use case it best supports in a SIEM.",
    "scenario": "<div class=\"scenario-text\"><p>Analysts are mapping available log sources to detection use cases during a coverage review.</p></div>",
    "items": [
      { "id": "i1", "text": "Sysmon Event ID 1 and Event ID 3" },
      { "id": "i2", "text": "Windows Security 4624 / 4625 / 4769" },
      { "id": "i3", "text": "DNS query logs and passive DNS" }
    ],
    "zones": [
      { "id": "z1", "label": "Process creation and network-connection correlation" },
      { "id": "z2", "label": "Authentication and Kerberos anomalies" },
      { "id": "z3", "label": "C2 beaconing and domain-generation algorithm activity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Sysmon process and network events enable process-to-network correlation. Security and Kerberos logs detect authentication abuse. DNS logs are primary for identifying beaconing and DGA activity."
  },
  {
    "id": 174,
    "qid": "CS0-004-MOD1-174",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the SIEM pipeline component responsible for normalizing disparate log formats into a common schema before correlation rules are applied.",
    "scenario": "<div class=\"scenario-text\"><p>Review a typical enterprise SIEM data-pipeline architecture.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Raw Log Collectors / Agents", "x": 15, "y": 50 },
      { "id": "node2", "label": "Parsing / Normalization / Enrichment Layer", "x": 45, "y": 50 },
      { "id": "node3", "label": "Correlation & Analytics Engine", "x": 75, "y": 50 },
      { "id": "node4", "label": "Alert Console / SOAR", "x": 90, "y": 80 }
    ],
    "correct": ["node2"],
    "explanation": "The parsing, normalization, and enrichment layer converts vendor-specific formats into a common information model so that correlation rules can operate consistently across sources. Collectors only ship data; the analytics engine consumes already-normalized events."
  },
  {
    "id": 175,
    "qid": "CS0-004-MOD1-175",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Splunk SPL search that inverts the intended logic and will surface only expected administrative RDP activity.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is troubleshooting a correlation search designed to find successful RDP logons from unusual source hosts.</p></div>",
    "nodes": [
      { "id": "l1", "label": "index=wineventlog EventCode=4624" },
      { "id": "l2", "label": "| where Logon_Type=10" },
      { "id": "l3", "label": "| stats count by src_ip, dest_host, user" },
      { "id": "l4", "label": "| where count > 2" },
      { "id": "l5", "label": "| where src_ip IN (known_good_jump_hosts)" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "The final where clause retains only known-good jump hosts, which is the opposite of the detection goal. The search should exclude known-good sources or alert on sources that are NOT in the approved list."
  },
  {
    "id": 176,
    "qid": "CS0-004-MOD1-176",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "single",
    "prompt": "Which Wireshark display filter is most appropriate for isolating potential DNS-tunneling traffic in a large PCAP?",
    "scenario": "<div class=\"scenario-text\"><p>A threat hunter is investigating unusually high DNS query volumes from a single internal host to an external domain.</p></div>",
    "options": [
      { "id": "a", "text": "dns.qry.name len > 45 or (dns and frame.len > 200)" },
      { "id": "b", "text": "tcp.port == 80 and http.request" },
      { "id": "c", "text": "arp" },
      { "id": "d", "text": "icmp.type == 8" }
    ],
    "correct": ["a"],
    "explanation": "DNS tunneling often uses long subdomain labels and larger-than-normal DNS packets. Filtering on long query names or elevated frame length helps surface candidates. HTTP, ARP, and ICMP filters target unrelated protocols."
  },
  {
    "id": 177,
    "qid": "CS0-004-MOD1-177",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "multiselect",
    "prompt": "Select THREE indicators visible in packet captures that commonly suggest command-and-control beaconing.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is reviewing a full-packet capture taken after an endpoint detection of suspicious outbound connections.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Consistent time intervals between connections to the same external IP or domain" },
      { "id": "b", "text": "Small, similarly sized packets or HTTP requests with low variance" },
      { "id": "c", "text": "Use of non-standard ports or protocols that mimic legitimate traffic" },
      { "id": "d", "text": "Large file downloads from trusted software-update servers" },
      { "id": "e", "text": "Normal DHCP lease renewals" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Beaconing is characterized by regular timing, low-variance small payloads, and often protocol or port abuse for stealth. Legitimate software updates and DHCP activity do not match these patterns."
  },
  {
    "id": 178,
    "qid": "CS0-004-MOD1-178",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "dragdrop",
    "prompt": "Match each packet-analysis technique to the threat it is best suited to uncover.",
    "scenario": "<div class=\"scenario-text\"><p>A network threat hunter is selecting analysis methods based on observed symptoms.</p></div>",
    "items": [
      { "id": "i1", "text": "TLS certificate and JA3/JA3S fingerprint analysis" },
      { "id": "i2", "text": "DNS query length, entropy, and frequency analysis" },
      { "id": "i3", "text": "TCP stream reassembly and HTTP object extraction" }
    ],
    "zones": [
      { "id": "z1", "label": "Encrypted C2 using custom or abused TLS stacks" },
      { "id": "z2", "label": "DNS tunneling or DGA-based C2" },
      { "id": "z3", "label": "Clear-text or weakly encrypted malware download / exfiltration" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "JA3/JA3S and certificate details help identify malware TLS implementations. DNS metadata reveals tunneling and DGA. Stream reassembly and object extraction recover payloads from unencrypted or decryptable sessions."
  },
  {
    "id": 179,
    "qid": "CS0-004-MOD1-179",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the capture point that provides the most complete visibility into both inbound and outbound traffic for a critical server subnet without risking production impact.",
    "scenario": "<div class=\"scenario-text\"><p>The network diagram shows possible sensor locations relative to a server VLAN and core infrastructure.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Inline on the server access-switch uplink", "x": 20, "y": 40 },
      { "id": "node2", "label": "Passive TAP on the server VLAN uplink", "x": 50, "y": 40 },
      { "id": "node3", "label": "SPAN from a distant core switch only", "x": 80, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "A passive TAP on the server VLAN uplink delivers full-duplex, lossless capture of all traffic to and from the subnet without introducing a failure point. Inline placement risks outages. Distant SPAN ports often suffer from oversubscription and incomplete visibility."
  },
  {
    "id": 180,
    "qid": "CS0-004-MOD1-180",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the tcpdump command that will cause it to miss relevant traffic for an investigation of possible HTTPS C2 on non-standard ports.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is preparing a targeted packet capture on a Linux sensor.</p></div>",
    "nodes": [
      { "id": "l1", "label": "tcpdump -i eth0 -w capture.pcap -s 0" },
      { "id": "l2", "label": "  port 443" },
      { "id": "l3", "label": "  and host 10.10.5.20" }
    ],
    "correct": ["l2"],
    "selectCount": 1,
    "explanation": "Restricting the capture to port 443 will miss C2 that uses HTTPS on alternative ports (e.g., 8443, 4443, or high ports). Capturing with a broader filter and post-filtering is safer when the exact port is unknown."
  },
  {
    "id": 181,
    "qid": "CS0-004-MOD1-181",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "single",
    "prompt": "Which endpoint telemetry source provides the strongest signal for detecting process-injection techniques such as process hollowing?",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is prioritizing Sysmon and EDR event types after observing multiple process-injection attempts in a recent campaign.</p></div>",
    "options": [
      { "id": "a", "text": "Sysmon Event ID 8 (CreateRemoteThread) and Event ID 10 (ProcessAccess) combined with image and memory-region details" },
      { "id": "b", "text": "Windows Event ID 4624 only" },
      { "id": "c", "text": "Scheduled-task creation logs alone" },
      { "id": "d", "text": "USB device insertion events" }
    ],
    "correct": ["a"],
    "explanation": "CreateRemoteThread and ProcessAccess events, especially when enriched with target image and memory-protection information, are primary indicators of injection. Logon events, scheduled tasks, and USB events do not directly reveal injection behavior."
  },
  {
    "id": 182,
    "qid": "CS0-004-MOD1-182",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "multiselect",
    "prompt": "Select THREE behavioral indicators that, when observed together on an endpoint, strongly suggest credential-dumping activity.",
    "scenario": "<div class=\"scenario-text\"><p>An EDR alert has fired on a workstation. The analyst is correlating additional telemetry to confirm intent.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "ProcessAccess to lsass.exe with PROCESS_VM_READ or similar rights from a non-system process" },
      { "id": "b", "text": "Creation of a minidump or use of procdump/comsvcs.dll against lsass" },
      { "id": "c", "text": "Subsequent network connections or process creation consistent with pass-the-hash tools" },
      { "id": "d", "text": "Normal user opening Outlook and browsing internal SharePoint" },
      { "id": "e", "text": "Routine Windows Update service activity" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Access to LSASS with read permissions, explicit dumping tools or techniques, and follow-on lateral movement or credential use form a high-confidence chain. Legitimate user and update activity are expected noise."
  },
  {
    "id": 183,
    "qid": "CS0-004-MOD1-183",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "dragdrop",
    "prompt": "Map each endpoint behavior to the most likely ATT&CK technique category.",
    "scenario": "<div class=\"scenario-text\"><p>A behavioral-analytics rule set is being tuned against MITRE ATT&CK.</p></div>",
    "items": [
      { "id": "i1", "text": "Unusual parent-child relationship: winword.exe spawning powershell.exe with encoded command" },
      { "id": "i2", "text": "Repeated ProcessAccess to lsass.exe followed by network logons with the same credentials" },
      { "id": "i3", "text": "Service installation or scheduled task pointing to a binary in a user-writable directory" }
    ],
    "zones": [
      { "id": "z1", "label": "Execution / Command and Scripting Interpreter" },
      { "id": "z2", "label": "Credential Access / OS Credential Dumping" },
      { "id": "z3", "label": "Persistence" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Office spawning encoded PowerShell is classic malicious execution. LSASS access plus credential reuse indicates dumping. User-writable service or task paths are common persistence mechanisms."
  },
  {
    "id": 184,
    "qid": "CS0-004-MOD1-184",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the endpoint sensor placement that yields the highest-fidelity behavioral telemetry for detecting fileless malware and living-off-the-land techniques.",
    "scenario": "<div class=\"scenario-text\"><p>The architecture diagram shows different endpoint monitoring options available to the SOC.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Network-only IDS on the segment", "x": 20, "y": 40 },
      { "id": "node2", "label": "Kernel-level EDR / Sysmon with full process, image-load, and script-block logging", "x": 50, "y": 40 },
      { "id": "node3", "label": "Periodic full antivirus scans only", "x": 80, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "Kernel-level EDR or properly configured Sysmon plus PowerShell script-block and module logging captures the process tree, image loads, and script content required to detect fileless and LOLBin activity. Network IDS lacks process context. Periodic AV scans miss runtime behavior."
  },
  {
    "id": 185,
    "qid": "CS0-004-MOD1-185",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Sysmon configuration that is incorrectly set and will fail to capture command-line arguments critical for detecting encoded PowerShell.",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is reviewing a Sysmon configuration fragment used across the Windows fleet.</p></div>",
    "nodes": [
      { "id": "l1", "label": "<EventFiltering>" },
      { "id": "l2", "label": "  <ProcessCreate onmatch=\"include\">" },
      { "id": "l3", "label": "    <CommandLine condition=\"is\">true</CommandLine>" },
      { "id": "l4", "label": "    <Image condition=\"end with\">powershell.exe</Image>" },
      { "id": "l5", "label": "  </ProcessCreate>" },
      { "id": "l6", "label": "</EventFiltering>" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "The CommandLine element with condition=\"is\">true is invalid Sysmon syntax for enabling command-line logging. Command-line capture is controlled by the overall Sysmon schema and the presence of the CommandLine field in the event; the correct approach is to include ProcessCreate events and ensure the configuration does not exclude the CommandLine data."
  },
  {
    "id": 186,
    "qid": "CS0-004-MOD1-186",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "single",
    "prompt": "According to the Pyramid of Pain, which type of indicator is the most costly for an adversary to change and therefore provides the highest long-term defensive value when blocked or detected?",
    "scenario": "<div class=\"scenario-text\"><p>A threat-intelligence team is prioritizing which IoCs to operationalize into blocking and detection rules.</p></div>",
    "options": [
      { "id": "a", "text": "TTPs and behavioral patterns (tools, techniques, procedures)" },
      { "id": "b", "text": "File hashes (MD5/SHA-256)" },
      { "id": "c", "text": "IP addresses used for C2" },
      { "id": "d", "text": "Domain names registered for a campaign" }
    ],
    "correct": ["a"],
    "explanation": "The Pyramid of Pain places TTPs at the top: forcing an adversary to change tools and procedures is far more expensive than rotating hashes, IPs, or domains. Hash, IP, and domain indicators are lower on the pyramid and easily replaced."
  },
  {
    "id": 187,
    "qid": "CS0-004-MOD1-187",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "multiselect",
    "prompt": "Select THREE characteristics of high-quality threat intelligence that make it suitable for automated ingestion into a TIP and SOAR platform.",
    "scenario": "<div class=\"scenario-text\"><p>A SecOps team is evaluating commercial and open-source threat feeds for production use.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Structured format (STIX/TAXII, JSON) with consistent schema" },
      { "id": "b", "text": "Confidence scores, first-seen/last-seen timestamps, and context (malware family, campaign)" },
      { "id": "c", "text": "Machine-readable IoCs that can be automatically validated and aged out" },
      { "id": "d", "text": "Unstructured PDF reports only with no extractable indicators" },
      { "id": "e", "text": "Indicators with no expiration or confidence information" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Automation requires structured data, rich metadata for prioritization and context, and the ability to validate and retire stale indicators. Unstructured PDFs and indicators lacking confidence or aging data create operational burden and false positives."
  },
  {
    "id": 188,
    "qid": "CS0-004-MOD1-188",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "dragdrop",
    "prompt": "Map each Indicator of Compromise to its corresponding Pyramid of Pain tier.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is categorizing threat-intelligence indicators to evaluate the impact of remediation actions on adversary operations.</p></div>",
    "items": [
      { "id": "i1", "text": "SHA-256 File Hash" },
      { "id": "i2", "text": "C2 Server IPv4 Address" },
      { "id": "i3", "text": "Custom PowerShell Exfiltration Tool (TTP)" }
    ],
    "zones": [
      { "id": "z1", "label": "Trivial / Easy to Change" },
      { "id": "z2", "label": "Simple / Moderate Impact" },
      { "id": "z3", "label": "Tough / High Impact on Adversary" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "File hashes (SHA-256) are trivial to alter. IP addresses are simple to change. Dynamic TTPs and custom tooling require significant adversary effort to redesign when disrupted."
  },
  {
    "id": 189,
    "qid": "CS0-004-MOD1-189",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the component in a typical TIP architecture that is primarily responsible for automated indicator scoring, deduplication, and aging.",
    "scenario": "<div class=\"scenario-text\"><p>Review the logical architecture of an enterprise Threat Intelligence Platform integrated with the SOC.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Raw Feed Ingestion Connectors", "x": 15, "y": 40 },
      { "id": "node2", "label": "Normalization, Enrichment & Scoring Engine", "x": 50, "y": 40 },
      { "id": "node3", "label": "Analyst Workbench / Manual Review UI", "x": 85, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "The normalization, enrichment, and scoring engine automatically processes incoming indicators, removes duplicates, applies confidence and context, and manages aging. Ingestion connectors only bring data in; the workbench is for human analysis."
  },
  {
    "id": 190,
    "qid": "CS0-004-MOD1-190",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Threat Intelligence Platforms & Indicators of Compromise (IoCs)",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the STIX indicator field that is missing or incorrectly populated, reducing the operational value of this IoC for automated blocking.",
    "scenario": "<div class=\"scenario-text\"><p>A threat-intel analyst is reviewing a STIX 2.1 indicator object before publishing it to the production TIP.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"type\": \"indicator\"," },
      { "id": "l3", "label": "  \"spec_version\": \"2.1\"," },
      { "id": "l4", "label": "  \"id\": \"indicator--a1b2c3d4\"," },
      { "id": "l5", "label": "  \"created\": \"2026-09-01T10:00:00.000Z\"," },
      { "id": "l6", "label": "  \"pattern\": \"[file:hashes.'SHA-256' = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855']\"," },
      { "id": "l7", "label": "  \"valid_from\": \"2026-09-01T10:00:00.000Z\"" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l7"],
    "selectCount": 1,
    "explanation": "While valid_from is present, the indicator lacks a valid_until (or equivalent aging information) and confidence/score metadata. Without an expiration or confidence value, automated systems cannot safely age out or prioritize the IoC, leading to long-term false positives or missed prioritization."
  },
  {
    "id": 191,
    "qid": "CS0-004-MOD1-191",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "single",
    "prompt": "What is the primary operational benefit of integrating a SOAR platform with both the SIEM and endpoint detection and response (EDR) tools?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC manager is justifying a SOAR investment after measuring high mean time to respond (MTTR) on common alert types.</p></div>",
    "options": [
      { "id": "a", "text": "Automated enrichment, consistent playbook-driven response, and reduced MTTR for repeatable incident types" },
      { "id": "b", "text": "Complete elimination of the need for human analysts" },
      { "id": "c", "text": "Replacement of the SIEM with a ticketing system only" },
      { "id": "d", "text": "Automatic generation of new zero-day exploits" }
    ],
    "correct": ["a"],
    "explanation": "SOAR orchestrates enrichment from multiple tools and executes standardized response actions, dramatically reducing MTTR for well-defined playbooks. It augments analysts rather than replacing them, does not replace the SIEM, and has no role in generating exploits."
  },
  {
    "id": 192,
    "qid": "CS0-004-MOD1-192",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "multiselect",
    "prompt": "Select THREE capabilities that a mature SOAR implementation should provide when responding to a high-severity EDR alert for ransomware-like behavior.",
    "scenario": "<div class=\"scenario-text\"><p>The SOC is designing an automated response playbook for suspected ransomware activity on an endpoint.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Automatic isolation of the affected endpoint via EDR API" },
      { "id": "b", "text": "Enrichment of the alert with process tree, network connections, and threat-intelligence matches" },
      { "id": "c", "text": "Creation of a ticket with all enriched context and notification of the on-call analyst" },
      { "id": "d", "text": "Automatic deletion of all files on the endpoint without analyst review" },
      { "id": "e", "text": "Disabling the entire corporate Active Directory domain" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Isolation, enrichment, and ticket creation with context are standard, high-value automated actions that reduce dwell time while preserving evidence and requiring human oversight for destructive steps. Mass file deletion and domain-wide disruption are far too aggressive for automation."
  },
  {
    "id": 193,
    "qid": "CS0-004-MOD1-193",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "dragdrop",
    "prompt": "Match each SOAR component or practice to its primary purpose in a modern SecOps workflow.",
    "scenario": "<div class=\"scenario-text\"><p>A SOAR engineer is documenting the platform architecture for the security team.</p></div>",
    "items": [
      { "id": "i1", "text": "Playbooks / Runbooks" },
      { "id": "i2", "text": "Integration apps / connectors" },
      { "id": "i3", "text": "Case management & collaboration features" }
    ],
    "zones": [
      { "id": "z1", "label": "Codify repeatable investigation and response steps" },
      { "id": "z2", "label": "Enable bidirectional communication with SIEM, EDR, firewall, TIP, etc." },
      { "id": "z3", "label": "Provide a single pane for analyst work, notes, and hand-offs" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Playbooks encode the logic of response. Connectors provide the technical integrations. Case management keeps human and automated work organized and auditable."
  },
  {
    "id": 194,
    "qid": "CS0-004-MOD1-194",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Select the stage in a typical SOAR-driven incident-response workflow where AI/ML is most commonly applied today to reduce analyst workload.",
    "scenario": "<div class=\"scenario-text\"><p>The workflow diagram shows the major phases of an automated response pipeline.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Alert Ingestion", "x": 15, "y": 50 },
      { "id": "node2", "label": "Enrichment & Scoring / Prioritization", "x": 45, "y": 50 },
      { "id": "node3", "label": "Automated Containment Actions", "x": 75, "y": 50 },
      { "id": "node4", "label": "Final Human Approval for Destructive Actions", "x": 90, "y": 80 }
    ],
    "correct": ["node2"],
    "explanation": "Current practical AI/ML applications in SOAR focus on enrichment, entity extraction, similarity matching, and alert scoring/prioritization to help analysts focus on the highest-risk items. Containment and final destructive actions still typically require human oversight or strict playbook gates."
  },
  {
    "id": 195,
    "qid": "CS0-004-MOD1-195",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Python SOAR playbook snippet that introduces a dangerous race condition or incomplete isolation logic.",
    "scenario": "<div class=\"scenario-text\"><p>A SOAR engineer is reviewing a custom playbook that responds to high-severity EDR ransomware alerts.</p></div>",
    "nodes": [
      { "id": "l1", "label": "def respond_to_ransomware(alert):" },
      { "id": "l2", "label": "    host = alert.get('hostname')" },
      { "id": "l3", "label": "    # Enrich" },
      { "id": "l4", "label": "    intel = tip.lookup(alert.get('sha256'))" },
      { "id": "l5", "label": "    # Isolate" },
      { "id": "l6", "label": "    edr.isolate_host(host)" },
      { "id": "l7", "label": "    # Continue investigation even if isolation fails" },
      { "id": "l8", "label": "    processes = edr.get_process_tree(host)" },
      { "id": "l9", "label": "    return create_case(alert, intel, processes)" }
    ],
    "correct": ["l7"],
    "selectCount": 1,
    "explanation": "The comment and subsequent code path imply that investigation continues regardless of isolation success. In a ransomware scenario the playbook should verify isolation status and escalate or halt further automated actions if isolation fails, otherwise the host remains a risk while the playbook proceeds."
  },
  {
    "id": 196,
    "qid": "CS0-004-MOD1-196",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Continuous Security Monitoring & Threat Detection",
    "type": "multiselect",
    "prompt": "Select THREE metrics that best indicate the effectiveness of a continuous security monitoring program.",
    "scenario": "<div class=\"scenario-text\"><p>The CISO has asked the SOC leadership for objective measures of monitoring maturity.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Mean time to detect (MTTD) for high-severity incidents" },
      { "id": "b", "text": "Coverage percentage of critical ATT&CK techniques by detection rules" },
      { "id": "c", "text": "False-positive rate and alert volume per analyst" },
      { "id": "d", "text": "Number of vulnerability scanners deployed" },
      { "id": "e", "text": "Total count of log sources without regard to quality or use" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "MTTD, ATT&CK coverage, and alert quality (false-positive rate + volume) directly measure detection effectiveness and operational sustainability. Scanner count and raw log-source count are vanity metrics that do not reflect actual detection capability."
  },
  {
    "id": 197,
    "qid": "CS0-004-MOD1-197",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Log Analysis & SIEM Tools Integration",
    "type": "single",
    "prompt": "When building a SIEM use case for detecting Pass-the-Hash activity, which combination of events provides the strongest correlation signal?",
    "scenario": "<div class=\"scenario-text\"><p>A detection engineer is creating a new correlation rule after observing PtH in a recent red-team engagement.</p></div>",
    "options": [
      { "id": "a", "text": "Event ID 4624 (Logon Type 3 or 9) from a source that previously showed LSASS ProcessAccess, correlated with 4768/4769 Kerberos anomalies or NTLM authentications" },
      { "id": "b", "text": "Only Event ID 4624 with no additional context" },
      { "id": "c", "text": "Only DNS query logs" },
      { "id": "d", "text": "Only firewall accept logs for port 445" }
    ],
    "correct": ["a"],
    "explanation": "Strong PtH detection correlates credential access (LSASS ProcessAccess) with subsequent network logons (Type 3/9) and authentication anomalies. Single event types or unrelated DNS/firewall logs lack the necessary context and produce excessive noise."
  },
  {
    "id": 198,
    "qid": "CS0-004-MOD1-198",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Network Traffic Analysis & Packet Capture Analysis",
    "type": "dragdrop",
    "prompt": "Match each network-analysis artifact to the investigative question it primarily answers.",
    "scenario": "<div class=\"scenario-text\"><p>A hunter is deciding which artifacts to extract from a large PCAP during an incident.</p></div>",
    "items": [
      { "id": "i1", "text": "JA3 / JA3S hashes and TLS certificate details" },
      { "id": "i2", "text": "DNS query names, lengths, and response codes" },
      { "id": "i3", "text": "Full TCP stream and extracted HTTP objects" }
    ],
    "zones": [
      { "id": "z1", "label": "Is this encrypted session using a known malware TLS fingerprint?" },
      { "id": "z2", "label": "Is there evidence of tunneling or DGA activity?" },
      { "id": "z3", "label": "What payload or commands were transferred in clear text?" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "JA3/JA3S and certificates identify malware TLS stacks. DNS metadata reveals tunneling and algorithmically generated domains. Stream reassembly recovers actual transferred content when encryption is absent or broken."
  },
  {
    "id": 199,
    "qid": "CS0-004-MOD1-199",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Endpoint Telemetry & Behavioral Analytics",
    "type": "multiselect",
    "prompt": "Select THREE endpoint telemetry sources that should be enabled to support high-quality behavioral analytics for detecting living-off-the-land and fileless attacks.",
    "scenario": "<div class=\"scenario-text\"><p>An organization is hardening its Windows endpoints and EDR configuration after multiple LOLBin-based incidents.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Process creation with full command line (Sysmon 1 / 4688)" },
      { "id": "b", "text": "Image/DLL load events and script-block logging" },
      { "id": "c", "text": "ProcessAccess and CreateRemoteThread events targeting sensitive processes" },
      { "id": "d", "text": "Only successful logon events with no process context" },
      { "id": "e", "text": "Disabling all PowerShell logging" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Process creation with command lines, image/script load events, and process-access/injection telemetry form the core of behavioral detection for LOLBins and fileless techniques. Logon-only data and disabled PowerShell logging remove essential visibility."
  },
  {
    "id": 200,
    "qid": "CS0-004-MOD1-200",
    "moduleId": "mod1",
    "module": "Security Operations",
    "domain": "Security Automation, Orchestration (SOAR), and AI Integration",
    "type": "single",
    "prompt": "When implementing AI-assisted alert triage in a SOAR platform, what is the most important safeguard to maintain?",
    "scenario": "<div class=\"scenario-text\"><p>A SOC is piloting an AI model that scores and recommends actions on incoming SIEM alerts.</p></div>",
    "options": [
      { "id": "a", "text": "Human-in-the-loop approval for high-impact or irreversible containment actions combined with continuous model-performance monitoring" },
      { "id": "b", "text": "Fully autonomous execution of all recommended actions including host wipes" },
      { "id": "c", "text": "Complete removal of all analyst review steps" },
      { "id": "d", "text": "Training the model exclusively on a single week of historical alerts with no validation set" }
    ],
    "correct": ["a"],
    "explanation": "AI can accelerate enrichment and prioritization, but high-impact actions (isolation, blocking, account disablement, etc.) require human oversight and the model’s performance must be continuously measured to detect drift or bias. Fully autonomous destructive actions and elimination of review introduce unacceptable risk; poor training practices produce unreliable models."
 },
  {
    "id": 1,
    "qid": "CS0-004-MOD2-001",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "single",
    "prompt": "An analyst reviews an authenticated Nessus scan of an internal Windows domain controller that reports MS17-010 (EternalBlue) with a CVSS base score of 9.8. The host is internet-facing via a misconfigured firewall rule. What is the most appropriate immediate prioritization action?",
    "scenario": "<div class=\"scenario-text\"><p>During a weekly vulnerability scan cycle, the SOC receives a Nessus Professional report for host 10.10.5.12 (DC01). The plugin output confirms the SMB service is vulnerable to remote code execution via unauthenticated network access. Asset criticality is tagged Critical because the host holds the enterprise domain schema.</p></div>",
    "options": [
      { "id": "a", "text": "Raise the finding to Critical severity and initiate emergency patching within the 24-hour SLA window" },
      { "id": "b", "text": "Suppress the finding because the CVSS environmental score can be adjusted downward by network isolation" },
      { "id": "c", "text": "Convert the finding to Informational and schedule remediation in the next quarterly maintenance window" },
      { "id": "d", "text": "Re-scan the host with a non-credentialed profile to confirm the vulnerability is false-positive" }
    ],
    "correct": ["a"],
    "explanation": "MS17-010 is a wormable RCE vulnerability with proven in-the-wild exploitation. Combined with Critical asset criticality and internet exposure, the risk requires immediate elevation to Critical and emergency remediation. Option b is incorrect because environmental score adjustments do not remove the technical risk of active exploitation. Option c delays remediation beyond acceptable risk tolerance for a Critical asset. Option d is unnecessary; the authenticated scan already confirmed the vulnerability."
  },
  {
    "id": 2,
    "qid": "CS0-004-MOD2-002",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "single",
    "prompt": "A Qualys VMDR scan of a containerized microservices environment returns a high volume of OS-level findings on the underlying Kubernetes worker nodes. The security team has already implemented image scanning in the CI/CD pipeline. What is the most accurate interpretation of these findings?",
    "scenario": "<div class=\"scenario-text\"><p>The weekly Qualys container scan policy is configured to assess both the base OS of the worker nodes and the running container images. The report shows 47 Critical and High findings against the host OS packages (kernel, systemd, openssl). No corresponding findings appear against the application container images themselves.</p></div>",
    "options": [
      { "id": "a", "text": "The findings represent residual risk on the host OS that must still be remediated independently of image scanning" },
      { "id": "b", "text": "The findings are false positives because container isolation completely protects the host from OS vulnerabilities" },
      { "id": "c", "text": "The findings can be ignored because the CI/CD image scanner already covers all host-level packages" },
      { "id": "d", "text": "The findings indicate that the Qualys agent is misconfigured and should be removed from the worker nodes" }
    ],
    "correct": ["a"],
    "explanation": "Container image scanning addresses only the packages inside the container filesystem. Host OS vulnerabilities on the Kubernetes worker nodes remain exploitable and can lead to container breakout or node compromise. Option b is incorrect; container isolation is not absolute against kernel-level vulnerabilities. Option c is incorrect because CI/CD image scanning does not assess the host OS. Option d is incorrect; the agent is correctly reporting host-level risk."
  },
  {
    "id": 3,
    "qid": "CS0-004-MOD2-003",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "single",
    "prompt": "An OpenVAS scan of a legacy Solaris server returns a finding for an outdated OpenSSH version with a known authentication bypass. The asset is scheduled for decommissioning in 45 days. How should the vulnerability be prioritized?",
    "scenario": "<div class=\"scenario-text\"><p>The asset inventory system shows the Solaris host is running a custom manufacturing application that cannot be easily migrated. The network segmentation policy places the host in an isolated VLAN with no inbound internet access and strict ACL restrictions from the corporate network. Threat intelligence feeds show no active exploitation of the specific OpenSSH version in the last 90 days.</p></div>",
    "options": [
      { "id": "a", "text": "Assign Medium priority and track the finding until the planned decommission date while maintaining compensating controls" },
      { "id": "b", "text": "Assign Critical priority and force an emergency upgrade of OpenSSH regardless of application compatibility" },
      { "id": "c", "text": "Suppress the finding permanently because the host is scheduled for decommissioning" },
      { "id": "d", "text": "Reclassify the finding as Informational because no active exploitation has been observed" }
    ],
    "correct": ["a"],
    "explanation": "Given the short remaining lifecycle, network isolation, and absence of active threat activity, Medium priority with continued monitoring of compensating controls is appropriate. Option b risks breaking the manufacturing application. Option c removes visibility into residual risk. Option d underestimates the technical severity even if exploitation has not been observed recently."
  },
  {
    "id": 4,
    "qid": "CS0-004-MOD2-004",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "single",
    "prompt": "A credentialed Nmap NSE vulnerability script scan against a Linux web server reports that the Apache version is outdated. The same host, when scanned with an unauthenticated Nessus policy, shows no Apache findings. What is the most likely explanation?",
    "scenario": "<div class=\"scenario-text\"><p>The Nmap command used was: nmap -sV --script=http-vuln* -p 80,443 192.168.20.45. The Nessus unauthenticated scan used the default web application plugins without credentials. The Apache service is bound only to the internal interface and requires client certificate authentication for the management interface.</p></div>",
    "options": [
      { "id": "a", "text": "The unauthenticated Nessus scan could not retrieve the Server header or version banner due to restricted access controls" },
      { "id": "b", "text": "Nmap NSE scripts are known to generate a high rate of false positives on Apache services" },
      { "id": "c", "text": "The Nessus scan engine automatically suppresses version-based findings for web servers" },
      { "id": "d", "text": "The Nmap scan used an incorrect port specification and actually scanned a different host" }
    ],
    "correct": ["a"],
    "explanation": "Unauthenticated scanners rely on service banners and response headers. When those are suppressed or access is restricted by client certificates or interface binding, version detection fails. Nmap with service detection and vulnerability scripts can still obtain limited information. Option b is incorrect; NSE scripts are generally accurate for version checks. Option c is false. Option d is unsupported by the given command."
  },
  {
    "id": 5,
    "qid": "CS0-004-MOD2-005",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "multiselect",
    "prompt": "Select THREE configuration requirements that must be met to perform a successful authenticated vulnerability scan of a Windows Server 2019 domain member using Nessus.",
    "scenario": "<div class=\"scenario-text\"><p>The vulnerability management team is transitioning from discovery-only scans to full authenticated assessments of the Windows server fleet. Targets are domain-joined and protected by Windows Firewall with Advanced Security.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Domain account with local Administrator privileges on the target hosts" },
      { "id": "b", "text": "Remote Registry service enabled and running on each target" },
      { "id": "c", "text": "Inbound firewall rules allowing SMB (TCP 445) and WMI/RPC dynamic ports" },
      { "id": "d", "text": "Disable Windows Defender Real-time protection on all targets during the scan window" },
      { "id": "e", "text": "Configure SSH key-based authentication on port 22 for the scanner account" },
      { "id": "f", "text": "Enable the Telnet service to allow clear-text credential testing" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Authenticated Windows scanning requires administrative credentials to access administrative shares and registry hives, the Remote Registry service to enumerate installed software and patches, and network access through the host firewall for SMB and WMI/RPC. Option d is unnecessary and reduces host security. Option e applies only to Linux/Unix targets. Option f is insecure and irrelevant for modern Windows authenticated scanning."
  },
  {
    "id": 6,
    "qid": "CS0-004-MOD2-006",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "multiselect",
    "prompt": "Select FOUR factors that should be considered when calculating a risk-based priority score for a newly discovered vulnerability beyond the raw CVSS base score.",
    "scenario": "<div class=\"scenario-text\"><p>The vulnerability management platform has ingested a new critical CVE affecting a widely deployed web framework. The CVSS v3.1 base score is 9.8. The team must decide remediation urgency across thousands of assets.</p></div><div class=\"requirements-box\"><h3>Select exactly FOUR</h3></div>",
    "options": [
      { "id": "a", "text": "Asset criticality and business impact of the affected systems" },
      { "id": "b", "text": "Presence of known public exploit code or active exploitation in the wild" },
      { "id": "c", "text": "Network exposure and reachability of the vulnerable services" },
      { "id": "d", "text": "Existence of compensating controls such as WAF rules or network segmentation" },
      { "id": "e", "text": "The age of the operating system kernel on the scanner appliance itself" },
      { "id": "f", "text": "Whether the vulnerability was first published on a weekend or weekday" }
    ],
    "correct": ["a", "b", "c", "d"],
    "selectCount": 4,
    "explanation": "Effective prioritization combines CVSS with asset value, threat intelligence (exploits/in-the-wild activity), exposure, and existing mitigations. Option e is irrelevant to target risk. Option f has no bearing on technical or business risk."
  },
  {
    "id": 7,
    "qid": "CS0-004-MOD2-007",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "multiselect",
    "prompt": "Select THREE best practices for reducing false positives when configuring an authenticated vulnerability scanner for a mixed Windows and Linux environment.",
    "scenario": "<div class=\"scenario-text\"><p>The scanner currently generates a high volume of findings that the operations team later marks as false positives after manual verification. The environment contains both domain-joined Windows servers and SSH-accessible Linux hosts.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Use least-privilege service accounts that still possess the necessary local administrative or root-equivalent rights" },
      { "id": "b", "text": "Enable thorough authentication verification and credential testing before the full scan policy runs" },
      { "id": "c", "text": "Maintain an accurate and up-to-date asset inventory so the scanner only targets live, authorized hosts" },
      { "id": "d", "text": "Disable all version detection plugins to avoid banner-grabbing false positives" },
      { "id": "e", "text": "Run all scans exclusively from the internet-facing DMZ to maximize coverage" },
      { "id": "f", "text": "Configure the scanner to treat every missing patch as Critical regardless of exploitability" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Proper credentials, pre-scan authentication checks, and accurate targeting significantly reduce false positives caused by incomplete enumeration or scanning of non-existent hosts. Option d removes valuable detection capability. Option e increases noise and may violate network segmentation. Option f inflates severity and creates alert fatigue."
  },
  {
    "id": 8,
    "qid": "CS0-004-MOD2-008",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "multiselect",
    "prompt": "Select THREE indicators that a vulnerability scan result should be escalated for immediate threat hunting rather than standard remediation tracking.",
    "scenario": "<div class=\"scenario-text\"><p>A daily authenticated scan of the PCI cardholder data environment has completed. Several high-severity findings were returned on hosts that process payment data.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "The vulnerability has a publicly available Metasploit module and confirmed active exploitation campaigns" },
      { "id": "b", "text": "The affected hosts show anomalous outbound connections to known command-and-control infrastructure in the same time window" },
      { "id": "c", "text": "The finding involves a remote code execution vulnerability on an internet-reachable service" },
      { "id": "d", "text": "The CVSS base score is 7.5 and the patch has been available for 18 months" },
      { "id": "e", "text": "The vulnerability is limited to a local privilege escalation that requires existing authenticated access" },
      { "id": "f", "text": "The scanner itself experienced a temporary authentication failure during the scan" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Active exploitation evidence, concurrent suspicious network activity, and RCE on exposed services justify immediate hunting. Option d represents standard patch lag. Option e is lower urgency. Option f is a scanner operational issue, not a host compromise indicator."
  },
  {
    "id": 9,
    "qid": "CS0-004-MOD2-009",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "multiselect",
    "prompt": "Select THREE advantages of using an agent-based vulnerability assessment approach compared with pure network-based scanning in a large cloud-native environment.",
    "scenario": "<div class=\"scenario-text\"><p>The organization is migrating the majority of its workloads to ephemeral containers and auto-scaling cloud instances. Traditional network scanners struggle with rapid IP address churn and limited network visibility.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Agents can continue assessment even when the instance is not reachable from the central scanner network" },
      { "id": "b", "text": "Agents provide deeper visibility into installed software, running processes, and local configuration" },
      { "id": "c", "text": "Agents reduce the need for complex firewall rules to allow scanner traffic into every security group" },
      { "id": "d", "text": "Agents completely eliminate the requirement for any central vulnerability management console" },
      { "id": "e", "text": "Agents automatically patch every discovered vulnerability without human approval" },
      { "id": "f", "text": "Agents are immune to all forms of evasion and anti-forensic techniques" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Agents operate locally, survive network isolation, collect richer host data, and simplify network access requirements. Option d is false; a console is still required for aggregation and reporting. Option e exceeds normal agent capabilities. Option f is incorrect."
  },
  {
    "id": 10,
    "qid": "CS0-004-MOD2-010",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "multiselect",
    "prompt": "Select FOUR elements that should be present in a well-formed vulnerability scan policy for a PCI-DSS in-scope environment.",
    "scenario": "<div class=\"scenario-text\"><p>The quarterly external and internal vulnerability scans required by PCI-DSS must be performed by an Approved Scanning Vendor (ASV) or an internal team following ASV-equivalent rigor.</p></div><div class=\"requirements-box\"><h3>Select exactly FOUR</h3></div>",
    "options": [
      { "id": "a", "text": "Complete coverage of all in-scope IP addresses and domains" },
      { "id": "b", "text": "Use of the latest vulnerability signatures and plugin sets" },
      { "id": "c", "text": "Authenticated scanning wherever technically feasible and authorized" },
      { "id": "d", "text": "Documented evidence of scan completion and remediation of all High/Critical findings" },
      { "id": "e", "text": "Exclusion of all web application findings to reduce report size" },
      { "id": "f", "text": "Running the scan only during peak business hours to maximize realism" }
    ],
    "correct": ["a", "b", "c", "d"],
    "selectCount": 4,
    "explanation": "PCI-DSS requires full coverage, current signatures, authenticated scanning where possible, and formal evidence of remediation. Option e violates coverage requirements. Option f is operationally undesirable and not required."
  },
  {
    "id": 11,
    "qid": "CS0-004-MOD2-011",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "multiselect",
    "prompt": "Select THREE common causes of incomplete vulnerability scan coverage in an enterprise network.",
    "scenario": "<div class=\"scenario-text\"><p>After a major acquisition, the vulnerability management team discovers that several newly inherited subnets never appear in scan reports despite being listed in the CMDB.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Missing or outdated firewall rules that block scanner traffic to the new subnets" },
      { "id": "b", "text": "Incorrect or incomplete target lists supplied to the scanner" },
      { "id": "c", "text": "Network address translation or asymmetric routing that prevents return traffic" },
      { "id": "d", "text": "The scanner license being limited to a maximum of 50 concurrent hosts" },
      { "id": "e", "text": "All hosts in the new subnets running only UDP services" },
      { "id": "f", "text": "The use of IPv6 exclusively on the new subnets while the scanner is IPv4-only" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Firewall blocks, bad target lists, and routing/NAT issues are the most frequent reasons for missing coverage. Option d is possible but less common. Option e is incorrect because scanners handle UDP. Option f is a possible cause but not among the three most universal."
  },
  {
    "id": 12,
    "qid": "CS0-004-MOD2-012",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "multiselect",
    "prompt": "Select THREE actions that improve the accuracy of vulnerability prioritization when integrating threat intelligence feeds with scanner output.",
    "scenario": "<div class=\"scenario-text\"><p>The organization has subscribed to a commercial threat intelligence service that provides exploit availability, ransomware association, and active campaign data for CVEs.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Automatically elevate findings that match active ransomware or wormable exploits" },
      { "id": "b", "text": "Correlate the CVE identifiers from scanner results with the intelligence feed in near real time" },
      { "id": "c", "text": "Use the intelligence data to adjust the temporal and environmental CVSS metrics" },
      { "id": "d", "text": "Disable all scanner plugins that do not have a matching intelligence entry" },
      { "id": "e", "text": "Ignore all vulnerabilities older than 30 days regardless of exploit status" },
      { "id": "f", "text": "Replace the CVSS base score entirely with a proprietary intelligence score" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Elevating known-exploited or ransomware-linked vulnerabilities, continuous correlation, and proper use of temporal/environmental metrics improve prioritization. Option d removes detection capability. Option e is arbitrary. Option f discards the standardized CVSS framework."
  },
  {
    "id": 13,
    "qid": "CS0-004-MOD2-013",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "multiselect",
    "prompt": "Select THREE requirements for performing a compliant external vulnerability scan under PCI-DSS.",
    "scenario": "<div class=\"scenario-text\"><p>The merchant must submit quarterly external scan reports to their acquiring bank. The scans are performed by an Approved Scanning Vendor.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "The scan must cover all internet-facing IP addresses and domains in scope" },
      { "id": "b", "text": "Any High or Critical vulnerabilities must be remediated and the component re-scanned to a passing state" },
      { "id": "c", "text": "The ASV must use a scanning solution that is itself PCI-DSS compliant and regularly updated" },
      { "id": "d", "text": "Internal authenticated scans may be substituted for the external ASV scan" },
      { "id": "e", "text": "The scan may be performed only once per year if the merchant is classified as Level 4" },
      { "id": "f", "text": "Findings related to SSL/TLS configuration may be permanently accepted without remediation" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "PCI-DSS external scanning mandates full coverage of public-facing assets, remediation of High/Critical issues to a clean re-scan, and use of an approved, maintained ASV solution. Option d is incorrect; external scans are mandatory. Option e violates the quarterly requirement. Option f is not permitted for failing configurations."
  },
  {
    "id": 14,
    "qid": "CS0-004-MOD2-014",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "multiselect",
    "prompt": "Select THREE techniques that help an analyst distinguish true positives from false positives when reviewing vulnerability scan results.",
    "scenario": "<div class=\"scenario-text\"><p>A recent authenticated scan of a development subnet produced several Critical findings against custom internal applications that the development team claims are not vulnerable.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Manually verify the reported version strings and patch levels on the target host" },
      { "id": "b", "text": "Attempt safe, non-destructive validation of the vulnerability using a controlled proof-of-concept" },
      { "id": "c", "text": "Compare the finding against the official vendor security advisory and affected version matrix" },
      { "id": "d", "text": "Immediately open a change ticket to patch every reported Critical finding without validation" },
      { "id": "e", "text": "Disable the scanner plugin permanently after the first dispute from the application owner" },
      { "id": "f", "text": "Rely solely on the CVSS score to determine whether the finding is real" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Version confirmation, controlled validation, and vendor advisory correlation are standard methods for confirming true positives. Option d skips validation and risks unnecessary downtime. Option e removes detection. Option f is insufficient because CVSS does not confirm presence."
  },
  {
    "id": 15,
    "qid": "CS0-004-MOD2-015",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "multiselect",
    "prompt": "Select THREE reasons why authenticated (credentialed) vulnerability scans are preferred over unauthenticated scans for internal infrastructure.",
    "scenario": "<div class=\"scenario-text\"><p>The security architecture team is updating the vulnerability management standard and must justify the requirement for credentialed scanning of all internal servers.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Authenticated scans can enumerate installed software and missing patches with higher accuracy" },
      { "id": "b", "text": "Authenticated scans reduce the number of version-detection false positives caused by suppressed banners" },
      { "id": "c", "text": "Authenticated scans can identify local configuration weaknesses and privilege escalation paths" },
      { "id": "d", "text": "Authenticated scans completely eliminate the need for any network-based discovery" },
      { "id": "e", "text": "Authenticated scans are immune to all forms of network-level evasion" },
      { "id": "f", "text": "Authenticated scans require no coordination with system owners" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Credentialed access provides accurate software inventory, patch status, and local configuration data while avoiding banner-related false positives. Option d is false; discovery is still required. Option e is incorrect. Option f is operationally untrue."
  },
  {
    "id": 16,
    "qid": "CS0-004-MOD2-016",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "multiselect",
    "prompt": "Select THREE data sources that should be correlated with vulnerability scan results to improve prioritization accuracy.",
    "scenario": "<div class=\"scenario-text\"><p>The vulnerability management platform currently ranks findings only by CVSS base score. Leadership has requested a more risk-aware prioritization model.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Asset criticality and business process mapping from the CMDB" },
      { "id": "b", "text": "Threat intelligence indicators of active exploitation and exploit kit inclusion" },
      { "id": "c", "text": "Network exposure and reachability data from the attack surface management system" },
      { "id": "d", "text": "The number of open ports discovered on the scanner appliance itself" },
      { "id": "e", "text": "The preferred text editor used by the vulnerability analysts" },
      { "id": "f", "text": "The color scheme of the vulnerability management dashboard" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Business criticality, threat activity, and exposure are the primary inputs for risk-based prioritization. Options d–f are irrelevant."
  },
  {
    "id": 17,
    "qid": "CS0-004-MOD2-017",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "dragdrop",
    "prompt": "Match each vulnerability scanning approach to its primary characteristic.",
    "scenario": "<div class=\"scenario-text\"><p>A new vulnerability management engineer is learning the differences between common scanning methodologies used in the enterprise.</p></div>",
    "items": [
      { "id": "i1", "text": "Authenticated (Credentialed) Scan" },
      { "id": "i2", "text": "Unauthenticated (Network) Scan" },
      { "id": "i3", "text": "Agent-based Assessment" },
      { "id": "i4", "text": "Passive Vulnerability Detection" }
    ],
    "zones": [
      { "id": "z1", "label": "Relies on remote login credentials to enumerate installed software and configuration" },
      { "id": "z2", "label": "Identifies services and vulnerabilities solely from network responses and banners" },
      { "id": "z3", "label": "Uses a lightweight software component installed on the target to perform local checks" },
      { "id": "z4", "label": "Observes network traffic to infer vulnerabilities without actively probing the target" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Authenticated scans use credentials for deep host inspection. Unauthenticated scans rely on network-visible information. Agent-based methods run locally. Passive detection analyzes traffic without active probing."
  },
  {
    "id": 18,
    "qid": "CS0-004-MOD2-018",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "dragdrop",
    "prompt": "Match each scanning tool or technology to its most common primary use case in vulnerability management.",
    "scenario": "<div class=\"scenario-text\"><p>The security operations team is selecting tools for different phases of the vulnerability identification process.</p></div>",
    "items": [
      { "id": "i1", "text": "Nessus / Qualys / OpenVAS" },
      { "id": "i2", "text": "Nmap with NSE scripts" },
      { "id": "i3", "text": "Burp Suite / OWASP ZAP" },
      { "id": "i4", "text": "Trivy / Grype / Clair" }
    ],
    "zones": [
      { "id": "z1", "label": "Comprehensive authenticated and unauthenticated infrastructure vulnerability scanning" },
      { "id": "z2", "label": "Network discovery, service enumeration, and lightweight vulnerability scripting" },
      { "id": "z3", "label": "Interactive and automated testing of web application and API vulnerabilities" },
      { "id": "z4", "label": "Scanning of container images and software bill of materials for known CVEs" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Traditional VM platforms handle host and network vulnerabilities. Nmap is used for discovery and lightweight checks. Web proxies focus on application-layer testing. Container scanners target image and SBOM analysis."
  },
  {
    "id": 19,
    "qid": "CS0-004-MOD2-019",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "dragdrop",
    "prompt": "Match each prioritization factor to the correct description.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is building a risk-based prioritization matrix that supplements CVSS scores.</p></div>",
    "items": [
      { "id": "i1", "text": "Asset Criticality" },
      { "id": "i2", "text": "Threat Intelligence" },
      { "id": "i3", "text": "Exposure" },
      { "id": "i4", "text": "Compensating Controls" }
    ],
    "zones": [
      { "id": "z1", "label": "Business value and impact if the asset is compromised or unavailable" },
      { "id": "z2", "label": "Evidence of active exploitation, exploit code availability, or ransomware association" },
      { "id": "z3", "label": "Whether the vulnerable service is reachable from untrusted networks" },
      { "id": "z4", "label": "Existing mitigations such as WAF rules, segmentation, or virtual patching that reduce likelihood" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Asset criticality reflects business impact. Threat intelligence indicates real-world likelihood. Exposure measures attack surface. Compensating controls reduce residual risk."
  },
  {
    "id": 20,
    "qid": "CS0-004-MOD2-020",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "dragdrop",
    "prompt": "Match each common vulnerability scan finding category to the most appropriate first response action.",
    "scenario": "<div class=\"scenario-text\"><p>The daily vulnerability triage queue contains findings of varying urgency and confidence.</p></div>",
    "items": [
      { "id": "i1", "text": "Confirmed RCE with public exploit on internet-facing host" },
      { "id": "i2", "text": "Missing OS patch on an isolated internal development server" },
      { "id": "i3", "text": "Possible false positive on a custom application version string" },
      { "id": "i4", "text": "Information disclosure via verbose HTTP headers" }
    ],
    "zones": [
      { "id": "z1", "label": "Immediate escalation to incident response and emergency change process" },
      { "id": "z2", "label": "Schedule within normal patch cycle and track to closure" },
      { "id": "z3", "label": "Perform manual validation before assigning remediation ownership" },
      { "id": "z4", "label": "Log for hardening backlog; low urgency" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Active RCE on exposed assets requires emergency handling. Isolated missing patches follow standard cycles. Ambiguous findings need validation. Low-impact information disclosures are tracked for hardening."
  },
  {
    "id": 21,
    "qid": "CS0-004-MOD2-021",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "dragdrop",
    "prompt": "Match each scanner output artifact to the information it primarily provides.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is reviewing the raw output files generated by a mixed Nessus and Nmap assessment.</p></div>",
    "items": [
      { "id": "i1", "text": "Nessus .nessus XML report" },
      { "id": "i2", "text": "Nmap XML (-oX) output" },
      { "id": "i3", "text": "Nessus plugin output text" },
      { "id": "i4", "text": "CVE ID and CVSS vector string" }
    ],
    "zones": [
      { "id": "z1", "label": "Structured vulnerability findings, severity, and host details suitable for SIEM ingestion" },
      { "id": "z2", "label": "Detailed port, service, and script results for network discovery correlation" },
      { "id": "z3", "label": "Evidence and technical details supporting a specific plugin detection" },
      { "id": "z4", "label": "Standardized vulnerability identifier and severity metrics for prioritization" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Nessus XML is the primary structured report. Nmap XML captures discovery data. Plugin output provides detection evidence. CVE/CVSS supplies the standardized risk metrics."
  },
  {
    "id": 22,
    "qid": "CS0-004-MOD2-022",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "dragdrop",
    "prompt": "Match each environment type to the most suitable primary scanning method.",
    "scenario": "<div class=\"scenario-text\"><p>The vulnerability management program must cover traditional data centers, cloud workloads, and container platforms.</p></div>",
    "items": [
      { "id": "i1", "text": "Traditional on-premises Windows/Linux servers" },
      { "id": "i2", "text": "Ephemeral cloud auto-scaling instances" },
      { "id": "i3", "text": "Container images in a registry" },
      { "id": "i4", "text": "Internet-facing web applications" }
    ],
    "zones": [
      { "id": "z1", "label": "Scheduled authenticated network scans with agents as secondary" },
      { "id": "z2", "label": "Agent-based or API-driven continuous assessment" },
      { "id": "z3", "label": "Registry and CI/CD pipeline image scanning" },
      { "id": "z4", "label": "Authenticated and unauthenticated DAST plus manual testing" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Stable servers suit traditional authenticated scans. Ephemeral cloud instances benefit from agents or cloud APIs. Containers are best assessed at the image level. Web applications require specialized DAST approaches."
  },
  {
    "id": 23,
    "qid": "CS0-004-MOD2-023",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "dragdrop",
    "prompt": "Match each common scanning challenge to the most effective mitigation.",
    "scenario": "<div class=\"scenario-text\"><p>The vulnerability management team is experiencing recurring operational issues that reduce scan quality.</p></div>",
    "items": [
      { "id": "i1", "text": "High rate of authentication failures during credentialed scans" },
      { "id": "i2", "text": "Scanner traffic blocked by host-based firewalls" },
      { "id": "i3", "text": "Rapid IP address changes in cloud environments" },
      { "id": "i4", "text": "Excessive false positives on custom applications" }
    ],
    "zones": [
      { "id": "z1", "label": "Implement pre-scan credential validation and account lockout monitoring" },
      { "id": "z2", "label": "Deploy standardized firewall exceptions or use agent-based assessment" },
      { "id": "z3", "label": "Shift to agent-based or cloud-native API assessment methods" },
      { "id": "z4", "label": "Create custom plugin exceptions and perform manual validation workflows" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Credential health checks prevent lockouts. Firewall rules or agents solve access issues. Agents/APIs handle ephemeral infrastructure. Custom exceptions and validation reduce noise from non-standard applications."
  },
  {
    "id": 24,
    "qid": "CS0-004-MOD2-024",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "dragdrop",
    "prompt": "Match each CVSS-related term to its correct definition in the context of vulnerability prioritization.",
    "scenario": "<div class=\"scenario-text\"><p>Analysts must correctly interpret CVSS metrics when deciding remediation urgency.</p></div>",
    "items": [
      { "id": "i1", "text": "Base Score" },
      { "id": "i2", "text": "Temporal Score" },
      { "id": "i3", "text": "Environmental Score" },
      { "id": "i4", "text": "Vector String" }
    ],
    "zones": [
      { "id": "z1", "label": "Intrinsic characteristics of the vulnerability that do not change over time" },
      { "id": "z2", "label": "Characteristics that evolve over the lifetime of the vulnerability (exploit maturity, remediation level)" },
      { "id": "z3", "label": "Score adjusted for the specific impact and exposure within an organization’s environment" },
      { "id": "z4", "label": "Compact textual representation of all metric values used to calculate the score" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Base metrics are constant. Temporal metrics change with exploit availability and fixes. Environmental metrics reflect organizational context. The vector string encodes the metric values."
  },
  {
    "id": 25,
    "qid": "CS0-004-MOD2-025",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "dragdrop",
    "prompt": "Match each vulnerability management lifecycle phase to its primary activity.",
    "scenario": "<div class=\"scenario-text\"><p>The organization is formalizing its vulnerability management process according to industry best practices.</p></div>",
    "items": [
      { "id": "i1", "text": "Discover" },
      { "id": "i2", "text": "Prioritize" },
      { "id": "i3", "text": "Remediate" },
      { "id": "i4", "text": "Verify" }
    ],
    "zones": [
      { "id": "z1", "label": "Identify assets and run vulnerability scans or assessments" },
      { "id": "z2", "label": "Rank findings using CVSS, asset criticality, threat intelligence, and exposure" },
      { "id": "z3", "label": "Apply patches, configuration changes, or compensating controls" },
      { "id": "z4", "label": "Re-scan or otherwise confirm that the vulnerability has been successfully addressed" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "The standard cycle is Discover → Prioritize → Remediate → Verify. Each phase has a distinct purpose in reducing organizational risk."
  },
  {
    "id": 26,
    "qid": "CS0-004-MOD2-026",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "dragdrop",
    "prompt": "Match each type of scan policy configuration to its intended purpose.",
    "scenario": "<div class=\"scenario-text\"><p>A senior analyst is reviewing and tuning the organization’s Nessus scan policies.</p></div>",
    "items": [
      { "id": "i1", "text": "Discovery-only policy" },
      { "id": "i2", "text": "Full authenticated policy" },
      { "id": "i3", "text": "Web application policy" },
      { "id": "i4", "text": "Compliance policy" }
    ],
    "zones": [
      { "id": "z1", "label": "Identify live hosts and open ports without performing deep vulnerability checks" },
      { "id": "z2", "label": "Perform comprehensive local checks using credentials for patch and configuration assessment" },
      { "id": "z3", "label": "Focus on HTTP/HTTPS services, directories, and common web vulnerabilities" },
      { "id": "z4", "label": "Evaluate hosts against specific regulatory or hardening benchmarks (CIS, PCI, etc.)" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Discovery policies map the attack surface. Authenticated policies deliver depth. Web policies target application-layer issues. Compliance policies measure adherence to baselines."
  },
  {
    "id": 27,
    "qid": "CS0-004-MOD2-027",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "dragdrop",
    "prompt": "Match each false-positive reduction technique to the situation it best addresses.",
    "scenario": "<div class=\"scenario-text\"><p>The triage team is spending excessive time investigating findings that later prove to be inaccurate.</p></div>",
    "items": [
      { "id": "i1", "text": "Enable thorough credential testing before the scan" },
      { "id": "i2", "text": "Maintain accurate asset ownership and criticality data" },
      { "id": "i3", "text": "Create custom plugin exclusions for known safe configurations" },
      { "id": "i4", "text": "Correlate findings with configuration management database records" }
    ],
    "zones": [
      { "id": "z1", "label": "Prevents incomplete enumeration caused by failed authentication" },
      { "id": "z2", "label": "Ensures findings are assigned to the correct remediation owners and prioritized correctly" },
      { "id": "z3", "label": "Suppresses detections that have been manually verified as non-issues" },
      { "id": "z4", "label": "Validates that the reported software version actually matches the installed package" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Credential testing avoids partial results. Accurate ownership improves triage. Custom exclusions reduce noise. CMDB correlation confirms version accuracy."
  },
  {
    "id": 28,
    "qid": "CS0-004-MOD2-028",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "dragdrop",
    "prompt": "Match each scanning frequency recommendation to the corresponding asset class.",
    "scenario": "<div class=\"scenario-text\"><p>The vulnerability management policy is being updated to define minimum scan cadences based on risk.</p></div>",
    "items": [
      { "id": "i1", "text": "Internet-facing critical systems" },
      { "id": "i2", "text": "Internal high-value servers" },
      { "id": "i3", "text": "Standard internal workstations" },
      { "id": "i4", "text": "Isolated laboratory or test networks" }
    ],
    "zones": [
      { "id": "z1", "label": "Continuous or daily authenticated scanning plus external ASV scans" },
      { "id": "z2", "label": "Weekly authenticated scanning" },
      { "id": "z3", "label": "Monthly or bi-weekly authenticated scanning" },
      { "id": "z4", "label": "Quarterly or risk-based scanning" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Exposure and criticality drive frequency. Public critical assets need the highest cadence. Isolated low-risk networks can be scanned less often."
  },
  {
    "id": 29,
    "qid": "CS0-004-MOD2-029",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the network segment that should be scanned with the highest frequency and most aggressive authenticated policy due to its exposure and data sensitivity.",
    "scenario": "<div class=\"scenario-text\"><p>Review the simplified enterprise network diagram showing four primary zones: DMZ (public web and reverse proxies), Internal Server VLAN (domain controllers and databases), User Workstation VLAN, and Isolated Lab VLAN.</p></div>",
    "nodes": [
      { "id": "node1", "label": "DMZ\n(Public Web Tier)", "x": 20, "y": 40 },
      { "id": "node2", "label": "Internal Server VLAN\n(Domain Controllers & DBs)", "x": 50, "y": 40 },
      { "id": "node3", "label": "User Workstation VLAN", "x": 80, "y": 25 },
      { "id": "node4", "label": "Isolated Lab VLAN", "x": 80, "y": 55 }
    ],
    "correct": ["node1"],
    "explanation": "The DMZ contains internet-reachable services and therefore presents the highest external attack surface. It requires the most frequent and thorough scanning. Internal servers are critical but less exposed. Workstations and labs have lower prioritization for continuous aggressive scanning."
  },
  {
    "id": 30,
    "qid": "CS0-004-MOD2-030",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that represents the preferred location for deploying a vulnerability scanner appliance to maximize internal network coverage while minimizing firewall rule complexity.",
    "scenario": "<div class=\"scenario-text\"><p>The architecture shows: Internet edge firewall, DMZ, core internal firewall, Internal Server VLAN, and a dedicated Management VLAN that has controlled access to all other internal segments.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Internet Edge\n(Outside Firewall)", "x": 15, "y": 50 },
      { "id": "node2", "label": "DMZ Segment", "x": 35, "y": 50 },
      { "id": "node3", "label": "Management VLAN\n(Controlled Access)", "x": 60, "y": 50 },
      { "id": "node4", "label": "User Access VLAN", "x": 85, "y": 50 }
    ],
    "correct": ["node3"],
    "explanation": "Placing the scanner in a dedicated Management VLAN with carefully controlled access to all internal segments provides broad coverage without placing the scanner itself in the DMZ or on the open internet. Edge and DMZ placement would require more complex and riskier firewall rules for internal scanning."
  },
  {
    "id": 31,
    "qid": "CS0-004-MOD2-031",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the asset type that is most appropriately assessed using container image scanning tools rather than traditional network vulnerability scanners.",
    "scenario": "<div class=\"scenario-text\"><p>The environment inventory contains: bare-metal Windows servers, Linux VMs, Kubernetes worker nodes, and container images stored in a private registry that are deployed as short-lived pods.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Bare-metal\nWindows Servers", "x": 20, "y": 40 },
      { "id": "node2", "label": "Linux Virtual\nMachines", "x": 45, "y": 40 },
      { "id": "node3", "label": "Kubernetes\nWorker Nodes", "x": 70, "y": 25 },
      { "id": "node4", "label": "Container Images\nin Registry", "x": 70, "y": 55 }
    ],
    "correct": ["node4"],
    "explanation": "Container images are best assessed with specialized image scanners (Trivy, Grype, Clair, etc.) that analyze layers and SBOMs. Traditional network scanners assess the underlying nodes or VMs but do not replace image-level scanning of the containers themselves."
  },
  {
    "id": 32,
    "qid": "CS0-004-MOD2-032",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the scan result severity that should trigger an immediate investigation for possible active compromise when combined with threat intelligence indicating active exploitation.",
    "scenario": "<div class=\"scenario-text\"><p>A dashboard shows four recent findings on a critical database server: one Critical RCE with known exploit, one High missing patch, one Medium information disclosure, and one Low cipher suite weakness.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Critical\n(RCE + Public Exploit)", "x": 20, "y": 40 },
      { "id": "node2", "label": "High\n(Missing OS Patch)", "x": 45, "y": 40 },
      { "id": "node3", "label": "Medium\n(Info Disclosure)", "x": 70, "y": 25 },
      { "id": "node4", "label": "Low\n(Weak Cipher)", "x": 70, "y": 55 }
    ],
    "correct": ["node1"],
    "explanation": "A Critical remote code execution vulnerability that also has confirmed public exploit code and active campaigns is the highest priority for immediate investigation and potential incident response. The other severities follow standard remediation timelines."
  },
  {
    "id": 33,
    "qid": "CS0-004-MOD2-033",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the location where an authenticated vulnerability scan of domain-joined Windows servers should obtain its credentials from in a well-architected environment.",
    "scenario": "<div class=\"scenario-text\"><p>The credential management options shown are: hard-coded in the scanner configuration file, stored in a central secrets vault with just-in-time retrieval, embedded in a scheduled task on each target, or passed interactively by an analyst at scan start.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Hard-coded in\nScanner Config", "x": 20, "y": 40 },
      { "id": "node2", "label": "Central Secrets Vault\n(JIT Retrieval)", "x": 50, "y": 40 },
      { "id": "node3", "label": "Scheduled Task\non Target Hosts", "x": 80, "y": 25 },
      { "id": "node4", "label": "Interactive Analyst\nEntry", "x": 80, "y": 55 }
    ],
    "correct": ["node2"],
    "explanation": "A central secrets vault with just-in-time retrieval provides the best security and auditability for scanner credentials. Hard-coding is a serious risk. Embedding credentials on targets expands the attack surface. Interactive entry does not scale and is operationally impractical."
  },
  {
    "id": 34,
    "qid": "CS0-004-MOD2-034",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the scanning approach that provides the deepest visibility into missing patches and local configuration issues on a Windows server.",
    "scenario": "<div class=\"scenario-text\"><p>Four assessment methods are available: unauthenticated network scan, authenticated network scan using domain admin credentials, agent-based local assessment, and passive traffic analysis.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Unauthenticated\nNetwork Scan", "x": 20, "y": 40 },
      { "id": "node2", "label": "Authenticated\nNetwork Scan", "x": 45, "y": 40 },
      { "id": "node3", "label": "Agent-based\nLocal Assessment", "x": 70, "y": 25 },
      { "id": "node4", "label": "Passive Traffic\nAnalysis", "x": 70, "y": 55 }
    ],
    "correct": ["node3"],
    "explanation": "An agent running locally on the host has the most complete view of installed software, patch levels, and configuration settings without relying on network protocols or remote service availability. Authenticated network scans are strong but still limited by remote access protocols. Unauthenticated and passive methods have significantly less depth."
  },
  {
    "id": 35,
    "qid": "CS0-004-MOD2-035",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Nessus scan policy configuration that enables authenticated Windows scanning via SMB.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is reviewing a Nessus Advanced Scan policy XML snippet used for internal Windows server assessments.</p></div>",
    "nodes": [
      { "id": "l1", "label": "<preference><name>scan_malware</name><value>no</value></preference>" },
      { "id": "l2", "label": "<preference><name>enable_plugin_list</name><value>yes</value></preference>" },
      { "id": "l3", "label": "<preference><name>smb_login</name><value>DOMAIN\\scanaccount</value></preference>" },
      { "id": "l4", "label": "<preference><name>port_range</name><value>1-65535</value></preference>" },
      { "id": "l5", "label": "<preference><name>safe_checks</name><value>yes</value></preference>" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "The smb_login preference supplies the domain credentials required for authenticated SMB access. The other preferences control malware scanning, plugin selection, port range, and safe checks, none of which enable Windows authentication."
  },
  {
    "id": 36,
    "qid": "CS0-004-MOD2-036",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Nmap command that enables version detection and vulnerability-oriented NSE scripts.",
    "scenario": "<div class=\"scenario-text\"><p>A junior analyst constructed the following Nmap command for an internal assessment and needs guidance on which portion activates deeper service and vulnerability checks.</p></div>",
    "nodes": [
      { "id": "l1", "label": "nmap -Pn" },
      { "id": "l2", "label": "-sS -p 1-1000" },
      { "id": "l3", "label": "-sV --script=vuln" },
      { "id": "l4", "label": "-oX scan-results.xml" },
      { "id": "l5", "label": "192.168.10.0/24" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "The -sV flag enables version detection and --script=vuln loads the vulnerability-category NSE scripts. The other portions control host discovery suppression, SYN scan and port range, output format, and target specification."
  },
  {
    "id": 37,
    "qid": "CS0-004-MOD2-037",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the OpenVAS / Greenbone scan configuration that defines the use of credentials for authenticated checks.",
    "scenario": "<div class=\"scenario-text\"><p>An administrator is examining an OpenVAS task configuration exported in XML format.</p></div>",
    "nodes": [
      { "id": "l1", "label": "<name>Full and Fast</name>" },
      { "id": "l2", "label": "<target id=\"...\"><name>Internal Servers</name></target>" },
      { "id": "l3", "label": "<credentials><credential id=\"...\"><name>ssh-key-scan</name></credential></credentials>" },
      { "id": "l4", "label": "<scanner id=\"...\"><name>OpenVAS Default</name></scanner>" },
      { "id": "l5", "label": "<schedule id=\"...\"><name>Weekly</name></schedule>" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "The credentials element associates a stored credential set with the scan task, enabling authenticated checks. The other elements define the scan configuration name, target, scanner engine, and schedule."
  },
  {
    "id": 38,
    "qid": "CS0-004-MOD2-038",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Qualys scan report snippet that indicates the finding was detected using authenticated access.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is reviewing a Qualys VMDR finding detail to determine whether the detection relied on credentials.</p></div>",
    "nodes": [
      { "id": "l1", "label": "QID: 38173" },
      { "id": "l2", "label": "Title: SSL/TLS Server supports TLSv1.0" },
      { "id": "l3", "label": "Detection Method: Authenticated" },
      { "id": "l4", "label": "CVSS Base: 5.0" },
      { "id": "l5", "label": "First Detected: 2026-08-12" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "The Detection Method field explicitly states whether the finding was obtained via authenticated or unauthenticated means. The other fields provide the QID, title, score, and discovery date."
  },
  {
    "id": 39,
    "qid": "CS0-004-MOD2-039",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Python script that correctly parses the CVSS vector string from a vulnerability feed to extract the Attack Vector metric.",
    "scenario": "<div class=\"scenario-text\"><p>A security automation engineer is writing a script to enrich scanner findings with CVSS vector details.</p></div>",
    "nodes": [
      { "id": "l1", "label": "import re" },
      { "id": "l2", "label": "vector = \"CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H\"" },
      { "id": "l3", "label": "av_match = re.search(r'AV:([NALP])', vector)" },
      { "id": "l4", "label": "print(av_match.group(1) if av_match else \"Unknown\")" },
      { "id": "l5", "label": "severity = {\"score\": 9.8, \"severity\": \"Critical\"}" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "Line l3 uses a regular expression to locate and capture the Attack Vector value (N, A, L, or P) from the CVSS vector string. The other lines import the module, define the sample vector, print the result, or define an unrelated severity dictionary."
  },
  {
    "id": 40,
    "qid": "CS0-004-MOD2-040",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Identification, Scanning Tools & Prioritization",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Bash audit script that invokes an authenticated OpenVAS scan using a pre-configured target and credentials.",
    "scenario": "<div class=\"scenario-text\"><p>A scheduled automation job uses the Greenbone Vulnerability Management CLI (gvm-cli) to launch scans.</p></div>",
    "nodes": [
      { "id": "l1", "label": "#!/bin/bash" },
      { "id": "l2", "label": "TARGET_ID=\"a1b2c3d4-e5f6-7890-abcd-ef1234567890\"" },
      { "id": "l3", "label": "gvm-cli --gmp-username admin --gmp-password \"$PASS\" socket --xml \"<start_task task_id='$TASK_ID'/>\"" },
      { "id": "l4", "label": "echo \"Scan launched at $(date)\"" },
      { "id": "l5", "label": "exit 0" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "Line l3 executes the gvm-cli command that authenticates to the GVM daemon and starts the pre-defined task (which itself contains the target and credential configuration). The other lines set the shebang, define a variable, log the action, or exit."
  },
   {
    "id": 41,
    "qid": "CS0-004-MOD2-041",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "single",
    "prompt": "An analyst receives a CVSS v3.1 vector of CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H for a newly disclosed vulnerability. What is the correct interpretation of the Scope metric value?",
    "scenario": "<div class=\"scenario-text\"><p>A zero-day affecting a widely used API gateway has been published. The CVSS vector indicates Scope:Changed. The analyst must correctly explain the impact boundary to the change advisory board.</p></div>",
    "options": [
      { "id": "a", "text": "Exploitation of the vulnerable component can affect resources beyond the security scope of that component" },
      { "id": "b", "text": "The vulnerability can only be exploited from an adjacent network segment" },
      { "id": "c", "text": "User interaction is required for successful exploitation" },
      { "id": "d", "text": "Privileges are required before the attacker can trigger the vulnerability" }
    ],
    "correct": ["a"],
    "explanation": "Scope:Changed (S:C) means a successful exploit can impact components or resources outside the vulnerable component’s security authority. Option b confuses Scope with Attack Vector. Option c refers to User Interaction. Option d refers to Privileges Required."
  },
  {
    "id": 42,
    "qid": "CS0-004-MOD2-042",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "single",
    "prompt": "A vulnerability has a CVSS v3.1 base score of 9.8 and a temporal score of 8.1. What is the most likely reason for the reduction between base and temporal scores?",
    "scenario": "<div class=\"scenario-text\"><p>The NVD entry shows Exploit Code Maturity: Proof-of-Concept and Remediation Level: Official Fix. The vulnerability is six months old and a vendor patch has been available for four months.</p></div>",
    "options": [
      { "id": "a", "text": "The availability of an official patch and limited exploit maturity lower the temporal score" },
      { "id": "b", "text": "The Attack Vector was incorrectly set to Network in the base metrics" },
      { "id": "c", "text": "Environmental metrics were applied by the NVD" },
      { "id": "d", "text": "The Confidentiality impact was overstated in the base score" }
    ],
    "correct": ["a"],
    "explanation": "Temporal metrics adjust the base score for factors that change over time, primarily Exploit Code Maturity, Remediation Level, and Report Confidence. An official fix and only proof-of-concept exploit code reduce the temporal score. Environmental metrics are organization-specific and not applied by NVD. Base metric errors are not the cause of a temporal reduction."
  },
  {
    "id": 43,
    "qid": "CS0-004-MOD2-043",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "single",
    "prompt": "Threat intelligence indicates that a critical vulnerability is being actively exploited by a known ransomware group. The CVSS base score is 7.5. How should this information most appropriately influence prioritization?",
    "scenario": "<div class=\"scenario-text\"><p>The vulnerability management platform currently ranks findings solely by CVSS base score. A new intelligence report from a trusted ISAC links CVE-2025-XXXX to ongoing ransomware campaigns targeting the same software version present in the environment.</p></div>",
    "options": [
      { "id": "a", "text": "Elevate the finding above other 7.5-scored vulnerabilities that lack active exploitation evidence" },
      { "id": "b", "text": "Lower the priority because the base score is only High, not Critical" },
      { "id": "c", "text": "Ignore the intelligence because CVSS already incorporates threat information" },
      { "id": "d", "text": "Suppress the finding until the CVSS score is recalculated by NVD" }
    ],
    "correct": ["a"],
    "explanation": "Threat intelligence about active exploitation and ransomware association is a primary temporal and environmental factor that should raise priority independent of the raw base score. CVSS base metrics do not include real-time threat activity. Waiting for an NVD update or treating the base score as immutable would delay necessary action."
  },
  {
    "id": 44,
    "qid": "CS0-004-MOD2-044",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "single",
    "prompt": "An analyst is calculating an environmental CVSS score. The organization has deployed a WAF that fully blocks the known exploit path and the affected systems have no confidentiality or integrity requirements beyond availability. Which environmental metric adjustment is most appropriate?",
    "scenario": "<div class=\"scenario-text\"><p>The base vector is AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H. Compensating controls and business requirements have been validated by the architecture team.</p></div>",
    "options": [
      { "id": "a", "text": "Reduce Confidentiality and Integrity requirements and apply a Modified Attack Vector reflecting the WAF mitigation" },
      { "id": "b", "text": "Increase all impact metrics because the systems are production" },
      { "id": "c", "text": "Set the environmental score equal to the base score because WAFs are not considered in CVSS" },
      { "id": "d", "text": "Change Scope to Changed solely because a WAF is present" }
    ],
    "correct": ["a"],
    "explanation": "Environmental metrics allow modification of base metrics (Modified Attack Vector, etc.) and adjustment of Confidentiality/Integrity/Availability Requirements based on organizational context. A WAF that blocks the exploit path can lower the effective Attack Vector or impact. Simply raising impacts or ignoring the WAF is incorrect. Scope is not altered by the presence of a WAF."
  },
  {
    "id": 45,
    "qid": "CS0-004-MOD2-045",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "multiselect",
    "prompt": "Select THREE CVSS v3.1 base metrics that directly influence the Attack Complexity and ease of exploitation assessment.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is manually reviewing a CVSS vector to determine how difficult the vulnerability is to exploit under real-world conditions.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Attack Vector (AV)" },
      { "id": "b", "text": "Attack Complexity (AC)" },
      { "id": "c", "text": "Privileges Required (PR)" },
      { "id": "d", "text": "User Interaction (UI)" },
      { "id": "e", "text": "Scope (S)" },
      { "id": "f", "text": "Confidentiality Impact (C)" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Attack Vector, Attack Complexity, and Privileges Required are the primary metrics that describe how an attacker reaches and triggers the vulnerability. User Interaction is also relevant but the three listed are the core exploitability set commonly examined together. Scope and impact metrics describe consequences rather than exploit difficulty."
  },
  {
    "id": 46,
    "qid": "CS0-004-MOD2-046",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "multiselect",
    "prompt": "Select FOUR sources of threat intelligence that should be correlated with vulnerability scan results to improve prioritization.",
    "scenario": "<div class=\"scenario-text\"><p>The vulnerability management platform is being enhanced with external intelligence feeds. The team must identify which data sources provide the highest value for risk-based prioritization.</p></div><div class=\"requirements-box\"><h3>Select exactly FOUR</h3></div>",
    "options": [
      { "id": "a", "text": "CISA Known Exploited Vulnerabilities (KEV) catalog" },
      { "id": "b", "text": "Commercial threat intelligence feeds reporting active ransomware campaigns" },
      { "id": "c", "text": "Exploit-DB and Metasploit module availability" },
      { "id": "d", "text": "ISAC/ISAO alerts specific to the organization’s industry" },
      { "id": "e", "text": "The internal coffee-machine network traffic volume" },
      { "id": "f", "text": "The preferred IDE of the development team" }
    ],
    "correct": ["a", "b", "c", "d"],
    "selectCount": 4,
    "explanation": "CISA KEV, commercial ransomware intelligence, public exploit availability, and industry-specific ISAC alerts are high-value inputs for elevating real-world risk. The remaining options have no relevance to vulnerability prioritization."
  },
  {
    "id": 47,
    "qid": "CS0-004-MOD2-047",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "multiselect",
    "prompt": "Select THREE conditions under which a vulnerability with a moderate CVSS base score should still be treated as Critical priority.",
    "scenario": "<div class=\"scenario-text\"><p>A vulnerability affecting an internal authentication service carries a CVSS base score of 6.5. Additional context has been gathered from threat intelligence and asset data.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Active exploitation is confirmed in the wild by multiple intelligence sources" },
      { "id": "b", "text": "The affected service is internet-facing and processes high-value authentication traffic" },
      { "id": "c", "text": "A reliable public exploit module is available and trivial to use" },
      { "id": "d", "text": "The vulnerability was first published more than two years ago" },
      { "id": "e", "text": "The scanner reported the finding on a non-production lab host only" },
      { "id": "f", "text": "The CVSS vector shows Privileges Required: High" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Active exploitation, high exposure of a critical service, and easy-to-use public exploits justify elevating priority regardless of the moderate base score. Age alone, lab-only presence, or high privileges required do not automatically raise priority to Critical."
  },
  {
    "id": 48,
    "qid": "CS0-004-MOD2-048",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "multiselect",
    "prompt": "Select THREE accurate statements about the relationship between CVSS temporal metrics and threat intelligence.",
    "scenario": "<div class=\"scenario-text\"><p>The security team is documenting how external threat data should influence CVSS temporal scoring inside the vulnerability management platform.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Exploit Code Maturity can be raised when reliable public exploits or in-the-wild attacks are confirmed" },
      { "id": "b", "text": "Remediation Level improves when an official vendor patch becomes available" },
      { "id": "c", "text": "Report Confidence increases when multiple independent sources corroborate the vulnerability details" },
      { "id": "d", "text": "Temporal metrics permanently replace the base score once intelligence is applied" },
      { "id": "e", "text": "Threat intelligence has no effect on any CVSS metric group" },
      { "id": "f", "text": "Environmental metrics are identical to temporal metrics" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Exploit Code Maturity, Remediation Level, and Report Confidence are the three temporal metrics and are directly informed by threat intelligence and vendor activity. Temporal scores adjust but do not replace the base score. Environmental metrics are separate and organization-specific."
  },
  {
    "id": 49,
    "qid": "CS0-004-MOD2-049",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "multiselect",
    "prompt": "Select FOUR elements that should be present in a well-formed vulnerability analysis report delivered to senior leadership.",
    "scenario": "<div class=\"scenario-text\"><p>The CISO has requested a concise weekly vulnerability intelligence brief that goes beyond raw scanner counts.</p></div><div class=\"requirements-box\"><h3>Select exactly FOUR</h3></div>",
    "options": [
      { "id": "a", "text": "Count of new Critical and High findings by asset criticality tier" },
      { "id": "b", "text": "Findings linked to active threat campaigns or CISA KEV entries" },
      { "id": "c", "text": "Trend analysis showing remediation velocity versus discovery rate" },
      { "id": "d", "text": "Top risk concentrations by business unit or application" },
      { "id": "e", "text": "Full raw Nessus XML for every scanned host" },
      { "id": "f", "text": "List of every low-severity finding without prioritization" }
    ],
    "correct": ["a", "b", "c", "d"],
    "selectCount": 4,
    "explanation": "Leadership needs summarized risk, threat context, trends, and concentration points. Raw XML dumps and unprioritized low findings are operational detail, not executive content."
  },
  {
    "id": 50,
    "qid": "CS0-004-MOD2-050",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "multiselect",
    "prompt": "Select THREE differences between CVSS v3.1 and CVSS v4.0 that analysts must understand when consuming modern vulnerability data.",
    "scenario": "<div class=\"scenario-text\"><p>Several vendors have begun publishing CVSS v4.0 vectors. The team must update analysis procedures accordingly.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "CVSS v4.0 introduces additional base metrics such as Attack Requirements (AT)" },
      { "id": "b", "text": "CVSS v4.0 provides a more granular Threat metric group replacing the older temporal metrics" },
      { "id": "c", "text": "CVSS v4.0 includes explicit Supplemental metrics for consumer context" },
      { "id": "d", "text": "CVSS v4.0 completely eliminates the concept of a base score" },
      { "id": "e", "text": "CVSS v4.0 scores are always lower than the equivalent v3.1 score" },
      { "id": "f", "text": "CVSS v4.0 is only applicable to hardware vulnerabilities" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "CVSS v4.0 adds Attack Requirements, restructures the Threat metrics, and introduces Supplemental metrics. It retains a base score concept, does not systematically lower scores, and applies to software as well as hardware."
  },
  {
    "id": 51,
    "qid": "CS0-004-MOD2-051",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "multiselect",
    "prompt": "Select THREE actions an analyst should take when a high-severity vulnerability appears on both the CISA KEV catalog and a commercial ransomware threat feed.",
    "scenario": "<div class=\"scenario-text\"><p>A newly disclosed vulnerability affecting a common enterprise VPN appliance is listed in CISA KEV and simultaneously reported as leveraged by a ransomware group.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Immediately elevate the finding to the highest internal priority tier" },
      { "id": "b", "text": "Verify presence of the vulnerable version across the asset inventory" },
      { "id": "c", "text": "Initiate emergency change procedures for exposed instances" },
      { "id": "d", "text": "Wait for the next quarterly scan cycle before taking action" },
      { "id": "e", "text": "Suppress the finding because the base CVSS is only 7.2" },
      { "id": "f", "text": "Assume all instances are already patched without verification" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "KEV listing plus active ransomware use mandates immediate prioritization, inventory verification, and emergency remediation of exposed assets. Delaying, suppressing, or assuming patch status are inappropriate."
  },
  {
    "id": 52,
    "qid": "CS0-004-MOD2-052",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "multiselect",
    "prompt": "Select THREE valid uses of the CVSS environmental score within an enterprise vulnerability management program.",
    "scenario": "<div class=\"scenario-text\"><p>The organization wants to move from pure base-score ranking to a more accurate risk model.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Adjust impact metrics according to the actual confidentiality, integrity, and availability requirements of the asset" },
      { "id": "b", "text": "Incorporate compensating controls that reduce the effective attack vector or complexity" },
      { "id": "c", "text": "Reflect the specific network exposure and reachability of the vulnerable service" },
      { "id": "d", "text": "Replace the need for any threat intelligence correlation" },
      { "id": "e", "text": "Automatically generate vendor patches" },
      { "id": "f", "text": "Eliminate the requirement to track remediation SLAs" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Environmental scoring customizes base metrics for organizational context, including CIA requirements, controls, and exposure. It does not replace threat intelligence, generate patches, or remove SLA tracking."
  },
  {
    "id": 53,
    "qid": "CS0-004-MOD2-053",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "multiselect",
    "prompt": "Select FOUR indicators that a vulnerability analysis is incomplete and requires additional investigation before prioritization.",
    "scenario": "<div class=\"scenario-text\"><p>An automated ticket has been created from a scanner finding. The analyst must decide whether enough context exists to assign a final priority.</p></div><div class=\"requirements-box\"><h3>Select exactly FOUR</h3></div>",
    "options": [
      { "id": "a", "text": "No threat intelligence correlation has been performed" },
      { "id": "b", "text": "Asset criticality is listed as “Unknown” in the CMDB" },
      { "id": "c", "text": "Network exposure data is missing or outdated" },
      { "id": "d", "text": "The CVSS vector itself is absent or malformed" },
      { "id": "e", "text": "The finding was generated by a fully authenticated scan" },
      { "id": "f", "text": "The vulnerability is listed in the CISA KEV catalog" }
    ],
    "correct": ["a", "b", "c", "d"],
    "selectCount": 4,
    "explanation": "Missing threat context, unknown criticality, absent exposure data, and an incomplete CVSS vector all prevent accurate prioritization. Authenticated detection and KEV listing are positive indicators of higher confidence or urgency."
  },
  {
    "id": 54,
    "qid": "CS0-004-MOD2-054",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "multiselect",
    "prompt": "Select THREE best practices when integrating commercial threat intelligence platforms with a vulnerability management system.",
    "scenario": "<div class=\"scenario-text\"><p>The architecture team is designing the data flow between a threat intelligence platform and the vulnerability management console.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Match intelligence indicators to CVE identifiers in near real time" },
      { "id": "b", "text": "Automatically elevate findings that match high-confidence active exploitation reports" },
      { "id": "c", "text": "Preserve the original CVSS base score while applying intelligence as an additional risk modifier" },
      { "id": "d", "text": "Overwrite all scanner severities with the intelligence vendor’s proprietary score" },
      { "id": "e", "text": "Disable all vulnerability scanning once intelligence feeds are connected" },
      { "id": "f", "text": "Ignore intelligence older than 24 hours regardless of ongoing campaigns" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Real-time CVE matching, automatic elevation of actively exploited findings, and treating intelligence as a modifier rather than a replacement preserve both standardization and responsiveness. Overwriting scores, disabling scans, or discarding recent intelligence are counterproductive."
  },
  {
    "id": 55,
    "qid": "CS0-004-MOD2-055",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "multiselect",
    "prompt": "Select THREE reasons why an organization should maintain both CVSS base scores and an internal risk score that incorporates threat intelligence.",
    "scenario": "<div class=\"scenario-text\"><p>Some stakeholders argue that only the internal risk score is needed and that CVSS can be discarded.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "CVSS provides a standardized, vendor-agnostic severity language for communication with external parties" },
      { "id": "b", "text": "Regulatory and contractual obligations often reference CVSS thresholds" },
      { "id": "c", "text": "Base scores remain stable and comparable across time and organizations" },
      { "id": "d", "text": "Internal risk scores are always identical to CVSS base scores" },
      { "id": "e", "text": "Threat intelligence never changes after initial publication" },
      { "id": "f", "text": "CVSS already includes real-time ransomware campaign data" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "CVSS supplies a common language, satisfies external requirements, and offers temporal stability. Internal scores add organization-specific context but do not replace the need for the standardized base metric."
  },
  {
    "id": 56,
    "qid": "CS0-004-MOD2-056",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "multiselect",
    "prompt": "Select THREE metrics that belong to the CVSS v3.1 Impact metric group.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is validating a manually constructed CVSS vector and must confirm the impact portion is correctly populated.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Confidentiality (C)" },
      { "id": "b", "text": "Integrity (I)" },
      { "id": "c", "text": "Availability (A)" },
      { "id": "d", "text": "Attack Vector (AV)" },
      { "id": "e", "text": "Privileges Required (PR)" },
      { "id": "f", "text": "User Interaction (UI)" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Confidentiality, Integrity, and Availability form the Impact metric group. Attack Vector, Privileges Required, and User Interaction belong to the Exploitability metric group."
  },
  {
    "id": 57,
    "qid": "CS0-004-MOD2-057",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "dragdrop",
    "prompt": "Match each CVSS v3.1 metric group to its correct description.",
    "scenario": "<div class=\"scenario-text\"><p>A new analyst is learning the structure of CVSS v3.1 vectors.</p></div>",
    "items": [
      { "id": "i1", "text": "Base Metric Group" },
      { "id": "i2", "text": "Temporal Metric Group" },
      { "id": "i3", "text": "Environmental Metric Group" },
      { "id": "i4", "text": "Exploitability Metrics" }
    ],
    "zones": [
      { "id": "z1", "label": "Intrinsic qualities of a vulnerability that are constant over time and across user environments" },
      { "id": "z2", "label": "Characteristics that change over the lifetime of the vulnerability (exploit maturity, remediation level, report confidence)" },
      { "id": "z3", "label": "Characteristics of a vulnerability that are unique to a particular user’s environment" },
      { "id": "z4", "label": "Subset of base metrics that describe how the vulnerability is accessed and triggered" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Base metrics are intrinsic and stable. Temporal metrics evolve with exploit availability and fixes. Environmental metrics are organization-specific. Exploitability metrics form the access-related subset of the base group."
  },
  {
    "id": 58,
    "qid": "CS0-004-MOD2-058",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "dragdrop",
    "prompt": "Match each CVSS v3.1 base metric to its operational definition.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is manually scoring a newly discovered vulnerability affecting a network appliance.</p></div>",
    "items": [
      { "id": "i1", "text": "Attack Vector (AV)" },
      { "id": "i2", "text": "Attack Complexity (AC)" },
      { "id": "i3", "text": "Privileges Required (PR)" },
      { "id": "i4", "text": "User Interaction (UI)" }
    ],
    "zones": [
      { "id": "z1", "label": "Context by which vulnerability exploitation is possible (Network, Adjacent, Local, Physical)" },
      { "id": "z2", "label": "Conditions beyond the attacker’s control that must exist to exploit the vulnerability" },
      { "id": "z3", "label": "Level of privileges an attacker must possess before successful exploitation" },
      { "id": "z4", "label": "Requirement for a human user other than the attacker to participate in exploitation" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "AV describes reachability. AC captures external conditions. PR measures required access rights. UI indicates whether a user must take an action."
  },
  {
    "id": 59,
    "qid": "CS0-004-MOD2-059",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "dragdrop",
    "prompt": "Match each threat intelligence type to the prioritization decision it most directly supports.",
    "scenario": "<div class=\"scenario-text\"><p>The vulnerability management team is refining its intelligence-driven prioritization rules.</p></div>",
    "items": [
      { "id": "i1", "text": "CISA KEV listing" },
      { "id": "i2", "text": "Ransomware group association" },
      { "id": "i3", "text": "Public Metasploit module release" },
      { "id": "i4", "text": "Industry-specific ISAC alert" }
    ],
    "zones": [
      { "id": "z1", "label": "Mandatory elevation and rapid remediation for federal and many commercial environments" },
      { "id": "z2", "label": "Highest urgency for organizations whose data or sector matches the group’s targeting" },
      { "id": "z3", "label": "Increased likelihood of opportunistic attacks and automated exploitation" },
      { "id": "z4", "label": "Contextual relevance based on the organization’s vertical and peer activity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "KEV carries regulatory and best-practice weight. Ransomware association drives sector-specific urgency. Public exploit modules increase automated attack probability. ISAC alerts provide peer and vertical context."
  },
  {
    "id": 60,
    "qid": "CS0-004-MOD2-060",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "dragdrop",
    "prompt": "Match each CVSS temporal metric to the factor it measures.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is adjusting temporal scores based on current intelligence and vendor status.</p></div>",
    "items": [
      { "id": "i1", "text": "Exploit Code Maturity (E)" },
      { "id": "i2", "text": "Remediation Level (RL)" },
      { "id": "i3", "text": "Report Confidence (RC)" },
      { "id": "i4", "text": "Temporal Score" }
    ],
    "zones": [
      { "id": "z1", "label": "Likelihood that the vulnerability can be exploited based on current state of exploit techniques" },
      { "id": "z2", "label": "Level of remediation available for the vulnerability (official fix, temporary fix, workaround, unavailable)" },
      { "id": "z3", "label": "Degree of confidence in the existence and technical details of the vulnerability" },
      { "id": "z4", "label": "Overall score after base metrics have been adjusted by temporal factors" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Exploit Code Maturity reflects exploit availability. Remediation Level tracks vendor response. Report Confidence measures certainty of the vulnerability details. The Temporal Score is the adjusted result."
  },
  {
    "id": 61,
    "qid": "CS0-004-MOD2-061",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "dragdrop",
    "prompt": "Match each analysis activity to the phase of the vulnerability intelligence cycle in which it primarily occurs.",
    "scenario": "<div class=\"scenario-text\"><p>The team is formalizing its vulnerability intelligence process from discovery through decision.</p></div>",
    "items": [
      { "id": "i1", "text": "Ingest scanner results and external CVE feeds" },
      { "id": "i2", "text": "Correlate findings with KEV, exploit databases, and ransomware reports" },
      { "id": "i3", "text": "Calculate environmental scores and assign business priority" },
      { "id": "i4", "text": "Produce tickets, dashboards, and executive briefings" }
    ],
    "zones": [
      { "id": "z1", "label": "Collection" },
      { "id": "z2", "label": "Processing & Correlation" },
      { "id": "z3", "label": "Analysis & Prioritization" },
      { "id": "z4", "label": "Dissemination" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Collection gathers raw data. Processing links that data to threat context. Analysis produces prioritized risk. Dissemination delivers actionable output to stakeholders."
  },
  {
    "id": 62,
    "qid": "CS0-004-MOD2-062",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "dragdrop",
    "prompt": "Match each common prioritization mistake to the correct corrective action.",
    "scenario": "<div class=\"scenario-text\"><p>Post-incident reviews have identified recurring errors in how vulnerabilities are ranked.</p></div>",
    "items": [
      { "id": "i1", "text": "Ranking solely by CVSS base score" },
      { "id": "i2", "text": "Ignoring asset criticality" },
      { "id": "i3", "text": "Failing to check for active exploitation" },
      { "id": "i4", "text": "Treating all internet-facing findings as equal" }
    ],
    "zones": [
      { "id": "z1", "label": "Incorporate temporal and environmental metrics plus threat intelligence" },
      { "id": "z2", "label": "Enrich findings with CMDB business impact and data classification" },
      { "id": "z3", "label": "Correlate every high/critical CVE against KEV and commercial threat feeds" },
      { "id": "z4", "label": "Differentiate exposure by reachability, authentication requirements, and compensating controls" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Base-score-only ranking is corrected by adding temporal/environmental and threat data. Criticality requires CMDB enrichment. Exploitation status requires intelligence correlation. Exposure requires nuanced reachability analysis."
  },
  {
    "id": 63,
    "qid": "CS0-004-MOD2-063",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "dragdrop",
    "prompt": "Match each CVSS v4.0 concept to its primary purpose.",
    "scenario": "<div class=\"scenario-text\"><p>The team is preparing for wider adoption of CVSS v4.0 vectors published by vendors and NVD.</p></div>",
    "items": [
      { "id": "i1", "text": "Attack Requirements (AT)" },
      { "id": "i2", "text": "Threat Metrics" },
      { "id": "i3", "text": "Supplemental Metrics" },
      { "id": "i4", "text": "Base Metrics (v4.0)" }
    ],
    "zones": [
      { "id": "z1", "label": "Captures conditions that must exist in the target environment for the attack to succeed" },
      { "id": "z2", "label": "Provides a refined assessment of current exploit likelihood and maturity" },
      { "id": "z3", "label": "Offers optional consumer-context information that does not affect the numerical score" },
      { "id": "z4", "label": "Describes the intrinsic characteristics of the vulnerability itself" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Attack Requirements is a new base metric. Threat metrics refine exploit likelihood. Supplemental metrics supply extra context without changing the score. Base metrics remain the intrinsic core."
  },
  {
    "id": 64,
    "qid": "CS0-004-MOD2-064",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "dragdrop",
    "prompt": "Match each intelligence-driven prioritization outcome to the evidence that most strongly supports it.",
    "scenario": "<div class=\"scenario-text\"><p>Analysts must justify priority decisions with clear evidence trails.</p></div>",
    "items": [
      { "id": "i1", "text": "Emergency 24-hour remediation SLA" },
      { "id": "i2", "text": "Standard 30-day remediation SLA" },
      { "id": "i3", "text": "Accept risk with compensating controls" },
      { "id": "i4", "text": "Immediate incident response investigation" }
    ],
    "zones": [
      { "id": "z1", "label": "CISA KEV + active ransomware campaign + internet exposure" },
      { "id": "z2", "label": "High CVSS, no known exploit, internal-only, patch available" },
      { "id": "z3", "label": "Moderate CVSS, strong WAF/network controls, low asset criticality" },
      { "id": "z4", "label": "Evidence of successful exploitation already present in environment logs" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "KEV + ransomware + exposure drives emergency action. Ordinary high findings follow standard SLAs. Well-controlled moderate risks may be accepted. Confirmed exploitation triggers incident response."
  },
  {
    "id": 65,
    "qid": "CS0-004-MOD2-065",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "dragdrop",
    "prompt": "Match each data element to the CVSS metric group it primarily informs.",
    "scenario": "<div class=\"scenario-text\"><p>An enrichment pipeline is mapping external data sources onto CVSS metric groups.</p></div>",
    "items": [
      { "id": "i1", "text": "Vendor patch release announcement" },
      { "id": "i2", "text": "Asset data classification and business impact" },
      { "id": "i3", "text": "Public exploit code and in-the-wild observations" },
      { "id": "i4", "text": "Intrinsic technical characteristics of the flaw" }
    ],
    "zones": [
      { "id": "z1", "label": "Temporal – Remediation Level" },
      { "id": "z2", "label": "Environmental – Confidentiality/Integrity/Availability Requirements" },
      { "id": "z3", "label": "Temporal – Exploit Code Maturity" },
      { "id": "z4", "label": "Base Metric Group" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Patch availability updates Remediation Level. Business impact informs environmental CIA requirements. Exploit observations update Exploit Code Maturity. Intrinsic characteristics form the base metrics."
  },
  {
    "id": 66,
    "qid": "CS0-004-MOD2-066",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "dragdrop",
    "prompt": "Match each prioritization framework component to its role.",
    "scenario": "<div class=\"scenario-text\"><p>The organization is implementing a formal risk-based vulnerability prioritization framework.</p></div>",
    "items": [
      { "id": "i1", "text": "CVSS Base Score" },
      { "id": "i2", "text": "Threat Intelligence Overlay" },
      { "id": "i3", "text": "Asset Criticality Rating" },
      { "id": "i4", "text": "Exposure & Control Assessment" }
    ],
    "zones": [
      { "id": "z1", "label": "Provides standardized technical severity starting point" },
      { "id": "z2", "label": "Adjusts urgency based on real-world exploitation and campaigns" },
      { "id": "z3", "label": "Weights the potential business impact of a successful exploit" },
      { "id": "z4", "label": "Determines residual likelihood after network and compensating controls" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Base score supplies the technical foundation. Threat intelligence adds real-world urgency. Asset criticality captures business impact. Exposure and controls refine residual likelihood."
  },
  {
    "id": 67,
    "qid": "CS0-004-MOD2-067",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "dragdrop",
    "prompt": "Match each common CVSS vector component to the value that indicates the highest severity for that metric.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is quickly assessing the most severe combination of metrics in a set of vectors.</p></div>",
    "items": [
      { "id": "i1", "text": "Attack Vector" },
      { "id": "i2", "text": "Privileges Required" },
      { "id": "i3", "text": "User Interaction" },
      { "id": "i4", "text": "Scope" }
    ],
    "zones": [
      { "id": "z1", "label": "Network (N)" },
      { "id": "z2", "label": "None (N)" },
      { "id": "z3", "label": "None (N)" },
      { "id": "z4", "label": "Changed (C)" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Network attack vector, no privileges required, no user interaction, and changed scope each represent the highest-severity value for their respective metrics."
  },
  {
    "id": 68,
    "qid": "CS0-004-MOD2-068",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "dragdrop",
    "prompt": "Match each vulnerability analysis deliverable to its primary audience.",
    "scenario": "<div class=\"scenario-text\"><p>The team produces multiple outputs from the same underlying vulnerability and intelligence data.</p></div>",
    "items": [
      { "id": "i1", "text": "Detailed technical ticket with CVSS vector, evidence, and remediation steps" },
      { "id": "i2", "text": "Weekly executive risk dashboard with trends and top concentrations" },
      { "id": "i3", "text": "Threat-informed priority list for the patching team" },
      { "id": "i4", "text": "Incident response alert for confirmed active exploitation" }
    ],
    "zones": [
      { "id": "z1", "label": "System owners and remediation engineers" },
      { "id": "z2", "label": "CISO and senior leadership" },
      { "id": "z3", "label": "Vulnerability management and operations teams" },
      { "id": "z4", "label": "Security operations / incident response team" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Technical tickets go to owners. Executive dashboards go to leadership. Priority lists guide the VM/ops teams. Active exploitation alerts go to IR."
  },
  {
    "id": 69,
    "qid": "CS0-004-MOD2-069",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the intelligence source that carries the strongest mandatory remediation expectation for most U.S. federal and many commercial organizations.",
    "scenario": "<div class=\"scenario-text\"><p>Four intelligence inputs are available for a critical vulnerability: CISA Known Exploited Vulnerabilities catalog, a commercial ransomware blog post, an Exploit-DB entry, and a general Twitter discussion.</p></div>",
    "nodes": [
      { "id": "node1", "label": "CISA KEV\nCatalog", "x": 20, "y": 40 },
      { "id": "node2", "label": "Commercial\nRansomware Blog", "x": 45, "y": 40 },
      { "id": "node3", "label": "Exploit-DB\nEntry", "x": 70, "y": 25 },
      { "id": "node4", "label": "Social Media\nDiscussion", "x": 70, "y": 55 }
    ],
    "correct": ["node1"],
    "explanation": "CISA KEV listings create binding or strongly expected remediation timelines for federal agencies and are widely adopted as a de-facto standard by commercial organizations. Other sources inform priority but lack the same formal weight."
  },
  {
    "id": 70,
    "qid": "CS0-004-MOD2-070",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the CVSS metric group that should be adjusted when an organization deploys a WAF that blocks the known exploit path.",
    "scenario": "<div class=\"scenario-text\"><p>The base score remains unchanged. The organization wants the prioritization system to reflect the reduced likelihood of successful exploitation due to the WAF.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Base\nMetric Group", "x": 20, "y": 40 },
      { "id": "node2", "label": "Temporal\nMetric Group", "x": 45, "y": 40 },
      { "id": "node3", "label": "Environmental\nMetric Group", "x": 70, "y": 25 },
      { "id": "node4", "label": "Supplemental\nMetrics (v4.0)", "x": 70, "y": 55 }
    ],
    "correct": ["node3"],
    "explanation": "Environmental metrics exist specifically to capture organization-specific mitigations and context such as compensating controls. Base metrics stay constant; temporal metrics address exploit maturity and fixes; supplemental metrics do not affect the score."
  },
  {
    "id": 71,
    "qid": "CS0-004-MOD2-071",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the prioritization factor that should receive the highest weight when a vulnerability is both on the CISA KEV list and confirmed in active ransomware campaigns.",
    "scenario": "<div class=\"scenario-text\"><p>Four factors are displayed for a vulnerability affecting an internet-facing service: raw CVSS base score, asset criticality, threat intelligence (KEV + ransomware), and age of the vulnerability.</p></div>",
    "nodes": [
      { "id": "node1", "label": "CVSS Base\nScore Only", "x": 20, "y": 40 },
      { "id": "node2", "label": "Asset\nCriticality", "x": 45, "y": 40 },
      { "id": "node3", "label": "Threat Intelligence\n(KEV + Ransomware)", "x": 70, "y": 25 },
      { "id": "node4", "label": "Vulnerability\nAge", "x": 70, "y": 55 }
    ],
    "correct": ["node3"],
    "explanation": "When both KEV and active ransomware use are confirmed, threat intelligence becomes the dominant prioritization driver, superseding raw score, criticality, or age."
  },
  {
    "id": 72,
    "qid": "CS0-004-MOD2-072",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that represents the correct place to store organization-specific CIA requirement adjustments for environmental scoring.",
    "scenario": "<div class=\"scenario-text\"><p>The architecture shows: NVD base vector feed, commercial threat intelligence platform, internal CMDB with asset criticality, and the vulnerability management platform’s environmental scoring engine.</p></div>",
    "nodes": [
      { "id": "node1", "label": "NVD Base\nVector Feed", "x": 20, "y": 40 },
      { "id": "node2", "label": "Threat Intel\nPlatform", "x": 45, "y": 40 },
      { "id": "node3", "label": "Internal CMDB\n(Asset Criticality)", "x": 70, "y": 25 },
      { "id": "node4", "label": "VM Platform\nEnvironmental Engine", "x": 70, "y": 55 }
    ],
    "correct": ["node4"],
    "explanation": "Environmental scoring adjustments are calculated and stored inside the vulnerability management platform using inputs from the CMDB and other sources. NVD supplies only base vectors; threat intel informs temporal factors; the CMDB provides the raw criticality data but does not itself compute the environmental score."
  },
  {
    "id": 73,
    "qid": "CS0-004-MOD2-073",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the metric that, when set to “Changed,” most significantly increases the potential impact of a vulnerability across trust boundaries.",
    "scenario": "<div class=\"scenario-text\"><p>Four CVSS metrics are shown: Attack Vector, Privileges Required, Scope, and User Interaction.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Attack Vector\n(AV)", "x": 20, "y": 40 },
      { "id": "node2", "label": "Privileges Required\n(PR)", "x": 45, "y": 40 },
      { "id": "node3", "label": "Scope\n(S)", "x": 70, "y": 25 },
      { "id": "node4", "label": "User Interaction\n(UI)", "x": 70, "y": 55 }
    ],
    "correct": ["node3"],
    "explanation": "Scope:Changed indicates that exploitation can affect resources beyond the vulnerable component’s security authority, directly increasing the breadth of impact. The other metrics describe exploitability conditions rather than impact boundary."
  },
  {
    "id": 74,
    "qid": "CS0-004-MOD2-074",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the prioritization input that is most volatile and therefore requires continuous automated refresh.",
    "scenario": "<div class=\"scenario-text\"><p>Four inputs feed the prioritization engine: CVSS base score, asset criticality from CMDB, network exposure from asset inventory, and active exploitation status from threat intelligence.</p></div>",
    "nodes": [
      { "id": "node1", "label": "CVSS Base\nScore", "x": 20, "y": 40 },
      { "id": "node2", "label": "Asset Criticality\n(CMDB)", "x": 45, "y": 40 },
      { "id": "node3", "label": "Network Exposure\n(Inventory)", "x": 70, "y": 25 },
      { "id": "node4", "label": "Active Exploitation\n(Threat Intel)", "x": 70, "y": 55 }
    ],
    "correct": ["node4"],
    "explanation": "Active exploitation status can change rapidly as new campaigns emerge or existing ones expand. Base scores are stable, criticality and exposure change more slowly. Continuous intelligence refresh is therefore essential."
  },
  {
    "id": 75,
    "qid": "CS0-004-MOD2-075",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Python script that correctly extracts the Attack Vector value from a CVSS v3.1 vector string.",
    "scenario": "<div class=\"scenario-text\"><p>A security automation engineer is writing an enrichment function for the vulnerability management platform.</p></div>",
    "nodes": [
      { "id": "l1", "label": "import re" },
      { "id": "l2", "label": "vector = \"CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H\"" },
      { "id": "l3", "label": "av = re.search(r'/AV:([NALP])', vector).group(1)" },
      { "id": "l4", "label": "print(f\"Attack Vector: {av}\")" },
      { "id": "l5", "label": "severity = {\"base\": 9.8}" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "Line l3 uses a regular expression to locate the AV metric and capture its value (N, A, L, or P). The other lines import the module, define the sample vector, print output, or create an unrelated dictionary."
  },
  {
    "id": 76,
    "qid": "CS0-004-MOD2-076",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the configuration snippet that enables automatic elevation of findings present in the CISA KEV catalog.",
    "scenario": "<div class=\"scenario-text\"><p>The vulnerability management platform policy file controls how external intelligence is applied.</p></div>",
    "nodes": [
      { "id": "l1", "label": "threat_intel:" },
      { "id": "l2", "label": "  enable_cisa_kev: true" },
      { "id": "l3", "label": "  kev_priority_boost: critical" },
      { "id": "l4", "label": "  commercial_feed: enabled" },
      { "id": "l5", "label": "  refresh_interval: 1h" }
    ],
    "correct": ["l2"],
    "selectCount": 1,
    "explanation": "The enable_cisa_kev: true directive activates KEV correlation. The subsequent line defines the boost level, but the enabling switch itself is the critical control. The other lines configure commercial feeds and refresh timing."
  },
  {
    "id": 77,
    "qid": "CS0-004-MOD2-077",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the CVSS calculation pseudocode that applies the environmental metric adjustments.",
    "scenario": "<div class=\"scenario-text\"><p>A simplified scoring engine is being reviewed for correctness.</p></div>",
    "nodes": [
      { "id": "l1", "label": "base = calculate_base(AV, AC, PR, UI, S, C, I, A)" },
      { "id": "l2", "label": "temporal = apply_temporal(base, E, RL, RC)" },
      { "id": "l3", "label": "environmental = apply_environmental(temporal, CR, IR, AR, MAV, MAC...)" },
      { "id": "l4", "label": "return environmental" },
      { "id": "l5", "label": "log_score(base, temporal, environmental)" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "Line l3 invokes the environmental adjustment function that incorporates CIA requirements and modified base metrics. Base and temporal calculations occur earlier; the return and logging steps do not perform the adjustment."
  },
  {
    "id": 78,
    "qid": "CS0-004-MOD2-078",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the threat intelligence correlation script that checks whether a CVE is present in the CISA KEV catalog.",
    "scenario": "<div class=\"scenario-text\"><p>An automation script enriches scanner findings with KEV status before prioritization.</p></div>",
    "nodes": [
      { "id": "l1", "label": "def enrich_finding(cve_id, finding):" },
      { "id": "l2", "label": "    kev_data = load_cisa_kev()" },
      { "id": "l3", "label": "    if cve_id in kev_data:" },
      { "id": "l4", "label": "        finding[\"priority\"] = \"Critical\"" },
      { "id": "l5", "label": "        finding[\"kev\"] = True" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "Line l3 performs the membership test that determines KEV presence. The surrounding lines define the function, load the catalog, and apply the resulting priority and flag."
  },
  {
    "id": 79,
    "qid": "CS0-004-MOD2-079",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the JSON configuration that defines the weight given to active exploitation evidence in the final risk score.",
    "scenario": "<div class=\"scenario-text\"><p>The prioritization engine uses a weighted scoring model that combines CVSS, criticality, exposure, and threat intelligence.</p></div>",
    "nodes": [
      { "id": "l1", "label": "\"weights\": {" },
      { "id": "l2", "label": "  \"cvss_base\": 0.25," },
      { "id": "l3", "label": "  \"asset_criticality\": 0.20," },
      { "id": "l4", "label": "  \"active_exploitation\": 0.40," },
      { "id": "l5", "label": "  \"network_exposure\": 0.15" }
    ],
    "correct": ["l4"],
    "selectCount": 1,
    "explanation": "The active_exploitation weight of 0.40 is the highest individual factor, reflecting the strong influence of real-world threat activity on final prioritization. The other lines define the remaining weights."
  },
  {
    "id": 80,
    "qid": "CS0-004-MOD2-080",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Vulnerability Analysis, CVSS Scoring & Threat Intelligence Integration",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Bash script that retrieves the latest CISA KEV catalog for correlation.",
    "scenario": "<div class=\"scenario-text\"><p>A scheduled job updates local threat intelligence data used by the vulnerability management platform.</p></div>",
    "nodes": [
      { "id": "l1", "label": "#!/bin/bash" },
      { "id": "l2", "label": "KEV_URL=\"https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json\"" },
      { "id": "l3", "label": "curl -s -o /opt/vm/kev.json \"$KEV_URL\"" },
      { "id": "l4", "label": "echo \"KEV catalog updated at $(date)\"" },
      { "id": "l5", "label": "systemctl reload vm-enrichment" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "Line l3 executes the curl command that downloads the current KEV JSON feed. The other lines set the shebang, define the URL variable, log the update, and reload the enrichment service."
  },
  {
    "id": 81,
    "qid": "CS0-004-MOD2-081",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "single",
    "prompt": "A critical remote code execution vulnerability has been confirmed on an internet-facing web server. A vendor patch is available but requires a full application restart and 90 minutes of downtime. What is the most appropriate immediate action while the change window is being scheduled?",
    "scenario": "<div class=\"scenario-text\"><p>The vulnerability is listed in CISA KEV and has active exploitation reports. The web server sits behind a reverse proxy and WAF. The next formal maintenance window is 72 hours away.</p></div>",
    "options": [
      { "id": "a", "text": "Deploy a virtual patch via WAF rule that blocks the known exploit pattern and monitor for bypass attempts" },
      { "id": "b", "text": "Immediately take the server offline until the patch can be applied" },
      { "id": "c", "text": "Suppress the finding in the vulnerability management system until after the maintenance window" },
      { "id": "d", "text": "Wait for the scheduled window because compensating controls are already present" }
    ],
    "correct": ["a"],
    "explanation": "A virtual patch (WAF rule) provides immediate risk reduction without downtime while the formal change is prepared. Taking the server offline may be unnecessary if the WAF can effectively block the exploit. Suppressing the finding removes visibility. Simply waiting ignores the active exploitation risk."
  },
  {
    "id": 82,
    "qid": "CS0-004-MOD2-082",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "single",
    "prompt": "An organization has a 30-day SLA for High vulnerabilities. A High finding on a critical database server has remained open for 45 days because the required patch introduces a breaking change in a dependent application. What is the most appropriate next step?",
    "scenario": "<div class=\"scenario-text\"><p>The vulnerability is not known to be actively exploited. Compensating network controls limit exposure to the internal management VLAN only. The application owner has requested an extension.</p></div>",
    "options": [
      { "id": "a", "text": "Document a formal risk acceptance with compensating controls, residual risk statement, and a revised remediation date" },
      { "id": "b", "text": "Force the patch immediately and accept the application outage" },
      { "id": "c", "text": "Close the finding as remediated because network controls are present" },
      { "id": "d", "text": "Reclassify the finding as Low so it falls under a longer SLA" }
    ],
    "correct": ["a"],
    "explanation": "When a legitimate business constraint prevents timely remediation, formal risk acceptance with documented compensating controls and a new target date is the correct governance process. Forcing the patch without coordination can cause outages. Closing or reclassifying the finding without addressing the risk is improper."
  },
  {
    "id": 83,
    "qid": "CS0-004-MOD2-083",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "single",
    "prompt": "A zero-day vulnerability affecting a widely used library has no vendor patch available. The library is embedded in multiple internal applications. What is the most effective short-term mitigation strategy?",
    "scenario": "<div class=\"scenario-text\"><p>Threat intelligence confirms active scanning for the vulnerability. The applications run behind an internal API gateway. Source code access is available for the most critical services.</p></div>",
    "options": [
      { "id": "a", "text": "Implement input validation and sanitization at the API gateway and application layers to block exploit payloads while monitoring for a vendor fix" },
      { "id": "b", "text": "Uninstall the library from all applications immediately" },
      { "id": "c", "text": "Disable all network access to the affected applications until a patch is released" },
      { "id": "d", "text": "Accept the risk indefinitely because no patch exists" }
    ],
    "correct": ["a"],
    "explanation": "When no patch is available, compensating controls such as strict input validation, WAF/API gateway rules, and reduced exposure are the primary mitigation path. Uninstalling a core library or disabling access may break business functions. Indefinite acceptance without controls is unacceptable for an actively targeted zero-day."
  },
  {
    "id": 84,
    "qid": "CS0-004-MOD2-084",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "single",
    "prompt": "After applying a critical security patch to a cluster of web servers, the vulnerability scanner still reports the finding. What is the most likely cause and correct first verification step?",
    "scenario": "<div class=\"scenario-text\"><p>The patch was deployed via the enterprise configuration management tool. Servers were rebooted. The scanner is configured for authenticated scanning and previously detected the vulnerability reliably.</p></div>",
    "options": [
      { "id": "a", "text": "The scanner plugin may still be matching on residual version strings or cached data; verify the actual installed package version and force a fresh authenticated scan" },
      { "id": "b", "text": "The patch failed on every server and must be re-applied immediately" },
      { "id": "c", "text": "Authenticated scanning is no longer required after patching" },
      { "id": "d", "text": "The finding should be manually closed without verification" }
    ],
    "correct": ["a"],
    "explanation": "Scanners can produce residual detections due to incomplete version detection, plugin lag, or cached results. The correct first step is to confirm the package version on the host and re-scan with a clean authenticated policy. Assuming universal failure or skipping verification are incorrect."
  },
  {
    "id": 85,
    "qid": "CS0-004-MOD2-085",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "multiselect",
    "prompt": "Select THREE essential elements of a formal vulnerability risk acceptance process.",
    "scenario": "<div class=\"scenario-text\"><p>A business unit cannot remediate a High vulnerability within the standard SLA due to application compatibility constraints.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Documented description of the residual risk and compensating controls" },
      { "id": "b", "text": "Approval by an authorized risk owner with defined accountability" },
      { "id": "c", "text": "A defined expiration or review date for the acceptance" },
      { "id": "d", "text": "Permanent closure of the finding with no further tracking" },
      { "id": "e", "text": "Automatic reclassification of the finding to Informational" },
      { "id": "f", "text": "Deletion of the original scanner evidence" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Proper risk acceptance requires clear residual risk documentation, accountable approval, and a time-bound review. Permanent closure without tracking, severity reclassification, or evidence deletion undermine governance."
  },
  {
    "id": 86,
    "qid": "CS0-004-MOD2-086",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "multiselect",
    "prompt": "Select FOUR best practices for effective enterprise patch management of operating system vulnerabilities.",
    "scenario": "<div class=\"scenario-text\"><p>The organization is updating its patch management standard to reduce mean time to remediate Critical and High findings.</p></div><div class=\"requirements-box\"><h3>Select exactly FOUR</h3></div>",
    "options": [
      { "id": "a", "text": "Maintain an accurate, continuously updated asset inventory" },
      { "id": "b", "text": "Test patches in a representative non-production environment before wide deployment" },
      { "id": "c", "text": "Use automated deployment tools with phased rollout and automatic rollback capability" },
      { "id": "d", "text": "Define clear SLAs differentiated by severity and asset criticality" },
      { "id": "e", "text": "Apply every patch to production within one hour of vendor release without testing" },
      { "id": "f", "text": "Disable vulnerability scanning after the first successful patch cycle" }
    ],
    "correct": ["a", "b", "c", "d"],
    "selectCount": 4,
    "explanation": "Accurate inventory, pre-production testing, automated phased deployment with rollback, and risk-based SLAs are foundational. Untested emergency deployment and disabling scanning increase risk."
  },
  {
    "id": 87,
    "qid": "CS0-004-MOD2-087",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "multiselect",
    "prompt": "Select THREE valid compensating controls that can temporarily reduce risk when a patch cannot be applied immediately.",
    "scenario": "<div class=\"scenario-text\"><p>A Critical vulnerability affects a legacy application that cannot be patched for 60 days due to vendor dependency.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Network segmentation that restricts access to only authorized management hosts" },
      { "id": "b", "text": "WAF or IPS signatures that detect and block known exploit patterns" },
      { "id": "c", "text": "Enhanced monitoring and alerting on the affected service for anomalous behavior" },
      { "id": "d", "text": "Disabling the vulnerability scanner plugin for that CVE" },
      { "id": "e", "text": "Removing the asset from the CMDB" },
      { "id": "f", "text": "Lowering the CVSS environmental score to zero without controls" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Segmentation, virtual patching via WAF/IPS, and intensified monitoring are recognized compensating controls. Disabling detection, removing inventory records, or artificially zeroing scores do not reduce actual risk."
  },
  {
    "id": 88,
    "qid": "CS0-004-MOD2-088",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "multiselect",
    "prompt": "Select THREE key metrics that should be tracked to measure the effectiveness of a vulnerability remediation program.",
    "scenario": "<div class=\"scenario-text\"><p>Leadership has requested quantifiable indicators of remediation performance for the quarterly risk committee.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Mean time to remediate (MTTR) by severity tier" },
      { "id": "b", "text": "Percentage of Critical and High findings closed within SLA" },
      { "id": "c", "text": "Trend of open vulnerability age (aging report)" },
      { "id": "d", "text": "Number of scanner plugins enabled" },
      { "id": "e", "text": "Total number of assets in the CMDB regardless of scan coverage" },
      { "id": "f", "text": "Color scheme of the vulnerability dashboard" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "MTTR, SLA compliance rate, and aging trends directly measure remediation effectiveness. Plugin count, raw asset totals, and cosmetic dashboard settings do not."
  },
  {
    "id": 89,
    "qid": "CS0-004-MOD2-089",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "multiselect",
    "prompt": "Select FOUR steps that should occur after a Critical patch has been deployed to production systems.",
    "scenario": "<div class=\"scenario-text\"><p>A high-priority security update has been rolled out to the production web tier via the configuration management system.</p></div><div class=\"requirements-box\"><h3>Select exactly FOUR</h3></div>",
    "options": [
      { "id": "a", "text": "Verify the patch is present on each host through package or file version checks" },
      { "id": "b", "text": "Perform a targeted authenticated re-scan of the affected hosts" },
      { "id": "c", "text": "Update the vulnerability management ticket with evidence of successful remediation" },
      { "id": "d", "text": "Monitor application and system logs for unexpected errors introduced by the patch" },
      { "id": "e", "text": "Immediately delete all historical scan data related to the vulnerability" },
      { "id": "f", "text": "Disable future scanning of the affected hosts" }
    ],
    "correct": ["a", "b", "c", "d"],
    "selectCount": 4,
    "explanation": "Post-remediation verification includes host-level confirmation, re-scanning, ticket evidence, and functional monitoring. Deleting history or disabling future scans removes necessary audit and detection capability."
  },
  {
    "id": 90,
    "qid": "CS0-004-MOD2-090",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "multiselect",
    "prompt": "Select THREE situations in which virtual patching is an appropriate interim control.",
    "scenario": "<div class=\"scenario-text\"><p>The security architecture team is defining policy for when WAF or IPS virtual patches may be used.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "A vendor patch exists but cannot be applied for several weeks due to change freezes" },
      { "id": "b", "text": "A zero-day is being actively exploited and no official patch is yet available" },
      { "id": "c", "text": "The vulnerable component is end-of-life and will never receive a vendor patch" },
      { "id": "d", "text": "The vulnerability is purely local and requires physical access" },
      { "id": "e", "text": "The finding is a false positive that has already been validated" },
      { "id": "f", "text": "The asset is scheduled for decommissioning within 24 hours" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Virtual patching is suitable when a real patch is delayed, unavailable (zero-day), or will never arrive (EOL). Local-only vulnerabilities, validated false positives, and imminent decommissioning do not typically require virtual patching."
  },
  {
    "id": 91,
    "qid": "CS0-004-MOD2-091",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "multiselect",
    "prompt": "Select THREE requirements for a successful emergency change process used to remediate actively exploited Critical vulnerabilities.",
    "scenario": "<div class=\"scenario-text\"><p>A CISA KEV-listed vulnerability with confirmed ransomware use has been found on multiple internet-facing systems.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Expedited approval path with clear accountability" },
      { "id": "b", "text": "Pre-defined rollback plan in case the change causes instability" },
      { "id": "c", "text": "Post-implementation verification and monitoring" },
      { "id": "d", "text": "Requirement to wait for the next monthly change advisory board" },
      { "id": "e", "text": "Mandatory full regression testing of every dependent application before any action" },
      { "id": "f", "text": "Automatic closure of the finding without evidence" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Emergency changes still require accountable approval, a rollback capability, and verification. Waiting for routine CAB cycles or exhaustive pre-testing defeats the purpose of emergency response. Closing without evidence is improper."
  },
  {
    "id": 92,
    "qid": "CS0-004-MOD2-092",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "multiselect",
    "prompt": "Select FOUR common causes of patch deployment failure in large enterprise environments.",
    "scenario": "<div class=\"scenario-text\"><p>Recent Critical patch campaigns have left a significant percentage of hosts still reporting the original vulnerability.</p></div><div class=\"requirements-box\"><h3>Select exactly FOUR</h3></div>",
    "options": [
      { "id": "a", "text": "Incomplete or outdated asset inventory leading to missed targets" },
      { "id": "b", "text": "Insufficient disk space or conflicting software on target hosts" },
      { "id": "c", "text": "Missing reboot after patch installation when required" },
      { "id": "d", "text": "Network or authentication barriers preventing the deployment tool from reaching hosts" },
      { "id": "e", "text": "The vulnerability scanner being too aggressive" },
      { "id": "f", "text": "Use of a modern configuration management platform" }
    ],
    "correct": ["a", "b", "c", "d"],
    "selectCount": 4,
    "explanation": "Missed inventory, local resource conflicts, skipped reboots, and reachability problems are frequent root causes of incomplete patching. Scanner aggressiveness and modern tooling are not typical causes of failure."
  },
  {
    "id": 93,
    "qid": "CS0-004-MOD2-093",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "multiselect",
    "prompt": "Select THREE actions that should be taken when a patch is found to introduce a regression that breaks a critical business application.",
    "scenario": "<div class=\"scenario-text\"><p>Shortly after a security patch was deployed, the application team reported a critical functional failure directly attributable to the update.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Execute the pre-approved rollback plan to restore service" },
      { "id": "b", "text": "Re-open or keep open the original vulnerability finding with updated status" },
      { "id": "c", "text": "Implement or strengthen compensating controls while a revised fix is developed" },
      { "id": "d", "text": "Permanently suppress the vulnerability because the patch caused problems" },
      { "id": "e", "text": "Disable all future security patching for that application" },
      { "id": "f", "text": "Delete the change record to avoid audit scrutiny" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Rollback restores service, the finding remains open because the vulnerability is still present, and compensating controls bridge the gap. Permanent suppression, stopping all patching, or destroying records are unacceptable."
  },
  {
    "id": 94,
    "qid": "CS0-004-MOD2-094",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "multiselect",
    "prompt": "Select THREE characteristics of a mature vulnerability remediation workflow.",
    "scenario": "<div class=\"scenario-text\"><p>An external assessment is evaluating the organization’s vulnerability management maturity.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Automated ticket creation with severity, asset owner, and SLA populated from scan and CMDB data" },
      { "id": "b", "text": "Clear escalation paths when SLAs are breached" },
      { "id": "c", "text": "Closed-loop verification that confirms remediation via re-scan or agent check" },
      { "id": "d", "text": "Manual spreadsheet tracking as the primary system of record" },
      { "id": "e", "text": "No differentiation of SLAs by severity or asset criticality" },
      { "id": "f", "text": "Findings closed solely on the basis of a verbal statement from the system owner" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Automation, escalation, and closed-loop verification are hallmarks of maturity. Spreadsheet-centric processes, uniform SLAs, and verbal-only closure indicate lower maturity."
  },
  {
    "id": 95,
    "qid": "CS0-004-MOD2-095",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "multiselect",
    "prompt": "Select THREE appropriate uses of configuration management tools in support of vulnerability remediation.",
    "scenario": "<div class=\"scenario-text\"><p>The organization uses a modern configuration management platform (e.g., Ansible, Puppet, SCCM, Intune) alongside its vulnerability management system.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Deploy approved security patches at scale with reporting" },
      { "id": "b", "text": "Enforce secure baseline configurations that reduce future vulnerability exposure" },
      { "id": "c", "text": "Remediate specific misconfigurations identified by authenticated scans" },
      { "id": "d", "text": "Automatically accept all residual risk without human review" },
      { "id": "e", "text": "Disable the vulnerability scanner once configuration management is in place" },
      { "id": "f", "text": "Generate CVSS scores for newly discovered vulnerabilities" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Configuration management platforms excel at patch deployment, baseline enforcement, and targeted configuration fixes. They do not replace risk acceptance processes, scanning, or CVSS calculation."
  },
  {
    "id": 96,
    "qid": "CS0-004-MOD2-096",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "multiselect",
    "prompt": "Select THREE reasons why simply applying a vendor patch may not fully remediate a reported vulnerability.",
    "scenario": "<div class=\"scenario-text\"><p>After a patch deployment campaign, a subset of hosts continue to report the original finding on authenticated re-scans.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "The patch was installed but a required service restart or reboot was never performed" },
      { "id": "b", "text": "Multiple vulnerable components exist and only one was updated" },
      { "id": "c", "text": "The scanner is detecting a different but related vulnerability that shares the same plugin" },
      { "id": "d", "text": "The CVSS score was recalculated by NVD after the patch" },
      { "id": "e", "text": "The asset was removed from the domain" },
      { "id": "f", "text": "The vulnerability management platform license expired" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Missing restarts, incomplete component updates, and plugin overlap are common reasons a finding persists after a patch. CVSS recalculation, domain removal, or license status do not explain residual detections on the host itself."
  },
  {
    "id": 97,
    "qid": "CS0-004-MOD2-097",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "dragdrop",
    "prompt": "Match each remediation strategy to the situation in which it is most appropriate.",
    "scenario": "<div class=\"scenario-text\"><p>The vulnerability management team must choose the correct response path for different classes of findings.</p></div>",
    "items": [
      { "id": "i1", "text": "Vendor patch deployment" },
      { "id": "i2", "text": "Virtual patching (WAF/IPS)" },
      { "id": "i3", "text": "Formal risk acceptance" },
      { "id": "i4", "text": "Compensating network controls" }
    ],
    "zones": [
      { "id": "z1", "label": "Official fix is available and can be applied within SLA" },
      { "id": "z2", "label": "Immediate protection is required while a permanent fix is prepared or unavailable" },
      { "id": "z3", "label": "Business constraints prevent remediation and residual risk is formally approved" },
      { "id": "z4", "label": "Exposure can be reduced by limiting network reachability of the vulnerable service" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Vendor patches are the preferred permanent fix. Virtual patching buys time. Risk acceptance handles justified exceptions. Network controls reduce exposure when other options are constrained."
  },
  {
    "id": 98,
    "qid": "CS0-004-MOD2-098",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "dragdrop",
    "prompt": "Match each patch management lifecycle phase to its primary activity.",
    "scenario": "<div class=\"scenario-text\"><p>The organization is documenting its end-to-end patch management process.</p></div>",
    "items": [
      { "id": "i1", "text": "Identify" },
      { "id": "i2", "text": "Evaluate & Test" },
      { "id": "i3", "text": "Deploy" },
      { "id": "i4", "text": "Verify" }
    ],
    "zones": [
      { "id": "z1", "label": "Determine which systems require the patch using inventory and scan data" },
      { "id": "z2", "label": "Assess compatibility and validate the patch in a non-production environment" },
      { "id": "z3", "label": "Roll the patch out to production systems in controlled phases" },
      { "id": "z4", "label": "Confirm successful installation and that the vulnerability is no longer detected" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Identify maps targets. Evaluate & Test prevents production breakage. Deploy executes the change. Verify closes the loop."
  },
  {
    "id": 99,
    "qid": "CS0-004-MOD2-099",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "dragdrop",
    "prompt": "Match each common remediation obstacle to the most effective mitigation approach.",
    "scenario": "<div class=\"scenario-text\"><p>Recurring barriers are slowing Critical vulnerability closure rates.</p></div>",
    "items": [
      { "id": "i1", "text": "Application compatibility concerns" },
      { "id": "i2", "text": "Missing or inaccurate asset ownership" },
      { "id": "i3", "text": "Change freeze periods" },
      { "id": "i4", "text": "Legacy systems with no vendor support" }
    ],
    "zones": [
      { "id": "z1", "label": "Pre-production testing and staged rollouts with rollback plans" },
      { "id": "z2", "label": "CMDB hygiene program and automated ownership enrichment" },
      { "id": "z3", "label": "Emergency change process and virtual patching capability" },
      { "id": "z4", "label": "Network isolation, compensating controls, and planned replacement" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Compatibility issues are addressed by testing. Ownership gaps require inventory discipline. Change freezes need emergency paths and virtual patches. Unsupported systems need isolation and eventual replacement."
  },
  {
    "id": 100,
    "qid": "CS0-004-MOD2-100",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "dragdrop",
    "prompt": "Match each verification method to the type of remediation it best confirms.",
    "scenario": "<div class=\"scenario-text\"><p>The team must select appropriate evidence that a vulnerability has been addressed.</p></div>",
    "items": [
      { "id": "i1", "text": "Authenticated vulnerability re-scan" },
      { "id": "i2", "text": "Package or file version query on the host" },
      { "id": "i3", "text": "Configuration compliance check" },
      { "id": "i4", "text": "Network reachability test from untrusted zones" }
    ],
    "zones": [
      { "id": "z1", "label": "Confirms the vulnerability is no longer detected by the scanner" },
      { "id": "z2", "label": "Confirms the specific patch or updated component is present" },
      { "id": "z3", "label": "Confirms a secure configuration setting has been applied" },
      { "id": "z4", "label": "Confirms exposure has been reduced by segmentation or firewall changes" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Re-scans validate scanner-detectable issues. Version checks confirm patches. Compliance checks validate configuration fixes. Reachability tests validate network controls."
  },
  {
    "id": 101,
    "qid": "CS0-004-MOD2-101",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "dragdrop",
    "prompt": "Match each SLA tier to the typical maximum remediation window for a Critical vulnerability on a high-value asset.",
    "scenario": "<div class=\"scenario-text\"><p>The organization is defining severity-based remediation SLAs.</p></div>",
    "items": [
      { "id": "i1", "text": "Actively exploited Critical (KEV / ransomware)" },
      { "id": "i2", "text": "Critical with public exploit, no active campaigns" },
      { "id": "i3", "text": "High severity, internal-only exposure" },
      { "id": "i4", "text": "Medium severity with compensating controls" }
    ],
    "zones": [
      { "id": "z1", "label": "24–72 hours (emergency)" },
      { "id": "z2", "label": "7–14 days" },
      { "id": "z3", "label": "30 days" },
      { "id": "z4", "label": "60–90 days or risk acceptance" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Active exploitation demands the shortest window. Public exploits still require rapid action. Standard High findings follow a 30-day target. Medium findings with controls can have longer windows or formal acceptance."
  },
  {
    "id": 102,
    "qid": "CS0-004-MOD2-102",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "dragdrop",
    "prompt": "Match each stakeholder role to its primary responsibility in the remediation process.",
    "scenario": "<div class=\"scenario-text\"><p>Clear accountability is required for timely vulnerability closure.</p></div>",
    "items": [
      { "id": "i1", "text": "Vulnerability Management Team" },
      { "id": "i2", "text": "System / Application Owner" },
      { "id": "i3", "text": "Change Advisory Board / Emergency CAB" },
      { "id": "i4", "text": "Risk / Governance Function" }
    ],
    "zones": [
      { "id": "z1", "label": "Identify, prioritize, track, and report on findings" },
      { "id": "z2", "label": "Execute or approve the technical remediation on owned assets" },
      { "id": "z3", "label": "Authorize emergency or high-impact changes" },
      { "id": "z4", "label": "Approve formal risk acceptance and residual risk statements" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "VM owns the process. Owners perform the work. CAB authorizes changes. Risk function governs acceptance."
  },
  {
    "id": 103,
    "qid": "CS0-004-MOD2-103",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "dragdrop",
    "prompt": "Match each post-remediation evidence type to the question it answers.",
    "scenario": "<div class=\"scenario-text\"><p>Auditors have requested proof that Critical vulnerabilities were properly closed.</p></div>",
    "items": [
      { "id": "i1", "text": "Authenticated scan report showing the finding absent" },
      { "id": "i2", "text": "Configuration management job log with success status" },
      { "id": "i3", "text": "Host command output of package version" },
      { "id": "i4", "text": "Signed risk acceptance document with expiration date" }
    ],
    "zones": [
      { "id": "z1", "label": "Is the vulnerability still detectable by the scanner?" },
      { "id": "z2", "label": "Was the approved change successfully executed by the deployment tool?" },
      { "id": "z3", "label": "Is the expected patched version actually present on the host?" },
      { "id": "z4", "label": "Was residual risk formally accepted when remediation was not possible?" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Re-scan evidence answers detectability. Job logs answer deployment success. Version output answers package state. Risk acceptance answers governance of exceptions."
  },
  {
    "id": 104,
    "qid": "CS0-004-MOD2-104",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "dragdrop",
    "prompt": "Match each mitigation technique to the layer at which it primarily operates.",
    "scenario": "<div class=\"scenario-text\"><p>Defense-in-depth requires mitigations at multiple layers when patches are delayed.</p></div>",
    "items": [
      { "id": "i1", "text": "Vendor security patch" },
      { "id": "i2", "text": "WAF virtual patch" },
      { "id": "i3", "text": "Host-based firewall rule" },
      { "id": "i4", "text": "Network segmentation / ACL" }
    ],
    "zones": [
      { "id": "z1", "label": "Application / OS component itself" },
      { "id": "z2", "label": "Application delivery / HTTP layer" },
      { "id": "z3", "label": "Individual host network stack" },
      { "id": "z4", "label": "Network infrastructure between zones" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Patches fix the component. WAF rules act at the HTTP layer. Host firewalls control local traffic. Segmentation controls inter-zone traffic."
  },
  {
    "id": 105,
    "qid": "CS0-004-MOD2-105",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "dragdrop",
    "prompt": "Match each remediation status to its correct definition in a vulnerability tracking system.",
    "scenario": "<div class=\"scenario-text\"><p>Consistent status values are required for accurate reporting and SLA measurement.</p></div>",
    "items": [
      { "id": "i1", "text": "Open" },
      { "id": "i2", "text": "In Progress" },
      { "id": "i3", "text": "Remediated – Pending Verification" },
      { "id": "i4", "text": "Closed – Verified" }
    ],
    "zones": [
      { "id": "z1", "label": "Finding has been identified and assigned but work has not started" },
      { "id": "z2", "label": "Remediation activity is actively underway" },
      { "id": "z3", "label": "Fix has been applied; awaiting confirmatory re-scan or check" },
      { "id": "z4", "label": "Fix confirmed by re-scan or equivalent evidence; ticket complete" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Open means identified. In Progress means work started. Pending Verification means fix applied but not yet confirmed. Closed – Verified means evidence of success exists."
  },
  {
    "id": 106,
    "qid": "CS0-004-MOD2-106",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "dragdrop",
    "prompt": "Match each emergency remediation trigger to the expected response urgency.",
    "scenario": "<div class=\"scenario-text\"><p>The incident response and vulnerability teams share a common escalation matrix.</p></div>",
    "items": [
      { "id": "i1", "text": "CISA KEV + confirmed ransomware use + internet exposure" },
      { "id": "i2", "text": "Critical CVSS, public exploit, internal high-value asset" },
      { "id": "i3", "text": "High CVSS, no known exploit, standard internal server" },
      { "id": "i4", "text": "Medium CVSS, strong compensating controls already in place" }
    ],
    "zones": [
      { "id": "z1", "label": "Immediate emergency change (hours)" },
      { "id": "z2", "label": "Expedited change within days" },
      { "id": "z3", "label": "Standard change within defined SLA (weeks)" },
      { "id": "z4", "label": "Monitor / scheduled remediation or formal acceptance" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Active ransomware on exposed assets demands hours-scale response. Critical internal findings need days. Ordinary High findings follow normal SLAs. Well-controlled Medium findings can be monitored or accepted."
  },
  {
    "id": 107,
    "qid": "CS0-004-MOD2-107",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "dragdrop",
    "prompt": "Match each tool category to its primary contribution in the remediation workflow.",
    "scenario": "<div class=\"scenario-text\"><p>Multiple platforms collaborate to move a vulnerability from detection to closure.</p></div>",
    "items": [
      { "id": "i1", "text": "Vulnerability Management Platform" },
      { "id": "i2", "text": "Configuration Management / Patch Tool" },
      { "id": "i3", "text": "IT Service Management (Ticketing)" },
      { "id": "i4", "text": "SIEM / Detection Platform" }
    ],
    "zones": [
      { "id": "z1", "label": "Detection, prioritization, tracking, and reporting of findings" },
      { "id": "z2", "label": "Actual deployment of patches and configuration fixes" },
      { "id": "z3", "label": "Workflow, assignment, SLA timers, and audit trail" },
      { "id": "z4", "label": "Detection of exploitation attempts and post-remediation monitoring" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "VM platforms own the finding lifecycle. Config tools perform the technical change. Ticketing systems manage process. SIEM provides exploitation detection and verification monitoring."
  },
  {
    "id": 108,
    "qid": "CS0-004-MOD2-108",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "dragdrop",
    "prompt": "Match each residual risk scenario to the most appropriate governance action.",
    "scenario": "<div class=\"scenario-text\"><p>Not every vulnerability can be fully eliminated. Governance decisions are required.</p></div>",
    "items": [
      { "id": "i1", "text": "Temporary delay with strong compensating controls and near-term fix date" },
      { "id": "i2", "text": "Permanent inability to patch an EOL system that still processes sensitive data" },
      { "id": "i3", "text": "False positive validated by multiple independent methods" },
      { "id": "i4", "text": "Vulnerability on a system scheduled for decommission in 10 days" }
    ],
    "zones": [
      { "id": "z1", "label": "Time-bound risk acceptance with monitoring" },
      { "id": "z2", "label": "Long-term risk acceptance plus isolation and replacement plan" },
      { "id": "z3", "label": "Mark as false positive and suppress with evidence" },
      { "id": "z4", "label": "Short-term acceptance tied to decommission milestone" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Temporary delays use time-bound acceptance. EOL systems need longer-term acceptance plus isolation. Validated false positives are suppressed. Imminent decommission allows short acceptance windows."
  },
  {
    "id": 109,
    "qid": "CS0-004-MOD2-109",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the stage in the remediation workflow where closed-loop verification should occur.",
    "scenario": "<div class=\"scenario-text\"><p>The standard workflow is displayed as: Identify → Prioritize → Remediate → Verify → Report.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Identify", "x": 15, "y": 40 },
      { "id": "node2", "label": "Prioritize", "x": 35, "y": 40 },
      { "id": "node3", "label": "Remediate", "x": 55, "y": 40 },
      { "id": "node4", "label": "Verify", "x": 75, "y": 40 }
    ],
    "correct": ["node4"],
    "explanation": "Closed-loop verification is the explicit purpose of the Verify stage, confirming that the remediation action actually eliminated the vulnerability before the finding is closed."
  },
  {
    "id": 110,
    "qid": "CS0-004-MOD2-110",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the control that provides the most immediate risk reduction when a vendor patch cannot be applied for several weeks.",
    "scenario": "<div class=\"scenario-text\"><p>Four options are shown for an internet-facing application with a Critical vulnerability: full patch deployment, WAF virtual patch, network ACL restriction, and formal risk acceptance document.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Vendor Patch\nDeployment", "x": 20, "y": 40 },
      { "id": "node2", "label": "WAF Virtual\nPatch", "x": 45, "y": 40 },
      { "id": "node3", "label": "Network ACL\nRestriction", "x": 70, "y": 25 },
      { "id": "node4", "label": "Risk Acceptance\nDocument", "x": 70, "y": 55 }
    ],
    "correct": ["node2"],
    "explanation": "A WAF virtual patch can be deployed in minutes to hours and directly blocks the exploit path at the application layer, providing the fastest practical risk reduction when the permanent patch is delayed. ACLs help but may be less precise; risk acceptance does not reduce technical risk."
  },
  {
    "id": 111,
    "qid": "CS0-004-MOD2-111",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the artifact that is required before a High vulnerability can be formally accepted for longer than the standard SLA.",
    "scenario": "<div class=\"scenario-text\"><p>Four documents are available: scanner raw output, change ticket, signed risk acceptance with compensating controls and expiration, and asset owner email stating “we will get to it later.”</p></div>",
    "nodes": [
      { "id": "node1", "label": "Scanner Raw\nOutput", "x": 20, "y": 40 },
      { "id": "node2", "label": "Change\nTicket", "x": 45, "y": 40 },
      { "id": "node3", "label": "Signed Risk\nAcceptance", "x": 70, "y": 25 },
      { "id": "node4", "label": "Owner Email\nPromise", "x": 70, "y": 55 }
    ],
    "correct": ["node3"],
    "explanation": "Formal risk acceptance requires a signed (or equivalently approved) document that records residual risk, compensating controls, accountable owner, and a review/expiration date. Informal email promises and raw scan data do not constitute acceptance."
  },
  {
    "id": 112,
    "qid": "CS0-004-MOD2-112",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the point in the patch deployment pipeline where automated rollback capability is most critical.",
    "scenario": "<div class=\"scenario-text\"><p>The pipeline stages are: Package Acquisition → Test Environment Validation → Pilot Production Group → Broad Production Rollout.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Package\nAcquisition", "x": 15, "y": 40 },
      { "id": "node2", "label": "Test Environment\nValidation", "x": 40, "y": 40 },
      { "id": "node3", "label": "Pilot Production\nGroup", "x": 65, "y": 25 },
      { "id": "node4", "label": "Broad Production\nRollout", "x": 65, "y": 55 }
    ],
    "correct": ["node4"],
    "explanation": "While rollback is useful at every stage, it is most critical during broad production rollout because the blast radius is largest. A failure at this stage can affect the majority of systems."
  },
  {
    "id": 113,
    "qid": "CS0-004-MOD2-113",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the metric that best indicates whether remediation SLAs are being met across the enterprise.",
    "scenario": "<div class=\"scenario-text\"><p>Four metrics are displayed on the vulnerability management dashboard: total vulnerabilities discovered this month, mean time to remediate by severity, number of scanner agents deployed, and raw count of open ports.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Total Vulns\nDiscovered", "x": 20, "y": 40 },
      { "id": "node2", "label": "MTTR by\nSeverity", "x": 45, "y": 40 },
      { "id": "node3", "label": "Scanner Agents\nDeployed", "x": 70, "y": 25 },
      { "id": "node4", "label": "Open Ports\nCount", "x": 70, "y": 55 }
    ],
    "correct": ["node2"],
    "explanation": "Mean time to remediate (MTTR) segmented by severity directly measures how quickly findings are closed relative to expectations and is the primary SLA compliance indicator. Discovery volume, agent count, and open ports are supporting metrics but do not measure remediation speed."
  },
  {
    "id": 114,
    "qid": "CS0-004-MOD2-114",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the action that should be taken first when a Critical patch deployment causes widespread application failures.",
    "scenario": "<div class=\"scenario-text\"><p>Four possible first actions are shown: continue the rollout, execute the rollback plan, open a new vulnerability ticket, and notify the marketing team.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Continue\nRollout", "x": 20, "y": 40 },
      { "id": "node2", "label": "Execute\nRollback Plan", "x": 45, "y": 40 },
      { "id": "node3", "label": "Open New\nVuln Ticket", "x": 70, "y": 25 },
      { "id": "node4", "label": "Notify\nMarketing", "x": 70, "y": 55 }
    ],
    "correct": ["node2"],
    "explanation": "The immediate priority is restoring service by executing the pre-approved rollback plan. Continuing the rollout worsens impact. Opening tickets and notifications are secondary to service recovery."
  },
  {
    "id": 115,
    "qid": "CS0-004-MOD2-115",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Ansible playbook that applies the security patch package.",
    "scenario": "<div class=\"scenario-text\"><p>A configuration management playbook is used to remediate a Critical OS vulnerability across Linux servers.</p></div>",
    "nodes": [
      { "id": "l1", "label": "- name: Ensure yum cache is updated" },
      { "id": "l2", "label": "  ansible.builtin.yum:" },
      { "id": "l3", "label": "    name: openssl" },
      { "id": "l4", "label": "    state: latest" },
      { "id": "l5", "label": "    update_cache: yes" }
    ],
    "correct": ["l4"],
    "selectCount": 1,
    "explanation": "The state: latest directive instructs the package manager to install the newest available version of the named package, thereby applying the security update. The surrounding lines define the task name, module, package name, and cache behavior."
  },
  {
    "id": 116,
    "qid": "CS0-004-MOD2-116",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the PowerShell snippet that verifies the installed patch after deployment.",
    "scenario": "<div class=\"scenario-text\"><p>A post-remediation verification script runs on Windows servers.</p></div>",
    "nodes": [
      { "id": "l1", "label": "$kb = \"KB5034441\"" },
      { "id": "l2", "label": "$hotfixes = Get-HotFix" },
      { "id": "l3", "label": "if ($hotfixes.HotFixID -contains $kb) {" },
      { "id": "l4", "label": "  Write-Output \"Patch $kb is installed\"" },
      { "id": "l5", "label": "}" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "Line l3 performs the actual presence check by testing whether the target KB appears in the list of installed hotfixes. The other lines define the KB variable, retrieve the hotfix list, and output the result."
  },
  {
    "id": 117,
    "qid": "CS0-004-MOD2-117",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the vulnerability management policy YAML that defines the Critical severity remediation SLA in hours.",
    "scenario": "<div class=\"scenario-text\"><p>The policy file controls automated SLA timers and escalation.</p></div>",
    "nodes": [
      { "id": "l1", "label": "sla:" },
      { "id": "l2", "label": "  critical: 72" },
      { "id": "l3", "label": "  high: 720" },
      { "id": "l4", "label": "  medium: 2160" },
      { "id": "l5", "label": "  low: 4320" }
    ],
    "correct": ["l2"],
    "selectCount": 1,
    "explanation": "The critical: 72 entry sets a 72-hour (3-day) remediation target for Critical findings. The other lines define the SLA block and lower-severity windows."
  },
  {
    "id": 118,
    "qid": "CS0-004-MOD2-118",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Bash script that triggers a targeted authenticated re-scan after patching.",
    "scenario": "<div class=\"scenario-text\"><p>A post-remediation automation job confirms that the vulnerability is no longer present.</p></div>",
    "nodes": [
      { "id": "l1", "label": "#!/bin/bash" },
      { "id": "l2", "label": "HOSTS=\"web01 web02 web03\"" },
      { "id": "l3", "label": "nessuscli scan launch --targets \"$HOSTS\" --policy \"Auth-Critical-Verify\"" },
      { "id": "l4", "label": "echo \"Verification scan launched\"" },
      { "id": "l5", "label": "exit 0" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "Line l3 invokes the scanner CLI to launch a named authenticated policy against the remediated hosts. The other lines set the shebang, define the host list, log the action, and exit."
  },
  {
    "id": 119,
    "qid": "CS0-004-MOD2-119",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the risk acceptance record that defines the mandatory review date.",
    "scenario": "<div class=\"scenario-text\"><p>A formal risk acceptance has been created for a legacy system that cannot be patched.</p></div>",
    "nodes": [
      { "id": "l1", "label": "risk_id: RA-2026-0142" },
      { "id": "l2", "label": "cve: CVE-2025-12345" },
      { "id": "l3", "label": "compensating_controls: [segmentation, waf_rule, enhanced_monitoring]" },
      { "id": "l4", "label": "review_date: 2026-12-01" },
      { "id": "l5", "label": "approver: ciso@example.com" }
    ],
    "correct": ["l4"],
    "selectCount": 1,
    "explanation": "The review_date field establishes the required future checkpoint at which the acceptance must be re-evaluated. The other fields identify the risk, CVE, controls, and approver."
  },
  {
    "id": 120,
    "qid": "CS0-004-MOD2-120",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Remediation, Patch Management & Mitigation Strategies",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the SCCM / ConfigMgr deployment snippet that requires a reboot after patch installation when needed.",
    "scenario": "<div class=\"scenario-text\"><p>A software update deployment is being configured for a Critical Windows security patch.</p></div>",
    "nodes": [
      { "id": "l1", "label": "DeploymentName = \"Critical-2026-09-Security\"" },
      { "id": "l2", "label": "Collection = \"All Production Servers\"" },
      { "id": "l3", "label": "AllowRestart = $true" },
      { "id": "l4", "label": "Deadline = (Get-Date).AddHours(48)" },
      { "id": "l5", "label": "UserNotification = \"DisplayAll\"" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "AllowRestart = $true permits the deployment to initiate a reboot when the update requires it for full remediation. The other lines name the deployment, target the collection, set the deadline, and control user notification."
 },
  {
    "id": 121,
    "qid": "CS0-004-MOD2-121",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "single",
    "prompt": "A SAST scan of a Python Flask application flags the following line as a high-severity finding: cursor.execute(f\"SELECT * FROM users WHERE username = '{username}'\"). What is the primary vulnerability and the correct remediation?",
    "scenario": "<div class=\"scenario-text\"><p>The application accepts username input from a web form and constructs a SQL query using an f-string. The database backend is PostgreSQL. No input validation or parameterization is present.</p></div>",
    "options": [
      { "id": "a", "text": "SQL Injection; replace the f-string with a parameterized query using placeholders and bound parameters" },
      { "id": "b", "text": "Cross-Site Scripting; encode the username before inserting it into the query" },
      { "id": "c", "text": "Command Injection; escape shell metacharacters in the username" },
      { "id": "d", "text": "Insecure Deserialization; switch to a binary protocol for database communication" }
    ],
    "correct": ["a"],
    "explanation": "Direct interpolation of user input into a SQL string creates a classic SQL Injection vulnerability. The correct fix is to use parameterized queries (e.g., cursor.execute(\"SELECT * FROM users WHERE username = %s\", (username,))). XSS and command injection are different classes of vulnerability; insecure deserialization is unrelated."
  },
  {
    "id": 122,
    "qid": "CS0-004-MOD2-122",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "single",
    "prompt": "A DAST scan reports that an API endpoint reflects user-controlled input in the response without encoding. The input is rendered inside an HTML context. What is the most accurate classification of this finding?",
    "scenario": "<div class=\"scenario-text\"><p>The endpoint accepts a query parameter “name” and returns an HTML page containing the unsanitized value inside a <div> element. No Content-Security-Policy is present.</p></div>",
    "options": [
      { "id": "a", "text": "Reflected Cross-Site Scripting (XSS)" },
      { "id": "b", "text": "Stored Cross-Site Scripting (XSS)" },
      { "id": "c", "text": "SQL Injection" },
      { "id": "d", "text": "Server-Side Request Forgery (SSRF)" }
    ],
    "correct": ["a"],
    "explanation": "When user input is immediately reflected in the HTTP response without proper output encoding, the vulnerability is Reflected XSS. Stored XSS requires the payload to be persisted. SQL Injection and SSRF are different attack classes."
  },
  {
    "id": 123,
    "qid": "CS0-004-MOD2-123",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "single",
    "prompt": "An application performs authentication by comparing a user-supplied password to a value stored in the database using a simple string equality check on a SHA-1 hash. What is the most significant weakness?",
    "scenario": "<div class=\"scenario-text\"><p>The registration flow stores SHA-1(password) with no salt. Login performs if (stored_hash == sha1(supplied_password)). No rate limiting or account lockout is implemented.</p></div>",
    "options": [
      { "id": "a", "text": "Use of a fast, unsalted cryptographic hash makes offline cracking and rainbow-table attacks practical" },
      { "id": "b", "text": "SHA-1 is still considered secure for password storage when used correctly" },
      { "id": "c", "text": "The absence of HTTPS is the only relevant weakness" },
      { "id": "d", "text": "String equality comparison is itself a vulnerability regardless of the hash" }
    ],
    "correct": ["a"],
    "explanation": "SHA-1 is a fast, non-adaptive hash. Without a unique salt, pre-computed rainbow tables and rapid brute-force attacks are feasible. Modern password storage requires a slow, memory-hard, salted algorithm such as bcrypt, scrypt, or Argon2. HTTPS and comparison method are secondary concerns."
  },
  {
    "id": 124,
    "qid": "CS0-004-MOD2-124",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "single",
    "prompt": "A code review discovers that an application deserializes user-supplied data using Java’s native ObjectInputStream without any filtering. What is the primary risk?",
    "scenario": "<div class=\"scenario-text\"><p>The endpoint accepts a Base64-encoded payload, decodes it, and passes the byte stream directly to ObjectInputStream.readObject(). The application runs with the privileges of a service account that has access to sensitive internal resources.</p></div>",
    "options": [
      { "id": "a", "text": "Insecure Deserialization leading to remote code execution via gadget chains" },
      { "id": "b", "text": "Cross-Site Request Forgery because the request is state-changing" },
      { "id": "c", "text": "XML External Entity (XXE) injection" },
      { "id": "d", "text": "Broken authentication due to missing session tokens" }
    ],
    "correct": ["a"],
    "explanation": "Unsafe native Java deserialization is a well-known vector for remote code execution through gadget chains present in common libraries. CSRF, XXE, and broken authentication are distinct vulnerability classes."
  },
  {
    "id": 125,
    "qid": "CS0-004-MOD2-125",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "multiselect",
    "prompt": "Select THREE secure coding practices that effectively prevent SQL Injection.",
    "scenario": "<div class=\"scenario-text\"><p>A development team is updating its secure coding standard for all applications that interact with relational databases.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Use parameterized queries or prepared statements exclusively" },
      { "id": "b", "text": "Apply allow-list input validation for values that must appear in queries" },
      { "id": "c", "text": "Utilize stored procedures that do not dynamically concatenate user input" },
      { "id": "d", "text": "Disable all database logging to reduce attack surface" },
      { "id": "e", "text": "Store database credentials in source code for convenience" },
      { "id": "f", "text": "Grant the application database account full DBA privileges" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Parameterized queries, allow-list validation, and safe stored procedures are proven defenses against SQL Injection. Disabling logging, hard-coding credentials, and excessive privileges increase risk rather than reduce it."
  },
  {
    "id": 126,
    "qid": "CS0-004-MOD2-126",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "multiselect",
    "prompt": "Select FOUR controls that mitigate Cross-Site Scripting (XSS) vulnerabilities.",
    "scenario": "<div class=\"scenario-text\"><p>A web application has historically suffered from both reflected and stored XSS findings. The security team is defining mandatory defenses.</p></div><div class=\"requirements-box\"><h3>Select exactly FOUR</h3></div>",
    "options": [
      { "id": "a", "text": "Context-aware output encoding (HTML, JavaScript, URL, CSS)" },
      { "id": "b", "text": "Content-Security-Policy (CSP) headers that restrict script sources" },
      { "id": "c", "text": "Input validation using allow-lists for expected data formats" },
      { "id": "d", "text": "HttpOnly and Secure flags on session cookies" },
      { "id": "e", "text": "Disabling HTTPS to simplify certificate management" },
      { "id": "f", "text": "Storing all user input in global JavaScript variables without encoding" }
    ],
    "correct": ["a", "b", "c", "d"],
    "selectCount": 4,
    "explanation": "Output encoding, CSP, input validation, and secure cookie flags are core XSS defenses. Disabling HTTPS and placing unencoded input into JavaScript globals increase exposure."
  },
  {
    "id": 127,
    "qid": "CS0-004-MOD2-127",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "multiselect",
    "prompt": "Select THREE common indicators of a Server-Side Request Forgery (SSRF) vulnerability during code or configuration review.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is reviewing an application that accepts a URL parameter and fetches remote content on behalf of the user.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "User-controlled URL is passed directly to an HTTP client library without allow-listing" },
      { "id": "b", "text": "The application can be made to request internal IP addresses or cloud metadata endpoints" },
      { "id": "c", "text": "No outbound network restrictions are applied to the application’s runtime environment" },
      { "id": "d", "text": "The application uses parameterized SQL queries" },
      { "id": "e", "text": "Session cookies are marked HttpOnly" },
      { "id": "f", "text": "The application implements CSRF tokens on state-changing forms" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Direct use of user-supplied URLs, ability to reach internal resources, and lack of egress controls are classic SSRF indicators. Parameterized SQL, HttpOnly cookies, and CSRF tokens address different risks."
  },
  {
    "id": 128,
    "qid": "CS0-004-MOD2-128",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "multiselect",
    "prompt": "Select THREE secure practices for handling authentication and session management.",
    "scenario": "<div class=\"scenario-text\"><p>A new customer-facing application is being designed. The architecture team must enforce modern authentication and session controls.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Store password hashes using a memory-hard algorithm such as Argon2 or bcrypt with unique salts" },
      { "id": "b", "text": "Regenerate session identifiers after successful login and privilege changes" },
      { "id": "c", "text": "Set Secure, HttpOnly, and SameSite attributes on session cookies" },
      { "id": "d", "text": "Transmit session tokens in URL query parameters for ease of debugging" },
      { "id": "e", "text": "Use a single long-lived API key shared across all users" },
      { "id": "f", "text": "Disable multi-factor authentication to reduce user friction" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Modern password hashing, session regeneration, and proper cookie flags are fundamental. Placing tokens in URLs, shared long-lived keys, and disabling MFA weaken security."
  },
  {
    "id": 129,
    "qid": "CS0-004-MOD2-129",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "multiselect",
    "prompt": "Select FOUR findings that a mature SAST tool is expected to detect in source code.",
    "scenario": "<div class=\"scenario-text\"><p>The organization is selecting a static analysis tool for its CI/CD pipeline and needs to confirm coverage of high-risk coding flaws.</p></div><div class=\"requirements-box\"><h3>Select exactly FOUR</h3></div>",
    "options": [
      { "id": "a", "text": "SQL Injection via string concatenation or format strings" },
      { "id": "b", "text": "Hard-coded credentials and cryptographic keys" },
      { "id": "c", "text": "Insecure deserialization of untrusted data" },
      { "id": "d", "text": "Use of weak or broken cryptographic algorithms" },
      { "id": "e", "text": "Missing operating system patches on the build server" },
      { "id": "f", "text": "Open network ports on production load balancers" }
    ],
    "correct": ["a", "b", "c", "d"],
    "selectCount": 4,
    "explanation": "SAST operates on source or bytecode and is designed to find injection flaws, secrets, unsafe deserialization, and weak cryptography. OS patch status and network ports are the domain of infrastructure and DAST/network scanners."
  },
  {
    "id": 130,
    "qid": "CS0-004-MOD2-130",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "multiselect",
    "prompt": "Select THREE differences between SAST and DAST that influence when each should be used.",
    "scenario": "<div class=\"scenario-text\"><p>The security architecture team is defining the application security testing strategy for a microservices environment.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "SAST analyzes source or bytecode without executing the application" },
      { "id": "b", "text": "DAST interacts with a running application over the network, typically without source access" },
      { "id": "c", "text": "SAST can find issues earlier in the development lifecycle; DAST finds issues that appear only at runtime" },
      { "id": "d", "text": "SAST requires a fully deployed production environment to operate" },
      { "id": "e", "text": "DAST can only be performed by the original application developers" },
      { "id": "f", "text": "SAST and DAST produce identical findings in all cases" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "SAST is white-box and static; DAST is black-box and dynamic. SAST shifts left; DAST catches runtime and configuration issues. The remaining statements are false."
  },
  {
    "id": 131,
    "qid": "CS0-004-MOD2-131",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "multiselect",
    "prompt": "Select THREE effective defenses against XML External Entity (XXE) attacks.",
    "scenario": "<div class=\"scenario-text\"><p>An application parses XML documents supplied by external partners. Several XXE findings have been reported.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Disable external entity and DTD processing in the XML parser configuration" },
      { "id": "b", "text": "Use a less complex data format such as JSON when possible" },
      { "id": "c", "text": "Validate and sanitize XML input against an expected schema" },
      { "id": "d", "text": "Increase the maximum entity expansion limit to improve performance" },
      { "id": "e", "text": "Run the XML parser with the highest available system privileges" },
      { "id": "f", "text": "Store raw XML payloads in application logs for later analysis" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Disabling external entities/DTDs, preferring simpler formats, and schema validation are primary XXE defenses. Raising expansion limits, elevating privileges, and logging raw untrusted XML increase risk."
  },
  {
    "id": 132,
    "qid": "CS0-004-MOD2-132",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "multiselect",
    "prompt": "Select FOUR practices that reduce the risk of insecure direct object references (IDOR) and broken access control.",
    "scenario": "<div class=\"scenario-text\"><p>A multi-tenant SaaS application has experienced several IDOR incidents where users could access other tenants’ data by manipulating identifiers.</p></div><div class=\"requirements-box\"><h3>Select exactly FOUR</h3></div>",
    "options": [
      { "id": "a", "text": "Enforce authorization checks on every request that accesses a resource" },
      { "id": "b", "text": "Use non-enumerable, unpredictable identifiers (e.g., UUIDs) where practical" },
      { "id": "c", "text": "Implement server-side ownership validation before returning or modifying objects" },
      { "id": "d", "text": "Apply the principle of least privilege to application service accounts and roles" },
      { "id": "e", "text": "Rely solely on client-side JavaScript to hide unauthorized UI elements" },
      { "id": "f", "text": "Disable all logging of access control decisions" }
    ],
    "correct": ["a", "b", "c", "d"],
    "selectCount": 4,
    "explanation": "Server-side authorization, unpredictable IDs, ownership checks, and least privilege are essential. Client-side hiding and disabled logging provide no real protection."
  },
  {
    "id": 133,
    "qid": "CS0-004-MOD2-133",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "multiselect",
    "prompt": "Select THREE indicators that an application may be vulnerable to command injection.",
    "scenario": "<div class=\"scenario-text\"><p>A code review is being performed on a service that builds operating-system commands from user input.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "User input is concatenated directly into a shell command string" },
      { "id": "b", "text": "The application invokes a shell (e.g., /bin/sh -c) rather than a direct exec of a binary" },
      { "id": "c", "text": "No allow-list validation or escaping is applied to arguments before execution" },
      { "id": "d", "text": "The application uses parameterized SQL queries" },
      { "id": "e", "text": "Session cookies are marked Secure and HttpOnly" },
      { "id": "f", "text": "The application implements a strict Content-Security-Policy" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "String concatenation into shell commands, use of a shell interpreter, and lack of validation/escaping are classic command-injection indicators. SQL parameterization, cookie flags, and CSP address other risks."
  },
  {
    "id": 134,
    "qid": "CS0-004-MOD2-134",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "multiselect",
    "prompt": "Select THREE benefits of integrating security testing into the CI/CD pipeline (Shift-Left).",
    "scenario": "<div class=\"scenario-text\"><p>The organization is moving from periodic penetration tests to continuous application security testing.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Vulnerabilities are discovered earlier when they are cheaper and faster to fix" },
      { "id": "b", "text": "Developers receive rapid feedback and can remediate issues in the same sprint" },
      { "id": "c", "text": "Security becomes a shared responsibility rather than a late-stage gate" },
      { "id": "d", "text": "All need for production DAST and penetration testing disappears" },
      { "id": "e", "text": "Source code no longer needs to be reviewed by humans" },
      { "id": "f", "text": "Runtime configuration and infrastructure risks are automatically eliminated" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Early detection, fast developer feedback, and shared ownership are core shift-left benefits. Pipeline testing does not replace production testing, human review, or infrastructure security."
  },
  {
    "id": 135,
    "qid": "CS0-004-MOD2-135",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "multiselect",
    "prompt": "Select THREE secure defaults that should be enforced for new web applications.",
    "scenario": "<div class=\"scenario-text\"><p>A secure-by-default framework is being mandated for all green-field development.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "HTTPS-only with HSTS preloading where appropriate" },
      { "id": "b", "text": "Secure, HttpOnly, SameSite cookies by default" },
      { "id": "c", "text": "Strict Content-Security-Policy with minimal allowed sources" },
      { "id": "d", "text": "Detailed stack traces returned to end users in production" },
      { "id": "e", "text": "Directory listing enabled on all static file handlers" },
      { "id": "f", "text": "Debug mode left enabled in production deployments" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "HTTPS/HSTS, secure cookie attributes, and strict CSP are modern secure defaults. Verbose errors, directory listing, and debug mode in production are insecure defaults."
  },
  {
    "id": 136,
    "qid": "CS0-004-MOD2-136",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "multiselect",
    "prompt": "Select THREE techniques that help prevent mass-assignment and excessive data exposure vulnerabilities.",
    "scenario": "<div class=\"scenario-text\"><p>An API framework automatically binds request parameters to internal object properties. Several mass-assignment findings have been reported.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Explicitly define allow-lists of properties that may be set from user input" },
      { "id": "b", "text": "Use Data Transfer Objects (DTOs) that contain only the fields intended for external exposure" },
      { "id": "c", "text": "Avoid binding entire domain entities directly to request payloads" },
      { "id": "d", "text": "Return full internal object graphs including sensitive fields in every API response" },
      { "id": "e", "text": "Disable authentication on all write endpoints to simplify testing" },
      { "id": "f", "text": "Store API keys in client-side JavaScript for convenience" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Allow-lists, DTOs, and avoiding direct entity binding prevent mass assignment and over-exposure. Returning full internal graphs, disabling auth, and client-side keys increase risk."
  },
  {
    "id": 137,
    "qid": "CS0-004-MOD2-137",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "dragdrop",
    "prompt": "Match each web application vulnerability to its primary impact.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is classifying findings from a recent DAST and SAST assessment.</p></div>",
    "items": [
      { "id": "i1", "text": "SQL Injection" },
      { "id": "i2", "text": "Cross-Site Scripting (XSS)" },
      { "id": "i3", "text": "Insecure Deserialization" },
      { "id": "i4", "text": "Server-Side Request Forgery (SSRF)" }
    ],
    "zones": [
      { "id": "z1", "label": "Unauthorized database read/write or potential remote code execution via the database" },
      { "id": "z2", "label": "Execution of attacker-controlled script in the victim’s browser context" },
      { "id": "z3", "label": "Remote code execution on the application server via gadget chains" },
      { "id": "z4", "label": "Forced server-side requests to internal or otherwise restricted resources" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "SQL Injection targets the database. XSS executes in the browser. Insecure deserialization can yield RCE on the server. SSRF abuses the server’s ability to make requests."
  },
  {
    "id": 138,
    "qid": "CS0-004-MOD2-138",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "dragdrop",
    "prompt": "Match each secure coding control to the vulnerability class it primarily mitigates.",
    "scenario": "<div class=\"scenario-text\"><p>Developers are being trained on which controls map to which OWASP Top 10 categories.</p></div>",
    "items": [
      { "id": "i1", "text": "Parameterized queries" },
      { "id": "i2", "text": "Context-aware output encoding + CSP" },
      { "id": "i3", "text": "Disable external entities / use safe parsers" },
      { "id": "i4", "text": "Server-side authorization checks on every request" }
    ],
    "zones": [
      { "id": "z1", "label": "Injection (SQL, OS command, etc.)" },
      { "id": "z2", "label": "Cross-Site Scripting (XSS)" },
      { "id": "z3", "label": "XML External Entity (XXE)" },
      { "id": "z4", "label": "Broken Access Control / IDOR" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Parameterized queries stop injection. Encoding and CSP stop XSS. Safe XML parsing stops XXE. Explicit authorization stops broken access control."
  },
  {
    "id": 139,
    "qid": "CS0-004-MOD2-139",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "dragdrop",
    "prompt": "Match each testing methodology to the stage of the software development lifecycle where it is most effectively applied.",
    "scenario": "<div class=\"scenario-text\"><p>The organization is designing a layered application security testing strategy.</p></div>",
    "items": [
      { "id": "i1", "text": "Static Application Security Testing (SAST)" },
      { "id": "i2", "text": "Dynamic Application Security Testing (DAST)" },
      { "id": "i3", "text": "Interactive Application Security Testing (IAST)" },
      { "id": "i4", "text": "Software Composition Analysis (SCA)" }
    ],
    "zones": [
      { "id": "z1", "label": "Early development / commit time on source or bytecode" },
      { "id": "z2", "label": "Running application in test or staging environments" },
      { "id": "z3", "label": "Instrumented runtime analysis during functional testing" },
      { "id": "z4", "label": "Dependency and third-party library analysis throughout the pipeline" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "SAST works on code early. DAST needs a running instance. IAST instruments the running app. SCA continuously evaluates third-party components."
  },
  {
    "id": 140,
    "qid": "CS0-004-MOD2-140",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "dragdrop",
    "prompt": "Match each authentication weakness to the recommended remediation.",
    "scenario": "<div class=\"scenario-text\"><p>A security assessment has identified multiple authentication and session management issues.</p></div>",
    "items": [
      { "id": "i1", "text": "Passwords stored as unsalted SHA-1" },
      { "id": "i2", "text": "Session IDs remain the same after login" },
      { "id": "i3", "text": "Session cookies lack Secure and HttpOnly flags" },
      { "id": "i4", "text": "No rate limiting on login attempts" }
    ],
    "zones": [
      { "id": "z1", "label": "Migrate to Argon2/bcrypt/scrypt with unique per-user salts" },
      { "id": "z2", "label": "Regenerate session identifier on authentication and privilege change" },
      { "id": "z3", "label": "Set Secure, HttpOnly, and SameSite attributes on all session cookies" },
      { "id": "z4", "label": "Implement account lockout or progressive delays after failed attempts" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Modern slow hashes replace weak password storage. Session fixation is prevented by regeneration. Cookie flags protect the token. Rate limiting slows credential stuffing and brute force."
  },
  {
    "id": 141,
    "qid": "CS0-004-MOD2-141",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "dragdrop",
    "prompt": "Match each OWASP Top 10 category to a representative technical example.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is mapping concrete findings to the current OWASP Top 10 for reporting.</p></div>",
    "items": [
      { "id": "i1", "text": "A01 Broken Access Control" },
      { "id": "i2", "text": "A03 Injection" },
      { "id": "i3", "text": "A07 Identification and Authentication Failures" },
      { "id": "i4", "text": "A08 Software and Data Integrity Failures" }
    ],
    "zones": [
      { "id": "z1", "label": "User can access another tenant’s records by changing an ID in the URL" },
      { "id": "z2", "label": "Application concatenates user input into a SQL query string" },
      { "id": "z3", "label": "Password reset tokens are predictable and never expire" },
      { "id": "z4", "label": "Application deserializes untrusted data or installs packages without integrity verification" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "IDOR is a classic broken access control issue. SQL concatenation is injection. Weak password-reset tokens are authentication failures. Insecure deserialization and unsigned packages fall under integrity failures."
  },
  {
    "id": 142,
    "qid": "CS0-004-MOD2-142",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "dragdrop",
    "prompt": "Match each input handling technique to the protection it primarily provides.",
    "scenario": "<div class=\"scenario-text\"><p>Developers must choose the correct defensive technique for different trust boundaries.</p></div>",
    "items": [
      { "id": "i1", "text": "Allow-list input validation" },
      { "id": "i2", "text": "Context-aware output encoding" },
      { "id": "i3", "text": "Parameterized queries" },
      { "id": "i4", "text": "Canonicalization before validation" }
    ],
    "zones": [
      { "id": "z1", "label": "Rejects unexpected characters or formats before they reach business logic" },
      { "id": "z2", "label": "Ensures data is safe when rendered in HTML, JavaScript, or other contexts" },
      { "id": "z3", "label": "Prevents user data from being interpreted as SQL code" },
      { "id": "z4", "label": "Normalizes input so that validation cannot be bypassed by encoding tricks" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Allow-lists filter early. Output encoding protects the rendering context. Parameterization protects the database. Canonicalization prevents encoding-based bypasses of validation."
  },
  {
    "id": 143,
    "qid": "CS0-004-MOD2-143",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "dragdrop",
    "prompt": "Match each cryptographic misuse to the correct remediation.",
    "scenario": "<div class=\"scenario-text\"><p>A code review has identified several cryptographic implementation flaws.</p></div>",
    "items": [
      { "id": "i1", "text": "Hard-coded AES key in source code" },
      { "id": "i2", "text": "Use of ECB mode for encrypting multi-block data" },
      { "id": "i3", "text": "Custom “home-grown” encryption algorithm" },
      { "id": "i4", "text": "MD5 used for password storage" }
    ],
    "zones": [
      { "id": "z1", "label": "Retrieve keys from a secure vault or HSM at runtime" },
      { "id": "z2", "label": "Switch to an authenticated mode such as GCM or CBC with HMAC" },
      { "id": "z3", "label": "Replace with a well-vetted standard algorithm and library" },
      { "id": "z4", "label": "Replace with Argon2, bcrypt, or scrypt with unique salts" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Keys must not live in source. ECB leaks patterns and should be replaced by authenticated encryption. Custom crypto is almost always broken. MD5 is unsuitable for passwords."
  },
  {
    "id": 144,
    "qid": "CS0-004-MOD2-144",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "dragdrop",
    "prompt": "Match each API security control to the risk it primarily addresses.",
    "scenario": "<div class=\"scenario-text\"><p>A new public API is being hardened before release.</p></div>",
    "items": [
      { "id": "i1", "text": "Rate limiting and throttling" },
      { "id": "i2", "text": "Strict schema validation of request bodies" },
      { "id": "i3", "text": "OAuth 2.0 / OpenID Connect with short-lived tokens" },
      { "id": "i4", "text": "Response filtering / DTO projection" }
    ],
    "zones": [
      { "id": "z1", "label": "Abuse, credential stuffing, and denial-of-service via excessive calls" },
      { "id": "z2", "label": "Injection and mass-assignment through unexpected fields" },
      { "id": "z3", "label": "Unauthorized access and token theft / replay" },
      { "id": "z4", "label": "Excessive data exposure of internal fields" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Rate limiting curbs abuse. Schema validation blocks unexpected input. Modern token-based auth protects identity. DTOs prevent over-exposure."
  },
  {
    "id": 145,
    "qid": "CS0-004-MOD2-145",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "dragdrop",
    "prompt": "Match each secure development activity to the primary role responsible for performing it.",
    "scenario": "<div class=\"scenario-text\"><p>Clear ownership is required for application security activities across the SDLC.</p></div>",
    "items": [
      { "id": "i1", "text": "Writing and maintaining unit tests that include security assertions" },
      { "id": "i2", "text": "Configuring and tuning SAST/DAST policies in the pipeline" },
      { "id": "i3", "text": "Performing manual code review of high-risk authentication modules" },
      { "id": "i4", "text": "Approving residual risk for vulnerabilities that cannot be fixed before release" }
    ],
    "zones": [
      { "id": "z1", "label": "Application Developers" },
      { "id": "z2", "label": "Application Security / DevSecOps Engineers" },
      { "id": "z3", "label": "Security Champions or AppSec specialists" },
      { "id": "z4", "label": "Risk Owner / Product Owner with security guidance" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Developers own unit tests. AppSec/DevSecOps own toolchain configuration. Champions or specialists perform deep reviews. Risk owners formally accept residual risk."
  },
  {
    "id": 146,
    "qid": "CS0-004-MOD2-146",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "dragdrop",
    "prompt": "Match each common web vulnerability to the most effective first-line automated detection method.",
    "scenario": "<div class=\"scenario-text\"><p>The security team is mapping detection methods to vulnerability classes for pipeline design.</p></div>",
    "items": [
      { "id": "i1", "text": "SQL Injection in source code" },
      { "id": "i2", "text": "Reflected XSS in a running web application" },
      { "id": "i3", "text": "Known vulnerable open-source library" },
      { "id": "i4", "text": "Hard-coded API key in a repository" }
    ],
    "zones": [
      { "id": "z1", "label": "Static Application Security Testing (SAST)" },
      { "id": "z2", "label": "Dynamic Application Security Testing (DAST)" },
      { "id": "z3", "label": "Software Composition Analysis (SCA)" },
      { "id": "z4", "label": "Secret scanning / pre-commit hooks" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "SAST finds injection patterns in code. DAST finds reflected XSS at runtime. SCA identifies vulnerable dependencies. Secret scanners catch hard-coded credentials."
  },
  {
    "id": 147,
    "qid": "CS0-004-MOD2-147",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "dragdrop",
    "prompt": "Match each HTTP security header to the protection it primarily provides.",
    "scenario": "<div class=\"scenario-text\"><p>A web application is being hardened with modern response headers.</p></div>",
    "items": [
      { "id": "i1", "text": "Content-Security-Policy" },
      { "id": "i2", "text": "Strict-Transport-Security" },
      { "id": "i3", "text": "X-Content-Type-Options: nosniff" },
      { "id": "i4", "text": "Referrer-Policy" }
    ],
    "zones": [
      { "id": "z1", "label": "Restricts sources of scripts, styles, and other content to mitigate XSS" },
      { "id": "z2", "label": "Forces browsers to use HTTPS for subsequent requests" },
      { "id": "z3", "label": "Prevents MIME-type sniffing that could lead to XSS or content injection" },
      { "id": "z4", "label": "Controls how much referrer information is sent with requests" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "CSP mitigates XSS. HSTS enforces HTTPS. nosniff stops MIME confusion. Referrer-Policy limits information leakage via the Referer header."
  },
  {
    "id": 148,
    "qid": "CS0-004-MOD2-148",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "dragdrop",
    "prompt": "Match each insecure pattern to the secure alternative.",
    "scenario": "<div class=\"scenario-text\"><p>Developers are being shown concrete before-and-after examples during secure coding training.</p></div>",
    "items": [
      { "id": "i1", "text": "String concatenation to build SQL" },
      { "id": "i2", "text": "eval() or equivalent on user input" },
      { "id": "i3", "text": "Unvalidated redirect to user-supplied URL" },
      { "id": "i4", "text": "Storing session token in localStorage" }
    ],
    "zones": [
      { "id": "z1", "label": "Parameterized query / prepared statement" },
      { "id": "z2", "label": "Avoid dynamic code execution; use safe parsers or interpreters" },
      { "id": "z3", "label": "Allow-list of permitted redirect targets" },
      { "id": "z4", "label": "Store session token in an HttpOnly Secure cookie" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Parameterization replaces concatenation. Dynamic evaluation of user input is avoided. Redirects are constrained by allow-lists. Tokens belong in HttpOnly cookies, not accessible JavaScript storage."
  },
  {
    "id": 149,
    "qid": "CS0-004-MOD2-149",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the application layer where a WAF virtual patch for a known SQL Injection vulnerability is most effectively applied.",
    "scenario": "<div class=\"scenario-text\"><p>The architecture shows: Client Browser → CDN → WAF / Reverse Proxy → Application Servers → Database.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Client\nBrowser", "x": 10, "y": 40 },
      { "id": "node2", "label": "CDN", "x": 30, "y": 40 },
      { "id": "node3", "label": "WAF / Reverse\nProxy", "x": 55, "y": 40 },
      { "id": "node4", "label": "Database", "x": 80, "y": 40 }
    ],
    "correct": ["node3"],
    "explanation": "A WAF sitting in front of the application servers can inspect and block malicious SQL payloads before they reach the application code, providing an effective virtual patch. Client-side and CDN controls cannot reliably stop SQL Injection; the database is too late."
  },
  {
    "id": 150,
    "qid": "CS0-004-MOD2-150",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the testing type that can detect a vulnerability caused by a misconfigured runtime setting that only appears when the application is executed.",
    "scenario": "<div class=\"scenario-text\"><p>Four testing approaches are shown: SAST, SCA, DAST, and manual source-code review.</p></div>",
    "nodes": [
      { "id": "node1", "label": "SAST", "x": 20, "y": 40 },
      { "id": "node2", "label": "SCA", "x": 40, "y": 40 },
      { "id": "node3", "label": "DAST", "x": 60, "y": 40 },
      { "id": "node4", "label": "Manual Source\nReview", "x": 80, "y": 40 }
    ],
    "correct": ["node3"],
    "explanation": "DAST exercises a running application and can therefore discover issues that depend on runtime configuration, environment variables, or deployed settings. SAST and SCA operate on code or dependencies without execution; manual review may miss runtime-only problems."
  },
  {
    "id": 151,
    "qid": "CS0-004-MOD2-151",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that should enforce authorization checks to prevent Insecure Direct Object Reference (IDOR).",
    "scenario": "<div class=\"scenario-text\"><p>The request flow is: Client → API Gateway → Application Business Logic → Data Access Layer → Database.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Client", "x": 10, "y": 40 },
      { "id": "node2", "label": "API Gateway", "x": 30, "y": 40 },
      { "id": "node3", "label": "Application\nBusiness Logic", "x": 55, "y": 40 },
      { "id": "node4", "label": "Database", "x": 80, "y": 40 }
    ],
    "correct": ["node3"],
    "explanation": "Authorization decisions that prevent IDOR must be enforced in the server-side business logic that understands object ownership and tenant boundaries. Client-side checks are bypassable; the gateway may lack full business context; the database alone cannot make application-level authorization decisions."
  },
  {
    "id": 152,
    "qid": "CS0-004-MOD2-152",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the artifact that is the primary output of a Software Composition Analysis (SCA) tool.",
    "scenario": "<div class=\"scenario-text\"><p>Four artifacts are shown: list of vulnerable open-source dependencies with CVE mappings, annotated source code with injection findings, runtime HTTP traffic with XSS payloads, and network port scan results.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Vulnerable\nDependencies + CVEs", "x": 20, "y": 40 },
      { "id": "node2", "label": "Annotated Source\nwith Injection", "x": 45, "y": 40 },
      { "id": "node3", "label": "HTTP Traffic\nwith XSS", "x": 70, "y": 25 },
      { "id": "node4", "label": "Network Port\nScan Results", "x": 70, "y": 55 }
    ],
    "correct": ["node1"],
    "explanation": "SCA tools inventory third-party and open-source components and map them to known vulnerabilities (CVEs). Annotated source is SAST output; HTTP traffic with payloads is DAST; port scans belong to infrastructure assessment."
  },
  {
    "id": 153,
    "qid": "CS0-004-MOD2-153",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the location where a Content-Security-Policy header should be set to mitigate XSS.",
    "scenario": "<div class=\"scenario-text\"><p>The response path is: Application Server generates HTML → Reverse Proxy / Web Server → CDN → Browser.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Application\nServer", "x": 20, "y": 40 },
      { "id": "node2", "label": "Reverse Proxy /\nWeb Server", "x": 45, "y": 40 },
      { "id": "node3", "label": "CDN", "x": 70, "y": 25 },
      { "id": "node4", "label": "Browser", "x": 70, "y": 55 }
    ],
    "correct": ["node1"],
    "explanation": "CSP is most effectively set by the application (or its immediate web server) so that it is present on every relevant response. While proxies and CDNs can add headers, the authoritative and most maintainable place is the application itself. The browser only consumes the policy."
  },
  {
    "id": 154,
    "qid": "CS0-004-MOD2-154",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the practice that most effectively prevents introduction of new SQL Injection vulnerabilities during development.",
    "scenario": "<div class=\"scenario-text\"><p>Four practices are shown: mandatory use of parameterized queries enforced by code review and SAST, relying solely on a WAF, disabling database error messages, and increasing database privileges for the application account.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Parameterized Queries\n+ SAST / Review", "x": 20, "y": 40 },
      { "id": "node2", "label": "Rely Solely\non WAF", "x": 45, "y": 40 },
      { "id": "node3", "label": "Disable DB\nError Messages", "x": 70, "y": 25 },
      { "id": "node4", "label": "Increase DB\nPrivileges", "x": 70, "y": 55 }
    ],
    "correct": ["node1"],
    "explanation": "Preventing the vulnerable coding pattern itself through parameterization, supported by automated and human review, is the most effective control. A WAF is a compensating control, not a prevention. Hiding errors and increasing privileges do not stop injection."
  },
  {
    "id": 155,
    "qid": "CS0-004-MOD2-155",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Python code that introduces a SQL Injection vulnerability.",
    "scenario": "<div class=\"scenario-text\"><p>A code review is examining a user lookup function.</p></div>",
    "nodes": [
      { "id": "l1", "label": "def get_user(username):" },
      { "id": "l2", "label": "    conn = get_db_connection()" },
      { "id": "l3", "label": "    query = f\"SELECT * FROM users WHERE name = '{username}'\"" },
      { "id": "l4", "label": "    cursor = conn.cursor()" },
      { "id": "l5", "label": "    cursor.execute(query)" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "Line l3 builds the SQL statement by directly interpolating the username variable, creating a SQL Injection flaw. The subsequent execute call simply runs the already-tainted query."
  },
  {
    "id": 156,
    "qid": "CS0-004-MOD2-156",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the JavaScript code that is vulnerable to DOM-based XSS.",
    "scenario": "<div class=\"scenario-text\"><p>A front-end function renders a welcome message based on a URL parameter.</p></div>",
    "nodes": [
      { "id": "l1", "label": "const params = new URLSearchParams(location.search);" },
      { "id": "l2", "label": "const name = params.get('name');" },
      { "id": "l3", "label": "document.getElementById('greeting').innerHTML = 'Hello ' + name;" },
      { "id": "l4", "label": "console.log('User greeted');" },
      { "id": "l5", "label": "return;" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "Assigning unsanitized user-controlled data to innerHTML allows script execution (DOM-based XSS). Using textContent or a safe templating approach would mitigate the issue."
  },
  {
    "id": 157,
    "qid": "CS0-004-MOD2-157",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Java code that performs unsafe deserialization.",
    "scenario": "<div class=\"scenario-text\"><p>A service endpoint accepts a serialized object from the client.</p></div>",
    "nodes": [
      { "id": "l1", "label": "byte[] data = Base64.getDecoder().decode(request.getParameter(\"payload\"));" },
      { "id": "l2", "label": "ByteArrayInputStream bais = new ByteArrayInputStream(data);" },
      { "id": "l3", "label": "ObjectInputStream ois = new ObjectInputStream(bais);" },
      { "id": "l4", "label": "Object obj = ois.readObject();" },
      { "id": "l5", "label": "return process(obj);" }
    ],
    "correct": ["l4"],
    "selectCount": 1,
    "explanation": "The call to readObject() on an ObjectInputStream constructed from untrusted data is the classic unsafe deserialization point that can lead to remote code execution via gadget chains."
  },
  {
    "id": 158,
    "qid": "CS0-004-MOD2-158",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Node.js code that introduces a command injection vulnerability.",
    "scenario": "<div class=\"scenario-text\"><p>A utility endpoint builds a system command from user input.</p></div>",
    "nodes": [
      { "id": "l1", "label": "const { exec } = require('child_process');" },
      { "id": "l2", "label": "app.get('/ping', (req, res) => {" },
      { "id": "l3", "label": "  const host = req.query.host;" },
      { "id": "l4", "label": "  exec('ping -c 1 ' + host, (err, stdout) => {" },
      { "id": "l5", "label": "    res.send(stdout);" }
    ],
    "correct": ["l4"],
    "selectCount": 1,
    "explanation": "Concatenating the user-supplied host value directly into the shell command string passed to exec() allows command injection. Using a safer API that does not invoke a shell, or strict allow-list validation, would mitigate the risk."
  },
  {
    "id": 159,
    "qid": "CS0-004-MOD2-159",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the XML parser configuration that should be changed to prevent XXE.",
    "scenario": "<div class=\"scenario-text\"><p>A Java application configures a DocumentBuilderFactory for parsing untrusted XML.</p></div>",
    "nodes": [
      { "id": "l1", "label": "DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();" },
      { "id": "l2", "label": "dbf.setExpandEntityReferences(true);" },
      { "id": "l3", "label": "dbf.setFeature(\"http://apache.org/xml/features/disallow-doctype-decl\", false);" },
      { "id": "l4", "label": "DocumentBuilder db = dbf.newDocumentBuilder();" },
      { "id": "l5", "label": "Document doc = db.parse(inputStream);" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "The feature that disallows DOCTYPE declarations is currently set to false, permitting DTDs and external entities. Setting it to true (and similarly disabling external general and parameter entities) is required to prevent XXE."
  },
  {
    "id": 160,
    "qid": "CS0-004-MOD2-160",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Application Security, Secure Coding & Web App Vulnerabilities",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Express.js middleware that incorrectly disables a critical security header.",
    "scenario": "<div class=\"scenario-text\"><p>A Node/Express application is configuring security-related HTTP headers.</p></div>",
    "nodes": [
      { "id": "l1", "label": "const helmet = require('helmet');" },
      { "id": "l2", "label": "app.use(helmet({" },
      { "id": "l3", "label": "  contentSecurityPolicy: false," },
      { "id": "l4", "label": "  hsts: { maxAge: 31536000 }" },
      { "id": "l5", "label": "}));" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "Setting contentSecurityPolicy: false disables one of the most important browser-side defenses against XSS. The HSTS configuration on the following line is beneficial; the CSP disablement is the security regression."
  },
  {
    "id": 161,
    "qid": "CS0-004-MOD2-161",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "single",
    "prompt": "A newly provisioned cloud virtual machine is discovered by the vulnerability scanner with multiple Critical findings, including an unpatched operating system and an open management port exposed to the internet. What is the most effective preventive control that should have been applied during the asset provisioning process?",
    "scenario": "<div class=\"scenario-text\"><p>The organization uses infrastructure-as-code (IaC) templates to launch cloud instances. The template in use did not include hardened baseline configurations, automatic patching agents, or security-group restrictions limiting management access.</p></div>",
    "options": [
      { "id": "a", "text": "Enforce hardened, continuously updated golden images and least-privilege network security groups as part of the IaC pipeline" },
      { "id": "b", "text": "Disable vulnerability scanning for newly launched instances for the first 30 days" },
      { "id": "c", "text": "Rely solely on the cloud provider’s default security groups" },
      { "id": "d", "text": "Manually harden each instance after it has already been exposed to the internet" }
    ],
    "correct": ["a"],
    "explanation": "Preventive controls applied at provisioning time—hardened golden images, automated patching agents, and restrictive security groups—stop vulnerable configurations from ever reaching production. Disabling scanning, relying on defaults, or hardening after exposure are reactive and leave a window of risk."
  },
  {
    "id": 162,
    "qid": "CS0-004-MOD2-162",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "single",
    "prompt": "An end-of-life operating system is still running on a critical industrial control system that cannot be upgraded due to vendor certification requirements. What is the most appropriate long-term risk management approach?",
    "scenario": "<div class=\"scenario-text\"><p>The ICS device processes safety-critical functions. The vendor has declared the OS unsupported and will not release further security patches. Network segmentation already isolates the device from the corporate IT network.</p></div>",
    "options": [
      { "id": "a", "text": "Maintain strict network isolation, enhanced monitoring, and a formal replacement roadmap with residual risk acceptance" },
      { "id": "b", "text": "Connect the device to the internet so that cloud-based patching services can be used" },
      { "id": "c", "text": "Remove all compensating controls because the system is certified" },
      { "id": "d", "text": "Ignore the vulnerability findings because the system is air-gapped in theory" }
    ],
    "correct": ["a"],
    "explanation": "Unsupported systems require defense-in-depth (isolation, monitoring) plus a documented plan to replace them and formal acceptance of residual risk. Exposing the device, removing controls, or ignoring findings increases risk."
  },
  {
    "id": 163,
    "qid": "CS0-004-MOD2-163",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "single",
    "prompt": "A vulnerability scan of a container host reveals Critical kernel vulnerabilities. The containers themselves are short-lived and were built from recently scanned images. What is the correct prioritization and remediation focus?",
    "scenario": "<div class=\"scenario-text\"><p>The organization runs a Kubernetes cluster. Image scanning in CI/CD is mature, but the underlying worker-node operating systems have not been patched for 90 days.</p></div>",
    "options": [
      { "id": "a", "text": "Treat the host kernel findings as high priority because a compromised node can affect all containers running on it" },
      { "id": "b", "text": "Ignore host findings because container isolation fully protects the kernel" },
      { "id": "c", "text": "Only remediate findings inside the container images" },
      { "id": "d", "text": "Disable the host scanner agent to reduce noise" }
    ],
    "correct": ["a"],
    "explanation": "Container isolation is not a complete security boundary against kernel exploits. A vulnerable host can lead to container breakout or cluster-wide compromise. Host findings therefore remain high priority even when image scanning is effective."
  },
  {
    "id": 164,
    "qid": "CS0-004-MOD2-164",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "single",
    "prompt": "During an asset discovery sweep, several previously unknown servers are found running outdated software and lacking endpoint protection agents. What is the first action the vulnerability management team should take?",
    "scenario": "<div class=\"scenario-text\"><p>The servers respond to network scans but do not appear in the CMDB or configuration-management inventory. They appear to be part of a forgotten test environment that was never decommissioned.</p></div>",
    "options": [
      { "id": "a", "text": "Add the assets to the inventory, assign ownership, assess criticality, and bring them under standard vulnerability and configuration management" },
      { "id": "b", "text": "Immediately shut the servers down without investigation" },
      { "id": "c", "text": "Exclude the IP range from all future vulnerability scans" },
      { "id": "d", "text": "Assume the servers are intentionally unmanaged and take no further action" }
    ],
    "correct": ["a"],
    "explanation": "Unknown assets must first be inventoried and assigned ownership so that risk can be assessed and standard controls applied. Immediate shutdown may disrupt unknown dependencies; exclusion or inaction leaves unmanaged risk."
  },
  {
    "id": 165,
    "qid": "CS0-004-MOD2-165",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "multiselect",
    "prompt": "Select THREE essential elements of a secure asset lifecycle management process that support effective vulnerability management.",
    "scenario": "<div class=\"scenario-text\"><p>The organization is formalizing its end-to-end asset lifecycle from procurement through decommissioning.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Mandatory registration of every asset in a centralized inventory (CMDB) before production use" },
      { "id": "b", "text": "Automated enforcement of hardened baselines and patching agents at provisioning time" },
      { "id": "c", "text": "Formal decommissioning procedures that include credential revocation, data sanitization, and inventory removal" },
      { "id": "d", "text": "Allowing any employee to launch production cloud resources without review" },
      { "id": "e", "text": "Retaining decommissioned assets on the network indefinitely “just in case”" },
      { "id": "f", "text": "Disabling vulnerability scanning for assets older than five years" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Centralized inventory, secure-by-default provisioning, and thorough decommissioning close the major lifecycle gaps that create unmanaged vulnerability exposure. Uncontrolled launches, indefinite retention, and scan exclusions increase risk."
  },
  {
    "id": 166,
    "qid": "CS0-004-MOD2-166",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "multiselect",
    "prompt": "Select FOUR infrastructure security controls that reduce the likelihood or impact of successful exploitation of known vulnerabilities.",
    "scenario": "<div class=\"scenario-text\"><p>The architecture team is selecting compensating and preventive controls for the enterprise server environment.</p></div><div class=\"requirements-box\"><h3>Select exactly FOUR</h3></div>",
    "options": [
      { "id": "a", "text": "Network segmentation and micro-segmentation limiting lateral movement" },
      { "id": "b", "text": "Host-based firewalls with default-deny policies" },
      { "id": "c", "text": "Endpoint detection and response (EDR) with behavioral blocking" },
      { "id": "d", "text": "Privileged access management and just-in-time administration" },
      { "id": "e", "text": "Disabling all logging to improve performance" },
      { "id": "f", "text": "Running all services as root or Domain Admin by default" }
    ],
    "correct": ["a", "b", "c", "d"],
    "selectCount": 4,
    "explanation": "Segmentation, host firewalls, EDR, and PAM significantly reduce both the attack surface and the blast radius of exploitation. Disabling logging and excessive privileges increase risk."
  },
  {
    "id": 167,
    "qid": "CS0-004-MOD2-167",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "multiselect",
    "prompt": "Select THREE benefits of maintaining an accurate, continuously updated asset inventory for vulnerability management.",
    "scenario": "<div class=\"scenario-text\"><p>Leadership is questioning the investment required to keep the CMDB synchronized with reality.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Ensures vulnerability scanners target the complete set of in-scope assets" },
      { "id": "b", "text": "Enables accurate prioritization based on business criticality and data classification" },
      { "id": "c", "text": "Supports ownership assignment so remediation tickets reach the correct teams" },
      { "id": "d", "text": "Eliminates the need for any vulnerability scanning" },
      { "id": "e", "text": "Automatically patches every discovered vulnerability" },
      { "id": "f", "text": "Guarantees that no zero-day vulnerabilities will ever appear" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Accurate inventory drives complete scan coverage, risk-based prioritization, and correct ticket routing. It does not replace scanning, patching, or zero-day defense."
  },
  {
    "id": 168,
    "qid": "CS0-004-MOD2-168",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "multiselect",
    "prompt": "Select THREE controls that should be applied when an asset reaches end-of-support and can no longer receive vendor security patches.",
    "scenario": "<div class=\"scenario-text\"><p>A set of legacy application servers will lose vendor support in 90 days. Replacement projects are underway but will take 12–18 months.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Increase network isolation and restrict inbound access to the minimum required sources" },
      { "id": "b", "text": "Deploy enhanced monitoring and alerting focused on the unsupported systems" },
      { "id": "c", "text": "Document residual risk and obtain formal risk acceptance with a defined review cadence" },
      { "id": "d", "text": "Remove the assets from the vulnerability scanning scope" },
      { "id": "e", "text": "Grant the systems unrestricted internet access for easier management" },
      { "id": "f", "text": "Disable all host-based firewalls to simplify troubleshooting" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Isolation, intensified monitoring, and formal risk acceptance are the standard controls for unsupported assets. Removing them from scanning, opening them to the internet, or disabling host firewalls increase exposure."
  },
  {
    "id": 169,
    "qid": "CS0-004-MOD2-169",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "multiselect",
    "prompt": "Select FOUR practices that improve the security of cloud infrastructure from a vulnerability management perspective.",
    "scenario": "<div class=\"scenario-text\"><p>The organization is expanding its use of public cloud and must adapt its vulnerability and asset controls.</p></div><div class=\"requirements-box\"><h3>Select exactly FOUR</h3></div>",
    "options": [
      { "id": "a", "text": "Use infrastructure-as-code with embedded security baseline checks" },
      { "id": "b", "text": "Continuously discover and inventory cloud resources via provider APIs" },
      { "id": "c", "text": "Apply least-privilege IAM roles and avoid long-lived access keys" },
      { "id": "d", "text": "Enable cloud-native security posture management and vulnerability scanning" },
      { "id": "e", "text": "Disable all cloud logging to reduce storage costs" },
      { "id": "f", "text": "Allow developers unrestricted ability to open security groups to 0.0.0.0/0" }
    ],
    "correct": ["a", "b", "c", "d"],
    "selectCount": 4,
    "explanation": "IaC with security checks, continuous discovery, least-privilege IAM, and cloud-native scanning form a solid cloud vulnerability management foundation. Disabling logs and unrestricted 0.0.0.0/0 access are high-risk practices."
  },
  {
    "id": 170,
    "qid": "CS0-004-MOD2-170",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "multiselect",
    "prompt": "Select THREE indicators that an organization’s asset lifecycle process is immature and creating vulnerability management gaps.",
    "scenario": "<div class=\"scenario-text\"><p>An internal audit has highlighted recurring problems with unknown and unmanaged systems.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Significant numbers of assets appear in scans but not in the CMDB" },
      { "id": "b", "text": "Decommissioned systems remain powered on and reachable for months" },
      { "id": "c", "text": "New cloud resources are frequently launched outside approved pipelines" },
      { "id": "d", "text": "Every production asset has a clearly assigned owner and criticality rating" },
      { "id": "e", "text": "Golden images are rebuilt and scanned on a regular cadence" },
      { "id": "f", "text": "Vulnerability tickets are automatically routed to the correct system owners" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Scan-to-CMDB mismatches, lingering decommissioned systems, and shadow cloud provisioning are classic signs of lifecycle immaturity. Clear ownership, regular image rebuilds, and accurate ticket routing indicate maturity."
  },
  {
    "id": 171,
    "qid": "CS0-004-MOD2-171",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "multiselect",
    "prompt": "Select THREE controls that should be present on every production server as part of a hardened baseline.",
    "scenario": "<div class=\"scenario-text\"><p>The security architecture team is defining the mandatory server hardening standard.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Host-based firewall with a default-deny inbound policy" },
      { "id": "b", "text": "Endpoint detection and response or equivalent anti-malware with real-time protection" },
      { "id": "c", "text": "Automated patching or at least a reliable mechanism to deploy security updates" },
      { "id": "d", "text": "Unrestricted outbound internet access for all processes" },
      { "id": "e", "text": "Shared local administrator passwords across the entire fleet" },
      { "id": "f", "text": "Disabled audit logging to conserve disk space" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Host firewalls, EDR/anti-malware, and a patching capability are foundational baseline controls. Unrestricted egress, shared admin credentials, and disabled logging are insecure."
  },
  {
    "id": 172,
    "qid": "CS0-004-MOD2-172",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "multiselect",
    "prompt": "Select FOUR actions that should occur during the secure decommissioning of a server that previously processed sensitive data.",
    "scenario": "<div class=\"scenario-text\"><p>A database server is being permanently retired after its workload was migrated.</p></div><div class=\"requirements-box\"><h3>Select exactly FOUR</h3></div>",
    "options": [
      { "id": "a", "text": "Revoke or rotate all credentials and certificates associated with the system" },
      { "id": "b", "text": "Sanitize or destroy storage media according to data classification requirements" },
      { "id": "c", "text": "Remove the asset from the CMDB, scanning scopes, and monitoring systems" },
      { "id": "d", "text": "Update network diagrams and firewall rules to eliminate residual access paths" },
      { "id": "e", "text": "Leave the system powered on but disconnected “for historical reference”" },
      { "id": "f", "text": "Reuse the same hostname and IP on a new system without clearing old records" }
    ],
    "correct": ["a", "b", "c", "d"],
    "selectCount": 4,
    "explanation": "Credential revocation, media sanitization, inventory cleanup, and network rule updates complete a secure decommission. Leaving systems running or reusing identifiers without cleanup creates residual risk."
  },
  {
    "id": 173,
    "qid": "CS0-004-MOD2-173",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "multiselect",
    "prompt": "Select THREE reasons why network segmentation is a high-value control in a vulnerability management program.",
    "scenario": "<div class=\"scenario-text\"><p>The network architecture team is justifying investment in micro-segmentation for the data center.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Limits the blast radius of a successful exploit by restricting lateral movement" },
      { "id": "b", "text": "Reduces the number of systems that can reach a vulnerable service" },
      { "id": "c", "text": "Provides compensating control for systems that cannot be patched promptly" },
      { "id": "d", "text": "Eliminates the need to patch any internal systems" },
      { "id": "e", "text": "Automatically generates CVSS scores for new vulnerabilities" },
      { "id": "f", "text": "Replaces the requirement for endpoint detection and response" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Segmentation contains breaches, shrinks the attack surface of vulnerable services, and serves as a compensating control. It does not remove the need for patching, CVSS calculation, or EDR."
  },
  {
    "id": 174,
    "qid": "CS0-004-MOD2-174",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "multiselect",
    "prompt": "Select THREE practices that help keep container and Kubernetes environments under effective vulnerability management.",
    "scenario": "<div class=\"scenario-text\"><p>The platform team operates a large Kubernetes estate and must integrate it with the enterprise vulnerability program.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Scan container images in the CI/CD pipeline and registry before deployment" },
      { "id": "b", "text": "Keep Kubernetes worker-node operating systems patched and hardened" },
      { "id": "c", "text": "Apply network policies that restrict pod-to-pod and pod-to-external traffic" },
      { "id": "d", "text": "Run all containers as root with host network access for simplicity" },
      { "id": "e", "text": "Disable admission controllers that enforce security context constraints" },
      { "id": "f", "text": "Ignore host-level findings because “containers are isolated”" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Image scanning, node patching, and network policies form the core of container vulnerability management. Privileged containers, disabled admission controls, and ignoring host findings increase risk."
  },
  {
    "id": 175,
    "qid": "CS0-004-MOD2-175",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "multiselect",
    "prompt": "Select THREE elements that should be included in a golden image used for server provisioning.",
    "scenario": "<div class=\"scenario-text\"><p>The infrastructure team is rebuilding the standard server image that will be used for all new deployments.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Current security patches applied at image build time" },
      { "id": "b", "text": "Endpoint protection / EDR agent pre-installed and configured" },
      { "id": "c", "text": "Host-based firewall enabled with a secure default policy" },
      { "id": "d", "text": "World-writable directories for every application" },
      { "id": "e", "text": "Default passwords left unchanged for ease of first login" },
      { "id": "f", "text": "Remote desktop or SSH open to the entire internet" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "A secure golden image must start with current patches, protection agents, and a restrictive firewall. World-writable paths, default passwords, and unrestricted remote access are insecure defaults."
  },
  {
    "id": 176,
    "qid": "CS0-004-MOD2-176",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "multiselect",
    "prompt": "Select THREE metrics that indicate the health of an organization’s infrastructure vulnerability and asset management program.",
    "scenario": "<div class=\"scenario-text\"><p>The CISO has requested a small set of leading indicators for the quarterly risk report.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Percentage of in-scope assets that appear in both the CMDB and recent scan results" },
      { "id": "b", "text": "Mean time to remediate Critical findings on high-value assets" },
      { "id": "c", "text": "Number of unsupported or end-of-life systems still in production and the associated residual risk" },
      { "id": "d", "text": "Total number of lines of code in internal applications" },
      { "id": "e", "text": "Color of the physical server racks in the data center" },
      { "id": "f", "text": "Number of coffee machines connected to the corporate network" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Inventory coverage, Critical MTTR on important assets, and the population of unsupported systems are meaningful program-health metrics. Lines of code, rack color, and coffee machines are not."
  },
  {
    "id": 177,
    "qid": "CS0-004-MOD2-177",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "dragdrop",
    "prompt": "Match each asset lifecycle stage to the primary security activity that should occur at that stage.",
    "scenario": "<div class=\"scenario-text\"><p>The organization is documenting security requirements across the full asset lifecycle.</p></div>",
    "items": [
      { "id": "i1", "text": "Provisioning / Build" },
      { "id": "i2", "text": "Operation / Maintenance" },
      { "id": "i3", "text": "End-of-Support" },
      { "id": "i4", "text": "Decommissioning" }
    ],
    "zones": [
      { "id": "z1", "label": "Deploy from hardened golden images with agents and baselines already applied" },
      { "id": "z2", "label": "Continuous vulnerability scanning, patching, and configuration compliance" },
      { "id": "z3", "label": "Increase isolation, monitoring, and formal residual risk acceptance" },
      { "id": "z4", "label": "Revoke credentials, sanitize media, remove from inventory and network" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Build time establishes the secure baseline. Operation maintains it. End-of-support requires compensating controls and acceptance. Decommissioning removes residual risk."
  },
  {
    "id": 178,
    "qid": "CS0-004-MOD2-178",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "dragdrop",
    "prompt": "Match each infrastructure control to the primary risk it reduces.",
    "scenario": "<div class=\"scenario-text\"><p>Architects are selecting controls to address different classes of infrastructure risk.</p></div>",
    "items": [
      { "id": "i1", "text": "Network micro-segmentation" },
      { "id": "i2", "text": "Privileged Access Management (PAM)" },
      { "id": "i3", "text": "Endpoint Detection and Response (EDR)" },
      { "id": "i4", "text": "Golden image + automated patching" }
    ],
    "zones": [
      { "id": "z1", "label": "Lateral movement after initial compromise" },
      { "id": "z2", "label": "Abuse of administrative credentials" },
      { "id": "z3", "label": "Undetected execution of malware or exploit code on hosts" },
      { "id": "z4", "label": "Deployment of systems that are already vulnerable at birth" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Segmentation limits lateral movement. PAM protects privileged credentials. EDR detects and blocks malicious activity on endpoints. Secure images and patching prevent vulnerable systems from entering production."
  },
  {
    "id": 179,
    "qid": "CS0-004-MOD2-179",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "dragdrop",
    "prompt": "Match each discovery method to the environment in which it is most effective.",
    "scenario": "<div class=\"scenario-text\"><p>The vulnerability management team must maintain complete asset visibility across hybrid infrastructure.</p></div>",
    "items": [
      { "id": "i1", "text": "Active network scanning (Nmap, scanner discovery)" },
      { "id": "i2", "text": "Cloud provider API enumeration" },
      { "id": "i3", "text": "Agent-based inventory reporting" },
      { "id": "i4", "text": "Network traffic analysis / passive discovery" }
    ],
    "zones": [
      { "id": "z1", "label": "Traditional on-premises data center subnets" },
      { "id": "z2", "label": "Public cloud accounts and subscriptions" },
      { "id": "z3", "label": "Managed endpoints and servers that can run an agent" },
      { "id": "z4", "label": "Environments where active scanning is restricted or intermittent" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Active scanning works well on reachable on-prem networks. Cloud APIs give authoritative inventories. Agents provide deep host data. Passive methods help when active probing is limited."
  },
  {
    "id": 180,
    "qid": "CS0-004-MOD2-180",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "dragdrop",
    "prompt": "Match each decommissioning failure to the residual risk it creates.",
    "scenario": "<div class=\"scenario-text\"><p>Post-incident reviews have identified several incomplete decommissioning events.</p></div>",
    "items": [
      { "id": "i1", "text": "Credentials left active after system shutdown" },
      { "id": "i2", "text": "Storage media not sanitized" },
      { "id": "i3", "text": "Asset still listed as active in CMDB and scan scope" },
      { "id": "i4", "text": "Firewall rules permitting access to the old IP left in place" }
    ],
    "zones": [
      { "id": "z1", "label": "Credential stuffing or reuse attacks against other systems" },
      { "id": "z2", "label": "Data breach if media is reused or discarded improperly" },
      { "id": "z3", "label": "False sense of coverage and wasted scanning resources" },
      { "id": "z4", "label": "Unexpected network exposure if the IP is later reassigned" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Lingering credentials enable reuse attacks. Unsanitized media risks data exposure. Stale inventory wastes effort and hides gaps. Residual firewall rules can expose future systems."
  },
  {
    "id": 181,
    "qid": "CS0-004-MOD2-181",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "dragdrop",
    "prompt": "Match each cloud security capability to its contribution to vulnerability management.",
    "scenario": "<div class=\"scenario-text\"><p>The cloud security architecture is being aligned with the enterprise vulnerability program.</p></div>",
    "items": [
      { "id": "i1", "text": "Cloud Security Posture Management (CSPM)" },
      { "id": "i2", "text": "Cloud Workload Protection Platform (CWPP)" },
      { "id": "i3", "text": "Infrastructure-as-Code scanning" },
      { "id": "i4", "text": "Cloud-native vulnerability scanning of images and instances" }
    ],
    "zones": [
      { "id": "z1", "label": "Detects misconfigurations and policy violations across cloud accounts" },
      { "id": "z2", "label": "Provides runtime protection and vulnerability visibility for workloads" },
      { "id": "z3", "label": "Prevents vulnerable or non-compliant infrastructure from being deployed" },
      { "id": "z4", "label": "Identifies known CVEs in running instances and container images" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "CSPM finds misconfigurations. CWPP protects running workloads. IaC scanning shifts security left. Native scanners find CVEs in images and instances."
  },
  {
    "id": 182,
    "qid": "CS0-004-MOD2-182",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "dragdrop",
    "prompt": "Match each privileged access control to the threat it primarily mitigates.",
    "scenario": "<div class=\"scenario-text\"><p>The identity team is strengthening controls around administrative access to infrastructure.</p></div>",
    "items": [
      { "id": "i1", "text": "Just-in-time (JIT) privileged access" },
      { "id": "i2", "text": "Privileged session monitoring and recording" },
      { "id": "i3", "text": "Elimination of standing local admin rights" },
      { "id": "i4", "text": "Password vaulting with automatic rotation" }
    ],
    "zones": [
      { "id": "z1", "label": "Long-lived elevated privileges that can be stolen or abused" },
      { "id": "z2", "label": "Inability to reconstruct or detect malicious administrative actions" },
      { "id": "z3", "label": "Credential theft leading to immediate domain or host compromise" },
      { "id": "z4", "label": "Reuse of static privileged passwords across systems" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "JIT removes standing privilege. Session monitoring provides accountability. Removing local admin rights limits credential theft impact. Vaulting with rotation stops password reuse."
  },
  {
    "id": 183,
    "qid": "CS0-004-MOD2-183",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "dragdrop",
    "prompt": "Match each inventory hygiene problem to the vulnerability management consequence.",
    "scenario": "<div class=\"scenario-text\"><p>CMDB quality issues are repeatedly cited in post-incident reviews.</p></div>",
    "items": [
      { "id": "i1", "text": "Assets missing from the CMDB" },
      { "id": "i2", "text": "Incorrect or missing ownership fields" },
      { "id": "i3", "text": "Stale criticality or data-classification ratings" },
      { "id": "i4", "text": "Duplicate records for the same physical or virtual asset" }
    ],
    "zones": [
      { "id": "z1", "label": "Systems never scanned or included in remediation campaigns" },
      { "id": "z2", "label": "Remediation tickets routed to the wrong team or left unassigned" },
      { "id": "z3", "label": "Incorrect prioritization of findings relative to business impact" },
      { "id": "z4", "label": "Inflated asset counts and conflicting remediation status" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Missing assets escape scanning. Bad ownership breaks ticket flow. Stale criticality distorts priority. Duplicates create confusion and inconsistent status."
  },
  {
    "id": 184,
    "qid": "CS0-004-MOD2-184",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "dragdrop",
    "prompt": "Match each hardening baseline element to the vulnerability class it most directly reduces.",
    "scenario": "<div class=\"scenario-text\"><p>A new server hardening standard is being mapped to common vulnerability categories.</p></div>",
    "items": [
      { "id": "i1", "text": "Disable or remove unnecessary services and open ports" },
      { "id": "i2", "text": "Enforce strong password and lockout policies" },
      { "id": "i3", "text": "Enable and configure host-based firewall default-deny" },
      { "id": "i4", "text": "Install and maintain endpoint protection / EDR" }
    ],
    "zones": [
      { "id": "z1", "label": "Attack surface reduction – fewer network-reachable services" },
      { "id": "z2", "label": "Credential-based attacks and brute force" },
      { "id": "z3", "label": "Unauthorized inbound network connections" },
      { "id": "z4", "label": "Malware execution and post-exploitation activity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Removing services shrinks the attack surface. Password policies resist credential attacks. Host firewalls control network access. EDR detects and blocks malware and exploit behavior."
  },
  {
    "id": 185,
    "qid": "CS0-004-MOD2-185",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "dragdrop",
    "prompt": "Match each Kubernetes security control to the risk it primarily addresses.",
    "scenario": "<div class=\"scenario-text\"><p>The platform security team is hardening the Kubernetes clusters used for production workloads.</p></div>",
    "items": [
      { "id": "i1", "text": "Pod Security Standards / admission controllers" },
      { "id": "i2", "text": "Network Policies" },
      { "id": "i3", "text": "Regular worker-node OS patching" },
      { "id": "i4", "text": "Image scanning and admission of only signed, scanned images" }
    ],
    "zones": [
      { "id": "z1", "label": "Privileged containers, hostPath mounts, and insecure security contexts" },
      { "id": "z2", "label": "Unrestricted pod-to-pod and pod-to-external communication" },
      { "id": "z3", "label": "Kernel and host-level vulnerabilities that can lead to node compromise" },
      { "id": "z4", "label": "Deployment of containers built from vulnerable or untrusted base images" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Admission controllers enforce pod security. Network policies limit traffic. Node patching addresses host risk. Image controls prevent vulnerable containers from running."
  },
  {
    "id": 186,
    "qid": "CS0-004-MOD2-186",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "dragdrop",
    "prompt": "Match each asset type to the most appropriate primary vulnerability assessment method.",
    "scenario": "<div class=\"scenario-text\"><p>The vulnerability management program must cover a heterogeneous estate.</p></div>",
    "items": [
      { "id": "i1", "text": "Traditional Windows / Linux servers" },
      { "id": "i2", "text": "Ephemeral cloud instances and auto-scaling groups" },
      { "id": "i3", "text": "Container images in a registry" },
      { "id": "i4", "text": "Network devices and appliances" }
    ],
    "zones": [
      { "id": "z1", "label": "Authenticated network or agent-based scanning on a regular cadence" },
      { "id": "z2", "label": "Agent-based or API-driven continuous assessment integrated with cloud APIs" },
      { "id": "z3", "label": "Registry and CI/CD pipeline image scanning (SCA-style)" },
      { "id": "z4", "label": "Credentialed or SNMP-based specialized appliance scanners plus configuration review" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Stable servers suit traditional authenticated scans. Ephemeral cloud resources need agents or APIs. Containers are assessed at the image level. Network devices require specialized tooling."
  },
  {
    "id": 187,
    "qid": "CS0-004-MOD2-187",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "dragdrop",
    "prompt": "Match each compensating control to the unsupported-system scenario it best addresses.",
    "scenario": "<div class=\"scenario-text\"><p>Several legacy systems cannot be patched and must remain in service for a defined period.</p></div>",
    "items": [
      { "id": "i1", "text": "Strict network allow-listing of management sources only" },
      { "id": "i2", "text": "Application-layer virtual patching via WAF or IPS" },
      { "id": "i3", "text": "Enhanced logging and real-time alerting on the host and network" },
      { "id": "i4", "text": "Placement in a dedicated, isolated VLAN with no internet routing" }
    ],
    "zones": [
      { "id": "z1", "label": "Remote management interfaces that must remain reachable by administrators" },
      { "id": "z2", "label": "Web-facing legacy application with known exploit patterns" },
      { "id": "z3", "label": "Need for early detection of exploitation attempts" },
      { "id": "z4", "label": "System that has no business requirement for external connectivity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Allow-listing protects management interfaces. Virtual patching protects web apps. Enhanced detection provides visibility. Full isolation is appropriate when external access is unnecessary."
  },
  {
    "id": 188,
    "qid": "CS0-004-MOD2-188",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "dragdrop",
    "prompt": "Match each secure provisioning practice to the vulnerability it prevents.",
    "scenario": "<div class=\"scenario-text\"><p>The infrastructure-as-code pipeline is being hardened to stop vulnerable systems from being created.</p></div>",
    "items": [
      { "id": "i1", "text": "Mandatory use of approved golden images only" },
      { "id": "i2", "text": "Automated security-group / NSG rules that deny 0.0.0.0/0 on management ports" },
      { "id": "i3", "text": "Pre-installation of EDR and vulnerability agents in the image" },
      { "id": "i4", "text": "IaC policy-as-code checks that fail the pipeline on critical misconfigurations" }
    ],
    "zones": [
      { "id": "z1", "label": "Deployment of unpatched or non-standard operating systems" },
      { "id": "z2", "label": "Accidental exposure of RDP, SSH, or database ports to the internet" },
      { "id": "z3", "label": "Systems that come online without detection or protection capability" },
      { "id": "z4", "label": "Infrastructure that violates security baselines before it is ever running" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Golden images ensure a known-good starting point. Restrictive network rules prevent exposure. Pre-installed agents provide immediate visibility. Policy-as-code stops non-compliant infrastructure from being created."
  },
  {
    "id": 189,
    "qid": "CS0-004-MOD2-189",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the lifecycle stage at which hardened golden images and security agents should be introduced to prevent vulnerable systems from entering production.",
    "scenario": "<div class=\"scenario-text\"><p>The asset lifecycle is shown as: Request → Provision / Build → Operate → End-of-Support → Decommission.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Request", "x": 10, "y": 40 },
      { "id": "node2", "label": "Provision /\nBuild", "x": 30, "y": 40 },
      { "id": "node3", "label": "Operate", "x": 55, "y": 40 },
      { "id": "node4", "label": "Decommission", "x": 80, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "The Provision / Build stage is the correct insertion point for golden images, baseline configurations, and security agents. Introducing them later leaves a window of exposure; introducing them only at decommission is irrelevant."
  },
  {
    "id": 190,
    "qid": "CS0-004-MOD2-190",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the control that most effectively limits lateral movement after an attacker has compromised a single server.",
    "scenario": "<div class=\"scenario-text\"><p>Four controls are shown: network micro-segmentation, full disk encryption, screen-lock policy, and decorative cable management.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Network\nMicro-segmentation", "x": 20, "y": 40 },
      { "id": "node2", "label": "Full Disk\nEncryption", "x": 45, "y": 40 },
      { "id": "node3", "label": "Screen-lock\nPolicy", "x": 70, "y": 25 },
      { "id": "node4", "label": "Cable\nManagement", "x": 70, "y": 55 }
    ],
    "correct": ["node1"],
    "explanation": "Micro-segmentation restricts east-west traffic and is the primary control for limiting lateral movement. Disk encryption protects data at rest, screen-lock protects physical consoles, and cable management is unrelated to attack propagation."
  },
  {
    "id": 191,
    "qid": "CS0-004-MOD2-191",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the asset category that should be assessed primarily through container image scanning rather than traditional host vulnerability scans.",
    "scenario": "<div class=\"scenario-text\"><p>Four asset types are shown: bare-metal database servers, long-lived Windows VMs, container images stored in a registry, and network firewalls.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Bare-metal\nDatabase Servers", "x": 20, "y": 40 },
      { "id": "node2", "label": "Long-lived\nWindows VMs", "x": 45, "y": 40 },
      { "id": "node3", "label": "Container Images\nin Registry", "x": 70, "y": 25 },
      { "id": "node4", "label": "Network\nFirewalls", "x": 70, "y": 55 }
    ],
    "correct": ["node3"],
    "explanation": "Container images are best evaluated by specialized image scanners that examine layers and SBOMs. Traditional host scanners assess the underlying nodes or VMs but do not replace image-level analysis."
  },
  {
    "id": 192,
    "qid": "CS0-004-MOD2-192",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the action that must be completed before a retired server can be considered fully decommissioned from a vulnerability management perspective.",
    "scenario": "<div class=\"scenario-text\"><p>Four actions are shown: power off the server, remove it from the CMDB and all scan scopes, leave credentials active for “emergency access,” and keep the old firewall rules in place.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Power Off\nthe Server", "x": 20, "y": 40 },
      { "id": "node2", "label": "Remove from CMDB\nand Scan Scopes", "x": 45, "y": 40 },
      { "id": "node3", "label": "Leave Credentials\nActive", "x": 70, "y": 25 },
      { "id": "node4", "label": "Keep Old\nFirewall Rules", "x": 70, "y": 55 }
    ],
    "correct": ["node2"],
    "explanation": "Removing the asset from inventory and scanning scopes is required so that it no longer generates findings and so that coverage metrics remain accurate. Powering off is necessary but insufficient; leaving credentials or firewall rules creates residual risk."
  },
  {
    "id": 193,
    "qid": "CS0-004-MOD2-193",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the control that provides the strongest preventive effect against the deployment of already-vulnerable systems.",
    "scenario": "<div class=\"scenario-text\"><p>Four controls are shown: post-deployment vulnerability scanning, hardened golden images enforced by IaC, manual hardening checklists, and quarterly penetration tests.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Post-deployment\nScanning", "x": 20, "y": 40 },
      { "id": "node2", "label": "Hardened Golden\nImages + IaC", "x": 45, "y": 40 },
      { "id": "node3", "label": "Manual Hardening\nChecklists", "x": 70, "y": 25 },
      { "id": "node4", "label": "Quarterly\nPen Tests", "x": 70, "y": 55 }
    ],
    "correct": ["node2"],
    "explanation": "Enforcing hardened, continuously updated golden images through infrastructure-as-code is a preventive control that stops vulnerable systems from being created. Scanning, checklists, and pen tests are detective or corrective."
  },
  {
    "id": 194,
    "qid": "CS0-004-MOD2-194",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the environment in which agent-based continuous assessment is generally preferable to pure network-based scanning.",
    "scenario": "<div class=\"scenario-text\"><p>Four environments are shown: stable on-premises data center with fixed IPs, highly ephemeral auto-scaling cloud workloads, air-gapped industrial control network, and a single isolated lab subnet.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Stable On-prem\nData Center", "x": 20, "y": 40 },
      { "id": "node2", "label": "Ephemeral Cloud\nAuto-scaling", "x": 45, "y": 40 },
      { "id": "node3", "label": "Air-gapped\nICS Network", "x": 70, "y": 25 },
      { "id": "node4", "label": "Isolated Lab\nSubnet", "x": 70, "y": 55 }
    ],
    "correct": ["node2"],
    "explanation": "Ephemeral cloud instances appear and disappear rapidly; agents (or cloud APIs) provide continuous visibility without depending on network reachability or stable IPs. Stable data centers work well with network scanning; air-gapped and lab environments have different constraints."
  },
  {
    "id": 195,
    "qid": "CS0-004-MOD2-195",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Terraform configuration that enforces a restrictive security group rule denying unrestricted inbound access.",
    "scenario": "<div class=\"scenario-text\"><p>An infrastructure-as-code module defines a security group for web servers.</p></div>",
    "nodes": [
      { "id": "l1", "label": "resource \"aws_security_group\" \"web\" {" },
      { "id": "l2", "label": "  name = \"web-sg\"" },
      { "id": "l3", "label": "  ingress {" },
      { "id": "l4", "label": "    from_port = 22" },
      { "id": "l5", "label": "    cidr_blocks = [\"10.0.0.0/8\"]" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "The cidr_blocks value restricts SSH (port 22) to the internal 10.0.0.0/8 range rather than 0.0.0.0/0. This is the restrictive control that prevents unrestricted internet exposure of the management port."
  },
  {
    "id": 196,
    "qid": "CS0-004-MOD2-196",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Ansible playbook that ensures the endpoint protection agent is installed and running on newly provisioned hosts.",
    "scenario": "<div class=\"scenario-text\"><p>A provisioning playbook hardens Linux servers before they are released to production.</p></div>",
    "nodes": [
      { "id": "l1", "label": "- name: Install EDR package" },
      { "id": "l2", "label": "  ansible.builtin.yum:" },
      { "id": "l3", "label": "    name: vendor-edr-agent" },
      { "id": "l4", "label": "    state: present" },
      { "id": "l5", "label": "- name: Ensure EDR service is enabled and started" }
    ],
    "correct": ["l4"],
    "selectCount": 1,
    "explanation": "The state: present directive guarantees the EDR package is installed. The subsequent task (shown in outline) would ensure the service is running; the installation itself is controlled by line l4."
  },
  {
    "id": 197,
    "qid": "CS0-004-MOD2-197",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Kubernetes NetworkPolicy that restricts ingress traffic to the application pods.",
    "scenario": "<div class=\"scenario-text\"><p>A NetworkPolicy is being defined to limit which sources may reach a set of backend pods.</p></div>",
    "nodes": [
      { "id": "l1", "label": "apiVersion: networking.k8s.io/v1" },
      { "id": "l2", "label": "kind: NetworkPolicy" },
      { "id": "l3", "label": "spec:" },
      { "id": "l4", "label": "  podSelector:" },
      { "id": "l5", "label": "  ingress:" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "The ingress: key begins the list of allowed ingress rules. Without properly defined ingress rules (or with an empty ingress list), the policy can deny all inbound traffic to the selected pods, which is the control that restricts access."
  },
  {
    "id": 198,
    "qid": "CS0-004-MOD2-198",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the Bash decommissioning script that removes the asset from the vulnerability management inventory.",
    "scenario": "<div class=\"scenario-text\"><p>An automated decommissioning workflow cleans up all references to a retired server.</p></div>",
    "nodes": [
      { "id": "l1", "label": "#!/bin/bash" },
      { "id": "l2", "label": "HOST=\"old-db-01.example.com\"" },
      { "id": "l3", "label": "revoke_credentials \"$HOST\"" },
      { "id": "l4", "label": "vm_api delete-asset --hostname \"$HOST\"" },
      { "id": "l5", "label": "echo \"Decommission complete\"" }
    ],
    "correct": ["l4"],
    "selectCount": 1,
    "explanation": "The vm_api delete-asset command removes the host from the vulnerability management platform’s inventory and scan scopes. Credential revocation is necessary but separate; the inventory removal is performed by line l4."
  },
  {
    "id": 199,
    "qid": "CS0-004-MOD2-199",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the cloud security policy that prevents security groups from being opened to the entire internet on management ports.",
    "scenario": "<div class=\"scenario-text\"><p>A policy-as-code rule is evaluated during infrastructure deployment.</p></div>",
    "nodes": [
      { "id": "l1", "label": "policy \"deny-public-ssh\" {" },
      { "id": "l2", "label": "  condition = inbound_port == 22" },
      { "id": "l3", "label": "  condition = cidr == \"0.0.0.0/0\"" },
      { "id": "l4", "label": "  action = deny" },
      { "id": "l5", "label": "}" }
    ],
    "correct": ["l4"],
    "selectCount": 1,
    "explanation": "The action = deny statement is the enforcement point that blocks the non-compliant configuration. The preceding conditions identify the prohibited pattern (SSH open to the world)."
  },
  {
    "id": 200,
    "qid": "CS0-004-MOD2-200",
    "moduleId": "mod2",
    "module": "Vulnerability Management",
    "domain": "Infrastructure Security Controls & Asset Lifecycle Security",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the server baseline configuration that enables the host-based firewall with a default-deny posture.",
    "scenario": "<div class=\"scenario-text\"><p>A hardening script configures the local firewall on Linux servers.</p></div>",
    "nodes": [
      { "id": "l1", "label": "# Configure host firewall" },
      { "id": "l2", "label": "systemctl enable firewalld" },
      { "id": "l3", "label": "firewall-cmd --set-default-zone=drop" },
      { "id": "l4", "label": "firewall-cmd --runtime-to-permanent" },
      { "id": "l5", "label": "systemctl start firewalld" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "Setting the default zone to “drop” establishes a default-deny posture for inbound traffic. Enabling and starting the service are necessary but the security posture itself is defined by the default-zone setting."
  },
  {
    "id": 1,
    "qid": "CS0-004-MOD3-001",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "Which NIST SP 800-61 Rev. 2 phase primarily focuses on developing and testing the incident response plan, establishing communication channels, and ensuring staff training before an incident occurs?",
    "scenario": "<div class=\"scenario-text\"><p>An organization is maturing its cybersecurity program and has engaged a CySA+ analyst to validate that foundational activities are correctly aligned to the NIST incident response lifecycle. The analyst is reviewing documentation related to tabletop exercises, contact trees, and tooling readiness.</p></div>",
    "options": [
      { "id": "a", "text": "Preparation" },
      { "id": "b", "text": "Detection and Analysis" },
      { "id": "c", "text": "Containment, Eradication, and Recovery" },
      { "id": "d", "text": "Post-Incident Activity" }
    ],
    "correct": ["a"],
    "explanation": "Preparation is the phase dedicated to proactive readiness: writing and testing the IR plan, defining roles, establishing communication procedures, and ensuring detection tooling and playbooks are ready. Detection and Analysis focuses on identifying and scoping incidents after they occur. Containment, Eradication, and Recovery address active response actions. Post-Incident Activity covers lessons learned and process improvement after the incident is closed."
  },
  {
    "id": 2,
    "qid": "CS0-004-MOD3-002",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "During which phase of the incident response lifecycle would an analyst most appropriately acquire a forensic memory image using Volatility and document the chain of custody?",
    "scenario": "<div class=\"scenario-text\"><p>A high-severity alert indicates possible credential dumping on a critical domain controller. The IR team has confirmed the alert is valid and must now collect volatile evidence while preserving legal admissibility.</p></div>",
    "options": [
      { "id": "a", "text": "Preparation" },
      { "id": "b", "text": "Detection and Analysis" },
      { "id": "c", "text": "Containment, Eradication, and Recovery" },
      { "id": "d", "text": "Post-Incident Activity" }
    ],
    "correct": ["b"],
    "explanation": "Detection and Analysis is the phase in which the scope, impact, and nature of the incident are determined. This includes collecting and examining volatile data such as memory images with tools like Volatility while maintaining proper chain-of-custody documentation. Preparation occurs before any incident. Containment actions follow once the analysis has provided sufficient understanding. Post-Incident Activity occurs after the incident is resolved."
  },
  {
    "id": 3,
    "qid": "CS0-004-MOD3-003",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "An organization has just completed eradication of a ransomware infection and restored systems from known-good backups. Which lifecycle phase should the team enter next?",
    "scenario": "<div class=\"scenario-text\"><p>After isolating affected systems, removing the ransomware binaries, and validating that backups were clean, the IR team has restored production services. Stakeholders are now asking what formal activities remain before the incident can be closed.</p></div>",
    "options": [
      { "id": "a", "text": "Return to Detection and Analysis to re-scan the environment" },
      { "id": "b", "text": "Conduct Post-Incident Activity including a lessons-learned meeting" },
      { "id": "c", "text": "Re-enter the Preparation phase to rewrite the entire IR plan" },
      { "id": "d", "text": "Remain in Containment until external counsel approves closure" }
    ],
    "correct": ["b"],
    "explanation": "Once recovery is complete and systems are verified as operational and clean, the team transitions to Post-Incident Activity. This phase includes documenting the incident, conducting a formal lessons-learned review, updating playbooks, and identifying process or control improvements. Re-scanning may occur as part of verification inside recovery, but the formal next phase is Post-Incident Activity."
  },
  {
    "id": 4,
    "qid": "CS0-004-MOD3-004",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "Which of the following is a primary objective of the Preparation phase according to NIST SP 800-61?",
    "scenario": "<div class=\"scenario-text\"><p>A newly hired CySA+ analyst is tasked with auditing the organization’s readiness posture. The analyst must identify which documented activities correctly belong in the Preparation phase rather than in reactive phases.</p></div>",
    "options": [
      { "id": "a", "text": "Developing and testing the incident response plan and communication procedures" },
      { "id": "b", "text": "Performing memory analysis on a compromised endpoint" },
      { "id": "c", "text": "Issuing a public breach notification under regulatory timelines" },
      { "id": "d", "text": "Applying emergency patches to eradicate a zero-day exploit" }
    ],
    "correct": ["a"],
    "explanation": "Preparation centers on readiness: creating, maintaining, and exercising the IR plan, establishing roles and contact methods, and ensuring detection and analysis capabilities exist. Memory analysis, public notification, and emergency patching are activities that occur after an incident has been detected."
  },
  {
    "id": 5,
    "qid": "CS0-004-MOD3-005",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "In the Detection and Analysis phase, which activity is most critical for determining whether an observed event constitutes a true security incident?",
    "scenario": "<div class=\"scenario-text\"><p>SIEM alerts have fired on anomalous outbound connections from several workstations. The IR team must decide whether to declare an incident and escalate resources or treat the activity as a false positive.</p></div>",
    "options": [
      { "id": "a", "text": "Correlating multiple data sources and validating indicators against known baselines" },
      { "id": "b", "text": "Immediately isolating every host that generated an alert" },
      { "id": "c", "text": "Restoring all affected systems from the most recent backup" },
      { "id": "d", "text": " convening the executive leadership team for a press statement" }
    ],
    "correct": ["a"],
    "explanation": "Detection and Analysis requires analysts to examine and correlate evidence from multiple telemetry sources (logs, EDR, network flows, threat intelligence) against established baselines to confirm whether an incident has occurred and to determine its scope. Premature isolation, restoration, or external communication before analysis is complete can destroy evidence or create unnecessary business impact."
  },
  {
    "id": 6,
    "qid": "CS0-004-MOD3-006",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE activities that correctly belong in the Preparation phase of the NIST incident response lifecycle.",
    "scenario": "<div class=\"scenario-text\"><p>A security team is updating its incident response program documentation. The CySA+ lead must ensure that only activities appropriate to the Preparation phase are listed under that heading.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Conducting tabletop exercises of the incident response plan" },
      { "id": "b", "text": "Acquiring a forensic image of a compromised server" },
      { "id": "c", "text": "Defining escalation paths and on-call contact trees" },
      { "id": "d", "text": "Deploying and tuning SIEM correlation rules for known attack patterns" },
      { "id": "e", "text": "Performing root-cause analysis after an incident is closed" }
    ],
    "correct": ["a", "c", "d"],
    "selectCount": 3,
    "explanation": "Preparation includes testing the plan via tabletops, establishing communication and escalation procedures, and ensuring detection capabilities (SIEM rules, baselines) are in place. Forensic imaging occurs during Detection and Analysis or Containment. Root-cause analysis is a Post-Incident Activity."
  },
  {
    "id": 7,
    "qid": "CS0-004-MOD3-007",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE actions that are appropriate during the Detection and Analysis phase.",
    "scenario": "<div class=\"scenario-text\"><p>Multiple endpoints are exhibiting unusual process injection behavior. The IR team has been alerted and must now determine the nature and extent of the activity before deciding on containment measures.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Correlating Windows Event ID 4688 process creation logs with EDR telemetry" },
      { "id": "b", "text": "Immediately wiping all potentially affected systems" },
      { "id": "c", "text": "Capturing volatile memory for later analysis with Volatility" },
      { "id": "d", "text": "Querying threat intelligence platforms for matching indicators" },
      { "id": "e", "text": "Issuing a public disclosure statement within 24 hours" }
    ],
    "correct": ["a", "c", "d"],
    "selectCount": 3,
    "explanation": "Detection and Analysis involves examining logs, collecting volatile evidence, and enriching observations with threat intelligence to understand the incident. Wiping systems is an eradication action that should not occur before analysis. Public disclosure is typically handled later under legal and communications guidance."
  },
  {
    "id": 8,
    "qid": "CS0-004-MOD3-008",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE elements that should be documented as part of the Preparation phase.",
    "scenario": "<div class=\"scenario-text\"><p>An auditor is reviewing the organization’s IR program for compliance with internal policy and NIST recommendations. The auditor is checking that foundational documentation is present and current.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Incident classification and prioritization criteria" },
      { "id": "b", "text": "Detailed memory dump analysis findings from a prior breach" },
      { "id": "c", "text": "Roles and responsibilities of the incident response team" },
      { "id": "d", "text": "Approved tools and procedures for evidence collection" },
      { "id": "e", "text": "Final lessons-learned report from last quarter’s incident" }
    ],
    "correct": ["a", "c", "d"],
    "selectCount": 3,
    "explanation": "Preparation requires documented classification schemes, clear role definitions, and approved evidence-handling procedures. Prior incident analysis findings and lessons-learned reports belong to Post-Incident Activity documentation."
  },
  {
    "id": 9,
    "qid": "CS0-004-MOD3-009",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE indicators that would typically trigger transition from Detection and Analysis into Containment.",
    "scenario": "<div class=\"scenario-text\"><p>Analysts have spent several hours examining telemetry from a suspected business-email-compromise campaign. Leadership is asking when containment actions may begin.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Confirmed lateral movement to multiple high-value servers" },
      { "id": "b", "text": "Identification of active C2 beaconing with successful callbacks" },
      { "id": "c", "text": "Verification that the initial alert was a false positive" },
      { "id": "d", "text": "Evidence of data staging in preparation for exfiltration" },
      { "id": "e", "text": "Completion of the final lessons-learned meeting" }
    ],
    "correct": ["a", "b", "d"],
    "selectCount": 3,
    "explanation": "Confirmed lateral movement, active C2, and data staging are strong indicators that the incident is real, ongoing, and requires containment to limit further damage. A false positive would end the incident process. Lessons-learned occurs much later in Post-Incident Activity."
  },
  {
    "id": 10,
    "qid": "CS0-004-MOD3-010",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE best practices for maintaining an effective incident response capability during the Preparation phase.",
    "scenario": "<div class=\"scenario-text\"><p>A mature security organization is refreshing its IR program. The CySA+ lead is selecting recommendations that align with NIST guidance for continuous readiness.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Regularly updating contact lists and escalation procedures" },
      { "id": "b", "text": "Conducting periodic tabletop and functional exercises" },
      { "id": "c", "text": "Waiting until after a major breach to review the IR plan" },
      { "id": "d", "text": "Ensuring forensic toolkits and evidence storage are ready and tested" },
      { "id": "e", "text": "Relying solely on outsourced MSSP detection without internal playbooks" }
    ],
    "correct": ["a", "b", "d"],
    "selectCount": 3,
    "explanation": "Preparation requires current contact information, regular exercises to validate the plan, and ready forensic resources. Deferring plan review until after a breach and lacking internal playbooks both undermine readiness."
  },
  {
    "id": 11,
    "qid": "CS0-004-MOD3-011",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE activities that correctly occur during the Detection and Analysis phase.",
    "scenario": "<div class=\"scenario-text\"><p>EDR telemetry shows unusual PowerShell activity on several servers. The IR team must determine whether this represents a true positive incident and what its scope is.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Reviewing Sysmon and Windows Security event logs for process creation anomalies" },
      { "id": "b", "text": "Building a timeline of attacker activity from multiple log sources" },
      { "id": "c", "text": "Immediately re-imaging every host that shows PowerShell usage" },
      { "id": "d", "text": "Enriching observed indicators with external threat intelligence" },
      { "id": "e", "text": "Publishing a detailed after-action report to the board" }
    ],
    "correct": ["a", "b", "d"],
    "selectCount": 3,
    "explanation": "Log review, timeline construction, and threat-intelligence enrichment are core Detection and Analysis tasks. Premature re-imaging destroys evidence and belongs later (if at all). After-action reporting is Post-Incident Activity."
  },
  {
    "id": 12,
    "qid": "CS0-004-MOD3-012",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE components that should be included in an organization’s incident response plan as part of Preparation.",
    "scenario": "<div class=\"scenario-text\"><p>A compliance assessment has identified gaps in the written IR plan. The CySA+ analyst must recommend which foundational elements must be present.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Defined severity levels and corresponding response timelines" },
      { "id": "b", "text": "Detailed forensic analysis of every past incident" },
      { "id": "c", "text": "Communication and notification procedures for internal and external parties" },
      { "id": "d", "text": "List of approved containment strategies by asset criticality" },
      { "id": "e", "text": "Final regulatory notification letters from previous breaches" }
    ],
    "correct": ["a", "c", "d"],
    "selectCount": 3,
    "explanation": "An IR plan developed in Preparation must include severity classification, communication procedures, and pre-approved containment options. Historical forensic details and past notification letters are reference material, not core plan components."
  },
  {
    "id": 13,
    "qid": "CS0-004-MOD3-013",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE reasons why accurate documentation during Detection and Analysis is critical.",
    "scenario": "<div class=\"scenario-text\"><p>Junior analysts are being trained on evidence handling. The lead analyst is emphasizing why thorough contemporaneous notes and artifact collection matter.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Supports later legal or regulatory proceedings through chain of custody" },
      { "id": "b", "text": "Enables accurate scoping and prioritization of containment actions" },
      { "id": "c", "text": "Provides the factual basis for post-incident lessons-learned reviews" },
      { "id": "d", "text": "Eliminates the need for any containment once documentation is complete" },
      { "id": "e", "text": "Guarantees that no further attacker activity can occur" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Proper documentation preserves evidentiary value, informs effective containment decisions, and supplies the data needed for meaningful post-incident improvement. Documentation alone does not stop an attacker or remove the need for containment."
  },
  {
    "id": 14,
    "qid": "CS0-004-MOD3-014",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE activities that belong in the Post-Incident Activity phase.",
    "scenario": "<div class=\"scenario-text\"><p>An incident involving a compromised cloud storage account has been fully contained, eradicated, and recovered. The IR team is now closing the case.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Conducting a formal lessons-learned meeting with all stakeholders" },
      { "id": "b", "text": "Updating detection rules and playbooks based on observed TTPs" },
      { "id": "c", "text": "Documenting the full incident timeline and response effectiveness" },
      { "id": "d", "text": "Acquiring a new memory image of the original compromised host" },
      { "id": "e", "text": "Re-running the original phishing campaign against users for testing" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Post-Incident Activity focuses on review, improvement, and documentation. Re-acquiring memory or re-executing the attack is unnecessary and potentially harmful once recovery is complete."
  },
  {
    "id": 15,
    "qid": "CS0-004-MOD3-015",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE items that should be verified during the Preparation phase to ensure readiness for digital forensics.",
    "scenario": "<div class=\"scenario-text\"><p>The IR team is performing a readiness assessment focused on forensic capability. The CySA+ analyst must confirm that the necessary foundations are in place before an incident occurs.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Availability of tested forensic imaging tools and write-blockers" },
      { "id": "b", "text": "Documented chain-of-custody procedures and evidence storage locations" },
      { "id": "c", "text": "Trained personnel capable of performing memory and disk acquisition" },
      { "id": "d", "text": "Completed analysis reports from the most recent incident" },
      { "id": "e", "text": "Public disclosure templates already filed with regulators" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Preparation for forensics requires tools, procedures, and skilled people. Prior analysis reports and disclosure templates are outputs of previous incidents or later phases."
  },
  {
    "id": 16,
    "qid": "CS0-004-MOD3-016",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE signs that an organization has inadequately prepared for incident response.",
    "scenario": "<div class=\"scenario-text\"><p>After a moderate incident took far longer than expected to resolve, leadership has asked for an assessment of underlying readiness gaps.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "No current contact tree or after-hours escalation path exists" },
      { "id": "b", "text": "Detection rules have not been tuned or tested in over a year" },
      { "id": "c", "text": "The IR plan has never been exercised via tabletop or simulation" },
      { "id": "d", "text": "A detailed lessons-learned report was produced after the last incident" },
      { "id": "e", "text": "Forensic workstations and evidence lockers are ready and inventoried" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Missing escalation paths, stale detection content, and untested plans are classic Preparation failures. Having lessons-learned documentation and ready forensic assets are positive indicators."
  },
  {
    "id": 17,
    "qid": "CS0-004-MOD3-017",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE actions that should be performed before declaring that Detection and Analysis is complete.",
    "scenario": "<div class=\"scenario-text\"><p>Analysts believe they understand the scope of a suspected insider data-staging incident. The incident commander wants confirmation that analysis is sufficiently mature to move to containment.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Key systems and data stores potentially accessed have been identified" },
      { "id": "b", "text": "Initial attack vector and approximate timeline have been established" },
      { "id": "c", "text": "Volatile evidence required for later investigation has been preserved" },
      { "id": "d", "text": "All affected systems have already been rebuilt from gold images" },
      { "id": "e", "text": "A press release has been drafted and approved by legal" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Before leaving Detection and Analysis the team should understand impact, establish a working timeline, and preserve critical volatile evidence. Rebuilding systems and public communications occur later."
  },
  {
    "id": 18,
    "qid": "CS0-004-MOD3-018",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE benefits of conducting regular tabletop exercises during the Preparation phase.",
    "scenario": "<div class=\"scenario-text\"><p>The CISO is justifying budget for quarterly IR exercises. The CySA+ analyst must articulate concrete benefits aligned to NIST guidance.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Identifies gaps in communication and decision-making processes" },
      { "id": "b", "text": "Validates that contact information and escalation paths remain accurate" },
      { "id": "c", "text": "Provides a low-risk environment to practice coordination across teams" },
      { "id": "d", "text": "Guarantees that no real incidents will ever occur" },
      { "id": "e", "text": "Replaces the need for any technical detection tooling" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Tabletops surface process and communication weaknesses, keep contact data current, and allow safe practice. They do not eliminate real incidents or substitute for technical controls."
  },
  {
    "id": 19,
    "qid": "CS0-004-MOD3-019",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE data sources commonly examined during the Detection and Analysis phase of a suspected malware outbreak.",
    "scenario": "<div class=\"scenario-text\"><p>Several workstations are exhibiting high CPU usage and unusual outbound connections. The IR team is gathering evidence to determine whether malware is present and how far it has spread.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "EDR process and network telemetry" },
      { "id": "b", "text": "Windows Event Logs (especially 4688, 7045, 1116/1117)" },
      { "id": "c", "text": "Proxy and firewall connection logs" },
      { "id": "d", "text": "Final board-level after-action presentation" },
      { "id": "e", "text": "Marketing department press-release drafts" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "EDR, Windows event logs, and network device logs are primary sources for confirming and scoping malware activity. Board presentations and press drafts are not analysis data sources."
  },
  {
    "id": 20,
    "qid": "CS0-004-MOD3-020",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE responsibilities that typically fall under the Preparation phase for a CySA+ analyst supporting the IR program.",
    "scenario": "<div class=\"scenario-text\"><p>A new CySA+ analyst has joined the security operations team and is being onboarded into the incident response program. The mentor is clarifying which standing duties belong to Preparation.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Maintaining and testing detection content (Sigma, YARA, SIEM rules)" },
      { "id": "b", "text": "Participating in scheduled IR plan reviews and updates" },
      { "id": "c", "text": "Ensuring personal and team contact information remains current" },
      { "id": "d", "text": "Performing live memory analysis during an active intrusion" },
      { "id": "e", "text": "Drafting the final incident report after recovery is complete" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Preparation duties include keeping detection content current, reviewing the plan, and maintaining contact data. Live analysis and final reporting occur during or after an actual incident."
  },
  {
    "id": 21,
    "qid": "CS0-004-MOD3-021",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each activity to the correct NIST SP 800-61 Rev. 2 incident response lifecycle phase.",
    "scenario": "<div class=\"scenario-text\"><p>An IR team is organizing its playbook so that every task is correctly assigned to the appropriate lifecycle phase.</p></div>",
    "items": [
      { "id": "i1", "text": "Conducting a tabletop exercise of the IR plan" },
      { "id": "i2", "text": "Correlating SIEM alerts with EDR telemetry to confirm an incident" },
      { "id": "i3", "text": "Isolating a compromised subnet via network ACL changes" },
      { "id": "i4", "text": "Holding a lessons-learned meeting and updating playbooks" }
    ],
    "zones": [
      { "id": "z1", "label": "Preparation" },
      { "id": "z2", "label": "Detection and Analysis" },
      { "id": "z3", "label": "Containment, Eradication, and Recovery" },
      { "id": "z4", "label": "Post-Incident Activity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Tabletop exercises belong to Preparation. Alert correlation and confirmation are Detection and Analysis. Network isolation is a Containment action. Lessons-learned and playbook updates occur in Post-Incident Activity."
  },
  {
    "id": 22,
    "qid": "CS0-004-MOD3-022",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each forensic or response action to the lifecycle phase in which it is most appropriately performed.",
    "scenario": "<div class=\"scenario-text\"><p>The IR team is refining its standard operating procedures to ensure actions are sequenced correctly according to NIST guidance.</p></div>",
    "items": [
      { "id": "i1", "text": "Acquiring a memory dump with Volatility before powering off a host" },
      { "id": "i2", "text": "Defining severity classification criteria and response SLAs" },
      { "id": "i3", "text": "Removing malware binaries and restoring from clean backups" },
      { "id": "i4", "text": "Documenting root cause and recommending control improvements" }
    ],
    "zones": [
      { "id": "z1", "label": "Preparation" },
      { "id": "z2", "label": "Detection and Analysis" },
      { "id": "z3", "label": "Containment, Eradication, and Recovery" },
      { "id": "z4", "label": "Post-Incident Activity" }
    ],
    "correct": {
      "z1": ["i2"],
      "z2": ["i1"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Severity criteria are established in Preparation. Memory acquisition for analysis occurs in Detection and Analysis. Malware removal and restoration are Eradication/Recovery. Root-cause documentation is Post-Incident Activity."
  },
  {
    "id": 23,
    "qid": "CS0-004-MOD3-023",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each artifact or deliverable to the phase that produces or maintains it.",
    "scenario": "<div class=\"scenario-text\"><p>An auditor is mapping IR program artifacts to the correct lifecycle phases for a compliance review.</p></div>",
    "items": [
      { "id": "i1", "text": "Current on-call roster and escalation matrix" },
      { "id": "i2", "text": "Timeline of attacker activity constructed from logs" },
      { "id": "i3", "text": "Network isolation tickets and eradication checklist completion" },
      { "id": "i4", "text": "Updated YARA rules and revised IR playbook after review" }
    ],
    "zones": [
      { "id": "z1", "label": "Preparation" },
      { "id": "z2", "label": "Detection and Analysis" },
      { "id": "z3", "label": "Containment, Eradication, and Recovery" },
      { "id": "z4", "label": "Post-Incident Activity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Contact and escalation data are maintained in Preparation. Timelines are built during Detection and Analysis. Isolation and eradication records are generated in the Containment/Eradication/Recovery phase. Updated detection content and playbooks result from Post-Incident Activity."
  },
  {
    "id": 24,
    "qid": "CS0-004-MOD3-024",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each decision or action to the phase in which it is most appropriately made.",
    "scenario": "<div class=\"scenario-text\"><p>Incident commanders must ensure decisions are made at the correct point in the lifecycle to avoid premature or delayed actions.</p></div>",
    "items": [
      { "id": "i1", "text": "Decide whether an observed event meets the definition of an incident" },
      { "id": "i2", "text": "Approve and execute network containment of a compromised segment" },
      { "id": "i3", "text": "Schedule and facilitate the formal lessons-learned session" },
      { "id": "i4", "text": "Validate that forensic toolkits and evidence lockers are ready" }
    ],
    "zones": [
      { "id": "z1", "label": "Preparation" },
      { "id": "z2", "label": "Detection and Analysis" },
      { "id": "z3", "label": "Containment, Eradication, and Recovery" },
      { "id": "z4", "label": "Post-Incident Activity" }
    ],
    "correct": {
      "z1": ["i4"],
      "z2": ["i1"],
      "z3": ["i2"],
      "z4": ["i3"]
    },
    "explanation": "Tool readiness is a Preparation task. Declaring an incident is a Detection and Analysis decision. Containment approval occurs in the Containment phase. Lessons-learned scheduling is Post-Incident Activity."
  },
  {
    "id": 25,
    "qid": "CS0-004-MOD3-025",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each logging or analysis task to the correct lifecycle phase.",
    "scenario": "<div class=\"scenario-text\"><p>The security engineering team is aligning SIEM and logging responsibilities with the IR lifecycle.</p></div>",
    "items": [
      { "id": "i1", "text": "Tuning Sigma rules and establishing baseline alert thresholds" },
      { "id": "i2", "text": "Querying CloudTrail and VPC flow logs to determine blast radius" },
      { "id": "i3", "text": "Implementing temporary network blocks based on observed C2" },
      { "id": "i4", "text": "Reviewing which detection rules fired late or missed the activity" }
    ],
    "zones": [
      { "id": "z1", "label": "Preparation" },
      { "id": "z2", "label": "Detection and Analysis" },
      { "id": "z3", "label": "Containment, Eradication, and Recovery" },
      { "id": "z4", "label": "Post-Incident Activity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Rule tuning and baseline establishment are Preparation. Log querying for scoping is Detection and Analysis. Temporary blocks are Containment. Detection-gap review is Post-Incident Activity."
  },
  {
    "id": 26,
    "qid": "CS0-004-MOD3-026",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each stakeholder communication activity to the appropriate phase.",
    "scenario": "<div class=\"scenario-text\"><p>The communications and IR teams are clarifying when different types of notifications and updates should occur.</p></div>",
    "items": [
      { "id": "i1", "text": "Maintaining an up-to-date list of legal, PR, and executive contacts" },
      { "id": "i2", "text": "Providing status updates to the incident commander on analysis progress" },
      { "id": "i3", "text": "Notifying affected business units that systems are being isolated" },
      { "id": "i4", "text": "Presenting the final incident summary and improvement recommendations" }
    ],
    "zones": [
      { "id": "z1", "label": "Preparation" },
      { "id": "z2", "label": "Detection and Analysis" },
      { "id": "z3", "label": "Containment, Eradication, and Recovery" },
      { "id": "z4", "label": "Post-Incident Activity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Contact list maintenance is Preparation. Status updates during analysis belong to Detection and Analysis. Notifications about isolation occur during Containment. Final summary presentation is Post-Incident Activity."
  },
  {
    "id": 27,
    "qid": "CS0-004-MOD3-027",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each evidence-related action to the correct phase.",
    "scenario": "<div class=\"scenario-text\"><p>The forensics and IR teams are ensuring chain-of-custody and evidence handling steps are correctly sequenced.</p></div>",
    "items": [
      { "id": "i1", "text": "Establishing and testing chain-of-custody forms and evidence storage" },
      { "id": "i2", "text": "Collecting volatile memory and documenting hash values" },
      { "id": "i3", "text": "Securely wiping or rebuilding systems after evidence is preserved" },
      { "id": "i4", "text": "Archiving the complete case file and evidence inventory" }
    ],
    "zones": [
      { "id": "z1", "label": "Preparation" },
      { "id": "z2", "label": "Detection and Analysis" },
      { "id": "z3", "label": "Containment, Eradication, and Recovery" },
      { "id": "z4", "label": "Post-Incident Activity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Chain-of-custody process design is Preparation. Actual collection and hashing occur in Detection and Analysis. System rebuild after preservation is Recovery. Final archiving is Post-Incident Activity."
  },
  {
    "id": 28,
    "qid": "CS0-004-MOD3-028",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each technical control or process to the phase where it is primarily established or executed.",
    "scenario": "<div class=\"scenario-text\"><p>Security architecture and IR teams are aligning proactive and reactive controls to the NIST lifecycle.</p></div>",
    "items": [
      { "id": "i1", "text": "Deploying and validating EDR agents and central logging" },
      { "id": "i2", "text": "Analyzing process injection indicators across the fleet" },
      { "id": "i3", "text": "Applying network segmentation rules to limit lateral movement" },
      { "id": "i4", "text": "Measuring mean-time-to-detect and mean-time-to-respond metrics" }
    ],
    "zones": [
      { "id": "z1", "label": "Preparation" },
      { "id": "z2", "label": "Detection and Analysis" },
      { "id": "z3", "label": "Containment, Eradication, and Recovery" },
      { "id": "z4", "label": "Post-Incident Activity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "EDR and logging deployment are Preparation. Indicator analysis is Detection and Analysis. Segmentation for containment is executed in the Containment phase. MTTD/MTTR measurement is a Post-Incident Activity metric."
  },
  {
    "id": 29,
    "qid": "CS0-004-MOD3-029",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each recovery-related task to the correct phase.",
    "scenario": "<div class=\"scenario-text\"><p>After a successful containment of a ransomware event, the team is sequencing remaining activities.</p></div>",
    "items": [
      { "id": "i1", "text": "Verifying that restored systems are free of malware before reconnecting" },
      { "id": "i2", "text": "Identifying the initial access vector from backup and log review" },
      { "id": "i3", "text": "Updating the IR plan with new ransomware-specific playbook steps" },
      { "id": "i4", "text": "Ensuring offline, tested backups exist for critical systems" }
    ],
    "zones": [
      { "id": "z1", "label": "Preparation" },
      { "id": "z2", "label": "Detection and Analysis" },
      { "id": "z3", "label": "Containment, Eradication, and Recovery" },
      { "id": "z4", "label": "Post-Incident Activity" }
    ],
    "correct": {
      "z1": ["i4"],
      "z2": ["i2"],
      "z3": ["i1"],
      "z4": ["i3"]
    },
    "explanation": "Maintaining tested backups is Preparation. Determining the access vector is Detection and Analysis. Verification before reconnection is Recovery. Playbook updates are Post-Incident Activity."
  },
  {
    "id": 30,
    "qid": "CS0-004-MOD3-030",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each monitoring or detection improvement to the phase in which it is performed.",
    "scenario": "<div class=\"scenario-text\"><p>After several incidents, the detection engineering team is clarifying when different types of detection work occur.</p></div>",
    "items": [
      { "id": "i1", "text": "Creating and testing new Sigma rules for emerging TTPs before incidents" },
      { "id": "i2", "text": "Using newly observed attacker tools to hunt across the environment" },
      { "id": "i3", "text": "Temporarily increasing logging verbosity on critical systems during response" },
      { "id": "i4", "text": "Retiring noisy rules that generated excessive false positives during the incident" }
    ],
    "zones": [
      { "id": "z1", "label": "Preparation" },
      { "id": "z2", "label": "Detection and Analysis" },
      { "id": "z3", "label": "Containment, Eradication, and Recovery" },
      { "id": "z4", "label": "Post-Incident Activity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Proactive rule creation is Preparation. Hunting with new indicators is Detection and Analysis. Temporary logging increases support active response (Containment phase). Rule retirement based on lessons is Post-Incident Activity."
  },
  {
    "id": 31,
    "qid": "CS0-004-MOD3-031",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each containment strategy consideration to the phase where it is primarily addressed.",
    "scenario": "<div class=\"scenario-text\"><p>The IR team is documenting when different containment decisions and preparations should occur.</p></div>",
    "items": [
      { "id": "i1", "text": "Pre-approving isolation procedures for different asset tiers" },
      { "id": "i2", "text": "Determining which systems are actively communicating with C2" },
      { "id": "i3", "text": "Executing the isolation of confirmed compromised hosts" },
      { "id": "i4", "text": "Evaluating whether the chosen containment strategy caused excessive downtime" }
    ],
    "zones": [
      { "id": "z1", "label": "Preparation" },
      { "id": "z2", "label": "Detection and Analysis" },
      { "id": "z3", "label": "Containment, Eradication, and Recovery" },
      { "id": "z4", "label": "Post-Incident Activity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Pre-approval of procedures is Preparation. Identifying active C2 is Detection and Analysis. Executing isolation is Containment. Evaluating business impact of the strategy is Post-Incident Activity."
  },
  {
    "id": 32,
    "qid": "CS0-004-MOD3-032",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each training or readiness activity to the correct phase.",
    "scenario": "<div class=\"scenario-text\"><p>The training coordinator is mapping IR-related training events to the lifecycle phases they support.</p></div>",
    "items": [
      { "id": "i1", "text": "Annual IR plan familiarization and role training for all responders" },
      { "id": "i2", "text": "Just-in-time coaching of junior analysts during active log analysis" },
      { "id": "i3", "text": "Hands-on practice isolating systems in a simulated environment" },
      { "id": "i4", "text": "Debrief training that incorporates lessons from the most recent incident" }
    ],
    "zones": [
      { "id": "z1", "label": "Preparation" },
      { "id": "z2", "label": "Detection and Analysis" },
      { "id": "z3", "label": "Containment, Eradication, and Recovery" },
      { "id": "z4", "label": "Post-Incident Activity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Annual familiarization is Preparation. Just-in-time coaching during analysis supports Detection and Analysis. Simulated isolation practice prepares for Containment. Debrief training is Post-Incident Activity."
  },
  {
    "id": 33,
    "qid": "CS0-004-MOD3-033",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each metric or measurement activity to the phase in which it is most relevant.",
    "scenario": "<div class=\"scenario-text\"><p>Leadership has requested clearer linkage between IR metrics and lifecycle phases.</p></div>",
    "items": [
      { "id": "i1", "text": "Tracking percentage of staff who have completed IR role training" },
      { "id": "i2", "text": "Measuring time from first alert to confirmed incident declaration" },
      { "id": "i3", "text": "Recording time required to isolate the first compromised host" },
      { "id": "i4", "text": "Calculating overall mean-time-to-recover and lessons-learned completion rate" }
    ],
    "zones": [
      { "id": "z1", "label": "Preparation" },
      { "id": "z2", "label": "Detection and Analysis" },
      { "id": "z3", "label": "Containment, Eradication, and Recovery" },
      { "id": "z4", "label": "Post-Incident Activity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Training completion is a Preparation metric. Time-to-declare is Detection and Analysis. Isolation time is Containment. Overall recovery and lessons-learned metrics are Post-Incident Activity."
  },
  {
    "id": 34,
    "qid": "CS0-004-MOD3-034",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each legal or regulatory consideration to the phase where it is primarily addressed.",
    "scenario": "<div class=\"scenario-text\"><p>Legal counsel and the IR team are clarifying when different compliance-related actions should occur.</p></div>",
    "items": [
      { "id": "i1", "text": "Identifying applicable breach-notification laws and internal counsel contacts" },
      { "id": "i2", "text": "Determining whether observed activity meets the legal definition of a reportable breach" },
      { "id": "i3", "text": "Preserving evidence in a manner that maintains legal admissibility during isolation" },
      { "id": "i4", "text": "Finalizing and submitting any required regulatory notifications after recovery" }
    ],
    "zones": [
      { "id": "z1", "label": "Preparation" },
      { "id": "z2", "label": "Detection and Analysis" },
      { "id": "z3", "label": "Containment, Eradication, and Recovery" },
      { "id": "z4", "label": "Post-Incident Activity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Identifying applicable laws and contacts is Preparation. Determining reportability is part of analysis. Maintaining evidentiary integrity during containment is critical. Actual notification filings typically occur in or after recovery / Post-Incident Activity."
  },
  {
    "id": 35,
    "qid": "CS0-004-MOD3-035",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each tooling readiness task to the correct phase.",
    "scenario": "<div class=\"scenario-text\"><p>The security engineering team is ensuring IR tooling is correctly associated with lifecycle phases.</p></div>",
    "items": [
      { "id": "i1", "text": "Validating that Volatility, Autopsy, and imaging tools function correctly" },
      { "id": "i2", "text": "Using tcpdump and Wireshark to capture suspicious traffic for analysis" },
      { "id": "i3", "text": "Deploying temporary firewall rules or null routes against attacker infrastructure" },
      { "id": "i4", "text": "Updating tool configurations and adding new parsers based on incident findings" }
    ],
    "zones": [
      { "id": "z1", "label": "Preparation" },
      { "id": "z2", "label": "Detection and Analysis" },
      { "id": "z3", "label": "Containment, Eradication, and Recovery" },
      { "id": "z4", "label": "Post-Incident Activity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Tool validation is Preparation. Traffic capture for analysis is Detection and Analysis. Temporary blocking rules are Containment. Tool and parser updates based on lessons are Post-Incident Activity."
  },
  {
    "id": 36,
    "qid": "CS0-004-MOD3-036",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the network segment that should be the first priority for containment given evidence of lateral movement originating from the workstation tier.",
    "scenario": "<div class=\"scenario-text\"><p>EDR and network telemetry indicate that a workstation (Patient Zero) has been compromised and is successfully authenticating to systems in the server tier. The IR team must prioritize containment to limit further spread.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Internet Edge\n(Firewall / Proxy)", "x": 10, "y": 20 },
      { "id": "node2", "label": "Workstation VLAN\n(Patient Zero located here)", "x": 30, "y": 50 },
      { " id": "node3", "label": "Server VLAN\n(Domain Controllers & File Servers)", "x": 60, "y": 50 },
      { "id": "node4", "label": "DMZ\n(Public Web Servers)", "x": 40, "y": 20 }
    ],
    "correct": ["node2"],
    "explanation": "Because the compromise originated in the Workstation VLAN and lateral movement is proceeding from there, the highest-priority containment action is to isolate or tightly control the Workstation VLAN to stop further authentication and spread into the Server VLAN."
  },
  {
    "id": 37,
    "qid": "CS0-004-MOD3-037",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the host that represents the most likely source of the initial compromise based on the described attack path.",
    "scenario": "<div class=\"scenario-text\"><p>Analysis shows spear-phishing email delivery to an end-user, followed by macro execution, then credential dumping and subsequent connections to the domain controller. Identify the Patient Zero host.</p></div>",
    "nodes": [
      { "id": "node1", "label": "User Workstation\n(Email & Office)", "x": 20, "y": 40 },
      { "id": "node2", "label": "Domain Controller", "x": 50, "y": 40 },
      { "id": "node3", "label": "File Server", "x": 70, "y": 40 },
      { "id": "node4", "label": "Jump Host / Bastion", "x": 40, "y": 20 }
    ],
    "correct": ["node1"],
    "explanation": "Spear-phishing and macro execution target end-user workstations. The User Workstation is therefore Patient Zero; the domain controller and file server are later-stage targets of lateral movement."
  },
  {
    "id": 38,
    "qid": "CS0-004-MOD3-038",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that should be examined first when validating whether an external C2 channel is still active.",
    "scenario": "<div class=\"scenario-text\"><p>During Detection and Analysis the team needs to confirm whether compromised hosts are still successfully beaconing to attacker infrastructure.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Internal DNS Server", "x": 20, "y": 30 },
      { "id": "node2", "label": "Egress Firewall / Proxy Logs", "x": 50, "y": 30 },
      { "id": "node3", "label": "Domain Controller Event Logs", "x": 30, "y": 60 },
      { "id": "node4", "label": "Print Server", "x": 70, "y": 60 }
    ],
    "correct": ["node2"],
    "explanation": "Egress firewall and proxy logs provide the most direct evidence of whether outbound connections to known or suspected C2 addresses are still occurring. Internal DNS and domain controller logs are useful but secondary for confirming active external C2."
  },
  {
    "id": 39,
    "qid": "CS0-004-MOD3-039",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the system that is the highest priority for memory acquisition given evidence of credential dumping.",
    "scenario": "<div class=\"scenario-text\"><p>Telemetry indicates LSASS access and potential credential theft. The IR team must prioritize volatile evidence collection.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Domain Controller\n(LSASS access observed)", "x": 40, "y": 30 },
      { "id": "node2", "label": "Marketing Workstation", "x": 20, "y": 60 },
      { "id": "node3", "label": "Development Laptop", "x": 60, "y": 60 },
      { "id": "node4", "label": "Network Printer", "x": 80, "y": 30 }
    ],
    "correct": ["node1"],
    "explanation": "A domain controller with observed LSASS access is the highest-value target for memory acquisition because it holds the most privileged credentials. Workstations and printers are lower priority in this scenario."
  },
  {
    "id": 40,
    "qid": "CS0-004-MOD3-040",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the network boundary that should be tightened first to prevent further data exfiltration.",
    "scenario": "<div class=\"scenario-text\"><p>Analysis has confirmed that sensitive data is being staged and that outbound transfers to an external IP have already occurred. Containment must limit additional exfiltration.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Internal Workstation Switch", "x": 20, "y": 40 },
      { "id": "node2", "label": "Egress Internet Gateway / Firewall", "x": 60, "y": 40 },
      { "id": "node3", "label": "Backup Network Segment", "x": 40, "y": 70 },
      { "id": "node4", "label": "Wireless Access Point Controller", "x": 80, "y": 20 }
    ],
    "correct": ["node2"],
    "explanation": "The egress Internet gateway/firewall is the control point that can immediately block or severely restrict outbound transfers to the attacker’s infrastructure, making it the highest-priority boundary for containment against exfiltration."
  },
  {
    "id": 41,
    "qid": "CS0-004-MOD3-041",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the host most likely to contain the earliest evidence of the attack (initial access).",
    "scenario": "<div class=\"scenario-text\"><p>The attack chain began with a malicious document delivered via email. Subsequent stages involved execution and lateral movement. Identify the best location for earliest artifacts.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Email Gateway / Mail Server", "x": 20, "y": 20 },
      { "id": "node2", "label": "End-User Workstation\n(Document opened here)", "x": 40, "y": 50 },
      { "id": "node3", "label": "Domain Controller", "x": 70, "y": 50 },
      { "id": "node4", "label": "External Web Server", "x": 60, "y": 20 }
    ],
    "correct": ["node2"],
    "explanation": "While the email gateway may show delivery, the earliest host-based artifacts of execution (document open, macro, process creation) will be on the end-user workstation where the malicious document was opened."
  },
  {
    "id": 42,
    "qid": "CS0-004-MOD3-042",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that provides the best source of authentication and lateral movement evidence.",
    "scenario": "<div class=\"scenario-text\"><p>Analysts need to reconstruct the path of credential use across the environment after a suspected pass-the-hash attack.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Domain Controller\n(Security Event Logs)", "x": 40, "y": 30 },
      { "id": "node2", "label": "Individual Workstation Local Logs", "x": 20, "y": 60 },
      { "id": "node3", "label": "Printer Spooler Service", "x": 70, "y": 60 },
      { "id": "node4", "label": "External DNS Resolver", "x": 80, "y": 20 }
    ],
    "correct": ["node1"],
    "explanation": "Domain controller Security event logs (especially 4624, 4625, 4768, 4769, 4776) provide the authoritative record of authentication and ticket activity used to map lateral movement."
  },
  {
    "id": 43,
    "qid": "CS0-004-MOD3-043",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the location that should be isolated first to protect the most critical assets once Patient Zero is identified.",
    "scenario": "<div class=\"scenario-text\"><p>Patient Zero has been confirmed in the user workstation segment. Critical crown-jewel systems reside in the restricted server segment. Containment prioritization is required.</p></div>",
    "nodes": [
      { "id": "node1", "label": "User Workstation Segment", "x": 20, "y": 40 },
      { "id": "node2", "label": "Restricted Server Segment\n(Crown Jewels)", "x": 60, "y": 40 },
      { "id": "node3", "label": "Guest Wi-Fi Segment", "x": 40, "y": 70 },
      { "id": "node4", "label": "Contractor VPN Segment", "x": 80, "y": 20 }
    ],
    "correct": ["node1"],
    "explanation": "Isolating the User Workstation Segment (source of the compromise) first prevents further lateral movement into the Restricted Server Segment while preserving the crown-jewel systems."
  },
  {
    "id": 44,
    "qid": "CS0-004-MOD3-044",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the log line that most clearly indicates successful initial access via a malicious Office document.",
    "scenario": "<div class=\"scenario-text\"><p>Windows Security and Sysmon logs from a suspected Patient Zero workstation are under review. Identify the clearest indicator of successful document-based initial access.</p></div>",
    "nodes": [
      { "id": "l1", "label": "EventID 4688: New Process - WINWORD.EXE CommandLine: \"C:\\Users\\jdoe\\AppData\\Local\\Temp\\invoice.docm\"" },
      { "id": "l2", "label": "EventID 4624: Logon Type 3 - Source IP 10.10.50.20 - Account: jdoe" },
      { "id": "l3", "label": "EventID 7045: Service installed - Name: WindowsUpdateAssist - Path: C:\\Windows\\Temp\\svc.exe" },
      { "id": "l4", "label": "EventID 5156: WFP connection permitted - Destination 185.220.101.45:443" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "The 4688 process creation event showing WINWORD.EXE opening a .docm file from a Temp directory is the strongest indicator of successful initial access via a malicious macro-enabled document. The other events may be related to later stages or normal activity."
  },
  {
    "id": 45,
    "qid": "CS0-004-MOD3-045",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the log line that indicates potential credential dumping activity.",
    "scenario": "<div class=\"scenario-text\"><p>Sysmon and Security logs are being reviewed for signs of credential access techniques after a confirmed intrusion.</p></div>",
    "nodes": [
      { "id": "l1", "label": "Sysmon EventID 10: ProcessAccess - SourceImage: procdump.exe TargetImage: lsass.exe GrantedAccess: 0x1FFFFF" },
      { "id": "l2", "label": "EventID 4624: Logon Type 10 - Account: admin - Source: 192.168.1.50" },
      { "id": "l3", "label": "EventID 4688: New Process - powershell.exe -Command \"Get-Process\"" },
      { "id": "l4", "label": "EventID 5156: Outbound connection to 8.8.8.8:53" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "Sysmon Event ID 10 showing procdump.exe (or similar) accessing lsass.exe with high privileges is a classic indicator of credential dumping. The other events represent authentication, benign process creation, or normal DNS traffic."
  },
  {
    "id": 46,
    "qid": "CS0-004-MOD3-046",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the log line that most strongly suggests successful lateral movement using stolen credentials.",
    "scenario": "<div class=\"scenario-text\"><p>Domain controller logs are being examined after confirmation of credential theft on a workstation.</p></div>",
    "nodes": [
      { "id": "l1", "label": "EventID 4624: Logon Type 3 - Account: DOMAIN\\admin - Source Network Address: 10.20.30.45 - Authentication Package: NTLM" },
      { "id": "l2", "label": "EventID 4634: An account was logged off - Account: DOMAIN\\jdoe" },
      { "id": "l3", "label": "EventID 4688: New Process - notepad.exe on workstation" },
      { "id": "l4", "label": "EventID 1102: The audit log was cleared" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "A Type 3 (network) logon for a privileged account originating from a previously compromised workstation IP using NTLM is strong evidence of lateral movement with stolen credentials. Logoff and notepad events are benign; log clearing is suspicious but not direct evidence of lateral movement."
  },
  {
    "id": 47,
    "qid": "CS0-004-MOD3-047",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the CloudTrail event that indicates a potential attempt to cover tracks by disabling logging.",
    "scenario": "<div class=\"scenario-text\"><p>AWS CloudTrail logs are under review following detection of anomalous IAM activity.</p></div>",
    "nodes": [
      { "id": "l1", "label": "eventName: StopLogging - userIdentity: arn:aws:iam::123456789012:user/compromised-user - sourceIPAddress: 203.0.113.45" },
      { "id": "l2", "label": "eventName: DescribeInstances - userIdentity: arn:aws:iam::123456789012:user/legit-admin" },
      { "id": "l3", "label": "eventName: ConsoleLogin - userIdentity: arn:aws:iam::123456789012:user/jsmith - MFAAuthenticated: true" },
      { "id": "l4", "label": "eventName: PutObject - bucketName: company-backups - sourceIPAddress: 10.0.0.5" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "The StopLogging event issued by a compromised user from an unexpected IP is a clear attempt to impair defenses by disabling CloudTrail. The other events represent normal or benign activity."
  },
  {
    "id": 48,
    "qid": "CS0-004-MOD3-048",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the web server access log line that indicates a successful SQL injection authentication bypass.",
    "scenario": "<div class=\"scenario-text\"><p>Apache access logs are being reviewed after reports of unauthorized access to the application.</p></div>",
    "nodes": [
      { "id": "l1", "label": "192.0.2.15 - - [05/Sep/2026:09:14:22] \"GET /login.php?username=admin'--&password=x HTTP/1.1\" 200 4521" },
      { "id": "l2", "label": "192.0.2.15 - - [05/Sep/2026:09:14:18] \"GET /login.php HTTP/1.1\" 200 3120" },
      { "id": "l3", "label": "192.0.2.15 - - [05/Sep/2026:09:14:25] \"GET /favicon.ico HTTP/1.1\" 404 287" },
      { "id": "l4", "label": "10.0.0.8 - - [05/Sep/2026:09:15:01] \"GET /index.php HTTP/1.1\" 200 5620" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "The request containing the classic SQL injection authentication-bypass payload (admin'--) that received an HTTP 200 response is the clearest indicator of successful exploitation. The other lines show normal or failed requests."
  },
  {
    "id": 49,
    "qid": "CS0-004-MOD3-049",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the PowerShell log entry that indicates potentially malicious encoded command execution.",
    "scenario": "<div class=\"scenario-text\"><p>PowerShell operational and ScriptBlock logging are enabled. Analysts are hunting for encoded or obfuscated execution after an alert.</p></div>",
    "nodes": [
      { "id": "l1", "label": "ScriptBlock: powershell.exe -nop -w hidden -enc SQBFAFgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQAIABOAGUAdAAuAFcAZQBiAEMAbABpAGUAbgB0ACkALgBEAG8AdwBuAGwAbwBhAGQAUwB0AHIAaQBuAGcAKAAnAGgAdAB0AHAAOgAvAC8AMQA5ADIAcwAuADAALgAyAC4AMQA1ACcAKQA=" },
      { "id": "l2", "label": "ScriptBlock: Get-Process | Where-Object {$_.CPU -gt 50}" },
      { "id": "l3", "label": "ScriptBlock: Get-Service -Name Wuauserv" },
      { "id": "l4", "label": "ScriptBlock: Write-Output \"Daily health check completed\"" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "The presence of -enc (or -EncodedCommand) with a long Base64 string, combined with -nop and -w hidden, is a strong indicator of malicious or at least highly suspicious PowerShell execution. The other entries are benign administrative commands."
  },
  {
    "id": 50,
    "qid": "CS0-004-MOD3-050",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the firewall log line that most clearly shows successful C2 callback traffic.",
    "scenario": "<div class=\"scenario-text\"><p>Egress firewall logs are being reviewed to confirm whether compromised hosts are still communicating with known attacker infrastructure.</p></div>",
    "nodes": [
      { "id": "l1", "label": "ALLOW TCP 10.20.30.45:49152 -> 185.220.101.23:443 bytes:1520" },
      { "id": "l2", "label": "DENY TCP 10.20.30.45:49153 -> 185.220.101.23:443" },
      { "id": "l3", "label": "ALLOW UDP 10.20.30.10:53 -> 8.8.8.8:53" },
      { "id": "l4", "label": "ALLOW TCP 10.20.30.50:443 -> 10.20.30.1:443" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "The ALLOW entry showing an internal host successfully connecting to an external IP on port 443 with non-trivial byte count is consistent with active C2 beaconing. The DENY line shows a blocked attempt, DNS to 8.8.8.8 is normal, and the internal-to-internal connection is not external C2."
 },
  {
    "id": 51,
    "qid": "CS0-004-MOD3-051",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "Which containment strategy is most appropriate when a single high-value server is confirmed compromised but the rest of the environment shows no indicators of compromise?",
    "scenario": "<div class=\"scenario-text\"><p>EDR and network telemetry have confirmed that only one production database server is actively communicating with known C2 infrastructure. Critical business operations depend on neighboring systems remaining online.</p></div>",
    "options": [
      { "id": "a", "text": "Isolate the single host via EDR network containment or host-based firewall rules" },
      { "id": "b", "text": "Shut down the entire data-center power distribution unit" },
      { "id": "c", "text": "Immediately rebuild every server in the same VLAN from gold images" },
      { "id": "d", "text": "Disable all outbound internet access for the entire organization" }
    ],
    "correct": ["a"],
    "explanation": "Targeted host isolation limits the blast radius while preserving business continuity. Broad power shutdowns, mass rebuilds, or organization-wide internet blocks introduce unnecessary operational impact when evidence is limited to a single host."
  },
  {
    "id": 52,
    "qid": "CS0-004-MOD3-052",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "After successful containment of a ransomware infection, which action is the most critical prerequisite before beginning eradication?",
    "scenario": "<div class=\"scenario-text\"><p>All affected endpoints have been isolated from the network. The IR team is preparing to remove ransomware artifacts and restore services.</p></div>",
    "options": [
      { "id": "a", "text": "Verify that volatile and non-volatile evidence required for investigation and potential legal action has been collected and hashed" },
      { "id": "b", "text": "Immediately power off every isolated host to prevent further encryption" },
      { "id": "c", "text": "Publish a public status page announcing full recovery" },
      { "id": "d", "text": "Delete all volume shadow copies across the environment" }
    ],
    "correct": ["a"],
    "explanation": "Evidence preservation must precede eradication. Once systems are wiped or rebuilt, forensic artifacts are permanently lost. Powering off may destroy volatile memory evidence; public announcements and shadow-copy deletion are premature or counterproductive."
  },
  {
    "id": 53,
    "qid": "CS0-004-MOD3-053",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "Which recovery verification step provides the strongest assurance that a restored system is free of the previously observed malware?",
    "scenario": "<div class=\"scenario-text\"><p>A critical application server has been rebuilt from a known-good gold image after a confirmed malware incident. The team must validate cleanliness before returning the host to production.</p></div>",
    "options": [
      { "id": "a", "text": "Run multiple independent anti-malware engines, validate file hashes against the gold image, and confirm absence of previously observed IOCs" },
      { "id": "b", "text": "Simply ping the host and confirm it responds to RDP" },
      { "id": "c", "text": "Ask the system owner whether the application feels normal" },
      { "id": "d", "text": "Reconnect the host to the network and wait 24 hours for alerts" }
    ],
    "correct": ["a"],
    "explanation": "Multi-engine scanning, hash validation against the trusted gold image, and explicit IOC absence checks provide measurable assurance. Connectivity tests and subjective user feedback do not prove the absence of malware."
  },
  {
    "id": 54,
    "qid": "CS0-004-MOD3-054",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "When implementing network containment for a compromised subnet, which action best balances security and business continuity?",
    "scenario": "<div class=\"scenario-text\"><p>Several workstations in a user VLAN are confirmed compromised. The business requires limited continued access to internal resources for non-compromised hosts while blocking external C2 and lateral movement.</p></div>",
    "options": [
      { "id": "a", "text": "Apply ACL or micro-segmentation rules that permit only essential internal services and block all outbound internet and inter-VLAN traffic except to a remediation VLAN" },
      { "id": "b", "text": "Physically unplug every switch in the building" },
      { "id": "c", "text": "Disable the core router BGP sessions" },
      { "id": "d", "text": "Change the domain administrator password only" }
    ],
    "correct": ["a"],
    "explanation": "Targeted ACL or micro-segmentation achieves containment of C2 and lateral movement while allowing controlled internal access for remediation. Physical disconnection or core routing disruption creates excessive outage; password changes alone do not stop network-level activity."
  },
  {
    "id": 55,
    "qid": "CS0-004-MOD3-055",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "Which eradication technique is most appropriate for a confirmed fileless malware infection that resides only in memory and registry run keys?",
    "scenario": "<div class=\"scenario-text\"><p>Memory analysis has confirmed a fileless implant that injects into legitimate processes and maintains persistence solely via registry run keys. No malicious binaries exist on disk.</p></div>",
    "options": [
      { "id": "a", "text": "Terminate malicious processes, remove persistence registry keys, and reboot the host while monitoring for re-infection" },
      { "id": "b", "text": "Format the system drive and reinstall the operating system from original media" },
      { "id": "c", "text": "Delete the Windows directory and restore from backup" },
      { "id": "d", "text": "Disable the Windows Firewall and hope the implant times out" }
    ],
    "correct": ["a"],
    "explanation": "For purely memory-and-registry-based fileless malware, targeted process termination, persistence removal, and controlled reboot are usually sufficient and far less disruptive than full OS reinstallation. Full wipe is reserved for cases where rootkit-level or bootkit persistence is suspected."
  },
  {
    "id": 56,
    "qid": "CS0-004-MOD3-056",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE actions that are appropriate during the Containment phase of a confirmed multi-host intrusion.",
    "scenario": "<div class=\"scenario-text\"><p>Multiple endpoints are actively beaconing to C2. The IR team must limit further damage while preserving evidence and business-critical functions where possible.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Implement network isolation or EDR containment on confirmed compromised hosts" },
      { "id": "b", "text": "Block known C2 domains and IP addresses at the egress firewall" },
      { "id": "c", "text": "Disable compromised user and service accounts" },
      { "id": "d", "text": "Rebuild every host in the organization from gold images immediately" },
      { "id": "e", "text": "Delete all security event logs to reduce noise" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Host isolation, C2 blocking, and account disablement are core containment actions that stop further attacker activity. Mass rebuilds belong to eradication/recovery and should follow evidence collection. Deleting logs destroys evidence and is never appropriate."
  },
  {
    "id": 57,
    "qid": "CS0-004-MOD3-057",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE prerequisites that should be satisfied before beginning large-scale eradication of malware across dozens of hosts.",
    "scenario": "<div class=\"scenario-text\"><p>A widespread commodity malware infection has been contained. The team is preparing for coordinated eradication.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "All required forensic images and memory dumps have been collected and verified" },
      { "id": "b", "text": "A tested, clean recovery process (gold images or verified backups) is ready" },
      { "id": "c", "text": "Business owners have been notified of expected downtime windows" },
      { "id": "d", "text": "The original attacker infrastructure has been taken offline by law enforcement" },
      { "id": "e", "text": "All users have changed their personal social-media passwords" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Evidence preservation, validated recovery capability, and stakeholder coordination are essential before mass eradication. Law-enforcement takedowns and personal password changes are outside the organization’s direct control or relevance."
  },
  {
    "id": 58,
    "qid": "CS0-004-MOD3-058",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE techniques commonly used to achieve network-level containment.",
    "scenario": "<div class=\"scenario-text\"><p>The IR team needs to prevent compromised hosts from reaching C2 or performing lateral movement while investigation continues.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Updating firewall or ACL rules to deny traffic to known-malicious destinations" },
      { "id": "b", "text": "Moving compromised hosts into a restricted remediation VLAN" },
      { "id": "c", "text": "Implementing DNS sinkholing for attacker domains" },
      { "id": "d", "text": "Formatting the system drives of all workstations" },
      { "id": "e", "text": "Disabling the organization’s public website" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Firewall/ACL changes, remediation VLANs, and DNS sinkholing are standard network containment methods. Drive formatting is eradication; disabling the public website is unrelated to host containment."
  },
  {
    "id": 59,
    "qid": "CS0-004-MOD3-059",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE actions that belong to the Eradication phase rather than pure Containment.",
    "scenario": "<div class=\"scenario-text\"><p>After isolating affected systems, the IR team is transitioning to removing the threat and restoring a clean state.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Removing malware binaries, persistence mechanisms, and attacker-created accounts" },
      { "id": "b", "text": "Patching the vulnerability that provided initial access" },
      { "id": "c", "text": "Rebuilding compromised systems from known-good images" },
      { "id": "d", "text": "Blocking C2 IP addresses at the perimeter" },
      { "id": "e", "text": "Disabling a compromised user account temporarily" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Malware removal, vulnerability patching, and system rebuilds are eradication activities. Blocking C2 and temporary account disablement are containment measures that stop ongoing activity but do not remove the root cause."
  },
  {
    "id": 60,
    "qid": "CS0-004-MOD3-060",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE recovery validation activities that should be performed before returning a previously compromised host to production.",
    "scenario": "<div class=\"scenario-text\"><p>A server has been rebuilt and patched after a malware incident. The team must confirm it is safe to reconnect.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Confirm that all previously observed IOCs are absent" },
      { "id": "b", "text": "Validate that the system configuration matches the approved gold image or hardened baseline" },
      { "id": "c", "text": "Perform vulnerability scanning and confirm critical findings are remediated" },
      { "id": "d", "text": "Reconnect the host and immediately allow unrestricted outbound internet access" },
      { "id": "e", "text": "Delete the forensic images taken earlier to free storage" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "IOC absence, baseline configuration compliance, and vulnerability remediation verification are essential recovery gates. Unrestricted reconnection and deletion of evidence are unsafe or premature."
  },
  {
    "id": 61,
    "qid": "CS0-004-MOD3-061",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE considerations that influence the choice between short-term and long-term containment strategies.",
    "scenario": "<div class=\"scenario-text\"><p>The IR team must decide how aggressively to contain a sophisticated intrusion while balancing operational impact.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Business criticality of the affected systems and acceptable downtime" },
      { "id": "b", "text": "Evidence that the attacker still maintains active control or backdoors" },
      { "id": "c", "text": "Availability of clean recovery images and tested rebuild procedures" },
      { "id": "d", "text": "The personal preference of the most junior analyst on the team" },
      { "id": "e", "text": "Whether the company’s stock price rose that morning" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Business impact, residual attacker presence, and recovery readiness are the primary factors that drive containment duration and aggressiveness. Personal preference and unrelated market data are irrelevant."
  },
  {
    "id": 62,
    "qid": "CS0-004-MOD3-062",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE host-based containment actions that can be executed via EDR or endpoint management tools.",
    "scenario": "<div class=\"scenario-text\"><p>Compromised endpoints must be rapidly isolated without physical access to each machine.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enabling host-based network isolation / containment mode" },
      { "id": "b", "text": "Killing malicious processes and preventing their restart" },
      { "id": "c", "text": "Blocking execution of known-malicious binaries via application control" },
      { "id": "d", "text": "Physically unplugging the network cable from the NIC" },
      { "id": "e", "text": "Reformatting the hard drive remotely without evidence collection" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Modern EDR platforms support network isolation, process termination, and application blocking. Physical cable removal requires local access; remote reformat without evidence collection is improper eradication."
  },
  {
    "id": 63,
    "qid": "CS0-004-MOD3-063",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE risks associated with premature eradication before adequate analysis and evidence collection.",
    "scenario": "<div class=\"scenario-text\"><p>Leadership is pressuring the IR team to “just wipe everything” as soon as malware is confirmed.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Loss of forensic evidence needed for root-cause analysis and potential legal action" },
      { "id": "b", "text": "Inability to identify all compromised systems or persistence mechanisms" },
      { "id": "c", "text": "Re-infection of rebuilt systems if the initial access vector remains open" },
      { "id": "d", "text": "Guaranteed improvement in mean-time-to-recover metrics" },
      { "id": "e", "text": "Automatic compliance with every regulatory notification deadline" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Premature eradication destroys evidence, leaves unknown persistence or additional victims undiscovered, and risks rapid re-compromise. It does not inherently improve metrics or guarantee regulatory compliance."
  },
  {
    "id": 64,
    "qid": "CS0-004-MOD3-064",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE elements that should be included in a formal recovery checklist for a previously compromised server.",
    "scenario": "<div class=\"scenario-text\"><p>The operations team is restoring a critical application server and needs a rigorous gate process before production return.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Verification that the restored system matches the approved secure baseline configuration" },
      { "id": "b", "text": "Confirmation that monitoring and EDR agents are installed, healthy, and reporting" },
      { "id": "c", "text": "Successful completion of functional application testing by the business owner" },
      { "id": "d", "text": "Deletion of all incident-related tickets to close the case early" },
      { "id": "e", "text": "Disabling multi-factor authentication to simplify user access" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Baseline compliance, healthy security tooling, and business functional validation are mandatory recovery gates. Deleting tickets and disabling MFA increase risk and are never part of a sound recovery process."
  },
  {
    "id": 65,
    "qid": "CS0-004-MOD3-065",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE indicators that containment has been successfully achieved.",
    "scenario": "<div class=\"scenario-text\"><p>After implementing isolation measures, the IR team must confirm that the attacker’s ability to act has been neutralized.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "No further C2 beaconing or command execution is observed from isolated hosts" },
      { "id": "b", "text": "Compromised accounts are disabled and no longer generate authentication events" },
      { "id": "c", "text": "Network blocks prevent any new connections to known attacker infrastructure" },
      { "id": "d", "text": "All users have been notified via company-wide email" },
      { "id": "e", "text": "The original phishing email has been recalled from every inbox" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Absence of C2 activity, disabled accounts, and effective network blocks demonstrate that the attacker’s current control has been broken. User notification and email recall are useful but do not prove technical containment."
  },
  {
    "id": 66,
    "qid": "CS0-004-MOD3-066",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE situations in which a full system rebuild is generally preferred over in-place eradication.",
    "scenario": "<div class=\"scenario-text\"><p>The IR team is deciding the most reliable eradication method for different classes of compromise.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Evidence of kernel-mode rootkit or bootkit presence" },
      { "id": "b", "text": "Uncertainty about the full extent of attacker modifications" },
      { "id": "c", "text": "Compromise of a domain controller or other highly privileged system" },
      { "id": "d", "text": "A single, well-understood commodity Trojan with clear file-based indicators" },
      { "id": "e", "text": "A user accidentally opened a phishing email but no execution occurred" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Rootkits, uncertain scope, and high-privilege systems justify full rebuilds for assurance. Simple, well-scoped commodity malware can often be eradicated in place; pure delivery without execution requires no eradication."
  },
  {
    "id": 67,
    "qid": "CS0-004-MOD3-067",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE post-eradication monitoring activities that help confirm the threat has not returned.",
    "scenario": "<div class=\"scenario-text\"><p>Systems have been cleaned or rebuilt. The team must remain vigilant for signs of re-compromise.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Heightened alerting on previously observed IOCs and attacker TTPs" },
      { "id": "b", "text": "Increased logging and retention on critical systems for a defined period" },
      { "id": "c", "text": "Regular hunting queries for residual or new attacker activity" },
      { "id": "d", "text": "Disabling all EDR agents to reduce performance impact" },
      { "id": "e", "text": "Granting domain-admin rights to every help-desk technician" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Enhanced IOC/TTP monitoring, elevated logging, and proactive hunting provide early detection of re-infection. Disabling EDR and over-privileging accounts increase risk."
  },
  {
    "id": 68,
    "qid": "CS0-004-MOD3-068",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE documentation artifacts that should be produced or updated during Containment, Eradication, and Recovery.",
    "scenario": "<div class=\"scenario-text\"><p>Accurate records are required for later lessons-learned, legal support, and process improvement.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Timeline of containment and eradication actions taken, including operators and timestamps" },
      { "id": "b", "text": "List of systems isolated, rebuilt, or restored and the verification steps performed" },
      { "id": "c", "text": "Evidence inventory with hashes and chain-of-custody references" },
      { "id": "d", "text": "Personal performance reviews of every analyst involved" },
      { "id": "e", "text": "Marketing copy for the next product launch" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Action timelines, system status records, and evidence inventories are essential IR artifacts. Personnel reviews and marketing content are outside the scope of incident documentation."
  },
  {
    "id": 69,
    "qid": "CS0-004-MOD3-069",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE best practices when using network ACLs or firewall rules for containment.",
    "scenario": "<div class=\"scenario-text\"><p>The network team is implementing temporary containment rules under IR direction.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Document every rule change with ticket reference, implementer, and intended duration" },
      { "id": "b", "text": "Prefer deny-by-default or highly restrictive rules for compromised segments" },
      { "id": "c", "text": "Test rules in a non-production path or with logging-only first when feasible" },
      { "id": "d", "text": "Leave the rules in place permanently without review after the incident" },
      { "id": "e", "text": "Apply the most permissive rules possible to avoid any user complaints" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Change control documentation, restrictive posture, and careful testing reduce operational risk. Permanent un-reviewed rules and overly permissive settings undermine both security and governance."
  },
  {
    "id": 70,
    "qid": "CS0-004-MOD3-070",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE actions that help prevent re-infection during the Recovery phase.",
    "scenario": "<div class=\"scenario-text\"><p>Systems are being restored. The team must ensure the original attack path cannot be reused immediately.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Patch or mitigate the initial access vulnerability before reconnecting systems" },
      { "id": "b", "text": "Reset credentials for all accounts that may have been exposed" },
      { "id": "c", "text": "Validate that security controls (EDR, logging, hardening) are active on restored hosts" },
      { "id": "d", "text": "Reuse the same local administrator password that was present during the incident" },
      { "id": "e", "text": "Disable all monitoring to speed up the restore process" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Closing the original access vector, credential rotation, and restoring security tooling are fundamental to durable recovery. Reusing compromised credentials and disabling monitoring invite rapid re-compromise."
  },
  {
    "id": 71,
    "qid": "CS0-004-MOD3-071",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each containment or eradication action to the most appropriate category.",
    "scenario": "<div class=\"scenario-text\"><p>The IR team is organizing response actions into short-term containment versus eradication/recovery activities.</p></div>",
    "items": [
      { "id": "i1", "text": "Block known C2 IP addresses at the perimeter firewall" },
      { "id": "i2", "text": "Rebuild a compromised server from a verified gold image" },
      { "id": "i3", "text": "Disable a compromised service account" },
      { "id": "i4", "text": "Remove malware persistence registry keys and scheduled tasks" }
    ],
    "zones": [
      { "id": "z1", "label": "Short-term Containment" },
      { "id": "z2", "label": "Eradication / Recovery" }
    ],
    "correct": {
      "z1": ["i1", "i3"],
      "z2": ["i2", "i4"]
    },
    "explanation": "Blocking C2 and disabling accounts stop ongoing attacker activity (containment). Rebuilding systems and removing persistence mechanisms eliminate the threat and restore a clean state (eradication/recovery)."
  },
  {
    "id": 72,
    "qid": "CS0-004-MOD3-072",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each recovery activity to the correct sequence step.",
    "scenario": "<div class=\"scenario-text\"><p>A standardized recovery workflow is being documented for critical servers.</p></div>",
    "items": [
      { "id": "i1", "text": "Restore system from known-good backup or gold image" },
      { "id": "i2", "text": "Validate configuration baseline and absence of IOCs" },
      { "id": "i3", "text": "Apply missing security patches and harden the system" },
      { "id": "i4", "text": "Reconnect to production network and monitor closely" }
    ],
    "zones": [
      { "id": "z1", "label": "Step 1 – Rebuild" },
      { "id": "z2", "label": "Step 2 – Verify Cleanliness" },
      { "id": "z3", "label": "Step 3 – Harden & Patch" },
      { "id": "z4", "label": "Step 4 – Return to Service" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Logical recovery order is: rebuild first, verify the result is clean, apply patches and hardening, then carefully return to production with heightened monitoring."
  },
  {
    "id": 73,
    "qid": "CS0-004-MOD3-073",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each isolation technique to the primary layer at which it operates.",
    "scenario": "<div class=\"scenario-text\"><p>The team is selecting appropriate isolation methods for different scenarios.</p></div>",
    "items": [
      { "id": "i1", "text": "EDR network containment / host firewall rules" },
      { "id": "i2", "text": "Switch port shutdown or VLAN quarantine" },
      { "id": "i3", "text": "Perimeter firewall / proxy deny rules for C2 destinations" },
      { "id": "i4", "text": "Disable user and computer accounts in Active Directory" }
    ],
    "zones": [
      { "id": "z1", "label": "Host Layer" },
      { "id": "z2", "label": "Network Access Layer" },
      { "id": "z3", "label": "Perimeter / Internet Edge" },
      { "id": "z4", "label": "Identity Layer" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "EDR/host firewall acts at the endpoint, switch/VLAN controls network access, perimeter rules block external C2, and account disablement removes identity-based access."
  },
  {
    "id": 74,
    "qid": "CS0-004-MOD3-074",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each eradication action to the type of persistence it primarily addresses.",
    "scenario": "<div class=\"scenario-text\"><p>Analysts have identified multiple persistence mechanisms and must map removal techniques.</p></div>",
    "items": [
      { "id": "i1", "text": "Delete malicious Run/RunOnce registry keys" },
      { "id": "i2", "text": "Remove attacker-created scheduled tasks and services" },
      { "id": "i3", "text": "Rebuild the system to eliminate kernel-mode rootkit" },
      { "id": "i4", "text": "Revoke and reissue compromised certificates or API keys" }
    ],
    "zones": [
      { "id": "z1", "label": "User-mode Registry Persistence" },
      { "id": "z2", "label": "Scheduled Task / Service Persistence" },
      { "id": "z3", "label": "Kernel / Boot Persistence" },
      { "id": "z4", "label": "Credential / Secret Persistence" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Registry Run keys, scheduled tasks/services, kernel rootkits, and stolen secrets each require different eradication approaches matched to their persistence location."
  },
  {
    "id": 75,
    "qid": "CS0-004-MOD3-075",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each containment decision factor to its primary consideration.",
    "scenario": "<div class=\"scenario-text\"><p>Incident commanders must weigh multiple factors when choosing containment aggressiveness.</p></div>",
    "items": [
      { "id": "i1", "text": "Potential revenue loss or safety impact from taking systems offline" },
      { "id": "i2", "text": "Evidence of ongoing data exfiltration or ransomware encryption" },
      { "id": "i3", "text": "Availability of clean backups and tested rebuild procedures" },
      { "id": "i4", "text": "Legal or regulatory requirements to preserve specific evidence" }
    ],
    "zones": [
      { "id": "z1", "label": "Business Impact" },
      { "id": "z2", "label": "Active Threat Severity" },
      { "id": "z3", "label": "Recovery Readiness" },
      { "id": "z4", "label": "Evidence / Legal Constraints" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Each factor maps directly to a core decision dimension that determines how quickly and aggressively containment can be applied."
  },
  {
    "id": 76,
    "qid": "CS0-004-MOD3-076",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each tool or technique to its primary use in Containment, Eradication, or Recovery.",
    "scenario": "<div class=\"scenario-text\"><p>The IR toolkit is being mapped to specific response activities.</p></div>",
    "items": [
      { "id": "i1", "text": "EDR network isolation / host quarantine feature" },
      { "id": "i2", "text": "PowerShell or EDR script to remove persistence and kill processes" },
      { "id": "i3", "text": "Gold image deployment or backup restore procedure" },
      { "id": "i4", "text": "Vulnerability scanner and configuration baseline checker" }
    ],
    "zones": [
      { "id": "z1", "label": "Containment" },
      { "id": "z2", "label": "Eradication" },
      { "id": "z3", "label": "Recovery / Rebuild" },
      { "id": "z4", "label": "Recovery Validation" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "EDR isolation contains, targeted removal scripts eradicate, image/backup restore recovers, and scanning/baseline checks validate the recovered state."
  },
  {
    "id": 77,
    "qid": "CS0-004-MOD3-077",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each recovery risk to the control that best mitigates it.",
    "scenario": "<div class=\"scenario-text\"><p>Common recovery pitfalls and their mitigations are being documented.</p></div>",
    "items": [
      { "id": "i1", "text": "Restoring a system that still contains undetected malware" },
      { "id": "i2", "text": "Reconnecting a system while the original vulnerability remains open" },
      { "id": "i3", "text": "Using a backup that was itself compromised" },
      { "id": "i4", "text": "Losing forensic evidence needed for later investigation" }
    ],
    "zones": [
      { "id": "z1", "label": "Multi-engine scan + IOC validation before reconnect" },
      { "id": "z2", "label": "Patch / mitigate initial access vector first" },
      { "id": "z3", "label": "Verify backup integrity and age against infection timeline" },
      { "id": "z4", "label": "Collect and hash evidence before any destructive action" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Each risk is directly addressed by a corresponding verification or sequencing control that must be enforced during recovery."
  },
  {
    "id": 78,
    "qid": "CS0-004-MOD3-078",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each account-related action to the phase in which it is most commonly performed.",
    "scenario": "<div class=\"scenario-text\"><p>Identity actions must be correctly timed within the response lifecycle.</p></div>",
    "items": [
      { "id": "i1", "text": "Disable confirmed compromised accounts to stop further use" },
      { "id": "i2", "text": "Reset passwords and revoke tokens/sessions for exposed accounts" },
      { "id": "i3", "text": "Review and remove any attacker-created accounts or privileges" },
      { "id": "i4", "text": "Re-enable accounts only after systems are confirmed clean and monitoring is active" }
    ],
    "zones": [
      { "id": "z1", "label": "Containment" },
      { "id": "z2", "label": "Eradication" },
      { "id": "z3", "label": "Eradication (continued)" },
      { "id": "z4", "label": "Recovery" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Immediate disablement is containment; credential reset and removal of attacker artifacts are eradication; controlled re-enablement occurs only after recovery validation."
  },
  {
    "id": 79,
    "qid": "CS0-004-MOD3-079",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each network containment control to the threat it primarily counters.",
    "scenario": "<div class=\"scenario-text\"><p>Different network controls address different attacker capabilities.</p></div>",
    "items": [
      { "id": "i1", "text": "Egress filtering / C2 IP and domain blocks" },
      { "id": "i2", "text": "Internal micro-segmentation or host isolation" },
      { "id": "i3", "text": "DNS sinkholing of attacker domains" },
      { "id": "i4", "text": "Disabling compromised VPN or remote-access accounts" }
    ],
    "zones": [
      { "id": "z1", "label": "External Command-and-Control" },
      { "id": "z2", "label": "Lateral Movement" },
      { "id": "z3", "label": "Domain-based C2 Resolution" },
      { "id": "z4", "label": "Remote Access Persistence" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Egress blocks stop external C2, segmentation stops lateral movement, sinkholing disrupts domain-based callbacks, and account disablement removes remote-access footholds."
  },
  {
    "id": 80,
    "qid": "CS0-004-MOD3-080",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each verification method to the recovery assurance it provides.",
    "scenario": "<div class=\"scenario-text\"><p>Multiple independent checks are required before declaring recovery complete.</p></div>",
    "items": [
      { "id": "i1", "text": "File-system hash comparison against gold image" },
      { "id": "i2", "text": "Multi-engine anti-malware and YARA scanning" },
      { "id": "i3", "text": "Vulnerability scan showing no critical findings" },
      { "id": "i4", "text": "Business-owner functional acceptance test" }
    ],
    "zones": [
      { "id": "z1", "label": "Configuration Integrity" },
      { "id": "z2", "label": "Malware Absence" },
      { "id": "z3", "label": "Security Posture" },
      { "id": "z4", "label": "Operational Readiness" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Hash comparison proves configuration integrity, multi-engine/YARA scanning proves malware absence, vulnerability scans prove security posture, and business testing proves operational readiness."
  },
  {
    "id": 81,
    "qid": "CS0-004-MOD3-081",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each temporary containment measure to the longer-term action that should eventually replace or remove it.",
    "scenario": "<div class=\"scenario-text\"><p>Temporary controls must be tracked and transitioned once the threat is eradicated.</p></div>",
    "items": [
      { "id": "i1", "text": "Emergency perimeter blocks for attacker IPs" },
      { "id": "i2", "text": "Host network isolation via EDR" },
      { "id": "i3", "text": "Disabled user accounts" },
      { "id": "i4", "text": "Heightened logging and alerting" }
    ],
    "zones": [
      { "id": "z1", "label": "Remove blocks after infrastructure is confirmed clean and monitored" },
      { "id": "z2", "label": "Lift isolation after host is rebuilt/verified and returned to service" },
      { "id": "z3", "label": "Re-enable only after credential reset and system validation" },
      { "id": "z4", "label": "Return to normal levels after defined post-incident monitoring period" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Each temporary control has a corresponding exit criterion that must be met before the control is relaxed, preventing both premature removal and permanent operational friction."
  },
  {
    "id": 82,
    "qid": "CS0-004-MOD3-082",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each eradication challenge to the recommended handling approach.",
    "scenario": "<div class=\"scenario-text\"><p>Complex eradication scenarios require tailored strategies.</p></div>",
    "items": [
      { "id": "i1", "text": "Fileless malware with only memory and registry presence" },
      { "id": "i2", "text": "Suspected bootkit or firmware-level implant" },
      { "id": "i3", "text": "Large number of commodity-infected user workstations" },
      { "id": "i4", "text": "Compromise of a critical database server with limited downtime window" }
    ],
    "zones": [
      { "id": "z1", "label": "Process kill + registry cleanup + reboot + monitor" },
      { "id": "z2", "label": "Full hardware replacement or vendor-supported firmware re-flash" },
      { "id": "z3", "label": "Automated EDR cleanup or mass re-image from gold image" },
      { "id": "z4", "label": "Targeted in-place eradication with intensive validation" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Fileless threats can often be cleaned in place; bootkits require hardware-level intervention; scale favors automation; high-value limited-downtime systems favor careful targeted eradication."
  },
  {
    "id": 83,
    "qid": "CS0-004-MOD3-083",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each stakeholder communication need to the recovery milestone that triggers it.",
    "scenario": "<div class=\"scenario-text\"><p>Timely and accurate communication is required throughout recovery.</p></div>",
    "items": [
      { "id": "i1", "text": "Notify business owners of planned isolation or rebuild windows" },
      { "id": "i2", "text": "Advise help-desk and users that affected systems are offline" },
      { "id": "i3", "text": "Confirm to leadership that systems have been validated and returned to service" },
      { "id": "i4", "text": "Update status page or internal channels that recovery is complete" }
    ],
    "zones": [
      { "id": "z1", "label": "Before Containment / Eradication begins" },
      { "id": "z2", "label": "When systems are taken offline" },
      { "id": "z3", "label": "After successful validation and reconnection" },
      { "id": "z4", "label": "When the incident is formally closed" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Communication timing must align with operational milestones so stakeholders receive accurate, actionable information at the right moment."
  },
  {
    "id": 84,
    "qid": "CS0-004-MOD3-084",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each evidence-preservation action to the recovery activity it must precede.",
    "scenario": "<div class=\"scenario-text\"><p>Destructive recovery actions must never precede required evidence collection.</p></div>",
    "items": [
      { "id": "i1", "text": "Capture memory image and volatile data" },
      { "id": "i2", "text": "Collect disk image or targeted forensic artifacts" },
      { "id": "i3", "text": "Document running processes, network connections, and logged-on users" },
      { "id": "i4", "text": "Hash and securely store all collected evidence" }
    ],
    "zones": [
      { "id": "z1", "label": "Before powering off or rebooting a live system" },
      { "id": "z2", "label": "Before wiping or rebuilding a disk" },
      { "id": "z3", "label": "Before any process termination or isolation that alters state" },
      { "id": "z4", "label": "Before declaring evidence collection complete" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Memory must be captured before power loss, disk artifacts before wipe, live state before alteration, and hashing/chain-of-custody before collection is considered finished."
  },
  {
    "id": 85,
    "qid": "CS0-004-MOD3-085",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each post-recovery monitoring enhancement to its primary purpose.",
    "scenario": "<div class=\"scenario-text\"><p>After systems return to production, temporary monitoring increases help detect residual or returning threats.</p></div>",
    "items": [
      { "id": "i1", "text": "Create high-priority alerts for previously observed IOCs and TTPs" },
      { "id": "i2", "text": "Increase log retention and verbosity on critical systems" },
      { "id": "i3", "text": "Schedule regular threat-hunting queries focused on the incident TTPs" },
      { "id": "i4", "text": "Temporarily lower alert thresholds for related detection rules" }
    ],
    "zones": [
      { "id": "z1", "label": "Rapid detection of known re-infection indicators" },
      { "id": "z2", "label": "Preserve detailed telemetry for later analysis" },
      { "id": "z3", "label": "Proactive search for subtle residual activity" },
      { "id": "z4", "label": "Increase sensitivity to catch low-and-slow activity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Each monitoring enhancement serves a distinct detection or investigative purpose during the heightened post-recovery watch period."
  },
  {
    "id": 86,
    "qid": "CS0-004-MOD3-086",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the network control point that should be modified first to stop external C2 communication from compromised internal hosts.",
    "scenario": "<div class=\"scenario-text\"><p>Multiple internal hosts are beaconing to an external C2 server. Rapid containment of outbound command-and-control is required.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Internal Core Switch", "x": 20, "y": 40 },
      { "id": "node2", "label": "Egress Firewall / Internet Gateway", "x": 60, "y": 40 },
      { "id": "node3", "label": "Domain Controller", "x": 40, "y": 70 },
      { "id": "node4", "label": "Printer VLAN Switch", "x": 80, "y": 20 }
    ],
    "correct": ["node2"],
    "explanation": "The egress firewall or internet gateway is the control point that can immediately block outbound connections to known C2 infrastructure for all internal hosts."
  },
  {
    "id": 87,
    "qid": "CS0-004-MOD3-087",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the host that should be placed into network containment first given evidence of active ransomware encryption.",
    "scenario": "<div class=\"scenario-text\"><p>EDR has detected ransomware encryption activity on one server while neighboring systems remain clean so far.</p></div>",
    "nodes": [
      { "id": "node1", "label": "File Server\n(Encryption activity detected)", "x": 40, "y": 30 },
      { "id": "node2", "label": "User Workstation A", "x": 20, "y": 60 },
      { "id": "node3", "label": "User Workstation B", "x": 60, "y": 60 },
      { "id": "node4", "label": "Backup Server", "x": 80, "y": 30 }
    ],
    "correct": ["node1"],
    "explanation": "The host showing active encryption must be isolated first to stop further damage while the scope of the infection is still being determined."
  },
  {
    "id": 88,
    "qid": "CS0-004-MOD3-088",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the system that should be recovered last (highest criticality / most rigorous validation) after a domain-wide incident.",
    "scenario": "<div class=\"scenario-text\"><p>After a widespread compromise, recovery prioritization must protect identity infrastructure.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Standard User Workstation", "x": 20, "y": 50 },
      { "id": "node2", "label": "Domain Controller", "x": 50, "y": 30 },
      { "id": "node3", "label": "Print Server", "x": 70, "y": 50 },
      { "id": "node4", "label": "Marketing File Share", "x": 40, "y": 70 }
    ],
    "correct": ["node2"],
    "explanation": "Domain controllers hold the identity source of truth and must be recovered with the highest level of scrutiny and usually after lower-criticality systems have been restored and validated."
  },
  {
    "id": 89,
    "qid": "CS0-004-MOD3-089",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that should be used to enforce temporary network quarantine of a compromised endpoint.",
    "scenario": "<div class=\"scenario-text\"><p>A single endpoint must be isolated from the production network while still allowing limited access to a remediation VLAN for cleanup.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Access Switch / NAC Controller", "x": 30, "y": 40 },
      { "id": "node2", "label": "External DNS Server", "x": 70, "y": 20 },
      { "id": "node3", "label": "Internal NTP Server", "x": 50, "y": 70 },
      { "id": "node4", "label": "Public Web Server", "x": 80, "y": 50 }
    ],
    "correct": ["node1"],
    "explanation": "Access-layer switches or Network Access Control (NAC) solutions are the appropriate enforcement points for moving a host into a quarantine or remediation VLAN."
  },
  {
    "id": 90,
    "qid": "CS0-004-MOD3-090",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the recovery source that provides the highest assurance of a clean system state.",
    "scenario": "<div class=\"scenario-text\"><p>Multiple recovery options exist after a sophisticated intrusion. The team must choose the most trustworthy source.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Most recent production backup\n(taken during the incident window)", "x": 20, "y": 40 },
      { "id": "node2", "label": "Known-good gold image\n(created and sealed before the incident)", "x": 50, "y": 40 },
      { "id": "node3", "label": "Snapshot from the compromised host", "x": 70, "y": 60 },
      { "id": "node4", "label": "Backup of a peer server that was also compromised" },
      { "id": "node4", "label": "Backup of a peer server that was also compromised", "x": 30, "y": 70 }
    ],
    "correct": ["node2"],
    "explanation": "A gold image created and cryptographically sealed before the incident provides the highest assurance of cleanliness. Backups taken during or after compromise, or from other compromised systems, carry reinfection risk."
  },
  {
    "id": 91,
    "qid": "CS0-004-MOD3-091",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the identity system that must be carefully validated and potentially rebuilt after a confirmed domain compromise.",
    "scenario": "<div class=\"scenario-text\"><p>Attackers obtained domain-admin privileges. Recovery of identity infrastructure is a top priority.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Domain Controller / Active Directory", "x": 40, "y": 30 },
      { "id": "node2", "label": "Individual User Workstation", "x": 20, "y": 60 },
      { "id": "node3", "label": "Network Printer", "x": 60, "y": 60 },
      { "id": "node4", "label": "Guest Wi-Fi Controller", "x": 80, "y": 30 }
    ],
    "correct": ["node1"],
    "explanation": "Active Directory / domain controllers are the authoritative identity source. After domain-admin compromise they require the most rigorous validation or rebuild to re-establish trust."
  },
  {
    "id": 92,
    "qid": "CS0-004-MOD3-092",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the control that should be applied to stop lateral movement while allowing limited remediation access.",
    "scenario": "<div class=\"scenario-text\"><p>Compromised workstations must be prevented from reaching servers, yet administrators still need a controlled path to perform cleanup.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Micro-segmentation / ACL rules\n(permit remediation VLAN only)", "x": 40, "y": 40 },
      { "id": "node2", "label": "Disable all internal routing", "x": 20, "y": 70 },
      { "id": "node3", "label": "Shut down the entire server farm", "x": 70, "y": 70 },
      { "id": "node4", "label": "Remove all DNS records", "x": 80, "y": 20 }
    ],
    "correct": ["node1"],
    "explanation": "Micro-segmentation or carefully crafted ACLs can block lateral movement to production servers while still permitting access to a designated remediation network."
  },
  {
    "id": 93,
    "qid": "CS0-004-MOD3-093",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the recovery action that should be performed only after evidence collection and system isolation are complete.",
    "scenario": "<div class=\"scenario-text\"><p>The team is sequencing recovery steps for a compromised application server.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Rebuild the server from gold image", "x": 40, "y": 40 },
      { "id": "node2", "label": "Capture memory and disk images", "x": 20, "y": 20 },
      { "id": "node3", "label": "Document running processes", "x": 60, "y": 20 },
      { "id": "node4", "label": "Place host into network containment", "x": 70, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "Rebuilding is a destructive recovery action that must occur only after all required evidence has been collected and the host has been properly contained."
  },
  {
    "id": 94,
    "qid": "CS0-004-MOD3-094",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the firewall rule change that correctly implements containment of known C2 traffic.",
    "scenario": "<div class=\"scenario-text\"><p>The network team is applying emergency containment rules. Identify the rule that blocks attacker infrastructure while preserving necessary traffic.</p></div>",
    "nodes": [
      { "id": "l1", "label": "DENY TCP any -> 185.220.101.23:443 (C2 IP) log" },
      { "id": "l2", "label": "ALLOW TCP any -> any" },
      { "id": "l3", "label": "DENY TCP any -> 10.0.0.0/8" },
      { "id": "l4", "label": "ALLOW UDP any -> 8.8.8.8:53" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "The explicit DENY rule targeting the known C2 IP and port, with logging, is the correct containment action. The other rules are either overly permissive, block internal traffic unnecessarily, or are unrelated."
  },
  {
    "id": 95,
    "qid": "CS0-004-MOD3-095",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the PowerShell command that safely places a compromised host into network containment via Windows Firewall.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst needs to isolate a Windows endpoint quickly using built-in tools while investigation continues.</p></div>",
    "nodes": [
      { "id": "l1", "label": "New-NetFirewallRule -DisplayName \"IR-Containment\" -Direction Outbound -Action Block -Enabled True" },
      { "id": "l2", "label": "Remove-Item -Path C:\\Windows\\System32 -Recurse -Force" },
      { "id": "l3", "label": "Stop-Computer -Force" },
      { "id": "l4", "label": "Set-Service -Name WinDefend -StartupType Disabled" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "Creating a Windows Firewall rule that blocks outbound traffic is a standard host-based containment technique. The other commands are destructive or disable security controls and are inappropriate."
  },
  {
    "id": 96,
    "qid": "CS0-004-MOD3-096",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the log entry that confirms successful network isolation of a compromised host.",
    "scenario": "<div class=\"scenario-text\"><p>After applying containment, the team reviews logs to verify the host can no longer reach external C2.</p></div>",
    "nodes": [
      { "id": "l1", "label": "DENY TCP 10.20.30.45:49152 -> 185.220.101.23:443 (IR-Containment rule matched)" },
      { "id": "l2", "label": "ALLOW TCP 10.20.30.45:49152 -> 185.220.101.23:443" },
      { "id": "l3", "label": "ALLOW TCP 10.20.30.45:445 -> 10.20.30.10:445" },
      { "id": "l4", "label": "DHCPACK 10.20.30.45 to host" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "The DENY entry explicitly matching the containment rule and the C2 destination confirms that isolation is working. An ALLOW to the same destination would indicate containment failure."
  },
  {
    "id": 97,
    "qid": "CS0-004-MOD3-097",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the command or action that is appropriate for eradication of a known malicious scheduled task.",
    "scenario": "<div class=\"scenario-text\"><p>Persistence analysis has identified a malicious scheduled task created by the attacker.</p></div>",
    "nodes": [
      { "id": "l1", "label": "Unregister-ScheduledTask -TaskName \"WindowsUpdateAssist\" -Confirm:$false" },
      { "id": "l2", "label": "Start-ScheduledTask -TaskName \"WindowsUpdateAssist\"" },
      { "id": "l3", "label": "schtasks /Run /TN \"WindowsUpdateAssist\"" },
      { "id": "l4", "label": "Enable-ScheduledTask -TaskName \"WindowsUpdateAssist\"" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "Unregister-ScheduledTask (or the equivalent schtasks /Delete) removes the malicious persistence mechanism. Starting or enabling the task would execute the attacker’s payload."
  },
  {
    "id": 98,
    "qid": "CS0-004-MOD3-098",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the verification command output that indicates a restored system matches the expected gold-image baseline.",
    "scenario": "<div class=\"scenario-text\"><p>After rebuilding a server, the team compares critical system files against the known-good gold image.</p></div>",
    "nodes": [
      { "id": "l1", "label": "Get-FileHash C:\\Windows\\System32\\ntdll.dll -Algorithm SHA256 → matches gold-image hash" },
      { "id": "l2", "label": "Get-FileHash C:\\Windows\\System32\\ntdll.dll -Algorithm SHA256 → DOES NOT MATCH gold-image hash" },
      { "id": "l3", "label": "Test-Path C:\\Malware\\payload.exe → True" },
      { "id": "l4", "label": "Get-Process -Name \"beacon\" → process found" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "A matching hash against the sealed gold image is strong evidence of configuration integrity. Hash mismatches or presence of known-malicious files/processes indicate the system is not clean."
  },
  {
    "id": 99,
    "qid": "CS0-004-MOD3-099",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the EDR console action that correctly isolates a compromised endpoint while preserving forensic value.",
    "scenario": "<div class=\"scenario-text\"><p>The IR team is using the EDR platform to contain a host that still has valuable volatile evidence.</p></div>",
    "nodes": [
      { "id": "l1", "label": "Action: Network Containment / Isolate Host (block all traffic except to EDR cloud)" },
      { "id": "l2", "label": "Action: Delete all files in C:\\Users" },
      { "id": "l3", "label": "Action: Immediate remote wipe / factory reset" },
      { "id": "l4", "label": "Action: Disable all logging and telemetry" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "Network containment isolates the host from the production network while still allowing the EDR agent to communicate, preserving both containment and the ability to collect additional evidence. Destructive wipe or log-disabling actions destroy forensic value."
  },
  {
    "id": 100,
    "qid": "CS0-004-MOD3-100",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the recovery checklist item that must be completed before a rebuilt host is returned to the production network.",
    "scenario": "<div class=\"scenario-text\"><p>A formal recovery gate process is in use. Identify the mandatory validation step.</p></div>",
    "nodes": [
      { "id": "l1", "label": "IOC scan clean + gold-image hash validation + EDR agent healthy + vulnerability scan critical findings = 0" },
      { "id": "l2", "label": "Host responds to ping" },
      { "id": "l3", "label": "User says the application looks okay" },
      { "id": "l4", "label": "Help-desk ticket has been closed" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "A rigorous recovery gate requires multiple independent technical validations (IOC absence, configuration integrity, security tooling health, and vulnerability posture) before production reconnection. Connectivity or subjective checks alone are insufficient."
 },
  {
    "id": 101,
    "qid": "CS0-004-MOD3-101",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "Which MITRE ATT&CK tactic encompasses techniques an adversary uses to gain initial entry into a network, such as spear-phishing or exploiting public-facing applications?",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is mapping observed attacker behaviors to the MITRE ATT&CK framework during the analysis phase of an incident involving a malicious Office document delivered via email.</p></div>",
    "options": [
      { "id": "a", "text": "Initial Access" },
      { "id": "b", "text": "Execution" },
      { "id": "c", "text": "Persistence" },
      { "id": "d", "text": "Exfiltration" }
    ],
    "correct": ["a"],
    "explanation": "Initial Access is the ATT&CK tactic that covers methods used to achieve the first foothold, including phishing and exploitation of public applications. Execution covers running malicious code after access is obtained; Persistence covers maintaining access; Exfiltration covers data theft."
  },
  {
    "id": 102,
    "qid": "CS0-004-MOD3-102",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "In the Lockheed Martin Cyber Kill Chain, which stage immediately follows Weaponization and involves the adversary transmitting the weaponized payload to the target?",
    "scenario": "<div class=\"scenario-text\"><p>An IR team is reconstructing an attack that began with a crafted malicious document. They need to correctly sequence the Kill Chain stages for the final report.</p></div>",
    "options": [
      { "id": "a", "text": "Delivery" },
      { "id": "b", "text": "Exploitation" },
      { "id": "c", "text": "Installation" },
      { "id": "d", "text": "Command and Control" }
    ],
    "correct": ["a"],
    "explanation": "After Weaponization (creating the malicious payload), the next stage is Delivery—the transmission of that payload to the victim via email, web, USB, etc. Exploitation occurs when the payload is triggered; Installation establishes persistence; C2 enables remote control."
  },
  {
    "id": 103,
    "qid": "CS0-004-MOD3-103",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "Which Volatility plugin is most appropriate for listing active network connections from a Windows memory dump during incident analysis?",
    "scenario": "<div class=\"scenario-text\"><p>A memory image has been acquired from a suspected C2 beacon host. The analyst needs to identify established network connections that may indicate ongoing command-and-control.</p></div>",
    "options": [
      { "id": "a", "text": "netscan or netstat" },
      { "id": "b", "text": "pslist" },
      { "id": "c", "text": "cmdline" },
      { "id": "d", "text": "filescan" }
    ],
    "correct": ["a"],
    "explanation": "The netscan (or legacy netstat) plugin enumerates network connections, sockets, and associated processes from memory—critical for identifying C2. pslist shows processes, cmdline shows command lines, and filescan finds file objects; none directly list network connections."
  },
  {
    "id": 104,
    "qid": "CS0-004-MOD3-104",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "What is the primary purpose of maintaining a documented chain of custody for digital evidence?",
    "scenario": "<div class=\"scenario-text\"><p>During a high-severity incident that may result in legal action, the IR team is collecting memory and disk images. Legal counsel has emphasized proper evidence handling.</p></div>",
    "options": [
      { "id": "a", "text": "To demonstrate that evidence has remained unaltered and under accountable control from collection through analysis and storage" },
      { "id": "b", "text": "To speed up the process of deleting evidence after the incident is closed" },
      { "id": "c", "text": "To allow any team member to freely modify timestamps on evidence files" },
      { "id": "d", "text": "To eliminate the need for cryptographic hashing of acquired images" }
    ],
    "correct": ["a"],
    "explanation": "Chain of custody provides a chronological, documented record of evidence handling that preserves integrity and admissibility. It does not authorize deletion, modification, or removal of hashing requirements."
  },
  {
    "id": 105,
    "qid": "CS0-004-MOD3-105",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "Which Autopsy or The Sleuth Kit capability is most useful for recovering deleted files and examining unallocated space on a disk image?",
    "scenario": "<div class=\"scenario-text\"><p>Analysts suspect an attacker deleted tools and staging files after exfiltration. A full disk image is available for examination.</p></div>",
    "options": [
      { "id": "a", "text": "File system analysis and data carving modules" },
      { "id": "b", "text": "Volatility memory-only plugins" },
      { "id": "c", "text": "Live network packet capture" },
      { "id": "d", "text": "Real-time EDR process injection detection" }
    ],
    "correct": ["a"],
    "explanation": "Autopsy (built on The Sleuth Kit) provides file-system parsing, unallocated-space analysis, and carving to recover deleted or fragmented artifacts. Volatility is for memory; packet capture and EDR are live-response or endpoint tools, not disk-image forensic platforms."
  },
  {
    "id": 106,
    "qid": "CS0-004-MOD3-106",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE MITRE ATT&CK tactics that are commonly observed after an adversary has achieved Initial Access.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is building an ATT&CK Navigator layer based on telemetry from a recent intrusion that began with a phishing email.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Execution" },
      { "id": "b", "text": "Persistence" },
      { "id": "c", "text": "Privilege Escalation" },
      { "id": "d", "text": "Reconnaissance (pre-compromise)" },
      { "id": "e", "text": "Resource Development (pre-compromise)" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "After Initial Access, adversaries typically proceed to Execution, establish Persistence, and escalate privileges. Reconnaissance and Resource Development are primarily pre-compromise tactics."
  },
  {
    "id": 107,
    "qid": "CS0-004-MOD3-107",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE Volatility plugins useful for detecting process injection or hollowed processes in a Windows memory dump.",
    "scenario": "<div class=\"scenario-text\"><p>Memory analysis is required after EDR flagged suspicious process behavior consistent with injection techniques.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "malfind" },
      { "id": "b", "text": "hollowfind or ldrmodules" },
      { "id": "c", "text": "pslist / psscan comparison" },
      { "id": "d", "text": "timeliner" },
      { "id": "e", "text": "filescan" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "malfind detects injected code, hollowfind/ldrmodules identify process hollowing and unlinked modules, and comparing pslist vs psscan can reveal hidden processes. timeliner and filescan serve timeline and file-object purposes, not primary injection detection."
  },
  {
    "id": 108,
    "qid": "CS0-004-MOD3-108",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE elements that must be recorded to maintain a proper chain of custody for a forensic disk image.",
    "scenario": "<div class=\"scenario-text\"><p>A junior analyst is preparing the evidence log for a newly acquired disk image that may be used in legal proceedings.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Unique evidence identifier and description of the item" },
      { "id": "b", "text": "Date, time, and identity of the person who collected the evidence" },
      { "id": "c", "text": "Cryptographic hash (MD5/SHA-256) of the acquired image" },
      { "id": "d", "text": "Personal opinions about the attacker’s motives" },
      { "id": "e", "text": "The analyst’s favorite coffee order during acquisition" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Chain-of-custody records require unique identification, collection metadata (who/when), and integrity verification via hashing. Subjective opinions and irrelevant personal details have no place in the formal record."
  },
  {
    "id": 109,
    "qid": "CS0-004-MOD3-109",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE Cyber Kill Chain stages that occur after an adversary has successfully delivered a payload but before full command-and-control is established.",
    "scenario": "<div class=\"scenario-text\"><p>The IR team is mapping a phishing-based intrusion onto the Lockheed Martin Cyber Kill Chain for the executive summary.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Exploitation" },
      { "id": "b", "text": "Installation" },
      { "id": "c", "text": "Command and Control" },
      { "id": "d", "text": "Weaponization" },
      { "id": "e", "text": "Reconnaissance" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "After Delivery, the sequence is Exploitation (triggering the payload), Installation (establishing persistence), and then Command and Control. Weaponization and Reconnaissance occur earlier."
  },
  {
    "id": 110,
    "qid": "CS0-004-MOD3-110",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE best practices when acquiring a memory image for forensic analysis.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is preparing to capture RAM from a live compromised Windows host while minimizing evidence alteration.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Use a trusted, write-blocked or validated acquisition tool (e.g., WinPmem, DumpIt, or FTK Imager)" },
      { "id": "b", "text": "Document the exact command line, tool version, and system state at time of acquisition" },
      { "id": "c", "text": "Calculate and record cryptographic hashes of the memory image immediately after acquisition" },
      { "id": "d", "text": "Run multiple antivirus scans on the live system before capturing memory" },
      { "id": "e", "text": "Reboot the host several times to clear volatile artifacts" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Trusted tools, thorough documentation, and immediate hashing preserve integrity and reproducibility. Pre-acquisition AV scans and reboots alter or destroy volatile evidence and should be avoided."
  },
  {
    "id": 111,
    "qid": "CS0-004-MOD3-111",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE ATT&CK techniques commonly associated with the Credential Access tactic.",
    "scenario": "<div class=\"scenario-text\"><p>Memory and disk artifacts suggest the attacker attempted to obtain account credentials after gaining a foothold.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "OS Credential Dumping (T1003)" },
      { "id": "b", "text": "Input Capture / Keylogging (T1056)" },
      { "id": "c", "text": "Unsecured Credentials (T1552)" },
      { "id": "d", "text": "Phishing (T1566) – Initial Access" },
      { "id": "e", "text": "Data Encrypted for Impact (T1486) – Impact" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "OS Credential Dumping, Input Capture, and Unsecured Credentials are core Credential Access techniques. Phishing is Initial Access; ransomware encryption is Impact."
  },
  {
    "id": 112,
    "qid": "CS0-004-MOD3-112",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE indicators that a process may have been hollowed or injected when examining Volatility output.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is reviewing malfind and ldrmodules results from a memory image of a suspected beacon host.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Executable code pages marked as private and not backed by a file on disk" },
      { "id": "b", "text": "PE headers found in unexpected memory regions" },
      { "id": "c", "text": "Discrepancies between the module list in the PEB and the VAD tree" },
      { "id": "d", "text": "A process with a completely empty command line and no parent" },
      { "id": "e", "text": "Normal system processes with expected digital signatures" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Private executable pages, unexpected PE headers, and PEB/VAD discrepancies are classic signs of injection or hollowing. Empty command lines can be suspicious but are not definitive; signed system processes are expected."
  },
  {
    "id": 113,
    "qid": "CS0-004-MOD3-113",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE reasons why memory forensics is often preferred over disk forensics for detecting certain modern threats.",
    "scenario": "<div class=\"scenario-text\"><p>The IR lead is explaining to stakeholders why a memory image was prioritized over an immediate disk image during a fileless malware incident.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Fileless and in-memory-only implants may leave little or no disk footprint" },
      { "id": "b", "text": "Decrypted payloads, injected code, and active network connections are visible in memory" },
      { "id": "c", "text": "Process command lines, loaded modules, and credentials may exist only in RAM" },
      { "id": "d", "text": "Memory images are always smaller and faster to acquire than disk images" },
      { "id": "e", "text": "Disk forensics is never useful once memory has been captured" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Modern fileless threats and runtime artifacts are often visible only in memory. While memory acquisition can be faster, size varies, and disk forensics remains essential for persistence and historical artifacts."
  },
  {
    "id": 114,
    "qid": "CS0-004-MOD3-114",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE Autopsy or Sleuth Kit features that support timeline analysis of attacker activity.",
    "scenario": "<div class=\"scenario-text\"><p>Analysts need to reconstruct the sequence of file-system events related to malware installation and data staging.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Timeline view aggregating MACB timestamps from the file system" },
      { "id": "b", "text": "Web history and download artifact parsing" },
      { "id": "c", "text": "Registry and prefetch parsing for execution evidence" },
      { "id": "d", "text": "Live memory acquisition over the network" },
      { "id": "e", "text": "Real-time process injection detection on a running host" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Autopsy’s timeline, web artifacts, and Windows execution artifacts (prefetch, registry) enable robust timeline reconstruction. Live memory acquisition and real-time injection detection are outside Autopsy’s disk-focused scope."
  },
  {
    "id": 115,
    "qid": "CS0-004-MOD3-115",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE actions that help preserve the integrity of digital evidence during acquisition and handling.",
    "scenario": "<div class=\"scenario-text\"><p>A formal evidence-handling procedure is being reviewed for compliance with forensic best practices.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Using hardware or software write-blockers when imaging disk media" },
      { "id": "b", "text": "Calculating and verifying cryptographic hashes before and after transfers" },
      { "id": "c", "text": "Storing original evidence in a controlled, access-logged environment" },
      { "id": "d", "text": "Allowing unrestricted write access to evidence storage shares" },
      { "id": "e", "text": "Working exclusively on the original evidence media for all analysis" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Write-blockers, hash verification, and controlled storage protect integrity. Unrestricted write access and working on originals risk alteration and are contrary to forensic practice."
  },
  {
    "id": 116,
    "qid": "CS0-004-MOD3-116",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE ATT&CK techniques that fall under the Defense Evasion tactic.",
    "scenario": "<div class=\"scenario-text\"><p>Telemetry indicates the attacker attempted to avoid detection after initial execution.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Obfuscated Files or Information (T1027)" },
      { "id": "b", "text": "Process Injection (T1055)" },
      { "id": "c", "text": "Indicator Removal on Host (T1070)" },
      { "id": "d", "text": "Valid Accounts (T1078) – primarily Persistence / Privilege Escalation / Initial Access" },
      { "id": "e", "text": "Data from Local System (T1005) – Collection" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Obfuscation, process injection, and indicator removal are classic Defense Evasion techniques. Valid Accounts and local data collection map to other tactics."
  },
  {
    "id": 117,
    "qid": "CS0-004-MOD3-117",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE pieces of information that Volatility’s pslist and pstree plugins can provide to an incident responder.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is performing initial triage of a Windows memory dump to understand running processes and their relationships.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Process name, PID, and PPID" },
      { "id": "b", "text": "Process creation time" },
      { "id": "c", "text": "Parent-child process relationships (via pstree)" },
      { "id": "d", "text": "Full contents of every open file handle" },
      { "id": "e", "text": "Decrypted HTTPS payload data from every connection" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "pslist/pstree provide process metadata and hierarchical relationships. Full handle contents and decrypted traffic require additional plugins or external tools."
  },
  {
    "id": 118,
    "qid": "CS0-004-MOD3-118",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE common sources of evidence that Autopsy can parse to support attribution or timeline reconstruction.",
    "scenario": "<div class=\"scenario-text\"><p>A disk image from a suspected patient-zero workstation is being examined for artifacts of initial access and execution.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Browser history, cookies, and download records" },
      { "id": "b", "text": "Windows Prefetch and Amcache entries" },
      { "id": "c", "text": "Email artifacts and attachment metadata" },
      { "id": "d", "text": "Live CPU register state from a running process" },
      { "id": "e", "text": "Real-time kernel debugger output" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Autopsy excels at parsing browser, execution (Prefetch/Amcache), and email artifacts from disk images. Live CPU state and kernel debugger output are memory or live-response domains."
  },
  {
    "id": 119,
    "qid": "CS0-004-MOD3-119",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE benefits of mapping an incident’s observed behaviors to the MITRE ATT&CK framework.",
    "scenario": "<div class=\"scenario-text\"><p>The detection engineering and IR teams are standardizing on ATT&CK for post-incident analysis and detection improvement.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Provides a common language for describing adversary behavior across teams" },
      { "id": "b", "text": "Helps identify gaps in detection coverage for specific techniques" },
      { "id": "c", "text": "Enables prioritization of defensive improvements based on real observed TTPs" },
      { "id": "d", "text": "Automatically generates a complete incident report without analyst input" },
      { "id": "e", "text": "Guarantees that every future attack will be prevented" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "ATT&CK supplies shared terminology, exposes detection gaps, and focuses improvement efforts on observed techniques. It does not auto-generate reports or provide absolute prevention."
  },
  {
    "id": 120,
    "qid": "CS0-004-MOD3-120",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE steps that should be taken immediately after acquiring a forensic memory or disk image.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst has just completed acquisition of a critical evidence image and must properly secure it before analysis begins.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Calculate and record the cryptographic hash of the image" },
      { "id": "b", "text": "Update the chain-of-custody log with acquisition details" },
      { "id": "c", "text": "Create a working copy of the image and verify its hash matches the original" },
      { "id": "d", "text": "Begin making permanent changes to the original image for convenience" },
      { "id": "e", "text": "Store the original image on an unmanaged personal USB drive" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Hashing, chain-of-custody update, and verified working copies protect integrity and accountability. Modifying the original or using unmanaged storage violates forensic best practice."
  },
  {
    "id": 121,
    "qid": "CS0-004-MOD3-121",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each observed attacker behavior to the most appropriate MITRE ATT&CK tactic.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is labeling telemetry from a recent intrusion using the ATT&CK framework.</p></div>",
    "items": [
      { "id": "i1", "text": "Sending a spear-phishing email with a malicious macro document" },
      { "id": "i2", "text": "Executing PowerShell to download and run a beacon" },
      { "id": "i3", "text": "Creating a new scheduled task for persistence" },
      { "id": "i4", "text": "Dumping LSASS memory to obtain credentials" }
    ],
    "zones": [
      { "id": "z1", "label": "Initial Access" },
      { "id": "z2", "label": "Execution" },
      { "id": "z3", "label": "Persistence" },
      { "id": "z4", "label": "Credential Access" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Phishing maps to Initial Access, PowerShell execution to Execution, scheduled-task creation to Persistence, and LSASS dumping to Credential Access."
  },
  {
    "id": 122,
    "qid": "CS0-004-MOD3-122",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each Cyber Kill Chain stage to the corresponding attacker activity.",
    "scenario": "<div class=\"scenario-text\"><p>The IR team is sequencing the stages of an observed attack for the final report.</p></div>",
    "items": [
      { "id": "i1", "text": "Adversary crafts a malicious document containing an exploit" },
      { "id": "i2", "text": "Malicious document is sent to the victim via email" },
      { "id": "i3", "text": "Victim opens the document and the exploit code runs" },
      { "id": "i4", "text": "Malware establishes a foothold and contacts the C2 server" }
    ],
    "zones": [
      { "id": "z1", "label": "Weaponization" },
      { "id": "z2", "label": "Delivery" },
      { "id": "z3", "label": "Exploitation" },
      { "id": "z4", "label": "Command and Control" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Weaponization creates the payload, Delivery transmits it, Exploitation triggers it, and C2 enables ongoing control."
  },
  {
    "id": 123,
    "qid": "CS0-004-MOD3-123",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each Volatility plugin to the primary artifact or activity it is used to examine.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is selecting the correct Volatility plugins for different investigative questions.</p></div>",
    "items": [
      { "id": "i1", "text": "netscan / netstat" },
      { "id": "i2", "text": "malfind" },
      { "id": "i3", "text": "pslist / pstree" },
      { "id": "i4", "text": "cmdline / consoles" }
    ],
    "zones": [
      { "id": "z1", "label": "Network connections and sockets" },
      { "id": "z2", "label": "Injected or hollowed code regions" },
      { "id": "z3", "label": "Running processes and parent-child relationships" },
      { "id": "z4", "label": "Process command-line arguments" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Each listed plugin is purpose-built for the matched artifact category, enabling efficient memory triage."
  },
  {
    "id": 124,
    "qid": "CS0-004-MOD3-124",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each evidence-handling activity to the correct chain-of-custody requirement.",
    "scenario": "<div class=\"scenario-text\"><p>A new IR team member is learning proper evidence management procedures.</p></div>",
    "items": [
      { "id": "i1", "text": "Assign a unique evidence ID and describe the item" },
      { "id": "i2", "text": "Record who collected the evidence and when" },
      { "id": "i3", "text": "Calculate and document the cryptographic hash" },
      { "id": "i4", "text": "Log every transfer or access of the evidence" }
    ],
    "zones": [
      { "id": "z1", "label": "Identification" },
      { "id": "z2", "label": "Collection Documentation" },
      { "id": "z3", "label": "Integrity Verification" },
      { "id": "z4", "label": "Accountability / Audit Trail" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "These four activities form the core of a defensible chain-of-custody process."
  },
  {
    "id": 125,
    "qid": "CS0-004-MOD3-125",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each ATT&CK technique to the tactic it primarily supports.",
    "scenario": "<div class=\"scenario-text\"><p>Detection rules are being tagged with ATT&CK technique and tactic IDs.</p></div>",
    "items": [
      { "id": "i1", "text": "T1059.001 – PowerShell" },
      { "id": "i2", "text": "T1547.001 – Registry Run Keys" },
      { "id": "i3", "text": "T1003.001 – LSASS Memory" },
      { "id": "i4", "text": "T1041 – Exfiltration Over C2 Channel" }
    ],
    "zones": [
      { "id": "z1", "label": "Execution" },
      { "id": "z2", "label": "Persistence" },
      { "id": "z3", "label": "Credential Access" },
      { "id": "z4", "label": "Exfiltration" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "PowerShell is an Execution technique, Run keys provide Persistence, LSASS dumping is Credential Access, and C2 exfiltration is Exfiltration."
  },
  {
    "id": 126,
    "qid": "CS0-004-MOD3-126",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each forensic tool to its primary analysis domain.",
    "scenario": "<div class=\"scenario-text\"><p>The IR toolkit is being organized by the type of evidence each tool is designed to examine.</p></div>",
    "items": [
      { "id": "i1", "text": "Volatility / Volatility Workbench" },
      { "id": "i2", "text": "Autopsy / The Sleuth Kit" },
      { "id": "i3", "text": "Wireshark / tcpdump" },
      { "id": "i4", "text": "FTK Imager / dd / Guymager" }
    ],
    "zones": [
      { "id": "z1", "label": "Memory Analysis" },
      { "id": "z2", "label": "Disk / File System Analysis" },
      { "id": "z3", "label": "Network Traffic Analysis" },
      { "id": "z4", "label": "Evidence Acquisition" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Volatility targets RAM, Autopsy targets disk images, Wireshark/tcpdump target network captures, and the listed tools are used for forensically sound acquisition."
  },
  {
    "id": 127,
    "qid": "CS0-004-MOD3-127",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each memory-analysis goal to the most appropriate Volatility plugin or approach.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst has a clear set of investigative questions and must choose the correct Volatility capabilities.</p></div>",
    "items": [
      { "id": "i1", "text": "Identify processes with injected code" },
      { "id": "i2", "text": "List active network connections" },
      { "id": "i3", "text": "Recover command-line arguments" },
      { "id": "i4", "text": "Detect hidden or unlinked processes" }
    ],
    "zones": [
      { "id": "z1", "label": "malfind" },
      { "id": "z2", "label": "netscan" },
      { "id": "z3", "label": "cmdline / consoles" },
      { "id": "z4", "label": "pslist vs psscan comparison" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Each investigative goal maps directly to a Volatility capability designed for that purpose."
  },
  {
    "id": 128,
    "qid": "CS0-004-MOD3-128",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each Kill Chain stage to the defensive control that is most effective at that stage.",
    "scenario": "<div class=\"scenario-text\"><p>The security architecture team is aligning preventive and detective controls to the Cyber Kill Chain.</p></div>",
    "items": [
      { "id": "i1", "text": "Email gateway sandboxing and attachment detonation" },
      { "id": "i2", "text": "Endpoint detection of exploit behavior and macro execution" },
      { "id": "i3", "text": "Application allow-listing and persistence monitoring" },
      { "id": "i4", "text": "Network detection of beaconing and C2 protocols" }
    ],
    "zones": [
      { "id": "z1", "label": "Delivery" },
      { "id": "z2", "label": "Exploitation" },
      { "id": "z3", "label": "Installation" },
      { "id": "z4", "label": "Command and Control" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Controls are most effective when aligned to the specific Kill Chain stage they are designed to interrupt or detect."
  },
  {
    "id": 129,
    "qid": "CS0-004-MOD3-129",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each evidence type to the tool most commonly used to examine it.",
    "scenario": "<div class=\"scenario-text\"><p>Analysts must select the correct tool for each class of evidence collected during an incident.</p></div>",
    "items": [
      { "id": "i1", "text": "Windows memory dump (.raw / .mem)" },
      { "id": "i2", "text": "Full disk or volume image (.E01 / .dd)" },
      { "id": "i3", "text": "Packet capture (.pcap)" },
      { "id": "i4", "text": "Live system volatile data (before imaging)" }
    ],
    "zones": [
      { "id": "z1", "label": "Volatility" },
      { "id": "z2", "label": "Autopsy / Sleuth Kit" },
      { "id": "z3", "label": "Wireshark / NetworkMiner" },
      { "id": "z4", "label": "Live-response scripts / EDR / KAPE" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Tool selection is driven by the nature of the evidence: memory, disk, network, or live volatile data."
  },
  {
    "id": 130,
    "qid": "CS0-004-MOD3-130",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each ATT&CK tactic to a representative technique.",
    "scenario": "<div class=\"scenario-text\"><p>Junior analysts are learning to associate high-level tactics with concrete techniques.</p></div>",
    "items": [
      { "id": "i1", "text": "T1566 – Phishing" },
      { "id": "i2", "text": "T1055 – Process Injection" },
      { "id": "i3", "text": "T1078 – Valid Accounts" },
      { "id": "i4", "text": "T1486 – Data Encrypted for Impact" }
    ],
    "zones": [
      { "id": "z1", "label": "Initial Access" },
      { "id": "z2", "label": "Defense Evasion" },
      { "id": "z3", "label": "Persistence / Privilege Escalation / Lateral Movement" },
      { "id": "z4", "label": "Impact" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Phishing is Initial Access, process injection is Defense Evasion, valid accounts span multiple tactics, and ransomware encryption is Impact."
  },
  {
    "id": 131,
    "qid": "CS0-004-MOD3-131",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each chain-of-custody event to the information that must be recorded.",
    "scenario": "<div class=\"scenario-text\"><p>Evidence custodians must know exactly what to log at each handling event.</p></div>",
    "items": [
      { "id": "i1", "text": "Evidence is first collected from a live system" },
      { "id": "i2", "text": "Evidence is transferred to a different analyst" },
      { "id": "i3", "text": "Evidence is placed into long-term secure storage" },
      { "id": "i4", "text": "A working copy is created for analysis" }
    ],
    "zones": [
      { "id": "z1", "label": "Collector identity, date/time, method, hash" },
      { "id": "z2", "label": "Relinquishing and receiving parties, date/time, purpose" },
      { "id": "z3", "label": "Storage location, access controls, date/time" },
      { "id": "z4", "label": "Original hash, working-copy hash, verification result" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Each custody event has a defined set of metadata that must be captured to maintain an unbroken, auditable chain."
  },
  {
    "id": 132,
    "qid": "CS0-004-MOD3-132",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each observed artifact to the Kill Chain stage it most strongly indicates.",
    "scenario": "<div class=\"scenario-text\"><p>Timeline reconstruction requires linking artifacts back to Kill Chain stages.</p></div>",
    "items": [
      { "id": "i1", "text": "Malicious document received in a user’s inbox" },
      { "id": "i2", "text": "Macro execution and process creation from WINWORD.EXE" },
      { "id": "i3", "text": "New service or scheduled task created by the malware" },
      { "id": "i4", "text": "Regular beaconing to an external IP on port 443" }
    ],
    "zones": [
      { "id": "z1", "label": "Delivery" },
      { "id": "z2", "label": "Exploitation / Installation" },
      { "id": "z3", "label": "Installation" },
      { "id": "z4", "label": "Command and Control" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Inbox presence indicates Delivery, macro/process creation indicates Exploitation/Installation, persistence mechanisms indicate Installation, and beaconing indicates C2."
  },
  {
    "id": 133,
    "qid": "CS0-004-MOD3-133",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each forensic best practice to the risk it primarily mitigates.",
    "scenario": "<div class=\"scenario-text\"><p>Evidence-handling procedures are being justified to auditors.</p></div>",
    "items": [
      { "id": "i1", "text": "Use of write-blockers during disk imaging" },
      { "id": "i2", "text": "Immediate hashing of acquired images" },
      { "id": "i3", "text": "Working only on verified copies of evidence" },
      { "id": "i4", "text": "Detailed chain-of-custody logging" }
    ],
    "zones": [
      { "id": "z1", "label": "Inadvertent modification of original media" },
      { "id": "z2", "label": "Undetected corruption or tampering of the image" },
      { "id": "z3", "label": "Accidental alteration during analysis" },
      { "id": "z4", "label": "Inability to prove continuous control and integrity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Each practice directly addresses a specific integrity or accountability risk in the forensic process."
  },
  {
    "id": 134,
    "qid": "CS0-004-MOD3-134",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each ATT&CK data source to the type of evidence it typically provides.",
    "scenario": "<div class=\"scenario-text\"><p>Detection engineers are mapping ATT&CK data sources to available telemetry.</p></div>",
    "items": [
      { "id": "i1", "text": "Process: Process Creation" },
      { "id": "i2", "text": "Network Traffic: Network Connection Creation" },
      { "id": "i3", "text": "Windows Registry: Windows Registry Key Creation" },
      { "id": "i4", "text": "File: File Creation" }
    ],
    "zones": [
      { "id": "z1", "label": "Command-line and parent-child process relationships" },
      { "id": "z2", "label": "C2 beaconing and lateral movement connections" },
      { "id": "z3", "label": "Persistence via Run keys or services" },
      { "id": "z4", "label": "Dropped payloads and staging files" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "ATT&CK data sources map cleanly to the classes of telemetry defenders use to detect the associated techniques."
  },
  {
    "id": 135,
    "qid": "CS0-004-MOD3-135",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each memory artifact to the investigative value it provides.",
    "scenario": "<div class=\"scenario-text\"><p>Analysts are prioritizing which memory artifacts to extract first during triage.</p></div>",
    "items": [
      { "id": "i1", "text": "Active network connections and listening sockets" },
      { "id": "i2", "text": "Injected code regions and hollowed processes" },
      { "id": "i3", "text": "Process command lines and environment variables" },
      { "id": "i4", "text": "Loaded modules and unlinked DLLs" }
    ],
    "zones": [
      { "id": "z1", "label": "Identify C2 and lateral movement" },
      { "id": "z2", "label": "Detect process injection / hollowing" },
      { "id": "z3", "label": "Understand attacker commands and tools" },
      { "id": "z4", "label": "Find hidden or injected libraries" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Each class of memory artifact answers a distinct investigative question that is critical during early triage."
  },
  {
    "id": 136,
    "qid": "CS0-004-MOD3-136",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the ATT&CK tactic that most directly corresponds to an adversary establishing a foothold by creating a new service after initial code execution.",
    "scenario": "<div class=\"scenario-text\"><p>After a successful phishing delivery and macro execution, the attacker creates a Windows service for persistence. Map this behavior to the correct high-level tactic.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Initial Access", "x": 15, "y": 30 },
      { "id": "node2", "label": "Execution", "x": 35, "y": 30 },
      { "id": "node3", "label": "Persistence", "x": 55, "y": 30 },
      { "id": "node4", "label": "Exfiltration", "x": 75, "y": 30 }
    ],
    "correct": ["node3"],
    "explanation": "Creating a service for ongoing access is a Persistence technique. Initial Access and Execution have already occurred; Exfiltration is a later-stage objective."
  },
  {
    "id": 137,
    "qid": "CS0-004-MOD3-137",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the Cyber Kill Chain stage that is occurring when a victim opens a malicious document and the embedded exploit code begins to run.",
    "scenario": "<div class=\"scenario-text\"><p>Timeline analysis shows the exact moment a user double-clicked a .docm file and WINWORD.EXE spawned a suspicious child process.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Delivery", "x": 20, "y": 40 },
      { "id": "node2", "label": "Exploitation", "x": 40, "y": 40 },
      { "id": "node3", "label": "Installation", "x": 60, "y": 40 },
      { "id": "node4", "label": "Actions on Objectives", "x": 80, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "The moment the payload is triggered and begins to execute is the Exploitation stage of the Kill Chain."
  },
  {
    "id": 138,
    "qid": "CS0-004-MOD3-138",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the Volatility capability that should be used first to identify potential process injection on a memory image.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst has loaded a Windows memory dump and needs to locate injected or hollowed code as a high-priority triage step.</p></div>",
    "nodes": [
      { "id": "node1", "label": "malfind", "x": 25, "y": 35 },
      { "id": "node2", "label": "filescan", "x": 50, "y": 35 },
      { "id": "node3", "label": "timeliner", "x": 75, "y": 35 },
      { "id": "node4", "label": "clipboard", "x": 50, "y": 65 }
    ],
    "correct": ["node1"],
    "explanation": "malfind is specifically designed to locate injected code by examining VAD permissions and content, making it the primary plugin for process-injection triage."
  },
  {
    "id": 139,
    "qid": "CS0-004-MOD3-139",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the evidence-handling step that must occur immediately after a forensic image is successfully acquired.",
    "scenario": "<div class=\"scenario-text\"><p>Acquisition of a critical disk image has just completed. The analyst must protect the integrity of the evidence before any further action.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Calculate and record cryptographic hash", "x": 30, "y": 30 },
      { "id": "node2", "label": "Begin analysis on the original image", "x": 60, "y": 30 },
      { "id": "node3", "label": "Delete temporary acquisition logs", "x": 30, "y": 60 },
      { "id": "node4", "label": "Share the image on an open network share", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "Immediate hashing establishes a baseline integrity value that can be verified at every subsequent handling step and is a mandatory first action after acquisition."
  },
  {
    "id": 140,
    "qid": "CS0-004-MOD3-140",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the ATT&CK tactic that best describes an adversary using stolen credentials to move from a workstation to a domain controller.",
    "scenario": "<div class=\"scenario-text\"><p>Authentication logs show a privileged account authenticating from a previously compromised user workstation to a domain controller via NTLM.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Initial Access", "x": 15, "y": 40 },
      { "id": "node2", "label": "Lateral Movement", "x": 40, "y": 40 },
      { "id": "node3", "label": "Collection", "x": 65, "y": 40 },
      { "id": "node4", "label": "Exfiltration", "x": 85, "y": 40 }
    ],
    "correct": ["node2"],
    "explanation": "Using valid credentials to move between hosts is the definition of Lateral Movement in ATT&CK."
  },
  {
    "id": 141,
    "qid": "CS0-004-MOD3-141",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the forensic platform most appropriate for examining a full disk image to recover deleted files and construct a file-system timeline.",
    "scenario": "<div class=\"scenario-text\"><p>A disk image from a patient-zero host is available. The team needs to recover deleted staging files and build a MACB timeline.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Autopsy / The Sleuth Kit", "x": 30, "y": 35 },
      { "id": "node2", "label": "Volatility only", "x": 60, "y": 35 },
      { "id": "node3", "label": "Wireshark", "x": 30, "y": 65 },
      { "id": "node4", "label": "tcpdump", "x": 60, "y": 65 }
    ],
    "correct": ["node1"],
    "explanation": "Autopsy (built on The Sleuth Kit) is the standard open-source platform for disk-image analysis, deleted-file recovery, and timeline generation. Volatility is memory-focused; Wireshark and tcpdump are network tools."
  },
  {
    "id": 142,
    "qid": "CS0-004-MOD3-142",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the Kill Chain stage that is disrupted when an organization successfully blocks outbound connections to known C2 infrastructure.",
    "scenario": "<div class=\"scenario-text\"><p>Egress filtering has been updated to deny traffic to a set of confirmed attacker command-and-control servers.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Reconnaissance", "x": 15, "y": 40 },
      { "id": "node2", "label": "Weaponization", "x": 35, "y": 40 },
      { "id": "node3", "label": "Command and Control", "x": 55, "y": 40 },
      { "id": "node4", "label": "Actions on Objectives", "x": 80, "y": 40 }
    ],
    "correct": ["node3"],
    "explanation": "Blocking C2 communications directly interrupts the Command and Control stage of the Kill Chain, preventing the adversary from issuing further instructions or receiving data."
  },
  {
    "id": 143,
    "qid": "CS0-004-MOD3-143",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the memory-analysis artifact that most directly helps identify the exact command line used by a malicious process.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst needs to determine the full command line (including encoded arguments) of a suspicious PowerShell process found in a memory dump.</p></div>",
    "nodes": [
      { "id": "node1", "label": "cmdline / consoles plugin output", "x": 30, "y": 30 },
      { "id": "node2", "label": "filescan results only", "x": 60, "y": 30 },
      { "id": "node3", "label": "timeliner timestamps only", "x": 30, "y": 60 },
      { "id": "node4", "label": "clipboard contents only", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "The cmdline and consoles plugins recover the command-line arguments and console input/output buffers associated with processes—exactly what is required to see encoded PowerShell commands."
  },
  {
    "id": 144,
    "qid": "CS0-004-MOD3-144",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the Volatility command line that correctly lists network connections from a Windows memory image.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst has a memory dump named memdump.raw and needs to enumerate network connections to identify possible C2.</p></div>",
    "nodes": [
      { "id": "l1", "label": "volatility -f memdump.raw windows.netscan.NetScan" },
      { "id": "l2", "label": "volatility -f memdump.raw windows.filescan.FileScan" },
      { "id": "l3", "label": "volatility -f memdump.raw windows.timeliner.Timeliner" },
      { "id": "l4", "label": "volatility -f memdump.raw windows.clipboard.Clipboard" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "windows.netscan.NetScan (or the equivalent netscan plugin) is the correct Volatility 3 command for enumerating network connections. The other plugins target files, timelines, or clipboard data."
  },
  {
    "id": 145,
    "qid": "CS0-004-MOD3-145",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the log line that most clearly indicates a successful ATT&CK T1003.001 (LSASS Memory) credential dumping attempt.",
    "scenario": "<div class=\"scenario-text\"><p>Sysmon and Security logs are being reviewed for evidence of credential access techniques.</p></div>",
    "nodes": [
      { "id": "l1", "label": "Sysmon EventID 10: ProcessAccess – SourceImage: procdump.exe TargetImage: lsass.exe GrantedAccess: 0x1FFFFF" },
      { "id": "l2", "label": "EventID 4624: Logon Type 3 – Account: jdoe – Source: 10.10.10.50" },
      { "id": "l3", "label": "EventID 4688: New Process – notepad.exe" },
      { "id": "l4", "label": "EventID 5156: Allowed connection to 8.8.8.8:53" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "Sysmon Event ID 10 showing a tool such as procdump accessing lsass.exe with high privileges is a classic indicator of OS Credential Dumping (T1003.001)."
  },
  {
    "id": 146,
    "qid": "CS0-004-MOD3-146",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the chain-of-custody log entry that correctly documents the transfer of evidence between two authorized analysts.",
    "scenario": "<div class=\"scenario-text\"><p>Evidence item EVID-2026-0912 must be formally transferred from Analyst A to Analyst B for continued analysis.</p></div>",
    "nodes": [
      { "id": "l1", "label": "2026-09-05 14:22 UTC | From: A. Smith | To: B. Jones | Item: EVID-2026-0912 | Purpose: Continued memory analysis | Hash verified: Yes" },
      { "id": "l2", "label": "Transferred the disk to whoever was free" },
      { "id": "l3", "label": "Gave the USB to the intern for overnight analysis" },
      { "id": "l4", "label": "Hash matched yesterday, so no need to log today" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "A proper custody transfer entry records date/time, relinquishing and receiving parties, evidence identifier, purpose, and hash verification status."
  },
  {
    "id": 147,
    "qid": "CS0-004-MOD3-147",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the ATT&CK technique ID and name that correctly describes the creation of a malicious Windows service for persistence.",
    "scenario": "<div class=\"scenario-text\"><p>Registry and service artifacts show a new service pointing to attacker-controlled malware that starts automatically.</p></div>",
    "nodes": [
      { "id": "l1", "label": "T1543.003 – Create or Modify System Process: Windows Service" },
      { "id": "l2", "label": "T1566.001 – Phishing: Spearphishing Attachment" },
      { "id": "l3", "label": "T1041 – Exfiltration Over C2 Channel" },
      { "id": "l4", "label": "T1486 – Data Encrypted for Impact" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "T1543.003 specifically covers the creation or modification of Windows services for persistence or privilege escalation. The other techniques belong to different tactics."
  },
  {
    "id": 148,
    "qid": "CS0-004-MOD3-148",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the Volatility output snippet that most strongly indicates process hollowing.",
    "scenario": "<div class=\"scenario-text\"><p>An analyst is reviewing malfind and ldrmodules results for signs of process hollowing.</p></div>",
    "nodes": [
      { "id": "l1", "label": "Process svchost.exe has PE header in private memory region not backed by a file on disk; VAD protection PAGE_EXECUTE_READWRITE" },
      { "id": "l2", "label": "Process explorer.exe has expected modules loaded from System32 with matching signatures" },
      { "id": "l3", "label": "Process notepad.exe command line is empty but parent is explorer.exe" },
      { "id": "l4", "label": "Process lsass.exe has normal handle count and no injected regions" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "A system process containing a PE header in a private, executable, non-file-backed memory region with RWX permissions is a classic indicator of process hollowing or injection."
  },
  {
    "id": 149,
    "qid": "CS0-004-MOD3-149",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the Autopsy/Sleuth Kit feature or view that is most useful for reconstructing the sequence of file-system events around malware execution.",
    "scenario": "<div class=\"scenario-text\"><p>Analysts need to build a chronological view of file creation, modification, and access times related to a suspected dropper.</p></div>",
    "nodes": [
      { "id": "l1", "label": "Timeline view (MACB timestamps aggregated)" },
      { "id": "l2", "label": "Image Gallery view only" },
      { "id": "l3", "label": "Keyword search for the string \"password\"" },
      { "id": "l4", "label": "Hex viewer of a single unallocated cluster" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "Autopsy’s Timeline view aggregates Modified, Accessed, Changed, and Born timestamps across the file system, enabling efficient reconstruction of attacker activity sequences."
  },
  {
    "id": 150,
    "qid": "CS0-004-MOD3-150",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the command or procedure that correctly verifies the integrity of a forensic image before analysis begins.",
    "scenario": "<div class=\"scenario-text\"><p>A working copy of an evidence image has been created. The analyst must confirm it is identical to the original before starting examination.</p></div>",
    "nodes": [
      { "id": "l1", "label": "sha256sum evidence.E01 && compare result to the hash recorded at acquisition" },
      { "id": "l2", "label": "Open the image in a hex editor and visually inspect the first few bytes" },
      { "id": "l3", "label": "Copy the image again to a third location without hashing" },
      { "id": "l4", "label": "Assume the copy is good because the file size matches" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "Cryptographic hash verification against the value recorded at the time of original acquisition is the only reliable method to confirm that a working copy is bit-for-bit identical and unaltered."
 },
  {
    "id": 151,
    "qid": "CS0-004-MOD3-151",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "Which activity is the primary focus of the Post-Incident Activity phase according to NIST SP 800-61?",
    "scenario": "<div class=\"scenario-text\"><p>An incident involving ransomware has been fully contained, eradicated, and recovered. The IR team is now transitioning to formal closure activities.</p></div>",
    "options": [
      { "id": "a", "text": "Conducting a lessons-learned review and identifying process and control improvements" },
      { "id": "b", "text": "Acquiring new memory images from all previously compromised hosts" },
      { "id": "c", "text": "Immediately declaring the incident closed without documentation" },
      { "id": "d", "text": "Re-running the original attack against production systems for validation" }
    ],
    "correct": ["a"],
    "explanation": "Post-Incident Activity centers on reviewing the incident, capturing lessons learned, updating plans and detections, and driving continuous improvement. Re-acquiring evidence or re-executing attacks is unnecessary and risky once recovery is complete."
  },
  {
    "id": 152,
    "qid": "CS0-004-MOD3-152",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "What is the most important outcome of a formal lessons-learned meeting after a significant incident?",
    "scenario": "<div class=\"scenario-text\"><p>Stakeholders from IR, security engineering, IT operations, and business units have gathered to review a recent business-email-compromise incident.</p></div>",
    "options": [
      { "id": "a", "text": "Documented, actionable improvements to detection, response procedures, and controls" },
      { "id": "b", "text": "Assignment of personal blame to individual analysts" },
      { "id": "c", "text": "A decision to never update the IR plan again" },
      { "id": "d", "text": "Immediate public disclosure of every technical detail" }
    ],
    "correct": ["a"],
    "explanation": "The purpose of lessons-learned is to produce concrete, prioritized improvements that reduce the likelihood or impact of future incidents. Blame, stagnation, or uncontrolled disclosure undermine the process."
  },
  {
    "id": 153,
    "qid": "CS0-004-MOD3-153",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "Which metric is most useful for measuring the effectiveness of detection improvements after an incident?",
    "scenario": "<div class=\"scenario-text\"><p>Following a delayed detection of lateral movement, the detection engineering team has deployed new Sigma and EDR rules. Leadership wants to know whether the changes are effective.</p></div>",
    "options": [
      { "id": "a", "text": "Reduction in mean-time-to-detect (MTTD) for similar techniques in subsequent tests or incidents" },
      { "id": "b", "text": "Total number of emails sent by the IR team during the incident" },
      { "id": "c", "text": "Number of times the IR plan was printed" },
      { "id": "d", "text": "Subjective opinion of the most senior executive" }
    ],
    "correct": ["a"],
    "explanation": "MTTD (and related metrics such as mean-time-to-respond) directly measure whether new detections surface threats earlier. Volume of communication or anecdotal opinions do not quantify detection improvement."
  },
  {
    "id": 154,
    "qid": "CS0-004-MOD3-154",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "When updating the IR plan after an incident, which change is most directly justified by observed gaps?",
    "scenario": "<div class=\"scenario-text\"><p>During a recent incident the team discovered that after-hours escalation contacts were outdated and that no pre-approved containment options existed for cloud workloads.</p></div>",
    "options": [
      { "id": "a", "text": "Refresh contact trees and add cloud-specific containment playbooks" },
      { "id": "b", "text": "Remove all severity classifications from the plan" },
      { "id": "c", "text": "Delete the entire lessons-learned section" },
      { "id": "d", "text": "Mandate that every incident be handled solely by external consultants" }
    ],
    "correct": ["a"],
    "explanation": "Observed operational gaps (stale contacts, missing cloud playbooks) should drive targeted updates to the IR plan. Removing structure or outsourcing everything does not address the root deficiencies."
  },
  {
    "id": 155,
    "qid": "CS0-004-MOD3-155",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "single",
    "prompt": "Which practice best supports continuous improvement of the incident response capability?",
    "scenario": "<div class=\"scenario-text\"><p>A mature security organization wants to ensure that every incident contributes to long-term program strengthening rather than being treated as an isolated event.</p></div>",
    "options": [
      { "id": "a", "text": "Tracking remediation of lessons-learned action items and periodically testing updated playbooks" },
      { "id": "b", "text": "Archiving incident reports without ever reviewing them again" },
      { "id": "c", "text": "Avoiding any metrics so that performance cannot be measured" },
      { "id": "d", "text": "Reusing the exact same response steps regardless of new attacker TTPs" }
    ],
    "correct": ["a"],
    "explanation": "Closing the loop—tracking action-item completion and validating that updated procedures work—is the essence of continuous improvement. Ignoring reports, metrics, or evolving threats stagnates the program."
  },
  {
    "id": 156,
    "qid": "CS0-004-MOD3-156",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE activities that correctly belong in the Post-Incident Activity phase.",
    "scenario": "<div class=\"scenario-text\"><p>Recovery of a compromised cloud environment is complete. The IR team is organizing remaining work.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Facilitating a structured lessons-learned meeting" },
      { "id": "b", "text": "Updating detection rules and IR playbooks based on observed TTPs" },
      { "id": "c", "text": "Producing a final incident report with timeline, impact, and recommendations" },
      { "id": "d", "text": "Acquiring fresh memory dumps from systems that have already been rebuilt" },
      { "id": "e", "text": "Re-infecting a test system with the original malware for demonstration" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Lessons-learned, detection/playbook updates, and formal reporting are core Post-Incident activities. Re-acquiring evidence from clean systems or re-executing malware is unnecessary and potentially harmful."
  },
  {
    "id": 157,
    "qid": "CS0-004-MOD3-157",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE inputs that should be reviewed during a lessons-learned session.",
    "scenario": "<div class=\"scenario-text\"><p>The incident commander is preparing the agenda for a post-incident review of a multi-day intrusion.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Complete incident timeline with detection, containment, and recovery milestones" },
      { "id": "b", "text": "List of what worked well and what created friction or delay" },
      { "id": "c", "text": "Detection coverage gaps and false-negative observations" },
      { "id": "d", "text": "Personal performance ratings of every junior analyst" },
      { "id": "e", "text": "The lunch menu served during the incident" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Timeline accuracy, process effectiveness, and detection gaps are essential review inputs. Individual blame and irrelevant details distract from systemic improvement."
  },
  {
    "id": 158,
    "qid": "CS0-004-MOD3-158",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE metrics commonly tracked to evaluate IR program performance over time.",
    "scenario": "<div class=\"scenario-text\"><p>Leadership has requested a dashboard that shows whether the incident response capability is improving.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Mean-time-to-detect (MTTD)" },
      { "id": "b", "text": "Mean-time-to-respond / contain (MTTR)" },
      { "id": "c", "text": "Percentage of lessons-learned action items closed on schedule" },
      { "id": "d", "text": "Number of coffee cups consumed by the IR team" },
      { "id": "e", "text": "Total pages printed during each incident" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "MTTD, MTTR, and action-item completion rates are standard, actionable IR metrics. Consumption or printing volume do not measure response effectiveness."
  },
  {
    "id": 159,
    "qid": "CS0-004-MOD3-159",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE updates that should typically be made after a significant incident.",
    "scenario": "<div class=\"scenario-text\"><p>A sophisticated intrusion revealed several gaps in both technology and process. The team is prioritizing follow-on work.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "New or tuned detection content (Sigma, YARA, EDR, SIEM rules)" },
      { "id": "b", "text": "Revised IR playbooks reflecting newly observed attacker TTPs" },
      { "id": "c", "text": "Updated contact lists, escalation paths, and role assignments" },
      { "id": "d", "text": "Permanent removal of all logging to reduce storage costs" },
      { "id": "e", "text": "Deletion of the incident report to avoid future scrutiny" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Detection content, playbooks, and contact/role data are the most common and valuable post-incident updates. Removing logging or reports increases risk and destroys organizational memory."
  },
  {
    "id": 160,
    "qid": "CS0-004-MOD3-160",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE stakeholders who should normally participate in a formal lessons-learned meeting for a high-severity incident.",
    "scenario": "<div class=\"scenario-text\"><p>The incident commander is finalizing the invite list for the post-incident review.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Core IR and detection engineering team members" },
      { "id": "b", "text": "Representatives from IT operations and system owners" },
      { "id": "c", "text": "Legal, communications, and business leadership as appropriate" },
      { "id": "d", "text": "Every employee who received any email during the incident" },
      { "id": "e", "text": "External journalists and social-media influencers" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "IR/detection, operations/system owners, and relevant legal/comms/business stakeholders provide the necessary perspectives. Broad or external participation is usually inappropriate for detailed technical reviews."
  },
  {
    "id": 161,
    "qid": "CS0-004-MOD3-161",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE indicators that an organization’s post-incident process is immature.",
    "scenario": "<div class=\"scenario-text\"><p>An external assessment is evaluating the maturity of the IR program’s continuous-improvement practices.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Lessons-learned meetings are rarely held or produce no tracked action items" },
      { "id": "b", "text": "Detection rules and playbooks are never updated after incidents" },
      { "id": "c", "text": "Incident reports are written but never reviewed or used for training" },
      { "id": "d", "text": "Action items from previous incidents are tracked to completion and re-tested" },
      { "id": "e", "text": "Metrics such as MTTD and MTTR are trended over time" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Absence of structured review, failure to update defenses, and unused reports indicate immaturity. Tracking and metrics are signs of a healthier process."
  },
  {
    "id": 162,
    "qid": "CS0-004-MOD3-162",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE benefits of maintaining a well-documented final incident report.",
    "scenario": "<div class=\"scenario-text\"><p>Some team members question the value of spending time on a detailed after-action report.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Provides a durable institutional record for future reference and training" },
      { "id": "b", "text": "Supports regulatory, legal, or insurance requirements" },
      { "id": "c", "text": "Supplies concrete data for prioritization of detection and control improvements" },
      { "id": "d", "text": "Guarantees that the same incident can never occur again" },
      { "id": "e", "text": "Eliminates the need for any further monitoring" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Reports create organizational memory, satisfy external obligations, and drive improvement. They do not provide absolute prevention or remove the need for ongoing detection."
  },
  {
    "id": 163,
    "qid": "CS0-004-MOD3-163",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE practices that help ensure lessons-learned action items are actually implemented.",
    "scenario": "<div class=\"scenario-text\"><p>Previous incidents produced good recommendations that were never completed. The team wants to fix this pattern.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Assign clear owners and due dates to every action item" },
      { "id": "b", "text": "Track status in a visible backlog or ticketing system" },
      { "id": "c", "text": "Include action-item completion as a standing agenda item in security governance meetings" },
      { "id": "d", "text": "Store recommendations in an unshared personal notebook" },
      { "id": "e", "text": "Declare all action items complete at the end of the lessons-learned meeting" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Ownership, visibility, and governance oversight convert recommendations into completed work. Private notes and premature closure do not."
  },
  {
    "id": 164,
    "qid": "CS0-004-MOD3-164",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE elements that should appear in a high-quality final incident report.",
    "scenario": "<div class=\"scenario-text\"><p>A junior analyst is drafting the first formal incident report and needs guidance on required content.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Executive summary of impact and business outcome" },
      { "id": "b", "text": "Detailed timeline of attacker and responder activity" },
      { "id": "c", "text": "Root-cause analysis and prioritized recommendations" },
      { "id": "d", "text": "Complete raw packet captures attached as appendices" },
      { "id": "e", "text": "Personal opinions about unrelated company politics" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Executive summary, factual timeline, and actionable root-cause/recommendations are essential. Full raw data belongs in evidence storage; subjective politics do not belong in the report."
  },
  {
    "id": 165,
    "qid": "CS0-004-MOD3-165",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE ways that post-incident analysis can improve future detection capability.",
    "scenario": "<div class=\"scenario-text\"><p>The detection engineering team is extracting value from a recently closed incident.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Creating new Sigma/YARA/EDR rules for previously missed techniques" },
      { "id": "b", "text": "Tuning existing rules that generated excessive false positives or fired too late" },
      { "id": "c", "text": "Adding new data sources or log types that would have provided earlier visibility" },
      { "id": "d", "text": "Disabling all alerting to avoid future noise" },
      { "id": "e", "text": "Deleting historical telemetry related to the incident" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "New rules, tuning, and expanded telemetry directly strengthen detection. Disabling alerts or deleting data weakens the program."
  },
  {
    "id": 166,
    "qid": "CS0-004-MOD3-166",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE reasons to conduct tabletop or functional exercises after updating the IR plan.",
    "scenario": "<div class=\"scenario-text\"><p>Significant changes have been made to playbooks and contact procedures following a major incident.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Validate that the updated procedures are understood and executable" },
      { "id": "b", "text": "Identify remaining gaps or friction points before a real incident occurs" },
      { "id": "c", "text": "Train new team members on the revised process" },
      { "id": "d", "text": "Satisfy a compliance checkbox without any actual practice" },
      { "id": "e", "text": "Avoid ever testing the plan again" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Exercises confirm usability, surface residual issues, and build muscle memory. Checkbox compliance or permanent avoidance of testing undermines readiness."
  },
  {
    "id": 167,
    "qid": "CS0-004-MOD3-167",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE artifacts that should be retained as part of the permanent incident record.",
    "scenario": "<div class=\"scenario-text\"><p>The IR team is archiving materials after formal closure of an incident that may have regulatory implications.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Final incident report and executive summary" },
      { "id": "b", "text": "Lessons-learned notes and tracked action-item status" },
      { "id": "c", "text": "Evidence inventory and chain-of-custody documentation" },
      { "id": "d", "text": "Personal chat messages containing speculation and rumors" },
      { "id": "e", "text": "Temporary working notes that were never verified" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Formal reports, lessons-learned records, and evidence custody documentation form the authoritative permanent record. Unverified speculation and transient notes should not be retained as official artifacts."
  },
  {
    "id": 168,
    "qid": "CS0-004-MOD3-168",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE continuous-improvement activities that should occur on a recurring schedule, independent of any specific incident.",
    "scenario": "<div class=\"scenario-text\"><p>The IR program lead is building an annual calendar of proactive readiness activities.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Periodic review and update of the IR plan and contact lists" },
      { "id": "b", "text": "Scheduled tabletop or simulation exercises" },
      { "id": "c", "text": "Regular testing of detection content and forensic toolkits" },
      { "id": "d", "text": "Waiting until after a breach to examine the IR plan" },
      { "id": "e", "text": "Never measuring MTTD or MTTR" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Plan maintenance, exercises, and tool/detection testing are foundational continuous-improvement practices. Reactive-only or metric-free approaches leave the program unprepared."
  },
  {
    "id": 169,
    "qid": "CS0-004-MOD3-169",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE questions that should be answered during root-cause analysis in the post-incident phase.",
    "scenario": "<div class=\"scenario-text\"><p>The team is conducting a structured root-cause review to prevent recurrence of a similar incident.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "What was the initial access vector and why was it possible?" },
      { "id": "b", "text": "Which detection opportunities were missed and why?" },
      { "id": "c", "text": "What control or process failures allowed the attacker to achieve their objectives?" },
      { "id": "d", "text": "Which analyst should be disciplined for the incident?" },
      { "id": "e", "text": "What was the weather on the day the incident began?" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Root-cause analysis focuses on access vectors, detection gaps, and systemic control/process failures. Personal blame and irrelevant external factors do not drive improvement."
  },
  {
    "id": 170,
    "qid": "CS0-004-MOD3-170",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "multiselect",
    "prompt": "Select THREE ways to measure whether post-incident improvements have been effective.",
    "scenario": "<div class=\"scenario-text\"><p>Several detection and process changes were implemented after a major incident. Leadership wants evidence that the changes worked.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Purple-team or adversary-emulation tests that replay the original TTPs" },
      { "id": "b", "text": "Observed reduction in MTTD/MTTR for similar techniques" },
      { "id": "c", "text": "Successful completion and verification of all lessons-learned action items" },
      { "id": "d", "text": "Number of times the IR plan was mentioned in meetings" },
      { "id": "e", "text": "Subjective feeling that the team is now “better prepared”" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Adversary emulation, quantitative metric improvement, and verified action-item closure provide objective evidence of effectiveness. Mentions and feelings are not reliable measures."
  },
  {
    "id": 171,
    "qid": "CS0-004-MOD3-171",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each post-incident activity to its primary purpose.",
    "scenario": "<div class=\"scenario-text\"><p>The IR team is organizing the various workstreams that occur after recovery is complete.</p></div>",
    "items": [
      { "id": "i1", "text": "Lessons-learned meeting" },
      { "id": "i2", "text": "Detection rule and playbook updates" },
      { "id": "i3", "text": "Final incident report" },
      { "id": "i4", "text": "Action-item tracking and closure" }
    ],
    "zones": [
      { "id": "z1", "label": "Identify what worked and what needs improvement" },
      { "id": "z2", "label": "Strengthen future detection and response capability" },
      { "id": "z3", "label": "Create durable institutional record and support external obligations" },
      { "id": "z4", "label": "Ensure recommended changes are actually implemented" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Each activity serves a distinct and necessary purpose in turning an incident into lasting improvement."
  },
  {
    "id": 172,
    "qid": "CS0-004-MOD3-172",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each metric to the aspect of IR performance it primarily measures.",
    "scenario": "<div class=\"scenario-text\"><p>A metrics dashboard is being designed for the IR program.</p></div>",
    "items": [
      { "id": "i1", "text": "Mean-time-to-detect (MTTD)" },
      { "id": "i2", "text": "Mean-time-to-contain (MTTC)" },
      { "id": "i3", "text": "Percentage of action items closed on time" },
      { "id": "i4", "text": "Number of successful tabletop exercises completed" }
    ],
    "zones": [
      { "id": "z1", "label": "Speed of threat identification" },
      { "id": "z2", "label": "Speed of limiting attacker activity" },
      { "id": "z3", "label": "Effectiveness of continuous-improvement process" },
      { "id": "z4", "label": "Readiness and training maturity" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Each metric aligns to a specific dimension of IR capability that leadership and practitioners care about."
  },
  {
    "id": 173,
    "qid": "CS0-004-MOD3-173",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each post-incident deliverable to the audience that primarily consumes it.",
    "scenario": "<div class=\"scenario-text\"><p>Different stakeholders require different levels of detail after an incident.</p></div>",
    "items": [
      { "id": "i1", "text": "Executive summary of impact and residual risk" },
      { "id": "i2", "text": "Detailed technical timeline and IOC list" },
      { "id": "i3", "text": "Prioritized detection and control recommendations" },
      { "id": "i4", "text": "Updated contact tree and escalation procedures" }
    ],
    "zones": [
      { "id": "z1", "label": "Senior leadership / board" },
      { "id": "z2", "label": "IR and detection engineering teams" },
      { "id": "z3", "label": "Security architecture and engineering" },
      { "id": "z4", "label": "All IR participants and on-call staff" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Tailoring content and detail to the needs of each audience increases the likelihood that the information will be used."
  },
  {
    "id": 174,
    "qid": "CS0-004-MOD3-174",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each continuous-improvement activity to the frequency at which it should typically occur.",
    "scenario": "<div class=\"scenario-text\"><p>The IR program calendar is being populated with recurring readiness tasks.</p></div>",
    "items": [
      { "id": "i1", "text": "Full IR plan review and contact-list validation" },
      { "id": "i2", "text": "Tabletop or functional exercise" },
      { "id": "i3", "text": "Detection content and forensic toolkit testing" },
      { "id": "i4", "text": "Review of open lessons-learned action items" }
    ],
    "zones": [
      { "id": "z1", "label": "At least annually (or after major organizational change)" },
      { "id": "z2", "label": "Quarterly or semi-annually" },
      { "id": "z3", "label": "Monthly or after significant detection changes" },
      { "id": "z4", "label": "Standing agenda item in regular governance meetings" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Different activities have different natural cadences that balance thoroughness with operational load."
  },
  {
    "id": 175,
    "qid": "CS0-004-MOD3-175",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each root-cause finding to the most appropriate improvement category.",
    "scenario": "<div class=\"scenario-text\"><p>Root-cause analysis has produced several findings that must be turned into concrete work.</p></div>",
    "items": [
      { "id": "i1", "text": "Phishing email reached users because attachment sandboxing was disabled" },
      { "id": "i2", "text": "Lateral movement went undetected for days due to missing process-creation logging" },
      { "id": "i3", "text": "Containment was delayed because after-hours contacts were outdated" },
      { "id": "i4", "text": "Recovery took longer than necessary because gold images were not tested" }
    ],
    "zones": [
      { "id": "z1", "label": "Preventive control improvement" },
      { "id": "z2", "label": "Detection / visibility improvement" },
      { "id": "z3", "label": "Process / communication improvement" },
      { "id": "z4", "label": "Recovery readiness improvement" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Each finding maps to a distinct improvement domain that can be owned and tracked separately."
  },
  {
    "id": 176,
    "qid": "CS0-004-MOD3-176",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each post-incident role to its primary responsibility.",
    "scenario": "<div class=\"scenario-text\"><p>Clear ownership is required to move from recommendations to completed improvements.</p></div>",
    "items": [
      { "id": "i1", "text": "Incident commander / IR lead" },
      { "id": "i2", "text": "Detection engineering" },
      { "id": "i3", "text": "Security architecture / engineering" },
      { "id": "i4", "text": "IT operations / system owners" }
    ],
    "zones": [
      { "id": "z1", "label": "Drive the lessons-learned process and track overall action-item closure" },
      { "id": "z2", "label": "Implement and test new or tuned detection content" },
      { "id": "z3", "label": "Design and deploy longer-term control improvements" },
      { "id": "z4", "label": "Execute recovery validation and maintain gold images / backups" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Assigning clear ownership by function ensures that each class of improvement is advanced by the team best positioned to deliver it."
  },
  {
    "id": 177,
    "qid": "CS0-004-MOD3-177",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each type of post-incident documentation to its retention consideration.",
    "scenario": "<div class=\"scenario-text\"><p>Evidence and report retention policies are being aligned with legal and operational needs.</p></div>",
    "items": [
      { "id": "i1", "text": "Final incident report and executive summary" },
      { "id": "i2", "text": "Forensic images and raw evidence" },
      { "id": "i3", "text": "Lessons-learned action-item tracker" },
      { "id": "i4", "text": "Temporary analyst working notes" }
    ],
    "zones": [
      { "id": "z1", "label": "Retain according to organizational policy and regulatory requirements (often years)" },
      { "id": "z2", "label": "Retain for the duration required by legal hold or policy, then securely destroy" },
      { "id": "z3", "label": "Retain until all actions are closed and verified, then archive summary" },
      { "id": "z4", "label": "Discard after incorporation into formal report or after short retention period" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Different classes of material have different legal, operational, and storage lifetimes that must be respected."
  },
  {
    "id": 178,
    "qid": "CS0-004-MOD3-178",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each improvement initiative to the primary risk it reduces.",
    "scenario": "<div class=\"scenario-text\"><p>Post-incident recommendations are being prioritized by the risk they address.</p></div>",
    "items": [
      { "id": "i1", "text": "Deploy additional process-creation and PowerShell logging" },
      { "id": "i2", "text": "Implement email attachment sandboxing and URL rewriting" },
      { "id": "i3", "text": "Create and test cloud-workload isolation playbooks" },
      { "id": "i4", "text": "Establish a formal gold-image validation cadence" }
    ],
    "zones": [
      { "id": "z1", "label": "Delayed or missed detection of execution and lateral movement" },
      { "id": "z2", "label": "Successful phishing-based initial access" },
      { "id": "z3", "label": "Slow or ad-hoc containment of cloud resources" },
      { "id": "z4", "label": "Prolonged recovery and uncertainty about system cleanliness" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Each initiative is designed to close a specific gap that was exposed during the incident."
  },
  {
    "id": 179,
    "qid": "CS0-004-MOD3-179",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each lessons-learned output to the follow-on activity it should trigger.",
    "scenario": "<div class=\"scenario-text\"><p>The lessons-learned meeting has produced several concrete outputs that must be acted upon.</p></div>",
    "items": [
      { "id": "i1", "text": "List of missing or late detections" },
      { "id": "i2", "text": "Identification of outdated contact information" },
      { "id": "i3", "text": "Discovery that gold images were untested" },
      { "id": "i4", "text": "Recognition that containment decisions lacked pre-approval" }
    ],
    "zones": [
      { "id": "z1", "label": "Detection engineering backlog for new/tuned rules" },
      { "id": "z2", "label": "Immediate update of IR plan contact tree" },
      { "id": "z3", "label": "Recovery readiness project to validate and seal images" },
      { "id": "z4", "label": "Policy and playbook update for pre-approved containment options" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Each finding has a natural owner and next action that converts insight into reduced future risk."
  },
  {
    "id": 180,
    "qid": "CS0-004-MOD3-180",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each post-incident communication product to its intended purpose.",
    "scenario": "<div class=\"scenario-text\"><p>Different communication artifacts serve different needs after an incident is closed.</p></div>",
    "items": [
      { "id": "i1", "text": "Board / executive briefing" },
      { "id": "i2", "text": "Technical after-action report" },
      { "id": "i3", "text": "Updated IR playbook and runbooks" },
      { "id": "i4", "text": "Detection engineering tickets / backlog items" }
    ],
    "zones": [
      { "id": "z1", "label": "Inform leadership of impact, residual risk, and strategic recommendations" },
      { "id": "z2", "label": "Provide full technical detail for IR and engineering teams" },
      { "id": "z3", "label": "Operationalize improved response procedures for future incidents" },
      { "id": "z4", "label": "Drive concrete detection content creation and testing" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Matching the product to its purpose ensures the right information reaches the right people in the right form."
  },
  {
    "id": 181,
    "qid": "CS0-004-MOD3-181",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each maturity indicator to the corresponding IR program characteristic.",
    "scenario": "<div class=\"scenario-text\"><p>An assessment is scoring the maturity of the organization’s post-incident practices.</p></div>",
    "items": [
      { "id": "i1", "text": "Lessons-learned action items are tracked to verified completion" },
      { "id": "i2", "text": "MTTD and MTTR are measured and trended" },
      { "id": "i3", "text": "Playbooks and detections are updated after every significant incident" },
      { "id": "i4", "text": "Tabletop exercises are conducted on a regular cadence" }
    ],
    "zones": [
      { "id": "z1", "label": "Closed-loop continuous improvement" },
      { "id": "z2", "label": "Quantitative performance management" },
      { "id": "z3", "label": "Adaptive detection and response content" },
      { "id": "z4", "label": "Proactive readiness validation" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "These practices are hallmarks of a mature IR program that learns and improves over time."
  },
  {
    "id": 182,
    "qid": "CS0-004-MOD3-182",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each post-incident risk to the control that best mitigates it.",
    "scenario": "<div class=\"scenario-text\"><p>Common failure modes after incidents are being mapped to preventive practices.</p></div>",
    "items": [
      { "id": "i1", "text": "Recommendations are made but never implemented" },
      { "id": "i2", "text": "The same detection gaps allow a repeat of the attack" },
      { "id": "i3", "text": "Contact information is stale when the next incident occurs" },
      { "id": "i4", "text": "Recovery procedures fail under pressure because they were never tested" }
    ],
    "zones": [
      { "id": "z1", "label": "Formal action-item tracking with owners and due dates" },
      { "id": "z2", "label": "Mandatory detection content updates and purple-team validation" },
      { "id": "z3", "label": "Scheduled contact-tree reviews and after-hours testing" },
      { "id": "z4", "label": "Regular recovery exercises and gold-image validation" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Each risk is directly addressed by a corresponding process or technical control that should be institutionalized."
  },
  {
    "id": 183,
    "qid": "CS0-004-MOD3-183",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each stakeholder need to the post-incident artifact that satisfies it.",
    "scenario": "<div class=\"scenario-text\"><p>Different consumers of post-incident information require different artifacts.</p></div>",
    "items": [
      { "id": "i1", "text": "Board wants residual risk and strategic recommendations" },
      { "id": "i2", "text": "Detection engineers need precise TTPs and missed log sources" },
      { "id": "i3", "text": "Legal requires a defensible record of actions and decisions" },
      { "id": "i4", "text": "On-call responders need updated procedures and contacts" }
    ],
    "zones": [
      { "id": "z1", "label": "Executive summary / board briefing" },
      { "id": "z2", "label": "Technical appendix with ATT&CK mapping and data-source gaps" },
      { "id": "z3", "label": "Final incident report with timeline and decision log" },
      { "id": "z4", "label": "Revised IR plan, playbooks, and contact tree" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Matching artifact to stakeholder need maximizes the value extracted from the post-incident process."
  },
  {
    "id": 184,
    "qid": "CS0-004-MOD3-184",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each continuous-improvement principle to its practical application in IR.",
    "scenario": "<div class=\"scenario-text\"><p>The IR program is being aligned with broader organizational continuous-improvement practices.</p></div>",
    "items": [
      { "id": "i1", "text": "Measure what matters" },
      { "id": "i2", "text": "Close the loop" },
      { "id": "i3", "text": "Learn from every event" },
      { "id": "i4", "text": "Test before you need it" }
    ],
    "zones": [
      { "id": "z1", "label": "Track MTTD, MTTR, and action-item completion rates" },
      { "id": "z2", "label": "Verify that every recommendation is implemented and validated" },
      { "id": "z3", "label": "Conduct structured lessons-learned after every significant incident" },
      { "id": "z4", "label": "Run regular tabletop and recovery exercises" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "These principles translate directly into concrete, observable IR program behaviors."
  },
  {
    "id": 185,
    "qid": "CS0-004-MOD3-185",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "dragdrop",
    "prompt": "Match each post-incident timeline milestone to the activity that should be complete by that point.",
    "scenario": "<div class=\"scenario-text\"><p>A standard post-incident timeline is used to ensure timely closure and improvement.</p></div>",
    "items": [
      { "id": "i1", "text": "Within 5 business days of recovery" },
      { "id": "i2", "text": "Within 10–15 business days of recovery" },
      { "id": "i3", "text": "Within 30 days of recovery" },
      { "id": "i4", "text": "Ongoing / standing process" }
    ],
    "zones": [
      { "id": "z1", "label": "Hold lessons-learned meeting and capture initial action items" },
      { "id": "z2", "label": "Publish final incident report and update critical playbooks" },
      { "id": "z3", "label": "Complete high-priority detection and control changes" },
      { "id": "z4", "label": "Track remaining action items and trend IR metrics" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "Timely milestones keep momentum and ensure that learning is converted into reduced risk before institutional memory fades."
  },
  {
    "id": 186,
    "qid": "CS0-004-MOD3-186",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the post-incident activity that should be performed first after recovery is confirmed complete.",
    "scenario": "<div class=\"scenario-text\"><p>Systems have been validated as clean and returned to production. The IR team must now begin formal closure work.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Schedule and conduct lessons-learned meeting", "x": 30, "y": 30 },
      { "id": "node2", "label": "Delete all evidence immediately", "x": 60, "y": 30 },
      { "id": "node3", "label": "Re-compromise a production host for testing", "x": 30, "y": 60 },
      { "id": "node4", "label": "Announce that no further work is required", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "The lessons-learned meeting is the formal starting point for capturing what happened, what worked, and what must improve. Premature evidence destruction or further compromise is inappropriate."
  },
  {
    "id": 187,
    "qid": "CS0-004-MOD3-187",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the metric that best indicates whether detection improvements made after an incident are effective.",
    "scenario": "<div class=\"scenario-text\"><p>New detection rules were deployed following a delayed identification of credential dumping. Leadership wants objective evidence of improvement.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Mean-time-to-detect (MTTD) for similar techniques", "x": 30, "y": 35 },
      { "id": "node2", "label": "Number of emails exchanged during the incident", "x": 60, "y": 35 },
      { "id": "node3", "label": "Pages of the final report", "x": 30, "y": 65 },
      { "id": "node4", "label": "Subjective team morale score", "x": 60, "y": 65 }
    ],
    "correct": ["node1"],
    "explanation": "MTTD directly measures whether new detections surface the same or similar techniques more quickly—the core goal of post-incident detection improvement."
  },
  {
    "id": 188,
    "qid": "CS0-004-MOD3-188",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the stakeholder group that should receive the executive summary of a high-severity incident.",
    "scenario": "<div class=\"scenario-text\"><p>The final incident report package is being distributed. Different audiences require different levels of detail.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Senior leadership / board", "x": 25, "y": 40 },
      { "id": "node2", "label": "Every employee in the company", "x": 55, "y": 40 },
      { "id": "node3", "label": "External media outlets", "x": 25, "y": 70 },
      { "id": "node4", "label": "Random internet forums", "x": 55, "y": 70 }
    ],
    "correct": ["node1"],
    "explanation": "The executive summary is specifically written for senior leadership and the board so they can understand impact, residual risk, and strategic recommendations without needing full technical detail."
  },
  {
    "id": 189,
    "qid": "CS0-004-MOD3-189",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the activity that most directly converts lessons-learned findings into reduced future risk.",
    "scenario": "<div class=\"scenario-text\"><p>A thorough lessons-learned meeting has produced a list of prioritized recommendations. The next critical step must be taken.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Assign owners, due dates, and track action items to verified completion", "x": 40, "y": 30 },
      { "id": "node2", "label": "File the recommendations and take no further action", "x": 20, "y": 60 },
      { "id": "node3", "label": "Discuss the findings only in private conversations", "x": 60, "y": 60 },
      { "id": "node4", "label": "Declare the incident closed with no follow-up" }
    ],
    "correct": ["node1"],
    "explanation": "Without assigned ownership, deadlines, and verification of completion, lessons-learned remain theoretical. Closed-loop tracking is what turns insight into actual risk reduction."
  },
  {
    "id": 190,
    "qid": "CS0-004-MOD3-190",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the practice that best demonstrates a mature continuous-improvement culture in IR.",
    "scenario": "<div class=\"scenario-text\"><p>An external assessor is looking for evidence that the organization systematically learns from incidents.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Action items from every significant incident are tracked, completed, and re-tested", "x": 40, "y": 30 },
      { "id": "node2", "label": "Incidents are closed as soon as systems are back online", "x": 20, "y": 60 },
      { "id": "node3", "label": "No metrics are collected so that performance cannot be criticized", "x": 60, "y": 60 },
      { "id": "node4", "label": "The same playbooks are used forever without revision" }
    ],
    "correct": ["node1"],
    "explanation": "A mature program treats every incident as fuel for improvement: findings are captured, owned, completed, and validated. Closing early, avoiding metrics, or freezing playbooks indicates immaturity."
  },
  {
    "id": 191,
    "qid": "CS0-004-MOD3-191",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the post-incident artifact that should be used to train new IR team members on real organizational threats.",
    "scenario": "<div class=\"scenario-text\"><p>The IR lead wants to incorporate recent incidents into the onboarding and ongoing training curriculum.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Sanitized final incident reports and lessons-learned summaries", "x": 35, "y": 30 },
      { "id": "node2", "label": "Raw, unredacted forensic images containing sensitive data", "x": 65, "y": 30 },
      { "id": "node3", "label": "Personal chat logs full of speculation", "x": 35, "y": 60 },
      { "id": "node4", "label": "Unverified rumors from social media" }
    ],
    "correct": ["node1"],
    "explanation": "Sanitized reports and lessons-learned summaries provide realistic, organization-specific training material while protecting sensitive details and avoiding the spread of unverified information."
  },
  {
    "id": 192,
    "qid": "CS0-004-MOD3-192",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the activity that should occur on a recurring schedule even when no incidents have taken place.",
    "scenario": "<div class=\"scenario-text\"><p>The IR program lead is building a proactive readiness calendar that does not depend on the occurrence of real incidents.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Scheduled tabletop exercises and IR plan reviews", "x": 35, "y": 30 },
      { "id": "node2", "label": "Waiting passively for the next breach", "x": 65, "y": 30 },
      { "id": "node3", "label": "Deleting old incident reports to free storage", "x": 35, "y": 60 },
      { "id": "node4", "label": "Disabling all detection rules to reduce noise" }
    ],
    "correct": ["node1"],
    "explanation": "Regular exercises and plan reviews keep skills sharp and procedures current regardless of whether new incidents occur. Passive waiting or destructive actions degrade readiness."
  },
  {
    "id": 193,
    "qid": "CS0-004-MOD3-193",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the outcome that indicates a successful post-incident improvement cycle.",
    "scenario": "<div class=\"scenario-text\"><p>Several months after a major incident, the team is evaluating whether the subsequent changes produced real benefit.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Purple-team test of the original TTPs is now detected and contained significantly faster", "x": 40, "y": 30 },
      { "id": "node2", "label": "The same attack would still succeed with identical dwell time", "x": 20, "y": 60 },
      { "id": "node3", "label": "No one remembers what the recommendations were", "x": 60, "y": 60 },
      { "id": "node4", "label": "Action items remain open with no owners" }
    ],
    "correct": ["node1"],
    "explanation": "Objective validation through adversary emulation that demonstrates faster detection and containment is the strongest evidence that post-incident improvements were effective."
  },
  {
    "id": 194,
    "qid": "CS0-004-MOD3-194",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the statement that correctly belongs in the “Recommendations” section of a final incident report.",
    "scenario": "<div class=\"scenario-text\"><p>The analyst is drafting the recommendations portion of the after-action report.</p></div>",
    "nodes": [
      { "id": "l1", "label": "Implement process-creation logging on all endpoints and deploy a Sigma rule for the observed LSASS access pattern within 30 days." },
      { "id": "l2", "label": "The attacker was probably a nation-state actor." },
      { "id": "l3", "label": "Everything is fine now; no changes are required." },
      { "id": "l4", "label": "Someone should be fired for this incident." }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "Effective recommendations are specific, actionable, owned, and time-bound. Speculation, complacency, and blame do not drive improvement."
  },
  {
    "id": 195,
    "qid": "CS0-004-MOD3-195",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the metric definition that correctly describes mean-time-to-detect (MTTD).",
    "scenario": "<div class=\"scenario-text\"><p>The metrics dashboard is being configured and the team must agree on precise definitions.</p></div>",
    "nodes": [
      { "id": "l1", "label": "Elapsed time from the first attacker action (or first available telemetry) until the organization becomes aware of the incident" },
      { "id": "l2", "label": "Total time the IR team spent in meetings" },
      { "id": "l3", "label": "Number of hours the CEO was briefed" },
      { "id": "l4", "label": "Time required to write the final report" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "MTTD measures how long a threat was active before the organization detected it—the critical window during which damage can accumulate unnoticed."
  },
  {
    "id": 196,
    "qid": "CS0-004-MOD3-196",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the action-item entry that is correctly formed for tracking purposes.",
    "scenario": "<div class=\"scenario-text\"><p>Lessons-learned action items are being entered into the tracking system.</p></div>",
    "nodes": [
      { "id": "l1", "label": "Owner: Detection Engineering | Due: 2026-10-15 | Action: Deploy and test Sigma rule for T1003.001 LSASS access | Status: Open | Verification: Purple-team test" },
      { "id": "l2", "label": "Someone should look at logging someday" },
      { "id": "l3", "label": "Fix everything that went wrong" },
      { "id": "l4", "label": "Action item created with no owner or due date" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "A well-formed action item has a clear owner, due date, specific deliverable, current status, and defined verification method."
  },
  {
    "id": 197,
    "qid": "CS0-004-MOD3-197",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the statement that should appear in the “What Went Well” section of a lessons-learned summary.",
    "scenario": "<div class=\"scenario-text\"><p>The facilitator is capturing both strengths and weaknesses during the post-incident review.</p></div>",
    "nodes": [
      { "id": "l1", "label": "EDR network isolation was executed within 12 minutes of confirmed C2 and stopped further beaconing." },
      { "id": "l2", "label": "No one knew who to call after hours." },
      { "id": "l3", "label": "Gold images had not been tested in over a year." },
      { "id": "l4", "label": "Detection of the initial phishing email failed completely." }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "The “What Went Well” section captures effective practices so they can be reinforced and standardized. The other statements describe problems that belong in the improvement section."
  },
  {
    "id": 198,
    "qid": "CS0-004-MOD3-198",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the verification method that best confirms a detection improvement is effective.",
    "scenario": "<div class=\"scenario-text\"><p>A new set of detection rules has been deployed in response to lessons learned. The team must prove they work.</p></div>",
    "nodes": [
      { "id": "l1", "label": "Adversary-emulation / purple-team exercise that replays the original TTPs and measures detection and response times" },
      { "id": "l2", "label": "Assuming the rules work because they were written by a senior analyst" },
      { "id": "l3", "label": "Counting the number of times the rules are mentioned in meetings" },
      { "id": "l4", "label": "Waiting for the next real incident to see what happens" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "Controlled adversary emulation provides objective, repeatable evidence that the new detections fire correctly and that response times have improved."
  },
  {
    "id": 199,
    "qid": "CS0-004-MOD3-199",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the entry that correctly belongs in the permanent incident archive.",
    "scenario": "<div class=\"scenario-text\"><p>Materials are being selected for long-term retention after incident closure.</p></div>",
    "nodes": [
      { "id": "l1", "label": "Final incident report, lessons-learned summary, evidence inventory, and chain-of-custody log" },
      { "id": "l2", "label": "Unredacted personal chat messages containing speculation" },
      { "id": "l3", "label": "Temporary whiteboard photos with incomplete notes" },
      { "id": "l4", "label": "Draft emails that were never sent" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "The permanent archive should contain the authoritative, reviewed artifacts: the final report, lessons-learned record, evidence inventory, and custody documentation."
  },
  {
    "id": 200,
    "qid": "CS0-004-MOD3-200",
    "moduleId": "mod3",
    "module": "Incident Response and Management",
    "domain": "CompTIA CySA+ CS0-004 Domain 3",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the practice that most strongly indicates the IR program has achieved closed-loop continuous improvement.",
    "scenario": "<div class=\"scenario-text\"><p>An assessor is looking for evidence that post-incident learning is systematically converted into reduced risk.</p></div>",
    "nodes": [
      { "id": "l1", "label": "Every significant incident produces tracked action items that are completed, verified, and reflected in updated detections, playbooks, or controls" },
      { "id": "l2", "label": "Lessons-learned meetings are held but produce no written actions" },
      { "id": "l3", "label": "Recommendations are made but never assigned or followed up" },
      { "id": "l4", "label": "The IR plan has not been updated in three years" }
    ],
    "correct": ["l1"],
    "selectCount": 1,
    "explanation": "Closed-loop improvement requires that findings generate owned, completed, and validated changes to the organization’s defensive and response posture. Anything less leaves the program static."
  }
];
export default questions;
