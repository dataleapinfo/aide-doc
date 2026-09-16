---
id: credits
title: Credits and open-source notices
description: The open-source projects behind this product and this documentation, and their licences
---

# Credits and open-source notices

## Agent substrate

The DataLeap Enterprise Personal Assistant is built on the open-source project **[OpenClaw](https://github.com/openclaw)**. On top of it we add the enterprise integration: single sign-on, data governance and audit, the semantic layer, and centralised deployment and operations.

The substrate is general-purpose, which is why the interface shows some features that are **not open in this deployment** — see [Not open yet](/not-yet-open).

## Documentation

Some pages on this site are adapted from [openclaw/docs](https://github.com/openclaw/docs), released under the **MIT licence**:

> Copyright (c) 2026 openclaw
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALING IN THE
> SOFTWARE.

Adapted pages carry a note at the foot of the page.

**There is a reason it is adaptation rather than reproduction**: the upstream documentation describes the substrate in its general form, and a substantial part of that does not hold in this deployment — who may change configuration, how versions are upgraded, where the working directory lives. Reproducing it verbatim would point readers at actions they cannot take, and in some cases should not.

The licence text is also kept at `THIRD-PARTY-LICENSES.txt` in the repository root.
