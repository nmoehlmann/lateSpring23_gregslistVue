<template>

    <div class="container-fluid">
        <section class="row">

            <div class="col-md-3 my-3" v-for="house in housesInAppState" :ref_key="house.id">
                <houseCard :houseProp="house" />
            </div>
        </section>
    </div>

</template>


<script>
import { onMounted, computed } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { housesService } from '../services/HousesService.js'
import houseCard from '../components/HouseCard.vue'

export default {
    setup(){
        
        async function getHouses(){
            try {
                await housesService.getHouses()
            } catch (error) {
                Pop.error(error.message)
                logger.log(error)
            }
        }

        onMounted(() => {
            getHouses()
        })

        return {
            housesInAppState: computed(() => AppState.houses)
        }

    }
}
</script>


<style>

</style>