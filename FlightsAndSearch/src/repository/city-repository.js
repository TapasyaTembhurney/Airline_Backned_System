const { City } = require("../models/index");

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        }
        catch (error) {
            console.error('Error creating city :', error);
            throw { error };
        }
    }
    async deleteCity(cityID) {
        try {
            await City.destroy({
                where:
                {
                    id: cityID
                }
            })
        }
        catch (error) {
            console.error('Error deleting city :', error);
            throw { error };
        }
    }

    async updateCity(cityID, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityID
                }
            })
            return city;
        }
        catch (error) {
            console.log("Something went wrong", error);
            throw { error };
        }
    }
    async getCity(cityID) {
        try {
            const city = await City.findByPK(cityID);
            return city;
        }
        catch (error) {
            console.log('Something went wrong' , error);
            throw { error };
        }
    }
}

//try and catch is used for error handling ,

module.exports = CityRepository;