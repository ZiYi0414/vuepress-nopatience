<template>
  <div class="wrap">
    <PageHeader />
    <main>
      <ul class="tag-list-search">
        <li
          class="tag-list-search-span"
          v-for="tag in tags"
          :key="tag"
          @click="getSomeArticleByTag(tag)"
        >
          {{ tag }}
        </li>
      </ul>
      <article v-for="item in articleList" :key="item?.key">
        <router-link :to="item?.path">
          <header>
            <h3>{{ item?.title }}</h3>
            <small>{{ item?.date }}</small>
          </header>
          <p>
            {{ item?.description }}
          </p>
        </router-link>
        <div class="tag-list">
          <span class="tag-list-span" v-for="tag in item?.tags" :key="tag">{{
            tag
          }}</span>
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
      articleListByTag: [],
      tags: [],
    };
  },
  methods: {
    sortByDate: function (a, b) {
      if (a && b) return Date.parse(b) - Date.parse(a);
      else return;
    },
    getSomeArticleByTag: function (tag) {
      const pages = this.$site.pages;
      pages.map((e) => {
        if (e?.frontmatter?.type === "blog") {
          if (e?.frontmatter?.tags?.includes(tag)) {
            this.articleListByTag.push({
              key: e?.key,
              path: e?.path,
              tags: e?.frontmatter?.tags,
              description: e?.frontmatter?.description,
              title: e?.frontmatter?.title,
              date: e?.frontmatter?.date,
              lastUpdated: e?.lastUpdated,
            });
          }
        }
      });
      this.articleList = this.articleListByTag;
      this.articleList?.sort((a, b) => this.sortByDate(a?.lastUpdated, b?.lastUpdated));
      this.articleListByTag = [];
    },
    getTagsFn: function () {
      this.tags = new Set(this.tags.flat(Infinity));
      this.tags = [...this.tags];
    },
    getArticleFn: function () {
      const pages = this.$site.pages;
      pages.map((e) => {
        if (e?.frontmatter?.type === "blog") {
          this.articleList.push({
            key: e?.key,
            path: e?.path,
            tags: e?.frontmatter?.tags,
            description: e?.frontmatter?.description,
            title: e?.frontmatter?.title,
            date: e?.frontmatter?.date,
            lastUpdated: e?.lastUpdated,
          });
          e?.frontmatter?.tags && this.tags.push(e.frontmatter.tags);
        }
      });
      this.articleList?.sort((a, b) => this.sortByDate(a?.lastUpdated, b?.lastUpdated));
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
  .tag-list-span{
    display: inline-block;
    margin-right: 0.625rem;
    padding: 3px 8px;
    border-radius: 0.125rem;
    background: var(--tag-bg-color);
    color: var(--tag-text-color);
    font-size: 0.8125rem;
  }
}
.tag-list-search {
  cursor: pointer;
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
  .tag-list-search-span {
    background: var(--tag-bg-color);
    border-radius: 3px 0 0 3px;
    color: var(--tag-text-color);
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 20px 0 23px;
    position: relative;
    margin: 0 10px 10px 0;
    text-decoration: none;
    -webkit-transition: color 0.2s;
  }
  .tag-list-search-span::before {
    background: var(--bg-color);
    border-radius: 10px;
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
    content: '';
    height: 6px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 10px;
  }

  .tag-list-search-span::after {
    background: var(--bg-color);
    border-bottom: 13px solid transparent;
    border-left: 10px solid var(--tag-bg-color);
    border-top: 13px solid transparent;
    content: '';
    position: absolute;
    right: 0;
    top: 0;
  }

  .tag-list-search-span:hover {
    background-color: var(--tag-hover-bg-color);
    color: var(--tag-hover-text-color);
  }

  .tag-list-search-span:hover::after {
    border-left-color: var(--tag-hover-bg-color);
  }
}
</style>
