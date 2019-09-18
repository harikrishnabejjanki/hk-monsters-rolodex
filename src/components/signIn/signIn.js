import React from 'react';
import './signIn.scss';
import FormInput from '../../components/form-input/forminput';
import CustomButton from '../../components/custom-button/custom-button';

class signIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });

    }
    handleChange = event => { 
        const { value, name } = event.target;

        this.setState({[name] : value});
        

    }
    render() {
        console.log(this.state);
        
        return (
            <div className="sign-in">
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>


                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} required handleChnage={this.handleChange} label="Email"/>
                   
                    <FormInput name="password" type="password" value={this.state.password} required handleChnage={this.handleChange} label="Password"/>
                    

                    <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default signIn;