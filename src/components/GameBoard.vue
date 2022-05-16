<template>
  <div id="game-board">
    <div v-for="(row, r) in questionRows" :key="r" class="category">
      <div class="category-title">{{ categories[r].title }}</div>
      <div v-for="(question, q) in row" :key="q" class="question">{{question.value + ' -- ' +  question.question }}</div>
    </div>
  </div>
</template>

<script>
import {useFetch} from '@vueuse/core'
import {ref} from 'vue'

export default {
  name: 'GameBoard',
  components: {},
  props: {
    categories: Array
  },
  async setup(props) {

    const questionRows = ref([]);

    for (let i = 0; i < 5; i++) {
      const clues = await useFetch(`http://jservice.io/api/category?id=${props.categories[i].id}`).then(({data}) => {
        return JSON.parse(data.value).clues.slice(0, 5);
      })
      questionRows.value.push(clues);
    }

    return {
      questionRows
    }
  }
}
</script>

<style>

#game-board {
  display: flex;
  flex-flow: row nowrap;
}

.category {
  display: flex;
  flex-flow: column nowrap;
  width: 20vw;
  box-sizing: border-box;
}

.category-title {
  height: 40px;
}

.question {
  width: 100%;
  border: 1px solid black;
  background-color: beige;
  height: 122px;
  padding: 7px;
  box-sizing: border-box;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
