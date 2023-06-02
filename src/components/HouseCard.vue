<template>

    <div class="rounded elevation-5" v-if="houseProp">
        <img class="img-fluid rounded-top" :src="houseProp?.imgUrl" alt="">
        <div class="p-2">
            <h3>{{ houseProp?.description }}</h3>
            <p>{{ houseProp?.price }}</p>
        </div>
    </div>

</template>


<script>
import { House } from '../models/House.js';
export default {

    props: {
        houseProp: {type: House, required: true}
    },

    setup(){
        return {}
    }
}
</script>


<style>

</style>