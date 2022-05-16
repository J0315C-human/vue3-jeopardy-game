<template>
  <div class="category-cards">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CategoryCards',
  props: {}
}
</script>

<style scoped>
.category-cards {
  display: flex;
  flex-flow: row wrap;
}

</style>
