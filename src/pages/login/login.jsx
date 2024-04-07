import React from 'react';
import './login.css'
const Login = () => {
    return (
       
            <div className="alll">
<div className="left">
<h2>Thank you for <br /> choosing us to <br /> take care of your <br /> smile!</h2>

</div>
<div className="right">
<div className="login">
 <div className="text2">
   <h3>login</h3>
   <p>login into your account</p>
 </div>
 <div className="inp">
   <div className="input1">
     <label htmlFor="email">enter your email</label>
     <input type="email" name='email' placeholder='username@gmail.com'/>
   </div>
   <div className="input2">
   <label htmlFor="password">enter your password</label>
     <input type="password" name='password' placeholder='Password' />
   </div>
   <div className="btn11">
     <button className='cnx'><b>Login</b></button>
   </div>
   <div className="sign-up">
     <p>Doesn’t have an account? Sign up <a href="/">Sign up</a></p>
     
   </div>
 </div>
</div>
</div>


</div>
        
    );
}

export default Login;
