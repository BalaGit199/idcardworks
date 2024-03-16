import axios from 'axios';

const base_URL =  process.env.REACT_APP_BASE_URL;

export const login = async(logindata) => {
     
    return await axios.post(`${base_URL}/userLogin`,logindata);
    
}