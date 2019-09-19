import React from 'react';
import './signIn.scss';
import FormInput from '../../components/form-input/forminput';
import CustomButton from '../../components/custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase_util';

class signIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
        await auth.signInWithEmailAndPassword(email, password);

   
         
            this.setState({ email: '', password: '' });

        } catch (error) {
            console.log('sign in error >',error);

        }

        this.setState({ email: '', password: '' });

    }
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });


    }
    render() {

        return (
            <div className="sign-in">
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>


                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} required handleChnage={this.handleChange} label="Email" />
                    <FormInput name="password" type="password" value={this.state.password} required handleChnage={this.handleChange} label="Password" />
                    <div className="submit-buttons">
                        <CustomButton type="submit" value="Submit Form"  >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} value="Submit Form" isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default signIn;