<template>
  <main>
    <header ref="header">
      <nav>
        <div v-for="item in link" :key="item.key">
          <a :href="item.link" target="_blank" v-if="item.outside">{{ item.title }}</a>
          <router-link v-else :to="item.link">{{ item.title }}</router-link>
        </div>
      </nav>
    </header>
    <section
      class="splash"
      id="rellax"
      ref="parallax"
      data-hover-only="true"
      relativeInput="true"
      data-rellax-speed="-7"
    >
      <div class="parallax-wrap" data-depth="0.6">
        <section class="body">
          <section class="shadow"></section>
        </section>
      </div>
      <section class="content" data-depth="0.3">
        <div class="content-wrap">
          <h1 class="title">NoPatience</h1>
          <h2 class="subtitle">Luyiin 's ❤️</h2>
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
      <div class="wrapper">
        <h2>Me</h2>
        <div class="title">I'm Luyiin,</div>
        <div class="title">Why is Luyiin. just i want</div>
        <div class="title">comp sci. cv engineer & visual design enthusiast</div>
        <div class="title">Standing on the Shoulders of Giants.</div>
        <div class="title">
          const More = (mine: cve ): void =>
          <RouterLink to="/about">router.push("/about")</RouterLink>
        </div>
      </div>
      <iframe
        src="http://1.117.86.51:3003/"
        importance="high"
        scrolling="no"
        title="mine"
        width="700"
        height="700"
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </section>
  </main>
</template>

<script>
import Parallax from "parallax-js";
import Rellax from "rellax";

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
    };
  },

  mounted() {
    new Parallax(this.$refs.parallax, {
      pointerEvents: true,
    });
    new Rellax("#rellax", {});
  },
};
</script>

<style lang="stylus" scoped>
header
  position: fixed
  top: 0
  left: 0
  display: none
  align-items: center
  justify-content: center
  width: 100vw
  height: 80px
  background: #00000070
  backdrop-filter: blur(10px)
  z-index: 9999
  nav
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    a
      color: white
      font-size: 1.8em
      margin-right: 2rem
      color: rgba(255, 255, 255, 0.65)
      transition: all 0.6s
      cursor: pointer
      display: inline-flex
      justify-content: center
      &:hover
        color: white
        text-shadow: 0 0 2px #fff

.iframe-wrap
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  position: relative
  width: 100vw
  min-height: 100vh
  padding: 3rem 0
  border-radius: 20px
  background: var(--bg-color)
  overflow hidden
  iframe
    border: none
.splash
  width: 100%
  height: 100vh
  overflow: hidden
  .parallax-wrap
    height: 100%
  .shadow
    background-color: var(--mask)
    width: 100%
    height: 100%
  .body
    position: absolute
    top : -8%
    left: -10%
    background: url('../public/ceekwa.jpg')
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
      margin-bottom: 1rem
      color: rgba(255, 255, 255, 0.8)
      font-size: 3.5rem
    .subtitle
      margin-bottom: 1.6rem
      color: rgba(255, 255, 255, 0.7)
    nav
      display: flex
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
.wrapper {
  width: 90%;
  max-width: 48rem;
  margin: 0 auto 20px;
  display: grid;
  place-items: center;
  color: var(--text-color)
  a {
  color: var(--text-color);
}
}

.title {
  margin-top: 1.4rem;
  margin-bottom: 1.6rem;
}


@media screen and (max-width: 450px) {
 .splash{
 .content-wrap{
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    width: 100vw
    height: 100vh
    font-family: Comfortaa,source sans pro,Ubuntu,Segoe UI,Roboto,Oxygen,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Source Han Sans CN,Source Han Sans SC,Microsoft YaHei,Wenquanyi Micro Hei,WenQuanYi Zen Hei,ST Heiti,SimHei,WenQuanYi Zen Hei Sharp,Arial,sans-serif
    .title{
      margin-bottom: 1.2rem
      color: rgba(255, 255, 255, 0.8)
      font-size: 3rem
    }
    .subtitle{
      margin-bottom: 1.6rem
      color: rgba(255, 255, 255, 0.7)}
    nav{
      display: flex
      a{
        font-size: 1.2em
        }
    }
  }
 }
 .iframe-wrap{
  pointer-events: none
 }
}
</style>
