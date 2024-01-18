import { defineStore } from 'pinia'
import mockedData from '../assets/mocked-data.json'
import axios from 'axios'

type StateInterface = {
  data: ListItem[]
}

type ListItem = {
  id: string
  voice: string
  text: string
}

export const useRequestStore = defineStore('RequestsStore', {
  state: (): StateInterface => ({
    data: []
  }),
  actions: {
    async fetchData() {
      // const response = await axios.get("https://run.mocky.io/v3/ebac0b77-a220-46d3-963c-ae8881c7e4c3")
      // console.log('this is the type returned from the endpoint: ', typeof response.data, response)

      /*
    NOTE: this endpoint is returning a string, even though visually looks like a JSON object, the type is string, that's why I had to mock the returned data instead of making the actual HTTP request. Sorry guys, I tried to trim the string, and modify the string and transform it into a JSON, but it was taking me too long to do it, so I decided to mock the data and leave this comment here explaining why I did this 
    */
      this.data = mockedData.map((item) => ({
        ...item,
        checked: false
      }))
    },
    async uploadData() {
      try {
        const dataToBeSent = [
          ...this.data.map((item) => {
            return (item = { id: item.id, voice: item.voice, text: item.text })
          })
        ]
        const sentData = await axios.post(
          'https://run.mocky.io/v3/ebac0b77-a220-46d3-963c-ae8881c7e4c3',
          dataToBeSent
        )
        console.log('sent data: ', JSON.parse(sentData.data))
      } catch (error) {
        console.error('There was an error sending the new list items:', error)
      }
    },
    updateListItem(updatedItem: ListItem) {
      const index = this.data.findIndex((listItem) => listItem.id === updatedItem.id)
      if (index !== -1) {
        this.data[index] = updatedItem
      }
    },
    deleteItem(id: string) {
      this.data = this.data.filter((item) => item.id !== id)
    },
    async addNewItem(newItem: any) {
      // try {
      //   const response = await axios.post("https://run.mocky.io/v3/ebac0b77-a220-46d3-963c-ae8881c7e4c3", newItem);
      //   // Optionally, if the API returns the created item with an ID, add it to your data
      //   this.data.push(response.data);
      // } catch (error) {
      //   console.error('There was an error adding the new item:', error);
      // }
      this.data.push(newItem)
    }
  },
  getters: {
    // Example getter
    itemCount: (state) => state.data.length
  }
})
