const normalizedResponse = async (apiPromise) => {
	try {
		const { status, data } = await apiPromise;
		if([200, 201].includes(status)){           
            return { error: false, data }; 
        }else{
            return { error: true, data };
        }
	} catch (err) {
		return { error: true, data: err.response.data };
	}
};

export default normalizedResponse;