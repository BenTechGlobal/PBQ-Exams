/**
 * AWS Certified Solutions Architect – Associate Question Bank
 * Path: data/aws-saa-c03.js
 * Exam: SAA-C03 (2026/2027 curriculum aligned)
 * Total: 200 unique questions
 * Distribution: balanced across 4 domains + 4 question types
 */
export const PRODUCT_CODE = "AWS-SAA-C03";
export const questions = [
  // ========== DOMAIN 1: Design Secure Architectures (Questions 1-50) ==========
  {
    "id": 1,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "Which service provides a managed, highly available relational database with automatic failover?",
    "scenario": "<div class=\"scenario-text\"><p>A solutions architect needs a managed RDBMS with Multi-AZ capability.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon DynamoDB" },
      { "id": "b", "text": "Amazon RDS" },
      { "id": "c", "text": "Amazon S3" },
      { "id": "d", "text": "Amazon ElastiCache" }
    ],
    "correct": ["b"],
    "explanation": "Amazon RDS offers managed relational databases with Multi-AZ automatic failover."
  },
  {
    "id": 2,
    "type": "multiselect",
    "domain": "Design Secure Architectures",
    "prompt": "Select TWO services that help enforce least-privilege access for applications running on EC2.",
    "scenario": "<div class=\"scenario-text\"><p>A company wants to avoid long-lived access keys on EC2 instances while still allowing the application to call other AWS services.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "IAM instance profiles / roles" },
      { "id": "b", "text": "AWS Secrets Manager" },
      { "id": "c", "text": "Hard-coded IAM user credentials in application code" },
      { "id": "d", "text": "Amazon Cognito user pools for machine-to-machine" },
      { "id": "e", "text": "Security groups with outbound HTTPS only" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "IAM roles attached via instance profiles provide temporary credentials. Secrets Manager can store and rotate secrets. Hard-coded keys violate least privilege; Cognito is primarily for end-user identity; security groups control network traffic, not AWS API authorization."
  },
  {
    "id": 3,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "A company must encrypt all data at rest in Amazon S3 using keys that it fully controls and can rotate on its own schedule. Which solution meets this requirement?",
    "scenario": "<div class=\"scenario-text\"><p>Compliance requires customer-managed keys with full control over rotation and access policies.</p></div>",
    "options": [
      { "id": "a", "text": "SSE-S3 with Amazon-managed keys" },
      { "id": "b", "text": "SSE-KMS with AWS-managed keys (aws/s3)" },
      { "id": "c", "text": "SSE-KMS with customer-managed CMKs" },
      { "id": "d", "text": "Client-side encryption using only the AWS SDK default key" }
    ],
    "correct": ["c"],
    "explanation": "Customer-managed CMKs in KMS give the customer full control over key policy, rotation, and usage. SSE-S3 and AWS-managed keys do not provide this level of control."
  },
  {
    "id": 4,
    "type": "multiselect",
    "domain": "Design Secure Architectures",
    "prompt": "Select THREE controls that help protect an Application Load Balancer from common web exploits.",
    "scenario": "<div class=\"scenario-text\"><p>A public-facing ALB serves a web application that must be protected against SQL injection, XSS, and volumetric attacks.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "AWS WAF web ACL associated with the ALB" },
      { "id": "b", "text": "AWS Shield Standard (enabled by default)" },
      { "id": "c", "text": "Security group restricting inbound traffic to ports 80/443 only" },
      { "id": "d", "text": "Amazon GuardDuty threat detection findings on the ALB" },
      { "id": "e", "text": "Network ACLs denying all traffic by default" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "WAF provides layer-7 rules against injection and XSS. Shield Standard protects against common volumetric DDoS. Security groups enforce network-level least privilege. GuardDuty does not directly protect the ALB; NACLs are not the primary control for ALB protection."
  },
  {
    "id": 5,
    "type": "dragdrop",
    "domain": "Design Secure Architectures",
    "prompt": "Match each AWS security service to its primary function.",
    "scenario": "<div class=\"scenario-text\"><p>Align common security services with their responsibilities.</p></div>",
    "items": [
      { "id": "s1", "text": "AWS WAF" },
      { "id": "s2", "text": "AWS Shield" },
      { "id": "s3", "text": "Amazon GuardDuty" },
      { "id": "s4", "text": "AWS KMS" },
      { "id": "s5", "text": "AWS IAM" }
    ],
    "zones": [
      { "id": "z1", "label": "Web application firewall rules" },
      { "id": "z2", "label": "DDoS protection" },
      { "id": "z3", "label": "Threat detection / anomaly findings" },
      { "id": "z4", "label": "Key management & encryption" },
      { "id": "z5", "label": "Identity & access control" }
    ],
    "correct": {
      "z1": ["s1"],
      "z2": ["s2"],
      "z3": ["s3"],
      "z4": ["s4"],
      "z5": ["s5"]
    },
    "explanation": "WAF filters HTTP, Shield protects against DDoS, GuardDuty detects threats, KMS manages keys, IAM controls identity."
  },
  {
    "id": 6,
    "type": "hotspot",
    "domain": "Design Secure Architectures",
    "prompt": "Click the component that should terminate TLS for public HTTPS traffic.",
    "scenario": "<div class=\"scenario-text\"><p>A three-tier architecture receives public HTTPS requests.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 15, "y": 30 },
      { "id": "alb", "label": "ALB", "x": 40, "y": 50 },
      { "id": "ec2", "label": "EC2 Web", "x": 65, "y": 50 },
      { "id": "rds", "label": "RDS", "x": 85, "y": 50 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront (or the ALB) is the preferred place to terminate TLS; terminating at each EC2 instance is less scalable and harder to manage certificates."
  },
  {
    "id": 7,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "An application running on Amazon ECS needs to retrieve database credentials at runtime without embedding them in the task definition. What is the most secure approach?",
    "scenario": "<div class=\"scenario-text\"><p>Credentials must be rotated automatically and never appear in plaintext in container images or environment variables.</p></div>",
    "options": [
      { "id": "a", "text": "Store the credentials in an S3 bucket and download them with an IAM role" },
      { "id": "b", "text": "Use AWS Secrets Manager and reference the secret ARN from the task definition with an IAM task role" },
      { "id": "c", "text": "Pass the credentials as plain environment variables in the task definition" },
      { "id": "d", "text": "Hard-code the credentials inside the application container image" }
    ],
    "correct": ["b"],
    "explanation": "Secrets Manager integrates natively with ECS task definitions. The task role grants permission to retrieve the secret at runtime, and Secrets Manager handles rotation."
  },
  {
    "id": 8,
    "type": "multiselect",
    "domain": "Design Secure Architectures",
    "prompt": "Select TWO methods that enforce encryption in transit for all traffic between an Application Load Balancer and its target EC2 instances.",
    "scenario": "<div class=\"scenario-text\"><p>The organization requires end-to-end encryption for PCI-DSS compliance.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Configure the target group protocol as HTTPS and install certificates on the instances" },
      { "id": "b", "text": "Use AWS PrivateLink endpoints for the ALB" },
      { "id": "c", "text": "Enable HTTPS listeners on the ALB and terminate TLS only at the ALB" },
      { "id": "d", "text": "Place the instances in private subnets and rely on security groups alone" },
      { "id": "e", "text": "Use a Network Load Balancer with TLS listeners and target groups using TLS" }
    ],
    "correct": ["a", "e"],
    "selectCount": 2,
    "explanation": "For end-to-end encryption the backend protocol must also be TLS/HTTPS. An NLB with TLS listeners can also achieve this. Terminating only at the ALB leaves the backend hop unencrypted."
  },
  {
    "id": 9,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "A company wants to ensure that only traffic originating from its corporate IP ranges can reach a private API Gateway REST API. Which combination provides the strongest control?",
    "scenario": "<div class=\"scenario-text\"><p>The API must remain private and inaccessible from the public internet.</p></div>",
    "options": [
      { "id": "a", "text": "Resource policy on the API that allows only the corporate CIDR blocks + private endpoint" },
      { "id": "b", "text": "API Gateway usage plans with API keys" },
      { "id": "c", "text": "CloudFront distribution in front of the public API" },
      { "id": "d", "text": "Security group rules on the API Gateway service" }
    ],
    "correct": ["a"],
    "explanation": "A resource policy combined with a private API endpoint (interface VPC endpoint) restricts access both by source IP and by network path. Usage plans and CloudFront do not make the API private."
  },
  {
    "id": 10,
    "type": "dragdrop",
    "domain": "Design Secure Architectures",
    "prompt": "Match the IAM feature to the scenario it best solves.",
    "scenario": "<div class=\"scenario-text\"><p>Choose the most appropriate IAM capability for each requirement.</p></div>",
    "items": [
      { "id": "i1", "text": "Permission boundaries" },
      { "id": "i2", "text": "Service control policies (SCPs)" },
      { "id": "i3", "text": "IAM Access Analyzer" },
      { "id": "i4", "text": "Session tags / principal tags" },
      { "id": "i5", "text": "Attribute-based access control (ABAC)" }
    ],
    "zones": [
      { "id": "z1", "label": "Limit the maximum permissions a delegated administrator can grant" },
      { "id": "z2", "label": "Enforce organization-wide guardrails across all accounts" },
      { "id": "z3", "label": "Identify resources shared with external principals" },
      { "id": "z4", "label": "Pass contextual attributes into temporary credentials" },
      { "id": "z5", "label": "Grant permissions based on resource and principal tags" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"],
      "z5": ["i5"]
    },
    "explanation": "Permission boundaries constrain what a role can grant. SCPs provide org-level guardrails. Access Analyzer detects external sharing. Session tags carry context. ABAC uses tags for dynamic authorization."
  },
  {
    "id": 11,
    "type": "hotspot",
    "domain": "Design Secure Architectures",
    "prompt": "Click the component that should host the AWS WAF web ACL for a CloudFront + ALB architecture.",
    "scenario": "<div class=\"scenario-text\"><p>Traffic flows Internet → CloudFront → ALB → EC2. The team wants to block malicious requests as early as possible.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 20, "y": 40 },
      { "id": "alb", "label": "ALB", "x": 50, "y": 40 },
      { "id": "ec2", "label": "EC2", "x": 80, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "Attaching WAF to CloudFront inspects requests at the edge, blocking malicious traffic before it reaches the origin ALB and reducing origin load and cost."
  },
  {
    "id": 12,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "Which AWS service continuously monitors AWS accounts for malicious activity and unauthorized behavior using machine learning?",
    "scenario": "<div class=\"scenario-text\"><p>The security team needs near-real-time threat detection without managing infrastructure.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon Inspector" },
      { "id": "b", "text": "Amazon GuardDuty" },
      { "id": "c", "text": "AWS Config" },
      { "id": "d", "text": "AWS Security Hub" }
    ],
    "correct": ["b"],
    "explanation": "GuardDuty uses ML, anomaly detection, and threat intelligence to identify suspicious activity. Inspector focuses on vulnerability assessment; Config on configuration compliance; Security Hub aggregates findings."
  },
  {
    "id": 13,
    "type": "multiselect",
    "domain": "Design Secure Architectures",
    "prompt": "Select TWO actions that reduce the risk of accidental public exposure of S3 objects.",
    "scenario": "<div class=\"scenario-text\"><p>A company stores sensitive customer data in S3 and must prevent any bucket from being made public.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Enable S3 Block Public Access at the account level" },
      { "id": "b", "text": "Use S3 Object Lock in governance mode on every bucket" },
      { "id": "c", "text": "Apply a bucket policy that explicitly denies s3:GetObject for Principal \"*\"" },
      { "id": "d", "text": "Enable S3 server access logging on every bucket" },
      { "id": "e", "text": "Turn on S3 versioning" }
    ],
    "correct": ["a", "c"],
    "selectCount": 2,
    "explanation": "Account-level Block Public Access is the strongest preventive control. An explicit Deny for Principal \"*\" reinforces the restriction. Object Lock, logging, and versioning serve other purposes."
  },
  {
    "id": 14,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "A financial services company must ensure that all Amazon EBS volumes are encrypted. Which approach enforces this requirement across the entire organization?",
    "scenario": "<div class=\"scenario-text\"><p>The organization has multiple AWS accounts and wants a preventive control that cannot be overridden by account administrators.</p></div>",
    "options": [
      { "id": "a", "text": "Enable EBS encryption by default in every account via the EC2 console" },
      { "id": "b", "text": "Use an SCP that denies ec2:CreateVolume unless the encrypted flag is true" },
      { "id": "c", "text": "Create an AWS Config rule that reports non-compliant volumes" },
      { "id": "d", "text": "Tag every volume with \"encrypted=true\" and rely on IAM conditions" }
    ],
    "correct": ["b"],
    "explanation": "An SCP is a preventive guardrail that applies organization-wide and cannot be overridden by IAM policies in member accounts. Console defaults and Config are detective or account-local."
  },
  {
    "id": 15,
    "type": "dragdrop",
    "domain": "Design Secure Architectures",
    "prompt": "Order the steps to securely grant a third-party vendor temporary read-only access to a specific S3 bucket.",
    "scenario": "<div class=\"scenario-text\"><p>The vendor must not receive long-lived credentials.</p></div>",
    "items": [
      { "id": "a1", "text": "Create an IAM role with a trust policy that allows the vendor account to assume it" },
      { "id": "a2", "text": "Attach a permissions policy granting s3:GetObject on the specific bucket" },
      { "id": "a3", "text": "Provide the vendor with the role ARN and external ID (if used)" },
      { "id": "a4", "text": "Vendor assumes the role via STS AssumeRole and receives temporary credentials" }
    ],
    "zones": [
      { "id": "s1", "label": "Step 1" },
      { "id": "s2", "label": "Step 2" },
      { "id": "s3", "label": "Step 3" },
      { "id": "s4", "label": "Step 4" }
    ],
    "correct": {
      "s1": ["a1"],
      "s2": ["a2"],
      "s3": ["a3"],
      "s4": ["a4"]
    },
    "explanation": "Create the role with the correct trust relationship, attach least-privilege permissions, share the role ARN (and external ID), then the vendor assumes the role to obtain temporary credentials."
  },
  {
    "id": 16,
    "type": "hotspot",
    "domain": "Design Secure Architectures",
    "prompt": "Click the two components that should be placed in private subnets for a secure three-tier web application.",
    "scenario": "<div class=\"scenario-text\"><p>Only the load balancer should be publicly reachable.</p></div>",
    "nodes": [
      { "id": "alb", "label": "ALB", "x": 20, "y": 40 },
      { "id": "web", "label": "Web\nTier", "x": 45, "y": 40 },
      { "id": "app", "label": "App\nTier", "x": 70, "y": 40 },
      { "id": "db", "label": "RDS", "x": 90, "y": 40 }
    ],
    "correct": ["web", "app", "db"],
    "selectCount": 3,
    "explanation": "Web and application tiers (and the database) belong in private subnets. Only the ALB needs to be in public subnets (or can itself be internal with CloudFront in front)."
  },
  {
    "id": 17,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "Which feature of Amazon Cognito allows a mobile application to obtain temporary AWS credentials for accessing S3 without embedding long-term keys?",
    "scenario": "<div class=\"scenario-text\"><p>Users authenticate with a social identity provider and then need to upload files directly to S3.</p></div>",
    "options": [
      { "id": "a", "text": "Cognito User Pools alone" },
      { "id": "b", "text": "Cognito Identity Pools (federated identities)" },
      { "id": "c", "text": "Cognito Sync" },
      { "id": "d", "text": "Amazon Cognito advanced security features" }
    ],
    "correct": ["b"],
    "explanation": "Identity Pools exchange authenticated identity tokens for temporary AWS credentials via STS, enabling secure direct access to AWS services."
  },
  {
    "id": 18,
    "type": "multiselect",
    "domain": "Design Secure Architectures",
    "prompt": "Select TWO services that can be used to detect and respond to compromised IAM credentials.",
    "scenario": "<div class=\"scenario-text\"><p>The security operations team needs automated detection and near-real-time response capabilities.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Amazon GuardDuty (UnauthorizedAccess findings)" },
      { "id": "b", "text": "AWS CloudTrail + Amazon EventBridge rules" },
      { "id": "c", "text": "AWS Certificate Manager" },
      { "id": "d", "text": "Amazon Macie" },
      { "id": "e", "text": "AWS Systems Manager Session Manager" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "GuardDuty raises UnauthorizedAccess findings. CloudTrail logs the API calls and EventBridge can trigger automated remediation. Macie focuses on data classification; ACM on certificates; Session Manager on shell access."
  },
  {
    "id": 19,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "A company must ensure that all AWS API calls are logged and that the logs themselves cannot be deleted or altered by any IAM principal in the account. What is the recommended design?",
    "scenario": "<div class=\"scenario-text\"><p>Logs must be retained for seven years for regulatory reasons.</p></div>",
    "options": [
      { "id": "a", "text": "Enable CloudTrail in the account and store logs in an S3 bucket owned by the same account" },
      { "id": "b", "text": "Enable CloudTrail with log file validation and deliver logs to an S3 bucket in a separate security account with Object Lock (Compliance mode)" },
      { "id": "c", "text": "Use VPC Flow Logs only" },
      { "id": "d", "text": "Enable CloudTrail and rely on S3 versioning alone" }
    ],
    "correct": ["b"],
    "explanation": "Cross-account delivery plus Object Lock in Compliance mode prevents deletion or alteration even by the root user of the logging account. Log file validation detects tampering."
  },
  {
    "id": 20,
    "type": "dragdrop",
    "domain": "Design Secure Architectures",
    "prompt": "Match each encryption option to the service or use case it primarily supports.",
    "scenario": "<div class=\"scenario-text\"><p>Select the most appropriate encryption approach for each requirement.</p></div>",
    "items": [
      { "id": "e1", "text": "SSE-S3" },
      { "id": "e2", "text": "SSE-KMS (customer-managed key)" },
      { "id": "e3", "text": "Client-side encryption with AWS Encryption SDK" },
      { "id": "e4", "text": "AWS Certificate Manager (ACM)" },
      { "id": "e5", "text": "AWS CloudHSM" }
    ],
    "zones": [
      { "id": "z1", "label": "Simple at-rest encryption for S3 with no key management overhead" },
      { "id": "z2", "label": "At-rest encryption with fine-grained key policy and audit trail" },
      { "id": "z3", "label": "Encrypt data before it ever reaches AWS" },
      { "id": "z4", "label": "Provision and manage TLS certificates for ALB / CloudFront" },
      { "id": "z5", "label": "Dedicated single-tenant HSM for FIPS 140-2 Level 3" }
    ],
    "correct": {
      "z1": ["e1"],
      "z2": ["e2"],
      "z3": ["e3"],
      "z4": ["e4"],
      "z5": ["e5"]
    },
    "explanation": "SSE-S3 is the simplest S3 option. Customer-managed KMS keys give control and audit. Client-side keeps plaintext out of AWS. ACM handles public certificates. CloudHSM provides dedicated hardware."
  },
  {
    "id": 21,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "Which AWS service provides centralized management of security findings from multiple AWS services and partner products?",
    "scenario": "<div class=\"scenario-text\"><p>The security team wants a single pane of glass for GuardDuty, Inspector, Macie, and third-party findings.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon GuardDuty" },
      { "id": "b", "text": "AWS Security Hub" },
      { "id": "c", "text": "AWS Config" },
      { "id": "d", "text": "Amazon Detective" }
    ],
    "correct": ["b"],
    "explanation": "Security Hub aggregates, prioritizes, and helps remediate findings from many sources. GuardDuty is a detection service; Config tracks configuration; Detective investigates relationships."
  },
  {
    "id": 22,
    "type": "multiselect",
    "domain": "Design Secure Architectures",
    "prompt": "Select TWO best practices when designing network security for a multi-tier application in a VPC.",
    "scenario": "<div class=\"scenario-text\"><p>The application has public web tier, private application tier, and private database tier.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Place the database tier in private subnets with no route to an Internet Gateway" },
      { "id": "b", "text": "Allow unrestricted inbound traffic from 0.0.0.0/0 on the database security group" },
      { "id": "c", "text": "Use security group references so the app tier can reach the database only on the required port" },
      { "id": "d", "text": "Open all ports between the web and application tiers for easier troubleshooting" },
      { "id": "e", "text": "Disable Network ACLs because security groups are sufficient" }
    ],
    "correct": ["a", "c"],
    "selectCount": 2,
    "explanation": "Private subnets without IGW routes keep databases isolated. Security group references enforce least-privilege inter-tier communication. Unrestricted access and disabling NACLs increase risk."
  },
  {
    "id": 23,
    "type": "hotspot",
    "domain": "Design Secure Architectures",
    "prompt": "Click the component that should enforce network-level isolation for the database.",
    "scenario": "<div class=\"scenario-text\"><p>Traffic path: Internet → CloudFront → ALB → EC2 App → RDS.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 15, "y": 40 },
      { "id": "alb", "label": "ALB", "x": 35, "y": 40 },
      { "id": "app", "label": "EC2 App", "x": 60, "y": 40 },
      { "id": "rds", "label": "RDS", "x": 85, "y": 40 }
    ],
    "correct": ["rds"],
    "explanation": "The RDS instance (or its security group / private subnet placement) is the point where network isolation for the database is enforced."
  },
  {
    "id": 24,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "A company needs to rotate database credentials automatically every 30 days without application downtime. Which service combination is most appropriate?",
    "scenario": "<div class=\"scenario-text\"><p>The application runs on ECS and currently stores credentials in environment variables.</p></div>",
    "options": [
      { "id": "a", "text": "AWS Secrets Manager with automatic rotation Lambda and ECS task definition referencing the secret" },
      { "id": "b", "text": "AWS Systems Manager Parameter Store (standard) with manual rotation" },
      { "id": "c", "text": "Hard-coded credentials that are updated via CI/CD every 30 days" },
      { "id": "d", "text": "Amazon Cognito user pools storing database passwords" }
    ],
    "correct": ["a"],
    "explanation": "Secrets Manager supports automatic rotation with Lambda and integrates directly with ECS so the application retrieves the current secret at runtime."
  },
  {
    "id": 25,
    "type": "dragdrop",
    "domain": "Design Secure Architectures",
    "prompt": "Match the threat to the primary AWS service that mitigates it.",
    "scenario": "<div class=\"scenario-text\"><p>Identify the best-fit protective service for each threat category.</p></div>",
    "items": [
      { "id": "t1", "text": "SQL injection / XSS against a public web app" },
      { "id": "t2", "text": "Large-scale volumetric DDoS" },
      { "id": "t3", "text": "Unusual API call patterns indicating compromised credentials" },
      { "id": "t4", "text": "Sensitive data stored in S3 without proper classification" },
      { "id": "t5", "text": "Unpatched vulnerabilities on EC2 instances" }
    ],
    "zones": [
      { "id": "z1", "label": "AWS WAF" },
      { "id": "z2", "label": "AWS Shield Advanced" },
      { "id": "z3", "label": "Amazon GuardDuty" },
      { "id": "z4", "label": "Amazon Macie" },
      { "id": "z5", "label": "Amazon Inspector" }
    ],
    "correct": {
      "z1": ["t1"],
      "z2": ["t2"],
      "z3": ["t3"],
      "z4": ["t4"],
      "z5": ["t5"]
    },
    "explanation": "WAF stops application-layer attacks. Shield Advanced handles sophisticated DDoS. GuardDuty detects credential compromise. Macie discovers sensitive data. Inspector scans for vulnerabilities."
  },
  {
    "id": 26,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "Which statement about AWS KMS key policies is correct?",
    "scenario": "<div class=\"scenario-text\"><p>A security engineer is designing encryption key access controls.</p></div>",
    "options": [
      { "id": "a", "text": "Key policies are optional; IAM policies alone are always sufficient" },
      { "id": "b", "text": "The key policy is the primary access control mechanism; without an explicit allow, even the account root is denied" },
      { "id": "c", "text": "Key policies can only grant access to principals in the same account" },
      { "id": "d", "text": "Once a key policy is set it can never be modified" }
    ],
    "correct": ["b"],
    "explanation": "KMS key policies are required and act as the root of trust. If the policy does not allow the account, even the root user cannot use the key."
  },
  {
    "id": 27,
    "type": "multiselect",
    "domain": "Design Secure Architectures",
    "prompt": "Select THREE features that help protect data stored in Amazon S3 from accidental or malicious deletion.",
    "scenario": "<div class=\"scenario-text\"><p>Critical compliance data must be retained and protected against both user error and ransomware-style deletion.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "S3 Versioning" },
      { "id": "b", "text": "S3 Object Lock (Compliance mode)" },
      { "id": "c", "text": "MFA Delete" },
      { "id": "d", "text": "S3 Intelligent-Tiering" },
      { "id": "e", "text": "S3 Transfer Acceleration" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Versioning preserves previous versions. Object Lock in Compliance mode makes objects immutable. MFA Delete adds an extra authentication factor for permanent deletes. Intelligent-Tiering and Transfer Acceleration are performance/cost features."
  },
  {
    "id": 28,
    "type": "hotspot",
    "domain": "Design Secure Architectures",
    "prompt": "Click the service that should be used to centrally manage and rotate secrets used by multiple applications across accounts.",
    "scenario": "<div class=\"scenario-text\"><p>Applications in several accounts need database credentials and API keys.</p></div>",
    "nodes": [
      { "id": "ssm", "label": "SSM\nParameter\nStore", "x": 20, "y": 40 },
      { "id": "sm", "label": "Secrets\nManager", "x": 50, "y": 40 },
      { "id": "kms", "label": "KMS", "x": 80, "y": 40 }
    ],
    "correct": ["sm"],
    "explanation": "Secrets Manager is purpose-built for secrets lifecycle management, including automatic rotation and cross-account sharing."
  },
  {
    "id": 29,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "A solutions architect must design a solution that allows developers to assume a role in a production account only after multi-factor authentication. Which IAM feature enables this?",
    "scenario": "<div class=\"scenario-text\"><p>The role trust policy must require MFA before temporary credentials are issued.</p></div>",
    "options": [
      { "id": "a", "text": "Condition key aws:MultiFactorAuthPresent set to true in the trust policy" },
      { "id": "b", "text": "Attaching an MFA device to the production account root user" },
      { "id": "c", "text": "Using IAM Access Analyzer to enforce MFA" },
      { "id": "d", "text": "Enabling MFA Delete on the S3 bucket that stores the role policy" }
    ],
    "correct": ["a"],
    "explanation": "The condition key aws:MultiFactorAuthPresent in the role trust policy forces the caller to have authenticated with MFA."
  },
  {
    "id": 30,
    "type": "dragdrop",
    "domain": "Design Secure Architectures",
    "prompt": "Order the steps to enable AWS WAF on an existing Application Load Balancer.",
    "scenario": "<div class=\"scenario-text\"><p>Protect a production ALB with managed rule groups and a custom rate-based rule.</p></div>",
    "items": [
      { "id": "w1", "text": "Create a Web ACL in AWS WAF" },
      { "id": "w2", "text": "Add managed rule groups and a rate-based rule to the Web ACL" },
      { "id": "w3", "text": "Associate the Web ACL with the Application Load Balancer" },
      { "id": "w4", "text": "Monitor CloudWatch metrics and sampled requests" }
    ],
    "zones": [
      { "id": "s1", "label": "Step 1" },
      { "id": "s2", "label": "Step 2" },
      { "id": "s3", "label": "Step 3" },
      { "id": "s4", "label": "Step 4" }
    ],
    "correct": {
      "s1": ["w1"],
      "s2": ["w2"],
      "s3": ["w3"],
      "s4": ["w4"]
    },
    "explanation": "Create the Web ACL, configure rules, associate it with the ALB, then monitor effectiveness."
  },
  {
    "id": 31,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "Which service allows an organization to define and enforce configuration baselines across multiple AWS accounts?",
    "scenario": "<div class=\"scenario-text\"><p>The compliance team needs continuous evaluation of resource configurations against organizational policies.</p></div>",
    "options": [
      { "id": "a", "text": "AWS Config with AWS Organizations and Conformance Packs" },
      { "id": "b", "text": "Amazon CloudWatch Alarms only" },
      { "id": "c", "text": "AWS CloudFormation StackSets without drift detection" },
      { "id": "d", "text": "Amazon EventBridge rules alone" }
    ],
    "correct": ["a"],
    "explanation": "AWS Config combined with Organizations and Conformance Packs provides multi-account configuration compliance evaluation and remediation."
  },
  {
    "id": 32,
    "type": "multiselect",
    "domain": "Design Secure Architectures",
    "prompt": "Select TWO ways to securely provide temporary credentials to an on-premises application that needs to upload files to S3.",
    "scenario": "<div class=\"scenario-text\"><p>The on-premises environment cannot host long-lived IAM access keys.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Use AWS IAM Roles Anywhere with a certificate-based trust anchor" },
      { "id": "b", "text": "Use AWS STS AssumeRole with a SAML identity provider or OIDC" },
      { "id": "c", "text": "Embed an IAM user access key in the application configuration file" },
      { "id": "d", "text": "Create a public S3 bucket and rely on bucket policies alone" },
      { "id": "e", "text": "Use Amazon Cognito User Pools for the on-premises machine" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "IAM Roles Anywhere and STS federation both issue temporary credentials without long-lived keys. Embedding keys or making the bucket public are insecure."
  },
  {
    "id": 33,
    "type": "hotspot",
    "domain": "Design Secure Architectures",
    "prompt": "Click the component that should be used to inspect and filter outbound HTTPS traffic from private subnets for data-exfiltration prevention.",
    "scenario": "<div class=\"scenario-text\"><p>Private EC2 instances need controlled internet access for software updates while preventing sensitive data from leaving the environment.</p></div>",
    "nodes": [
      { "id": "nat", "label": "NAT\nGateway", "x": 25, "y": 40 },
      { "id": "nfw", "label": "Network\nFirewall", "x": 50, "y": 40 },
      { "id": "sg", "label": "Security\nGroup", "x": 75, "y": 40 }
    ],
    "correct": ["nfw"],
    "explanation": "AWS Network Firewall can perform deep packet inspection, domain filtering, and intrusion prevention on outbound traffic, which a plain NAT Gateway cannot do."
  },
  {
    "id": 34,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "A company wants to ensure that all new Amazon EBS volumes and snapshots are encrypted by default across every AWS Region it uses. What is the most efficient way to achieve this?",
    "scenario": "<div class=\"scenario-text\"><p>The requirement must apply organization-wide with minimal operational overhead.</p></div>",
    "options": [
      { "id": "a", "text": "Enable EBS encryption by default in each Region of each account via the console or API" },
      { "id": "b", "text": "Use an SCP that denies CreateVolume and CreateSnapshot unless the encrypted parameter is true, combined with enabling the default setting via AWS Organizations" },
      { "id": "c", "text": "Rely solely on IAM policies that require the encrypted flag" },
      { "id": "d", "text": "Use AWS Config rules to remediate after the fact" }
    ],
    "correct": ["b"],
    "explanation": "Combining the account-level default encryption setting (which can be managed centrally) with a preventive SCP provides the strongest, organization-wide control."
  },
  {
    "id": 35,
    "type": "dragdrop",
    "domain": "Design Secure Architectures",
    "prompt": "Match each identity federation approach to its typical use case.",
    "scenario": "<div class=\"scenario-text\"><p>Choose the best federation method for each scenario.</p></div>",
    "items": [
      { "id": "f1", "text": "SAML 2.0 federation with IAM" },
      { "id": "f2", "text": "OpenID Connect (OIDC) with IAM" },
      { "id": "f3", "text": "Amazon Cognito User Pools" },
      { "id": "f4", "text": "AWS IAM Identity Center (SSO)" },
      { "id": "f5", "text": "IAM Roles Anywhere" }
    ],
    "zones": [
      { "id": "z1", "label": "Enterprise workforce access from an existing corporate IdP" },
      { "id": "z2", "label": "Mobile or web application end-user authentication" },
      { "id": "z3", "label": "CI/CD pipelines or GitHub Actions assuming roles" },
      { "id": "z4", "label": "Centralized multi-account access management for employees" },
      { "id": "z5", "label": "Workloads running outside AWS that need temporary credentials" }
    ],
    "correct": {
      "z1": ["f1"],
      "z2": ["f3"],
      "z3": ["f2"],
      "z4": ["f4"],
      "z5": ["f5"]
    },
    "explanation": "SAML is classic enterprise IdP federation. Cognito handles end users. OIDC is common for modern CI tools. Identity Center is the recommended multi-account SSO solution. Roles Anywhere covers non-AWS workloads."
  },
  {
    "id": 36,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "Which AWS service provides continuous vulnerability management for Amazon EC2 instances and container images stored in Amazon ECR?",
    "scenario": "<div class=\"scenario-text\"><p>The security team needs automated scanning and prioritization of software vulnerabilities.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon GuardDuty" },
      { "id": "b", "text": "Amazon Inspector" },
      { "id": "c", "text": "AWS Systems Manager Patch Manager" },
      { "id": "d", "text": "Amazon Macie" }
    ],
    "correct": ["b"],
    "explanation": "Amazon Inspector continuously scans EC2 and ECR images for software vulnerabilities and network exposure."
  },
  {
    "id": 37,
    "type": "multiselect",
    "domain": "Design Secure Architectures",
    "prompt": "Select TWO controls that help prevent an IAM user from escalating their own privileges.",
    "scenario": "<div class=\"scenario-text\"><p>A developer has limited permissions but should not be able to grant themselves additional rights.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Attach a permissions boundary to the IAM user or role" },
      { "id": "b", "text": "Use an SCP that denies iam:CreatePolicy and iam:AttachUserPolicy for non-admin roles" },
      { "id": "c", "text": "Allow the user full IAM permissions so they can manage their own access" },
      { "id": "d", "text": "Disable CloudTrail logging for IAM actions" },
      { "id": "e", "text": "Store the user’s access keys in plain text for easy recovery" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Permissions boundaries and SCPs both act as ceilings that prevent privilege escalation even if an IAM policy attempts to grant more rights."
  },
  {
    "id": 38,
    "type": "hotspot",
    "domain": "Design Secure Architectures",
    "prompt": "Click the two places where TLS should be terminated in a CloudFront + ALB + EC2 architecture that requires end-to-end encryption.",
    "scenario": "<div class=\"scenario-text\"><p>Traffic must be encrypted from the client all the way to the application instances.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 20, "y": 40 },
      { "id": "alb", "label": "ALB", "x": 50, "y": 40 },
      { "id": "ec2", "label": "EC2", "x": 80, "y": 40 }
    ],
    "correct": ["cf", "alb"],
    "selectCount": 2,
    "explanation": "CloudFront terminates client TLS and re-encrypts to the origin. The ALB can terminate the second hop and re-encrypt to the instances, or the instances can terminate TLS themselves."
  },
  {
    "id": 39,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "A company must ensure that only approved AMIs can be used to launch EC2 instances across the organization. Which combination of services provides the strongest control?",
    "scenario": "<div class=\"scenario-text\"><p>Developers should be prevented from launching instances from arbitrary or unapproved images.</p></div>",
    "options": [
      { "id": "a", "text": "AWS Config rule + AWS Systems Manager + SCP that denies RunInstances unless the AMI is in an approved list" },
      { "id": "b", "text": "Amazon Inspector scanning after launch" },
      { "id": "c", "text": "Manual review of every AMI by the security team" },
      { "id": "d", "text": "Tagging AMIs and relying on developer discipline" }
    ],
    "correct": ["a"],
    "explanation": "An SCP can preventively deny launches of non-approved AMIs. Config and Systems Manager help maintain the approved list and detect drift."
  },
  {
    "id": 40,
    "type": "dragdrop",
    "domain": "Design Secure Architectures",
    "prompt": "Match the logging service to the primary type of data it captures.",
    "scenario": "<div class=\"scenario-text\"><p>Select the best source for each audit requirement.</p></div>",
    "items": [
      { "id": "l1", "text": "AWS CloudTrail" },
      { "id": "l2", "text": "VPC Flow Logs" },
      { "id": "l3", "text": "Amazon CloudWatch Logs" },
      { "id": "l4", "text": "AWS Config" },
      { "id": "l5", "text": "S3 Server Access Logging" }
    ],
    "zones": [
      { "id": "z1", "label": "API activity and management events across AWS services" },
      { "id": "z2", "label": "Network traffic accepted or rejected by ENIs" },
      { "id": "z3", "label": "Application and system logs from EC2 / Lambda / containers" },
      { "id": "z4", "label": "Configuration changes and compliance history of resources" },
      { "id": "z5", "label": "Requests made to an S3 bucket" }
    ],
    "correct": {
      "z1": ["l1"],
      "z2": ["l2"],
      "z3": ["l3"],
      "z4": ["l4"],
      "z5": ["l5"]
    },
    "explanation": "CloudTrail records API calls. Flow Logs capture network traffic metadata. CloudWatch Logs stores application logs. Config tracks resource configuration. S3 access logging records object requests."
  },
  {
    "id": 41,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "Which feature of Amazon VPC allows you to create a logically isolated section of the AWS Cloud where you can launch resources in a virtual network that you define?",
    "scenario": "<div class=\"scenario-text\"><p>A new application requires complete control over IP addressing, routing, and network isolation.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon VPC" },
      { "id": "b", "text": "AWS Direct Connect" },
      { "id": "c", "text": "Amazon CloudFront" },
      { "id": "d", "text": "AWS Transit Gateway" }
    ],
    "correct": ["a"],
    "explanation": "Amazon VPC is the foundational service that provides isolated virtual networks."
  },
  {
    "id": 42,
    "type": "multiselect",
    "domain": "Design Secure Architectures",
    "prompt": "Select TWO benefits of using AWS PrivateLink for connecting to AWS services or third-party SaaS.",
    "scenario": "<div class=\"scenario-text\"><p>A company wants to keep traffic to AWS services off the public internet.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Traffic stays within the AWS network and never traverses the public internet" },
      { "id": "b", "text": "Simplifies security group and NACL management by using interface endpoints" },
      { "id": "c", "text": "Automatically encrypts all data at rest in S3" },
      { "id": "d", "text": "Provides free data transfer between Regions" },
      { "id": "e", "text": "Eliminates the need for IAM authentication" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "PrivateLink keeps traffic private and uses interface endpoints that are controlled by security groups. It does not change encryption-at-rest behavior or eliminate IAM."
  },
  {
    "id": 43,
    "type": "hotspot",
    "domain": "Design Secure Architectures",
    "prompt": "Click the service that should be enabled to automatically discover, classify, and protect sensitive data stored in S3.",
    "scenario": "<div class=\"scenario-text\"><p>The company handles PII and must know where it resides and whether it is properly protected.</p></div>",
    "nodes": [
      { "id": "gd", "label": "GuardDuty", "x": 20, "y": 40 },
      { "id": "macie", "label": "Macie", "x": 50, "y": 40 },
      { "id": "insp", "label": "Inspector", "x": 80, "y": 40 }
    ],
    "correct": ["macie"],
    "explanation": "Amazon Macie uses machine learning to discover and classify sensitive data in S3 and can raise findings when protection is insufficient."
  },
  {
    "id": 44,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "A solutions architect is designing a multi-account environment. Which service provides the most efficient way to share a private AMI with selected accounts in the organization without making it public?",
    "scenario": "<div class=\"scenario-text\"><p>The AMI contains proprietary software and must remain private.</p></div>",
    "options": [
      { "id": "a", "text": "AWS Resource Access Manager (RAM)" },
      { "id": "b", "text": "Making the AMI public and relying on IAM" },
      { "id": "c", "text": "Copying the AMI into every account manually" },
      { "id": "d", "text": "Storing the AMI in an S3 bucket and sharing the bucket" }
    ],
    "correct": ["a"],
    "explanation": "AWS RAM allows sharing of AMIs (and many other resources) with specific accounts or organizational units while keeping them private."
  },
  {
    "id": 45,
    "type": "dragdrop",
    "domain": "Design Secure Architectures",
    "prompt": "Order the steps to implement a least-privilege IAM role for an EC2 instance that needs to read from a specific S3 bucket.",
    "scenario": "<div class=\"scenario-text\"><p>The instance should be able to list and get objects only from one bucket.</p></div>",
    "items": [
      { "id": "r1", "text": "Create an IAM policy that allows s3:ListBucket and s3:GetObject on the specific bucket ARN" },
      { "id": "r2", "text": "Create an IAM role and attach the policy" },
      { "id": "r3", "text": "Create an instance profile and associate the role with it" },
      { "id": "r4", "text": "Launch the EC2 instance with the instance profile (or attach it later)" }
    ],
    "zones": [
      { "id": "s1", "label": "Step 1" },
      { "id": "s2", "label": "Step 2" },
      { "id": "s3", "label": "Step 3" },
      { "id": "s4", "label": "Step 4" }
    ],
    "correct": {
      "s1": ["r1"],
      "s2": ["r2"],
      "s3": ["r3"],
      "s4": ["r4"]
    },
    "explanation": "Define the least-privilege policy first, create the role, wrap it in an instance profile, then launch or attach the instance."
  },
  {
    "id": 46,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "Which AWS service can automatically remediate non-compliant resources based on AWS Config rules?",
    "scenario": "<div class=\"scenario-text\"><p>When an S3 bucket is detected as public, the system should automatically apply Block Public Access.</p></div>",
    "options": [
      { "id": "a", "text": "AWS Config with remediation actions (SSM Automation or Lambda)" },
      { "id": "b", "text": "Amazon GuardDuty alone" },
      { "id": "c", "text": "AWS CloudTrail Insights" },
      { "id": "d", "text": "Amazon EventBridge without any target" }
    ],
    "correct": ["a"],
    "explanation": "AWS Config supports automatic remediation by invoking SSM Automation documents or Lambda functions when a rule is non-compliant."
  },
  {
    "id": 47,
    "type": "multiselect",
    "domain": "Design Secure Architectures",
    "prompt": "Select TWO reasons to prefer customer-managed KMS keys over AWS-managed keys for encrypting sensitive data.",
    "scenario": "<div class=\"scenario-text\"><p>The data is subject to strict regulatory controls around key ownership and audit.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Ability to define and audit key policies independently" },
      { "id": "b", "text": "Ability to schedule automatic key rotation and control the rotation period" },
      { "id": "c", "text": "AWS-managed keys are never rotated" },
      { "id": "d", "text": "Customer-managed keys are free of charge" },
      { "id": "e", "text": "AWS-managed keys cannot be used with S3" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Customer-managed keys give full control over the key policy and rotation schedule. AWS-managed keys are rotated by AWS and have limited policy control."
  },
  {
    "id": 48,
    "type": "hotspot",
    "domain": "Design Secure Architectures",
    "prompt": "Click the component that provides stateful firewalling at the subnet level for a VPC.",
    "scenario": "<div class=\"scenario-text\"><p>The architect needs to control traffic between subnets with allow/deny rules that remember connection state.</p></div>",
    "nodes": [
      { "id": "nacl", "label": "Network\nACL", "x": 25, "y": 40 },
      { "id": "sg", "label": "Security\nGroup", "x": 55, "y": 40 },
      { "id": "igw", "label": "Internet\nGateway", "x": 85, "y": 40 }
    ],
    "correct": ["sg"],
    "explanation": "Security groups are stateful and operate at the ENI level. Network ACLs are stateless and operate at the subnet level."
  },
  {
    "id": 49,
    "type": "single",
    "domain": "Design Secure Architectures",
    "prompt": "A company wants to share a set of private API Gateway endpoints with several partner accounts without exposing them to the public internet. Which solution is most appropriate?",
    "scenario": "<div class=\"scenario-text\"><p>Partners should connect from their own VPCs.</p></div>",
    "options": [
      { "id": "a", "text": "Private API with VPC endpoint policies and resource policies allowing the partner account principals" },
      { "id": "b", "text": "Public API with IP allow-listing" },
      { "id": "c", "text": "API Gateway with a public custom domain and mutual TLS only" },
      { "id": "d", "text": "Expose the API through an Application Load Balancer in a public subnet" }
    ],
    "correct": ["a"],
    "explanation": "Private APIs accessed via interface VPC endpoints, combined with resource policies, keep traffic private while allowing controlled cross-account access."
  },
  {
    "id": 50,
    "type": "dragdrop",
    "domain": "Design Secure Architectures",
    "prompt": "Match the security control to the layer of the OSI model or AWS abstraction it primarily operates on.",
    "scenario": "<div class=\"scenario-text\"><p>Align controls with the layer they protect.</p></div>",
    "items": [
      { "id": "c1", "text": "Security Groups" },
      { "id": "c2", "text": "Network ACLs" },
      { "id": "c3", "text": "AWS WAF" },
      { "id": "c4", "text": "AWS Shield" },
      { "id": "c5", "text": "IAM Policies" }
    ],
    "zones": [
      { "id": "z1", "label": "Instance / ENI level (stateful)" },
      { "id": "z2", "label": "Subnet level (stateless)" },
      { "id": "z3", "label": "Application layer (HTTP/S)" },
      { "id": "z4", "label": "Network edge (DDoS)" },
      { "id": "z5", "label": "Identity and authorization layer" }
    ],
    "correct": {
      "z1": ["c1"],
      "z2": ["c2"],
      "z3": ["c3"],
      "z4": ["c4"],
      "z5": ["c5"]
    },
    "explanation": "Security groups protect ENIs. NACLs protect subnets. WAF protects HTTP. Shield protects against DDoS at the edge. IAM controls who can do what."
  },

  // ========== DOMAIN 2: Design Resilient Architectures (Questions 51-100) ==========
  {
    "id": 51,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "Which Amazon RDS feature provides automatic failover to a standby instance in a different Availability Zone?",
    "scenario": "<div class=\"scenario-text\"><p>A production database must survive the loss of a single AZ with minimal downtime.</p></div>",
    "options": [
      { "id": "a", "text": "Read Replicas" },
      { "id": "b", "text": "Multi-AZ deployment" },
      { "id": "c", "text": "Amazon Aurora Global Database" },
      { "id": "d", "text": "Manual snapshot restore" }
    ],
    "correct": ["b"],
    "explanation": "Multi-AZ deployments maintain a synchronous standby in another AZ and automatically fail over if the primary becomes unavailable."
  },
  {
    "id": 52,
    "type": "multiselect",
    "domain": "Design Resilient Architectures",
    "prompt": "Select TWO services that provide highly available, managed relational database capabilities in AWS.",
    "scenario": "<div class=\"scenario-text\"><p>Design a multi-AZ application that requires a managed relational database with automatic failover.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Amazon RDS (Multi-AZ deployment)" },
      { "id": "b", "text": "Amazon DynamoDB" },
      { "id": "c", "text": "Amazon Aurora" },
      { "id": "d", "text": "Amazon ElastiCache for Redis" },
      { "id": "e", "text": "Amazon S3" }
    ],
    "correct": ["a", "c"],
    "selectCount": 2,
    "explanation": "RDS Multi-AZ and Aurora both offer managed relational databases with high availability."
  },
  {
    "id": 53,
    "type": "dragdrop",
    "domain": "Design Resilient Architectures",
    "prompt": "Order the steps to implement a multi-AZ, highly available web tier.",
    "scenario": "<div class=\"scenario-text\"><p>Place the architectural actions in a logical sequence.</p></div>",
    "items": [
      { "id": "a1", "text": "Create Application Load Balancer" },
      { "id": "a2", "text": "Launch Auto Scaling group across AZs" },
      { "id": "a3", "text": "Configure health checks & target group" },
      { "id": "a4", "text": "Register instances / launch template" }
    ],
    "zones": [
      { "id": "s1", "label": "Step 1" },
      { "id": "s2", "label": "Step 2" },
      { "id": "s3", "label": "Step 3" },
      { "id": "s4", "label": "Step 4" }
    ],
    "correct": {
      "s1": ["a1"],
      "s2": ["a3"],
      "s3": ["a4"],
      "s4": ["a2"]
    },
    "altCorrect": {
      "s1": ["a1"],
      "s2": ["a4"],
      "s3": ["a3"],
      "s4": ["a2"]
    },
    "explanation": "Create the ALB, set up target group/health checks, prepare launch template/instances, then attach an Auto Scaling group spanning AZs."
  },
  {
    "id": 54,
    "type": "hotspot",
    "domain": "Design Resilient Architectures",
    "prompt": "Click the two Availability Zones that should host the Auto Scaling group for high availability.",
    "scenario": "<div class=\"scenario-text\"><p>The application must survive the loss of a single AZ.</p></div>",
    "nodes": [
      { "id": "az1", "label": "AZ-a", "x": 20, "y": 40 },
      { "id": "az2", "label": "AZ-b", "x": 50, "y": 40 },
      { "id": "az3", "label": "AZ-c", "x": 80, "y": 40 }
    ],
    "correct": ["az1", "az2"],
    "selectCount": 2,
    "explanation": "Any two (or more) AZs provide AZ-level redundancy. Selecting only one AZ defeats the high-availability goal."
  },
  {
    "id": 55,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "An application must continue serving traffic even if an entire AWS Region becomes unavailable. Which architecture pattern best meets this requirement?",
    "scenario": "<div class=\"scenario-text\"><p>RTO is measured in minutes and the application is stateless.</p></div>",
    "options": [
      { "id": "a", "text": "Multi-AZ deployment within a single Region" },
      { "id": "b", "text": "Active-active multi-Region architecture with Route 53 health checks and latency-based routing" },
      { "id": "c", "text": "Single-AZ deployment with frequent EBS snapshots" },
      { "id": "d", "text": "On-premises backup only" }
    ],
    "correct": ["b"],
    "explanation": "Only a multi-Region active-active (or active-passive with automated failover) design survives a complete Region failure."
  },
  {
    "id": 56,
    "type": "multiselect",
    "domain": "Design Resilient Architectures",
    "prompt": "Select THREE design choices that improve the resilience of a web application running on EC2.",
    "scenario": "<div class=\"scenario-text\"><p>The application currently runs on a single instance in one AZ.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Place instances in an Auto Scaling group spanning at least two AZs" },
      { "id": "b", "text": "Use an Application Load Balancer with health checks" },
      { "id": "c", "text": "Store session state in Amazon DynamoDB or ElastiCache instead of on the instance" },
      { "id": "d", "text": "Increase the instance size to the largest available type" },
      { "id": "e", "text": "Disable detailed monitoring to reduce cost" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Multi-AZ Auto Scaling, load balancing with health checks, and externalizing state are fundamental resilience patterns. Vertical scaling alone does not protect against AZ failure."
  },
  {
    "id": 57,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "Which Amazon S3 feature provides the highest durability for objects?",
    "scenario": "<div class=\"scenario-text\"><p>Critical compliance data must survive the loss of multiple facilities.</p></div>",
    "options": [
      { "id": "a", "text": "S3 Standard storage class (11 nines durability)" },
      { "id": "b", "text": "S3 One Zone-IA" },
      { "id": "c", "text": "S3 Reduced Redundancy Storage (legacy)" },
      { "id": "d", "text": "Storing objects on a single EBS volume" }
    ],
    "correct": ["a"],
    "explanation": "S3 Standard (and most other multi-AZ classes) are designed for 99.999999999% durability by replicating objects across multiple AZs and devices."
  },
  {
    "id": 58,
    "type": "dragdrop",
    "domain": "Design Resilient Architectures",
    "prompt": "Match each resilience pattern to the AWS service or feature that primarily enables it.",
    "scenario": "<div class=\"scenario-text\"><p>Align patterns with the enabling technology.</p></div>",
    "items": [
      { "id": "p1", "text": "Automatic replacement of unhealthy instances" },
      { "id": "p2", "text": "Synchronous replication and automatic failover for databases" },
      { "id": "p3", "text": "Geographic redundancy for static content" },
      { "id": "p4", "text": "Decoupling producers and consumers" },
      { "id": "p5", "text": "Health-based routing away from failed endpoints" }
    ],
    "zones": [
      { "id": "z1", "label": "EC2 Auto Scaling" },
      { "id": "z2", "label": "RDS Multi-AZ / Aurora" },
      { "id": "z3", "label": "Amazon S3 + CloudFront" },
      { "id": "z4", "label": "Amazon SQS / SNS / EventBridge" },
      { "id": "z5", "label": "Route 53 health checks + routing policies" }
    ],
    "correct": {
      "z1": ["p1"],
      "z2": ["p2"],
      "z3": ["p3"],
      "z4": ["p4"],
      "z5": ["p5"]
    },
    "explanation": "Auto Scaling replaces failed instances. Multi-AZ databases provide failover. S3+CloudFront give geo-redundancy. Messaging services decouple. Route 53 removes unhealthy endpoints from DNS."
  },
  {
    "id": 59,
    "type": "hotspot",
    "domain": "Design Resilient Architectures",
    "prompt": "Click the component that should be configured with a health check so that traffic is not sent to unhealthy targets.",
    "scenario": "<div class=\"scenario-text\"><p>Architecture: Route 53 → CloudFront → ALB → Auto Scaling group.</p></div>",
    "nodes": [
      { "id": "r53", "label": "Route 53", "x": 15, "y": 40 },
      { "id": "cf", "label": "CloudFront", "x": 40, "y": 40 },
      { "id": "alb", "label": "ALB", "x": 65, "y": 40 },
      { "id": "asg", "label": "ASG", "x": 90, "y": 40 }
    ],
    "correct": ["alb"],
    "explanation": "The ALB target group health checks determine which instances receive traffic. Route 53 and CloudFront also have health concepts, but the primary instance health check lives on the ALB."
  },
  {
    "id": 60,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "A company runs a critical batch processing job that must complete even if the primary Region experiences an outage. What is the most cost-effective resilient design?",
    "scenario": "<div class=\"scenario-text\"><p>The job runs once per day and can tolerate a few hours of delay.</p></div>",
    "options": [
      { "id": "a", "text": "Run the job in two Regions simultaneously (active-active)" },
      { "id": "b", "text": "Use a multi-Region architecture with Route 53 failover and a secondary Region that is normally stopped or scaled to zero" },
      { "id": "c", "text": "Keep a complete warm copy of the entire production environment running 24×7 in a second Region" },
      { "id": "d", "text": "Rely solely on AZ-level redundancy inside one Region" }
    ],
    "correct": ["b"],
    "explanation": "For a batch job that can tolerate delay, a pilot-light or warm-standby multi-Region design activated by Route 53 failover is far more cost-effective than full active-active."
  },
  {
    "id": 61,
    "type": "multiselect",
    "domain": "Design Resilient Architectures",
    "prompt": "Select TWO Amazon S3 features that improve data resilience and recoverability.",
    "scenario": "<div class=\"scenario-text\"><p>A compliance team requires protection against accidental deletion and the ability to recover previous versions.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "S3 Versioning" },
      { "id": "b", "text": "S3 Cross-Region Replication" },
      { "id": "c", "text": "S3 Intelligent-Tiering" },
      { "id": "d", "text": "S3 Transfer Acceleration" },
      { "id": "e", "text": "S3 Select" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Versioning protects against overwrite/delete. Cross-Region Replication provides geographic redundancy. The other options are performance or analytics features."
  },
  {
    "id": 62,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "Which Amazon Aurora feature allows a database to survive the complete failure of an AWS Region with a typical RPO of under one second?",
    "scenario": "<div class=\"scenario-text\"><p>A global application requires near-zero data loss and the ability to promote a secondary Region quickly.</p></div>",
    "options": [
      { "id": "a", "text": "Aurora Replicas in the same Region" },
      { "id": "b", "text": "Aurora Global Database" },
      { "id": "c", "text": "Aurora Serverless v2" },
      { "id": "d", "text": "Manual snapshot copy to another Region" }
    ],
    "correct": ["b"],
    "explanation": "Aurora Global Database uses storage-based replication with typical lag under one second and supports fast promotion of a secondary Region."
  },
  {
    "id": 63,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "A company needs a highly available, multi-AZ file system that can be mounted concurrently by hundreds of Linux EC2 instances. Which service meets this requirement?",
    "scenario": "<div class=\"scenario-text\"><p>The file system must survive the loss of an AZ and support POSIX semantics.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon EBS Multi-Attach" },
      { "id": "b", "text": "Amazon EFS" },
      { "id": "c", "text": "Amazon S3" },
      { "id": "d", "text": "Instance store volumes" }
    ],
    "correct": ["b"],
    "explanation": "Amazon EFS is a regional, multi-AZ, fully managed NFS file system that supports thousands of concurrent mounts."
  },
  {
    "id": 64,
    "type": "multiselect",
    "domain": "Design Resilient Architectures",
    "prompt": "Select THREE practices that improve the resilience of a Lambda-based serverless application.",
    "scenario": "<div class=\"scenario-text\"><p>The application processes messages from SQS and writes results to DynamoDB.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Configure a dead-letter queue (DLQ) for failed invocations" },
      { "id": "b", "text": "Use exponential backoff and jitter for retries" },
      { "id": "c", "text": "Make the function idempotent so duplicate processing is safe" },
      { "id": "d", "text": "Increase the function timeout to the maximum 15 minutes for every function" },
      { "id": "e", "text": "Disable reserved concurrency so the function can scale without limits" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "DLQs capture poison messages. Proper retry logic and idempotency prevent data corruption and cascading failures. Maximum timeouts and unconstrained concurrency can actually reduce resilience."
  },
  {
    "id": 65,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "Which AWS service provides a managed, multi-AZ, highly available message queue that can be used to decouple microservices?",
    "scenario": "<div class=\"scenario-text\"><p>Messages must be durable and available even if an AZ fails.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon SQS" },
      { "id": "b", "text": "Amazon SNS" },
      { "id": "c", "text": "Amazon MQ (single-instance)" },
      { "id": "d", "text": "Amazon Kinesis Data Streams (single shard)" }
    ],
    "correct": ["a"],
    "explanation": "Amazon SQS is a fully managed, multi-AZ queue service designed for decoupling."
  },
  {
    "id": 66,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "A company uses Amazon DynamoDB for a global user session store. Which feature provides automatic multi-Region replication with multi-active writes?",
    "scenario": "<div class=\"scenario-text\"><p>Users in different continents must experience low latency writes and the data must be consistent across Regions.</p></div>",
    "options": [
      { "id": "a", "text": "DynamoDB Global Tables" },
      { "id": "b", "text": "DynamoDB Streams + Lambda cross-Region copy" },
      { "id": "c", "text": "DynamoDB on-demand backup restore to another Region" },
      { "id": "d", "text": "Amazon ElastiCache Global Datastore" }
    ],
    "correct": ["a"],
    "explanation": "DynamoDB Global Tables provide multi-active, multi-Region replication managed by AWS."
  },
  {
    "id": 67,
    "type": "multiselect",
    "domain": "Design Resilient Architectures",
    "prompt": "Select TWO benefits of using an Application Load Balancer in front of an Auto Scaling group.",
    "scenario": "<div class=\"scenario-text\"><p>The application currently has a single EC2 instance with an Elastic IP.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Automatic distribution of traffic across healthy instances in multiple AZs" },
      { "id": "b", "text": "Health-check-based removal of unhealthy targets from the load-balancing pool" },
      { "id": "c", "text": "Elimination of the need for security groups" },
      { "id": "d", "text": "Automatic encryption of all data at rest" },
      { "id": "e", "text": "Replacement of the need for Auto Scaling" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "ALB distributes traffic and removes unhealthy targets. It does not eliminate security groups, encrypt data at rest, or replace Auto Scaling."
  },
  {
    "id": 68,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "Which Amazon Route 53 routing policy is most appropriate when you want to route users to the Region that provides the lowest latency?",
    "scenario": "<div class=\"scenario-text\"><p>The application is deployed in three Regions and users are globally distributed.</p></div>",
    "options": [
      { "id": "a", "text": "Simple routing" },
      { "id": "b", "text": "Latency-based routing" },
      { "id": "c", "text": "Geolocation routing" },
      { "id": "d", "text": "Weighted routing" }
    ],
    "correct": ["b"],
    "explanation": "Latency-based routing uses AWS latency measurements between users and Regions to choose the lowest-latency endpoint."
  },
  {
    "id": 69,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "A company needs to ensure that an Amazon SQS queue can continue to accept messages even if the primary processing Region is unavailable. What is the recommended approach?",
    "scenario": "<div class=\"scenario-text\"><p>Messages must not be lost during a Region-level event.</p></div>",
    "options": [
      { "id": "a", "text": "Use a single SQS queue in one Region and rely on AZ redundancy" },
      { "id": "b", "text": "Implement a multi-Region design with dual SQS queues and a routing layer that can switch producers" },
      { "id": "c", "text": "Store messages only in an S3 bucket" },
      { "id": "d", "text": "Disable SQS encryption to improve availability" }
    ],
    "correct": ["b"],
    "explanation": "SQS is regional. For Region-level resilience, producers must be able to switch to a queue in a healthy Region."
  },
  {
    "id": 70,
    "type": "multiselect",
    "domain": "Design Resilient Architectures",
    "prompt": "Select THREE Amazon RDS / Aurora features that contribute to high availability and durability.",
    "scenario": "<div class=\"scenario-text\"><p>A mission-critical transactional database must survive AZ and instance failures.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Multi-AZ deployment with automatic failover" },
      { "id": "b", "text": "Automated backups retained for a configurable period" },
      { "id": "c", "text": "Aurora storage that is replicated six ways across three AZs" },
      { "id": "d", "text": "Running the database on a single large EC2 instance" },
      { "id": "e", "text": "Disabling automated backups to save cost" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Multi-AZ, automated backups, and Aurora’s multi-AZ storage are core resilience features."
  },
  {
    "id": 71,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "Which AWS service can automatically shift traffic away from an impaired Availability Zone for Application Load Balancers and EC2 Auto Scaling groups?",
    "scenario": "<div class=\"scenario-text\"><p>The operations team wants to reduce the impact of AZ-level impairments without manual intervention.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon Route 53 Application Recovery Controller (zonal shift)" },
      { "id": "b", "text": "AWS Config" },
      { "id": "c", "text": "Amazon CloudWatch Synthetics only" },
      { "id": "d", "text": "AWS Systems Manager State Manager" }
    ],
    "correct": ["a"],
    "explanation": "Route 53 Application Recovery Controller supports zonal shift to move traffic away from an impaired AZ for ALBs and ASGs."
  },
  {
    "id": 72,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "A company runs a stateful application that stores session data on the local disk of EC2 instances. What change will most improve resilience when instances are replaced by Auto Scaling?",
    "scenario": "<div class=\"scenario-text\"><p>Users currently lose their session when an instance is terminated.</p></div>",
    "options": [
      { "id": "a", "text": "Externalize session state to Amazon DynamoDB, ElastiCache, or a shared database" },
      { "id": "b", "text": "Increase the size of the instance store volume" },
      { "id": "c", "text": "Disable Auto Scaling health checks" },
      { "id": "d", "text": "Use only On-Demand instances and never Spot" }
    ],
    "correct": ["a"],
    "explanation": "Externalizing state allows any instance to serve any user and survives instance replacement."
  },
  {
    "id": 73,
    "type": "multiselect",
    "domain": "Design Resilient Architectures",
    "prompt": "Select TWO Amazon CloudFront features that improve the resilience of content delivery.",
    "scenario": "<div class=\"scenario-text\"><p>A global website must continue serving static and dynamic content even if an origin becomes unavailable.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Origin failover (primary and secondary origins)" },
      { "id": "b", "text": "Multiple edge locations and regional edge caches" },
      { "id": "c", "text": "Disabling caching entirely" },
      { "id": "d", "text": "Using a single origin in one AZ" },
      { "id": "e", "text": "Turning off HTTPS" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Origin failover and the global edge network both increase resilience."
  },
  {
    "id": 74,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "A company wants to test its disaster recovery plan by regularly failing over to a secondary Region without impacting production users. Which approach is most appropriate?",
    "scenario": "<div class=\"scenario-text\"><p>The team needs to validate RTO and RPO in a controlled manner.</p></div>",
    "options": [
      { "id": "a", "text": "Use Route 53 Application Recovery Controller readiness checks and controlled failover exercises" },
      { "id": "b", "text": "Permanently route 50% of production traffic to the secondary Region" },
      { "id": "c", "text": "Never test failover because it is too risky" },
      { "id": "d", "text": "Only test by deleting the primary Region resources" }
    ],
    "correct": ["a"],
    "explanation": "Application Recovery Controller provides readiness checks and supports controlled validation of recovery procedures."
  },
  {
    "id": 75,
    "type": "multiselect",
    "domain": "Design Resilient Architectures",
    "prompt": "Select TWO reasons to use Amazon Aurora instead of a self-managed MySQL database on EC2 for a mission-critical workload.",
    "scenario": "<div class=\"scenario-text\"><p>The team wants to reduce operational burden while improving availability.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Automated multi-AZ storage replication and fast failover" },
      { "id": "b", "text": "Continuous backup to S3 with point-in-time recovery" },
      { "id": "c", "text": "Complete control over the underlying operating system patches" },
      { "id": "d", "text": "Ability to run any custom kernel module" },
      { "id": "e", "text": "Lower cost than any managed service for every possible workload" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Aurora provides managed multi-AZ storage and continuous backups. Self-managed EC2 gives more OS control but far more operational responsibility."
  },
  {
    "id": 76,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "Which feature of Amazon EBS allows an application to continue using a volume even if the original Availability Zone becomes unavailable, by restoring from a snapshot in another AZ?",
    "scenario": "<div class=\"scenario-text\"><p>EBS volumes themselves are AZ-scoped.</p></div>",
    "options": [
      { "id": "a", "text": "EBS snapshots stored in S3 (which is regional) can be used to create a new volume in any AZ of the Region" },
      { "id": "b", "text": "EBS Multi-Attach across AZs" },
      { "id": "c", "text": "EBS volumes are automatically replicated across all AZs" },
      { "id": "d", "text": "Instance store volumes provide the same capability" }
    ],
    "correct": ["a"],
    "explanation": "Snapshots are stored in S3 and can be used to create volumes in any AZ. EBS Multi-Attach is limited to instances in the same AZ."
  },
  {
    "id": 77,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "A company needs a highly available, managed Redis-compatible cache that can survive the failure of an Availability Zone. Which service configuration meets the requirement?",
    "scenario": "<div class=\"scenario-text\"><p>Session data and frequently accessed objects are cached.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon ElastiCache for Redis with Multi-AZ and automatic failover enabled" },
      { "id": "b", "text": "A single ElastiCache node in one AZ" },
      { "id": "c", "text": "Amazon DynamoDB with eventual consistency only" },
      { "id": "d", "text": "In-memory cache on each EC2 instance with no sharing" }
    ],
    "correct": ["a"],
    "explanation": "ElastiCache for Redis supports Multi-AZ with automatic failover, providing high availability for the cache layer."
  },
  {
    "id": 78,
    "type": "multiselect",
    "domain": "Design Resilient Architectures",
    "prompt": "Select THREE design principles from the AWS Well-Architected Framework that directly improve resilience.",
    "scenario": "<div class=\"scenario-text\"><p>The architecture team is reviewing a new system against the Reliability pillar.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Automatically recover from failure" },
      { "id": "b", "text": "Test recovery procedures" },
      { "id": "c", "text": "Scale horizontally to increase aggregate workload availability" },
      { "id": "d", "text": "Always choose the largest possible instance type" },
      { "id": "e", "text": "Ignore monitoring until an outage occurs" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Automatic recovery, testing recovery, and horizontal scaling are core Reliability pillar principles."
  },
  {
    "id": 79,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "Which Amazon S3 storage class is designed for data that is accessed infrequently but requires rapid access when needed, while still providing 11 nines of durability across multiple AZs?",
    "scenario": "<div class=\"scenario-text\"><p>Backups that are restored only a few times per year.</p></div>",
    "options": [
      { "id": "a", "text": "S3 Standard-IA" },
      { "id": "b", "text": "S3 One Zone-IA" },
      { "id": "c", "text": "S3 Glacier Deep Archive" },
      { "id": "d", "text": "S3 Reduced Redundancy" }
    ],
    "correct": ["a"],
    "explanation": "S3 Standard-IA provides multi-AZ durability and low latency access at a lower storage cost for infrequent access."
  },
  {
    "id": 80,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "A company must meet a recovery point objective (RPO) of 5 minutes for a critical database. Which Aurora feature best supports this requirement with the least operational overhead?",
    "scenario": "<div class=\"scenario-text\"><p>The database is already running on Aurora.</p></div>",
    "options": [
      { "id": "a", "text": "Aurora continuous backup to S3 with point-in-time recovery (PITR)" },
      { "id": "b", "text": "Manual snapshots taken every 5 minutes" },
      { "id": "c", "text": "Exporting the database to S3 every hour" },
      { "id": "d", "text": "Relying only on Multi-AZ without any backup" }
    ],
    "correct": ["a"],
    "explanation": "Aurora’s continuous backup and PITR allow restoration to any second within the retention period, easily meeting a 5-minute RPO."
  },
  {
    "id": 81,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "A company wants to protect an Amazon Aurora database from accidental or malicious deletion. Which combination of features provides the strongest protection?",
    "scenario": "<div class=\"scenario-text\"><p>The database contains irreplaceable customer data.</p></div>",
    "options": [
      { "id": "a", "text": "Enable deletion protection and use AWS Backup with vault lock" },
      { "id": "b", "text": "Rely only on automated backups with a short retention period" },
      { "id": "c", "text": "Disable automated backups to prevent accidental restores" },
      { "id": "d", "text": "Store the only copy of the data on an EBS volume attached to a single instance" }
    ],
    "correct": ["a"],
    "explanation": "Deletion protection prevents accidental DeleteDBInstance calls. AWS Backup with vault lock provides immutable, compliance-grade backup retention."
  },
  {
    "id": 82,
    "type": "multiselect",
    "domain": "Design Resilient Architectures",
    "prompt": "Select TWO benefits of using Amazon Route 53 health checks with failover routing.",
    "scenario": "<div class=\"scenario-text\"><p>An application is deployed in two Regions.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Automatic redirection of traffic away from an unhealthy Region" },
      { "id": "b", "text": "Ability to detect endpoint health from multiple geographic locations" },
      { "id": "c", "text": "Automatic scaling of EC2 instances" },
      { "id": "d", "text": "Encryption of all data at rest in S3" },
      { "id": "e", "text": "Replacement of the need for load balancers" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Health checks detect problems and failover routing moves traffic."
  },
  {
    "id": 83,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "Which Amazon DynamoDB feature allows an application to continue operating with a local copy of data even when the network connection to the AWS Region is temporarily unavailable?",
    "scenario": "<div class=\"scenario-text\"><p>A mobile application needs offline capability with later synchronization.</p></div>",
    "options": [
      { "id": "a", "text": "DynamoDB Global Tables" },
      { "id": "b", "text": "DynamoDB Accelerator (DAX)" },
      { "id": "c", "text": "AWS AppSync with offline support or client-side caching patterns" },
      { "id": "d", "text": "DynamoDB Streams alone" }
    ],
    "correct": ["c"],
    "explanation": "For true offline-first mobile scenarios, AppSync with offline support or application-level local stores are used."
  },
  {
    "id": 84,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "A company needs to ensure that all critical data is replicated to a secondary Region with a maximum lag of a few seconds. Which combination is most appropriate for a relational workload?",
    "scenario": "<div class=\"scenario-text\"><p>The primary database is Aurora PostgreSQL.</p></div>",
    "options": [
      { "id": "a", "text": "Aurora Global Database" },
      { "id": "b", "text": "Manual snapshot copy every hour" },
      { "id": "c", "text": "S3 Cross-Region Replication of database dump files" },
      { "id": "d", "text": "AWS DMS with a full-load only task" }
    ],
    "correct": ["a"],
    "explanation": "Aurora Global Database provides near-real-time physical replication with typical lag under one second."
  },
  {
    "id": 85,
    "type": "multiselect",
    "domain": "Design Resilient Architectures",
    "prompt": "Select THREE components that should be multi-AZ for a highly available three-tier web application.",
    "scenario": "<div class=\"scenario-text\"><p>The application must survive the loss of any single Availability Zone.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Application Load Balancer" },
      { "id": "b", "text": "Auto Scaling group of web/app instances" },
      { "id": "c", "text": "RDS Multi-AZ or Aurora database" },
      { "id": "d", "text": "A single NAT Gateway in one AZ" },
      { "id": "e", "text": "A single bastion host in one AZ" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "ALB, multi-AZ ASG, and Multi-AZ database are required. Single-AZ NAT or bastion creates a single point of failure for outbound or administrative access."
  },
  {
    "id": 86,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "Which AWS service provides a fully managed, highly available message broker that supports industry-standard protocols such as JMS, AMQP, and MQTT?",
    "scenario": "<div class=\"scenario-text\"><p>An existing on-premises application uses ActiveMQ and the team wants a managed migration path.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon MQ" },
      { "id": "b", "text": "Amazon SQS" },
      { "id": "c", "text": "Amazon SNS" },
      { "id": "d", "text": "Amazon Kinesis" }
    ],
    "correct": ["a"],
    "explanation": "Amazon MQ is a managed message broker service for ActiveMQ and RabbitMQ that supports standard protocols."
  },
  {
    "id": 87,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "A company wants to implement a blue/green deployment strategy for an application running on EC2 behind an Application Load Balancer. Which approach minimizes downtime and risk?",
    "scenario": "<div class=\"scenario-text\"><p>The team must be able to roll back instantly if the new version has problems.</p></div>",
    "options": [
      { "id": "a", "text": "Create a second target group and Auto Scaling group for the new version, then shift traffic using weighted target groups or listener rules" },
      { "id": "b", "text": "Replace all instances in the existing Auto Scaling group simultaneously" },
      { "id": "c", "text": "Stop the entire application, deploy the new version, then start it again" },
      { "id": "d", "text": "Use only Spot Instances for the new version" }
    ],
    "correct": ["a"],
    "explanation": "Blue/green with separate target groups allows traffic shifting and instant rollback by changing weights or rules."
  },
  {
    "id": 88,
    "type": "multiselect",
    "domain": "Design Resilient Architectures",
    "prompt": "Select TWO services that can be used to implement automatic failover for a multi-Region application.",
    "scenario": "<div class=\"scenario-text\"><p>The application is active in one Region and standby in another.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Amazon Route 53 with health checks and failover routing policy" },
      { "id": "b", "text": "AWS Global Accelerator with endpoint groups in multiple Regions" },
      { "id": "c", "text": "Amazon CloudWatch Alarms alone without any action" },
      { "id": "d", "text": "AWS Config rules without remediation" },
      { "id": "e", "text": "Amazon S3 Transfer Acceleration" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Route 53 failover and Global Accelerator both provide health-based multi-Region traffic routing."
  },
  {
    "id": 89,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "Which Amazon S3 feature allows automatic, asynchronous copying of objects to a destination bucket in a different Region?",
    "scenario": "<div class=\"scenario-text\"><p>The company needs a disaster-recovery copy of all objects.</p></div>",
    "options": [
      { "id": "a", "text": "S3 Cross-Region Replication (CRR)" },
      { "id": "b", "text": "S3 Same-Region Replication (SRR)" },
      { "id": "c", "text": "S3 Inventory" },
      { "id": "d", "text": "S3 Batch Operations" }
    ],
    "correct": ["a"],
    "explanation": "CRR automatically replicates objects to a bucket in another Region."
  },
  {
    "id": 90,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "A company runs a critical application on Amazon ECS. Which configuration provides the highest availability for the service?",
    "scenario": "<div class=\"scenario-text\"><p>The service must continue running even if an AZ becomes unavailable.</p></div>",
    "options": [
      { "id": "a", "text": "ECS service with tasks spread across multiple AZs and a capacity provider that can launch replacement tasks" },
      { "id": "b", "text": "All tasks pinned to a single AZ for lower latency" },
      { "id": "c", "text": "A single large task with no replicas" },
      { "id": "d", "text": "Using only Fargate Spot capacity" }
    ],
    "correct": ["a"],
    "explanation": "Spreading tasks across AZs and using capacity providers for automatic replacement provides high availability."
  },
  {
    "id": 91,
    "type": "multiselect",
    "domain": "Design Resilient Architectures",
    "prompt": "Select TWO ways to improve the resilience of an Amazon API Gateway REST API.",
    "scenario": "<div class=\"scenario-text\"><p>The API is a critical entry point for mobile clients.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Deploy the API in multiple Stages and use canary release deployments" },
      { "id": "b", "text": "Enable caching and set appropriate TTLs to reduce backend load" },
      { "id": "c", "text": "Disable all throttling so clients can send unlimited requests" },
      { "id": "d", "text": "Remove all authorization so the API is publicly open" },
      { "id": "e", "text": "Use a single Region only" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Canary deployments reduce risk of bad releases. Caching improves availability under load. Disabling throttling and authorization increases risk."
  },
  {
    "id": 92,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "Which AWS service provides a global anycast network that can improve availability and performance of applications by routing users to the nearest healthy endpoint?",
    "scenario": "<div class=\"scenario-text\"><p>The application is deployed in multiple Regions and must survive Regional impairments.</p></div>",
    "options": [
      { "id": "a", "text": "AWS Global Accelerator" },
      { "id": "b", "text": "Amazon CloudFront (only for static content)" },
      { "id": "c", "text": "Amazon Route 53 simple routing" },
      { "id": "d", "text": "AWS Direct Connect" }
    ],
    "correct": ["a"],
    "explanation": "Global Accelerator uses the AWS global network and anycast IPs to route users to the optimal healthy endpoint, with automatic failover."
  },
  {
    "id": 93,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "A company needs to ensure that an Amazon ElastiCache for Redis cluster can fail over automatically if the primary node fails. What must be enabled?",
    "scenario": "<div class=\"scenario-text\"><p>The cache holds critical session data.</p></div>",
    "options": [
      { "id": "a", "text": "Multi-AZ with Automatic Failover" },
      { "id": "b", "text": "Cluster mode disabled and a single node" },
      { "id": "c", "text": "Only in-memory persistence without replication" },
      { "id": "d", "text": "Manual snapshot restore as the only recovery method" }
    ],
    "correct": ["a"],
    "explanation": "Multi-AZ with Automatic Failover enables Redis to promote a replica if the primary fails."
  },
  {
    "id": 94,
    "type": "multiselect",
    "domain": "Design Resilient Architectures",
    "prompt": "Select THREE best practices for designing resilient serverless applications on AWS.",
    "scenario": "<div class=\"scenario-text\"><p>The application uses Lambda, API Gateway, SQS, and DynamoDB.</p></div><div class=\"requirements-box\"><h3>Select exactly THREE</h3></div>",
    "options": [
      { "id": "a", "text": "Design functions to be idempotent" },
      { "id": "b", "text": "Use DLQs or on-failure destinations for asynchronous invocations" },
      { "id": "c", "text": "Implement appropriate timeouts and retries with backoff" },
      { "id": "d", "text": "Hard-code Region-specific endpoints and never use multi-Region" },
      { "id": "e", "text": "Ignore CloudWatch metrics and alarms" }
    ],
    "correct": ["a", "b", "c"],
    "selectCount": 3,
    "explanation": "Idempotency, DLQs, and proper retry logic are foundational for resilient serverless designs."
  },
  {
    "id": 95,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "Which Amazon RDS feature allows you to create a read-only copy of a database in a different Region for disaster recovery or low-latency reads?",
    "scenario": "<div class=\"scenario-text\"><p>The primary database is in us-east-1 and users in Europe experience high latency.</p></div>",
    "options": [
      { "id": "a", "text": "Cross-Region Read Replicas" },
      { "id": "b", "text": "Multi-AZ deployment within the same Region" },
      { "id": "c", "text": "RDS Proxy" },
      { "id": "d", "text": "Aurora Serverless only" }
    ],
    "correct": ["a"],
    "explanation": "Cross-Region Read Replicas provide both geographic redundancy and low-latency local reads."
  },
  {
    "id": 96,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "A company wants to ensure that its Amazon S3 data is protected against both accidental deletion and ransomware. Which combination provides the strongest protection?",
    "scenario": "<div class=\"scenario-text\"><p>Data must remain recoverable even if credentials are compromised.</p></div>",
    "options": [
      { "id": "a", "text": "S3 Versioning + MFA Delete + Object Lock in Compliance mode + Cross-Region Replication to a bucket with restricted access" },
      { "id": "b", "text": "S3 Standard storage only" },
      { "id": "c", "text": "Disabling all logging" },
      { "id": "d", "text": "Making the bucket public so multiple copies exist" }
    ],
    "correct": ["a"],
    "explanation": "Versioning, MFA Delete, Object Lock Compliance mode, and a restricted replica provide defense-in-depth against deletion and ransomware."
  },
  {
    "id": 97,
    "type": "multiselect",
    "domain": "Design Resilient Architectures",
    "prompt": "Select TWO services that help implement the “design for failure” principle in a multi-tier application.",
    "scenario": "<div class=\"scenario-text\"><p>The application must continue operating when individual components fail.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Amazon SQS for decoupling tiers" },
      { "id": "b", "text": "Auto Scaling groups that replace unhealthy instances" },
      { "id": "c", "text": "A single monolithic EC2 instance for all tiers" },
      { "id": "d", "text": "Hard-coded IP addresses for all service endpoints" },
      { "id": "e", "text": "Disabling health checks" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Decoupling with SQS and automatic instance replacement with Auto Scaling are classic “design for failure” patterns."
  },
  {
    "id": 98,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "Which AWS service can be used to orchestrate complex multi-step workflows with automatic retries, error handling, and human approval steps?",
    "scenario": "<div class=\"scenario-text\"><p>A long-running business process must be resilient to transient failures.</p></div>",
    "options": [
      { "id": "a", "text": "AWS Step Functions" },
      { "id": "b", "text": "Amazon SQS alone" },
      { "id": "c", "text": "Amazon SNS alone" },
      { "id": "d", "text": "AWS Lambda concurrency limits only" }
    ],
    "correct": ["a"],
    "explanation": "Step Functions provides managed orchestration with built-in retry, catch, and wait states, plus human approval via callbacks."
  },
  {
    "id": 99,
    "type": "single",
    "domain": "Design Resilient Architectures",
    "prompt": "A company needs to ensure that an Amazon EFS file system remains available even if an Availability Zone fails. What is the correct configuration?",
    "scenario": "<div class=\"scenario-text\"><p>Hundreds of EC2 instances in multiple AZs mount the file system.</p></div>",
    "options": [
      { "id": "a", "text": "Use the Standard storage class (which is regional and multi-AZ by design)" },
      { "id": "b", "text": "Use One Zone storage class for lower cost" },
      { "id": "c", "text": "Mount the file system from only one AZ" },
      { "id": "d", "text": "Replace EFS with instance store volumes" }
    ],
    "correct": ["a"],
    "explanation": "EFS Standard storage is designed to be multi-AZ and highly available. One Zone storage is not."
  },
  {
    "id": 100,
    "type": "multiselect",
    "domain": "Design Resilient Architectures",
    "prompt": "Select TWO actions that improve the resilience of a multi-Region active-passive architecture.",
    "scenario": "<div class=\"scenario-text\"><p>The secondary Region is kept in a pilot-light state.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Regularly test the failover and scale-out procedures" },
      { "id": "b", "text": "Keep data continuously replicated to the secondary Region" },
      { "id": "c", "text": "Never update the secondary Region infrastructure" },
      { "id": "d", "text": "Disable health checks on the primary endpoint" },
      { "id": "e", "text": "Run the secondary at full capacity 24×7 even when not needed" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Testing and continuous data replication are essential for a reliable pilot-light or warm-standby design. Keeping the secondary stale or disabling health checks undermines resilience."
  },
  {
    "id": 101,
    "type": "single",
    "domain": "Design High-Performing Architectures",
    "prompt": "Which AWS service or feature best improves performance for the described scenario (Q101)?",
    "scenario": "<div class=\"scenario-text\"><p>A high-traffic application requires optimized latency and throughput for global users or intensive workloads.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon CloudFront or ElastiCache" },
      { "id": "b", "text": "Single AZ deployment without caching" },
      { "id": "c", "text": "Disabling all performance features" },
      { "id": "d", "text": "Using only the smallest instance type" }
    ],
    "correct": ["a"],
    "explanation": "CloudFront and ElastiCache are primary tools for improving performance through edge caching and in-memory acceleration."
  },
  {
    "id": 102,
    "type": "multiselect",
    "domain": "Design High-Performing Architectures",
    "prompt": "Select TWO techniques that improve performance for a read-heavy or global workload (Q102).",
    "scenario": "<div class=\"scenario-text\"><p>Users experience high latency or the database is under heavy read load.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Add Amazon CloudFront or regional read replicas" },
      { "id": "b", "text": "Introduce Amazon ElastiCache or DAX" },
      { "id": "c", "text": "Disable caching and use a single Region" },
      { "id": "d", "text": "Always use the largest instance without metrics" },
      { "id": "e", "text": "Remove load balancers" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Edge caching, read replicas, and in-memory caches are proven performance levers."
  },
  {
    "id": 103,
    "type": "dragdrop",
    "domain": "Design High-Performing Architectures",
    "prompt": "Match the performance optimization to the AWS service that enables it (Q103).",
    "scenario": "<div class=\"scenario-text\"><p>Align common performance techniques with the correct service.</p></div>",
    "items": [
      { "id": "i1", "text": "Edge caching of static content" },
      { "id": "i2", "text": "In-memory application caching" },
      { "id": "i3", "text": "Microsecond DynamoDB acceleration" },
      { "id": "i4", "text": "High-performance shared file system" }
    ],
    "zones": [
      { "id": "z1", "label": "Amazon CloudFront" },
      { "id": "z2", "label": "Amazon ElastiCache" },
      { "id": "z3", "label": "Amazon DynamoDB DAX" },
      { "id": "z4", "label": "Amazon FSx for Lustre" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "CloudFront for edge, ElastiCache for app cache, DAX for DynamoDB, FSx for HPC file systems."
  },
  {
    "id": 104,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q104).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },
  {
    "id": 105,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q105).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },
  {
    "id": 106,
    "type": "single",
    "domain": "Design High-Performing Architectures",
    "prompt": "Which AWS service or feature best improves performance for the described scenario (Q106)?",
    "scenario": "<div class=\"scenario-text\"><p>A high-traffic application requires optimized latency and throughput for global users or intensive workloads.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon CloudFront or ElastiCache" },
      { "id": "b", "text": "Single AZ deployment without caching" },
      { "id": "c", "text": "Disabling all performance features" },
      { "id": "d", "text": "Using only the smallest instance type" }
    ],
    "correct": ["a"],
    "explanation": "CloudFront and ElastiCache are primary tools for improving performance through edge caching and in-memory acceleration."
  },  {
    "id": 107,
    "type": "multiselect",
    "domain": "Design High-Performing Architectures",
    "prompt": "Select TWO techniques that improve performance for a read-heavy or global workload (Q107).",
    "scenario": "<div class=\"scenario-text\"><p>Users experience high latency or the database is under heavy read load.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Add Amazon CloudFront or regional read replicas" },
      { "id": "b", "text": "Introduce Amazon ElastiCache or DAX" },
      { "id": "c", "text": "Disable caching and use a single Region" },
      { "id": "d", "text": "Always use the largest instance without metrics" },
      { "id": "e", "text": "Remove load balancers" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Edge caching, read replicas, and in-memory caches are proven performance levers."
  },  {
    "id": 108,
    "type": "dragdrop",
    "domain": "Design High-Performing Architectures",
    "prompt": "Match the performance optimization to the AWS service that enables it (Q108).",
    "scenario": "<div class=\"scenario-text\"><p>Align common performance techniques with the correct service.</p></div>",
    "items": [
      { "id": "i1", "text": "Edge caching of static content" },
      { "id": "i2", "text": "In-memory application caching" },
      { "id": "i3", "text": "Microsecond DynamoDB acceleration" },
      { "id": "i4", "text": "High-performance shared file system" }
    ],
    "zones": [
      { "id": "z1", "label": "Amazon CloudFront" },
      { "id": "z2", "label": "Amazon ElastiCache" },
      { "id": "z3", "label": "Amazon DynamoDB DAX" },
      { "id": "z4", "label": "Amazon FSx for Lustre" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "CloudFront for edge, ElastiCache for app cache, DAX for DynamoDB, FSx for HPC file systems."
  },  {
    "id": 109,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q109).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },  {
    "id": 110,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q110).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },  {
    "id": 111,
    "type": "single",
    "domain": "Design High-Performing Architectures",
    "prompt": "Which AWS service or feature best improves performance for the described scenario (Q111)?",
    "scenario": "<div class=\"scenario-text\"><p>A high-traffic application requires optimized latency and throughput for global users or intensive workloads.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon CloudFront or ElastiCache" },
      { "id": "b", "text": "Single AZ deployment without caching" },
      { "id": "c", "text": "Disabling all performance features" },
      { "id": "d", "text": "Using only the smallest instance type" }
    ],
    "correct": ["a"],
    "explanation": "CloudFront and ElastiCache are primary tools for improving performance through edge caching and in-memory acceleration."
  },  {
    "id": 112,
    "type": "multiselect",
    "domain": "Design High-Performing Architectures",
    "prompt": "Select TWO techniques that improve performance for a read-heavy or global workload (Q112).",
    "scenario": "<div class=\"scenario-text\"><p>Users experience high latency or the database is under heavy read load.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Add Amazon CloudFront or regional read replicas" },
      { "id": "b", "text": "Introduce Amazon ElastiCache or DAX" },
      { "id": "c", "text": "Disable caching and use a single Region" },
      { "id": "d", "text": "Always use the largest instance without metrics" },
      { "id": "e", "text": "Remove load balancers" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Edge caching, read replicas, and in-memory caches are proven performance levers."
  },  {
    "id": 113,
    "type": "dragdrop",
    "domain": "Design High-Performing Architectures",
    "prompt": "Match the performance optimization to the AWS service that enables it (Q113).",
    "scenario": "<div class=\"scenario-text\"><p>Align common performance techniques with the correct service.</p></div>",
    "items": [
      { "id": "i1", "text": "Edge caching of static content" },
      { "id": "i2", "text": "In-memory application caching" },
      { "id": "i3", "text": "Microsecond DynamoDB acceleration" },
      { "id": "i4", "text": "High-performance shared file system" }
    ],
    "zones": [
      { "id": "z1", "label": "Amazon CloudFront" },
      { "id": "z2", "label": "Amazon ElastiCache" },
      { "id": "z3", "label": "Amazon DynamoDB DAX" },
      { "id": "z4", "label": "Amazon FSx for Lustre" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "CloudFront for edge, ElastiCache for app cache, DAX for DynamoDB, FSx for HPC file systems."
  },  {
    "id": 114,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q114).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },  {
    "id": 115,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q115).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },  {
    "id": 116,
    "type": "single",
    "domain": "Design High-Performing Architectures",
    "prompt": "Which AWS service or feature best improves performance for the described scenario (Q116)?",
    "scenario": "<div class=\"scenario-text\"><p>A high-traffic application requires optimized latency and throughput for global users or intensive workloads.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon CloudFront or ElastiCache" },
      { "id": "b", "text": "Single AZ deployment without caching" },
      { "id": "c", "text": "Disabling all performance features" },
      { "id": "d", "text": "Using only the smallest instance type" }
    ],
    "correct": ["a"],
    "explanation": "CloudFront and ElastiCache are primary tools for improving performance through edge caching and in-memory acceleration."
  },  {
    "id": 117,
    "type": "multiselect",
    "domain": "Design High-Performing Architectures",
    "prompt": "Select TWO techniques that improve performance for a read-heavy or global workload (Q117).",
    "scenario": "<div class=\"scenario-text\"><p>Users experience high latency or the database is under heavy read load.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Add Amazon CloudFront or regional read replicas" },
      { "id": "b", "text": "Introduce Amazon ElastiCache or DAX" },
      { "id": "c", "text": "Disable caching and use a single Region" },
      { "id": "d", "text": "Always use the largest instance without metrics" },
      { "id": "e", "text": "Remove load balancers" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Edge caching, read replicas, and in-memory caches are proven performance levers."
  },  {
    "id": 118,
    "type": "dragdrop",
    "domain": "Design High-Performing Architectures",
    "prompt": "Match the performance optimization to the AWS service that enables it (Q118).",
    "scenario": "<div class=\"scenario-text\"><p>Align common performance techniques with the correct service.</p></div>",
    "items": [
      { "id": "i1", "text": "Edge caching of static content" },
      { "id": "i2", "text": "In-memory application caching" },
      { "id": "i3", "text": "Microsecond DynamoDB acceleration" },
      { "id": "i4", "text": "High-performance shared file system" }
    ],
    "zones": [
      { "id": "z1", "label": "Amazon CloudFront" },
      { "id": "z2", "label": "Amazon ElastiCache" },
      { "id": "z3", "label": "Amazon DynamoDB DAX" },
      { "id": "z4", "label": "Amazon FSx for Lustre" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "CloudFront for edge, ElastiCache for app cache, DAX for DynamoDB, FSx for HPC file systems."
  },  {
    "id": 119,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q119).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },  {
    "id": 120,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q120).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },  {
    "id": 121,
    "type": "single",
    "domain": "Design High-Performing Architectures",
    "prompt": "Which AWS service or feature best improves performance for the described scenario (Q121)?",
    "scenario": "<div class=\"scenario-text\"><p>A high-traffic application requires optimized latency and throughput for global users or intensive workloads.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon CloudFront or ElastiCache" },
      { "id": "b", "text": "Single AZ deployment without caching" },
      { "id": "c", "text": "Disabling all performance features" },
      { "id": "d", "text": "Using only the smallest instance type" }
    ],
    "correct": ["a"],
    "explanation": "CloudFront and ElastiCache are primary tools for improving performance through edge caching and in-memory acceleration."
  },  {
    "id": 122,
    "type": "multiselect",
    "domain": "Design High-Performing Architectures",
    "prompt": "Select TWO techniques that improve performance for a read-heavy or global workload (Q122).",
    "scenario": "<div class=\"scenario-text\"><p>Users experience high latency or the database is under heavy read load.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Add Amazon CloudFront or regional read replicas" },
      { "id": "b", "text": "Introduce Amazon ElastiCache or DAX" },
      { "id": "c", "text": "Disable caching and use a single Region" },
      { "id": "d", "text": "Always use the largest instance without metrics" },
      { "id": "e", "text": "Remove load balancers" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Edge caching, read replicas, and in-memory caches are proven performance levers."
  },  {
    "id": 123,
    "type": "dragdrop",
    "domain": "Design High-Performing Architectures",
    "prompt": "Match the performance optimization to the AWS service that enables it (Q123).",
    "scenario": "<div class=\"scenario-text\"><p>Align common performance techniques with the correct service.</p></div>",
    "items": [
      { "id": "i1", "text": "Edge caching of static content" },
      { "id": "i2", "text": "In-memory application caching" },
      { "id": "i3", "text": "Microsecond DynamoDB acceleration" },
      { "id": "i4", "text": "High-performance shared file system" }
    ],
    "zones": [
      { "id": "z1", "label": "Amazon CloudFront" },
      { "id": "z2", "label": "Amazon ElastiCache" },
      { "id": "z3", "label": "Amazon DynamoDB DAX" },
      { "id": "z4", "label": "Amazon FSx for Lustre" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "CloudFront for edge, ElastiCache for app cache, DAX for DynamoDB, FSx for HPC file systems."
  },  {
    "id": 124,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q124).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },  {
    "id": 125,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q125).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },  {
    "id": 126,
    "type": "single",
    "domain": "Design High-Performing Architectures",
    "prompt": "Which AWS service or feature best improves performance for the described scenario (Q126)?",
    "scenario": "<div class=\"scenario-text\"><p>A high-traffic application requires optimized latency and throughput for global users or intensive workloads.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon CloudFront or ElastiCache" },
      { "id": "b", "text": "Single AZ deployment without caching" },
      { "id": "c", "text": "Disabling all performance features" },
      { "id": "d", "text": "Using only the smallest instance type" }
    ],
    "correct": ["a"],
    "explanation": "CloudFront and ElastiCache are primary tools for improving performance through edge caching and in-memory acceleration."
  },  {
    "id": 127,
    "type": "multiselect",
    "domain": "Design High-Performing Architectures",
    "prompt": "Select TWO techniques that improve performance for a read-heavy or global workload (Q127).",
    "scenario": "<div class=\"scenario-text\"><p>Users experience high latency or the database is under heavy read load.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Add Amazon CloudFront or regional read replicas" },
      { "id": "b", "text": "Introduce Amazon ElastiCache or DAX" },
      { "id": "c", "text": "Disable caching and use a single Region" },
      { "id": "d", "text": "Always use the largest instance without metrics" },
      { "id": "e", "text": "Remove load balancers" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Edge caching, read replicas, and in-memory caches are proven performance levers."
  },  {
    "id": 128,
    "type": "dragdrop",
    "domain": "Design High-Performing Architectures",
    "prompt": "Match the performance optimization to the AWS service that enables it (Q128).",
    "scenario": "<div class=\"scenario-text\"><p>Align common performance techniques with the correct service.</p></div>",
    "items": [
      { "id": "i1", "text": "Edge caching of static content" },
      { "id": "i2", "text": "In-memory application caching" },
      { "id": "i3", "text": "Microsecond DynamoDB acceleration" },
      { "id": "i4", "text": "High-performance shared file system" }
    ],
    "zones": [
      { "id": "z1", "label": "Amazon CloudFront" },
      { "id": "z2", "label": "Amazon ElastiCache" },
      { "id": "z3", "label": "Amazon DynamoDB DAX" },
      { "id": "z4", "label": "Amazon FSx for Lustre" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "CloudFront for edge, ElastiCache for app cache, DAX for DynamoDB, FSx for HPC file systems."
  },  {
    "id": 129,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q129).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },  {
    "id": 130,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q130).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },  {
    "id": 131,
    "type": "single",
    "domain": "Design High-Performing Architectures",
    "prompt": "Which AWS service or feature best improves performance for the described scenario (Q131)?",
    "scenario": "<div class=\"scenario-text\"><p>A high-traffic application requires optimized latency and throughput for global users or intensive workloads.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon CloudFront or ElastiCache" },
      { "id": "b", "text": "Single AZ deployment without caching" },
      { "id": "c", "text": "Disabling all performance features" },
      { "id": "d", "text": "Using only the smallest instance type" }
    ],
    "correct": ["a"],
    "explanation": "CloudFront and ElastiCache are primary tools for improving performance through edge caching and in-memory acceleration."
  },  {
    "id": 132,
    "type": "multiselect",
    "domain": "Design High-Performing Architectures",
    "prompt": "Select TWO techniques that improve performance for a read-heavy or global workload (Q132).",
    "scenario": "<div class=\"scenario-text\"><p>Users experience high latency or the database is under heavy read load.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Add Amazon CloudFront or regional read replicas" },
      { "id": "b", "text": "Introduce Amazon ElastiCache or DAX" },
      { "id": "c", "text": "Disable caching and use a single Region" },
      { "id": "d", "text": "Always use the largest instance without metrics" },
      { "id": "e", "text": "Remove load balancers" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Edge caching, read replicas, and in-memory caches are proven performance levers."
  },  {
    "id": 133,
    "type": "dragdrop",
    "domain": "Design High-Performing Architectures",
    "prompt": "Match the performance optimization to the AWS service that enables it (Q133).",
    "scenario": "<div class=\"scenario-text\"><p>Align common performance techniques with the correct service.</p></div>",
    "items": [
      { "id": "i1", "text": "Edge caching of static content" },
      { "id": "i2", "text": "In-memory application caching" },
      { "id": "i3", "text": "Microsecond DynamoDB acceleration" },
      { "id": "i4", "text": "High-performance shared file system" }
    ],
    "zones": [
      { "id": "z1", "label": "Amazon CloudFront" },
      { "id": "z2", "label": "Amazon ElastiCache" },
      { "id": "z3", "label": "Amazon DynamoDB DAX" },
      { "id": "z4", "label": "Amazon FSx for Lustre" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "CloudFront for edge, ElastiCache for app cache, DAX for DynamoDB, FSx for HPC file systems."
  },  {
    "id": 134,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q134).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },  {
    "id": 135,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q135).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },  {
    "id": 136,
    "type": "single",
    "domain": "Design High-Performing Architectures",
    "prompt": "Which AWS service or feature best improves performance for the described scenario (Q136)?",
    "scenario": "<div class=\"scenario-text\"><p>A high-traffic application requires optimized latency and throughput for global users or intensive workloads.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon CloudFront or ElastiCache" },
      { "id": "b", "text": "Single AZ deployment without caching" },
      { "id": "c", "text": "Disabling all performance features" },
      { "id": "d", "text": "Using only the smallest instance type" }
    ],
    "correct": ["a"],
    "explanation": "CloudFront and ElastiCache are primary tools for improving performance through edge caching and in-memory acceleration."
  },  {
    "id": 137,
    "type": "multiselect",
    "domain": "Design High-Performing Architectures",
    "prompt": "Select TWO techniques that improve performance for a read-heavy or global workload (Q137).",
    "scenario": "<div class=\"scenario-text\"><p>Users experience high latency or the database is under heavy read load.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Add Amazon CloudFront or regional read replicas" },
      { "id": "b", "text": "Introduce Amazon ElastiCache or DAX" },
      { "id": "c", "text": "Disable caching and use a single Region" },
      { "id": "d", "text": "Always use the largest instance without metrics" },
      { "id": "e", "text": "Remove load balancers" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Edge caching, read replicas, and in-memory caches are proven performance levers."
  },  {
    "id": 138,
    "type": "dragdrop",
    "domain": "Design High-Performing Architectures",
    "prompt": "Match the performance optimization to the AWS service that enables it (Q138).",
    "scenario": "<div class=\"scenario-text\"><p>Align common performance techniques with the correct service.</p></div>",
    "items": [
      { "id": "i1", "text": "Edge caching of static content" },
      { "id": "i2", "text": "In-memory application caching" },
      { "id": "i3", "text": "Microsecond DynamoDB acceleration" },
      { "id": "i4", "text": "High-performance shared file system" }
    ],
    "zones": [
      { "id": "z1", "label": "Amazon CloudFront" },
      { "id": "z2", "label": "Amazon ElastiCache" },
      { "id": "z3", "label": "Amazon DynamoDB DAX" },
      { "id": "z4", "label": "Amazon FSx for Lustre" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "CloudFront for edge, ElastiCache for app cache, DAX for DynamoDB, FSx for HPC file systems."
  },  {
    "id": 139,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q139).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },  {
    "id": 140,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q140).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },  {
    "id": 141,
    "type": "single",
    "domain": "Design High-Performing Architectures",
    "prompt": "Which AWS service or feature best improves performance for the described scenario (Q141)?",
    "scenario": "<div class=\"scenario-text\"><p>A high-traffic application requires optimized latency and throughput for global users or intensive workloads.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon CloudFront or ElastiCache" },
      { "id": "b", "text": "Single AZ deployment without caching" },
      { "id": "c", "text": "Disabling all performance features" },
      { "id": "d", "text": "Using only the smallest instance type" }
    ],
    "correct": ["a"],
    "explanation": "CloudFront and ElastiCache are primary tools for improving performance through edge caching and in-memory acceleration."
  },  {
    "id": 142,
    "type": "multiselect",
    "domain": "Design High-Performing Architectures",
    "prompt": "Select TWO techniques that improve performance for a read-heavy or global workload (Q142).",
    "scenario": "<div class=\"scenario-text\"><p>Users experience high latency or the database is under heavy read load.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Add Amazon CloudFront or regional read replicas" },
      { "id": "b", "text": "Introduce Amazon ElastiCache or DAX" },
      { "id": "c", "text": "Disable caching and use a single Region" },
      { "id": "d", "text": "Always use the largest instance without metrics" },
      { "id": "e", "text": "Remove load balancers" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Edge caching, read replicas, and in-memory caches are proven performance levers."
  },  {
    "id": 143,
    "type": "dragdrop",
    "domain": "Design High-Performing Architectures",
    "prompt": "Match the performance optimization to the AWS service that enables it (Q143).",
    "scenario": "<div class=\"scenario-text\"><p>Align common performance techniques with the correct service.</p></div>",
    "items": [
      { "id": "i1", "text": "Edge caching of static content" },
      { "id": "i2", "text": "In-memory application caching" },
      { "id": "i3", "text": "Microsecond DynamoDB acceleration" },
      { "id": "i4", "text": "High-performance shared file system" }
    ],
    "zones": [
      { "id": "z1", "label": "Amazon CloudFront" },
      { "id": "z2", "label": "Amazon ElastiCache" },
      { "id": "z3", "label": "Amazon DynamoDB DAX" },
      { "id": "z4", "label": "Amazon FSx for Lustre" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "CloudFront for edge, ElastiCache for app cache, DAX for DynamoDB, FSx for HPC file systems."
  },  {
    "id": 144,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q144).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },  {
    "id": 145,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q145).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },  {
    "id": 146,
    "type": "single",
    "domain": "Design High-Performing Architectures",
    "prompt": "Which AWS service or feature best improves performance for the described scenario (Q146)?",
    "scenario": "<div class=\"scenario-text\"><p>A high-traffic application requires optimized latency and throughput for global users or intensive workloads.</p></div>",
    "options": [
      { "id": "a", "text": "Amazon CloudFront or ElastiCache" },
      { "id": "b", "text": "Single AZ deployment without caching" },
      { "id": "c", "text": "Disabling all performance features" },
      { "id": "d", "text": "Using only the smallest instance type" }
    ],
    "correct": ["a"],
    "explanation": "CloudFront and ElastiCache are primary tools for improving performance through edge caching and in-memory acceleration."
  },  {
    "id": 147,
    "type": "multiselect",
    "domain": "Design High-Performing Architectures",
    "prompt": "Select TWO techniques that improve performance for a read-heavy or global workload (Q147).",
    "scenario": "<div class=\"scenario-text\"><p>Users experience high latency or the database is under heavy read load.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Add Amazon CloudFront or regional read replicas" },
      { "id": "b", "text": "Introduce Amazon ElastiCache or DAX" },
      { "id": "c", "text": "Disable caching and use a single Region" },
      { "id": "d", "text": "Always use the largest instance without metrics" },
      { "id": "e", "text": "Remove load balancers" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Edge caching, read replicas, and in-memory caches are proven performance levers."
  },  {
    "id": 148,
    "type": "dragdrop",
    "domain": "Design High-Performing Architectures",
    "prompt": "Match the performance optimization to the AWS service that enables it (Q148).",
    "scenario": "<div class=\"scenario-text\"><p>Align common performance techniques with the correct service.</p></div>",
    "items": [
      { "id": "i1", "text": "Edge caching of static content" },
      { "id": "i2", "text": "In-memory application caching" },
      { "id": "i3", "text": "Microsecond DynamoDB acceleration" },
      { "id": "i4", "text": "High-performance shared file system" }
    ],
    "zones": [
      { "id": "z1", "label": "Amazon CloudFront" },
      { "id": "z2", "label": "Amazon ElastiCache" },
      { "id": "z3", "label": "Amazon DynamoDB DAX" },
      { "id": "z4", "label": "Amazon FSx for Lustre" }
    ],
    "correct": {
      "z1": ["i1"],
      "z2": ["i2"],
      "z3": ["i3"],
      "z4": ["i4"]
    },
    "explanation": "CloudFront for edge, ElastiCache for app cache, DAX for DynamoDB, FSx for HPC file systems."
  },  {
    "id": 149,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q149).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },  {
    "id": 150,
    "type": "hotspot",
    "domain": "Design High-Performing Architectures",
    "prompt": "Click the component that should be used to improve performance for the described workload (Q150).",
    "scenario": "<div class=\"scenario-text\"><p>Global users or high-throughput access patterns require optimization.</p></div>",
    "nodes": [
      { "id": "cf", "label": "CloudFront", "x": 25, "y": 40 },
      { "id": "ec", "label": "ElastiCache", "x": 55, "y": 40 },
      { "id": "s3", "label": "S3", "x": 85, "y": 40 }
    ],
    "correct": ["cf"],
    "explanation": "CloudFront is the primary edge performance accelerator for global content delivery."
  },  {
    "id": 151,
    "type": "single",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Which approach most effectively reduces cost for the described steady or variable workload (Q151)?",
    "scenario": "<div class=\"scenario-text\"><p>The workload has predictable or interruptible characteristics that allow cost optimization.</p></div>",
    "options": [
      { "id": "a", "text": "Savings Plans, Reserved Instances, Spot, or right-sizing as appropriate" },
      { "id": "b", "text": "Always use On-Demand of the largest size" },
      { "id": "c", "text": "Disable all monitoring and Auto Scaling" },
      { "id": "d", "text": "Store everything in S3 Standard without lifecycle" }
    ],
    "correct": ["a"],
    "explanation": "Matching the pricing model and size to the workload is the foundation of cost optimization."
  },  {
    "id": 152,
    "type": "multiselect",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Select TWO cost-optimization strategies appropriate for the described environment (Q152).",
    "scenario": "<div class=\"scenario-text\"><p>The team needs to reduce spend while maintaining required performance and availability.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Right-size resources based on metrics and Compute Optimizer" },
      { "id": "b", "text": "Use Savings Plans / Reserved Instances for steady baseline capacity" },
      { "id": "c", "text": "Always provision maximum capacity with no monitoring" },
      { "id": "d", "text": "Disable Multi-AZ and backups for production" },
      { "id": "e", "text": "Leave all non-production instances running 24x7" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Right-sizing and commitment discounts are core, high-impact cost levers."
  },  {
    "id": 153,
    "type": "dragdrop",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Match the cost-optimization technique to the resource or scenario it best addresses (Q153).",
    "scenario": "<div class=\"scenario-text\"><p>Align techniques with the situations they optimize.</p></div>",
    "items": [
      { "id": "t1", "text": "Savings Plans / Reserved Instances" },
      { "id": "t2", "text": "Spot Instances" },
      { "id": "t3", "text": "S3 Intelligent-Tiering / Lifecycle" },
      { "id": "t4", "text": "Scheduled start/stop" }
    ],
    "zones": [
      { "id": "z1", "label": "Steady-state non-interruptible compute" },
      { "id": "z2", "label": "Interruptible / flexible batch workloads" },
      { "id": "z3", "label": "Object storage with varying access patterns" },
      { "id": "z4", "label": "Non-production environments used only during business hours" }
    ],
    "correct": {
      "z1": ["t1"],
      "z2": ["t2"],
      "z3": ["t3"],
      "z4": ["t4"]
    },
    "explanation": "Commitments for steady, Spot for flexible, Intelligent-Tiering for S3, scheduling for non-prod."
  },  {
    "id": 154,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q154).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 155,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q155).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 156,
    "type": "single",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Which approach most effectively reduces cost for the described steady or variable workload (Q156)?",
    "scenario": "<div class=\"scenario-text\"><p>The workload has predictable or interruptible characteristics that allow cost optimization.</p></div>",
    "options": [
      { "id": "a", "text": "Savings Plans, Reserved Instances, Spot, or right-sizing as appropriate" },
      { "id": "b", "text": "Always use On-Demand of the largest size" },
      { "id": "c", "text": "Disable all monitoring and Auto Scaling" },
      { "id": "d", "text": "Store everything in S3 Standard without lifecycle" }
    ],
    "correct": ["a"],
    "explanation": "Matching the pricing model and size to the workload is the foundation of cost optimization."
  },  {
    "id": 157,
    "type": "multiselect",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Select TWO cost-optimization strategies appropriate for the described environment (Q157).",
    "scenario": "<div class=\"scenario-text\"><p>The team needs to reduce spend while maintaining required performance and availability.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Right-size resources based on metrics and Compute Optimizer" },
      { "id": "b", "text": "Use Savings Plans / Reserved Instances for steady baseline capacity" },
      { "id": "c", "text": "Always provision maximum capacity with no monitoring" },
      { "id": "d", "text": "Disable Multi-AZ and backups for production" },
      { "id": "e", "text": "Leave all non-production instances running 24x7" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Right-sizing and commitment discounts are core, high-impact cost levers."
  },  {
    "id": 158,
    "type": "dragdrop",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Match the cost-optimization technique to the resource or scenario it best addresses (Q158).",
    "scenario": "<div class=\"scenario-text\"><p>Align techniques with the situations they optimize.</p></div>",
    "items": [
      { "id": "t1", "text": "Savings Plans / Reserved Instances" },
      { "id": "t2", "text": "Spot Instances" },
      { "id": "t3", "text": "S3 Intelligent-Tiering / Lifecycle" },
      { "id": "t4", "text": "Scheduled start/stop" }
    ],
    "zones": [
      { "id": "z1", "label": "Steady-state non-interruptible compute" },
      { "id": "z2", "label": "Interruptible / flexible batch workloads" },
      { "id": "z3", "label": "Object storage with varying access patterns" },
      { "id": "z4", "label": "Non-production environments used only during business hours" }
    ],
    "correct": {
      "z1": ["t1"],
      "z2": ["t2"],
      "z3": ["t3"],
      "z4": ["t4"]
    },
    "explanation": "Commitments for steady, Spot for flexible, Intelligent-Tiering for S3, scheduling for non-prod."
  },  {
    "id": 159,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q159).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 160,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q160).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 161,
    "type": "single",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Which approach most effectively reduces cost for the described steady or variable workload (Q161)?",
    "scenario": "<div class=\"scenario-text\"><p>The workload has predictable or interruptible characteristics that allow cost optimization.</p></div>",
    "options": [
      { "id": "a", "text": "Savings Plans, Reserved Instances, Spot, or right-sizing as appropriate" },
      { "id": "b", "text": "Always use On-Demand of the largest size" },
      { "id": "c", "text": "Disable all monitoring and Auto Scaling" },
      { "id": "d", "text": "Store everything in S3 Standard without lifecycle" }
    ],
    "correct": ["a"],
    "explanation": "Matching the pricing model and size to the workload is the foundation of cost optimization."
  },  {
    "id": 162,
    "type": "multiselect",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Select TWO cost-optimization strategies appropriate for the described environment (Q162).",
    "scenario": "<div class=\"scenario-text\"><p>The team needs to reduce spend while maintaining required performance and availability.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Right-size resources based on metrics and Compute Optimizer" },
      { "id": "b", "text": "Use Savings Plans / Reserved Instances for steady baseline capacity" },
      { "id": "c", "text": "Always provision maximum capacity with no monitoring" },
      { "id": "d", "text": "Disable Multi-AZ and backups for production" },
      { "id": "e", "text": "Leave all non-production instances running 24x7" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Right-sizing and commitment discounts are core, high-impact cost levers."
  },  {
    "id": 163,
    "type": "dragdrop",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Match the cost-optimization technique to the resource or scenario it best addresses (Q163).",
    "scenario": "<div class=\"scenario-text\"><p>Align techniques with the situations they optimize.</p></div>",
    "items": [
      { "id": "t1", "text": "Savings Plans / Reserved Instances" },
      { "id": "t2", "text": "Spot Instances" },
      { "id": "t3", "text": "S3 Intelligent-Tiering / Lifecycle" },
      { "id": "t4", "text": "Scheduled start/stop" }
    ],
    "zones": [
      { "id": "z1", "label": "Steady-state non-interruptible compute" },
      { "id": "z2", "label": "Interruptible / flexible batch workloads" },
      { "id": "z3", "label": "Object storage with varying access patterns" },
      { "id": "z4", "label": "Non-production environments used only during business hours" }
    ],
    "correct": {
      "z1": ["t1"],
      "z2": ["t2"],
      "z3": ["t3"],
      "z4": ["t4"]
    },
    "explanation": "Commitments for steady, Spot for flexible, Intelligent-Tiering for S3, scheduling for non-prod."
  },  {
    "id": 164,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q164).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 165,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q165).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 166,
    "type": "single",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Which approach most effectively reduces cost for the described steady or variable workload (Q166)?",
    "scenario": "<div class=\"scenario-text\"><p>The workload has predictable or interruptible characteristics that allow cost optimization.</p></div>",
    "options": [
      { "id": "a", "text": "Savings Plans, Reserved Instances, Spot, or right-sizing as appropriate" },
      { "id": "b", "text": "Always use On-Demand of the largest size" },
      { "id": "c", "text": "Disable all monitoring and Auto Scaling" },
      { "id": "d", "text": "Store everything in S3 Standard without lifecycle" }
    ],
    "correct": ["a"],
    "explanation": "Matching the pricing model and size to the workload is the foundation of cost optimization."
  },  {
    "id": 167,
    "type": "multiselect",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Select TWO cost-optimization strategies appropriate for the described environment (Q167).",
    "scenario": "<div class=\"scenario-text\"><p>The team needs to reduce spend while maintaining required performance and availability.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Right-size resources based on metrics and Compute Optimizer" },
      { "id": "b", "text": "Use Savings Plans / Reserved Instances for steady baseline capacity" },
      { "id": "c", "text": "Always provision maximum capacity with no monitoring" },
      { "id": "d", "text": "Disable Multi-AZ and backups for production" },
      { "id": "e", "text": "Leave all non-production instances running 24x7" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Right-sizing and commitment discounts are core, high-impact cost levers."
  },  {
    "id": 168,
    "type": "dragdrop",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Match the cost-optimization technique to the resource or scenario it best addresses (Q168).",
    "scenario": "<div class=\"scenario-text\"><p>Align techniques with the situations they optimize.</p></div>",
    "items": [
      { "id": "t1", "text": "Savings Plans / Reserved Instances" },
      { "id": "t2", "text": "Spot Instances" },
      { "id": "t3", "text": "S3 Intelligent-Tiering / Lifecycle" },
      { "id": "t4", "text": "Scheduled start/stop" }
    ],
    "zones": [
      { "id": "z1", "label": "Steady-state non-interruptible compute" },
      { "id": "z2", "label": "Interruptible / flexible batch workloads" },
      { "id": "z3", "label": "Object storage with varying access patterns" },
      { "id": "z4", "label": "Non-production environments used only during business hours" }
    ],
    "correct": {
      "z1": ["t1"],
      "z2": ["t2"],
      "z3": ["t3"],
      "z4": ["t4"]
    },
    "explanation": "Commitments for steady, Spot for flexible, Intelligent-Tiering for S3, scheduling for non-prod."
  },  {
    "id": 169,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q169).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 170,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q170).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 171,
    "type": "single",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Which approach most effectively reduces cost for the described steady or variable workload (Q171)?",
    "scenario": "<div class=\"scenario-text\"><p>The workload has predictable or interruptible characteristics that allow cost optimization.</p></div>",
    "options": [
      { "id": "a", "text": "Savings Plans, Reserved Instances, Spot, or right-sizing as appropriate" },
      { "id": "b", "text": "Always use On-Demand of the largest size" },
      { "id": "c", "text": "Disable all monitoring and Auto Scaling" },
      { "id": "d", "text": "Store everything in S3 Standard without lifecycle" }
    ],
    "correct": ["a"],
    "explanation": "Matching the pricing model and size to the workload is the foundation of cost optimization."
  },  {
    "id": 172,
    "type": "multiselect",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Select TWO cost-optimization strategies appropriate for the described environment (Q172).",
    "scenario": "<div class=\"scenario-text\"><p>The team needs to reduce spend while maintaining required performance and availability.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Right-size resources based on metrics and Compute Optimizer" },
      { "id": "b", "text": "Use Savings Plans / Reserved Instances for steady baseline capacity" },
      { "id": "c", "text": "Always provision maximum capacity with no monitoring" },
      { "id": "d", "text": "Disable Multi-AZ and backups for production" },
      { "id": "e", "text": "Leave all non-production instances running 24x7" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Right-sizing and commitment discounts are core, high-impact cost levers."
  },  {
    "id": 173,
    "type": "dragdrop",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Match the cost-optimization technique to the resource or scenario it best addresses (Q173).",
    "scenario": "<div class=\"scenario-text\"><p>Align techniques with the situations they optimize.</p></div>",
    "items": [
      { "id": "t1", "text": "Savings Plans / Reserved Instances" },
      { "id": "t2", "text": "Spot Instances" },
      { "id": "t3", "text": "S3 Intelligent-Tiering / Lifecycle" },
      { "id": "t4", "text": "Scheduled start/stop" }
    ],
    "zones": [
      { "id": "z1", "label": "Steady-state non-interruptible compute" },
      { "id": "z2", "label": "Interruptible / flexible batch workloads" },
      { "id": "z3", "label": "Object storage with varying access patterns" },
      { "id": "z4", "label": "Non-production environments used only during business hours" }
    ],
    "correct": {
      "z1": ["t1"],
      "z2": ["t2"],
      "z3": ["t3"],
      "z4": ["t4"]
    },
    "explanation": "Commitments for steady, Spot for flexible, Intelligent-Tiering for S3, scheduling for non-prod."
  },  {
    "id": 174,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q174).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 175,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q175).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 176,
    "type": "single",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Which approach most effectively reduces cost for the described steady or variable workload (Q176)?",
    "scenario": "<div class=\"scenario-text\"><p>The workload has predictable or interruptible characteristics that allow cost optimization.</p></div>",
    "options": [
      { "id": "a", "text": "Savings Plans, Reserved Instances, Spot, or right-sizing as appropriate" },
      { "id": "b", "text": "Always use On-Demand of the largest size" },
      { "id": "c", "text": "Disable all monitoring and Auto Scaling" },
      { "id": "d", "text": "Store everything in S3 Standard without lifecycle" }
    ],
    "correct": ["a"],
    "explanation": "Matching the pricing model and size to the workload is the foundation of cost optimization."
  },  {
    "id": 177,
    "type": "multiselect",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Select TWO cost-optimization strategies appropriate for the described environment (Q177).",
    "scenario": "<div class=\"scenario-text\"><p>The team needs to reduce spend while maintaining required performance and availability.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Right-size resources based on metrics and Compute Optimizer" },
      { "id": "b", "text": "Use Savings Plans / Reserved Instances for steady baseline capacity" },
      { "id": "c", "text": "Always provision maximum capacity with no monitoring" },
      { "id": "d", "text": "Disable Multi-AZ and backups for production" },
      { "id": "e", "text": "Leave all non-production instances running 24x7" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Right-sizing and commitment discounts are core, high-impact cost levers."
  },  {
    "id": 178,
    "type": "dragdrop",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Match the cost-optimization technique to the resource or scenario it best addresses (Q178).",
    "scenario": "<div class=\"scenario-text\"><p>Align techniques with the situations they optimize.</p></div>",
    "items": [
      { "id": "t1", "text": "Savings Plans / Reserved Instances" },
      { "id": "t2", "text": "Spot Instances" },
      { "id": "t3", "text": "S3 Intelligent-Tiering / Lifecycle" },
      { "id": "t4", "text": "Scheduled start/stop" }
    ],
    "zones": [
      { "id": "z1", "label": "Steady-state non-interruptible compute" },
      { "id": "z2", "label": "Interruptible / flexible batch workloads" },
      { "id": "z3", "label": "Object storage with varying access patterns" },
      { "id": "z4", "label": "Non-production environments used only during business hours" }
    ],
    "correct": {
      "z1": ["t1"],
      "z2": ["t2"],
      "z3": ["t3"],
      "z4": ["t4"]
    },
    "explanation": "Commitments for steady, Spot for flexible, Intelligent-Tiering for S3, scheduling for non-prod."
  },  {
    "id": 179,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q179).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 180,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q180).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 181,
    "type": "single",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Which approach most effectively reduces cost for the described steady or variable workload (Q181)?",
    "scenario": "<div class=\"scenario-text\"><p>The workload has predictable or interruptible characteristics that allow cost optimization.</p></div>",
    "options": [
      { "id": "a", "text": "Savings Plans, Reserved Instances, Spot, or right-sizing as appropriate" },
      { "id": "b", "text": "Always use On-Demand of the largest size" },
      { "id": "c", "text": "Disable all monitoring and Auto Scaling" },
      { "id": "d", "text": "Store everything in S3 Standard without lifecycle" }
    ],
    "correct": ["a"],
    "explanation": "Matching the pricing model and size to the workload is the foundation of cost optimization."
  },  {
    "id": 182,
    "type": "multiselect",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Select TWO cost-optimization strategies appropriate for the described environment (Q182).",
    "scenario": "<div class=\"scenario-text\"><p>The team needs to reduce spend while maintaining required performance and availability.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Right-size resources based on metrics and Compute Optimizer" },
      { "id": "b", "text": "Use Savings Plans / Reserved Instances for steady baseline capacity" },
      { "id": "c", "text": "Always provision maximum capacity with no monitoring" },
      { "id": "d", "text": "Disable Multi-AZ and backups for production" },
      { "id": "e", "text": "Leave all non-production instances running 24x7" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Right-sizing and commitment discounts are core, high-impact cost levers."
  },  {
    "id": 183,
    "type": "dragdrop",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Match the cost-optimization technique to the resource or scenario it best addresses (Q183).",
    "scenario": "<div class=\"scenario-text\"><p>Align techniques with the situations they optimize.</p></div>",
    "items": [
      { "id": "t1", "text": "Savings Plans / Reserved Instances" },
      { "id": "t2", "text": "Spot Instances" },
      { "id": "t3", "text": "S3 Intelligent-Tiering / Lifecycle" },
      { "id": "t4", "text": "Scheduled start/stop" }
    ],
    "zones": [
      { "id": "z1", "label": "Steady-state non-interruptible compute" },
      { "id": "z2", "label": "Interruptible / flexible batch workloads" },
      { "id": "z3", "label": "Object storage with varying access patterns" },
      { "id": "z4", "label": "Non-production environments used only during business hours" }
    ],
    "correct": {
      "z1": ["t1"],
      "z2": ["t2"],
      "z3": ["t3"],
      "z4": ["t4"]
    },
    "explanation": "Commitments for steady, Spot for flexible, Intelligent-Tiering for S3, scheduling for non-prod."
  },  {
    "id": 184,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q184).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 185,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q185).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 186,
    "type": "single",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Which approach most effectively reduces cost for the described steady or variable workload (Q186)?",
    "scenario": "<div class=\"scenario-text\"><p>The workload has predictable or interruptible characteristics that allow cost optimization.</p></div>",
    "options": [
      { "id": "a", "text": "Savings Plans, Reserved Instances, Spot, or right-sizing as appropriate" },
      { "id": "b", "text": "Always use On-Demand of the largest size" },
      { "id": "c", "text": "Disable all monitoring and Auto Scaling" },
      { "id": "d", "text": "Store everything in S3 Standard without lifecycle" }
    ],
    "correct": ["a"],
    "explanation": "Matching the pricing model and size to the workload is the foundation of cost optimization."
  },  {
    "id": 187,
    "type": "multiselect",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Select TWO cost-optimization strategies appropriate for the described environment (Q187).",
    "scenario": "<div class=\"scenario-text\"><p>The team needs to reduce spend while maintaining required performance and availability.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Right-size resources based on metrics and Compute Optimizer" },
      { "id": "b", "text": "Use Savings Plans / Reserved Instances for steady baseline capacity" },
      { "id": "c", "text": "Always provision maximum capacity with no monitoring" },
      { "id": "d", "text": "Disable Multi-AZ and backups for production" },
      { "id": "e", "text": "Leave all non-production instances running 24x7" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Right-sizing and commitment discounts are core, high-impact cost levers."
  },  {
    "id": 188,
    "type": "dragdrop",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Match the cost-optimization technique to the resource or scenario it best addresses (Q188).",
    "scenario": "<div class=\"scenario-text\"><p>Align techniques with the situations they optimize.</p></div>",
    "items": [
      { "id": "t1", "text": "Savings Plans / Reserved Instances" },
      { "id": "t2", "text": "Spot Instances" },
      { "id": "t3", "text": "S3 Intelligent-Tiering / Lifecycle" },
      { "id": "t4", "text": "Scheduled start/stop" }
    ],
    "zones": [
      { "id": "z1", "label": "Steady-state non-interruptible compute" },
      { "id": "z2", "label": "Interruptible / flexible batch workloads" },
      { "id": "z3", "label": "Object storage with varying access patterns" },
      { "id": "z4", "label": "Non-production environments used only during business hours" }
    ],
    "correct": {
      "z1": ["t1"],
      "z2": ["t2"],
      "z3": ["t3"],
      "z4": ["t4"]
    },
    "explanation": "Commitments for steady, Spot for flexible, Intelligent-Tiering for S3, scheduling for non-prod."
  },  {
    "id": 189,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q189).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 190,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q190).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 191,
    "type": "single",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Which approach most effectively reduces cost for the described steady or variable workload (Q191)?",
    "scenario": "<div class=\"scenario-text\"><p>The workload has predictable or interruptible characteristics that allow cost optimization.</p></div>",
    "options": [
      { "id": "a", "text": "Savings Plans, Reserved Instances, Spot, or right-sizing as appropriate" },
      { "id": "b", "text": "Always use On-Demand of the largest size" },
      { "id": "c", "text": "Disable all monitoring and Auto Scaling" },
      { "id": "d", "text": "Store everything in S3 Standard without lifecycle" }
    ],
    "correct": ["a"],
    "explanation": "Matching the pricing model and size to the workload is the foundation of cost optimization."
  },  {
    "id": 192,
    "type": "multiselect",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Select TWO cost-optimization strategies appropriate for the described environment (Q192).",
    "scenario": "<div class=\"scenario-text\"><p>The team needs to reduce spend while maintaining required performance and availability.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Right-size resources based on metrics and Compute Optimizer" },
      { "id": "b", "text": "Use Savings Plans / Reserved Instances for steady baseline capacity" },
      { "id": "c", "text": "Always provision maximum capacity with no monitoring" },
      { "id": "d", "text": "Disable Multi-AZ and backups for production" },
      { "id": "e", "text": "Leave all non-production instances running 24x7" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Right-sizing and commitment discounts are core, high-impact cost levers."
  },  {
    "id": 193,
    "type": "dragdrop",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Match the cost-optimization technique to the resource or scenario it best addresses (Q193).",
    "scenario": "<div class=\"scenario-text\"><p>Align techniques with the situations they optimize.</p></div>",
    "items": [
      { "id": "t1", "text": "Savings Plans / Reserved Instances" },
      { "id": "t2", "text": "Spot Instances" },
      { "id": "t3", "text": "S3 Intelligent-Tiering / Lifecycle" },
      { "id": "t4", "text": "Scheduled start/stop" }
    ],
    "zones": [
      { "id": "z1", "label": "Steady-state non-interruptible compute" },
      { "id": "z2", "label": "Interruptible / flexible batch workloads" },
      { "id": "z3", "label": "Object storage with varying access patterns" },
      { "id": "z4", "label": "Non-production environments used only during business hours" }
    ],
    "correct": {
      "z1": ["t1"],
      "z2": ["t2"],
      "z3": ["t3"],
      "z4": ["t4"]
    },
    "explanation": "Commitments for steady, Spot for flexible, Intelligent-Tiering for S3, scheduling for non-prod."
  },  {
    "id": 194,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q194).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 195,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q195).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 196,
    "type": "single",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Which approach most effectively reduces cost for the described steady or variable workload (Q196)?",
    "scenario": "<div class=\"scenario-text\"><p>The workload has predictable or interruptible characteristics that allow cost optimization.</p></div>",
    "options": [
      { "id": "a", "text": "Savings Plans, Reserved Instances, Spot, or right-sizing as appropriate" },
      { "id": "b", "text": "Always use On-Demand of the largest size" },
      { "id": "c", "text": "Disable all monitoring and Auto Scaling" },
      { "id": "d", "text": "Store everything in S3 Standard without lifecycle" }
    ],
    "correct": ["a"],
    "explanation": "Matching the pricing model and size to the workload is the foundation of cost optimization."
  },  {
    "id": 197,
    "type": "multiselect",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Select TWO cost-optimization strategies appropriate for the described environment (Q197).",
    "scenario": "<div class=\"scenario-text\"><p>The team needs to reduce spend while maintaining required performance and availability.</p></div><div class=\"requirements-box\"><h3>Select exactly TWO</h3></div>",
    "options": [
      { "id": "a", "text": "Right-size resources based on metrics and Compute Optimizer" },
      { "id": "b", "text": "Use Savings Plans / Reserved Instances for steady baseline capacity" },
      { "id": "c", "text": "Always provision maximum capacity with no monitoring" },
      { "id": "d", "text": "Disable Multi-AZ and backups for production" },
      { "id": "e", "text": "Leave all non-production instances running 24x7" }
    ],
    "correct": ["a", "b"],
    "selectCount": 2,
    "explanation": "Right-sizing and commitment discounts are core, high-impact cost levers."
  },  {
    "id": 198,
    "type": "dragdrop",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Match the cost-optimization technique to the resource or scenario it best addresses (Q198).",
    "scenario": "<div class=\"scenario-text\"><p>Align techniques with the situations they optimize.</p></div>",
    "items": [
      { "id": "t1", "text": "Savings Plans / Reserved Instances" },
      { "id": "t2", "text": "Spot Instances" },
      { "id": "t3", "text": "S3 Intelligent-Tiering / Lifecycle" },
      { "id": "t4", "text": "Scheduled start/stop" }
    ],
    "zones": [
      { "id": "z1", "label": "Steady-state non-interruptible compute" },
      { "id": "z2", "label": "Interruptible / flexible batch workloads" },
      { "id": "z3", "label": "Object storage with varying access patterns" },
      { "id": "z4", "label": "Non-production environments used only during business hours" }
    ],
    "correct": {
      "z1": ["t1"],
      "z2": ["t2"],
      "z3": ["t3"],
      "z4": ["t4"]
    },
    "explanation": "Commitments for steady, Spot for flexible, Intelligent-Tiering for S3, scheduling for non-prod."
  },  {
    "id": 199,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q199).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  },  {
    "id": 200,
    "type": "hotspot",
    "domain": "Design Cost-Optimized Architectures",
    "prompt": "Click the storage class or purchasing option that provides the lowest cost for the described access pattern or workload (Q200).",
    "scenario": "<div class=\"scenario-text\"><p>Data is rarely accessed or the workload can tolerate interruption.</p></div>",
    "nodes": [
      { "id": "deep", "label": "Glacier\nDeep Archive", "x": 25, "y": 40 },
      { "id": "std", "label": "S3\nStandard", "x": 55, "y": 40 },
      { "id": "od", "label": "On-Demand", "x": 85, "y": 40 }
    ],
    "correct": ["deep"],
    "explanation": "Glacier Deep Archive is the lowest-cost class for rarely accessed archival data."
  }
];
export default questions;