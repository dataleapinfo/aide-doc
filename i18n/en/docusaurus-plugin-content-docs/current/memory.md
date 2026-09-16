---
id: memory
title: Memory
description: How the assistant remembers across sessions, where it keeps it, and what the automatic tidying does
---

# Memory

## There is no hidden state

The assistant's memory is a set of Markdown files. It writes to them, and reads them back when a session starts.

**The model only remembers what was written to a file.** There is no second memory you cannot see — if you never told it something, next time it simply does not know.

To have it remember something, just say so: "remember that our reporting periods are calendar months". It decides which file that belongs in.

## Four files

| File | What goes in it |
|---|---|
| `USER.md` | Stable preferences about you — your role, the definitions you use, how you want it to talk to you |
| `MEMORY.md` | Long-term facts and decisions |
| `memory/<date>.md` | Notes and context from that day |
| `DREAMS.md` | A readable record of what the automatic tidying did |

The **Memory** settings page shows these files and lets you edit them directly. If you break something, change it back — the files are what it reads, and there is nothing else to keep in sync.

## Automatic tidying

Periodically the assistant promotes things that keep recurring in the daily notes into long-term memory, and clears out what has gone stale. It runs in the background and leaves a readable record in `DREAMS.md`, so you can go back and see what it changed this time, and why.

**When it runs is set centrally by your administrator, and everyone's slot is staggered** — not everybody at once. You can see the frequency in settings but not change it; see [Configured by your administrator](/admin-managed) for why.

The tidying only adds to `MEMORY.md`. It does not touch what you wrote by hand, unless it specifically judges an entry to have been superseded — and when that happens it is recorded in `DREAMS.md`.

## Memory search does not leave this environment

Recall over memory uses a **local full-text index**. No embedding service is connected.

That is deliberate, not a shortcut: wiring up vector search would mean sending the contents of your memory to an external embedding model. **What you keep here does not leave this environment in order to be searched.**

The index uses trigram segmentation. Chinese has no word boundaries, so word-based indexing misses things — trigrams are chosen exactly for that. Search works in Chinese; you do not need to write your notes in English to make it findable.

## Memory vs. sessions

A [session](/sessions) is the full content of one conversation, and deleting it removes it. Memory is what settled out of those conversations and carries across them.

Deleting a session does not delete memory. Conversely, removing an entry from a memory file does not remove what was said in the session history.

---

Parts of this page are adapted from [openclaw/docs](https://github.com/openclaw/docs) (MIT); see [Credits and open-source notices](/credits).
