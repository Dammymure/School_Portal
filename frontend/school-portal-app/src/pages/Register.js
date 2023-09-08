import React from 'react';
import Logo from '../images/logo.png'
import {Link} from 'react-router-dom'

const Register = () => {
 return (
  <div className="flex flex-col justify-center h-[100vh] bg-[url('https://dr.savee-cdn.com/things/5/f/9f9240e98ba16ea45dec87.webp')] w-full h-[100%] bg-cover bg-center bg-no-repeat">
   <div className="flexin justify-center">
   <img src={Logo} alt=""/>
   </div>
  <div className="flexin justify-center">
   <form class="form">
    <p class="title-log">Register </p>
    <p class="message">Signup now and get full access to our app. </p>

        <label >
            <input required="" placeholder="" type="text" class="input"/>
            <span>Name</span>
        </label>
 
            
    <label>
        <input required="" placeholder="" type="email" class="input"/>
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" class="input"/>
        <span>Password</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" class="input"/>
        <span>Confirm password</span>
    </label>
    <button class="submit">Submit</button>
    <p class="signin">Already have an acount ? <Link to="/login"> Signin</Link> </p>
</form>
  </div>
 </div>)
}


export default Register;