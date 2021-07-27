import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Phone from '../utils/createPhoneObject'


function EditPhone(props){

  const initialFormState = Phone
  const phoneId = props.match.params.id

  const [formState, setFormState] = useState(initialFormState)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/${phoneId}`)
    .then(res => {
      const phone = res.data
      setFormState(phone)
    })
    .catch(err => console.log(err))
  }, [phoneId])
  
  function handleChange (event) {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  function handleFormSubmit (event) {
    event.preventDefault();
    //const { Phone } = formState;
    console.log(formState)
    axios.put(`${process.env.REACT_APP_SERVER_URL}/${phoneId}`, formState)
    .then((res => {
      const prefieldForm = res.data
      console.log(res)
      setFormState(prefieldForm)
    }))
    .catch(err=>console.log(err))
  }


  return (
    <div>
      <h2>Edit a new phone</h2>
      <form onSubmit={handleFormSubmit}>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <div>
            <div>
              <label>Image
                <input
                  type="text"
                  name="Image"
                  value={formState.Image}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Brand
                <input
                  type="text"
                  name="Brand"
                  value={formState.Brand}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Model
                <input
                  type="text"
                  name="Model"
                  value={formState.Model}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Announced
                <input
                  type="text"
                  name="Announced"
                  value={formState.Announced}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Dimensions
                <input
                  type="text"
                  name="Dimensions"
                  value={formState.Dimensions}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Display type
                <input
                  type="text"
                  name="Display_type"
                  value={formState.Display_type}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Display resolution
                <input
                  type="text"
                  name="Display_resolution"
                  value={formState.Display_resolution}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Display size
                <input
                  type="text"
                  name="Display_size"
                  value={formState.Display_size}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>EDGE
                <input
                  type="text"
                  name="EDGE"
                  value={formState.EDGE}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Internal memory
                <input
                  type="text"
                  name="Internal_memory"
                  value={formState.Internal_memory}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Memory card
                <input
                  type="text"
                  name="Memory_card"
                  value={formState.Memory_card}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>RAM
                <input
                  type="text"
                  name="RAM"
                  value={formState.RAM}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Operating System
                <input
                  type="text"
                  name="Operating_System"
                  value={formState.Operating_System}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Chipset
                <input
                  type="text"
                  name="Chipset"
                  value={formState.Chipset}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>GPU
                <input
                  type="text"
                  name="GPU"
                  value={formState.GPU}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>CPU
                <input
                  type="text"
                  name="CPU"
                  value={formState.CPU}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Battery
                <input
                  type="text"
                  name="Battery"
                  value={formState.Battery}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Primary camera
                <input
                  type="text"
                  name="Primary_camera"
                  value={formState.Primary_camera}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Secondary camera
                <input
                  type="text"
                  name="Secondary_camera"
                  value={formState.Secondary_camera}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>

          <div>
            <div>
              <label>Sensors
                <input
                  type="text"
                  name="Sensors"
                  value={formState.Sensors}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Bluetooth
                <input
                  type="text"
                  name="Bluetooth"
                  value={formState.Bluetooth}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>GPS
                <input
                  type="text"
                  name="GPS"
                  value={formState.GPS}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>GPRS
                <input
                  type="text"
                  name="GPRS"
                  value={formState.GPRS}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>NFC
                <input
                  type="text"
                  name="NFC"
                  value={formState.NFC}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>WLAN
                <input
                  type="text"
                  name="WLAN"
                  value={formState.WLAN}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Network
                <input
                  type="text"
                  name="Network"
                  value={formState.Network}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Network Speed
                <input
                  type="text"
                  name="Network_Speed"
                  value={formState.Network_Speed}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>SIM
                <input
                  type="text"
                  name="SIM"
                  value={formState.SIM}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>USB
                <input
                  type="text"
                  name="USB"
                  value={formState.USB}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Radio
                <input
                  type="text"
                  name="Radio"
                  value={formState.Radio}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Loud speaker
                <input
                  type="text"
                  name="Loud_speaker"
                  value={formState.Loud_speaker}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Audio jack
                <input
                  type="text"
                  name="Audio_jack"
                  value={formState.Audio_jack}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>FourG
                <input
                  type="text"
                  name="FourG"
                  value={formState.FourG}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>ThreeG
                <input
                  type="text"
                  name="ThreeG"
                  value={formState.ThreeG}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>TwoG
                <input
                  type="text"
                  name="TwoG"
                  value={formState.TwoG}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Status
                <input
                  type="text"
                  name="Status"
                  value={formState.Status}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>Colors
                <input
                  type="text"
                  name="Colors"
                  value={formState.Colors}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>
        <button type="submit" style={{display: 'block', marginLeft:'auto', marginRight:'auto'}}>Submit</button>
      </form>
    </div>
  )
}

export default EditPhone