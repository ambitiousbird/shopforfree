import React, { Component } from 'react'

export class Sidebar extends React.Component{
    render(){
        return(
            <div id="sidebar" className="span3">
                <div className="well well-small"><a id="myCart" href="/product_summary"><img src={require("../images/ico-cart.png")} alt="cart" />3 Items in your cart  <span className="badge badge-warning pull-right">$155.00</span></a></div>
                <ul id="sideManu" className="nav nav-tabs nav-stacked">
                    <li className="subMenu open"><a> ELECTRONICS [230]</a>
                        <ul>
                        <li><a className="active" href="/products"><i className="icon-chevron-right"></i>Cameras (100) </a></li>
                        <li><a href="/products"><i className="icon-chevron-right"></i>Computers, Tablets & laptop (30)</a></li>
                        <li><a href="/products"><i className="icon-chevron-right"></i>Mobile Phone (80)</a></li>
                        <li><a href="/products"><i className="icon-chevron-right"></i>Sound & Vision (15)</a></li>
                        </ul>
                    </li>
                    <li className="subMenu"><a> CLOTHES [840] </a>
                        <ul style={{display:"none"}}>
                            <li><a href="/products"><i className="icon-chevron-right"></i>Women's Clothing (45)</a></li>
                            <li><a href="/products"><i className="icon-chevron-right"></i>Women's Shoes (8)</a></li>												
                            <li><a href="/products"><i className="icon-chevron-right"></i>Women's Hand Bags (5)</a></li>	
                            <li><a href="/products"><i className="icon-chevron-right"></i>Men's Clothings  (45)</a></li>
                            <li><a href="/products"><i className="icon-chevron-right"></i>Men's Shoes (6)</a></li>												
                            <li><a href="/products"><i className="icon-chevron-right"></i>Kids Clothing (5)</a></li>												
                            <li><a href="/products"><i className="icon-chevron-right"></i>Kids Shoes (3)</a></li>												
                        </ul>
                    </li>
                    <li className="subMenu"><a>FOOD AND BEVERAGES [1000]</a>
                        <ul style={{display:"none"}}>
                            <li><a href="/products"><i className="icon-chevron-right"></i>Angoves  (35)</a></li>
                            <li><a href="/products"><i className="icon-chevron-right"></i>Bouchard Aine & Fils (8)</a></li>												
                            <li><a href="/products"><i className="icon-chevron-right"></i>French Rabbit (5)</a></li>	
                            <li><a href="/products"><i className="icon-chevron-right"></i>Louis Bernard  (45)</a></li>
                            <li><a href="/products"><i className="icon-chevron-right"></i>BIB Wine (Bag in Box) (8)</a></li>												
                            <li><a href="/products"><i className="icon-chevron-right"></i>Other Liquors & Wine (5)</a></li>												
                            <li><a href="/products"><i className="icon-chevron-right"></i>Garden (3)</a></li>												
                            <li><a href="/products"><i className="icon-chevron-right"></i>Khao Shong (11)</a></li>										
                        </ul>
                    </li>
                    <li><a href="/products">HEALTH & BEAUTY [18]</a></li>
                    <li><a href="/products">SPORTS & LEISURE [58]</a></li>
                    <li><a href="/products">BOOKS & ENTERTAINMENTS [14]</a></li>
                </ul>
                <br/>
                <div className="thumbnail">
                    <img src={require("../images/products/panasonic.jpg")} alt="Bootshop panasonoc New camera"/>
                    <div className="caption">
                    <h5>Panasonic</h5>
                        <h4 style={{textAlign:"center"}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                    </div>
                </div><br/>

                <div className="thumbnail">
                    <img src={require("../images/products/kindle.png")} title="Bootshop New Kindel" alt="Bootshop Kindel" />
                    <div className="caption">
                    <h5>Kindle</h5>
                        <h4 style={{textAlign:"center"}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                    </div>
                </div><br/>

                <div className="thumbnail">
                    <img src={require("../images/payment_methods.png")} title="Bootshop Payment Methods" alt="Payments Methods" />
                    <div className="caption">
                        <h5>Payment Methods</h5>
                    </div>
                </div>
        </div>
        )
    }
}

export default Sidebar;