import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
const provider = new GoogleAuthProvider();

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [logninError,setLoginError]=useState("");
    const{singInEmailPassword,googleLongin}=useContext(AuthContext);

    const handleLogin=data=>{
        console.log(data);
        setLoginError("")
        singInEmailPassword(data.email,data.password)
        .then(result=>{
           //setUserEmail(data.email);
            // <navigate to="/login" state={{ from: location }} replace />
            //navigate(from, { replace: true });
            const user=result.user;
            console.log(user);
        })
        .catch(error=>{
            setLoginError(error.message);
        })
    } 

 const handleGoogleLogin=()=>{
    googleLongin(provider)
    .then(()=>{})
    .catch(error=>console.error(error))
}
    
    return (
        <div className='h-[556px] flex justify-center items-center ' >
        <div className='w-96 p-7 shadow-xl'>
            <h1 className='text-center'>Login</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered w-full" />
                    {errors.email && <span className='text-yellow-600'>This field is required</span>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password", { required: true, maxLength: 18 })} type="password" placeholder="Password" className="input input-bordered w-full " />
                    {errors.password && <span className='text-yellow-600'>Dont use Max 18 Digits</span>}
                    <label className="label">
                        <span className="label-text">Forgot Password ?</span>
                    </label>
                    <div>
                       {logninError && <p>{logninError}</p>}
                    </div>

                </div>
                <input className='btn btn-secondary w-full mt-2' type="submit" value="Sin In" />

            </form>

            <label className="label text-sm ">
                <span className="label-text">New to Uses Product  Online  Market ?<Link to="/signUp" className='text-primary'>Create new account</Link></span>
            </label>


            <div className="flex flex-col w-full border-opacity-50">

                <div className="divider">OR</div>

            </div>
            <button onClick={handleGoogleLogin}  className="btn btn-outline btn-ghost w-full ">CONTINUE WITH GOOGLE</button>

        </div>


    </div>
    );
};

export default Login;