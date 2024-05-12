<template>
  <AppHeader @clicked="getList()" @enterKeyUp="getList()" />
  <AppMain @buttonClicked="getCast()"/>
</template>

<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import { store } from './store';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }   
  },

  created() {
    axios.get('https://api.themoviedb.org/3/genre/movie/list', {
          params: {
            api_key: import.meta.env.VITE_API_KEY,
          }
        }).then((resp) => {
          console.log(resp);
          this.store.movieGenres = resp.data.genres;
        });

        axios.get('https://api.themoviedb.org/3/genre/tv/list', {
          params: {
            api_key: import.meta.env.VITE_API_KEY,
          }
        }).then((resp) => {
          console.log(resp);
          this.store.tvGenres = resp.data.genres;
        });
  },

  methods: {
    getList() {
      if(this.store.apiParams.query !== "") {

        // movie
        axios.get('https://api.themoviedb.org/3/search/movie', {
          params: this.store.apiParams
        }).then((resp) => {
          this.store.arrayMovie = resp.data.results;
        });
  
        // TV
        axios.get('https://api.themoviedb.org/3/search/tv', {
          params: this.store.apiParams
        }).then((resp) => {
          console.log(resp);
          this.store.arrayTV = resp.data.results;
        });

      }


    },

    getCast() {

      store.isLoading = true;
      store.currentIdCast = [];  
      setTimeout(()=> {
        console.log("cast");
        axios.get('https://api.themoviedb.org/3/'+ store.currentId.type + "/" + store.currentId.id + "/credits", {
            params: {
              api_key: import.meta.env.VITE_API_KEY,
            }
          }).then((resp) => {
            console.log(resp);
            if(resp.data.cast.length > 0) {
              for(let i = 0; i < 5; i++) {
                
                if(i < resp.data.cast.length) {

                  store.currentIdCast.push(resp.data.cast[i].name);
                } 
                
                  
              }
            } else {
              store.currentIdCast.push("Nessun attore trovato");
            }
            store.isLoading = false;
          });
      },500);
    }
  }
}
</script>

<style lang="scss" scoped></style>