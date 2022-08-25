<template>
  <main class="page">
    <div class="header-wrap" v-if="$page?.frontmatter?.type === 'blog'">
      <PageHeader />
    </div>
    <Content class="theme-default-content" />
    <PageEdit />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageHeader from "@theme/components/PageHeader.vue";

export default {
  components: { PageEdit, PageHeader },
  props: ["sidebarItems"],
  methods: {},
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
.header-wrap
  max-width: 46.25rem
  padding: 2rem 1.5rem;
  margin: 0 auto
</style>
