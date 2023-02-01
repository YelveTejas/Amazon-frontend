import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
    const [data,setData] = useState({
        fname:'',
        email:'',
        number:'',
        password:'',
        cpassword:''

    })
//  console.log(data)
const add_Data=(e)=>{
    const {name,value} = e.target
    setData(()=>{
        return{
            ...data,
        [name]:value
        }
       
    })

}


const sendData=(e)=>{
    e.preventDefault();
    const {fname,email,number,password,cpassword}=data

    axios.post('http://localhost:4500/register',{
        fname,email,number,password,cpassword
    }).then((res)=>{
        if(res){
        toast.success('Registered Succefully',{
            position:'top-center'
        })
    }
        // if(res.status==422 || !res){
        //     alert('Noe Data')
        // }else{
        //     alert('Added successfully')
        // }
    }).catch((err)=>{
        console.log("error",err)
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
               <h1>Sign UP</h1>
               <div className='form_data'>
                   <label htmlFor='fname'>Your Name</label>
                   <input type='text' value={data.fname} onChange={add_Data} name='fname' id='email'></input>
               </div>
               <div className='form_data'>
                   <label htmlFor='email'>Email</label>
                   <input type='text' name='email' value={data.email} onChange={add_Data} id='fname'></input>
               </div>
               <div className='form_data'>
                   <label htmlFor='number'>Mobile Number</label>
                   <input type='Number' value={data.number} name='number' onChange={add_Data} id='number'></input>
               </div>
               <div className='form_data'>
                   <label htmlFor=''>Password</label>
                   <input type='password' value={data.password} name='password' id='' onChange={add_Data} placeholder='Atleast 6 characters'></input>
               </div>
               <div className='form_data'>
                   <label htmlFor=''>Confirm Password</label>
                   <input type='password' value={data.cpassword} name='cpassword' onChange={add_Data} id='cpassword'></input>
               </div>
               <button className='signin_btn' onClick={sendData}>Continue</button>
               <div className='signin_info'>
                   <p>Already have an account</p>
                   <NavLink to='/login'>login in</NavLink>
               </div>
           </form>
       </div>
       <ToastContainer />
   </div>
</section>
        </>
    )
}

export default Signup