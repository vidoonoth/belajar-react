// import { useState } from 'react'
import PropTypes from 'prop-types'; // Impor PropTypes

function Square({value, onSquareClick}) {
    const backgroundColor = value === 'x' ? 'red' : value === 'o' ? 'blue' : 'white';
    const color = value? 'white' : 'black';
    return (
        <button 
            className="square" 
            onClick={onSquareClick}
            style={{ 
                backgroundColor,
                color
             }} 
        >
            {value}
        </button>
    );
}

Square.propTypes = {
    value: PropTypes.string,         // `value` harus berupa string (bisa disesuaikan dengan kebutuhan)
    onSquareClick: PropTypes.func.isRequired, // `onSquareClick` wajib diisi dan harus berupa fungsi
};

export default Square;