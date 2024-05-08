<template>
    <div class="ms_card">

        <div class="ms_front-card text-center">
            <img :src="getImagePath(obj.poster_path)" alt="">  
        </div>

        <!-- serieTV -->
        <div class="ms_back-card p-4" v-if="obj.original_name != null">
            <div class="row row-cols-2">
                <div class="col-auto"><h5>Titolo:</h5></div>
                <div class="col-auto">{{ obj.original_name }}</div>
            </div>
        </div>

        <!-- movie -->
        <div class="ms_back-card p-4" v-else>
            <div class="row g-3">
                <div class="col-4"><span>Titolo:</span></div>
                <div class="col-8">{{ obj.title }}</div>
                <div class="col-4"><span>Titolo originale:</span></div>
                <div class="col-8">{{ obj.original_title }}</div>
                <div class="col-4"><span>Lingua:</span></div>
                <div class="col-8">{{ obj.original_language }}</div>
                <div class="col-4"><span>Voto:</span></div>
                <div class="col-8">{{ obj.vote_average }}</div>
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
        }
    }

    }
</script>

<style lang="scss" scoped>
    .ms_card {
        background-color: white;
        border-radius: 10px;
        padding: 5px;
        height: 100%;
        

        .ms_front-card {
            height: 100%;
            
        }

        .ms_back-card {
            display: none;
            font-size: 0.8rem;

            span {
                font-weight: bold;
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