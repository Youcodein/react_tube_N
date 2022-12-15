import React from 'react'

import { categories } from '../utils/content'

const Category = ({selectCategory, setSelectCategory}) => {
  return (
    <div>
      {categories.map((category) => (

        <button 
        style={{ borderBottom: category.name === selectCategory ? "1px solid" : "transparent"}}
        key={category.name} 
        onClick={()=>setSelectCategory(category.name)
        
        }>
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
      
    </div>
  )
}

export default Category