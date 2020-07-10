import React from 'react';
import background from '../../assets/images/design_feedback.svg';
import { Card, Typography } from 'antd';

const ForgotPassword = () => {
    return (
        <div
            style={{
                backgroundColor:'#fafafa',
                width: '100%',
                height:'calc(100vh - 60px)',
                marginTop:'60px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage:`url(${background})`,
                backgroundSize: 'contain',
                display:'flex',
                justifyContent:'center',
                
            }}
        >
           <Card color='' style={{maxWidth:400, height: 'auto', alignSelf:'center'}}>
                <Typography.Title style={{textAlign:'center',margin:'20px 0 30px 0'}} level={4}>
                    Pagina en construcción
                </Typography.Title>
           </Card>
        </div>
    );
};

export default ForgotPassword;