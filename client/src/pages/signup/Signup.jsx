import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignUp from '../../hook/useSignUp'

const SignUp = () => {
    const [input, setInput] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })
    const { loading, signup } = useSignUp()
    const handleCheckboxChange = (gender) => {
        setInput({ ...input, gender })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(input)
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up
                    <span className='text-blue-500'> ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" placeholder='Tran Tuan Nghia' className='w-full input input-bordered h-10'
                            value={input.fullname}
                            onChange={(e) => setInput({ ...input, fullname: e.target.value })} />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='tuannghia' className='w-full input input-bordered h-10'
                            value={input.username}
                            onChange={(e) => setInput({ ...input, username: e.target.value })} />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'
                            value={input.password}
                            onChange={(e) => setInput({ ...input, password: e.target.value })} />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10'
                            value={input.confirmPassword}
                            onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })} />
                    </div>
                    <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={input.gender} />
                    <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </Link>
                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp