import './App.css'
import axios from 'axios'
import {useState, useEffect} from 'react' 
import Drink from './components/Drink'

function App() {

const [dataDrinks, setDataDrinks]= useState([])
const [query, setQuery]= useState("")

useEffect (() =>{
  getData(query)
},[query])

const getData = (query)=> {
  axios
  .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito`)
  .then((resp)=> {
    console.log(resp.data)
    setDataDrinks(resp.data)
  })
  .catch((error)=>{
    console.error(error)
  })

  const searchCharacter = (e) => {
    e.preventDefault();
    setQuery(e.data[0].strDrink.toLowerCase());
  };
  
}
  return (
    <div className="App">
    <form  className="container-form" onSubmit={(e) => searchCharacter(e)}>
      <input className="input" type="text" id="drink" name='drink' defaultValue={query} placeholder="Ingresa nombre del drink"/>
      <button className="button">Buscar</button>
    </form>  
    {
      dataDrinks.drinks?.sort((a,b)=>{
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
      } 
    </div>
  )
}

export default App
