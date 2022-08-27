const secrets = require("./secrets.js");

module.exports = {
  title: "Nopatience - ZiYi",
  description: "你好啊",
  head: [
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0",
      },
    ],
    ["link", { rel: "icon", href: "/favicon.png" }],
    [
      "link",
      { rel: "stylesheet", href: "https://fonts.googlefonts.cn/css?family=Comfortaa" },
    ],
  ],
  themeConfig: {
    // 请参考文档来查看所有可用的选项。
    searchPlaceholder: "NoPatience",
    repo: "https://github.com/ZiYi0414/vuepress-nopatience",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "在GitHub编辑此页",
  },
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: "github",
      autoCreateIssue: true,
      // 其他的 Vssue 配置
      owner: secrets.OWNER_OF_REPO,
      repo: secrets.NAME_OF_REPO,
      clientId: secrets.YOUR_CLIENT_ID,
      clientSecret: secrets.YOUR_CLIENT_SECRET,
    },
  },
};
