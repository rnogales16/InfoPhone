import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import "../cssPages/HomePage.css";
/* import Phone from ; */
function HomePage() {
  const [phoneState, setPhoneState] = useState([])
  let gamaBaja = [];
  let gamaMedia = [];
  let gamaAlta = [];

  function categoriePhones() {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/categories-top`)
    .then(res => {
      setPhoneState(res.data)
    })
    .catch(err=> console.log(err))
  }

  useEffect(() => {
    categoriePhones()
  }, [])

  if (phoneState.length > 0){
    gamaAlta = phoneState[0]
    gamaMedia = phoneState[1]
    gamaBaja = phoneState[2]
  }
  console.log(gamaAlta, gamaMedia, gamaBaja)

  let modelName = phoneState.Model
  /* let newModelName = modelName.replace(/_/g, '')  */
  
  return (
    <div className="App">
      <h1 id="title">InfoPhone</h1>
      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <div class="quality">
          <h3>High quality</h3>
          <div onChange={categoriePhones} className='homephonesboxes'>
            {phoneState[0] && phoneState[0].map(phone => {
              let modelName = phone.Model
              let newModelName = modelName.replace(/_/g, '')
              return(
                <div key= {phone._id} className= 'homephones'>
                  <Link to = {`/phones/${phone._id}`}>
                    <img src={phone.Image || "/defaultPhone.png"} alt="imagen movil" />
                    <p>Name: {newModelName}</p>
                    <p>Brand: {phone.Brand}</p>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>

        <div class="quality">
          <h3>Medium quality</h3>
          <div onChange={categoriePhones} className='homephonesboxes'>
            {phoneState[1] && phoneState[1].map(phone => {
              let modelName = phone.Model
              let newModelName = modelName.replace(/_/g, '')
              return(
                <div key= {phone._id} className= 'homephones'>
                  <Link to = {`/phones/${phone._id}`}>
                    <img src={phone.Image || "../../defaultPhone.png"} alt="imagen movil" />
                    <p>Name: {newModelName}</p>
                    <p>Brand: {phone.Brand}</p>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
        
        <div class="quality">
          <h3>Low quality</h3>
          <div onChange={categoriePhones} className='homephonesboxes'>
            {phoneState[2] && phoneState[2].map(phone => {
              let modelName = phone.Model
              let newModelName = modelName.replace('_', '')
              return(
                <div key= {phone._id} className= 'homephones'>
                  <Link to = {`/phones/${phone._id}`}>
                    <img src={phone.Image || "../../defaultPhone.png"} alt="imagen movil" />
                    <p>Name: {newModelName}</p>
                    <p>Brand: {phone.Brand}</p>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
