<template>
  <div class="top">
    <div class="back" @click="goBack">
      <span></span>
      <img src="../public/RUNOOB.png" alt="返回上一页" />
    </div>
    <SearchBox v-if="$page?.frontmatter?.blog || $page?.frontmatter?.tagpage" />
    <RouterLink v-else to="/"> NoPatience </RouterLink>
  </div>
</template>

<script>
import SearchBox from "@SearchBox";

export default {
  name: "PageHeader",
  components: {
    SearchBox,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="css" scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top .back {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: #34495e;
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.25s;
}
.back span {
  position: absolute;
}
.back span:after {
  content: "";
  width: 1rem;
  height: 1rem;
  display: inline-block;
  border-top: 3px solid #fff;
  border-right: 3px solid #fff;
  transform: rotate(-135deg);
  visibility: hidden;
  opacity: 0;
  transition: all 0.25s;
}
.top .back img {
  width: 44px;
  height: 44px;
  border-radius: 4px;
  transition: all 0.25s;
}
.back:hover img {
  visibility: hidden;
  opacity: 0;
  transition: all 0.25s;
}
.back:hover span:after {
  visibility: visible;
  opacity: 1;
  transition: all 0.25s;
}
.top a {
  color: #34495e;
  font-size: 2rem;
  font-weight: bolder;
}
</style>
