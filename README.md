# Jermaine Hunter 👋🏾  
### Identity-First Detection Engineering | Cloud & AI Security
**Design → Deploy → Defend**

<a href="https://linkedin.com/in/jermaine-hunter">
  <img src="https://img.shields.io/badge/-LinkedIn-0072B1?&style=for-the-badge&logo=linkedin&logoColor=white" />
</a>
<a href="https://www.huntercloudsec.dev/">
  <img src="https://img.shields.io/badge/-HunterCloudSec.dev-111827?&style=for-the-badge&logo=googlecloud&logoColor=white" />
</a>

---

## ⚡ Telemetry & Detection Pipeline

```mermaid
flowchart LR
    %% Subgraphs
    subgraph T [Inbound Telemetry]
        direction TB
        t1[Cloud Audit Logs]
        t2[IAM & Identity Provider]
        t3[LLM & AI Workloads]
        t4[Application & Honeypot]
    end

    subgraph D [Ingestion & Normalization]
        direction TB
        d1[Canonical Schema Parsing]
        d2[Actor • Action • Target]
        d3[Outcome • Context]
    end

    subgraph E [Threat Detection Engine]
        direction TB
        e1[Sigma Rule Matching]
        e2[MITRE ATT&CK Mapping]
        e3[Chronicle / Splunk Analytics]
    end

    subgraph P [Playbooks & Response]
        direction TB
        p1[Automated Runbooks]
        p2[Alert Scoring & Triage]
        p3[Incident Remediation]
    end

    %% Pipeline Flow
    T --> D
    D --> E
    E --> P

    %% Styling
    classDef box fill:#161b22,stroke:#30363d,stroke-width:1px,color:#c9d1d9,font-size:12px;
    classDef category fill:#0d1117,stroke:#58a6ff,stroke-width:1.5px,color:#58a6ff,font-weight:bold;

    class t1,t2,t3,t4,d1,d2,d3,e1,e2,e3,p1,p2,p3 box;
    class T,D,E,P category;
