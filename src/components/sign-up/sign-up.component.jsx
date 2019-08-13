import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { signUpStart } = this.props;
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}
		signUpStart(displayName, email, password);
	}

	handleChange = event => {
		const { value, name } = event.target
		this.setState({ [name]: value })
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className='sign-up'>
				<h1>I do not have an account</h1>
				<span>Sign up with your email and password</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						name='displayName'
						type='text'
						value={displayName}
						handleChange={this.handleChange}
						label='Display Name'
						required
					/>
					<FormInput
						name='email'
						type='email'
						autoComplete='email'
						value={email}
						handleChange={this.handleChange}
						label='Email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						autoComplete='new-password'
						value={password}
						handleChange={this.handleChange}
						label='Password'
						required
					/>
					<FormInput
						name='confirmPassword'
						type='password'
						autoComplete='new-password'
						value={confirmPassword}
						handleChange={this.handleChange}
						label='Confirm Password'
						required
					/>
					<div className='buttons'>
						<CustomButton type='submit'>
							SIGN UP
						</CustomButton>
					</div>
					
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	signUpStart: (displayName, email, password) => 
		dispatch(signUpStart({ displayName, email, password }))
});

export default connect(null, mapDispatchToProps)(SignUp);