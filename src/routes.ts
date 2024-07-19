import { Request, Response, Router } from 'express';
import PlaceController from './Controllers/PlaceController';


const router = Router();

router.get("/", (request: Request, response: Response)=> {
    return response.render("index.html")
})

router.get("/create-point", (request: Request, response: Response) => {
    return response.render("create-point.html")
})

router.get("/search", PlaceController.search)

router.post("/savepoint", PlaceController.addPlace)

export default router;
