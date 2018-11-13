import React, { Component } from 'react'
import {Navbar} from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './contact.css';

export class Contact extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <div id="header">
                <div className="container">
                    <div id="mainBody">
                        <div className="container">
                            <hr className="soften" />
                            <h1>Visit us</h1>
                            <hr className="soften"/>	
                            <div className="row">
                                <div className="span4">
                                <h4>Contact Details</h4>
                                <p>	18 Fresno,<br/> CA 93727, USA
                                    <br/><br/>
                                    info@chinaustrade.net<br/>
                                    Tel 123-456-6780<br/>
                                    Fax 123-456-5679<br/>
                                    web:chinaustrade.net
                                </p>		
                                </div>
                                    
                                <div className="span4">
                                    <h4>Opening Hours</h4>
                                    <h5> Monday - Friday</h5>
                                    <p>09:00am - 09:00pm<br/><br/></p>
                                    <h5>Saturday</h5>
                                    <p>09:00am - 07:00pm<br/><br/></p>
                                    <h5>Sunday</h5>
                                    <p>12:30pm - 06:00pm<br/><br/></p>
                                </div>

                                <div className="span4">
                                    <h4>Email Us</h4>
                                    <form className="form-horizontal">
                                        <fieldset>
                                            <div className="control-group">                               
                                                <input type="text" placeholder="name" className="input-xlarge"/>                                
                                            </div>
                                            <div className="control-group">                                
                                                <input type="text" placeholder="email" className="input-xlarge"/>                               
                                            </div>
                                            <div className="control-group">                                
                                                <input type="text" placeholder="subject" className="input-xlarge"/>                               
                                            </div>
                                            <div className="control-group">
                                                <textarea rows="3" id="textarea" className="input-xlarge"></textarea>
                                            </div>
                                            <button className="btn btn-large" type="submit">Send Messages</button>
                                        </fieldset>
                                    </form>
                                </div>  
                            </div>
                            <div className="row">
                                <div className="span12">
                                    <iframe id="address" src="https://www.google.com/maps/embed/v1/place?q=40.7127837,-74.0059413&amp;key=AIzaSyDxprfK2UeoblhLLEjsOY95Mgs12J-0CYU "  frameBorder="0" ></iframe><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}

export default Contact;