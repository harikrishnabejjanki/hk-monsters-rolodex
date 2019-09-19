import React from 'react';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/sign-up/sign-up';
import './signin-up.scss';

const signInAndUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default signInAndUpPage;