import React from 'react';


export const Category = ({ category }) => {
  return ( 
    <div> 
      <span>{category.name} </span> 
      <span>Img: {category.img}</span>
    </div> 
  );
}

