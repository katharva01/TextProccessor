import React, { useState } from 'react';
import Login from './Login';
import Alert from './Alert';


export default function Blog() {
  
  const [loginCred,setLoginCred] = useState(null);

  const [loginAlert,setLoginAlert]=useState(null);

  const showLoginAlert =(msg,type)=>{
    setLoginAlert({msg:msg,
    type:type});
    setTimeout(() => {
      setLoginAlert(null);
    }, 1000);
  }

  return (
    <>
    <Alert alert={loginAlert}  />
    <Login loginCred={loginCred} setLoginCred={setLoginCred} showLoginAlert={showLoginAlert} />
    </>
  )
}
