import React, { Component } from 'react';
import {Navbar} from '../../components/Navbar/Navbar';
import CoverAds from '../../components/CoverAds/CoverAds';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import {userActions} from '../../_actions';
import {userService} from '../../_services';
import {store} from '../../_helpers';

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.props.dispatch(userActions.logout());
        this.state = {
            user: {
                title:'',
                fname:'',
                lname:'',
                email: '',
                password: '',
            },
            submitted: false,
            registered:false,
            // loggedIn:store.getState().authentication.loggedIn
        };
    }

    handleChange=(e)=> {
        const {name, value} = e.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit=(e) =>{
        e.preventDefault();
        this.setState({submitted: true});
        const {user} = this.state;
        const {dispatch} = this.props;
        if (user.title && user.fname && user.lname && user.email && user.password) {
                console.log("registering",dispatch(userActions.register(user))

            );
        }
    }

    render(){
        const {registering} = this.props;
        const {user, submitted,registered,loggedIn} = this.state;
        // console.log("LoggedIn?",loggedIn);
        // console.log(store.getState())
        // console.log(registered);
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
                                        <li className="active">Registration</li>
                                    </ul>
                                    <h3> Registration</h3>	
                                    {!registered?
                                    <div className="well">

                                        <form className="form-horizontal" name="form" onSubmit={this.handleSubmit} >
                                            <h4>Your personal information</h4>
                                            <div className="control-group">
                                            <label className="control-label">Title <sup>*</sup></label>
                                            <div className="controls">
                                            <select className="span1" name="days" name="title" value={user.title}
                                                    onChange={this.handleChange}>
                                                <option value="">-</option>
                                                <option value="Mr.">Mr.</option>
                                                <option value="Mrs.">Mrs</option>
                                                <option value="Miss.">Miss</option>
                                            </select>
                                            </div>
                                            </div>
                                            <div className="control-group">
                                                <label className="control-label" htmlFor="inputFname1">First name <sup>*</sup></label>
                                                <div className="controls">
                                                <input type="text" id="inputFname1" placeholder="First Name" name="fname" value={user.fname}
                                                    onChange={this.handleChange} required/>
                                                {submitted && !user.fname &&<div className="alert alert-block alert-error fade in">First Name is        required</div>}
                                                </div>
                                            </div>
                                            <div className="control-group">
                                                <label className="control-label" htmlFor="inputLnam">Last name <sup>*</sup></label>
                                                <div className="controls">
                                                <input type="text" id="inputLnam" placeholder="Last Name" name="lname" value={user.lname}
                                                    onChange={this.handleChange} required/>
                                                {submitted && !user.lname &&<div className="alert alert-block alert-error fade in">Last Name is required</div>}
                                                </div>
                                            </div>
                                            <div className="control-group">
                                            <label className="control-label" htmlFor="input_email">Email <sup>*</sup></label>
                                            <div className="controls">
                                            <input type="email" id="input_email" placeholder="Email" name="email" value={user.email}
                                                onChange={this.handleChange} required/>
                                            {submitted && !user.email &&<div className="alert alert-block alert-error fade in">Email is required</div>} 
                                            </div>
                                        </div>	  
                                        <div className="control-group">
                                            <label className="control-label" htmlFor="inputPassword1">Password <sup>*</sup></label>
                                            <div className="controls">
                                            <input type="password" id="inputPassword1" placeholder="Password" name="password" value={user.password}
                                                onChange={this.handleChange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
                                            {submitted && !user.password &&<div className="alert alert-block alert-error fade in"> Password is required</div>}
                                            </div>
                                        </div>	  

                                            <h4>Your address</h4>            
                                            <div className="control-group">
                                                <label className="control-label" htmlFor="address2">Address<sup>*</sup></label>
                                                <div className="controls">
                                                <input type="text" id="address2" placeholder="Adress line 2"/> <span>Street Address, P.O. Box</span>
                                                </div>
                                            </div>
                                            <div className="control-group">
                                                <label className="control-label" htmlFor="address2">Address (Line 2)<sup>*</sup></label>
                                                <div className="controls">
                                                <input type="text" id="address2" placeholder="Adress line 2"/> <span>Apartment, suite, unit, building, floor, etc.</span>
                                                </div>
                                            </div>

                                            <div className="control-group">
                                                <label className="control-label" htmlFor="city">City<sup>*</sup></label>
                                                <div className="controls">
                                                <input type="text" id="city" placeholder="city"/> 
                                                </div>
                                            </div>
                                            <div className="control-group">
                                                <label className="control-label" htmlFor="state">State<sup>*</sup></label>
                                                <div className="controls">
                                                <select id="state" >
                                                    <option value="">-</option>
                                                    <option value="1">Alabama</option><option value="2">Alaska</option><option value="3">Arizona</option><option value="4">Arkansas</option><option value="5">California</option><option value="6">Colorado</option><option value="7">Connecticut</option><option value="8">Delaware</option><option value="53">District of Columbia</option><option value="9">Florida</option><option value="10">Georgia</option><option value="11">Hawaii</option><option value="12">Idaho</option><option value="13">Illinois</option><option value="14">Indiana</option><option value="15">Iowa</option><option value="16">Kansas</option><option value="17">Kentucky</option><option value="18">Louisiana</option><option value="19">Maine</option><option value="20">Maryland</option><option value="21">Massachusetts</option><option value="22">Michigan</option><option value="23">Minnesota</option><option value="24">Mississippi</option><option value="25">Missouri</option><option value="26">Montana</option><option value="27">Nebraska</option><option value="28">Nevada</option><option value="29">New Hampshire</option><option value="30">New Jersey</option><option value="31">New Mexico</option><option value="32">New York</option><option value="33">North Carolina</option><option value="34">North Dakota</option><option value="35">Ohio</option><option value="36">Oklahoma</option><option value="37">Oregon</option><option value="38">Pennsylvania</option><option value="51">Puerto Rico</option><option value="39">Rhode Island</option><option value="40">South Carolina</option><option value="41">South Dakota</option><option value="42">Tennessee</option><option value="43">Texas</option><option value="52">US Virgin Islands</option><option value="44">Utah</option><option value="45">Vermont</option><option value="46">Virginia</option><option value="47">Washington</option><option value="48">West Virginia</option><option value="49">Wisconsin</option><option value="50">Wyoming</option></select>
                                                </div>
                                            </div>		
                                            <div className="control-group">
                                                <label className="control-label" htmlFor="postcode">Zip / Postal Code<sup>*</sup></label>
                                                <div className="controls">
                                                <input type="text" id="postcode" placeholder="Zip / Postal Code"/> 
                                                </div>
                                            </div>
                                            
                                            <div className="control-group">
                                                <label className="control-label" htmlFor="country">Country<sup>*</sup></label>
                                                <div className="controls">
                                                <select id="country" >
                                                    <option value="">-</option>
                                                    <option value="1">Country</option>
                                                </select>
                                                </div>
                                            </div>	

                                            <div className="control-group">
                                                <label className="control-label" htmlFor="phone">Home phone <sup>*</sup></label>
                                                <div className="controls">
                                                <input type="tel"  name="phone" id="phone" placeholder="phone" pattern="[^\+?]\d{1,2}[\(]\d{3}[\)]\d{3}[\-]\d{4}"/> <span>You must register at least one phone number</span>
                                                </div>
                                            </div>                                       
                                            <div className="control-group">
                                                <label className="control-label" htmlFor="mobile">Mobile Phone </label>
                                                <div className="controls">
                                                <input type="text"  name="mobile" id="mobile" placeholder="Mobile Phone"/> 
                                                </div>
                                            </div>                                        
                                            <p><sup>*</sup>Required field	</p>  
                                            <div className="control-group">
                                                <div className="controls">
                                                    <button type="submit" className="btn btn-large btn-success">Register</button>
                                                    {registering &&
                                                        <img
                                                            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                                                        />
                                                    }     
                                                </div>
                                            </div>		
                                        </form>
                                    </div> : 
                                    (<h4>Signed up successfully!</h4>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    );
    }
}

function mapStateToProps(state) {
    const {registering} = state.registration;
    return {
        registering
    };
}

const connectedRegister = withRouter(connect(mapStateToProps)(Register));
export {connectedRegister as Register};

