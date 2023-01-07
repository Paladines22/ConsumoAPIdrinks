const Drink = ({data}) => {
  return (
    <div className="drink-container">
      <img src={data.strDrinkThumb } alt="" />
      <h2>{data.strDrink}</h2>
      <p>{data.strInstructions}</p>
    </div>
  )
}
export default Drink