<template>
    <header class="d-flex align-items-center text-center px-3 mb-3">
        <div class="container-fluid">
            <div class="row justify-content-between ">
                <div class="col-12 col-md-auto py-1">
                    <h2>BOOLFLIX</h2>
                </div>

                <div class="col-12 col-md-auto d-flex align-items-center justify-content-center py-1">
                    <input type="text" aria-label="Inserisci titolo da cercare"
                        placeholder="Inserisci titolo da cercare" @keyup.enter="cancel() ,$emit('enterKeyUp')" v-model.trim="textInput">
                    <button @click="cancel() ,$emit('clicked')">Cerca</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
            textInput: "",
        }
    },

    methods: {
        cancel() {
            this.store.apiParams.query = this.textInput;
            this.textInput = "";
        },
    },
}
</script>

<style lang="scss" scoped>
header {
    background-color: black;
    height: 100px;

    h2 {
        margin: 0;
        color: red;
        font-weight: bold;
    }

    input,
    button {
        border: 0;
        padding: 10px;
    }

    input {
        border-radius: 10px 0 0 10px;
    }

    button {
        border-radius: 0 10px 10px 0;
        background-color: red;
        color: white;
    }
}
</style>