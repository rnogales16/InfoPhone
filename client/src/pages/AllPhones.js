import React, { useState, useEffect } from 'react'
import apiService from '../services/api'; // Use this line insted of simple axios import
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import '../cssPages/AllPhones.css'

function AllPhones(props){

  const [listState, setListState] = useState([])

  const [loading, setLoading] = useState(true)

  const [comparison, setComparison] = useState([])

  const [searchState, setSearchState] = useState('')

  useEffect(() => {
    apiService
    .get(`${process.env.REACT_APP_SERVER_URL}/`)
    .then((res => {
      console.log("AllPhones useEffect")
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
      <div className= 'searchAndFilters'>
        <div class="search container">
          <p class="search title">Search by name or brand</p>
          <input class="search input" type="text" placeholder="Search" onChange={event=>{setSearchState(event.target.value)}}/>
        </div>
        <div class="threeButtons">
          <div class="sortButtons">
            <button onClick={() => sortByScreen()}>Sort by screen</button>
          </div>
          <div class="sortButtons">
            <button onClick={() => sortByYear()}>Sort by year</button>
          </div>
          <div class="sortButtons">
            <button onClick={() => sortByMemory()}>Sort by memory</button>
          </div>
        </div>
      </div>

      <div class="container phonesFromAllPhones">
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
            <div key= {value._id} class="card eachPhoneInPhones">
              <Link to = {`/phones/${value._id}`}>
                <div class="imgBx">
                  <img src={value.Image || "/defaultPhone.png"} alt="imagen movil" />
                </div>
              </Link>
                <div class="contentBx">
                  <Link style={{textDecoration: 'none'}} to = {`/phones/${value._id}`}>
                    <h3 style={{color:'#182B49'}}>Name: {newModelName}</h3>
                    <h4 style={{color:'#182B49'}}>Brand: {value.Brand}</h4>
                    <div class="color">
                      <p style={{color:'#182B49'}}>Memory: {value.Internal_memory} - RAM: {value.RAM}</p>
                    </div>
                  </Link>
                  <button onClick={() => addToCompare(value._id)}>Compare</button>
                </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllPhones;
