import React, { Component } from 'react';
import {Navbar} from '../../components/Navbar/Navbar';
import CoverAds from '../../components/CoverAds/CoverAds';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';

export class ForgetPass extends React.Component{
    render(){
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
                                    <li className="active">Forget password?</li>
                                </ul>
                                <h3> FORGET YOUR PASSWORD?</h3>	
                                <hr className="soft"/>
                                
                                <div className="row">
                                    <div className="span9" style={{minHeight:"900px"}}>
                                        <div className="well">
                                        <h5>Reset your password</h5><br/>
                                        Please enter the email address for your account. A verification code will be sent to you. Once you have received the verification code, you will be able to choose a new password for your account.<br/><br/><br/>
                                        <form>
                                            <div className="control-group">
                                                <label className="control-label" htmlFor="inputEmail1">E-mail address</label>
                                                <div className="controls">
                                                    <input className="span3"  type="text" id="inputEmail1" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="controls">
                                                <button type="submit" className="btn block">Submit</button>
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

export default ForgetPass;
