import axios from 'axios';

import { Message } from '../../modules/types';

export const sendMessage = (message: Message) => axios.post('api/contact', message);