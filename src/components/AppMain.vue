<template>
    <main>
        <div class="container-lg mt-5 py-3">
            <div class="row">
                <div class="col-12 text-center">
                    <h2>Film</h2>
                </div>
            </div>
            <div class="row py-3 g-3 justify-content-center"  v-if="store.arrayMovie.length > 0">

                <div class="col-12 col-md-6 col-lg-3" v-for="movie in store.arrayMovie">
                    <AppCard :obj="movie" @buttonClicked="$emit('buttonClicked')"/>
                </div> 
            </div>  

            <AppNoResult v-else />

            <div class="row">
                <div class="col-12 text-center">
                    <h2>Serie TV</h2>
                </div>
            </div>

            <div class="row py-3 g-3 justify-content-center" v-if="store.arrayTV.length > 0">
                <div class="col-12 col-md-6 col-lg-3" v-for="tv in store.arrayTV" >
                    <AppCard :obj="tv" @buttonClicked="$emit('buttonClicked')"/>
                </div>
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
            
            .col-12 {
                h2 {
                    color: black;
                    background-color: white;
                    border-radius: 10px;
                    margin: 0;
                    
                }
            }


        }
        
    }
</style>