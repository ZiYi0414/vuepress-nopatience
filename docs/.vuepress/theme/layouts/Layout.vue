<template>
  <div class="theme-container no-navbar no-sidebar">
    <!-- <Home v-if="$page.frontmatter.home" /> -->
    <MyHome v-if="$page.frontmatter.home" />
    <Blog v-if="$page.frontmatter.blog" />
    <TagPage v-if="$page.frontmatter.tagpage" />
    <About v-if="$page.frontmatter.about" />
    <Page v-if="$page.frontmatter.type === 'blog'" />
    <PageFooter />
  </div>
</template>

<script>
import MyHome from "@theme/components/MyHome.vue";
import Blog from "@theme/components/Blog.vue";
import TagPage from "@theme/components/Tags.vue";
import About from "@theme/components/About.vue";
import Page from "@theme/components/Page.vue";
import PageFooter from "@theme/components/PageFooter.vue";
import applyMode from "@theme/components/ModePicker/applyMode.js";

export default {
  name: "Layout",

  components: {
    MyHome,
    Blog,
    TagPage,
    About,
    Page,
    PageFooter,
  },

  data() {
    return {};
  },

  computed: {},

  mounted() {
    const mode = localStorage.getItem("mode") || this.$themeConfig.mode || "auto";
    applyMode(mode);
  },

  methods: {},
};
</script>
