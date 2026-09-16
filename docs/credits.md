---
id: credits
title: 致谢与开源声明
description: 本产品与本文档所使用的开源项目及其许可证
---

# 致谢与开源声明

## 智能体底座

DataLeap 企业个人助手构建在开源项目 **[OpenClaw](https://github.com/openclaw)** 之上。我们在其上做了企业化的集成:统一登录、数据治理与审计、语义层接入、集中化的部署与运维。

底座本身是通用的,这也是为什么你在界面里会看到一些**当前部署没有开放**的功能 —— 相关说明见[尚未开放的能力](/not-yet-open)。

## 文档

本站部分页面改编自 [openclaw/docs](https://github.com/openclaw/docs),该项目以 **MIT 许可证**发布:

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

改编的页面会在页面末尾单独注明。

**改编而不是照搬,是有原因的**:上游文档描述的是底座的通用形态,其中相当一部分在本部署里并不成立 —— 比如配置由谁修改、版本怎么升级、工作目录在哪。原样转载会把读者引向做不到、甚至不该做的操作。

许可证原文另存于仓库根目录的 `THIRD-PARTY-LICENSES.txt`。
