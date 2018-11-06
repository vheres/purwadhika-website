import React, { Component } from 'react';
import {API_URL_1} from '../supports/api-url/apiurl'
import { Link } from 'react-router-dom';

class SignInPage extends Component {      
    renderHomePage() {
        return(
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="offset-4 col-4">
                        <div className="row py-2">
                            <div className="col">
                                <input type="email" placeholder="Your Email" ref="email" className="form-control"></input>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col">
                                <input type="password" placeholder="Your Password" ref="password" className="form-control"></input>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col">
                                <button placeholder="Your Password" ref="password" className="btn btn-outline-primary">Sign In</button>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col">
                                <a href="/signup">Sign Up</a>
                            </div>
                        </div>
                    </div>       
                </div>
            </div>
        );
    }

    render() {
        return (
        this.renderHomePage()
        );   
    }
}

export default SignInPage;