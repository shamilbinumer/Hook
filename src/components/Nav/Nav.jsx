import React, {  useState } from 'react'
import Test from '../Test/Test'

const Nav = () => {

    const [show,setShow]=useState(true)
    const toggle=()=>{
        setShow(!show)
    }
    // const [val,setVal]=useState({
    //     name:"",
    //     email:"",
    //     phone:"",
    //     pincode:""
    // })
    // const handleChange=(e)=>{
    //     setVal((pre)=>{
    //         return{...pre,[e.target.name]:e.target.value}
    //     })
       
    // }
    // useEffect(()=>{
    //     console.log("name is", val.name,"email is", val.email,"phone is",val.phone,"pin code is",val.pincode);
    // },[val.email])
  return (
    <div>
    {/* <div><input type="text" name='name'    onChange={handleChange} placeholder='name' /></div>
    <div><input type="text" name='email'   onChange={handleChange} placeholder='email' /></div>
    <div><input type="text" name='phone'   onChange={handleChange} placeholder='phone' /></div>
    <div><input type="text" name='pincode' onChange={handleChange} placeholder='pincode' /></div>
    <p>Name is {val.name}</p>
    <p>email is {val.email}</p>
    <p>phone is {val.phone}</p>
    <p>pincode is {val.pincode}</p>

    <div>

    </div> */}

    {show?<Test/>:null}
    <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default Nav
