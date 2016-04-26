import React from 'react';

export default ({model}) => {

  const handleClick = (e) => {
    console.log(e);
  }

  return (
    <figure className="figure">
      <img 
        src={require(`./images/${model.filename}`)} 
        alt={model.title} 
        onClick={handleClick}
      />
      <figureCaption className="title">{model.title}</figureCaption>
    </figure>
  );
}
