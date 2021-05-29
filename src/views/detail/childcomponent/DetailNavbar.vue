<template>
  <navbar class="nav-bar">
    <div slot="left" class="back" @click="backClick()">
      <img src="~/assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(item,index) in titles"
           :key="index"
           class="title-item"
           :class="{active: index=== currentIndex}"
           @click="titleClick(index)">
        {{ item }}
      </div>
    </div>
  </navbar>
</template>

<script>
import Navbar from "@/components/common/navbar/Navbar";

export default {
  components: {Navbar},
  name: "detailNavbar",
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick',index);
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.title {
  display: flex;
  font-size: 15px;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.back {
  margin-top: 9px;
}
</style>
