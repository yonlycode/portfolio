import React, { useState, useEffect } from 'react'
import "../../../assets/css/adminLoginForm.css"
import {Redirect} from 'react-router-dom'
import TwoPageBanner from '../../../Components/stateless/banners/TwoPageBanner/TwoPageBanner';
import HandleConnection from '../../../Auth/HandleConnection';

interface props{

}

const AdminLoginPage = (props :props):React.FunctionComponentElement<props> =>{

  const [mail , setMail] = useState("")
  const [password , setPassword] = useState("")
  const [redirectToReferrer , setRedirectToReferrer] = useState(false)
  const [errorMsg , setErrorMsg] = useState("")

  let redirectPath = '/admin';


  useEffect(()=>{
    if (redirectToReferrer){ 
      window.location.href = redirectPath;
    }
  })

  const checkLogin=()=>{
    try{
      HandleConnection(mail, password)
      .then((res)=>{
        console.log(res)
        if (res){
          setRedirectToReferrer(true)
        }else{
          setErrorMsg("bad credential")
        }
      })
      .catch(e=>{
        setErrorMsg("bad credential")
      })
    }
    catch(e){
      setErrorMsg("bad credential")
    }
  }

  const cleanAlert=()=>{
    setErrorMsg("")
  }
  
  let content = <>
    <TwoPageBanner 
      currentUri="login"
    />
    <div className="wrapper">
      <div className="login">
          <p className="title">Log in</p>
          <input 
              type="mail" 
              placeholder="Mail" 
              name="Mail"
              value={mail}
              onChange={(e)=>setMail(e.target.value)}
          />
          <i className="fa fa-user"></i>

          <input 
              type="password" 
              placeholder="Password"
              name="Password" 
              value=  {password}
              onChange={(e)=>setPassword(e.target.value)}
          />
          <i className="fa fa-key"></i>


          <button onClick={ checkLogin }>
              <i className="spinner"></i>
              <span className="state">Connection</span>
          </button>
        </div>
      </div>
  </>

  return content;
}

export default AdminLoginPage;