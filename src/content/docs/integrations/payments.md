---
title: Payment Gateways
description: Accept payments through 5 Polish payment gateways — Przelewy24, PayU, Paynow, Tpay, and imoje — plus Stripe for international billing.
---

## Overview

EcomPilot integrates with five Polish payment gateways and Stripe for international subscription billing. All payment data is encrypted with **AES-256-GCM** to meet the highest security standards. Connect one or more gateways to give your buyers the payment methods they expect — bank transfers, BLIK, credit cards, and installments.

## Polish Payment Gateways

### Przelewy24

The most popular payment gateway in Poland, supporting bank transfers, BLIK, credit and debit cards, and digital wallets. Przelewy24 covers the vast majority of Polish online payment preferences.

- Bank transfers from all major Polish banks
- BLIK mobile payments
- Visa, Mastercard, and other card networks
- Google Pay and Apple Pay

### PayU

A widely used Polish payment platform offering online payments and installment options. PayU is particularly strong for merchants who want to offer deferred payment or buy-now-pay-later plans.

- Online bank transfers
- Card payments
- Installment payments (Raty PayU)
- PayU Pay Later

### Paynow

A modern payment solution from mBank, designed for fast integration and a clean checkout experience. Paynow supports BLIK, bank transfers, and card payments.

- BLIK payments
- Bank transfers
- Card payments
- Simple, developer-friendly API

### Tpay

Tpay specializes in bank transfers and BLIK, with broad coverage of Polish banks. A solid choice for merchants prioritizing direct bank payment methods.

- Bank transfers from 40+ Polish banks
- BLIK payments
- Card payments
- Recurring payments support

### imoje

The payment gateway from **ING Bank Slaski**, offering a seamless experience for ING customers and broad coverage for other payment methods.

- Bank transfers
- BLIK payments
- Card payments
- ING installments

## International Billing

### Stripe

EcomPilot uses **Stripe** to handle international subscription billing for the platform itself. Stripe provides:

- Credit and debit card processing (Visa, Mastercard, Amex)
- Recurring subscription management
- Multi-currency support
- PCI DSS Level 1 compliance

## Security

All payment data processed through EcomPilot is encrypted using **AES-256-GCM** (Advanced Encryption Standard with Galois/Counter Mode). Payment credentials are never stored on EcomPilot servers — gateway tokens and API keys are encrypted at rest and transmitted over TLS 1.3.
