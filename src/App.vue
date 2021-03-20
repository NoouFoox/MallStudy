<template>
  <div id="app">
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from "@/components/content/MainTabBar";
export default {
  name: 'app',
  components: {MainTabBar},
  comments: {}
}
</script>
<style>
@import "./assets/css/base.css";
</style>
