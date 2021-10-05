import { Router } from 'express';
import songController from "../controller/songs"

const router = Router();

router.get("/", songController.getAllSongs);

export default router;
