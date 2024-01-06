
import axios from "axios";

export const getAllUsers = async () => {
    const res =  axios.get(`https://blue-angry-gorilla.cyclic.app/users`);
    return await res;
}