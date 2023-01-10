import './App.css'
import axios from 'axios'
import {useState, useEffect} from 'react' 
import Drink from './components/Drink'
import Toast from './components/Toast'

function App() {

const [dataDrinks, setDataDrinks]= useState([])
const [query, setQuery]= useState("")

useEffect (() =>{
  getData(query)
},[query])

const getData = (query)=> {
  axios
  .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
  .then((resp)=> {
    console.log(resp.data)
    setDataDrinks(resp.data.drinks)
  })
  .catch((error)=>{
    console.error(error)
  })
}
const searchCharacter = (e) => {
  e.preventDefault();
  const value = e.target[0].value
  setQuery(value);
} 
  return (
    <div className="App">
      <div className='container-tittle'>
      <h2 className='tittle'>International Drinks 🍸</h2>
      </div>
      <br />
    <form  className="container-form" onSubmit={(e) => searchCharacter(e)}>
      <input className="input" type="text" id="drink" name='drink' defaultValue={query} placeholder="Ingresa nombre del drink"/>
      <button className="button"><img src="./src/assets/img/buscar.png" alt="" /></button>
    </form> 
    
    {
      dataDrinks
      ? 
      dataDrinks.sort((a,b)=>{
        if(a.strDrink < b.strDrink){
          return -1
        }else if (a.strDrink > b.strDrink){
          return 1
        }else {
          return 0}
      }).map((drink, index) => {
        return <Drink 
        key={`drink-${index}`} 
        data={drink}/>  
        }
        )
        :
        <Toast/>
      } 
    </div>
  )
}

export default App
