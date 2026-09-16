---
id: models
title: Models
description: Who decides which models are available, what you get to change, and how keys work
---

# Models

## Your administrator sets the range; within it, you choose

Which models are available is configured by your administrator — the providers, the specific models, and who gets which. The **Models** settings page lists **the ones open to you**.

Within that range, **the primary model is your pick**.

## Your pick does not get overwritten

This is worth stating on its own: the primary model is **your choice**. The management side writes an initial value once and **never corrects it afterwards**.

So if you switch models, the next configuration rollout will not switch it back. That is deliberate — an employee's preference has exactly one writer, and it is you.

## Keys

In most cases you **never see or enter a key**. They are configured centrally; you just use the model.

Only when a provider is set up as "use your own account" do you need to connect an account of your own. The settings page says which kind it is; you are not left guessing.

## No model catalogue is fetched from the internet

The assistant does not reach out for a model catalogue. What you see on the page is the list your administrator configured — no more, no less, and it will not quietly grow one day.

## If a model suddenly reports that it is unavailable

There is one case that produces this: **your administrator removed a model, and your primary happens to point at it**.

Because the primary is your choice and the management side does not overwrite it, it is not switched for you automatically — it simply fails the next time you use it.

**Pick another model.** If you think that model should not have been removed, tell your administrator.

Other kinds of failure are covered in [Won't open, or looks wrong](/troubleshooting).

## Changing model does not change what data you can reach

The model affects how the assistant reasons and writes. **What data you can reach is decided by the data platform's permissions.** A stronger model grants no additional access, and no less.

---

Parts of this page are adapted from [openclaw/docs](https://github.com/openclaw/docs) (MIT); see [Credits and open-source notices](/credits).
