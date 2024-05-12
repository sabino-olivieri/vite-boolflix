<template>
    <main>
        <div class="container-lg mt-5 py-3">
            <div class="row">
                <div class="col text-center">
                    <h2>Film {{ store.apiParams.query }}</h2>
                </div>

                <div class="col-auto">
                    <select name="" id="" v-model="store.curGenreMovie">
                        <option value="">All</option>
                        <option :value="genre.id" v-for="genre in store.movieGenres">{{ genre.name }}</option>
                    </select>
                </div>
            </div>
            <div class="row py-3 g-3 justify-content-center"  v-if="store.arrayMovie.length > 0 ">

                    <AppCard v-for="movie in store.arrayMovie" :obj="movie" @buttonClicked="$emit('buttonClicked')"/>
                
            </div>  

            <AppNoResult v-else />

            <div class="row">
                <div class="col text-center">
                    <h2>Serie TV {{ store.apiParams.query }}</h2>
                </div>

                <div class="col-auto">
                    <select name="" id="" v-model="store.curGenreTv">
                        <option value="">All</option>
                        <option :value="genre.id" v-for="genre in store.tvGenres">{{ genre.name }}</option>
                    </select>
                </div>
            </div>

            <div class="row py-3 g-3 justify-content-center" v-if="store.arrayTV.length > 0">
                
                    <AppCard v-for="tv in store.arrayTV" :obj="tv" @buttonClicked="$emit('buttonClicked')"/>

            </div>

            <AppNoResult v-else />
        </div>
    </main>
</template>

<script>
import AppCard from './App.Card.vue';
import { store } from '../store';
import AppNoResult from './AppNoResult.vue';

    export default {
        components: {
            AppCard,
                AppNoResult,
        },

        data() {
            return {

                store
            }
        },


    }
</script>

<style lang="scss" scoped>
    .container-lg {
        background-color: #222222;
        border-radius: 10px;

        .row {
            
            .col {
                h2 {
                    color: black;
                    background-color: white;
                    border-radius: 10px;
                    margin: 0;
                    
                }
            }

            select {
                border: 0;
                border-radius: 10px;
                height: 100%;
                padding: 5px
            }


        }
        
    }
</style>