<template>
  <div class="wrap">
    <PageHeader />
    <main>
      <div class="tag-list">
        <span v-for="tag in tags" :key="tag">{{ tag }}</span>
      </div>
      <router-link v-for="item in articleList" :key="item?.key" :to="item?.path">
        <article>
          <header>
            <h3>{{ item?.frontmatter?.title }}</h3>
            <small>{{ item?.frontmatter?.date }}</small>
          </header>
          <p>
            {{ item?.frontmatter?.description }}
          </p>
          <div class="tag-list">
            <span v-for="tag in item?.frontmatter?.tags" :key="tag">{{ tag }}</span>
          </div>
        </article>
      </router-link>
    </main>
  </div>
</template>

<script>
import PageHeader from "@theme/components/PageHeader.vue";

export default {
  name: "Blog",
  components: {
    PageHeader,
  },
  data() {
    return {
      articleList: [],
      tags: [],
    };
  },
  methods: {
    getTagsFn: function () {
      this.tags = new Set(this.tags.flat(Infinity));
      this.tags = [...this.tags];
      console.log(this.tags);
    },
    getArticleFn: function () {
      console.log(this.$site);
      const pages = this.$site.pages;
      pages.map((e) => {
        if (e?.frontmatter?.type === "blog") {
          this.articleList.unshift(e);
          e?.frontmatter?.tags && this.tags.push(e.frontmatter.tags);
        }
      });
    },
  },
  created() {
    this.getArticleFn();
    this.getTagsFn();
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

<style lang="stylus" scoped>
.wrap {
  padding: 2rem 2.5rem;
  max-width: 46.5rem;
  margin-left: auto;
  margin-right: auto;
  main {
    margin-top: 5rem;
    article {
      margin-bottom: 4rem;
      text-align: left;
      header {
        margin-bottom: 0.2rem;
        h3 {
          color: #2c3e50;
          font-size: 1.75rem;
          font-weight: bolder;
          letter-spacing: 0.1rem;
          text-rendering: optimizeLegibility;
          font-size: 1.4427rem;
          line-height: 1.1;
          cursor: pointer;
          margin-bottom: 1rem;
        }
        small {
          font-family: 'Merriweather', 'Georgia', serif;
          color: #34495e
          font-weight: 400;
          word-wrap: break-word;
          font-kerning: normal;
        }
      }
      p {
        font-family: 'Merriweather', 'Georgia', serif;
        color: #34495e;
        font-weight: 400;
        word-wrap: break-word;
        font-kerning: normal;
      }
    }
  }
}
.tag-list {
  display: flex;
  span{
    display: inline-block;
    margin-right: 0.625rem;
    padding: 3px 8px;
    border-radius: 0.125rem;
    background: #34495e;
    color: #ecf0f1;
    font-size: 0.8125rem;
  }
}
</style>
