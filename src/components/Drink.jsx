const Drink = ({data}) => {
  return (
    <div className="drink-container">
      <img src={data.strDrinkThumb } alt="" />
      <div className="text-container">
        <h2>{data.strDrink}</h2>
        <p>{data.strInstructions}</p>
      </div>
    </div>
  )
}
export default Drink