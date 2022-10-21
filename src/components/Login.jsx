import React from "react";
import { useEffect } from "react";

export default function Login(props) {

    
    
    
    
    
    //working code below
    
    const login =(event)=>{
        
            event.preventDefault();
            const ref = {
              user : event.target[0].value,
              password : event.target[1].value
          }
            props.setLoginCred(ref);
            }
            
            useEffect(() => {
                props.loginCred &&   props.showLoginAlert(`username : ${props?.loginCred?.user}  Password :${props?.loginCred?.password}`,"success")
                
                }, [props.loginCred])

                
                // does not work
            
                // const login =(event)=>{
                //     event.preventDefault();
                //     props.setLoginCred({
                //         user : event.target[0].value,
                //         password : event.target[1].value
                //     });
                //     props.showLoginAlert(`username : ${props?.loginCred?.user}  Password :${props?.loginCred?.password}`,"success")
                // }



                return (
    <>
      <form className="m-3" onSubmit={login} >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            autoComplete="on"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
