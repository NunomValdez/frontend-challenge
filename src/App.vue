<template>
  <div class="app-container">
    <TranscriptionHeader @postData="handleUploadData" />
    <div class="list-container">
      <div v-for="item in requestStore.data" :key="item.id">
        <ListItem
          :item="item"
          @handleDelete="onHandleDelete"
          @updateItem="handleUpdateItem"
          @updateCheckbox="handleCheckbox"
        />
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
  console.log(updatedItem, ' check')
  requestStore.updateListItem(updatedItem)
}
</script>

<style scoped>
.app-container {
  display: flex;
  width: 90%;
  margin-top: 20px;
  flex-direction: column;
  border: 2px solid rgba(197, 197, 197, 0.334);
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(128, 128, 128, 0.405);
}
.list-container {
  padding: 0 50px;
  margin: 30px;
}
</style>
