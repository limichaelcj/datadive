import React from 'react';
import PropTypes from 'prop-types';
import Styled from './droppable.css';

const Droppable = ({ children, id, droppable, receiveData, handleDrop, handleDragOver }) => {

  const [draggingOver, setDraggingOver] = React.useState(false);

  const drop = (e) => {
    e.preventDefault();
    // do nothing if id does not match
    if (id !== e.dataTransfer.getData('id')){
      return;
    }

    // unset dragover state
    setDraggingOver(false);

    // map receive data
    const data = {};
    receiveData.forEach(k => {
      data[k] = e.dataTransfer.getData(k);
    });

    // call configurable callback with data
    if (handleDrop){
      handleDrop(data);
    }
  }

  const dragOver = (e) => {
    e.preventDefault();
    // set dragoverstate
    setDraggingOver(true);
    // call configurable callback
    if (handleDragOver) {
      handleDragOver(e.currentTarget);
    }
  }

  return (
    <Styled
      droppable={droppable}
      draggingOver={draggingOver}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {children}
    </Styled>
  );
};

Droppable.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  droppable: PropTypes.bool,
  receiveData: PropTypes.arrayOf(PropTypes.string),
  handleDrop: PropTypes.func,
  handleDragOver: PropTypes.func,
};

Droppable.defaultProps = {
  droppable: true,
  receiveData: [],
}

export default Droppable;
