import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { PencilSquare, Trash } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'
import './User.css'

function Show() {
  const [users, setUser] = useState([])

  async function fetchdata(){
    const result = await axios.get('http://localhost:5000/users')
    setUser(result.data)
  }
  useEffect(()=>{
    fetchdata()
  },[])
  
  return (
    <div className='container '>
      <table className='show-table col-10 m-auto'>
        <thead >
          <tr className='bg-dark text-white'>
            <th>patient id</th>
            <th>patient name</th>
            <th>patient city</th>
            <th>patient gender</th>
            <th>patient age</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {
            
            users.map((obj)=>{
              return(
                <tr>
                  <td>{obj.pid}</td>
                  <td>{obj.name}</td>
                  <td>{obj.city}</td>
                  <td>{obj.gender}</td>
                  <td>{obj.age}</td>
                  <td>
                    <NavLink to={`/Update/${obj.id}`}> <button className='btn me-6 btn-sm btn-info'>Update<PencilSquare/></button>&nbsp;</NavLink>
                    <NavLink to={`/Delete/${obj.id}`}>&nbsp;<button className='btn me-6 btn-sm btn-secondary'>Delete<Trash/></button></NavLink>
                  </td>
                </tr>
              )
            })


          }
        </tbody>

      </table>
    </div>
  )
}

export default Show