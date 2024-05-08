import { reactive } from 'vue'

export const store = reactive ({
    apiParams: {
        api_key: import.meta.env.VITE_API_KEY,
        language: "it-IT",
        query: ""
    },

    arrayMovie: [],
    arrayTV: []
})