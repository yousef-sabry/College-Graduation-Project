import React, { useEffect, useRef, useState  } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { useNavigate } from 'react-router-dom';
import './booking.css'
import axios from 'axios';

import CardSwiper from '../Swiper/Swiper'
import { useLocation } from 'react-router-dom';



export const Booking = () => {
 

  const navigate = useNavigate();
  const [allDoctors , setAllDoctors] = useState([])
  const [allLawyers,setAllLawyers] = useState([])
  const [allDecors,setAllDecors] = useState([])
  const [search,setSearch]=useState()

  
  

  useEffect(() => {
    axios.get('https://localhost:7198/api/Doctors')
      .then(response => {

        setAllDoctors(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 
  

  useEffect(() => {
    axios.get('https://localhost:7198/api/Decors')
      .then(response => {

        setAllDecors(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 
  useEffect(() => {
    axios.get('https://localhost:7198/api/Lawyers')
      .then(response => {

        setAllLawyers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  

  const handleSearch = () => {
    if (search.toLowerCase() === 'أشعر ب ألم في العظام') {
      navigate('/select', { state:  allDoctors[0]  });
    }
    else if (search.toLowerCase() === 'رجلي مكسورة') {
      navigate('/select', { state:  allDoctors[0]  });
    }
    else if (search.toLowerCase() === 'أيدي وجعاني اوي') {
      navigate('/select', { state:  allDoctors[0]  });
    } 
    else if (search.toLowerCase() === 'عايز دكتور جلدية') {
      navigate('/select', { state:  allDoctors[1]  });
    }
    else if (search.toLowerCase() === 'في حبوب في وشي') {
      navigate('/select', { state:  allDoctors[1]  });
    }
    else if (search.toLowerCase() === 'اشعر بوجع في أذني') {
      navigate('/select', { state:  allDoctors[2]  });
    } 
    else if (search.toLowerCase() === 'أشعر بوجع في ألانف') {
      navigate('/select', { state:  allDoctors[2]  });
    }
    else if (search.toLowerCase() === 'قلبي وجعني') {
      navigate('/select', { state:  allDoctors[3]  });
    }
    else if (search.toLowerCase() === 'ضربات قلبي سريعة') {
      navigate('/select', { state:  allDoctors[3]  });
    }

    else if (search.toLowerCase() === 'عايز محامي في الجنايات') 
      {
      navigate('/select', { state:  allLawyers[0]  });
    } 
     else if (search.toLowerCase() === 'عندي قضية قتل ') 
      {
      navigate('/select', { state:  allLawyers[0]  });
    }
    
    else if (search.toLowerCase() === 'في مشكلة في الشركة عندي') 
      {
      navigate('/select', { state:  allLawyers[1]  });
    } 
    else if (search.toLowerCase() === 'محامي مؤسسات') 
      {
      navigate('/select', { state:  allLawyers[1]  });
    }
    else if 
    (search.toLowerCase() === 'عايز ديزاين مطابخ') {
      navigate('/select', { state:  allDecors[0]  });
    } 
    
    else if (search.toLowerCase() === 'عايز مكتب لتصاميم السفرة') {
      navigate('/select', { state:  allDecors[1]  });
    } else {
      alert('Search value is not Found ');
    }
  };
 
  
  return (
    <div className='Booking' id='Booking'>
        <div className='Bcontainer'>
        <h1 style={{color:' #33A2A9', textAlign:'left' ,marginBottom:'4rem' }}>Book a Specialization</h1>
       <div className='SearchPart'>
        <input
        type="search"
        id="Search"
        placeholder="Search ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='MainSearchIn'
      />
      <div class="btn" onClick={handleSearch} ><a >Serch Now</a>
      </div>
      </div>
        <div className='cards'>

<p style={{fontSize:'40px', borderBottom:'3.5px solid green '  , 
  color: '#33A2A9' , marginTop: '40px', fontWeight:'600'}}>Doctors</p>
        <CardSwiper items={allDoctors}/>
        <p style={{fontSize:'40px',borderBottom:'3.5px solid green'  , 
          color: '#33A2A9' , marginTop: '40px', fontWeight:'600'}}>Lawyers</p>
        <CardSwiper items={allLawyers}/>
        <p style={{fontSize:'40px',borderBottom:'3.5px solid green'  , 
          color: '#33A2A9' , marginTop: '40px', fontWeight:'600'}}>Decor Artists</p>
        <CardSwiper items={allDecors}/>
             
            </div>
        </div>
    </div>
  )
}
