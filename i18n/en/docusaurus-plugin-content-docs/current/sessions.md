---
id: sessions
title: Sessions and assistants
description: Where your conversations are kept, when to start a new one, and what the Agents settings page is for
---

# Sessions and assistants

## A session is one conversation

Each conversation you have with the assistant is a **session**. Sessions do not live in your browser — they live on the server. Close the tab, switch machines, sign in from a different browser: it is all still there.

The **Sessions** settings page lists every session you have, so you can go back through them, or delete the ones you do not want kept.

Deleting a session deletes what was said in it. Anything the assistant has already written to [memory](/memory) is unaffected — that is a separate thing, kept somewhere else.

## When to start a new one

New topic, new session. The longer a session runs, the more unrelated context it carries, the easier it is for the assistant to be pulled off by something said earlier — and the slower and more expensive each turn gets.

The other way round: when you want to **pick up where you left off**, go back to the original session rather than starting over. The assistant can see everything said in that session, so you do not have to repeat yourself.

## The Agents settings page

There is also an **Agents** page in settings. The substrate supports running several isolated assistants in one instance, each with its own working directory and its own conversation history.

You almost certainly do not need it — there is one by default, and one is enough.

If you do go there, one thing to know first: **a working directory, a sandbox, or a tool list set on an individual assistant will be removed.** Those are decided once, for the whole instance, by your administrator, and per-assistant overrides are not accepted.

The reason is not convenience. The sandbox is the **only** boundary between the assistant and everything else in this deployment. Opening a hole in it on one assistant means the boundary no longer holds for the instance. So it is not "a default you can change" — it is not changeable.

Everything else on the page behaves normally. See [Configured by your administrator](/admin-managed).

## Meeting notes

The **Meetings** page needs a meeting platform connected before it can capture anything, and this deployment has none connected. See [Not open yet](/not-yet-open).

---

Parts of this page are adapted from [openclaw/docs](https://github.com/openclaw/docs) (MIT); see [Credits and open-source notices](/credits).
