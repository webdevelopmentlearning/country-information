import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import Country from '../Country/Country';
import './Home.css';
const Home = () => {
    const [country,setCountry]=useState([])
    useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(response=> response.json())
    .then(data=>setCountry(data))
    },[])
    const [cart,setCart]=useState([])
    const handleCountry =(country)=>{
        let newCart = [...cart,country];
        setCart(newCart)
    }
    
    return (
        <div className='home-container'>
          <div className="country">
            {
                country.map(country=><Country handleCountry={handleCountry} country={country}></Country>)
            }
            
          </div>
          <div className="details">
           <h3>Country: {country.length}</h3>
            <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Home;