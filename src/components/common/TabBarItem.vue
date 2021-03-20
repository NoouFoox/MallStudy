<template>
  <div id="Tabbar-item" @click="itemClick">
    <slot v-if="OnYes" name="item-icon"></slot>
    <slot v-else name="item-icon-on"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {}
  },
  computed: {
    OnYes() {
      return this.$route.path.indexOf(this.path) === -1
    },
    activeStyle() {
      return !this.OnYes ? {color: this.actClolr} : {}
    }
  },
  methods: {
    itemClick() {
      if (window.location.pathname !== this.path) {
        this.$router.replace(this.path)
      } else {
        console.log('已经点击过了')
      }
    }
  },
  props: {
    path: String,
    actClolr: {
      type: String,
      default: 'red'
    }
  }
}
</script>

<style scoped>
#Tabbar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  color: #1296db;
  font-size: 15px;
  user-select: none;
}
#Tabbar-item>img{
  width: 24px;
  height: 24px;
}
</style>
