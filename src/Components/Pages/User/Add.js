import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './User.css'

function Add() {
    const{register, handleSubmit}= useForm()

    const navi = useNavigate()

    function SaveData(data){
        axios.post('http://localhost:5000/users',data)
        navi('/Show')
        
    }
  return (
    <div className=' add-form border border-3 m-auto p-3 mt-5 m-auto col-5'>
        <center><h3><u>Patinet Admittion Form</u></h3></center>
        <br/>
        <form onSubmit={handleSubmit(SaveData)}>
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
            <input type='submit' className='btn btn-primary col-4 btn-lg'/>
            <input type='reset'className='btn btn-warning btn-lg col-4 float-end'/>
        </form>
        
    </div>
  )
}

export default Add;