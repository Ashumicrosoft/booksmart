import React from 'react'

const SignUp = () => {
    return (
        <div className='login'>
            <div className='login_head'>
                <p className='login_head_text'>signUp here</p>
                <input type="text" placeholder='name' className='login_input' />
                <input type="text" placeholder='email' className='login_input' />
                <input type="password" placeholder='password' className='login_input' />
                <button className='login_button'>signUp</button>
            </div>


        </div>
    )
}

export default SignUp
