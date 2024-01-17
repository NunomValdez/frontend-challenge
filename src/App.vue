<template>
  <TranscriptionHeader @postData="handleUploadData" />
  <div v-for="item in storeData" :key="item.id" class="container">
    <ListItem :item="item" />
  </div>
  <RouterView />
</template>

<script setup lang="ts">
import { useRequestStore } from './stores/requests'; // Import the store
import TranscriptionHeader from './components/TranscriptionHeader.vue';
import ListItem from './components/ListItem.vue';
import { computed } from 'vue';

const requestStore = useRequestStore();

const storeData = computed(() => requestStore.data)

// const handleFetchData = () => {
//   requestStore.fetchData(); // Call fetch data method from the store
// };

const handleUploadData = () => {
  requestStore.uploadData(); // Call upload data method from the store
};
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
}
</style>