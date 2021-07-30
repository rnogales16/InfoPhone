import React, { useEffect, useState } from 'react';
import apiService from '../services/api'; // Use this line insted of simple axios import
import { Link } from 'react-router-dom';
import '../cssPages/EachPhone.css'

function EachPhone(props){

  const [phoneState, setPhoneState] = useState({})
  const phoneId = props.match.params.id

  const [comment, setComment] = useState('')

  function removePhone(phoneId) {
    apiService.delete(`${process.env.REACT_APP_SERVER_URL}/${phoneId}`)
    .then(res => {
      props.history.push('/phones')
    })
    .catch(err => console.log(err))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setComment({...comment, [name]: value})
  }

  function handleFormSubmit (event) {
    event.preventDefault();
    apiService.post(`${process.env.REACT_APP_SERVER_URL}/${phoneId}/review`, comment)
    .then((response => {
      console.log("review response: ", response.data); 
      setPhoneState(response.data)
    }))
    .catch(err=>console.log(err))
  }

  useEffect(() => {
    apiService.get(`${process.env.REACT_APP_SERVER_URL}/${phoneId}`)
    .then(res => {
      console.log("run with phne Id: ", res.data)
      const phone = res.data
      phone.Model = phone.Model.replace('_', '')
      setPhoneState(phone)
    })
    .catch(err => console.log(err))
  }, [phoneId])


  return(
    <div class="fullpage">
      <img src={phoneState.Image || "/defaultPhone.png"} alt="imagen movil" />
      <div class="phonecontent">
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
      </div>
      <div class="reviews">
        <h4>Reviews</h4>
        {phoneState.reviews && phoneState.reviews.length > 0 && phoneState.reviews.map(value => {
          return(
            <div>
              <h5>{value.user}</h5>
              <p>{value.comment}</p>
            </div>
          )
        })} 
      </div>
      {props.user &&
      <form onSubmit={handleFormSubmit}>
        <label for='comment'><strong>Create a review</strong>
          <br />
          <textarea onChange={handleChange} name="comment" id="comment" cols="40" rows="6"></textarea>
        </label>
        <br />
        <div class="sortButtons"><button type="submit">Submit</button></div>
      </form>
      }
      {props.user &&
      <>
        <div class="sortButtons">
          <Link to = {`/phones/${phoneState._id}/edit`}><button>Edit Phone</button></Link>
        </div>
        <br />
        <div class="sortButtons">
          <Link to = {`/phones`}><button onClick= {() => removePhone(phoneState._id)}>Delete Phone</button></Link>
        </div>
      </>
      }
    </div>
  )
}

export default EachPhone;