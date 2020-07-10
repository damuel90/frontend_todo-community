import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Badge } from 'antd';
import { EditFilled, DeleteFilled, TeamOutlined } from '@ant-design/icons';
import themes from '../../constants/cardTheme';
import './styles.less';

const { Paragraph, Title } = Typography;

const ProjectCard = ({ project, handleUpdate, handleDelete }) => {
    const { name, description='Sin Descripción', managers, collaborators, theme } = project;
   
    return (
        <Card.Grid className='card'>
            <Card
                style={{width:'100%',...themes[theme].cardStyles}}
                bordered={theme < 4}
            >
                <Card.Meta
                    title={
                        <Title 
                            ellipsis 
                            level={4} 
                            style={{fontSize:15,padding:0,margin:0,textTransform:'capitalize',...themes[theme].textStyles}}
                        >
                            {name}
                        </Title>
                    }
                    description={
                        <Paragraph style={{padding:0,margin:0,...themes[theme].textStyles}} ellipsis={{rows:2,expandable:true,symbol:'leer más'}}>
                            {description}
                        </Paragraph>
                    }
                />
            </Card>
            <div style={{
                display:'flex',
                justifyContent:'space-around',
                alignItems:'center',
                height: '48.5px',
                ...themes[theme].footerStyle
            }}>
                <Badge offset={[5, 5]} count={managers.length+collaborators.length} style={{backgroundColor:'#108ee9'}}>
                    <TeamOutlined style={{fontSize:20}} key="team" />
                </Badge>
                <EditFilled style={{fontSize:20}} key="edit" onClick={handleUpdate} />
                <DeleteFilled style={{fontSize:20}} key="delte" onClick={handleDelete} />
            </div>
        </Card.Grid>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired, 
    handleUpdate: PropTypes.func.isRequired, 
    handleDelete: PropTypes.func.isRequired
};

export default ProjectCard;