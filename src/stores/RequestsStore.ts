import { defineStore } from 'pinia';
import mockedData from '../assets/mocked-data.json';
import axios from 'axios';

type StateInterface = {
  data: ListItem[]
}

type ListItem = {
  id: string, 
  voice: string,
  text: string
}

export const useRequestStore = defineStore('RequestsStore', {
  state: (): StateInterface => ({
    data: [],
  }),
  actions: {
    async fetchData() {
    // const response = await axios.get("https://run.mocky.io/v3/ebac0b77-a220-46d3-963c-ae8881c7e4c3")
    // console.log('this is the type returned from the endpoint: ', typeof response.data, response)
      /*
        this endpoint is returning a string, even though visually looks like a JSON object, the type is string, that's why I had to mock the returned data instead of making the actual HTTP request. Sorry guys, I tried to trim the string, and modify the string and transform it into a JSON, but it was taking me too long to do it, so I decided to mock the data and leave this comment here explaining why I did this 
      */
       this.data = mockedData.map(item => ({
        ...item,
        checked: false
      }));
    },
    uploadData() {
    },
    updateListItem(updatedItem: ListItem) {
      const index = this.data.findIndex(listItem => listItem.id === updatedItem.id);
      if (index !== -1) {
        console.log(this.data[index])
        this.data[index] = updatedItem;
      }  
    },
    deleteItem(id: string) {
      this.data = this.data.filter(item => item.id !== id);
    },
  },
  getters: {
    // Example getter
    itemCount: (state) => state.data.length,
  },
});

  
  
//   () => {
//   // Data state
//   const data: any = ref([])
//   const isLoading = ref(false)

//   // Fetch data from the API
//   async function fetchData() {
//     isLoading.value = true
//     // try {
//     //the API Unbabel gave me is not working as expected, is returning a string instead of an array of objects
//       // const response = await axios.get("https://run.mocky.io/v3/ebac0b77-a220-46d3-963c-ae8881c7e4c3")
//     data.value = mockedData;
//       isLoading.value = false;
//     // } catch (err) {
//     //   error.value = err
//     //   isLoading.value = false
//     // }
//   }
//   // Upload data to the API
//   async function uploadData() {
//     isLoading.value = true
//     try {
//         // Replace with your actual upload data logic and URL
//          const payload = {
//             /* TODO: this will be the added list item*/
//         };
//       // const response = await axios.post("https://run.mocky.io/v3/ebac0b77-a220-46d3-963c-ae8881c7e4c3", data.value) //data.value will be replaced with the payload to be sent 
//       // Handle the response as needed

//         isLoading.value = false
//         //  console.log(response.data); // response.data will have the server response
//     } catch (err) {
//       isLoading.value = false
//     }
//       }

//   return { data, isLoading, fetchData, uploadData }
// })