import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// 站点挂在 docs.dataleapinfo.com 的 /aide 段下。主机名刻意不带产品名 —— 路径能用 301
// 改名,主机名一旦进了发到客户站点的产物就改不回来了(ops-workspace#145)。
const config: Config = {
  title: "DataLeap 企业个人助手",
  tagline: "帮助员工把工作做完的企业级智能助手",

  url: "https://docs.dataleapinfo.com",
  baseUrl: "/aide/",

  organizationName: "dataleapinfo",
  projectName: "aide-doc",

  // 死链必须让构建失败:本站的存在理由就是接住产品里 73 个外链,
  // 放任死链等于把问题从上游搬到自己家。
  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },

  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN", "en"],
    localeConfigs: {
      "zh-CN": { label: "简体中文", htmlLang: "zh-CN" },
      en: { label: "English", htmlLang: "en" },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "DataLeap 企业个人助手",
      items: [
        { type: "docSidebar", sidebarId: "main", position: "left", label: "文档" },
        { type: "localeDropdown", position: "right" },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "DataLeap",
          items: [
            { label: "官网", href: "https://www.dataleapinfo.com/" },
            { label: "致谢与开源声明", to: "/credits" },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} DataLeap`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
