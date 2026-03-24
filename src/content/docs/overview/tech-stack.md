---
title: Technology stack
description: The full technology stack behind EcomPilot PL — from Next.js and React Native on the frontend to Fastify, PostgreSQL, and NATS JetStream on the backend.
---

EcomPilot PL is built on a modern, production-grade stack optimized for performance, developer experience, and operational reliability. This page documents every major technology used across the platform.

## Frontend

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 14 | Server-side rendering, routing, and API routes for the web and admin apps |
| **React** | 18 | Component-based UI with concurrent features |
| **React Native** | Latest | Cross-platform mobile app |
| **Expo** | Latest | Build tooling, OTA updates, and native module management for mobile |
| **Tailwind CSS** | 3 | Utility-first styling with a custom design system |
| **Radix UI** | Latest | Accessible, unstyled UI primitives for complex components (dialogs, dropdowns, tooltips) |
| **Zustand** | Latest | Lightweight client-side state management |
| **React Query (TanStack Query)** | 5 | Server state management, caching, and synchronization |
| **next-intl** | Latest | Internationalization with support for EN, PL, RU, and UA locales |

## Backend

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | 20 LTS | Runtime for all microservices |
| **TypeScript** | 5 | Type safety across the entire codebase (frontend and backend) |
| **Fastify** | 5 | High-performance HTTP framework for microservices |
| **Drizzle ORM** | Latest | Type-safe SQL query builder and schema management with zero overhead |
| **PostgreSQL** | 16 | Primary transactional database (database-per-service pattern) |
| **Redis** | 7 | Caching, session storage, rate limiting, and pub/sub |
| **NATS** | 2.10 | Inter-service messaging with JetStream for durable, at-least-once event delivery |
| **ClickHouse** | Latest | Columnar analytics database for niche analysis, trend detection, and marketplace data aggregation |
| **Elasticsearch** | 8 | Full-text search across products, orders, and the legal knowledge base |
| **MinIO** | Latest | S3-compatible object storage for images, invoices, and file attachments |

## AI and machine learning

| Technology | Purpose |
|-----------|---------|
| **OpenAI GPT-4o** | AI assistant — listing descriptions, seller Q&A, business insights, and content generation |
| **Pinecone** | Vector database for retrieval-augmented generation (RAG), enabling the AI assistant to reference marketplace data and the legal knowledge base |

## External API integrations

### Marketplaces
Allegro (OAuth 2.0, REST API), Amazon SP-API, eBay REST API, Etsy OAuth API, OLX API, Vinted API, Empik Marketplace API, Erli API.

### Logistics carriers
InPost (ShipX API), DPD, DHL, Pocztex, GLS, FedEx, UPS.

### Payments and billing
**Stripe** — Subscription management, payment processing, and usage-based billing.

### Government systems
**KSeF** (National e-Invoice System) — Structured e-invoice submission and retrieval. **CEIDG / KRS / VAT whitelist** — Business partner and contractor verification.

## Observability

| Technology | Purpose |
|-----------|---------|
| **Pino** | Structured JSON logging across all microservices |
| **OpenTelemetry** | Distributed tracing instrumentation (traces, metrics, and logs) |
| **Jaeger** | Trace collection, storage, and visualization for debugging cross-service requests |
| **Prometheus** | Metrics collection and alerting (HTTP latencies, error rates, queue depths) |
| **Grafana** | Dashboards and visualization for metrics, logs, and traces |

## Testing

| Technology | Purpose |
|-----------|---------|
| **Vitest** | Unit and integration testing for all TypeScript code (frontend and backend) |
| **Supertest** | HTTP-level integration testing for Fastify microservice APIs |

## DevOps and infrastructure

| Technology | Purpose |
|-----------|---------|
| **Docker** | Containerization of all services and frontend apps |
| **Kubernetes** | Container orchestration, scaling, and service discovery |
| **Terraform** | Infrastructure as code for cloud resource provisioning |
| **ArgoCD** | GitOps-based continuous delivery to Kubernetes |
| **GitHub Actions** | CI pipelines — linting, testing, building, and publishing container images |
