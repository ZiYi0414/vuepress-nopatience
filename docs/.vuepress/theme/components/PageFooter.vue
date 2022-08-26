<template>
  <footer>
    <div>
      <a class="link blue" href="/">NoPatience</a> ·
      <a class="link green" href="#">ZiYi</a> ·
      <a class="link pink" target="_blank" href="https://github.com/ZiYi0414"
        >GitHub
      </a>
    </div>
    <a class="link pink" href="https://beian.miit.gov.cn/">辽ICP备2020013140号-3</a>
  </footer>
</template>

<style lang="css" scoped>
footer {
  background: var(--bg-color);
  z-index: 999;
  padding-bottom: 10px;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: var(--text-color);
}
.link {
  color: var(--text-color);
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
}
.blue:hover {
  color: #70a1ff;
}

.pink:hover {
  color: #ff6b81;
}

.green:hover {
  color: #2ed573;
}
</style>
