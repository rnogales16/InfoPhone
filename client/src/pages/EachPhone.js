import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EachPhone(props){

  const [phoneState, setPhoneState] = useState({})
  const phoneId = props.match.params.id

  function removePhone(phoneId) {
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/${phoneId}`)
    .then(res => {
      props.history.push('/phones')
    })
    .catch(err => console.log(err))
  }

  function leaveReview(event) {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_SERVER_URL}/${phoneId}/review`, phoneState)
    .then((response)=>setPhoneState(response.data))
    .catch(err=>console.log(err))
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/${phoneId}`)
    .then(res => {
      const phone = res.data
      phone.Model = phone.Model.replace('_', '')
      console.log('this is modelName' , phone.Model)
      setPhoneState(phone)
    })
    .catch(err => console.log(err))
  }, [phoneId])

  return(
    <div>
      <div>
        <img src={phoneState.Image || "/defaultPhone.png"} alt="imagen movil" />
        <h2><strong>Model:</strong> {phoneState.Model}</h2>
        <p><strong>Brand:</strong> {phoneState.Brand}</p>
        <p><strong>Announced date:</strong> {phoneState.Announced}</p>
        <p><strong>Dimensions:</strong> {phoneState.Dimensions}</p>
        <p><strong>Display type:</strong> {phoneState.Display_type}</p>
        <p><strong>Display resolution:</strong> {phoneState.Display_resolution}</p>
        <p><strong>Display size:</strong> {phoneState.Display_size}</p>
        <p><strong>EDGE display:</strong> {phoneState.EDGE}</p>
        <p><strong>Internal memory:</strong> {phoneState.Internal_memory}</p>
        <p><strong>Memory card</strong>{phoneState.Memory_card}</p>
        <p><strong>RAM:</strong> {phoneState.RAM}</p>
        <p><strong>Operating System:</strong> {phoneState.Operating_System}</p>
        <p><strong>Chipset:</strong> {phoneState.Chipset}</p>
        <p><strong>GPU:</strong> {phoneState.GPU}</p>
        <p><strong>CPU:</strong> {phoneState.CPU}</p>
        <p><strong>Battery:</strong> {phoneState.Battery}</p>
        <p><strong>Primary camera:</strong> {phoneState.Primary_camera}</p>
        <p><strong>Secondary_camera:</strong> {phoneState.Secondary_camera}</p>
        <p><strong>Sensors:</strong> {phoneState.Sensors}</p>
        <p><strong>Bluetooth:</strong> {phoneState.Bluetooth}</p>
        <p><strong>GPS:</strong> {phoneState.GPS}</p>
        <p><strong>GPRS:</strong> {phoneState.GPRS}</p>
        <p><strong>NFC:</strong> {phoneState.NFC}</p>
        <p><strong>WLAN:</strong> {phoneState.WLAN}</p>
        <p><strong>Network:</strong> {phoneState.Network}</p>
        <p><strong>Network Speed:</strong> {phoneState.Network_Speed}</p>
        <p><strong>SIM:</strong> {phoneState.SIM}</p>
        <p><strong>USB:</strong> {phoneState.USB}</p>
        <p><strong>Radio:</strong> {phoneState.Radio}</p>
        <p><strong>Loud speaker:</strong> {phoneState.Loud_speaker}</p>
        <p><strong>Audio jack:</strong> {phoneState.Audio_jack}</p>
        <p><strong>FourG:</strong> {phoneState.FourG}</p>
        <p><strong>ThreeG:</strong> {phoneState.ThreeG}</p>
        <p><strong>TwoG:</strong> {phoneState.TwoG}</p>
        <p><strong>Status:</strong> {phoneState.Status}</p>
        <p><strong>Colors:</strong> {phoneState.Colors}</p>
        <div>
          <h4>Reviews</h4>
          <p><strong>Raul</strong></p>
          <p>I really like this phone</p>
        </div>
        {props.user &&
        <div>
          <label for='review'><strong>Create a review</strong></label>
          <br />
          <textarea name="review" id="review" cols="40" rows="6"></textarea>
          <br />
          <button onClick= {leaveReview}>Submit</button>
        </div>
        }
        {props.user &&
        <>
          <Link to = {`/phones/${phoneState._id}/edit`}>Edit Phone</Link>
          <br />
          <button onClick= {() => removePhone(phoneState._id)}>Delete Phone</button>
        </>
        }
        <br />
      </div>
    </div>
  )
}

export default EachPhone;