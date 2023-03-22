import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, capital ,population, area, flags} = props.country;
    console.log(props.country) 
    return (
        <div className='container'>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="falg" />
            <h5>Country Capital: {capital}</h5>
            <p>Country Population: {population}</p>
            <p>Country Area: {area}</p>
        </div>
    );
};

export default Country;