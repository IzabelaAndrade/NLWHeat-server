import {Request, Response} from 'express';
import { GetLast3messagesService } from '../services/GetLast3messagesService';

class GetLast3messagesController {
  async handle(request: Request, response: Response) {
    const service = new GetLast3messagesService();

    const result = await service.execute();

    return response.json(result);

  }
}

export {GetLast3messagesController}