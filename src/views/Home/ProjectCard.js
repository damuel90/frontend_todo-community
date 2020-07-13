import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Badge, Tooltip } from 'antd';
import { EditFilled, DeleteFilled, TeamOutlined } from '@ant-design/icons';
import themes from '../../constants/cardTheme';
import './styles.less';

const { Paragraph, Title } = Typography;

const ProjectCard = ({ project, created, handleUpdate, handleSelect, handleDelete }) => {
    const { name, description='Sin Descripción', managers, collaborators, theme } = project;

    return (
        <Card.Grid className='card' onClick={handleSelect}>
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
                        <Paragraph 
                            style={{padding:0,margin:0,...themes[theme].textStyles}} 
                            ellipsis={{rows:2,expandable:true,symbol:'leer más',onExpand:(e)=>e.stopPropagation()}}
                        >
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
                {created &&
                    <Fragment>
                        <Tooltip title='Invitar'>
                        <Badge offset={[5, 5]} count={managers.length+collaborators.length} style={{backgroundColor:'#108ee9'}}>
                            <TeamOutlined style={{fontSize:20}} key="team" />
                        </Badge>
                        </Tooltip>
                        <Tooltip title='Actualizar'>
                            <EditFilled style={{fontSize:20}} key="edit" onClick={handleUpdate} />
                        </Tooltip>
                        <Tooltip title='Eliminar'>
                            <DeleteFilled style={{fontSize:20}} key="delte" onClick={handleDelete} />
                        </Tooltip>
                    </Fragment>
                }
            </div>
        </Card.Grid>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired, 
    handleSelect: PropTypes.func.isRequired,
    created: PropTypes.bool.isRequired,
    handleUpdate: PropTypes.func, 
    handleDelete: PropTypes.func
};

export default ProjectCard;