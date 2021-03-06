import React, { Component } from 'react'

export class Footer extends React.Component{
    render(){
        return(
            <div  id="footerSection">
                <div className="container">
                    <div className="row">
                        <div className="span3">
                            <h5>ACCOUNT</h5>
                            <a href="login.html">YOUR ACCOUNT</a>
                            <a href="login.html">PERSONAL INFORMATION</a> 
                            <a href="login.html">ADDRESSES</a> 
                            <a href="login.html">DISCOUNT</a>  
                            <a href="login.html">ORDER HISTORY</a>
                        </div>
                        <div className="span3">
                            <h5>INFORMATION</h5>
                            <a href="/about">ABOUT</a>  
                            <a href="/contact">CONTACT</a>  
                            <a href="/legal_notice">LEGAL NOTICE</a>  
                            <a href="/tac">TERMS AND CONDITIONS</a> 
                            <a href="/faq">FAQ</a>
                        </div>
                        <div className="span3">
                            <h5>OUR OFFERS</h5>
                            <a href="#">NEW PRODUCTS</a> 
                            <a href="#">TOP SELLERS</a>  
                            <a href="special_offer.html">SPECIAL OFFERS</a>  
                            <a href="#">MANUFACTURERS</a> 
                            <a href="#">SUPPLIERS</a> 
                        </div>
                        <div id="socialMedia" className="span3 pull-right">
                            <h5>SOCIAL MEDIA </h5>
                            <a href="#"><img width="60" height="60" src={require("../images/facebook.png")} title="facebook" alt="facebook"/></a>
                            <a href="#"><img width="60" height="60" src={require("../images/twitter.png")} title="twitter" alt="twitter"/></a>
                            <a href="#"><img width="60" height="60" src={require("../images/youtube.png")} title="youtube" alt="youtube"/></a>
                        </div> 
                    </div>
                    <p className="pull-right">&copy; ChinusTrade</p>
                </div>
            </div>

        )
    }
}
export default Footer;