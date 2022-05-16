<template>
  <div :class="['category-card', selected && 'selected']">
    <h2>{{ category.title }}</h2>
    <div class="detail">{{ category.clues_count }} Clues</div>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: {
    category: Object,
    selected: Boolean
  }
}
</script>

<style scoped>
.category-card {
  border-radius: 5px;
  border: 1px solid black;
  background-color: beige;
  padding: 16px;
  width: 200px;
  margin: 4px;
}

.category-card.selected {
  background-color: bisque;
}

.category-card:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.category-card h2 {
  margin: 2px 0;
  font-size: 18px;
}

.category-card .detail {
  margin: 2px 0;
  font-size: 12px;
}

</style>
