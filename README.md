# aide-doc

**DataLeap 企业个人助手**的员工使用文档。构建产物发布到
`https://docs.dataleapinfo.com/aide/`(英文在 `/aide/en/`)。

本仓库是**公开**的。写进来的内容就是对外公开的内容 —— 不要放内网主机名、网络拓扑、
部署细节或任何内部工程材料。

## 本地开发

```bash
pnpm install
pnpm start          # 中文
pnpm start -- --locale en
pnpm build          # 两个 locale 一起构建
```

Node ≥ 20。

## 站点约定

- **域名与路径**:`docs.dataleapinfo.com` 主机名刻意**不带产品名**,产品分路径
  (`/aide`)。路径能用 301 改名,主机名一旦进了发到客户站点的前端产物就改不回来了。
  裁决见 `dataleapinfo/ops-workspace#145`。
- **死链让构建失败**(`onBrokenLinks: "throw"`)。本站存在的理由就是接住产品界面里的
  外链,放任死链等于把问题从上游搬到自己家。
- **双语**:默认 `zh-CN`,另有 `en`。界面文案的翻译在 `i18n/en/**/*.json`,
  新增侧边栏分类或导航项后跑 `pnpm write-translations --locale en` 再补译文。

## 内容边界

本产品构建在开源项目 OpenClaw 之上。底座是通用的,因此产品界面里会出现**当前部署并未
开放**的功能。本文档的职责就是说清楚三件事:

1. 哪些能用
2. 哪些由管理员统一管理(员工改不了,也不该改)
3. 哪些尚未开放

部分页面**改编自** [openclaw/docs](https://github.com/openclaw/docs)(MIT)。

**改编,不是照搬。** 上游描述的是底座的通用形态,其中相当一部分在本部署里并不成立 ——
配置由谁修改、版本怎么升级、工作目录在哪。原样转载会把读者引向做不到、甚至不该做的操作。
改编来的页面必须在页面末尾注明出处;许可证原文见
[`THIRD-PARTY-LICENSES.txt`](./THIRD-PARTY-LICENSES.txt),对外声明见 `/aide/credits`。

## 上游内容的更新方式

**定点取用,单向,不做自动同步。** 上游文档更新非常频繁,持续合并的成本不划算。

要更新就在**底座镜像升级时一并重新取用** —— 那本来就是底座发生变化的时刻,也是差异
最该被重新核对的时刻。
