import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import '../cssPages/AllPhones.css'

function AllPhones(props){

  const [listState, setListState] = useState([])

  const [loading, setLoading] = useState(true)

  const [comparison, setComparison] = useState([])

  const [searchState, setSearchState] = useState('')

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/`)
    .then((res => {
      const listOfAllPhones = res.data
      setListState(listOfAllPhones)//guardo la lista de moviles en el estado de la linea 8
      setLoading(false)
      setComparison([])
    }))
    .catch(err => console.log(err))
  }, [])

  function sortByScreen() {
    let toSortByScreen = listState.slice()
    toSortByScreen.sort((a, b) => {
      return parseFloat(b.Display_resolution) - parseFloat(a.Display_resolution)
    })
    console.log(toSortByScreen) 
    setListState(toSortByScreen)
  }

  function sortByYear() {
    let toSortByYear = listState.slice()
    toSortByYear.sort((a, b) => {
      return parseInt(b.Announced) - parseInt(a.Announced)
    })
    setListState(toSortByYear)
  }

  function sortByMemory() {
    let toSortByMemory = listState.slice()
    toSortByMemory.sort((a, b) => {
      return parseInt(b.Internal_memory) - parseInt(a.Internal_memory)
    })
    setListState(toSortByMemory)
  }

  function addToCompare(id) {
    setComparison([...comparison, id])//crea nuevo array y lo llena con una copia de el contenido de la elemento de la linea 12, y añade id
  }

  if (loading){
    return <Loading />
  }

  if (comparison.length === 2) {
    props.history.push(`/phones/compare/${comparison[0]}/${comparison[1]}`)
  }

  return(
    <div className= 'everything'>
      <label htmlFor="search">Search phone by name or brand</label>
      <input type="text" onChange = {event => {setSearchState(event.target.value)}} />
      <div>
        <button onClick={() => sortByScreen()}>Sort by screen</button>
        <button onClick={() => sortByYear()}>Sort by year</button>
        <button onClick={() => sortByMemory()}>Sort by memory</button>
        <div className='phonesFromAllPhones'>
          {listState.filter((value) => {
            if (searchState == '') {
              return value
            } else if (value.Model.toLowerCase().includes(searchState.toLowerCase())) {
              return value
            } else if (value.Brand.toLowerCase().includes(searchState.toLowerCase())) {
              return value
            } else if (value.Chipset && value.Chipset.toLowerCase().includes(searchState.toLowerCase())) {
              return value
            }
          }).map(value => {
            let modelName = value.Model
            let newModelName = modelName.replace('_', '')
            return(
              <div key= {value._id} style= {{width: '200px'}}>
                <Link to = {`/phones/${value._id}`}>
                  <img src={value.Image || "/defaultPhone.png"} alt="imagen movil" />
                  <h3>{newModelName}</h3>
                </Link>
                <h4>{value.Brand}</h4>
                <p>{value.Chipset}</p>
                <button onClick={ () => addToCompare(value._id) }>Compare</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AllPhones;
