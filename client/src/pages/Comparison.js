import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PhoneCompare from './PhoneCompare';

function EachOfTwoPhone(props){
  
  const [phonesToCompare, setPhonesToCompare] = useState([])
  const phoneId1 = props.match.params.id1
  const phoneId2 = props.match.params.id2

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/${phoneId1}`)
    .then((res1)=>{
      const firstPhone = res1.data
      axios.get(`${process.env.REACT_APP_SERVER_URL}/${phoneId2}`)
      .then(res2 => {
        const secondPhone = res2.data
        setPhonesToCompare([firstPhone, secondPhone])
      })})
    .catch(err => console.log(err))
  }, [phoneId1, phoneId2])

  return(
    <div>
      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        {phonesToCompare[0] && <PhoneCompare phone={phonesToCompare[0]}/>} 
        
        {phonesToCompare[1] && <PhoneCompare phone={phonesToCompare[1]}/>}
      </div>

      <br/>
      <Link to = {`/phones`}>All phones</Link>
    </div>
  )
}

export default EachOfTwoPhone;