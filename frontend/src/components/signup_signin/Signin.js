import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './sign.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signin = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
   // console.log(data)
    const add_Data = (e) => {
        const { name, value } = e.target
        setData(() => {
            return {
                ...data,
                [name]: value
            }
        })
    }
   
   const login=(e)=>{
    e.preventDefault();
    const {email,password}=data

    axios.post('http://localhost:4500/login',{
        email,password
    }).then((res)=>{
        console.log(res)
        if(res.data.message){
          
        toast.success('Login Succefully',{
            position:'top-center'
        })
        setData({...data,email:'',password:''})
    }
    else{
        toast.error('Login Fail',{
            position:'top-center'
        })
    }
        
    }).catch((err)=>{
        console.log('error',err)
    })
   }
    return (
 <>
            <section>

                <div className='sign_container'>
                    <div className='sign_header'>
                        <img src='https://blog.logomyway.com/wp-content/uploads/2017/02/amazon-logo-1.jpg' alt='error'></img>
                    </div>
                    <div className='sign_form'>
                        <form method='POST'>
                            <h1>Sign IN</h1>
                            <div className='form_data'>
                                <label htmlFor='email'>Email</label>
                                <input type='text' value={data.email} name='email' id='email' onChange={add_Data}></input>
                            </div>
                            <div className='form_data'>
                                <label htmlFor=''>Password</label>
                                <input type='password' value={data.password} onChange={add_Data} name='password' id=''></input>
                            </div>
                            <button className='signin_btn' onClick={login}>Continue</button>
                        </form>
                    </div>
                    <div className='create_accountinfo'>
                        <p>New to Amazon</p>
                        <NavLink to='/register'>
                            <button> Create your amazon account</button>
                        </NavLink>
                    </div>
                    <ToastContainer />
                </div>
            </section>
     </>
 )
}

export default Signin