import axios from 'axios';
import useApi from './useApi';
const urlBase = 'http://localhost:8888/v1/api';

const signup = ({ fullName, email, password })=>{
	let formData = new FormData();
	formData.append('fullName', fullName);
	formData.append('email', email);
	formData.append('password', password);

    return axios({
		method:'post',
		url : `${urlBase}/user/signup`,
		data : formData,
		headers: {'content-type':'multipart/form-data'}
	})
	.then(response => response)
	.catch(err => err.response)
};

const login = ({ email, password })=>{
	return axios({
		method:'post',
		url:`${urlBase}/user/signin`,
		data: { email, password }
	})
	.then(response => response)
	.catch(err => err.response)
};

export {
	useApi
};

export default {
    signup,
    login
};