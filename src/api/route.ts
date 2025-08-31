import axios, { AxiosError } from "axios";

export const send_message = async (message_details: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await axios.post("https://portfolio-server-ugdf.onrender.com/api/contact", message_details);
    return response.data;
  } catch (error) {
    const axios_error = error as AxiosError;
    console.error("Error sending message:", axios_error);
    throw error;
  }
};



