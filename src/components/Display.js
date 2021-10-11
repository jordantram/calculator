import React from 'react';
import './Display.css'

const Display = ({ input }) => {
  return (
    <div className='calc-display'>
      {input}
    </div>
  );
}

export default Display;
