import React from 'react';
import './Country.css';
const Country = (props) => {
    const {name,population,flag}=props.country;
    return (
        <div className='countryContainer'>
            <h2>{name}</h2>
            <img className='imageStyle' src={flag} alt="" />
            <p><small>Population:{population}</small></p>
            <button onClick={()=>props.handleCountry(props.country)}>Add Population</button>
            
        </div>
    );
};

export default Country;