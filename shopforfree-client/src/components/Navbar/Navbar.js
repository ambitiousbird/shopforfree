import React, { Component } from 'react';
import './navbar.css';
import { connect } from 'react-redux';
import {userActions} from '../../_actions';
// import {store} from '../../_helpers';
import {userService} from '../../_services';
// import * as $ from '@types';

class Navbar extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            loggedIn:'',
            submitted: false,
            active: false
        };

    }

    handleChange=(e)=> {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        this.setState({ submitted: true, });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            dispatch(userActions.login(email, password))
            userService.login(email, password)
            .then(
                ()=>{
                    this.setState({loggedIn: true });  
                }
            )
            .catch(err => {
                console.log('caught an error', err);
            })           
        }
        $('#login').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
          
    }

    handleLogout=(e)=>{
        e.preventDefault();
        // reset login status
        this.props.dispatch(userActions.logout());
        this.setState({ loggedIn: false });
    }

    // componentDidMount(){
    //     this.setState({loggedIn: store.getState().authentication.loggedIn });
    // }

    render(){
        const { loggingIn } = this.props;
        const { email, password, loggedIn, submitted } = this.state;
        console.log(loggedIn);
        return(
            <div>
                {/* <div id="welcomeLine" className="row">
                    <div className="span6">Welcome!<strong> User</strong></div>
                    <div >
                        <div className="pull-right">
                            <a href="/product_summary"><span className="">Fr</span></a>
                            <a href="/product_summary"><span className="">Es</span></a>
                            <span className="btn btn-mini">En</span>
                            <a href="/product_summary"><span>&pound;</span></a>
                            <span className="btn btn-mini">$155.00</span>
                            <a href="/product_summary"><span className="">$</span></a>
                            <a href="/product_summary"><span className="btn btn-mini btn-primary"><i className="icon-shopping-cart icon-white"></i> [ 3 ] Itemes in your cart </span> </a> 
                        </div>
                    </div>
                </div> */}

                <div id="logoArea" className="navbar">
                    <a id="smallScreen" data-target="#topMenu" data-toggle="collapse" className="btn btn-navbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </a>
                    <div className="navbar-inner">
                        <a className="brand" href="/"><p style={{fontSize: "30px", color:"rgb(136, 118, 14)", fontWeight: "bolder"}}>ChinusTrade</p></a>
                            <form className="form-inline navbar-search" method="post" action="/products" >
                                <input id="srchFld" className="srchTxt" type="text" />
                                <select className="srchTxt">
                                    <option>All</option>
                                    <option>CLOTHES </option>
                                    <option>FOOD AND BEVERAGES </option>
                                    <option>HEALTH & BEAUTY </option>
                                    <option>SPORTS & LEISURE </option>
                                    <option>BOOKS & ENTERTAINMENTS </option>
                                </select> 
                                <button type="submit" id="submitButton" className="btn btn-primary">Go</button>
                            </form>
                        <div className="nav-collapse">
                        <ul id="topMenu" className="nav">
                            <li className="nav-item"><a href="/special_offer">Specials Offer</a></li>
                            <li className="nav-item"><a href="/about">About</a></li>
                            <li className="nav-item"><a href="/contact">Contact</a></li>
                            <li className="nav-item">
                                    <a href="/cart">Cart</a>
                                    {/* <span id="cart">Cart</span> */}
                            </li>
                            {/* <li className="nav-item"><a><i class="fa fa-shopping-cart">Cart</i></a></li> */}

                            {loggedIn?
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Account</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Profile</a></li>
                                    <li><a href="#">Orders</a></li>
                                    <li><a href="#">Settings</a></li>
                                    <li><a href="#" onClick={this.handleLogout}>Log out</a></li>

                                    {/* <li className="divider"></li>
                                    <li className="nav-header">Nav header</li> */}
                                </ul>
                            </li> :
                            <li className="nav-item">
                                <a href="#login" role="button" data-toggle="modal" style={{paddingRight:"0"}}><span className="btn btn-large btn-success">Login</span></a>
                                <div id="login" className="modal hide fade in" tabIndex="-1" role="dialog" aria-labelledby="login" aria-hidden="false" >
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="false">×</button>
                                        <h3>Login</h3>
                                    </div>
                                    <div className="modal-body">
                                        <form className="form-horizontal loginForm" onSubmit={this.handleSubmit}>
                                            <div className="control-group">								
                                                <input type="text" id="inputUsername" placeholder="Email address" name="email" value={email} onChange={this.handleChange}/>
                                                {submitted && !email &&
                                                    <div className="signin-help-block">Email is required</div>
                                                }
                                            </div>
                                            <div className="control-group">
                                                <input type="password" id="inputPassword" placeholder="Password" name="password" value={password} onChange={this.handleChange}/>
                                                {submitted && !email &&
                                                    <div className="signin-help-block">Password is required</div>
                                                }
                                            </div>
                                            <div className="control-group">
                                                <h5 >Don't have an account? &nbsp;<a href="/register" id="newuser">Register</a></h5>
                                            </div>
                                            <div className="control-group">
                                                <label className="checkbox">
                                                    <input type="checkbox" /> Remember me
                                                </label>
                                            </div>
                                            <button type="submit" className="btn btn-success">Sign in</button>
                                            {loggingIn &&
                                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                            }
                                            <button className="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                                        </form>		
                                    </div>
                                </div>
                            </li> }
                        </ul>
                        </div>
                    </div>
                </div>
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

const connectedNavbar = connect(mapStateToProps)(Navbar);
export { connectedNavbar as Navbar };