import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login'>
            <div className='login_head'>
                <p className='login_head_text'>login here</p>
                <input type="text" placeholder='email' className='login_input' />
                <input type="text" placeholder='password' className='login_input' />
                <button className='login_button'>login</button>

                <Link to='/signup' className='signup_link'> sign up?</Link>
            </div>


        </div>
    )
}

export default Login

