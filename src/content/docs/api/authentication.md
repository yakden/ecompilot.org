---
title: API Authentication
description: JWT-based authentication with RS256 signing for the EcomPilot API — obtain tokens, refresh sessions, and connect marketplaces via OAuth 2.0.
---

## Overview

The EcomPilot API uses **JWT (JSON Web Token)** authentication with **RS256** (RSA Signature with SHA-256) signing. Every API request must include a valid token in the `Authorization` header.

## Obtaining API Keys

1. Log in to your EcomPilot dashboard.
2. Navigate to **Settings > Integrations**.
3. Under the **API Access** section, click **Generate API Key**.
4. Copy your API key and client secret. Store them securely — the client secret is shown only once.

## Authenticating Requests

Include your token in the `Authorization` header of every API request:

```
Authorization: Bearer <your-token>
```

### Example Request

```bash
curl -X GET https://api.ecompilot.org/v1/inventory \
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIs..." \
  -H "Content-Type: application/json"
```

## Token Lifecycle

### Expiration

API tokens expire **24 hours** after they are issued. After expiration, requests return a `401 Unauthorized` response.

### Refreshing Tokens

Use the `/auth/refresh` endpoint to obtain a new token before or after the current one expires:

```bash
POST https://api.ecompilot.org/v1/auth/refresh
```

```json
{
  "refresh_token": "<your-refresh-token>"
}
```

The response contains a new access token and a new refresh token:

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "refresh_token": "dGhpcyBpcyBhIHJlZnJl...",
  "expires_in": 86400
}
```

## OAuth 2.0 for Marketplace Connections

Marketplace integrations (Allegro, Amazon, eBay, etc.) use **OAuth 2.0** authorization flows. When you connect a marketplace through the dashboard, EcomPilot handles the OAuth handshake and stores the resulting tokens securely.

If you are building a custom integration that needs to initiate a marketplace OAuth flow programmatically, use the following endpoint:

```bash
GET https://api.ecompilot.org/v1/oauth/{marketplace}/authorize
```

This returns a redirect URL for the marketplace's authorization page. After the user grants access, the marketplace redirects back to EcomPilot with an authorization code that is exchanged for access and refresh tokens automatically.

## Security Best Practices

- **Never expose API keys in client-side code** — use server-to-server calls only.
- **Rotate keys periodically** — regenerate your API key from Settings > Integrations.
- **Use environment variables** — store keys in environment variables, not in source code.
- **Monitor usage** — check the API usage logs in your dashboard for unexpected activity.
