import {ref} from "vue";

export function useJeopardyGameState() {

    const categories = ref([]);
    const team1Points = ref(0);
    const team2Points = ref(0);
    const questionsAnsweredIds = ref([]);

    function setCategories(newCategories){
        categories.value = newCategories;
    }

    function onQuestionAnswered(question, teamNum){
        if (teamNum === 1){
            team1Points.value += question.value;
        } else if (teamNum === 2) {
            team2Points.value += question.value;
        }
        questionsAnsweredIds.value.push(question.id);
    }

    return {
        categories,
        team1Points,
        team2Points,
        onQuestionAnswered,
        setCategories,
        questionsAnsweredIds
    }
}