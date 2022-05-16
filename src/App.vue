<template>
  <div id="app">

    <Suspense>
      <template #default>
        <div>
          <template v-if="mode === 'setup'">
            <h1>Select 5 Categories:</h1>
            <CategorySelector @categoriesChanged="setCategories"/>
            <button class="start" v-if="categories.length === 5" @click="startGame">Start Game
            </button>
          </template>
          <template v-if="mode === 'game'">
            <GameBoard :categories="categories"/>
          </template>
        </div>
      </template>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </div>
</template>

<script>
import CategorySelector from './components/CategorySelector.vue'
import GameBoard from './components/GameBoard.vue'
import {useJeopardyGameState} from './use/useJeopardyGameState.ts';
import {ref} from "vue";

export default {
  name: 'App',
  components: {
    CategorySelector,
    GameBoard
  },
  setup() {

    return {}
  },
  data: function () {
    const {
      setCategories,
      // team1Points,
      // team2Points,
      categories,
      // questionsAnsweredIds,
      // onQuestionAnswered
    } = useJeopardyGameState();

    const mode = ref("setup");

    const startGame = () => {
      mode.value = "game";
    }
    return {
      mode,
      setCategories,
      categories,
      startGame
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.start {
  background-color: greenyellow;
  padding: 20px;

}
</style>
