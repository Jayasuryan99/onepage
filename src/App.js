import './App.css';
import React from 'react';
import List from './component/List';
import Delivery from './Assests/delivery.png'


function App() {

  return (
    <div className='final'> 

    <ul>
      <li> <a class='active' href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a class="about" href="#about">About</a></li>
      <input className='search' type='search' placeholder='search here' required/>
    </ul>

    <div className='para'> 
    <h1> Hunger is a <br/> good cook. </h1>
    </div> 

    <div className='image'> 
    <img src={Delivery} alt="" />
    </div>
     
    <div>
    <p className='continuous'>  To live a full life,you have to fill your stomach first.<br/>
      Quality food is thewmost important thing in our life.</p>
    </div>

    <div className='list'> 
        <List />
     </div>
  
  <div className='lastpara'> 
  <button className="primary-button"> Bookings Now </button> 
     <button className="primary-button1"> See Our Menu </button>
     </div>
     
     <div className='last'> 
     <p className='p3'> Delivery in <br/> all town less than 30 minutes </p>
      <p className='p1'> Free delivery from $29</p>
      <p className='p2'> only fresh and home products </p>
     </div>

    </div>

    
  );
}

export default App;



