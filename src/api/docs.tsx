import axiosClient from './axiosClient'

const  ProductApi= {
  getAll: (params: any) => {
        const url = "/docs";
        return axiosClient.get(url, { params });
    },

    get: (id: any) => {
        const url = `/docs/${id}`;
        return axiosClient.get(url);
    },
  
}

export default ProductApi;
