<template>
  <div v-for="obj in item" :key="obj.id" class="list-item" @mouseover="hover = true" @mouseleave="hover = false">
   <div >
    <div>{{ obj.voice }}</div>
    <div>{{ obj.text }}</div>
    <div>{{ obj.id }}</div>
  </div>
<CustomCheckbox  />
    <button v-if="hover" @click="deleteItem(item.id)" class="delete-btn">X</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomCheckbox from './CustomCheckbox.vue';

// use `defineProps` to declare the props
const { item } = defineProps({
  item: {
    type: Object,
    required: true
  },
});
// use `defineEmits` to declare the custom events
const emit = defineEmits(['delete']);
console.log(item)
// reactive state for hover
const hover = ref(false);

// method to emit the delete event
function deleteItem(id: number) {
  emit('delete', id);
}
</script>

<style scoped>
/* Your styles here */
.list-item{
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 2px;
  border-radius: 2px;
  border-color: black;
}
.item-title {
  /* styles */
}
.item-content {
  /* styles */
}
.delete-btn {
  width: 16px;
  height: 16px;
  
}
</style>
