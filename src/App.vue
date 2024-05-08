<template>
  <AppHeader @clicked="getList()" @enterKeyUp="getList()" />
  <AppMain />
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


    }
  }
}
</script>

<style lang="scss" scoped></style>