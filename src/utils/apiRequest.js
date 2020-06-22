import { message as Message } from "antd";
const options = {
    key: 'apiMessage',
    style: {marginTop:'60px'}
};

const apiRequest = async (apiPromise) => {
    Message.loading({...options, content: 'Cargando...'});
    try {
        const { status, data } = await apiPromise;
        
        if(status === 201 || status === 200){
            const { message, fullName } = data;
            if(fullName) {
                Message.success({ 
                    ...options,
                    content: `Bienvenido ${fullName}`, 
                    style: {marginTop: '60px', textTransform: 'capitalize'},
                    duration: 2
                });
            } else if(message) {
                Message.success({...options, content: message, duration: 2});
            }
            return data;
        }else{
            Message.success({...options, content: data.message, duration: 2});
            return null;
        }
    } catch (error) {
        Message.success({...options, content: error.message, duration: 2});
        return null;
    }
};

export default apiRequest;