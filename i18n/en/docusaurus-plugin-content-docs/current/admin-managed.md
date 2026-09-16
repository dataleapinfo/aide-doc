---
id: admin-managed
title: Configured by your administrator
description: Some settings pages are visible but not yours to change — your administrator manages them centrally
---

# Configured by your administrator

Some settings pages you can open and read, but **cannot change** — or your change does not stick. That is not a fault.

## Why

The assistant's runtime configuration is **issued and continuously reconciled centrally**. That serves three purposes:

- Every employee gets a consistent, predictable environment, rather than one broken by a single wrong switch
- Security and governance settings cannot be turned off by the person using them
- When something breaks, administrators can diagnose it without first asking "has this one been modified?"

So even where a switch is visible, the value in force comes from the management side — a change you make is reverted at the next reconciliation.

## What falls into this category

| Settings area | What it covers |
|---|---|
| Connection and network | How your assistant instance is reached: addresses, proxies |
| Security | Permission modes, access control |
| Audit | What gets recorded, and how much |
| Secrets and credentials | Shared secrets, credentials for external services |
| Plugins | Which plugins are enabled, and their parameters |
| Versions and updates | Upgrades to the assistant's substrate |
| Base configuration | The configuration file itself and its reference |

**Updates deserve particular care**: the interface may offer something like "a new version is available — upgrade?" **Please do not accept it**, and there is no need to pass it on — upgrades are scheduled centrally and run after approval, not through that entry point.

## What you can change

- **Model choice** — within the range your administrator permits, pick what suits you
- **Appearance** — theme, language, and other pure interface preferences
- **Your own conversations and memory** — your personal content, invisible to others, yours to organise

## When you need something changed

**Contact your organization's administrator** and tell them:

- What you are trying to achieve — not "please enable switch X" but "I need to do Y"
- Which page you saw it on
- How it affects your work

Asking by goal gets a faster answer than asking by switch: many needs already have another route that is open.
