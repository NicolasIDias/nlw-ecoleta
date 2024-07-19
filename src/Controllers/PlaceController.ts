import { Request, Response } from "express";
import pr from "../Repository/PlacesRepository";

class PlaceController {
    async search(request: Request, response: Response) {
        const search = request.query.search
        if (search == "") return response.render("search-results.html", { total: 0 })
        if(typeof(search) == 'string'){
            const places = await pr.findPlaceByCity(search)
            response.render("search-results.html", { total: places.length, places: places })
        }

    }
    async addPlace(request: Request, response: Response) {
        const { image, name, address, address2, state, city, items } = request.body
        const insert = pr.insertPlace(image, name, address, address2, state, city, items)
        if(insert) return response.render("create-point.html", {saved:insert})
        else return response.send("Erro no cadastro!")
    }
}

export default new PlaceController()