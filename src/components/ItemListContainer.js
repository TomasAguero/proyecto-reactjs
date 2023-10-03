import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mt-5">
          <h1>{greeting}</h1>
          <p>Puras buenas experiencias.</p>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;