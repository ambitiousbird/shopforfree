import React, { Component } from 'react';
import {Navbar} from '../../components/Navbar/Navbar';
import CoverAds from '../../components/CoverAds/CoverAds';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';

import {connect} from 'react-redux';
import {userActions} from '../../_actions';

class Login extends React.Component{
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render(){
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return(
            <div>
                <Navbar/>
                <CoverAds/>
                <div id="header">
                    <div className="container">
                        <div id="mainBody">
                            <div className="container">
                                <div className="row">
                                <Sidebar/>
                                <div className="span9">
                                    <ul className="breadcrumb">
                                        <li><a href="/">Home</a> <span className="divider">/</span></li>
                                        <li className="active">Login</li>
                                    </ul>
                                    <h3> Login</h3>	
                                    <hr className="soft"/>
                                    
                                    <div className="row">
                                        <div className="span4">
                                            <div className="well">
                                            <h5>CREATE YOUR ACCOUNT</h5><br/>
                                            Enter your e-mail address to create an account.<br/><br/><br/>
                                            <form action="register.html">
                                            <div className="control-group">
                                                <label className="control-label" for="inputEmail0">E-mail address</label>
                                                <div className="controls">
                                                <input className="span3"  type="text" id="inputEmail0" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="controls">
                                            <button type="submit" className="btn block">Create Your Account</button>
                                            </div>
                                            </form>
                                        </div>
                                        </div>
                                        <div className="span1"> &nbsp;</div>
                                        <div className="span4">
                                            <div className="well">
                                            <h5>ALREADY REGISTERED ?</h5>
                                            <form>
                                            <div className="control-group">
                                                <label className="control-label" for="inputEmail1">Email</label>
                                                <div className="controls">
                                                <input className="span3"  type="text" id="inputEmail1" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="control-group">
                                                <label className="control-label" for="inputPassword1">Password</label>
                                                <div className="controls">
                                                <input type="password" className="span3"  id="inputPassword1" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="control-group">
                                                <div className="controls">
                                                <button type="submit" className="btn">Sign in</button> <a href="/forgetpass">Forget password?</a>
                                                </div>
                                            </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
	                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
        )
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login};
