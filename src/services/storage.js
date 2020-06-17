const getStorageUser = ()=>{
	const user = JSON.parse(localStorage.getItem('user'));
	return user;
};

const setStorageUser = (data)=>{
	window.localStorage.setItem('user', JSON.stringify(data));
};

const deleteStorage = ()=>{
	window.localStorage.clear();
};

export {
	getStorageUser,
	setStorageUser,
	deleteStorage
};