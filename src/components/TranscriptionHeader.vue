<template>
    <section class="header-section">
        <header class="header">
            <h1 class="title">Transcriptions</h1>
            <div class="buttons">
                <button @click="onGetDataClick">Get Data</button>
                <button @click="handleUploadData">Upload data</button>
            </div>
        </header>
    </section>
</template>

<script setup lang="ts">
import { useRequestStore } from '@/stores/requests';
const requestStore = useRequestStore()

function onGetDataClick() {
    requestStore.fetchData()
}

const handleUploadData = () => {
      requestStore.uploadData()
}
</script>

<style scoped>
.header-section {
    display: flex;
    flex-direction: row;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f5f5f5; 
}

.title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #414C5E;
}

.buttons button {
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    font-size: 16px;
    color: white;
    background-color: #859EFF;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.buttons button:hover {
    background-color: #6c7bd9; /* Darker on hover - use a fixed color if not using SCSS */
}
</style>
