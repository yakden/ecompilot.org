---
title: Architecture overview
description: High-level architecture of the EcomPilot PL platform — 18 microservices, event-driven messaging, API Gateway pattern, and database-per-service design.
---

EcomPilot PL follows a microservice architecture with event-driven communication, a unified API Gateway, and strict database-per-service isolation. This page provides a developer-oriented overview of how the system is structured.

## Design principles

- **Service autonomy** — Each microservice owns its data, business logic, and deployment lifecycle.
- **Event-driven communication** — Services communicate asynchronously via NATS JetStream, reducing coupling and improving resilience.
- **API Gateway pattern** — All client requests flow through a single gateway that handles authentication, rate limiting, routing, and request transformation.
- **Database-per-service** — Every service manages its own PostgreSQL schema (or dedicated database), preventing cross-service data coupling.
- **Polyglot persistence** — Services choose the best storage for their workload: PostgreSQL for transactional data, ClickHouse for analytics, Redis for caching and sessions, Elasticsearch for search, and MinIO for object storage.

## System diagram

```
┌─────────────────────────────────────────────────────┐
│                   Client applications               │
│         Web (Next.js)  ·  Admin  ·  Mobile (Expo)   │
└──────────────────────┬──────────────────────────────┘
                       │ HTTPS
                ┌──────▼──────┐
                │ API Gateway │  ← Auth, rate limiting, routing
                └──────┬──────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
   ┌────▼────┐   ┌─────▼────┐  ┌─────▼─────┐
   │ Service │   │ Service  │  │ Service   │  ... (18 services)
   │   A     │   │   B      │  │   C       │
   └────┬────┘   └─────┬────┘  └─────┬─────┘
        │              │              │
        └──────────────┼──────────────┘
                       │
              ┌────────▼────────┐
              │  NATS JetStream │  ← Event bus
              └─────────────────┘
```

## Frontend applications

| Application | Technology | Purpose |
|-------------|-----------|---------|
| **Web app** | Next.js 14, React 18, Tailwind CSS | Primary seller dashboard, all 16 modules |
| **Admin panel** | Next.js 14, React 18 | Internal operations, user management, platform monitoring |
| **Mobile app** | React Native, Expo | On-the-go order management, notifications, quick actions |

All frontend apps communicate exclusively with the API Gateway. They share a common design system built on Radix UI primitives and Tailwind CSS.

## The 18 microservices

Each service is a standalone Fastify 5 application with its own database, event subscriptions, and API routes.

| # | Service | Responsibility |
|---|---------|---------------|
| 1 | **api-gateway** | Request routing, authentication, rate limiting, request/response transformation |
| 2 | **auth-service** | User registration, login, OAuth flows, JWT token management, sessions |
| 3 | **user-service** | User profiles, preferences, language settings, team management |
| 4 | **marketplace-service** | Marketplace credential management, OAuth tokens, API connection health |
| 5 | **product-service** | Product catalog, listing creation, bulk operations, cross-marketplace sync |
| 6 | **inventory-service** | Multi-warehouse stock tracking, stock reservations, low-stock alerts |
| 7 | **order-service** | Order ingestion from marketplaces, status management, fulfillment workflows |
| 8 | **shipping-service** | Carrier integration (7 carriers), label generation, shipment tracking |
| 9 | **invoice-service** | KSeF e-invoice generation, submission, and compliance |
| 10 | **analytics-service** | Niche analysis, product research, trend detection (ClickHouse-backed) |
| 11 | **pricing-service** | Competitor price monitoring, price history, alert rules |
| 12 | **ads-service** | Advertising campaign management and optimization |
| 13 | **review-service** | Review aggregation, sentiment analysis, automated responses |
| 14 | **contractor-service** | Business partner verification against CEIDG, KRS, VAT whitelist |
| 15 | **notification-service** | Email, in-app, and push notifications with configurable rules |
| 16 | **ai-service** | GPT-4o integration, prompt management, RAG with Pinecone |
| 17 | **search-service** | Full-text search across products, orders, and knowledge base (Elasticsearch) |
| 18 | **media-service** | Image and file upload, processing, and storage (MinIO) |

## Event-driven communication

Services publish domain events to NATS JetStream streams. Interested services subscribe to relevant subjects and process events asynchronously.

**Example flow — New order received:**

1. `marketplace-service` polls Allegro API and detects a new order.
2. It publishes an `order.created` event to the `ORDERS` stream.
3. `order-service` consumes the event, persists the order, and publishes `order.confirmed`.
4. `inventory-service` consumes `order.confirmed` and decrements stock.
5. `notification-service` consumes `order.confirmed` and sends the seller an alert.
6. `analytics-service` consumes the event for real-time sales dashboards.

This decoupled design means adding new consumers (for example, a future accounting service) requires zero changes to existing services.

## Data storage

| Store | Use case | Services |
|-------|----------|----------|
| **PostgreSQL 16** | Transactional data, user records, orders, products | All services (database-per-service) |
| **ClickHouse** | Analytical queries, marketplace data aggregation, trend analysis | analytics-service |
| **Redis 7** | Session storage, caching, rate limiting, pub/sub for real-time features | api-gateway, auth-service, and others |
| **Elasticsearch** | Full-text product and knowledge base search | search-service |
| **MinIO** | Product images, invoice PDFs, file attachments | media-service, invoice-service |

## Deployment

The platform runs on Kubernetes with infrastructure defined as code using Terraform. ArgoCD manages continuous delivery with GitOps workflows, and GitHub Actions handles CI pipelines including automated testing, linting, and container image builds.
