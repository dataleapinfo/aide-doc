import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  main: [
    "index",
    {
      type: "category",
      label: "遇到问题",
      collapsed: false,
      items: ["troubleshooting", "admin-managed"],
    },
    {
      type: "category",
      label: "能力范围",
      collapsed: false,
      items: ["not-yet-open", "labs"],
    },
    "credits",
  ],
};

export default sidebars;
