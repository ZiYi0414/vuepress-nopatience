<template>
  <div class="top">
    <div class="back" @click="goBack">
      <img src="../public/RUNOOB.png" alt="返回上一页" />
    </div>
    <RouterLink  to="/"> NoPatience </RouterLink>
  </div>
</template>

<script>

export default {
  name: 'PageHeader',
  methods: {
   goBack() {
    this.$router.go(-1)
   }
  },
};
</script>

<style lang="css" scoped>
.top {
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
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
