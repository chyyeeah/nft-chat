import React from 'react';

export default ({ name, description, preview }) => {
  return (
    <div>
      <div>
        <img src={preview} alt={name}></img>
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};