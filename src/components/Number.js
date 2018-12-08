import React from 'react';
import PropTypes from 'prop-types';

const Number = ({ counter }) => {
    const numberStyle = {
        marginLeft: 90
    };
    return (
        <div className="row">
            <h1 style={numberStyle}>{counter}</h1>
        </div>
    );
};

Number.propTypes = {
    counter: PropTypes.number.isRequired
};

export default Number;
