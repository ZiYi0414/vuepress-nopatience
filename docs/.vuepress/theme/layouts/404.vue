<template>
  <div class="wrapper">
    <div class="typing-demo">{{ getMsg() }}</div>
    <div class="title">你在这里想找到什么呢？宝贝</div>

    <RouterLink to="/">{{ goBack() }}</RouterLink>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`,
];

const goback = [`Take me home. `, `Go Back ( )`];

export default {
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
  margin-top: 30vh;
  display: grid;
  place-items: center;
}

.typing-demo {
  width: 22ch;
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
  color: #000;
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
