const path = require("path");
const secrets = require("../secrets.js");

/**
 * @type {import('@vuepress/types').Theme<import('@vuepress/types').DefaultThemeConfig>}
 */
module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx;

  // resolve algolia
  const isAlgoliaSearch =
    themeConfig.algolia ||
    Object.keys((siteConfig.locales && themeConfig.locales) || {}).some(
      (base) => themeConfig.locales[base].algolia
    );

  const enableSmoothScroll = themeConfig.smoothScroll === true;

  return {
    alias() {
      return {
        "@AlgoliaSearchBox": isAlgoliaSearch
          ? path.resolve(__dirname, "components/AlgoliaSearchBox.vue")
          : path.resolve(__dirname, "noopModule.js"),
      };
    },

    plugins: [
      ["@vuepress/active-header-links", options.activeHeaderLinks],
      "@vuepress/last-updated",
      "@vuepress/back-to-top",
      "@vuepress/search",
      "@vuepress/plugin-nprogress",
      [
        "vuepress-plugin-comment1",
        {
          type: "vssue",
          // 设置 `platform` 而不是 `api`
          platform: "github",
          comment: false,
          autoCreateIssue: true,
          // 其他的 Vssue 配置
          owner: secrets.OWNER_OF_REPO,
          repo: secrets.NAME_OF_REPO,
          clientId: secrets.YOUR_CLIENT_ID,
          clientSecret: secrets.YOUR_CLIENT_SECRET,
        },
      ],
      [
        ("container",
        {
          type: "tip",
          defaultTitle: {
            "/": "TIP",
            "/zh/": "提示",
          },
        }),
      ],
      [
        "container",
        {
          type: "warning",
          defaultTitle: {
            "/": "WARNING",
            "/zh/": "注意",
          },
        },
      ],
      [
        "container",
        {
          type: "danger",
          defaultTitle: {
            "/": "DANGER",
            "/zh/": "警告",
          },
        },
      ],
      [
        "container",
        {
          type: "details",
          before: (info) =>
            `<details class="custom-block details">${
              info ? `<summary>${info}</summary>` : ""
            }\n`,
          after: () => "</details>\n",
        },
      ],
      ["smooth-scroll", enableSmoothScroll],
    ],
  };
};
