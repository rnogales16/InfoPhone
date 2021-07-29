import axios from 'axios';
import * as CONSTS from '../utils/consts';

// creates a basic url for every request in this file
const apiService = axios.create();

apiService.interceptors.request.use((config)=>{
	const token = localStorage.getItem(CONSTS.ACCESS_TOKEN)
	config.headers.Authorization = token ? token : null
	return config
})

export default apiService