import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDrop, useDrag } from 'react-dnd';
import { PANEL } from '../../constants/dragType';
import DropWrapper from './DropWrapper';
import Task from './Task';


const Panel = ({ panel, index, movePanel, onDrop, moveTask }) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: PANEL,
        hover: (item, monitor) => {
            if (!ref.current) return;

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) return;

            const hoveredRect = ref.current.getBoundingClientRect();
            const mousePosition = monitor.getClientOffset();
            
            const hoverMiddleX = (hoveredRect.right - hoveredRect.left) / 2;
            const hoverClientX = mousePosition.x - hoveredRect.left;

            if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) return;

            if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) return;

            movePanel(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        item: { type: PANEL, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    drag(drop(ref));

    return (
        <div 
            ref={ref}
            style={{opacity: isDragging ? 0 : 1,backgroundColor:'white',width:250,height:'100%',marginLeft:20,padding:10,borderRadius:10}}
        >
            <h3>{panel.name}</h3>
            <DropWrapper panelIndex={index} onDrop={onDrop}>
                {panel.tasks.map((task, taskIndex) => (
                    <Task 
                        key={task._id} 
                        task={task}
                        index={taskIndex}
                        panelIndex={index}
                        moveTask={moveTask} 
                    />
                ))}
            </DropWrapper>
        </div>
    );
};

Panel.propTypes = {
    panel: PropTypes.object.isRequired, 
    index: PropTypes.number.isRequired, 
    movePanel: PropTypes.func.isRequired, 
    onDrop: PropTypes.func.isRequired, 
    moveTask: PropTypes.func.isRequired
};

export default Panel;