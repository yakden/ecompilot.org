---
title: API Endpoints
description: Overview of available EcomPilot API endpoints for niche analysis, inventory, suppliers, listings, logistics, invoicing, and analytics.
---

## Overview

This page lists the available endpoints in the EcomPilot API. Full request/response schemas with detailed parameter descriptions are coming soon. All endpoints use the base URL `https://api.ecompilot.org/v1` and require a valid `Authorization: Bearer <token>` header.

## Niche Analysis

### Analyze a marketplace niche

```
GET /v1/niches/analyze
```

Returns NicheScore, competition density, demand trends, and margin estimates for a given marketplace category.

**Query parameters:** `marketplace`, `category_id`, `price_min`, `price_max`

## Inventory

### List inventory items

```
GET /v1/inventory
```

Returns a paginated list of inventory items in your account. Supports filtering by SKU, category, and stock status.

**Query parameters:** `page`, `per_page`, `sku`, `category`, `in_stock`

### Add inventory item

```
POST /v1/inventory
```

Creates a new inventory item. Provide product details, pricing, stock quantity, and optional marketplace mappings in the request body.

**Body fields:** `name`, `sku`, `ean`, `price`, `quantity`, `category`, `description`, `images`

## Suppliers

### Search suppliers

```
GET /v1/suppliers
```

Searches the supplier database with filters for category, country, minimum order quantity, and certification.

**Query parameters:** `query`, `country`, `category`, `moq_max`, `certified`, `page`, `per_page`

## Listings

### Create marketplace listing

```
POST /v1/listings
```

Publishes a product listing to a connected marketplace. Specify the target marketplace, inventory item, pricing, and marketplace-specific attributes.

**Body fields:** `inventory_id`, `marketplace`, `title`, `price`, `quantity`, `category_id`, `attributes`

## Logistics

### Track shipment

```
GET /v1/logistics/track
```

Returns the current status and tracking history for a shipment across any connected carrier.

**Query parameters:** `tracking_number`, `carrier`

## E-Invoicing

### Create e-invoice

```
POST /v1/ksef/invoices
```

Creates a KSeF-compliant e-invoice and submits it to the Polish National e-Invoice System. Provide buyer details, line items, and tax information.

**Body fields:** `buyer_nip`, `buyer_name`, `items`, `issue_date`, `currency`

## Analytics

### Dashboard data

```
GET /v1/analytics/dashboard
```

Returns aggregated dashboard metrics including revenue, orders, top products, and marketplace performance for a given date range.

**Query parameters:** `date_from`, `date_to`, `marketplace`, `granularity`

---

:::note
Full API documentation with complete request/response schemas, example payloads, error codes, and rate limit details is coming soon. This page provides a high-level overview of available endpoints to help you plan your integration.
:::
