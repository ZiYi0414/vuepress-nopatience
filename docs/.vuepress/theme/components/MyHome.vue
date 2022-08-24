<template>
  <main>
    <section
      class="splash"
      ref="parallax"
      data-hover-only="true"
      data-relative-input="true"
    >
      <div class="parallax-wrap" data-depth="0.6">
        <section class="body">
          <section class="shadow"></section>
        </section>
      </div>
      <section class="content" data-depth="0.3">
        <div class="content-wrap">
          <h1 class="title">NoPatience</h1>
          <nav>
            <div v-for="item in link" :key="item.key">
              <a :href="item.link" target="_blank" v-if="item.outside">{{
                item.title
              }}</a>
              <router-link v-else :to="item.link">{{ item.title }}</router-link>
            </div>
          </nav>
        </div>
      </section>
    </section>
    <section class="iframe-wrap">
      <iframe src="http://localhost:3000/" title="mine" width="700" height="700" />
    </section>
  </main>
</template>

<script>
import ceekwa from "../public/ceekwa.jpg";
import Parallax from "parallax-js";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      link: [
        {
          key: 1,
          link: "/blog",
          outside: false,
          title: "Blog",
        },
        {
          key: 2,
          link: "/tags",
          outside: false,
          title: "Tags",
        },
        {
          key: 3,
          link: "https://github.com/ZiYi0414",
          outside: true,
          title: "Github",
        },
        {
          key: 4,
          link: "/rss",
          outside: true,
          title: "RSS",
        },
        {
          key: 5,
          link: "/about",
          outside: false,
          title: "About",
        },
      ],
      ceekwa,
    };
  },
  mounted() {
    new Parallax(this.$refs.parallax, {
      pointerEvents: true,
    });
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
.iframe-wrap
  width: 100vw
  height: 100vh
  background: #000000
  display: flex
  justify-content: center
  align-items: center
  overflow hidden
  iframe
    border: none
section.splash
  width: 100%
  height: 100vh
  overflow: hidden
  .parallax-wrap
    height: 100%
  .shadow
    background-color: rgba(0, 0, 0, 0.7)
    width: 100%
    height: 100%
  .body
    position: absolute
    top : -8%
    left: -10%
    background: url('../public/1.png')
    background-size: cover
    background-position-x: 50%
    width: 120%
    height: 115%
  .content-wrap
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    width: 100vw
    height: 100vh
    font-family: Comfortaa,source sans pro,Ubuntu,Segoe UI,Roboto,Oxygen,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Source Han Sans CN,Source Han Sans SC,Microsoft YaHei,Wenquanyi Micro Hei,WenQuanYi Zen Hei,ST Heiti,SimHei,WenQuanYi Zen Hei Sharp,Arial,sans-serif
    .title
      margin-bottom: 1.4rem
      color: rgba(255, 255, 255, 0.8)
      font-size: 3.5rem
    .subtitle
      margin-bottom: 1rem
      color: rgba(255, 255, 255, 0.7)
    nav
      display: flex
      @media only screen and (max-width: 600px)
        flex-direction: column
      a
        color: white
        font-size: 1.8em
        padding: 0 0.6em 1em
        color: rgba(255, 255, 255, 0.65)
        transition: all 0.6s
        cursor: pointer
        display: inline-flex
        justify-content: center
        &:hover
          color: white
          text-shadow: 0 0 2px #fff
</style>
