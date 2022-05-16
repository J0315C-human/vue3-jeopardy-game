<template>
  <div id="category-selector">
    <CategoryCards>
      <CategoryCard
          v-for="cat in categories"
          :category="cat"
          :key="cat.id"
          @click="toggleCategoryId(cat.id)"
          :selected="selectedCategoryIds.includes(cat.id)"/>
    </CategoryCards>
    <button @click="clearCategorySelections">CLEAR SELECTIONS</button>
    <button @click="reloadOptions">LOAD NEW OPTIONS</button>
  </div>
</template>

<script>
import CategoryCard from './CategoryCard.vue'
import CategoryCards from './CategoryCards.vue'
import {useIdSelections} from "../use/useIdSelections.ts";
import {useRandomSelections} from "../use/useRandomSelections.ts";
import {useFetch} from '@vueuse/core'

export default {
  name: 'CategorySelector',
  components: {
    CategoryCard,
    CategoryCards
  },
  async setup(props, {emit}) {

    const {selectedIds, toggleId, clearSelected} = useIdSelections(5);
    const {data} = await useFetch("http://jservice.io/api/categories?count=100");
    const allCategories = JSON.parse(data.value);

    const clearCategorySelections = function() {
      clearSelected();
      emit('categoriesChanged', []);
    }
    const reloadOptions = function () {
      clearCategorySelections();
      this.categories = useRandomSelections(allCategories, 20)
    };

    function toggleCategoryId(id) {
      toggleId(id);
      emit('categoriesChanged', allCategories.filter(cat => this.selectedCategoryIds.includes(cat.id)));
    }

    return {
      selectedCategoryIds: selectedIds,
      toggleCategoryId,
      clearCategorySelections,
      categories: useRandomSelections(allCategories, 20),
      reloadOptions
    }
  }
}
</script>

<style>

</style>
