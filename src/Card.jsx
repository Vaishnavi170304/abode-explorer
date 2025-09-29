
import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ title, description, id }) {
  return (
    <div className="card" data-testid={`card-${id}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
