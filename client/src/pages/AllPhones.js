import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllPhones(){

  const [listState, setListState] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/`)
    .then((res => {
      const listOfAllPhones = res.data
      console.log("listOfAllPhones: ",listOfAllPhones)
      setListState(listOfAllPhones)
    }))
    .catch(err => console.log(err))
  }, [])

  return(
    <div>
      <div>
        {listState.map(phone => {
          return(
            <div key= {phone._id}>
              <Link to = {`/phones/${phone._id}`}>
                <img src={phone.Image || "../../defaultPhone.png"} alt="imagen movil" />
                <h3>{phone.Model}</h3>
              </Link>
              <h4>{phone.Brand}</h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllPhones;
