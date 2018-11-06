import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onRegister } from '../actions';

class SignUpPage extends Component {
    onRegisterClick() {
        var data = {
            firstname: this.refs.firstname.value,
            lastname: this.refs.lastname.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value,
            password: this.refs.password1.value
        }
        this.props.onRegister(data);
    }
    
    renderSignUpPage() {
        return(
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="offset-4 col-4">
                        <div className="row py-2">
                            <div className="col">
                                <input type="text" placeholder="First Name" ref="firstname" className="form-control"></input>
                            </div>
                            <div className="col">
                                <input type="text" placeholder="Last Name" ref="lastname" className="form-control"></input>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col">
                                <input type="number" placeholder="Your Phone Number" ref="phone" className="form-control"></input>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col">
                                <input type="email" placeholder="Your Email" ref="email" className="form-control"></input>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col">
                                <input type="password" placeholder="Your Password" ref="password1" className="form-control"></input>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col">
                                <input type="password" placeholder="Confirm Password" ref="password2" className="form-control"></input>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col">
                                <button className="btn btn-outline-primary" onClick={()=>this.onRegisterClick()}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
        this.renderSignUpPage()
        );   
    }
}

export default connect(null, { onRegister })(SignUpPage);