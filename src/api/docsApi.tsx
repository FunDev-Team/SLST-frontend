import axiosClient from "./axiosClient";

const docsApi= {
    getAll :() => {
    const url = '/docs';
    return axiosClient.get(url);
    },
    post :(params : any) => {
        const url = '/docs';
        console.log("url post : ",url);
        return axiosClient.post(url,params);
    },
    delete :(params : any) => {
        console.log("id : ",params);
        const url = `/docs/${params}`;
        console.log("url : ",url);
        return axiosClient.delete(url);
    },

}
export default docsApi;