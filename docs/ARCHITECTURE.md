# Architecture

## Full System View

```mermaid
flowchart TD
  U["User"] --> A["AI Coding Agent"]
  U --> D["Dashboard"]
  A --> MCP["Remote MCP Server"]
  A --> CLI["CLI"]
  D --> API["Control Plane API"]
  MCP --> API
  CLI --> API

  API --> ORG["Org and Project Service"]
  API --> BILL["Billing and Credit Ledger"]
  API --> LOG["Activity Log Service"]
  API --> COST["Cost Intelligence"]
  API --> PROV["Provisioner"]

  PROV --> CF["Cloudflare"]
  PROV --> NEON["Neon"]
  PROV --> ENTRI["Entri"]
  PROV --> COMPUTE["Fly.io / Railway"]
  PROV --> EXT["External Providers"]

  CF --> D1["D1"]
  CF --> R2["R2"]
  CF --> WFP["Workers for Platforms"]
  CF --> HOST["Custom Hostnames / SSL"]

  NEON --> PG["Postgres"]
  ENTRI --> DOMAINS["Buy / Connect Domains"]
  COMPUTE --> CONTAINERS["Long-running Compute"]
  EXT --> SERVICES["AI / Email / Crawler / Maps"]
```

## Core Services

| Service | Responsibility |
|---|---|
| Control Plane API | Main API for dashboard, CLI, MCP, and project operations |
| Project Service | Organizations, projects, keys, environments, provider mapping |
| Provisioner | Idempotent provider operations across Cloudflare, Neon, Entri, Fly/Railway |
| Database Service | D1 and Neon provisioning, schema, migrations, metadata |
| Storage Service | R2 buckets, signed URLs, file metadata |
| Function Service | Edge function deployment, secrets, routes, cron |
| Deployment Service | Edge frontend deployment and container deployment |
| Domain Service | Entri Sell, Entri Connect, Cloudflare custom hostname, SSL |
| Usage Service | Usage events, provider cost events, credit deduction |
| Admin Service | Internal super dashboard and support tools |
| MCP Server | Agent-facing infrastructure tools |
| CLI | Local developer and agent command surface |

## Deployment Strategy

```mermaid
flowchart TD
  APP["User App"] --> Q{"Deployment choice"}
  Q --> EXT["External Provider"]
  Q --> EDGE["NimblyBase Edge Deploy"]
  Q --> CONTAINER["NimblyBase Container Deploy"]

  EXT --> V["Vercel / Railway / Netlify / AWS / VPS"]
  EDGE --> W["Workers for Platforms"]
  CONTAINER --> F["Fly.io / Railway"]

  V --> BACKEND["Uses NimblyBase backend services"]
  W --> BACKEND
  F --> BACKEND
```

## Domain Strategy

```mermaid
flowchart TD
  U["User"] --> D["Domains Page"]
  D --> B{"Buy or connect"}
  B --> BUY["Buy new domain"]
  B --> CONNECT["Connect existing domain"]

  BUY --> ES["Entri Sell"]
  CONNECT --> EC["Entri Connect"]
  ES --> DNS["DNS automation"]
  EC --> DNS
  DNS --> CF["Cloudflare Custom Hostname"]
  CF --> SSL["SSL issued"]
  SSL --> LIVE["Domain live"]
```

## Provider Strategy

| Need | Provider |
|---|---|
| Light DB | Cloudflare D1 |
| Production Postgres | Neon |
| Storage | Cloudflare R2 |
| Edge functions | Cloudflare Workers for Platforms |
| Static/edge deployment | Cloudflare Workers for Platforms |
| Long-running compute | Fly.io first, Railway later |
| Domains | Entri |
| AI gateway | OpenRouter/direct providers |
| Email | Resend/Postmark first, SES later |
| Web crawler | Apify first |
| Maps | Mapbox |

