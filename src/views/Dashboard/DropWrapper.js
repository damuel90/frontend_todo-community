import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from "react-dnd";
import { CARD } from '../../constants/dragType';

const DropWrapper = ({ panelIndex, onDrop, children }) => {
    
    const [{ isOver }, drop] = useDrop({
        accept: CARD,
        canDrop: (item, monitor) => {
            return [item.panelIndex + 1, item.panelIndex - 1, item.panelIndex].includes(panelIndex);
        },
        drop: (item, monitor) => {
            onDrop(item.panelIndex, item.index, panelIndex);
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    return (
        <div ref={drop} style={{backgroundColor:isOver?'green':'white',width:'100%',height:'100%',padding:10,borderRadius:10}}>
            {children}
        </div>
    )
};

DropWrapper.propTypes = {
    panelIndex: PropTypes.number.isRequired, 
    onDrop: PropTypes.func.isRequired
};

export default DropWrapper;