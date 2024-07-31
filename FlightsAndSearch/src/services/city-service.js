const { CityRepository } = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        }
        catch (error) {
            console.error("Something went wrong at service layer", error);
            throw { error };
        }
    }

    async deleteCity(cityID) {
        try {
            const response = await this.cityRepository.deleteCity(cityID);
            return response;
        }

        catch (error) {
            console.error("Something went wrong at service layer", error);
            throw { error }
        }
    }
    async updateCity(cityID, data) {
        try {
            const city = await this.cityRepository.updateCity(cityID, data);
            return city;
        }
        catch (error) {
            console.error("Something went wrong at service layer", error);
            throw { error }
        }
    }

    async getCity(cityID) {
        try {
            const city = await this.cityRepository.getCity(cityID);
            return city;
        }
        catch (error) {
            console.error("Something went wrong at service layer", error);
            throw { error };
        }
    }
    
    async getAllCities() {
        try {
            const cities = await this.cityRepository.getAllCities();
            return cities;
        } catch (error) {
            console.error("Something went wrong at service layer", error);
            throw { error };
        }
    }
}

module.exports = CityService;