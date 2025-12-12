class AxiosInstance {
    apiClient: Axios.AxiosInstance
    constructor(){
        this.apiClient = axios.create({baseURL: "", timeout: 60000})
    }
}