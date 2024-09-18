import React, { useState } from 'react'
import './scard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassHalf, faLocationDot, faMoneyBillWave, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Bookone } from '../../Bookone/Bookone'

export const SCard = ({ data }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState(data.per);
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);
    const filteredItems = data.per.filter((item, index) =>
      item.city.toLowerCase().includes(value)
    );
    setSearchResults(filteredItems);
  };

  return (
    <div className='SCard'>
      <div className='SCContainer'>
        <p className='SCMHeader'>Welcome to your personalized advisor platform</p>
        <p className='SCSHeader'>The Best {data.text} Doctors Suggestions for You</p>
        <input
          type="search"
          placeholder="Search ....."
          value={query}
          onChange={handleSearch}
          className='SearchIn'
        />
        <div className='SCCards'>
          {searchResults.map((card, index) => (
            <div className='Scard' key={index}>
              <div className='SCUp' >
                <div className='SCULeft'>
                  <img src={card.perImg} style={{ width: '150px', height: '150px', borderRadius: '50%', border: '2px solid white' }} />
                </div>
                <div className='SCURight'>
                  <h3>{card.name}</h3>
                  <p >{card.desc}</p>
                </div>
              </div>
              <div className='SCMid'>
                <p><span style={{ color: 'green' }}>City : </span> {card.city} </p>
                <p><span style={{ color: 'green' }}>Fee : </span> {card.fee}</p>
                <p><span style={{ color: 'green' }}>Phone : </span> {card.phone}</p>
                <p><span style={{ color: 'green' }}>Rate : </span> {card.rate}</p>

              </div>
              <div className='SCDown'>
                <p>From Sunday To thursday at 7-11</p>
                <div className='Rating'>
               <span>Rating: {card.rate}/10</span>
               {[...Array(10)].map((_, i) => (
               <FontAwesomeIcon
                key={i}
                icon={faStar}
               color={i < card.rate ? 'gold' : 'gray'}
               />
              ))}
            </div>
                <button onClick={() => navigate('/book', { state: card })}>Book </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}