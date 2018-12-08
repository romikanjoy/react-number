import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ incrementCounter, incrementValue }) => {
    return (
        <button className="btn btn-secondary" onClick={ () => incrementCounter(incrementValue) }>+{incrementValue}</button>
    );
};

Button.propTypes = {
    incrementCounter: PropTypes.func.isRequired,
    incrementValue: PropTypes.number.isRequired
};

export default Button;
