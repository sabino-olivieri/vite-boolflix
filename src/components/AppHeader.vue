<template>
    <header class="d-flex align-items-center text-center px-3 mb-3">
        <div class="container-fluid">
            <div class="row justify-content-between ">
                <div class="col-12 col-md-auto py-1">
                    <h2>BOOLFLIX</h2>
                </div>
    
                <div class="col-12 col-md-auto d-flex align-items-center py-1">
                    <input type="text" aria-label="Inserisci titolo da cercare" placeholder="Inserisci titolo da cercare">
                    <button>Cerca</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        
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

        input, button{
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