import React from 'react'
import { useSelector } from 'react-redux'
import Ex2sub from '../redux/Ex2sub'

export default function Ex2() {

    const products = useSelector(state=>state.products)
    const users = useSelector(state=>state.users)
  return (
    <div>
        
        
        <h1>Ex2</h1>
        {
            products.map((res)=><ul key={res.id} className="bg-light">
                <li>{res.id}</li>
                <li>{res.name}</li>
                <li>{res.age}</li>
                <li>{res.gender}</li>
                </ul>)


        }
        <hr />
        {
            users.map((res)=><ul key={res.id} className="bg-light">
                
                <li>{res.name}</li>
                <li>{res.username}</li>
                <li>{res.password}</li>
                <li>{res.confirmPassword}</li>
                </ul>)


        }
        <Ex2sub />
      
  
  </div>)
}
