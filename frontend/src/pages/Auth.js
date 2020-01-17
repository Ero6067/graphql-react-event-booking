import React, { Component } from "react";

import "./Auth.css";

class AuthPage extends Component {
	state = {
		isLogin: true
	};

	constructor(props) {
		super(props);
		this.emailElem = React.createRef();
		this.passwordElem = React.createRef();
	}

	switchModeHandler = () => {
		this.setState(prevState => {
			return { isLogin: !prevState.isLogin };
		});
	};

	submitHandler = event => {
		event.preventDefault();
		const email = this.emailElem.current.value;
		const pw = this.passwordElem.current.value;

		if (email.trim().length === 0 || pw.trim().length === 0) {
			return;
		}

		let reqBody = {
			query: `
        query {
          login(email: "${email}", password: "${pw}") {
            userId
            token
            tokenExpiration
          }
        }
      `
		};

		if (!this.state.isLogin) {
			reqBody = {
				query: `
          mutation {
            createUser(userInput: { email: "${email}", password: "${pw}"}) {
              _id
              email
            }
          }
        `
			};
		}

		fetch("http://localhost:8000/graphql", {
			method: "POST",
			body: JSON.stringify(reqBody),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => {
				if (res.status !== 200 && res.status !== 201) {
					throw new Error("Failed");
				}
				return res.json();
			})
			.then(resData => {
				console.log(resData);
			})
			.catch(err => {
				console.log(err);
			});
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
					<button type="button" onClick={this.switchModeHandler}>
						Switch to {this.state.isLogin ? "Signup" : "Login"}
					</button>
				</div>
			</form>
		);
	}
}

export default AuthPage;
