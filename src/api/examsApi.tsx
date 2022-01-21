import axiosClient from "./axiosClient";

const examsApi= {
    getAll :() => {
    const url = '/exams';
    return axiosClient.get(url);
    },
    post :(params : any) => {
        const url = '/exams';
        return axiosClient.post(url,params);
    },
    delete :(params : any) => {
       
        const url = `/exams/${params}`;
        console.log("url : ",url);
        return axiosClient.delete(url);
    },
}
export default examsApi;