import React from 'react'

const Tour = ({id,image,info,price,name}) => {
  return (
    <article className="single-tour container">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
          <p>{info}</p>
          <button className='delete-btn'>not intterested</button>
        </div>
      </footer>
    </article>
  );
}

export default Tour
