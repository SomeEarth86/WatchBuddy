/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../utils/validate'
import { auth } from '../utils/Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const [isSignIn, setisSignIn] = useState(true)
    const [message, setMessage] = useState(null)

    const email = useRef(null)
    const password = useRef(null)

    const handleSubmit = () => {

        const msg = validate(email.current.value, password.current.value);
        setMessage(msg)

        if (msg != null) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;


                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;


                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }


    }

    const toggleSignIn = () => {
        setisSignIn(!isSignIn)
    }

    return (
        <div className='relative'>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_small.jpg" alt="bg-img" />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className=" w-1/3 absolute bg-black opacity-85 text-white left-0 right-0 mx-auto mt-36 py-20  flex flex-col px-16">
                <h2 className='text-3xl font-bold mb-4 text-left'>{isSignIn ? "Sign in" : "Sign up"}</h2>
                {!isSignIn
                    &&
                    <input type="text"
                        className='px-3 py-3 mb-4 w-full bg-gray-800'
                        placeholder='Full Name'
                    />
                }

                <input type="email"
                    ref={email}
                    className='px-3 py-3 mb-4 w-full bg-gray-800'
                    placeholder='Email'
                />
                <input type="password"
                    ref={password}
                    className='px-3 py-3 w-full bg-gray-800'
                    placeholder='Password'
                />

                {
                    message &&
                    <p className='text-red-700 font-bold'>{message}</p>
                }

                <button
                    onClick={handleSubmit}
                    className='w-full mt-6  bg-red-700 py-3'>{isSignIn ? "Sign in" : "Sign up"}</button>

                <p
                    className='cursor-pointer mt-6'
                    onClick={toggleSignIn}
                >{!isSignIn ? "Already User ? Sign In" : "New to WatchBuddy ? Sign up now"}</p>
            </form>



        </div>
    )
}

export default Login