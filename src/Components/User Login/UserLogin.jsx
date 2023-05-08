import React, { useState} from 'react'
import { useForm } from "react-hook-form";
import { loginUser } from '../../APIs/loginUser';
import { setLoginStatus } from '../../actions/setLoginStatus';
import { useDispatch } from 'react-redux';
import { setUserLogin } from '../../actions/setUserLogin';
export default function UserLogin() {

    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const handleInputChange = (e) =>{

            const target = e.target
            const name = target.name 
            const value = target.value 
            if(name === 'email'){
                setEmail(value)
            }
            if(name === 'password'){
                setPassword(value)
            }
    }
    
    const SubmitData = async() =>{
        console.log(email,password)

        
            const token = await loginUser(email,password)
            // console.log('token',token)  
            setUserLogin(dispatch, token)
            setLoginStatus(dispatch,true)   
    }


  return (
    <div>
        <h1>User Login </h1>
        <form onSubmit={handleSubmit(SubmitData)}>
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChangeCapture={handleInputChange}
                {...register('email',{required:true})}
            />
              {errors.email && <span>Email is required</span>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChangeCapture={handleInputChange}
              {...register('password',{required:true})}

            />
            {errors.password && <span>Password is required</span>}
            <button type="submit">
                Submit
            </button>

        </form>
    </div>

  )
}
