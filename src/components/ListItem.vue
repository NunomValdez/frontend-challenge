<template>
  <div class="list-item">
    <CustomCheckbox :model-value="item.checked" @update:model-value="handleCheckbox" />
    <div class="item-content">
      <div class="voice-image-container">
        <img src="../../assets-for-challenge/person.svg" alt="person image" class="image-item" />
        <div
          class="voice-item"
          contenteditable="true"
          @input="updateVoice($event.target?.innerText)"
        >
          {{ item.voice }}
        </div>
      </div>
      <div
        class="text-container"
        contenteditable="true"
        @input="updateText($event.target?.innerText)"
      >
        <div>{{ item.text }}</div>
      </div>
    </div>
    <button @click="deleteItem(item.id)" class="delete-btn">
      <img src="../../assets-for-challenge/delete.svg" alt="delete button" />
    </button>
  </div>
</template>

<!-- this was on the container div:  @mouseover="hover = true" @mouseleave="hover = false" |||||| this was on the button tag: v-if="hover" || @input="updateVoice($event.target?.innerText)"-->

<script setup lang="ts">
// import { ref } from 'vue';
import CustomCheckbox from './CustomCheckbox.vue'

// use `defineProps` to declare the props
const { item } = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['handleDelete', 'updateItem', 'updateCheckbox'])

function handleCheckbox(newCheckedValue: any) {
  emit('updateCheckbox', { ...item, checked: newCheckedValue })
}

// method to emit the delete event
function deleteItem(id: number) {
  emit('handleDelete', id)
}

function updateVoice(newVoice: any) {
  emit('updateItem', { ...item, voice: newVoice })
}

function updateText(newText: any) {
  emit('updateItem', { ...item, text: newText })
}
</script>
<style scoped lang="scss">
.list-item {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  padding: 10px;
  background-color: white;
  padding: 20px;
  margin: 2px;
  // border-bottom: 2px solid #63676e23;
  .custom-checkbox {
    grid-column: 1 / 2;
  }

  // Item content styling
  .item-content {
    grid-column: 2 / 7; // Occupy the next four fractions
    display: flex;
    flex-direction: column;
    margin-left: -30px; // Space between checkbox and content
  }

  .voice-item {
    font-weight: bold;
    color: #566074;
    padding: 0 5px;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .voice-image-container {
    display: flex;
    flex-direction: row;
    margin-left: -30px;
  }
  .delete-btn {
    display: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    grid-column: 8 / 9; // Occupy the last fraction
    justify-self: end;
    align-self: start;
    img {
      width: 16px; // Adjust as needed
    }
  }

  &:hover {
    .delete-btn {
      display: block;
      margin-left: 40px;
    }
  }
  .image-item {
    width: 22px;
    margin-right: 10px;
  }
}
</style>

<!-- <style scoped lang="scss">
/* Your styles here */

.item-content{
  // display: grid;
min-width: 80%;
}
.list-item{
  display: flex;
  /* margin-top:10px;
  padding: 10px; */
  flex-direction: row;
  justify-content: space-between;
    .delete-btn {
      display: none;
      width: 100%;
      height: 100%;
      background-color: transparent;
      justify-self: flex-end;
      border: none;
  }
    &:hover{
    .delete-btn{
      display: flex;
      justify-self: flex-end;
  }
}
}
.list-container{
  background-color: red;
}


.text-container{
  display: flex;
  flex-direction: column;
}
</style> -->
