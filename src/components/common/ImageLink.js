import React from 'react';

const ImageComponent = () => {
  return (
    <div>
      <img 
        src={`/images/deploy.jpg`} 
        alt="Example" 
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default ImageComponent;
