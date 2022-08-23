<template>
  <div class="wrapper">
    <div class="typing-demo">I aways no paitience. Sad#</div>
    <h2>Me</h2>
    <div class="title">comp sci. cv engineer & visual design enthusiast</div>
    <div class="title">Standing on the Shoulders of Giants.</div>
    <div class="title">Hello，Yours World。</div>
    <div class="title">「 地铁NFC失灵狂魔 」 「 Love Hooks 」</div>

    <div class="title">
      Hi, let My_Blog = (mine: cve ): void =>
      <RouterLink to="/">NoPatience myBlog</RouterLink>
    </div>
    <a href="https://github.com/ZiYi0414/vuepress-nopatience" target="_blank">How this page work 👉</a>
  </div>
</template>

<script>
const goback = [`Take me home. `, `Go Back ( )`];

export default {
  name: 'About',
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    },
    goBack() {
      return goback[Math.floor(Math.random() * goback.length)];
    },
  },
};
</script>

<style lang="css" scoped>
.wrapper {
  width: 90%;
  max-width: 48rem;
  margin: 15vh auto;
  display: grid;
  place-items: center;
}

.typing-demo {
  width: 24ch;
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: Comfortaa, source sans pro, Ubuntu, Segoe UI, Roboto, Oxygen, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Source Han Sans CN, Source Han Sans SC, Microsoft YaHei, Wenquanyi Micro Hei,
    WenQuanYi Zen Hei, ST Heiti, SimHei, WenQuanYi Zen Hei Sharp, Arial, sans-serif;
  font-size: 2rem;
}
.title {
  margin-top: 1.4rem;
  margin-bottom: 1.6rem;
}
a {
  color: #9b59b6;
  text-decoration-line: underline;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

@media screen and (max-width: 600px) {
  .typing-demo {
    font-size: 1.5rem;
  }
}
</style>
