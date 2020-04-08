import React from 'react'
import Login from '../../components/login/login.component'
import Register from '../../components/register/register.component'

import './auth.styles.scss';

const Auth = () => (
    <div className="sign-in-and-sign-up">
        <Login />
        <Register />
    </div>
)

export default Auth
