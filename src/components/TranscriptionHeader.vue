<template>
  <header class="header">
    <h1 class="title">Transcriptions</h1>
    <div class="buttons">
      <button @click="handleUploadData">
        <img src="../../assets-for-challenge/upload.svg" alt="Upload Data" />
      </button>
      <button @click="onGetDataClick">
        <img src="../../assets-for-challenge/fetch-document@1x.png" alt="Get Data" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRequestStore } from '@/stores/RequestsStore'
const requestStore = useRequestStore()

function onGetDataClick() {
  return requestStore.fetchData()
}

const handleUploadData = () => {
  requestStore.uploadData()
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1% 10%;
  border-bottom: 2px solid rgba(128, 128, 128, 0.159);
}

.title {
  font-family: 'Montserrat', sans-serif;
  padding: 0 5%;
  font-weight: 400;
  font-size: 18px;
  color: #414c5e;
}

.buttons button {
  margin-left: 1rem;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.buttons button:hover {
  background-color: #e1e1e3;
}
</style>
@/stores/RequestsStore
