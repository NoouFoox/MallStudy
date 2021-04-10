<template>
  <div class="goods">
    <good-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"/>
  </div>
</template>

<script>
import GoodListItem from "@/components/content/Goos/goodListItem";

export default {
  name: "goodList",
  components: {GoodListItem},
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods{
  display: flex;
  /*包裹*/
  flex-wrap: wrap;
  /*在弹性盒对象的 <div> 元素中的各项周围留有空白：*/
  justify-content: space-around;
}

</style>
