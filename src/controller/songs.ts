import { Request, Response } from 'express';

class SongController {
  async getAllSongs(req: Request, res: Response) {
    const songs = [{ name: 'Time will reveal', artist: 'DeBarge' }];

    res.status(200).send(songs);
  }
}

export default new SongController();
