import axios from 'axios';
import apiConfig from '../config/apiConfig';

const BASE_URL = `${apiConfig.apiUrl}:${apiConfig.port}/api/messages`;

export default {
  async sendMessage(message) {
    try {
      //const response = await axios.post(BASE_URL, { message });
      //return response.data; 
      return "Message sent!";
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
};
