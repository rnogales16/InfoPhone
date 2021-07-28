import axios from 'axios';
import React, { useState } from 'react'
import Phone from '../utils/createPhoneObject'
import '../cssPages/NewPhone.css'


function CreateNewPhone() {

  const initialFormState = Phone

  const [formState, setFormState] = useState(initialFormState)
  
  function handleChange (event) {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  function handleFormSubmit (event) {
    event.preventDefault();
    //const { Phone } = formState;
    console.log(formState)
    axios.post(`${process.env.REACT_APP_SERVER_URL}/`, formState)
    .then((response)=>setFormState(initialFormState))
    .catch(err=>console.log(err))
  };
  
  return (
    <div>
      <h2>Create a new phone</h2>
      <form onSubmit={handleFormSubmit} class="form-style-4">
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <div>
            <label for="Image">
              <span>Image</span>
              <input
                type="text"
                name="Image"
                value={formState.Image}
                onChange={handleChange}
              />
            </label>

            <label for="Brand">
              <span>Brand</span>
              <input
                type="text"
                name="Brand"
                value={formState.Brand}
                onChange={handleChange}
              />
            </label>

            <label for="Model">
              <span>Model</span>
              <input
                type="text"
                name="Model"
                value={formState.Model}
                onChange={handleChange}
              />
            </label>

            <label for="Announced">
              <span>Announced</span>
              <input
                type="text"
                name="Announced"
                value={formState.Announced}
                onChange={handleChange}
              />
            </label>

            <label for="Dimensions">
              <span>Dimensions</span>
              <input
                type="text"
                name="Dimensions"
                value={formState.Dimensions}
                onChange={handleChange}
              />
            </label>

            <label for="Display_type">
              <span>Display type</span>
              <input
                type="text"
                name="Display_type"
                value={formState.Display_type}
                onChange={handleChange}
              />
            </label>

            <label for="Display_resolution">
              <span>Display resolution</span>
              <input
                type="text"
                name="Display_resolution"
                value={formState.Display_resolution}
                onChange={handleChange}
              />
            </label>

            <label for="Display-size">
              <span>Display size</span>
              <input
                type="text"
                name="Display_size"
                value={formState.Display_size}
                onChange={handleChange}
              />
            </label>

            <label for="EDGE">
              <span>EDGE</span>
              <input
                type="text"
                name="EDGE"
                value={formState.EDGE}
                onChange={handleChange}
              />
            </label>

            <label for="Internal_memory">
              <span>Internal memory</span>
              <input
                type="text"
                name="Internal_memory"
                value={formState.Internal_memory}
                onChange={handleChange}
              />
            </label>

            <label for="Memory-card">
              <span>Memory card</span>
              <input
                type="text"
                name="Memory_card"
                value={formState.Memory_card}
                onChange={handleChange}
              />
            </label>

            <label for="RAM">
              <span>RAM</span>
              <input
                type="text"
                name="RAM"
                value={formState.RAM}
                onChange={handleChange}
              />
            </label>

            <label for="Operating_System">
              <span>Operating System</span>
              <input
                type="text"
                name="Operating_System"
                value={formState.Operating_System}
                onChange={handleChange}
              />
            </label>

            <label for="Chipset">
              <span>Chipset</span>
              <input
                type="text"
                name="Chipset"
                value={formState.Chipset}
                onChange={handleChange}
              />
            </label>

            <label for="GPU">
              <span>GPU</span>
              <input
                type="text"
                name="GPU"
                value={formState.GPU}
                onChange={handleChange}
              />
            </label>

            <label for="CPU">
              <span>CPU</span>
              <input
                type="text"
                name="CPU"
                value={formState.CPU}
                onChange={handleChange}
              />
            </label>

            <label for="Battery">
              <span>Battery</span>
              <input
                type="text"
                name="Battery"
                value={formState.Battery}
                onChange={handleChange}
              />
            </label>

            <label for="Primary_camera">
              <span>Primary camera</span>
              <input
                type="text"
                name="Primary_camera"
                value={formState.Primary_camera}
                onChange={handleChange}
              />
            </label>

            <label for="Secondary_camera">
              <span>Secondary camera</span>
              <input
                type="text"
                name="Secondary_camera"
                value={formState.Secondary_camera}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label for="Sensors">
              <span>Sensors</span>
              <input
                type="text"
                name="Sensors"
                value={formState.Sensors}
                onChange={handleChange}
              />
            </label>

            <label for="Bluetooth">
              <span>Bluetooth</span>
              <input
                type="text"
                name="Bluetooth"
                value={formState.Bluetooth}
                onChange={handleChange}
              />
            </label>

            <label for="GPS">
              <span>GPS</span>
              <input
                type="text"
                name="GPS"
                value={formState.GPS}
                onChange={handleChange}
              />
            </label>

            <label for="GPRS">
              <span>GPRS</span>
              <input
                type="text"
                name="GPRS"
                value={formState.GPRS}
                onChange={handleChange}
              />
            </label>

            <label for="NFC">
              <span>NFC</span>
              <input
                type="text"
                name="NFC"
                value={formState.NFC}
                onChange={handleChange}
              />
            </label>

            <label for="WLAN">
              <span>WLAN</span>
              <input
                type="text"
                name="WLAN"
                value={formState.WLAN}
                onChange={handleChange}
              />
            </label>

            <label for="Network">
              <span>Network</span>
              <input
                type="text"
                name="Network"
                value={formState.Network}
                onChange={handleChange}
              />
            </label>

            <label for="Network_Speed">
              <span>Network Speed</span>
              <input
                type="text"
                name="Network_Speed"
                value={formState.Network_Speed}
                onChange={handleChange}
              />
            </label>
            
            <label for="SIM">
              <span>SIM</span>
              <input
                type="text"
                name="SIM"
                value={formState.SIM}
                onChange={handleChange}
              />
            </label>

            <label for="USB">
              <span>USB</span>
              <input
                type="text"
                name="USB"
                value={formState.USB}
                onChange={handleChange}
              />
            </label>

            <label for="Radio">
              <span>Radio</span>
              <input
                type="text"
                name="Radio"
                value={formState.Radio}
                onChange={handleChange}
              />
            </label>

            <label for="Loud_speaker">
              <span>Loud speaker</span>
              <input
                type="text"
                name="Loud_speaker"
                value={formState.Loud_speaker}
                onChange={handleChange}
              />
            </label>

            <label for="Audio_jack">
              <span>Audio jack</span>
              <input
                type="text"
                name="Audio_jack"
                value={formState.Audio_jack}
                onChange={handleChange}
              />
            </label>

            <label for="FourG">
              <span>FourG</span>
              <input
                type="text"
                name="FourG"
                value={formState.FourG}
                onChange={handleChange}
              />
            </label>

            <label for="ThreeG">
              <span>ThreeG</span>
              <input
                type="text"
                name="ThreeG"
                value={formState.ThreeG}
                onChange={handleChange}
              />
            </label>

            <label for="TwoG">
              <span>TwoG</span>
              <input
                type="text"
                name="TwoG"
                value={formState.TwoG}
                onChange={handleChange}
              />
            </label>

            <label for="Status">
              <span>Status</span>
              <input
                type="text"
                name="Status"
                value={formState.Status}
                onChange={handleChange}
              />
            </label>

            <label for="Colors">
              <span>Colors</span>
              <input
                type="text"
                name="Colors"
                value={formState.Colors}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <span> </span><input type="submit" value="submit" style={{display: 'block', marginLeft:'auto', marginRight:'auto'}}/>
      </form>
    </div>
  )
}

export default CreateNewPhone;