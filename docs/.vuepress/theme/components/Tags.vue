<template>
  <div class="wrap">
    <PageHeader />
    <main>
      <ul class="tag-list-search">
        <li class="tag-list-search-span" v-for="tag in tags" :key="tag">{{ tag }}</li>
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
          this.articleList.unshift({
            key: e?.key,
            path: e?.path,
            tags: e?.frontmatter?.tags,
            description: e?.frontmatter?.description,
            title: e?.frontmatter?.title,
            date: e?.frontmatter?.date,
          });
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
  .tag-list-span{
    display: inline-block;
    margin-right: 0.625rem;
    padding: 3px 8px;
    border-radius: 0.125rem;
    background: #34495e;
    color: #ecf0f1;
    font-size: 0.8125rem;
  }
}
.tag-list-search {
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
  .tag-list-search-span {
    background: #eee;
    border-radius: 3px 0 0 3px;
    color: #34495e;
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
    background: #fff;
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
    background: #fff;
    border-bottom: 13px solid transparent;
    border-left: 10px solid #eee;
    border-top: 13px solid transparent;
    content: '';
    position: absolute;
    right: 0;
    top: 0;
  }

  .tag-list-search-span:hover {
    background-color: #34495e;
    color: white;
  }

  .tag-list-search-span:hover::after {
    border-left-color: #34495e;
  }
}
</style>
