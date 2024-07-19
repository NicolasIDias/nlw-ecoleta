import db from "../Database/db"
import generateId from "../Services/generateId"

class SearchRepository {
    async insertPlace(image: string, name: string, address: string, address2: string, state: string, city: string, items: string[]){
        const id = await generateId.gen()
        try{
            db.insertMany({ id: id, 
                            image: image,
                            name: name,
                            address: address,
                            address2: address2,
                            state: state,
                            city: city,
                            items: items

                        })
            return true
        }catch(e){
            return e
        }
    }
    async deletePlace(id: string){
        try{
            const placeToDelete = db.findOneAndDelete({ id: id })
        }catch(e){
            console.log(e)
        }
        
    }
    async findPlaceByCity(city: string){
        const places = db.find({ city: { $regex: new RegExp(city, 'i') } })
        return places
    }
    async getPlaces(){
        const places = db.find({})
        return places
    }
}

export default new SearchRepository()