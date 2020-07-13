import axios from 'axios';
import normalizedResponse from '../utils/normalizedResponse';

const urlBase = 'http://localhost:8888/v1/api';

const signup = async ({ fullName, email, password })=>{
	let formData = new FormData();
	formData.append('fullName', fullName);
	formData.append('email', email);
	formData.append('password', password);

    return await normalizedResponse(axios({
		method:'post',
		url : `${urlBase}/user/signup`,
		data : formData,
		headers: {'content-type':'multipart/form-data'}
	}));
};

const login = async ({ email, password })=>{
	return await normalizedResponse(axios({
		method:'post',
		url:`${urlBase}/user/signin`,
		data: { email, password }
	}))
};

const createProject = async ({ name, type, description, theme }, token)=>{
	return await normalizedResponse(axios({
		method:'post',
		url:`${urlBase}/project`,
		data: {
			name, 
			type, 
			description,
			theme
		},
		headers:{'Authorization': "bearer " + token}
	}));
};

const getUserProjects = async (token) => {
	return await normalizedResponse(axios({
		method:'get',
		url:`${urlBase}/project`,
		headers:{'content-type':'multipart/form-data','Authorization': "bearer " + token}
	}))
};

const updateProject = async ({ _id, name, type, description, theme }, token)=>{
	return await normalizedResponse(axios({
		method:'patch',
		url:`${urlBase}/project`,
		data:{
			projectId: _id,
			name, 
			type, 
			description, 
			theme
		},
		headers:{'Authorization': "bearer " + token}
	}))
};

const deleteProject = async (projectId, token)=>{
	return await normalizedResponse(axios({
		method:'delete',
		url:`${urlBase}/project/${projectId}`,
		headers:{'Authorization': "bearer " + token}
	}))
};

export default {
    signup,
	login,
	createProject,
	getUserProjects,
	updateProject,
	deleteProject
};