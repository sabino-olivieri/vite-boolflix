<template>
    <div class="ms_card">

        <div class="ms_front-card text-center">
            <img :src="getImagePath(obj.poster_path)" alt="">  
        </div>



        <!-- movie -->
        <div class="ms_back-card p-4">
            <div class="row g-3">
                <div class="col-4" ><span>Titolo:</span></div>
                
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
                    <i class="fa-regular fa-star" v-for="num in 5 - Math.round( obj.vote_average / 2)"></i>
                    
                </div> 
            </div>
        </div>
        
    </div>  
</template>

<script>
    export default {
        props: {
            obj: Object,
        },

        data() {
            return {
                
            }
        },


        methods: {
        getImagePath(img) {
            return new URL("https://image.tmdb.org/t/p/w342" + img, import.meta.url).href;
        },

        getImageFlag(img) {
            return new URL(`../assets/flags/${img}.svg`, import.meta.url).href;
        }
    }

    }
</script>

<style lang="scss" scoped>
    .ms_card {
        background-color: white;
        border-radius: 10px;
        padding: 5px;
        height: 400px;
        

        .ms_front-card {
            height: 100%;
            
        }

        .ms_back-card {
            display: none;
            font-size: 0.8rem;

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
        }

        &:hover .ms_front-card {
            display: none;
        }

        &:hover .ms_back-card {
            display: block;
        }
        img {
            max-width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    }
</style>