import { Injectable } from '@nestjs/common';
import { Message } from './Message';
import { buildMessage } from './utils';

@Injectable()
export class AppService {
  getHello(): Message {
    return buildMessage();
  }
}
