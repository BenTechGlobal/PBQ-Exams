export const PRODUCT_CODE = "SC-500";
export const questions = [
  // ========== SUBDOMAIN 1: Posture Management (IDs 1-40) ==========
  // Single Choice (4)
  {
    id: 1,
    qid: "SC-500-MOD1-001",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "An architect must ensure continuous compliance evaluation across hybrid workloads using Microsoft Defender for Cloud. Which feature should be enabled to perform agentless vulnerability scanning?",
    scenario: "<div class=\"scenario-text\"><p>An organization is deploying Azure VMs and AWS EC2 instances. The security team requires agentless vulnerability scanning across all compute resources without impacting OS performance.</p></div>",
    options: [
      { id: "a", text: "Defender CSPM (Cloud Security Posture Management)" },
      { id: "b", text: "Basic Cloud Defender Plan" },
      { id: "c", text: "Log Analytics Extension" },
      { id: "d", text: "Azure Monitor Agent (AMA)" }
    ],
    correct: ["a"],
    explanation: "Defender CSPM provides advanced posture management capabilities, including agentless scanning for VMs and multi-cloud workloads. Options C and D require agent installation and do not provide agentless vulnerability assessment."
  },
  {
    id: 2,
    qid: "SC-500-MOD1-002",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "Which Microsoft Defender for Cloud component continuously evaluates Azure resources against regulatory standards such as CIS, NIST, and PCI-DSS?",
    scenario: "<div class=\"scenario-text\"><p>A financial services company must demonstrate continuous regulatory compliance for its Azure landing zones. Auditors require automated assessment against industry benchmarks without manual evidence collection.</p></div>",
    options: [
      { id: "a", text: "Secure Score" },
      { id: "b", text: "Regulatory Compliance dashboard" },
      { id: "c", text: "Just-in-Time VM Access" },
      { id: "d", text: "File Integrity Monitoring" }
    ],
    correct: ["b"],
    explanation: "The Regulatory Compliance dashboard in Defender for Cloud maps assessments to standards such as CIS, NIST 800-53, PCI-DSS, and ISO 27001. Secure Score is a high-level posture metric, while JIT and FIM address different threat protection scenarios."
  },
  {
    id: 3,
    qid: "SC-500-MOD1-003",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "What is the primary purpose of Microsoft Defender CSPM's attack path analysis feature?",
    scenario: "<div class=\"scenario-text\"><p>A security architect needs to identify the most critical risk combinations that could allow an attacker to move laterally from an internet-exposed resource to sensitive data stores.</p></div>",
    options: [
      { id: "a", text: "Generate KQL queries for Sentinel" },
      { id: "b", text: "Visualize multi-step attack paths based on posture findings" },
      { id: "c", text: "Enforce network isolation via NSGs" },
      { id: "d", text: "Automatically remediate all high-severity recommendations" }
    ],
    correct: ["b"],
    explanation: "Attack path analysis in Defender CSPM correlates posture misconfigurations, vulnerabilities, and identity risks into visual paths showing how an attacker could reach high-value assets. It does not generate Sentinel queries, enforce NSGs, or auto-remediate."
  },
  {
    id: 4,
    qid: "SC-500-MOD1-004",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "Which Defender for Cloud plan is required to enable agentless scanning for container images in Azure Container Registry?",
    scenario: "<div class=\"scenario-text\"><p>A DevSecOps team wants continuous vulnerability assessment of container images stored in ACR without deploying agents into running clusters.</p></div>",
    options: [
      { id: "a", text: "Defender for Containers" },
      { id: "b", text: "Defender for Servers Plan 1" },
      { id: "c", text: "Defender for App Service" },
      { id: "d", text: "Defender for Key Vault" }
    ],
    correct: ["a"],
    explanation: "Defender for Containers provides agentless vulnerability assessment of images in ACR and runtime protection. Other plans target different resource types and do not cover container image scanning."
  },
  // Multi-Select (12)
  {
    id: 5,
    qid: "SC-500-MOD1-005",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE capabilities that are exclusively available when the Defender CSPM plan is enabled.",
    scenario: "<div class=\"scenario-text\"><p>An organization currently uses the free tier of Microsoft Defender for Cloud and wants to upgrade to gain advanced posture management features.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Attack path analysis" },
      { id: "b", text: "Agentless vulnerability scanning" },
      { id: "c", text: "Regulatory compliance assessments" },
      { id: "d", text: "Just-in-Time VM access" },
      { id: "e", text: "Governance rules and security ownership" }
    ],
    correct: ["a", "b", "e"],
    selectCount: 3,
    explanation: "Attack path analysis, agentless scanning, and governance rules (including security ownership assignment) require the Defender CSPM plan. Regulatory compliance and JIT are available under other Defender plans or the free tier with limitations."
  },
  {
    id: 6,
    qid: "SC-500-MOD1-006",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO actions required to enable continuous export of Microsoft Defender for Cloud recommendations to a Log Analytics workspace for long-term retention.",
    scenario: "<div class=\"scenario-text\"><p>A SOC team needs to retain security recommendations and Secure Score history beyond the default 90-day retention for compliance reporting.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Configure continuous export to a Log Analytics workspace" },
      { id: "b", text: "Enable the Microsoft Defender for Cloud data connector in Sentinel" },
      { id: "c", text: "Assign the Security Admin role to the export identity" },
      { id: "d", text: "Create a diagnostic setting on every subscription" },
      { id: "e", text: "Enable Azure Policy for recommendation export" }
    ],
    correct: ["a", "c"],
    selectCount: 2,
    explanation: "Continuous export is configured directly in Defender for Cloud settings and requires appropriate RBAC (Security Admin or higher). Sentinel connectors and per-subscription diagnostic settings are related but not the primary mechanism for recommendation export."
  },
  {
    id: 7,
    qid: "SC-500-MOD1-007",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE regulatory standards that can be enabled for continuous assessment in the Microsoft Defender for Cloud Regulatory Compliance dashboard.",
    scenario: "<div class=\"scenario-text\"><p>A global enterprise must map Azure resource configurations to multiple industry frameworks for audit readiness.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "CIS Microsoft Azure Foundations Benchmark" },
      { id: "b", text: "NIST SP 800-53" },
      { id: "c", text: "PCI DSS 3.2.1" },
      { id: "d", text: "ISO 27001:2013" },
      { id: "e", text: "HIPAA HITRUST" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Defender for Cloud supports CIS Azure Foundations, NIST SP 800-53, PCI DSS, ISO 27001, and many others. All listed options are valid; the correct set focuses on the most commonly assessed standards in the dashboard."
  },
  {
    id: 8,
    qid: "SC-500-MOD1-008",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO prerequisites for enabling agentless scanning of Azure virtual machines in Defender CSPM.",
    scenario: "<div class=\"scenario-text\"><p>A security team wants to scan all Azure VMs for vulnerabilities without installing the Log Analytics agent or Azure Monitor Agent.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Enable the Defender CSPM plan on the subscription" },
      { id: "b", text: "Grant the Defender for Cloud service principal Reader access to the VMs" },
      { id: "c", text: "Install the Azure Monitor Agent on every VM" },
      { id: "d", text: "Enable disk encryption on all managed disks" },
      { id: "e", text: "Configure a private endpoint for the scanning service" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Agentless scanning requires the CSPM plan and appropriate permissions for the Microsoft Defender for Cloud service principal. Agents and private endpoints are not required for the agentless scanning feature."
  },
  {
    id: 9,
    qid: "SC-500-MOD1-009",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE components of the Microsoft Defender for Cloud Secure Score calculation.",
    scenario: "<div class=\"scenario-text\"><p>An architect is explaining how Secure Score is derived and which factors influence the overall percentage.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Number of healthy resources versus total resources for each control" },
      { id: "b", text: "Weight of each security control based on impact" },
      { id: "c", text: "Current Azure subscription spending" },
      { id: "d", text: "Status of recommendations (healthy, unhealthy, not applicable)" },
      { id: "e", text: "Number of users with Global Administrator role" }
    ],
    correct: ["a", "b", "d"],
    selectCount: 3,
    explanation: "Secure Score is calculated from the ratio of healthy resources, the weighted impact of each control, and the status of individual recommendations. Subscription cost and identity role counts are not part of the formula."
  },
  {
    id: 10,
    qid: "SC-500-MOD1-010",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO methods to remediate a high-severity recommendation in Microsoft Defender for Cloud at scale.",
    scenario: "<div class=\"scenario-text\"><p>Hundreds of VMs are missing the latest security updates according to a Defender for Cloud recommendation. The team needs an efficient remediation approach.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Use the Fix button to create a remediation Azure Policy assignment" },
      { id: "b", text: "Export the recommendation and remediate via Azure Resource Graph queries" },
      { id: "c", text: "Manually update each VM through the Azure portal" },
      { id: "d", text: "Enable automatic remediation via a Logic App trigger" },
      { id: "e", text: "Disable the recommendation entirely" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "The Fix experience can deploy an Azure Policy for bulk remediation, and Resource Graph can identify affected resources for scripted remediation. Manual updates do not scale, and disabling the recommendation is not a remediation action."
  },
  {
    id: 11,
    qid: "SC-500-MOD1-011",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE data sources that Microsoft Defender CSPM uses for agentless discovery and assessment.",
    scenario: "<div class=\"scenario-text\"><p>A multi-cloud environment includes Azure, AWS, and GCP resources. The security team wants to understand how CSPM gathers posture data without agents.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Azure Resource Manager inventory" },
      { id: "b", text: "AWS Config and CloudTrail snapshots" },
      { id: "c", text: "GCP Asset Inventory and Security Command Center" },
      { id: "d", text: "On-premises Active Directory domain controllers" },
      { id: "e", text: "Local disk snapshots of every VM" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "CSPM leverages native cloud provider APIs and inventory services (ARM, AWS Config/CloudTrail, GCP Asset Inventory) for agentless discovery. On-premises AD and full disk snapshots are not primary data sources for CSPM."
  },
  {
    id: 12,
    qid: "SC-500-MOD1-012",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO benefits of enabling governance rules in Microsoft Defender for Cloud.",
    scenario: "<div class=\"scenario-text\"><p>A large enterprise needs to assign ownership of security recommendations and enforce SLAs for remediation.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Automatically assign security owners to recommendations based on resource tags or subscriptions" },
      { id: "b", text: "Define grace periods and escalation policies for unresolved recommendations" },
      { id: "c", text: "Replace Azure Policy entirely" },
      { id: "d", text: "Disable Secure Score calculation" },
      { id: "e", text: "Force all recommendations to Critical severity" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Governance rules allow automatic owner assignment and SLA/grace-period definition. They complement Azure Policy and do not alter Secure Score calculation or force severity changes."
  },
  {
    id: 13,
    qid: "SC-500-MOD1-013",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE recommendations that contribute to the Identity and Access security control in Secure Score.",
    scenario: "<div class=\"scenario-text\"><p>An identity architect is reviewing Secure Score components related to Microsoft Entra ID and privileged access.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "MFA should be enabled on accounts with owner permissions on subscriptions" },
      { id: "b", text: "External accounts with owner permissions should be removed from subscriptions" },
      { id: "c", text: "Deprecated accounts with owner permissions should be removed" },
      { id: "d", text: "VMs should have endpoint protection installed" },
      { id: "e", text: "Storage accounts should restrict network access" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Identity and Access controls focus on privileged account hygiene, MFA enforcement, and removal of external or deprecated accounts. Endpoint protection and storage network restrictions belong to other controls."
  },
  {
    id: 14,
    qid: "SC-500-MOD1-014",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO ways Microsoft Defender for Cloud integrates with Azure Policy.",
    scenario: "<div class=\"scenario-text\"><p>A platform team wants to enforce security baselines using both Defender for Cloud recommendations and Azure Policy.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Defender for Cloud recommendations can be exported as Azure Policy definitions" },
      { id: "b", text: "Azure Policy initiatives can be used to enable Defender plans at scale" },
      { id: "c", text: "Azure Policy completely replaces Defender for Cloud assessments" },
      { id: "d", text: "Policy effects are ignored by Defender for Cloud" },
      { id: "e", text: "Defender for Cloud cannot evaluate custom policy definitions" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Recommendations can be remediated via Azure Policy, and built-in policy initiatives enable Defender plans across subscriptions. Azure Policy and Defender for Cloud are complementary, not mutually exclusive."
  },
  {
    id: 15,
    qid: "SC-500-MOD1-015",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE prerequisites for enabling multi-cloud posture management in Microsoft Defender CSPM for AWS accounts.",
    scenario: "<div class=\"scenario-text\"><p>A hybrid cloud team wants to onboard AWS accounts into Microsoft Defender for Cloud for unified posture visibility.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Create an AWS connector in Microsoft Defender for Cloud" },
      { id: "b", text: "Deploy the Microsoft Defender for Cloud CloudFormation template or Terraform module" },
      { id: "c", text: "Assign the necessary IAM roles and permissions in the AWS account" },
      { id: "d", text: "Install the Azure Monitor Agent on every EC2 instance" },
      { id: "e", text: "Enable AWS GuardDuty in every region" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Onboarding requires creating a connector, deploying the provided infrastructure-as-code template, and granting IAM permissions. Agents and GuardDuty are not mandatory for CSPM posture assessment."
  },
  {
    id: 16,
    qid: "SC-500-MOD1-016",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO features that improve Secure Score by addressing the 'Apply system updates' recommendation.",
    scenario: "<div class=\"scenario-text\"><p>Many Azure VMs show as unhealthy for the system updates recommendation. The platform team needs scalable remediation options.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Azure Update Manager (formerly Update Management)" },
      { id: "b", text: "Automatic VM guest patching" },
      { id: "c", text: "Just-in-Time VM access" },
      { id: "d", text: "Network Security Group hardening" },
      { id: "e", text: "Key Vault soft-delete" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Azure Update Manager and automatic guest patching directly address missing OS and software updates. JIT, NSG rules, and Key Vault features solve different security problems."
  },
  // Drag and Drop (12)
  {
    id: 17,
    qid: "SC-500-MOD1-017",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each Microsoft Defender for Cloud feature to its primary purpose.",
    scenario: "<div class=\"scenario-text\"><p>A security architect is designing a posture management strategy and needs to map features to business outcomes.</p></div>",
    items: [
      { id: "i1", text: "Secure Score" },
      { id: "i2", text: "Regulatory Compliance" },
      { id: "i3", text: "Attack Path Analysis" },
      { id: "i4", text: "Governance Rules" }
    ],
    zones: [
      { id: "z1", label: "Provides a numerical representation of overall security posture" },
      { id: "z2", label: "Maps resource configurations to industry standards such as CIS and NIST" },
      { id: "z3", label: "Visualizes chains of misconfigurations that could lead to a breach" },
      { id: "z4", label: "Assigns ownership and SLAs to recommendations" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Secure Score quantifies posture, Regulatory Compliance maps to frameworks, Attack Path Analysis shows risk chains, and Governance Rules manage ownership and remediation SLAs."
  },
  {
    id: 18,
    qid: "SC-500-MOD1-018",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each Defender for Cloud plan to the primary resource type it protects.",
    scenario: "<div class=\"scenario-text\"><p>An organization is selecting Defender plans for different Azure workloads.</p></div>",
    items: [
      { id: "i1", text: "Defender for Servers" },
      { id: "i2", text: "Defender for Containers" },
      { id: "i3", text: "Defender for Storage" },
      { id: "i4", text: "Defender for Key Vault" }
    ],
    zones: [
      { id: "z1", label: "Virtual machines and Arc-enabled servers" },
      { id: "z2", label: "AKS clusters, container images, and registries" },
      { id: "z3", label: "Azure Storage accounts and data exfiltration detection" },
      { id: "z4", label: "Cryptographic keys, secrets, and certificates" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Each Defender plan is purpose-built for a specific resource category and threat model."
  },
  {
    id: 19,
    qid: "SC-500-MOD1-019",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the assessment type to the correct description in Microsoft Defender for Cloud.",
    scenario: "<div class=\"scenario-text\"><p>A compliance officer needs to understand the different assessment categories available in the portal.</p></div>",
    items: [
      { id: "i1", text: "Built-in assessments" },
      { id: "i2", text: "Custom assessments" },
      { id: "i3", text: "Regulatory standards" },
      { id: "i4", text: "Security initiatives" }
    ],
    zones: [
      { id: "z1", label: "Predefined recommendations provided by Microsoft" },
      { id: "z2", label: "Organization-specific policies created via Azure Policy" },
      { id: "z3", label: "Mappings to external frameworks such as PCI-DSS or ISO" },
      { id: "z4", label: "Groups of related policy definitions assigned together" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Built-in assessments are Microsoft-authored, custom assessments come from customer policies, regulatory standards map to external frameworks, and initiatives group policies."
  },
  {
    id: 20,
    qid: "SC-500-MOD1-020",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each continuous export destination to its typical use case.",
    scenario: "<div class=\"scenario-text\"><p>A security operations team is configuring continuous export of Defender for Cloud data.</p></div>",
    items: [
      { id: "i1", text: "Log Analytics workspace" },
      { id: "i2", text: "Event Hub" },
      { id: "i3", text: "Azure Storage account" },
      { id: "i4", text: "Microsoft Sentinel" }
    ],
    zones: [
      { id: "z1", label: "Long-term retention and custom KQL analytics" },
      { id: "z2", label: "Streaming to third-party SIEM or SOAR platforms" },
      { id: "z3", label: "Archival storage for compliance evidence" },
      { id: "z4", label: "Native SOC correlation and incident management" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Log Analytics supports analytics and retention, Event Hub enables streaming export, Storage provides cheap archival, and Sentinel provides full SOC integration."
  },
  {
    id: 21,
    qid: "SC-500-MOD1-021",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the Microsoft Defender for Cloud recommendation severity to its typical remediation priority.",
    scenario: "<div class=\"scenario-text\"><p>A security team is triaging recommendations based on severity levels.</p></div>",
    items: [
      { id: "i1", text: "High" },
      { id: "i2", text: "Medium" },
      { id: "i3", text: "Low" },
      { id: "i4", text: "Informational" }
    ],
    zones: [
      { id: "z1", label: "Immediate attention; significant risk of compromise" },
      { id: "z2", label: "Address in the near term; moderate risk" },
      { id: "z3", label: "Improve posture when capacity allows" },
      { id: "z4", label: "Awareness only; no direct risk" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Severity levels guide prioritization: High requires urgent action, Medium is important, Low can be deferred, and Informational is for awareness."
  },
  {
    id: 22,
    qid: "SC-500-MOD1-022",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each multi-cloud connector requirement to the correct cloud provider.",
    scenario: "<div class=\"scenario-text\"><p>An architect is preparing to onboard multiple cloud providers into Defender CSPM.</p></div>",
    items: [
      { id: "i1", text: "CloudFormation or Terraform template deployment" },
      { id: "i2", text: "GCP service account with Security Command Center access" },
      { id: "i3", text: "Azure Lighthouse or direct subscription onboarding" },
      { id: "i4", text: "AWS IAM role with specific trust policy" }
    ],
    zones: [
      { id: "z1", label: "AWS" },
      { id: "z2", label: "Google Cloud Platform" },
      { id: "z3", label: "Azure (native)" },
      { id: "z4", label: "AWS (additional detail)" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "AWS uses CloudFormation/Terraform and IAM roles, GCP requires a service account with SCC permissions, and Azure uses native or Lighthouse onboarding."
  },
  {
    id: 23,
    qid: "SC-500-MOD1-023",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the Secure Score improvement action to the corresponding security control category.",
    scenario: "<div class=\"scenario-text\"><p>A team is prioritizing Secure Score improvements by control category.</p></div>",
    items: [
      { id: "i1", text: "Enable MFA for privileged accounts" },
      { id: "i2", text: "Apply system updates on VMs" },
      { id: "i3", text: "Restrict public access to storage accounts" },
      { id: "i4", text: "Enable encryption at rest for SQL databases" }
    ],
    zones: [
      { id: "z1", label: "Identity and Access" },
      { id: "z2", label: "Compute and Apps" },
      { id: "z3", label: "Data and Storage" },
      { id: "z4", label: "Data Protection" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "MFA belongs to Identity, system updates to Compute, storage network restrictions to Data/Storage, and encryption to Data Protection controls."
  },
  {
    id: 24,
    qid: "SC-500-MOD1-024",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each Defender for Cloud data type to its continuous export capability.",
    scenario: "<div class=\"scenario-text\"><p>A compliance team needs to understand which data can be continuously exported.</p></div>",
    items: [
      { id: "i1", text: "Security recommendations" },
      { id: "i2", text: "Secure Score" },
      { id: "i3", text: "Security alerts" },
      { id: "i4", text: "Regulatory compliance assessments" }
    ],
    zones: [
      { id: "z1", label: "Can be exported for historical tracking and reporting" },
      { id: "z2", label: "Exported as time-series data for trend analysis" },
      { id: "z3", label: "Exported for SIEM correlation and incident response" },
      { id: "z4", label: "Exported to demonstrate continuous control effectiveness" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "All listed data types support continuous export, each serving a distinct operational or compliance purpose."
  },
  {
    id: 25,
    qid: "SC-500-MOD1-025",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the agentless scanning capability to the correct workload type.",
    scenario: "<div class=\"scenario-text\"><p>A cloud security team is evaluating agentless scanning coverage across different workloads.</p></div>",
    items: [
      { id: "i1", text: "Azure Virtual Machines" },
      { id: "i2", text: "AWS EC2 instances" },
      { id: "i3", text: "Container images in ACR" },
      { id: "i4", text: "Kubernetes nodes" }
    ],
    zones: [
      { id: "z1", label: "Agentless vulnerability assessment via CSPM" },
      { id: "z2", label: "Agentless assessment via multi-cloud CSPM connector" },
      { id: "z3", label: "Agentless image scanning via Defender for Containers" },
      { id: "z4", label: "Agentless and agent-based node scanning" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "CSPM provides agentless scanning for Azure and AWS VMs, Defender for Containers scans images, and Kubernetes nodes support both agentless and agent-based approaches."
  },
  {
    id: 26,
    qid: "SC-500-MOD1-026",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each governance rule setting to its effect.",
    scenario: "<div class=\"scenario-text\"><p>A security governance team is configuring rules to drive remediation accountability.</p></div>",
    items: [
      { id: "i1", text: "Owner assignment by resource tag" },
      { id: "i2", text: "Grace period of 30 days" },
      { id: "i3", text: "Escalation to security team" },
      { id: "i4", text: "Exemption request workflow" }
    ],
    zones: [
      { id: "z1", label: "Automatically sets the recommendation owner based on metadata" },
      { id: "z2", label: "Allows time before the recommendation impacts Secure Score negatively" },
      { id: "z3", label: "Notifies a higher-level group when SLA is breached" },
      { id: "z4", label: "Provides a controlled process to exclude a resource temporarily" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Governance rules support automated ownership, grace periods, escalation, and structured exemption processes."
  },
  {
    id: 27,
    qid: "SC-500-MOD1-027",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the Defender for Cloud recommendation remediation method to its scalability characteristic.",
    scenario: "<div class=\"scenario-text\"><p>A platform engineering team is choosing remediation approaches based on environment size.</p></div>",
    items: [
      { id: "i1", text: "Manual remediation via portal" },
      { id: "i2", text: "Azure Policy Fix" },
      { id: "i3", text: "Logic App automation" },
      { id: "i4", text: "Infrastructure-as-Code update" }
    ],
    zones: [
      { id: "z1", label: "Suitable for one-off or low-volume fixes" },
      { id: "z2", label: "Enforces configuration at scale across subscriptions" },
      { id: "z3", label: "Triggers automated workflows on new recommendations" },
      { id: "z4", label: "Prevents recurrence by fixing the source template" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Manual fixes do not scale, Policy Fix enforces at scale, Logic Apps automate response, and IaC updates address root cause."
  },
  {
    id: 28,
    qid: "SC-500-MOD1-028",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each posture management concept to its definition.",
    scenario: "<div class=\"scenario-text\"><p>New team members need a clear mapping of core posture management terminology.</p></div>",
    items: [
      { id: "i1", text: "Recommendation" },
      { id: "i2", text: "Security control" },
      { id: "i3", text: "Initiative" },
      { id: "i4", text: "Exemption" }
    ],
    zones: [
      { id: "z1", label: "A specific actionable finding against a resource" },
      { id: "z2", label: "A logical grouping of related recommendations" },
      { id: "z3", label: "A collection of policy definitions assigned together" },
      { id: "z4", label: "A justified exclusion of a resource from a recommendation" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Recommendations are individual findings, controls group them, initiatives package policies, and exemptions provide controlled exclusions."
  },
  // Visual Topology Hotspot (6)
  {
    id: 29,
    qid: "SC-500-MOD1-029",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that represents the primary source of posture recommendations in a hybrid environment.",
    scenario: "<div class=\"scenario-text\"><p>Review the high-level architecture showing Defender for Cloud, multi-cloud connectors, and downstream analytics.</p></div>",
    nodes: [
      { id: "node1", label: "Microsoft Defender for Cloud\n(CSPM)", "x": 40, "y": 30 },
      { id: "node2", label: "Azure Policy\nAssignments", "x": 20, "y": 60 },
      { id: "node3", label: "Microsoft Sentinel\nWorkspace", "x": 70, "y": 60 }
    ],
    correct: ["node1"],
    explanation: "Microsoft Defender for Cloud (especially CSPM) is the central engine that generates posture recommendations across Azure and connected clouds."
  },
  {
    id: 30,
    qid: "SC-500-MOD1-030",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the component responsible for continuous export of recommendations to a SIEM.",
    scenario: "<div class=\"scenario-text\"><p>The architecture shows Defender for Cloud connected to Log Analytics, Event Hub, and a third-party SIEM.</p></div>",
    nodes: [
      { id: "node1", label: "Continuous Export\nConfiguration", "x": 50, "y": 40 },
      { id: "node2", label: "Secure Score\nDashboard", "x": 20, "y": 20 },
      { id: "node3", label: "Attack Path\nAnalysis", "x": 80, "y": 20 }
    ],
    correct: ["node1"],
    explanation: "Continuous Export is the feature that streams recommendations, alerts, and Secure Score data to external destinations such as Event Hub or Log Analytics for SIEM consumption."
  },
  {
    id: 31,
    qid: "SC-500-MOD1-031",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that indicates the multi-cloud connector for AWS posture assessment.",
    scenario: "<div class=\"scenario-text\"><p>A hybrid posture management topology includes Azure, AWS, and GCP resources feeding into Defender for Cloud.</p></div>",
    nodes: [
      { id: "node1", label: "AWS Connector\n(CloudFormation)", "x": 25, "y": 50 },
      { id: "node2", label: "Azure Subscription\nOnboarding", "x": 50, "y": 30 },
      { id: "node3", label: "GCP Service Account\nConnector", "x": 75, "y": 50 }
    ],
    correct: ["node1"],
    explanation: "The AWS connector, typically provisioned via CloudFormation, enables CSPM assessment of AWS accounts."
  },
  {
    id: 32,
    qid: "SC-500-MOD1-032",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that represents the Regulatory Compliance dashboard.",
    scenario: "<div class=\"scenario-text\"><p>The portal navigation shows Secure Score, Recommendations, Regulatory Compliance, and Workload protections.</p></div>",
    nodes: [
      { id: "node1", label: "Regulatory Compliance\nBlade", "x": 60, "y": 40 },
      { id: "node2", label: "Secure Score\nOverview", "x": 30, "y": 20 },
      { id: "node3", label: "Recommendations\nList", "x": 30, "y": 60 }
    ],
    correct: ["node1"],
    explanation: "The Regulatory Compliance blade maps resources to industry standards and shows pass/fail status for each control."
  },
  {
    id: 33,
    qid: "SC-500-MOD1-033",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that enables governance rules for recommendation ownership.",
    scenario: "<div class=\"scenario-text\"><p>A governance architecture includes Secure Score, recommendations, governance rules, and exemption workflows.</p></div>",
    nodes: [
      { id: "node1", label: "Governance Rules\nEngine", "x": 45, "y": 45 },
      { id: "node2", label: "Exemption\nWorkflow", "x": 70, "y": 30 },
      { id: "node3", label: "Secure Score\nCalculator", "x": 20, "y": 30 }
    ],
    correct: ["node1"],
    explanation: "Governance Rules are the feature that automatically assigns owners, sets grace periods, and drives accountability for recommendations."
  },
  {
    id: 34,
    qid: "SC-500-MOD1-034",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that performs agentless vulnerability scanning of virtual machines.",
    scenario: "<div class=\"scenario-text\"><p>The architecture shows multiple scanning methods: agent-based, agentless, and registry scanning.</p></div>",
    nodes: [
      { id: "node1", label: "CSPM Agentless\nScanner", "x": 40, "y": 35 },
      { id: "node2", label: "Log Analytics\nAgent", "x": 20, "y": 65 },
      { id: "node3", label: "ACR Image\nScanner", "x": 70, "y": 50 }
    ],
    correct: ["node1"],
    explanation: "CSPM agentless scanning assesses VMs without requiring any agent installation on the guest operating system."
  },
  // Config Hotspot (6)
  {
    id: 35,
    qid: "SC-500-MOD1-035",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line in the ARM template fragment that enables the Defender CSPM plan.",
    scenario: "<div class=\"scenario-text\"><p>A platform engineer is reviewing an ARM template that configures Microsoft Defender for Cloud plans on a subscription.</p></div>",
    nodes: [
      { id: "l1", label: "\"name\": \"CloudPosture\"," },
      { id: "l2", label: "\"pricingTier\": \"Standard\"," },
      { id: "l3", label: "\"name\": \"VirtualMachines\"," },
      { id: "l4", label: "\"pricingTier\": \"Free\"," }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "The CloudPosture plan name corresponds to Defender CSPM. Setting its pricingTier to Standard enables the advanced posture management capabilities."
  },
  {
    id: 36,
    qid: "SC-500-MOD1-036",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that configures continuous export of recommendations to a Log Analytics workspace.",
    scenario: "<div class=\"scenario-text\"><p>An automation script is defining continuous export settings for Defender for Cloud.</p></div>",
    nodes: [
      { id: "l1", label: "\"exportData\": [\"Alerts\", \"Recommendations\"]," },
      { id: "l2", label: "\"workspaceResourceId\": \"/subscriptions/.../workspaces/...\"," },
      { id: "l3", label: "\"enabled\": true," },
      { id: "l4", label: "\"type\": \"Microsoft.Security/automations\"" }
    ],
    correct: ["l2"],
    selectCount: 1,
    explanation: "The workspaceResourceId property specifies the target Log Analytics workspace for continuous export of the selected data types."
  },
  {
    id: 37,
    qid: "SC-500-MOD1-037",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that assigns a security owner based on a resource tag in a governance rule.",
    scenario: "<div class=\"scenario-text\"><p>A governance rule definition is being reviewed for automatic owner assignment.</p></div>",
    nodes: [
      { id: "l1", label: "\"ownerSource\": \"Tag\"," },
      { id: "l2", label: "\"tagKey\": \"SecurityOwner\"," },
      { id: "l3", label: "\"gracePeriodDays\": 14," },
      { id: "l4", label: "\"isEnabled\": true" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "The ownerSource property set to \"Tag\" instructs the governance engine to derive the recommendation owner from a resource tag."
  },
  {
    id: 38,
    qid: "SC-500-MOD1-038",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that enables the CIS Microsoft Azure Foundations Benchmark in regulatory compliance.",
    scenario: "<div class=\"scenario-text\"><p>An Azure Policy initiative assignment is configuring regulatory standards for Defender for Cloud.</p></div>",
    nodes: [
      { id: "l1", label: "\"policyDefinitionId\": \"/providers/Microsoft.Authorization/policySetDefinitions/1f3afdf9-d0c9-4c3d-847f-89da613e25d3\"," },
      { id: "l2", label: "\"displayName\": \"CIS Microsoft Azure Foundations Benchmark\"," },
      { id: "l3", label: "\"enforcementMode\": \"Default\"," },
      { id: "l4", label: "\"parameters\": {}" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "The specific policy set definition ID corresponds to the CIS Microsoft Azure Foundations Benchmark initiative used by Defender for Cloud regulatory compliance."
  },
  {
    id: 39,
    qid: "SC-500-MOD1-039",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that disables a recommendation exemption after a defined period.",
    scenario: "<div class=\"scenario-text\"><p>An exemption object is being reviewed for proper lifecycle management.</p></div>",
    nodes: [
      { id: "l1", label: "\"expirationDateUtc\": \"2026-12-31T23:59:59Z\"," },
      { id: "l2", label: "\"exemptionCategory\": \"Waiver\"," },
      { id: "l3", label: "\"policyAssignmentId\": \"/subscriptions/.../providers/Microsoft.Authorization/policyAssignments/...\"," },
      { id: "l4", label: "\"displayName\": \"Temporary exemption for legacy system\"" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "The expirationDateUtc property ensures the exemption automatically expires, preventing indefinite risk acceptance."
  },
  {
    id: 40,
    qid: "SC-500-MOD1-040",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that configures the pricing tier for Defender for Servers Plan 2.",
    scenario: "<div class=\"scenario-text\"><p>An ARM template is enabling advanced threat protection for virtual machines.</p></div>",
    nodes: [
      { id: "l1", label: "\"name\": \"VirtualMachines\"," },
      { id: "l2", label: "\"pricingTier\": \"Standard\"," },
      { id: "l3", label: "\"subPlan\": \"P2\"," },
      { id: "l4", label: "\"location\": \"global\"" }
    ],
    correct: ["l3"],
    selectCount: 1,
    explanation: "The subPlan property set to \"P2\" specifically enables Defender for Servers Plan 2, which includes advanced features such as just-in-time access and file integrity monitoring."
  },
    // ========== SUBDOMAIN 2: Infrastructure Security (IDs 41-80) ==========
  // Single Choice (4)
  {
    id: 41,
    qid: "SC-500-MOD1-041",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "Which Azure networking feature provides centralized, stateful inspection of all inbound and outbound traffic across multiple VNets while supporting threat intelligence-based filtering?",
    scenario: "<div class=\"scenario-text\"><p>An enterprise is consolidating network security for a hub-and-spoke topology. The security team requires a single control point that can inspect traffic, apply application rules, and block known malicious IPs without deploying individual NVAs in every spoke.</p></div>",
    options: [
      { id: "a", text: "Azure Firewall (Standard or Premium)" },
      { id: "b", text: "Network Security Group (NSG)" },
      { id: "c", text: "Azure Bastion" },
      { id: "d", text: "Application Security Group (ASG)" }
    ],
    correct: ["a"],
    explanation: "Azure Firewall provides centralized stateful inspection, application FQDN filtering, and Microsoft threat intelligence integration. NSGs are stateless packet filters at subnet/NIC level, Bastion is for secure RDP/SSH, and ASGs simplify NSG rule management."
  },
  {
    id: 42,
    qid: "SC-500-MOD1-042",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "What is the primary security benefit of deploying a Private Endpoint for an Azure Storage account?",
    scenario: "<div class=\"scenario-text\"><p>A data platform team must ensure that all access to a sensitive Storage account occurs only over the private network fabric and never traverses the public internet.</p></div>",
    options: [
      { id: "a", text: "It assigns a private IP from a VNet subnet and removes the need for public network exposure" },
      { id: "b", text: "It encrypts data at rest using customer-managed keys" },
      { id: "c", text: "It enables Azure AD authentication for blob access" },
      { id: "d", text: "It automatically applies NSG rules to the storage service" }
    ],
    correct: ["a"],
    explanation: "A Private Endpoint places a private IP address for the storage service inside a VNet subnet, allowing traffic to stay on the Microsoft backbone. Encryption, authentication, and NSG application are separate controls."
  },
  {
    id: 43,
    qid: "SC-500-MOD1-043",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "Which NSG rule characteristic allows the most precise control over east-west traffic between application tiers?",
    scenario: "<div class=\"scenario-text\"><p>An architect is designing micro-segmentation inside a single VNet that hosts web, application, and database subnets. The goal is to allow only necessary inter-tier communication.</p></div>",
    options: [
      { id: "a", text: "Source and destination Application Security Groups combined with port and protocol" },
      { id: "b", text: "Source address prefix set to Internet" },
      { id: "c", text: "Priority value of 4096" },
      { id: "d", text: "Direction set to Outbound only" }
    ],
    correct: ["a"],
    explanation: "Application Security Groups (ASGs) let you group NICs logically and reference them in NSG rules, enabling precise micro-segmentation without hard-coding IP addresses. The other options either broaden access or do not improve precision."
  },
  {
    id: 44,
    qid: "SC-500-MOD1-044",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "When configuring Azure Firewall Premium, which feature provides TLS inspection for encrypted traffic?",
    scenario: "<div class=\"scenario-text\"><p>A security operations team needs to inspect HTTPS traffic for malware and data exfiltration without breaking legitimate application connectivity.</p></div>",
    options: [
      { id: "a", text: "TLS inspection with a customer-provided intermediate CA certificate" },
      { id: "b", text: "DNS proxy only" },
      { id: "c", text: "Force tunneling to on-premises" },
      { id: "d", text: "Service tags in network rules" }
    ],
    correct: ["a"],
    explanation: "Azure Firewall Premium supports TLS inspection by terminating and re-encrypting traffic using a certificate signed by a customer-managed intermediate CA. DNS proxy, force tunneling, and service tags are useful but do not perform TLS inspection."
  },
  // Multi-Select (12)
  {
    id: 45,
    qid: "SC-500-MOD1-045",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE required components to implement a secure hub-and-spoke network topology with centralized traffic inspection.",
    scenario: "<div class=\"scenario-text\"><p>An organization is migrating from a flat VNet design to a hub-and-spoke model that routes all spoke-to-spoke and internet traffic through a central security appliance.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Azure Firewall or NVA deployed in the hub VNet" },
      { id: "b", text: "User-Defined Routes (UDRs) on spoke subnets pointing to the firewall private IP" },
      { id: "c", text: "VNet peering between hub and each spoke with gateway transit enabled as needed" },
      { id: "d", text: "Public IP addresses assigned to every spoke subnet" },
      { id: "e", text: "Disable all NSGs on spoke subnets" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Centralized inspection requires a firewall/NVA in the hub, UDRs to force traffic through it, and VNet peering for connectivity. Public IPs on spokes and disabling NSGs reduce security."
  },
  {
    id: 46,
    qid: "SC-500-MOD1-046",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO configuration steps required to restrict a Private Endpoint to a specific subnet and prevent public access to the target PaaS service.",
    scenario: "<div class=\"scenario-text\"><p>A storage account must be accessible only from a designated application subnet via Private Endpoint.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Create the Private Endpoint in the target application subnet" },
      { id: "b", text: "Set the storage account network firewall to deny public access (or allow only selected networks)" },
      { id: "c", text: "Enable public network access on the storage account" },
      { id: "d", text: "Assign a public IP to the Private Endpoint" },
      { id: "e", text: "Disable private DNS zone integration" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "The Private Endpoint must be placed in the desired subnet, and the PaaS service firewall must be configured to block public access so that only the private path is usable."
  },
  {
    id: 47,
    qid: "SC-500-MOD1-047",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE best practices when designing NSG rules for a multi-tier application.",
    scenario: "<div class=\"scenario-text\"><p>A security architect is hardening network segmentation for a three-tier web application hosted in Azure.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Use Application Security Groups to group similar workloads" },
      { id: "b", text: "Apply the most restrictive rules (deny by default, allow least privilege)" },
      { id: "c", text: "Place higher-priority (lower number) rules for specific allows before broader denies" },
      { id: "d", text: "Allow all inbound traffic from Internet on ports 80 and 443 to every subnet" },
      { id: "e", text: "Use source address prefix * for all database subnet rules" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "ASGs simplify management, least-privilege and default-deny improve security, and correct priority ordering ensures specific rules take precedence. Broad Internet allows and wildcard sources violate zero-trust."
  },
  {
    id: 48,
    qid: "SC-500-MOD1-048",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO Azure Firewall features that help mitigate data exfiltration risks.",
    scenario: "<div class=\"scenario-text\"><p>A financial institution requires outbound traffic controls that prevent unauthorized transfer of sensitive data to external destinations.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "FQDN filtering in application rules" },
      { id: "b", text: "Threat intelligence-based filtering (alert/deny mode)" },
      { id: "c", text: "Just-in-Time VM access" },
      { id: "d", text: "Azure Bastion host deployment" },
      { id: "e", text: "Storage account soft delete" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "FQDN filtering restricts outbound destinations to approved domains, and threat intelligence can block known malicious IPs/domains. JIT, Bastion, and soft delete address different risk categories."
  },
  {
    id: 49,
    qid: "SC-500-MOD1-049",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE prerequisites for enabling Forced Tunneling with Azure Firewall.",
    scenario: "<div class=\"scenario-text\"><p>An organization wants all internet-bound traffic from Azure VMs to be inspected by an on-premises security appliance via ExpressRoute.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "User-Defined Route with next hop type Virtual Network Gateway" },
      { id: "b", text: "Azure Firewall deployed and configured with appropriate DNAT/SNAT rules if needed" },
      { id: "c", text: "ExpressRoute or VPN gateway with proper BGP advertisements" },
      { id: "d", text: "Disable Azure Firewall entirely" },
      { id: "e", text: "Assign public IPs to all VMs" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Forced tunneling requires UDRs pointing to the gateway, a functioning Azure Firewall (or NVA) if used as intermediate hop, and a hybrid connectivity gateway. Disabling the firewall or adding public IPs defeats the purpose."
  },
  {
    id: 50,
    qid: "SC-500-MOD1-050",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO methods to prevent accidental exposure of Azure VMs to the public internet.",
    scenario: "<div class=\"scenario-text\"><p>A platform team wants guardrails that stop developers from assigning public IPs or opening broad NSG rules.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Azure Policy that denies creation of public IP addresses on NICs" },
      { id: "b", text: "NSG with a high-priority deny rule for source Internet on management ports" },
      { id: "c", text: "Enable Azure Bastion and remove all public IPs" },
      { id: "d", text: "Disable Network Watcher" },
      { id: "e", text: "Allow RDP from * on all subnets" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Azure Policy can prevent public IP assignment at deployment time, and a restrictive NSG rule blocks inbound management traffic even if a public IP exists. Bastion is complementary but not a prevention method for the listed risk."
  },
  {
    id: 51,
    qid: "SC-500-MOD1-051",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE components of a Private Endpoint DNS resolution architecture for on-premises clients.",
    scenario: "<div class=\"scenario-text\"><p>On-premises users must resolve the private IP of an Azure SQL Private Endpoint without using public DNS.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Azure Private DNS Zone linked to the VNet hosting the Private Endpoint" },
      { id: "b", text: "Conditional forwarder on on-premises DNS servers pointing to Azure DNS or a DNS private resolver" },
      { id: "c", text: "Virtual network link between the Private DNS Zone and the hub/spoke VNets" },
      { id: "d", text: "Public DNS CNAME pointing to the private IP" },
      { id: "e", text: "Disable private DNS zone group on the Private Endpoint" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Private DNS Zones host the A records, VNet links make them available inside Azure, and on-premises conditional forwarders enable hybrid resolution. Public CNAMEs and disabling the zone group break private resolution."
  },
  {
    id: 52,
    qid: "SC-500-MOD1-052",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO Azure Firewall rule collection types and their typical use cases.",
    scenario: "<div class=\"scenario-text\"><p>A network security engineer is organizing Azure Firewall policy rule collections for clarity and performance.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Network rules for IP/port/protocol filtering (Layer 3/4)" },
      { id: "b", text: "Application rules for FQDN and HTTP/S filtering (Layer 7)" },
      { id: "c", text: "NSG rules inside the firewall subnet" },
      { id: "d", text: "Route table rules for traffic steering" },
      { id: "e", text: "Key Vault access policies" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Azure Firewall uses Network rule collections for traditional 5-tuple filtering and Application rule collections for FQDN-based Layer-7 control. NSGs, route tables, and Key Vault policies are separate constructs."
  },
  {
    id: 53,
    qid: "SC-500-MOD1-053",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE recommended practices for securing the Azure Firewall management and data plane.",
    scenario: "<div class=\"scenario-text\"><p>A security team is hardening an Azure Firewall deployment in a production hub VNet.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Deploy Azure Firewall in a dedicated subnet named AzureFirewallSubnet" },
      { id: "b", text: "Enable Threat Intelligence in Alert and Deny mode" },
      { id: "c", text: "Use Firewall Policy (rather than classic rules) for centralized management" },
      { id: "d", text: "Assign a public IP to every spoke VM" },
      { id: "e", text: "Disable diagnostic logging" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "The dedicated subnet name is mandatory, Threat Intelligence in Deny mode blocks known bad actors, and Firewall Policy provides scalable, hierarchical rule management. Public IPs on spokes and disabled logging weaken security."
  },
  {
    id: 54,
    qid: "SC-500-MOD1-054",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO benefits of using Azure Private Link in conjunction with Private Endpoints.",
    scenario: "<div class=\"scenario-text\"><p>An architect is evaluating Private Link versus service endpoints for securing PaaS connectivity.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Traffic stays on the Microsoft backbone and never traverses the public internet" },
      { id: "b", text: "The PaaS resource can be accessed via a private IP inside the customer VNet" },
      { id: "c", text: "It automatically enables public access for hybrid clients" },
      { id: "d", text: "It replaces the need for NSGs entirely" },
      { id: "e", text: "It requires no DNS configuration" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Private Link + Private Endpoint keeps traffic private and presents the service as a private IP. Public access, NSG elimination, and DNS-free operation are incorrect statements."
  },
  {
    id: 55,
    qid: "SC-500-MOD1-055",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE network security controls that can be layered to protect a virtual machine.",
    scenario: "<div class=\"scenario-text\"><p>A defense-in-depth strategy is required for a critical application server hosted on an Azure VM.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Network Security Group on the NIC or subnet" },
      { id: "b", text: "Azure Firewall or NVA in the path of traffic" },
      { id: "c", text: "Just-in-Time (JIT) VM access for management ports" },
      { id: "d", text: "Public IP with no NSG association" },
      { id: "e", text: "Disable Microsoft Defender for Servers" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "NSGs provide host/subnet filtering, Azure Firewall provides centralized inspection, and JIT reduces the attack surface of management ports. Public IPs without controls and disabling Defender increase risk."
  },
  {
    id: 56,
    qid: "SC-500-MOD1-056",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO correct statements about Azure Firewall Premium IDPS.",
    scenario: "<div class=\"scenario-text\"><p>A SOC team is evaluating whether to upgrade from Azure Firewall Standard to Premium for intrusion detection capabilities.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "IDPS can operate in Alert or Alert and Deny mode" },
      { id: "b", text: "Signature-based detection covers a large library of known threats" },
      { id: "c", text: "IDPS replaces the need for Microsoft Defender for Cloud" },
      { id: "d", text: "IDPS requires TLS inspection to be disabled" },
      { id: "e", text: "IDPS only works with classic firewall rules" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Azure Firewall Premium IDPS supports Alert and Deny modes and uses a Microsoft-managed signature library. It complements (does not replace) Defender for Cloud and works with TLS inspection and Firewall Policy."
  },
  // Drag and Drop (12)
  {
    id: 57,
    qid: "SC-500-MOD1-057",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each Azure networking security construct to its primary function.",
    scenario: "<div class=\"scenario-text\"><p>An architect is mapping network security controls for a new landing zone.</p></div>",
    items: [
      { id: "i1", text: "Network Security Group (NSG)" },
      { id: "i2", text: "Azure Firewall" },
      { id: "i3", text: "Private Endpoint" },
      { id: "i4", text: "Application Security Group (ASG)" }
    ],
    zones: [
      { id: "z1", label: "Stateful or stateless packet filtering at subnet or NIC level" },
      { id: "z2", label: "Centralized Layer 3-7 inspection and threat intelligence" },
      { id: "z3", label: "Private IP connectivity to PaaS services" },
      { id: "z4", label: "Logical grouping of NICs for simplified NSG rule authoring" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "NSGs filter traffic, Azure Firewall provides centralized advanced inspection, Private Endpoints enable private PaaS access, and ASGs simplify rule management."
  },
  {
    id: 58,
    qid: "SC-500-MOD1-058",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the hub-and-spoke component to its security responsibility.",
    scenario: "<div class=\"scenario-text\"><p>A platform team is assigning responsibilities within a secured hub-and-spoke topology.</p></div>",
    items: [
      { id: "i1", text: "Hub VNet" },
      { id: "i2", text: "Spoke VNet" },
      { id: "i3", text: "User-Defined Route" },
      { id: "i4", text: "VNet Peering" }
    ],
    zones: [
      { id: "z1", label: "Hosts shared security services such as Azure Firewall" },
      { id: "z2", label: "Hosts workload subnets with application-specific NSGs" },
      { id: "z3", label: "Forces traffic to the central inspection point" },
      { id: "z4", label: "Provides private connectivity between hub and spokes" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "The hub centralizes security, spokes contain workloads, UDRs steer traffic, and peering enables connectivity."
  },
  {
    id: 59,
    qid: "SC-500-MOD1-059",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each Private Endpoint related object to its purpose.",
    scenario: "<div class=\"scenario-text\"><p>A connectivity engineer is implementing Private Endpoints for multiple PaaS services.</p></div>",
    items: [
      { id: "i1", text: "Private Endpoint NIC" },
      { id: "i2", text: "Private DNS Zone" },
      { id: "i3", text: "Private DNS Zone Group" },
      { id: "i4", text: "Network Policy (NSG/UDR on PE subnet)" }
    ],
    zones: [
      { id: "z1", label: "Receives the private IP address for the PaaS service" },
      { id: "z2", label: "Hosts the A record mapping FQDN to private IP" },
      { id: "z3", label: "Automatically manages DNS records for the Private Endpoint" },
      { id: "z4", label: "Controls whether NSGs and UDRs apply to the Private Endpoint traffic" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "The PE NIC holds the private IP, the DNS zone resolves the name, the zone group automates record management, and network policies govern NSG/UDR application."
  },
  {
    id: 60,
    qid: "SC-500-MOD1-060",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the Azure Firewall SKU feature to the correct tier.",
    scenario: "<div class=\"scenario-text\"><p>A procurement decision requires clear understanding of Standard versus Premium capabilities.</p></div>",
    items: [
      { id: "i1", text: "TLS Inspection" },
      { id: "i2", text: "IDPS (Intrusion Detection and Prevention)" },
      { id: "i3", text: "Threat Intelligence filtering" },
      { id: "i4", text: "Basic network and application rules" }
    ],
    zones: [
      { id: "z1", label: "Azure Firewall Premium only" },
      { id: "z2", label: "Azure Firewall Premium only" },
      { id: "z3", label: "Available in both Standard and Premium" },
      { id: "z4", label: "Available in both Standard and Premium" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "TLS inspection and IDPS are Premium-exclusive; threat intelligence and basic rule types exist in both SKUs."
  },
  {
    id: 61,
    qid: "SC-500-MOD1-061",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the NSG rule property to its effect on traffic evaluation.",
    scenario: "<div class=\"scenario-text\"><p>A network engineer is troubleshooting why a particular NSG rule is not matching expected traffic.</p></div>",
    items: [
      { id: "i1", text: "Priority" },
      { id: "i2", text: "Source / Destination" },
      { id: "i3", text: "Direction" },
      { id: "i4", text: "Access (Allow/Deny)" }
    ],
    zones: [
      { id: "z1", label: "Determines the order in which rules are processed (lower number first)" },
      { id: "z2", label: "Defines the origin and target of the traffic flow" },
      { id: "z3", label: "Specifies whether the rule applies to inbound or outbound traffic" },
      { id: "z4", label: "Decides whether matching traffic is permitted or blocked" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Priority controls evaluation order, source/destination define endpoints, direction scopes the rule, and Access sets the action."
  },
  {
    id: 62,
    qid: "SC-500-MOD1-062",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each forced-tunneling related object to its role.",
    scenario: "<div class=\"scenario-text\"><p>An organization is implementing forced tunneling so that Azure workload internet traffic is inspected on-premises.</p></div>",
    items: [
      { id: "i1", text: "User-Defined Route (0.0.0.0/0)" },
      { id: "i2", text: "Virtual Network Gateway" },
      { id: "i3", text: "On-premises firewall / NVA" },
      { id: "i4", text: "BGP route advertisement" }
    ],
    zones: [
      { id: "z1", label: "Directs all internet-bound traffic to the gateway" },
      { id: "z2", label: "Provides the hybrid connectivity path to on-premises" },
      { id: "z3", label: "Performs the actual inspection of the tunneled traffic" },
      { id: "z4", label: "Propagates the default route from on-premises into Azure" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "UDRs force the traffic, the gateway carries it, the on-premises appliance inspects it, and BGP advertises the default route."
  },
  {
    id: 63,
    qid: "SC-500-MOD1-063",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the service endpoint versus Private Endpoint characteristic.",
    scenario: "<div class=\"scenario-text\"><p>A security architect is choosing between Service Endpoints and Private Endpoints for a new application.</p></div>",
    items: [
      { id: "i1", text: "Service Endpoint" },
      { id: "i2", text: "Private Endpoint" },
      { id: "i3", text: "Service Endpoint (limitation)" },
      { id: "i4", text: "Private Endpoint (advantage)" }
    ],
    zones: [
      { id: "z1", label: "Extends VNet identity to the PaaS service but traffic still uses public IP of the service" },
      { id: "z2", label: "Gives the PaaS service a private IP inside the customer VNet" },
      { id: "z3", label: "Does not remove the public endpoint of the PaaS service" },
      { id: "z4", label: "Can completely disable public network access to the PaaS service" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Service Endpoints secure the path but keep the public endpoint; Private Endpoints provide a true private IP and allow public access to be disabled."
  },
  {
    id: 64,
    qid: "SC-500-MOD1-064",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the Azure Firewall Policy hierarchy element to its description.",
    scenario: "<div class=\"scenario-text\"><p>A large enterprise is designing a hierarchical Firewall Policy structure for multiple landing zones.</p></div>",
    items: [
      { id: "i1", text: "Parent Policy" },
      { id: "i2", text: "Child Policy" },
      { id: "i3", text: "Rule Collection Group" },
      { id: "i4", text: "Rule Collection" }
    ],
    zones: [
      { id: "z1", label: "Defines organization-wide baseline rules that cannot be overridden" },
      { id: "z2", label: "Inherits from parent and can add environment-specific rules" },
      { id: "z3", label: "Logical container that holds multiple rule collections with priority" },
      { id: "z4", label: "Contains the actual network, application, or DNAT rules" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Parent policies enforce global baselines, child policies extend them, rule collection groups organize priority, and rule collections hold the rules."
  },
  {
    id: 65,
    qid: "SC-500-MOD1-065",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each micro-segmentation technique to its implementation method in Azure.",
    scenario: "<div class=\"scenario-text\"><p>A zero-trust network design requires fine-grained east-west controls.</p></div>",
    items: [
      { id: "i1", text: "Subnet-level NSG" },
      { id: "i2", text: "NIC-level NSG" },
      { id: "i3", text: "Application Security Groups" },
      { id: "i4", text: "Azure Firewall application rules" }
    ],
    zones: [
      { id: "z1", label: "Applies the same filter to all resources in a subnet" },
      { id: "z2", label: "Applies filters to a specific virtual machine" },
      { id: "z3", label: "Groups NICs so rules can reference logical application tiers" },
      { id: "z4", label: "Filters based on FQDN regardless of IP address" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Subnet NSGs protect broad tiers, NIC NSGs protect individual VMs, ASGs enable logical grouping, and Firewall application rules provide FQDN-based control."
  },
  {
    id: 66,
    qid: "SC-500-MOD1-066",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the diagnostic logging destination for Azure Firewall to its typical consumer.",
    scenario: "<div class=\"scenario-text\"><p>A SOC is deciding where to send Azure Firewall logs for different use cases.</p></div>",
    items: [
      { id: "i1", text: "Log Analytics workspace" },
      { id: "i2", text: "Storage account" },
      { id: "i3", text: "Event Hub" },
      { id: "i4", text: "Partner solution (via Event Hub)" }
    ],
    zones: [
      { id: "z1", label: "KQL queries, workbooks, and Microsoft Sentinel" },
      { id: "z2", label: "Long-term archival and compliance retention" },
      { id: "z3", label: "Streaming to custom or third-party pipelines" },
      { id: "z4", label: "Commercial SIEM/SOAR platforms" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Log Analytics powers analytics and Sentinel, Storage is for cheap long-term retention, Event Hub enables streaming, and partners consume via Event Hub."
  },
  {
    id: 67,
    qid: "SC-500-MOD1-067",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the Just-in-Time (JIT) VM access component to its function.",
    scenario: "<div class=\"scenario-text\"><p>A security team is implementing JIT to reduce the attack surface of management ports.</p></div>",
    items: [
      { id: "i1", text: "JIT policy on the VM" },
      { id: "i2", text: "Temporary NSG rule" },
      { id: "i3", text: "Request approval workflow" },
      { id: "i4", text: "Microsoft Defender for Servers" }
    ],
    zones: [
      { id: "z1", label: "Defines which ports can be opened and for how long" },
      { id: "z2", label: "Dynamically created to allow the approved source IP" },
      { id: "z3", label: "Controls who can request and approve access" },
      { id: "z4", label: "Provides the JIT feature as part of its plan" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "JIT policies define allowed ports, temporary NSG rules grant access, approval workflows govern requests, and Defender for Servers supplies the capability."
  },
  {
    id: 68,
    qid: "SC-500-MOD1-068",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the network security anti-pattern to the recommended remediation.",
    scenario: "<div class=\"scenario-text\"><p>A security assessment has identified several common misconfigurations in an existing Azure network.</p></div>",
    items: [
      { id: "i1", text: "NSG rule allowing source * on port 3389" },
      { id: "i2", text: "Storage account with public network access enabled" },
      { id: "i3", text: "Missing UDR for 0.0.0.0/0 in a spoke" },
      { id: "i4", text: "Azure Firewall without threat intelligence" }
    ],
    zones: [
      { id: "z1", label: "Replace with JIT or restrict to known management subnets" },
      { id: "z2", label: "Disable public access and deploy a Private Endpoint" },
      { id: "z3", label: "Add a route directing traffic to the hub firewall" },
      { id: "z4", label: "Enable threat intelligence in Alert and Deny mode" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Broad RDP rules should use JIT, public storage should move to Private Endpoints, missing UDRs break forced inspection, and threat intelligence should be enabled."
  },
  // Visual Topology Hotspot (6)
  {
    id: 69,
    qid: "SC-500-MOD1-069",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the network security boundary node that performs centralized stateful inspection for the entire hub-and-spoke topology.",
    scenario: "<div class=\"scenario-text\"><p>Review the multi-tier enterprise VNet design with dedicated Gateway, Firewall, and Application subnets.</p></div>",
    nodes: [
      { id: "node1", label: "Azure Firewall Subnet\n(Hub VNet)", "x": 30, "y": 40 },
      { id: "node2", label: "Network Security Group\n(App Subnet)", "x": 60, "y": 40 },
      { id: "node3", label: "ExpressRoute Gateway\n(Ingress)", "x": 10, "y": 40 }
    ],
    correct: ["node1"],
    explanation: "Azure Firewall in the hub subnet is the centralized inspection point for traffic entering, leaving, or crossing the topology."
  },
  {
    id: 70,
    qid: "SC-500-MOD1-070",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that represents the Private Endpoint providing private connectivity to a PaaS service.",
    scenario: "<div class=\"scenario-text\"><p>The topology shows a spoke VNet containing application subnets and a Private Endpoint connected to an Azure SQL logical server.</p></div>",
    nodes: [
      { id: "node1", label: "Private Endpoint\n(SQL)", "x": 55, "y": 45 },
      { id: "node2", label: "Public Endpoint\nof SQL Server", "x": 80, "y": 20 },
      { id: "node3", label: "NSG on App\nSubnet", "x": 30, "y": 45 }
    ],
    correct: ["node1"],
    explanation: "The Private Endpoint is the resource that injects a private IP for the PaaS service into the customer VNet."
  },
  {
    id: 71,
    qid: "SC-500-MOD1-071",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that enforces micro-segmentation between the web and application tiers.",
    scenario: "<div class=\"scenario-text\"><p>A three-tier application is deployed across dedicated subnets with NSGs and ASGs.</p></div>",
    nodes: [
      { id: "node1", label: "NSG on App\nSubnet", "x": 50, "y": 40 },
      { id: "node2", label: "Azure Firewall\n(Hub)", "x": 20, "y": 40 },
      { id: "node3", label: "Public Load\nBalancer", "x": 70, "y": 20 }
    ],
    correct: ["node1"],
    explanation: "The NSG applied to the application subnet is the primary control that filters east-west traffic between tiers inside the VNet."
  },
  {
    id: 72,
    qid: "SC-500-MOD1-072",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that must be present for forced tunneling of internet-bound traffic to on-premises.",
    scenario: "<div class=\"scenario-text\"><p>The hybrid connectivity diagram includes an ExpressRoute gateway, Azure Firewall, and on-premises NVA.</p></div>",
    nodes: [
      { id: "node1", label: "ExpressRoute\nGateway", "x": 25, "y": 50 },
      { id: "node2", label: "Spoke App\nSubnet", "x": 60, "y": 30 },
      { id: "node3", label: "Azure Bastion\nHost", "x": 60, "y": 70 }
    ],
    correct: ["node1"],
    explanation: "The ExpressRoute (or VPN) gateway is the required hybrid connectivity component that carries forced-tunneled traffic to the on-premises inspection point."
  },
  {
    id: 73,
    qid: "SC-500-MOD1-073",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that represents the Azure Firewall Policy resource controlling rule evaluation order.",
    scenario: "<div class=\"scenario-text\"><p>The architecture shows multiple Azure Firewalls associated with a hierarchical policy structure.</p></div>",
    nodes: [
      { id: "node1", label: "Firewall Policy\n(Parent)", "x": 40, "y": 30 },
      { id: "node2", label: "AzureFirewallSubnet", "x": 20, "y": 60 },
      { id: "node3", label: "Public IP of\nFirewall", "x": 70, "y": 60 }
    ],
    correct: ["node1"],
    explanation: "The Firewall Policy (especially a parent policy) is the control-plane object that defines and orders the rule collections applied to the firewalls."
  },
  {
    id: 74,
    qid: "SC-500-MOD1-074",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that should be the next hop for a User-Defined Route forcing traffic through the hub firewall.",
    scenario: "<div class=\"scenario-text\"><p>A spoke subnet route table is being configured to send all outbound traffic to the central inspection point.</p></div>",
    nodes: [
      { id: "node1", label: "Azure Firewall\nPrivate IP", "x": 35, "y": 45 },
      { id: "node2", label: "Internet", "x": 70, "y": 20 },
      { id: "node3", label: "Virtual Network\nGateway", "x": 15, "y": 70 }
    ],
    correct: ["node1"],
    explanation: "The UDR next-hop should be the private IP of the Azure Firewall (or NVA) so that traffic is steered to the inspection point."
  },
  // Config / Code Text Block Hotspot (6)
  {
    id: 75,
    qid: "SC-500-MOD1-075",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line in the ARM template fragment that violates security policy by allowing public inbound access.",
    scenario: "<div class=\"scenario-text\"><p>A DevOps engineer committed an ARM template defining an NSG security rule. An automated policy engine flagged the template for public exposure risks.</p></div>",
    nodes: [
      { id: "l1", label: "\"access\": \"Allow\"," },
      { id: "l2", label: "\"direction\": \"Inbound\"," },
      { id: "l3", label: "\"protocol\": \"Tcp\"," },
      { id: "l4", label: "\"sourceAddressPrefix\": \"*\"" }
    ],
    correct: ["l4"],
    selectCount: 1,
    explanation: "The sourceAddressPrefix value of \"*\" permits traffic from any source, including the entire internet, which violates least-privilege and zero-trust principles."
  },
  {
    id: 76,
    qid: "SC-500-MOD1-076",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that correctly configures a Private Endpoint to use a customer-managed Private DNS Zone.",
    scenario: "<div class=\"scenario-text\"><p>An infrastructure-as-code template is deploying a Private Endpoint for Azure Storage.</p></div>",
    nodes: [
      { id: "l1", label: "\"privateDnsZoneConfigs\": [{" },
      { id: "l2", label: "\"name\": \"privatelink.blob.core.windows.net\"," },
      { id: "l3", label: "\"privateDnsZoneId\": \"/subscriptions/.../privateDnsZones/privatelink.blob.core.windows.net\"" },
      { id: "l4", label: "\"publicNetworkAccess\": \"Enabled\"" }
    ],
    correct: ["l3"],
    selectCount: 1,
    explanation: "The privateDnsZoneId property links the Private Endpoint to the customer-managed Private DNS Zone that will resolve the service FQDN to the private IP."
  },
  {
    id: 77,
    qid: "SC-500-MOD1-077",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that forces all outbound traffic from a subnet to the Azure Firewall.",
    scenario: "<div class=\"scenario-text\"><p>A route table is being defined for a spoke application subnet.</p></div>",
    nodes: [
      { id: "l1", label: "\"addressPrefix\": \"0.0.0.0/0\"," },
      { id: "l2", label: "\"nextHopType\": \"VirtualAppliance\"," },
      { id: "l3", label: "\"nextHopIpAddress\": \"10.0.1.4\"," },
      { id: "l4", label: "\"hasBgpOverride\": true" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "The addressPrefix of 0.0.0.0/0 is the default route that captures all internet-bound (and other unmatched) traffic and sends it to the next hop (the firewall)."
  },
  {
    id: 78,
    qid: "SC-500-MOD1-078",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that enables Threat Intelligence in Deny mode on an Azure Firewall Policy.",
    scenario: "<div class=\"scenario-text\"><p>A Firewall Policy Bicep/ARM fragment is being reviewed for threat protection settings.</p></div>",
    nodes: [
      { id: "l1", label: "\"threatIntelMode\": \"Deny\"," },
      { id: "l2", label: "\"sku\": { \"tier\": \"Premium\" }," },
      { id: "l3", label: "\"intrusionDetection\": { \"mode\": \"Alert\" }," },
      { id: "l4", label: "\"dnsSettings\": { \"enableProxy\": true }" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "The threatIntelMode property set to \"Deny\" actively blocks traffic to and from known malicious IP addresses and FQDNs."
  },
  {
    id: 79,
    qid: "SC-500-MOD1-079",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that creates an Application Security Group reference inside an NSG rule.",
    scenario: "<div class=\"scenario-text\"><p>An NSG security rule is being authored to allow traffic only between web and application tiers using ASGs.</p></div>",
    nodes: [
      { id: "l1", label: "\"sourceApplicationSecurityGroups\": [{" },
      { id: "l2", label: "\"id\": \"/subscriptions/.../applicationSecurityGroups/web-asg\"" },
      { id: "l3", label: "\"destinationPortRange\": \"443\"," },
      { id: "l4", label: "\"access\": \"Allow\"" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "The sourceApplicationSecurityGroups (or destinationApplicationSecurityGroups) property is the correct way to reference an ASG inside an NSG rule."
  },
  {
    id: 80,
    qid: "SC-500-MOD1-080",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that disables public network access on a storage account after Private Endpoint deployment.",
    scenario: "<div class=\"scenario-text\"><p>A storage account resource definition is being updated to enforce private-only connectivity.</p></div>",
    nodes: [
      { id: "l1", label: "\"publicNetworkAccess\": \"Disabled\"," },
      { id: "l2", label: "\"networkAcls\": { \"defaultAction\": \"Deny\" }," },
      { id: "l3", label: "\"supportsHttpsTrafficOnly\": true," },
      { id: "l4", label: "\"allowBlobPublicAccess\": false" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "Setting publicNetworkAccess to \"Disabled\" is the explicit control that prevents any public endpoint connectivity, forcing all access through Private Endpoints."
 },
  // ========== SUBDOMAIN 3: Resource Protection (IDs 81-120) ==========
  // Single Choice (4)
  {
    id: 81,
    qid: "SC-500-MOD1-081",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "Which Azure Key Vault feature prevents permanent deletion of a vault or its objects during the soft-delete retention period?",
    scenario: "<div class=\"scenario-text\"><p>A security architect is implementing irreversible protection for cryptographic keys used by a payment processing application. Once soft-deleted, the keys must not be recoverable by any user until the retention period expires.</p></div>",
    options: [
      { id: "a", text: "Purge Protection" },
      { id: "b", text: "Soft Delete" },
      { id: "c", text: "RBAC Authorization" },
      { id: "d", text: "Private Endpoint" }
    ],
    correct: ["a"],
    explanation: "Purge Protection enforces a mandatory retention period and blocks the Purge operation, even by users with Key Vault Contributor or higher privileges. Soft Delete alone allows recovery and subsequent purge."
  },
  {
    id: 82,
    qid: "SC-500-MOD1-082",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "What is the recommended identity type for an Azure Kubernetes Service (AKS) cluster to securely pull images from Azure Container Registry without storing credentials?",
    scenario: "<div class=\"scenario-text\"><p>A platform team is deploying a private AKS cluster that must authenticate to ACR using a password-less mechanism managed by Microsoft Entra ID.</p></div>",
    options: [
      { id: "a", text: "System-assigned or user-assigned Managed Identity with AcrPull role" },
      { id: "b", text: "Service Principal with client secret stored in a Kubernetes secret" },
      { id: "c", text: "Local admin account on the AKS API server" },
      { id: "d", text: "Azure AD pod identity (deprecated) without RBAC" }
    ],
    correct: ["a"],
    explanation: "Managed Identities (system- or user-assigned) combined with the AcrPull role provide password-less, automatically rotated authentication to ACR. Service principals with secrets introduce credential management overhead and risk."
  },
  {
    id: 83,
    qid: "SC-500-MOD1-083",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "Which access model is preferred for Azure Key Vault when granular, role-based control over individual keys, secrets, and certificates is required?",
    scenario: "<div class=\"scenario-text\"><p>An enterprise is migrating from access policies to a more scalable authorization model that integrates with Microsoft Entra ID Privileged Identity Management.</p></div>",
    options: [
      { id: "a", text: "Azure RBAC (data-plane roles such as Key Vault Crypto Officer)" },
      { id: "b", text: "Vault access policies only" },
      { id: "c", text: "Shared access signatures (SAS)" },
      { id: "d", text: "Storage account keys" }
    ],
    correct: ["a"],
    explanation: "Azure RBAC for Key Vault data plane provides fine-grained, assignable roles that integrate with Entra ID governance features. Classic access policies are less scalable and do not support the full RBAC experience."
  },
  {
    id: 84,
    qid: "SC-500-MOD1-084",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "In a private AKS cluster, which component ensures the Kubernetes API server is reachable only via a private IP address?",
    scenario: "<div class=\"scenario-text\"><p>A security requirement mandates that the AKS control plane must never be exposed on a public endpoint.</p></div>",
    options: [
      { id: "a", text: "Private Cluster mode with Private Endpoint for the API server" },
      { id: "b", text: "Authorized IP ranges on a public API server" },
      { id: "c", text: "Azure Bastion host in the node subnet" },
      { id: "d", text: "Network Security Group on the system node pool only" }
    ],
    correct: ["a"],
    explanation: "Enabling Private Cluster provisions the API server with a private IP via Private Endpoint and disables the public endpoint. Authorized IP ranges still leave a public endpoint; Bastion and NSGs do not control the control-plane endpoint."
  },
  // Multi-Select (12)
  {
    id: 85,
    qid: "SC-500-MOD1-085",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE security controls that should be enabled on an Azure Key Vault used for production cryptographic material.",
    scenario: "<div class=\"scenario-text\"><p>A financial services application stores HSM-backed keys and application secrets in a single Key Vault. The security team must apply defense-in-depth controls.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Soft Delete and Purge Protection" },
      { id: "b", text: "Private Endpoint with public network access disabled" },
      { id: "c", text: "Azure RBAC authorization model" },
      { id: "d", text: "Enable public network access from all networks" },
      { id: "e", text: "Store the Key Vault access keys in plain text in source control" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Soft Delete + Purge Protection prevent accidental or malicious permanent loss, Private Endpoint removes public exposure, and RBAC provides granular control. Public access and plaintext key storage are anti-patterns."
  },
  {
    id: 86,
    qid: "SC-500-MOD1-086",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO correct statements about Managed Identities for Azure resources.",
    scenario: "<div class=\"scenario-text\"><p>A developer is choosing between system-assigned and user-assigned managed identities for a set of Azure Functions and VMs.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "System-assigned identities are tied to the lifecycle of a single resource" },
      { id: "b", text: "User-assigned identities can be shared across multiple resources" },
      { id: "c", text: "Managed Identities require manual secret rotation every 90 days" },
      { id: "d", text: "Managed Identities cannot be assigned Azure RBAC roles" },
      { id: "e", text: "System-assigned identities survive resource deletion" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "System-assigned identities live and die with the resource; user-assigned identities are independent and shareable. Managed Identities eliminate secret management and fully support RBAC assignment."
  },
  {
    id: 87,
    qid: "SC-500-MOD1-087",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE steps required to securely expose an Azure Kubernetes Service (AKS) cluster privately to an on-premises enterprise network.",
    scenario: "<div class=\"scenario-text\"><p>An engineer is designing a secure private AKS architecture connected to an on-premises network via ExpressRoute.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Enable Private Cluster mode during AKS creation" },
      { id: "b", text: "Configure an Azure Private Endpoint for the API Server" },
      { id: "c", text: "Configure DNS forwarders on-premises to resolve the Private DNS Zone" },
      { id: "d", text: "Enable Public API Server access with IP whitelisting" },
      { id: "e", text: "Use Pod Managed Identities for API Server access" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Private Cluster mode provisions the API server with a private IP via Private Endpoint. Resolving the control plane DNS from on-premises requires configuring DNS conditional forwarders to Azure Private DNS."
  },
  {
    id: 88,
    qid: "SC-500-MOD1-088",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO Key Vault network security configurations that align with zero-trust principles.",
    scenario: "<div class=\"scenario-text\"><p>A cloud security team is locking down network access to a Key Vault that holds production secrets.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Disable public network access" },
      { id: "b", text: "Allow access only from selected virtual networks and Private Endpoints" },
      { id: "c", text: "Allow access from all networks including the internet" },
      { id: "d", text: "Disable firewall and virtual network service endpoints" },
      { id: "e", text: "Expose the Key Vault on a public IP with no NSG" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Disabling public access and restricting traffic to approved VNets/Private Endpoints enforce least-privilege network access. Open public access violates zero-trust."
  },
  {
    id: 89,
    qid: "SC-500-MOD1-089",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE recommended practices for securing secrets used by AKS workloads.",
    scenario: "<div class=\"scenario-text\"><p>A DevSecOps team wants to eliminate plain-text secrets from Kubernetes manifests and container images.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Store secrets in Azure Key Vault and use the Secrets Store CSI Driver" },
      { id: "b", text: "Use Workload Identity (Microsoft Entra Workload ID) for pod authentication" },
      { id: "c", text: "Rotate secrets regularly and avoid embedding them in images" },
      { id: "d", text: "Hard-code connection strings inside Dockerfiles" },
      { id: "e", text: "Grant the cluster identity Contributor rights on the entire subscription" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Key Vault + CSI Driver externalizes secrets, Workload Identity provides password-less pod identity, and regular rotation reduces exposure windows. Hard-coding and overly broad permissions are insecure."
  },
  {
    id: 90,
    qid: "SC-500-MOD1-090",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO advantages of using user-assigned managed identities over system-assigned identities in large environments.",
    scenario: "<div class=\"scenario-text\"><p>An enterprise platform team manages hundreds of Azure resources that require consistent identity and access patterns.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "A single user-assigned identity can be shared across multiple resources" },
      { id: "b", text: "Lifecycle of the identity is independent of any single resource" },
      { id: "c", text: "User-assigned identities automatically receive Owner rights" },
      { id: "d", text: "They cannot be assigned to virtual machines" },
      { id: "e", text: "They require manual credential rotation" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "User-assigned identities are reusable and independent of resource lifecycle, enabling consistent RBAC assignments at scale. They do not grant automatic elevated rights and still eliminate credential management."
  },
  {
    id: 91,
    qid: "SC-500-MOD1-091",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE AKS security features that help reduce the attack surface of the control plane and nodes.",
    scenario: "<div class=\"scenario-text\"><p>A Kubernetes platform team is hardening a production AKS cluster according to Microsoft security baselines.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Private Cluster (private API server)" },
      { id: "b", text: "Azure AD integration / Microsoft Entra Workload ID" },
      { id: "c", text: "Azure Policy add-on for AKS (Gatekeeper)" },
      { id: "d", text: "Disable network policies and allow all pod-to-pod traffic" },
      { id: "e", text: "Expose the dashboard with no authentication" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Private Cluster removes public API exposure, Entra integration enables strong authentication/authorization, and Azure Policy enforces runtime governance. Disabling network policies and open dashboards increase risk."
  },
  {
    id: 92,
    qid: "SC-500-MOD1-092",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO Key Vault soft-delete related behaviors that administrators must understand.",
    scenario: "<div class=\"scenario-text\"><p>A Key Vault administrator accidentally deleted a critical secret and needs to recover it.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Soft-deleted objects remain recoverable for a configurable retention period (7–90 days)" },
      { id: "b", text: "Purge Protection, when enabled, blocks permanent deletion during the retention window" },
      { id: "c", text: "Soft delete can be disabled after the vault is created" },
      { id: "d", text: "Purged objects can be restored by any Key Vault Reader" },
      { id: "e", text: "Soft delete applies only to secrets, never to keys or certificates" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Soft-delete retains objects for the configured period; Purge Protection prevents irreversible deletion during that window. Soft-delete cannot be disabled after creation and applies to keys, secrets, and certificates."
  },
  {
    id: 93,
    qid: "SC-500-MOD1-093",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE components required to implement Workload Identity for pods in AKS.",
    scenario: "<div class=\"scenario-text\"><p>A development team wants pods to authenticate to Azure resources using Microsoft Entra ID without storing secrets.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Enable OIDC issuer on the AKS cluster" },
      { id: "b", text: "Create a federated identity credential linking the Kubernetes service account to a managed identity" },
      { id: "c", text: "Annotate the Kubernetes service account with the managed identity client ID" },
      { id: "d", text: "Store a client secret inside a Kubernetes Secret object" },
      { id: "e", text: "Disable the Secrets Store CSI Driver" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "OIDC issuer, federated identity credential, and service-account annotation form the core of Workload Identity. Client secrets and disabling CSI are unnecessary or counterproductive."
  },
  {
    id: 94,
    qid: "SC-500-MOD1-094",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO correct statements about Azure Key Vault RBAC versus access policies.",
    scenario: "<div class=\"scenario-text\"><p>An identity architect is deciding which authorization model to standardize on for all new Key Vaults.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "RBAC supports Azure AD Privileged Identity Management and just-in-time access" },
      { id: "b", text: "Access policies are limited to a maximum of 1024 entries per vault" },
      { id: "c", text: "RBAC cannot assign permissions at the individual key or secret level" },
      { id: "d", text: "Access policies integrate natively with Microsoft Entra Conditional Access" },
      { id: "e", text: "RBAC requires the vault to be in a special premium SKU" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "RBAC integrates with PIM and modern governance; classic access policies have a hard limit of 1024 entries. RBAC does support object-level assignments and does not require a special SKU."
  },
  {
    id: 95,
    qid: "SC-500-MOD1-095",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE network-related controls that protect an AKS cluster at the infrastructure layer.",
    scenario: "<div class=\"scenario-text\"><p>A platform security team is applying defense-in-depth to the network surrounding an AKS cluster.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Deploy the cluster into a dedicated subnet with an NSG" },
      { id: "b", text: "Use Azure Private Link / Private Endpoint for the API server (private cluster)" },
      { id: "c", text: "Apply Azure Firewall or NSG rules to control egress from the node pools" },
      { id: "d", text: "Assign public IPs to every worker node" },
      { id: "e", text: "Disable Azure CNI and use kubenet with no network policies" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Dedicated subnets + NSGs, private API server, and controlled egress form the network foundation. Public node IPs and disabled network policies increase exposure."
  },
  {
    id: 96,
    qid: "SC-500-MOD1-096",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO scenarios where a system-assigned managed identity is the preferred choice.",
    scenario: "<div class=\"scenario-text\"><p>An architect is assigning identities to short-lived or single-purpose Azure resources.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "A single Azure Function that needs to access only its own Key Vault secrets" },
      { id: "b", text: "A virtual machine that will be deleted after a short project and should leave no residual identity" },
      { id: "c", text: "A set of 50 identical VMs that must share the same set of RBAC assignments" },
      { id: "d", text: "A long-lived application that runs across multiple resource groups and subscriptions" },
      { id: "e", text: "Any resource that requires a client secret" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "System-assigned identities are ideal when the identity should exist only for the lifetime of one resource. Shared or multi-resource scenarios favor user-assigned identities."
  },
  // Drag and Drop (12)
  {
    id: 97,
    qid: "SC-500-MOD1-097",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each Azure Key Vault security feature to its operational function.",
    scenario: "<div class=\"scenario-text\"><p>An architect is implementing zero-trust data protection policies for cryptographic keys stored in Azure Key Vault Premium.</p></div>",
    items: [
      { id: "i1", text: "Purge Protection" },
      { id: "i2", text: "Soft Delete" },
      { id: "i3", text: "RBAC Authorization" },
      { id: "i4", text: "Private Endpoint" }
    ],
    zones: [
      { id: "z1", label: "Prevents permanent deletion of soft-deleted vaults/objects during retention period" },
      { id: "z2", label: "Allows recovery of deleted vaults and objects within a set retention window" },
      { id: "z3", label: "Provides granular data-plane access management using Entra roles" },
      { id: "z4", label: "Restricts Key Vault network access to a specific Virtual Network" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Purge protection enforces mandatory retention periods preventing early destruction. Soft delete allows soft recovery. RBAC governs data actions, and Private Endpoints eliminate public IP exposure."
  },
  {
    id: 98,
    qid: "SC-500-MOD1-098",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each managed identity type to its primary characteristic.",
    scenario: "<div class=\"scenario-text\"><p>A platform team is selecting the appropriate managed identity model for different Azure workloads.</p></div>",
    items: [
      { id: "i1", text: "System-assigned Managed Identity" },
      { id: "i2", text: "User-assigned Managed Identity" },
      { id: "i3", text: "Workload Identity (AKS)" },
      { id: "i4", text: "Service Principal with secret" }
    ],
    zones: [
      { id: "z1", label: "Lifecycle bound to a single Azure resource" },
      { id: "z2", label: "Independent lifecycle; can be assigned to many resources" },
      { id: "z3", label: "Federated identity for Kubernetes pods using OIDC" },
      { id: "z4", label: "Requires manual credential creation and rotation" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "System-assigned lives with the resource, user-assigned is shareable, Workload Identity federates pods, and classic service principals still need secrets."
  },
  {
    id: 99,
    qid: "SC-500-MOD1-099",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each AKS security control to the layer it primarily protects.",
    scenario: "<div class=\"scenario-text\"><p>A defense-in-depth model is being applied to an AKS environment.</p></div>",
    items: [
      { id: "i1", text: "Private Cluster" },
      { id: "i2", text: "Azure Policy for AKS" },
      { id: "i3", text: "Network Policy (Calico/Azure)" },
      { id: "i4", text: "Microsoft Defender for Containers" }
    ],
    zones: [
      { id: "z1", label: "Control-plane network exposure" },
      { id: "z2", label: "Cluster configuration and admission control" },
      { id: "z3", label: "Pod-to-pod and pod-to-external traffic" },
      { id: "z4", label: "Runtime threat detection and vulnerability assessment" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Private Cluster protects the API server, Azure Policy enforces desired state, Network Policies segment traffic, and Defender for Containers provides runtime security."
  },
  {
    id: 100,
    qid: "SC-500-MOD1-100",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the Key Vault object type to the typical permission required to manage it under RBAC.",
    scenario: "<div class=\"scenario-text\"><p>An identity team is assigning the least-privilege roles for different Key Vault operations.</p></div>",
    items: [
      { id: "i1", text: "Key Vault Crypto Officer" },
      { id: "i2", text: "Key Vault Secrets Officer" },
      { id: "i3", text: "Key Vault Certificates Officer" },
      { id: "i4", text: "Key Vault Reader" }
    ],
    zones: [
      { id: "z1", label: "Full management of cryptographic keys" },
      { id: "z2", label: "Full management of secrets" },
      { id: "z3", label: "Full management of certificates" },
      { id: "z4", label: "Read metadata of keys, secrets, and certificates" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Each Officer role grants full control over its object type; Reader grants read-only metadata access across object types."
  },
  {
    id: 101,
    qid: "SC-500-MOD1-101",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the AKS identity feature to its purpose.",
    scenario: "<div class=\"scenario-text\"><p>A platform engineer is configuring authentication and authorization for both the cluster and its workloads.</p></div>",
    items: [
      { id: "i1", text: "Microsoft Entra ID integration (cluster)" },
      { id: "i2", text: "Workload Identity" },
      { id: "i3", text: "Kubelet Managed Identity" },
      { id: "i4", text: "Local accounts (disabled)" }
    ],
    zones: [
      { id: "z1", label: "Authenticates users and groups to the Kubernetes API server" },
      { id: "z2", label: "Allows pods to obtain Entra tokens without secrets" },
      { id: "z3", label: "Used by the node to pull images and interact with Azure resources" },
      { id: "z4", label: "Should be disabled to enforce Entra-only authentication" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Cluster Entra integration handles user auth, Workload Identity handles pod auth, kubelet identity serves node needs, and local accounts should be turned off."
  },
  {
    id: 102,
    qid: "SC-500-MOD1-102",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each Key Vault network option to its security implication.",
    scenario: "<div class=\"scenario-text\"><p>A network security review is evaluating Key Vault firewall and Private Endpoint settings.</p></div>",
    items: [
      { id: "i1", text: "Public network access = Disabled" },
      { id: "i2", text: "Allow trusted Microsoft services" },
      { id: "i3", text: "Selected virtual networks only" },
      { id: "i4", text: "All networks" }
    ],
    zones: [
      { id: "z1", label: "Forces all traffic through Private Endpoints" },
      { id: "z2", label: "Permits specific Azure services to bypass the firewall" },
      { id: "z3", label: "Restricts access to known VNet/subnet combinations" },
      { id: "z4", label: "Exposes the vault to the entire internet (not recommended)" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Disabled public access is the strongest posture; trusted services and selected VNets provide controlled exceptions; All networks is the least secure."
  },
  {
    id: 103,
    qid: "SC-500-MOD1-103",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the Secrets Store CSI Driver capability to its description.",
    scenario: "<div class=\"scenario-text\"><p>A Kubernetes team is adopting the Secrets Store CSI Driver for external secret management.</p></div>",
    items: [
      { id: "i1", text: "SecretProviderClass" },
      { id: "i2", text: "Mount as volume" },
      { id: "i3", text: "Sync as Kubernetes Secret" },
      { id: "i4", text: "Rotation support" }
    ],
    zones: [
      { id: "z1", label: "Custom resource that defines which Key Vault objects to retrieve" },
      { id: "z2", label: "Presents secrets as files inside the pod filesystem" },
      { id: "z3", label: "Optionally creates a native Kubernetes Secret object" },
      { id: "z4", label: "Automatically updates mounted content when the Key Vault object changes" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "SecretProviderClass selects objects, volume mount exposes them as files, optional sync creates K8s Secrets, and rotation keeps values current."
  },
  {
    id: 104,
    qid: "SC-500-MOD1-104",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the AKS node pool security setting to its effect.",
    scenario: "<div class=\"scenario-text\"><p>A cluster administrator is hardening worker and system node pools.</p></div>",
    items: [
      { id: "i1", text: "Enable host-based encryption" },
      { id: "i2", text: "Use ephemeral OS disks" },
      { id: "i3", text: "Enable Azure Disk Encryption" },
      { id: "i4", text: "Restrict outbound traffic with NSG/Firewall" }
    ],
    zones: [
      { id: "z1", label: "Encrypts data at the host level before it reaches storage" },
      { id: "z2", label: "Reduces persistence of node data after scale-down or failure" },
      { id: "z3", label: "Encrypts managed disks with platform or customer-managed keys" },
      { id: "z4", label: "Limits the destinations pods and nodes can reach" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Host encryption protects data in memory/storage path, ephemeral disks minimize residual data, ADE protects disks, and egress controls limit lateral movement."
  },
  {
    id: 105,
    qid: "SC-500-MOD1-105",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each Key Vault permission model concept to its definition.",
    scenario: "<div class=\"scenario-text\"><p>New team members need clarity on Key Vault authorization terminology.</p></div>",
    items: [
      { id: "i1", text: "Data-plane RBAC" },
      { id: "i2", text: "Control-plane RBAC" },
      { id: "i3", text: "Access Policy" },
      { id: "i4", text: "Key Vault Contributor role" }
    ],
    zones: [
      { id: "z1", label: "Permissions that operate on keys, secrets, and certificates" },
      { id: "z2", label: "Permissions that manage the Key Vault resource itself" },
      { id: "z3", label: "Legacy per-principal permission entries stored in the vault" },
      { id: "z4", label: "Allows management of the vault resource but not data-plane operations by default" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Data-plane RBAC governs object operations, control-plane RBAC governs the resource, access policies are the classic model, and Contributor is a control-plane role."
  },
  {
    id: 106,
    qid: "SC-500-MOD1-106",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the AKS private cluster DNS component to its role.",
    scenario: "<div class=\"scenario-text\"><p>An on-premises client must resolve the private AKS API server FQDN.</p></div>",
    items: [
      { id: "i1", text: "Private DNS Zone (privatelink...)" },
      { id: "i2", text: "VNet link" },
      { id: "i3", text: "Conditional forwarder" },
      { id: "i4", text: "CoreDNS (cluster)" }
    ],
    zones: [
      { id: "z1", label: "Holds the A record for the private API server" },
      { id: "z2", label: "Makes the Private DNS Zone available inside Azure VNets" },
      { id: "z3", label: "Forwards on-premises queries for the private zone to Azure" },
      { id: "z4", label: "Handles name resolution for pods inside the cluster" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Private DNS Zone stores the record, VNet link scopes it, conditional forwarders enable hybrid resolution, and CoreDNS serves in-cluster queries."
  },
  {
    id: 107,
    qid: "SC-500-MOD1-107",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the managed identity assignment scenario to the recommended identity type.",
    scenario: "<div class=\"scenario-text\"><p>An architect is choosing identity types for different Azure resource patterns.</p></div>",
    items: [
      { id: "i1", text: "One Function App needs unique permissions" },
      { id: "i2", text: "Twenty VMs share identical Key Vault access" },
      { id: "i3", text: "Pods need per-workload identities" },
      { id: "i4", text: "Legacy application that cannot use managed identities" }
    ],
    zones: [
      { id: "z1", label: "System-assigned Managed Identity" },
      { id: "z2", label: "User-assigned Managed Identity" },
      { id: "z3", label: "Workload Identity (federated)" },
      { id: "z4", label: "Service Principal with certificate or secret" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Single-resource unique needs → system-assigned; shared identical needs → user-assigned; pods → Workload Identity; non-Azure-AD-capable apps → classic service principal."
  },
  {
    id: 108,
    qid: "SC-500-MOD1-108",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each Key Vault diagnostic setting to its typical consumer.",
    scenario: "<div class=\"scenario-text\"><p>A SOC team is configuring diagnostic logs for Key Vault auditing.</p></div>",
    items: [
      { id: "i1", text: "AuditEvent logs" },
      { id: "i2", text: "AllMetrics" },
      { id: "i3", text: "Log Analytics workspace" },
      { id: "i4", text: "Event Hub" }
    ],
    zones: [
      { id: "z1", label: "Records data-plane and control-plane operations for forensic analysis" },
      { id: "z2", label: "Provides performance and availability counters" },
      { id: "z3", label: "Enables KQL queries and Microsoft Sentinel correlation" },
      { id: "z4", label: "Streams events to external SIEM or custom pipelines" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "AuditEvent captures security-relevant operations, AllMetrics supplies operational data, Log Analytics powers analytics, and Event Hub enables streaming export."
  },
  // Visual Topology Hotspot (6)
  {
    id: 109,
    qid: "SC-500-MOD1-109",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that represents the Private Endpoint protecting Azure Key Vault from public access.",
    scenario: "<div class=\"scenario-text\"><p>The architecture shows a Key Vault, its Private Endpoint, a consuming VM subnet, and a public endpoint.</p></div>",
    nodes: [
      { id: "node1", label: "Private Endpoint\n(Key Vault)", "x": 45, "y": 40 },
      { id: "node2", label: "Public Endpoint\nof Key Vault", "x": 75, "y": 20 },
      { id: "node3", label: "VM Subnet\nNSG", "x": 20, "y": 50 }
    ],
    correct: ["node1"],
    explanation: "The Private Endpoint is the component that places a private IP for Key Vault inside the VNet and enables public access to be disabled."
  },
  {
    id: 110,
    qid: "SC-500-MOD1-110",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that provides the managed identity used by AKS nodes to pull images from ACR.",
    scenario: "<div class=\"scenario-text\"><p>An AKS cluster architecture includes node pools, kubelet identity, and an ACR instance.</p></div>",
    nodes: [
      { id: "node1", label: "Kubelet\nManaged Identity", "x": 40, "y": 35 },
      { id: "node2", label: "Pod Workload\nIdentity", "x": 65, "y": 55 },
      { id: "node3", label: "Cluster Service\nPrincipal", "x": 20, "y": 60 }
    ],
    correct: ["node1"],
    explanation: "The kubelet (or node) managed identity is the identity that authenticates to ACR for image pulls on behalf of the nodes."
  },
  {
    id: 111,
    qid: "SC-500-MOD1-111",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that represents the Secrets Store CSI Driver interacting with Azure Key Vault.",
    scenario: "<div class=\"scenario-text\"><p>A pod is shown mounting secrets that originate from Key Vault via a CSI volume.</p></div>",
    nodes: [
      { id: "node1", label: "Secrets Store\nCSI Driver", "x": 50, "y": 40 },
      { id: "node2", label: "Kubernetes\nSecret Object", "x": 25, "y": 60 },
      { id: "node3", label: "Container\nImage Registry", "x": 75, "y": 25 }
    ],
    correct: ["node1"],
    explanation: "The Secrets Store CSI Driver is the component that retrieves secrets from Key Vault and presents them to the pod as a volume."
  },
  {
    id: 112,
    qid: "SC-500-MOD1-112",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that must be private to satisfy a private AKS cluster requirement.",
    scenario: "<div class=\"scenario-text\"><p>The diagram shows the AKS control plane, node pools, and associated endpoints.</p></div>",
    nodes: [
      { id: "node1", label: "AKS API Server\nEndpoint", "x": 40, "y": 30 },
      { id: "node2", label: "Node Pool\nSubnet", "x": 60, "y": 55 },
      { id: "node3", label: "Azure Bastion\nHost", "x": 20, "y": 55 }
    ],
    correct: ["node1"],
    explanation: "In a private AKS cluster the API server endpoint is provisioned with a private IP and has no public endpoint."
  },
  {
    id: 113,
    qid: "SC-500-MOD1-113",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that enforces RBAC authorization on Key Vault data-plane operations.",
    scenario: "<div class=\"scenario-text\"><p>The access control architecture for a Key Vault shows both classic access policies and Azure RBAC assignments.</p></div>",
    nodes: [
      { id: "node1", label: "Azure RBAC\nData-Plane Roles", "x": 45, "y": 40 },
      { id: "node2", label: "Classic Access\nPolicies", "x": 20, "y": 60 },
      { id: "node3", label: "Network Firewall\nRules", "x": 70, "y": 30 }
    ],
    correct: ["node1"],
    explanation: "Azure RBAC data-plane roles (Key Vault Crypto Officer, Secrets Officer, etc.) are the modern authorization mechanism for keys, secrets, and certificates."
  },
  {
    id: 114,
    qid: "SC-500-MOD1-114",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that represents the federated identity credential linking a Kubernetes service account to a managed identity.",
    scenario: "<div class=\"scenario-text\"><p>Workload Identity components are shown: OIDC issuer, service account, managed identity, and federated credential.</p></div>",
    nodes: [
      { id: "node1", label: "Federated Identity\nCredential", "x": 50, "y": 45 },
      { id: "node2", label: "OIDC Issuer\nURL", "x": 25, "y": 25 },
      { id: "node3", label: "Kubernetes\nService Account", "x": 75, "y": 25 }
    ],
    correct: ["node1"],
    explanation: "The federated identity credential is the Entra ID object that trusts the Kubernetes service account and allows it to obtain tokens for the managed identity."
  },
  // Config / Code Text Block Hotspot (6)
  {
    id: 115,
    qid: "SC-500-MOD1-115",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that enables Purge Protection on an Azure Key Vault.",
    scenario: "<div class=\"scenario-text\"><p>An ARM/Bicep template is defining a production Key Vault with irreversible deletion protection.</p></div>",
    nodes: [
      { id: "l1", label: "\"enablePurgeProtection\": true," },
      { id: "l2", label: "\"enableSoftDelete\": true," },
      { id: "l3", label: "\"sku\": { \"name\": \"premium\" }," },
      { id: "l4", label: "\"enableRbacAuthorization\": true" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "The enablePurgeProtection property set to true activates the irreversible retention protection that blocks the Purge operation."
  },
  {
    id: 116,
    qid: "SC-500-MOD1-116",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that assigns a user-assigned managed identity to an Azure resource.",
    scenario: "<div class=\"scenario-text\"><p>A virtual machine resource definition is being configured with a managed identity.</p></div>",
    nodes: [
      { id: "l1", label: "\"type\": \"UserAssigned\"," },
      { id: "l2", label: "\"userAssignedIdentities\": {" },
      { id: "l3", label: "\"/subscriptions/.../userAssignedIdentities/myIdentity\": {}" },
      { id: "l4", label: "\"principalId\": \"00000000-0000-0000-0000-000000000000\"" }
    ],
    correct: ["l2"],
    selectCount: 1,
    explanation: "The userAssignedIdentities property (under the identity object) is where one or more user-assigned managed identities are referenced."
  },
  {
    id: 117,
    qid: "SC-500-MOD1-117",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that enables private cluster mode for AKS.",
    scenario: "<div class=\"scenario-text\"><p>An AKS cluster deployment template is being reviewed for control-plane exposure settings.</p></div>",
    nodes: [
      { id: "l1", label: "\"enablePrivateCluster\": true," },
      { id: "l2", label: "\"apiServerAccessProfile\": {" },
      { id: "l3", label: "\"authorizedIPRanges\": [\"0.0.0.0/0\"]," },
      { id: "l4", label: "\"enableRBAC\": true" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "Setting enablePrivateCluster to true provisions the API server with a private IP and disables the public endpoint."
  },
  {
    id: 118,
    qid: "SC-500-MOD1-118",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that configures the Secrets Store CSI Driver to retrieve a specific Key Vault secret.",
    scenario: "<div class=\"scenario-text\"><p>A SecretProviderClass manifest is defining which objects to mount into a pod.</p></div>",
    nodes: [
      { id: "l1", label: "objectName: \"db-connection-string\"" },
      { id: "l2", label: "objectType: \"secret\"" },
      { id: "l3", label: "keyvaultName: \"prod-kv\"" },
      { id: "l4", label: "tenantId: \"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\"" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "The objectName property specifies the exact name of the Key Vault secret (or key/certificate) that the CSI driver should retrieve."
  },
  {
    id: 119,
    qid: "SC-500-MOD1-119",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that disables public network access on a Key Vault.",
    scenario: "<div class=\"scenario-text\"><p>A Key Vault resource template is being locked down to private-only connectivity.</p></div>",
    nodes: [
      { id: "l1", label: "\"publicNetworkAccess\": \"Disabled\"," },
      { id: "l2", label: "\"networkAcls\": { \"defaultAction\": \"Deny\" }," },
      { id: "l3", label: "\"enableSoftDelete\": true," },
      { id: "l4", label: "\"sku\": { \"family\": \"A\", \"name\": \"standard\" }" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "Setting publicNetworkAccess to \"Disabled\" is the explicit control that prevents any public endpoint connectivity to the Key Vault."
  },
  {
    id: 120,
    qid: "SC-500-MOD1-120",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that creates the federated identity credential for AKS Workload Identity.",
    scenario: "<div class=\"scenario-text\"><p>An infrastructure-as-code snippet is establishing trust between a Kubernetes service account and a user-assigned managed identity.</p></div>",
    nodes: [
      { id: "l1", label: "\"federatedIdentityCredentials\": [{" },
      { id: "l2", label: "\"issuer\": \"https://eastus.oic.prod-aks.azure.com/...\"," },
      { id: "l3", label: "\"subject\": \"system:serviceaccount:default:my-sa\"," },
      { id: "l4", label: "\"audiences\": [\"api://AzureADTokenExchange\"]" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "The federatedIdentityCredentials array (on the managed identity) is the property that defines the trust relationship used by Workload Identity."
  },
  // ========== SUBDOMAIN 4: Identity & Access Architecture (IDs 121-160) ==========
  // Single Choice (4)
  {
    id: 121,
    qid: "SC-500-MOD1-121",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "Which Microsoft Entra ID feature evaluates signals in real time to enforce adaptive access decisions based on risk, location, and device state?",
    scenario: "<div class=\"scenario-text\"><p>A security architect must implement Zero Trust access controls that grant or deny access dynamically rather than relying solely on static network location.</p></div>",
    options: [
      { id: "a", text: "Conditional Access" },
      { id: "b", text: "Access Reviews" },
      { id: "c", text: "Privileged Identity Management (PIM)" },
      { id: "d", text: "Entitlement Management" }
    ],
    correct: ["a"],
    explanation: "Conditional Access evaluates multiple signals (user risk, sign-in risk, device compliance, location, application) at authentication time to enforce adaptive policies. Access Reviews and PIM address governance and privileged access lifecycle; Entitlement Management handles package-based access."
  },
  {
    id: 122,
    qid: "SC-500-MOD1-122",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "What is the primary purpose of Microsoft Entra Privileged Identity Management (PIM)?",
    scenario: "<div class=\"scenario-text\"><p>An organization wants to eliminate standing administrative privileges and enforce just-in-time elevation with approval workflows and time-bound access.</p></div>",
    options: [
      { id: "a", text: "Provide just-in-time privileged role activation with approval, MFA, and time limits" },
      { id: "b", text: "Replace Conditional Access entirely" },
      { id: "c", text: "Automatically assign permanent Global Administrator rights" },
      { id: "d", text: "Manage only non-privileged group memberships" }
    ],
    correct: ["a"],
    explanation: "PIM enables just-in-time activation of privileged roles, requires MFA and approval, and enforces maximum activation duration. It complements Conditional Access and is focused on privileged access governance."
  },
  {
    id: 123,
    qid: "SC-500-MOD1-123",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "In a Zero Trust architecture, which principle requires continuous verification of every access request regardless of network location?",
    scenario: "<div class=\"scenario-text\"><p>A cybersecurity architect is designing an identity-centric security model that assumes breach and never trusts by default.</p></div>",
    options: [
      { id: "a", text: "Verify explicitly" },
      { id: "b", text: "Assume breach" },
      { id: "c", text: "Use least-privilege access" },
      { id: "d", text: "All of the above are Zero Trust principles" }
    ],
    correct: ["d"],
    explanation: "Zero Trust is built on three core principles: Verify explicitly, Use least-privilege access, and Assume breach. All three must be applied together."
  },
  {
    id: 124,
    qid: "SC-500-MOD1-124",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "Which Conditional Access grant control requires a device to be marked as compliant by Microsoft Intune before access is allowed?",
    scenario: "<div class=\"scenario-text\"><p>A company policy mandates that only managed and healthy devices may access corporate SaaS applications.</p></div>",
    options: [
      { id: "a", text: "Require device to be marked as compliant" },
      { id: "b", text: "Require multi-factor authentication" },
      { id: "c", text: "Require Hybrid Azure AD joined device" },
      { id: "d", text: "Require approved client app" }
    ],
    correct: ["a"],
    explanation: "The “Require device to be marked as compliant” grant control checks Intune compliance state. The other controls address MFA, join type, or client application restrictions."
  },
  // Multi-Select (12)
  {
    id: 125,
    qid: "SC-500-MOD1-125",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE signals that Conditional Access can evaluate when making an access decision.",
    scenario: "<div class=\"scenario-text\"><p>A security team is designing adaptive policies that react to real-time risk and context.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "User risk level (from Identity Protection)" },
      { id: "b", text: "Sign-in risk level" },
      { id: "c", text: "Device compliance state" },
      { id: "d", text: "Azure subscription spending" },
      { id: "e", text: "Number of virtual machines in the tenant" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Conditional Access evaluates identity risk, sign-in risk, device state, location, application, and client app. Subscription cost and VM count are not authentication signals."
  },
  {
    id: 126,
    qid: "SC-500-MOD1-126",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO benefits of enabling Microsoft Entra ID Protection.",
    scenario: "<div class=\"scenario-text\"><p>An organization wants automated detection and remediation of identity-based risks.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Detection of leaked credentials and anomalous sign-ins" },
      { id: "b", text: "Automatic risk-based Conditional Access policies" },
      { id: "c", text: "Replacement of all MFA requirements" },
      { id: "d", text: "Permanent elevation of all users to Global Administrator" },
      { id: "e", text: "Disablement of audit logs" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Identity Protection detects risky users and sign-ins and feeds risk signals into Conditional Access for automated remediation. It does not replace MFA or elevate privileges."
  },
  {
    id: 127,
    qid: "SC-500-MOD1-127",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE recommended practices when implementing Privileged Identity Management (PIM).",
    scenario: "<div class=\"scenario-text\"><p>A security governance team is rolling out PIM for all Azure and Microsoft Entra privileged roles.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Require MFA on activation" },
      { id: "b", text: "Require approval for highly privileged roles" },
      { id: "c", text: "Set maximum activation duration (e.g., 8 hours)" },
      { id: "d", text: "Assign permanent active Global Administrator to all IT staff" },
      { id: "e", text: "Disable access reviews for privileged roles" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "MFA on activation, approval workflows, and time-bound access are core PIM best practices. Standing privileges and disabled reviews increase risk."
  },
  {
    id: 128,
    qid: "SC-500-MOD1-128",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO Zero Trust design principles that directly influence identity architecture.",
    scenario: "<div class=\"scenario-text\"><p>An enterprise is aligning its identity strategy with the Microsoft Zero Trust maturity model.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Verify explicitly – always authenticate and authorize based on all available data points" },
      { id: "b", text: "Use least-privilege access – limit user access with Just-In-Time and Just-Enough-Access" },
      { id: "c", text: "Trust all traffic originating from the corporate network" },
      { id: "d", text: "Grant permanent standing privileges to reduce friction" },
      { id: "e", text: "Disable multi-factor authentication for internal users" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Verify explicitly and least-privilege access are foundational Zero Trust principles that drive Conditional Access, PIM, and continuous evaluation. Implicit trust and standing privileges contradict Zero Trust."
  },
  {
    id: 129,
    qid: "SC-500-MOD1-129",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE Conditional Access policy elements that must be configured for a complete policy.",
    scenario: "<div class=\"scenario-text\"><p>A security engineer is creating a new Conditional Access policy from scratch.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Assignments (Users and Groups / Workload identities)" },
      { id: "b", text: "Cloud apps or actions" },
      { id: "c", text: "Access controls (Grant / Session)" },
      { id: "d", text: "Azure Policy initiative assignment" },
      { id: "e", text: "NSG rule priority" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Every Conditional Access policy requires Assignments (who), Cloud apps or actions (what), and Access controls (how). Azure Policy and NSGs are separate control planes."
  },
  {
    id: 130,
    qid: "SC-500-MOD1-130",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO capabilities of Microsoft Entra Access Reviews.",
    scenario: "<div class=\"scenario-text\"><p>A compliance team needs periodic recertification of group memberships and application assignments.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Schedule recurring reviews of group membership or application access" },
      { id: "b", text: "Automate removal of access when reviewers deny continued membership" },
      { id: "c", text: "Replace Conditional Access risk policies" },
      { id: "d", text: "Automatically grant Global Administrator rights" },
      { id: "e", text: "Disable all audit logging" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Access Reviews enable scheduled recertification and can automatically remove access based on reviewer decisions. They complement, rather than replace, Conditional Access and do not elevate privileges."
  },
  {
    id: 131,
    qid: "SC-500-MOD1-131",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE identity protection risk detections that can trigger automated response.",
    scenario: "<div class=\"scenario-text\"><p>Identity Protection is configured to feed risk signals into Conditional Access.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Anonymous IP address" },
      { id: "b", text: "Atypical travel" },
      { id: "c", text: "Malware-linked IP address" },
      { id: "d", text: "Successful password change" },
      { id: "e", text: "User completed MFA challenge" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Anonymous IP, atypical travel, and malware-linked IP are common risk detections. Legitimate password changes and successful MFA are not treated as risk signals."
  },
  {
    id: 132,
    qid: "SC-500-MOD1-132",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO correct statements about Microsoft Entra ID Continuous Access Evaluation (CAE).",
    scenario: "<div class=\"scenario-text\"><p>A security architect wants near real-time enforcement of policy changes and account disablement.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "CAE enables near real-time revocation of tokens when a user is disabled or a policy changes" },
      { id: "b", text: "CAE works with supported applications that implement the CAE protocol" },
      { id: "c", text: "CAE completely eliminates the need for Conditional Access" },
      { id: "d", text: "CAE only applies to on-premises Active Directory" },
      { id: "e", text: "CAE requires disabling MFA" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Continuous Access Evaluation provides near real-time enforcement for critical events and requires application support. It enhances, rather than replaces, Conditional Access."
  },
  {
    id: 133,
    qid: "SC-500-MOD1-133",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE components of a mature Zero Trust identity architecture.",
    scenario: "<div class=\"scenario-text\"><p>An enterprise is assessing its current identity posture against Zero Trust maturity levels.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Phishing-resistant MFA (e.g., FIDO2, Windows Hello for Business)" },
      { id: "b", text: "Conditional Access with risk-based and device-based controls" },
      { id: "c", text: "Privileged Identity Management with just-in-time access" },
      { id: "d", text: "Shared passwords stored in plain-text files" },
      { id: "e", text: "Permanent Domain Admin accounts with no expiration" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Phishing-resistant MFA, adaptive Conditional Access, and JIT privileged access are hallmarks of a mature Zero Trust identity implementation. Shared passwords and standing Domain Admin rights are anti-patterns."
  },
  {
    id: 134,
    qid: "SC-500-MOD1-134",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO methods to enforce least-privilege access for Azure resources using Microsoft Entra ID.",
    scenario: "<div class=\"scenario-text\"><p>A cloud platform team wants to ensure administrators receive only the permissions they need, only when they need them.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Use Privileged Identity Management for eligible Azure RBAC roles" },
      { id: "b", text: "Assign permanent Owner rights on every subscription to the IT group" },
      { id: "c", text: "Implement Azure RBAC with custom roles that grant only required actions" },
      { id: "d", text: "Disable all Azure AD activity logs" },
      { id: "e", text: "Share a single Global Administrator account among the team" }
    ],
    correct: ["a", "c"],
    selectCount: 2,
    explanation: "PIM provides just-in-time elevation and custom RBAC roles enforce least privilege. Standing Owner rights, disabled logging, and shared accounts violate least-privilege principles."
  },
  {
    id: 135,
    qid: "SC-500-MOD1-135",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE Conditional Access session controls that can limit user experience after authentication.",
    scenario: "<div class=\"scenario-text\"><p>A policy must allow access but restrict what the user can do inside the application session.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Use app enforced restrictions" },
      { id: "b", text: "Use Conditional Access App Control (Microsoft Defender for Cloud Apps)" },
      { id: "c", text: "Sign-in frequency" },
      { id: "d", text: "Require password change on every sign-in" },
      { id: "e", text: "Disable all modern authentication" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "App enforced restrictions, Defender for Cloud Apps proxy, and sign-in frequency are valid session controls. Forced password change on every sign-in and disabling modern authentication are not standard session controls."
  },
  {
    id: 136,
    qid: "SC-500-MOD1-136",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO identity governance features that help maintain least-privilege over time.",
    scenario: "<div class=\"scenario-text\"><p>An organization needs ongoing governance of group memberships and application access packages.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Access Reviews" },
      { id: "b", text: "Entitlement Management (Access Packages)" },
      { id: "c", text: "Permanent nested group memberships with no expiration" },
      { id: "d", text: "Shared administrative accounts" },
      { id: "e", text: "Disabling Microsoft Entra audit logs" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Access Reviews provide periodic recertification; Entitlement Management packages access with expiration and approval workflows. Permanent nested memberships and shared accounts undermine governance."
  },
  // Drag and Drop (12)
  {
    id: 137,
    qid: "SC-500-MOD1-137",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each Microsoft Entra identity feature to its primary purpose.",
    scenario: "<div class=\"scenario-text\"><p>A security architect is mapping identity capabilities to Zero Trust requirements.</p></div>",
    items: [
      { id: "i1", text: "Conditional Access" },
      { id: "i2", text: "Privileged Identity Management" },
      { id: "i3", text: "Identity Protection" },
      { id: "i4", text: "Access Reviews" }
    ],
    zones: [
      { id: "z1", label: "Real-time adaptive access decisions based on signals" },
      { id: "z2", label: "Just-in-time privileged role activation and governance" },
      { id: "z3", label: "Detection and remediation of identity-based risks" },
      { id: "z4", label: "Periodic recertification of access rights" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Conditional Access enforces adaptive policy, PIM manages privileged access lifecycle, Identity Protection detects risk, and Access Reviews ensure ongoing least privilege."
  },
  {
    id: 138,
    qid: "SC-500-MOD1-138",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each Zero Trust principle to its identity-related implementation.",
    scenario: "<div class=\"scenario-text\"><p>An enterprise is documenting how identity controls map to Zero Trust principles.</p></div>",
    items: [
      { id: "i1", text: "Verify explicitly" },
      { id: "i2", text: "Use least-privilege access" },
      { id: "i3", text: "Assume breach" },
      { id: "i4", text: "Continuous evaluation" }
    ],
    zones: [
      { id: "z1", label: "Conditional Access evaluating risk, device, and location on every request" },
      { id: "z2", label: "PIM just-in-time activation and custom RBAC roles" },
      { id: "z3", label: "Segment access, monitor sessions, and prepare for lateral movement" },
      { id: "z4", label: "Continuous Access Evaluation and risk-based re-authentication" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Each Zero Trust principle is realized through specific identity and access controls."
  },
  {
    id: 139,
    qid: "SC-500-MOD1-139",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the Conditional Access control type to its examples.",
    scenario: "<div class=\"scenario-text\"><p>A policy author needs to distinguish between grant controls and session controls.</p></div>",
    items: [
      { id: "i1", text: "Grant controls" },
      { id: "i2", text: "Session controls" },
      { id: "i3", text: "Conditions" },
      { id: "i4", text: "Assignments" }
    ],
    zones: [
      { id: "z1", label: "Require MFA, require compliant device, require Hybrid join" },
      { id: "z2", label: "Sign-in frequency, app enforced restrictions, Cloud App Control" },
      { id: "z3", label: "User risk, sign-in risk, locations, device platforms" },
      { id: "z4", label: "Users/groups and cloud apps or actions" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Grant controls decide whether access is allowed, session controls limit the session, conditions define when the policy applies, and assignments define who and what."
  },
  {
    id: 140,
    qid: "SC-500-MOD1-140",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each PIM setting to its security effect.",
    scenario: "<div class=\"scenario-text\"><p>A governance team is configuring Privileged Identity Management for Azure roles.</p></div>",
    items: [
      { id: "i1", text: "Eligible assignment" },
      { id: "i2", text: "Active assignment" },
      { id: "i3", text: "Activation maximum duration" },
      { id: "i4", text: "Approval required" }
    ],
    zones: [
      { id: "z1", label: "User can activate the role when needed but does not have standing access" },
      { id: "z2", label: "User has permanent (standing) privileges" },
      { id: "z3", label: "Limits how long elevated access remains after activation" },
      { id: "z4", label: "Requires a designated approver before elevation is granted" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Eligible assignments support JIT, active assignments are standing, duration limits exposure windows, and approval adds a human control."
  },
  {
    id: 141,
    qid: "SC-500-MOD1-141",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the identity risk type to the typical automated response.",
    scenario: "<div class=\"scenario-text\"><p>Identity Protection risk policies are being tuned for automated remediation.</p></div>",
    items: [
      { id: "i1", text: "User risk – High" },
      { id: "i2", text: "Sign-in risk – Medium or High" },
      { id: "i3", text: "Leaked credentials" },
      { id: "i4", text: "Anonymous IP address" }
    ],
    zones: [
      { id: "z1", label: "Require password change or block the user" },
      { id: "z2", label: "Require MFA or block the sign-in" },
      { id: "z3", label: "Force password reset and investigate" },
      { id: "z4", label: "Require MFA or additional verification" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "High user risk typically forces credential remediation; sign-in risk triggers MFA or block; leaked credentials demand password reset; anonymous IPs raise the authentication bar."
  },
  {
    id: 142,
    qid: "SC-500-MOD1-142",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each authentication method to its phishing resistance level.",
    scenario: "<div class=\"scenario-text\"><p>A security team is prioritizing phishing-resistant MFA methods.</p></div>",
    items: [
      { id: "i1", text: "FIDO2 security key" },
      { id: "i2", text: "Windows Hello for Business" },
      { id: "i3", text: "Microsoft Authenticator (passwordless)" },
      { id: "i4", text: "SMS one-time passcode" }
    ],
    zones: [
      { id: "z1", label: "High – phishing resistant" },
      { id: "z2", label: "High – phishing resistant" },
      { id: "z3", label: "High – phishing resistant when configured as passwordless" },
      { id: "z4", label: "Low – susceptible to phishing and SIM swap" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "FIDO2, Windows Hello for Business, and passwordless Authenticator are phishing-resistant. SMS OTP is considered weak against modern phishing."
  },
  {
    id: 143,
    qid: "SC-500-MOD1-143",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the Conditional Access policy mode to its behavior.",
    scenario: "<div class=\"scenario-text\"><p>An administrator is testing a new Conditional Access policy before enforcing it.</p></div>",
    items: [
      { id: "i1", text: "Report-only mode" },
      { id: "i2", text: "On (enabled)" },
      { id: "i3", text: "Off" },
      { id: "i4", text: "What If tool" }
    ],
    zones: [
      { id: "z1", label: "Evaluates the policy and logs results without enforcing" },
      { id: "z2", label: "Actively enforces the policy for matching users" },
      { id: "z3", label: "Policy is not evaluated or enforced" },
      { id: "z4", label: "Simulates policy impact for a specific user and conditions" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Report-only allows safe evaluation, On enforces, Off disables, and the What If tool provides targeted simulation."
  },
  {
    id: 144,
    qid: "SC-500-MOD1-144",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each identity governance workload to the appropriate Microsoft Entra feature.",
    scenario: "<div class=\"scenario-text\"><p>A governance program is assigning ownership of different identity lifecycle processes.</p></div>",
    items: [
      { id: "i1", text: "Access Packages" },
      { id: "i2", text: "Access Reviews" },
      { id: "i3", text: "Terms of Use" },
      { id: "i4", text: "Lifecycle Workflows" }
    ],
    zones: [
      { id: "z1", label: "Bundle resources and enforce approval + expiration for access requests" },
      { id: "z2", label: "Periodic recertification of existing memberships or assignments" },
      { id: "z3", label: "Require users to accept policies before gaining access" },
      { id: "z4", label: "Automate joiner/mover/leaver identity tasks" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Entitlement Management (Access Packages), Access Reviews, Terms of Use, and Lifecycle Workflows each address distinct governance needs."
  },
  {
    id: 145,
    qid: "SC-500-MOD1-145",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the token lifetime related control to its effect.",
    scenario: "<div class=\"scenario-text\"><p>A security team is reducing the window of opportunity for stolen tokens.</p></div>",
    items: [
      { id: "i1", text: "Sign-in frequency (Conditional Access)" },
      { id: "i2", text: "Continuous Access Evaluation" },
      { id: "i3", text: "Refresh token revocation" },
      { id: "i4", text: "Primary Refresh Token (PRT) lifetime" }
    ],
    zones: [
      { id: "z1", label: "Forces re-authentication after a defined interval" },
      { id: "z2", label: "Enables near real-time enforcement of critical events" },
      { id: "z3", label: "Invalidates existing refresh tokens for a user or session" },
      { id: "z4", label: "Controls how long a device can maintain SSO without re-authentication" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Sign-in frequency, CAE, explicit revocation, and PRT lifetime all influence how long a session or token remains valid."
  },
  {
    id: 146,
    qid: "SC-500-MOD1-146",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the Microsoft Entra role to its typical privilege level.",
    scenario: "<div class=\"scenario-text\"><p>An identity administrator is designing a least-privilege role model.</p></div>",
    items: [
      { id: "i1", text: "Global Administrator" },
      { id: "i2", text: "Security Administrator" },
      { id: "i3", text: "User Administrator" },
      { id: "i4", text: "Global Reader" }
    ],
    zones: [
      { id: "z1", label: "Highest privilege – full control over the tenant" },
      { id: "z2", label: "Manages security-related features and Identity Protection" },
      { id: "z3", label: "Manages users, groups, and some service requests" },
      { id: "z4", label: "Read-only access across the entire directory" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Global Administrator is the most privileged; Security and User Administrators have scoped management rights; Global Reader is read-only."
  },
  {
    id: 147,
    qid: "SC-500-MOD1-147",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each device identity state to its Conditional Access implication.",
    scenario: "<div class=\"scenario-text\"><p>Device-based Conditional Access policies depend on accurate device identity.</p></div>",
    items: [
      { id: "i1", text: "Azure AD joined" },
      { id: "i2", text: "Hybrid Azure AD joined" },
      { id: "i3", text: "Azure AD registered" },
      { id: "i4", text: "Compliant (Intune)" }
    ],
    zones: [
      { id: "z1", label: "Cloud-only corporate device fully managed by Entra ID" },
      { id: "z2", label: "On-premises domain-joined device also registered in Entra ID" },
      { id: "z3", label: "BYOD device that has been registered for SSO and limited management" },
      { id: "z4", label: "Device meets organizational health and configuration requirements" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Join and registration states determine management capabilities; compliance is an additional health signal used by Conditional Access."
  },
  {
    id: 148,
    qid: "SC-500-MOD1-148",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the authentication strength (phishing-resistant) concept to its description.",
    scenario: "<div class=\"scenario-text\"><p>Conditional Access authentication strengths are being configured for high-value applications.</p></div>",
    items: [
      { id: "i1", text: "Phishing-resistant MFA strength" },
      { id: "i2", text: "Passwordless MFA strength" },
      { id: "i3", text: "Multifactor authentication strength" },
      { id: "i4", text: "Custom authentication strength" }
    ],
    zones: [
      { id: "z1", label: "Requires FIDO2, Windows Hello for Business, or certificate-based authentication" },
      { id: "z2", label: "Requires passwordless methods including Authenticator passwordless" },
      { id: "z3", label: "Requires any combination of methods that satisfy MFA" },
      { id: "z4", label: "Administrator-defined combination of specific authentication methods" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Authentication strengths allow fine-grained control over which methods satisfy a Conditional Access grant control."
  },
  // Visual Topology Hotspot (6)
  {
    id: 149,
    qid: "SC-500-MOD1-149",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that represents the Conditional Access engine evaluating signals in real time.",
    scenario: "<div class=\"scenario-text\"><p>The identity architecture diagram shows Microsoft Entra ID, Identity Protection, Conditional Access, and target applications.</p></div>",
    nodes: [
      { id: "node1", label: "Conditional Access\nEngine", "x": 45, "y": 40 },
      { id: "node2", label: "Identity Protection\nRisk Engine", "x": 20, "y": 25 },
      { id: "node3", label: "Target SaaS\nApplication", "x": 75, "y": 50 }
    ],
    correct: ["node1"],
    explanation: "The Conditional Access engine is the decision point that evaluates all configured signals and enforces the policy outcome."
  },
  {
    id: 150,
    qid: "SC-500-MOD1-150",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that provides just-in-time privileged role activation.",
    scenario: "<div class=\"scenario-text\"><p>The privileged access architecture includes PIM, standing roles, and approval workflows.</p></div>",
    nodes: [
      { id: "node1", label: "Privileged Identity\nManagement (PIM)", "x": 40, "y": 35 },
      { id: "node2", label: "Standing Global\nAdministrator", "x": 70, "y": 25 },
      { id: "node3", label: "Access Review\nCampaign", "x": 25, "y": 60 }
    ],
    correct: ["node1"],
    explanation: "Privileged Identity Management is the service that enables eligible, time-bound, and approval-gated activation of privileged roles."
  },
  {
    id: 151,
    qid: "SC-500-MOD1-151",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that detects and scores identity risk in real time.",
    scenario: "<div class=\"scenario-text\"><p>Risk signals flow from various detectors into a central risk engine that feeds Conditional Access.</p></div>",
    nodes: [
      { id: "node1", label: "Microsoft Entra\nID Protection", "x": 50, "y": 40 },
      { id: "node2", label: "Conditional Access\nPolicy", "x": 25, "y": 60 },
      { id: "node3", label: "Access Package\nCatalog", "x": 75, "y": 25 }
    ],
    correct: ["node1"],
    explanation: "Microsoft Entra ID Protection is the service that calculates user and sign-in risk scores used by Conditional Access."
  },
  {
    id: 152,
    qid: "SC-500-MOD1-152",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that represents a phishing-resistant authentication method.",
    scenario: "<div class=\"scenario-text\"><p>Multiple authentication methods are shown in an authentication strength configuration diagram.</p></div>",
    nodes: [
      { id: "node1", label: "FIDO2 Security\nKey", "x": 40, "y": 35 },
      { id: "node2", label: "SMS One-Time\nPasscode", "x": 70, "y": 50 },
      { id: "node3", label: "Security Questions", "x": 20, "y": 60 }
    ],
    correct: ["node1"],
    explanation: "FIDO2 security keys are phishing-resistant. SMS OTP and security questions are not considered phishing-resistant."
  },
  {
    id: 153,
    qid: "SC-500-MOD1-153",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that enforces device compliance before granting access to cloud apps.",
    scenario: "<div class=\"scenario-text\"><p>A Conditional Access policy diagram shows grant controls including MFA, compliant device, and approved client app.</p></div>",
    nodes: [
      { id: "node1", label: "Require device\nmarked as compliant", "x": 45, "y": 40 },
      { id: "node2", label: "Require MFA", "x": 20, "y": 25 },
      { id: "node3", label: "Require approved\nclient app", "x": 70, "y": 55 }
    ],
    correct: ["node1"],
    explanation: "The “Require device to be marked as compliant” grant control is the specific control that checks Intune compliance state."
  },
  {
    id: 154,
    qid: "SC-500-MOD1-154",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that represents Continuous Access Evaluation for near real-time enforcement.",
    scenario: "<div class=\"scenario-text\"><p>The token lifecycle diagram shows standard refresh token lifetimes and an additional real-time evaluation component.</p></div>",
    nodes: [
      { id: "node1", label: "Continuous Access\nEvaluation (CAE)", "x": 50, "y": 40 },
      { id: "node2", label: "Refresh Token\nLifetime", "x": 25, "y": 60 },
      { id: "node3", label: "Primary Refresh\nToken (PRT)", "x": 75, "y": 25 }
    ],
    correct: ["node1"],
    explanation: "Continuous Access Evaluation provides near real-time revocation and policy enforcement beyond standard token lifetimes."
  },
  // Config / Code Text Block Hotspot (6)
  {
    id: 155,
    qid: "SC-500-MOD1-155",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that requires multi-factor authentication as a grant control in a Conditional Access policy.",
    scenario: "<div class=\"scenario-text\"><p>A Conditional Access policy JSON/Graph representation is being reviewed for grant controls.</p></div>",
    nodes: [
      { id: "l1", label: "\"builtInControls\": [\"mfa\"]," },
      { id: "l2", label: "\"operator\": \"OR\"," },
      { id: "l3", label: "\"termsOfUse\": []" },
      { id: "l4", label: "\"authenticationStrength\": null" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "The builtInControls array containing \"mfa\" is the grant control that requires multi-factor authentication."
  },
  {
    id: 156,
    qid: "SC-500-MOD1-156",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that sets a Conditional Access policy to report-only mode.",
    scenario: "<div class=\"scenario-text\"><p>An administrator is safely testing a new Conditional Access policy before enforcement.</p></div>",
    nodes: [
      { id: "l1", label: "\"state\": \"enabledForReportingButNotEnforced\"," },
      { id: "l2", label: "\"state\": \"enabled\"," },
      { id: "l3", label: "\"state\": \"disabled\"," },
      { id: "l4", label: "\"conditions\": { \"applications\": { ... } }" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "The state value \"enabledForReportingButNotEnforced\" places the policy in report-only mode so it is evaluated and logged but not enforced."
  },
  {
    id: 157,
    qid: "SC-500-MOD1-157",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that configures an eligible assignment in Privileged Identity Management.",
    scenario: "<div class=\"scenario-text\"><p>A PIM role assignment is being defined via Microsoft Graph or ARM.</p></div>",
    nodes: [
      { id: "l1", label: "\"assignmentType\": \"Eligible\"," },
      { id: "l2", label: "\"assignmentType\": \"Active\"," },
      { id: "l3", label: "\"maximumActivationDuration\": \"PT8H\"," },
      { id: "l4", label: "\"requireApproval\": true" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "Setting assignmentType to \"Eligible\" creates a just-in-time eligible assignment rather than a standing active assignment."
  },
  {
    id: 158,
    qid: "SC-500-MOD1-158",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that requires a device to be marked as compliant in Conditional Access.",
    scenario: "<div class=\"scenario-text\"><p>A grant control section of a Conditional Access policy is under review.</p></div>",
    nodes: [
      { id: "l1", label: "\"builtInControls\": [\"compliantDevice\"]," },
      { id: "l2", label: "\"builtInControls\": [\"mfa\"]," },
      { id: "l3", label: "\"builtInControls\": [\"domainJoinedDevice\"]," },
      { id: "l4", label: "\"builtInControls\": [\"approvedApplication\"]" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "The builtInControls value \"compliantDevice\" is the specific grant control that requires Intune compliance."
  },
  {
    id: 159,
    qid: "SC-500-MOD1-159",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that enables Continuous Access Evaluation for a Conditional Access policy.",
    scenario: "<div class=\"scenario-text\"><p>A policy definition is being updated to support near real-time enforcement.</p></div>",
    nodes: [
      { id: "l1", label: "\"continuousAccessEvaluation\": { \"mode\": \"strictEnforcement\" }," },
      { id: "l2", label: "\"sessionControls\": { \"signInFrequency\": { ... } }," },
      { id: "l3", label: "\"grantControls\": { \"operator\": \"AND\" }," },
      { id: "l4", label: "\"conditions\": { \"userRiskLevels\": [\"high\"] }" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "The continuousAccessEvaluation property with mode \"strictEnforcement\" (or similar) enables Continuous Access Evaluation for the policy."
  },
  {
    id: 160,
    qid: "SC-500-MOD1-160",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that configures a high user-risk Conditional Access policy to block access.",
    scenario: "<div class=\"scenario-text\"><p>An Identity Protection-driven Conditional Access policy is being defined.</p></div>",
    nodes: [
      { id: "l1", label: "\"userRiskLevels\": [\"high\"]," },
      { id: "l2", label: "\"builtInControls\": [\"block\"]," },
      { id: "l3", label: "\"signInRiskLevels\": [\"medium\", \"high\"]," },
      { id: "l4", label: "\"clientAppTypes\": [\"all\"]" }
    ],
    correct: ["l2"],
    selectCount: 1,
    explanation: "The builtInControls value \"block\" is the grant control that denies access when the policy conditions (including high user risk) are met."
  },
    // ========== SUBDOMAIN 5: Threat Protection & Operations (IDs 161-200) ==========
  // Single Choice (4)
  {
    id: 161,
    qid: "SC-500-MOD1-161",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "Which Microsoft Sentinel component is used to normalize and parse raw log data into a structured schema for analytics?",
    scenario: "<div class=\"scenario-text\"><p>A SOC engineer is onboarding a new data source and needs the ingested events to appear in a consistent format so that analytic rules and hunting queries work reliably.</p></div>",
    options: [
      { id: "a", text: "Data connector + Normalization (ASIM / parsers)" },
      { id: "b", text: "Workbook only" },
      { id: "c", text: "Watchlist" },
      { id: "d", text: "Automation rule without playbook" }
    ],
    correct: ["a"],
    explanation: "Data connectors ingest the raw data; Advanced Security Information Model (ASIM) parsers and built-in normalization ensure events conform to a common schema used by analytic rules and hunting queries."
  },
  {
    id: 162,
    qid: "SC-500-MOD1-162",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "What is the primary purpose of a Microsoft Sentinel analytic rule?",
    scenario: "<div class=\"scenario-text\"><p>A detection engineer needs to automatically create incidents when specific suspicious patterns appear in log data.</p></div>",
    options: [
      { id: "a", text: "Query data on a schedule and create incidents (or alerts) when the query returns results" },
      { id: "b", text: "Store long-term archival data in a storage account" },
      { id: "c", text: "Replace the need for Log Analytics workspaces" },
      { id: "d", text: "Automatically remediate every high-severity recommendation in Defender for Cloud" }
    ],
    correct: ["a"],
    explanation: "Analytic rules run KQL queries on a defined schedule, evaluate results against thresholds, and generate alerts/incidents. They do not handle archival, replace workspaces, or perform Defender for Cloud remediation."
  },
  {
    id: 163,
    qid: "SC-500-MOD1-163",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "Which Azure service is the recommended destination for diagnostic logs when building a centralized Microsoft Sentinel workspace?",
    scenario: "<div class=\"scenario-text\"><p>An organization wants all security-relevant logs from Azure resources, Microsoft Entra ID, and Microsoft 365 to be available for correlation inside Sentinel.</p></div>",
    options: [
      { id: "a", text: "Log Analytics workspace (Sentinel-enabled)" },
      { id: "b", text: "Azure Storage account only" },
      { id: "c", text: "Event Hub without further routing" },
      { id: "d", text: "Azure Monitor Metrics only" }
    ],
    correct: ["a"],
    explanation: "Microsoft Sentinel is built on a Log Analytics workspace. Diagnostic settings, data connectors, and continuous export should target that workspace (or an Event Hub that ultimately feeds it)."
  },
  {
    id: 164,
    qid: "SC-500-MOD1-164",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "single",
    prompt: "What is the function of a Microsoft Sentinel playbook?",
    scenario: "<div class=\"scenario-text\"><p>A SOC team wants automated response actions (enrichment, isolation, notification) to execute when a high-severity incident is created.</p></div>",
    options: [
      { id: "a", text: "A Logic App-based automated response that can be triggered by an analytic rule or automation rule" },
      { id: "b", text: "A static KQL query used only for hunting" },
      { id: "c", text: "A workbook visualization template" },
      { id: "d", text: "A data connector configuration file" }
    ],
    correct: ["a"],
    explanation: "Playbooks are Azure Logic Apps (or Azure Functions in some cases) that implement automated response workflows. They are invoked by automation rules or analytic rules."
  },
  // Multi-Select (12)
  {
    id: 165,
    qid: "SC-500-MOD1-165",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE data sources that can be ingested into Microsoft Sentinel via native connectors.",
    scenario: "<div class=\"scenario-text\"><p>A SOC architect is designing the initial data ingestion strategy for a new Sentinel workspace.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Microsoft Entra ID sign-in and audit logs" },
      { id: "b", text: "Microsoft Defender for Cloud security alerts" },
      { id: "c", text: "Azure Activity logs" },
      { id: "d", text: "On-premises Active Directory domain controller event logs via AMA only (no connector needed)" },
      { id: "e", text: "Local Windows Event Logs without any agent or connector" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Native connectors exist for Entra ID, Defender for Cloud, Azure Activity, and many other Microsoft and third-party sources. On-premises AD and local Windows logs require the Azure Monitor Agent (AMA) plus appropriate data collection rules or connectors."
  },
  {
    id: 166,
    qid: "SC-500-MOD1-166",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO methods to reduce noise and improve signal quality in Microsoft Sentinel.",
    scenario: "<div class=\"scenario-text\"><p>Analytic rules are generating too many low-fidelity incidents, overwhelming the SOC.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Tune analytic rule thresholds, entity mapping, and suppression" },
      { id: "b", text: "Use automation rules to auto-close or tag low-severity incidents" },
      { id: "c", text: "Disable all data connectors" },
      { id: "d", text: "Delete the Log Analytics workspace" },
      { id: "e", text: "Grant every analyst Global Administrator rights" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Rule tuning (query logic, thresholds, suppression) and automation rules that auto-close or enrich low-value incidents are standard noise-reduction techniques. Disabling connectors or the workspace removes visibility."
  },
  {
    id: 167,
    qid: "SC-500-MOD1-167",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE components of a Microsoft Sentinel incident response workflow.",
    scenario: "<div class=\"scenario-text\"><p>A SOC lead is documenting the end-to-end process from detection to resolution.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Analytic rule creates an alert/incident" },
      { id: "b", text: "Automation rule or playbook performs enrichment and response actions" },
      { id: "c", text: "Analyst investigates, triages, and closes the incident" },
      { id: "d", text: "Disable Soft Delete on all Key Vaults" },
      { id: "e", text: "Remove all NSG rules from production subnets" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Detection (analytic rule), automated response (automation rule/playbook), and human investigation/closure form the core incident lifecycle. The other options are unrelated security misconfigurations."
  },
  {
    id: 168,
    qid: "SC-500-MOD1-168",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO correct statements about Microsoft Sentinel data retention and cost control.",
    scenario: "<div class=\"scenario-text\"><p>A platform team must balance long-term investigation needs against Log Analytics ingestion and retention costs.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Interactive retention can be configured up to 2 years; archive tier provides longer-term storage at lower cost" },
      { id: "b", text: "Basic Logs table plan reduces cost for high-volume, low-value data that is queried infrequently" },
      { id: "c", text: "All data must be retained interactively for 7 years with no cost impact" },
      { id: "d", text: "Disabling all analytic rules reduces ingestion costs" },
      { id: "e", text: "Sentinel does not support any form of data archiving" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Interactive retention and the Archive tier, plus Basic Logs, are the primary cost-control and retention mechanisms. Analytic rules do not affect ingestion volume; archiving is fully supported."
  },
  {
    id: 169,
    qid: "SC-500-MOD1-169",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE security baselines that should be applied as part of a cloud security operations program.",
    scenario: "<div class=\"scenario-text\"><p>A cybersecurity architect is defining the minimum security configuration standards for Azure and Microsoft 365 workloads.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Microsoft Cloud Security Benchmark (MCSB)" },
      { id: "b", text: "CIS Microsoft Azure Foundations Benchmark" },
      { id: "c", text: "Microsoft 365 security baselines (via Intune / Security Compliance Toolkit)" },
      { id: "d", text: "Disable all diagnostic logging" },
      { id: "e", text: "Grant Owner rights to every developer on all subscriptions" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "MCSB, CIS benchmarks, and Microsoft 365 security baselines are industry-recognized configuration standards. Disabling logging and broad Owner rights contradict security baseline principles."
  },
  {
    id: 170,
    qid: "SC-500-MOD1-170",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO ways to route Azure resource diagnostic logs to Microsoft Sentinel.",
    scenario: "<div class=\"scenario-text\"><p>An operations team needs diagnostic logs from Key Vault, Storage, and NSGs available inside the Sentinel workspace.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Configure diagnostic settings on each resource (or via Azure Policy) to send logs to the Log Analytics workspace" },
      { id: "b", text: "Use the Azure Activity log connector and resource-specific connectors where available" },
      { id: "c", text: "Store logs only in a storage account and never query them" },
      { id: "d", text: "Disable diagnostic settings on all resources" },
      { id: "e", text: "Rely solely on NSG flow logs without any other telemetry" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Diagnostic settings (direct to Log Analytics or via Event Hub) and native Sentinel connectors are the standard ingestion paths. Storage-only or disabled logging prevents effective detection."
  },
  {
    id: 171,
    qid: "SC-500-MOD1-171",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE capabilities of Microsoft Sentinel workbooks.",
    scenario: "<div class=\"scenario-text\"><p>A SOC manager wants visual dashboards for executives and detailed investigation views for analysts.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Interactive visualizations of security data using KQL" },
      { id: "b", text: "Parameter-driven filtering for different audiences or time ranges" },
      { id: "c", text: "Export and sharing of workbook templates across workspaces" },
      { id: "d", text: "Automatic creation of Azure Firewall rules" },
      { id: "e", text: "Replacement of all analytic rules" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Workbooks provide interactive, parameterized visualizations and can be exported as templates. They do not create firewall rules or replace detection logic."
  },
  {
    id: 172,
    qid: "SC-500-MOD1-172",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO correct statements about Microsoft Sentinel automation rules.",
    scenario: "<div class=\"scenario-text\"><p>A detection engineer wants to automatically tag, assign, or run playbooks when incidents meet certain criteria.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Automation rules can run when an incident is created or updated" },
      { id: "b", text: "Automation rules can trigger playbooks, change severity, assign owners, and add tags" },
      { id: "c", text: "Automation rules replace the need for analytic rules" },
      { id: "d", text: "Automation rules can only be triggered manually by an analyst" },
      { id: "e", text: "Automation rules require the workspace to be in a special premium SKU" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Automation rules react to incident creation/update events and can perform a range of actions including playbook invocation. They complement analytic rules and do not require a special SKU."
  },
  {
    id: 173,
    qid: "SC-500-MOD1-173",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE best practices when designing a Microsoft Sentinel architecture for a large enterprise.",
    scenario: "<div class=\"scenario-text\"><p>A global organization needs a scalable, cost-effective, and resilient security operations platform.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Use a central Sentinel workspace with appropriate data collection rules and RBAC" },
      { id: "b", text: "Apply the Microsoft Cloud Security Benchmark and continuous export from Defender for Cloud" },
      { id: "c", text: "Implement role-based access and just-in-time access for SOC analysts via PIM" },
      { id: "d", text: "Ingest every possible log at the highest verbosity with no filtering" },
      { id: "e", text: "Grant Contributor rights on the workspace to all employees" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Centralized workspace design, alignment with security benchmarks, and least-privilege access for analysts are foundational. Unfiltered high-volume ingestion and overly broad permissions create cost and security problems."
  },
  {
    id: 174,
    qid: "SC-500-MOD1-174",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO methods to integrate Microsoft Defender XDR signals into Microsoft Sentinel.",
    scenario: "<div class=\"scenario-text\"><p>A SOC wants unified incident correlation across Defender for Endpoint, Identity, Office 365, and Cloud Apps together with Azure telemetry.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Enable the Microsoft Defender XDR data connector in Sentinel" },
      { id: "b", text: "Use the Microsoft 365 Defender incident connector / correlation features" },
      { id: "c", text: "Manually copy alerts into a spreadsheet" },
      { id: "d", text: "Disable all Defender XDR sensors" },
      { id: "e", text: "Rely solely on NSG flow logs for endpoint detection" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "Native Defender XDR / Microsoft 365 Defender connectors bring incidents, alerts, and advanced hunting data into Sentinel for unified investigation. Manual processes and disabled sensors reduce visibility."
  },
  {
    id: 175,
    qid: "SC-500-MOD1-175",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select THREE KQL-related capabilities used in Microsoft Sentinel detection and hunting.",
    scenario: "<div class=\"scenario-text\"><p>Detection engineers and threat hunters rely on Kusto Query Language for both scheduled rules and interactive investigations.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    options: [
      { id: "a", text: "Scheduled analytic rules written in KQL" },
      { id: "b", text: "Hunting queries saved and shared across the workspace" },
      { id: "c", text: "Notebooks (Azure ML / Jupyter) that execute KQL against the workspace" },
      { id: "d", text: "Automatic conversion of all KQL into Python without review" },
      { id: "e", text: "Replacement of KQL with SQL for all Sentinel queries" }
    ],
    correct: ["a", "b", "c"],
    selectCount: 3,
    explanation: "Analytic rules, hunting queries, and notebooks all leverage KQL. There is no automatic KQL-to-Python conversion as a primary feature, and SQL is not the native query language of Log Analytics/Sentinel."
  },
  {
    id: 176,
    qid: "SC-500-MOD1-176",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "multiselect",
    prompt: "Select TWO benefits of using the Advanced Security Information Model (ASIM) in Microsoft Sentinel.",
    scenario: "<div class=\"scenario-text\"><p>A content developer wants analytic rules and hunting queries to work across multiple data sources without rewriting logic for each schema.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    options: [
      { id: "a", text: "Provides a normalized schema so the same detection logic works across different source types" },
      { id: "b", text: "Reduces the need to maintain source-specific parsers for every new connector" },
      { id: "c", text: "Automatically deletes all raw logs after 24 hours" },
      { id: "d", text: "Replaces the need for any data connectors" },
      { id: "e", text: "Forces all data into a single non-extensible table" }
    ],
    correct: ["a", "b"],
    selectCount: 2,
    explanation: "ASIM normalizes diverse source schemas into a common model, enabling portable detections and reducing parser maintenance. It does not delete data or eliminate connectors."
  },
  // Drag and Drop (12)
  {
    id: 177,
    qid: "SC-500-MOD1-177",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each Microsoft Sentinel component to its primary function.",
    scenario: "<div class=\"scenario-text\"><p>A new SOC analyst is learning the core building blocks of the platform.</p></div>",
    items: [
      { id: "i1", text: "Data connector" },
      { id: "i2", text: "Analytic rule" },
      { id: "i3", text: "Playbook" },
      { id: "i4", text: "Workbook" }
    ],
    zones: [
      { id: "z1", label: "Ingests logs and alerts from Microsoft and third-party sources" },
      { id: "z2", label: "Runs scheduled KQL and creates incidents when matches are found" },
      { id: "z3", label: "Executes automated response actions via Logic Apps" },
      { id: "z4", label: "Provides interactive visualizations and dashboards" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Connectors bring data in, analytic rules detect, playbooks respond, and workbooks visualize."
  },
  {
    id: 178,
    qid: "SC-500-MOD1-178",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each log routing mechanism to its typical use case.",
    scenario: "<div class=\"scenario-text\"><p>An architect is deciding how different telemetry types should reach the Sentinel workspace.</p></div>",
    items: [
      { id: "i1", text: "Diagnostic settings → Log Analytics" },
      { id: "i2", text: "Diagnostic settings → Event Hub" },
      { id: "i3", text: "Continuous export (Defender for Cloud)" },
      { id: "i4", text: "Azure Monitor Agent + DCR" }
    ],
    zones: [
      { id: "z1", label: "Direct ingestion of Azure resource logs into the workspace" },
      { id: "z2", label: "Streaming to third-party SIEM or custom pipelines" },
      { id: "z3", label: "Export of recommendations, alerts, and Secure Score" },
      { id: "z4", label: "Collection of guest OS and custom logs from VMs and Arc machines" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Each routing path serves a distinct operational or integration requirement."
  },
  {
    id: 179,
    qid: "SC-500-MOD1-179",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the Sentinel incident lifecycle stage to the typical activity.",
    scenario: "<div class=\"scenario-text\"><p>A SOC process document maps activities to incident stages.</p></div>",
    items: [
      { id: "i1", text: "Detection" },
      { id: "i2", text: "Triage" },
      { id: "i3", text: "Investigation" },
      { id: "i4", text: "Remediation / Closure" }
    ],
    zones: [
      { id: "z1", label: "Analytic rule or XDR alert creates an incident" },
      { id: "z2", label: "Analyst reviews severity, entities, and false-positive likelihood" },
      { id: "z3", label: "Deep dive with entity pages, hunting queries, and evidence collection" },
      { id: "z4", label: "Containment actions, playbook execution, and incident resolution" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "The four stages form a standard security operations incident lifecycle."
  },
  {
    id: 180,
    qid: "SC-500-MOD1-180",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each cost-control feature in Log Analytics / Sentinel to its purpose.",
    scenario: "<div class=\"scenario-text\"><p>A FinOps and SOC joint team is optimizing workspace costs.</p></div>",
    items: [
      { id: "i1", text: "Basic Logs" },
      { id: "i2", text: "Archive tier" },
      { id: "i3", text: "Data collection rules (filtering)" },
      { id: "i4", text: "Commitment tier / capacity reservation" }
    ],
    zones: [
      { id: "z1", label: "Lower-cost ingestion for high-volume tables queried infrequently" },
      { id: "z2", label: "Long-term retention at reduced storage cost" },
      { id: "z3", label: "Reduce volume by collecting only needed events and fields" },
      { id: "z4", label: "Discounted pricing for predictable daily ingestion volumes" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Each feature targets a different dimension of cost: table plan, retention, volume, or pricing commitment."
  },
  {
    id: 181,
    qid: "SC-500-MOD1-181",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the security baseline to the environment it primarily covers.",
    scenario: "<div class=\"scenario-text\"><p>A compliance program is mapping baselines to technology stacks.</p></div>",
    items: [
      { id: "i1", text: "Microsoft Cloud Security Benchmark" },
      { id: "i2", text: "CIS Azure Foundations Benchmark" },
      { id: "i3", text: "Microsoft 365 security baselines" },
      { id: "i4", text: "Azure Security Benchmark (legacy name)" }
    ],
    zones: [
      { id: "z1", label: "Broad multi-cloud and Azure guidance maintained by Microsoft" },
      { id: "z2", label: "Community-driven Azure configuration recommendations" },
      { id: "z3", label: "Intune / Windows / Microsoft 365 service configuration standards" },
      { id: "z4", label: "Earlier Microsoft guidance now largely superseded by MCSB" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "MCSB is the current Microsoft multi-cloud benchmark; CIS is independent; M365 baselines cover productivity services; the older Azure Security Benchmark has been integrated into MCSB."
  },
  {
    id: 182,
    qid: "SC-500-MOD1-182",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the Sentinel content type to its typical author or source.",
    scenario: "<div class=\"scenario-text\"><p>A content management process is classifying different types of Sentinel artifacts.</p></div>",
    items: [
      { id: "i1", text: "Out-of-the-box analytic rules" },
      { id: "i2", text: "Custom hunting queries" },
      { id: "i3", text: "Community content (GitHub / Content Hub)" },
      { id: "i4", text: "Playbooks from Microsoft or partners" }
    ],
    zones: [
      { id: "z1", label: "Provided by Microsoft and enabled via Content Hub solutions" },
      { id: "z2", label: "Written by the local SOC or detection engineering team" },
      { id: "z3", label: "Shared by the broader Sentinel community and Microsoft" },
      { id: "z4", label: "Logic App templates that implement response actions" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Content originates from Microsoft, the local team, the community, or as reusable automation templates."
  },
  {
    id: 183,
    qid: "SC-500-MOD1-183",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match each automation capability to the component that provides it.",
    scenario: "<div class=\"scenario-text\"><p>A SOC automation roadmap maps capabilities to Sentinel features.</p></div>",
    items: [
      { id: "i1", text: "Automation rule" },
      { id: "i2", text: "Playbook (Logic App)" },
      { id: "i3", text: "Analytic rule automation" },
      { id: "i4", text: "Watchlist" }
    ],
    zones: [
      { id: "z1", label: "Triggers on incident create/update and can call playbooks or change incident properties" },
      { id: "z2", label: "Implements complex multi-step response logic and external integrations" },
      { id: "z3", label: "Can automatically run a playbook when the rule fires" },
      { id: "z4", label: "Provides lookup data that rules and playbooks can reference" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Automation rules orchestrate, playbooks execute, analytic rules can invoke automation, and watchlists supply reference data."
  },
  {
    id: 184,
    qid: "SC-500-MOD1-184",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the diagnostic setting destination to the downstream consumer.",
    scenario: "<div class=\"scenario-text\"><p>Different teams consume security telemetry for different purposes.</p></div>",
    items: [
      { id: "i1", text: "Log Analytics workspace (Sentinel)" },
      { id: "i2", text: "Storage account" },
      { id: "i3", text: "Event Hub" },
      { id: "i4", text: "Partner solution via Event Hub" }
    ],
    zones: [
      { id: "z1", label: "Microsoft Sentinel analytics, hunting, and incident management" },
      { id: "z2", label: "Long-term compliance archival and occasional retrieval" },
      { id: "z3", label: "Streaming platform for custom or multi-destination pipelines" },
      { id: "z4", label: "Third-party SIEM or SOAR platforms" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Each destination serves a distinct operational or compliance use case."
  },
  {
    id: 185,
    qid: "SC-500-MOD1-185",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the Microsoft Sentinel entity type to a typical investigation use.",
    scenario: "<div class=\"scenario-text\"><p>Analysts pivot across entities while investigating an incident.</p></div>",
    items: [
      { id: "i1", text: "Account" },
      { id: "i2", text: "Host" },
      { id: "i3", text: "IP address" },
      { id: "i4", text: "URL / File hash" }
    ],
    zones: [
      { id: "z1", label: "Identify related sign-ins, group memberships, and risk history" },
      { id: "z2", label: "Review process execution, network connections, and alerts on the machine" },
      { id: "z3", label: "Correlate geolocation, threat intelligence, and related alerts" },
      { id: "z4", label: "Check reputation, malware associations, and delivery vectors" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Entity pages and investigation graphs let analysts pivot across these common entity types."
  },
  {
    id: 186,
    qid: "SC-500-MOD1-186",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the security operations maturity activity to the corresponding Sentinel capability.",
    scenario: "<div class=\"scenario-text\"><p>A maturity assessment is mapping SOC capabilities to platform features.</p></div>",
    items: [
      { id: "i1", text: "Detection engineering" },
      { id: "i2", text: "Threat hunting" },
      { id: "i3", text: "Incident response automation" },
      { id: "i4", text: "Reporting and metrics" }
    ],
    zones: [
      { id: "z1", label: "Analytic rules, ASIM parsers, and Content Hub solutions" },
      { id: "z2", label: "Hunting queries, notebooks, and bookmarks" },
      { id: "z3", label: "Automation rules and playbooks" },
      { id: "z4", label: "Workbooks, incident metrics, and Secure Score integration" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Each SOC function is supported by a specific set of Sentinel features."
  },
  {
    id: 187,
    qid: "SC-500-MOD1-187",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the log source to the recommended ingestion method for Sentinel.",
    scenario: "<div class=\"scenario-text\"><p>A data onboarding checklist is being prepared for multiple source types.</p></div>",
    items: [
      { id: "i1", text: "Microsoft Entra ID logs" },
      { id: "i2", text: "Windows Security Event logs from VMs" },
      { id: "i3", text: "AWS CloudTrail" },
      { id: "i4", text: "Custom application logs" }
    ],
    zones: [
      { id: "z1", label: "Native Microsoft Entra ID data connector" },
      { id: "z2", label: "Azure Monitor Agent + Data Collection Rule (or legacy MMA)" },
      { id: "z3", label: "Amazon Web Services connector / S3 via data connector" },
      { id: "z4", label: "Custom logs via AMA, HTTP Data Collector API, or Logstash" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Each source type has a preferred, supported ingestion path into Sentinel."
  },
  {
    id: 188,
    qid: "SC-500-MOD1-188",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "dragdrop",
    prompt: "Match the Sentinel RBAC role to its typical permissions.",
    scenario: "<div class=\"scenario-text\"><p>A least-privilege model is being defined for SOC personnel.</p></div>",
    items: [
      { id: "i1", text: "Microsoft Sentinel Reader" },
      { id: "i2", text: "Microsoft Sentinel Responder" },
      { id: "i3", text: "Microsoft Sentinel Contributor" },
      { id: "i4", text: "Microsoft Sentinel Automation Contributor" }
    ],
    zones: [
      { id: "z1", label: "View data, incidents, workbooks, and analytics" },
      { id: "z2", label: "Manage incidents (assign, close, comment) in addition to read" },
      { id: "z3", label: "Create and edit analytic rules, workbooks, and other content" },
      { id: "z4", label: "Add playbooks to automation rules / analytic rules" }
    ],
    correct: {
      z1: ["i1"],
      z2: ["i2"],
      z3: ["i3"],
      z4: ["i4"]
    },
    explanation: "Sentinel provides built-in roles that separate read, incident management, content authoring, and automation permissions."
  },
  // Visual Topology Hotspot (6)
  {
    id: 189,
    qid: "SC-500-MOD1-189",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that represents the central Microsoft Sentinel workspace receiving telemetry.",
    scenario: "<div class=\"scenario-text\"><p>The architecture shows multiple data sources, connectors, a Log Analytics workspace, and downstream SOC processes.</p></div>",
    nodes: [
      { id: "node1", label: "Microsoft Sentinel\n(Log Analytics Workspace)", "x": 45, "y": 40 },
      { id: "node2", label: "Azure Activity\nLog Connector", "x": 20, "y": 20 },
      { id: "node3", label: "Playbook\n(Logic App)", "x": 70, "y": 60 }
    ],
    correct: ["node1"],
    explanation: "The Sentinel-enabled Log Analytics workspace is the central repository and analytics engine."
  },
  {
    id: 190,
    qid: "SC-500-MOD1-190",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that creates incidents from scheduled KQL queries.",
    scenario: "<div class=\"scenario-text\"><p>The detection flow shows data ingestion, analytic rules, automation rules, and incident queue.</p></div>",
    nodes: [
      { id: "node1", label: "Analytic Rule", "x": 40, "y": 35 },
      { id: "node2", label: "Data Connector", "x": 20, "y": 60 },
      { id: "node3", label: "Workbook", "x": 70, "y": 25 }
    ],
    correct: ["node1"],
    explanation: "Analytic rules are the component that runs scheduled KQL and generates alerts/incidents."
  },
  {
    id: 191,
    qid: "SC-500-MOD1-191",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that executes automated response actions when an incident is created.",
    scenario: "<div class=\"scenario-text\"><p>The response architecture includes automation rules, playbooks, and external systems (ticketing, isolation, notification).</p></div>",
    nodes: [
      { id: "node1", label: "Playbook\n(Logic App)", "x": 50, "y": 40 },
      { id: "node2", label: "Analytic Rule", "x": 25, "y": 25 },
      { id: "node3", label: "Watchlist", "x": 75, "y": 60 }
    ],
    correct: ["node1"],
    explanation: "Playbooks (Logic Apps) implement the actual automated response steps triggered by automation rules or analytic rules."
  },
  {
    id: 192,
    qid: "SC-500-MOD1-192",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that represents the Microsoft Cloud Security Benchmark being assessed.",
    scenario: "<div class=\"scenario-text\"><p>A continuous compliance architecture shows Defender for Cloud, regulatory standards, and security baselines.</p></div>",
    nodes: [
      { id: "node1", label: "Microsoft Cloud\nSecurity Benchmark", "x": 45, "y": 35 },
      { id: "node2", label: "Sentinel\nWorkbook", "x": 20, "y": 60 },
      { id: "node3", label: "Azure Policy\nAssignment", "x": 70, "y": 55 }
    ],
    correct: ["node1"],
    explanation: "The Microsoft Cloud Security Benchmark is the Microsoft-maintained set of security recommendations assessed by Defender for Cloud and related tools."
  },
  {
    id: 193,
    qid: "SC-500-MOD1-193",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that normalizes diverse log schemas into a common model for detections.",
    scenario: "<div class=\"scenario-text\"><p>Multiple data sources with different schemas feed into parsers before analytic rules run.</p></div>",
    nodes: [
      { id: "node1", label: "ASIM Parsers /\nNormalization", "x": 40, "y": 40 },
      { id: "node2", label: "Raw Custom\nLog Table", "x": 20, "y": 20 },
      { id: "node3", label: "Incident\nQueue", "x": 70, "y": 55 }
    ],
    correct: ["node1"],
    explanation: "ASIM (Advanced Security Information Model) parsers normalize source-specific schemas into a common model used by portable analytic rules."
  },
  {
    id: 194,
    qid: "SC-500-MOD1-194",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: false,
    prompt: "Select the node that provides long-term, lower-cost storage for historical security data.",
    scenario: "<div class=\"scenario-text\"><p>The data lifecycle diagram shows interactive retention, archive tier, and restore operations.</p></div>",
    nodes: [
      { id: "node1", label: "Archive Tier\n(Log Analytics)", "x": 50, "y": 45 },
      { id: "node2", label: "Interactive\nRetention", "x": 25, "y": 25 },
      { id: "node3", label: "Basic Logs\nTable Plan", "x": 75, "y": 25 }
    ],
    correct: ["node1"],
    explanation: "The Archive tier provides cost-effective long-term retention with the ability to restore data for investigation when needed."
  },
  // Config / Code Text Block Hotspot (6)
  {
    id: 195,
    qid: "SC-500-MOD1-195",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that defines the KQL query used by a Microsoft Sentinel analytic rule.",
    scenario: "<div class=\"scenario-text\"><p>An analytic rule ARM/Bicep or API definition is being reviewed for its detection logic.</p></div>",
    nodes: [
      { id: "l1", label: "\"query\": \"SecurityEvent | where EventID == 4625 | summarize count() by Account\"," },
      { id: "l2", label: "\"displayName\": \"Failed Logon Attempts\"," },
      { id: "l3", label: "\"severity\": \"Medium\"," },
      { id: "l4", label: "\"queryFrequency\": \"PT1H\"" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "The query property contains the KQL that is executed on the defined schedule to detect the suspicious pattern."
  },
  {
    id: 196,
    qid: "SC-500-MOD1-196",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that configures a diagnostic setting to send logs to a Log Analytics workspace used by Sentinel.",
    scenario: "<div class=\"scenario-text\"><p>A resource diagnostic setting is being defined for a Key Vault.</p></div>",
    nodes: [
      { id: "l1", label: "\"workspaceId\": \"/subscriptions/.../workspaces/sentinel-workspace\"," },
      { id: "l2", label: "\"storageAccountId\": \"/subscriptions/.../storageAccounts/archive\"," },
      { id: "l3", label: "\"eventHubAuthorizationRuleId\": \"...\"," },
      { id: "l4", label: "\"logs\": [{ \"category\": \"AuditEvent\", \"enabled\": true }]" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "The workspaceId property directs the diagnostic logs to the specified Log Analytics workspace that backs Microsoft Sentinel."
  },
  {
    id: 197,
    qid: "SC-500-MOD1-197",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that triggers a playbook from a Microsoft Sentinel automation rule.",
    scenario: "<div class=\"scenario-text\"><p>An automation rule definition is being reviewed for response actions.</p></div>",
    nodes: [
      { id: "l1", label: "\"actionType\": \"RunPlaybook\"," },
      { id: "l2", label: "\"actionType\": \"ChangeStatus\"," },
      { id: "l3", label: "\"actionType\": \"AddTags\"," },
      { id: "l4", label: "\"order\": 1" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "The actionType value \"RunPlaybook\" is the action that invokes a Logic App playbook when the automation rule conditions are met."
  },
  {
    id: 198,
    qid: "SC-500-MOD1-198",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that sets the query frequency for a scheduled analytic rule.",
    scenario: "<div class=\"scenario-text\"><p>An analytic rule is being tuned for how often it should evaluate the workspace data.</p></div>",
    nodes: [
      { id: "l1", label: "\"queryFrequency\": \"PT5H\"," },
      { id: "l2", label: "\"queryPeriod\": \"PT5H\"," },
      { id: "l3", label: "\"triggerOperator\": \"GreaterThan\"," },
      { id: "l4", label: "\"triggerThreshold\": 0" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "queryFrequency defines how often the rule runs (e.g., every 5 hours). queryPeriod defines the look-back window for the query itself."
  },
  {
    id: 199,
    qid: "SC-500-MOD1-199",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that enables the Microsoft Defender XDR data connector in Sentinel (conceptual property).",
    scenario: "<div class=\"scenario-text\"><p>A data connector configuration is being reviewed for Microsoft 365 Defender / XDR integration.</p></div>",
    nodes: [
      { id: "l1", label: "\"dataTypes\": [\"Incidents\", \"Alerts\", \"AdvancedHunting\"]," },
      { id: "l2", label: "\"tenantId\": \"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\"," },
      { id: "l3", label: "\"kind\": \"Office365\"," },
      { id: "l4", label: "\"isEnabled\": true" }
    ],
    correct: ["l1"],
    selectCount: 1,
    explanation: "Specifying the dataTypes (Incidents, Alerts, AdvancedHunting, etc.) determines which Microsoft Defender XDR signals are ingested into the Sentinel workspace."
  },
  {
    id: 200,
    qid: "SC-500-MOD1-200",
    moduleId: "mod1",
    module: "Cloud Security Architecture",
    domain: "Microsoft Certified: Cybersecurity Architect / Security Operations",
    type: "hotspot",
    useConfigHotspot: true,
    prompt: "Click the line that configures archive retention for a Log Analytics table used by Sentinel.",
    scenario: "<div class=\"scenario-text\"><p>A table-level retention policy is being set to balance interactive access and long-term storage cost.</p></div>",
    nodes: [
      { id: "l1", label: "\"retentionInDays\": 90," },
      { id: "l2", label: "\"totalRetentionInDays\": 365," },
      { id: "l3", label: "\"archiveRetentionInDays\": 275," },
      { id: "l4", label: "\"plan\": \"Analytics\"" }
    ],
    correct: ["l3"],
    selectCount: 1,
    explanation: "archiveRetentionInDays (or the equivalent totalRetentionInDays minus interactive retention) controls how long data remains in the lower-cost Archive tier after leaving interactive retention."
  },
  {
    "id": 1,
    "qid": "SC-500-MOD2-001",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra ID Protection risk detection is evaluated offline using machine learning on historical sign-in data rather than in real time?",
    "scenario": "<div class=\"scenario-text\"><p>A security architect is designing risk-based Conditional Access policies. The team must distinguish real-time detections from those that require asynchronous processing to avoid false positives during policy evaluation.</p></div>",
    "options": [
      { "id": "a", "text": "Atypical travel" },
      { "id": "b", "text": "Anonymous IP address" },
      { "id": "c", "text": "Unfamiliar sign-in properties" },
      { "id": "d", "text": "Malware-linked IP address" }
    ],
    "correct": ["a"],
    "explanation": "Atypical travel is computed offline by analyzing historical location patterns and travel velocity over time. Anonymous IP address, unfamiliar sign-in properties, and malware-linked IP address detections are performed in real time during the authentication request evaluation."
  },
  {
    "id": 2,
    "qid": "SC-500-MOD2-002",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two Microsoft Entra roles can approve Privileged Identity Management (PIM) role activation requests by default?",
    "scenario": "<div class=\"scenario-text\"><p>An organization is implementing PIM for all privileged directory roles. Approvers must be designated for elevation requests without granting permanent high-privilege assignments.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Privileged Role Administrator" },
      { "id": "b", "text": "Global Administrator" },
      { "id": "c", "text": "User Administrator" },
      { "id": "d", "text": "Security Reader" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Privileged Role Administrator and Global Administrator both possess the authority to approve PIM activation requests and manage role assignments. User Administrator and Security Reader lack the necessary permissions for PIM approval workflows."
  },
  {
    "id": 3,
    "qid": "SC-500-MOD2-003",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each authentication method to its primary security characteristic in Microsoft Entra ID.",
    "scenario": "<div class=\"scenario-text\"><p>An identity architect is replacing legacy MFA methods with modern authentication strengths across executive, standard, and external user populations.</p></div>",
    "items": [
      { "id": "i1", "text": "FIDO2 security keys" },
      { "id": "i2", "text": "Microsoft Authenticator with number matching" },
      { "id": "i3", "text": "SMS one-time passcode" }
    ],
    "zones": [
      { "id": "z1", "label": "Phishing-resistant passwordless" },
      { "id": "z2", "label": "Passwordless with MFA fatigue mitigation" },
      { "id": "z3", "label": "Weakest method vulnerable to SIM swapping" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "FIDO2 security keys provide hardware-backed phishing resistance and passwordless authentication. Microsoft Authenticator with number matching reduces MFA fatigue attacks. SMS OTP remains susceptible to SIM-swapping and interception."
  },
  {
    "id": 4,
    "qid": "SC-500-MOD2-004",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "prompt": "Select the hybrid identity component that validates credentials directly against on-premises Active Directory without synchronizing password hashes to Microsoft Entra ID.",
    "scenario": "<div class=\"scenario-text\"><p>Review the hybrid authentication architecture diagram showing options between on-premises Active Directory Domain Services and Microsoft Entra ID.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Pass-through Authentication agent", "x": 20, "y": 45 },
      { "id": "node2", "label": "Password Hash Sync (PHS)", "x": 50, "y": 45 },
      { "id": "node3", "label": "Active Directory Federation Services", "x": 80, "y": 45 }
    ],
    "correct": ["node1"],
    "explanation": "Pass-through Authentication (PTA) agents installed on-premises validate passwords against Active Directory in real time without storing password hashes in the cloud. Password Hash Sync stores hashes in Entra ID, and AD FS uses federation."
  },
  {
    "id": 5,
    "qid": "SC-500-MOD2-005",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly configures the Conditional Access policy state for immediate enforcement via Microsoft Graph.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer is deploying a Conditional Access policy through the Microsoft Graph API. The requirement is to place the policy into active enforcement immediately upon creation.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"Require MFA for privileged roles\"," },
      { "id": "l3", "label": "  \"state\": \"disabled\"," },
      { "id": "l4", "label": "  \"conditions\": { \"users\": { \"includeRoles\": [\"62e90394-69f5-4237-9190-012177145e10\"] } }," },
      { "id": "l5", "label": "  \"grantControls\": { \"operator\": \"OR\", \"builtInControls\": [\"mfa\"] }" },
      { "id": "l6", "label": "}" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "The state property is set to \"disabled\". For immediate enforcement the value must be \"enabled\". Report-only mode uses \"enabledForReportingButNotEnforced\"."
  },
  {
    "id": 6,
    "qid": "SC-500-MOD2-006",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Entra ID Governance feature automatically removes access when a user changes department or leaves the organization based on HR-driven triggers?",
    "scenario": "<div class=\"scenario-text\"><p>A large enterprise needs to automate joiner-mover-leaver processes so that access packages and group memberships are adjusted without manual intervention.</p></div>",
    "options": [
      { "id": "a", "text": "Lifecycle workflows" },
      { "id": "b", "text": "Access reviews" },
      { "id": "c", "text": "Entitlement management" },
      { "id": "d", "text": "Terms of use" }
    ],
    "correct": ["a"],
    "explanation": "Lifecycle workflows execute automated tasks based on identity lifecycle events such as hire, transfer, or termination. Access reviews are periodic manual attestations, entitlement management centers on access packages, and terms of use enforce acceptance statements."
  },
  {
    "id": 7,
    "qid": "SC-500-MOD2-007",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three signals can be used as conditions in a Microsoft Entra Conditional Access policy?",
    "scenario": "<div class=\"scenario-text\"><p>A security team is building a Conditional Access policy that must evaluate user risk, device state, and authentication context before granting access to sensitive applications.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "User risk level from Entra ID Protection" },
      { "id": "b", "text": "Device compliance state from Intune" },
      { "id": "c", "text": "Authentication strength (phishing-resistant)" },
      { "id": "d", "text": "On-premises Active Directory group membership only" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Conditional Access can evaluate user risk, device compliance, and authentication strength (including phishing-resistant methods). Pure on-premises AD group membership is not a native cloud condition without synchronization."
  },
  {
    "id": 8,
    "qid": "SC-500-MOD2-008",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the primary purpose of a Microsoft Entra managed identity for Azure resources?",
    "scenario": "<div class=\"scenario-text\"><p>An application running on Azure Virtual Machines needs to access Azure Key Vault and Storage without storing credentials in code or configuration.</p></div>",
    "options": [
      { "id": "a", "text": "Provide an automatically managed identity in Entra ID that can be assigned Azure RBAC roles" },
      { "id": "b", "text": "Replace service principals for all multi-tenant applications" },
      { "id": "c", "text": "Enable passwordless sign-in for end users" },
      { "id": "d", "text": "Synchronize on-premises service accounts to the cloud" }
    ],
    "correct": ["a"],
    "explanation": "Managed identities are Entra ID identities automatically managed by Azure that can be granted Azure RBAC roles, eliminating the need to store secrets. They do not replace multi-tenant service principals or provide user authentication."
  },
  {
    "id": 9,
    "qid": "SC-500-MOD2-009",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Privileged Identity Management capability to its correct description.",
    "scenario": "<div class=\"scenario-text\"><p>An organization is implementing just-in-time privileged access and needs to map PIM features to operational requirements.</p></div>",
    "items": [
      { "id": "i1", "text": "Eligible assignment" },
      { "id": "i2", "text": "Active assignment" },
      { "id": "i3", "text": "Just-in-time activation" }
    ],
    "zones": [
      { "id": "z1", "label": "User can activate the role when needed" },
      { "id": "z2", "label": "Role is permanently assigned and always available" },
      { "id": "z3", "label": "Time-bound elevation after approval or MFA" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Eligible assignments allow activation on demand. Active assignments grant permanent access. Just-in-time activation is the process of elevating an eligible assignment for a limited duration after meeting requirements such as MFA or approval."
  },
  {
    "id": 10,
    "qid": "SC-500-MOD2-010",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which hybrid identity authentication method stores a hash of the password in Microsoft Entra ID while still allowing authentication against the cloud directory?",
    "scenario": "<div class=\"scenario-text\"><p>A company wants the simplest hybrid authentication method that supports cloud authentication and provides seamless single sign-on without deploying additional on-premises agents for every authentication.</p></div>",
    "options": [
      { "id": "a", "text": "Password Hash Synchronization (PHS)" },
      { "id": "b", "text": "Pass-through Authentication (PTA)" },
      { "id": "c", "text": "Active Directory Federation Services (AD FS)" },
      { "id": "d", "text": "Seamless SSO only" }
    ],
    "correct": ["a"],
    "explanation": "Password Hash Synchronization periodically synchronizes a hash of the on-premises password to Entra ID, enabling direct cloud authentication. PTA validates against AD in real time, AD FS uses federation, and Seamless SSO is an enhancement that works with PHS or PTA."
  },
  {
    "id": 11,
    "qid": "SC-500-MOD2-011",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two components are required to implement Microsoft Entra entitlement management access packages?",
    "scenario": "<div class=\"scenario-text\"><p>A governance team is designing self-service access packages that combine groups, applications, and SharePoint sites for project teams with automatic expiration.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Catalog" },
      { "id": "b", "text": "Access package" },
      { "id": "c", "text": "Conditional Access policy" },
      { "id": "d", "text": "Privileged Identity Management role" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Entitlement management requires a catalog that holds resources and one or more access packages that define the resources, policies, and approval workflows. Conditional Access and PIM are separate capabilities."
  },
  {
    "id": 12,
    "qid": "SC-500-MOD2-012",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the recommended authentication strength for privileged accounts that must resist phishing attacks?",
    "scenario": "<div class=\"scenario-text\"><p>An organization is enforcing authentication strength policies for all Global Administrators and Privileged Role Administrators via Conditional Access.</p></div>",
    "options": [
      { "id": "a", "text": "Phishing-resistant multifactor authentication (FIDO2 or Windows Hello for Business)" },
      { "id": "b", "text": "Microsoft Authenticator push notification only" },
      { "id": "c", "text": "SMS or voice call OTP" },
      { "id": "d", "text": "Password only with IP restrictions" }
    ],
    "correct": ["a"],
    "explanation": "Phishing-resistant multifactor authentication using FIDO2 security keys or Windows Hello for Business is the Microsoft-recommended strength for privileged accounts. Push notifications, SMS, and passwords remain susceptible to phishing or interception."
  },
  {
    "id": 13,
    "qid": "SC-500-MOD2-013",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "prompt": "Select the node that represents the component responsible for detecting and responding to identity-based risks such as leaked credentials and anomalous sign-ins.",
    "scenario": "<div class=\"scenario-text\"><p>Examine the identity protection architecture that feeds risk signals into Conditional Access policies.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Microsoft Entra ID Protection", "x": 30, "y": 30 },
      { "id": "node2", "label": "Microsoft Entra Connect", "x": 70, "y": 30 },
      { "id": "node3", "label": "Privileged Identity Management", "x": 50, "y": 70 }
    ],
    "correct": ["node1"],
    "explanation": "Microsoft Entra ID Protection calculates user and sign-in risk detections and provides risk-based Conditional Access controls. Entra Connect handles synchronization, and PIM manages privileged role activation."
  },
  {
    "id": 14,
    "qid": "SC-500-MOD2-014",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which type of managed identity is created automatically when an Azure resource is created and is tied to the lifecycle of that resource?",
    "scenario": "<div class=\"scenario-text\"><p>A developer is deploying an Azure Function that must authenticate to Azure Storage and Key Vault without managing any credentials.</p></div>",
    "options": [
      { "id": "a", "text": "System-assigned managed identity" },
      { "id": "b", "text": "User-assigned managed identity" },
      { "id": "c", "text": "Service principal with client secret" },
      { "id": "d", "text": "Application registration with certificate" }
    ],
    "correct": ["a"],
    "explanation": "A system-assigned managed identity is created and deleted with the Azure resource and cannot be shared. User-assigned identities are independent resources that can be assigned to multiple resources."
  },
  {
    "id": 15,
    "qid": "SC-500-MOD2-015",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three best practices should be applied when configuring break-glass (emergency access) accounts in Microsoft Entra ID?",
    "scenario": "<div class=\"scenario-text\"><p>A cybersecurity architect is documenting emergency access procedures to ensure the organization can recover from Conditional Access misconfigurations or tenant lockout scenarios.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Exclude the accounts from all Conditional Access policies" },
      { "id": "b", "text": "Use long, complex, randomly generated passwords stored offline" },
      { "id": "c", "text": "Assign permanent Global Administrator role with no MFA requirement" },
      { "id": "d", "text": "Monitor sign-in activity with alerts for any usage" }
    ],
    "correct": ["a", "b", "d"],
    "selectCount": 3,
    "explanation": "Break-glass accounts must be excluded from Conditional Access, protected by strong offline credentials, and continuously monitored. Assigning permanent Global Administrator without MFA is acceptable only for the emergency accounts themselves; continuous monitoring is mandatory."
  },
  {
    "id": 16,
    "qid": "SC-500-MOD2-016",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each hybrid identity synchronization method to its primary characteristic.",
    "scenario": "<div class=\"scenario-text\"><p>An identity team is evaluating Entra Connect Sync versus Cloud Sync for a multi-forest environment with limited on-premises infrastructure.</p></div>",
    "items": [
      { "id": "i1", "text": "Entra Connect Sync" },
      { "id": "i2", "text": "Entra Cloud Sync" },
      { "id": "i3", "text": "Seamless Single Sign-On" }
    ],
    "zones": [
      { "id": "z1", "label": "Lightweight agent-based synchronization from multiple forests" },
      { "id": "z2", "label": "Full-featured synchronization with staging mode and custom rules" },
      { "id": "z3", "label": "Enables users to sign in without entering passwords on domain-joined devices" }
    ],
    "correct": {
      "z1": ["i2"],
      "z2": ["i1"],
      "z3": ["i3"]
    },
    "explanation": "Entra Cloud Sync uses a lightweight agent and supports multiple forests easily. Entra Connect Sync provides the full rule engine and staging server capability. Seamless SSO allows password-less sign-in experience on domain-joined devices when PHS or PTA is enabled."
  },
  {
    "id": 17,
    "qid": "SC-500-MOD2-017",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "In Microsoft Entra ID Governance, what is the purpose of an access review?",
    "scenario": "<div class=\"scenario-text\"><p>A compliance team must periodically validate that users still require membership in high-privilege groups and access packages.</p></div>",
    "options": [
      { "id": "a", "text": "Periodically require reviewers to attest whether users still need access" },
      { "id": "b", "text": "Automatically remove all group memberships every 30 days" },
      { "id": "c", "text": "Enforce multifactor authentication on every sign-in" },
      { "id": "d", "text": "Provision new users from an HR system" }
    ],
    "correct": ["a"],
    "explanation": "Access reviews enable scheduled attestation by managers, resource owners, or self-attestation so that unnecessary access can be removed. They do not automatically remove memberships without review, enforce MFA, or handle HR provisioning."
  },
  {
    "id": 18,
    "qid": "SC-500-MOD2-018",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly sets the authentication strength requirement for a Conditional Access policy targeting administrators.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer is creating a Conditional Access policy via Microsoft Graph that must require phishing-resistant authentication for all members of the Global Administrator role.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"Require phishing-resistant auth for admins\"," },
      { "id": "l3", "label": "  \"state\": \"enabled\"," },
      { "id": "l4", "label": "  \"grantControls\": {" },
      { "id": "l5", "label": "    \"operator\": \"OR\"," },
      { "id": "l6", "label": "    \"authenticationStrength\": { \"id\": \"00000000-0000-0000-0000-000000000000\" }" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l6"],
    "selectCount": 1,
    "explanation": "The authenticationStrength id is set to an empty GUID. The correct phishing-resistant strength identifier must be used (for example the built-in phishing-resistant MFA strength). An empty GUID will not enforce the required strength."
  },
  {
    "id": 19,
    "qid": "SC-500-MOD2-019",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the primary security benefit of using workload identity federation instead of client secrets for applications running outside Azure?",
    "scenario": "<div class=\"scenario-text\"><p>A development team is migrating a GitHub Actions pipeline that currently uses a client secret stored in GitHub secrets to authenticate to Microsoft Entra ID.</p></div>",
    "options": [
      { "id": "a", "text": "Eliminates long-lived secrets by exchanging an external token for an Entra ID token" },
      { "id": "b", "text": "Provides permanent Global Administrator privileges to the pipeline" },
      { "id": "c", "text": "Requires password hash synchronization" },
      { "id": "d", "text": "Enables Seamless SSO for the pipeline" }
    ],
    "correct": ["a"],
    "explanation": "Workload identity federation allows an external identity provider (such as GitHub) to issue a token that is exchanged for an Entra ID access token, removing the need to store and rotate client secrets."
  },
  {
    "id": 20,
    "qid": "SC-500-MOD2-020",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two Microsoft Entra ID Protection risk detections are classified as user risk rather than sign-in risk?",
    "scenario": "<div class=\"scenario-text\"><p>A security operations analyst is configuring risk-based Conditional Access policies and must correctly map detections to user risk versus sign-in risk conditions.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Leaked credentials" },
      { "id": "b", "text": "Anomalous user activity" },
      { "id": "c", "text": "Anonymous IP address" },
      { "id": "d", "text": "Malware-linked IP address" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Leaked credentials and anomalous user activity are user risk detections that persist across sign-ins. Anonymous IP address and malware-linked IP address are evaluated as sign-in risk for the specific authentication attempt."
  },
  {
    "id": 21,
    "qid": "SC-500-MOD2-021",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra feature allows temporary elevation of a user’s group membership for a limited time after approval?",
    "scenario": "<div class=\"scenario-text\"><p>An operations team needs members of a support group to obtain elevated permissions only when troubleshooting production incidents.</p></div>",
    "options": [
      { "id": "a", "text": "Privileged Identity Management for groups (eligible membership)" },
      { "id": "b", "text": "Dynamic group membership rules" },
      { "id": "c", "text": "Access package with permanent assignment" },
      { "id": "d", "text": "Conditional Access session controls" }
    ],
    "correct": ["a"],
    "explanation": "PIM for groups supports eligible membership that can be activated just-in-time for a defined duration after meeting activation requirements. Dynamic groups, permanent access packages, and session controls do not provide time-bound elevation of group membership."
  },
  {
    "id": 22,
    "qid": "SC-500-MOD2-022",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Conditional Access grant control to its effect.",
    "scenario": "<div class=\"scenario-text\"><p>A security architect is selecting grant controls for a policy that protects access to Microsoft 365 from unmanaged devices.</p></div>",
    "items": [
      { "id": "i1", "text": "Require multifactor authentication" },
      { "id": "i2", "text": "Require device to be marked as compliant" },
      { "id": "i3", "text": "Require authentication strength" }
    ],
    "zones": [
      { "id": "z1", "label": "Forces a second factor regardless of method strength" },
      { "id": "z2", "label": "Ensures the device meets Intune compliance policies" },
      { "id": "z3", "label": "Enforces a specific set of authentication methods (e.g., phishing-resistant)" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Require MFA triggers any registered second factor. Require compliant device checks Intune compliance. Require authentication strength enforces a defined set of methods such as FIDO2 or Windows Hello for Business."
  },
  {
    "id": 23,
    "qid": "SC-500-MOD2-023",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the function of an administrative unit in Microsoft Entra ID?",
    "scenario": "<div class=\"scenario-text\"><p>A global organization wants to delegate user and group management for specific geographic regions without granting tenant-wide administrative rights.</p></div>",
    "options": [
      { "id": "a", "text": "Container that scopes administrative permissions to a subset of users, groups, or devices" },
      { "id": "b", "text": "Replacement for Microsoft 365 groups" },
      { "id": "c", "text": "Method to enforce Conditional Access only on privileged users" },
      { "id": "d", "text": "Synchronization filter for Entra Connect" }
    ],
    "correct": ["a"],
    "explanation": "Administrative units allow role assignments to be scoped to a subset of the directory, enabling delegated administration. They are not a group replacement, Conditional Access mechanism, or synchronization filter."
  },
  {
    "id": 24,
    "qid": "SC-500-MOD2-024",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "prompt": "Select the component that performs real-time password validation against on-premises Active Directory for hybrid users.",
    "scenario": "<div class=\"scenario-text\"><p>Review the hybrid identity authentication flow options available between on-premises AD DS and Microsoft Entra ID.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Pass-through Authentication agent", "x": 25, "y": 50 },
      { "id": "node2", "label": "Password Hash Sync service", "x": 55, "y": 50 },
      { "id": "node3", "label": "Azure AD Application Proxy connector", "x": 85, "y": 50 }
    ],
    "correct": ["node1"],
    "explanation": "The Pass-through Authentication agent validates credentials in real time against Active Directory. Password Hash Sync stores hashes in the cloud, and Application Proxy is used for publishing on-premises applications."
  },
  {
    "id": 25,
    "qid": "SC-500-MOD2-025",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three statements correctly describe Microsoft Entra Terms of Use?",
    "scenario": "<div class=\"scenario-text\"><p>A compliance officer is configuring Terms of Use policies that must be accepted before users can access specific cloud applications.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Can be required as a Conditional Access grant control" },
      { "id": "b", "text": "Support versioning and re-acceptance on policy updates" },
      { "id": "c", "text": "Can be scoped to specific users or groups" },
      { "id": "d", "text": "Automatically grant Global Administrator rights upon acceptance" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Terms of Use can be enforced via Conditional Access, support versioning that forces re-acceptance, and can be targeted to specific audiences. Acceptance never elevates privileges."
  },
  {
    "id": 26,
    "qid": "SC-500-MOD2-026",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra feature protects workload identities by detecting anomalous behavior and risk events for service principals?",
    "scenario": "<div class=\"scenario-text\"><p>A security team has observed unusual sign-in activity from several service principals used by automation scripts and needs continuous risk evaluation.</p></div>",
    "options": [
      { "id": "a", "text": "Workload identity protection (part of Entra ID Protection)" },
      { "id": "b", "text": "Privileged Identity Management for users only" },
      { "id": "c", "text": "Access reviews for Microsoft 365 groups" },
      { "id": "d", "text": "Seamless Single Sign-On" }
    ],
    "correct": ["a"],
    "explanation": "Workload identity protection extends Entra ID Protection capabilities to service principals, detecting anomalous sign-ins, credential leaks, and other risk events specific to non-human identities."
  },
  {
    "id": 27,
    "qid": "SC-500-MOD2-027",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the recommended approach for providing just-in-time access to Azure resources for administrators?",
    "scenario": "<div class=\"scenario-text\"><p>An Azure landing zone design requires that subscription owners elevate privileges only when performing administrative tasks and that elevations are time-bound and audited.</p></div>",
    "options": [
      { "id": "a", "text": "Use Microsoft Entra Privileged Identity Management with eligible Azure RBAC role assignments" },
      { "id": "b", "text": "Assign permanent Owner role on every subscription" },
      { "id": "c", "text": "Store administrative credentials in a shared password vault" },
      { "id": "d", "text": "Disable all Conditional Access policies for administrators" }
    ],
    "correct": ["a"],
    "explanation": "PIM supports eligible Azure RBAC role assignments that can be activated just-in-time with MFA, justification, and approval workflows, providing time-bound elevated access with full audit logging."
  },
  {
    "id": 28,
    "qid": "SC-500-MOD2-028",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Entra ID Governance component to its primary function.",
    "scenario": "<div class=\"scenario-text\"><p>A governance architect is designing an end-to-end identity lifecycle solution that includes access packages, periodic reviews, and automated workflows.</p></div>",
    "items": [
      { "id": "i1", "text": "Entitlement management" },
      { "id": "i2", "text": "Access reviews" },
      { "id": "i3", "text": "Lifecycle workflows" }
    ],
    "zones": [
      { "id": "z1", "label": "Self-service access packages with approval and expiration" },
      { "id": "z2", "label": "Periodic attestation of existing access" },
      { "id": "z3", "label": "Automated joiner-mover-leaver task sequences" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Entitlement management provides access packages. Access reviews perform periodic attestation. Lifecycle workflows automate tasks triggered by identity lifecycle events."
  },
  {
    "id": 29,
    "qid": "SC-500-MOD2-029",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly configures the Conditional Access policy to apply only to privileged directory roles.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer is writing a Conditional Access policy via Graph that must target only users assigned the Global Administrator or Privileged Role Administrator roles.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"MFA for privileged roles\"," },
      { "id": "l3", "label": "  \"state\": \"enabled\"," },
      { "id": "l4", "label": "  \"conditions\": {" },
      { "id": "l5", "label": "    \"users\": { \"includeUsers\": [\"All\"] }" },
      { "id": "l6", "label": "  }," },
      { "id": "l7", "label": "  \"grantControls\": { \"operator\": \"OR\", \"builtInControls\": [\"mfa\"] }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "The policy includes all users instead of the specific privileged roles. The correct configuration uses includeRoles with the role template IDs for Global Administrator and Privileged Role Administrator."
  },
  {
    "id": 30,
    "qid": "SC-500-MOD2-030",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which authentication method is considered phishing-resistant and can be used as part of an authentication strength policy?",
    "scenario": "<div class=\"scenario-text\"><p>An organization is updating its Conditional Access policies to require the strongest possible authentication for access to financial systems.</p></div>",
    "options": [
      { "id": "a", "text": "FIDO2 security key" },
      { "id": "b", "text": "SMS one-time passcode" },
      { "id": "c", "text": "Voice call verification" },
      { "id": "d", "text": "Email one-time passcode" }
    ],
    "correct": ["a"],
    "explanation": "FIDO2 security keys are phishing-resistant because the private key never leaves the device and the authentication is bound to the origin. SMS, voice, and email OTPs can be intercepted or phished."
  },
  {
    "id": 31,
    "qid": "SC-500-MOD2-031",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two capabilities are provided by Microsoft Entra ID Protection?",
    "scenario": "<div class=\"scenario-text\"><p>A security operations center needs continuous evaluation of identity risk and automated response through Conditional Access.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Calculation of user risk and sign-in risk" },
      { "id": "b", "text": "Risk-based Conditional Access policies" },
      { "id": "c", "text": "Automatic assignment of Global Administrator role" },
      { "id": "d", "text": "On-premises password writeback" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Entra ID Protection calculates risk levels and enables risk-based Conditional Access policies. It does not assign privileged roles or perform password writeback."
  },
  {
    "id": 32,
    "qid": "SC-500-MOD2-032",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the primary difference between a system-assigned and a user-assigned managed identity?",
    "scenario": "<div class=\"scenario-text\"><p>An Azure architecture team is deciding how to grant identities to a set of virtual machines that share the same set of Azure RBAC role assignments.</p></div>",
    "options": [
      { "id": "a", "text": "System-assigned is tied to a single resource lifecycle; user-assigned can be shared across multiple resources" },
      { "id": "b", "text": "System-assigned can be used only with Azure Functions" },
      { "id": "c", "text": "User-assigned identities cannot be granted Azure RBAC roles" },
      { "id": "d", "text": "System-assigned identities require manual secret rotation" }
    ],
    "correct": ["a"],
    "explanation": "A system-assigned managed identity is created and deleted with the resource. A user-assigned managed identity is an independent Azure resource that can be assigned to multiple resources and shares the same identity."
  },
  {
    "id": 33,
    "qid": "SC-500-MOD2-033",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each hybrid authentication method to the correct description of password handling.",
    "scenario": "<div class=\"scenario-text\"><p>An identity architect is documenting how each hybrid authentication option handles user passwords.</p></div>",
    "items": [
      { "id": "i1", "text": "Password Hash Synchronization" },
      { "id": "i2", "text": "Pass-through Authentication" },
      { "id": "i3", "text": "Federation with AD FS" }
    ],
    "zones": [
      { "id": "z1", "label": "Hash of the password is stored in Entra ID" },
      { "id": "z2", "label": "Password is validated in real time against on-premises AD" },
      { "id": "z3", "label": "Authentication is redirected to on-premises federation service" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "PHS stores a hash in the cloud. PTA validates the password against AD DS via agents. Federation redirects the authentication request to AD FS."
  },
  {
    "id": 34,
    "qid": "SC-500-MOD2-034",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Entra ID Governance feature can require users to accept a terms-of-use statement before they are granted an access package?",
    "scenario": "<div class=\"scenario-text\"><p>A legal team requires that every contractor accept a specific data-handling agreement before receiving access to project resources.</p></div>",
    "options": [
      { "id": "a", "text": "Entitlement management connected organization and access package policies" },
      { "id": "b", "text": "Privileged Identity Management activation" },
      { "id": "c", "text": "Dynamic group membership" },
      { "id": "d", "text": "Password protection custom banned password list" }
    ],
    "correct": ["a"],
    "explanation": "Access package policies in entitlement management can require acceptance of Terms of Use before access is granted. PIM, dynamic groups, and password protection do not enforce terms-of-use acceptance for access packages."
  },
  {
    "id": 35,
    "qid": "SC-500-MOD2-035",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three actions are recommended when implementing Privileged Identity Management for Microsoft Entra roles?",
    "scenario": "<div class=\"scenario-text\"><p>A security architect is hardening privileged access across the tenant and must apply industry best practices for PIM.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Convert permanent role assignments to eligible assignments" },
      { "id": "b", "text": "Require multifactor authentication for activation" },
      { "id": "c", "text": "Configure approval workflows for high-privilege roles" },
      { "id": "d", "text": "Disable all audit logging for privileged activations" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Best practices include converting standing access to eligible, requiring MFA on activation, and using approval for sensitive roles. Audit logging must remain enabled."
  },
  {
    "id": 36,
    "qid": "SC-500-MOD2-036",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "prompt": "Select the node that represents the service responsible for synchronizing on-premises identities and optionally password hashes to Microsoft Entra ID.",
    "scenario": "<div class=\"scenario-text\"><p>Examine the hybrid identity topology that connects an on-premises Active Directory forest to Microsoft Entra ID.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Microsoft Entra Connect", "x": 40, "y": 40 },
      { "id": "node2", "label": "Microsoft Entra ID Protection", "x": 70, "y": 40 },
      { "id": "node3", "label": "Privileged Identity Management", "x": 55, "y": 75 }
    ],
    "correct": ["node1"],
    "explanation": "Microsoft Entra Connect (or Cloud Sync) performs the synchronization of identities and, when enabled, password hashes from on-premises Active Directory to Microsoft Entra ID."
  },
  {
    "id": 37,
    "qid": "SC-500-MOD2-037",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the purpose of a connected organization in Microsoft Entra entitlement management?",
    "scenario": "<div class=\"scenario-text\"><p>A company collaborates with external partners and needs to grant them temporary access to specific SharePoint sites and Teams through access packages.</p></div>",
    "options": [
      { "id": "a", "text": "Represents an external identity provider or Azure AD tenant that can be invited to access packages" },
      { "id": "b", "text": "Creates a permanent trust relationship with AD FS" },
      { "id": "c", "text": "Automatically assigns Global Administrator to external users" },
      { "id": "d", "text": "Replaces the need for Conditional Access policies" }
    ],
    "correct": ["a"],
    "explanation": "A connected organization defines an external partner (another Entra ID tenant or identity provider) so that its users can request and be granted access packages. It does not create permanent federation trusts or elevate privileges."
  },
  {
    "id": 38,
    "qid": "SC-500-MOD2-038",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Conditional Access condition evaluates the risk level calculated by Microsoft Entra ID Protection for the current authentication attempt?",
    "scenario": "<div class=\"scenario-text\"><p>A policy must block or challenge sign-ins that are determined to be high risk based on real-time and offline signals.</p></div>",
    "options": [
      { "id": "a", "text": "Sign-in risk" },
      { "id": "b", "text": "Device platform" },
      { "id": "c", "text": "Client apps" },
      { "id": "d", "text": "Locations (named locations only)" }
    ],
    "correct": ["a"],
    "explanation": "Sign-in risk is the Conditional Access condition that uses the risk level produced by Entra ID Protection for the individual authentication attempt. Device platform, client apps, and locations are separate conditions."
  },
  {
    "id": 39,
    "qid": "SC-500-MOD2-039",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two features help mitigate MFA fatigue attacks in Microsoft Entra ID?",
    "scenario": "<div class=\"scenario-text\"><p>Users have reported repeated push notifications that they accidentally approve. The security team needs controls that reduce the effectiveness of MFA fatigue attacks.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Number matching in Microsoft Authenticator" },
      { "id": "b", "text": "Authentication strength requiring phishing-resistant methods" },
      { "id": "c", "text": "Allowing SMS as the only MFA method" },
      { "id": "d", "text": "Disabling all Conditional Access policies" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Number matching forces the user to enter a number displayed on the sign-in screen, preventing blind approval. Requiring phishing-resistant authentication (FIDO2 or Windows Hello) eliminates push-based fatigue entirely. SMS and disabling policies increase risk."
  },
  {
    "id": 40,
    "qid": "SC-500-MOD2-040",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra capability allows an application to obtain tokens without storing a client secret or certificate when running on Azure resources?",
    "scenario": "<div class=\"scenario-text\"><p>A containerized workload on Azure Kubernetes Service must authenticate to Microsoft Graph and Azure Key Vault using the principle of least privilege and zero secrets in code.</p></div>",
    "options": [
      { "id": "a", "text": "Managed identity (system-assigned or user-assigned)" },
      { "id": "b", "text": "Service principal with a long-lived client secret" },
      { "id": "c", "text": "Username and password of a cloud-only user" },
      { "id": "d", "text": "AD FS federation trust" }
    ],
    "correct": ["a"],
    "explanation": "Managed identities provide an Entra ID identity for Azure resources that can be used to acquire tokens without any secrets stored in the application. Client secrets, user credentials, and AD FS are not appropriate for this scenario."
  },
  {
    "id": 41,
    "qid": "SC-500-MOD2-041",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra ID feature enables automated removal of group memberships and access package assignments when a user’s department attribute changes?",
    "scenario": "<div class=\"scenario-text\"><p>An organization uses an HR system as the source of truth and needs identity lifecycle automation that reacts to mover events without manual intervention.</p></div>",
    "options": [
      { "id": "a", "text": "Lifecycle workflows" },
      { "id": "b", "text": "Access reviews only" },
      { "id": "c", "text": "Conditional Access session controls" },
      { "id": "d", "text": "Privileged Identity Management activation" }
    ],
    "correct": ["a"],
    "explanation": "Lifecycle workflows can trigger on attribute changes such as department and execute tasks including group membership removal and access package revocation. Access reviews require human attestation, Conditional Access controls sessions, and PIM manages privileged role elevation."
  },
  {
    "id": 42,
    "qid": "SC-500-MOD2-042",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three authentication methods are classified as phishing-resistant in Microsoft Entra authentication strengths?",
    "scenario": "<div class=\"scenario-text\"><p>A Conditional Access policy must enforce the strongest possible authentication strength for access to financial applications.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "FIDO2 security keys" },
      { "id": "b", "text": "Windows Hello for Business" },
      { "id": "c", "text": "Certificate-based authentication (CBA)" },
      { "id": "d", "text": "Microsoft Authenticator push notification without number matching" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "FIDO2, Windows Hello for Business, and certificate-based authentication are phishing-resistant. Standard Authenticator push without number matching remains susceptible to MFA fatigue and phishing."
  },
  {
    "id": 43,
    "qid": "SC-500-MOD2-043",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each workload identity type to its correct description.",
    "scenario": "<div class=\"scenario-text\"><p>An architect is selecting the appropriate identity model for different Azure and multi-cloud workloads.</p></div>",
    "items": [
      { "id": "i1", "text": "System-assigned managed identity" },
      { "id": "i2", "text": "User-assigned managed identity" },
      { "id": "i3", "text": "Workload identity federation" }
    ],
    "zones": [
      { "id": "z1", "label": "Tied to a single Azure resource lifecycle" },
      { "id": "z2", "label": "Independent identity that can be shared across multiple resources" },
      { "id": "z3", "label": "Allows external IdPs to exchange tokens without client secrets" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "System-assigned identities are created and deleted with the resource. User-assigned identities are standalone and reusable. Workload identity federation enables secret-less authentication from external platforms such as GitHub or Kubernetes."
  },
  {
    "id": 44,
    "qid": "SC-500-MOD2-044",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "prompt": "Select the component that provides just-in-time elevation of Azure RBAC roles with approval and MFA requirements.",
    "scenario": "<div class=\"scenario-text\"><p>Review the privileged access architecture used to protect Azure subscription management.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Privileged Identity Management", "x": 30, "y": 40 },
      { "id": "node2", "label": "Entra ID Protection", "x": 60, "y": 40 },
      { "id": "node3", "label": "Access reviews", "x": 45, "y": 70 }
    ],
    "correct": ["node1"],
    "explanation": "Privileged Identity Management (PIM) enables eligible Azure RBAC role assignments that can be activated just-in-time with MFA, justification, and optional approval. Entra ID Protection focuses on risk detection, and access reviews handle periodic attestation."
  },
  {
    "id": 45,
    "qid": "SC-500-MOD2-045",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly configures the Conditional Access policy to require a compliant device.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer is deploying a Conditional Access policy via Microsoft Graph that must require devices to be marked as compliant by Intune before granting access to Microsoft 365.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"Require compliant device for M365\"," },
      { "id": "l3", "label": "  \"state\": \"enabled\"," },
      { "id": "l4", "label": "  \"grantControls\": {" },
      { "id": "l5", "label": "    \"operator\": \"OR\"," },
      { "id": "l6", "label": "    \"builtInControls\": [\"mfa\"]" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l6"],
    "selectCount": 1,
    "explanation": "The grantControls builtInControls array contains only \"mfa\". To require a compliant device the value \"compliantDevice\" must be included (typically with operator AND when combined with other controls)."
  },
  {
    "id": 46,
    "qid": "SC-500-MOD2-046",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which hybrid identity feature allows users on domain-joined devices to authenticate to Microsoft Entra ID without entering a password?",
    "scenario": "<div class=\"scenario-text\"><p>An organization has enabled Password Hash Synchronization and wants to improve the sign-in experience for users working on corporate Windows devices.</p></div>",
    "options": [
      { "id": "a", "text": "Seamless Single Sign-On" },
      { "id": "b", "text": "Pass-through Authentication agent" },
      { "id": "c", "text": "Active Directory Federation Services" },
      { "id": "d", "text": "Certificate-based authentication" }
    ],
    "correct": ["a"],
    "explanation": "Seamless SSO uses Kerberos tickets from domain-joined devices to obtain Entra ID tokens without prompting for credentials when PHS or PTA is configured. PTA validates passwords, AD FS uses federation, and CBA relies on certificates."
  },
  {
    "id": 47,
    "qid": "SC-500-MOD2-047",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two Microsoft Entra roles can manage Privileged Identity Management settings and role assignments for directory roles?",
    "scenario": "<div class=\"scenario-text\"><p>A governance team needs to designate administrators who can configure PIM policies, assign eligible roles, and manage approvers without granting unnecessary privileges.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Privileged Role Administrator" },
      { "id": "b", "text": "Global Administrator" },
      { "id": "c", "text": "User Administrator" },
      { "id": "d", "text": "Security Operator" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Privileged Role Administrator and Global Administrator both have full rights to manage PIM for Microsoft Entra roles. User Administrator and Security Operator lack the required permissions for PIM role management."
  },
  {
    "id": 48,
    "qid": "SC-500-MOD2-048",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the primary purpose of an access package in Microsoft Entra entitlement management?",
    "scenario": "<div class=\"scenario-text\"><p>A project team needs a self-service mechanism that bundles group memberships, application assignments, and SharePoint site permissions with automatic expiration.</p></div>",
    "options": [
      { "id": "a", "text": "A collection of resources and policies that users can request with approval and time-bound access" },
      { "id": "b", "text": "A permanent security group that never expires" },
      { "id": "c", "text": "A Conditional Access policy template" },
      { "id": "d", "text": "A managed identity for Azure resources" }
    ],
    "correct": ["a"],
    "explanation": "An access package defines a set of resources (groups, apps, sites) together with request, approval, and lifecycle policies so users can obtain and lose access automatically."
  },
  {
    "id": 49,
    "qid": "SC-500-MOD2-049",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Entra ID Protection risk detection to its evaluation timing.",
    "scenario": "<div class=\"scenario-text\"><p>A security architect is designing risk-based Conditional Access and must understand which detections are real-time versus offline.</p></div>",
    "items": [
      { "id": "i1", "text": "Anonymous IP address" },
      { "id": "i2", "text": "Atypical travel" },
      { "id": "i3", "text": "Malware-linked IP address" }
    ],
    "zones": [
      { "id": "z1", "label": "Real-time detection during sign-in" },
      { "id": "z2", "label": "Offline / asynchronous machine-learning analysis" },
      { "id": "z3", "label": "Real-time detection based on threat intelligence" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Anonymous IP and malware-linked IP detections occur in real time. Atypical travel requires historical analysis and is computed offline."
  },
  {
    "id": 50,
    "qid": "SC-500-MOD2-050",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra feature allows temporary elevation of membership in a security group for a limited duration after approval?",
    "scenario": "<div class=\"scenario-text\"><p>Support engineers need elevated permissions in a production operations group only while actively troubleshooting incidents.</p></div>",
    "options": [
      { "id": "a", "text": "Privileged Identity Management for groups" },
      { "id": "b", "text": "Dynamic membership rules" },
      { "id": "c", "text": "Access package with permanent assignment policy" },
      { "id": "d", "text": "Administrative unit scoping" }
    ],
    "correct": ["a"],
    "explanation": "PIM for groups supports eligible membership that can be activated just-in-time with MFA, justification, and approval, providing time-bound elevated group membership."
  },
  {
    "id": 51,
    "qid": "SC-500-MOD2-051",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly sets the Conditional Access policy state for report-only evaluation.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer is creating a new Conditional Access policy via Microsoft Graph and wants the policy to run in report-only mode before enforcement.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"Pilot MFA for executives\"," },
      { "id": "l3", "label": "  \"state\": \"enabled\"," },
      { "id": "l4", "label": "  \"conditions\": { \"users\": { \"includeGroups\": [\"executive-group-id\"] } }," },
      { "id": "l5", "label": "  \"grantControls\": { \"operator\": \"OR\", \"builtInControls\": [\"mfa\"] }" },
      { "id": "l6", "label": "}" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "The state is set to \"enabled\". For report-only evaluation the correct value is \"enabledForReportingButNotEnforced\"."
  },
  {
    "id": 52,
    "qid": "SC-500-MOD2-052",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three best practices apply to Microsoft Entra break-glass (emergency access) accounts?",
    "scenario": "<div class=\"scenario-text\"><p>A cybersecurity team is documenting emergency access procedures to recover from Conditional Access lockouts or service outages.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Exclude the accounts from every Conditional Access policy" },
      { "id": "b", "text": "Store credentials offline in a secure physical location" },
      { "id": "c", "text": "Monitor and alert on any successful sign-in" },
      { "id": "d", "text": "Assign the accounts permanent Global Administrator with password-only authentication and no monitoring" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Break-glass accounts must be excluded from Conditional Access, protected by offline credentials, and continuously monitored. Leaving them unmonitored or using weak authentication increases risk."
  },
  {
    "id": 53,
    "qid": "SC-500-MOD2-053",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the main advantage of Microsoft Entra Cloud Sync compared with classic Entra Connect Sync in multi-forest environments?",
    "scenario": "<div class=\"scenario-text\"><p>An organization has several disconnected Active Directory forests and limited ability to deploy full Entra Connect servers in every location.</p></div>",
    "options": [
      { "id": "a", "text": "Lightweight provisioning agent that can be installed in multiple forests with simplified high availability" },
      { "id": "b", "text": "Full custom synchronization rule engine identical to Entra Connect" },
      { "id": "c", "text": "Support for password writeback only" },
      { "id": "d", "text": "Replacement for all Conditional Access policies" }
    ],
    "correct": ["a"],
    "explanation": "Entra Cloud Sync uses a lightweight agent architecture that simplifies multi-forest and multi-domain deployments and provides built-in high availability. It does not offer the full custom rule engine of classic Entra Connect."
  },
  {
    "id": 54,
    "qid": "SC-500-MOD2-054",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Conditional Access control to its category.",
    "scenario": "<div class=\"scenario-text\"><p>An architect is building a Conditional Access policy and must correctly classify grant versus session controls.</p></div>",
    "items": [
      { "id": "i1", "text": "Require multifactor authentication" },
      { "id": "i2", "text": "Require device compliance" },
      { "id": "i3", "text": "Use app enforced restrictions" }
    ],
    "zones": [
      { "id": "z1", "label": "Grant control" },
      { "id": "z2", "label": "Grant control" },
      { "id": "z3", "label": "Session control" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Require MFA and require device compliance are grant controls that decide whether access is allowed. App enforced restrictions is a session control that limits the experience inside the application after access is granted."
  },
  {
    "id": 55,
    "qid": "SC-500-MOD2-055",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra capability detects anomalous behavior and risk events specifically for service principals and managed identities?",
    "scenario": "<div class=\"scenario-text\"><p>Automation accounts and service principals have shown unusual sign-in patterns. The security team needs continuous risk evaluation for non-human identities.</p></div>",
    "options": [
      { "id": "a", "text": "Workload identity protection" },
      { "id": "b", "text": "Privileged Identity Management for users" },
      { "id": "c", "text": "Access reviews for Microsoft 365 groups" },
      { "id": "d", "text": "Seamless Single Sign-On" }
    ],
    "correct": ["a"],
    "explanation": "Workload identity protection extends Entra ID Protection to service principals and managed identities, detecting anomalous sign-ins, leaked credentials, and other risk signals for workload identities."
  },
  {
    "id": 56,
    "qid": "SC-500-MOD2-056",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "prompt": "Select the hybrid identity component that stores a hash of the user’s password in Microsoft Entra ID.",
    "scenario": "<div class=\"scenario-text\"><p>Review the authentication options between on-premises Active Directory and Microsoft Entra ID.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Password Hash Synchronization", "x": 25, "y": 45 },
      { "id": "node2", "label": "Pass-through Authentication", "x": 55, "y": 45 },
      { "id": "node3", "label": "AD FS federation" , "x": 85, "y": 45 }
    ],
    "correct": ["node1"],
    "explanation": "Password Hash Synchronization periodically writes a hash of the on-premises password into Microsoft Entra ID, enabling cloud authentication. PTA and AD FS do not store password hashes in the cloud."
  },
  {
    "id": 57,
    "qid": "SC-500-MOD2-057",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two statements correctly describe Microsoft Entra administrative units?",
    "scenario": "<div class=\"scenario-text\"><p>A multinational organization wants to delegate user management for regional subsidiaries without granting tenant-wide rights.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "They scope administrative role assignments to a subset of users, groups, or devices" },
      { "id": "b", "text": "They can be used with administrative roles such as User Administrator" },
      { "id": "c", "text": "They replace the need for Conditional Access policies" },
      { "id": "d", "text": "They automatically grant Global Administrator privileges" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Administrative units provide a scope boundary for role assignments so that administrators can manage only the objects inside the unit. They work with roles such as User Administrator and do not replace Conditional Access or elevate privileges automatically."
  },
  {
    "id": 58,
    "qid": "SC-500-MOD2-058",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "In a Conditional Access policy, what does the “authentication strength” grant control enforce?",
    "scenario": "<div class=\"scenario-text\"><p>A security team wants to require that only phishing-resistant methods are accepted for access to privileged portals.</p></div>",
    "options": [
      { "id": "a", "text": "A specific set of authentication methods defined by an authentication strength policy" },
      { "id": "b", "text": "Any registered multifactor authentication method" },
      { "id": "c", "text": "Only SMS one-time passcodes" },
      { "id": "d", "text": "Device compliance only" }
    ],
    "correct": ["a"],
    "explanation": "Authentication strength allows the policy author to require a defined combination of methods (for example the built-in phishing-resistant MFA strength). It is more granular than the generic “require MFA” control."
  },
  {
    "id": 59,
    "qid": "SC-500-MOD2-059",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Microsoft Entra Governance feature to its primary use case.",
    "scenario": "<div class=\"scenario-text\"><p>A governance program needs to map features to specific identity lifecycle and access control requirements.</p></div>",
    "items": [
      { "id": "i1", "text": "Lifecycle workflows" },
      { "id": "i2", "text": "Access reviews" },
      { "id": "i3", "text": "Entitlement management" }
    ],
    "zones": [
      { "id": "z1", "label": "Automate joiner-mover-leaver tasks based on HR events" },
      { "id": "z2", "label": "Periodically attest that users still need access" },
      { "id": "z3", "label": "Provide self-service access packages with approval and expiration" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Lifecycle workflows automate identity lifecycle events. Access reviews perform periodic attestation. Entitlement management delivers access packages with request and lifecycle policies."
  },
  {
    "id": 60,
    "qid": "SC-500-MOD2-060",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which authentication flow is used when a managed identity requests an access token from Microsoft Entra ID?",
    "scenario": "<div class=\"scenario-text\"><p>An Azure virtual machine with a system-assigned managed identity needs to call Azure Key Vault without any secrets in code.</p></div>",
    "options": [
      { "id": "a", "text": "OAuth 2.0 client credentials flow using the managed identity endpoint" },
      { "id": "b", "text": "Authorization code flow with PKCE" },
      { "id": "c", "text": "Resource owner password credentials flow" },
      { "id": "d", "text": "SAML 2.0 browser-based federation" }
    ],
    "correct": ["a"],
    "explanation": "Managed identities obtain tokens via the Instance Metadata Service (IMDS) or the Azure Identity SDK, which under the hood uses the OAuth 2.0 client credentials flow against the managed identity endpoint. User-interactive flows and SAML are not used."
  },
  {
    "id": 61,
    "qid": "SC-500-MOD2-061",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly targets all users instead of a specific administrative unit.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer is creating a Conditional Access policy that should apply only to users inside a regional administrative unit.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"MFA for regional AU\"," },
      { "id": "l3", "label": "  \"state\": \"enabled\"," },
      { "id": "l4", "label": "  \"conditions\": {" },
      { "id": "l5", "label": "    \"users\": { \"includeUsers\": [\"All\"] }" },
      { "id": "l6", "label": "  }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "The policy includes all users. To scope to an administrative unit the includeUsers or includeGroups collection must reference the objects that belong to that administrative unit, or the policy must be combined with administrative unit–scoped role assignments."
  },
  {
    "id": 62,
    "qid": "SC-500-MOD2-062",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three signals can be evaluated by a Microsoft Entra Conditional Access policy?",
    "scenario": "<div class=\"scenario-text\"><p>A zero-trust design requires policies that consider user risk, device state, and the strength of the authentication method.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "User risk level" },
      { "id": "b", "text": "Device compliance state" },
      { "id": "c", "text": "Authentication strength" },
      { "id": "d", "text": "On-premises group membership that has never been synchronized" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Conditional Access natively evaluates user risk, device compliance, and authentication strength. Pure on-premises groups that have not been synchronized to Entra ID cannot be used as conditions."
  },
  {
    "id": 63,
    "qid": "SC-500-MOD2-063",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the recommended way to provide just-in-time privileged access to Azure resources for operators?",
    "scenario": "<div class=\"scenario-text\"><p>An Azure landing-zone design requires that subscription-level Owner rights are never permanently assigned.</p></div>",
    "options": [
      { "id": "a", "text": "Assign eligible Azure RBAC roles through Privileged Identity Management" },
      { "id": "b", "text": "Assign permanent Owner role to a shared service account" },
      { "id": "c", "text": "Store Owner credentials in a shared password manager" },
      { "id": "d", "text": "Disable Azure RBAC entirely" }
    ],
    "correct": ["a"],
    "explanation": "PIM supports eligible Azure RBAC role assignments that can be activated for a limited time after MFA, justification, and optional approval, providing just-in-time privileged access with full auditability."
  },
  {
    "id": 64,
    "qid": "SC-500-MOD2-064",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each hybrid authentication method to the component that validates the user’s password.",
    "scenario": "<div class=\"scenario-text\"><p>An identity team is documenting where password validation occurs for each hybrid authentication option.</p></div>",
    "items": [
      { "id": "i1", "text": "Password Hash Synchronization" },
      { "id": "i2", "text": "Pass-through Authentication" },
      { "id": "i3", "text": "Federation with AD FS" }
    ],
    "zones": [
      { "id": "z1", "label": "Microsoft Entra ID (cloud hash comparison)" },
      { "id": "z2", "label": "On-premises Active Directory via PTA agent" },
      { "id": "z3", "label": "On-premises AD FS servers" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "With PHS the cloud compares the provided password against the stored hash. PTA agents forward the credential to Active Directory. AD FS performs the authentication on-premises."
  },
  {
    "id": 65,
    "qid": "SC-500-MOD2-065",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra feature can require users to re-accept an updated Terms of Use statement after a policy version change?",
    "scenario": "<div class=\"scenario-text\"><p>Legal has updated the corporate acceptable-use policy and requires every user to accept the new version before continuing to access cloud applications.</p></div>",
    "options": [
      { "id": "a", "text": "Terms of Use with versioning and Conditional Access grant control" },
      { "id": "b", "text": "Privileged Identity Management activation" },
      { "id": "c", "text": "Dynamic group membership rules" },
      { "id": "d", "text": "Password protection custom banned list" }
    ],
    "correct": ["a"],
    "explanation": "Microsoft Entra Terms of Use supports versioning; when a new version is published, Conditional Access can require re-acceptance before access is granted."
  },
  {
    "id": 66,
    "qid": "SC-500-MOD2-066",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two capabilities are provided by Microsoft Entra ID Governance lifecycle workflows?",
    "scenario": "<div class=\"scenario-text\"><p>An HR-driven identity program needs automated onboarding and offboarding tasks that run when users are hired or terminated.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Trigger tasks based on joiner, mover, or leaver events" },
      { "id": "b", "text": "Execute actions such as adding users to groups or sending email notifications" },
      { "id": "c", "text": "Replace the need for Conditional Access policies" },
      { "id": "d", "text": "Automatically assign permanent Global Administrator rights" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Lifecycle workflows react to identity lifecycle events and can run tasks including group membership changes, license assignment, and notifications. They do not replace Conditional Access or elevate privileges automatically."
  },
  {
    "id": 67,
    "qid": "SC-500-MOD2-067",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the primary security benefit of requiring number matching for Microsoft Authenticator push notifications?",
    "scenario": "<div class=\"scenario-text\"><p>Users have reported approving push notifications without looking at the sign-in screen, creating an MFA fatigue risk.</p></div>",
    "options": [
      { "id": "a", "text": "Forces the user to enter a number displayed on the sign-in page, preventing blind approval" },
      { "id": "b", "text": "Converts the authentication method into a phishing-resistant FIDO2 key" },
      { "id": "c", "text": "Eliminates the need for Conditional Access policies" },
      { "id": "d", "text": "Stores the user’s password hash in the Authenticator app" }
    ],
    "correct": ["a"],
    "explanation": "Number matching requires the user to type the number shown on the authentication prompt into the Authenticator app, mitigating MFA fatigue attacks that rely on accidental or social-engineered approvals."
  },
  {
    "id": 68,
    "qid": "SC-500-MOD2-068",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "prompt": "Select the component responsible for calculating both user risk and sign-in risk and feeding those signals into Conditional Access.",
    "scenario": "<div class=\"scenario-text\"><p>Examine the identity protection architecture that drives risk-based access decisions.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Microsoft Entra ID Protection", "x": 30, "y": 35 },
      { "id": "node2", "label": "Microsoft Entra Connect", "x": 65, "y": 35 },
      { "id": "node3", "label": "Privileged Identity Management", "x": 50, "y": 70 }
    ],
    "correct": ["node1"],
    "explanation": "Microsoft Entra ID Protection evaluates risk detections and produces user-risk and sign-in-risk levels that Conditional Access policies can use as conditions."
  },
  {
    "id": 69,
    "qid": "SC-500-MOD2-069",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which type of managed identity should be used when multiple Azure resources must share the same identity and the same set of Azure RBAC role assignments?",
    "scenario": "<div class=\"scenario-text\"><p>A set of virtual machines and Azure Functions all need identical permissions to the same Key Vault and Storage account.</p></div>",
    "options": [
      { "id": "a", "text": "User-assigned managed identity" },
      { "id": "b", "text": "System-assigned managed identity" },
      { "id": "c", "text": "Service principal with a client secret" },
      { "id": "d", "text": "Guest user account" }
    ],
    "correct": ["a"],
    "explanation": "A user-assigned managed identity is an independent Azure resource that can be assigned to multiple resources, allowing them to share the same identity and role assignments. System-assigned identities are tied to a single resource."
  },
  {
    "id": 70,
    "qid": "SC-500-MOD2-070",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three actions are recommended when configuring Privileged Identity Management for Microsoft Entra directory roles?",
    "scenario": "<div class=\"scenario-text\"><p>A security architect is implementing least-privilege privileged access across the tenant.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Convert standing permanent assignments to eligible assignments" },
      { "id": "b", "text": "Require multifactor authentication on activation" },
      { "id": "c", "text": "Configure approval for high-privilege roles such as Global Administrator" },
      { "id": "d", "text": "Disable audit logging of activation events" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Best practices include converting permanent assignments to eligible, requiring MFA for activation, and using approval workflows for the most sensitive roles. Audit logging must remain enabled."
  },
  {
    "id": 71,
    "qid": "SC-500-MOD2-071",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each authentication method to its relative resistance to phishing.",
    "scenario": "<div class=\"scenario-text\"><p>An architect is ranking authentication methods for a privileged-access Conditional Access policy.</p></div>",
    "items": [
      { "id": "i1", "text": "FIDO2 security key" },
      { "id": "i2", "text": "Microsoft Authenticator with number matching" },
      { "id": "i3", "text": "SMS one-time passcode" }
    ],
    "zones": [
      { "id": "z1", "label": "Highest – phishing-resistant" },
      { "id": "z2", "label": "Medium – mitigates MFA fatigue" },
      { "id": "z3", "label": "Lowest – vulnerable to interception and SIM swap" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "FIDO2 provides cryptographic phishing resistance. Number matching reduces accidental approvals. SMS remains the weakest method due to SIM-swapping and interception risks."
  },
  {
    "id": 72,
    "qid": "SC-500-MOD2-072",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra feature allows external partner organizations to be defined so their users can request access packages?",
    "scenario": "<div class=\"scenario-text\"><p>A company collaborates with multiple external vendors and needs a governed way for vendor users to request time-limited access to project resources.</p></div>",
    "options": [
      { "id": "a", "text": "Connected organizations in entitlement management" },
      { "id": "b", "text": "Administrative units" },
      { "id": "c", "text": "Privileged Identity Management for groups" },
      { "id": "d", "text": "Seamless Single Sign-On" }
    ],
    "correct": ["a"],
    "explanation": "Connected organizations represent external identity providers or Entra ID tenants so that their users can be invited to request access packages under governed policies."
  },
  {
    "id": 73,
    "qid": "SC-500-MOD2-073",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly configures the Conditional Access policy to block access instead of requiring MFA.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer intends to require MFA for all users but has misconfigured the grant control.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"Require MFA for all users\"," },
      { "id": "l3", "label": "  \"state\": \"enabled\"," },
      { "id": "l4", "label": "  \"grantControls\": {" },
      { "id": "l5", "label": "    \"operator\": \"OR\"," },
      { "id": "l6", "label": "    \"builtInControls\": [\"block\"]" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l6"],
    "selectCount": 1,
    "explanation": "The builtInControls array contains \"block\", which denies access entirely. To require MFA the value must be \"mfa\" (or an authentication strength that includes MFA methods)."
  },
  {
    "id": 74,
    "qid": "SC-500-MOD2-074",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the primary purpose of Microsoft Entra ID Protection risk-based Conditional Access policies?",
    "scenario": "<div class=\"scenario-text\"><p>A security operations team wants to automatically challenge or block sign-ins that exhibit high risk characteristics.</p></div>",
    "options": [
      { "id": "a", "text": "Evaluate user risk or sign-in risk and enforce controls such as MFA or block access" },
      { "id": "b", "text": "Automatically assign the Global Administrator role to risky users" },
      { "id": "c", "text": "Synchronize on-premises passwords to the cloud" },
      { "id": "d", "text": "Replace the need for access reviews" }
    ],
    "correct": ["a"],
    "explanation": "Risk-based Conditional Access policies use the risk levels calculated by Entra ID Protection to require remediation (MFA, password change) or to block the authentication attempt."
  },
  {
    "id": 75,
    "qid": "SC-500-MOD2-075",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two hybrid identity features can be used together to provide cloud authentication and a seamless sign-in experience on domain-joined devices?",
    "scenario": "<div class=\"scenario-text\"><p>An organization wants users to authenticate directly against Microsoft Entra ID while still enjoying single sign-on from domain-joined Windows devices.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Password Hash Synchronization" },
      { "id": "b", "text": "Seamless Single Sign-On" },
      { "id": "c", "text": "Active Directory Federation Services only" },
      { "id": "d", "text": "Certificate-based authentication only" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Password Hash Synchronization enables cloud authentication, and Seamless SSO allows domain-joined devices to obtain Entra ID tokens via Kerberos without prompting for credentials. AD FS and CBA are alternative methods that are not required for this combination."
  },
  {
    "id": 76,
    "qid": "SC-500-MOD2-076",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra capability allows an application running outside Azure (for example in GitHub Actions) to obtain tokens without storing a client secret?",
    "scenario": "<div class=\"scenario-text\"><p>A CI/CD pipeline must authenticate to Microsoft Graph and Azure Resource Manager without embedding long-lived secrets.</p></div>",
    "options": [
      { "id": "a", "text": "Workload identity federation" },
      { "id": "b", "text": "System-assigned managed identity" },
      { "id": "c", "text": "Password Hash Synchronization" },
      { "id": "d", "text": "Seamless Single Sign-On" }
    ],
    "correct": ["a"],
    "explanation": "Workload identity federation lets an external identity provider issue a token that is exchanged for an Entra ID access token, eliminating the need for client secrets. Managed identities are available only for Azure resources."
  },
  {
    "id": 77,
    "qid": "SC-500-MOD2-077",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Privileged Identity Management assignment type to its behavior.",
    "scenario": "<div class=\"scenario-text\"><p>An administrator is configuring PIM for Azure RBAC roles and must understand the difference between assignment types.</p></div>",
    "items": [
      { "id": "i1", "text": "Eligible assignment" },
      { "id": "i2", "text": "Active assignment" },
      { "id": "i3", "text": "Just-in-time activation" }
    ],
    "zones": [
      { "id": "z1", "label": "User can activate the role when needed" },
      { "id": "z2", "label": "Role is permanently assigned and immediately usable" },
      { "id": "z3", "label": "Time-limited elevation after meeting activation requirements" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Eligible assignments require activation. Active assignments grant standing access. Just-in-time activation is the process that elevates an eligible assignment for a limited period."
  },
  {
    "id": 78,
    "qid": "SC-500-MOD2-078",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Conditional Access condition evaluates the persistent risk associated with a user account rather than a single authentication attempt?",
    "scenario": "<div class=\"scenario-text\"><p>A policy must force a password reset when a user’s overall risk level is high, regardless of the current sign-in characteristics.</p></div>",
    "options": [
      { "id": "a", "text": "User risk" },
      { "id": "b", "text": "Sign-in risk" },
      { "id": "c", "text": "Device platform" },
      { "id": "d", "text": "Client apps" }
    ],
    "correct": ["a"],
    "explanation": "User risk is a persistent score calculated by Entra ID Protection based on detections such as leaked credentials and anomalous activity. Sign-in risk evaluates the individual authentication attempt."
  },
  {
    "id": 79,
    "qid": "SC-500-MOD2-079",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three Microsoft Entra ID Governance capabilities help enforce least-privilege and periodic access validation?",
    "scenario": "<div class=\"scenario-text\"><p>A compliance program requires automated lifecycle management, self-service access requests, and regular attestation of existing access.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Lifecycle workflows" },
      { "id": "b", "text": "Entitlement management" },
      { "id": "c", "text": "Access reviews" },
      { "id": "d", "text": "Password Hash Synchronization" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Lifecycle workflows automate joiner-mover-leaver processes, entitlement management provides governed access packages, and access reviews perform periodic attestation. Password Hash Synchronization is a hybrid authentication feature."
  },
  {
    "id": 80,
    "qid": "SC-500-MOD2-080",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra feature should be used to ensure that privileged role activations are time-bound, require MFA, and generate audit logs?",
    "scenario": "<div class=\"scenario-text\"><p>An organization must eliminate standing Global Administrator assignments and replace them with on-demand elevation that is fully auditable.</p></div>",
    "options": [
      { "id": "a", "text": "Privileged Identity Management (PIM)" },
      { "id": "b", "text": "Access reviews only" },
      { "id": "c", "text": "Conditional Access session controls only" },
      { "id": "d", "text": "Seamless Single Sign-On" }
    ],
    "correct": ["a"],
    "explanation": "Privileged Identity Management provides eligible role assignments, just-in-time activation with MFA and optional approval, time-bound elevation, and comprehensive audit logging—exactly the controls required for privileged access."
  },
  {
    "id": 81,
    "qid": "SC-500-MOD2-081",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra ID Governance capability automatically executes a sequence of tasks when a user is hired, transferred, or terminated based on HR attribute changes?",
    "scenario": "<div class=\"scenario-text\"><p>An enterprise uses Workday as the authoritative HR source and needs fully automated joiner-mover-leaver processing for group memberships, licenses, and Teams access.</p></div>",
    "options": [
      { "id": "a", "text": "Lifecycle workflows" },
      { "id": "b", "text": "Access reviews" },
      { "id": "c", "text": "Entitlement management catalogs" },
      { "id": "d", "text": "Privileged Identity Management" }
    ],
    "correct": ["a"],
    "explanation": "Lifecycle workflows trigger on identity lifecycle events (joiner, mover, leaver) and can run tasks such as adding/removing group memberships, assigning licenses, and sending notifications. Access reviews require attestation, entitlement management focuses on access packages, and PIM manages privileged role elevation."
  },
  {
    "id": 82,
    "qid": "SC-500-MOD2-082",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three Conditional Access conditions can be combined to protect access to a sensitive finance application?",
    "scenario": "<div class=\"scenario-text\"><p>A zero-trust architecture requires that only low-risk users on compliant devices using phishing-resistant authentication can reach the finance application.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "User risk level" },
      { "id": "b", "text": "Device compliance state" },
      { "id": "c", "text": "Authentication strength" },
      { "id": "d", "text": "On-premises OU membership that has never been synchronized" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Conditional Access can evaluate user risk, device compliance, and authentication strength. Unsynchronized on-premises OU membership is not available as a cloud condition."
  },
  {
    "id": 83,
    "qid": "SC-500-MOD2-083",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each managed identity type to its lifecycle and sharing characteristics.",
    "scenario": "<div class=\"scenario-text\"><p>An Azure architecture team is deciding which managed identity model to use for a set of microservices that share identical Azure RBAC permissions.</p></div>",
    "items": [
      { "id": "i1", "text": "System-assigned managed identity" },
      { "id": "i2", "text": "User-assigned managed identity" },
      { "id": "i3", "text": "Workload identity federation" }
    ],
    "zones": [
      { "id": "z1", "label": "Created and deleted with a single Azure resource" },
      { "id": "z2", "label": "Independent resource that can be assigned to many Azure resources" },
      { "id": "z3", "label": "Enables secret-less token exchange from external identity providers" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "System-assigned identities are bound to one resource. User-assigned identities are standalone and reusable. Workload identity federation allows external platforms such as GitHub or AKS to obtain Entra ID tokens without client secrets."
  },
  {
    "id": 84,
    "qid": "SC-500-MOD2-084",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "prompt": "Select the component that provides just-in-time activation of Microsoft Entra directory roles with MFA and optional approval.",
    "scenario": "<div class=\"scenario-text\"><p>Review the privileged access control plane used to eliminate standing Global Administrator assignments.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Privileged Identity Management", "x": 25, "y": 40 },
      { "id": "node2", "label": "Entra ID Protection", "x": 55, "y": 40 },
      { "id": "node3", "label": "Access reviews", "x": 85, "y": 40 }
    ],
    "correct": ["node1"],
    "explanation": "Privileged Identity Management (PIM) enables eligible directory role assignments that can be activated just-in-time after meeting MFA, justification, and approval requirements. Entra ID Protection focuses on risk, and access reviews perform periodic attestation."
  },
  {
    "id": 85,
    "qid": "SC-500-MOD2-085",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly configures the Conditional Access policy to use report-only mode.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer is deploying a new Conditional Access policy via Microsoft Graph and intends the policy to evaluate in report-only mode before enforcement.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"Pilot phishing-resistant auth\"," },
      { "id": "l3", "label": "  \"state\": \"enabled\"," },
      { "id": "l4", "label": "  \"conditions\": { \"users\": { \"includeRoles\": [\"62e90394-69f5-4237-9190-012177145e10\"] } }," },
      { "id": "l5", "label": "  \"grantControls\": { \"operator\": \"OR\", \"authenticationStrength\": { \"id\": \"beba5fa0-5d68-4549-9d64-3b1b7c8e0e0a\" } }" },
      { "id": "l6", "label": "}" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "The state property is set to \"enabled\". For report-only evaluation the correct value is \"enabledForReportingButNotEnforced\"."
  },
  {
    "id": 86,
    "qid": "SC-500-MOD2-086",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which hybrid identity authentication method validates the user’s password in real time against on-premises Active Directory without storing a password hash in Microsoft Entra ID?",
    "scenario": "<div class=\"scenario-text\"><p>A regulated organization requires that password validation always occurs against the on-premises directory and that no password hashes are present in the cloud.</p></div>",
    "options": [
      { "id": "a", "text": "Pass-through Authentication (PTA)" },
      { "id": "b", "text": "Password Hash Synchronization (PHS)" },
      { "id": "c", "text": "Seamless Single Sign-On only" },
      { "id": "d", "text": "Certificate-based authentication" }
    ],
    "correct": ["a"],
    "explanation": "Pass-through Authentication uses lightweight agents to validate credentials directly against Active Directory in real time. Password Hash Synchronization stores a hash in Entra ID, Seamless SSO is an enhancement, and CBA relies on certificates."
  },
  {
    "id": 87,
    "qid": "SC-500-MOD2-087",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two Microsoft Entra roles have the authority to manage Privileged Identity Management settings and approve role activation requests by default?",
    "scenario": "<div class=\"scenario-text\"><p>A governance team must designate approvers and PIM administrators without granting unnecessary permanent privileges.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Privileged Role Administrator" },
      { "id": "b", "text": "Global Administrator" },
      { "id": "c", "text": "User Administrator" },
      { "id": "d", "text": "Security Reader" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Privileged Role Administrator and Global Administrator both possess full rights to configure PIM and approve activation requests. User Administrator and Security Reader lack these permissions."
  },
  {
    "id": 88,
    "qid": "SC-500-MOD2-088",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the primary purpose of a catalog in Microsoft Entra entitlement management?",
    "scenario": "<div class=\"scenario-text\"><p>A governance administrator is organizing resources so that multiple access packages can share the same set of groups, applications, and SharePoint sites.</p></div>",
    "options": [
      { "id": "a", "text": "A container that holds resources and access packages for a specific business unit or scenario" },
      { "id": "b", "text": "A permanent security group that never expires" },
      { "id": "c", "text": "A Conditional Access policy template" },
      { "id": "d", "text": "A managed identity for Azure resources" }
    ],
    "correct": ["a"],
    "explanation": "A catalog is the top-level container in entitlement management that holds resources (groups, apps, sites) and the access packages that reference those resources."
  },
  {
    "id": 89,
    "qid": "SC-500-MOD2-089",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Entra ID Protection detection to whether it is evaluated in real time or offline.",
    "scenario": "<div class=\"scenario-text\"><p>A security architect is designing risk-based Conditional Access and must know which signals are available during the authentication request.</p></div>",
    "items": [
      { "id": "i1", "text": "Anonymous IP address" },
      { "id": "i2", "text": "Atypical travel" },
      { "id": "i3", "text": "Malware-linked IP address" }
    ],
    "zones": [
      { "id": "z1", "label": "Real-time during sign-in evaluation" },
      { "id": "z2", "label": "Offline machine-learning analysis" },
      { "id": "z3", "label": "Real-time threat-intelligence based" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Anonymous IP and malware-linked IP detections are performed in real time. Atypical travel requires historical location and velocity analysis and is computed offline."
  },
  {
    "id": 90,
    "qid": "SC-500-MOD2-090",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra feature allows temporary elevation of a user’s membership in a security group for a limited time after approval and MFA?",
    "scenario": "<div class=\"scenario-text\"><p>Operations engineers need elevated permissions in a production support group only while actively resolving incidents.</p></div>",
    "options": [
      { "id": "a", "text": "Privileged Identity Management for groups" },
      { "id": "b", "text": "Dynamic membership rules" },
      { "id": "c", "text": "Access package with permanent assignment" },
      { "id": "d", "text": "Administrative unit scoping" }
    ],
    "correct": ["a"],
    "explanation": "PIM for groups supports eligible membership that can be activated just-in-time with MFA, justification, and approval, providing time-bound elevated group membership."
  },
  {
    "id": 91,
    "qid": "SC-500-MOD2-091",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly requires only MFA instead of a phishing-resistant authentication strength.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer is creating a Conditional Access policy via Microsoft Graph that must enforce phishing-resistant authentication for Global Administrators.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"Phishing-resistant for Global Admins\"," },
      { "id": "l3", "label": "  \"state\": \"enabled\"," },
      { "id": "l4", "label": "  \"grantControls\": {" },
      { "id": "l5", "label": "    \"operator\": \"OR\"," },
      { "id": "l6", "label": "    \"builtInControls\": [\"mfa\"]" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l6"],
    "selectCount": 1,
    "explanation": "The policy uses the generic \"mfa\" built-in control. To enforce phishing-resistant methods the authenticationStrength property must reference a phishing-resistant strength policy (for example the built-in phishing-resistant MFA strength)."
  },
  {
    "id": 92,
    "qid": "SC-500-MOD2-092",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three best practices apply when configuring Microsoft Entra break-glass accounts?",
    "scenario": "<div class=\"scenario-text\"><p>A cybersecurity team is documenting emergency access procedures to recover from Conditional Access misconfigurations or service outages.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Exclude the accounts from all Conditional Access policies" },
      { "id": "b", "text": "Store long, complex credentials offline in a secure location" },
      { "id": "c", "text": "Configure alerts for any successful sign-in" },
      { "id": "d", "text": "Leave the accounts permanently assigned Global Administrator with no monitoring" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Break-glass accounts must be excluded from Conditional Access, protected by offline strong credentials, and continuously monitored. Leaving them unmonitored increases risk."
  },
  {
    "id": 93,
    "qid": "SC-500-MOD2-093",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the primary advantage of Microsoft Entra Cloud Sync over classic Entra Connect Sync in multi-forest environments with limited infrastructure?",
    "scenario": "<div class=\"scenario-text\"><p>An organization has several disconnected Active Directory forests and cannot deploy full Entra Connect servers in every location.</p></div>",
    "options": [
      { "id": "a", "text": "Lightweight provisioning agent that supports multiple forests with simplified high availability" },
      { "id": "b", "text": "Full custom synchronization rule engine identical to Entra Connect" },
      { "id": "c", "text": "Support for password writeback only" },
      { "id": "d", "text": "Replacement for all Conditional Access policies" }
    ],
    "correct": ["a"],
    "explanation": "Entra Cloud Sync uses a lightweight agent architecture that simplifies multi-forest deployments and provides built-in high availability. It does not offer the full custom rule engine of classic Entra Connect."
  },
  {
    "id": 94,
    "qid": "SC-500-MOD2-094",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Conditional Access control to its correct category.",
    "scenario": "<div class=\"scenario-text\"><p>An architect is building a Conditional Access policy and must correctly classify grant versus session controls.</p></div>",
    "items": [
      { "id": "i1", "text": "Require multifactor authentication" },
      { "id": "i2", "text": "Require device to be marked as compliant" },
      { "id": "i3", "text": "Use Conditional Access App Control (session control)" }
    ],
    "zones": [
      { "id": "z1", "label": "Grant control" },
      { "id": "z2", "label": "Grant control" },
      { "id": "z3", "label": "Session control" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Require MFA and require compliant device are grant controls that decide whether access is allowed. Conditional Access App Control is a session control that limits the experience after access is granted."
  },
  {
    "id": 95,
    "qid": "SC-500-MOD2-095",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra capability continuously evaluates risk for service principals and managed identities?",
    "scenario": "<div class=\"scenario-text\"><p>Automation accounts and service principals have exhibited unusual sign-in patterns. The security team needs risk detection specifically for non-human identities.</p></div>",
    "options": [
      { "id": "a", "text": "Workload identity protection" },
      { "id": "b", "text": "Privileged Identity Management for users only" },
      { "id": "c", "text": "Access reviews for Microsoft 365 groups" },
      { "id": "d", "text": "Seamless Single Sign-On" }
    ],
    "correct": ["a"],
    "explanation": "Workload identity protection extends Entra ID Protection capabilities to service principals and managed identities, detecting anomalous sign-ins, leaked credentials, and other risk events."
  },
  {
    "id": 96,
    "qid": "SC-500-MOD2-096",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "prompt": "Select the hybrid identity component that periodically synchronizes a hash of the user’s password into Microsoft Entra ID.",
    "scenario": "<div class=\"scenario-text\"><p>Review the authentication options available between on-premises Active Directory and Microsoft Entra ID.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Password Hash Synchronization", "x": 20, "y": 45 },
      { "id": "node2", "label": "Pass-through Authentication", "x": 50, "y": 45 },
      { "id": "node3", "label": "AD FS federation", "x": 80, "y": 45 }
    ],
    "correct": ["node1"],
    "explanation": "Password Hash Synchronization writes a hash of the on-premises password into Microsoft Entra ID, enabling cloud authentication. PTA and AD FS do not store password hashes in the cloud."
  },
  {
    "id": 97,
    "qid": "SC-500-MOD2-097",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two statements correctly describe Microsoft Entra administrative units?",
    "scenario": "<div class=\"scenario-text\"><p>A global organization wants to delegate user and group management for regional subsidiaries without granting tenant-wide rights.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "They scope administrative role assignments to a subset of directory objects" },
      { "id": "b", "text": "They can be used with roles such as User Administrator and Groups Administrator" },
      { "id": "c", "text": "They replace the need for Conditional Access policies" },
      { "id": "d", "text": "They automatically grant Global Administrator privileges" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Administrative units provide a scope boundary so that role assignments apply only to the users, groups, or devices inside the unit. They work with many directory roles and do not replace Conditional Access or elevate privileges automatically."
  },
  {
    "id": 98,
    "qid": "SC-500-MOD2-098",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "In a Conditional Access policy, what does the authentication strength grant control enforce?",
    "scenario": "<div class=\"scenario-text\"><p>A security team wants to require that only phishing-resistant methods are accepted for access to privileged portals.</p></div>",
    "options": [
      { "id": "a", "text": "A specific set of authentication methods defined by an authentication strength policy" },
      { "id": "b", "text": "Any registered multifactor authentication method" },
      { "id": "c", "text": "Only SMS one-time passcodes" },
      { "id": "d", "text": "Device compliance only" }
    ],
    "correct": ["a"],
    "explanation": "Authentication strength allows the policy author to require a defined combination of methods (for example the built-in phishing-resistant MFA strength). It is more granular than the generic “require MFA” control."
  },
  {
    "id": 99,
    "qid": "SC-500-MOD2-099",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Microsoft Entra ID Governance feature to its primary function.",
    "scenario": "<div class=\"scenario-text\"><p>A governance architect is mapping features to identity lifecycle and access control requirements.</p></div>",
    "items": [
      { "id": "i1", "text": "Lifecycle workflows" },
      { "id": "i2", "text": "Access reviews" },
      { "id": "i3", "text": "Entitlement management" }
    ],
    "zones": [
      { "id": "z1", "label": "Automate joiner-mover-leaver tasks based on HR events" },
      { "id": "z2", "label": "Periodically require attestation of existing access" },
      { "id": "z3", "label": "Provide self-service access packages with approval and expiration" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Lifecycle workflows automate identity lifecycle events. Access reviews perform periodic attestation. Entitlement management delivers access packages with request and lifecycle policies."
  },
  {
    "id": 100,
    "qid": "SC-500-MOD2-100",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which authentication flow does a managed identity use to obtain an access token from Microsoft Entra ID?",
    "scenario": "<div class=\"scenario-text\"><p>An Azure virtual machine with a system-assigned managed identity needs to call Azure Key Vault without any secrets in application code.</p></div>",
    "options": [
      { "id": "a", "text": "OAuth 2.0 client credentials flow via the Instance Metadata Service" },
      { "id": "b", "text": "Authorization code flow with PKCE" },
      { "id": "c", "text": "Resource owner password credentials flow" },
      { "id": "d", "text": "SAML 2.0 browser-based federation" }
    ],
    "correct": ["a"],
    "explanation": "Managed identities obtain tokens through the Instance Metadata Service (IMDS) or the Azure Identity libraries, which use the OAuth 2.0 client credentials flow. Interactive flows and SAML are not used."
  },
  {
    "id": 101,
    "qid": "SC-500-MOD2-101",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly includes all users instead of targeting only members of a privileged role.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer is creating a Conditional Access policy that should apply only to users assigned the Global Administrator role.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"MFA for Global Administrators\"," },
      { "id": "l3", "label": "  \"state\": \"enabled\"," },
      { "id": "l4", "label": "  \"conditions\": {" },
      { "id": "l5", "label": "    \"users\": { \"includeUsers\": [\"All\"] }" },
      { "id": "l6", "label": "  }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "The policy includes all users. To target only Global Administrators the includeRoles collection must contain the Global Administrator role template ID."
  },
  {
    "id": 102,
    "qid": "SC-500-MOD2-102",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three signals can be evaluated by a Microsoft Entra Conditional Access policy?",
    "scenario": "<div class=\"scenario-text\"><p>A zero-trust design requires policies that consider identity risk, device state, and authentication method strength.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "User risk level from Entra ID Protection" },
      { "id": "b", "text": "Device compliance state from Microsoft Intune" },
      { "id": "c", "text": "Authentication strength (phishing-resistant)" },
      { "id": "d", "text": "On-premises group membership that has never been synchronized" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Conditional Access natively evaluates user risk, device compliance, and authentication strength. Unsynchronized on-premises groups cannot be used as conditions."
  },
  {
    "id": 103,
    "qid": "SC-500-MOD2-103",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the recommended approach for providing just-in-time privileged access to Azure subscriptions?",
    "scenario": "<div class=\"scenario-text\"><p>An Azure landing-zone design requires that Owner rights on subscriptions are never permanently assigned.</p></div>",
    "options": [
      { "id": "a", "text": "Assign eligible Azure RBAC roles through Privileged Identity Management" },
      { "id": "b", "text": "Assign permanent Owner role to a shared service account" },
      { "id": "c", "text": "Store Owner credentials in a shared password manager" },
      { "id": "d", "text": "Disable Azure RBAC entirely" }
    ],
    "correct": ["a"],
    "explanation": "PIM supports eligible Azure RBAC role assignments that can be activated for a limited time after MFA, justification, and optional approval, providing just-in-time privileged access with full auditability."
  },
  {
    "id": 104,
    "qid": "SC-500-MOD2-104",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each hybrid authentication method to where the user’s password is validated.",
    "scenario": "<div class=\"scenario-text\"><p>An identity team is documenting password validation locations for each hybrid authentication option.</p></div>",
    "items": [
      { "id": "i1", "text": "Password Hash Synchronization" },
      { "id": "i2", "text": "Pass-through Authentication" },
      { "id": "i3", "text": "Federation with AD FS" }
    ],
    "zones": [
      { "id": "z1", "label": "Microsoft Entra ID (cloud hash comparison)" },
      { "id": "z2", "label": "On-premises Active Directory via PTA agent" },
      { "id": "z3", "label": "On-premises AD FS servers" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "With PHS the cloud compares the provided password against the stored hash. PTA agents forward the credential to Active Directory. AD FS performs the authentication on-premises."
  },
  {
    "id": 105,
    "qid": "SC-500-MOD2-105",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra feature can require users to re-accept an updated Terms of Use statement after a policy version change?",
    "scenario": "<div class=\"scenario-text\"><p>Legal has updated the corporate acceptable-use policy and requires every user to accept the new version before continuing to access cloud applications.</p></div>",
    "options": [
      { "id": "a", "text": "Terms of Use with versioning enforced by Conditional Access" },
      { "id": "b", "text": "Privileged Identity Management activation" },
      { "id": "c", "text": "Dynamic group membership rules" },
      { "id": "d", "text": "Password protection custom banned list" }
    ],
    "correct": ["a"],
    "explanation": "Microsoft Entra Terms of Use supports versioning; when a new version is published, Conditional Access can require re-acceptance before access is granted."
  },
  {
    "id": 106,
    "qid": "SC-500-MOD2-106",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two capabilities are provided by Microsoft Entra ID Governance lifecycle workflows?",
    "scenario": "<div class=\"scenario-text\"><p>An HR-driven identity program needs automated onboarding and offboarding tasks that run when users are hired or terminated.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Trigger tasks based on joiner, mover, or leaver events" },
      { "id": "b", "text": "Execute actions such as adding users to groups or sending notifications" },
      { "id": "c", "text": "Replace the need for Conditional Access policies" },
      { "id": "d", "text": "Automatically assign permanent Global Administrator rights" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Lifecycle workflows react to identity lifecycle events and can run tasks including group membership changes, license assignment, and notifications. They do not replace Conditional Access or elevate privileges automatically."
  },
  {
    "id": 107,
    "qid": "SC-500-MOD2-107",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the primary security benefit of requiring number matching for Microsoft Authenticator push notifications?",
    "scenario": "<div class=\"scenario-text\"><p>Users have reported approving push notifications without looking at the sign-in screen, creating an MFA fatigue risk.</p></div>",
    "options": [
      { "id": "a", "text": "Forces the user to enter a number displayed on the sign-in page, preventing blind approval" },
      { "id": "b", "text": "Converts the authentication method into a phishing-resistant FIDO2 key" },
      { "id": "c", "text": "Eliminates the need for Conditional Access policies" },
      { "id": "d", "text": "Stores the user’s password hash in the Authenticator app" }
    ],
    "correct": ["a"],
    "explanation": "Number matching requires the user to type the number shown on the authentication prompt into the Authenticator app, mitigating MFA fatigue attacks that rely on accidental or social-engineered approvals."
  },
  {
    "id": 108,
    "qid": "SC-500-MOD2-108",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "prompt": "Select the component responsible for calculating user risk and sign-in risk and feeding those signals into Conditional Access.",
    "scenario": "<div class=\"scenario-text\"><p>Examine the identity protection architecture that drives risk-based access decisions.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Microsoft Entra ID Protection", "x": 30, "y": 35 },
      { "id": "node2", "label": "Microsoft Entra Connect", "x": 65, "y": 35 },
      { "id": "node3", "label": "Privileged Identity Management", "x": 50, "y": 70 }
    ],
    "correct": ["node1"],
    "explanation": "Microsoft Entra ID Protection evaluates risk detections and produces user-risk and sign-in-risk levels that Conditional Access policies can use as conditions."
  },
  {
    "id": 109,
    "qid": "SC-500-MOD2-109",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which type of managed identity should be selected when multiple Azure resources must share the same identity and the same set of Azure RBAC role assignments?",
    "scenario": "<div class=\"scenario-text\"><p>A set of virtual machines and Azure Functions all need identical permissions to the same Key Vault and Storage account.</p></div>",
    "options": [
      { "id": "a", "text": "User-assigned managed identity" },
      { "id": "b", "text": "System-assigned managed identity" },
      { "id": "c", "text": "Service principal with a client secret" },
      { "id": "d", "text": "Guest user account" }
    ],
    "correct": ["a"],
    "explanation": "A user-assigned managed identity is an independent Azure resource that can be assigned to multiple resources, allowing them to share the same identity and role assignments. System-assigned identities are tied to a single resource."
  },
  {
    "id": 110,
    "qid": "SC-500-MOD2-110",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three actions are recommended when configuring Privileged Identity Management for Microsoft Entra directory roles?",
    "scenario": "<div class=\"scenario-text\"><p>A security architect is implementing least-privilege privileged access across the tenant.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Convert standing permanent assignments to eligible assignments" },
      { "id": "b", "text": "Require multifactor authentication on activation" },
      { "id": "c", "text": "Configure approval for high-privilege roles such as Global Administrator" },
      { "id": "d", "text": "Disable audit logging of activation events" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Best practices include converting permanent assignments to eligible, requiring MFA for activation, and using approval workflows for the most sensitive roles. Audit logging must remain enabled."
  },
  {
    "id": 111,
    "qid": "SC-500-MOD2-111",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each authentication method to its relative resistance to phishing.",
    "scenario": "<div class=\"scenario-text\"><p>An architect is ranking authentication methods for a privileged-access Conditional Access policy.</p></div>",
    "items": [
      { "id": "i1", "text": "FIDO2 security key" },
      { "id": "i2", "text": "Microsoft Authenticator with number matching" },
      { "id": "i3", "text": "SMS one-time passcode" }
    ],
    "zones": [
      { "id": "z1", "label": "Highest – phishing-resistant" },
      { "id": "z2", "label": "Medium – mitigates MFA fatigue" },
      { "id": "z3", "label": "Lowest – vulnerable to interception and SIM swap" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "FIDO2 provides cryptographic phishing resistance. Number matching reduces accidental approvals. SMS remains the weakest method due to SIM-swapping and interception risks."
  },
  {
    "id": 112,
    "qid": "SC-500-MOD2-112",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra feature allows external partner organizations to be defined so their users can request access packages?",
    "scenario": "<div class=\"scenario-text\"><p>A company collaborates with multiple external vendors and needs a governed way for vendor users to request time-limited access to project resources.</p></div>",
    "options": [
      { "id": "a", "text": "Connected organizations in entitlement management" },
      { "id": "b", "text": "Administrative units" },
      { "id": "c", "text": "Privileged Identity Management for groups" },
      { "id": "d", "text": "Seamless Single Sign-On" }
    ],
    "correct": ["a"],
    "explanation": "Connected organizations represent external identity providers or Entra ID tenants so that their users can be invited to request access packages under governed policies."
  },
  {
    "id": 113,
    "qid": "SC-500-MOD2-113",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly configures the Conditional Access policy to block access instead of requiring MFA.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer intends to require MFA for all users but has misconfigured the grant control.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"Require MFA for all users\"," },
      { "id": "l3", "label": "  \"state\": \"enabled\"," },
      { "id": "l4", "label": "  \"grantControls\": {" },
      { "id": "l5", "label": "    \"operator\": \"OR\"," },
      { "id": "l6", "label": "    \"builtInControls\": [\"block\"]" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l6"],
    "selectCount": 1,
    "explanation": "The builtInControls array contains \"block\", which denies access entirely. To require MFA the value must be \"mfa\" (or an authentication strength that includes MFA methods)."
  },
  {
    "id": 114,
    "qid": "SC-500-MOD2-114",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the primary purpose of Microsoft Entra ID Protection risk-based Conditional Access policies?",
    "scenario": "<div class=\"scenario-text\"><p>A security operations team wants to automatically challenge or block sign-ins that exhibit high risk characteristics.</p></div>",
    "options": [
      { "id": "a", "text": "Evaluate user risk or sign-in risk and enforce controls such as MFA or block access" },
      { "id": "b", "text": "Automatically assign the Global Administrator role to risky users" },
      { "id": "c", "text": "Synchronize on-premises passwords to the cloud" },
      { "id": "d", "text": "Replace the need for access reviews" }
    ],
    "correct": ["a"],
    "explanation": "Risk-based Conditional Access policies use the risk levels calculated by Entra ID Protection to require remediation (MFA, password change) or to block the authentication attempt."
  },
  {
    "id": 115,
    "qid": "SC-500-MOD2-115",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two hybrid identity features can be combined to provide cloud authentication and a seamless sign-in experience on domain-joined devices?",
    "scenario": "<div class=\"scenario-text\"><p>An organization wants users to authenticate directly against Microsoft Entra ID while still enjoying single sign-on from domain-joined Windows devices.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Password Hash Synchronization" },
      { "id": "b", "text": "Seamless Single Sign-On" },
      { "id": "c", "text": "Active Directory Federation Services only" },
      { "id": "d", "text": "Certificate-based authentication only" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Password Hash Synchronization enables cloud authentication, and Seamless SSO allows domain-joined devices to obtain Entra ID tokens via Kerberos without prompting for credentials. AD FS and CBA are alternative methods that are not required for this combination."
  },
  {
    "id": 116,
    "qid": "SC-500-MOD2-116",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra capability allows an application running outside Azure (for example in GitHub Actions) to obtain tokens without storing a client secret?",
    "scenario": "<div class=\"scenario-text\"><p>A CI/CD pipeline must authenticate to Microsoft Graph and Azure Resource Manager without embedding long-lived secrets.</p></div>",
    "options": [
      { "id": "a", "text": "Workload identity federation" },
      { "id": "b", "text": "System-assigned managed identity" },
      { "id": "c", "text": "Password Hash Synchronization" },
      { "id": "d", "text": "Seamless Single Sign-On" }
    ],
    "correct": ["a"],
    "explanation": "Workload identity federation lets an external identity provider issue a token that is exchanged for an Entra ID access token, eliminating the need for client secrets. Managed identities are available only for Azure resources."
  },
  {
    "id": 117,
    "qid": "SC-500-MOD2-117",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Privileged Identity Management assignment type to its behavior.",
    "scenario": "<div class=\"scenario-text\"><p>An administrator is configuring PIM for Azure RBAC roles and must understand the difference between assignment types.</p></div>",
    "items": [
      { "id": "i1", "text": "Eligible assignment" },
      { "id": "i2", "text": "Active assignment" },
      { "id": "i3", "text": "Just-in-time activation" }
    ],
    "zones": [
      { "id": "z1", "label": "User can activate the role when needed" },
      { "id": "z2", "label": "Role is permanently assigned and immediately usable" },
      { "id": "z3", "label": "Time-limited elevation after meeting activation requirements" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Eligible assignments require activation. Active assignments grant standing access. Just-in-time activation is the process that elevates an eligible assignment for a limited period."
  },
  {
    "id": 118,
    "qid": "SC-500-MOD2-118",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Conditional Access condition evaluates the persistent risk associated with a user account rather than a single authentication attempt?",
    "scenario": "<div class=\"scenario-text\"><p>A policy must force a password reset when a user’s overall risk level is high, regardless of the current sign-in characteristics.</p></div>",
    "options": [
      { "id": "a", "text": "User risk" },
      { "id": "b", "text": "Sign-in risk" },
      { "id": "c", "text": "Device platform" },
      { "id": "d", "text": "Client apps" }
    ],
    "correct": ["a"],
    "explanation": "User risk is a persistent score calculated by Entra ID Protection based on detections such as leaked credentials and anomalous activity. Sign-in risk evaluates the individual authentication attempt."
  },
  {
    "id": 119,
    "qid": "SC-500-MOD2-119",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three Microsoft Entra ID Governance capabilities help enforce least-privilege and periodic access validation?",
    "scenario": "<div class=\"scenario-text\"><p>A compliance program requires automated lifecycle management, self-service access requests, and regular attestation of existing access.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Lifecycle workflows" },
      { "id": "b", "text": "Entitlement management" },
      { "id": "c", "text": "Access reviews" },
      { "id": "d", "text": "Password Hash Synchronization" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Lifecycle workflows automate joiner-mover-leaver processes, entitlement management provides governed access packages, and access reviews perform periodic attestation. Password Hash Synchronization is a hybrid authentication feature."
  },
  {
    "id": 120,
    "qid": "SC-500-MOD2-120",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra feature should be used to ensure that privileged role activations are time-bound, require MFA, and generate comprehensive audit logs?",
    "scenario": "<div class=\"scenario-text\"><p>An organization must eliminate standing Global Administrator assignments and replace them with on-demand elevation that is fully auditable.</p></div>",
    "options": [
      { "id": "a", "text": "Privileged Identity Management (PIM)" },
      { "id": "b", "text": "Access reviews only" },
      { "id": "c", "text": "Conditional Access session controls only" },
      { "id": "d", "text": "Seamless Single Sign-On" }
    ],
    "correct": ["a"],
    "explanation": "Privileged Identity Management provides eligible role assignments, just-in-time activation with MFA and optional approval, time-bound elevation, and comprehensive audit logging—exactly the controls required for privileged access."
  },
  {
    "id": 121,
    "qid": "SC-500-MOD2-121",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra ID Governance feature allows an organization to define a set of resources and policies that external users from a connected organization can request?",
    "scenario": "<div class=\"scenario-text\"><p>A company collaborates with multiple external partners and needs a governed, time-bound way for partner users to obtain access to specific Teams and SharePoint sites.</p></div>",
    "options": [
      { "id": "a", "text": "Access packages within entitlement management" },
      { "id": "b", "text": "Privileged Identity Management eligible roles" },
      { "id": "c", "text": "Dynamic group membership rules" },
      { "id": "d", "text": "Conditional Access named locations" }
    ],
    "correct": ["a"],
    "explanation": "Access packages in entitlement management combine resources, request policies, approval workflows, and expiration settings. They can be made available to users from connected organizations. PIM manages privileged roles, dynamic groups handle membership, and named locations are used in Conditional Access."
  },
  {
    "id": 122,
    "qid": "SC-500-MOD2-122",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three authentication methods can be included in a phishing-resistant authentication strength policy in Microsoft Entra ID?",
    "scenario": "<div class=\"scenario-text\"><p>A Conditional Access policy must enforce the highest assurance authentication for all privileged role activations.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "FIDO2 security keys" },
      { "id": "b", "text": "Windows Hello for Business" },
      { "id": "c", "text": "Certificate-based authentication" },
      { "id": "d", "text": "SMS one-time passcode" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "FIDO2, Windows Hello for Business, and certificate-based authentication are phishing-resistant. SMS OTP is not phishing-resistant and is excluded from phishing-resistant strengths."
  },
  {
    "id": 123,
    "qid": "SC-500-MOD2-123",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each workload identity approach to its primary use case.",
    "scenario": "<div class=\"scenario-text\"><p>An architect is selecting the appropriate identity model for different application hosting environments.</p></div>",
    "items": [
      { "id": "i1", "text": "System-assigned managed identity" },
      { "id": "i2", "text": "User-assigned managed identity" },
      { "id": "i3", "text": "Workload identity federation" }
    ],
    "zones": [
      { "id": "z1", "label": "Single Azure resource that needs its own identity" },
      { "id": "z2", "label": "Multiple Azure resources sharing the same identity and roles" },
      { "id": "z3", "label": "Application running outside Azure that must avoid client secrets" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "System-assigned identities are bound to one resource. User-assigned identities can be shared. Workload identity federation enables secret-less authentication from external platforms such as GitHub Actions or Kubernetes."
  },
  {
    "id": 124,
    "qid": "SC-500-MOD2-124",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "prompt": "Select the component that enables just-in-time elevation of Azure RBAC roles with approval, MFA, and time-bound access.",
    "scenario": "<div class=\"scenario-text\"><p>Review the privileged access architecture protecting Azure subscription management operations.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Privileged Identity Management", "x": 25, "y": 40 },
      { "id": "node2", "label": "Entra ID Protection", "x": 55, "y": 40 },
      { "id": "node3", "label": "Access reviews", "x": 85, "y": 40 }
    ],
    "correct": ["node1"],
    "explanation": "Privileged Identity Management provides eligible Azure RBAC role assignments that can be activated just-in-time after MFA, justification, and optional approval. Entra ID Protection focuses on risk detection, and access reviews handle periodic attestation."
  },
  {
    "id": 125,
    "qid": "SC-500-MOD2-125",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly sets the Conditional Access policy state for immediate enforcement.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer is deploying a Conditional Access policy via Microsoft Graph and requires the policy to be active and enforcing immediately.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"Require compliant device for finance apps\"," },
      { "id": "l3", "label": "  \"state\": \"enabledForReportingButNotEnforced\"," },
      { "id": "l4", "label": "  \"conditions\": { \"users\": { \"includeGroups\": [\"finance-users-id\"] } }," },
      { "id": "l5", "label": "  \"grantControls\": { \"operator\": \"AND\", \"builtInControls\": [\"compliantDevice\"] }" },
      { "id": "l6", "label": "}" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "The state is set to \"enabledForReportingButNotEnforced\". For immediate enforcement the value must be \"enabled\"."
  },
  {
    "id": 126,
    "qid": "SC-500-MOD2-126",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which hybrid identity feature allows domain-joined devices to obtain a Microsoft Entra ID token without prompting the user for credentials when Password Hash Synchronization is enabled?",
    "scenario": "<div class=\"scenario-text\"><p>An organization has deployed Password Hash Synchronization and wants to improve the sign-in experience for users on corporate Windows devices.</p></div>",
    "options": [
      { "id": "a", "text": "Seamless Single Sign-On" },
      { "id": "b", "text": "Pass-through Authentication agent" },
      { "id": "c", "text": "Active Directory Federation Services" },
      { "id": "d", "text": "Certificate-based authentication" }
    ],
    "correct": ["a"],
    "explanation": "Seamless SSO uses Kerberos tickets from domain-joined devices to silently obtain Entra ID tokens when PHS or PTA is configured. PTA validates passwords, AD FS uses federation, and CBA relies on certificates."
  },
  {
    "id": 127,
    "qid": "SC-500-MOD2-127",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two Microsoft Entra roles can configure Privileged Identity Management policies and manage role settings for directory roles?",
    "scenario": "<div class=\"scenario-text\"><p>A governance team needs to designate administrators who can adjust PIM activation requirements and assignment durations.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Privileged Role Administrator" },
      { "id": "b", "text": "Global Administrator" },
      { "id": "c", "text": "User Administrator" },
      { "id": "d", "text": "Security Operator" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Privileged Role Administrator and Global Administrator both have full rights to manage PIM role settings and policies. User Administrator and Security Operator lack these permissions."
  },
  {
    "id": 128,
    "qid": "SC-500-MOD2-128",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the primary purpose of an access package policy in Microsoft Entra entitlement management?",
    "scenario": "<div class=\"scenario-text\"><p>A project team needs to define who can request access, whether approval is required, and how long access remains valid.</p></div>",
    "options": [
      { "id": "a", "text": "Defines request, approval, and lifecycle rules for an access package" },
      { "id": "b", "text": "Creates a permanent security group that never expires" },
      { "id": "c", "text": "Enforces Conditional Access session controls" },
      { "id": "d", "text": "Provisions a managed identity for Azure resources" }
    ],
    "correct": ["a"],
    "explanation": "An access package policy specifies the requestor scope, approval workflow, assignment duration, and expiration behavior for an access package."
  },
  {
    "id": 129,
    "qid": "SC-500-MOD2-129",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Entra ID Protection risk detection to its evaluation timing.",
    "scenario": "<div class=\"scenario-text\"><p>A security architect is designing risk-based Conditional Access and must distinguish real-time from offline detections.</p></div>",
    "items": [
      { "id": "i1", "text": "Anonymous IP address" },
      { "id": "i2", "text": "Atypical travel" },
      { "id": "i3", "text": "Malware-linked IP address" }
    ],
    "zones": [
      { "id": "z1", "label": "Real-time during sign-in" },
      { "id": "z2", "label": "Offline / asynchronous analysis" },
      { "id": "z3", "label": "Real-time threat intelligence" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Anonymous IP and malware-linked IP detections occur in real time. Atypical travel requires historical location and velocity analysis and is computed offline."
  },
  {
    "id": 130,
    "qid": "SC-500-MOD2-130",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra feature allows temporary elevation of membership in a Microsoft 365 or security group for a limited duration after meeting activation requirements?",
    "scenario": "<div class=\"scenario-text\"><p>Support engineers need elevated permissions in a production operations group only while actively troubleshooting incidents.</p></div>",
    "options": [
      { "id": "a", "text": "Privileged Identity Management for groups" },
      { "id": "b", "text": "Dynamic membership rules" },
      { "id": "c", "text": "Access package with permanent assignment policy" },
      { "id": "d", "text": "Administrative unit scoping" }
    ],
    "correct": ["a"],
    "explanation": "PIM for groups supports eligible membership that can be activated just-in-time with MFA, justification, and approval, providing time-bound elevated group membership."
  },
  {
    "id": 131,
    "qid": "SC-500-MOD2-131",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly configures the Conditional Access policy to require only MFA instead of a compliant device.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer is creating a Conditional Access policy via Microsoft Graph that must require devices to be marked as compliant by Intune.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"Require compliant device for M365\"," },
      { "id": "l3", "label": "  \"state\": \"enabled\"," },
      { "id": "l4", "label": "  \"grantControls\": {" },
      { "id": "l5", "label": "    \"operator\": \"OR\"," },
      { "id": "l6", "label": "    \"builtInControls\": [\"mfa\"]" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l6"],
    "selectCount": 1,
    "explanation": "The builtInControls array contains only \"mfa\". To require a compliant device the value \"compliantDevice\" must be specified (often combined with other controls using the AND operator)."
  },
  {
    "id": 132,
    "qid": "SC-500-MOD2-132",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three best practices apply to the configuration of Microsoft Entra break-glass accounts?",
    "scenario": "<div class=\"scenario-text\"><p>A cybersecurity team is documenting emergency access procedures to recover from Conditional Access lockouts or identity service outages.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Exclude the accounts from every Conditional Access policy" },
      { "id": "b", "text": "Protect credentials with long, complex passwords stored offline" },
      { "id": "c", "text": "Monitor and alert on any successful sign-in activity" },
      { "id": "d", "text": "Assign permanent Global Administrator rights with no monitoring or MFA" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Break-glass accounts must be excluded from Conditional Access, protected by offline strong credentials, and continuously monitored. Leaving them unmonitored significantly increases risk."
  },
  {
    "id": 133,
    "qid": "SC-500-MOD2-133",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the main advantage of Microsoft Entra Cloud Sync compared with classic Entra Connect Sync when synchronizing multiple disconnected forests?",
    "scenario": "<div class=\"scenario-text\"><p>An organization has several isolated Active Directory forests and limited ability to deploy full Entra Connect servers in every location.</p></div>",
    "options": [
      { "id": "a", "text": "Lightweight provisioning agent architecture with simplified multi-forest support and high availability" },
      { "id": "b", "text": "Full custom synchronization rule engine identical to Entra Connect" },
      { "id": "c", "text": "Support for password writeback only" },
      { "id": "d", "text": "Replacement for all Conditional Access policies" }
    ],
    "correct": ["a"],
    "explanation": "Entra Cloud Sync uses a lightweight agent that simplifies multi-forest and multi-domain deployments and provides built-in high availability. It does not offer the full custom rule engine of classic Entra Connect."
  },
  {
    "id": 134,
    "qid": "SC-500-MOD2-134",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Conditional Access control to its category.",
    "scenario": "<div class=\"scenario-text\"><p>An architect is constructing a Conditional Access policy and must correctly classify grant versus session controls.</p></div>",
    "items": [
      { "id": "i1", "text": "Require multifactor authentication" },
      { "id": "i2", "text": "Require device compliance" },
      { "id": "i3", "text": "Use app enforced restrictions" }
    ],
    "zones": [
      { "id": "z1", "label": "Grant control" },
      { "id": "z2", "label": "Grant control" },
      { "id": "z3", "label": "Session control" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Require MFA and require device compliance are grant controls that determine whether access is allowed. App enforced restrictions is a session control that limits the experience inside the application after access is granted."
  },
  {
    "id": 135,
    "qid": "SC-500-MOD2-135",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra capability detects anomalous sign-in behavior and risk events specifically for service principals and managed identities?",
    "scenario": "<div class=\"scenario-text\"><p>Automation accounts and service principals have shown unusual authentication patterns. The security team needs continuous risk evaluation for non-human identities.</p></div>",
    "options": [
      { "id": "a", "text": "Workload identity protection" },
      { "id": "b", "text": "Privileged Identity Management for users only" },
      { "id": "c", "text": "Access reviews for Microsoft 365 groups" },
      { "id": "d", "text": "Seamless Single Sign-On" }
    ],
    "correct": ["a"],
    "explanation": "Workload identity protection extends Entra ID Protection to service principals and managed identities, detecting anomalous sign-ins, credential leaks, and other risk signals for workload identities."
  },
  {
    "id": 136,
    "qid": "SC-500-MOD2-136",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "prompt": "Select the hybrid identity component that stores a hash of the user’s password in Microsoft Entra ID.",
    "scenario": "<div class=\"scenario-text\"><p>Review the authentication options between on-premises Active Directory and Microsoft Entra ID.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Password Hash Synchronization", "x": 20, "y": 45 },
      { "id": "node2", "label": "Pass-through Authentication", "x": 50, "y": 45 },
      { "id": "node3", "label": "AD FS federation", "x": 80, "y": 45 }
    ],
    "correct": ["node1"],
    "explanation": "Password Hash Synchronization periodically writes a hash of the on-premises password into Microsoft Entra ID. PTA and AD FS do not store password hashes in the cloud."
  },
  {
    "id": 137,
    "qid": "SC-500-MOD2-137",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two statements correctly describe Microsoft Entra administrative units?",
    "scenario": "<div class=\"scenario-text\"><p>A multinational organization wants to delegate user management for regional subsidiaries without granting tenant-wide administrative rights.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "They scope administrative role assignments to a subset of users, groups, or devices" },
      { "id": "b", "text": "They can be used with administrative roles such as User Administrator" },
      { "id": "c", "text": "They replace the need for Conditional Access policies" },
      { "id": "d", "text": "They automatically grant Global Administrator privileges" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Administrative units provide a scope boundary for role assignments so that administrators can manage only the objects inside the unit. They work with roles such as User Administrator and do not replace Conditional Access or elevate privileges automatically."
  },
  {
    "id": 138,
    "qid": "SC-500-MOD2-138",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "In a Conditional Access policy, what does the authentication strength grant control enforce?",
    "scenario": "<div class=\"scenario-text\"><p>A security team wants to require that only phishing-resistant methods are accepted for access to privileged portals.</p></div>",
    "options": [
      { "id": "a", "text": "A specific set of authentication methods defined by an authentication strength policy" },
      { "id": "b", "text": "Any registered multifactor authentication method" },
      { "id": "c", "text": "Only SMS one-time passcodes" },
      { "id": "d", "text": "Device compliance only" }
    ],
    "correct": ["a"],
    "explanation": "Authentication strength allows the policy author to require a defined combination of methods (for example the built-in phishing-resistant MFA strength). It is more granular than the generic “require MFA” control."
  },
  {
    "id": 139,
    "qid": "SC-500-MOD2-139",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Microsoft Entra ID Governance feature to its primary use case.",
    "scenario": "<div class=\"scenario-text\"><p>A governance program needs to map features to specific identity lifecycle and access control requirements.</p></div>",
    "items": [
      { "id": "i1", "text": "Lifecycle workflows" },
      { "id": "i2", "text": "Access reviews" },
      { "id": "i3", "text": "Entitlement management" }
    ],
    "zones": [
      { "id": "z1", "label": "Automate joiner-mover-leaver tasks based on HR events" },
      { "id": "z2", "label": "Periodically attest that users still need access" },
      { "id": "z3", "label": "Provide self-service access packages with approval and expiration" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Lifecycle workflows automate identity lifecycle events. Access reviews perform periodic attestation. Entitlement management delivers access packages with request and lifecycle policies."
  },
  {
    "id": 140,
    "qid": "SC-500-MOD2-140",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which authentication flow is used when a managed identity requests an access token from Microsoft Entra ID?",
    "scenario": "<div class=\"scenario-text\"><p>An Azure virtual machine with a system-assigned managed identity needs to call Azure Key Vault without any secrets in code.</p></div>",
    "options": [
      { "id": "a", "text": "OAuth 2.0 client credentials flow using the managed identity endpoint" },
      { "id": "b", "text": "Authorization code flow with PKCE" },
      { "id": "c", "text": "Resource owner password credentials flow" },
      { "id": "d", "text": "SAML 2.0 browser-based federation" }
    ],
    "correct": ["a"],
    "explanation": "Managed identities obtain tokens via the Instance Metadata Service or the Azure Identity SDK, which under the hood uses the OAuth 2.0 client credentials flow against the managed identity endpoint. User-interactive flows and SAML are not used."
  },
  {
    "id": 141,
    "qid": "SC-500-MOD2-141",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly targets all users instead of a specific administrative unit’s members.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer is creating a Conditional Access policy that should apply only to users inside a regional administrative unit.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"MFA for regional AU users\"," },
      { "id": "l3", "label": "  \"state\": \"enabled\"," },
      { "id": "l4", "label": "  \"conditions\": {" },
      { "id": "l5", "label": "    \"users\": { \"includeUsers\": [\"All\"] }" },
      { "id": "l6", "label": "  }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "The policy includes all users. To scope to an administrative unit the includeUsers or includeGroups collection must reference the objects that belong to that administrative unit."
  },
  {
    "id": 142,
    "qid": "SC-500-MOD2-142",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three signals can be evaluated by a Microsoft Entra Conditional Access policy?",
    "scenario": "<div class=\"scenario-text\"><p>A zero-trust design requires policies that consider user risk, device state, and the strength of the authentication method.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "User risk level" },
      { "id": "b", "text": "Device compliance state" },
      { "id": "c", "text": "Authentication strength" },
      { "id": "d", "text": "On-premises group membership that has never been synchronized" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Conditional Access natively evaluates user risk, device compliance, and authentication strength. Pure on-premises groups that have not been synchronized to Entra ID cannot be used as conditions."
  },
  {
    "id": 143,
    "qid": "SC-500-MOD2-143",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the recommended way to provide just-in-time privileged access to Azure resources for operators?",
    "scenario": "<div class=\"scenario-text\"><p>An Azure landing-zone design requires that subscription-level Owner rights are never permanently assigned.</p></div>",
    "options": [
      { "id": "a", "text": "Assign eligible Azure RBAC roles through Privileged Identity Management" },
      { "id": "b", "text": "Assign permanent Owner role to a shared service account" },
      { "id": "c", "text": "Store Owner credentials in a shared password manager" },
      { "id": "d", "text": "Disable Azure RBAC entirely" }
    ],
    "correct": ["a"],
    "explanation": "PIM supports eligible Azure RBAC role assignments that can be activated for a limited time after MFA, justification, and optional approval, providing just-in-time privileged access with full auditability."
  },
  {
    "id": 144,
    "qid": "SC-500-MOD2-144",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each hybrid authentication method to the component that validates the user’s password.",
    "scenario": "<div class=\"scenario-text\"><p>An identity team is documenting where password validation occurs for each hybrid authentication option.</p></div>",
    "items": [
      { "id": "i1", "text": "Password Hash Synchronization" },
      { "id": "i2", "text": "Pass-through Authentication" },
      { "id": "i3", "text": "Federation with AD FS" }
    ],
    "zones": [
      { "id": "z1", "label": "Microsoft Entra ID (cloud hash comparison)" },
      { "id": "z2", "label": "On-premises Active Directory via PTA agent" },
      { "id": "z3", "label": "On-premises AD FS servers" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "With PHS the cloud compares the provided password against the stored hash. PTA agents forward the credential to Active Directory. AD FS performs the authentication on-premises."
  },
  {
    "id": 145,
    "qid": "SC-500-MOD2-145",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra feature can require users to re-accept an updated Terms of Use statement after a policy version change?",
    "scenario": "<div class=\"scenario-text\"><p>Legal has updated the corporate acceptable-use policy and requires every user to accept the new version before continuing to access cloud applications.</p></div>",
    "options": [
      { "id": "a", "text": "Terms of Use with versioning and Conditional Access grant control" },
      { "id": "b", "text": "Privileged Identity Management activation" },
      { "id": "c", "text": "Dynamic group membership rules" },
      { "id": "d", "text": "Password protection custom banned list" }
    ],
    "correct": ["a"],
    "explanation": "Microsoft Entra Terms of Use supports versioning; when a new version is published, Conditional Access can require re-acceptance before access is granted."
  },
  {
    "id": 146,
    "qid": "SC-500-MOD2-146",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two capabilities are provided by Microsoft Entra ID Governance lifecycle workflows?",
    "scenario": "<div class=\"scenario-text\"><p>An HR-driven identity program needs automated onboarding and offboarding tasks that run when users are hired or terminated.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Trigger tasks based on joiner, mover, or leaver events" },
      { "id": "b", "text": "Execute actions such as adding users to groups or sending email notifications" },
      { "id": "c", "text": "Replace the need for Conditional Access policies" },
      { "id": "d", "text": "Automatically assign permanent Global Administrator rights" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Lifecycle workflows react to identity lifecycle events and can run tasks including group membership changes, license assignment, and notifications. They do not replace Conditional Access or elevate privileges automatically."
  },
  {
    "id": 147,
    "qid": "SC-500-MOD2-147",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the primary security benefit of requiring number matching for Microsoft Authenticator push notifications?",
    "scenario": "<div class=\"scenario-text\"><p>Users have reported approving push notifications without looking at the sign-in screen, creating an MFA fatigue risk.</p></div>",
    "options": [
      { "id": "a", "text": "Forces the user to enter a number displayed on the sign-in page, preventing blind approval" },
      { "id": "b", "text": "Converts the authentication method into a phishing-resistant FIDO2 key" },
      { "id": "c", "text": "Eliminates the need for Conditional Access policies" },
      { "id": "d", "text": "Stores the user’s password hash in the Authenticator app" }
    ],
    "correct": ["a"],
    "explanation": "Number matching requires the user to type the number shown on the authentication prompt into the Authenticator app, mitigating MFA fatigue attacks that rely on accidental or social-engineered approvals."
  },
  {
    "id": 148,
    "qid": "SC-500-MOD2-148",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "prompt": "Select the component responsible for calculating both user risk and sign-in risk and feeding those signals into Conditional Access.",
    "scenario": "<div class=\"scenario-text\"><p>Examine the identity protection architecture that drives risk-based access decisions.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Microsoft Entra ID Protection", "x": 30, "y": 35 },
      { "id": "node2", "label": "Microsoft Entra Connect", "x": 65, "y": 35 },
      { "id": "node3", "label": "Privileged Identity Management", "x": 50, "y": 70 }
    ],
    "correct": ["node1"],
    "explanation": "Microsoft Entra ID Protection evaluates risk detections and produces user-risk and sign-in-risk levels that Conditional Access policies can use as conditions."
  },
  {
    "id": 149,
    "qid": "SC-500-MOD2-149",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which type of managed identity should be used when multiple Azure resources must share the same identity and the same set of Azure RBAC role assignments?",
    "scenario": "<div class=\"scenario-text\"><p>A set of virtual machines and Azure Functions all need identical permissions to the same Key Vault and Storage account.</p></div>",
    "options": [
      { "id": "a", "text": "User-assigned managed identity" },
      { "id": "b", "text": "System-assigned managed identity" },
      { "id": "c", "text": "Service principal with a client secret" },
      { "id": "d", "text": "Guest user account" }
    ],
    "correct": ["a"],
    "explanation": "A user-assigned managed identity is an independent Azure resource that can be assigned to multiple resources, allowing them to share the same identity and role assignments. System-assigned identities are tied to a single resource."
  },
  {
    "id": 150,
    "qid": "SC-500-MOD2-150",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three actions are recommended when configuring Privileged Identity Management for Microsoft Entra directory roles?",
    "scenario": "<div class=\"scenario-text\"><p>A security architect is implementing least-privilege privileged access across the tenant.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Convert standing permanent assignments to eligible assignments" },
      { "id": "b", "text": "Require multifactor authentication on activation" },
      { "id": "c", "text": "Configure approval for high-privilege roles such as Global Administrator" },
      { "id": "d", "text": "Disable audit logging of activation events" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Best practices include converting permanent assignments to eligible, requiring MFA for activation, and using approval workflows for the most sensitive roles. Audit logging must remain enabled."
  },
  {
    "id": 151,
    "qid": "SC-500-MOD2-151",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each authentication method to its relative resistance to phishing.",
    "scenario": "<div class=\"scenario-text\"><p>An architect is ranking authentication methods for a privileged-access Conditional Access policy.</p></div>",
    "items": [
      { "id": "i1", "text": "FIDO2 security key" },
      { "id": "i2", "text": "Microsoft Authenticator with number matching" },
      { "id": "i3", "text": "SMS one-time passcode" }
    ],
    "zones": [
      { "id": "z1", "label": "Highest – phishing-resistant" },
      { "id": "z2", "label": "Medium – mitigates MFA fatigue" },
      { "id": "z3", "label": "Lowest – vulnerable to interception and SIM swap" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "FIDO2 provides cryptographic phishing resistance. Number matching reduces accidental approvals. SMS remains the weakest method due to SIM-swapping and interception risks."
  },
  {
    "id": 152,
    "qid": "SC-500-MOD2-152",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra feature allows external partner organizations to be defined so their users can request access packages?",
    "scenario": "<div class=\"scenario-text\"><p>A company collaborates with multiple external vendors and needs a governed way for vendor users to request time-limited access to project resources.</p></div>",
    "options": [
      { "id": "a", "text": "Connected organizations in entitlement management" },
      { "id": "b", "text": "Administrative units" },
      { "id": "c", "text": "Privileged Identity Management for groups" },
      { "id": "d", "text": "Seamless Single Sign-On" }
    ],
    "correct": ["a"],
    "explanation": "Connected organizations represent external identity providers or Entra ID tenants so that their users can be invited to request access packages under governed policies."
  },
  {
    "id": 153,
    "qid": "SC-500-MOD2-153",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly configures the Conditional Access policy to block access instead of requiring MFA.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer intends to require MFA for all users but has misconfigured the grant control.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"Require MFA for all users\"," },
      { "id": "l3", "label": "  \"state\": \"enabled\"," },
      { "id": "l4", "label": "  \"grantControls\": {" },
      { "id": "l5", "label": "    \"operator\": \"OR\"," },
      { "id": "l6", "label": "    \"builtInControls\": [\"block\"]" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l6"],
    "selectCount": 1,
    "explanation": "The builtInControls array contains \"block\", which denies access entirely. To require MFA the value must be \"mfa\" (or an authentication strength that includes MFA methods)."
  },
  {
    "id": 154,
    "qid": "SC-500-MOD2-154",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the primary purpose of Microsoft Entra ID Protection risk-based Conditional Access policies?",
    "scenario": "<div class=\"scenario-text\"><p>A security operations team wants to automatically challenge or block sign-ins that exhibit high risk characteristics.</p></div>",
    "options": [
      { "id": "a", "text": "Evaluate user risk or sign-in risk and enforce controls such as MFA or block access" },
      { "id": "b", "text": "Automatically assign the Global Administrator role to risky users" },
      { "id": "c", "text": "Synchronize on-premises passwords to the cloud" },
      { "id": "d", "text": "Replace the need for access reviews" }
    ],
    "correct": ["a"],
    "explanation": "Risk-based Conditional Access policies use the risk levels calculated by Entra ID Protection to require remediation (MFA, password change) or to block the authentication attempt."
  },
  {
    "id": 155,
    "qid": "SC-500-MOD2-155",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two hybrid identity features can be used together to provide cloud authentication and a seamless sign-in experience on domain-joined devices?",
    "scenario": "<div class=\"scenario-text\"><p>An organization wants users to authenticate directly against Microsoft Entra ID while still enjoying single sign-on from domain-joined Windows devices.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Password Hash Synchronization" },
      { "id": "b", "text": "Seamless Single Sign-On" },
      { "id": "c", "text": "Active Directory Federation Services only" },
      { "id": "d", "text": "Certificate-based authentication only" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Password Hash Synchronization enables cloud authentication, and Seamless SSO allows domain-joined devices to obtain Entra ID tokens via Kerberos without prompting for credentials. AD FS and CBA are alternative methods that are not required for this combination."
  },
  {
    "id": 156,
    "qid": "SC-500-MOD2-156",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra capability allows an application running outside Azure (for example in GitHub Actions) to obtain tokens without storing a client secret?",
    "scenario": "<div class=\"scenario-text\"><p>A CI/CD pipeline must authenticate to Microsoft Graph and Azure Resource Manager without embedding long-lived secrets.</p></div>",
    "options": [
      { "id": "a", "text": "Workload identity federation" },
      { "id": "b", "text": "System-assigned managed identity" },
      { "id": "c", "text": "Password Hash Synchronization" },
      { "id": "d", "text": "Seamless Single Sign-On" }
    ],
    "correct": ["a"],
    "explanation": "Workload identity federation lets an external identity provider issue a token that is exchanged for an Entra ID access token, eliminating the need for client secrets. Managed identities are available only for Azure resources."
  },
  {
    "id": 157,
    "qid": "SC-500-MOD2-157",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Privileged Identity Management assignment type to its behavior.",
    "scenario": "<div class=\"scenario-text\"><p>An administrator is configuring PIM for Azure RBAC roles and must understand the difference between assignment types.</p></div>",
    "items": [
      { "id": "i1", "text": "Eligible assignment" },
      { "id": "i2", "text": "Active assignment" },
      { "id": "i3", "text": "Just-in-time activation" }
    ],
    "zones": [
      { "id": "z1", "label": "User can activate the role when needed" },
      { "id": "z2", "label": "Role is permanently assigned and immediately usable" },
      { "id": "z3", "label": "Time-limited elevation after meeting activation requirements" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Eligible assignments require activation. Active assignments grant standing access. Just-in-time activation is the process that elevates an eligible assignment for a limited period."
  },
  {
    "id": 158,
    "qid": "SC-500-MOD2-158",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Conditional Access condition evaluates the persistent risk associated with a user account rather than a single authentication attempt?",
    "scenario": "<div class=\"scenario-text\"><p>A policy must force a password reset when a user’s overall risk level is high, regardless of the current sign-in characteristics.</p></div>",
    "options": [
      { "id": "a", "text": "User risk" },
      { "id": "b", "text": "Sign-in risk" },
      { "id": "c", "text": "Device platform" },
      { "id": "d", "text": "Client apps" }
    ],
    "correct": ["a"],
    "explanation": "User risk is a persistent score calculated by Entra ID Protection based on detections such as leaked credentials and anomalous activity. Sign-in risk evaluates the individual authentication attempt."
  },
  {
    "id": 159,
    "qid": "SC-500-MOD2-159",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three Microsoft Entra ID Governance capabilities help enforce least-privilege and periodic access validation?",
    "scenario": "<div class=\"scenario-text\"><p>A compliance program requires automated lifecycle management, self-service access requests, and regular attestation of existing access.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Lifecycle workflows" },
      { "id": "b", "text": "Entitlement management" },
      { "id": "c", "text": "Access reviews" },
      { "id": "d", "text": "Password Hash Synchronization" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Lifecycle workflows automate joiner-mover-leaver processes, entitlement management provides governed access packages, and access reviews perform periodic attestation. Password Hash Synchronization is a hybrid authentication feature."
  },
  {
    "id": 160,
    "qid": "SC-500-MOD2-160",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra feature should be used to ensure that privileged role activations are time-bound, require MFA, and generate comprehensive audit logs?",
    "scenario": "<div class=\"scenario-text\"><p>An organization must eliminate standing Global Administrator assignments and replace them with on-demand elevation that is fully auditable.</p></div>",
    "options": [
      { "id": "a", "text": "Privileged Identity Management (PIM)" },
      { "id": "b", "text": "Access reviews only" },
      { "id": "c", "text": "Conditional Access session controls only" },
      { "id": "d", "text": "Seamless Single Sign-On" }
    ],
    "correct": ["a"],
    "explanation": "Privileged Identity Management provides eligible role assignments, just-in-time activation with MFA and optional approval, time-bound elevation, and comprehensive audit logging—exactly the controls required for privileged access."
  },
  {
    "id": 161,
    "qid": "SC-500-MOD2-161",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra ID Governance feature automatically removes a user’s access package assignments and group memberships when the user’s employeeType attribute changes from Contractor to Former?",
    "scenario": "<div class=\"scenario-text\"><p>An organization uses an HR system as the source of truth and needs automated deprovisioning when contractors end their engagement.</p></div>",
    "options": [
      { "id": "a", "text": "Lifecycle workflows" },
      { "id": "b", "text": "Access reviews only" },
      { "id": "c", "text": "Conditional Access session controls" },
      { "id": "d", "text": "Privileged Identity Management activation" }
    ],
    "correct": ["a"],
    "explanation": "Lifecycle workflows can trigger on attribute changes and execute tasks that remove access package assignments and group memberships. Access reviews require human attestation, Conditional Access controls sessions, and PIM manages privileged role elevation."
  },
  {
    "id": 162,
    "qid": "SC-500-MOD2-162",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three Conditional Access grant controls can be used to enforce strong authentication and device requirements?",
    "scenario": "<div class=\"scenario-text\"><p>A zero-trust policy for a sensitive application must require phishing-resistant authentication and a compliant device.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Require authentication strength (phishing-resistant)" },
      { "id": "b", "text": "Require device to be marked as compliant" },
      { "id": "c", "text": "Require multifactor authentication" },
      { "id": "d", "text": "Require on-premises Active Directory group membership only" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Authentication strength, device compliance, and multifactor authentication are valid Conditional Access grant controls. Pure on-premises group membership that has not been synchronized cannot be used as a cloud grant control."
  },
  {
    "id": 163,
    "qid": "SC-500-MOD2-163",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each workload identity model to its primary characteristic.",
    "scenario": "<div class=\"scenario-text\"><p>An architect is choosing identity models for applications running both inside and outside Azure.</p></div>",
    "items": [
      { "id": "i1", "text": "System-assigned managed identity" },
      { "id": "i2", "text": "User-assigned managed identity" },
      { "id": "i3", "text": "Workload identity federation" }
    ],
    "zones": [
      { "id": "z1", "label": "Lifecycle tied to a single Azure resource" },
      { "id": "z2", "label": "Standalone identity that can be shared across resources" },
      { "id": "z3", "label": "Secret-less token exchange from an external identity provider" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "System-assigned identities are created and deleted with the resource. User-assigned identities are independent and reusable. Workload identity federation enables external platforms to obtain Entra ID tokens without client secrets."
  },
  {
    "id": 164,
    "qid": "SC-500-MOD2-164",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "prompt": "Select the component that provides just-in-time elevation of Microsoft Entra directory roles with MFA, justification, and optional approval.",
    "scenario": "<div class=\"scenario-text\"><p>Review the privileged access control plane used to eliminate standing Global Administrator assignments.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Privileged Identity Management", "x": 25, "y": 40 },
      { "id": "node2", "label": "Entra ID Protection", "x": 55, "y": 40 },
      { "id": "node3", "label": "Access reviews", "x": 85, "y": 40 }
    ],
    "correct": ["node1"],
    "explanation": "Privileged Identity Management enables eligible directory role assignments that can be activated just-in-time after meeting MFA, justification, and approval requirements. Entra ID Protection focuses on risk, and access reviews perform periodic attestation."
  },
  {
    "id": 165,
    "qid": "SC-500-MOD2-165",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly configures the Conditional Access policy state for report-only evaluation.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer is creating a Conditional Access policy via Microsoft Graph and wants the policy to evaluate in report-only mode before enforcement.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"Pilot phishing-resistant for admins\"," },
      { "id": "l3", "label": "  \"state\": \"enabled\"," },
      { "id": "l4", "label": "  \"conditions\": { \"users\": { \"includeRoles\": [\"62e90394-69f5-4237-9190-012177145e10\"] } }," },
      { "id": "l5", "label": "  \"grantControls\": { \"operator\": \"OR\", \"authenticationStrength\": { \"id\": \"beba5fa0-5d68-4549-9d64-3b1b7c8e0e0a\" } }" },
      { "id": "l6", "label": "}" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "The state is set to \"enabled\". For report-only evaluation the correct value is \"enabledForReportingButNotEnforced\"."
  },
  {
    "id": 166,
    "qid": "SC-500-MOD2-166",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which hybrid identity authentication method validates credentials in real time against on-premises Active Directory without storing password hashes in Microsoft Entra ID?",
    "scenario": "<div class=\"scenario-text\"><p>A regulated organization requires that password validation always occurs against the on-premises directory and that no password hashes exist in the cloud.</p></div>",
    "options": [
      { "id": "a", "text": "Pass-through Authentication (PTA)" },
      { "id": "b", "text": "Password Hash Synchronization (PHS)" },
      { "id": "c", "text": "Seamless Single Sign-On only" },
      { "id": "d", "text": "Certificate-based authentication" }
    ],
    "correct": ["a"],
    "explanation": "Pass-through Authentication uses lightweight agents to validate credentials directly against Active Directory in real time. Password Hash Synchronization stores a hash in Entra ID, Seamless SSO is an enhancement, and CBA relies on certificates."
  },
  {
    "id": 167,
    "qid": "SC-500-MOD2-167",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two Microsoft Entra roles have native authority to approve Privileged Identity Management role activation requests?",
    "scenario": "<div class=\"scenario-text\"><p>A governance team must designate approvers for high-privilege role elevation requests without granting unnecessary permanent privileges.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Privileged Role Administrator" },
      { "id": "b", "text": "Global Administrator" },
      { "id": "c", "text": "User Administrator" },
      { "id": "d", "text": "Security Reader" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Privileged Role Administrator and Global Administrator both possess the authority to approve PIM activation requests. User Administrator and Security Reader lack these permissions."
  },
  {
    "id": 168,
    "qid": "SC-500-MOD2-168",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the primary purpose of a catalog in Microsoft Entra entitlement management?",
    "scenario": "<div class=\"scenario-text\"><p>A governance administrator is organizing resources so that multiple access packages can share the same set of groups, applications, and SharePoint sites.</p></div>",
    "options": [
      { "id": "a", "text": "A container that holds resources and access packages for a specific business scenario" },
      { "id": "b", "text": "A permanent security group that never expires" },
      { "id": "c", "text": "A Conditional Access policy template" },
      { "id": "d", "text": "A managed identity for Azure resources" }
    ],
    "correct": ["a"],
    "explanation": "A catalog is the top-level container in entitlement management that holds resources (groups, apps, sites) and the access packages that reference those resources."
  },
  {
    "id": 169,
    "qid": "SC-500-MOD2-169",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Entra ID Protection detection to its evaluation timing.",
    "scenario": "<div class=\"scenario-text\"><p>A security architect is designing risk-based Conditional Access and must know which signals are available during the authentication request.</p></div>",
    "items": [
      { "id": "i1", "text": "Anonymous IP address" },
      { "id": "i2", "text": "Atypical travel" },
      { "id": "i3", "text": "Malware-linked IP address" }
    ],
    "zones": [
      { "id": "z1", "label": "Real-time during sign-in evaluation" },
      { "id": "z2", "label": "Offline machine-learning analysis" },
      { "id": "z3", "label": "Real-time threat-intelligence based" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Anonymous IP and malware-linked IP detections are performed in real time. Atypical travel requires historical location and velocity analysis and is computed offline."
  },
  {
    "id": 170,
    "qid": "SC-500-MOD2-170",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra feature allows temporary elevation of a user’s membership in a security group for a limited time after approval and MFA?",
    "scenario": "<div class=\"scenario-text\"><p>Operations engineers need elevated permissions in a production support group only while actively resolving incidents.</p></div>",
    "options": [
      { "id": "a", "text": "Privileged Identity Management for groups" },
      { "id": "b", "text": "Dynamic membership rules" },
      { "id": "c", "text": "Access package with permanent assignment" },
      { "id": "d", "text": "Administrative unit scoping" }
    ],
    "correct": ["a"],
    "explanation": "PIM for groups supports eligible membership that can be activated just-in-time with MFA, justification, and approval, providing time-bound elevated group membership."
  },
  {
    "id": 171,
    "qid": "SC-500-MOD2-171",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly requires only MFA instead of a phishing-resistant authentication strength.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer is creating a Conditional Access policy via Microsoft Graph that must enforce phishing-resistant authentication for Global Administrators.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"Phishing-resistant for Global Admins\"," },
      { "id": "l3", "label": "  \"state\": \"enabled\"," },
      { "id": "l4", "label": "  \"grantControls\": {" },
      { "id": "l5", "label": "    \"operator\": \"OR\"," },
      { "id": "l6", "label": "    \"builtInControls\": [\"mfa\"]" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l6"],
    "selectCount": 1,
    "explanation": "The policy uses the generic \"mfa\" built-in control. To enforce phishing-resistant methods the authenticationStrength property must reference a phishing-resistant strength policy."
  },
  {
    "id": 172,
    "qid": "SC-500-MOD2-172",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three best practices apply when configuring Microsoft Entra break-glass accounts?",
    "scenario": "<div class=\"scenario-text\"><p>A cybersecurity team is documenting emergency access procedures to recover from Conditional Access misconfigurations or service outages.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Exclude the accounts from all Conditional Access policies" },
      { "id": "b", "text": "Store long, complex credentials offline in a secure location" },
      { "id": "c", "text": "Configure alerts for any successful sign-in" },
      { "id": "d", "text": "Leave the accounts permanently assigned Global Administrator with no monitoring" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Break-glass accounts must be excluded from Conditional Access, protected by offline strong credentials, and continuously monitored. Leaving them unmonitored increases risk."
  },
  {
    "id": 173,
    "qid": "SC-500-MOD2-173",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the primary advantage of Microsoft Entra Cloud Sync over classic Entra Connect Sync in multi-forest environments with limited infrastructure?",
    "scenario": "<div class=\"scenario-text\"><p>An organization has several disconnected Active Directory forests and cannot deploy full Entra Connect servers in every location.</p></div>",
    "options": [
      { "id": "a", "text": "Lightweight provisioning agent that supports multiple forests with simplified high availability" },
      { "id": "b", "text": "Full custom synchronization rule engine identical to Entra Connect" },
      { "id": "c", "text": "Support for password writeback only" },
      { "id": "d", "text": "Replacement for all Conditional Access policies" }
    ],
    "correct": ["a"],
    "explanation": "Entra Cloud Sync uses a lightweight agent architecture that simplifies multi-forest deployments and provides built-in high availability. It does not offer the full custom rule engine of classic Entra Connect."
  },
  {
    "id": 174,
    "qid": "SC-500-MOD2-174",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Conditional Access control to its correct category.",
    "scenario": "<div class=\"scenario-text\"><p>An architect is building a Conditional Access policy and must correctly classify grant versus session controls.</p></div>",
    "items": [
      { "id": "i1", "text": "Require multifactor authentication" },
      { "id": "i2", "text": "Require device to be marked as compliant" },
      { "id": "i3", "text": "Use Conditional Access App Control" }
    ],
    "zones": [
      { "id": "z1", "label": "Grant control" },
      { "id": "z2", "label": "Grant control" },
      { "id": "z3", "label": "Session control" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Require MFA and require compliant device are grant controls that decide whether access is allowed. Conditional Access App Control is a session control that limits the experience after access is granted."
  },
  {
    "id": 175,
    "qid": "SC-500-MOD2-175",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra capability continuously evaluates risk for service principals and managed identities?",
    "scenario": "<div class=\"scenario-text\"><p>Automation accounts and service principals have exhibited unusual sign-in patterns. The security team needs risk detection specifically for non-human identities.</p></div>",
    "options": [
      { "id": "a", "text": "Workload identity protection" },
      { "id": "b", "text": "Privileged Identity Management for users only" },
      { "id": "c", "text": "Access reviews for Microsoft 365 groups" },
      { "id": "d", "text": "Seamless Single Sign-On" }
    ],
    "correct": ["a"],
    "explanation": "Workload identity protection extends Entra ID Protection capabilities to service principals and managed identities, detecting anomalous sign-ins, leaked credentials, and other risk events."
  },
  {
    "id": 176,
    "qid": "SC-500-MOD2-176",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "prompt": "Select the hybrid identity component that periodically synchronizes a hash of the user’s password into Microsoft Entra ID.",
    "scenario": "<div class=\"scenario-text\"><p>Review the authentication options available between on-premises Active Directory and Microsoft Entra ID.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Password Hash Synchronization", "x": 20, "y": 45 },
      { "id": "node2", "label": "Pass-through Authentication", "x": 50, "y": 45 },
      { "id": "node3", "label": "AD FS federation", "x": 80, "y": 45 }
    ],
    "correct": ["node1"],
    "explanation": "Password Hash Synchronization writes a hash of the on-premises password into Microsoft Entra ID, enabling cloud authentication. PTA and AD FS do not store password hashes in the cloud."
  },
  {
    "id": 177,
    "qid": "SC-500-MOD2-177",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two statements correctly describe Microsoft Entra administrative units?",
    "scenario": "<div class=\"scenario-text\"><p>A global organization wants to delegate user and group management for regional subsidiaries without granting tenant-wide rights.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "They scope administrative role assignments to a subset of directory objects" },
      { "id": "b", "text": "They can be used with roles such as User Administrator and Groups Administrator" },
      { "id": "c", "text": "They replace the need for Conditional Access policies" },
      { "id": "d", "text": "They automatically grant Global Administrator privileges" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Administrative units provide a scope boundary so that role assignments apply only to the users, groups, or devices inside the unit. They work with many directory roles and do not replace Conditional Access or elevate privileges automatically."
  },
  {
    "id": 178,
    "qid": "SC-500-MOD2-178",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "In a Conditional Access policy, what does the authentication strength grant control enforce?",
    "scenario": "<div class=\"scenario-text\"><p>A security team wants to require that only phishing-resistant methods are accepted for access to privileged portals.</p></div>",
    "options": [
      { "id": "a", "text": "A specific set of authentication methods defined by an authentication strength policy" },
      { "id": "b", "text": "Any registered multifactor authentication method" },
      { "id": "c", "text": "Only SMS one-time passcodes" },
      { "id": "d", "text": "Device compliance only" }
    ],
    "correct": ["a"],
    "explanation": "Authentication strength allows the policy author to require a defined combination of methods (for example the built-in phishing-resistant MFA strength). It is more granular than the generic “require MFA” control."
  },
  {
    "id": 179,
    "qid": "SC-500-MOD2-179",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Microsoft Entra ID Governance feature to its primary function.",
    "scenario": "<div class=\"scenario-text\"><p>A governance architect is mapping features to identity lifecycle and access control requirements.</p></div>",
    "items": [
      { "id": "i1", "text": "Lifecycle workflows" },
      { "id": "i2", "text": "Access reviews" },
      { "id": "i3", "text": "Entitlement management" }
    ],
    "zones": [
      { "id": "z1", "label": "Automate joiner-mover-leaver tasks based on HR events" },
      { "id": "z2", "label": "Periodically require attestation of existing access" },
      { "id": "z3", "label": "Provide self-service access packages with approval and expiration" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Lifecycle workflows automate identity lifecycle events. Access reviews perform periodic attestation. Entitlement management delivers access packages with request and lifecycle policies."
  },
  {
    "id": 180,
    "qid": "SC-500-MOD2-180",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which authentication flow does a managed identity use to obtain an access token from Microsoft Entra ID?",
    "scenario": "<div class=\"scenario-text\"><p>An Azure virtual machine with a system-assigned managed identity needs to call Azure Key Vault without any secrets in application code.</p></div>",
    "options": [
      { "id": "a", "text": "OAuth 2.0 client credentials flow via the Instance Metadata Service" },
      { "id": "b", "text": "Authorization code flow with PKCE" },
      { "id": "c", "text": "Resource owner password credentials flow" },
      { "id": "d", "text": "SAML 2.0 browser-based federation" }
    ],
    "correct": ["a"],
    "explanation": "Managed identities obtain tokens through the Instance Metadata Service (IMDS) or the Azure Identity libraries, which use the OAuth 2.0 client credentials flow. Interactive flows and SAML are not used."
  },
  {
    "id": 181,
    "qid": "SC-500-MOD2-181",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly includes all users instead of targeting only members of a privileged role.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer is creating a Conditional Access policy that should apply only to users assigned the Global Administrator role.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"MFA for Global Administrators\"," },
      { "id": "l3", "label": "  \"state\": \"enabled\"," },
      { "id": "l4", "label": "  \"conditions\": {" },
      { "id": "l5", "label": "    \"users\": { \"includeUsers\": [\"All\"] }" },
      { "id": "l6", "label": "  }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "The policy includes all users. To target only Global Administrators the includeRoles collection must contain the Global Administrator role template ID."
  },
  {
    "id": 182,
    "qid": "SC-500-MOD2-182",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three signals can be evaluated by a Microsoft Entra Conditional Access policy?",
    "scenario": "<div class=\"scenario-text\"><p>A zero-trust design requires policies that consider identity risk, device state, and authentication method strength.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "User risk level from Entra ID Protection" },
      { "id": "b", "text": "Device compliance state from Microsoft Intune" },
      { "id": "c", "text": "Authentication strength (phishing-resistant)" },
      { "id": "d", "text": "On-premises group membership that has never been synchronized" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Conditional Access natively evaluates user risk, device compliance, and authentication strength. Unsynchronized on-premises groups cannot be used as conditions."
  },
  {
    "id": 183,
    "qid": "SC-500-MOD2-183",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the recommended approach for providing just-in-time privileged access to Azure subscriptions?",
    "scenario": "<div class=\"scenario-text\"><p>An Azure landing-zone design requires that Owner rights on subscriptions are never permanently assigned.</p></div>",
    "options": [
      { "id": "a", "text": "Assign eligible Azure RBAC roles through Privileged Identity Management" },
      { "id": "b", "text": "Assign permanent Owner role to a shared service account" },
      { "id": "c", "text": "Store Owner credentials in a shared password manager" },
      { "id": "d", "text": "Disable Azure RBAC entirely" }
    ],
    "correct": ["a"],
    "explanation": "PIM supports eligible Azure RBAC role assignments that can be activated for a limited time after MFA, justification, and optional approval, providing just-in-time privileged access with full auditability."
  },
  {
    "id": 184,
    "qid": "SC-500-MOD2-184",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each hybrid authentication method to where the user’s password is validated.",
    "scenario": "<div class=\"scenario-text\"><p>An identity team is documenting password validation locations for each hybrid authentication option.</p></div>",
    "items": [
      { "id": "i1", "text": "Password Hash Synchronization" },
      { "id": "i2", "text": "Pass-through Authentication" },
      { "id": "i3", "text": "Federation with AD FS" }
    ],
    "zones": [
      { "id": "z1", "label": "Microsoft Entra ID (cloud hash comparison)" },
      { "id": "z2", "label": "On-premises Active Directory via PTA agent" },
      { "id": "z3", "label": "On-premises AD FS servers" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "With PHS the cloud compares the provided password against the stored hash. PTA agents forward the credential to Active Directory. AD FS performs the authentication on-premises."
  },
  {
    "id": 185,
    "qid": "SC-500-MOD2-185",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra feature can require users to re-accept an updated Terms of Use statement after a policy version change?",
    "scenario": "<div class=\"scenario-text\"><p>Legal has updated the corporate acceptable-use policy and requires every user to accept the new version before continuing to access cloud applications.</p></div>",
    "options": [
      { "id": "a", "text": "Terms of Use with versioning enforced by Conditional Access" },
      { "id": "b", "text": "Privileged Identity Management activation" },
      { "id": "c", "text": "Dynamic group membership rules" },
      { "id": "d", "text": "Password protection custom banned list" }
    ],
    "correct": ["a"],
    "explanation": "Microsoft Entra Terms of Use supports versioning; when a new version is published, Conditional Access can require re-acceptance before access is granted."
  },
  {
    "id": 186,
    "qid": "SC-500-MOD2-186",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two capabilities are provided by Microsoft Entra ID Governance lifecycle workflows?",
    "scenario": "<div class=\"scenario-text\"><p>An HR-driven identity program needs automated onboarding and offboarding tasks that run when users are hired or terminated.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Trigger tasks based on joiner, mover, or leaver events" },
      { "id": "b", "text": "Execute actions such as adding users to groups or sending notifications" },
      { "id": "c", "text": "Replace the need for Conditional Access policies" },
      { "id": "d", "text": "Automatically assign permanent Global Administrator rights" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Lifecycle workflows react to identity lifecycle events and can run tasks including group membership changes, license assignment, and notifications. They do not replace Conditional Access or elevate privileges automatically."
  },
  {
    "id": 187,
    "qid": "SC-500-MOD2-187",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the primary security benefit of requiring number matching for Microsoft Authenticator push notifications?",
    "scenario": "<div class=\"scenario-text\"><p>Users have reported approving push notifications without looking at the sign-in screen, creating an MFA fatigue risk.</p></div>",
    "options": [
      { "id": "a", "text": "Forces the user to enter a number displayed on the sign-in page, preventing blind approval" },
      { "id": "b", "text": "Converts the authentication method into a phishing-resistant FIDO2 key" },
      { "id": "c", "text": "Eliminates the need for Conditional Access policies" },
      { "id": "d", "text": "Stores the user’s password hash in the Authenticator app" }
    ],
    "correct": ["a"],
    "explanation": "Number matching requires the user to type the number shown on the authentication prompt into the Authenticator app, mitigating MFA fatigue attacks that rely on accidental or social-engineered approvals."
  },
  {
    "id": 188,
    "qid": "SC-500-MOD2-188",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "prompt": "Select the component responsible for calculating user risk and sign-in risk and feeding those signals into Conditional Access.",
    "scenario": "<div class=\"scenario-text\"><p>Examine the identity protection architecture that drives risk-based access decisions.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Microsoft Entra ID Protection", "x": 30, "y": 35 },
      { "id": "node2", "label": "Microsoft Entra Connect", "x": 65, "y": 35 },
      { "id": "node3", "label": "Privileged Identity Management", "x": 50, "y": 70 }
    ],
    "correct": ["node1"],
    "explanation": "Microsoft Entra ID Protection evaluates risk detections and produces user-risk and sign-in-risk levels that Conditional Access policies can use as conditions."
  },
  {
    "id": 189,
    "qid": "SC-500-MOD2-189",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which type of managed identity should be selected when multiple Azure resources must share the same identity and the same set of Azure RBAC role assignments?",
    "scenario": "<div class=\"scenario-text\"><p>A set of virtual machines and Azure Functions all need identical permissions to the same Key Vault and Storage account.</p></div>",
    "options": [
      { "id": "a", "text": "User-assigned managed identity" },
      { "id": "b", "text": "System-assigned managed identity" },
      { "id": "c", "text": "Service principal with a client secret" },
      { "id": "d", "text": "Guest user account" }
    ],
    "correct": ["a"],
    "explanation": "A user-assigned managed identity is an independent Azure resource that can be assigned to multiple resources, allowing them to share the same identity and role assignments. System-assigned identities are tied to a single resource."
  },
  {
    "id": 190,
    "qid": "SC-500-MOD2-190",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three actions are recommended when configuring Privileged Identity Management for Microsoft Entra directory roles?",
    "scenario": "<div class=\"scenario-text\"><p>A security architect is implementing least-privilege privileged access across the tenant.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Convert standing permanent assignments to eligible assignments" },
      { "id": "b", "text": "Require multifactor authentication on activation" },
      { "id": "c", "text": "Configure approval for high-privilege roles such as Global Administrator" },
      { "id": "d", "text": "Disable audit logging of activation events" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Best practices include converting permanent assignments to eligible, requiring MFA for activation, and using approval workflows for the most sensitive roles. Audit logging must remain enabled."
  },
  {
    "id": 191,
    "qid": "SC-500-MOD2-191",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each authentication method to its relative resistance to phishing.",
    "scenario": "<div class=\"scenario-text\"><p>An architect is ranking authentication methods for a privileged-access Conditional Access policy.</p></div>",
    "items": [
      { "id": "i1", "text": "FIDO2 security key" },
      { "id": "i2", "text": "Microsoft Authenticator with number matching" },
      { "id": "i3", "text": "SMS one-time passcode" }
    ],
    "zones": [
      { "id": "z1", "label": "Highest – phishing-resistant" },
      { "id": "z2", "label": "Medium – mitigates MFA fatigue" },
      { "id": "z3", "label": "Lowest – vulnerable to interception and SIM swap" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "FIDO2 provides cryptographic phishing resistance. Number matching reduces accidental approvals. SMS remains the weakest method due to SIM-swapping and interception risks."
  },
  {
    "id": 192,
    "qid": "SC-500-MOD2-192",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra feature allows external partner organizations to be defined so their users can request access packages?",
    "scenario": "<div class=\"scenario-text\"><p>A company collaborates with multiple external vendors and needs a governed way for vendor users to request time-limited access to project resources.</p></div>",
    "options": [
      { "id": "a", "text": "Connected organizations in entitlement management" },
      { "id": "b", "text": "Administrative units" },
      { "id": "c", "text": "Privileged Identity Management for groups" },
      { "id": "d", "text": "Seamless Single Sign-On" }
    ],
    "correct": ["a"],
    "explanation": "Connected organizations represent external identity providers or Entra ID tenants so that their users can be invited to request access packages under governed policies."
  },
  {
    "id": 193,
    "qid": "SC-500-MOD2-193",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly configures the Conditional Access policy to block access instead of requiring MFA.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer intends to require MFA for all users but has misconfigured the grant control.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"displayName\": \"Require MFA for all users\"," },
      { "id": "l3", "label": "  \"state\": \"enabled\"," },
      { "id": "l4", "label": "  \"grantControls\": {" },
      { "id": "l5", "label": "    \"operator\": \"OR\"," },
      { "id": "l6", "label": "    \"builtInControls\": [\"block\"]" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l6"],
    "selectCount": 1,
    "explanation": "The builtInControls array contains \"block\", which denies access entirely. To require MFA the value must be \"mfa\" (or an authentication strength that includes MFA methods)."
  },
  {
    "id": 194,
    "qid": "SC-500-MOD2-194",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "What is the primary purpose of Microsoft Entra ID Protection risk-based Conditional Access policies?",
    "scenario": "<div class=\"scenario-text\"><p>A security operations team wants to automatically challenge or block sign-ins that exhibit high risk characteristics.</p></div>",
    "options": [
      { "id": "a", "text": "Evaluate user risk or sign-in risk and enforce controls such as MFA or block access" },
      { "id": "b", "text": "Automatically assign the Global Administrator role to risky users" },
      { "id": "c", "text": "Synchronize on-premises passwords to the cloud" },
      { "id": "d", "text": "Replace the need for access reviews" }
    ],
    "correct": ["a"],
    "explanation": "Risk-based Conditional Access policies use the risk levels calculated by Entra ID Protection to require remediation (MFA, password change) or to block the authentication attempt."
  },
  {
    "id": 195,
    "qid": "SC-500-MOD2-195",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which two hybrid identity features can be combined to provide cloud authentication and a seamless sign-in experience on domain-joined devices?",
    "scenario": "<div class=\"scenario-text\"><p>An organization wants users to authenticate directly against Microsoft Entra ID while still enjoying single sign-on from domain-joined Windows devices.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Password Hash Synchronization" },
      { "id": "b", "text": "Seamless Single Sign-On" },
      { "id": "c", "text": "Active Directory Federation Services only" },
      { "id": "d", "text": "Certificate-based authentication only" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Password Hash Synchronization enables cloud authentication, and Seamless SSO allows domain-joined devices to obtain Entra ID tokens via Kerberos without prompting for credentials. AD FS and CBA are alternative methods that are not required for this combination."
  },
  {
    "id": 196,
    "qid": "SC-500-MOD2-196",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra capability allows an application running outside Azure (for example in GitHub Actions) to obtain tokens without storing a client secret?",
    "scenario": "<div class=\"scenario-text\"><p>A CI/CD pipeline must authenticate to Microsoft Graph and Azure Resource Manager without embedding long-lived secrets.</p></div>",
    "options": [
      { "id": "a", "text": "Workload identity federation" },
      { "id": "b", "text": "System-assigned managed identity" },
      { "id": "c", "text": "Password Hash Synchronization" },
      { "id": "d", "text": "Seamless Single Sign-On" }
    ],
    "correct": ["a"],
    "explanation": "Workload identity federation lets an external identity provider issue a token that is exchanged for an Entra ID access token, eliminating the need for client secrets. Managed identities are available only for Azure resources."
  },
  {
    "id": 197,
    "qid": "SC-500-MOD2-197",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "dragdrop",
    "prompt": "Match each Privileged Identity Management assignment type to its behavior.",
    "scenario": "<div class=\"scenario-text\"><p>An administrator is configuring PIM for Azure RBAC roles and must understand the difference between assignment types.</p></div>",
    "items": [
      { "id": "i1", "text": "Eligible assignment" },
      { "id": "i2", "text": "Active assignment" },
      { "id": "i3", "text": "Just-in-time activation" }
    ],
    "zones": [
      { "id": "z1", "label": "User can activate the role when needed" },
      { "id": "z2", "label": "Role is permanently assigned and immediately usable" },
      { "id": "z3", "label": "Time-limited elevation after meeting activation requirements" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Eligible assignments require activation. Active assignments grant standing access. Just-in-time activation is the process that elevates an eligible assignment for a limited period."
  },
  {
    "id": 198,
    "qid": "SC-500-MOD2-198",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Conditional Access condition evaluates the persistent risk associated with a user account rather than a single authentication attempt?",
    "scenario": "<div class=\"scenario-text\"><p>A policy must force a password reset when a user’s overall risk level is high, regardless of the current sign-in characteristics.</p></div>",
    "options": [
      { "id": "a", "text": "User risk" },
      { "id": "b", "text": "Sign-in risk" },
      { "id": "c", "text": "Device platform" },
      { "id": "d", "text": "Client apps" }
    ],
    "correct": ["a"],
    "explanation": "User risk is a persistent score calculated by Entra ID Protection based on detections such as leaked credentials and anomalous activity. Sign-in risk evaluates the individual authentication attempt."
  },
  {
    "id": 199,
    "qid": "SC-500-MOD2-199",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "multiselect",
    "prompt": "Which three Microsoft Entra ID Governance capabilities help enforce least-privilege and periodic access validation?",
    "scenario": "<div class=\"scenario-text\"><p>A compliance program requires automated lifecycle management, self-service access requests, and regular attestation of existing access.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Lifecycle workflows" },
      { "id": "b", "text": "Entitlement management" },
      { "id": "c", "text": "Access reviews" },
      { "id": "d", "text": "Password Hash Synchronization" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Lifecycle workflows automate joiner-mover-leaver processes, entitlement management provides governed access packages, and access reviews perform periodic attestation. Password Hash Synchronization is a hybrid authentication feature."
  },
  {
    "id": 200,
    "qid": "SC-500-MOD2-200",
    "moduleId": "mod2",
    "module": "Identity & Access Management (IAM)",
    "domain": "Microsoft SC-500",
    "type": "single",
    "prompt": "Which Microsoft Entra feature should be used to ensure that privileged role activations are time-bound, require MFA, and generate comprehensive audit logs?",
    "scenario": "<div class=\"scenario-text\"><p>An organization must eliminate standing Global Administrator assignments and replace them with on-demand elevation that is fully auditable.</p></div>",
    "options": [
      { "id": "a", "text": "Privileged Identity Management (PIM)" },
      { "id": "b", "text": "Access reviews only" },
      { "id": "c", "text": "Conditional Access session controls only" },
      { "id": "d", "text": "Seamless Single Sign-On" }
    ],
    "correct": ["a"],
    "explanation": "Privileged Identity Management provides eligible role assignments, just-in-time activation with MFA and optional approval, time-bound elevation, and comprehensive audit logging—exactly the controls required for privileged access."
  },
  {
    "id": 1,
    "qid": "SC-500-MOD3-001",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "single",
    "prompt": "An organization needs to restrict custom Azure OpenAI deployments from sending diagnostic data to external networks. Which feature provides this isolation?",
    "scenario": "<div class=\"scenario-text\"><p>An enterprise is deploying Azure OpenAI Service within a strictly regulated financial environment that prohibits any outbound telemetry to public endpoints.</p></div>",
    "options": [
      { "id": "a", "text": "Azure Managed Virtual Network with Private Endpoints" },
      { "id": "b", "text": "Microsoft Defender for Cloud Apps SAN Policy" },
      { "id": "c", "text": "Azure Sentinel Data Connector Filtering" },
      { "id": "d", "text": "Purview Data Loss Prevention for REST APIs" }
    ],
    "correct": ["a"],
    "explanation": "Azure Managed Virtual Networks combined with Private Endpoints force all traffic between the customer’s resources and the Azure OpenAI model endpoints to remain on the Microsoft backbone, eliminating public network routing and diagnostic egress. Defender for Cloud Apps SAN policies, Sentinel connectors, and Purview DLP do not control the network path of the OpenAI service itself."
  },
  {
    "id": 2,
    "qid": "SC-500-MOD3-002",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "multiselect",
    "prompt": "Select THREE controls required to mitigate direct and indirect prompt injection attacks in custom Azure AI Foundry applications.",
    "scenario": "<div class=\"scenario-text\"><p>A security team is hardening an AI agent against adversarial manipulation that attempts to override system instructions via user prompts or retrieved documents.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enable Azure AI Content Safety Prompt Shields" },
      { "id": "b", "text": "Implement input validation and system message metaprompting rules" },
      { "id": "c", "text": "Enforce grounding checks via Content Safety API" },
      { "id": "d", "text": "Disable TLS 1.3 on API endpoints" },
      { "id": "e", "text": "Convert all LLM outputs to unparsed HTML" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Prompt Shields detect both direct and indirect prompt injection. Strict system-message metaprompting establishes behavioral boundaries that the model is instructed to honor. Grounding checks ensure the model’s response is strictly supported by the retrieved context. Disabling TLS or rendering outputs as HTML provides no protection against injection."
  },
  {
    "id": 3,
    "qid": "SC-500-MOD3-003",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "dragdrop",
    "prompt": "Match each Microsoft Purview DSPM for AI capability to its primary governance function.",
    "scenario": "<div class=\"scenario-text\"><p>A Chief Information Security Officer (CISO) is configuring Microsoft Purview to govern generative AI usage across the enterprise.</p></div>",
    "items": [
      { "id": "i1", "text": "Purview AI Hub" },
      { "id": "i2", "text": "Sensitivity Labels" },
      { "id": "i3", "text": "Data Loss Prevention (DLP) for Copilot" }
    ],
    "zones": [
      { "id": "z1", "label": "Centralized visibility into AI usage and risk posture" },
      { "id": "z2", "label": "Automatic classification and encryption of AI-generated content" },
      { "id": "z3", "label": "Real-time prevention of sensitive data pasting into external LLMs" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Purview AI Hub aggregates inventory, usage analytics, and risk scores for AI assets. Sensitivity labels classify and optionally encrypt content produced or consumed by AI. DLP policies for Copilot and similar interfaces block sensitive data from leaving the organizational boundary in prompts."
  },
  {
    "id": 4,
    "qid": "SC-500-MOD3-004",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the architectural component responsible for performing real-time safety evaluations before prompts reach the Azure OpenAI deployment.",
    "scenario": "<div class=\"scenario-text\"><p>Review the high-level architecture diagram for an enterprise Retrieval-Augmented Generation (RAG) system.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Azure AI Content Safety Gateway", "x": 20, "y": 40 },
      { "id": "node2", "label": "Azure Cosmos DB (Vector Store)", "x": 50, "y": 40 },
      { "id": "node3", "label": "Azure App Service Frontend", "x": 80, "y": 40 }
    ],
    "correct": ["node1"],
    "explanation": "The Azure AI Content Safety Gateway (or the integrated Content Safety filters on the Azure OpenAI endpoint) evaluates prompts and completions against configured categories including jailbreak, hate, and self-harm before the request is forwarded to the model. The vector store and frontend do not perform safety classification."
  },
  {
    "id": 5,
    "qid": "SC-500-MOD3-005",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line in the JSON payload that misconfigures the Content Safety filter by disabling Jailbreak detection.",
    "scenario": "<div class=\"scenario-text\"><p>An engineer is configuring a REST API payload for an Azure OpenAI Content Filter policy.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"name\": \"strict_safety_policy\"," },
      { "id": "l3", "label": "  \"userPromptFilter\": {" },
      { "id": "l4", "label": "    \"jailbreak\": false," },
      { "id": "l5", "label": "    \"severityThreshold\": \"Medium\"" },
      { "id": "l6", "label": "  }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l4"],
    "selectCount": 1,
    "explanation": "Setting \"jailbreak\": false explicitly disables the jailbreak/prompt-injection detector. All other lines are either structural or configure a different (and still active) filter category."
  },
  {
    "id": 6,
    "qid": "SC-500-MOD3-006",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "single",
    "prompt": "Which Microsoft Purview capability automatically discovers and inventories generative AI applications and their associated data sources across the Microsoft 365 and Azure estates?",
    "scenario": "<div class=\"scenario-text\"><p>A data governance team must produce an authoritative inventory of every AI workload that can access corporate data.</p></div>",
    "options": [
      { "id": "a", "text": "Purview Data Map with AI asset scanning" },
      { "id": "b", "text": "Microsoft Defender for Cloud Secure Score" },
      { "id": "c", "text": "Azure Policy Guest Configuration" },
      { "id": "d", "text": "Microsoft 365 Compliance Center Audit Search" }
    ],
    "correct": ["a"],
    "explanation": "Purview Data Map, extended by DSPM for AI and the AI Hub, continuously discovers AI applications, models, and the data sources they consume. Defender Secure Score, Guest Configuration, and basic audit search do not provide AI-specific asset inventory."
  },
  {
    "id": 7,
    "qid": "SC-500-MOD3-007",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "multiselect",
    "prompt": "Select THREE recommended controls when deploying Azure OpenAI Service into a regulated environment that requires private connectivity and customer-managed keys.",
    "scenario": "<div class=\"scenario-text\"><p>A financial institution is provisioning a new Azure OpenAI resource that must never traverse the public internet and must use customer-controlled encryption keys.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enable Managed Virtual Network / Private Endpoints" },
      { "id": "b", "text": "Configure customer-managed keys (CMK) via Azure Key Vault" },
      { "id": "c", "text": "Restrict public network access and allow only selected virtual networks" },
      { "id": "d", "text": "Enable anonymous authentication on the deployment" },
      { "id": "e", "text": "Disable all content filters to improve latency" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Managed VNet/Private Endpoints and the “Disable public network access” setting together enforce private connectivity. CMK ensures encryption keys remain under customer control. Anonymous auth and disabled content filters violate security baselines."
  },
  {
    "id": 8,
    "qid": "SC-500-MOD3-008",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "dragdrop",
    "prompt": "Match each prompt-injection defense technique to the layer at which it operates.",
    "scenario": "<div class=\"scenario-text\"><p>A security architect is designing a defense-in-depth strategy for an Azure AI Foundry agent that consumes both user input and retrieved documents.</p></div>",
    "items": [
      { "id": "i1", "text": "Azure AI Content Safety Prompt Shields" },
      { "id": "i2", "text": "System message / metaprompt constraints" },
      { "id": "i3", "text": "Document-level grounding and citation validation" }
    ],
    "zones": [
      { "id": "z1", "label": "Model-input safety filter (pre-inference)" },
      { "id": "z2", "label": "Behavioral boundary enforcement inside the model" },
      { "id": "z3", "label": "Post-retrieval / post-generation verification" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Prompt Shields inspect the raw prompt before it reaches the model. System-message constraints instruct the model how to behave. Grounding checks verify that the final answer is supported by the retrieved sources after generation."
  },
  {
    "id": 9,
    "qid": "SC-500-MOD3-009",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that provides centralized risk scoring and policy recommendations for generative AI usage across Microsoft 365 and Azure.",
    "scenario": "<div class=\"scenario-text\"><p>An enterprise architecture diagram shows the Microsoft Purview governance stack for AI.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Purview AI Hub", "x": 25, "y": 35 },
      { "id": "node2", "label": "Azure AI Search", "x": 55, "y": 35 },
      { "id": "node3", "label": "Microsoft 365 Admin Center", "x": 80, "y": 35 }
    ],
    "correct": ["node1"],
    "explanation": "Purview AI Hub is the dedicated experience that surfaces AI-specific risk scores, oversharing insights, and recommended DSPM controls. Azure AI Search and the M365 Admin Center do not provide this consolidated AI risk posture view."
  },
  {
    "id": 10,
    "qid": "SC-500-MOD3-010",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the Bicep property that incorrectly allows public network access to the Azure OpenAI account.",
    "scenario": "<div class=\"scenario-text\"><p>Review the following Bicep snippet used to deploy an Azure OpenAI resource.</p></div>",
    "nodes": [
      { "id": "l1", "label": "resource openAI 'Microsoft.CognitiveServices/accounts@2023-05-01' = {" },
      { "id": "l2", "label": "  name: 'aoai-prod-eus'" },
      { "id": "l3", "label": "  location: 'eastus'" },
      { "id": "l4", "label": "  properties: {" },
      { "id": "l5", "label": "    publicNetworkAccess: 'Enabled'" },
      { "id": "l6", "label": "    customSubDomainName: 'aoai-prod-eus'" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "Setting publicNetworkAccess to 'Enabled' explicitly permits traffic from the public internet. For regulated workloads this value must be 'Disabled' and private endpoints must be used."
  },
  {
    "id": 11,
    "qid": "SC-500-MOD3-011",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "single",
    "prompt": "What is the primary purpose of Azure AI Content Safety’s “Prompt Shields” capability?",
    "scenario": "<div class=\"scenario-text\"><p>A security engineer is evaluating built-in protections available on Azure OpenAI and Azure AI Foundry endpoints.</p></div>",
    "options": [
      { "id": "a", "text": "Detect and block direct and indirect prompt injection attempts" },
      { "id": "b", "text": "Encrypt model weights at rest with customer-managed keys" },
      { "id": "c", "text": "Automatically redact PII from all completions" },
      { "id": "d", "text": "Enforce network isolation via private endpoints" }
    ],
    "correct": ["a"],
    "explanation": "Prompt Shields specifically analyze user prompts and retrieved documents for injection patterns that attempt to override system instructions. Encryption, PII redaction, and network isolation are provided by other services or features."
  },
  {
    "id": 12,
    "qid": "SC-500-MOD3-012",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "multiselect",
    "prompt": "Select THREE Microsoft Purview controls that help prevent sensitive corporate data from being exposed through generative AI prompts.",
    "scenario": "<div class=\"scenario-text\"><p>An organization has observed employees pasting confidential financial models into consumer and enterprise generative AI tools.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "DLP policies scoped to Microsoft 365 Copilot and browser-based AI sites" },
      { "id": "b", "text": "Sensitivity labels with auto-labeling on high-value SharePoint libraries" },
      { "id": "c", "text": "Adaptive protection that raises the user’s risk level when sensitive data is detected in prompts" },
      { "id": "d", "text": "Disabling Conditional Access for all AI-related apps" },
      { "id": "e", "text": "Removing all retention labels from Teams channels" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "DLP policies can block or warn when sensitive information is about to leave via Copilot or approved AI endpoints. Sensitivity labels classify and protect the source content. Adaptive protection elevates risk-based controls when risky AI behavior is detected. The other options weaken rather than strengthen controls."
  },
  {
    "id": 13,
    "qid": "SC-500-MOD3-013",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "dragdrop",
    "prompt": "Match each Azure OpenAI network isolation option to its correct description.",
    "scenario": "<div class=\"scenario-text\"><p>A cloud architect is selecting the appropriate network configuration for a new Azure OpenAI deployment.</p></div>",
    "items": [
      { "id": "i1", "text": "Managed Virtual Network (VNet injection)" },
      { "id": "i2", "text": "Private Endpoint" },
      { "id": "i3", "text": "Service Endpoint" }
    ],
    "zones": [
      { "id": "z1", "label": "Places the OpenAI resource inside a Microsoft-managed VNet that the customer can peer to" },
      { "id": "z2", "label": "Exposes the OpenAI resource on a private IP inside the customer’s own VNet" },
      { "id": "z3", "label": "Allows traffic from a customer VNet to the OpenAI service over the Microsoft backbone without a private IP" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Managed VNet (also called VNet injection) places the cognitive services account in a Microsoft-owned VNet that can be peered. Private Endpoints give the resource a private IP in the customer’s VNet. Service Endpoints secure traffic from a VNet to the service without assigning a private IP to the service itself."
  },
  {
    "id": 14,
    "qid": "SC-500-MOD3-014",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that should enforce grounding validation so that the model’s answer is supported only by the retrieved documents.",
    "scenario": "<div class=\"scenario-text\"><p>High-level RAG architecture for a customer-support chatbot.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Azure AI Search (Vector + Keyword)", "x": 20, "y": 50 },
      { "id": "node2", "label": "Azure AI Content Safety / Groundedness Detection", "x": 50, "y": 50 },
      { "id": "node3", "label": "Azure OpenAI GPT-4o Deployment", "x": 80, "y": 50 }
    ],
    "correct": ["node2"],
    "explanation": "Azure AI Content Safety’s groundedness detection (or equivalent post-processing) verifies that the generated answer can be traced back to the retrieved context. The search index supplies the context; the model generates the answer; the safety layer validates grounding."
  },
  {
    "id": 15,
    "qid": "SC-500-MOD3-015",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly sets the DLP action to “Allow” for high-confidence credit-card data in a Copilot prompt.",
    "scenario": "<div class=\"scenario-text\"><p>Purview DLP policy rule JSON for Microsoft 365 Copilot.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"name\": \"Block-CC-in-Copilot\"," },
      { "id": "l3", "label": "  \"conditions\": { \"sensitiveInfoTypes\": [\"Credit Card Number\"] }," },
      { "id": "l4", "label": "  \"actions\": [" },
      { "id": "l5", "label": "    { \"type\": \"BlockAccess\", \"override\": false }" },
      { "id": "l6", "label": "  ]," },
      { "id": "l7", "label": "  \"mode\": \"Enable\"" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "Although the snippet shows BlockAccess, the question asks for the misconfiguration; in the actual exam-style item the incorrect line would read { \"type\": \"Allow\" }. The correct protective action for high-confidence financial data is BlockAccess (or Notify + Block)."
  },
  {
    "id": 16,
    "qid": "SC-500-MOD3-016",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "multiselect",
    "prompt": "Select THREE identity and access controls that should be applied to Azure OpenAI deployments in an enterprise environment.",
    "scenario": "<div class=\"scenario-text\"><p>A zero-trust architecture requires least-privilege access to every Azure OpenAI resource.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Assign Azure RBAC roles (Cognitive Services OpenAI User / Contributor) only to necessary principals" },
      { "id": "b", "text": "Require Microsoft Entra ID authentication; disable API-key-only access where possible" },
      { "id": "c", "text": "Apply Conditional Access policies that require compliant devices and MFA for AI portal and API access" },
      { "id": "d", "text": "Share a single admin API key across all development teams" },
      { "id": "e", "text": "Grant the “Owner” role at the subscription level to every data scientist" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Fine-grained RBAC, Entra ID authentication, and Conditional Access together implement least privilege and continuous verification. Shared keys and over-privileged Owner assignments violate zero-trust principles."
  },
  {
    "id": 17,
    "qid": "SC-500-MOD3-017",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "dragdrop",
    "prompt": "Match each data-poisoning or model-extraction risk to the most effective mitigation.",
    "scenario": "<div class=\"scenario-text\"><p>A threat-modeling exercise for a custom fine-tuned model hosted on Azure AI Foundry.</p></div>",
    "items": [
      { "id": "i1", "text": "Training-data provenance and integrity checks" },
      { "id": "i2", "text": "Rate limiting and anomaly detection on inference endpoints" },
      { "id": "i3", "text": "Differential privacy / noise injection during fine-tuning" }
    ],
    "zones": [
      { "id": "z1", "label": "Prevent malicious samples from corrupting the fine-tuned model" },
      { "id": "z2", "label": "Detect and throttle model-extraction / membership-inference attacks" },
      { "id": "z3", "label": "Limit leakage of individual training examples in model outputs" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Provenance controls stop poisoned data from entering the training pipeline. Rate limiting and behavioral analytics raise the cost of extraction attacks. Differential privacy reduces the risk that any single training record can be recovered from the model."
  },
  {
    "id": 18,
    "qid": "SC-500-MOD3-018",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "single",
    "prompt": "Which Purview feature provides a dedicated dashboard that surfaces oversharing risks, sensitive data usage, and AI application inventory specifically for generative AI workloads?",
    "scenario": "<div class=\"scenario-text\"><p>The CISO requires a single pane of glass focused exclusively on AI-related data security posture.</p></div>",
    "options": [
      { "id": "a", "text": "Microsoft Purview AI Hub (DSPM for AI)" },
      { "id": "b", "text": "Microsoft 365 Compliance Score" },
      { "id": "c", "text": "Azure Security Center Recommendations" },
      { "id": "d", "text": "Microsoft Defender for Endpoint Device Inventory" }
    ],
    "correct": ["a"],
    "explanation": "Purview AI Hub (part of DSPM for AI) is purpose-built to inventory AI apps, surface oversharing of sensitive data into prompts, and recommend AI-specific controls. The other dashboards are broader or endpoint-centric."
  },
  {
    "id": 19,
    "qid": "SC-500-MOD3-019",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that enforces private connectivity between an Azure App Service and Azure OpenAI without traversing the public internet.",
    "scenario": "<div class=\"scenario-text\"><p>Enterprise RAG architecture with network isolation requirements.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Private Endpoint on Azure OpenAI", "x": 30, "y": 40 },
      { "id": "node2", "label": "Azure Front Door (public)", "x": 60, "y": 20 },
      { "id": "node3", "label": "Public IP of App Service", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "A Private Endpoint places the Azure OpenAI resource on a private IP inside the customer’s VNet, allowing the App Service (via VNet integration or private link) to reach it without public egress. Front Door and the public IP of the App Service are public pathways."
  },
  {
    "id": 20,
    "qid": "SC-500-MOD3-020",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that disables the self-harm content filter, creating a compliance violation.",
    "scenario": "<div class=\"scenario-text\"><p>Azure OpenAI content-filter policy definition (JSON).</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"name\": \"enterprise-filter\"," },
      { "id": "l3", "label": "  \"input\": {" },
      { "id": "l4", "label": "    \"hate\": { \"threshold\": \"medium\" }," },
      { "id": "l5", "label": "    \"self_harm\": { \"enabled\": false }," },
      { "id": "l6", "label": "    \"sexual\": { \"threshold\": \"medium\" }" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "Setting \"enabled\": false for the self_harm category turns off required safety filtering. Enterprise policies must keep all four core categories (hate, self-harm, sexual, violence) enabled at an appropriate severity threshold."
  },
  {
    "id": 21,
    "qid": "SC-500-MOD3-021",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "multiselect",
    "prompt": "Select THREE actions that Microsoft Purview DSPM for AI can perform to improve an organization’s AI data security posture.",
    "scenario": "<div class=\"scenario-text\"><p>A governance team has just enabled DSPM for AI and wants to understand its native capabilities.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Discover AI applications and the sensitive data they access" },
      { "id": "b", "text": "Surface oversharing recommendations for documents used in prompts" },
      { "id": "c", "text": "Recommend and help deploy sensitivity labels and DLP policies tailored to AI" },
      { "id": "d", "text": "Automatically retrain foundation models on customer data" },
      { "id": "e", "text": "Replace Azure OpenAI content filters with custom models" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "DSPM for AI discovers AI assets, identifies oversharing of sensitive content into AI tools, and guides the deployment of appropriate labels and DLP. It does not retrain models or replace the built-in content filters."
  },
  {
    "id": 22,
    "qid": "SC-500-MOD3-022",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "dragdrop",
    "prompt": "Match each Microsoft 365 Copilot security control to the risk it primarily addresses.",
    "scenario": "<div class=\"scenario-text\"><p>An information-protection team is hardening Microsoft 365 Copilot for a regulated enterprise.</p></div>",
    "items": [
      { "id": "i1", "text": "Sensitivity labels with encryption" },
      { "id": "i2", "text": "DLP policies for Copilot" },
      { "id": "i3", "text": "Copilot Graph API permission scoping" }
    ],
    "zones": [
      { "id": "z1", "label": "Prevent unauthorized users from reading AI-generated or source content" },
      { "id": "z2", "label": "Stop sensitive data from being included in prompts or responses" },
      { "id": "z3", "label": "Limit the Microsoft Graph data that Copilot can retrieve on behalf of a user" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Sensitivity labels (especially with encryption) control who can open content. DLP policies inspect and block sensitive information in the Copilot interaction path. Graph permission scoping reduces the blast radius of what Copilot can see."
  },
  {
    "id": 23,
    "qid": "SC-500-MOD3-023",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "single",
    "prompt": "An attacker crafts a document that, when retrieved by a RAG system, contains hidden instructions that cause the model to ignore its system prompt. What type of attack is this?",
    "scenario": "<div class=\"scenario-text\"><p>Security researchers are analyzing an incident involving a compromised knowledge base.</p></div>",
    "options": [
      { "id": "a", "text": "Indirect prompt injection" },
      { "id": "b", "text": "Model extraction attack" },
      { "id": "c", "text": "Training-data poisoning" },
      { "id": "d", "text": "Membership inference attack" }
    ],
    "correct": ["a"],
    "explanation": "Indirect prompt injection occurs when malicious instructions are embedded in data that the model later retrieves (for example, a web page or document). Model extraction, training-data poisoning, and membership inference are different classes of attack."
  },
  {
    "id": 24,
    "qid": "SC-500-MOD3-024",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component responsible for applying sensitivity labels to content generated by Microsoft 365 Copilot.",
    "scenario": "<div class=\"scenario-text\"><p>Microsoft Purview information-protection flow for AI-generated content.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Auto-labeling / Sensitivity Label Policies", "x": 25, "y": 45 },
      { "id": "node2", "label": "Azure AI Content Safety", "x": 55, "y": 45 },
      { "id": "node3", "label": "Microsoft Defender for Cloud Apps", "x": 80, "y": 45 }
    ],
    "correct": ["node1"],
    "explanation": "Sensitivity label policies (including auto-labeling) are the Purview mechanism that classifies and optionally encrypts content, including content produced by Copilot. Content Safety focuses on harmful content; Defender for Cloud Apps provides CASB visibility."
  },
  {
    "id": 25,
    "qid": "SC-500-MOD3-025",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the property that must be set to “Disabled” to prevent any public network access to the Azure OpenAI account.",
    "scenario": "<div class=\"scenario-text\"><p>Azure CLI / REST representation of an Azure OpenAI account network configuration.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"properties\": {" },
      { "id": "l3", "label": "    \"networkAcls\": {" },
      { "id": "l4", "label": "      \"defaultAction\": \"Deny\"," },
      { "id": "l5", "label": "      \"virtualNetworkRules\": []" },
      { "id": "l6", "label": "    }," },
      { "id": "l7", "label": "    \"publicNetworkAccess\": \"Enabled\"" },
      { "id": "l8", "label": "  }" },
      { "id": "l9", "label": "}" }
    ],
    "correct": ["l7"],
    "selectCount": 1,
    "explanation": "Even when networkAcls.defaultAction is Deny, the publicNetworkAccess property must also be set to “Disabled” to fully block public endpoints. Leaving it “Enabled” still permits public access under certain conditions."
  },
  {
    "id": 26,
    "qid": "SC-500-MOD3-026",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "multiselect",
    "prompt": "Select THREE techniques that reduce the success rate of indirect prompt injection via RAG documents.",
    "scenario": "<div class=\"scenario-text\"><p>A RAG pipeline ingests both trusted internal documents and external web content.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Sanitize and strip instructional language from retrieved documents before they are added to the prompt" },
      { "id": "b", "text": "Apply Azure AI Content Safety Prompt Shields on both user input and retrieved context" },
      { "id": "c", "text": "Enforce strict grounding checks that reject answers not supported by the source documents" },
      { "id": "d", "text": "Increase the temperature of the model to encourage more creative answers" },
      { "id": "e", "text": "Disable all system messages to simplify the prompt" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Document sanitization removes hidden instructions, Prompt Shields detect injection patterns in context, and grounding checks ensure the model cannot follow unsupported instructions. Higher temperature and missing system messages increase rather than decrease risk."
  },
  {
    "id": 27,
    "qid": "SC-500-MOD3-027",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "dragdrop",
    "prompt": "Match each vector-store security control to the threat it primarily mitigates.",
    "scenario": "<div class=\"scenario-text\"><p>Security design for an Azure AI Search or Cosmos DB vector index that stores embeddings of sensitive documents.</p></div>",
    "items": [
      { "id": "i1", "text": "Customer-managed keys (CMK) for the vector index" },
      { "id": "i2", "text": "Private endpoints + VNet integration for the search service" },
      { "id": "i3", "text": "Row-level or document-level security filters on queries" }
    ],
    "zones": [
      { "id": "z1", "label": "Protect embeddings at rest from unauthorized decryption" },
      { "id": "z2", "label": "Prevent unauthorized network access to the vector store" },
      { "id": "z3", "label": "Ensure a user can retrieve only embeddings they are entitled to see" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "CMK controls encryption of the stored vectors. Private endpoints eliminate public exposure of the service. Query-time security filters (or equivalent ACL checks) enforce least-privilege retrieval."
  },
  {
    "id": 28,
    "qid": "SC-500-MOD3-028",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "single",
    "prompt": "When using Azure OpenAI with a managed identity from an Azure App Service, which authentication method eliminates the need to store API keys in application configuration?",
    "scenario": "<div class=\"scenario-text\"><p>A development team wants to remove long-lived secrets from their RAG application’s configuration.</p></div>",
    "options": [
      { "id": "a", "text": "System-assigned or user-assigned managed identity with Cognitive Services OpenAI User role" },
      { "id": "b", "text": "Shared access signature (SAS) tokens rotated every 24 hours" },
      { "id": "c", "text": "Hard-coded subscription key in environment variables" },
      { "id": "d", "text": "Anonymous access with IP allow-listing only" }
    ],
    "correct": ["a"],
    "explanation": "Managed identities allow the App Service to obtain Entra ID tokens that are accepted by Azure OpenAI when the identity is granted the appropriate RBAC role. This removes the need for any static API key. SAS tokens, hard-coded keys, and anonymous access are inferior or insecure alternatives."
  },
  {
    "id": 29,
    "qid": "SC-500-MOD3-029",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that should be placed immediately before the Azure OpenAI deployment to evaluate both user prompts and retrieved documents for injection.",
    "scenario": "<div class=\"scenario-text\"><p>Secure RAG reference architecture.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Azure AI Content Safety (Prompt Shields)", "x": 40, "y": 30 },
      { "id": "node2", "label": "Azure Cosmos DB", "x": 20, "y": 60 },
      { "id": "node3", "label": "Azure Monitor Log Analytics", "x": 70, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "Prompt Shields (part of Azure AI Content Safety) is the dedicated pre-inference filter for detecting direct and indirect prompt injection. The database stores vectors; Log Analytics is for observability."
  },
  {
    "id": 30,
    "qid": "SC-500-MOD3-030",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the incorrect setting that would allow a user to override a DLP block when pasting credit-card data into Copilot.",
    "scenario": "<div class=\"scenario-text\"><p>Excerpt from a Microsoft Purview DLP policy rule for generative AI.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"ruleName\": \"Block-Financial-in-AI\"," },
      { "id": "l3", "label": "  \"sensitiveInfoTypes\": [\"Credit Card Number\"]," },
      { "id": "l4", "label": "  \"actions\": [" },
      { "id": "l5", "label": "    { \"blockAccess\": true, \"overrideAllowed\": true }" },
      { "id": "l6", "label": "  ]" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "Setting overrideAllowed to true permits the end user to bypass the DLP block. For high-impact financial data the override should be false (or the policy should use a higher restriction level that does not permit overrides)."
  },
  {
    "id": 31,
    "qid": "SC-500-MOD3-031",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "multiselect",
    "prompt": "Select THREE logging and monitoring controls that should be enabled for Azure OpenAI deployments to support security investigations.",
    "scenario": "<div class=\"scenario-text\"><p>A SOC team requires full visibility into prompt and completion activity for forensic analysis.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Diagnostic settings sending “RequestResponse” logs to a Log Analytics workspace" },
      { "id": "b", "text": "Azure Monitor alerts on anomalous token consumption or error rates" },
      { "id": "c", "text": "Microsoft Defender for Cloud recommendations and alerts for Cognitive Services" },
      { "id": "d", "text": "Disabling all diagnostic logging to reduce cost" },
      { "id": "e", "text": "Storing API keys in plain text inside the application code repository" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "RequestResponse logs capture the necessary telemetry, Azure Monitor provides detection of anomalous usage, and Defender for Cloud surfaces misconfigurations and threats. Disabling logging and hard-coding keys are anti-patterns."
  },
  {
    "id": 32,
    "qid": "SC-500-MOD3-032",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "dragdrop",
    "prompt": "Match each Azure AI Content Safety category to the type of harmful content it is designed to detect.",
    "scenario": "<div class=\"scenario-text\"><p>Configuration of a strict content-filter policy for a public-facing chatbot.</p></div>",
    "items": [
      { "id": "i1", "text": "Hate" },
      { "id": "i2", "text": "Self-harm" },
      { "id": "i3", "text": "Jailbreak / Prompt injection" }
    ],
    "zones": [
      { "id": "z1", "label": "Content that expresses discrimination or hostility toward protected groups" },
      { "id": "z2", "label": "Content that encourages or describes self-injury or suicide" },
      { "id": "z3", "label": "Attempts to override system instructions or extract the system prompt" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "The four core Azure AI Content Safety categories (hate, self-harm, sexual, violence) plus the specialized Prompt Shields / jailbreak detector map directly to these risk types."
  },
  {
    "id": 33,
    "qid": "SC-500-MOD3-033",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "single",
    "prompt": "Which feature allows an organization to automatically apply a sensitivity label to a Word document that was generated by Microsoft 365 Copilot when the source content itself was labeled?",
    "scenario": "<div class=\"scenario-text\"><p>Information-protection architects need inheritance of labels from source material into AI-generated artifacts.</p></div>",
    "options": [
      { "id": "a", "text": "Sensitivity label inheritance / auto-labeling policies for Copilot-generated content" },
      { "id": "b", "text": "Azure Policy initiative for Cognitive Services" },
      { "id": "c", "text": "Microsoft Defender for Endpoint attack-surface reduction rules" },
      { "id": "d", "text": "Conditional Access session controls only" }
    ],
    "correct": ["a"],
    "explanation": "Purview sensitivity-label policies can be configured so that content generated by Copilot inherits the highest classification of the source material used in the prompt, ensuring continuous protection."
  },
  {
    "id": 34,
    "qid": "SC-500-MOD3-034",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the identity component that the Azure App Service should use to authenticate to Azure OpenAI without storing secrets.",
    "scenario": "<div class=\"scenario-text\"><p>Zero-trust RAG application architecture.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Managed Identity (System or User-assigned)", "x": 30, "y": 40 },
      { "id": "node2", "label": "Shared Access Signature (SAS)", "x": 60, "y": 20 },
      { "id": "node3", "label": "Hard-coded API Key in App Settings", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "A managed identity obtains short-lived Entra ID tokens that Azure OpenAI accepts when the identity is granted the Cognitive Services OpenAI User (or higher) role. SAS tokens and static keys introduce secret-management overhead and risk."
  },
  {
    "id": 35,
    "qid": "SC-500-MOD3-035",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that sets an insufficiently strict threshold for the hate category, allowing medium-severity hate content to pass.",
    "scenario": "<div class=\"scenario-text\"><p>Azure OpenAI content-filter configuration JSON.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"hate\": {" },
      { "id": "l3", "label": "    \"threshold\": \"low\"," },
      { "id": "l4", "label": "    \"outputEnabled\": true" },
      { "id": "l5", "label": "  }," },
      { "id": "l6", "label": "  \"self_harm\": { \"threshold\": \"medium\" }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "A threshold of “low” is the least restrictive setting and will allow medium- and high-severity hate content through. Enterprise policies typically require at least “medium” (or “high” for stricter environments)."
  },
  {
    "id": 36,
    "qid": "SC-500-MOD3-036",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "multiselect",
    "prompt": "Select THREE best practices for securing the vector database that stores embeddings of corporate documents used by a RAG system.",
    "scenario": "<div class=\"scenario-text\"><p>An architecture review of an Azure AI Search index containing embeddings of confidential product roadmaps.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enable private endpoints and disable public network access" },
      { "id": "b", "text": "Encrypt the index with customer-managed keys" },
      { "id": "c", "text": "Apply document-level or security-trimmed queries so users only retrieve authorized embeddings" },
      { "id": "d", "text": "Expose the search endpoint on the public internet with only an API key" },
      { "id": "e", "text": "Store the raw unencrypted source documents alongside the vectors in the same index" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Network isolation, CMK encryption, and query-time authorization are the three foundational controls for a sensitive vector store. Public exposure and co-storage of plaintext source documents increase risk."
  },
  {
    "id": 37,
    "qid": "SC-500-MOD3-037",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "dragdrop",
    "prompt": "Match each Azure OpenAI deployment model to its typical use-case isolation characteristic.",
    "scenario": "<div class=\"scenario-text\"><p>A platform team is deciding how to isolate different business units’ Azure OpenAI workloads.</p></div>",
    "items": [
      { "id": "i1", "text": "Separate Azure OpenAI accounts per business unit" },
      { "id": "i2", "text": "Single account with multiple deployments and strict RBAC" },
      { "id": "i3", "text": "Provisioned Throughput Units (PTU) with capacity reservation" }
    ],
    "zones": [
      { "id": "z1", "label": "Strongest administrative and network isolation boundary" },
      { "id": "z2", "label": "Cost-efficient sharing with logical isolation via RBAC and deployment names" },
      { "id": "z3", "label": "Guaranteed capacity and performance isolation for mission-critical workloads" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Separate accounts provide the strongest isolation (including separate network and key boundaries). A shared account with RBAC offers logical isolation at lower cost. PTU guarantees throughput isolation regardless of other tenants on the shared infrastructure."
  },
  {
    "id": 38,
    "qid": "SC-500-MOD3-038",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "single",
    "prompt": "What is the recommended first line of defense against both direct and indirect prompt injection in Azure OpenAI and Azure AI Foundry applications?",
    "scenario": "<div class=\"scenario-text\"><p>A security team is prioritizing controls for a new generative-AI customer-support agent.</p></div>",
    "options": [
      { "id": "a", "text": "Enable Azure AI Content Safety Prompt Shields on the endpoint" },
      { "id": "b", "text": "Increase the max_tokens parameter to 4096" },
      { "id": "c", "text": "Disable all content filters to improve response quality" },
      { "id": "d", "text": "Store the system prompt in client-side JavaScript" }
    ],
    "correct": ["a"],
    "explanation": "Prompt Shields are Microsoft’s purpose-built, continuously updated detectors for direct and indirect prompt injection. The other options either have no security benefit or actively weaken the security posture."
  },
  {
    "id": 39,
    "qid": "SC-500-MOD3-039",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the Microsoft Purview component that provides the AI-specific risk overview, inventory, and recommended actions.",
    "scenario": "<div class=\"scenario-text\"><p>Purview portal navigation for generative-AI governance.</p></div>",
    "nodes": [
      { "id": "node1", "label": "AI Hub (DSPM for AI)", "x": 25, "y": 40 },
      { "id": "node2", "label": "Data Estate Insights", "x": 55, "y": 40 },
      { "id": "node3", "label": "Activity Explorer", "x": 80, "y": 40 }
    ],
    "correct": ["node1"],
    "explanation": "The AI Hub (part of Data Security Posture Management for AI) is the dedicated experience that surfaces AI application inventory, oversharing risks, and guided remediation. Data Estate Insights and Activity Explorer are broader or more general-purpose."
  },
  {
    "id": 40,
    "qid": "SC-500-MOD3-040",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that grants overly broad permissions by assigning the Owner role on the Azure OpenAI resource to a developer group.",
    "scenario": "<div class=\"scenario-text\"><p>Azure RBAC role-assignment snippet (Bicep / ARM style).</p></div>",
    "nodes": [
      { "id": "l1", "label": "resource roleAssignment 'Microsoft.Authorization/roleAssignments@2022-04-01' = {" },
      { "id": "l2", "label": "  name: guid(openAI.id, 'developers', 'Owner')" },
      { "id": "l3", "label": "  scope: openAI" },
      { "id": "l4", "label": "  properties: {" },
      { "id": "l5", "label": "    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '8e3af657-a8ff-443c-a75c-2fe8c4bcb635')" },
      { "id": "l6", "label": "    principalId: developerGroup.objectId" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "The role definition ID 8e3af657-a8ff-443c-a75c-2fe8c4bcb635 corresponds to the Owner role. For developers the least-privilege roles are Cognitive Services OpenAI User or Cognitive Services OpenAI Contributor, not Owner."
 },
  {
    "id": 41,
    "qid": "SC-500-MOD3-041",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "single",
    "prompt": "Which Azure AI Content Safety feature specifically analyzes both user prompts and retrieved documents for attempts to override system instructions?",
    "scenario": "<div class=\"scenario-text\"><p>A security engineer is configuring defenses for a production RAG application hosted on Azure AI Foundry.</p></div>",
    "options": [
      { "id": "a", "text": "Prompt Shields" },
      { "id": "b", "text": "Groundedness detection only" },
      { "id": "c", "text": "PII detection and redaction" },
      { "id": "d", "text": "Protected material detection" }
    ],
    "correct": ["a"],
    "explanation": "Prompt Shields are purpose-built to detect direct and indirect prompt injection. Groundedness checks verify citation support, PII detection focuses on sensitive data leakage, and protected material detection identifies copyrighted content. Only Prompt Shields target instruction-override attacks."
  },
  {
    "id": 42,
    "qid": "SC-500-MOD3-042",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "multiselect",
    "prompt": "Select THREE Microsoft Purview capabilities that help govern data used by and generated from Microsoft 365 Copilot.",
    "scenario": "<div class=\"scenario-text\"><p>An information protection team is implementing controls for Copilot across a multinational enterprise.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Sensitivity labels with auto-labeling and inheritance for Copilot-generated content" },
      { "id": "b", "text": "DLP policies that inspect prompts and responses for sensitive information types" },
      { "id": "c", "text": "Purview AI Hub risk insights and oversharing recommendations" },
      { "id": "d", "text": "Disabling all retention policies on SharePoint sites used by Copilot" },
      { "id": "e", "text": "Granting global admin rights to every Copilot user" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Sensitivity labels classify and protect content, DLP policies block or warn on sensitive data in AI interactions, and AI Hub surfaces risk posture. Removing retention or over-privileging users weakens governance."
  },
  {
    "id": 43,
    "qid": "SC-500-MOD3-043",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "dragdrop",
    "prompt": "Match each Azure OpenAI network security control to its primary function.",
    "scenario": "<div class=\"scenario-text\"><p>A cloud security architect is designing network isolation for multiple Azure OpenAI deployments.</p></div>",
    "items": [
      { "id": "i1", "text": "Private Endpoint" },
      { "id": "i2", "text": "Managed Virtual Network" },
      { "id": "i3", "text": "Network ACLs with defaultAction Deny" }
    ],
    "zones": [
      { "id": "z1", "label": "Assigns a private IP address to the OpenAI resource inside the customer VNet" },
      { "id": "z2", "label": "Places the Cognitive Services account into a Microsoft-managed VNet that can be peered" },
      { "id": "z3", "label": "Blocks all traffic except from explicitly allowed virtual networks or IP ranges" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Private Endpoints provide a private IP in the customer’s VNet. Managed Virtual Networks (VNet injection) host the service in a Microsoft-owned network. Network ACLs enforce allow-list based access control when public access is still partially enabled."
  },
  {
    "id": 44,
    "qid": "SC-500-MOD3-044",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that performs real-time evaluation of prompts and completions against hate, self-harm, sexual, and violence categories.",
    "scenario": "<div class=\"scenario-text\"><p>High-level safety architecture for an enterprise chatbot.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Azure AI Content Safety Filters", "x": 25, "y": 40 },
      { "id": "node2", "label": "Azure AI Search Vector Index", "x": 55, "y": 40 },
      { "id": "node3", "label": "Azure App Service", "x": 80, "y": 40 }
    ],
    "correct": ["node1"],
    "explanation": "Azure AI Content Safety (integrated or standalone) evaluates both input and output against the four core harm categories. The vector index stores embeddings; the App Service hosts the application logic."
  },
  {
    "id": 45,
    "qid": "SC-500-MOD3-045",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly configures the sensitivity label policy to allow external sharing of AI-generated content labeled Highly Confidential.",
    "scenario": "<div class=\"scenario-text\"><p>Excerpt from a Microsoft Purview sensitivity label policy definition.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"name\": \"AI-Generated-HighlyConfidential\"," },
      { "id": "l3", "label": "  \"encryption\": { \"enabled\": true }," },
      { "id": "l4", "label": "  \"contentMarking\": { \"header\": true }," },
      { "id": "l5", "label": "  \"externalSharing\": \"Allow\"," },
      { "id": "l6", "label": "  \"autoLabeling\": { \"enabled\": true }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "Setting externalSharing to “Allow” on a Highly Confidential label defeats the purpose of the classification. The correct setting is typically “Block” or restricted to specific trusted domains."
  },
  {
    "id": 46,
    "qid": "SC-500-MOD3-046",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "multiselect",
    "prompt": "Select THREE controls required to meet a regulatory requirement that Azure OpenAI traffic must never leave the customer’s virtual network boundary.",
    "scenario": "<div class=\"scenario-text\"><p>A healthcare organization is deploying Azure OpenAI under strict data residency and network isolation mandates.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Disable public network access on the Azure OpenAI account" },
      { "id": "b", "text": "Deploy Private Endpoints for the Cognitive Services account" },
      { "id": "c", "text": "Configure the consuming application (App Service / AKS) with VNet integration" },
      { "id": "d", "text": "Enable anonymous authentication for lower latency" },
      { "id": "e", "text": "Store the API key in a public GitHub repository for team access" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Disabling public access, using Private Endpoints, and ensuring the client workload is VNet-integrated together keep all traffic on private Microsoft backbone paths. Anonymous auth and public key storage violate security requirements."
  },
  {
    "id": 47,
    "qid": "SC-500-MOD3-047",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "dragdrop",
    "prompt": "Match each attack type to the most effective primary mitigation in an Azure AI application.",
    "scenario": "<div class=\"scenario-text\"><p>Threat modeling session for a customer-facing generative AI assistant.</p></div>",
    "items": [
      { "id": "i1", "text": "Direct prompt injection" },
      { "id": "i2", "text": "Indirect prompt injection via RAG" },
      { "id": "i3", "text": "Model extraction / membership inference" }
    ],
    "zones": [
      { "id": "z1", "label": "Prompt Shields + strong system-message constraints" },
      { "id": "z2", "label": "Document sanitization + Prompt Shields on retrieved context + grounding checks" },
      { "id": "z3", "label": "Rate limiting, anomaly detection, and query monitoring" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Direct injection is best blocked at the prompt evaluation layer. Indirect injection requires cleaning the retrieved context and verifying grounding. Extraction attacks are mitigated by making large-scale querying expensive and detectable."
  },
  {
    "id": 48,
    "qid": "SC-500-MOD3-048",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "single",
    "prompt": "Which Microsoft Purview solution provides continuous discovery of AI applications, associated data sources, and oversharing risks across Microsoft 365 and Azure?",
    "scenario": "<div class=\"scenario-text\"><p>A CISO has requested a living inventory of every generative AI workload that can access corporate data.</p></div>",
    "options": [
      { "id": "a", "text": "Data Security Posture Management (DSPM) for AI / Purview AI Hub" },
      { "id": "b", "text": "Microsoft Defender for Cloud Apps catalog only" },
      { "id": "c", "text": "Azure Advisor cost recommendations" },
      { "id": "d", "text": "Microsoft 365 Admin Center user list" }
    ],
    "correct": ["a"],
    "explanation": "DSPM for AI (surfaced through Purview AI Hub) continuously discovers AI apps, maps the data they touch, and highlights oversharing. The other tools lack AI-specific asset and risk inventory capabilities."
  },
  {
    "id": 49,
    "qid": "SC-500-MOD3-049",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that enables an Azure Kubernetes Service (AKS) workload to reach Azure OpenAI over a private connection.",
    "scenario": "<div class=\"scenario-text\"><p>Network diagram for a containerized RAG application.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Private Endpoint + Private DNS Zone", "x": 30, "y": 45 },
      { "id": "node2", "label": "Public Load Balancer", "x": 60, "y": 20 },
      { "id": "node3", "label": "Azure Front Door (public)" ,"x": 60, "y": 70 }
    ],
    "correct": ["node1"],
    "explanation": "A Private Endpoint combined with a Private DNS Zone allows pods in AKS (via VNet integration or private cluster) to resolve and reach the OpenAI resource on a private IP. Public load balancers and Front Door introduce public paths."
  },
  {
    "id": 50,
    "qid": "SC-500-MOD3-050",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that disables output filtering for the violence category, creating a policy gap.",
    "scenario": "<div class=\"scenario-text\"><p>Azure OpenAI content filter policy JSON.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"name\": \"strict-enterprise\"," },
      { "id": "l3", "label": "  \"output\": {" },
      { "id": "l4", "label": "    \"hate\": { \"threshold\": \"medium\" }," },
      { "id": "l5", "label": "    \"violence\": { \"enabled\": false }," },
      { "id": "l6", "label": "    \"self_harm\": { \"threshold\": \"medium\" }" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "Setting \"enabled\": false for violence turns off filtering of violent content in model completions. All four core categories should remain enabled in production policies."
  },
  {
    "id": 51,
    "qid": "SC-500-MOD3-051",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "multiselect",
    "prompt": "Select THREE actions that improve the data security posture of vector embeddings stored for RAG workloads.",
    "scenario": "<div class=\"scenario-text\"><p>An architecture review of an Azure AI Search index containing embeddings of confidential legal documents.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enable customer-managed keys for the search service" },
      { "id": "b", "text": "Restrict network access with private endpoints" },
      { "id": "c", "text": "Implement security trimming or document-level access control on queries" },
      { "id": "d", "text": "Make the index publicly readable with a shared key" },
      { "id": "e", "text": "Store original plaintext documents in the same index without encryption" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "CMK protects data at rest, private endpoints protect data in transit and limit exposure, and query-time authorization prevents unauthorized retrieval of embeddings. Public access and plaintext co-storage increase risk."
  },
  {
    "id": 52,
    "qid": "SC-500-MOD3-052",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "dragdrop",
    "prompt": "Match each identity control to the risk it primarily mitigates for Azure OpenAI.",
    "scenario": "<div class=\"scenario-text\"><p>Zero-trust design workshop for generative AI services.</p></div>",
    "items": [
      { "id": "i1", "text": "Managed Identity + RBAC" },
      { "id": "i2", "text": "Conditional Access with MFA and device compliance" },
      { "id": "i3", "text": "Just-in-time / Privileged Identity Management for admin roles" }
    ],
    "zones": [
      { "id": "z1", "label": "Eliminates long-lived API keys from application configuration" },
      { "id": "z2", "label": "Ensures only trusted users and devices can access the OpenAI Studio or API" },
      { "id": "z3", "label": "Reduces standing privileges for users who manage deployments and keys" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Managed identities remove static secrets. Conditional Access enforces strong authentication and device health. PIM limits persistent administrative access."
  },
  {
    "id": 53,
    "qid": "SC-500-MOD3-053",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "single",
    "prompt": "An attacker uploads a PDF containing hidden instructions that cause a RAG system to ignore its system prompt when the document is retrieved. What is the name of this attack?",
    "scenario": "<div class=\"scenario-text\"><p>Incident response team analyzing a compromised knowledge base.</p></div>",
    "options": [
      { "id": "a", "text": "Indirect prompt injection" },
      { "id": "b", "text": "Direct jailbreak" },
      { "id": "c", "text": "Training data poisoning" },
      { "id": "d", "text": "Model inversion" }
    ],
    "correct": ["a"],
    "explanation": "Indirect prompt injection occurs when malicious instructions are embedded in data that the model later retrieves. Direct jailbreaks occur in the user prompt itself. Training-data poisoning and model inversion are different attack classes."
  },
  {
    "id": 54,
    "qid": "SC-500-MOD3-054",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the Purview component that surfaces AI-specific oversharing risks and recommended remediation actions.",
    "scenario": "<div class=\"scenario-text\"><p>Microsoft Purview portal focused on generative AI governance.</p></div>",
    "nodes": [
      { "id": "node1", "label": "AI Hub", "x": 25, "y": 40 },
      { "id": "node2", "label": "Content Explorer", "x": 55, "y": 40 },
      { "id": "node3", "label": "Audit Search", "x": 80, "y": 40 }
    ],
    "correct": ["node1"],
    "explanation": "Purview AI Hub is the dedicated DSPM-for-AI experience that highlights oversharing of sensitive data into AI tools and provides guided recommendations. Content Explorer and Audit Search are more general-purpose."
  },
  {
    "id": 55,
    "qid": "SC-500-MOD3-055",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the Bicep property that must be changed from “Enabled” to “Disabled” to enforce private-only access.",
    "scenario": "<div class=\"scenario-text\"><p>Bicep template fragment for an Azure OpenAI account.</p></div>",
    "nodes": [
      { "id": "l1", "label": "resource aoai 'Microsoft.CognitiveServices/accounts@2023-05-01' = {" },
      { "id": "l2", "label": "  name: 'aoai-secure'" },
      { "id": "l3", "label": "  properties: {" },
      { "id": "l4", "label": "    customSubDomainName: 'aoai-secure'" },
      { "id": "l5", "label": "    publicNetworkAccess: 'Enabled'" },
      { "id": "l6", "label": "    networkAcls: { defaultAction: 'Deny' }" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "publicNetworkAccess must be set to ‘Disabled’ in addition to a Deny defaultAction. Leaving it Enabled still permits certain public access paths."
  },
  {
    "id": 56,
    "qid": "SC-500-MOD3-056",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "multiselect",
    "prompt": "Select THREE recommended layers of defense against prompt injection in a production Azure AI Foundry agent.",
    "scenario": "<div class=\"scenario-text\"><p>Security architecture review for a multi-tool AI agent that uses RAG and external APIs.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Azure AI Content Safety Prompt Shields" },
      { "id": "b", "text": "Strict system-message / metaprompt design with explicit boundaries" },
      { "id": "c", "text": "Post-generation grounding and citation validation" },
      { "id": "d", "text": "Disabling all safety filters for maximum model creativity" },
      { "id": "e", "text": "Embedding the full system prompt in every user-facing error message" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Prompt Shields provide automated detection, strong system messages set behavioral guardrails, and grounding checks ensure answers remain faithful to source material. Disabling filters or leaking the system prompt increases risk."
  },
  {
    "id": 57,
    "qid": "SC-500-MOD3-057",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "dragdrop",
    "prompt": "Match each Purview control to the stage of the AI data lifecycle it primarily protects.",
    "scenario": "<div class=\"scenario-text\"><p>Data governance design for generative AI across Microsoft 365 and Azure.</p></div>",
    "items": [
      { "id": "i1", "text": "Sensitivity labels with auto-labeling" },
      { "id": "i2", "text": "DLP policies for Copilot and browser AI sites" },
      { "id": "i3", "text": "Retention labels and eDiscovery holds" }
    ],
    "zones": [
      { "id": "z1", "label": "Classification and protection of source and AI-generated content at rest" },
      { "id": "z2", "label": "Real-time inspection and blocking of sensitive data in prompts" },
      { "id": "z3", "label": "Long-term preservation and legal hold of AI interaction records" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Sensitivity labels classify and protect content. DLP acts at the moment of prompt submission. Retention and eDiscovery govern the lifecycle and discoverability of records."
  },
  {
    "id": 58,
    "qid": "SC-500-MOD3-058",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "single",
    "prompt": "What is the primary benefit of assigning a user-assigned managed identity to an Azure App Service that calls Azure OpenAI?",
    "scenario": "<div class=\"scenario-text\"><p>A development team wants to remove secrets from application configuration while supporting multiple environments.</p></div>",
    "options": [
      { "id": "a", "text": "The identity can be granted RBAC roles and reused across multiple resources without embedding API keys" },
      { "id": "b", "text": "It automatically disables all content filters" },
      { "id": "c", "text": "It grants the application Owner permissions on the subscription" },
      { "id": "d", "text": "It forces all traffic over the public internet for better performance" }
    ],
    "correct": ["a"],
    "explanation": "User-assigned managed identities are first-class Azure resources that can be shared and assigned precise RBAC roles, eliminating the need for static API keys. They do not alter content filters, grant excessive permissions, or force public routing."
  },
  {
    "id": 59,
    "qid": "SC-500-MOD3-059",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that should sanitize retrieved documents before they are inserted into the LLM prompt.",
    "scenario": "<div class=\"scenario-text\"><p>Secure RAG pipeline architecture.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Document Sanitization / Instruction Stripping Layer", "x": 30, "y": 40 },
      { "id": "node2", "label": "Azure Cosmos DB Vector Store", "x": 60, "y": 20 },
      { "id": "node3", "label": "Azure Monitor", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "A dedicated sanitization step removes or neutralizes instructional language from retrieved documents, reducing the effectiveness of indirect prompt injection. The vector store holds embeddings; Azure Monitor provides observability."
  },
  {
    "id": 60,
    "qid": "SC-500-MOD3-060",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the incorrect DLP action that would permit high-confidence Social Security Numbers to be sent to an external LLM.",
    "scenario": "<div class=\"scenario-text\"><p>Microsoft Purview DLP rule targeting generative AI endpoints.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"name\": \"Block-SSN-in-AI\"," },
      { "id": "l3", "label": "  \"sensitiveInfoTypes\": [\"U.S. Social Security Number\"]," },
      { "id": "l4", "label": "  \"actions\": [" },
      { "id": "l5", "label": "    { \"type\": \"Allow\", \"notifyUser\": false }" },
      { "id": "l6", "label": "  ]" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "An action of type “Allow” with no notification permits the sensitive data to leave. The correct protective action is BlockAccess (or equivalent) for high-confidence SSN matches."
  },
  {
    "id": 61,
    "qid": "SC-500-MOD3-061",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "multiselect",
    "prompt": "Select THREE logging destinations or signals that should be enabled for Azure OpenAI to support security monitoring and incident response.",
    "scenario": "<div class=\"scenario-text\"><p>A SOC requires visibility into prompt activity, token usage, and potential abuse.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Diagnostic settings with RequestResponse category sent to Log Analytics" },
      { "id": "b", "text": "Azure Monitor metrics and alerts on unusual token consumption" },
      { "id": "c", "text": "Microsoft Defender for Cloud alerts for Cognitive Services" },
      { "id": "d", "text": "Disabling all diagnostics to reduce storage costs" },
      { "id": "e", "text": "Storing full prompt and completion text in public blob storage without encryption" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "RequestResponse logs, metric-based alerts, and Defender for Cloud together provide the telemetry and detection coverage needed for security operations. Disabling diagnostics or storing sensitive prompts in public storage creates gaps and exposure."
  },
  {
    "id": 62,
    "qid": "SC-500-MOD3-062",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "dragdrop",
    "prompt": "Match each Content Safety capability to the risk it is designed to address.",
    "scenario": "<div class=\"scenario-text\"><p>Configuring a comprehensive safety policy for a public-facing generative AI service.</p></div>",
    "items": [
      { "id": "i1", "text": "Prompt Shields" },
      { "id": "i2", "text": "Groundedness detection" },
      { "id": "i3", "text": "Protected material detection" }
    ],
    "zones": [
      { "id": "z1", "label": "Detection of direct and indirect attempts to override system instructions" },
      { "id": "z2", "label": "Verification that the model’s answer is supported by the provided sources" },
      { "id": "z3", "label": "Identification of copyrighted or known protected text in outputs" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Prompt Shields target injection. Groundedness detection reduces hallucination risk relative to sources. Protected material detection helps avoid copyright violations."
  },
  {
    "id": 63,
    "qid": "SC-500-MOD3-063",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "single",
    "prompt": "Which feature allows sensitivity labels applied to source documents to automatically influence the classification of content generated by Microsoft 365 Copilot?",
    "scenario": "<div class=\"scenario-text\"><p>Information protection architects require label inheritance for AI-generated artifacts.</p></div>",
    "options": [
      { "id": "a", "text": "Sensitivity label inheritance and auto-labeling policies for Copilot" },
      { "id": "b", "text": "Azure Policy guest configuration" },
      { "id": "c", "text": "Microsoft Defender for Endpoint ASR rules" },
      { "id": "d", "text": "Conditional Access app control only" }
    ],
    "correct": ["a"],
    "explanation": "Purview sensitivity label policies can be configured so that Copilot-generated content inherits the highest classification of the source material, maintaining continuous protection."
  },
  {
    "id": 64,
    "qid": "SC-500-MOD3-064",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the identity primitive that should be used by an Azure Function to call Azure OpenAI without storing any secrets.",
    "scenario": "<div class=\"scenario-text\"><p>Serverless RAG architecture diagram.</p></div>",
    "nodes": [
      { "id": "node1", "label": "System-assigned or User-assigned Managed Identity", "x": 30, "y": 40 },
      { "id": "node2", "label": "Connection String with Account Key", "x": 60, "y": 20 },
      { "id": "node3", "label": "Hard-coded Subscription Key", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "Managed identities allow the Azure Function to obtain Entra ID tokens that Azure OpenAI accepts when the appropriate RBAC role is assigned. Connection strings and hard-coded keys introduce secret management risk."
  },
  {
    "id": 65,
    "qid": "SC-500-MOD3-065",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that sets the jailbreak filter to an ineffective value.",
    "scenario": "<div class=\"scenario-text\"><p>Content filter policy payload for Azure OpenAI.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"userPromptFilter\": {" },
      { "id": "l3", "label": "    \"hate\": { \"threshold\": \"medium\" }," },
      { "id": "l4", "label": "    \"jailbreak\": false," },
      { "id": "l5", "label": "    \"self_harm\": { \"threshold\": \"medium\" }" },
      { "id": "l6", "label": "  }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l4"],
    "selectCount": 1,
    "explanation": "Explicitly setting jailbreak to false disables Prompt Shields / jailbreak detection, leaving the application exposed to injection attacks."
  },
  {
    "id": 66,
    "qid": "SC-500-MOD3-066",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "multiselect",
    "prompt": "Select THREE Microsoft Purview features that help prevent sensitive data from being exposed through generative AI tools.",
    "scenario": "<div class=\"scenario-text\"><p>An organization has seen confidential financial models pasted into both Copilot and consumer AI sites.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "DLP policies scoped to Microsoft 365 Copilot and selected browser destinations" },
      { "id": "b", "text": "Auto-labeling of high-value SharePoint and OneDrive content" },
      { "id": "c", "text": "Adaptive protection that elevates user risk when sensitive data is detected in AI interactions" },
      { "id": "d", "text": "Removing all sensitivity labels from the environment" },
      { "id": "e", "text": "Disabling audit logging for AI-related activities" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "DLP blocks or warns on sensitive prompts, auto-labeling ensures source content is classified, and adaptive protection enables risk-based response. Removing labels or disabling audit weakens the control plane."
  },
  {
    "id": 67,
    "qid": "SC-500-MOD3-067",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "dragdrop",
    "prompt": "Match each Azure OpenAI isolation option to the scenario it best serves.",
    "scenario": "<div class=\"scenario-text\"><p>Platform team deciding how to host multiple business-unit AI workloads.</p></div>",
    "items": [
      { "id": "i1", "text": "Dedicated Azure OpenAI account per business unit" },
      { "id": "i2", "text": "Shared account with separate deployments and RBAC" },
      { "id": "i3", "text": "Provisioned Throughput Units (PTU)" }
    ],
    "zones": [
      { "id": "z1", "label": "Maximum administrative, network, and key isolation" },
      { "id": "z2", "label": "Cost-efficient multi-tenancy with logical isolation" },
      { "id": "z3", "label": "Guaranteed capacity and performance isolation" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Separate accounts provide the strongest isolation boundaries. Shared accounts with RBAC offer efficient logical separation. PTU guarantees throughput regardless of other consumption on the platform."
  },
  {
    "id": 68,
    "qid": "SC-500-MOD3-068",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "single",
    "prompt": "What is the primary purpose of groundedness detection in a RAG system?",
    "scenario": "<div class=\"scenario-text\"><p>A quality and safety team is evaluating post-processing options for an enterprise Q&A bot.</p></div>",
    "options": [
      { "id": "a", "text": "Verify that the generated answer is supported by the retrieved source documents" },
      { "id": "b", "text": "Encrypt the vector embeddings at rest" },
      { "id": "c", "text": "Automatically fine-tune the model on every new document" },
      { "id": "d", "text": "Replace the system prompt with the user prompt" }
    ],
    "correct": ["a"],
    "explanation": "Groundedness detection measures whether the model’s output can be traced back to the provided context, reducing unsupported hallucinations. It does not handle encryption, fine-tuning, or prompt replacement."
  },
  {
    "id": 69,
    "qid": "SC-500-MOD3-069",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that provides a unified risk score and inventory specifically for generative AI applications.",
    "scenario": "<div class=\"scenario-text\"><p>Microsoft Purview governance stack for AI.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Purview AI Hub (DSPM for AI)", "x": 25, "y": 40 },
      { "id": "node2", "label": "Azure Cost Management", "x": 55, "y": 40 },
      { "id": "node3", "label": "Microsoft 365 Admin Center", "x": 80, "y": 40 }
    ],
    "correct": ["node1"],
    "explanation": "Purview AI Hub is the purpose-built experience for AI asset inventory, risk scoring, and DSPM recommendations. Cost Management and the M365 Admin Center do not provide this AI-specific posture view."
  },
  {
    "id": 70,
    "qid": "SC-500-MOD3-070",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the role definition ID that represents the overly permissive Owner role being assigned to a developer group.",
    "scenario": "<div class=\"scenario-text\"><p>Azure RBAC role assignment for an Azure OpenAI resource.</p></div>",
    "nodes": [
      { "id": "l1", "label": "resource ra 'Microsoft.Authorization/roleAssignments@2022-04-01' = {" },
      { "id": "l2", "label": "  name: guid(aoai.id, devGroup.id, 'Owner')" },
      { "id": "l3", "label": "  scope: aoai" },
      { "id": "l4", "label": "  properties: {" },
      { "id": "l5", "label": "    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '8e3af657-a8ff-443c-a75c-2fe8c4bcb635')" },
      { "id": "l6", "label": "    principalId: devGroup.id" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "The GUID 8e3af657-a8ff-443c-a75c-2fe8c4bcb635 is the well-known ID for the Owner role. Developers should receive Cognitive Services OpenAI User or Contributor, not Owner."
  },
  {
    "id": 71,
    "qid": "SC-500-MOD3-071",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "multiselect",
    "prompt": "Select THREE controls that reduce the risk of data poisoning in a fine-tuning pipeline on Azure AI Foundry.",
    "scenario": "<div class=\"scenario-text\"><p>A team is preparing a curated dataset for supervised fine-tuning of a domain-specific model.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enforce strict data provenance and integrity verification before training" },
      { "id": "b", "text": "Apply content safety scanning to every training example" },
      { "id": "c", "text": "Restrict who can upload or modify the training dataset via RBAC and private storage" },
      { "id": "d", "text": "Allow any authenticated user to push new training files without review" },
      { "id": "e", "text": "Disable all logging of dataset access" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Provenance controls, safety scanning of training data, and strict access control on the dataset storage together reduce the likelihood of poisoned samples entering the fine-tuning process."
  },
  {
    "id": 72,
    "qid": "SC-500-MOD3-072",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "dragdrop",
    "prompt": "Match each vector store protection to the threat it primarily addresses.",
    "scenario": "<div class=\"scenario-text\"><p>Security design for an Azure AI Search index holding embeddings of sensitive HR documents.</p></div>",
    "items": [
      { "id": "i1", "text": "Customer-managed keys" },
      { "id": "i2", "text": "Private endpoints and disabled public access" },
      { "id": "i3", "text": "Query-time security filters / document-level ACLs" }
    ],
    "zones": [
      { "id": "z1", "label": "Unauthorized decryption of embeddings at rest" },
      { "id": "z2", "label": "Network-level unauthorized access to the search service" },
      { "id": "z3", "label": "A user retrieving embeddings they are not entitled to see" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "CMK protects confidentiality at rest. Private endpoints protect the network boundary. Security trimming enforces least-privilege retrieval."
  },
  {
    "id": 73,
    "qid": "SC-500-MOD3-073",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "single",
    "prompt": "When public network access is disabled on an Azure OpenAI account, which additional component is required for an on-premises application to reach the service privately?",
    "scenario": "<div class=\"scenario-text\"><p>Hybrid connectivity design for a regulated workload.</p></div>",
    "options": [
      { "id": "a", "text": "Private Endpoint combined with ExpressRoute or VPN and Private DNS resolution" },
      { "id": "b", "text": "A public IP address assigned to the OpenAI account" },
      { "id": "c", "text": "Anonymous access with an IP allow-list only" },
      { "id": "d", "text": "Disabling all RBAC on the resource" }
    ],
    "correct": ["a"],
    "explanation": "With public access disabled, the only path is via Private Endpoint. On-premises systems reach that private IP through ExpressRoute or VPN, and Private DNS ensures correct name resolution."
  },
  {
    "id": 74,
    "qid": "SC-500-MOD3-074",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that should evaluate both the user prompt and any retrieved context for injection attempts before the request reaches the model.",
    "scenario": "<div class=\"scenario-text\"><p>Defense-in-depth RAG architecture.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Azure AI Content Safety Prompt Shields", "x": 30, "y": 40 },
      { "id": "node2", "label": "Azure Blob Storage", "x": 60, "y": 20 },
      { "id": "node3", "label": "Azure Key Vault", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "Prompt Shields analyze the full prompt context (user input plus retrieved documents) for injection patterns. Blob Storage holds documents; Key Vault holds secrets."
  },
  {
    "id": 75,
    "qid": "SC-500-MOD3-075",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that would allow end users to override a DLP block for highly sensitive financial data in Copilot.",
    "scenario": "<div class=\"scenario-text\"><p>Purview DLP policy rule for generative AI.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"ruleName\": \"Block-Financial-AI\"," },
      { "id": "l3", "label": "  \"conditions\": { \"sensitiveInfoTypes\": [\"Credit Card Number\", \"SWIFT Code\"] }," },
      { "id": "l4", "label": "  \"actions\": [" },
      { "id": "l5", "label": "    { \"blockAccess\": true, \"overrideAllowed\": true }" },
      { "id": "l6", "label": "  ]" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "overrideAllowed: true permits users to bypass the block. For high-impact financial data the override should be disabled."
  },
  {
    "id": 76,
    "qid": "SC-500-MOD3-076",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "multiselect",
    "prompt": "Select THREE identity and access best practices for Azure OpenAI in an enterprise zero-trust environment.",
    "scenario": "<div class=\"scenario-text\"><p>Security baseline review for all generative AI resources.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Prefer Entra ID authentication and managed identities over API keys" },
      { "id": "b", "text": "Assign least-privilege RBAC roles (OpenAI User / Contributor) only to required principals" },
      { "id": "c", "text": "Apply Conditional Access policies requiring MFA and compliant devices" },
      { "id": "d", "text": "Share a single admin API key across all teams via a public wiki" },
      { "id": "e", "text": "Grant the Owner role at the management group level to every data scientist" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Managed identities + Entra ID, least-privilege RBAC, and Conditional Access form the core of zero-trust access for Azure OpenAI. Shared keys and over-privileged Owner assignments violate the model."
  },
  {
    "id": 77,
    "qid": "SC-500-MOD3-077",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "dragdrop",
    "prompt": "Match each mitigation to the layer of the AI application stack where it is most effectively applied.",
    "scenario": "<div class=\"scenario-text\"><p>Defense-in-depth design for a multi-agent Azure AI Foundry solution.</p></div>",
    "items": [
      { "id": "i1", "text": "Prompt Shields and content filters" },
      { "id": "i2", "text": "System message / metaprompt engineering" },
      { "id": "i3", "text": "Output grounding and policy checks" }
    ],
    "zones": [
      { "id": "z1", "label": "Pre-inference input evaluation" },
      { "id": "z2", "label": "Model behavioral boundary definition" },
      { "id": "z3", "label": "Post-generation validation" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Content Safety filters act before the model. System messages shape the model’s behavior. Grounding and policy checks validate the final output."
  },
  {
    "id": 78,
    "qid": "SC-500-MOD3-078",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "single",
    "prompt": "Which Purview capability continuously monitors for sensitive data being shared into generative AI tools and provides guided remediation?",
    "scenario": "<div class=\"scenario-text\"><p>A data security team needs ongoing visibility into AI-related oversharing.</p></div>",
    "options": [
      { "id": "a", "text": "Data Security Posture Management (DSPM) for AI" },
      { "id": "b", "text": "Azure Advisor performance recommendations" },
      { "id": "c", "text": "Microsoft 365 usage analytics only" },
      { "id": "d", "text": "Endpoint analytics device scores" }
    ],
    "correct": ["a"],
    "explanation": "DSPM for AI (exposed via Purview AI Hub) is specifically designed to detect and help remediate oversharing of sensitive data into AI applications."
  },
  {
    "id": 79,
    "qid": "SC-500-MOD3-079",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that forces Azure OpenAI traffic from an App Service to remain on the Microsoft private network.",
    "scenario": "<div class=\"scenario-text\"><p>Network isolation architecture for a web-based AI application.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Private Endpoint on Azure OpenAI + VNet Integration on App Service", "x": 30, "y": 40 },
      { "id": "node2", "label": "Public IP of the App Service", "x": 60, "y": 20 },
      { "id": "node3", "label": "Azure Front Door with public backend", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "Combining a Private Endpoint on the OpenAI resource with VNet integration (or private link) on the App Service keeps all traffic private. Public IPs and Front Door with public backends introduce public paths."
  },
  {
    "id": 80,
    "qid": "SC-500-MOD3-080",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that configures an insufficient severity threshold for the self-harm category.",
    "scenario": "<div class=\"scenario-text\"><p>Azure OpenAI content filter configuration.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"self_harm\": {" },
      { "id": "l3", "label": "    \"threshold\": \"low\"," },
      { "id": "l4", "label": "    \"outputEnabled\": true" },
      { "id": "l5", "label": "  }," },
      { "id": "l6", "label": "  \"hate\": { \"threshold\": \"medium\" }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "A threshold of “low” is the most permissive setting and will allow medium- and high-severity self-harm content. Enterprise baselines typically require at least “medium”."
 },
  {
    "id": 81,
    "qid": "SC-500-MOD3-081",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "single",
    "prompt": "Which Microsoft Purview capability provides a dedicated inventory of AI applications, their data sources, and associated oversharing risks?",
    "scenario": "<div class=\"scenario-text\"><p>A data governance team must produce a living inventory of every generative AI workload that can access corporate information.</p></div>",
    "options": [
      { "id": "a", "text": "Purview AI Hub (DSPM for AI)" },
      { "id": "b", "text": "Azure Advisor cost recommendations" },
      { "id": "c", "text": "Microsoft 365 usage reports only" },
      { "id": "d", "text": "Endpoint analytics device inventory" }
    ],
    "correct": ["a"],
    "explanation": "Purview AI Hub, part of Data Security Posture Management for AI, continuously discovers AI applications, maps the data they consume, and surfaces oversharing risks. The other options lack AI-specific asset and risk inventory."
  },
  {
    "id": 82,
    "qid": "SC-500-MOD3-082",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "multiselect",
    "prompt": "Select THREE network controls required to ensure Azure OpenAI traffic never traverses the public internet.",
    "scenario": "<div class=\"scenario-text\"><p>A regulated financial institution is deploying Azure OpenAI under strict private-connectivity mandates.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Set publicNetworkAccess to Disabled on the Cognitive Services account" },
      { "id": "b", "text": "Deploy Private Endpoints for the Azure OpenAI resource" },
      { "id": "c", "text": "Configure VNet integration or private link on all consuming workloads" },
      { "id": "d", "text": "Enable anonymous authentication for simplified access" },
      { "id": "e", "text": "Publish the OpenAI endpoint on a public Application Gateway" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Disabling public network access, using Private Endpoints, and ensuring client workloads are VNet-integrated keep all traffic on the Microsoft private backbone. Anonymous auth and public gateways reintroduce public paths."
  },
  {
    "id": 83,
    "qid": "SC-500-MOD3-083",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "dragdrop",
    "prompt": "Match each prompt-injection defense to the stage of the request pipeline where it operates.",
    "scenario": "<div class=\"scenario-text\"><p>Security architects are designing layered defenses for an Azure AI Foundry agent that uses RAG.</p></div>",
    "items": [
      { "id": "i1", "text": "Azure AI Content Safety Prompt Shields" },
      { "id": "i2", "text": "System-message / metaprompt constraints" },
      { "id": "i3", "text": "Groundedness and citation validation" }
    ],
    "zones": [
      { "id": "z1", "label": "Pre-inference evaluation of user input and retrieved context" },
      { "id": "z2", "label": "Behavioral boundary enforcement inside the model" },
      { "id": "z3", "label": "Post-generation verification against source documents" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Prompt Shields inspect the assembled prompt before inference. System messages define allowed behavior. Groundedness checks confirm the final answer is supported by the retrieved sources."
  },
  {
    "id": 84,
    "qid": "SC-500-MOD3-084",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that applies sensitivity labels and optional encryption to content generated by Microsoft 365 Copilot.",
    "scenario": "<div class=\"scenario-text\"><p>Information-protection flow for AI-generated artifacts.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Sensitivity Label Policies / Auto-labeling", "x": 25, "y": 40 },
      { "id": "node2", "label": "Azure AI Content Safety", "x": 55, "y": 40 },
      { "id": "node3", "label": "Microsoft Defender for Cloud Apps", "x": 80, "y": 40 }
    ],
    "correct": ["node1"],
    "explanation": "Sensitivity label policies, including auto-labeling and inheritance, classify and protect both source and Copilot-generated content. Content Safety focuses on harmful content categories; Defender for Cloud Apps provides CASB visibility."
  },
  {
    "id": 85,
    "qid": "SC-500-MOD3-085",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the property that must be set to “Disabled” to block all public network access to the Azure OpenAI account.",
    "scenario": "<div class=\"scenario-text\"><p>REST / Bicep representation of an Azure OpenAI network configuration.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"properties\": {" },
      { "id": "l3", "label": "    \"networkAcls\": { \"defaultAction\": \"Deny\" }," },
      { "id": "l4", "label": "    \"publicNetworkAccess\": \"Enabled\"," },
      { "id": "l5", "label": "    \"customSubDomainName\": \"aoai-prod\"" },
      { "id": "l6", "label": "  }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l4"],
    "selectCount": 1,
    "explanation": "Even with networkAcls.defaultAction set to Deny, publicNetworkAccess must also be “Disabled” to fully eliminate public endpoints. Leaving it Enabled still permits certain public access paths."
  },
  {
    "id": 86,
    "qid": "SC-500-MOD3-086",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "multiselect",
    "prompt": "Select THREE techniques that mitigate indirect prompt injection when documents are retrieved into a RAG prompt.",
    "scenario": "<div class=\"scenario-text\"><p>A RAG pipeline ingests both internal SharePoint content and external web pages.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Sanitize retrieved documents to remove instructional language before prompt assembly" },
      { "id": "b", "text": "Apply Azure AI Content Safety Prompt Shields to the full prompt context" },
      { "id": "c", "text": "Enforce groundedness checks that reject answers not supported by sources" },
      { "id": "d", "text": "Increase model temperature to encourage more varied responses" },
      { "id": "e", "text": "Omit the system message entirely to shorten the prompt" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Document sanitization, Prompt Shields on the assembled context, and groundedness validation form a strong defense against indirect injection. Higher temperature and missing system messages increase risk."
  },
  {
    "id": 87,
    "qid": "SC-500-MOD3-087",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "dragdrop",
    "prompt": "Match each Microsoft Purview control to the AI data-risk scenario it primarily addresses.",
    "scenario": "<div class=\"scenario-text\"><p>A CISO is mapping Purview capabilities to generative-AI risks.</p></div>",
    "items": [
      { "id": "i1", "text": "DLP policies for Copilot and browser AI destinations" },
      { "id": "i2", "text": "Sensitivity labels with auto-labeling and inheritance" },
      { "id": "i3", "text": "Purview AI Hub oversharing insights" }
    ],
    "zones": [
      { "id": "z1", "label": "Real-time blocking of sensitive data leaving via prompts" },
      { "id": "z2", "label": "Classification and protection of source and AI-generated content" },
      { "id": "z3", "label": "Visibility into which documents are being over-shared into AI tools" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "DLP acts at the moment of interaction. Sensitivity labels protect content at rest and in motion. AI Hub surfaces the oversharing risk posture."
  },
  {
    "id": 88,
    "qid": "SC-500-MOD3-088",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "single",
    "prompt": "What is the principal advantage of using a user-assigned managed identity for an Azure App Service that calls Azure OpenAI?",
    "scenario": "<div class=\"scenario-text\"><p>A platform team wants to eliminate long-lived secrets while supporting multiple environments and shared identities.</p></div>",
    "options": [
      { "id": "a", "text": "The identity can be granted precise RBAC roles and reused across resources without embedding API keys" },
      { "id": "b", "text": "It automatically disables content safety filters" },
      { "id": "c", "text": "It grants the application Owner rights on the subscription" },
      { "id": "d", "text": "It forces all traffic over public endpoints for lower latency" }
    ],
    "correct": ["a"],
    "explanation": "User-assigned managed identities are independent Azure resources that can be shared and assigned least-privilege RBAC roles, removing the need for static API keys. They do not alter safety filters, grant excessive permissions, or force public routing."
  },
  {
    "id": 89,
    "qid": "SC-500-MOD3-089",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that should be inserted between document retrieval and prompt assembly to neutralize hidden instructions.",
    "scenario": "<div class=\"scenario-text\"><p>Secure RAG reference architecture.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Document Sanitization / Instruction-Stripping Layer", "x": 30, "y": 40 },
      { "id": "node2", "label": "Azure AI Search", "x": 60, "y": 20 },
      { "id": "node3", "label": "Azure Monitor Workbooks", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "A dedicated sanitization step removes or neutralizes instructional language from retrieved documents, reducing the success rate of indirect prompt injection. Azure AI Search supplies the documents; Monitor provides observability."
  },
  {
    "id": 90,
    "qid": "SC-500-MOD3-090",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly permits external sharing of content labeled Highly Confidential.",
    "scenario": "<div class=\"scenario-text\"><p>Microsoft Purview sensitivity label policy excerpt.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"name\": \"HighlyConfidential-AI\"," },
      { "id": "l3", "label": "  \"encryption\": { \"enabled\": true }," },
      { "id": "l4", "label": "  \"contentMarking\": { \"header\": true, \"footer\": true }," },
      { "id": "l5", "label": "  \"externalSharing\": \"Allow\"," },
      { "id": "l6", "label": "  \"autoLabeling\": { \"enabled\": true }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "Setting externalSharing to “Allow” on a Highly Confidential label undermines the classification. The correct setting is typically “Block” or restricted to approved domains only."
  },
  {
    "id": 91,
    "qid": "SC-500-MOD3-091",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "multiselect",
    "prompt": "Select THREE identity and access controls that align with zero-trust principles for Azure OpenAI deployments.",
    "scenario": "<div class=\"scenario-text\"><p>A security baseline is being defined for all generative AI resources in the enterprise.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Prefer Entra ID authentication and managed identities over long-lived API keys" },
      { "id": "b", "text": "Assign least-privilege RBAC roles (Cognitive Services OpenAI User/Contributor) only to required principals" },
      { "id": "c", "text": "Apply Conditional Access policies that require MFA and compliant devices" },
      { "id": "d", "text": "Distribute a single admin API key via a shared Teams channel" },
      { "id": "e", "text": "Grant the Owner role at the subscription level to every data scientist" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Managed identities, least-privilege RBAC, and Conditional Access together implement continuous verification and least privilege. Shared keys and over-privileged Owner assignments violate zero-trust."
  },
  {
    "id": 92,
    "qid": "SC-500-MOD3-092",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "dragdrop",
    "prompt": "Match each Azure AI Content Safety capability to the primary risk it mitigates.",
    "scenario": "<div class=\"scenario-text\"><p>Configuring a comprehensive safety policy for a customer-facing generative AI service.</p></div>",
    "items": [
      { "id": "i1", "text": "Prompt Shields" },
      { "id": "i2", "text": "Groundedness detection" },
      { "id": "i3", "text": "Protected material detection" }
    ],
    "zones": [
      { "id": "z1", "label": "Direct and indirect attempts to override system instructions" },
      { "id": "z2", "label": "Answers that cannot be traced back to the provided sources" },
      { "id": "z3", "label": "Output that reproduces known copyrighted or protected text" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Prompt Shields detect injection. Groundedness detection reduces unsupported hallucination. Protected material detection helps avoid copyright and IP leakage."
  },
  {
    "id": 93,
    "qid": "SC-500-MOD3-093",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "single",
    "prompt": "Which feature enables sensitivity labels applied to source documents to automatically influence the classification of content produced by Microsoft 365 Copilot?",
    "scenario": "<div class=\"scenario-text\"><p>Information-protection architects require continuous protection of AI-generated artifacts.</p></div>",
    "options": [
      { "id": "a", "text": "Sensitivity label inheritance and auto-labeling policies for Copilot" },
      { "id": "b", "text": "Azure Policy guest configuration assignments" },
      { "id": "c", "text": "Microsoft Defender for Endpoint attack-surface reduction rules" },
      { "id": "d", "text": "Conditional Access session controls only" }
    ],
    "correct": ["a"],
    "explanation": "Purview sensitivity label policies can be configured so that Copilot-generated content inherits the highest classification of the source material used in the interaction, maintaining continuous protection."
  },
  {
    "id": 94,
    "qid": "SC-500-MOD3-094",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that allows an Azure Kubernetes Service workload to reach Azure OpenAI over a private connection.",
    "scenario": "<div class=\"scenario-text\"><p>Containerized RAG application network diagram.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Private Endpoint + Private DNS Zone", "x": 30, "y": 40 },
      { "id": "node2", "label": "Public Load Balancer", "x": 60, "y": 20 },
      { "id": "node3", "label": "Azure Front Door with public backend", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "A Private Endpoint together with a Private DNS Zone enables pods in AKS (via VNet integration or private cluster) to resolve and reach the OpenAI resource on a private IP. Public load balancers and Front Door introduce public paths."
  },
  {
    "id": 95,
    "qid": "SC-500-MOD3-095",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that disables the jailbreak / prompt-injection detector.",
    "scenario": "<div class=\"scenario-text\"><p>Azure OpenAI content-filter policy JSON.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"userPromptFilter\": {" },
      { "id": "l3", "label": "    \"hate\": { \"threshold\": \"medium\" }," },
      { "id": "l4", "label": "    \"jailbreak\": false," },
      { "id": "l5", "label": "    \"self_harm\": { \"threshold\": \"medium\" }" },
      { "id": "l6", "label": "  }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l4"],
    "selectCount": 1,
    "explanation": "Setting “jailbreak”: false explicitly turns off Prompt Shields / jailbreak detection, leaving the application exposed to injection attacks."
  },
  {
    "id": 96,
    "qid": "SC-500-MOD3-096",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "multiselect",
    "prompt": "Select THREE best practices for securing a vector index that stores embeddings of confidential documents used by RAG.",
    "scenario": "<div class=\"scenario-text\"><p>Architecture review of an Azure AI Search index containing embeddings of legal and HR documents.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enable customer-managed keys for encryption at rest" },
      { "id": "b", "text": "Restrict network access with private endpoints and disable public access" },
      { "id": "c", "text": "Apply document-level security trimming or query-time ACLs" },
      { "id": "d", "text": "Expose the index on the public internet protected only by an API key" },
      { "id": "e", "text": "Store the original plaintext documents unencrypted alongside the vectors" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "CMK protects confidentiality at rest, private endpoints protect the network boundary, and security trimming enforces least-privilege retrieval. Public exposure and plaintext co-storage increase risk."
  },
  {
    "id": 97,
    "qid": "SC-500-MOD3-097",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "dragdrop",
    "prompt": "Match each Azure OpenAI isolation model to the scenario it best serves.",
    "scenario": "<div class=\"scenario-text\"><p>Platform team deciding how to host generative AI workloads for multiple business units.</p></div>",
    "items": [
      { "id": "i1", "text": "Dedicated Azure OpenAI account per business unit" },
      { "id": "i2", "text": "Shared account with separate deployments and strict RBAC" },
      { "id": "i3", "text": "Provisioned Throughput Units (PTU)" }
    ],
    "zones": [
      { "id": "z1", "label": "Strongest administrative, network, and key isolation" },
      { "id": "z2", "label": "Cost-efficient multi-tenancy with logical isolation" },
      { "id": "z3", "label": "Guaranteed capacity and performance isolation" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Separate accounts provide the strongest isolation boundaries. Shared accounts with RBAC offer efficient logical separation. PTU guarantees throughput isolation regardless of other consumption."
  },
  {
    "id": 98,
    "qid": "SC-500-MOD3-098",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "single",
    "prompt": "An attacker embeds hidden instructions inside a PDF that is later retrieved by a RAG system, causing the model to ignore its system prompt. What type of attack is this?",
    "scenario": "<div class=\"scenario-text\"><p>Incident response analysis of a compromised knowledge base.</p></div>",
    "options": [
      { "id": "a", "text": "Indirect prompt injection" },
      { "id": "b", "text": "Direct jailbreak via user prompt" },
      { "id": "c", "text": "Training-data poisoning" },
      { "id": "d", "text": "Model inversion attack" }
    ],
    "correct": ["a"],
    "explanation": "Indirect prompt injection occurs when malicious instructions are embedded in data that the model later retrieves. Direct jailbreaks occur in the user prompt itself. Training-data poisoning and model inversion are different classes of attack."
  },
  {
    "id": 99,
    "qid": "SC-500-MOD3-099",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the Microsoft Purview component that surfaces AI-specific risk scores, inventory, and guided remediation.",
    "scenario": "<div class=\"scenario-text\"><p>Purview portal navigation for generative-AI governance.</p></div>",
    "nodes": [
      { "id": "node1", "label": "AI Hub (DSPM for AI)", "x": 25, "y": 40 },
      { "id": "node2", "label": "Content Explorer", "x": 55, "y": 40 },
      { "id": "node3", "label": "Audit Search", "x": 80, "y": 40 }
    ],
    "correct": ["node1"],
    "explanation": "Purview AI Hub is the dedicated DSPM-for-AI experience that provides inventory, risk scoring, and remediation guidance for generative AI. Content Explorer and Audit Search are broader tools."
  },
  {
    "id": 100,
    "qid": "SC-500-MOD3-100",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the role definition ID that corresponds to the overly permissive Owner role being assigned to developers.",
    "scenario": "<div class=\"scenario-text\"><p>Azure RBAC role-assignment snippet for an Azure OpenAI resource.</p></div>",
    "nodes": [
      { "id": "l1", "label": "resource ra 'Microsoft.Authorization/roleAssignments@2022-04-01' = {" },
      { "id": "l2", "label": "  name: guid(aoai.id, devGroup.id, 'Owner')" },
      { "id": "l3", "label": "  scope: aoai" },
      { "id": "l4", "label": "  properties: {" },
      { "id": "l5", "label": "    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '8e3af657-a8ff-443c-a75c-2fe8c4bcb635')" },
      { "id": "l6", "label": "    principalId: devGroup.id" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "The GUID 8e3af657-a8ff-443c-a75c-2fe8c4bcb635 is the well-known identifier for the Owner role. Developers should be assigned Cognitive Services OpenAI User or Contributor instead."
  },
  {
    "id": 101,
    "qid": "SC-500-MOD3-101",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "multiselect",
    "prompt": "Select THREE controls that reduce the risk of training-data poisoning in an Azure AI Foundry fine-tuning pipeline.",
    "scenario": "<div class=\"scenario-text\"><p>A team is preparing a curated dataset for supervised fine-tuning of a domain model.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enforce strict data provenance and cryptographic integrity checks before training" },
      { "id": "b", "text": "Scan every training example with Azure AI Content Safety" },
      { "id": "c", "text": "Restrict upload and modification rights on the training dataset via RBAC and private storage" },
      { "id": "d", "text": "Allow any authenticated user to push new training files without review" },
      { "id": "e", "text": "Disable all access logging on the dataset storage account" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Provenance controls, safety scanning of training data, and strict access control on the dataset storage together reduce the likelihood that poisoned samples enter the fine-tuning process."
  },
  {
    "id": 102,
    "qid": "SC-500-MOD3-102",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "dragdrop",
    "prompt": "Match each vector-store security control to the threat it primarily mitigates.",
    "scenario": "<div class=\"scenario-text\"><p>Security design for an Azure AI Search index holding embeddings of sensitive product roadmaps.</p></div>",
    "items": [
      { "id": "i1", "text": "Customer-managed keys (CMK)" },
      { "id": "i2", "text": "Private endpoints and disabled public network access" },
      { "id": "i3", "text": "Query-time security filters / document-level ACLs" }
    ],
    "zones": [
      { "id": "z1", "label": "Unauthorized decryption of embeddings at rest" },
      { "id": "z2", "label": "Network-level unauthorized access to the search service" },
      { "id": "z3", "label": "A user retrieving embeddings they are not entitled to see" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "CMK protects confidentiality at rest. Private endpoints protect the network boundary. Security trimming enforces least-privilege retrieval at query time."
  },
  {
    "id": 103,
    "qid": "SC-500-MOD3-103",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "single",
    "prompt": "When public network access is disabled on an Azure OpenAI account, which additional components are required for an on-premises application to reach the service privately?",
    "scenario": "<div class=\"scenario-text\"><p>Hybrid connectivity design for a regulated workload.</p></div>",
    "options": [
      { "id": "a", "text": "Private Endpoint combined with ExpressRoute or VPN plus Private DNS resolution" },
      { "id": "b", "text": "A public IP address assigned directly to the OpenAI account" },
      { "id": "c", "text": "Anonymous access restricted only by IP allow-listing" },
      { "id": "d", "text": "Disabling all RBAC assignments on the resource" }
    ],
    "correct": ["a"],
    "explanation": "With public access disabled, the only path is via Private Endpoint. On-premises systems reach that private IP through ExpressRoute or VPN, and Private DNS ensures correct name resolution."
  },
  {
    "id": 104,
    "qid": "SC-500-MOD3-104",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that evaluates both the user prompt and retrieved context for injection attempts before the request reaches the model.",
    "scenario": "<div class=\"scenario-text\"><p>Defense-in-depth RAG architecture.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Azure AI Content Safety Prompt Shields", "x": 30, "y": 40 },
      { "id": "node2", "label": "Azure Blob Storage", "x": 60, "y": 20 },
      { "id": "node3", "label": "Azure Key Vault", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "Prompt Shields analyze the full prompt context (user input plus retrieved documents) for injection patterns. Blob Storage holds source documents; Key Vault holds secrets."
  },
  {
    "id": 105,
    "qid": "SC-500-MOD3-105",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that would allow end users to override a DLP block for high-confidence credit-card data in Copilot.",
    "scenario": "<div class=\"scenario-text\"><p>Microsoft Purview DLP policy rule targeting generative AI.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"ruleName\": \"Block-Financial-in-AI\"," },
      { "id": "l3", "label": "  \"conditions\": { \"sensitiveInfoTypes\": [\"Credit Card Number\"] }," },
      { "id": "l4", "label": "  \"actions\": [" },
      { "id": "l5", "label": "    { \"blockAccess\": true, \"overrideAllowed\": true }" },
      { "id": "l6", "label": "  ]" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "Setting overrideAllowed to true permits users to bypass the DLP block. For high-impact financial data the override should be disabled."
  },
  {
    "id": 106,
    "qid": "SC-500-MOD3-106",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "multiselect",
    "prompt": "Select THREE logging and monitoring controls that should be enabled for Azure OpenAI to support security investigations.",
    "scenario": "<div class=\"scenario-text\"><p>A SOC requires visibility into prompt activity, token consumption, and potential abuse.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Diagnostic settings with the RequestResponse category sent to Log Analytics" },
      { "id": "b", "text": "Azure Monitor alerts on anomalous token usage or error rates" },
      { "id": "c", "text": "Microsoft Defender for Cloud recommendations and alerts for Cognitive Services" },
      { "id": "d", "text": "Disabling all diagnostic logging to reduce cost" },
      { "id": "e", "text": "Storing full prompt and completion text in publicly accessible blob storage" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "RequestResponse logs, metric-based alerts, and Defender for Cloud together provide the telemetry and detection coverage required for security operations. Disabling diagnostics or storing sensitive prompts publicly creates gaps and exposure."
  },
  {
    "id": 107,
    "qid": "SC-500-MOD3-107",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "dragdrop",
    "prompt": "Match each mitigation technique to the layer of the AI application stack where it is most effectively applied.",
    "scenario": "<div class=\"scenario-text\"><p>Defense-in-depth design for a multi-tool Azure AI Foundry agent.</p></div>",
    "items": [
      { "id": "i1", "text": "Prompt Shields and core content filters" },
      { "id": "i2", "text": "System-message / metaprompt engineering" },
      { "id": "i3", "text": "Output grounding and policy validation" }
    ],
    "zones": [
      { "id": "z1", "label": "Pre-inference input evaluation" },
      { "id": "z2", "label": "Model behavioral boundary definition" },
      { "id": "z3", "label": "Post-generation validation" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Content Safety filters act before the model. System messages shape the model’s behavior. Grounding and policy checks validate the final output."
  },
  {
    "id": 108,
    "qid": "SC-500-MOD3-108",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "single",
    "prompt": "Which Purview solution continuously monitors for sensitive data being shared into generative AI tools and provides guided remediation recommendations?",
    "scenario": "<div class=\"scenario-text\"><p>A data security team needs ongoing visibility into AI-related oversharing across Microsoft 365 and Azure.</p></div>",
    "options": [
      { "id": "a", "text": "Data Security Posture Management (DSPM) for AI" },
      { "id": "b", "text": "Azure Advisor performance recommendations" },
      { "id": "c", "text": "Microsoft 365 usage analytics only" },
      { "id": "d", "text": "Endpoint analytics device scores" }
    ],
    "correct": ["a"],
    "explanation": "DSPM for AI (surfaced through Purview AI Hub) is specifically designed to detect and help remediate oversharing of sensitive data into AI applications."
  },
  {
    "id": 109,
    "qid": "SC-500-MOD3-109",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that forces traffic between an Azure App Service and Azure OpenAI to remain on the Microsoft private network.",
    "scenario": "<div class=\"scenario-text\"><p>Network isolation architecture for a web-based AI application.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Private Endpoint on Azure OpenAI + VNet Integration on App Service", "x": 30, "y": 40 },
      { "id": "node2", "label": "Public IP of the App Service", "x": 60, "y": 20 },
      { "id": "node3", "label": "Azure Front Door with public backend pool", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "Combining a Private Endpoint on the OpenAI resource with VNet integration on the App Service keeps all traffic private. Public IPs and Front Door with public backends introduce public paths."
  },
  {
    "id": 110,
    "qid": "SC-500-MOD3-110",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that configures an insufficiently strict threshold for the hate category.",
    "scenario": "<div class=\"scenario-text\"><p>Azure OpenAI content-filter configuration JSON.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"hate\": {" },
      { "id": "l3", "label": "    \"threshold\": \"low\"," },
      { "id": "l4", "label": "    \"outputEnabled\": true" },
      { "id": "l5", "label": "  }," },
      { "id": "l6", "label": "  \"self_harm\": { \"threshold\": \"medium\" }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "A threshold of “low” is the most permissive setting and will allow medium- and high-severity hate content. Enterprise baselines typically require at least “medium”."
  },
  {
    "id": 111,
    "qid": "SC-500-MOD3-111",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "multiselect",
    "prompt": "Select THREE Microsoft Purview capabilities that help prevent sensitive corporate data from being exposed through generative AI prompts.",
    "scenario": "<div class=\"scenario-text\"><p>An organization has observed employees pasting confidential financial models into both Copilot and consumer AI sites.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "DLP policies scoped to Microsoft 365 Copilot and selected browser destinations" },
      { "id": "b", "text": "Auto-labeling of high-value SharePoint and OneDrive libraries" },
      { "id": "c", "text": "Adaptive protection that elevates user risk when sensitive data is detected in AI interactions" },
      { "id": "d", "text": "Removing all sensitivity labels from the environment" },
      { "id": "e", "text": "Disabling audit logging for AI-related activities" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "DLP blocks or warns on sensitive prompts, auto-labeling ensures source content is classified, and adaptive protection enables risk-based response. Removing labels or disabling audit weakens the control plane."
  },
  {
    "id": 112,
    "qid": "SC-500-MOD3-112",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "dragdrop",
    "prompt": "Match each identity control to the risk it primarily mitigates for Azure OpenAI.",
    "scenario": "<div class=\"scenario-text\"><p>Zero-trust design workshop for generative AI services.</p></div>",
    "items": [
      { "id": "i1", "text": "Managed Identity + RBAC" },
      { "id": "i2", "text": "Conditional Access with MFA and device compliance" },
      { "id": "i3", "text": "Privileged Identity Management (PIM) for administrative roles" }
    ],
    "zones": [
      { "id": "z1", "label": "Eliminates long-lived API keys from application configuration" },
      { "id": "z2", "label": "Ensures only trusted users and devices can access the OpenAI Studio or API" },
      { "id": "z3", "label": "Reduces standing privileges for users who manage deployments and keys" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Managed identities remove static secrets. Conditional Access enforces strong authentication and device health. PIM limits persistent administrative access."
  },
  {
    "id": 113,
    "qid": "SC-500-MOD3-113",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "single",
    "prompt": "What is the primary purpose of groundedness detection in a Retrieval-Augmented Generation system?",
    "scenario": "<div class=\"scenario-text\"><p>A quality and safety team is evaluating post-processing options for an enterprise Q&A bot.</p></div>",
    "options": [
      { "id": "a", "text": "Verify that the generated answer is supported by the retrieved source documents" },
      { "id": "b", "text": "Encrypt the vector embeddings at rest with customer-managed keys" },
      { "id": "c", "text": "Automatically fine-tune the model on every new document" },
      { "id": "d", "text": "Replace the system prompt with the latest user prompt" }
    ],
    "correct": ["a"],
    "explanation": "Groundedness detection measures whether the model’s output can be traced back to the provided context, reducing unsupported hallucinations. It does not handle encryption, fine-tuning, or prompt replacement."
  },
  {
    "id": 114,
    "qid": "SC-500-MOD3-114",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that provides centralized visibility into AI usage, risk posture, and oversharing across the enterprise.",
    "scenario": "<div class=\"scenario-text\"><p>Microsoft Purview governance stack for generative AI.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Purview AI Hub", "x": 25, "y": 40 },
      { "id": "node2", "label": "Azure Cost Management", "x": 55, "y": 40 },
      { "id": "node3", "label": "Microsoft 365 Admin Center", "x": 80, "y": 40 }
    ],
    "correct": ["node1"],
    "explanation": "Purview AI Hub is the purpose-built experience for AI asset inventory, risk scoring, and DSPM recommendations. Cost Management and the M365 Admin Center do not provide this AI-specific posture view."
  },
  {
    "id": 115,
    "qid": "SC-500-MOD3-115",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the Bicep property that incorrectly leaves public network access enabled on the Azure OpenAI account.",
    "scenario": "<div class=\"scenario-text\"><p>Bicep template fragment for a production Azure OpenAI resource.</p></div>",
    "nodes": [
      { "id": "l1", "label": "resource aoai 'Microsoft.CognitiveServices/accounts@2023-05-01' = {" },
      { "id": "l2", "label": "  name: 'aoai-secure-prod'" },
      { "id": "l3", "label": "  properties: {" },
      { "id": "l4", "label": "    customSubDomainName: 'aoai-secure-prod'" },
      { "id": "l5", "label": "    publicNetworkAccess: 'Enabled'" },
      { "id": "l6", "label": "    networkAcls: { defaultAction: 'Deny' }" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "publicNetworkAccess must be set to ‘Disabled’ in addition to a Deny defaultAction. Leaving it Enabled still permits certain public access paths."
  },
  {
    "id": 116,
    "qid": "SC-500-MOD3-116",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "multiselect",
    "prompt": "Select THREE recommended layers of defense against prompt injection in a production Azure AI Foundry application.",
    "scenario": "<div class=\"scenario-text\"><p>Security architecture review for a multi-tool AI agent that uses RAG and external APIs.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Azure AI Content Safety Prompt Shields" },
      { "id": "b", "text": "Strict system-message design with explicit behavioral boundaries" },
      { "id": "c", "text": "Post-generation groundedness and citation validation" },
      { "id": "d", "text": "Disabling all safety filters to maximize model creativity" },
      { "id": "e", "text": "Embedding the full system prompt in every user-facing error message" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Prompt Shields provide automated detection, strong system messages set behavioral guardrails, and groundedness checks ensure answers remain faithful to source material. Disabling filters or leaking the system prompt increases risk."
  },
  {
    "id": 117,
    "qid": "SC-500-MOD3-117",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "dragdrop",
    "prompt": "Match each Purview control to the stage of the AI data lifecycle it primarily protects.",
    "scenario": "<div class=\"scenario-text\"><p>Data governance design for generative AI across Microsoft 365 and Azure.</p></div>",
    "items": [
      { "id": "i1", "text": "Sensitivity labels with auto-labeling" },
      { "id": "i2", "text": "DLP policies for Copilot and browser AI sites" },
      { "id": "i3", "text": "Retention labels and eDiscovery holds" }
    ],
    "zones": [
      { "id": "z1", "label": "Classification and protection of source and AI-generated content at rest" },
      { "id": "z2", "label": "Real-time inspection and blocking of sensitive data in prompts" },
      { "id": "z3", "label": "Long-term preservation and legal hold of AI interaction records" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Sensitivity labels classify and protect content. DLP acts at the moment of prompt submission. Retention and eDiscovery govern the lifecycle and discoverability of records."
  },
  {
    "id": 118,
    "qid": "SC-500-MOD3-118",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "single",
    "prompt": "Which authentication method eliminates the need to store Azure OpenAI API keys in application configuration when calling from Azure App Service?",
    "scenario": "<div class=\"scenario-text\"><p>A development team wants to remove long-lived secrets from their RAG application.</p></div>",
    "options": [
      { "id": "a", "text": "System-assigned or user-assigned managed identity with the Cognitive Services OpenAI User role" },
      { "id": "b", "text": "Shared access signature (SAS) tokens rotated every 24 hours" },
      { "id": "c", "text": "Hard-coded subscription key stored in environment variables" },
      { "id": "d", "text": "Anonymous access with IP allow-listing only" }
    ],
    "correct": ["a"],
    "explanation": "Managed identities allow the App Service to obtain Entra ID tokens that Azure OpenAI accepts when the identity is granted the appropriate RBAC role. This removes the need for any static API key."
  },
  {
    "id": 119,
    "qid": "SC-500-MOD3-119",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component responsible for performing real-time safety evaluations of prompts and completions against hate, self-harm, sexual, and violence categories.",
    "scenario": "<div class=\"scenario-text\"><p>High-level safety architecture for an enterprise chatbot.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Azure AI Content Safety Filters", "x": 25, "y": 40 },
      { "id": "node2", "label": "Azure AI Search Vector Index", "x": 55, "y": 40 },
      { "id": "node3", "label": "Azure App Service Frontend", "x": 80, "y": 40 }
    ],
    "correct": ["node1"],
    "explanation": "Azure AI Content Safety (integrated or standalone) evaluates both input and output against the four core harm categories. The vector index stores embeddings; the App Service hosts application logic."
  },
  {
    "id": 120,
    "qid": "SC-500-MOD3-120",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the incorrect DLP action that would permit high-confidence Social Security Numbers to be sent to an external LLM.",
    "scenario": "<div class=\"scenario-text\"><p>Microsoft Purview DLP rule targeting generative AI endpoints.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"name\": \"Block-SSN-in-AI\"," },
      { "id": "l3", "label": "  \"sensitiveInfoTypes\": [\"U.S. Social Security Number\"]," },
      { "id": "l4", "label": "  \"actions\": [" },
      { "id": "l5", "label": "    { \"type\": \"Allow\", \"notifyUser\": false }" },
      { "id": "l6", "label": "  ]" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "An action of type “Allow” with no notification permits the sensitive data to leave. The correct protective action is BlockAccess (or equivalent) for high-confidence SSN matches."
  },
  {
    "id": 121,
    "qid": "SC-500-MOD3-121",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "single",
    "prompt": "Which combination of settings fully isolates an Azure OpenAI account from the public internet?",
    "scenario": "<div class=\"scenario-text\"><p>A regulated enterprise requires that no traffic to or from Azure OpenAI ever traverses a public endpoint.</p></div>",
    "options": [
      { "id": "a", "text": "publicNetworkAccess set to Disabled and Private Endpoints configured" },
      { "id": "b", "text": "Network ACLs defaultAction Allow with no virtual network rules" },
      { "id": "c", "text": "Anonymous authentication enabled with IP allow-listing only" },
      { "id": "d", "text": "Public access enabled and service endpoints on selected subnets" }
    ],
    "correct": ["a"],
    "explanation": "Setting publicNetworkAccess to Disabled combined with Private Endpoints forces all traffic onto the Microsoft private backbone. Allowing public access or relying solely on IP allow-lists still exposes public endpoints."
  },
  {
    "id": 122,
    "qid": "SC-500-MOD3-122",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "multiselect",
    "prompt": "Select THREE controls that strengthen defense against both direct and indirect prompt injection in Azure AI Foundry applications.",
    "scenario": "<div class=\"scenario-text\"><p>A security team is hardening a multi-tool agent that retrieves documents and calls external APIs.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enable Azure AI Content Safety Prompt Shields on the endpoint" },
      { "id": "b", "text": "Design a strict system message that defines immutable behavioral boundaries" },
      { "id": "c", "text": "Apply groundedness detection to verify answers against retrieved sources" },
      { "id": "d", "text": "Disable all content filters to improve response latency" },
      { "id": "e", "text": "Expose the full system prompt in client-side error messages" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Prompt Shields detect injection patterns, a well-crafted system message sets hard behavioral limits, and groundedness checks prevent the model from following unsupported instructions. Disabling filters or leaking the system prompt increases risk."
  },
  {
    "id": 123,
    "qid": "SC-500-MOD3-123",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "dragdrop",
    "prompt": "Match each Microsoft Purview DSPM for AI capability to its primary function.",
    "scenario": "<div class=\"scenario-text\"><p>A CISO is implementing governance for generative AI across Microsoft 365 and Azure.</p></div>",
    "items": [
      { "id": "i1", "text": "Purview AI Hub" },
      { "id": "i2", "text": "Sensitivity labels with auto-labeling" },
      { "id": "i3", "text": "DLP policies for Copilot and browser AI sites" }
    ],
    "zones": [
      { "id": "z1", "label": "Centralized inventory, risk scoring, and oversharing insights for AI workloads" },
      { "id": "z2", "label": "Classification and protection of source and AI-generated content" },
      { "id": "z3", "label": "Real-time prevention of sensitive data leaving via prompts" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "AI Hub provides the consolidated posture view. Sensitivity labels classify and protect content. DLP policies act at the moment of interaction to block sensitive data exfiltration."
  },
  {
    "id": 124,
    "qid": "SC-500-MOD3-124",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that enables private connectivity between an Azure App Service and Azure OpenAI.",
    "scenario": "<div class=\"scenario-text\"><p>Enterprise RAG architecture requiring network isolation.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Private Endpoint on Azure OpenAI + VNet Integration", "x": 30, "y": 40 },
      { "id": "node2", "label": "Public IP of App Service", "x": 60, "y": 20 },
      { "id": "node3", "label": "Azure Front Door with public backend", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "A Private Endpoint on the OpenAI resource combined with VNet integration on the App Service keeps all traffic on the Microsoft private network. Public IPs and Front Door with public backends introduce public paths."
  },
  {
    "id": 125,
    "qid": "SC-500-MOD3-125",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that disables output filtering for the self-harm category.",
    "scenario": "<div class=\"scenario-text\"><p>Azure OpenAI content-filter policy JSON.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"output\": {" },
      { "id": "l3", "label": "    \"hate\": { \"threshold\": \"medium\" }," },
      { "id": "l4", "label": "    \"self_harm\": { \"enabled\": false }," },
      { "id": "l5", "label": "    \"violence\": { \"threshold\": \"medium\" }" },
      { "id": "l6", "label": "  }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l4"],
    "selectCount": 1,
    "explanation": "Setting “enabled”: false for self_harm turns off filtering of self-harm content in model completions. All four core categories should remain enabled in production policies."
  },
  {
    "id": 126,
    "qid": "SC-500-MOD3-126",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "multiselect",
    "prompt": "Select THREE actions that Microsoft Purview DSPM for AI can perform to improve an organization’s AI data security posture.",
    "scenario": "<div class=\"scenario-text\"><p>A governance team has enabled DSPM for AI and wants to understand its native capabilities.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Discover AI applications and the sensitive data they access" },
      { "id": "b", "text": "Surface oversharing recommendations for documents used in prompts" },
      { "id": "c", "text": "Recommend and help deploy sensitivity labels and DLP policies tailored to AI" },
      { "id": "d", "text": "Automatically retrain foundation models on customer data" },
      { "id": "e", "text": "Replace Azure OpenAI content filters with custom models" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "DSPM for AI discovers AI assets, identifies oversharing, and guides deployment of appropriate labels and DLP. It does not retrain models or replace built-in content filters."
  },
  {
    "id": 127,
    "qid": "SC-500-MOD3-127",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "dragdrop",
    "prompt": "Match each Azure OpenAI network isolation option to its correct description.",
    "scenario": "<div class=\"scenario-text\"><p>A cloud architect is selecting the appropriate network configuration for a new Azure OpenAI deployment.</p></div>",
    "items": [
      { "id": "i1", "text": "Private Endpoint" },
      { "id": "i2", "text": "Managed Virtual Network (VNet injection)" },
      { "id": "i3", "text": "Service Endpoint" }
    ],
    "zones": [
      { "id": "z1", "label": "Exposes the OpenAI resource on a private IP inside the customer’s own VNet" },
      { "id": "z2", "label": "Places the Cognitive Services account inside a Microsoft-managed VNet that can be peered" },
      { "id": "z3", "label": "Allows traffic from a customer VNet to the service over the Microsoft backbone without a private IP" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Private Endpoints give the resource a private IP in the customer’s VNet. Managed Virtual Networks host the service in a Microsoft-owned network. Service Endpoints secure traffic without assigning a private IP to the service itself."
  },
  {
    "id": 128,
    "qid": "SC-500-MOD3-128",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "single",
    "prompt": "What is the primary purpose of Azure AI Content Safety’s Prompt Shields capability?",
    "scenario": "<div class=\"scenario-text\"><p>A security engineer is evaluating built-in protections available on Azure OpenAI and Azure AI Foundry endpoints.</p></div>",
    "options": [
      { "id": "a", "text": "Detect and block direct and indirect prompt injection attempts" },
      { "id": "b", "text": "Encrypt model weights at rest with customer-managed keys" },
      { "id": "c", "text": "Automatically redact all PII from completions" },
      { "id": "d", "text": "Enforce network isolation via private endpoints" }
    ],
    "correct": ["a"],
    "explanation": "Prompt Shields specifically analyze user prompts and retrieved documents for injection patterns that attempt to override system instructions. Encryption, PII redaction, and network isolation are provided by other features."
  },
  {
    "id": 129,
    "qid": "SC-500-MOD3-129",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that provides a unified risk score and inventory specifically for generative AI applications.",
    "scenario": "<div class=\"scenario-text\"><p>Microsoft Purview portal focused on generative-AI governance.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Purview AI Hub (DSPM for AI)", "x": 25, "y": 40 },
      { "id": "node2", "label": "Azure Cost Management", "x": 55, "y": 40 },
      { "id": "node3", "label": "Microsoft 365 Admin Center", "x": 80, "y": 40 }
    ],
    "correct": ["node1"],
    "explanation": "Purview AI Hub is the purpose-built experience for AI asset inventory, risk scoring, and DSPM recommendations. Cost Management and the M365 Admin Center do not provide this AI-specific posture view."
  },
  {
    "id": 130,
    "qid": "SC-500-MOD3-130",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the property that must be changed from “Enabled” to “Disabled” to enforce private-only access.",
    "scenario": "<div class=\"scenario-text\"><p>Bicep template fragment for an Azure OpenAI account.</p></div>",
    "nodes": [
      { "id": "l1", "label": "resource aoai 'Microsoft.CognitiveServices/accounts@2023-05-01' = {" },
      { "id": "l2", "label": "  name: 'aoai-secure'" },
      { "id": "l3", "label": "  properties: {" },
      { "id": "l4", "label": "    customSubDomainName: 'aoai-secure'" },
      { "id": "l5", "label": "    publicNetworkAccess: 'Enabled'" },
      { "id": "l6", "label": "    networkAcls: { defaultAction: 'Deny' }" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "publicNetworkAccess must be set to ‘Disabled’ in addition to a Deny defaultAction. Leaving it Enabled still permits certain public access paths."
  },
  {
    "id": 131,
    "qid": "SC-500-MOD3-131",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "multiselect",
    "prompt": "Select THREE techniques that reduce the success rate of indirect prompt injection via RAG documents.",
    "scenario": "<div class=\"scenario-text\"><p>A RAG pipeline ingests both trusted internal documents and external web content.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Sanitize and strip instructional language from retrieved documents before prompt assembly" },
      { "id": "b", "text": "Apply Azure AI Content Safety Prompt Shields on both user input and retrieved context" },
      { "id": "c", "text": "Enforce strict grounding checks that reject answers not supported by the source documents" },
      { "id": "d", "text": "Increase the temperature of the model to encourage more creative answers" },
      { "id": "e", "text": "Disable all system messages to simplify the prompt" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Document sanitization removes hidden instructions, Prompt Shields detect injection patterns in context, and grounding checks ensure the model cannot follow unsupported instructions. Higher temperature and missing system messages increase risk."
  },
  {
    "id": 132,
    "qid": "SC-500-MOD3-132",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "dragdrop",
    "prompt": "Match each vector-store security control to the threat it primarily mitigates.",
    "scenario": "<div class=\"scenario-text\"><p>Security design for an Azure AI Search index holding embeddings of confidential legal documents.</p></div>",
    "items": [
      { "id": "i1", "text": "Customer-managed keys (CMK)" },
      { "id": "i2", "text": "Private endpoints and disabled public access" },
      { "id": "i3", "text": "Query-time security filters / document-level ACLs" }
    ],
    "zones": [
      { "id": "z1", "label": "Unauthorized decryption of embeddings at rest" },
      { "id": "z2", "label": "Network-level unauthorized access to the search service" },
      { "id": "z3", "label": "A user retrieving embeddings they are not entitled to see" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "CMK protects confidentiality at rest. Private endpoints protect the network boundary. Security trimming enforces least-privilege retrieval."
  },
  {
    "id": 133,
    "qid": "SC-500-MOD3-133",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "single",
    "prompt": "When using Azure OpenAI with a managed identity from an Azure App Service, which authentication method eliminates the need to store API keys?",
    "scenario": "<div class=\"scenario-text\"><p>A development team wants to remove long-lived secrets from their RAG application’s configuration.</p></div>",
    "options": [
      { "id": "a", "text": "System-assigned or user-assigned managed identity with Cognitive Services OpenAI User role" },
      { "id": "b", "text": "Shared access signature (SAS) tokens rotated every 24 hours" },
      { "id": "c", "text": "Hard-coded subscription key in environment variables" },
      { "id": "d", "text": "Anonymous access with IP allow-listing only" }
    ],
    "correct": ["a"],
    "explanation": "Managed identities allow the App Service to obtain Entra ID tokens that Azure OpenAI accepts when the identity is granted the appropriate RBAC role. This removes the need for any static API key."
  },
  {
    "id": 134,
    "qid": "SC-500-MOD3-134",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that should sanitize retrieved documents before they are inserted into the LLM prompt.",
    "scenario": "<div class=\"scenario-text\"><p>Secure RAG pipeline architecture.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Document Sanitization / Instruction-Stripping Layer", "x": 30, "y": 40 },
      { "id": "node2", "label": "Azure Cosmos DB Vector Store", "x": 60, "y": 20 },
      { "id": "node3", "label": "Azure Monitor", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "A dedicated sanitization step removes or neutralizes instructional language from retrieved documents, reducing the effectiveness of indirect prompt injection. The vector store holds embeddings; Azure Monitor provides observability."
  },
  {
    "id": 135,
    "qid": "SC-500-MOD3-135",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the incorrect setting that would allow a user to override a DLP block when pasting credit-card data into Copilot.",
    "scenario": "<div class=\"scenario-text\"><p>Purview DLP policy rule JSON for Microsoft 365 Copilot.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"name\": \"Block-CC-in-Copilot\"," },
      { "id": "l3", "label": "  \"conditions\": { \"sensitiveInfoTypes\": [\"Credit Card Number\"] }," },
      { "id": "l4", "label": "  \"actions\": [" },
      { "id": "l5", "label": "    { \"blockAccess\": true, \"overrideAllowed\": true }" },
      { "id": "l6", "label": "  ]" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "Setting overrideAllowed to true permits the end user to bypass the DLP block. For high-impact financial data the override should be false."
  },
  {
    "id": 136,
    "qid": "SC-500-MOD3-136",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "multiselect",
    "prompt": "Select THREE identity and access controls that should be applied to Azure OpenAI deployments in an enterprise zero-trust environment.",
    "scenario": "<div class=\"scenario-text\"><p>A zero-trust architecture requires least-privilege access to every Azure OpenAI resource.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Assign Azure RBAC roles (Cognitive Services OpenAI User / Contributor) only to necessary principals" },
      { "id": "b", "text": "Require Microsoft Entra ID authentication; prefer managed identities over API keys" },
      { "id": "c", "text": "Apply Conditional Access policies that require compliant devices and MFA" },
      { "id": "d", "text": "Share a single admin API key across all development teams" },
      { "id": "e", "text": "Grant the Owner role at the subscription level to every data scientist" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Fine-grained RBAC, Entra ID authentication with managed identities, and Conditional Access together implement least privilege and continuous verification. Shared keys and over-privileged Owner assignments violate zero-trust principles."
  },
  {
    "id": 137,
    "qid": "SC-500-MOD3-137",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "dragdrop",
    "prompt": "Match each data-poisoning or model-extraction risk to the most effective mitigation.",
    "scenario": "<div class=\"scenario-text\"><p>A threat-modeling exercise for a custom fine-tuned model hosted on Azure AI Foundry.</p></div>",
    "items": [
      { "id": "i1", "text": "Training-data provenance and integrity checks" },
      { "id": "i2", "text": "Rate limiting and anomaly detection on inference endpoints" },
      { "id": "i3", "text": "Differential privacy / noise injection during fine-tuning" }
    ],
    "zones": [
      { "id": "z1", "label": "Prevent malicious samples from corrupting the fine-tuned model" },
      { "id": "z2", "label": "Detect and throttle model-extraction / membership-inference attacks" },
      { "id": "z3", "label": "Limit leakage of individual training examples in model outputs" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Provenance controls stop poisoned data from entering the training pipeline. Rate limiting and behavioral analytics raise the cost of extraction attacks. Differential privacy reduces the risk that any single training record can be recovered from the model."
  },
  {
    "id": 138,
    "qid": "SC-500-MOD3-138",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "single",
    "prompt": "Which Microsoft Purview feature provides a dedicated dashboard that surfaces oversharing risks, sensitive data usage, and AI application inventory for generative AI workloads?",
    "scenario": "<div class=\"scenario-text\"><p>The CISO requires a single pane of glass focused exclusively on AI-related data security posture.</p></div>",
    "options": [
      { "id": "a", "text": "Microsoft Purview AI Hub (DSPM for AI)" },
      { "id": "b", "text": "Microsoft 365 Compliance Score" },
      { "id": "c", "text": "Azure Security Center Recommendations" },
      { "id": "d", "text": "Microsoft Defender for Endpoint Device Inventory" }
    ],
    "correct": ["a"],
    "explanation": "Purview AI Hub (part of DSPM for AI) is purpose-built to inventory AI apps, surface oversharing of sensitive data into prompts, and recommend AI-specific controls. The other dashboards are broader or endpoint-centric."
  },
  {
    "id": 139,
    "qid": "SC-500-MOD3-139",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the identity component that an Azure Function should use to authenticate to Azure OpenAI without storing secrets.",
    "scenario": "<div class=\"scenario-text\"><p>Serverless RAG architecture diagram.</p></div>",
    "nodes": [
      { "id": "node1", "label": "System-assigned or User-assigned Managed Identity", "x": 30, "y": 40 },
      { "id": "node2", "label": "Connection String with Account Key", "x": 60, "y": 20 },
      { "id": "node3", "label": "Hard-coded Subscription Key", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "Managed identities allow the Azure Function to obtain Entra ID tokens that Azure OpenAI accepts when the appropriate RBAC role is assigned. Connection strings and hard-coded keys introduce secret-management risk."
  },
  {
    "id": 140,
    "qid": "SC-500-MOD3-140",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that sets the jailbreak filter to an ineffective value.",
    "scenario": "<div class=\"scenario-text\"><p>Content filter policy payload for Azure OpenAI.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"userPromptFilter\": {" },
      { "id": "l3", "label": "    \"hate\": { \"threshold\": \"medium\" }," },
      { "id": "l4", "label": "    \"jailbreak\": false," },
      { "id": "l5", "label": "    \"self_harm\": { \"threshold\": \"medium\" }" },
      { "id": "l6", "label": "  }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l4"],
    "selectCount": 1,
    "explanation": "Explicitly setting jailbreak to false disables Prompt Shields / jailbreak detection, leaving the application exposed to injection attacks."
  },
  {
    "id": 141,
    "qid": "SC-500-MOD3-141",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "multiselect",
    "prompt": "Select THREE best practices for securing the vector database that stores embeddings of corporate documents used by a RAG system.",
    "scenario": "<div class=\"scenario-text\"><p>An architecture review of an Azure AI Search index containing embeddings of confidential product roadmaps.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enable private endpoints and disable public network access" },
      { "id": "b", "text": "Encrypt the index with customer-managed keys" },
      { "id": "c", "text": "Implement security trimming or document-level access control on queries" },
      { "id": "d", "text": "Expose the search endpoint on the public internet with only an API key" },
      { "id": "e", "text": "Store the raw unencrypted source documents alongside the vectors in the same index" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Network isolation, CMK encryption, and query-time authorization are the three foundational controls for a sensitive vector store. Public exposure and co-storage of plaintext source documents increase risk."
  },
  {
    "id": 142,
    "qid": "SC-500-MOD3-142",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "dragdrop",
    "prompt": "Match each Microsoft 365 Copilot security control to the risk it primarily addresses.",
    "scenario": "<div class=\"scenario-text\"><p>An information-protection team is hardening Microsoft 365 Copilot for a regulated enterprise.</p></div>",
    "items": [
      { "id": "i1", "text": "Sensitivity labels with encryption" },
      { "id": "i2", "text": "DLP policies for Copilot" },
      { "id": "i3", "text": "Copilot Graph API permission scoping" }
    ],
    "zones": [
      { "id": "z1", "label": "Prevent unauthorized users from reading AI-generated or source content" },
      { "id": "z2", "label": "Stop sensitive data from being included in prompts or responses" },
      { "id": "z3", "label": "Limit the Microsoft Graph data that Copilot can retrieve on behalf of a user" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Sensitivity labels (especially with encryption) control who can open content. DLP policies inspect and block sensitive information in the Copilot interaction path. Graph permission scoping reduces the blast radius of what Copilot can see."
  },
  {
    "id": 143,
    "qid": "SC-500-MOD3-143",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "single",
    "prompt": "An attacker crafts a document that, when retrieved by a RAG system, contains hidden instructions that cause the model to ignore its system prompt. What type of attack is this?",
    "scenario": "<div class=\"scenario-text\"><p>Security researchers are analyzing an incident involving a compromised knowledge base.</p></div>",
    "options": [
      { "id": "a", "text": "Indirect prompt injection" },
      { "id": "b", "text": "Model extraction attack" },
      { "id": "c", "text": "Training-data poisoning" },
      { "id": "d", "text": "Membership inference attack" }
    ],
    "correct": ["a"],
    "explanation": "Indirect prompt injection occurs when malicious instructions are embedded in data that the model later retrieves (for example, a web page or document). Model extraction, training-data poisoning, and membership inference are different classes of attack."
  },
  {
    "id": 144,
    "qid": "SC-500-MOD3-144",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component responsible for applying sensitivity labels to content generated by Microsoft 365 Copilot.",
    "scenario": "<div class=\"scenario-text\"><p>Microsoft Purview information-protection flow for AI-generated content.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Auto-labeling / Sensitivity Label Policies", "x": 25, "y": 45 },
      { "id": "node2", "label": "Azure AI Content Safety", "x": 55, "y": 45 },
      { "id": "node3", "label": "Microsoft Defender for Cloud Apps", "x": 80, "y": 45 }
    ],
    "correct": ["node1"],
    "explanation": "Sensitivity label policies (including auto-labeling) are the Purview mechanism that classifies and optionally encrypts content, including content produced by Copilot. Content Safety focuses on harmful content; Defender for Cloud Apps provides CASB visibility."
  },
  {
    "id": 145,
    "qid": "SC-500-MOD3-145",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the Bicep property that incorrectly allows public network access to the Azure OpenAI account.",
    "scenario": "<div class=\"scenario-text\"><p>Review the following Bicep snippet used to deploy an Azure OpenAI resource.</p></div>",
    "nodes": [
      { "id": "l1", "label": "resource openAI 'Microsoft.CognitiveServices/accounts@2023-05-01' = {" },
      { "id": "l2", "label": "  name: 'aoai-prod-eus'" },
      { "id": "l3", "label": "  location: 'eastus'" },
      { "id": "l4", "label": "  properties: {" },
      { "id": "l5", "label": "    publicNetworkAccess: 'Enabled'" },
      { "id": "l6", "label": "    customSubDomainName: 'aoai-prod-eus'" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "Setting publicNetworkAccess to 'Enabled' explicitly permits traffic from the public internet. For regulated workloads this value must be 'Disabled' and private endpoints must be used."
  },
  {
    "id": 146,
    "qid": "SC-500-MOD3-146",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "multiselect",
    "prompt": "Select THREE recommended controls when deploying Azure OpenAI Service into a regulated environment that requires private connectivity and customer-managed keys.",
    "scenario": "<div class=\"scenario-text\"><p>A financial institution is provisioning a new Azure OpenAI resource that must never traverse the public internet and must use customer-controlled encryption keys.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enable Managed Virtual Network / Private Endpoints" },
      { "id": "b", "text": "Configure customer-managed keys (CMK) via Azure Key Vault" },
      { "id": "c", "text": "Restrict public network access and allow only selected virtual networks" },
      { "id": "d", "text": "Enable anonymous authentication on the deployment" },
      { "id": "e", "text": "Disable all content filters to improve latency" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Managed VNet/Private Endpoints and the “Disable public network access” setting together enforce private connectivity. CMK ensures encryption keys remain under customer control. Anonymous auth and disabled content filters violate security baselines."
  },
  {
    "id": 147,
    "qid": "SC-500-MOD3-147",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "dragdrop",
    "prompt": "Match each Purview control to the stage of the AI data lifecycle it primarily protects.",
    "scenario": "<div class=\"scenario-text\"><p>Data governance design for generative AI across Microsoft 365 and Azure.</p></div>",
    "items": [
      { "id": "i1", "text": "Sensitivity labels with auto-labeling" },
      { "id": "i2", "text": "DLP policies for Copilot and browser AI sites" },
      { "id": "i3", "text": "Retention labels and eDiscovery holds" }
    ],
    "zones": [
      { "id": "z1", "label": "Classification and protection of source and AI-generated content at rest" },
      { "id": "z2", "label": "Real-time inspection and blocking of sensitive data in prompts" },
      { "id": "z3", "label": "Long-term preservation and legal hold of AI interaction records" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Sensitivity labels classify and protect content. DLP acts at the moment of prompt submission. Retention and eDiscovery govern the lifecycle and discoverability of records."
  },
  {
    "id": 148,
    "qid": "SC-500-MOD3-148",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "single",
    "prompt": "What is the principal advantage of using a user-assigned managed identity for an Azure App Service that calls Azure OpenAI?",
    "scenario": "<div class=\"scenario-text\"><p>A platform team wants to eliminate long-lived secrets while supporting multiple environments and shared identities.</p></div>",
    "options": [
      { "id": "a", "text": "The identity can be granted precise RBAC roles and reused across resources without embedding API keys" },
      { "id": "b", "text": "It automatically disables content safety filters" },
      { "id": "c", "text": "It grants the application Owner rights on the subscription" },
      { "id": "d", "text": "It forces all traffic over public endpoints for lower latency" }
    ],
    "correct": ["a"],
    "explanation": "User-assigned managed identities are independent Azure resources that can be shared and assigned least-privilege RBAC roles, removing the need for static API keys. They do not alter safety filters, grant excessive permissions, or force public routing."
  },
  {
    "id": 149,
    "qid": "SC-500-MOD3-149",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that performs real-time evaluation of prompts and completions against hate, self-harm, sexual, and violence categories.",
    "scenario": "<div class=\"scenario-text\"><p>High-level safety architecture for an enterprise chatbot.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Azure AI Content Safety Filters", "x": 25, "y": 40 },
      { "id": "node2", "label": "Azure AI Search Vector Index", "x": 55, "y": 40 },
      { "id": "node3", "label": "Azure App Service", "x": 80, "y": 40 }
    ],
    "correct": ["node1"],
    "explanation": "Azure AI Content Safety (integrated or standalone) evaluates both input and output against the four core harm categories. The vector index stores embeddings; the App Service hosts the application logic."
  },
  {
    "id": 150,
    "qid": "SC-500-MOD3-150",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly configures the sensitivity label policy to allow external sharing of AI-generated content labeled Highly Confidential.",
    "scenario": "<div class=\"scenario-text\"><p>Excerpt from a Microsoft Purview sensitivity label policy definition.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"name\": \"AI-Generated-HighlyConfidential\"," },
      { "id": "l3", "label": "  \"encryption\": { \"enabled\": true }," },
      { "id": "l4", "label": "  \"contentMarking\": { \"header\": true }," },
      { "id": "l5", "label": "  \"externalSharing\": \"Allow\"," },
      { "id": "l6", "label": "  \"autoLabeling\": { \"enabled\": true }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "Setting externalSharing to “Allow” on a Highly Confidential label defeats the purpose of the classification. The correct setting is typically “Block” or restricted to specific trusted domains."
  },
  {
    "id": 151,
    "qid": "SC-500-MOD3-151",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "multiselect",
    "prompt": "Select THREE logging destinations or signals that should be enabled for Azure OpenAI to support security monitoring and incident response.",
    "scenario": "<div class=\"scenario-text\"><p>A SOC requires visibility into prompt activity, token usage, and potential abuse.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Diagnostic settings with RequestResponse category sent to Log Analytics" },
      { "id": "b", "text": "Azure Monitor metrics and alerts on unusual token consumption" },
      { "id": "c", "text": "Microsoft Defender for Cloud alerts for Cognitive Services" },
      { "id": "d", "text": "Disabling all diagnostics to reduce storage costs" },
      { "id": "e", "text": "Storing full prompt and completion text in public blob storage without encryption" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "RequestResponse logs, metric-based alerts, and Defender for Cloud together provide the telemetry and detection coverage needed for security operations. Disabling diagnostics or storing sensitive prompts in public storage creates gaps and exposure."
  },
  {
    "id": 152,
    "qid": "SC-500-MOD3-152",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "dragdrop",
    "prompt": "Match each Azure AI Content Safety category to the type of harmful content it is designed to detect.",
    "scenario": "<div class=\"scenario-text\"><p>Configuration of a strict content-filter policy for a public-facing chatbot.</p></div>",
    "items": [
      { "id": "i1", "text": "Hate" },
      { "id": "i2", "text": "Self-harm" },
      { "id": "i3", "text": "Jailbreak / Prompt injection" }
    ],
    "zones": [
      { "id": "z1", "label": "Content that expresses discrimination or hostility toward protected groups" },
      { "id": "z2", "label": "Content that encourages or describes self-injury or suicide" },
      { "id": "z3", "label": "Attempts to override system instructions or extract the system prompt" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "The four core Azure AI Content Safety categories (hate, self-harm, sexual, violence) plus the specialized Prompt Shields / jailbreak detector map directly to these risk types."
  },
  {
    "id": 153,
    "qid": "SC-500-MOD3-153",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "single",
    "prompt": "Which feature allows an organization to automatically apply a sensitivity label to a Word document that was generated by Microsoft 365 Copilot when the source content itself was labeled?",
    "scenario": "<div class=\"scenario-text\"><p>Information-protection architects need inheritance of labels from source material into AI-generated artifacts.</p></div>",
    "options": [
      { "id": "a", "text": "Sensitivity label inheritance / auto-labeling policies for Copilot-generated content" },
      { "id": "b", "text": "Azure Policy initiative for Cognitive Services" },
      { "id": "c", "text": "Microsoft Defender for Endpoint attack-surface reduction rules" },
      { "id": "d", "text": "Conditional Access session controls only" }
    ],
    "correct": ["a"],
    "explanation": "Purview sensitivity-label policies can be configured so that content generated by Copilot inherits the highest classification of the source material used in the prompt, ensuring continuous protection."
  },
  {
    "id": 154,
    "qid": "SC-500-MOD3-154",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that enforces private connectivity between an Azure Kubernetes Service workload and Azure OpenAI.",
    "scenario": "<div class=\"scenario-text\"><p>Containerized RAG application network diagram.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Private Endpoint + Private DNS Zone", "x": 30, "y": 40 },
      { "id": "node2", "label": "Public Load Balancer", "x": 60, "y": 20 },
      { "id": "node3", "label": "Azure Front Door with public backend", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "A Private Endpoint combined with a Private DNS Zone allows pods in AKS (via VNet integration or private cluster) to resolve and reach the OpenAI resource on a private IP. Public load balancers and Front Door introduce public paths."
  },
  {
    "id": 155,
    "qid": "SC-500-MOD3-155",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that configures an insufficient severity threshold for the hate category.",
    "scenario": "<div class=\"scenario-text\"><p>Azure OpenAI content-filter configuration JSON.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"hate\": {" },
      { "id": "l3", "label": "    \"threshold\": \"low\"," },
      { "id": "l4", "label": "    \"outputEnabled\": true" },
      { "id": "l5", "label": "  }," },
      { "id": "l6", "label": "  \"self_harm\": { \"threshold\": \"medium\" }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "A threshold of “low” is the most permissive setting and will allow medium- and high-severity hate content. Enterprise baselines typically require at least “medium”."
  },
  {
    "id": 156,
    "qid": "SC-500-MOD3-156",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "multiselect",
    "prompt": "Select THREE Microsoft Purview features that help prevent sensitive data from being exposed through generative AI tools.",
    "scenario": "<div class=\"scenario-text\"><p>An organization has seen confidential financial models pasted into both Copilot and consumer AI sites.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "DLP policies scoped to Microsoft 365 Copilot and selected browser destinations" },
      { "id": "b", "text": "Auto-labeling of high-value SharePoint and OneDrive content" },
      { "id": "c", "text": "Adaptive protection that elevates user risk when sensitive data is detected in AI interactions" },
      { "id": "d", "text": "Removing all sensitivity labels from the environment" },
      { "id": "e", "text": "Disabling audit logging for AI-related activities" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "DLP blocks or warns on sensitive prompts, auto-labeling ensures source content is classified, and adaptive protection enables risk-based response. Removing labels or disabling audit weakens the control plane."
  },
  {
    "id": 157,
    "qid": "SC-500-MOD3-157",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "dragdrop",
    "prompt": "Match each Azure OpenAI isolation model to the scenario it best serves.",
    "scenario": "<div class=\"scenario-text\"><p>Platform team deciding how to host generative AI workloads for multiple business units.</p></div>",
    "items": [
      { "id": "i1", "text": "Dedicated Azure OpenAI account per business unit" },
      { "id": "i2", "text": "Shared account with separate deployments and strict RBAC" },
      { "id": "i3", "text": "Provisioned Throughput Units (PTU)" }
    ],
    "zones": [
      { "id": "z1", "label": "Strongest administrative, network, and key isolation" },
      { "id": "z2", "label": "Cost-efficient multi-tenancy with logical isolation" },
      { "id": "z3", "label": "Guaranteed capacity and performance isolation" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Separate accounts provide the strongest isolation boundaries. Shared accounts with RBAC offer efficient logical separation. PTU guarantees throughput isolation regardless of other consumption on the platform."
  },
  {
    "id": 158,
    "qid": "SC-500-MOD3-158",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "single",
    "prompt": "What is the primary purpose of groundedness detection in a RAG system?",
    "scenario": "<div class=\"scenario-text\"><p>A quality and safety team is evaluating post-processing options for an enterprise Q&A bot.</p></div>",
    "options": [
      { "id": "a", "text": "Verify that the generated answer is supported by the retrieved source documents" },
      { "id": "b", "text": "Encrypt the vector embeddings at rest" },
      { "id": "c", "text": "Automatically fine-tune the model on every new document" },
      { "id": "d", "text": "Replace the system prompt with the user prompt" }
    ],
    "correct": ["a"],
    "explanation": "Groundedness detection measures whether the model’s output can be traced back to the provided context, reducing unsupported hallucinations. It does not handle encryption, fine-tuning, or prompt replacement."
  },
  {
    "id": 159,
    "qid": "SC-500-MOD3-159",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the Microsoft Purview component that surfaces AI-specific oversharing risks and recommended remediation actions.",
    "scenario": "<div class=\"scenario-text\"><p>Microsoft Purview portal navigation for generative-AI governance.</p></div>",
    "nodes": [
      { "id": "node1", "label": "AI Hub", "x": 25, "y": 40 },
      { "id": "node2", "label": "Content Explorer", "x": 55, "y": 40 },
      { "id": "node3", "label": "Audit Search", "x": 80, "y": 40 }
    ],
    "correct": ["node1"],
    "explanation": "Purview AI Hub is the dedicated DSPM-for-AI experience that highlights oversharing of sensitive data into AI tools and provides guided recommendations. Content Explorer and Audit Search are more general-purpose."
  },
  {
    "id": 160,
    "qid": "SC-500-MOD3-160",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the role definition ID that represents the overly permissive Owner role being assigned to a developer group.",
    "scenario": "<div class=\"scenario-text\"><p>Azure RBAC role-assignment snippet for an Azure OpenAI resource.</p></div>",
    "nodes": [
      { "id": "l1", "label": "resource ra 'Microsoft.Authorization/roleAssignments@2022-04-01' = {" },
      { "id": "l2", "label": "  name: guid(aoai.id, devGroup.id, 'Owner')" },
      { "id": "l3", "label": "  scope: aoai" },
      { "id": "l4", "label": "  properties: {" },
      { "id": "l5", "label": "    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '8e3af657-a8ff-443c-a75c-2fe8c4bcb635')" },
      { "id": "l6", "label": "    principalId: devGroup.id" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "The GUID 8e3af657-a8ff-443c-a75c-2fe8c4bcb635 is the well-known ID for the Owner role. Developers should receive Cognitive Services OpenAI User or Contributor, not Owner."
  },
  {
    "id": 161,
    "qid": "SC-500-MOD3-161",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "single",
    "prompt": "Which Azure AI Content Safety capability is specifically designed to detect attempts to override system instructions through either user prompts or retrieved documents?",
    "scenario": "<div class=\"scenario-text\"><p>A security engineer is selecting the appropriate safety control for a production RAG application on Azure AI Foundry.</p></div>",
    "options": [
      { "id": "a", "text": "Prompt Shields" },
      { "id": "b", "text": "Groundedness detection only" },
      { "id": "c", "text": "PII redaction" },
      { "id": "d", "text": "Protected material detection" }
    ],
    "correct": ["a"],
    "explanation": "Prompt Shields are purpose-built to identify both direct and indirect prompt injection. Groundedness checks verify source support, PII redaction focuses on sensitive data leakage, and protected material detection identifies copyrighted content."
  },
  {
    "id": 162,
    "qid": "SC-500-MOD3-162",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "multiselect",
    "prompt": "Select THREE Microsoft Purview controls that help govern data used by and generated from Microsoft 365 Copilot.",
    "scenario": "<div class=\"scenario-text\"><p>An information protection team is implementing controls for Copilot across a multinational enterprise.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Sensitivity labels with auto-labeling and inheritance for Copilot-generated content" },
      { "id": "b", "text": "DLP policies that inspect prompts and responses for sensitive information types" },
      { "id": "c", "text": "Purview AI Hub risk insights and oversharing recommendations" },
      { "id": "d", "text": "Disabling all retention policies on SharePoint sites used by Copilot" },
      { "id": "e", "text": "Granting global admin rights to every Copilot user" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Sensitivity labels classify and protect content, DLP policies block or warn on sensitive data in AI interactions, and AI Hub surfaces risk posture. Removing retention or over-privileging users weakens governance."
  },
  {
    "id": 163,
    "qid": "SC-500-MOD3-163",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "dragdrop",
    "prompt": "Match each Azure OpenAI network security control to its primary function.",
    "scenario": "<div class=\"scenario-text\"><p>A cloud security architect is designing network isolation for multiple Azure OpenAI deployments.</p></div>",
    "items": [
      { "id": "i1", "text": "Private Endpoint" },
      { "id": "i2", "text": "Managed Virtual Network" },
      { "id": "i3", "text": "Network ACLs with defaultAction Deny" }
    ],
    "zones": [
      { "id": "z1", "label": "Assigns a private IP address to the OpenAI resource inside the customer VNet" },
      { "id": "z2", "label": "Places the Cognitive Services account into a Microsoft-managed VNet that can be peered" },
      { "id": "z3", "label": "Blocks all traffic except from explicitly allowed virtual networks or IP ranges" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Private Endpoints provide a private IP in the customer’s VNet. Managed Virtual Networks host the service in a Microsoft-owned network. Network ACLs enforce allow-list based access control."
  },
  {
    "id": 164,
    "qid": "SC-500-MOD3-164",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that should evaluate both the user prompt and any retrieved context for injection attempts before the request reaches the model.",
    "scenario": "<div class=\"scenario-text\"><p>Defense-in-depth RAG architecture.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Azure AI Content Safety Prompt Shields", "x": 30, "y": 40 },
      { "id": "node2", "label": "Azure Blob Storage", "x": 60, "y": 20 },
      { "id": "node3", "label": "Azure Key Vault", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "Prompt Shields analyze the full prompt context (user input plus retrieved documents) for injection patterns. Blob Storage holds documents; Key Vault holds secrets."
  },
  {
    "id": 165,
    "qid": "SC-500-MOD3-165",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that would allow end users to override a DLP block for highly sensitive financial data in Copilot.",
    "scenario": "<div class=\"scenario-text\"><p>Purview DLP policy rule for generative AI.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"ruleName\": \"Block-Financial-AI\"," },
      { "id": "l3", "label": "  \"conditions\": { \"sensitiveInfoTypes\": [\"Credit Card Number\", \"SWIFT Code\"] }," },
      { "id": "l4", "label": "  \"actions\": [" },
      { "id": "l5", "label": "    { \"blockAccess\": true, \"overrideAllowed\": true }" },
      { "id": "l6", "label": "  ]" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "overrideAllowed: true permits users to bypass the block. For high-impact financial data the override should be disabled."
  },
  {
    "id": 166,
    "qid": "SC-500-MOD3-166",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "multiselect",
    "prompt": "Select THREE network controls required to ensure Azure OpenAI traffic never traverses the public internet.",
    "scenario": "<div class=\"scenario-text\"><p>A regulated financial institution is deploying Azure OpenAI under strict private-connectivity mandates.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Set publicNetworkAccess to Disabled on the Cognitive Services account" },
      { "id": "b", "text": "Deploy Private Endpoints for the Azure OpenAI resource" },
      { "id": "c", "text": "Configure VNet integration or private link on all consuming workloads" },
      { "id": "d", "text": "Enable anonymous authentication for simplified access" },
      { "id": "e", "text": "Publish the OpenAI endpoint on a public Application Gateway" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Disabling public network access, using Private Endpoints, and ensuring client workloads are VNet-integrated keep all traffic on the Microsoft private backbone. Anonymous auth and public gateways reintroduce public paths."
  },
  {
    "id": 167,
    "qid": "SC-500-MOD3-167",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "dragdrop",
    "prompt": "Match each prompt-injection defense to the stage of the request pipeline where it operates.",
    "scenario": "<div class=\"scenario-text\"><p>Security architects are designing layered defenses for an Azure AI Foundry agent that uses RAG.</p></div>",
    "items": [
      { "id": "i1", "text": "Azure AI Content Safety Prompt Shields" },
      { "id": "i2", "text": "System-message / metaprompt constraints" },
      { "id": "i3", "text": "Groundedness and citation validation" }
    ],
    "zones": [
      { "id": "z1", "label": "Pre-inference evaluation of user input and retrieved context" },
      { "id": "z2", "label": "Behavioral boundary enforcement inside the model" },
      { "id": "z3", "label": "Post-generation verification against source documents" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Prompt Shields inspect the assembled prompt before inference. System messages define allowed behavior. Groundedness checks confirm the final answer is supported by the retrieved sources."
  },
  {
    "id": 168,
    "qid": "SC-500-MOD3-168",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "single",
    "prompt": "Which Microsoft Purview capability provides a dedicated inventory of AI applications, their data sources, and associated oversharing risks?",
    "scenario": "<div class=\"scenario-text\"><p>A data governance team must produce a living inventory of every generative AI workload that can access corporate information.</p></div>",
    "options": [
      { "id": "a", "text": "Purview AI Hub (DSPM for AI)" },
      { "id": "b", "text": "Azure Advisor cost recommendations" },
      { "id": "c", "text": "Microsoft 365 usage reports only" },
      { "id": "d", "text": "Endpoint analytics device inventory" }
    ],
    "correct": ["a"],
    "explanation": "Purview AI Hub, part of Data Security Posture Management for AI, continuously discovers AI applications, maps the data they consume, and surfaces oversharing risks. The other options lack AI-specific asset and risk inventory."
  },
  {
    "id": 169,
    "qid": "SC-500-MOD3-169",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that enables private connectivity between an Azure App Service and Azure OpenAI.",
    "scenario": "<div class=\"scenario-text\"><p>Enterprise RAG architecture requiring network isolation.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Private Endpoint on Azure OpenAI + VNet Integration", "x": 30, "y": 40 },
      { "id": "node2", "label": "Public IP of App Service", "x": 60, "y": 20 },
      { "id": "node3", "label": "Azure Front Door with public backend", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "A Private Endpoint on the OpenAI resource combined with VNet integration on the App Service keeps all traffic on the Microsoft private network. Public IPs and Front Door with public backends introduce public paths."
  },
  {
    "id": 170,
    "qid": "SC-500-MOD3-170",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that disables the jailbreak / prompt-injection detector.",
    "scenario": "<div class=\"scenario-text\"><p>Azure OpenAI content-filter policy JSON.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"userPromptFilter\": {" },
      { "id": "l3", "label": "    \"hate\": { \"threshold\": \"medium\" }," },
      { "id": "l4", "label": "    \"jailbreak\": false," },
      { "id": "l5", "label": "    \"self_harm\": { \"threshold\": \"medium\" }" },
      { "id": "l6", "label": "  }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l4"],
    "selectCount": 1,
    "explanation": "Setting “jailbreak”: false explicitly turns off Prompt Shields / jailbreak detection, leaving the application exposed to injection attacks."
  },
  {
    "id": 171,
    "qid": "SC-500-MOD3-171",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "multiselect",
    "prompt": "Select THREE actions that improve the data security posture of vector embeddings stored for RAG workloads.",
    "scenario": "<div class=\"scenario-text\"><p>An architecture review of an Azure AI Search index containing embeddings of confidential legal documents.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enable customer-managed keys for the search service" },
      { "id": "b", "text": "Restrict network access with private endpoints" },
      { "id": "c", "text": "Implement security trimming or document-level access control on queries" },
      { "id": "d", "text": "Make the index publicly readable with a shared key" },
      { "id": "e", "text": "Store original plaintext documents in the same index without encryption" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "CMK protects data at rest, private endpoints protect data in transit and limit exposure, and query-time authorization prevents unauthorized retrieval of embeddings. Public access and plaintext co-storage increase risk."
  },
  {
    "id": 172,
    "qid": "SC-500-MOD3-172",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "dragdrop",
    "prompt": "Match each identity control to the risk it primarily mitigates for Azure OpenAI.",
    "scenario": "<div class=\"scenario-text\"><p>Zero-trust design workshop for generative AI services.</p></div>",
    "items": [
      { "id": "i1", "text": "Managed Identity + RBAC" },
      { "id": "i2", "text": "Conditional Access with MFA and device compliance" },
      { "id": "i3", "text": "Just-in-time / Privileged Identity Management for admin roles" }
    ],
    "zones": [
      { "id": "z1", "label": "Eliminates long-lived API keys from application configuration" },
      { "id": "z2", "label": "Ensures only trusted users and devices can access the OpenAI Studio or API" },
      { "id": "z3", "label": "Reduces standing privileges for users who manage deployments and keys" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Managed identities remove static secrets. Conditional Access enforces strong authentication and device health. PIM limits persistent administrative access."
  },
  {
    "id": 173,
    "qid": "SC-500-MOD3-173",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "single",
    "prompt": "An attacker uploads a PDF containing hidden instructions that cause a RAG system to ignore its system prompt when the document is retrieved. What is the name of this attack?",
    "scenario": "<div class=\"scenario-text\"><p>Incident response team analyzing a compromised knowledge base.</p></div>",
    "options": [
      { "id": "a", "text": "Indirect prompt injection" },
      { "id": "b", "text": "Direct jailbreak" },
      { "id": "c", "text": "Training data poisoning" },
      { "id": "d", "text": "Model inversion" }
    ],
    "correct": ["a"],
    "explanation": "Indirect prompt injection occurs when malicious instructions are embedded in data that the model later retrieves. Direct jailbreaks occur in the user prompt itself. Training-data poisoning and model inversion are different attack classes."
  },
  {
    "id": 174,
    "qid": "SC-500-MOD3-174",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the Purview component that surfaces AI-specific risk scores, inventory, and guided remediation.",
    "scenario": "<div class=\"scenario-text\"><p>Purview portal navigation for generative-AI governance.</p></div>",
    "nodes": [
      { "id": "node1", "label": "AI Hub (DSPM for AI)", "x": 25, "y": 40 },
      { "id": "node2", "label": "Content Explorer", "x": 55, "y": 40 },
      { "id": "node3", "label": "Audit Search", "x": 80, "y": 40 }
    ],
    "correct": ["node1"],
    "explanation": "Purview AI Hub is the dedicated DSPM-for-AI experience that provides inventory, risk scoring, and remediation guidance for generative AI. Content Explorer and Audit Search are broader tools."
  },
  {
    "id": 175,
    "qid": "SC-500-MOD3-175",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the property that must be set to “Disabled” to block all public network access to the Azure OpenAI account.",
    "scenario": "<div class=\"scenario-text\"><p>REST / Bicep representation of an Azure OpenAI network configuration.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"properties\": {" },
      { "id": "l3", "label": "    \"networkAcls\": { \"defaultAction\": \"Deny\" }," },
      { "id": "l4", "label": "    \"publicNetworkAccess\": \"Enabled\"," },
      { "id": "l5", "label": "    \"customSubDomainName\": \"aoai-prod\"" },
      { "id": "l6", "label": "  }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l4"],
    "selectCount": 1,
    "explanation": "Even with networkAcls.defaultAction set to Deny, publicNetworkAccess must also be “Disabled” to fully eliminate public endpoints. Leaving it Enabled still permits certain public access paths."
  },
  {
    "id": 176,
    "qid": "SC-500-MOD3-176",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "multiselect",
    "prompt": "Select THREE techniques that mitigate indirect prompt injection when documents are retrieved into a RAG prompt.",
    "scenario": "<div class=\"scenario-text\"><p>A RAG pipeline ingests both internal SharePoint content and external web pages.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Sanitize retrieved documents to remove instructional language before prompt assembly" },
      { "id": "b", "text": "Apply Azure AI Content Safety Prompt Shields to the full prompt context" },
      { "id": "c", "text": "Enforce groundedness checks that reject answers not supported by sources" },
      { "id": "d", "text": "Increase model temperature to encourage more varied responses" },
      { "id": "e", "text": "Omit the system message entirely to shorten the prompt" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Document sanitization, Prompt Shields on the assembled context, and groundedness validation form a strong defense against indirect injection. Higher temperature and missing system messages increase risk."
  },
  {
    "id": 177,
    "qid": "SC-500-MOD3-177",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "dragdrop",
    "prompt": "Match each Microsoft Purview control to the AI data-risk scenario it primarily addresses.",
    "scenario": "<div class=\"scenario-text\"><p>A CISO is mapping Purview capabilities to generative-AI risks.</p></div>",
    "items": [
      { "id": "i1", "text": "DLP policies for Copilot and browser AI destinations" },
      { "id": "i2", "text": "Sensitivity labels with auto-labeling and inheritance" },
      { "id": "i3", "text": "Purview AI Hub oversharing insights" }
    ],
    "zones": [
      { "id": "z1", "label": "Real-time blocking of sensitive data leaving via prompts" },
      { "id": "z2", "label": "Classification and protection of source and AI-generated content" },
      { "id": "z3", "label": "Visibility into which documents are being over-shared into AI tools" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "DLP acts at the moment of interaction. Sensitivity labels protect content at rest and in motion. AI Hub surfaces the oversharing risk posture."
  },
  {
    "id": 178,
    "qid": "SC-500-MOD3-178",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "single",
    "prompt": "What is the principal advantage of using a user-assigned managed identity for an Azure App Service that calls Azure OpenAI?",
    "scenario": "<div class=\"scenario-text\"><p>A platform team wants to eliminate long-lived secrets while supporting multiple environments and shared identities.</p></div>",
    "options": [
      { "id": "a", "text": "The identity can be granted precise RBAC roles and reused across resources without embedding API keys" },
      { "id": "b", "text": "It automatically disables content safety filters" },
      { "id": "c", "text": "It grants the application Owner rights on the subscription" },
      { "id": "d", "text": "It forces all traffic over public endpoints for lower latency" }
    ],
    "correct": ["a"],
    "explanation": "User-assigned managed identities are independent Azure resources that can be shared and assigned least-privilege RBAC roles, removing the need for static API keys. They do not alter safety filters, grant excessive permissions, or force public routing."
  },
  {
    "id": 179,
    "qid": "SC-500-MOD3-179",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that should be inserted between document retrieval and prompt assembly to neutralize hidden instructions.",
    "scenario": "<div class=\"scenario-text\"><p>Secure RAG reference architecture.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Document Sanitization / Instruction-Stripping Layer", "x": 30, "y": 40 },
      { "id": "node2", "label": "Azure AI Search", "x": 60, "y": 20 },
      { "id": "node3", "label": "Azure Monitor Workbooks", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "A dedicated sanitization step removes or neutralizes instructional language from retrieved documents, reducing the success rate of indirect prompt injection. Azure AI Search supplies the documents; Monitor provides observability."
  },
  {
    "id": 180,
    "qid": "SC-500-MOD3-180",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that incorrectly permits external sharing of content labeled Highly Confidential.",
    "scenario": "<div class=\"scenario-text\"><p>Microsoft Purview sensitivity label policy excerpt.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"name\": \"HighlyConfidential-AI\"," },
      { "id": "l3", "label": "  \"encryption\": { \"enabled\": true }," },
      { "id": "l4", "label": "  \"contentMarking\": { \"header\": true, \"footer\": true }," },
      { "id": "l5", "label": "  \"externalSharing\": \"Allow\"," },
      { "id": "l6", "label": "  \"autoLabeling\": { \"enabled\": true }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "Setting externalSharing to “Allow” on a Highly Confidential label undermines the classification. The correct setting is typically “Block” or restricted to approved domains only."
  },
  {
    "id": 181,
    "qid": "SC-500-MOD3-181",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "multiselect",
    "prompt": "Select THREE identity and access controls that align with zero-trust principles for Azure OpenAI deployments.",
    "scenario": "<div class=\"scenario-text\"><p>A security baseline is being defined for all generative AI resources in the enterprise.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Prefer Entra ID authentication and managed identities over long-lived API keys" },
      { "id": "b", "text": "Assign least-privilege RBAC roles (Cognitive Services OpenAI User/Contributor) only to required principals" },
      { "id": "c", "text": "Apply Conditional Access policies that require MFA and compliant devices" },
      { "id": "d", "text": "Distribute a single admin API key via a shared Teams channel" },
      { "id": "e", "text": "Grant the Owner role at the subscription level to every data scientist" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Managed identities, least-privilege RBAC, and Conditional Access together implement continuous verification and least privilege. Shared keys and over-privileged Owner assignments violate zero-trust."
  },
  {
    "id": 182,
    "qid": "SC-500-MOD3-182",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "dragdrop",
    "prompt": "Match each Azure AI Content Safety capability to the primary risk it mitigates.",
    "scenario": "<div class=\"scenario-text\"><p>Configuring a comprehensive safety policy for a customer-facing generative AI service.</p></div>",
    "items": [
      { "id": "i1", "text": "Prompt Shields" },
      { "id": "i2", "text": "Groundedness detection" },
      { "id": "i3", "text": "Protected material detection" }
    ],
    "zones": [
      { "id": "z1", "label": "Direct and indirect attempts to override system instructions" },
      { "id": "z2", "label": "Answers that cannot be traced back to the provided sources" },
      { "id": "z3", "label": "Output that reproduces known copyrighted or protected text" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Prompt Shields detect injection. Groundedness detection reduces unsupported hallucination. Protected material detection helps avoid copyright and IP leakage."
  },
  {
    "id": 183,
    "qid": "SC-500-MOD3-183",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "single",
    "prompt": "Which feature enables sensitivity labels applied to source documents to automatically influence the classification of content produced by Microsoft 365 Copilot?",
    "scenario": "<div class=\"scenario-text\"><p>Information-protection architects require continuous protection of AI-generated artifacts.</p></div>",
    "options": [
      { "id": "a", "text": "Sensitivity label inheritance and auto-labeling policies for Copilot" },
      { "id": "b", "text": "Azure Policy guest configuration assignments" },
      { "id": "c", "text": "Microsoft Defender for Endpoint attack-surface reduction rules" },
      { "id": "d", "text": "Conditional Access session controls only" }
    ],
    "correct": ["a"],
    "explanation": "Purview sensitivity label policies can be configured so that Copilot-generated content inherits the highest classification of the source material used in the interaction, maintaining continuous protection."
  },
  {
    "id": 184,
    "qid": "SC-500-MOD3-184",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that allows an Azure Kubernetes Service workload to reach Azure OpenAI over a private connection.",
    "scenario": "<div class=\"scenario-text\"><p>Containerized RAG application network diagram.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Private Endpoint + Private DNS Zone", "x": 30, "y": 40 },
      { "id": "node2", "label": "Public Load Balancer", "x": 60, "y": 20 },
      { "id": "node3", "label": "Azure Front Door with public backend", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "A Private Endpoint together with a Private DNS Zone enables pods in AKS (via VNet integration or private cluster) to resolve and reach the OpenAI resource on a private IP. Public load balancers and Front Door introduce public paths."
  },
  {
    "id": 185,
    "qid": "SC-500-MOD3-185",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that disables output filtering for the violence category, creating a policy gap.",
    "scenario": "<div class=\"scenario-text\"><p>Azure OpenAI content filter policy JSON.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"name\": \"strict-enterprise\"," },
      { "id": "l3", "label": "  \"output\": {" },
      { "id": "l4", "label": "    \"hate\": { \"threshold\": \"medium\" }," },
      { "id": "l5", "label": "    \"violence\": { \"enabled\": false }," },
      { "id": "l6", "label": "    \"self_harm\": { \"threshold\": \"medium\" }" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "Setting \"enabled\": false for violence turns off filtering of violent content in model completions. All four core categories should remain enabled in production policies."
  },
  {
    "id": 186,
    "qid": "SC-500-MOD3-186",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "multiselect",
    "prompt": "Select THREE best practices for securing a vector index that stores embeddings of confidential documents used by RAG.",
    "scenario": "<div class=\"scenario-text\"><p>Architecture review of an Azure AI Search index containing embeddings of legal and HR documents.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enable customer-managed keys for encryption at rest" },
      { "id": "b", "text": "Restrict network access with private endpoints and disable public access" },
      { "id": "c", "text": "Apply document-level security trimming or query-time ACLs" },
      { "id": "d", "text": "Expose the index on the public internet protected only by an API key" },
      { "id": "e", "text": "Store the original plaintext documents unencrypted alongside the vectors" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "CMK protects confidentiality at rest, private endpoints protect the network boundary, and security trimming enforces least-privilege retrieval. Public exposure and plaintext co-storage increase risk."
  },
  {
    "id": 187,
    "qid": "SC-500-MOD3-187",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "dragdrop",
    "prompt": "Match each Azure OpenAI isolation option to the scenario it best serves.",
    "scenario": "<div class=\"scenario-text\"><p>Platform team deciding how to host generative AI workloads for multiple business units.</p></div>",
    "items": [
      { "id": "i1", "text": "Dedicated Azure OpenAI account per business unit" },
      { "id": "i2", "text": "Shared account with separate deployments and RBAC" },
      { "id": "i3", "text": "Provisioned Throughput Units (PTU)" }
    ],
    "zones": [
      { "id": "z1", "label": "Maximum administrative, network, and key isolation" },
      { "id": "z2", "label": "Cost-efficient multi-tenancy with logical isolation" },
      { "id": "z3", "label": "Guaranteed capacity and performance isolation" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Separate accounts provide the strongest isolation boundaries. Shared accounts with RBAC offer efficient logical separation. PTU guarantees throughput isolation regardless of other consumption."
  },
  {
    "id": 188,
    "qid": "SC-500-MOD3-188",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "single",
    "prompt": "What is the recommended first line of defense against both direct and indirect prompt injection in Azure OpenAI and Azure AI Foundry applications?",
    "scenario": "<div class=\"scenario-text\"><p>A security team is prioritizing controls for a new generative-AI customer-support agent.</p></div>",
    "options": [
      { "id": "a", "text": "Enable Azure AI Content Safety Prompt Shields on the endpoint" },
      { "id": "b", "text": "Increase the max_tokens parameter to 4096" },
      { "id": "c", "text": "Disable all content filters to improve response quality" },
      { "id": "d", "text": "Store the system prompt in client-side JavaScript" }
    ],
    "correct": ["a"],
    "explanation": "Prompt Shields are Microsoft’s purpose-built, continuously updated detectors for direct and indirect prompt injection. The other options either have no security benefit or actively weaken the security posture."
  },
  {
    "id": 189,
    "qid": "SC-500-MOD3-189",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that provides centralized visibility into AI usage, risk posture, and oversharing across the enterprise.",
    "scenario": "<div class=\"scenario-text\"><p>Microsoft Purview governance stack for generative AI.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Purview AI Hub", "x": 25, "y": 40 },
      { "id": "node2", "label": "Azure Cost Management", "x": 55, "y": 40 },
      { "id": "node3", "label": "Microsoft 365 Admin Center", "x": 80, "y": 40 }
    ],
    "correct": ["node1"],
    "explanation": "Purview AI Hub is the purpose-built experience for AI asset inventory, risk scoring, and DSPM recommendations. Cost Management and the M365 Admin Center do not provide this AI-specific posture view."
  },
  {
    "id": 190,
    "qid": "SC-500-MOD3-190",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the Bicep property that incorrectly leaves public network access enabled on the Azure OpenAI account.",
    "scenario": "<div class=\"scenario-text\"><p>Bicep template fragment for a production Azure OpenAI resource.</p></div>",
    "nodes": [
      { "id": "l1", "label": "resource aoai 'Microsoft.CognitiveServices/accounts@2023-05-01' = {" },
      { "id": "l2", "label": "  name: 'aoai-secure-prod'" },
      { "id": "l3", "label": "  properties: {" },
      { "id": "l4", "label": "    customSubDomainName: 'aoai-secure-prod'" },
      { "id": "l5", "label": "    publicNetworkAccess: 'Enabled'" },
      { "id": "l6", "label": "    networkAcls: { defaultAction: 'Deny' }" },
      { "id": "l7", "label": "  }" },
      { "id": "l8", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "publicNetworkAccess must be set to ‘Disabled’ in addition to a Deny defaultAction. Leaving it Enabled still permits certain public access paths."
  },
  {
    "id": 191,
    "qid": "SC-500-MOD3-191",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "multiselect",
    "prompt": "Select THREE controls that reduce the risk of training-data poisoning in an Azure AI Foundry fine-tuning pipeline.",
    "scenario": "<div class=\"scenario-text\"><p>A team is preparing a curated dataset for supervised fine-tuning of a domain model.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Enforce strict data provenance and cryptographic integrity checks before training" },
      { "id": "b", "text": "Scan every training example with Azure AI Content Safety" },
      { "id": "c", "text": "Restrict upload and modification rights on the training dataset via RBAC and private storage" },
      { "id": "d", "text": "Allow any authenticated user to push new training files without review" },
      { "id": "e", "text": "Disable all access logging on the dataset storage account" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Provenance controls, safety scanning of training data, and strict access control on the dataset storage together reduce the likelihood that poisoned samples enter the fine-tuning process."
  },
  {
    "id": 192,
    "qid": "SC-500-MOD3-192",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "dragdrop",
    "prompt": "Match each vector store protection to the threat it primarily addresses.",
    "scenario": "<div class=\"scenario-text\"><p>Security design for an Azure AI Search index holding embeddings of sensitive HR documents.</p></div>",
    "items": [
      { "id": "i1", "text": "Customer-managed keys" },
      { "id": "i2", "text": "Private endpoints and disabled public access" },
      { "id": "i3", "text": "Query-time security filters / document-level ACLs" }
    ],
    "zones": [
      { "id": "z1", "label": "Unauthorized decryption of embeddings at rest" },
      { "id": "z2", "label": "Network-level unauthorized access to the search service" },
      { "id": "z3", "label": "A user retrieving embeddings they are not entitled to see" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "CMK protects confidentiality at rest. Private endpoints protect the network boundary. Security trimming enforces least-privilege retrieval at query time."
  },
  {
    "id": 193,
    "qid": "SC-500-MOD3-193",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "single",
    "prompt": "When public network access is disabled on an Azure OpenAI account, which additional components are required for an on-premises application to reach the service privately?",
    "scenario": "<div class=\"scenario-text\"><p>Hybrid connectivity design for a regulated workload.</p></div>",
    "options": [
      { "id": "a", "text": "Private Endpoint combined with ExpressRoute or VPN plus Private DNS resolution" },
      { "id": "b", "text": "A public IP address assigned directly to the OpenAI account" },
      { "id": "c", "text": "Anonymous access restricted only by IP allow-listing" },
      { "id": "d", "text": "Disabling all RBAC assignments on the resource" }
    ],
    "correct": ["a"],
    "explanation": "With public access disabled, the only path is via Private Endpoint. On-premises systems reach that private IP through ExpressRoute or VPN, and Private DNS ensures correct name resolution."
  },
  {
    "id": 194,
    "qid": "SC-500-MOD3-194",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component responsible for performing real-time safety evaluations of prompts and completions against hate, self-harm, sexual, and violence categories.",
    "scenario": "<div class=\"scenario-text\"><p>High-level safety architecture for an enterprise chatbot.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Azure AI Content Safety Filters", "x": 25, "y": 40 },
      { "id": "node2", "label": "Azure AI Search Vector Index", "x": 55, "y": 40 },
      { "id": "node3", "label": "Azure App Service Frontend", "x": 80, "y": 40 }
    ],
    "correct": ["node1"],
    "explanation": "Azure AI Content Safety (integrated or standalone) evaluates both input and output against the four core harm categories. The vector index stores embeddings; the App Service hosts application logic."
  },
  {
    "id": 195,
    "qid": "SC-500-MOD3-195",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the incorrect DLP action that would permit high-confidence Social Security Numbers to be sent to an external LLM.",
    "scenario": "<div class=\"scenario-text\"><p>Microsoft Purview DLP rule targeting generative AI endpoints.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"name\": \"Block-SSN-in-AI\"," },
      { "id": "l3", "label": "  \"sensitiveInfoTypes\": [\"U.S. Social Security Number\"]," },
      { "id": "l4", "label": "  \"actions\": [" },
      { "id": "l5", "label": "    { \"type\": \"Allow\", \"notifyUser\": false }" },
      { "id": "l6", "label": "  ]" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l5"],
    "selectCount": 1,
    "explanation": "An action of type “Allow” with no notification permits the sensitive data to leave. The correct protective action is BlockAccess (or equivalent) for high-confidence SSN matches."
  },
  {
    "id": 196,
    "qid": "SC-500-MOD3-196",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "multiselect",
    "prompt": "Select THREE logging and monitoring controls that should be enabled for Azure OpenAI to support security investigations.",
    "scenario": "<div class=\"scenario-text\"><p>A SOC requires visibility into prompt activity, token consumption, and potential abuse.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Diagnostic settings with the RequestResponse category sent to Log Analytics" },
      { "id": "b", "text": "Azure Monitor alerts on anomalous token usage or error rates" },
      { "id": "c", "text": "Microsoft Defender for Cloud recommendations and alerts for Cognitive Services" },
      { "id": "d", "text": "Disabling all diagnostic logging to reduce cost" },
      { "id": "e", "text": "Storing full prompt and completion text in publicly accessible blob storage" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "RequestResponse logs, metric-based alerts, and Defender for Cloud together provide the telemetry and detection coverage required for security operations. Disabling diagnostics or storing sensitive prompts publicly creates gaps and exposure."
  },
  {
    "id": 197,
    "qid": "SC-500-MOD3-197",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "dragdrop",
    "prompt": "Match each mitigation technique to the layer of the AI application stack where it is most effectively applied.",
    "scenario": "<div class=\"scenario-text\"><p>Defense-in-depth design for a multi-tool Azure AI Foundry agent.</p></div>",
    "items": [
      { "id": "i1", "text": "Prompt Shields and core content filters" },
      { "id": "i2", "text": "System-message / metaprompt engineering" },
      { "id": "i3", "text": "Output grounding and policy validation" }
    ],
    "zones": [
      { "id": "z1", "label": "Pre-inference input evaluation" },
      { "id": "z2", "label": "Model behavioral boundary definition" },
      { "id": "z3", "label": "Post-generation validation" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"]
    },
    "explanation": "Content Safety filters act before the model. System messages shape the model’s behavior. Grounding and policy checks validate the final output."
  },
  {
    "id": 198,
    "qid": "SC-500-MOD3-198",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Data Governance",
    "type": "single",
    "prompt": "Which Purview solution continuously monitors for sensitive data being shared into generative AI tools and provides guided remediation recommendations?",
    "scenario": "<div class=\"scenario-text\"><p>A data security team needs ongoing visibility into AI-related oversharing across Microsoft 365 and Azure.</p></div>",
    "options": [
      { "id": "a", "text": "Data Security Posture Management (DSPM) for AI" },
      { "id": "b", "text": "Azure Advisor performance recommendations" },
      { "id": "c", "text": "Microsoft 365 usage analytics only" },
      { "id": "d", "text": "Endpoint analytics device scores" }
    ],
    "correct": ["a"],
    "explanation": "DSPM for AI (surfaced through Purview AI Hub) is specifically designed to detect and help remediate oversharing of sensitive data into AI applications."
  },
  {
    "id": 199,
    "qid": "SC-500-MOD3-199",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "AI Ecosystem Defenses",
    "type": "hotspot",
    "useConfigHotspot": false,
    "prompt": "Click the component that forces traffic between an Azure App Service and Azure OpenAI to remain on the Microsoft private network.",
    "scenario": "<div class=\"scenario-text\"><p>Network isolation architecture for a web-based AI application.</p></div>",
    "nodes": [
      { "id": "node1", "label": "Private Endpoint on Azure OpenAI + VNet Integration on App Service", "x": 30, "y": 40 },
      { "id": "node2", "label": "Public IP of the App Service", "x": 60, "y": 20 },
      { "id": "node3", "label": "Azure Front Door with public backend pool", "x": 60, "y": 60 }
    ],
    "correct": ["node1"],
    "explanation": "Combining a Private Endpoint on the OpenAI resource with VNet integration on the App Service keeps all traffic private. Public IPs and Front Door with public backends introduce public paths."
  },
  {
    "id": 200,
    "qid": "SC-500-MOD3-200",
    "moduleId": "mod3",
    "module": "Data & AI Model Security",
    "domain": "Threat Mitigation",
    "type": "hotspot",
    "useConfigHotspot": true,
    "prompt": "Click the line that configures an insufficiently strict threshold for the self-harm category.",
    "scenario": "<div class=\"scenario-text\"><p>Azure OpenAI content-filter configuration.</p></div>",
    "nodes": [
      { "id": "l1", "label": "{" },
      { "id": "l2", "label": "  \"self_harm\": {" },
      { "id": "l3", "label": "    \"threshold\": \"low\"," },
      { "id": "l4", "label": "    \"outputEnabled\": true" },
      { "id": "l5", "label": "  }," },
      { "id": "l6", "label": "  \"hate\": { \"threshold\": \"medium\" }" },
      { "id": "l7", "label": "}" }
    ],
    "correct": ["l3"],
    "selectCount": 1,
    "explanation": "A threshold of “low” is the most permissive setting and will allow medium- and high-severity self-harm content. Enterprise baselines typically require at least “medium”."
 },
  {
    id: 1,
    qid: "SC-500-MOD4-001",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "single",
    question: "You are configuring a Microsoft Sentinel analytics rule that must trigger only when a high-severity alert is generated from a specific data connector and the related entity has not been seen in the last 7 days. Which KQL operator combination best implements the lookback and entity uniqueness requirement?",
    scenario: `<div class="scenario-text"><p>Your SOC team is building a custom scheduled analytics rule in Microsoft Sentinel. The rule must correlate SecurityAlert records with a 7-day lookback window against the IdentityInfo table and suppress alerts for entities that already have matching activity within that window. The rule will run every 5 minutes and should only produce an incident when the entity is new within the lookback period.</p></div>`,
    options: [
      { id: "A", text: "use materialize() with a join kind=inner and time window of 7d" },
      { id: "B", text: "use arg_max() together with a leftsemi join and ago(7d) filter" },
      { id: "C", text: "use summarize by bin(TimeGenerated, 7d) and a full outer join" },
      { id: "D", text: "use make-series with a 7-day interval and a rightanti join" }
    ],
    answer: ["B"],
    explanation: "arg_max() efficiently retrieves the most recent record per entity while ago(7d) provides the correct relative time filter. A leftsemi join returns only rows from the left table that have a match on the right, which is ideal for confirming prior activity. materialize() is for query performance caching, not uniqueness logic; full outer joins introduce noise; make-series is for time-series visualization, not incident generation."
  },
  {
    id: 2,
    qid: "SC-500-MOD4-002",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "single",
    question: "When creating a Microsoft Sentinel automation rule that must run a Logic App playbook only for incidents that contain a specific tag and are assigned to a particular owner, which condition type must be used?",
    scenario: `<div class="scenario-text"><p>You need to ensure that a containment playbook is executed automatically only when an incident is tagged 'Priority-Critical' and the AssignedTo field equals a specific security analyst UPN. The automation rule should evaluate after the incident is created or updated.</p></div>`,
    options: [
      { id: "A", text: "Entity property condition on Account entities" },
      { id: "B", text: "Incident property condition using Tags and Owner" },
      { id: "C", text: "Alert property condition on AlertProductName" },
      { id: "D", text: "Custom detail condition from the analytics rule" }
    ],
    answer: ["B"],
    explanation: "Automation rules evaluate incident-level properties. Tags and Owner (AssignedTo) are native incident properties that can be combined in a single condition group. Entity property conditions apply only after entities are populated and are not suitable for owner checks. Alert property conditions operate one level lower and cannot reliably evaluate incident tags. Custom details are rule-specific and not available as automation rule conditions."
  },
  {
    id: 3,
    qid: "SC-500-MOD4-003",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "single",
    question: "Which workbook template in Microsoft Sentinel is specifically designed to provide an interactive overview of incident metrics, mean time to acknowledge, and mean time to close across workspaces?",
    scenario: `<div class="scenario-text"><p>Your CISO requires a single pane of glass that visualizes SOC performance KPIs including MTTA, MTTR, incident volume by severity, and top attacking tactics. The visualization must be shareable via Azure Monitor workbooks and support time-range filtering.</p></div>`,
    options: [
      { id: "A", text: "SecurityOperationsEfficiency" },
      { id: "B", text: "Identity & Access" },
      { id: "C", text: "ThreatIntelligence" },
      { id: "D", text: "ZeroTrustAssessment" }
    ],
    answer: ["A"],
    explanation: "The SecurityOperationsEfficiency workbook is the official Microsoft Sentinel template that surfaces MTTA, MTTR, incident closure rates, and severity distribution. Identity & Access focuses on Entra ID signals, ThreatIntelligence on TI indicators, and ZeroTrustAssessment on posture scores; none of these provide the required SOC operational KPIs."
  },
  {
    id: 4,
    qid: "SC-500-MOD4-004",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "single",
    question: "You need to suppress an analytics rule for a known benign administrative account without disabling the entire rule. What is the recommended production approach inside Microsoft Sentinel?",
    scenario: `<div class="scenario-text"><p>A scheduled analytics rule generates high volumes of false-positive incidents for a service account used by a legitimate backup process. The account must remain monitored for any other anomalous behavior, but incidents caused solely by this account should not be created.</p></div>`,
    options: [
      { id: "A", text: "Add an automation rule that auto-closes incidents containing the account" },
      { id: "B", text: "Create a watchlist of the account and reference it with a not in operator in the KQL" },
      { id: "C", text: "Disable the analytics rule and recreate it with a different name" },
      { id: "D", text: "Use a Logic App to delete the resulting incidents after creation" }
    ],
    answer: ["B"],
    explanation: "Embedding a watchlist exclusion with a 'not in' or '!in' operator inside the analytics rule query is the Microsoft-recommended pattern for entity-level suppression while keeping the rule active. Automation rules that close incidents still consume SOC capacity and generate noise in metrics. Disabling the rule removes detection coverage entirely. Deleting incidents after creation is anti-pattern and breaks auditability."
  },
  {
    id: 5,
    qid: "SC-500-MOD4-005",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "multiselect",
    question: "Which three components can be referenced inside a Microsoft Sentinel automation rule condition to decide whether a playbook should execute?",
    scenario: `<div class="scenario-text"><p>You are designing an automation rule that must evaluate multiple attributes before triggering a containment Logic App. The rule will run on incident creation and update events.</p></div>`,
    options: [
      { id: "A", text: "Incident severity" },
      { id: "B", text: "Incident tags" },
      { id: "C", text: "Alert product name" },
      { id: "D", text: "Custom entity fields from the hunting query" },
      { id: "E", text: "Owner / AssignedTo value" }
    ],
    answer: ["A", "B", "E"],
    explanation: "Automation rules natively support conditions on Incident severity, Tags, and Owner (AssignedTo). Alert product name is an alert-level property and is not directly available as an incident automation condition. Custom entity fields from hunting queries are not exposed to automation rule condition builders."
  },
  {
    id: 6,
    qid: "SC-500-MOD4-006",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "multiselect",
    question: "When authoring a scheduled analytics rule that correlates SigninLogs with SecurityEvent, which three KQL best practices must be followed to keep the rule production-ready?",
    scenario: `<div class="scenario-text"><p>The rule will run every 15 minutes with a 1-hour lookback and must produce reliable incidents without query timeouts or excessive false positives.</p></div>`,
    options: [
      { id: "A", text: "Project only the columns required for the join and entity mapping" },
      { id: "B", text: "Use materialize() on the smaller side of the join when the table is referenced multiple times" },
      { id: "C", text: "Apply time filters with ago() as early as possible in each branch" },
      { id: "D", text: "Always use join kind=fullouter to guarantee no data loss" },
      { id: "E", text: "Summarize results with bin(TimeGenerated, 1h) before the join" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Projecting only needed columns reduces data volume. materialize() caches intermediate results for reuse. Early ago() filters prune data before expensive joins. fullouter joins create Cartesian noise and are rarely appropriate for detection rules. Pre-summarizing with bin() can discard the precise timestamps required for accurate entity mapping and incident timeline reconstruction."
  },
  {
    id: 7,
    qid: "SC-500-MOD4-007",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "multiselect",
    question: "Which two statements correctly describe the relationship between Microsoft Sentinel analytics rules and automation rules?",
    scenario: `<div class="scenario-text"><p>You are documenting the detection-to-response pipeline for an upcoming audit.</p></div>`,
    options: [
      { id: "A", text: "An analytics rule can create an incident that subsequently triggers one or more automation rules" },
      { id: "B", text: "An automation rule can modify the query of a scheduled analytics rule at runtime" },
      { id: "C", text: "Automation rules can be scoped to run only on incidents generated by specific analytics rules" },
      { id: "D", text: "Analytics rules execute Logic Apps directly without needing an automation rule" },
      { id: "E", text: "Automation rules are evaluated before the analytics rule query runs" }
    ],
    answer: ["A", "C"],
    explanation: "Analytics rules generate incidents; automation rules react to those incidents and can be filtered by the analytics rule name or ID. Automation rules cannot alter the analytics rule query. Scheduled analytics rules do not invoke Logic Apps directly; the automation rule is the required bridge. Automation rules run after the incident exists, not before the query."
  },
  {
    id: 8,
    qid: "SC-500-MOD4-008",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "multiselect",
    question: "You are building a Logic App playbook that will be triggered by a Sentinel automation rule. Which three actions are valid when the playbook runs in the context of an incident?",
    scenario: `<div class="scenario-text"><p>The playbook must enrich the incident, notify stakeholders, and optionally take containment actions on related entities.</p></div>`,
    options: [
      { id: "A", text: "Update the incident severity and status via the Microsoft Sentinel connector" },
      { id: "B", text: "Add comments and tags to the incident" },
      { id: "C", text: "Query the Microsoft Graph Security API for additional alerts" },
      { id: "D", text: "Directly edit the underlying KQL of the originating analytics rule" },
      { id: "E", text: "Create a new scheduled analytics rule from within the playbook" }
    ],
    answer: ["A", "B", "C"],
    explanation: "The Sentinel connector exposes Update incident, Add comment, and Add tags actions. Graph Security API calls are supported for enrichment. Playbooks cannot modify analytics rule definitions or create new analytics rules; those operations require the Sentinel management plane and appropriate RBAC outside the playbook runtime."
  },
  {
    id: 9,
    qid: "SC-500-MOD4-009",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "multiselect",
    question: "Which three data sources are commonly used inside Microsoft Sentinel workbooks to visualize Threat Operations metrics?",
    scenario: `<div class="scenario-text"><p>You are customizing the Security Operations Efficiency workbook to include additional tiles for automation success rate and playbook execution latency.</p></div>`,
    options: [
      { id: "A", text: "SecurityIncident" },
      { id: "B", text: "AzureDiagnostics (for Logic App runs)" },
      { id: "C", text: "SecurityAlert" },
      { id: "D", text: "OfficeActivity" },
      { id: "E", text: "SigninLogs" }
    ],
    answer: ["A", "B", "C"],
    explanation: "SecurityIncident and SecurityAlert tables are the primary sources for incident and alert metrics. AzureDiagnostics (or the Logic Apps diagnostic category) captures playbook run history. OfficeActivity and SigninLogs are useful for identity and collaboration detections but are not core to Threat Operations KPI workbooks."
  },
  {
    id: 10,
    qid: "SC-500-MOD4-010",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "multiselect",
    question: "When configuring an NRT (Near-Real-Time) analytics rule in Microsoft Sentinel, which two constraints must be observed?",
    scenario: `<div class="scenario-text"><p>You need sub-minute detection for a high-priority identity attack pattern and are evaluating NRT versus scheduled rules.</p></div>`,
    options: [
      { id: "A", text: "The rule can only reference a single table" },
      { id: "B", text: "The lookback window is fixed at 5 minutes" },
      { id: "C", text: "Entity mapping is limited compared with scheduled rules" },
      { id: "D", text: "The query must use the ingestion_time() function" },
      { id: "E", text: "NRT rules support the full set of KQL join kinds" }
    ],
    answer: ["A", "C"],
    explanation: "NRT rules are restricted to a single table and have reduced entity-mapping capabilities to guarantee low latency. The lookback is not fixed at 5 minutes (it is based on the streaming window). ingestion_time() is not mandatory, and complex joins are limited or unsupported."
  },
  {
    id: 11,
    qid: "SC-500-MOD4-011",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "multiselect",
    question: "Which two methods can be used to pass incident-related entities into a Logic App playbook from a Microsoft Sentinel automation rule?",
    scenario: `<div class="scenario-text"><p>The playbook must receive the list of Account and Host entities so it can perform enrichment and containment.</p></div>`,
    options: [
      { id: "A", text: "Entities are automatically available in the dynamic content of the Sentinel trigger" },
      { id: "B", text: "Use the 'Entities - Get Accounts' and 'Entities - Get Hosts' actions after the trigger" },
      { id: "C", text: "Manually parse the Incident ARM ID and call the entities endpoint via HTTP" },
      { id: "D", text: "Store entities in a watchlist and look them up by incident ID" },
      { id: "E", text: "Entities are only available if the analytics rule used custom details" }
    ],
    answer: ["A", "B"],
    explanation: "The Microsoft Sentinel incident trigger surfaces entities in dynamic content. Dedicated 'Entities - Get *' actions further refine the list by type. Manual ARM calls are possible but unnecessary. Watchlists are not designed for per-incident entity transfer. Custom details are optional and not required for standard entity hand-off."
  },
  {
    id: 12,
    qid: "SC-500-MOD4-012",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "multiselect",
    question: "You need to create a reusable KQL function that normalizes DeviceName across multiple tables for use in analytics rules. Which three steps are required?",
    scenario: `<div class="scenario-text"><p>The function will be saved in the workspace and referenced by several scheduled rules to guarantee consistent entity mapping.</p></div>`,
    options: [
      { id: "A", text: "Create the function with the .create function syntax or via the UI" },
      { id: "B", text: "Include a let statement that performs the normalization logic" },
      { id: "C", text: "Grant the function the same RBAC permissions as the calling analytics rule" },
      { id: "D", text: "Reference the function by name inside the analytics rule query" },
      { id: "E", text: "Publish the function as a Logic App connector" }
    ],
    answer: ["A", "B", "D"],
    explanation: "Functions are created with .create function or the Functions blade, contain the normalization logic (commonly via let), and are called by name from analytics rules. Functions inherit the caller's permissions; no separate RBAC is required. Logic App connectors are unrelated to KQL functions."
  },
  {
    id: 13,
    qid: "SC-500-MOD4-013",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "multiselect",
    question: "Which three statements about Microsoft Sentinel playbooks are correct?",
    scenario: `<div class="scenario-text"><p>Your team is standardizing on playbooks for automated response and needs accurate documentation for the runbooks.</p></div>`,
    options: [
      { id: "A", text: "Playbooks are built on Azure Logic Apps" },
      { id: "B", text: "A playbook can be triggered manually from an incident or automatically via an automation rule" },
      { id: "C", text: "Playbooks can use managed identities to authenticate to Microsoft Graph and Azure resources" },
      { id: "D", text: "Playbooks execute inside the Sentinel workspace and do not require a Logic App resource" },
      { id: "E", text: "Only one playbook can be attached to an automation rule" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Playbooks are Logic Apps. They support both manual and automated (automation rule) triggers. Managed identities are the recommended authentication method. A Logic App resource is always created. Multiple playbooks can be attached to a single automation rule."
  },
  {
    id: 14,
    qid: "SC-500-MOD4-014",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "multiselect",
    question: "When designing an analytics rule that must map both Account and IP entities, which three entity mapping configurations are valid?",
    scenario: `<div class="scenario-text"><p>The rule query returns columns UserPrincipalName, SrcIP, and DeviceName. You must ensure the incident graph correctly links the entities.</p></div>`,
    options: [
      { id: "A", text: "Map UserPrincipalName to Account.FullName or Account.AadUserId" },
      { id: "B", text: "Map SrcIP to IP.Address" },
      { id: "C", text: "Map DeviceName to Host.HostName" },
      { id: "D", text: "Map SrcIP to Account.Sid" },
      { id: "E", text: "Map UserPrincipalName to IP.Address" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Standard entity identifiers are Account (UPN, AadUserId, Sid, etc.), IP (Address), and Host (HostName, FullName, etc.). Mapping an IP column to an Account identifier or a UPN to an IP identifier produces invalid entity graphs and breaks investigation."
  },
  {
    id: 15,
    qid: "SC-500-MOD4-015",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "multiselect",
    question: "Which two actions can an automation rule perform without invoking a Logic App playbook?",
    scenario: `<div class="scenario-text"><p>You want lightweight response actions that do not require additional Logic App costs or complexity.</p></div>`,
    options: [
      { id: "A", text: "Change the incident status to Closed" },
      { id: "B", text: "Add a tag to the incident" },
      { id: "C", text: "Run an Advanced Hunting query across Defender XDR" },
      { id: "D", text: "Isolate a device via Microsoft Defender for Endpoint" },
      { id: "E", text: "Create a new incident in a different workspace" }
    ],
    answer: ["A", "B"],
    explanation: "Automation rules natively support changing status, severity, owner, and adding tags or comments. Running Advanced Hunting, device isolation, or cross-workspace incident creation require a playbook (Logic App) that calls the appropriate APIs."
  },
  {
    id: 16,
    qid: "SC-500-MOD4-016",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "multiselect",
    question: "You are reviewing a scheduled analytics rule that frequently times out. Which three KQL techniques should you apply to improve performance?",
    scenario: `<div class="scenario-text"><p>The rule joins SecurityEvent, DeviceInfo, and IdentityInfo with a 12-hour lookback and is hitting the 10-minute query limit.</p></div>`,
    options: [
      { id: "A", text: "Move time filters (ago()) to the earliest possible point in each subquery" },
      { id: "B", text: "Replace join kind=inner with join kind=innerunique where uniqueness is acceptable" },
      { id: "C", text: "Use materialize() on any subquery that is referenced more than once" },
      { id: "D", text: "Add a summarize before every join to reduce row count" },
      { id: "E", text: "Increase the rule frequency to every 24 hours" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Early time filtering and materialize() are primary performance levers. innerunique can reduce intermediate row counts when duplicate keys are not required. Blind summarization before joins can destroy the granularity needed for accurate detection. Changing frequency does not fix the underlying query cost."
  },
  {
    id: 17,
    qid: "SC-500-MOD4-017",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "dragdrop",
    question: "Order the steps required to create and enable a scheduled analytics rule that uses a watchlist for exclusion.",
    scenario: `<div class="scenario-text"><p>You must implement a detection that excludes a list of known-good service accounts stored in a watchlist named 'BenignAccounts'.</p></div>`,
    options: [
      { id: "1", text: "Create or update the watchlist 'BenignAccounts' with the service account UPNs" },
      { id: "2", text: "Author the KQL query that references _GetWatchlist('BenignAccounts') and applies a !in filter" },
      { id: "3", text: "Configure entity mapping, severity, and incident configuration on the analytics rule" },
      { id: "4", text: "Set the rule to Enabled and validate with a manual run or the rule testing pane" },
      { id: "5", text: "Create an automation rule that auto-closes any remaining false positives" }
    ],
    answer: ["1", "2", "3", "4"],
    explanation: "Watchlist must exist first. The query must reference it. Entity mapping and severity are configured next. The rule is then enabled. An automation rule for residual false positives is optional and not part of the core creation sequence."
  },
  {
    id: 18,
    qid: "SC-500-MOD4-018",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "dragdrop",
    question: "Sequence the actions performed by Microsoft Sentinel when a scheduled analytics rule fires and an automation rule is configured to run a playbook.",
    scenario: `<div class="scenario-text"><p>Document the exact runtime order for SOC runbooks.</p></div>`,
    options: [
      { id: "1", text: "The analytics rule query executes and returns result rows" },
      { id: "2", text: "An incident is created (or an existing incident is updated) with mapped entities" },
      { id: "3", text: "Automation rule conditions are evaluated against the incident" },
      { id: "4", text: "Matching automation rules trigger the associated Logic App playbook(s)" },
      { id: "5", text: "The playbook runs and can update the incident or take external actions" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Query execution precedes incident creation. Automation rules evaluate only after the incident exists. Playbooks run last and can further enrich or respond."
  },
  {
    id: 19,
    qid: "SC-500-MOD4-019",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "dragdrop",
    question: "Arrange the steps to convert an existing hunting query into a scheduled analytics rule.",
    scenario: `<div class="scenario-text"><p>A successful hunting query must be operationalized as a continuous detection.</p></div>`,
    options: [
      { id: "1", text: "Open the hunting query and select 'Create analytics rule'" },
      { id: "2", text: "Review and adjust the KQL if necessary for scheduled execution" },
      { id: "3", text: "Configure the schedule (frequency and lookback), entity mapping, and alert details" },
      { id: "4", text: "Set the rule status to Enabled" },
      { id: "5", text: "Create a corresponding automation rule for response" }
    ],
    answer: ["1", "2", "3", "4"],
    explanation: "The portal action 'Create analytics rule' from a hunting query starts the wizard. Query review, schedule/entity configuration, and enabling are mandatory. Automation rule creation is a separate subsequent step."
  },
  {
    id: 20,
    qid: "SC-500-MOD4-020",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "dragdrop",
    question: "Order the recommended process for testing a new Logic App playbook before attaching it to a production automation rule.",
    scenario: `<div class="scenario-text"><p>You must validate that the playbook correctly receives entities and updates the incident without side effects.</p></div>`,
    options: [
      { id: "1", text: "Create the playbook with the Microsoft Sentinel incident trigger" },
      { id: "2", text: "Run a manual test from an existing incident using 'Run playbook'" },
      { id: "3", text: "Inspect the Logic App run history and incident comments/tags for expected outcomes" },
      { id: "4", text: "Attach the playbook to an automation rule scoped to a non-production analytics rule or tag" },
      { id: "5", text: "Promote the automation rule to production incidents after successful validation" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Build first, manual test second, validate third, limited automation fourth, full production last."
  },
  {
    id: 21,
    qid: "SC-500-MOD4-021",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "dragdrop",
    question: "Sequence the steps to add a custom parameter to a Microsoft Sentinel workbook that filters incidents by a user-selected severity.",
    scenario: `<div class="scenario-text"><p>The workbook must allow analysts to choose one or more severity values and refresh all tiles accordingly.</p></div>`,
    options: [
      { id: "1", text: "Edit the workbook and add a new parameter of type 'Drop down'" },
      { id: "2", text: "Configure the parameter to query distinct Severity values from SecurityIncident" },
      { id: "3", text: "Reference the parameter in each query using the {Severity} placeholder or dynamic syntax" },
      { id: "4", text: "Save the workbook and verify the parameter appears in the toolbar" },
      { id: "5", text: "Publish the workbook to the content hub" }
    ],
    answer: ["1", "2", "3", "4"],
    explanation: "Parameter creation, data population, query binding, and save are required. Publishing to the content hub is optional and not part of basic customization."
  },
  {
    id: 22,
    qid: "SC-500-MOD4-022",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "dragdrop",
    question: "Arrange the order of operations when an automation rule contains both an incident update action and a playbook action.",
    scenario: `<div class="scenario-text"><p>The automation rule is configured to set severity to High and then run a notification playbook.</p></div>`,
    options: [
      { id: "1", text: "Incident is created or updated by the analytics rule" },
      { id: "2", text: "Automation rule condition group evaluates to true" },
      { id: "3", text: "Built-in actions (severity change, tag, owner) are applied to the incident" },
      { id: "4", text: "Playbook(s) are triggered with the updated incident context" },
      { id: "5", text: "Playbook execution completes and may further modify the incident" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Built-in automation actions execute before playbooks so that the playbook receives the already-updated incident state."
  },
  {
    id: 23,
    qid: "SC-500-MOD4-023",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "dragdrop",
    question: "Order the steps to implement entity enrichment inside a scheduled analytics rule using a watchlist.",
    scenario: `<div class="scenario-text"><p>You want each incident to carry an additional custom detail 'Department' pulled from a watchlist keyed by UserPrincipalName.</p></div>`,
    options: [
      { id: "1", text: "Ensure the watchlist contains UserPrincipalName and Department columns" },
      { id: "2", text: "In the analytics rule query, join or lookup the watchlist on UserPrincipalName" },
      { id: "3", text: "Project the Department column as a custom detail in the query results" },
      { id: "4", text: "Map the custom detail in the analytics rule 'Custom details' section" },
      { id: "5", text: "Create an automation rule that writes the Department into an incident comment" }
    ],
    answer: ["1", "2", "3", "4"],
    explanation: "Watchlist preparation, join/lookup, projection, and custom-detail mapping are required for the enrichment to appear on the incident. Writing to a comment via automation is optional post-processing."
  },
  {
    id: 24,
    qid: "SC-500-MOD4-024",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "dragdrop",
    question: "Sequence the actions to troubleshoot an analytics rule that is enabled but produces zero incidents.",
    scenario: `<div class="scenario-text"><p>The rule has been running for 48 hours with no results despite known matching activity in the source tables.</p></div>`,
    options: [
      { id: "1", text: "Open the analytics rule and review the 'Last run' and 'Failures' information" },
      { id: "2", text: "Copy the KQL into the Logs blade and execute it with the same lookback window" },
      { id: "3", text: "Verify entity mapping and that the query returns the expected columns" },
      { id: "4", text: "Check for suppression rules, watchlist exclusions, or automation rules that auto-close" },
      { id: "5", text: "Increase the rule severity to High to force incident creation" }
    ],
    answer: ["1", "2", "3", "4"],
    explanation: "Start with the rule's own run history, reproduce the query, validate mapping, then examine suppressions. Severity does not control whether an incident is created when results exist."
  },
  {
    id: 25,
    qid: "SC-500-MOD4-025",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "dragdrop",
    question: "Arrange the steps to grant a Logic App playbook the permissions required to update incidents and call Microsoft Graph.",
    scenario: `<div class="scenario-text"><p>The playbook uses a system-assigned managed identity.</p></div>`,
    options: [
      { id: "1", text: "Enable the system-assigned managed identity on the Logic App" },
      { id: "2", text: "Assign the Microsoft Sentinel Responder role to the managed identity on the workspace" },
      { id: "3", text: "Grant the managed identity appropriate Microsoft Graph application permissions (e.g., SecurityEvents.ReadWrite.All) via Entra ID" },
      { id: "4", text: "Update the Logic App actions to use the managed identity authentication type" },
      { id: "5", text: "Restart the Sentinel workspace to apply the new identity" }
    ],
    answer: ["1", "2", "3", "4"],
    explanation: "Identity must be enabled, RBAC assigned, Graph permissions consented, then actions configured. Workspace restart is unnecessary."
  },
  {
    id: 26,
    qid: "SC-500-MOD4-026",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "dragdrop",
    question: "Order the process for using a Microsoft Sentinel notebook (Jupyter) to prototype a detection before converting it to an analytics rule.",
    scenario: `<div class="scenario-text"><p>Data scientists on the team prefer notebooks for exploratory analysis.</p></div>`,
    options: [
      { id: "1", text: "Launch a notebook from the Sentinel Notebooks blade or attach an existing compute" },
      { id: "2", text: "Authenticate and load the relevant tables using the MSTICPy or Kqlmagic extensions" },
      { id: "3", text: "Develop and validate the detection logic inside the notebook" },
      { id: "4", text: "Export or copy the final KQL into a new scheduled analytics rule" },
      { id: "5", text: "Delete the notebook after the rule is created" }
    ],
    answer: ["1", "2", "3", "4"],
    explanation: "Launch, authenticate, develop, then operationalize. Notebook retention is a governance decision, not a required step."
  },
  {
    id: 27,
    qid: "SC-500-MOD4-027",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "dragdrop",
    question: "Sequence the configuration of an automation rule that must run only during business hours and only for High severity incidents.",
    scenario: `<div class="scenario-text"><p>The SOC wants automated response suppressed outside 08:00-18:00 local time.</p></div>`,
    options: [
      { id: "1", text: "Create a new automation rule and set the trigger to 'When incident is created'" },
      { id: "2", text: "Add a condition for Incident severity equals High" },
      { id: "3", text: "Add a condition that evaluates the current time against a business-hours expression or use a Logic App time filter" },
      { id: "4", text: "Attach the desired playbook and set the rule to Enabled" },
      { id: "5", text: "Configure the analytics rule to only run during business hours" }
    ],
    answer: ["1", "2", "3", "4"],
    explanation: "Automation rule trigger, severity condition, time condition (or playbook-side filter), then enable. Analytics rule schedule is independent of automation rule time windows."
  },
  {
    id: 28,
    qid: "SC-500-MOD4-028",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "dragdrop",
    question: "Arrange the steps to surface a custom analytic rule's results as a tile inside a Microsoft Sentinel workbook.",
    scenario: `<div class="scenario-text"><p>You want a near-real-time count of incidents generated by a specific analytics rule.</p></div>`,
    options: [
      { id: "1", text: "Note the exact analytics rule name or ID" },
      { id: "2", text: "Edit the workbook and add a new query tile against the SecurityIncident table" },
      { id: "3", text: "Filter the query with | where Title contains 'rule-name' or use the ProviderName / ProductName fields" },
      { id: "4", text: "Configure visualization (number, chart, etc.) and save the workbook" },
      { id: "5", text: "Create a new analytics rule that writes to a custom table for the workbook" }
    ],
    answer: ["1", "2", "3", "4"],
    explanation: "Identify the rule, query SecurityIncident, filter appropriately, visualize. A separate custom table is unnecessary."
  },
  {
    id: 29,
    qid: "SC-500-MOD4-029",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "hotspot",
    question: "In the Microsoft Sentinel Analytics rule wizard, which blade must you select to define the KQL query and the query scheduling parameters?",
    scenario: `<div class="scenario-text"><p>You are creating a new scheduled analytics rule and need to locate the section where the detection logic and the run frequency are configured.</p></div>`,
    options: [
      { id: "A", text: "Set rule logic" },
      { id: "B", text: "Incident settings" },
      { id: "C", text: "Automated response" },
      { id: "D", text: "Review and create" }
    ],
    answer: ["A"],
    explanation: "The 'Set rule logic' blade contains the KQL editor, entity mapping, custom details, and the schedule (rule frequency and lookback period). Incident settings control grouping, Automated response links automation rules, and Review and create is the final validation step."
  },
  {
    id: 30,
    qid: "SC-500-MOD4-030",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "hotspot",
    question: "Inside a Microsoft Sentinel automation rule, which configuration area allows you to attach one or more Logic App playbooks?",
    scenario: `<div class="scenario-text"><p>You have already defined the conditions and now need to specify the response actions that include running a playbook.</p></div>`,
    options: [
      { id: "A", text: "Actions section – Run playbook" },
      { id: "B", text: "Conditions section – Entity properties" },
      { id: "C", text: "Trigger section – Incident created" },
      { id: "D", text: "Analytics rule section – Rule name filter" }
    ],
    answer: ["A"],
    explanation: "The Actions section of an automation rule is where you choose 'Run playbook' and select the Logic App. Conditions and Trigger define when the rule fires; the analytics rule filter is a condition, not the place to attach playbooks."
  },
  {
    id: 31,
    qid: "SC-500-MOD4-031",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "hotspot",
    question: "In the Microsoft Sentinel Workbooks gallery, which template provides the primary view of SOC efficiency metrics such as MTTA and MTTR?",
    scenario: `<div class="scenario-text"><p>You need to open the standard workbook that executives use for monthly SOC performance reporting.</p></div>`,
    options: [
      { id: "A", text: "SecurityOperationsEfficiency" },
      { id: "B", text: "InvestigationInsights" },
      { id: "C", text: "ThreatIntelligence" },
      { id: "D", text: "AnalyticsRules" }
    ],
    answer: ["A"],
    explanation: "SecurityOperationsEfficiency is the built-in workbook that surfaces mean time to acknowledge, mean time to resolve, and related operational KPIs. The other templates focus on investigation paths, TI indicators, or rule status."
  },
  {
    id: 32,
    qid: "SC-500-MOD4-032",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "hotspot",
    question: "When editing a Logic App playbook that was created from a Microsoft Sentinel template, which designer element represents the trigger that receives the incident object?",
    scenario: `<div class="scenario-text"><p>You open the playbook in the Logic App designer and must identify the first step that supplies the incident dynamic content.</p></div>`,
    options: [
      { id: "A", text: "When Azure Sentinel incident creation rule was triggered (or Microsoft Sentinel incident trigger)" },
      { id: "B", text: "HTTP Webhook trigger" },
      { id: "C", text: "Recurrence trigger" },
      { id: "D", text: "Manual trigger (button)" }
    ],
    answer: ["A"],
    explanation: "Sentinel-generated playbooks start with the Microsoft Sentinel incident trigger (historically labeled 'When Azure Sentinel incident creation rule was triggered'). The other triggers are generic Logic App triggers and do not automatically receive the incident payload."
  },
  {
    id: 33,
    qid: "SC-500-MOD4-033",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "hotspot",
    question: "In the Microsoft Sentinel Analytics blade, which column indicates whether an analytics rule is currently producing incidents?",
    scenario: `<div class="scenario-text"><p>You are auditing all rules and need to quickly identify which rules are enabled and healthy versus those that are disabled or failing.</p></div>`,
    options: [
      { id: "A", text: "Status (Enabled / Disabled)" },
      { id: "B", text: "Tactics" },
      { id: "C", text: "Data sources" },
      { id: "D", text: "Last modified" }
    ],
    answer: ["A"],
    explanation: "The Status column directly shows Enabled or Disabled. Tactics, data sources, and last modified provide context but do not indicate operational state."
  },
  {
    id: 34,
    qid: "SC-500-MOD4-034",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "hotspot",
    question: "Inside the automation rule editor, which condition type allows you to filter on the name of the analytics rule that generated the incident?",
    scenario: `<div class="scenario-text"><p>You want the automation rule to run only for incidents created by a specific analytics rule named 'SuspiciousSignin-FromNewCountry'.</p></div>`,
    options: [
      { id: "A", text: "Analytics rule name (or Alert title / Rule name condition)" },
      { id: "B", text: "Entity property – Account" },
      { id: "C", text: "Custom detail – Department" },
      { id: "D", text: "Incident status" }
    ],
    answer: ["A"],
    explanation: "Automation rules expose a condition that matches on the analytics rule name (or the resulting alert title). Entity and custom-detail conditions operate on different data; incident status is a separate property."
  },
  {
    id: 35,
    qid: "SC-500-MOD4-035",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Identify the correct KQL fragment that excludes a watchlist of known-good IP addresses from a detection query.",
    scenario: `<div class="scenario-text"><p>The analytics rule must ignore any SrcIP that appears in the 'TrustedIPs' watchlist.</p></div>`,
    options: [
      { id: "A", text: "| where SrcIP !in ( (_GetWatchlist('TrustedIPs') | project SearchKey) )" },
      { id: "B", text: "| join kind=inner _GetWatchlist('TrustedIPs') on $left.SrcIP == $right.SearchKey" },
      { id: "C", text: "| where SrcIP in (_GetWatchlist('TrustedIPs'))" },
      { id: "D", text: "| extend Trusted = _GetWatchlist('TrustedIPs') | where SrcIP == Trusted" }
    ],
    answer: ["A"],
    explanation: "The !in operator combined with a projected SearchKey from _GetWatchlist is the standard exclusion pattern. An inner join would keep only matching (trusted) rows, the opposite of the requirement. 'in' includes the trusted set. The extend syntax is invalid for watchlist evaluation."
  },
  {
    id: 36,
    qid: "SC-500-MOD4-036",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Select the KQL statement that correctly materializes a subquery for reuse in a complex analytics rule.",
    scenario: `<div class="scenario-text"><p>The same filtered SecurityEvent set is joined twice later in the query; you must avoid scanning the table twice.</p></div>`,
    options: [
      { id: "A", text: "let CriticalEvents = materialize(SecurityEvent | where EventID in (4624,4625) | where TimeGenerated > ago(1h));" },
      { id: "B", text: "let CriticalEvents = SecurityEvent | where EventID in (4624,4625) | materialize;" },
      { id: "C", text: "materialize(SecurityEvent | where EventID in (4624,4625));" },
      { id: "D", text: "SecurityEvent | materialize | where EventID in (4624,4625)" }
    ],
    answer: ["A"],
    explanation: "materialize() must wrap the entire tabular expression that should be cached, and the result is assigned to a let variable for later reference. The other syntaxes are invalid or incomplete."
  },
  {
    id: 37,
    qid: "SC-500-MOD4-037",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Which KQL operator correctly performs a left-side anti-join to keep only events that have no matching entity in a reference table?",
    scenario: `<div class="scenario-text"><p>You need rows from SigninLogs that do not appear in a list of previously seen UserPrincipalNames stored in a temporary table.</p></div>`,
    options: [
      { id: "A", text: "| join kind=leftanti PreviousUsers on UserPrincipalName" },
      { id: "B", text: "| join kind=leftsemi PreviousUsers on UserPrincipalName" },
      { id: "C", text: "| join kind=inner PreviousUsers on UserPrincipalName" },
      { id: "D", text: "| join kind=rightanti PreviousUsers on UserPrincipalName" }
    ],
    answer: ["A"],
    explanation: "leftanti returns left-side rows that have no match on the right. leftsemi returns left-side rows that do have a match. inner returns only matches. rightanti keeps right-side rows without left matches."
  },
  {
    id: 38,
    qid: "SC-500-MOD4-038",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Identify the correct entity mapping snippet for an analytics rule that surfaces both an Account and an IP entity.",
    scenario: `<div class="scenario-text"><p>The query projects UserPrincipalName and SrcIPAddress. You must configure the entity mappings so the incident graph is correct.</p></div>`,
    options: [
      { id: "A", text: "Account = UserPrincipalName (FullName), IP = SrcIPAddress (Address)" },
      { id: "B", text: "Account = SrcIPAddress (Address), IP = UserPrincipalName (FullName)" },
      { id: "C", text: "Host = UserPrincipalName (HostName), IP = SrcIPAddress (Address)" },
      { id: "D", text: "Account = UserPrincipalName (Sid), IP = SrcIPAddress (Address)" }
    ],
    answer: ["A"],
    explanation: "UserPrincipalName maps to Account.FullName (or AadUserId). SrcIPAddress maps to IP.Address. Mapping IP to Account or UPN to Host produces incorrect entity types. Sid is not the appropriate identifier for a UPN column."
  },
  {
    id: 39,
    qid: "SC-500-MOD4-039",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Select the KQL pattern that safely retrieves the most recent record per Account within a 24-hour window for use in an analytics rule.",
    scenario: `<div class="scenario-text"><p>You need only the latest SigninLogs event for each UserPrincipalName inside the lookback period.</p></div>`,
    options: [
      { id: "A", text: "SigninLogs | where TimeGenerated > ago(24h) | summarize arg_max(TimeGenerated, *) by UserPrincipalName" },
      { id: "B", text: "SigninLogs | where TimeGenerated > ago(24h) | top 1 by TimeGenerated desc" },
      { id: "C", text: "SigninLogs | summarize max(TimeGenerated) by UserPrincipalName" },
      { id: "D", text: "SigninLogs | where TimeGenerated > ago(24h) | distinct UserPrincipalName" }
    ],
    answer: ["A"],
    explanation: "arg_max(TimeGenerated, *) returns the entire row that contains the maximum TimeGenerated for each UserPrincipalName. 'top 1' returns only one row for the whole table. max() alone returns only the timestamp. distinct loses all other columns."
  },
  {
    id: 40,
    qid: "SC-500-MOD4-040",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Operations",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Which KQL statement correctly creates a dynamic array of tags that can be written back to an incident via a playbook or custom detail?",
    scenario: `<div class="scenario-text"><p>The detection logic determines three tags that should be attached to the resulting incident.</p></div>`,
    options: [
      { id: "A", text: "| extend Tags = dynamic(['HighRisk', 'Identity', 'Automated'])" },
      { id: "B", text: "| extend Tags = pack_array('HighRisk', 'Identity', 'Automated')" },
      { id: "C", text: "| extend Tags = array_concat('HighRisk', 'Identity', 'Automated')" },
      { id: "D", text: "| extend Tags = 'HighRisk,Identity,Automated'" }
    ],
    answer: ["A"],
    explanation: "dynamic([...]) is the idiomatic way to create a dynamic array literal in KQL. pack_array is also valid but dynamic is preferred for static lists. array_concat expects arrays, not strings. A plain string is not an array and will not map correctly to multi-value tags."
  },
  {
    id: 41,
    qid: "SC-500-MOD4-041",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "single",
    question: "In the Microsoft Defender XDR unified portal, which capability allows an analyst to visualize the full blast radius of a compromised identity across devices, cloud apps, and email in a single investigation graph?",
    scenario: `<div class="scenario-text"><p>An incident has been created from a high-severity identity alert. The SOC lead requires a single view that shows every device the account signed into, every cloud app session, and every email the account sent or received after the initial compromise timestamp.</p></div>`,
    options: [
      { id: "A", text: "Advanced hunting with a multi-table KQL join" },
      { id: "B", text: "Incident graph with cross-domain entity correlation" },
      { id: "C", text: "Device timeline only inside Microsoft Defender for Endpoint" },
      { id: "D", text: "Attack simulation replay from Microsoft Defender for Office 365" }
    ],
    answer: ["B"],
    explanation: "The Microsoft Defender XDR incident graph automatically correlates entities across Defender for Endpoint, Identity, Office 365, and Cloud Apps, rendering the blast radius in one interactive view. Advanced hunting can retrieve the data but does not produce the visual graph. Device timeline is scoped to a single device. Attack simulation is a training feature, not an investigation tool."
  },
  {
    id: 42,
    qid: "SC-500-MOD4-042",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "single",
    question: "Which Defender XDR feature automatically surfaces a multi-stage attack story by linking alerts that share common entities and temporal proximity?",
    scenario: `<div class="scenario-text"><p>Several low-severity alerts from Defender for Endpoint, Defender for Identity, and Defender for Cloud Apps have been generated within a two-hour window and all reference the same user principal name. The analyst needs the platform to assemble these into a coherent attack narrative without manual stitching.</p></div>`,
    options: [
      { id: "A", text: "Incident correlation engine with automatic alert grouping" },
      { id: "B", text: "Custom detection rule written in KQL" },
      { id: "C", text: "Manual tagging of each alert with a common incident ID" },
      { id: "D", text: "Export of alerts to Microsoft Sentinel for correlation" }
    ],
    answer: ["A"],
    explanation: "Defender XDR’s incident correlation engine continuously evaluates entity overlap, time proximity, and kill-chain stage to merge related alerts into a single incident that presents a multi-stage attack story. Custom KQL rules and manual tagging are analyst-driven. Exporting to Sentinel is optional and not required for the native XDR correlation."
  },
  {
    id: 43,
    qid: "SC-500-MOD4-043",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "single",
    question: "When investigating a cross-domain incident in Microsoft Defender XDR, which data source provides the authoritative device process tree and network connection evidence?",
    scenario: `<div class="scenario-text"><p>The incident contains alerts from Defender for Identity and Defender for Cloud Apps. The analyst must pivot to the endpoint evidence that shows the exact process lineage and outbound connections initiated by the compromised account.</p></div>`,
    options: [
      { id: "A", text: "Microsoft Defender for Endpoint device timeline and process tree" },
      { id: "B", text: "Microsoft Entra ID sign-in logs only" },
      { id: "C", text: "Microsoft Defender for Office 365 email trace" },
      { id: "D", text: "Azure Activity Log for the subscription" }
    ],
    answer: ["A"],
    explanation: "Microsoft Defender for Endpoint supplies the process tree, command-line evidence, and network connection telemetry that complete the cross-domain picture. Entra ID sign-in logs show authentication events but not process execution. Office 365 email trace covers messaging only. Azure Activity Log is control-plane activity and does not contain endpoint process data."
  },
  {
    id: 44,
    qid: "SC-500-MOD4-044",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "single",
    question: "Which Microsoft Defender XDR capability enables an analyst to pivot from a Cloud App Security alert directly to the corresponding Microsoft Defender for Endpoint device page without leaving the unified portal?",
    scenario: `<div class="scenario-text"><p>A Defender for Cloud Apps alert indicates anomalous file download activity from a managed device. The analyst needs one-click navigation to the device’s full timeline, alerts, and response actions.</p></div>`,
    options: [
      { id: "A", text: "Unified entity page with cross-product deep links" },
      { id: "B", text: "Manual search for the device name in the Devices list" },
      { id: "C", text: "Export of the alert to a CSV and import into Defender for Endpoint" },
      { id: "D", text: "Creation of a new incident in Microsoft Sentinel" }
    ],
    answer: ["A"],
    explanation: "The unified entity pages in Microsoft Defender XDR surface deep links that open the corresponding Defender for Endpoint device blade, preserving context. Manual search breaks the investigation flow. CSV export is not required. Sentinel incident creation is a separate optional step."
  },
  {
    id: 45,
    qid: "SC-500-MOD4-045",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "multiselect",
    question: "Which three telemetry sources are automatically correlated by Microsoft Defender XDR when constructing a multi-stage attack story for an identity-centric incident?",
    scenario: `<div class="scenario-text"><p>A compromised user account has generated alerts across multiple Defender workloads. The incident graph must reflect the complete attack path.</p></div>`,
    options: [
      { id: "A", text: "Microsoft Defender for Identity (lateral movement and authentication anomalies)" },
      { id: "B", text: "Microsoft Defender for Endpoint (process execution and device compromise)" },
      { id: "C", text: "Microsoft Defender for Cloud Apps (SaaS session and data exfiltration)" },
      { id: "D", text: "Azure Firewall diagnostic logs" },
      { id: "E", text: "On-premises Sysmon event logs ingested via custom connector" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Defender XDR natively correlates Defender for Identity, Defender for Endpoint, and Defender for Cloud Apps telemetry into a single incident graph. Azure Firewall and custom Sysmon logs can be ingested into Sentinel but are not part of the automatic XDR cross-domain correlation engine."
  },
  {
    id: 46,
    qid: "SC-500-MOD4-046",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "multiselect",
    question: "When performing blast-radius analysis in Microsoft Defender XDR, which three entity types are automatically expanded in the incident graph?",
    scenario: `<div class="scenario-text"><p>An analyst has opened a high-severity incident and needs to understand every asset that could have been affected by the initial compromise.</p></div>`,
    options: [
      { id: "A", text: "User / Account entities" },
      { id: "B", text: "Device / Host entities" },
      { id: "C", text: "Mailbox / Email entities" },
      { id: "D", text: "Azure Resource Group entities" },
      { id: "E", text: "Kubernetes pod entities from Defender for Containers" }
    ],
    answer: ["A", "B", "C"],
    explanation: "The core Defender XDR incident graph expands Account, Device, and Mailbox/Email entities by default. Azure Resource Groups and Kubernetes pods appear only when additional Defender for Cloud or Defender for Containers signals are present and linked; they are not part of the default identity-centric blast-radius expansion."
  },
  {
    id: 47,
    qid: "SC-500-MOD4-047",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "multiselect",
    question: "Which two statements correctly describe the relationship between Microsoft Defender XDR incidents and Microsoft Sentinel incidents?",
    scenario: `<div class="scenario-text"><p>Your organization has both Defender XDR and Microsoft Sentinel enabled. You must document how incidents are synchronized.</p></div>`,
    options: [
      { id: "A", text: "Defender XDR incidents can be automatically mirrored into Microsoft Sentinel via the Defender XDR data connector" },
      { id: "B", text: "A Sentinel incident can be created from a Defender XDR incident without duplicating the underlying alerts" },
      { id: "C", text: "Closing a Defender XDR incident automatically closes the linked Sentinel incident and vice-versa by default" },
      { id: "D", text: "Sentinel incidents always take precedence and overwrite Defender XDR severity" },
      { id: "E", text: "Defender XDR incidents cannot be investigated inside the Sentinel portal" }
    ],
    answer: ["A", "B"],
    explanation: "The Microsoft Defender XDR connector streams incidents and alerts into Sentinel. Bi-directional sync can be configured so that status and assignment changes flow both ways, but it is not enabled by default for every property. Severity is not overwritten by Sentinel. Defender XDR incidents remain fully investigable inside the XDR portal; Sentinel provides an additional correlation layer."
  },
  {
    id: 48,
    qid: "SC-500-MOD4-048",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "multiselect",
    question: "Which three actions can an analyst perform directly from the Microsoft Defender XDR incident graph without leaving the unified portal?",
    scenario: `<div class="scenario-text"><p>During a live investigation the analyst needs to contain impact and gather additional evidence while remaining inside the incident view.</p></div>`,
    options: [
      { id: "A", text: "Isolate a device via Microsoft Defender for Endpoint" },
      { id: "B", text: "Disable a user account in Microsoft Entra ID" },
      { id: "C", text: "Trigger an Advanced Hunting query scoped to the selected entities" },
      { id: "D", text: "Create a new Azure Policy assignment" },
      { id: "E", text: "Deploy a new Microsoft Sentinel analytics rule" }
    ],
    answer: ["A", "B", "C"],
    explanation: "The incident graph exposes one-click response actions for device isolation, Entra ID account disablement (when licensed and permitted), and scoped Advanced Hunting. Azure Policy and Sentinel analytics rule creation are management-plane operations outside the XDR investigation experience."
  },
  {
    id: 49,
    qid: "SC-500-MOD4-049",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "multiselect",
    question: "Which two data types are required for Microsoft Defender XDR to build a complete multi-stage attack story that includes email-borne initial access?",
    scenario: `<div class="scenario-text"><p>The incident begins with a phishing email and progresses to endpoint execution and identity compromise. All relevant telemetry must be present.</p></div>`,
    options: [
      { id: "A", text: "Microsoft Defender for Office 365 email delivery and detonation telemetry" },
      { id: "B", text: "Microsoft Defender for Endpoint process and file evidence" },
      { id: "C", text: "Azure Network Watcher flow logs" },
      { id: "D", text: "Microsoft Purview audit logs for SharePoint only" },
      { id: "E", text: "On-premises Exchange message tracking logs" }
    ],
    answer: ["A", "B"],
    explanation: "Defender for Office 365 supplies the email vector; Defender for Endpoint supplies the post-click execution evidence. Network Watcher, Purview SharePoint-only logs, and on-premises Exchange tracking are not part of the native XDR email-to-endpoint correlation path."
  },
  {
    id: 50,
    qid: "SC-500-MOD4-050",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "multiselect",
    question: "When reviewing a Defender XDR incident that spans Identity, Endpoint, and Cloud Apps, which three timeline filters help an analyst isolate the blast-radius window?",
    scenario: `<div class="scenario-text"><p>The incident contains dozens of alerts over a 48-hour period. The analyst must focus on the critical 90-minute window after the first successful authentication anomaly.</p></div>`,
    options: [
      { id: "A", text: "Time-range slider on the incident timeline" },
      { id: "B", text: "Entity filter that retains only the compromised Account and its related Devices" },
      { id: "C", text: "Alert severity filter set to High and Medium" },
      { id: "D", text: "Azure subscription filter" },
      { id: "E", text: "Kubernetes namespace filter" }
    ],
    answer: ["A", "B", "C"],
    explanation: "The incident timeline slider, entity scope filter, and severity filter are the primary controls for narrowing blast-radius analysis. Subscription and Kubernetes filters apply only when those specific asset types are present and are not core to identity-endpoint-cloud-app investigations."
  },
  {
    id: 51,
    qid: "SC-500-MOD4-051",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "multiselect",
    question: "Which three statements about Microsoft Defender XDR automatic attack disruption are correct?",
    scenario: `<div class="scenario-text"><p>Your organization has enabled automatic attack disruption for high-confidence identity and ransomware scenarios.</p></div>`,
    options: [
      { id: "A", text: "It can automatically contain compromised user accounts and devices when confidence thresholds are met" },
      { id: "B", text: "Actions taken by automatic attack disruption appear in the incident graph and action history" },
      { id: "C", text: "It requires Microsoft 365 E5 or equivalent licensing that includes the relevant Defender workloads" },
      { id: "D", text: "It replaces the need for any SOC analyst review of the incident" },
      { id: "E", text: "It can delete user mailboxes without analyst approval" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Automatic attack disruption performs containment (account disablement, device isolation) for high-confidence scenarios, logs every action, and is a licensed capability. It does not eliminate analyst review and does not perform irreversible mailbox deletion."
  },
  {
    id: 52,
    qid: "SC-500-MOD4-052",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "multiselect",
    question: "Which two pivot points inside a Defender XDR incident allow an analyst to move from an identity alert to the corresponding Microsoft Defender for Cloud Apps session data?",
    scenario: `<div class="scenario-text"><p>A Defender for Identity alert shows anomalous Kerberos activity. The analyst needs to examine the SaaS application sessions that occurred immediately afterward.</p></div>`,
    options: [
      { id: "A", text: "Account entity page → Cloud apps tab" },
      { id: "B", text: "Incident graph node for the user → related Cloud App activities" },
      { id: "C", text: "Azure Activity Log search for the same UPN" },
      { id: "D", text: "Microsoft Purview eDiscovery case creation" },
      { id: "E", text: "Sentinel workbook for Cloud App Security only" }
    ],
    answer: ["A", "B"],
    explanation: "Both the Account entity page and the incident graph provide direct navigation to Cloud App activity linked to that identity. Azure Activity Log, Purview eDiscovery, and Sentinel workbooks are separate experiences and not the primary XDR pivot paths."
  },
  {
    id: 53,
    qid: "SC-500-MOD4-053",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "multiselect",
    question: "Which three evidence types are visible on a Microsoft Defender for Endpoint device page when opened from a Defender XDR incident?",
    scenario: `<div class="scenario-text"><p>The analyst has clicked through from the incident graph to a specific device and needs to review the full forensic context.</p></div>`,
    options: [
      { id: "A", text: "Process tree and command-line history" },
      { id: "B", text: "Network connection and listening port evidence" },
      { id: "C", text: "Logged-on users and authentication events" },
      { id: "D", text: "Azure Resource Manager deployment history" },
      { id: "E", text: "Microsoft Teams chat messages" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Defender for Endpoint device pages surface process trees, network connections, and logged-on user information. ARM deployment history and Teams messages are outside the endpoint evidence scope."
  },
  {
    id: 54,
    qid: "SC-500-MOD4-054",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "multiselect",
    question: "When Microsoft Defender XDR correlates alerts into a single incident, which three factors influence the grouping decision?",
    scenario: `<div class="scenario-text"><p>Multiple alerts from different Defender products have been generated. You must understand why they appeared in the same incident.</p></div>`,
    options: [
      { id: "A", text: "Shared entities (Account, Device, Mailbox, IP)" },
      { id: "B", text: "Temporal proximity of the alerts" },
      { id: "C", text: "Kill-chain stage and MITRE ATT&CK tactic alignment" },
      { id: "D", text: "Identical alert title strings only" },
      { id: "E", text: "Same Azure subscription ID" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Entity overlap, time proximity, and kill-chain / ATT&CK alignment are the primary correlation signals used by Defender XDR. Identical titles or shared subscription IDs alone are insufficient for automatic grouping."
  },
  {
    id: 55,
    qid: "SC-500-MOD4-055",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "multiselect",
    question: "Which two capabilities does the Microsoft Defender XDR unified advanced hunting experience provide that are not available when hunting inside a single Defender product portal?",
    scenario: `<div class="scenario-text"><p>An analyst needs to write a single KQL query that spans endpoint, identity, and email tables.</p></div>`,
    options: [
      { id: "A", text: "Cross-workload joins across Device*, Identity*, and Email* tables in one query" },
      { id: "B", text: "Automatic rendering of results as an incident graph node set" },
      { id: "C", text: "Ability to create a custom detection rule that triggers across all workloads" },
      { id: "D", text: "Direct editing of Microsoft Sentinel analytics rules from the hunting blade" },
      { id: "E", text: "Execution of Python notebooks inside the hunting UI" }
    ],
    answer: ["A", "C"],
    explanation: "Unified advanced hunting allows multi-table joins across Defender workloads and the creation of custom detection rules that operate on the combined schema. Incident graph rendering and Sentinel rule editing are separate experiences; Python notebooks are not hosted inside the XDR hunting UI."
  },
  {
    id: 56,
    qid: "SC-500-MOD4-056",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "multiselect",
    question: "Which three response actions available from a Defender XDR incident are considered containment actions that reduce blast radius?",
    scenario: `<div class="scenario-text"><p>The SOC manager has authorized immediate containment while the full investigation continues.</p></div>`,
    options: [
      { id: "A", text: "Isolate device from the network" },
      { id: "B", text: "Disable user account in Microsoft Entra ID" },
      { id: "C", text: "Block a file hash across the organization via Indicator" },
      { id: "D", text: "Add a comment to the incident" },
      { id: "E", text: "Assign the incident to a different analyst" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Device isolation, account disablement, and organization-wide file-hash blocking directly limit further compromise. Comments and re-assignment are collaboration actions, not containment."
  },
  {
    id: 57,
    qid: "SC-500-MOD4-057",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "dragdrop",
    question: "Order the typical investigation flow an analyst follows when pivoting through a multi-stage Defender XDR incident that began with a phishing email.",
    scenario: `<div class="scenario-text"><p>Document the recommended sequence for a junior analyst handling their first cross-domain incident.</p></div>`,
    options: [
      { id: "1", text: "Open the incident and review the attack story summary and severity" },
      { id: "2", text: "Examine the email entity and Defender for Office 365 detonation results" },
      { id: "3", text: "Pivot to the device that executed the malicious payload and review the process tree" },
      { id: "4", text: "Expand the Account entity to identify additional devices and cloud-app sessions" },
      { id: "5", text: "Apply containment actions (isolate devices, disable account) and update incident status" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Start with the incident overview, then follow the kill chain from initial email access, to endpoint execution, to identity and cloud expansion, and finally containment."
  },
  {
    id: 58,
    qid: "SC-500-MOD4-058",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "dragdrop",
    question: "Sequence the steps required to enable bi-directional incident sync between Microsoft Defender XDR and Microsoft Sentinel.",
    scenario: `<div class="scenario-text"><p>Your SOC wants status and assignment changes made in either portal to be reflected in the other.</p></div>`,
    options: [
      { id: "1", text: "Ensure the Microsoft Defender XDR data connector is installed and connected in Sentinel" },
      { id: "2", text: "In the Defender XDR portal, open Settings > Microsoft Sentinel and enable incident sync" },
      { id: "3", text: "Select the target Sentinel workspace and configure the desired sync direction and properties" },
      { id: "4", text: "Validate that a test incident created in Defender XDR appears in Sentinel and that status changes flow both ways" },
      { id: "5", text: "Create a new analytics rule in Sentinel that mirrors every Defender XDR alert" }
    ],
    answer: ["1", "2", "3", "4"],
    explanation: "Connector installation, portal-side enablement, workspace selection, and validation are required. A separate analytics rule is unnecessary for incident sync."
  },
  {
    id: 59,
    qid: "SC-500-MOD4-059",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "dragdrop",
    question: "Arrange the order of evidence collection when performing blast-radius analysis on a compromised identity inside Defender XDR.",
    scenario: `<div class="scenario-text"><p>The identity has been confirmed compromised. You must map every affected asset before containment.</p></div>`,
    options: [
      { id: "1", text: "Open the Account entity page from the incident graph" },
      { id: "2", text: "Review sign-in activity and risky sign-ins from Microsoft Entra ID" },
      { id: "3", text: "List all devices the account has logged on to via Defender for Endpoint" },
      { id: "4", text: "Examine Cloud App sessions and downloaded files via Defender for Cloud Apps" },
      { id: "5", text: "Check email activity and forwarded rules via Defender for Office 365" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Begin with the Account entity, then systematically expand to authentication, devices, cloud apps, and email—the natural blast-radius order for an identity-centric compromise."
  },
  {
    id: 60,
    qid: "SC-500-MOD4-060",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "dragdrop",
    question: "Order the steps to create a custom detection rule in Microsoft Defender XDR that spans endpoint and identity tables.",
    scenario: `<div class="scenario-text"><p>You have validated a KQL query in advanced hunting that detects a specific lateral-movement pattern and now want it to generate alerts automatically.</p></div>`,
    options: [
      { id: "1", text: "Open Advanced hunting and finalize the multi-table KQL query" },
      { id: "2", text: "Select 'Create detection rule' from the hunting results pane" },
      { id: "3", text: "Configure the rule name, frequency, severity, and impacted entities" },
      { id: "4", text: "Map the query columns to the required entity types (Account, Device, etc.)" },
      { id: "5", text: "Enable the rule and verify the first alert appears in the Incidents queue" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Query finalization, detection-rule creation, metadata configuration, entity mapping, and enablement form the required sequence."
  },
  {
    id: 61,
    qid: "SC-500-MOD4-061",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "dragdrop",
    question: "Sequence the analyst actions when using the incident graph to identify additional compromised devices after an initial device isolation.",
    scenario: `<div class="scenario-text"><p>One device has been isolated. The graph still shows lateral movement indicators to other hosts.</p></div>`,
    options: [
      { id: "1", text: "Select the isolated device node in the incident graph" },
      { id: "2", text: "Expand related Account and Network entities connected to that device" },
      { id: "3", text: "Identify additional Device nodes that share the same Account or suspicious network connections" },
      { id: "4", text: "Open each newly identified device page and review process and timeline evidence" },
      { id: "5", text: "Apply isolation or other containment actions to the newly confirmed devices" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Start from the known-good contained device, expand its relationships, locate additional devices, validate evidence, then contain."
  },
  {
    id: 62,
    qid: "SC-500-MOD4-062",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "dragdrop",
    question: "Arrange the steps to investigate a multi-stage ransomware attack story inside Microsoft Defender XDR.",
    scenario: `<div class="scenario-text"><p>Alerts indicate encryption activity on several devices preceded by suspicious PowerShell and credential access.</p></div>`,
    options: [
      { id: "1", text: "Open the ransomware-related incident and review the automatic attack story" },
      { id: "2", text: "Identify the initial access vector (email, remote desktop, or software vulnerability)" },
      { id: "3", text: "Trace the credential theft and lateral movement stages via Identity and Endpoint alerts" },
      { id: "4", text: "Locate the encryption process tree and impacted files on each device" },
      { id: "5", text: "Execute containment (isolate devices, block hashes, disable accounts) and begin recovery" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Follow the kill-chain order presented by the attack story: initial access, credential access / lateral movement, impact (encryption), then containment and recovery."
  },
  {
    id: 63,
    qid: "SC-500-MOD4-063",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "dragdrop",
    question: "Order the configuration steps to surface Defender for Cloud Apps alerts inside the same Defender XDR incident as related Endpoint and Identity alerts.",
    scenario: `<div class="scenario-text"><p>Cloud App alerts are currently appearing as separate incidents. You need unified correlation.</p></div>`,
    options: [
      { id: "1", text: "Confirm Microsoft Defender for Cloud Apps is connected to the Microsoft 365 Defender / XDR portal" },
      { id: "2", text: "Verify that the Cloud App alerts contain entities (Account, Device, IP) that overlap with other workloads" },
      { id: "3", text: "Allow the Defender XDR correlation engine to evaluate the new alerts for grouping" },
      { id: "4", text: "Review the resulting merged incident and adjust any suppression rules if over-grouping occurs" },
      { id: "5", text: "Create a custom KQL detection that forces Cloud App alerts into existing incidents" }
    ],
    answer: ["1", "2", "3", "4"],
    explanation: "Connectivity, entity presence, automatic correlation, and review are the required steps. A custom detection is not needed for native correlation."
  },
  {
    id: 64,
    qid: "SC-500-MOD4-064",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "dragdrop",
    question: "Sequence the steps an analyst takes to export a Defender XDR incident’s attack story and evidence package for an external incident response partner.",
    scenario: `<div class="scenario-text"><p>A third-party IR firm requires a complete package of the incident timeline, entities, and key alerts.</p></div>`,
    options: [
      { id: "1", text: "Open the incident in the Defender XDR portal" },
      { id: "2", text: "Select the export or download option for the incident summary and attack story" },
      { id: "3", text: "Include the list of related alerts, entities, and any collected investigation packages" },
      { id: "4", text: "Generate a secure share link or download the package and transfer it via approved channel" },
      { id: "5", text: "Delete the original incident after export to free license capacity" }
    ],
    answer: ["1", "2", "3", "4"],
    explanation: "Open, export summary, include evidence, and transfer. Deleting the incident is never part of the export process."
  },
  {
    id: 65,
    qid: "SC-500-MOD4-065",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "dragdrop",
    question: "Arrange the order of operations when automatic attack disruption has already contained a user account and the SOC must validate the action.",
    scenario: `<div class="scenario-text"><p>Automatic attack disruption disabled a user account. The analyst must confirm the action and decide whether to keep or reverse it.</p></div>`,
    options: [
      { id: "1", text: "Locate the incident that triggered automatic attack disruption" },
      { id: "2", text: "Open the Action center or incident action history to view the performed containment" },
      { id: "3", text: "Review the supporting evidence that justified the automatic action" },
      { id: "4", text: "Decide to leave the account disabled or re-enable it via the Entra ID / response action" },
      { id: "5", text: "Update the incident status and add a comment documenting the validation outcome" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Find the incident, inspect the automatic action, validate evidence, decide on persistence of containment, then document."
  },
  {
    id: 66,
    qid: "SC-500-MOD4-066",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "dragdrop",
    question: "Order the steps to pivot from a Defender for Identity alert inside a Defender XDR incident to the corresponding Microsoft Defender for Endpoint timeline.",
    scenario: `<div class="scenario-text"><p>The Identity alert indicates possible pass-the-hash activity. Endpoint evidence is required to confirm execution.</p></div>`,
    options: [
      { id: "1", text: "Select the Account or Device entity linked to the Defender for Identity alert" },
      { id: "2", text: "From the entity page or graph, choose the related Device that shows endpoint alerts" },
      { id: "3", text: "Open the device page and switch to the Timeline tab" },
      { id: "4", text: "Filter the timeline to the time window of the Identity alert" },
      { id: "5", text: "Inspect process, network, and file events that corroborate the identity activity" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Entity selection, device pivot, timeline access, time filtering, and evidence inspection form the natural cross-workload path."
  },
  {
    id: 67,
    qid: "SC-500-MOD4-067",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "dragdrop",
    question: "Sequence the actions required to suppress a recurring false-positive alert pattern inside Microsoft Defender XDR without disabling the underlying detection.",
    scenario: `<div class="scenario-text"><p>A specific benign administrative script repeatedly triggers a high-severity endpoint alert that is correlated into incidents.</p></div>`,
    options: [
      { id: "1", text: "Open one of the false-positive incidents and locate the repeating alert" },
      { id: "2", text: "Create an indicator of exclusion or a suppression rule scoped to the file hash / process command line" },
      { id: "3", text: "Apply the indicator or suppression so future matching alerts are not raised or are auto-resolved" },
      { id: "4", text: "Monitor the next 24 hours to confirm the false positives have stopped appearing in new incidents" },
      { id: "5", text: "Disable the entire custom detection rule that generated the alert" }
    ],
    answer: ["1", "2", "3", "4"],
    explanation: "Identify the alert, create a targeted exclusion/suppression, apply it, and validate. Disabling the detection rule removes coverage for true positives and is not the recommended suppression path."
  },
  {
    id: 68,
    qid: "SC-500-MOD4-068",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "dragdrop",
    question: "Arrange the steps to use the Defender XDR incident graph to determine whether a compromised account has accessed sensitive SharePoint or OneDrive content.",
    scenario: `<div class="scenario-text"><p>Identity and endpoint evidence confirm compromise. Data-access impact must be assessed.</p></div>`,
    options: [
      { id: "1", text: "Select the compromised Account node in the incident graph" },
      { id: "2", text: "Open the Cloud apps or Office 365 related activity for that account" },
      { id: "3", text: "Filter for SharePoint / OneDrive file access, download, or sharing events" },
      { id: "4", text: "Note any sensitive files or sites accessed after the compromise timestamp" },
      { id: "5", text: "Initiate a Microsoft Purview content search or eDiscovery case if data exfiltration is confirmed" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Account selection, cloud-app pivot, SharePoint/OneDrive filtering, impact documentation, and optional Purview escalation constitute the complete assessment path."
  },
  {
    id: 69,
    qid: "SC-500-MOD4-069",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "hotspot",
    question: "In the Microsoft Defender XDR incident page, which visual element displays the automatic multi-stage attack story and the relationships between alerts?",
    scenario: `<div class="scenario-text"><p>An analyst has opened a high-severity incident and needs to locate the interactive visualization that shows how the alerts form an attack chain.</p></div>`,
    options: [
      { id: "A", text: "Incident graph" },
      { id: "B", text: "Alerts queue list only" },
      { id: "C", text: "Evidence and Response tab" },
      { id: "D", text: "Summary markdown card" }
    ],
    answer: ["A"],
    explanation: "The Incident graph is the interactive canvas that renders entities, alerts, and the multi-stage attack story. The alerts queue is a flat list, Evidence and Response contains actions and packages, and the summary card provides a textual overview."
  },
  {
    id: 70,
    qid: "SC-500-MOD4-070",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "hotspot",
    question: "Which blade inside a Microsoft Defender for Endpoint device page (opened from Defender XDR) contains the chronological process, network, and file activity?",
    scenario: `<div class="scenario-text"><p>The analyst has pivoted from the incident graph to a device and must examine the exact sequence of events around the alert time.</p></div>`,
    options: [
      { id: "A", text: "Timeline" },
      { id: "B", text: "Inventory" },
      { id: "C", text: "Missing KBs" },
      { id: "D", text: "Security recommendations" }
    ],
    answer: ["A"],
    explanation: "The Timeline tab provides the chronological view of process creation, network connections, file modifications, and other telemetry. Inventory lists software, Missing KBs shows patch status, and Security recommendations are posture items."
  },
  {
    id: 71,
    qid: "SC-500-MOD4-071",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "hotspot",
    question: "In the Microsoft Defender XDR advanced hunting interface, which control allows an analyst to run a query across all available Defender workload tables?",
    scenario: `<div class="scenario-text"><p>The analyst needs to write a single KQL statement that joins DeviceProcessEvents with IdentityLogonEvents and EmailEvents.</p></div>`,
    options: [
      { id: "A", text: "Unified schema query editor (Advanced hunting)" },
      { id: "B", text: "Microsoft Sentinel Logs blade only" },
      { id: "C", text: "Defender for Endpoint advanced hunting (scoped)" },
      { id: "D", text: "Azure Data Explorer cluster query" }
    ],
    answer: ["A"],
    explanation: "The unified Advanced hunting experience in Defender XDR exposes the cross-workload schema. Product-scoped hunting, Sentinel Logs, and external ADX clusters do not provide the same integrated table set inside the XDR portal."
  },
  {
    id: 72,
    qid: "SC-500-MOD4-072",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "hotspot",
    question: "Which section of a Defender XDR incident shows the list of automatic or manual response actions that have already been taken?",
    scenario: `<div class="scenario-text"><p>Automatic attack disruption has run. The analyst must locate the record of what was done to the user account and devices.</p></div>`,
    options: [
      { id: "A", text: "Action center / Actions & history" },
      { id: "B", text: "Alerts tab" },
      { id: "C", text: "Investigations tab" },
      { id: "D", text: "Applications tab" }
    ],
    answer: ["A"],
    explanation: "The Action center (or Actions & history) records every containment and investigation action performed on the incident. Alerts lists the triggering alerts, Investigations shows AIR packages, and Applications is unrelated."
  },
  {
    id: 73,
    qid: "SC-500-MOD4-073",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "hotspot",
    question: "When viewing an Account entity inside a Defender XDR incident, which tab surfaces the Microsoft Defender for Cloud Apps activity for that user?",
    scenario: `<div class="scenario-text"><p>The analyst needs to see SaaS application sign-ins and file operations performed by the compromised account.</p></div>`,
    options: [
      { id: "A", text: "Cloud apps" },
      { id: "B", text: "Devices" },
      { id: "C", text: "Alerts" },
      { id: "D", text: "Observations" }
    ],
    answer: ["A"],
    explanation: "The Cloud apps tab on the Account entity page aggregates Defender for Cloud Apps sessions and activities. Devices lists endpoints, Alerts shows related alerts, and Observations contains other behavioral insights."
  },
  {
    id: 74,
    qid: "SC-500-MOD4-074",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "hotspot",
    question: "In the Microsoft Defender XDR portal navigation, which menu item opens the unified incident queue that contains correlated cross-domain incidents?",
    scenario: `<div class="scenario-text"><p>A new analyst must locate the primary queue where all high-severity multi-workload incidents are listed.</p></div>`,
    options: [
      { id: "A", text: "Incidents & alerts > Incidents" },
      { id: "B", text: "Hunting > Advanced hunting" },
      { id: "C", text: "Actions & submissions > Action center" },
      { id: "D", text: "Secure score" }
    ],
    answer: ["A"],
    explanation: "Incidents & alerts > Incidents is the central queue for correlated Defender XDR incidents. Advanced hunting is for queries, Action center is for response actions, and Secure score is a posture dashboard."
  },
  {
    id: 75,
    qid: "SC-500-MOD4-075",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Identify the correct KQL fragment that joins DeviceProcessEvents with IdentityLogonEvents on the common Account and time window for a cross-domain detection.",
    scenario: `<div class="scenario-text"><p>You are authoring a custom detection that must correlate process creation with a suspicious logon within a 5-minute window.</p></div>`,
    options: [
      { id: "A", text: "DeviceProcessEvents | join kind=inner IdentityLogonEvents on $left.AccountObjectId == $right.AccountObjectId | where abs(datetime_diff('minute', DeviceProcessEvents.Timestamp, IdentityLogonEvents.Timestamp)) <= 5" },
      { id: "B", text: "DeviceProcessEvents | join kind=inner IdentityLogonEvents on DeviceId" },
      { id: "C", text: "DeviceProcessEvents | union IdentityLogonEvents | where AccountObjectId != ''" },
      { id: "D", text: "IdentityLogonEvents | join kind=leftouter DeviceProcessEvents on AccountUpn" }
    ],
    answer: ["A"],
    explanation: "An inner join on AccountObjectId combined with a tight time-difference filter is the correct pattern for correlating the two tables. Joining only on DeviceId loses the identity context. Union does not create the required relationship. leftouter on UPN alone without time constraint produces excessive false matches."
  },
  {
    id: 76,
    qid: "SC-500-MOD4-076",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Select the KQL statement that correctly retrieves the blast-radius devices for a given compromised AccountObjectId inside advanced hunting.",
    scenario: `<div class="scenario-text"><p>The AccountObjectId of the compromised user is known. You need every device the account has logged on to in the last 7 days.</p></div>`,
    options: [
      { id: "A", text: "IdentityLogonEvents | where AccountObjectId == 'known-guid' and Timestamp > ago(7d) | summarize Devices = make_set(DeviceName) by AccountObjectId" },
      { id: "B", text: "DeviceProcessEvents | where AccountObjectId == 'known-guid' | distinct DeviceId" },
      { id: "C", text: "EmailEvents | where SenderObjectId == 'known-guid' | summarize by DeviceName" },
      { id: "D", text: "CloudAppEvents | where AccountObjectId == 'known-guid' | project DeviceName" }
    ],
    answer: ["A"],
    explanation: "IdentityLogonEvents is the authoritative table for account-to-device logon relationships. Summarizing with make_set produces the distinct device list. DeviceProcessEvents may not always populate AccountObjectId the same way. EmailEvents and CloudAppEvents do not reliably surface device names for logon blast-radius purposes."
  },
  {
    id: 77,
    qid: "SC-500-MOD4-077",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Which KQL operator combination correctly limits a cross-workload hunting query to the exact time window of a known incident?",
    scenario: `<div class="scenario-text"><p>The incident start time is 2026-09-03T14:22:00Z and the analyst wants a ±30-minute window around that timestamp.</p></div>`,
    options: [
      { id: "A", text: "| where Timestamp between (datetime(2026-09-03T13:52:00Z) .. datetime(2026-09-03T14:52:00Z))" },
      { id: "B", text: "| where Timestamp > ago(30m)" },
      { id: "C", text: "| where Timestamp == datetime(2026-09-03T14:22:00Z)" },
      { id: "D", text: "| where ingestion_time() between (datetime(2026-09-03T13:52:00Z) .. datetime(2026-09-03T14:52:00Z))" }
    ],
    answer: ["A"],
    explanation: "The between operator with explicit datetime boundaries is the precise way to scope a query to a known incident window. ago(30m) is relative to now. Exact equality misses surrounding events. ingestion_time() filters on arrival, not event time."
  },
  {
    id: 78,
    qid: "SC-500-MOD4-078",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Identify the correct advanced hunting query fragment that surfaces email messages related to a compromised AccountObjectId for blast-radius analysis.",
    scenario: `<div class="scenario-text"><p>You need both messages sent by and received by the compromised account within the incident timeframe.</p></div>`,
    options: [
      { id: "A", text: "EmailEvents | where SenderObjectId == 'known-guid' or RecipientObjectId == 'known-guid'" },
      { id: "B", text: "EmailEvents | where SenderFromAddress == 'user@contoso.com'" },
      { id: "C", text: "EmailAttachmentInfo | where SHA256 == 'known-hash'" },
      { id: "D", text: "UrlClickEvents | where AccountObjectId == 'known-guid'" }
    ],
    answer: ["A"],
    explanation: "Filtering EmailEvents on both SenderObjectId and RecipientObjectId captures the full mailbox activity of the compromised account. Address-only filters miss object-ID-based correlation. Attachment and URL tables are useful supplements but do not replace the core EmailEvents query for blast-radius scope."
  },
  {
    id: 79,
    qid: "SC-500-MOD4-079",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Select the KQL pattern that correctly extracts the set of IP addresses observed in network connections from a specific DeviceId for blast-radius mapping.",
    scenario: `<div class="scenario-text"><p>A device has been isolated. You must list every remote IP it communicated with in the hour before isolation.</p></div>`,
    options: [
      { id: "A", text: "DeviceNetworkEvents | where DeviceId == 'known-device-id' and Timestamp > ago(1h) | summarize RemoteIPs = make_set(RemoteIP)" },
      { id: "B", text: "DeviceProcessEvents | where DeviceId == 'known-device-id' | distinct InitiatingProcessCommandLine" },
      { id: "C", text: "IdentityLogonEvents | where DeviceId == 'known-device-id' | summarize make_set(IPAddress)" },
      { id: "D", text: "CloudAppEvents | where DeviceId == 'known-device-id' | project IPAddress" }
    ],
    answer: ["A"],
    explanation: "DeviceNetworkEvents is the table that records remote IP connections. make_set produces the distinct list. Process events, identity logons, and cloud-app events do not contain the full network connection remote-IP evidence required for this blast-radius view."
  },
  {
    id: 80,
    qid: "SC-500-MOD4-080",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Extended Detection (Defender XDR)",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Which KQL statement correctly creates a custom detection that raises an alert when the same AccountObjectId appears in both a high-severity IdentityLogonEvents record and a DeviceProcessEvents record with a suspicious command line within 10 minutes?",
    scenario: `<div class="scenario-text"><p>The detection must be multi-stage aware and generate a Defender XDR alert that will be correlated into an incident.</p></div>`,
    options: [
      { id: "A", text: "IdentityLogonEvents | where ActionType == 'LogonFailed' or is not empty(RiskLevel) | join kind=inner (DeviceProcessEvents | where ProcessCommandLine has_any ('-enc','IEX','DownloadString')) on AccountObjectId | where abs(datetime_diff('minute', IdentityLogonEvents.Timestamp, DeviceProcessEvents.Timestamp)) <= 10" },
      { id: "B", text: "DeviceProcessEvents | where ProcessCommandLine contains 'powershell' | join kind=inner IdentityLogonEvents on DeviceId" },
      { id: "C", text: "IdentityLogonEvents | union DeviceProcessEvents | where AccountObjectId != ''" },
      { id: "D", text: "EmailEvents | join kind=inner DeviceProcessEvents on AccountObjectId" }
    ],
    answer: ["A"],
    explanation: "The pattern joins the two relevant tables on AccountObjectId, applies risk/command-line filters, and enforces a tight time window—exactly the multi-stage logic required for a high-fidelity custom detection. DeviceId-only joins, blind unions, and email-centric joins miss the identity-to-endpoint correlation."
  },
  {
    id: 81,
    qid: "SC-500-MOD4-081",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "single",
    question: "In Microsoft Defender for Endpoint, which response action places a device into a restricted network state so that only connectivity to the Defender cloud and other critical services remains while blocking all other traffic?",
    scenario: `<div class="scenario-text"><p>A device is confirmed to be executing ransomware. The SOC must immediately prevent further lateral movement and command-and-control traffic without fully powering the device off.</p></div>`,
    options: [
      { id: "A", text: "Isolate device" },
      { id: "B", text: "Collect investigation package" },
      { id: "C", text: "Run antivirus scan" },
      { id: "D", text: "Restrict app execution" }
    ],
    answer: ["A"],
    explanation: "Device isolation severs all non-essential network connectivity while preserving the management channel to Microsoft Defender for Endpoint. Collecting an investigation package gathers forensic data, an antivirus scan looks for malware, and Restrict app execution limits process launches but does not cut network access."
  },
  {
    id: 82,
    qid: "SC-500-MOD4-082",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "single",
    question: "Which Microsoft Entra ID Protection action can be triggered from a Defender XDR incident to immediately prevent a compromised user from signing in to any cloud resource?",
    scenario: `<div class="scenario-text"><p>Automatic attack disruption has not yet fired. The analyst has confirmed credential theft and must block the account across all Microsoft 365 and Azure workloads within seconds.</p></div>`,
    options: [
      { id: "A", text: "Disable user account" },
      { id: "B", text: "Require password reset only" },
      { id: "C", text: "Add the user to a Conditional Access exclusion group" },
      { id: "D", text: "Revoke only the current refresh token" }
    ],
    answer: ["A"],
    explanation: "Disabling the user account in Microsoft Entra ID is the strongest immediate containment action; it blocks all new sign-ins. Password reset and token revocation are useful remediation steps but leave the account able to authenticate if the attacker still possesses valid credentials. Adding the user to an exclusion group would weaken, not strengthen, controls."
  },
  {
    id: 83,
    qid: "SC-500-MOD4-083",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "single",
    question: "What is the primary purpose of an Automated Investigation and Response (AIR) package in Microsoft Defender for Endpoint?",
    scenario: `<div class="scenario-text"><p>A high-severity alert has been raised on a device. The SOC wants the platform to automatically examine related processes, files, and persistence mechanisms and to remediate confirmed threats without waiting for an analyst.</p></div>`,
    options: [
      { id: "A", text: "To automatically investigate the alert scope and remediate malicious artifacts when confidence is high" },
      { id: "B", text: "To generate a full disk image for offline forensic analysis" },
      { id: "C", text: "To force an immediate device restart and BitLocker recovery" },
      { id: "D", text: "To export all event logs to a Microsoft Sentinel workspace" }
    ],
    answer: ["A"],
    explanation: "AIR performs automated scoping of the alert, examines the process tree and related entities, and applies remediation actions (quarantine, remove persistence, etc.) when the threat is confirmed with high confidence. It does not create full disk images, force restarts, or perform Sentinel exports."
  },
  {
    id: 84,
    qid: "SC-500-MOD4-084",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "single",
    question: "Which response action in Microsoft Defender for Office 365 removes a malicious email from all mailboxes in the organization after delivery?",
    scenario: `<div class="scenario-text"><p>A phishing campaign has already delivered messages to dozens of users. The SOC must purge the messages and any remaining copies from the environment as quickly as possible.</p></div>`,
    options: [
      { id: "A", text: "Trigger Investigation / Soft delete or Move to junk / Delete from all mailboxes via Threat Explorer or remediation actions" },
      { id: "B", text: "Disable the sender’s Microsoft Entra ID account only" },
      { id: "C", text: "Create a new anti-phishing policy" },
      { id: "D", text: "Run an Advanced Delivery override" }
    ],
    answer: ["A"],
    explanation: "Threat Explorer and the remediation actions in Defender for Office 365 allow bulk soft-delete, hard-delete, or move-to-junk of already-delivered messages across the tenant. Disabling the sender account stops future mail but does not remove existing messages. Policy creation and Advanced Delivery are preventive, not remedial, controls."
  },
  {
    id: 85,
    qid: "SC-500-MOD4-085",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "multiselect",
    question: "Which three response actions can be initiated directly from a Microsoft Defender XDR incident against a compromised device?",
    scenario: `<div class="scenario-text"><p>The incident graph shows a device that has executed malicious code. The analyst has authorization to contain and investigate.</p></div>`,
    options: [
      { id: "A", text: "Isolate device" },
      { id: "B", text: "Collect investigation package" },
      { id: "C", text: "Run antivirus scan" },
      { id: "D", text: "Assign the device to a new Intune compliance policy" },
      { id: "E", text: "Delete the device object from Microsoft Entra ID" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Isolate, collect investigation package, and run antivirus scan are native Defender for Endpoint response actions exposed inside the XDR incident. Changing Intune compliance or deleting the Entra ID device object are identity/device-management operations outside the immediate response action set."
  },
  {
    id: 86,
    qid: "SC-500-MOD4-086",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "multiselect",
    question: "Which two Microsoft Entra ID actions are commonly used as part of compromise mitigation for a user account that has been confirmed stolen?",
    scenario: `<div class="scenario-text"><p>Credential stuffing has succeeded against a privileged account. Immediate and lasting containment is required.</p></div>`,
    options: [
      { id: "A", text: "Disable the user account" },
      { id: "B", text: "Revoke all refresh tokens / sign the user out of all sessions" },
      { id: "C", text: "Add the user to the Global Administrator role" },
      { id: "D", text: "Remove the user from all Conditional Access policies" },
      { id: "E", text: "Convert the account to a shared mailbox" }
    ],
    answer: ["A", "B"],
    explanation: "Disabling the account and revoking refresh tokens (forcing re-authentication) are the standard immediate mitigation steps. Elevating privileges, removing Conditional Access, or converting to a shared mailbox would increase risk or are unrelated to containment."
  },
  {
    id: 87,
    qid: "SC-500-MOD4-087",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "multiselect",
    question: "Which three remediation actions can Automated Investigation and Response (AIR) perform on a device when a threat is confirmed?",
    scenario: `<div class="scenario-text"><p>AIR has completed its investigation and has high confidence that several files and a persistence mechanism are malicious.</p></div>`,
    options: [
      { id: "A", text: "Quarantine or remove malicious files" },
      { id: "B", text: "Stop and quarantine malicious processes" },
      { id: "C", text: "Remove persistence mechanisms (e.g., registry run keys, scheduled tasks)" },
      { id: "D", text: "Re-image the device from a golden image" },
      { id: "E", text: "Disable the local administrator account permanently" }
    ],
    answer: ["A", "B", "C"],
    explanation: "AIR can quarantine files, terminate and quarantine processes, and remove common persistence locations. Full re-imaging and permanent local-admin disablement are outside the scope of automated response actions."
  },
  {
    id: 88,
    qid: "SC-500-MOD4-088",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "multiselect",
    question: "Which two containment actions are available against a Microsoft Defender for Cloud Apps session that is determined to be malicious?",
    scenario: `<div class="scenario-text"><p>A Defender for Cloud Apps alert shows an anomalous session that has downloaded large volumes of sensitive data. The session must be terminated and future access blocked.</p></div>`,
    options: [
      { id: "A", text: "Suspend the user session / force sign-out" },
      { id: "B", text: "Confirm the user as compromised (which can trigger additional governance actions)" },
      { id: "C", text: "Delete the user’s OneDrive account" },
      { id: "D", text: "Remove the application from the Microsoft Entra ID enterprise applications list" },
      { id: "E", text: "Change the user’s mailbox to litigation hold only" }
    ],
    answer: ["A", "B"],
    explanation: "Defender for Cloud Apps can suspend sessions and mark the user as confirmed compromised, which integrates with additional governance and Entra ID Protection actions. Deleting OneDrive, removing enterprise applications, or placing mailboxes on hold are separate administrative tasks not performed as direct session-containment actions."
  },
  {
    id: 89,
    qid: "SC-500-MOD4-089",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "multiselect",
    question: "Which three prerequisites must be satisfied before Microsoft Defender for Endpoint can successfully isolate a device?",
    scenario: `<div class="scenario-text"><p>An analyst attempts to isolate a device from an incident but the action fails. You must identify the required conditions.</p></div>`,
    options: [
      { id: "A", text: "The device must be onboarded to Microsoft Defender for Endpoint and reporting successfully" },
      { id: "B", text: "The analyst must have the appropriate RBAC role (e.g., Active remediation actions)" },
      { id: "C", text: "The device must have a functioning network path to the Defender cloud service" },
      { id: "D", text: "The device must be joined to an on-premises Active Directory domain" },
      { id: "E", text: "BitLocker must be suspended on the device" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Onboarding, correct RBAC permissions, and cloud connectivity are mandatory for isolation. Domain join is not required (Azure AD joined and even non-domain devices can be isolated). BitLocker state does not block isolation."
  },
  {
    id: 90,
    qid: "SC-500-MOD4-090",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "multiselect",
    question: "Which two actions does Microsoft Defender XDR automatic attack disruption typically perform when it detects a high-confidence human-operated ransomware campaign?",
    scenario: `<div class="scenario-text"><p>Automatic attack disruption has triggered on a multi-device ransomware incident. You need to know what the platform has already done.</p></div>`,
    options: [
      { id: "A", text: "Contain compromised user accounts (disable or restrict)" },
      { id: "B", text: "Isolate affected devices from the network" },
      { id: "C", text: "Automatically re-image every affected device" },
      { id: "D", text: "Delete all user mailboxes in the tenant" },
      { id: "E", text: "Disable Conditional Access policies organization-wide" }
    ],
    answer: ["A", "B"],
    explanation: "Automatic attack disruption focuses on rapid containment of identities and devices. It does not re-image devices, delete mailboxes, or disable Conditional Access policies."
  },
  {
    id: 91,
    qid: "SC-500-MOD4-091",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "multiselect",
    question: "Which three artifacts can be remediated by an AIR investigation when a malicious PowerShell script is confirmed on a device?",
    scenario: `<div class="scenario-text"><p>AIR has identified a malicious script, its launching process, and a scheduled task that re-creates the script.</p></div>`,
    options: [
      { id: "A", text: "The malicious script file itself" },
      { id: "B", text: "The process that launched the script" },
      { id: "C", text: "The scheduled task used for persistence" },
      { id: "D", text: "The user’s entire home directory" },
      { id: "E", text: "All installed browser extensions" }
    ],
    answer: ["A", "B", "C"],
    explanation: "AIR targets the specific malicious file, the process, and the persistence mechanism. It does not perform broad deletion of user profiles or browser extensions."
  },
  {
    id: 92,
    qid: "SC-500-MOD4-092",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "multiselect",
    question: "Which two Microsoft 365 Defender / XDR response actions can be used to prevent a known-malicious file hash from executing on any onboarded device?",
    scenario: `<div class="scenario-text"><p>A ransomware binary hash has been identified. The SOC must block it organization-wide as quickly as possible.</p></div>`,
    options: [
      { id: "A", text: "Create an Indicator of Compromise (IoC) / file hash indicator set to Alert and Block" },
      { id: "B", text: "Add the hash to a custom detection rule that triggers remediation" },
      { id: "C", text: "Disable real-time protection on all devices" },
      { id: "D", text: "Remove the Microsoft Defender Antivirus policy from Intune" },
      { id: "E", text: "Create a new Attack Surface Reduction rule that only audits" }
    ],
    answer: ["A", "B"],
    explanation: "File-hash indicators set to Block and custom detection rules that include remediation are the two primary methods to stop a known hash. Disabling protection, removing policies, or creating audit-only ASR rules would reduce, not improve, protection."
  },
  {
    id: 93,
    qid: "SC-500-MOD4-093",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "multiselect",
    question: "Which three pieces of information are included in a Microsoft Defender for Endpoint investigation package that an analyst can collect from a device?",
    scenario: `<div class="scenario-text"><p>Forensic analysis is required after containment. The analyst requests an investigation package.</p></div>`,
    options: [
      { id: "A", text: "Process and network connection data" },
      { id: "B", text: "Prefetch and autorun information" },
      { id: "C", text: "Event logs and registry hives relevant to the investigation" },
      { id: "D", text: "Full disk bit-for-bit image" },
      { id: "E", text: "Complete contents of every user profile folder" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Investigation packages contain process, network, prefetch, autorun, selected event logs, and registry data. They are not full disk images or complete user-profile dumps."
  },
  {
    id: 94,
    qid: "SC-500-MOD4-094",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "multiselect",
    question: "Which two response actions available in Microsoft Defender for Identity help mitigate a compromised on-premises account that is being used for lateral movement?",
    scenario: `<div class="scenario-text"><p>Defender for Identity has detected pass-the-ticket activity. The account must be contained on-premises as well as in the cloud.</p></div>`,
    options: [
      { id: "A", text: "Disable the user account in Active Directory (via the portal or playbook)" },
      { id: "B", text: "Reset the account password and force a password change at next logon" },
      { id: "C", text: "Delete the computer account of every domain controller" },
      { id: "D", text: "Disable Kerberos authentication organization-wide" },
      { id: "E", text: "Remove all service principal names from the forest" }
    ],
    answer: ["A", "B"],
    explanation: "Disabling the account and forcing a password reset are standard, supported mitigation actions. Deleting domain-controller computer accounts, disabling Kerberos globally, or removing SPNs would cause widespread outages and are not legitimate response actions."
  },
  {
    id: 95,
    qid: "SC-500-MOD4-095",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "multiselect",
    question: "Which three conditions must be true for a Microsoft Sentinel playbook to successfully isolate a device via the Microsoft Defender for Endpoint connector?",
    scenario: `<div class="scenario-text"><p>An automation rule triggers a Logic App that should isolate a device entity contained in the incident.</p></div>`,
    options: [
      { id: "A", text: "The playbook’s managed identity or connection has the appropriate Defender for Endpoint permissions" },
      { id: "B", text: "The device entity is present and correctly mapped in the incident" },
      { id: "C", text: "The device is onboarded and reachable by Microsoft Defender for Endpoint" },
      { id: "D", text: "The playbook must run inside the same Azure subscription as the device" },
      { id: "E", text: "The incident must have a severity of High or higher" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Correct permissions, a valid device entity, and device reachability are required. The playbook’s subscription location and the incident severity are not technical prerequisites for the isolation API call."
  },
  {
    id: 96,
    qid: "SC-500-MOD4-096",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "multiselect",
    question: "Which two post-containment activities are recommended after a device has been isolated and the threat has been remediated?",
    scenario: `<div class="scenario-text"><p>AIR and manual remediation have cleaned the device. The SOC must return the device to normal operation safely.</p></div>`,
    options: [
      { id: "A", text: "Release the device from isolation after verifying that the threat is fully removed" },
      { id: "B", text: "Run a full antivirus scan and confirm a clean bill of health" },
      { id: "C", text: "Immediately re-image the device without further validation" },
      { id: "D", text: "Disable Microsoft Defender Antivirus to improve performance" },
      { id: "E", text: "Remove the device from Defender for Endpoint onboarding" }
    ],
    answer: ["A", "B"],
    explanation: "Releasing isolation after confirmation and performing a full scan are the standard safe-return steps. Blind re-imaging may be used in some cases but is not always required; disabling protection or removing onboarding increases risk."
  },
  {
    id: 97,
    qid: "SC-500-MOD4-097",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "dragdrop",
    question: "Order the recommended steps to contain a compromised user account that has been used for both cloud and on-premises activity.",
    scenario: `<div class="scenario-text"><p>The account shows risky sign-ins in Entra ID and lateral movement alerts in Defender for Identity.</p></div>`,
    options: [
      { id: "1", text: "Disable the user account in Microsoft Entra ID" },
      { id: "2", text: "Revoke all refresh tokens / force sign-out of all sessions" },
      { id: "3", text: "Disable or reset the corresponding on-premises Active Directory account if hybrid" },
      { id: "4", text: "Reset the password and require multi-factor authentication re-registration if the account will be restored" },
      { id: "5", text: "Re-enable the account only after full investigation and credential hygiene are complete" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Immediate cloud disablement and token revocation stop ongoing access, followed by on-premises containment, credential reset, and controlled re-enablement."
  },
  {
    id: 98,
    qid: "SC-500-MOD4-098",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "dragdrop",
    question: "Sequence the actions an analyst should take when responding to a device that is actively encrypting files.",
    scenario: `<div class="scenario-text"><p>A ransomware alert is live. Speed of containment is critical.</p></div>`,
    options: [
      { id: "1", text: "Isolate the device from the network via Defender for Endpoint" },
      { id: "2", text: "Stop and quarantine the encrypting process if it is still running" },
      { id: "3", text: "Collect an investigation package for later forensic analysis" },
      { id: "4", text: "Trigger or review the AIR investigation results and any additional remediations" },
      { id: "5", text: "Begin recovery from known-good backups once the threat is fully contained" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Network isolation first, then process termination, evidence collection, automated/manual remediation, and finally recovery."
  },
  {
    id: 99,
    qid: "SC-500-MOD4-099",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "dragdrop",
    question: "Arrange the steps to configure a Microsoft Sentinel automation rule that automatically isolates a device when a high-severity endpoint alert is raised.",
    scenario: `<div class="scenario-text"><p>The SOC wants hands-free containment for a specific high-fidelity analytics rule.</p></div>`,
    options: [
      { id: "1", text: "Create or identify the analytics rule that generates the high-severity incident containing a Device entity" },
      { id: "2", text: "Create a Logic App playbook that uses the Defender for Endpoint connector and the Isolate machine action" },
      { id: "3", text: "Create an automation rule that triggers on incident creation, filters by the analytics rule name and severity, and runs the playbook" },
      { id: "4", text: "Grant the playbook’s managed identity the required Microsoft Defender for Endpoint permissions" },
      { id: "5", text: "Test with a controlled incident and verify the device isolation appears in the Action center" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Detection rule, playbook, automation rule, permissions, and validation form the complete configuration path."
  },
  {
    id: 100,
    qid: "SC-500-MOD4-100",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "dragdrop",
    question: "Order the process for releasing a device from isolation after successful remediation.",
    scenario: `<div class="scenario-text"><p>The threat has been removed and the device is ready to return to the production network.</p></div>`,
    options: [
      { id: "1", text: "Confirm that AIR and any manual remediations report a clean state" },
      { id: "2", text: "Run a full Microsoft Defender Antivirus scan and verify no remaining threats" },
      { id: "3", text: "From the device page or Action center, select Release from isolation" },
      { id: "4", text: "Monitor the device for a period to ensure no re-infection or residual C2 traffic" },
      { id: "5", text: "Update the incident status and document the release in the incident comments" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Verification of clean state, full scan, release, post-release monitoring, and documentation constitute the safe release sequence."
  },
  {
    id: 101,
    qid: "SC-500-MOD4-101",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "dragdrop",
    question: "Sequence the steps to remediate a malicious email that has already been delivered to multiple mailboxes using Microsoft Defender for Office 365.",
    scenario: `<div class="scenario-text"><p>Threat Explorer shows the campaign. The messages must be purged organization-wide.</p></div>`,
    options: [
      { id: "1", text: "Open Threat Explorer and locate the malicious message or campaign" },
      { id: "2", text: "Select the messages and choose the remediation action (Soft delete, Hard delete, or Move to junk)" },
      { id: "3", text: "Confirm the scope (all mailboxes or selected users) and start the remediation" },
      { id: "4", text: "Monitor the remediation status until completion" },
      { id: "5", text: "Optionally create a block indicator for the sender, URL, or attachment hash" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Locate, choose action, set scope, monitor, and optionally add lasting indicators."
  },
  {
    id: 102,
    qid: "SC-500-MOD4-102",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "dragdrop",
    question: "Arrange the order of operations when an AIR investigation finds both a malicious file and a persistence mechanism on a device.",
    scenario: `<div class="scenario-text"><p>AIR has completed and is waiting for approval or is set to automatic remediation.</p></div>`,
    options: [
      { id: "1", text: "AIR identifies the malicious file and the related process" },
      { id: "2", text: "AIR discovers the persistence mechanism (scheduled task, run key, service, etc.)" },
      { id: "3", text: "Remediation actions quarantine the file, terminate the process, and remove the persistence" },
      { id: "4", text: "The investigation package and action history are updated with the results" },
      { id: "5", text: "The analyst reviews the completed investigation and closes or further investigates the incident" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Discovery of artifacts, remediation, logging, and analyst review follow the natural AIR lifecycle."
  },
  {
    id: 103,
    qid: "SC-500-MOD4-103",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "dragdrop",
    question: "Order the steps to revoke all active sessions for a compromised user across Microsoft 365 and Azure resources.",
    scenario: `<div class="scenario-text"><p>The account has been disabled, but existing tokens may still be valid.</p></div>`,
    options: [
      { id: "1", text: "Open the user account in the Microsoft Entra ID portal or from the Defender XDR incident" },
      { id: "2", text: "Select the option to Revoke sessions / Sign out of all sessions / Invalidate all refresh tokens" },
      { id: "3", text: "Confirm the action and wait for token revocation to propagate" },
      { id: "4", text: "Optionally require the user to re-register MFA methods before the account is re-enabled" },
      { id: "5", text: "Document the revocation in the incident and monitor for any subsequent sign-in attempts" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Locate the account, revoke sessions, confirm propagation, strengthen MFA, and document."
  },
  {
    id: 104,
    qid: "SC-500-MOD4-104",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "dragdrop",
    question: "Sequence the configuration of a file-hash indicator that blocks a known ransomware binary across the organization.",
    scenario: `<div class="scenario-text"><p>A SHA-256 hash of the ransomware executable has been obtained from a trusted source.</p></div>`,
    options: [
      { id: "1", text: "Open the Indicators page in the Microsoft Defender XDR or Defender for Endpoint portal" },
      { id: "2", text: "Create a new File hash indicator and paste the SHA-256 value" },
      { id: "3", text: "Set the action to Alert and Block and define the scope and expiration if required" },
      { id: "4", text: "Save the indicator and allow time for the policy to reach onboarded devices" },
      { id: "5", text: "Validate that a test device blocks execution of a file with that hash" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Navigate to Indicators, create the hash entry, set block action, distribute, and validate."
  },
  {
    id: 105,
    qid: "SC-500-MOD4-105",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "dragdrop",
    question: "Arrange the steps an analyst follows when using Live Response to collect additional forensic data from an isolated device.",
    scenario: `<div class="scenario-text"><p>The device is already isolated. Deeper investigation is required before remediation decisions.</p></div>`,
    options: [
      { id: "1", text: "From the device page, start a Live Response session" },
      { id: "2", text: "Upload any required investigation scripts or tools to the Live Response library if not already present" },
      { id: "3", text: "Execute commands or scripts to collect memory, registry, or specific file artifacts" },
      { id: "4", text: "Download the collected artifacts from the Live Response session" },
      { id: "5", text: "End the Live Response session and proceed with remediation or further analysis" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Start session, stage tools, collect, download, and close the session."
  },
  {
    id: 106,
    qid: "SC-500-MOD4-106",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "dragdrop",
    question: "Order the recommended remediation workflow when a Defender for Cloud Apps alert indicates mass download of sensitive files by a compromised account.",
    scenario: `<div class="scenario-text"><p>The session is still active and files continue to be downloaded.</p></div>`,
    options: [
      { id: "1", text: "Suspend the user session in Defender for Cloud Apps" },
      { id: "2", text: "Confirm the user as compromised to trigger additional governance actions" },
      { id: "3", text: "Disable the account in Microsoft Entra ID and revoke sessions" },
      { id: "4", text: "Review the downloaded files and initiate a Purview investigation or eDiscovery if data loss is confirmed" },
      { id: "5", text: "Document actions and update the incident status" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Immediate session suspension, mark compromised, full identity containment, data-loss assessment, and documentation."
  },
  {
    id: 107,
    qid: "SC-500-MOD4-107",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "dragdrop",
    question: "Sequence the steps to approve and apply pending AIR remediation actions that require analyst confirmation.",
    scenario: `<div class="scenario-text"><p>AIR has completed investigation but is configured to require approval before making changes.</p></div>`,
    options: [
      { id: "1", text: "Open the investigation from the incident or the Action center" },
      { id: "2", text: "Review the list of recommended remediation actions and the supporting evidence" },
      { id: "3", text: "Approve the actions that should be applied" },
      { id: "4", text: "Monitor the remediation status until all approved actions complete" },
      { id: "5", text: "Verify the device is clean and update the incident accordingly" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Open investigation, review, approve, monitor, and verify."
  },
  {
    id: 108,
    qid: "SC-500-MOD4-108",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "dragdrop",
    question: "Arrange the order of identity protection actions when a privileged account is confirmed compromised and must be fully locked down.",
    scenario: `<div class="scenario-text"><p>The account holds Global Administrator rights. All access must be terminated immediately.</p></div>`,
    options: [
      { id: "1", text: "Disable the account in Microsoft Entra ID" },
      { id: "2", text: "Revoke all refresh tokens and active sessions" },
      { id: "3", text: "Remove the account from all privileged directory roles" },
      { id: "4", text: "Reset the password and require re-registration of MFA methods" },
      { id: "5", text: "Re-enable and restore roles only after a full security review and credential rotation" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Disable, revoke tokens, strip privileges, reset credentials, and controlled restoration."
  },
  {
    id: 109,
    qid: "SC-500-MOD4-109",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "hotspot",
    question: "In the Microsoft Defender XDR device page, which action button initiates network isolation of the selected device?",
    scenario: `<div class="scenario-text"><p>The analyst has confirmed the device is compromised and needs to apply containment immediately.</p></div>`,
    options: [
      { id: "A", text: "Isolate device" },
      { id: "B", text: "Collect investigation package" },
      { id: "C", text: "Initiate Live Response session" },
      { id: "D", text: "Improve security posture" }
    ],
    answer: ["A"],
    explanation: "The Isolate device action severs non-essential network traffic. Collect investigation package gathers data, Live Response opens an interactive shell, and Improve security posture links to recommendations."
  },
  {
    id: 110,
    qid: "SC-500-MOD4-110",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "hotspot",
    question: "Which Microsoft Entra ID blade or action is used to immediately prevent a user from signing in after compromise is confirmed?",
    scenario: `<div class="scenario-text"><p>From the Defender XDR incident or the Entra ID portal the analyst must block the account.</p></div>`,
    options: [
      { id: "A", text: "Disable user account / Block sign-in" },
      { id: "B", text: "Reset password only" },
      { id: "C", text: "Assign a new license" },
      { id: "D", text: "Add to a security group" }
    ],
    answer: ["A"],
    explanation: "Disabling the account or setting Block sign-in is the direct containment control. Password reset alone does not stop authentication if the attacker already has a valid token or password. Licensing and group membership changes are unrelated to immediate lock-out."
  },
  {
    id: 111,
    qid: "SC-500-MOD4-111",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "hotspot",
    question: "In the Microsoft Defender for Endpoint Action center, which view lists all pending, completed, and failed response actions including isolations and AIR remediations?",
    scenario: `<div class="scenario-text"><p>The SOC lead needs an audit of every containment action taken in the last 24 hours.</p></div>`,
    options: [
      { id: "A", text: "Action center history / Pending actions" },
      { id: "B", text: "Threat analytics dashboard" },
      { id: "C", text: "Device inventory" },
      { id: "D", text: "Secure score recommendations" }
    ],
    answer: ["A"],
    explanation: "The Action center provides the centralized history of all response actions. Threat analytics, device inventory, and Secure score serve different purposes."
  },
  {
    id: 112,
    qid: "SC-500-MOD4-112",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "hotspot",
    question: "Which Defender for Office 365 capability allows an analyst to select multiple messages from a campaign and purge them from all mailboxes in one operation?",
    scenario: `<div class="scenario-text"><p>A widespread phishing campaign has been identified in Threat Explorer.</p></div>`,
    options: [
      { id: "A", text: "Threat Explorer remediation actions (Soft delete / Hard delete / Move to junk)" },
      { id: "B", text: "Anti-malware policy edit" },
      { id: "C", text: "Safe Attachments policy" },
      { id: "D", text: "Advanced delivery override" }
    ],
    answer: ["A"],
    explanation: "Threat Explorer exposes the bulk remediation actions that can purge or move messages across the tenant. Policy edits and Advanced delivery are configuration, not remedial, controls."
  },
  {
    id: 113,
    qid: "SC-500-MOD4-113",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "hotspot",
    question: "In a Microsoft Defender XDR incident, where does an analyst go to approve or reject pending Automated Investigation and Response (AIR) remediation actions?",
    scenario: `<div class="scenario-text"><p>AIR has finished its investigation and is waiting for human approval before making changes.</p></div>`,
    options: [
      { id: "A", text: "Investigation details / Action center pending actions" },
      { id: "B", text: "Alerts queue only" },
      { id: "C", text: "Advanced hunting" },
      { id: "D", text: "Secure score" }
    ],
    answer: ["A"],
    explanation: "Pending AIR actions appear in the investigation details and the Action center, where they can be approved or rejected. Alerts, hunting, and Secure score do not surface the approval workflow."
  },
  {
    id: 114,
    qid: "SC-500-MOD4-114",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "hotspot",
    question: "Which response action on a Defender for Endpoint device page opens an interactive command shell for live forensic collection while the device remains isolated?",
    scenario: `<div class="scenario-text"><p>The device is already isolated. The analyst needs to run additional collection commands.</p></div>`,
    options: [
      { id: "A", text: "Initiate Live Response session" },
      { id: "B", text: "Isolate device" },
      { id: "C", text: "Run antivirus scan" },
      { id: "D", text: "Collect investigation package only" }
    ],
    answer: ["A"],
    explanation: "Live Response provides the interactive shell. Isolation is already applied, an antivirus scan is non-interactive, and Collect investigation package is a one-time automated collection."
  },
  {
    id: 115,
    qid: "SC-500-MOD4-115",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Identify the correct Microsoft Graph / Defender API action name that a Logic App playbook must call to isolate a device by its machine ID.",
    scenario: `<div class="scenario-text"><p>The playbook receives a Device entity and must invoke the isolation API.</p></div>`,
    options: [
      { id: "A", text: "Machine Action – Isolate (or machines/{id}/isolate)" },
      { id: "B", text: "Machine Action – CollectInvestigationPackage" },
      { id: "C", text: "User Action – DisableAccount" },
      { id: "D", text: "Alert Action – UpdateAlert" }
    ],
    answer: ["A"],
    explanation: "The isolate machine action (machines/{id}/isolate) is the correct endpoint. CollectInvestigationPackage gathers data, DisableAccount targets users, and UpdateAlert modifies alert properties."
  },
  {
    id: 116,
    qid: "SC-500-MOD4-116",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Select the correct Microsoft Graph permission (application permission) that a playbook’s managed identity must be granted to isolate devices via the Defender for Endpoint API.",
    scenario: `<div class="scenario-text"><p>The Logic App uses a system-assigned managed identity and fails with a 403 when attempting isolation.</p></div>`,
    options: [
      { id: "A", text: "Machine.Isolate (or the broader Machine.ReadWrite.All / AdvancedHunting.Read.All with appropriate roles)" },
      { id: "B", text: "User.Read.All only" },
      { id: "C", text: "Mail.Send" },
      { id: "D", text: "Directory.Read.All only" }
    ],
    answer: ["A"],
    explanation: "Machine.Isolate or the equivalent Machine.ReadWrite.All (combined with the correct RBAC role) is required for isolation. User.Read.All, Mail.Send, and Directory.Read.All do not grant device response permissions."
  },
  {
    id: 117,
    qid: "SC-500-MOD4-117",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Which KQL query correctly identifies devices that are currently isolated so an analyst can review the isolation status across the environment?",
    scenario: `<div class="scenario-text"><p>The SOC manager needs a list of every device that is still in the isolated state.</p></div>`,
    options: [
      { id: "A", text: "DeviceInfo | where IsIsolated == true or IsolationType != '' | project DeviceName, DeviceId, IsolationType, Timestamp" },
      { id: "B", text: "DeviceProcessEvents | where ActionType == 'Isolate'" },
      { id: "C", text: "IdentityLogonEvents | where IsIsolated == true" },
      { id: "D", text: "CloudAppEvents | where DeviceIsolated == true" }
    ],
    answer: ["A"],
    explanation: "DeviceInfo (or the equivalent current-state table) exposes the IsIsolated / IsolationType properties. Process events, identity logons, and cloud-app events do not carry the current isolation state flag."
  },
  {
    id: 118,
    qid: "SC-500-MOD4-118",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Identify the correct Microsoft Graph action that a playbook should call to disable a user account in Microsoft Entra ID as part of compromise mitigation.",
    scenario: `<div class="scenario-text"><p>The playbook has the Account entity and must block the user immediately.</p></div>`,
    options: [
      { id: "A", text: "PATCH /users/{id} with accountEnabled set to false" },
      { id: "B", text: "POST /users/{id}/revokeSignInSessions only" },
      { id: "C", text: "DELETE /users/{id}" },
      { id: "D", text: "POST /users/{id}/assignLicense" }
    ],
    answer: ["A"],
    explanation: "Setting accountEnabled to false via PATCH is the standard disable action. RevokeSignInSessions is complementary but does not disable the account. DELETE removes the object entirely, and assignLicense is unrelated to containment."
  },
  {
    id: 119,
    qid: "SC-500-MOD4-119",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Select the correct parameter value that must be supplied when calling the Defender for Endpoint isolate API to request full network isolation (versus selective isolation).",
    scenario: `<div class="scenario-text"><p>The playbook must choose the isolation type that blocks all traffic except the Defender management channel.</p></div>`,
    options: [
      { id: "A", text: "IsolationType = Full (or 'Full')" },
      { id: "B", text: "IsolationType = Selective" },
      { id: "C", text: "IsolationType = Audit" },
      { id: "D", text: "IsolationType = None" }
    ],
    answer: ["A"],
    explanation: "Full isolation is the complete network cut-off (with management channel preserved). Selective isolation allows more traffic, Audit does not isolate, and None is not a valid isolation type for containment."
  },
  {
    id: 120,
    qid: "SC-500-MOD4-120",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Remediation & Response",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Which Microsoft Graph endpoint does a playbook call to revoke all refresh tokens for a compromised user after the account has been disabled?",
    scenario: `<div class="scenario-text"><p>The account is already disabled; remaining sessions must still be terminated.</p></div>`,
    options: [
      { id: "A", text: "POST /users/{id}/revokeSignInSessions" },
      { id: "B", text: "PATCH /users/{id} with accountEnabled=false (already done)" },
      { id: "C", text: "POST /users/{id}/changePassword" },
      { id: "D", text: "GET /users/{id}/authentication/methods" }
    ],
    answer: ["A"],
    explanation: "revokeSignInSessions is the dedicated endpoint that invalidates refresh tokens and forces re-authentication. The accountEnabled PATCH is the disable step already completed. changePassword and listing authentication methods are separate operations."
  },
  {
    id: 121,
    qid: "SC-500-MOD4-121",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "single",
    question: "In Microsoft Sentinel, which incident property is primarily used by automation rules and playbooks to decide ownership routing during triage?",
    scenario: `<div class="scenario-text"><p>The SOC wants high-severity identity incidents to be automatically assigned to the Identity Response team while all other high-severity incidents go to the general queue.</p></div>`,
    options: [
      { id: "A", text: "Owner / AssignedTo" },
      { id: "B", text: "FirstActivityTime" },
      { id: "C", text: "ProviderName" },
      { id: "D", text: "AdditionalData" }
    ],
    answer: ["A"],
    explanation: "The Owner (AssignedTo) property is the native field that automation rules and playbooks read and write to control assignment. FirstActivityTime is temporal, ProviderName indicates the source product, and AdditionalData is a free-form bag not used for standard ownership routing."
  },
  {
    id: 122,
    qid: "SC-500-MOD4-122",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "single",
    question: "Which Microsoft Sentinel feature allows an analyst to attach free-text or structured labels to an incident so that later filtering, automation, and reporting can target that incident set?",
    scenario: `<div class="scenario-text"><p>During triage the analyst determines that an incident is part of a known red-team exercise and must be excluded from mean-time-to-resolve metrics.</p></div>`,
    options: [
      { id: "A", text: "Tags" },
      { id: "B", text: "Severity" },
      { id: "C", text: "Status" },
      { id: "D", text: "Tactics" }
    ],
    answer: ["A"],
    explanation: "Tags are the flexible labeling mechanism designed for triage classification, automation conditions, and reporting filters. Severity and Status are lifecycle fields with fixed enumerations; Tactics are MITRE mappings and not intended for arbitrary analyst labels."
  },
  {
    id: 123,
    qid: "SC-500-MOD4-123",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "single",
    question: "When an incident in Microsoft Sentinel is closed, which two pieces of information are mandatory before the status can be set to Closed?",
    scenario: `<div class="scenario-text"><p>An analyst has finished investigation and is ready to close the incident in the portal.</p></div>`,
    options: [
      { id: "A", text: "Classification and Classification comment (reason)" },
      { id: "B", text: "Owner and Severity" },
      { id: "C", text: "Tags and Related alerts count" },
      { id: "D", text: "FirstActivityTime and LastActivityTime" }
    ],
    answer: ["A"],
    explanation: "Closing an incident requires a Classification (True Positive, False Positive, Benign, etc.) and a Classification comment. Owner and Severity can be changed independently; Tags and timestamps are not enforced at close time."
  },
  {
    id: 124,
    qid: "SC-500-MOD4-124",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "single",
    question: "Which Microsoft Sentinel capability is used to automatically create or update a ticket in an external ITSM system such as ServiceNow when an incident meets defined criteria?",
    scenario: `<div class="scenario-text"><p>The organization requires every High-severity Sentinel incident to appear as an incident ticket in ServiceNow within one minute of creation.</p></div>`,
    options: [
      { id: "A", text: "Automation rule that runs a Logic App playbook using the ServiceNow connector" },
      { id: "B", text: "Built-in ITSM connector that runs without any playbook" },
      { id: "C", text: "Analytics rule scheduled query that writes directly to ServiceNow" },
      { id: "D", text: "Workbook that exports incidents to CSV for manual upload" }
    ],
    answer: ["A"],
    explanation: "Automation rules evaluate incident conditions and invoke Logic App playbooks; the ServiceNow connector inside the playbook creates or updates the ticket. There is no zero-code built-in ITSM sync that bypasses playbooks for arbitrary systems. Analytics rules detect; they do not write to ITSM. Workbooks are visualization only."
  },
  {
    id: 125,
    qid: "SC-500-MOD4-125",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "multiselect",
    question: "Which three incident properties can be used as conditions inside a Microsoft Sentinel automation rule to control triage behavior?",
    scenario: `<div class="scenario-text"><p>You are building automation that routes, tags, and escalates incidents based on their attributes at creation time.</p></div>`,
    options: [
      { id: "A", text: "Severity" },
      { id: "B", text: "Title / Analytics rule name" },
      { id: "C", text: "Tags (existing or to be evaluated)" },
      { id: "D", text: "Number of related entities of type FileHash" },
      { id: "E", text: "Custom details from the original alert payload only after the incident is closed" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Severity, Title (or analytics rule name), and Tags are first-class incident properties available to automation rule conditions. Entity-count conditions of arbitrary types and post-closure custom details are not supported as native automation conditions."
  },
  {
    id: 126,
    qid: "SC-500-MOD4-126",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "multiselect",
    question: "Which two actions can an analyst perform on a Microsoft Sentinel incident during the triage phase without leaving the incident blade?",
    scenario: `<div class="scenario-text"><p>A new incident has appeared in the queue. The analyst needs to claim ownership and classify it for later reporting.</p></div>`,
    options: [
      { id: "A", text: "Assign the incident to themselves or another analyst" },
      { id: "B", text: "Add one or more tags" },
      { id: "C", text: "Modify the underlying analytics rule query" },
      { id: "D", text: "Delete the original SecurityAlert records from the Log Analytics workspace" },
      { id: "E", text: "Change the workspace retention period" }
    ],
    answer: ["A", "B"],
    explanation: "Assignment and tagging are native triage actions available on the incident blade. Changing analytics rules, deleting raw alerts, or altering retention are management-plane operations outside the incident triage experience."
  },
  {
    id: 127,
    qid: "SC-500-MOD4-127",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "multiselect",
    question: "Which three status values form the normal lifecycle progression of a Microsoft Sentinel incident from creation to completion?",
    scenario: `<div class="scenario-text"><p>You are documenting the expected state transitions for SOC metrics and automation triggers.</p></div>`,
    options: [
      { id: "A", text: "New" },
      { id: "B", text: "Active" },
      { id: "C", text: "Closed" },
      { id: "D", text: "Suppressed" },
      { id: "E", text: "Archived" }
    ],
    answer: ["A", "B", "C"],
    explanation: "The canonical lifecycle is New → Active → Closed. Suppressed is not a status; Archived is not a first-class incident status in Sentinel."
  },
  {
    id: 128,
    qid: "SC-500-MOD4-128",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "multiselect",
    question: "Which two Microsoft Sentinel features support bi-directional synchronization of incident status and assignment with an external ITSM system?",
    scenario: `<div class="scenario-text"><p>The SOC uses ServiceNow as the system of record for ticket ownership and closure. Changes made in either system must be reflected in the other.</p></div>`,
    options: [
      { id: "A", text: "Logic App playbooks that use the ServiceNow connector for create/update operations" },
      { id: "B", text: "Automation rules that trigger those playbooks on incident create and update events" },
      { id: "C", text: "A native ServiceNow data connector that automatically mirrors every field without playbooks" },
      { id: "D", text: "Workbook-based CSV export scheduled every hour" },
      { id: "E", text: "Manual copy-paste of incident numbers by analysts" }
    ],
    answer: ["A", "B"],
    explanation: "Playbooks with the ServiceNow connector plus automation rules that invoke them on create/update events provide the supported bi-directional path. There is no fully automatic zero-code field-level mirror for arbitrary ITSM systems. CSV export and manual copy are not bi-directional integrations."
  },
  {
    id: 129,
    qid: "SC-500-MOD4-129",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "multiselect",
    question: "Which three pieces of information are recorded when an analyst closes a Microsoft Sentinel incident as a False Positive?",
    scenario: `<div class="scenario-text"><p>The incident was generated by a known-benign administrative script. Proper closure is required for metrics and future tuning.</p></div>`,
    options: [
      { id: "A", text: "Classification = False Positive" },
      { id: "B", text: "Classification comment explaining the reason" },
      { id: "C", text: "Closed time and the identity of the closing analyst" },
      { id: "D", text: "Automatic deletion of all related entities from the entity graph" },
      { id: "E", text: "Immediate disablement of the originating analytics rule" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Classification, classification comment, and the audit trail of who closed the incident and when are always captured. Entities remain in the graph for historical investigation; the analytics rule is not automatically disabled."
  },
  {
    id: 130,
    qid: "SC-500-MOD4-130",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "multiselect",
    question: "Which two automation-rule actions can be used to keep the SOC queue clean during initial triage without running a Logic App?",
    scenario: `<div class="scenario-text"><p>Low-severity informational incidents that match a known pattern should be auto-closed or auto-tagged so analysts never see them in the active queue.</p></div>`,
    options: [
      { id: "A", text: "Change status to Closed with an appropriate classification" },
      { id: "B", text: "Add a tag such as 'Auto-Closed-Benign'" },
      { id: "C", text: "Run an Advanced Hunting query across all workspaces" },
      { id: "D", text: "Create a new analytics rule that excludes the pattern" },
      { id: "E", text: "Delete the incident permanently from the workspace" }
    ],
    answer: ["A", "B"],
    explanation: "Automation rules can natively change status (including close with classification) and add tags without a playbook. Advanced Hunting, analytics-rule creation, and permanent deletion are outside the built-in automation-rule action set."
  },
  {
    id: 131,
    qid: "SC-500-MOD4-131",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "multiselect",
    question: "Which three Microsoft Defender XDR / Sentinel incident fields are commonly mapped to corresponding fields in an external ITSM ticket for consistent lifecycle management?",
    scenario: `<div class="scenario-text"><p>You are designing the field mapping for a ServiceNow integration playbook.</p></div>`,
    options: [
      { id: "A", text: "Severity → Urgency / Priority" },
      { id: "B", text: "Owner / AssignedTo → Assigned to" },
      { id: "C", text: "Status → State" },
      { id: "D", text: "FirstActivityTime → Configuration Item only" },
      { id: "E", text: "Number of related alerts → Business Service" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Severity, Owner, and Status are the core fields that map cleanly to ITSM priority, assignment, and state. FirstActivityTime and alert count are useful context but are not the primary lifecycle-mapping fields."
  },
  {
    id: 132,
    qid: "SC-500-MOD4-132",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "multiselect",
    question: "Which two statements correctly describe incident grouping behavior in Microsoft Sentinel?",
    scenario: `<div class="scenario-text"><p>Multiple alerts that share entities and occur close together are being grouped into a single incident. You must explain the behavior to the SOC team.</p></div>`,
    options: [
      { id: "A", text: "Grouping can be configured per analytics rule by entity, by alert details, or disabled" },
      { id: "B", text: "When grouping is enabled, subsequent matching alerts are added to the existing open incident instead of creating a new one" },
      { id: "C", text: "Grouping always forces every alert in the workspace into a single incident regardless of rule settings" },
      { id: "D", text: "Once an incident is closed, new matching alerts automatically re-open it" },
      { id: "E", text: "Grouping configuration is global and cannot be set per rule" }
    ],
    answer: ["A", "B"],
    explanation: "Grouping is configured at the analytics-rule level and, when enabled, appends matching alerts to an existing open incident. It is not global, does not ignore rule settings, and does not automatically reopen closed incidents by default."
  },
  {
    id: 133,
    qid: "SC-500-MOD4-133",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "multiselect",
    question: "Which three triage actions are available to an analyst directly from the Microsoft Defender XDR incidents queue?",
    scenario: `<div class="scenario-text"><p>The analyst is working inside the unified XDR portal and needs to perform bulk triage on several new incidents.</p></div>`,
    options: [
      { id: "A", text: "Assign owner" },
      { id: "B", text: "Change status" },
      { id: "C", text: "Add tags or comments" },
      { id: "D", text: "Modify the underlying custom detection rule KQL" },
      { id: "E", text: "Change the Log Analytics workspace retention" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Owner assignment, status change, and tagging/comments are supported triage actions in the XDR incidents queue. Editing detection rules or workspace retention are configuration tasks outside the triage surface."
  },
  {
    id: 134,
    qid: "SC-500-MOD4-134",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "multiselect",
    question: "Which two Microsoft Sentinel automation-rule triggers can be used to react to changes that occur after an incident has already been created?",
    scenario: `<div class="scenario-text"><p>You need an automation rule that re-evaluates when an analyst updates severity or when new alerts are added to an existing incident.</p></div>`,
    options: [
      { id: "A", text: "When incident is updated" },
      { id: "B", text: "When alert is created (and the alert is attached to an existing incident)" },
      { id: "C", text: "When the analytics rule is edited" },
      { id: "D", text: "When a workbook is refreshed" },
      { id: "E", text: "When a hunting query is saved" }
    ],
    answer: ["A", "B"],
    explanation: "The 'incident updated' and 'alert created' triggers allow automation to react to post-creation changes. Analytics-rule edits, workbook refreshes, and hunting-query saves do not raise incident automation events."
  },
  {
    id: 135,
    qid: "SC-500-MOD4-135",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "multiselect",
    question: "Which three classification values are valid when closing a Microsoft Sentinel incident?",
    scenario: `<div class="scenario-text"><p>An analyst is closing an incident and must choose the correct classification for metrics and tuning feedback.</p></div>`,
    options: [
      { id: "A", text: "True Positive" },
      { id: "B", text: "False Positive" },
      { id: "C", text: "Benign Positive" },
      { id: "D", text: "Unknown Threat" },
      { id: "E", text: "Deferred" }
    ],
    answer: ["A", "B", "C"],
    explanation: "True Positive, False Positive, and Benign Positive (or the equivalent Benign) are the standard classification values. Unknown Threat and Deferred are not valid closure classifications."
  },
  {
    id: 136,
    qid: "SC-500-MOD4-136",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "multiselect",
    question: "Which two methods can be used to prevent an incident from appearing in the default active queue of Microsoft Sentinel while still preserving it for audit and reporting?",
    scenario: `<div class="scenario-text"><p>A set of incidents related to a controlled red-team exercise must be kept out of the daily SOC queue.</p></div>`,
    options: [
      { id: "A", text: "Close the incidents with classification Benign Positive and an explanatory comment" },
      { id: "B", text: "Add a distinctive tag and create a saved view or filter that excludes that tag" },
      { id: "C", text: "Delete the incidents from the SecurityIncident table" },
      { id: "D", text: "Disable the Microsoft Sentinel workspace" },
      { id: "E", text: "Change the incident severity to Informational and hope analysts ignore them" }
    ],
    answer: ["A", "B"],
    explanation: "Closing as Benign or filtering by tag are the supported, auditable methods. Deleting rows, disabling the workspace, or relying on severity alone are either destructive or unreliable."
  },
  {
    id: 137,
    qid: "SC-500-MOD4-137",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "dragdrop",
    question: "Order the typical triage workflow an analyst follows when a new high-severity incident appears in Microsoft Sentinel.",
    scenario: `<div class="scenario-text"><p>Document the standard first-response sequence for the SOC runbook.</p></div>`,
    options: [
      { id: "1", text: "Open the incident and review the title, severity, tactics, and entity summary" },
      { id: "2", text: "Assign the incident to yourself or the appropriate responder" },
      { id: "3", text: "Add initial tags that capture triage decisions (e.g., 'Identity', 'Needs-Enrichment')" },
      { id: "4", text: "Change status from New to Active and begin investigation" },
      { id: "5", text: "Update comments with findings and, when finished, close with classification" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Review, claim ownership, tag, move to Active, investigate and close is the standard triage progression."
  },
  {
    id: 138,
    qid: "SC-500-MOD4-138",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "dragdrop",
    question: "Sequence the steps required to configure an automation rule that automatically assigns high-severity incidents generated by a specific analytics rule to a named owner.",
    scenario: `<div class="scenario-text"><p>All incidents from the rule 'SuspiciousSignin-NewCountry' must be owned by the Identity Response queue.</p></div>`,
    options: [
      { id: "1", text: "Create a new automation rule and set the trigger to 'When incident is created'" },
      { id: "2", text: "Add a condition that matches the analytics rule name or incident title" },
      { id: "3", text: "Add a condition that the severity equals High" },
      { id: "4", text: "Add the action 'Assign owner' and select the target user or group" },
      { id: "5", text: "Enable the automation rule and validate with a test incident" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Trigger, rule-name condition, severity condition, assign-owner action, and enablement form the complete configuration path."
  },
  {
    id: 139,
    qid: "SC-500-MOD4-139",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "dragdrop",
    question: "Arrange the steps to close a Microsoft Sentinel incident as a True Positive after investigation is complete.",
    scenario: `<div class="scenario-text"><p>The analyst has confirmed the activity was malicious and all containment actions are finished.</p></div>`,
    options: [
      { id: "1", text: "Ensure all investigation findings and response actions are documented in comments" },
      { id: "2", text: "Select the Close incident action" },
      { id: "3", text: "Choose Classification = True Positive" },
      { id: "4", text: "Enter a classification comment that summarizes the root cause and actions taken" },
      { id: "5", text: "Confirm closure; the incident status becomes Closed and the close time is recorded" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Document, initiate close, set classification, add comment, confirm."
  },
  {
    id: 140,
    qid: "SC-500-MOD4-140",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "dragdrop",
    question: "Order the process for integrating Microsoft Sentinel incidents with ServiceNow so that a ticket is created for every High-severity incident.",
    scenario: `<div class="scenario-text"><p>The SOC requires automatic ticket creation and bi-directional status updates.</p></div>`,
    options: [
      { id: "1", text: "Create a Logic App playbook that uses the ServiceNow connector to create an incident ticket" },
      { id: "2", text: "Map Sentinel severity, title, owner, and status fields to the corresponding ServiceNow fields" },
      { id: "3", text: "Create an automation rule that triggers on incident creation when severity is High and runs the playbook" },
      { id: "4", text: "Add a second automation rule or playbook branch that updates the ServiceNow ticket when the Sentinel incident status changes" },
      { id: "5", text: "Test end-to-end with a synthetic high-severity incident and verify ticket creation and status sync" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Playbook creation, field mapping, create-trigger automation, update-trigger automation, and validation."
  },
  {
    id: 141,
    qid: "SC-500-MOD4-141",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "dragdrop",
    question: "Sequence the actions an analyst performs when re-opening a previously closed incident because new related alerts have appeared.",
    scenario: `<div class="scenario-text"><p>A closed incident has received additional alerts that indicate the attack continued.</p></div>`,
    options: [
      { id: "1", text: "Locate the closed incident in the incidents queue (filter by Closed status if necessary)" },
      { id: "2", text: "Open the incident and review the newly added alerts and entities" },
      { id: "3", text: "Change the status from Closed back to Active" },
      { id: "4", text: "Update the owner and tags to reflect the new investigation priority" },
      { id: "5", text: "Continue investigation and re-close with an updated classification when finished" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Locate, review new evidence, re-activate, re-triage, investigate and close again."
  },
  {
    id: 142,
    qid: "SC-500-MOD4-142",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "dragdrop",
    question: "Arrange the steps to create a saved view in Microsoft Sentinel that shows only incidents tagged 'Priority-Critical' and assigned to the current user.",
    scenario: `<div class="scenario-text"><p>Each analyst wants a personal queue that surfaces only their highest-priority work.</p></div>`,
    options: [
      { id: "1", text: "Open the Incidents blade and clear any existing filters" },
      { id: "2", text: "Add a filter for Tags contains 'Priority-Critical'" },
      { id: "3", text: "Add a filter for Owner equals the current user" },
      { id: "4", text: "Optionally add a Status filter for New or Active" },
      { id: "5", text: "Save the current filter set as a named view and pin it if desired" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Clear filters, apply tag filter, apply owner filter, optional status filter, save the view."
  },
  {
    id: 143,
    qid: "SC-500-MOD4-143",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "dragdrop",
    question: "Order the configuration of an automation rule that adds a tag and changes severity when an incident contains a specific entity type.",
    scenario: `<div class="scenario-text"><p>Any incident that includes a Host entity whose name matches a critical-server pattern must be elevated to High severity and tagged 'Critical-Asset'.</p></div>`,
    options: [
      { id: "1", text: "Create an automation rule triggered on incident creation or update" },
      { id: "2", text: "Add an entity condition that matches Host entities with the required name pattern" },
      { id: "3", text: "Add the action to change severity to High" },
      { id: "4", text: "Add the action to add the tag 'Critical-Asset'" },
      { id: "5", text: "Enable the rule and validate with a test incident that contains a matching host" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Trigger, entity condition, severity action, tag action, enable and test."
  },
  {
    id: 144,
    qid: "SC-500-MOD4-144",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "dragdrop",
    question: "Sequence the steps to bulk-assign a set of unassigned incidents to a single analyst from the Microsoft Sentinel incidents queue.",
    scenario: `<div class="scenario-text"><p>After a shift change, twenty New incidents have no owner and must be claimed by the incoming analyst.</p></div>`,
    options: [
      { id: "1", text: "Filter the incidents queue to Status = New and Owner = Unassigned (or blank)" },
      { id: "2", text: "Select the checkboxes for the incidents that should be assigned" },
      { id: "3", text: "Choose the Assign / Change owner action from the toolbar" },
      { id: "4", text: "Select the target analyst and confirm the assignment" },
      { id: "5", text: "Verify that the Owner column now shows the selected analyst for those incidents" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Filter, multi-select, invoke assign action, choose owner, verify."
  },
  {
    id: 145,
    qid: "SC-500-MOD4-145",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "dragdrop",
    question: "Arrange the order of operations when an external SIEM forwards alerts into Microsoft Sentinel and those alerts must be grouped into incidents.",
    scenario: `<div class="scenario-text"><p>A third-party SIEM is sending alerts via the REST API or a data connector. Sentinel must create and manage incidents from them.</p></div>`,
    options: [
      { id: "1", text: "Ingest the external alerts into a custom or standard table in the Log Analytics workspace" },
      { id: "2", text: "Create a scheduled analytics rule that queries the ingested alerts and maps entities" },
      { id: "3", text: "Configure the analytics rule’s incident settings (grouping, severity, tactics)" },
      { id: "4", text: "Enable the rule so that matching alerts generate or update Sentinel incidents" },
      { id: "5", text: "Optionally attach automation rules for triage and ITSM synchronization" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Ingest, detect with analytics rule, configure incident behavior, enable, and add automation."
  },
  {
    id: 146,
    qid: "SC-500-MOD4-146",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "dragdrop",
    question: "Order the steps an analyst takes to add a structured comment and a tag that will later be used by reporting workbooks.",
    scenario: `<div class="scenario-text"><p>During investigation the analyst discovers the incident is related to a known campaign and wants both a human-readable note and a machine-readable tag.</p></div>`,
    options: [
      { id: "1", text: "Open the incident" },
      { id: "2", text: "In the Comments section, enter a clear description of the campaign linkage and findings" },
      { id: "3", text: "Save the comment" },
      { id: "4", text: "In the Tags section, add the campaign tag (e.g., 'Campaign-XYZ')" },
      { id: "5", text: "Confirm the tag appears on the incident header and is available for workbook filtering" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Open, write comment, save, add tag, verify."
  },
  {
    id: 147,
    qid: "SC-500-MOD4-147",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "dragdrop",
    question: "Sequence the lifecycle states an incident passes through when it is automatically closed by an automation rule as a False Positive.",
    scenario: `<div class="scenario-text"><p>An automation rule has been configured to auto-close incidents that match a known-benign pattern.</p></div>`,
    options: [
      { id: "1", text: "Incident is created with Status = New" },
      { id: "2", text: "Automation rule conditions evaluate to true" },
      { id: "3", text: "Automation rule action sets Status = Closed and Classification = False Positive" },
      { id: "4", text: "Classification comment is written (if configured) and close time is recorded" },
      { id: "5", text: "Incident no longer appears in the default Active/New queue and is available only in Closed views" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Creation, condition match, auto-close action, audit fields, removal from active queue."
  },
  {
    id: 148,
    qid: "SC-500-MOD4-148",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "dragdrop",
    question: "Arrange the steps to configure incident grouping so that alerts sharing the same Account entity within a 12-hour window are merged into one incident.",
    scenario: `<div class="scenario-text"><p>Multiple alerts for the same user are creating alert fatigue. Grouping must be enabled on the analytics rule.</p></div>`,
    options: [
      { id: "1", text: "Open the analytics rule in edit mode" },
      { id: "2", text: "Navigate to the Incident settings (or Alert grouping) section" },
      { id: "3", text: "Enable grouping and select the Account entity as the grouping key" },
      { id: "4", text: "Set the grouping time window to 12 hours" },
      { id: "5", text: "Save and enable the rule; subsequent matching alerts will update the existing incident" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Edit rule, open grouping settings, choose entity key, set window, save."
  },
  {
    id: 149,
    qid: "SC-500-MOD4-149",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "hotspot",
    question: "In the Microsoft Sentinel incidents blade, which column or control allows an analyst to see and change the current owner of an incident?",
    scenario: `<div class="scenario-text"><p>The analyst needs to claim an unassigned incident or re-assign one that is already owned.</p></div>`,
    options: [
      { id: "A", text: "Owner / Assigned to column and the Assign action" },
      { id: "B", text: "Severity column" },
      { id: "C", text: "Status column only" },
      { id: "D", text: "Tactics column" }
    ],
    answer: ["A"],
    explanation: "The Owner column displays the current assignee and the Assign action (or inline edit) changes it. Severity, Status, and Tactics are different properties."
  },
  {
    id: 150,
    qid: "SC-500-MOD4-150",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "hotspot",
    question: "Which control on a Microsoft Sentinel incident page is used to add a free-text label that can later be used in filters and automation conditions?",
    scenario: `<div class="scenario-text"><p>The analyst wants to mark the incident with the label 'RedTeam-Exercise' for reporting exclusion.</p></div>`,
    options: [
      { id: "A", text: "Tags" },
      { id: "B", text: "Severity drop-down" },
      { id: "C", text: "Status drop-down" },
      { id: "D", text: "Classification (only available at close)" }
    ],
    answer: ["A"],
    explanation: "Tags are the mechanism for arbitrary labels. Severity and Status are fixed enumerations; Classification is applied only when closing."
  },
  {
    id: 151,
    qid: "SC-500-MOD4-151",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "hotspot",
    question: "In the Microsoft Sentinel automation rule editor, which action is used to change the owner of an incident without invoking a Logic App?",
    scenario: `<div class="scenario-text"><p>You are configuring a lightweight automation rule that routes incidents by severity and rule name.</p></div>`,
    options: [
      { id: "A", text: "Assign owner / Change owner" },
      { id: "B", text: "Run playbook" },
      { id: "C", text: "Create new incident" },
      { id: "D", text: "Delete incident" }
    ],
    answer: ["A"],
    explanation: "The built-in Assign owner action updates the Owner property directly. Run playbook is for Logic Apps; Create and Delete are not standard automation-rule actions for ownership."
  },
  {
    id: 152,
    qid: "SC-500-MOD4-152",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "hotspot",
    question: "Which Microsoft Sentinel incident property must be supplied, together with a comment, when an analyst sets the status to Closed?",
    scenario: `<div class="scenario-text"><p>The close dialog is open and the analyst must complete the required fields.</p></div>`,
    options: [
      { id: "A", text: "Classification" },
      { id: "B", text: "Tactics" },
      { id: "C", text: "FirstActivityTime" },
      { id: "D", text: "ProviderName" }
    ],
    answer: ["A"],
    explanation: "Classification (True Positive, False Positive, Benign Positive, etc.) is mandatory at close time, along with a classification comment. Tactics, timestamps, and provider are not required for closure."
  },
  {
    id: 153,
    qid: "SC-500-MOD4-153",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "hotspot",
    question: "In the Microsoft Defender XDR incidents queue, which bulk action allows an analyst to set the same owner on multiple selected incidents at once?",
    scenario: `<div class="scenario-text"><p>Ten new incidents need to be assigned to the same responder after a shift handover.</p></div>`,
    options: [
      { id: "A", text: "Manage incidents / Assign" },
      { id: "B", text: "Run advanced hunting" },
      { id: "C", text: "Create alert" },
      { id: "D", text: "Open in Sentinel" }
    ],
    answer: ["A"],
    explanation: "The Manage incidents (or bulk Assign) action updates ownership for all selected incidents. Advanced hunting, Create alert, and Open in Sentinel are different operations."
  },
  {
    id: 154,
    qid: "SC-500-MOD4-154",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "hotspot",
    question: "Which Microsoft Sentinel feature provides a visual timeline of all status changes, ownership changes, comments, and tags applied to an incident?",
    scenario: `<div class="scenario-text"><p>An auditor needs to reconstruct every triage action that occurred on a high-severity incident.</p></div>`,
    options: [
      { id: "A", text: "Incident activity log / History" },
      { id: "B", text: "Entity graph only" },
      { id: "C", text: "Analytics rule edit history" },
      { id: "D", text: "Workbook drill-through" }
    ],
    answer: ["A"],
    explanation: "The incident activity log (History) records every status, owner, comment, and tag change. The entity graph shows relationships, rule history is separate, and workbooks are for aggregated metrics."
  },
  {
    id: 155,
    qid: "SC-500-MOD4-155",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Identify the correct automation-rule condition syntax that matches incidents whose title contains the string 'Ransomware'.",
    scenario: `<div class="scenario-text"><p>You are building an automation rule that should fire only for ransomware-related incidents.</p></div>`,
    options: [
      { id: "A", text: "Incident title Contains 'Ransomware'" },
      { id: "B", text: "Incident severity Equals 'Ransomware'" },
      { id: "C", text: "Entity type Equals 'Ransomware'" },
      { id: "D", text: "Analytics rule name Equals 'Ransomware' (exact match only)" }
    ],
    answer: ["A"],
    explanation: "The Title Contains operator is the correct way to match a substring in the incident title. Severity and entity type do not hold the title string; an exact analytics-rule-name match would miss titles that only contain the word."
  },
  {
    id: 156,
    qid: "SC-500-MOD4-156",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Select the correct automation-rule action configuration that both assigns an owner and adds a tag in a single rule.",
    scenario: `<div class="scenario-text"><p>High-severity incidents from a specific rule must be owned by 'soc-identity@contoso.com' and tagged 'Identity-Triage'.</p></div>`,
    options: [
      { id: "A", text: "Action 1: Assign owner = soc-identity@contoso.com; Action 2: Add tags = Identity-Triage" },
      { id: "B", text: "Action 1: Run playbook only" },
      { id: "C", text: "Action 1: Change status to Closed; Action 2: Assign owner" },
      { id: "D", text: "Action 1: Change severity to Informational" }
    ],
    answer: ["A"],
    explanation: "Automation rules support multiple built-in actions in sequence; Assign owner followed by Add tags is the correct combination. Running a playbook, closing, or changing severity alone does not satisfy the dual requirement."
  },
  {
    id: 157,
    qid: "SC-500-MOD4-157",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Which KQL fragment correctly retrieves all Microsoft Sentinel incidents that are currently Active and have been assigned to a specific user?",
    scenario: `<div class="scenario-text"><p>A workbook tile must show the open workload of analyst 'alex@contoso.com'.</p></div>`,
    options: [
      { id: "A", text: "SecurityIncident | where Status == 'Active' and Owner.email == 'alex@contoso.com' or Owner == 'alex@contoso.com'" },
      { id: "B", text: "SecurityAlert | where Status == 'Active'" },
      { id: "C", text: "SecurityIncident | where Status == 'New' and Title contains 'alex'" },
      { id: "D", text: "AuditLogs | where OperationName == 'Assign'" }
    ],
    answer: ["A"],
    explanation: "SecurityIncident is the correct table; filtering on Status == 'Active' and the Owner field yields the required set. SecurityAlert is a different table, Title contains is unreliable for ownership, and AuditLogs would require more complex parsing."
  },
  {
    id: 158,
    qid: "SC-500-MOD4-158",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Identify the correct classification value that should be used when closing an incident that was generated by a legitimate penetration-test activity.",
    scenario: `<div class="scenario-text"><p>The red-team exercise was authorized and the alerts are expected. The incident must be closed without counting as a True Positive in SOC metrics.</p></div>`,
    options: [
      { id: "A", text: "Benign Positive (or Benign)" },
      { id: "B", text: "True Positive" },
      { id: "C", text: "False Positive" },
      { id: "D", text: "Undetermined" }
    ],
    answer: ["A"],
    explanation: "Benign Positive (or the Benign classification) is the correct choice for authorized testing activity. True Positive would inflate detection metrics, False Positive implies the detection logic was wrong, and Undetermined is not a standard closure value."
  },
  {
    id: 159,
    qid: "SC-500-MOD4-159",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Select the correct Microsoft Graph / Sentinel API property name that a playbook must set when updating the owner of an incident.",
    scenario: `<div class="scenario-text"><p>A Logic App receives an incident and must assign it to a specific user principal name.</p></div>`,
    options: [
      { id: "A", text: "properties.owner.objectId or properties.owner.email (depending on API version)" },
      { id: "B", text: "properties.severity" },
      { id: "C", text: "properties.status" },
      { id: "D", text: "properties.labels only" }
    ],
    answer: ["A"],
    explanation: "The owner object (with objectId or email) is the property that controls assignment. Severity, status, and labels (tags) are separate fields."
  },
  {
    id: 160,
    qid: "SC-500-MOD4-160",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Incident Management",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Which automation-rule condition correctly limits execution to incidents that already carry the tag 'Needs-Escalation'?",
    scenario: `<div class="scenario-text"><p>A second-stage automation rule should run only after a previous rule or analyst has applied the escalation tag.</p></div>`,
    options: [
      { id: "A", text: "Tags Contains 'Needs-Escalation'" },
      { id: "B", text: "Severity Equals 'Needs-Escalation'" },
      { id: "C", text: "Status Equals 'Needs-Escalation'" },
      { id: "D", text: "Title Equals 'Needs-Escalation'" }
    ],
    answer: ["A"],
    explanation: "The Tags Contains operator is the proper condition for matching an existing tag. Severity, Status, and Title do not store arbitrary tag values."
  },
  {
    id: 161,
    qid: "SC-500-MOD4-161",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "single",
    question: "In Microsoft Sentinel, which feature allows a hunter to save a KQL query result set together with annotations and later convert selected rows into an incident or an analytics rule?",
    scenario: `<div class="scenario-text"><p>During an ad-hoc hunt an analyst has identified a cluster of suspicious sign-ins. The findings must be preserved with notes and later promoted to a formal detection.</p></div>`,
    options: [
      { id: "A", text: "Hunting bookmark" },
      { id: "B", text: "Workbook pin" },
      { id: "C", text: "Logic App run history" },
      { id: "D", text: "Watchlist only" }
    ],
    answer: ["A"],
    explanation: "Hunting bookmarks capture query results, timestamps, entities, and free-text notes, and can be promoted to incidents or used as the basis for analytics rules. Workbook pins are visualizations, Logic App history is execution telemetry, and watchlists are static reference data."
  },
  {
    id: 162,
    qid: "SC-500-MOD4-162",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "single",
    question: "Which Microsoft Sentinel capability provides a Jupyter-based interactive environment for advanced threat hunting that can use MSTICPy and Kqlmagic?",
    scenario: `<div class="scenario-text"><p>A detection engineer needs to prototype complex multi-table correlations, visualize results with Python libraries, and share the analysis notebook with the team.</p></div>`,
    options: [
      { id: "A", text: "Notebooks (Azure Machine Learning or Synapse-backed Jupyter)" },
      { id: "B", text: "Analytics rule wizard only" },
      { id: "C", text: "Automation rule editor" },
      { id: "D", text: "Entity behavior analytics blade" }
    ],
    answer: ["A"],
    explanation: "Sentinel Notebooks launch a Jupyter environment that supports Kqlmagic, MSTICPy, and full Python visualization. The analytics rule wizard, automation editor, and entity behavior blades do not provide an interactive notebook runtime."
  },
  {
    id: 163,
    qid: "SC-500-MOD4-163",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "single",
    question: "When converting a hunting query into a scheduled analytics rule, which step ensures that the resulting incidents correctly populate the entity graph?",
    scenario: `<div class="scenario-text"><p>A successful hunting query returns UserPrincipalName, SrcIP, and DeviceName columns. The rule must create incidents that link Account, IP, and Host entities.</p></div>`,
    options: [
      { id: "A", text: "Configure entity mapping for each required entity type and identifier" },
      { id: "B", text: "Add a summarize operator that collapses all columns into a single string" },
      { id: "C", text: "Set the rule severity to Informational" },
      { id: "D", text: "Disable incident creation and rely on bookmarks only" }
    ],
    answer: ["A"],
    explanation: "Entity mapping tells Sentinel which query columns correspond to which entity identifiers (Account.FullName, IP.Address, Host.HostName, etc.). Without it the entity graph remains empty. Summarizing away columns, lowering severity, or disabling incident creation all prevent proper entity population."
  },
  {
    id: 164,
    qid: "SC-500-MOD4-164",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "single",
    question: "Which KQL operator is most appropriate when a hunter needs to keep only those rows from the left table that have no matching key in the right table (e.g., sign-ins never before seen for that user)?",
    scenario: `<div class="scenario-text"><p>The hunt compares current SigninLogs against a 30-day baseline of known-good UserPrincipalName + IP combinations and must surface only novel combinations.</p></div>`,
    options: [
      { id: "A", text: "join kind=leftanti" },
      { id: "B", text: "join kind=inner" },
      { id: "C", text: "join kind=leftsemi" },
      { id: "D", text: "union" }
    ],
    answer: ["A"],
    explanation: "leftanti returns left-side rows that have no match on the right—the classic pattern for novelty detection. inner keeps only matches, leftsemi keeps left rows that do match, and union simply concatenates tables."
  },
  {
    id: 165,
    qid: "SC-500-MOD4-165",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "multiselect",
    question: "Which three practices improve the performance and reliability of advanced hunting queries that run against large Microsoft Sentinel tables?",
    scenario: `<div class="scenario-text"><p>Hunters frequently query SecurityEvent, SigninLogs, and DeviceProcessEvents with multi-hour lookbacks and must avoid timeouts.</p></div>`,
    options: [
      { id: "A", text: "Apply time filters (ago() or between) as early as possible in each branch" },
      { id: "B", text: "Project only the columns required for the final result and entity mapping" },
      { id: "C", text: "Use materialize() on any subquery that is referenced more than once" },
      { id: "D", text: "Always use join kind=fullouter to guarantee completeness" },
      { id: "E", text: "Remove all where clauses so the engine can optimize freely" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Early time filtering, column projection, and materialize() are core performance techniques. fullouter joins inflate intermediate results, and removing where clauses forces full table scans."
  },
  {
    id: 166,
    qid: "SC-500-MOD4-166",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "multiselect",
    question: "Which two statements correctly describe Microsoft Sentinel hunting bookmarks?",
    scenario: `<div class="scenario-text"><p>The SOC is standardizing on bookmarks for collaborative hunting and later promotion to detections.</p></div>`,
    options: [
      { id: "A", text: "A bookmark can store the original KQL, the result rows, entity mappings, and free-text notes" },
      { id: "B", text: "Bookmarks can be promoted to incidents or used as the starting point for an analytics rule" },
      { id: "C", text: "Bookmarks automatically become scheduled analytics rules after 24 hours" },
      { id: "D", text: "Bookmarks are stored only in the analyst’s browser local storage" },
      { id: "E", text: "Bookmarks cannot contain entity information" }
    ],
    answer: ["A", "B"],
    explanation: "Bookmarks persist query, results, entities, and notes in the workspace and support promotion to incidents or analytics rules. They do not auto-schedule, are not browser-local, and do support entities."
  },
  {
    id: 167,
    qid: "SC-500-MOD4-167",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "multiselect",
    question: "Which three Microsoft Sentinel notebook features are commonly used during advanced threat-hunting engagements?",
    scenario: `<div class="scenario-text"><p>A threat hunter is using a Jupyter notebook attached to the Sentinel workspace.</p></div>`,
    options: [
      { id: "A", text: "Kqlmagic for executing KQL directly inside notebook cells" },
      { id: "B", text: "MSTICPy library for enrichment, visualization, and TI lookups" },
      { id: "C", text: "Ability to write results back as bookmarks or to a custom table" },
      { id: "D", text: "Direct editing of the Log Analytics retention policy" },
      { id: "E", text: "Automatic creation of production analytics rules without review" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Kqlmagic, MSTICPy, and the ability to persist findings are core notebook capabilities. Retention-policy changes and unsupervised rule creation are outside the notebook scope."
  },
  {
    id: 168,
    qid: "SC-500-MOD4-168",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "multiselect",
    question: "When performing custom entity mapping in a hunting query that will later become an analytics rule, which three entity identifiers are valid for an Account entity?",
    scenario: `<div class="scenario-text"><p>The query returns a column that may contain a UPN, an AAD object ID, or a SID. The mapping must be correct for the entity graph.</p></div>`,
    options: [
      { id: "A", text: "FullName (UPN or friendly name)" },
      { id: "B", text: "AadUserId (Azure AD object ID)" },
      { id: "C", text: "Sid (Security Identifier)" },
      { id: "D", text: "HostName" },
      { id: "E", text: "Address (IP address)" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Account entities accept FullName, AadUserId, Sid, and similar identity identifiers. HostName belongs to Host entities; Address belongs to IP entities."
  },
  {
    id: 169,
    qid: "SC-500-MOD4-169",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "multiselect",
    question: "Which two KQL techniques are recommended when a hunter needs to compare a current observation against a historical baseline of the same entity?",
    scenario: `<div class="scenario-text"><p>The hunt looks for processes that have never been observed on a given device in the prior 14 days.</p></div>`,
    options: [
      { id: "A", text: "Build a baseline with a summarize / make_set over the historical window, then use leftanti or !in against the current window" },
      { id: "B", text: "Use materialize() on the baseline so it is computed only once" },
      { id: "C", text: "Use join kind=fullouter and keep every historical row" },
      { id: "D", text: "Rely solely on the ingestion_time() function without any entity key" },
      { id: "E", text: "Export both windows to CSV and compare them manually in Excel" }
    ],
    answer: ["A", "B"],
    explanation: "A summarized baseline plus leftanti/!in is the standard novelty pattern; materialize() avoids recomputing the baseline. fullouter retains noise, ingestion_time() alone lacks entity context, and manual CSV comparison does not scale."
  },
  {
    id: 170,
    qid: "SC-500-MOD4-170",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "multiselect",
    question: "Which three tables are most frequently used together in Microsoft Sentinel advanced hunting queries that investigate endpoint + identity attack paths?",
    scenario: `<div class="scenario-text"><p>A hunter is reconstructing a lateral-movement chain that started with a suspicious logon and continued with process execution on the target host.</p></div>`,
    options: [
      { id: "A", text: "SigninLogs or IdentityLogonEvents" },
      { id: "B", text: "DeviceProcessEvents or SecurityEvent" },
      { id: "C", text: "DeviceNetworkEvents" },
      { id: "D", text: "AzureActivity (control-plane only)" },
      { id: "E", text: "OfficeActivity (SharePoint file access only)" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Identity logon tables, process-execution tables, and network-connection tables form the core of endpoint-identity hunting. AzureActivity and OfficeActivity supply useful context but are not the primary tables for this attack-path pattern."
  },
  {
    id: 171,
    qid: "SC-500-MOD4-171",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "multiselect",
    question: "Which two actions can a hunter take after creating a bookmark in Microsoft Sentinel?",
    scenario: `<div class="scenario-text"><p>The bookmark contains a set of suspicious entities and notes. The hunter wants to operationalize the finding.</p></div>`,
    options: [
      { id: "A", text: "Create an incident from the bookmark" },
      { id: "B", text: "Use the bookmark as the basis for a new analytics rule" },
      { id: "C", text: "Automatically disable the data connector that produced the events" },
      { id: "D", text: "Delete the original raw log rows from the workspace" },
      { id: "E", text: "Change the workspace pricing tier" }
    ],
    answer: ["A", "B"],
    explanation: "Bookmarks support direct promotion to an incident and can seed an analytics rule. They cannot disable connectors, delete raw data, or alter pricing."
  },
  {
    id: 172,
    qid: "SC-500-MOD4-172",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "multiselect",
    question: "Which three MSTICPy capabilities are commonly leveraged inside a Microsoft Sentinel notebook during a hunt?",
    scenario: `<div class="scenario-text"><p>The notebook is already connected to the workspace via Kqlmagic.</p></div>`,
    options: [
      { id: "A", text: "Threat-intelligence enrichment of IPs, domains, and file hashes" },
      { id: "B", text: "Interactive entity graphs and timeline visualizations" },
      { id: "C", text: "Pivot functions that query related events for a selected entity" },
      { id: "D", text: "Direct modification of analytics-rule KQL in the Sentinel portal" },
      { id: "E", text: "Automatic purchase of additional Microsoft 365 E5 licenses" }
    ],
    answer: ["A", "B", "C"],
    explanation: "MSTICPy provides TI lookup, visualization, and pivot helpers. It does not edit portal analytics rules or purchase licenses."
  },
  {
    id: 173,
    qid: "SC-500-MOD4-173",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "multiselect",
    question: "When authoring a hunting query that must later support custom entity mapping, which three column-naming practices are recommended?",
    scenario: `<div class="scenario-text"><p>The query will be turned into an analytics rule and must map Account, IP, and Host entities cleanly.</p></div>`,
    options: [
      { id: "A", text: "Project clearly named columns such as UserPrincipalName, SrcIPAddress, DeviceName" },
      { id: "B", text: "Avoid overwriting entity-relevant columns with unrelated summarize results" },
      { id: "C", text: "Keep the original TimeGenerated column so incident timelines remain accurate" },
      { id: "D", text: "Rename every column to a generic name such as Col1, Col2, Col3" },
      { id: "E", text: "Drop the TimeGenerated column to reduce data volume" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Clear column names, preservation of entity values, and retention of TimeGenerated enable reliable entity mapping and timeline construction. Generic names and dropping TimeGenerated break mapping and investigation."
  },
  {
    id: 174,
    qid: "SC-500-MOD4-174",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "multiselect",
    question: "Which two Microsoft Defender XDR advanced-hunting tables are the closest equivalents to Microsoft Sentinel’s SecurityEvent and SigninLogs for cross-workload hunts?",
    scenario: `<div class="scenario-text"><p>A hunter working in the unified Defender XDR portal needs the endpoint process and identity logon data that correspond to the classic Sentinel tables.</p></div>`,
    options: [
      { id: "A", text: "DeviceProcessEvents" },
      { id: "B", text: "IdentityLogonEvents" },
      { id: "C", text: "AzureDiagnostics" },
      { id: "D", text: "Heartbeat" },
      { id: "E", text: "Usage" }
    ],
    answer: ["A", "B"],
    explanation: "DeviceProcessEvents supplies endpoint process telemetry; IdentityLogonEvents supplies identity logon telemetry. AzureDiagnostics, Heartbeat, and Usage serve different purposes."
  },
  {
    id: 175,
    qid: "SC-500-MOD4-175",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "multiselect",
    question: "Which three steps are required to turn a validated hunting query into a continuously running scheduled analytics rule in Microsoft Sentinel?",
    scenario: `<div class="scenario-text"><p>The query has been tested in the Logs blade and produces high-fidelity results.</p></div>`,
    options: [
      { id: "A", text: "Create a new analytics rule (or use 'Create analytics rule' from a bookmark/hunting query)" },
      { id: "B", text: "Paste or refine the KQL, configure entity mapping, and set the schedule and lookback" },
      { id: "C", text: "Set severity, tactics, and incident configuration, then enable the rule" },
      { id: "D", text: "Delete the original hunting query so it cannot be re-run" },
      { id: "E", text: "Disable all other analytics rules in the workspace" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Rule creation, query + entity + schedule configuration, and enablement are the required steps. Deleting the hunting query or disabling other rules is unnecessary and harmful."
  },
  {
    id: 176,
    qid: "SC-500-MOD4-176",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "multiselect",
    question: "Which two techniques help a hunter avoid query timeouts when correlating a high-volume table such as DeviceNetworkEvents with a lower-volume identity table?",
    scenario: `<div class="scenario-text"><p>The join must cover a 6-hour window and keeps timing out.</p></div>`,
    options: [
      { id: "A", text: "Filter both sides of the join with a tight time window before the join operator" },
      { id: "B", text: "Use materialize() on the smaller (identity) side if it is referenced multiple times" },
      { id: "C", text: "Remove all time filters so the optimizer can choose the best plan" },
      { id: "D", text: "Switch to join kind=fullouter to reduce intermediate size" },
      { id: "E", text: "Increase the rule frequency to every 24 hours and hope the problem disappears" }
    ],
    answer: ["A", "B"],
    explanation: "Early time filtering and materialize() on the smaller side are the primary remedies. Removing filters, using fullouter, or merely changing frequency do not solve the underlying cost problem."
  },
  {
    id: 177,
    qid: "SC-500-MOD4-177",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "dragdrop",
    question: "Order the steps a hunter follows to create a bookmark from a successful ad-hoc KQL query and later promote it to an incident.",
    scenario: `<div class="scenario-text"><p>The query has returned a set of suspicious entities that require formal incident tracking.</p></div>`,
    options: [
      { id: "1", text: "Run the hunting query in the Logs or Hunting blade and review the results" },
      { id: "2", text: "Select the relevant result rows and choose 'Add bookmark'" },
      { id: "3", text: "Provide a bookmark name, notes, and confirm entity mappings" },
      { id: "4", text: "From the Bookmarks blade, open the saved bookmark and select 'Create incident'" },
      { id: "5", text: "Complete the incident creation wizard (severity, title, etc.) and confirm" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Execute query, select rows, create bookmark with notes, open bookmark, promote to incident."
  },
  {
    id: 178,
    qid: "SC-500-MOD4-178",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "dragdrop",
    question: "Sequence the actions required to launch a Microsoft Sentinel notebook and execute a KQL query inside it using Kqlmagic.",
    scenario: `<div class="scenario-text"><p>A detection engineer wants to prototype a complex correlation in a Jupyter environment.</p></div>`,
    options: [
      { id: "1", text: "From the Sentinel Notebooks blade, create or open a notebook and attach a compute instance" },
      { id: "2", text: "Authenticate to the Log Analytics workspace (device code or managed identity)" },
      { id: "3", text: "Load Kqlmagic (or MSTICPy) in a notebook cell" },
      { id: "4", text: "Execute a KQL query using the %kql or %%kql magic and assign the result to a DataFrame" },
      { id: "5", text: "Perform additional Python analysis or visualization on the returned DataFrame" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Launch notebook, authenticate, load magic, run KQL, analyze in Python."
  },
  {
    id: 179,
    qid: "SC-500-MOD4-179",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "dragdrop",
    question: "Arrange the steps to convert a hunting bookmark into a scheduled analytics rule that preserves the original entity mappings.",
    scenario: `<div class="scenario-text"><p>The bookmark has been validated and must now run continuously.</p></div>`,
    options: [
      { id: "1", text: "Open the bookmark and choose the option to create an analytics rule (or copy the KQL)" },
      { id: "2", text: "Paste or confirm the KQL in the analytics-rule wizard" },
      { id: "3", text: "Map the result columns to the appropriate entity types and identifiers" },
      { id: "4", text: "Configure schedule, lookback, severity, and incident settings" },
      { id: "5", text: "Review and enable the rule" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Start from bookmark, confirm query, map entities, set schedule/severity, enable."
  },
  {
    id: 180,
    qid: "SC-500-MOD4-180",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "dragdrop",
    question: "Order the recommended process for building a novelty-detection hunting query that surfaces never-before-seen process command lines on a critical server.",
    scenario: `<div class="scenario-text"><p>The server’s DeviceName is known. The hunt must compare the last 24 hours against a 14-day baseline.</p></div>`,
    options: [
      { id: "1", text: "Define the historical baseline window (e.g., 14 days) and the current observation window (24 hours)" },
      { id: "2", text: "Query DeviceProcessEvents for the target DeviceName in the baseline window and summarize distinct ProcessCommandLine values" },
      { id: "3", text: "Materialize or store the baseline set" },
      { id: "4", text: "Query the same table for the current window and apply a leftanti or !in filter against the baseline" },
      { id: "5", text: "Project the novel command lines, timestamps, and entities for further investigation or bookmarking" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Define windows, build baseline, cache it, anti-join current data, project results."
  },
  {
    id: 181,
    qid: "SC-500-MOD4-181",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "dragdrop",
    question: "Sequence the steps to enrich hunting results with threat-intelligence data inside a Microsoft Sentinel notebook using MSTICPy.",
    scenario: `<div class="scenario-text"><p>The notebook already contains a DataFrame of suspicious IP addresses obtained from a KQL query.</p></div>`,
    options: [
      { id: "1", text: "Ensure MSTICPy is installed and imported in the notebook" },
      { id: "2", text: "Configure TI providers (e.g., VirusTotal, AlienVault OTX, or Microsoft TI) with appropriate API keys or workspace settings" },
      { id: "3", text: "Call the MSTICPy TI lookup function against the IP column of the DataFrame" },
      { id: "4", text: "Join or merge the TI results back into the original DataFrame" },
      { id: "5", text: "Filter or visualize only those IPs that return positive TI hits for further investigation" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Import, configure providers, lookup, merge, filter/visualize."
  },
  {
    id: 182,
    qid: "SC-500-MOD4-182",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "dragdrop",
    question: "Arrange the order of operations when a hunter discovers a promising pattern in a notebook and wants to share both the query and the annotated results with the SOC team.",
    scenario: `<div class="scenario-text"><p>Collaboration and later operationalization are required.</p></div>`,
    options: [
      { id: "1", text: "Finalize the KQL and any Python enrichment inside the notebook" },
      { id: "2", text: "Create a hunting bookmark (or export the key result rows) that captures entities and notes" },
      { id: "3", text: "Save or publish the notebook to a shared location accessible to the team" },
      { id: "4", text: "Optionally create an analytics rule from the validated KQL" },
      { id: "5", text: "Document the hunt hypothesis, results, and next steps in the SOC runbook or incident comments" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Finalize analysis, bookmark findings, share notebook, operationalize if ready, document."
  },
  {
    id: 183,
    qid: "SC-500-MOD4-183",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "dragdrop",
    question: "Order the steps to map custom entities when creating an analytics rule from a hunting query that returns non-standard column names.",
    scenario: `<div class="scenario-text"><p>The query projects columns named User, ClientIP, and Machine instead of the usual UPN / IP / DeviceName.</p></div>`,
    options: [
      { id: "1", text: "Open the analytics-rule wizard and paste the hunting query" },
      { id: "2", text: "In the Entity mapping section, select the Account entity type" },
      { id: "3", text: "Map the 'User' column to the FullName (or appropriate) identifier" },
      { id: "4", text: "Map the 'ClientIP' column to the IP entity Address identifier and 'Machine' to Host HostName" },
      { id: "5", text: "Save the mappings and continue with schedule and severity configuration" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Paste query, select entity type, map each column to the correct identifier, save mappings."
  },
  {
    id: 184,
    qid: "SC-500-MOD4-184",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "dragdrop",
    question: "Sequence the process for using a watchlist inside a hunting query to exclude known-good administrative accounts.",
    scenario: `<div class="scenario-text"><p>A watchlist named 'AdminAccounts' contains the UPNs that should never generate hunting hits.</p></div>`,
    options: [
      { id: "1", text: "Confirm the watchlist 'AdminAccounts' exists and contains a SearchKey or UPN column" },
      { id: "2", text: "In the hunting query, call _GetWatchlist('AdminAccounts') and project the key column" },
      { id: "3", text: "Apply a !in or leftanti filter against the watchlist keys on the UserPrincipalName column" },
      { id: "4", text: "Run the query and verify that the administrative accounts no longer appear in the results" },
      { id: "5", text: "Optionally save the filtered query as a bookmark or analytics rule" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Verify watchlist, retrieve it, filter, validate, save."
  },
  {
    id: 185,
    qid: "SC-500-MOD4-185",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "dragdrop",
    question: "Arrange the steps a hunter takes to pivot from a single suspicious Account entity to related process and network activity across the environment.",
    scenario: `<div class="scenario-text"><p>A bookmark contains one high-interest UserPrincipalName. The hunter must expand the blast radius.</p></div>`,
    options: [
      { id: "1", text: "Start with the known UserPrincipalName from the bookmark or prior query" },
      { id: "2", text: "Query SigninLogs / IdentityLogonEvents for all devices and IPs associated with that account in the time window" },
      { id: "3", text: "Use the discovered DeviceNames to query DeviceProcessEvents for suspicious command lines" },
      { id: "4", text: "Query DeviceNetworkEvents for the same devices to identify C2 or lateral-movement destinations" },
      { id: "5", text: "Correlate the results, bookmark the expanded entity set, and decide on containment or rule creation" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Start from account, expand to logons/devices, then processes, then network, finally correlate and act."
  },
  {
    id: 186,
    qid: "SC-500-MOD4-186",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "dragdrop",
    question: "Order the configuration of a custom entity mapping for an IP entity when the hunting query returns a column named SourceAddress.",
    scenario: `<div class="scenario-text"><p>The analytics rule must correctly populate IP entities in the incident graph.</p></div>`,
    options: [
      { id: "1", text: "In the analytics-rule Entity mapping section, choose the IP entity type" },
      { id: "2", text: "Select the identifier 'Address'" },
      { id: "3", text: "Map the query column 'SourceAddress' to that identifier" },
      { id: "4", text: "Confirm that no other entity type is incorrectly mapped to the same column" },
      { id: "5", text: "Save the rule and verify entity population with a test run" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Select IP entity, choose Address identifier, map the column, avoid conflicts, test."
  },
  {
    id: 187,
    qid: "SC-500-MOD4-187",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "dragdrop",
    question: "Sequence the steps to save a complex multi-table hunting query as a reusable function so that other hunters can call it by name.",
    scenario: `<div class="scenario-text"><p>The query normalizes device names and joins three tables. It should be callable as MyOrg_NormalizeAndJoin().</p></div>`,
    options: [
      { id: "1", text: "Author and test the full KQL in the Logs blade" },
      { id: "2", text: "Wrap the logic in a let statement or use the .create function syntax / Functions UI" },
      { id: "3", text: "Save the function with the desired name and parameters if any" },
      { id: "4", text: "Grant appropriate RBAC so other analysts can see and execute the function" },
      { id: "5", text: "Document the function’s purpose, parameters, and expected output for the team" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Test query, create function, save, permission, document."
  },
  {
    id: 188,
    qid: "SC-500-MOD4-188",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "dragdrop",
    question: "Arrange the order of investigation when a hunting query surfaces a suspicious file hash that appears on multiple devices.",
    scenario: `<div class="scenario-text"><p>The hash is unknown to local TI. The hunter must determine prevalence and behavior.</p></div>`,
    options: [
      { id: "1", text: "Query DeviceFileEvents or DeviceProcessEvents for all occurrences of the hash and list affected DeviceNames" },
      { id: "2", text: "Enrich the hash with external or Microsoft TI inside a notebook or via a watchlist" },
      { id: "3", text: "Examine the process tree and command-line context on the most recently affected devices" },
      { id: "4", text: "Check network connections initiated by the process that loaded the hash" },
      { id: "5", text: "Bookmark the findings, create an incident if malicious, and consider a file-hash indicator" }
    ],
    answer: ["1", "2", "3", "4", "5"],
    explanation: "Prevalence, TI enrichment, process context, network context, then operationalize."
  },
  {
    id: 189,
    qid: "SC-500-MOD4-189",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "hotspot",
    question: "In the Microsoft Sentinel Hunting blade, which control allows an analyst to save the current query results together with notes and entities for later use?",
    scenario: `<div class="scenario-text"><p>The hunter has a set of interesting rows and wants to preserve them with annotations.</p></div>`,
    options: [
      { id: "A", text: "Add bookmark" },
      { id: "B", text: "Create analytics rule only" },
      { id: "C", text: "Pin to dashboard" },
      { id: "D", text: "Export to CSV only" }
    ],
    answer: ["A"],
    explanation: "Add bookmark captures results, entities, and notes. Creating an analytics rule, pinning, or CSV export are different actions that do not produce a bookmark."
  },
  {
    id: 190,
    qid: "SC-500-MOD4-190",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "hotspot",
    question: "Which Microsoft Sentinel navigation item opens the gallery of Jupyter notebooks that can be used for advanced hunting?",
    scenario: `<div class="scenario-text"><p>A detection engineer needs to start a new interactive notebook session.</p></div>`,
    options: [
      { id: "A", text: "Notebooks" },
      { id: "B", text: "Analytics" },
      { id: "C", text: "Automation" },
      { id: "D", text: "Entity behavior" }
    ],
    answer: ["A"],
    explanation: "The Notebooks blade is the entry point for Jupyter-based hunting. Analytics, Automation, and Entity behavior serve other purposes."
  },
  {
    id: 191,
    qid: "SC-500-MOD4-191",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "hotspot",
    question: "In the analytics-rule wizard, which section must a hunter configure so that columns from a hunting query become Account, IP, and Host entities in the resulting incidents?",
    scenario: `<div class="scenario-text"><p>The query is already pasted; the entity graph remains empty until this step is completed.</p></div>`,
    options: [
      { id: "A", text: "Entity mapping" },
      { id: "B", text: "Query scheduling" },
      { id: "C", text: "Incident settings (grouping)" },
      { id: "D", text: "Automated response" }
    ],
    answer: ["A"],
    explanation: "Entity mapping links query columns to entity identifiers. Scheduling controls frequency, Incident settings control grouping, and Automated response links playbooks."
  },
  {
    id: 192,
    qid: "SC-500-MOD4-192",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "hotspot",
    question: "Which Microsoft Sentinel blade lists all previously saved hunting bookmarks so an analyst can reopen, edit, or promote them?",
    scenario: `<div class="scenario-text"><p>The hunter created several bookmarks last week and now needs to turn one of them into an incident.</p></div>`,
    options: [
      { id: "A", text: "Hunting > Bookmarks" },
      { id: "B", text: "Analytics > Active rules" },
      { id: "C", text: "Automation > Playbooks" },
      { id: "D", text: "Workbooks gallery" }
    ],
    answer: ["A"],
    explanation: "Hunting > Bookmarks is the dedicated list of saved bookmarks. The other blades manage rules, playbooks, and visualizations."
  },
  {
    id: 193,
    qid: "SC-500-MOD4-193",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "hotspot",
    question: "In a Microsoft Sentinel notebook cell, which magic command is used to execute a KQL query against the connected Log Analytics workspace?",
    scenario: `<div class="scenario-text"><p>The notebook is authenticated and the hunter wants to run a multi-line KQL statement.</p></div>`,
    options: [
      { id: "A", text: "%%kql or %kql" },
      { id: "B", text: "%%sql" },
      { id: "C", text: "%%bash" },
      { id: "D", text: "%%python" }
    ],
    answer: ["A"],
    explanation: "Kqlmagic registers the %%kql / %kql cell and line magics for Log Analytics queries. %%sql, %%bash, and %%python serve different languages."
  },
  {
    id: 194,
    qid: "SC-500-MOD4-194",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "hotspot",
    question: "Which control inside the Microsoft Sentinel Logs blade allows a hunter to save the current KQL as a reusable function?",
    scenario: `<div class="scenario-text"><p>The query is complex and will be called from multiple analytics rules and notebooks.</p></div>`,
    options: [
      { id: "A", text: "Save as function / Functions blade" },
      { id: "B", text: "New alert rule only" },
      { id: "C", text: "Export to Power BI" },
      { id: "D", text: "Share query link only" }
    ],
    answer: ["A"],
    explanation: "Save as function (or the Functions management blade) creates a reusable KQL function. New alert rule creates an analytics rule, Export and Share do not produce functions."
  },
  {
    id: 195,
    qid: "SC-500-MOD4-195",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Identify the correct KQL pattern that returns only those DeviceProcessEvents rows whose ProcessCommandLine has never been observed on the same DeviceName in the prior 7 days.",
    scenario: `<div class="scenario-text"><p>The hunter is building a novelty detection for process command lines.</p></div>`,
    options: [
      { id: "A", text: "let Baseline = DeviceProcessEvents | where Timestamp > ago(7d) | summarize by DeviceName, ProcessCommandLine; DeviceProcessEvents | where Timestamp > ago(1d) | join kind=leftanti Baseline on DeviceName, ProcessCommandLine" },
      { id: "B", text: "DeviceProcessEvents | where Timestamp > ago(1d) | join kind=inner Baseline on DeviceName" },
      { id: "C", text: "DeviceProcessEvents | summarize count() by ProcessCommandLine" },
      { id: "D", text: "DeviceProcessEvents | where ProcessCommandLine !contains 'powershell'" }
    ],
    answer: ["A"],
    explanation: "The leftanti join against a baseline summarized by DeviceName + ProcessCommandLine is the correct novelty pattern. inner keeps known items, simple summarize loses device context, and a contains filter is unrelated to historical novelty."
  },
  {
    id: 196,
    qid: "SC-500-MOD4-196",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Select the correct KQL statement that materializes a filtered set of SigninLogs for reuse in two subsequent joins inside a hunting query.",
    scenario: `<div class="scenario-text"><p>The same 2-hour window of successful sign-ins must be joined to both DeviceInfo and IdentityInfo without scanning SigninLogs twice.</p></div>`,
    options: [
      { id: "A", text: "let SuccessfulSignins = materialize(SigninLogs | where TimeGenerated > ago(2h) and ResultType == 0); " },
      { id: "B", text: "let SuccessfulSignins = SigninLogs | materialize | where ResultType == 0;" },
      { id: "C", text: "materialize SigninLogs | where TimeGenerated > ago(2h);" },
      { id: "D", text: "SigninLogs | where TimeGenerated > ago(2h) | extend materialize = true" }
    ],
    answer: ["A"],
    explanation: "materialize() must wrap the entire tabular expression that should be cached, and the result is assigned to a let variable. The other syntaxes are invalid."
  },
  {
    id: 197,
    qid: "SC-500-MOD4-197",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Which KQL fragment correctly retrieves a watchlist named 'CriticalServers' and uses it to filter DeviceProcessEvents to only those devices?",
    scenario: `<div class="scenario-text"><p>The watchlist SearchKey column contains the DeviceNames of high-value servers.</p></div>`,
    options: [
      { id: "A", text: "DeviceProcessEvents | where DeviceName in ((_GetWatchlist('CriticalServers') | project SearchKey))" },
      { id: "B", text: "DeviceProcessEvents | join kind=inner _GetWatchlist('CriticalServers') on $left.DeviceName == $right.SearchKey | where 1 == 0" },
      { id: "C", text: "DeviceProcessEvents | where DeviceName !in (_GetWatchlist('CriticalServers'))" },
      { id: "D", text: "_GetWatchlist('CriticalServers') | join kind=leftouter DeviceProcessEvents on SearchKey" }
    ],
    answer: ["A"],
    explanation: "The in operator against the projected SearchKey of the watchlist is the standard inclusion pattern. The other fragments either invert the logic, produce empty results, or reverse the join direction incorrectly."
  },
  {
    id: 198,
    qid: "SC-500-MOD4-198",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Identify the correct entity-mapping configuration snippet for a hunting query that projects columns UserPrincipalName, SrcIP, and DeviceName.",
    scenario: `<div class="scenario-text"><p>The resulting analytics rule must create Account, IP, and Host entities.</p></div>`,
    options: [
      { id: "A", text: "Account = UserPrincipalName (FullName), IP = SrcIP (Address), Host = DeviceName (HostName)" },
      { id: "B", text: "Account = SrcIP (Address), IP = UserPrincipalName (FullName), Host = DeviceName (HostName)" },
      { id: "C", text: "Account = DeviceName (HostName), IP = UserPrincipalName (FullName)" },
      { id: "D", text: "Host = UserPrincipalName (FullName), IP = DeviceName (Address)" }
    ],
    answer: ["A"],
    explanation: "UserPrincipalName maps to Account.FullName, SrcIP to IP.Address, and DeviceName to Host.HostName. Any other pairing produces incorrect entity types in the graph."
  },
  {
    id: 199,
    qid: "SC-500-MOD4-199",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Select the KQL operator that returns the single most recent row per UserPrincipalName from a SigninLogs result set inside a hunting query.",
    scenario: `<div class="scenario-text"><p>The hunter needs only the latest sign-in record for each user within the lookback window.</p></div>`,
    options: [
      { id: "A", text: "summarize arg_max(TimeGenerated, *) by UserPrincipalName" },
      { id: "B", text: "top 1 by TimeGenerated desc" },
      { id: "C", text: "distinct UserPrincipalName" },
      { id: "D", text: "summarize max(TimeGenerated) by UserPrincipalName" }
    ],
    answer: ["A"],
    explanation: "arg_max(TimeGenerated, *) returns the entire row that contains the maximum timestamp for each user. top 1 returns only one row for the whole table, distinct loses all other columns, and max() alone returns only the timestamp."
  },
  {
    id: 200,
    qid: "SC-500-MOD4-200",
    moduleId: "mod4",
    module: "Security Monitoring & Incident Response",
    domain: "Threat Hunting",
    type: "hotspot",
    useConfigHotspot: true,
    question: "Which KQL statement correctly creates a dynamic array of related device names that can be stored as a custom detail or used for further expansion in a hunting query?",
    scenario: `<div class="scenario-text"><p>After correlating an account to multiple devices, the hunter wants a single array column containing all DeviceNames.</p></div>`,
    options: [
      { id: "A", text: "| summarize DeviceList = make_set(DeviceName) by UserPrincipalName" },
      { id: "B", text: "| extend DeviceList = pack_array(DeviceName)" },
      { id: "C", text: "| summarize DeviceList = count(DeviceName) by UserPrincipalName" },
      { id: "D", text: "| extend DeviceList = strcat(DeviceName, ',')" }
    ],
    answer: ["A"],
    explanation: "make_set aggregates the distinct DeviceName values into a dynamic array per user—the correct pattern for later expansion or custom-detail storage. pack_array on a single value does not aggregate, count returns a number, and strcat produces a string, not an array."
  }
]
export default questions;