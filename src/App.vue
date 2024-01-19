<template>
  <div class="app-container">
    <TranscriptionHeader @postData="handleUploadData" />
    <div class="list-container">
      <div v-for="item in requestStore.data" :key="item.id" data-cy="list-item">
        <ListItem
          :item="item"
          @handleDelete="onHandleDelete"
          @updateItem="handleUpdateItem"
          @updateCheckbox="handleCheckbox"
        />
      </div>
      <div class="add-row-btn">
        <button @click="handleAddRowButton" data-cy="add-row-btn">
          <img src="../assets-for-challenge/add-row.svg" alt="" />
        </button>
      </div>
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRequestStore } from './stores/RequestsStore'
import TranscriptionHeader from './components/TranscriptionHeader.vue'
import ListItem from './components/ListItem.vue'

const requestStore = useRequestStore()

const onHandleDelete = (id: string) => {
  requestStore.deleteItem(id)
}

const handleUploadData = () => {
  requestStore.uploadData()
}

const handleUpdateItem = (item: any) => {
  requestStore.updateListItem(item)
}

const handleCheckbox = (updatedItem: any) => {
  requestStore.updateListItem(updatedItem)
}

const handleAddRowButton = () => {
  const newListItem = {
    id: Date.now().toString(), // Unique ID, e.g., using the current timestamp
    voice: 'Voice Title',
    text: 'Write here',
    checked: false
  }
  requestStore.addNewItem(newListItem)
}
</script>

<style scoped lang="scss">
.app-container {
  display: flex;
  min-width: 900px;
  width: 90%;
  margin-top: 20px;
  flex-direction: column;
  border: 2px solid rgba(197, 197, 197, 0.334);
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(128, 128, 128, 0.405);
}
.add-row-btn {
  display: flex;
  justify-content: center;
  margin: 50px;
  margin-top: 30px;
  button {
    border: none;
    background-color: transparent;
  }
}
.list-container {
  padding: 0 40px;
  margin: 0 70px;
}
</style>
