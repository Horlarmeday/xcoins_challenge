import { Router } from "express";
import { FavoritesController } from "./favorites.controller";

const router = Router();

router.get('/', FavoritesController.getFavorites);
router.get('/:profile_id', FavoritesController.getFavorite);

export default router;