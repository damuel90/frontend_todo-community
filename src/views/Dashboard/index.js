import React, { useState } from 'react';
import { Layout } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Panel from './Panel';
import Sider from './Sider';


const { Content } = Layout

const initPanels = [
    {
        name: 'No completados',
        _id: 'a',
        position: 0,
        tasks: [
            {
                _id: '1',
                title: 'diseñar mockup',
                description: 'Interfas de usuario de la app',
            },
            {
                _id: '2',
                title: 'diseñar base de datos del usuario',
                description: 'CRUD del usuario'
            }
        ]
    },
    {
        name: 'pruebas',
        _id: 'b',
        position: 1,
        tasks: []
    },
    {
        name: 'Completados',
        _id: 'c',
        position: 2,
        tasks: []
    }
]

const Dashboard = props => {
    const [ panels, setPanels ] = useState(initPanels);

    const movePanel = (startPos, endPos) => {
        const panel = panels[startPos];
        // de panel se obtiene projectId y panelId y se envia junto con startPos y endPos para la api
        setPanels(prevState => {
            const newPanels = prevState.filter((i, index) => index !== startPos);
            newPanels.splice(endPos, 0, panel);
            return  [ ...newPanels ];
        });
    };

    const onDrop = (panel1Index, taskIndex, panel2Index) => {
        const panel1 = panels[panel1Index];
        const panel2 = panels[panel2Index];
        const task = panel1.tasks[taskIndex];
        // se obtiene projectId y panel1Id de panel1, panel2Id del panel2 y taskId de task y se envia a la api
        const newTasks = panel1.tasks.filter((i, index) => index !== taskIndex);
        panel1.tasks = newTasks;
        panel2.tasks.push(task);
        
        setPanels(prevState => {
            const newState = [...prevState];
            newState[panel1Index] = panel1;
            newState[panel2Index] = panel2;
            return  [ ...newState ];
        })
    };

    const moveTask = (startIndex, endIndex, panelIndex) => {
        const panel = panels[panelIndex];
        const task = panel.tasks[startIndex];
        const tasks = panel.tasks.filter((i, index) => index !== startIndex);
        tasks.splice(endIndex, 0, task);
        // de panel se obtiene projectId y panelId y se envia junto con tasks a la api
        setPanels(prevState => {
            const newState = [...prevState];
            newState[panelIndex].tasks = tasks;
            return  [ ...newState ];
        });
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <Layout style={{height:'calc(100vh - 60px)',marginTop:'60px'}}>
                <Sider />
                <Content style={{paddingTop:20,paddingBottom:20,display:'flex'}}>
                    {panels.map((panel, index) => (
                        <Panel 
                            key={panel._id} {...{panel, index, movePanel, onDrop, moveTask}} 
                        />
                    ))}
                </Content>
            </Layout>
        </DndProvider>
    );
};

export default Dashboard;