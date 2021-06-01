<template>
  <div class="check-button">
    <div v-if="iaActive">
      <img src="~assets/img/cart/select.png" alt="">
    </div>
    <div v-else>
      <img src="~assets/img/cart/unselect.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    iaActive: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>

<style scoped>
.check-button {
  border-radius: 100%;
  width: 18px;
  height: 18px;
  /*border: 2px solid #aaa;*/
}

.active {
  /*border-color: red;*/
  /*background-color: #da1588;*/
}

.check-button img {
  width: 18px;
}
</style>
