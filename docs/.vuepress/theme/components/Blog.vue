<template>
  <div class="wrap">
    <PageHeader />
    <main>
      <article v-for="item in articleList" :key="item?.key">
        <router-link :to="item?.path">
          <header>
            <h3>{{ item?.frontmatter?.title }}</h3>
            <small>{{ item?.frontmatter?.date }}</small>
          </header>
          <p>
            {{ item?.frontmatter?.description }}
          </p>
        </router-link>
        <div class="tag-list">
          <span v-for="tag in item?.frontmatter?.tags" :key="tag">{{ tag }}</span>
        </div>
      </article>
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
    };
  },
  methods: {
    getArticleFn: function () {
      // console.log(this.$site)
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

<style lang="stylus" scoped>
.wrap {
  padding: 2rem 1.5rem;
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
          color: var(--h-color);
          font-size: 1.75rem;
          font-weight: bolder;
          letter-spacing: 0.1rem;
          text-rendering: optimizeLegibility;
          font-size: 1.4427rem;
          line-height: 1.1;
          cursor: pointer;
          margin-bottom: 1rem;
          transition: all 0.25s;
        }
        small {
          font-family: 'Merriweather', 'Georgia', serif;
          color: var(--text-color)
          font-weight: 400;
          word-wrap: break-word;
          font-kerning: normal;
        }
      }
      p {
        font-family: 'Merriweather', 'Georgia', serif;
        color: var(--text-color);
        font-weight: 400;
        word-wrap: break-word;
        font-kerning: normal;
      }
    }
    article:hover {
      h3{
        text-shadow: 0 0 1px var(--text-color);
        transition: all 0.25s;
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
    background: var(--tag-bg-color);
    color: var(--tag-text-color);
    font-size: 0.8125rem;
  }
}
</style>
