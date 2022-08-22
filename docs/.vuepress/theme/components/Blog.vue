<template>
  <main>
    <article v-for="item in articleList" :key="item?.key">
      <header>
        <h3>{{ item?.frontmatter?.title }}</h3>
        <small>{{ item?.frontmatter?.date }}</small>
      </header>
      <p>
        {{ item?.frontmatter?.description }}
      </p>
    </article>
  </main>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      articleList: [],
    };
  },
  methods: {
    getArticleFn: function () {
      const pages = this.$site.pages;
      pages.map((e) => {
        if (e?.frontmatter?.type === "blog") {
          this.articleList.push(e);
        }
      });
    },
  },
  created() {
    this.getArticleFn();
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  },
};
</script>

<style lang="stylus"></style>
