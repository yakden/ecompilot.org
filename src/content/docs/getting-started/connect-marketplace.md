---
title: Connect a marketplace
description: How to connect Allegro, Amazon, eBay, Etsy, and other marketplaces to EcomPilot PL — OAuth flows, API keys, and integration settings.
---

EcomPilot supports eight major marketplaces. Connecting a marketplace enables automatic synchronization of your products, orders, stock levels, and analytics data.

## Before you begin

- You need an active seller account on the marketplace you want to connect.
- Make sure your EcomPilot profile is set up with your business name and NIP (recommended for full feature access).
- All marketplace connections are managed from **Settings > Marketplace connections** in your dashboard.

## Connecting Allegro

Allegro uses OAuth 2.0, which means you authorize EcomPilot directly through Allegro's interface — no API keys to copy or paste.

1. In your EcomPilot dashboard, go to **Settings > Marketplace connections**.
2. Click **Add marketplace** and select **Allegro**.
3. You will be redirected to Allegro's authorization page.
4. Log in to your Allegro seller account (if not already logged in).
5. Review the permissions EcomPilot is requesting and click **Allow**.
6. You will be redirected back to EcomPilot. The connection status will show as **Connected**.

EcomPilot begins syncing your Allegro data immediately. The initial sync (products, orders, and account details) typically completes within a few minutes depending on your catalog size.

### Allegro permissions

EcomPilot requests the following access scopes:

- **Offers** — Read and manage your product listings.
- **Orders** — Read order details and update fulfillment status.
- **Payments** — Read payment and billing information.
- **Account** — Read basic account details for profile linking.

You can revoke access at any time from your [Allegro account security settings](https://allegro.pl/my-account/security).

## Connecting Amazon

Amazon uses SP-API (Selling Partner API) credentials for third-party integrations.

1. In your EcomPilot dashboard, go to **Settings > Marketplace connections**.
2. Click **Add marketplace** and select **Amazon**.
3. Choose your Amazon marketplace region (e.g., Amazon.pl, Amazon.de).
4. You will be redirected to Amazon Seller Central to authorize the application.
5. Log in to your Amazon seller account and grant the requested permissions.
6. You will be redirected back to EcomPilot with your credentials automatically configured.

Amazon data synchronization begins after authorization. The initial import may take up to 15 minutes for large catalogs.

## Connecting other marketplaces

### eBay

1. Click **Add marketplace** and select **eBay**.
2. You will be redirected to eBay's OAuth consent page.
3. Authorize EcomPilot and return to the dashboard.

### Etsy

1. Click **Add marketplace** and select **Etsy**.
2. Authorize via Etsy's OAuth flow.
3. Grant access to your shop's listings and orders.

### OLX

1. Click **Add marketplace** and select **OLX**.
2. Follow the on-screen authorization instructions.
3. EcomPilot will connect to your OLX seller account.

### Vinted

1. Click **Add marketplace** and select **Vinted**.
2. Authorize EcomPilot through Vinted's integration flow.

### Empik Marketplace

1. Click **Add marketplace** and select **Empik**.
2. Enter your Empik Marketplace API credentials (provided by Empik after seller registration).
3. Click **Connect** to verify the credentials and activate the integration.

### Erli

1. Click **Add marketplace** and select **Erli**.
2. Enter your Erli API key (available in your Erli seller panel under API settings).
3. Click **Connect** to establish the link.

## Managing connections

### Sync status

Each connected marketplace displays its sync status on the Marketplace connections page:

- **Connected** — Active and syncing normally.
- **Syncing** — Initial data import or scheduled sync in progress.
- **Token expired** — Re-authorization required (click **Reconnect**).
- **Error** — A problem occurred; check the error details and retry.

### Re-authorization

OAuth tokens (Allegro, Amazon, eBay, Etsy) expire periodically. When a token expires, EcomPilot will notify you via email and in-app notification. Click **Reconnect** on the marketplace card to re-authorize.

### Disconnecting a marketplace

1. Go to **Settings > Marketplace connections**.
2. Click the three-dot menu on the marketplace card.
3. Select **Disconnect**.
4. Confirm the action.

Disconnecting stops all data synchronization. Your existing data (products, order history) remains in EcomPilot but will no longer update.

## What's next?

- [Quick start](/getting-started/quick-start/) — See what to do after connecting your marketplaces.
- [Niche Analysis](/features/niche-analysis/) — Start analyzing market opportunities with your connected data.
- [Inventory Management](/features/inventory-management/) — Set up stock synchronization across marketplaces.
