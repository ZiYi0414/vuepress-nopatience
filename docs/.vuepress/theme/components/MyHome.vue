<template>
  <section class="splash">
    <section class="body">
      <section class="shadow">
        <section class="content">
          <h1 class="title">NoPatience</h1>
          <nav>
            <router-link v-for="item in link" :key="item.key" :to="item.link">{{
              item.title
            }}</router-link>
          </nav>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      link: [
        {
          key: 1,
          link: "/blog",
          title: "Blog",
        },
          {
          key: 2,
          link: "/tag",
          title: "Tags",
        },
        {
          key: 3,
          link: "/",
          title: "Github",
        },
        {
          key: 4,
          link: "/rss",
          title: "RSS",
        },
        {
          key: 5,
          link: "/about",
          title: "About",
        },
      ],
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

<style lang="stylus">

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
</style>
