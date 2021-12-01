let axiosInstance = axios.create({
    baseURL: 'https://api.gudoc.in',
    // baseURL: 'http://localhost:5000',
    timeout: 3000,
    headers: {'X-Http-Token': $.cookie('userToken')}
})