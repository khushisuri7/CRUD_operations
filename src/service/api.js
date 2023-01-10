import axios from 'axios';

const URL='http://localhost:8000';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${URL}/${id}`);
}

export const addUser=async(data)=>{
try{
    return await axios.post(`${URL}/add`,data);}
    catch(error){
        console.log('error',error);
    }
}

export const getUser=async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`);
    }
        catch(error){
            console.log('error',error);
        }
    }

    export const editUser=async(user,id)=>{
        try{
            return await axios.put(`${URL}/${id}`,user);
        }
            catch(error){
                console.log('error',error);
            }
        }

        export const deleteUser=async(user,id)=>{
            try{
                return await axios.delete(`${URL}/${id}`,user);
            }
                catch(error){
                    console.log('error',error);
                }
            }