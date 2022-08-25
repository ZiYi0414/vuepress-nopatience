<template>
  <div class="top">
    <div class="back" @click="goBack">
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
  width: 44px;
  height: 44px;
  background: #34495e;
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
}
.top .back img {
  width: 44px;
  height: 44px;
  border-radius: 4px;
}
.top a {
  color: #34495e;
  font-size: 2rem;
  font-weight: bolder;
}
</style>
