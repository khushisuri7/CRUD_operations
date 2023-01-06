import axios from 'axios';

const URL='http://localhost:8000';
export const addUser=async(data)=>{

    return await axios.post(`${URL}/add`,data);
}