<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <!-- <Home v-if="$page.frontmatter.home" /> -->
    <MyHome v-if="$page.frontmatter.home" />
    <Blog v-if="$page.frontmatter.blog" />
    <TagPage v-if="$page.frontmatter.tagpage" />
    <About v-if="$page.frontmatter.about" />
    <Page v-else >
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Page>
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

export default {
  name: "Layout",

  components: {
    MyHome,
    Blog,
    TagPage,
    About,
    Page,
    PageFooter
  },

  data() {
    return {
      isSidebarOpen: false,
    };
  },

  computed: {

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar,
        },
        userPageClass,
      ];
    },
  },

  mounted() {
  },

  methods: {
    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },
  },
};
</script>
