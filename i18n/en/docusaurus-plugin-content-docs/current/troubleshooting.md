---
id: troubleshooting
title: Won't open, or looks wrong
description: What to do when the assistant will not open, shows a blank page, or displays incorrectly
---

# Won't open, or looks wrong

Find which symptom matches, then follow that section. Most cases you can resolve yourself.

## 1. Bounced back to the sign-in page, or told you lack access

The assistant follows your organization's single sign-on. Once your session expires, opening it again sends you back to sign in.

**What to do**: sign in again. Return to the assistant afterwards — your existing conversations are not lost.

If you sign in successfully but are still told you lack access, your account has not been enabled for the assistant yet. **Contact your organization's administrator.**

## 2. The page is blank

The browser opens the page, but nothing is in it.

The interface has built-in recovery: when the first render does not complete, a plain HTML recovery panel appears.

- While the panel says it is **still loading**, the front-end files are still downloading. **Wait.**
- If loading finishes without a render, the panel offers to reload. **Keep waiting** cancels that reload and gives the current page more time; **Try again** reloads immediately.

If it keeps happening, work through these in order, clicking **Try again** after each:

1. **Disable browser extensions that inject into every page.** This is the most common cause — some extensions run before the page's own scripts and stop the application from starting. Ad blockers, script managers, and translation extensions are worth turning off first.
2. **Try a private window, or a different browser.** This quickly separates an extension or profile problem from a problem with the page itself.
3. **Force-refresh** to clear cached front-end files. `Ctrl + F5` on Windows, `Cmd + Shift + R` on macOS.

Still blank after all three? Go to section 4.

## 3. It opens, but the layout is wrong or nothing responds

Usually the browser is still using cached files from an older version of the interface. **Force-refresh** as in step 3 above.

If that does not fix it, clear this site's browsing data and sign in again.

## 4. The assistant is unavailable or stops responding

Each employee's assistant is a separate background instance. It may be restarting inside a maintenance window, or be temporarily unavailable.

**What to do**: wait a few minutes and refresh. If it stays unavailable, **contact your organization's administrator** — this class of problem is resolved on the management side, and there is nothing for you to switch on or off.

Including these details makes it much faster:

- Roughly **when** it happened
- The **exact wording** you saw (a screenshot is ideal)
- What you had just done
- Which of the three steps in section 2 you already tried

## When to go to your administrator

Do not keep troubleshooting these yourself — go straight to your administrator:

- You sign in successfully but are told you lack access
- The assistant stays unavailable after waiting
- The page is still blank after all three steps in section 2
- It works for you but not for a colleague on your team, or the reverse

---

> Section 2's description of the recovery panel and browser extensions is adapted from the OpenClaw documentation (MIT licence).
> Full notice on the [credits page](/credits).
