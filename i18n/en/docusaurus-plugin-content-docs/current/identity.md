---
id: identity
title: Identity and profile
description: How you sign in, what the profile page lets you change, and why the GitHub row is empty
---

# Identity and profile

## You sign in with your organization's identity

There is no separate account to register for the assistant, and no separate password. You come in as the person you already are at work.

Two things follow. If your account is disabled on that side, you lose access here at the same moment. And you have one fewer password to keep track of.

## Each person's assistant is their own

In this deployment **every employee has their own assistant instance** — you are not all sharing one.

Your sessions, your memory, your model choice, your settings: all yours. Nobody else sees them, and you do not see anybody else's.

So anything in the interface about several people sharing one instance — who can see whose sessions, how roles get assigned — does not apply here.

## What the profile page changes

**Settings → Profile** lets you set your display name and avatar. That is all it does; it affects how you are addressed in the interface.

## Why the GitHub row is empty

The profile page has a **GitHub account** row. You will find it empty, and not clickable.

**It is not broken.** That feature requires signing in through GitHub, which is how the substrate confirms the GitHub account is really yours. We sign in through your organization's identity instead, so it never reaches GitHub — it cannot get that, and it does not try.

The features attached to it — such as crediting you in commit records — are equally inactive.

## Permissions are not on this page

The profile page does not decide what you are allowed to do.

**What data you can reach is decided by the data platform's permissions**, computed from your actual authorization in the organization. It has nothing to do with the display name, avatar, or any role label on the assistant side. To reach more, go through the data platform's own request process — not by changing something here.

---

Parts of this page are adapted from [openclaw/docs](https://github.com/openclaw/docs) (MIT); see [Credits and open-source notices](/credits).
