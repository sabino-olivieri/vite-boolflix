import { reactive } from 'vue'

export const store = reactive ({
    apiParams: {
        api_key: import.meta.env.VITE_API_KEY,
        language: "it-IT",
        query: ""
    },

    arrayMovie: [],
    arrayTV: [],
    isLoading: null,
    currentId: {
        id: "",
        type: ""
    },
    currentIdCast: null,
    movieGenres: [],
    tvGenres: [],
    curGenreMovie: "",
    curGenreTv: "",
})