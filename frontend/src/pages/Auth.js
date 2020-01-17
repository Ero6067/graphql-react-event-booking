import React, { Component } from "react";

import "./Auth.css";

class AuthPage extends Component {
	constructor(props) {
		super(props);
		this.emailElem = React.createRef();
		this.passwordElem = React.createRef();
	}

	submitHandler = event => {
		event.preventDefault();
		const email = this.emailElem.current.value;
		const pw = this.passwordElem.current.value;

		if (email.trim().length === 0 || pw.trim().length === 0) {
			return;
		}

		console.log(email, pw);
	};

	render() {
		return (
			<form className="auth-form" onSubmit={this.submitHandler}>
				<div className="form-control">
					<label htmlFor="email">E-Mail</label>
					<input type="email" id="email" ref={this.emailElem} />
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" ref={this.passwordElem} />
				</div>
				<div className="form-actions">
					<button type="submit">Submit</button>
					<button type="button"> Switch to Signup</button>
				</div>
			</form>
		);
	}
}

export default AuthPage;
