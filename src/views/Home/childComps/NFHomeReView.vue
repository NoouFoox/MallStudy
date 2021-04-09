<template>
  <div class="rcomend">
    <div v-for="(item,index) in recommended" :key="index" class="rcomend-item">
      <a href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NFHomeReView",
  props: {
    recommended: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.rcomend{
  display: flex;
  right: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 15px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.rcomend-item{
  flex: 1;
}
.rcomend-item img{
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
</style>
