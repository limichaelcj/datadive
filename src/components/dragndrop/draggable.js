import React from 'react';
import PropTypes from 'prop-types';
import Styled from './draggable.css';

const Draggable = ({ children, id, draggable, displace, sendData, handleDragStart, handleDragOver }) => {

  const [dragging, setDragging] = React.useState(false);

  const dragStart = (e) => {
    const target = e.target;

    // set dragging state
    setDragging(true);

    // send specified data
    Object.entries(sendData).forEach(([k,v]) => {
      e.dataTransfer.setData(k, v);
    });
    e.dataTransfer.setData('id', id);

    // call configurable callback
    if (handleDragStart){
      handleDragStart(target, sendData);
    }

    // hide the element you are dragging
    if (displace) {
      // must be async to allow dragging render to show element
      setTimeout(() => {
        target.style.opacity = 0;
      });
    }
  };

  const dragOver = (e) => {
    e.stopPropagation();

    // call configurable callback
    if (handleDragOver) {
      handleDragOver();
    }
  }

  const dragEnd = (e) => {
    setDragging(false);
    // undo hide when drag ends
    if (displace) {
      e.target.style.opacity = 1;
    }
  }

  return (
    <Styled
      draggable={draggable}
      dragging={dragging}
      sendData={sendData}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
    >
      {children}
    </Styled>
  );
};

Draggable.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  draggable: PropTypes.bool,
  sendData: PropTypes.object,
  handleDragStart: PropTypes.func,
  handleDragOver: PropTypes.func,
  displace: PropTypes.bool,
};

Draggable.defaultProps = {
  draggable: true,
  displace: false,
  sendData: {},
};

export default Draggable;
