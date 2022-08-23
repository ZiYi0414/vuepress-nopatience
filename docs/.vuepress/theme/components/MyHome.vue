<template>
  <MouseParallax>
    <section class="splash" slot="parallax">
      <section data-prax class="body">
        <!-- <img data-prax :src="ceekwa" class="background-img" /> -->
        <section class="shadow">
          <section data-prax="0.3"  class="content">
            <h1 class="title">NoPatience</h1>
            <nav>
              <div v-for="item in link" :key="item.key">
                <a :href="item.link" target="_blank" v-if="item.outside">{{
                  item.title
                }}</a>
                <router-link v-else :to="item.link">{{ item.title }}</router-link>
              </div>
            </nav>
          </section>
        </section>
      </section>
    </section>
  </MouseParallax>
</template>

<script>
import { MouseParallax } from "../components/MouseParallax/index";
import ceekwa from "../public/ceekwa.jpg";

export default {
  name: "Home",
  components: {
    MouseParallax,
  },
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
          link: "/tag",
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

section.splash
  width: 100vw
  height: 100vh
  .shadow
    background-color: rgba(0, 0, 0, 0.7)
    width: 100%
    height: 100%
  .body
    background: url('../public/ceekwa.jpg')
    background-size: cover
    background-position: center
    width: 100%
    height: 100%
  .content
    font-family: Comfortaa,source sans pro,Ubuntu,Segoe UI,Roboto,Oxygen,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Source Han Sans CN,Source Han Sans SC,Microsoft YaHei,Wenquanyi Micro Hei,WenQuanYi Zen Hei,ST Heiti,SimHei,WenQuanYi Zen Hei Sharp,Arial,sans-serif
    width: 100%
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    .title
      margin-bottom: 1.4rem
      color: rgba(255, 255, 255, 0.8)
      font-size: 3rem
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
  .background-img
    position absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
</style>
