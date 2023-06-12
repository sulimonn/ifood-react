import React from 'react'
const MenuCard = ({ data, corf, addCorf }) => {
  
  function addNewFood (){
    let newCorf = [...corf, data]
     for(let i = 0; i < newCorf.length; i++){
        const element = newCorf[i];
        element.count === undefined ? element.count = 1 : element.count = element.count
        for (let j = i + 1; j < newCorf.length; j++) {
            const item = newCorf[j];
            element.food_id === item.food_id ? element.count += 1 : element.count = element.count
        }
      }
    for(let i = 0; i < newCorf.length; i++){
        const element = newCorf[i];
        for (let j = i + 1; j < newCorf.length; j++) {
            const item = newCorf[j];
            element.food_id === item.food_id ? newCorf.splice(j, 1) : element.count = element.count
        }
    }
     addCorf(newCorf)
  }
  return (
      <div className='food' onClick={addNewFood}>
        <div className="food_img"><img src={require('../../img/food/'+data.src)} alt="" /></div>
        <div className="food_desc">
          <h4>{data.food}</h4>
          <p>{data.price} KGS</p>
        </div>
        <div className="add_button">
          <span>+</span>
        </div>
      </div>
  )
}

export default MenuCard