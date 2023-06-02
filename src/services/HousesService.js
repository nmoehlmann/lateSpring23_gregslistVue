import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { House } from "../models/House.js"


class HousesService{

    async getHouses() {
        const res = await api.get('api/houses')
        logger.log('getting houses', res.data)
        AppState.houses = res.data.map(h => new House(h))
        // logger.log('houses in AppState',AppState.houses)
    }

}

export const housesService = new HousesService()