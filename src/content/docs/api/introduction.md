---
title: API Introduction
description: RESTful API for programmatic access to EcomPilot features — niche analysis, inventory management, listing automation, and more.
---

## Overview

The EcomPilot API gives you programmatic access to the platform's core features. Build custom integrations, automate repetitive workflows, or connect EcomPilot data to your own tools and dashboards.

## Base URL

All API requests are made to:

```
https://api.ecompilot.org/v1
```

## Request & Response Format

The API uses **JSON** for both request bodies and responses. Set the following headers on every request:

```
Content-Type: application/json
Accept: application/json
Authorization: Bearer <your-token>
```

## What You Can Do

The API covers the major areas of the EcomPilot platform:

- **Niche analysis** — query NicheScore data and competition metrics for Allegro categories.
- **Inventory management** — create, read, update, and delete inventory items programmatically.
- **Listing automation** — push product listings to connected marketplaces via API calls.
- **Supplier search** — query the supplier database with filters for category, country, and MOQ.
- **Logistics tracking** — retrieve shipment status and tracking data across carriers.
- **E-invoicing** — create and manage KSeF-compliant e-invoices.
- **Analytics** — pull dashboard metrics and performance data into external reporting tools.

## Rate Limiting

API requests are rate-limited to ensure fair usage across all accounts. Current limits are returned in response headers:

- `X-RateLimit-Limit` — maximum requests per window
- `X-RateLimit-Remaining` — remaining requests in current window
- `X-RateLimit-Reset` — UTC timestamp when the window resets

If you exceed the limit, the API returns a `429 Too Many Requests` response. Back off and retry after the reset time.

## Plan Availability

The API is available on the **Business plan**. Starter and Pro plan users can upgrade to Business to enable API access. Visit Settings > Billing in your dashboard to manage your subscription.

## Next Steps

- [Authentication](/api/authentication/) — learn how to obtain and use API tokens.
- [Endpoints](/api/endpoints/) — browse the available API endpoints.
