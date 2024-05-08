<template>
    <main>
        <div class="container-lg">
            <div class="row py-3 g-3 justify-content-center"  v-if="store.arrayMovie.length > 0">
                <div class="col-12 text-center">
                    <h2>Film</h2>
                </div>

                <div class="col-12 col-md-6 col-lg-3" v-for="movie in store.arrayMovie">
                    <AppCard :obj="movie"/>
                </div> 
            </div>

            <div class="row py-3 g-3 justify-content-center" v-if="store.arrayTV.length > 0">
                <div class="col-12 text-center">
                    <h2>Serie TV</h2>
                </div>
                <div class="col-12 col-md-6 col-lg-3" v-for="tv in store.arrayTV" >
                    <AppCard :obj="tv"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import AppCard from './App.Card.vue';
import { store } from '../store';

    export default {
        components: {
            AppCard,
        },

        data() {
            return {

                store
            }
        }
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
                    
                }
            }


        }
        
    }
</style>