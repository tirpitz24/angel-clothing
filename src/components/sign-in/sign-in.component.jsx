import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ 
                email: '',
                password: ''
            })
        } catch(error) {
            console.log(error)
            if(error.code === 'auth/too-many-requests') {
                alert(error.message)
            }

            if(error.code === 'auth/wrong-password') {
                alert('Wrong email or password')
            }

            if(error.code === 'auth/user-not-found') {
                alert('User not found')
            }
        }
    };

    handleChange = e => {
        const { value, name} = e.target;
        
        this.setState({ [name]: value})
    };

    render() {
       return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                type='email' 
                name='email' 
                value={this.state.email} 
                handleChange={this.handleChange}
                label='email'
                required/>


                <FormInput 
                type='password' 
                name='password' 
                value={this.state.password} 
                handleChange={this.handleChange}
                label='password'
                required/>

                <div className='buttons'>
                <CustomButton type='submit'> Sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                </div>
            </form>
        </div>
        )
    }
}

export default SignIn;