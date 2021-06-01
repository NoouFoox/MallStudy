<template>
  <div class="toast" v-show="show">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      Show: false,
      message:''
    }
  },
  methods: {
    show(message = '默认文字', duration = 2000) {
      this.isShow = true;
      this.message = message

      setTimeout(() => {
        this.isShow = false;
        this.message = ''
      }, duration)
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 2px 2px 0px 0px #eeeeee;
  text-align: center;
  padding: 10.1px 5.1px;
  color: black;
  z-index: 99999;
}

</style>
