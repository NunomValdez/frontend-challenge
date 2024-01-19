<template>
  <div class="list-item">
    <CustomCheckbox :model-value="item.checked" @update:model-value="handleCheckbox" />
    <div class="item-content">
      <div class="voice-image-container">
        <img src="../../assets-for-challenge/person.svg" alt="person image" class="image-item" />
        <div
          class="item-title"
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
    <button @click="deleteItem(item.id)" class="delete-btn" data-cy="delete-btn">
      <img src="../../assets-for-challenge/delete.svg" alt="delete button" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
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

function deleteItem(id: number) {
  emit('handleDelete', id)
}

function updateVoice(newVoice: string) {
  emit('updateItem', { ...item, voice: newVoice })
}

function updateText(newText: string) {
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
  .custom-checkbox {
    grid-column: 1 / 2;
  }

  .item-content {
    grid-column: 2 / 7;
    flex-direction: column;
    margin-left: -30px;
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
    grid-column: 8 / 9;
    justify-self: end;
    align-self: start;
    img {
      width: 16px;
    }
  }

  &:hover {
    .delete-btn {
      display: block;
      margin-left: 40px;
    }
  }
  .image-item {
    width: 25px;
    margin-right: 10px;
  }
}
</style>
