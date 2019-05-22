import { Message } from './Message';

export function buildMessage(): Message {
    const message: Message = new Message();
    message.message = 'Hellow World!';
    message.privateMessage = 'Hello World!<Private>';
    message.publicMessage = 'Hello World!<Public>';
    message.messages = [];

    const message2: Message = new Message();
    message2.message = 'Hellow World!';
    message2.privateMessage = 'Hello World!<Private>';
    message2.publicMessage = 'Hello World!<Public>';
    message2.messages = [];

    message.messages.push(message2);
    return message;
}
