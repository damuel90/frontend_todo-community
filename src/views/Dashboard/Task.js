import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDrop, useDrag } from 'react-dnd';
import { CARD } from '../../constants/dragType';

const Task = ({ panelIndex, task, index, moveTask }) => {

    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: CARD,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveTask(dragIndex, hoverIndex, panelIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        item: { type: CARD, index, panelIndex },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    drag(drop(ref));

    return (
        <div 
            ref={ref}
            style={{opacity: isDragging ? 0 : 1,backgroundColor:'grey',textAlign:'center',padding:5,borderRadius:5,marginBottom:10,color:'white'}}
        >
            <h4>{task.title}</h4>
            <p>{task.description}</p>
        </div>
    );
};

Task.propTypes = {
    panelIndex: PropTypes.number.isRequired, 
    task: PropTypes.object.isRequired, 
    index: PropTypes.number.isRequired, 
    moveTask: PropTypes.func.isRequired
};

export default Task;