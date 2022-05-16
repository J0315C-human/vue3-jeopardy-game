import {ref} from "vue";

export function useIdSelections(maxSelectionCount) {

    const selectedIds = ref([]);

    function toggleId(id) {
        if (selectedIds.value.includes(id)) {
            selectedIds.value = selectedIds.value.filter(x => x !== id);
        } else {
            selectedIds.value.push(id);
        }
        if (selectedIds.value.length >= maxSelectionCount) {
            selectedIds.value = selectedIds.value.slice(selectedIds.value.length - maxSelectionCount);
        }
    }

    function clearSelected() {
        selectedIds.value = [];
    }

    return {
        selectedIds,
        toggleId,
        clearSelected
    }
}