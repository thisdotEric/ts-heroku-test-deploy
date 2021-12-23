import { Request, Response } from 'express';
import db from '../database/db';

class SongController {
  async getAllSongs(req: Request, res: Response) {
    //    const songs = [{ name: 'Time will reveal', artist: 'DeBarge' }];

    const songsList = await db.getDbInstance()('songs').select('*');

    res.status(200).send(songsList);
  }
}

export default new SongController();
