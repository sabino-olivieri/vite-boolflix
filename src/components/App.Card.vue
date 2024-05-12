<template>
    <div class="ms_card" @mouseleave="store.currentIdCast = []">

        <div class="ms_flip-card-inner">

            <div class="ms_front-card text-center">
                <img :src="getImagePath(obj.poster_path)" alt="">
            </div>

            <div class="ms_back-card p-4">
                <div class="row g-3">
                    <div class="col-4"><span>Titolo:</span></div>

                    <div class="col-8" v-if="!!obj.name">{{ obj.name }}</div>
                    <div class="col-8" v-else>{{ obj.title }}</div>

                    <div class="col-4"><span>Titolo originale:</span></div>
                    <div class="col-8" v-if="!!obj.original_name">{{ obj.original_name }}</div>
                    <div class="col-8" v-else>{{ obj.original_title }}</div>

                    <div class="col-4"><span>Lingua:</span></div>
                    <div class="col-8"><img :src="getImageFlag(obj.original_language)" class="flag" alt=""></div>
                    <div class="col-4"><span>Voto:</span></div>
                    <div class="col-8">
                        <i class="fa-solid fa-star" v-for="num in Math.round(obj.vote_average / 2)"></i>
                        <i class="fa-regular fa-star" v-for="num in 5 - Math.round(obj.vote_average / 2)"></i>
                    </div>

                    <div class="col text-center mt-4">
                        <button @click="currentId(obj), $emit('buttonClicked')">Mostra Cast</button>
                    </div>

                </div>

                <AppLoader v-if="store.isLoading" />
                <div class="row mt-4" v-if="store.currentIdCast">
                    <div class="col-12" v-for="actor in store.currentIdCast">{{ actor }}</div>
                </div>


            </div>
        </div>


    </div>
</template>

<script>
import { store } from '../store';
import AppLoader from './AppLoader.vue';

export default {
    components: { AppLoader },
    props: {
        obj: Object,
    },

    data() {
        return {
            store,
        }
    },


    methods: {
        getImagePath(img) {
            return new URL("https://image.tmdb.org/t/p/w342" + img, import.meta.url).href;
        },

        getImageFlag(img) {
            return new URL(`../assets/flags/${img}.svg`, import.meta.url).href;
        },

        currentId(obj) {
            console.log("id");
            store.currentId.id = obj.id;

            if(!!obj.original_title){
                store.currentId.type = "movie";
            } else {
                store.currentId.type = "tv";
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.ms_card {
    height: 400px;
    perspective: 2500px;


    .ms_flip-card-inner {
        background-color: white;
        border-radius: 10px;
        height: 400px;

        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 1.5s;
        transform-style: preserve-3d;
    }

    &:hover .ms_flip-card-inner {
        transform: rotateY(180deg);
    }

    .ms_front-card,
    .ms_back-card {
        padding: 5px;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .ms_front-card {
        height: 100%;

    }

    .ms_back-card {
        font-size: 0.8rem;
        transform: rotateY(180deg);
        overflow: auto;

        span {
            font-weight: bold;
        }

        .flag {
            border-radius: 5px;
            max-width: 30px;
            border: 1px solid lightgray;
        }

        .fa-star {
            color: gold;
        }

        button {
            border: 0px;
            border-radius: 5px;
            padding: 5px 10px;
            background-color: red;
            color: white;
            font-weight: bold;
        }
    }



    img {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
}
</style>