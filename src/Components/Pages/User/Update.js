import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function Update() {

  const {register,handleSubmit,setValue} = useForm()
  const {userId} = useParams()
  const navi = useNavigate()

  async function fetchdata(){
    const result= await axios.get(`http://localhost:5000/users/${userId}`)
    setValue('pid', result.data.pid)
    setValue('name', result.data.name)
    setValue('city', result.data.city)
    setValue('gender', result.data.gender)
    setValue('age', result.data.age)
  }

  function saveData(data){
    const result = axios.put(`http://localhost:5000/users/${userId}`,data)
    navi('/Show')
  }
  useEffect(()=>{
    fetchdata()
  },[])
  
  return (
    <div className=' add-form border border-3 m-auto p-3 mt-5 m-auto col-5'>
    <center><h3><u>Patinet Update Form</u></h3></center>
    <br/>
        <form onSubmit={handleSubmit(saveData)}>
            <label htmlFor='i'>Enter Patient id :</label>
            <input type='number' id='i'{...register('pid')}/>
            <br/><br/>
            <label htmlFor='n'>Enter Patient Name :</label>
            <input type='text' id='n'{...register('name')}/>
            <br/><br/>
            <label htmlFor='n'>Enter Patient City :</label>
            <input type='text' id='n'{...register('city')}/>
            <br/><br/>
            <label htmlFor='n'>Enter Patient Gender :</label>
            <input type='text' id='n'{...register('gender')}/>
            <br/><br/>
            <label htmlFor='s'>Enter Patient Age :</label>
            <input type='number' id='s'{...register('age')}/>
            <br/><br/>
            <input type='submit' value='update' className='btn btn-primary col-4 btn-lg'/>
            <input type='reset'className='btn btn-warning btn-lg col-4 float-end'/>
        </form>
    </div>
  )
}

export default Update