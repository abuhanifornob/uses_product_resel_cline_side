import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
const provider = new GoogleAuthProvider();

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {createUser,userProfileUpdate,googleLongin,user,loading}=useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");
    const navigate=useNavigate();

    const handleSignUp = data => {
        setSignUpError("");

        const userInfo={
            displayName:data.name
        }
        createUser(data.email,data.password)
        .then(result=>{
            userProfileUpdate(userInfo)
            .then(()=>{
                
                const userInformation={
                    name:data.name,
                    email:data.email,
                    role:data.userType
                }
                userDataUpdate(userInformation)
                // toast.success("Sign Up is Success !!!!");
                // navigate("/")
            })
            .catch(error=>{
                signUpError(error.message);
            })
            
        })
        .catch(error=>{
            console.error(error);
            signUpError(error.message);
        })
    }

    const handleGoogleLogin=()=>{
        googleLongin(provider)
        .then(()=>{
            if(loading){
                return <progress className="progress w-56"></progress>
            }
            const userInformation={
                name:user.displayName,
                email:user.email,
                role:'buyer'
            }
            userDataUpdate(userInformation)
            console.log(user)

        })
        .catch(error=>console.error(error))
    }
    const userDataUpdate=(userInformation)=>{
          fetch("http://localhost:5000/users",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userInformation)
          })
          .then(res=>res.json())
          .then(data=>{
           // console.log(data);
            toast.success("Sign Up is Success !!!!");
                navigate("/")
          })
}
    return (
        <div className='h-[556px] flex justify-center items-center my-20' >
            <div className='w-96 p-7 shadow-xl'>
                <h1 className='text-center'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered w-full" />
                        {errors.email && <span className='text-yellow-600'>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered w-full" />
                        {errors.email && <span className='text-yellow-600'>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Type of User</span>
                        </label>
                        <select {...register("userType")} className="w-full select select-bordered">
                            <option value="seller">Seller</option>
                            <option value="buyer">buyer</option>
                            
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {
                            required: "This Filed is Must ber Filup", maxLength: { value: 18, message: "Don't Use More then 18 Cherecter " }, minLength: { value: 6, message: "password Must be 6 Charecter " },
                            pattern: {
                                value: /(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]/,
                                message: "Password must Be Strong"
                            },

                        })} type="password" placeholder="Password" className="input input-bordered w-full " />
                        {errors.password && <span className='text-yellow-600'>{errors.password?.message}</span>}
                        <label className="label">
                            <span className="label-text">Forgot Password ?</span>
                        </label>

                    </div>
                  
                    {
                        signUpError && <p className='text-red-700'>{signUpError}</p>
                    }
                    <input className='btn btn-secondary w-full mt-2' type="submit" value="Sign Up" />

                </form>

                <label className="label text-sm ">
                    <span className="label-text">Your Have a Account ? <Link to="/login" className='text-primary'>Please Log In</Link></span>
                </label>


                <div className="flex flex-col w-full border-opacity-50">

                    <div className="divider">OR</div>

                </div>
                <button onClick={handleGoogleLogin} className="btn btn-outline btn-ghost w-full ">CONTINUE WITH GOOGLE</button>

            </div>


        </div>
    );
};

export default SignUp;