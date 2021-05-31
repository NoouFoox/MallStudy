<!--//弃用-->
<template>
  <div>{{product}}</div>
</template>

<script>
export default {
  name: "CateListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>
