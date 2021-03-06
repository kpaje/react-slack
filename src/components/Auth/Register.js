import React from "react";
import {
	Grid,
	Form,
	Segment,
	Button,
	Header,
	Message,
	Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class Register extends React.Component {
	state = {
		username: "",
		email: "",
		password: "",
		passwordConfirmation: ""
	};

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<Grid textAlign="center" verticalAlign="middle" className="app">
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as="h2" icon color="orange" textAlign="center">
						<Icon name="puzzle piece" color="orange" />
					</Header>
					<Form size="large">
						<Segment stacked>
							<Form.Input
								fluid
								name="username"
								icon="user"
								iconPosition="left"
								placeholder="Username"
								onChange={this.handleChange}
								type="text"
							/>
							<Form.Input
								fluid
								name="email"
								icon="mail"
								iconPosition="left"
								placeholder="Email Address"
								onChange={this.handleChange}
								type="text"
							/>
							<Form.Input
								fluid
								name="password"
								icon="lock"
								iconPosition="left"
								placeholder="Password"
								onChange={this.handleChange}
								type="password"
							/>
							<Form.Input
								fluid
								name="passwordConfirmation"
								icon="repeat"
								iconPosition="left"
								placeholder="Password Confirmation"
								onChange={this.handleChange}
								type="password"
							/>
							<Button color="orange" fluid size="large">
								Submit
							</Button>
						</Segment>
					</Form>
					<Message>
						Already a user?
						<Link to="/login">Login</Link>
					</Message>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Register;

const styles = {
	grid: {
		textAlign: "center",
		verticalAlign: "middle"
	},
	column: {
		maxWidth: 450
	},
	header: {
		color: "orange",
		textAlign: "center"
	},
	icon: {
		color: "orange"
	},
	button: {
		color: "orange"
	}
};
