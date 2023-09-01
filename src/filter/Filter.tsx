import React,{useEffect, useState} from 'react'
import './Filter.css'

import { items } from '../items'

export default function Filter() {

  const [products,setProducts]=useState(items)
  const [values,setValues]=useState <Array<string>>([])

  function handleFilter(value:string){
    setProducts(items)
    if(!values.includes(value)){
      setValues([...values,value])
  
    }
    else{
      setValues(values.filter(e=>!(e===value)))    
    }
  
  }
  
  useEffect(()=>{
    
    let filteredData
    if(values){
      filteredData = items.filter((a)=>values.includes(a.category.toLowerCase()))
    filteredData.length>0 ? setProducts(filteredData) : setProducts(items)
    }
  
  },[values])

  return (
    <div className='wrapper'>

    <div className='checkboxes'>

    <div className='checkbox'>
    <label htmlFor='bags'>Bags</label> 
      <input  type='checkbox' onChange={(e)=>handleFilter(e.target.name)} name='bags'/>
    </div>

    <div className='checkbox'>
      <label htmlFor='sunglasses'>Sunglasses</label> 
      <input  type='checkbox' onChange={(e)=>handleFilter(e.target.name)} name='sunglasses'/>
    </div>

    <div className='checkbox'>
    <label htmlFor='watches'>Watches</label> 
      <input  type='checkbox' onChange={(e)=>handleFilter(e.target.name)} name='watches'/>
    </div>

    <div className='checkbox'>
    <label htmlFor='sports'>Sports</label> 
      <input  type='checkbox' onChange={(e)=>handleFilter(e.target.name)} name='sports'/>
      </div>

    </div>

<div className='items-container'>
{products.map((a, idx) => (
        <div key={`items-${idx}`}
        className="item">
        <p className='name'>{a.name}</p>
        <p className='category'>{a.category}</p>
        </div>

      ))}
</div>

    </div>
  )
}
