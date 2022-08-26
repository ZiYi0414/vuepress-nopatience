<template>
  <div class="option">
    <div v-if="currentMode === 'dark'" alt="太阳" @click="selectMode('light')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="iconify iconify--carbon"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 32 32"
      >
        <path
          d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z"
          fill="currentColor"
        ></path>
        <path
          d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z"
          fill="currentColor"
        ></path>
        <path d="M2 15.005h5v2H2z" fill="currentColor"></path>
        <path
          d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z"
          fill="currentColor"
        ></path>
        <path d="M15 25.005h2v5h-2z" fill="currentColor"></path>
        <path
          d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z"
          fill="currentColor"
        ></path>
        <path d="M25 15.005h5v2h-5z" fill="currentColor"></path>
        <path
          d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z"
          fill="currentColor"
        ></path>
        <path d="M15 2.005h2v5h-2z" fill="currentColor"></path>
      </svg>
    </div>
    <div v-else alt="月亮" @click="selectMode('dark')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="iconify iconify--carbon"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 32 32"
      >
        <path
          d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import applyMode from "./applyMode.js";
export default {
  name: "ModeOptions",
  data() {
    return {
      modeOptions: [
        { mode: "dark", title: "暗" },
        { mode: "auto", title: "自动" },
        { mode: "light", title: "亮" },
      ],
      currentMode: "auto",
    };
  },
  mounted() {
    // modePicker 开启时默认使用用户主动设置的模式
    this.currentMode = localStorage.getItem("mode") || this.$themeConfig.mode || "auto";
    // Dark and Light autoswitches
    // 为了避免在 server-side 被执行，故在 Vue 组件中设置监听器
    const that = this;
    window.matchMedia("(prefers-color-scheme: dark)").addListener(() => {
      that.$data.currentMode === "auto" && applyMode(that.$data.currentMode);
    });
    window.matchMedia("(prefers-color-scheme: light)").addListener(() => {
      that.$data.currentMode === "auto" && applyMode(that.$data.currentMode);
    });
    applyMode(this.currentMode);
  },
  methods: {
    selectMode(mode) {
      if (mode !== this.currentMode) {
        this.currentMode = mode;
        applyMode(mode);
        localStorage.setItem("mode", mode);
      }
    },
    getClass(mode) {
      return mode !== this.currentMode ? mode : `${mode} active`;
    },
  },
};
</script>

<style lang="stylus">
.option {
  display: flex;
  align-items: center
  cursor: pointer;
  margin-right: 10px;
  svg{
    width: 25px;
    height: 25px;
    path{
      fill: var(--text-color)
    }
  }
}
</style>
