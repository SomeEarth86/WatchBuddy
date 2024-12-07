/* eslint-disable no-unused-vars */
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            // An error happened. error page needed 
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });
    }, [])

    return (
        <div className='w-full z-10 px-6 absolute bg-gradient-to-b from-black flex justify-between'>
            <img
                className=''
                src="/logo.svg" alt="Logo" />

            {user &&

                <div className='flex items-center justify-between px-1'>
                    <img
                        className='h-10 z-40 mr-4 rounded-full'
                        src={user.photoURL}
                        alt="sign-in logo" />


                    <button
                        type="button"
                        onClick={handleSignOut}
                        className={"p-2 bg-red-800  text-white hover:text-white font-medium rounded-lg text-sm  text-center "}>Sign out</button>


                </div>}
        </div>


    )
}

export default Header