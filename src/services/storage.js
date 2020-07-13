const getStorageUser = ()=>{
	const user = JSON.parse(localStorage.getItem('user'));
	return user;
};

const setStorageUser = (data)=>{
	window.localStorage.setItem('user', JSON.stringify(data));
};

const getStorageProjects = ()=>{
	const projects = JSON.parse(localStorage.getItem('projects'));
	return projects;
};

const setStorageProjects = (data)=>{
	window.localStorage.setItem('projects', JSON.stringify(data));
};

const getStorageProject = ()=>{
	const projects = JSON.parse(localStorage.getItem('project'));
	return projects;
};

const setStorageProject = (data)=>{
	window.localStorage.setItem('project', JSON.stringify(data));
};

const removeStorageProject = ()=>{
	window.localStorage.removeItem('project');
};

const deleteStorage = ()=>{
	window.localStorage.clear();
};

export {
	getStorageUser,
	setStorageUser,
	getStorageProjects,
	setStorageProjects,
	getStorageProject,
	setStorageProject,
	removeStorageProject,
	deleteStorage
};