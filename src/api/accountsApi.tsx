import axiosClient from "./axiosClient";
import {v4 as uuid} from 'uuid'
const accountsApi= {
    getAll :() => {
    const url = '/accounts';
    return axiosClient.get(url);
    },
    delete :() => {
        const url = '/accounts/61ea7a6bb7b7ae9bea8f14ba';
        console.log("thanh cong")
        return axiosClient.delete(url);
    }
}
    
export default accountsApi;