import React from 'react';

function PhoneCompare(props){

  const phone = props.phone

  console.log(phone)

  return(
    <div>
      <div>
        <img src={phone.Image || "/defaultPhone.png"} alt="imagen movil" />
        <h2><strong>Model:</strong> {phone.Model}</h2>
        <p><strong>Brand:</strong> {phone.Brand}</p>
        <p><strong>Announced date:</strong> {phone.Announced}</p>
        <p><strong>Dimensions:</strong> {phone.Dimensions}</p>
        <p><strong>Display type:</strong> {phone.Display_type}</p>
        <p><strong>Display resolution:</strong> {phone.Display_resolution}</p>
        <p><strong>Display size:</strong> {phone.Display_size}</p>
        <p><strong>EDGE display:</strong> {phone.EDGE}</p>
        <p><strong>Internal memory:</strong> {phone.Internal_memory}</p>
        <p><strong>Memory card</strong>{phone.Memory_card}</p>
        <p><strong>RAM:</strong> {phone.RAM}</p>
        <p><strong>Operating System:</strong> {phone.Operating_System}</p>
        <p><strong>Chipset:</strong> {phone.Chipset}</p>
        <p><strong>GPU:</strong> {phone.GPU}</p>
        <p><strong>CPU:</strong> {phone.CPU}</p>
        <p><strong>Battery:</strong> {phone.Battery}</p>
        <p><strong>Primary camera:</strong> {phone.Primary_camera}</p>
        <p><strong>Secondary_camera:</strong> {phone.Secondary_camera}</p>
        <p><strong>Sensors:</strong> {phone.Sensors}</p>
        <p><strong>Bluetooth:</strong> {phone.Bluetooth}</p>
        <p><strong>GPS:</strong> {phone.GPS}</p>
        <p><strong>GPRS:</strong> {phone.GPRS}</p>
        <p><strong>NFC:</strong> {phone.NFC}</p>
        <p><strong>WLAN:</strong> {phone.WLAN}</p>
        <p><strong>Network:</strong> {phone.Network}</p>
        <p><strong>Network Speed:</strong> {phone.Network_Speed}</p>
        <p><strong>SIM:</strong> {phone.SIM}</p>
        <p><strong>USB:</strong> {phone.USB}</p>
        <p><strong>Radio:</strong> {phone.Radio}</p>
        <p><strong>Loud speaker:</strong> {phone.Loud_speaker}</p>
        <p><strong>Audio jack:</strong> {phone.Audio_jack}</p>
        <p><strong>FourG:</strong> {phone.FourG}</p>
        <p><strong>ThreeG:</strong> {phone.ThreeG}</p>
        <p><strong>TwoG:</strong> {phone.TwoG}</p>
        <p><strong>Status:</strong> {phone.Status}</p>
        <p><strong>Colors:</strong> {phone.Colors}</p>
      </div>
    </div>
  )
}

export default PhoneCompare;