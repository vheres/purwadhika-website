import React, { Component } from 'react';
import { connect } from 'react-redux';
import { keepLogin, onLogout, cookieChecked } from './actions';
import { Route, withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './supports/css/app.css';

const cookies = new Cookies();

class App extends Component {
	componentDidMount() {
		const theCookie = cookies.get('myCookie');
		if (theCookie !== undefined) {
			this.props.keepLogin(theCookie);
		}
		else {
			this.props.cookieChecked();
		}
		console.log(this.props.auth);
	}

	componentWillReceiveProps(newProps) {
		if(newProps.auth.email === "") {
			cookies.remove('myCookie');
		}
	}

	render() {
		if (this.props.auth.cookieCheck === true) {
		return (
			<div className="container-fluid p-0">
				<div className="row">
					<div className="col-12">
						<Header />
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<Route exact path="/" component={HomePage}/>
						<Route path="/signin" component={SignInPage}/>
						<Route path="/signup" component={SignUpPage}/>
					</div>
				</div>
			</div>
			
		)} else {
			return <div>Authentication Checking</div>
		}
	}
}

const mapStateToProps = (state) => {
  const auth = state.auth;

  return { auth };
}

export default withRouter(connect(mapStateToProps, { onLogout, keepLogin, cookieChecked })(App));
