import axios from 'axios';

const URL='';
export const addUser=async(data)=>{

    return await axios.post(`${URL}/add`,data);
}