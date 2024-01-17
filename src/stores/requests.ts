import { ref } from 'vue';
import { defineStore } from 'pinia';
// import axios from 'axios';
import * as mockedData from '../assets/mocked-data.json'

export const useRequestStore = defineStore('request', () => {
  // Data state
  const data: any = ref([])
  const isLoading = ref(false)

  // Fetch data from the API
  async function fetchData() {
    isLoading.value = true
    // try {
    //the API Unbabel gave me is not working as expected, is returning a string instead of an array of objects
      // const response = await axios.get("https://run.mocky.io/v3/ebac0b77-a220-46d3-963c-ae8881c7e4c3")
     data.value = mockedData;
      isLoading.value = false;
    // } catch (err) {
    //   error.value = err
    //   isLoading.value = false
    // }
  }

  // Upload data to the API
  async function uploadData() {
    isLoading.value = true
    try {
        // Replace with your actual upload data logic and URL
         const payload = {
            /* TODO: this will be the added list item*/
        };
      // const response = await axios.post("https://run.mocky.io/v3/ebac0b77-a220-46d3-963c-ae8881c7e4c3", data.value) //data.value will be replaced with the payload to be sent 
      // Handle the response as needed

        isLoading.value = false
        //  console.log(response.data); // response.data will have the server response
    } catch (err) {
      isLoading.value = false
    }
      }

  return { data, isLoading, fetchData, uploadData }
})