import React, { Component } from 'react';
import {Navbar} from '../../components/Navbar/Navbar';
import CoverAds from '../../components/CoverAds/CoverAds';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
// import Themes from '../../components/Themes/Themes';

export class Homepage extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <CoverAds />
                <div id="header">
                    <div className="container">
                        <div id="mainBody">
                            <div className="container">
                                <div className="row">
                                <Sidebar/>
                                <div className="span9">		
                                    <div className="well well-small">
                                    <h4>Featured Products <small className="pull-right">200+ featured products</small></h4>

                                    <div className="row-fluid">
                                    <div id="featured" className="carousel slide">

                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <ul className="thumbnails">
                                                <li className="span3">
                                                    <div className="thumbnail">
                                                    <i className="tag"></i>
                                                        <a href="/product_details"><img src={require("../../components/images/products/b1.jpg")} alt="" /></a>
                                                        <div className="caption">
                                                        <h5>Product name</h5>
                                                        <h4><a className="btn" href="/product_details">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="span3">
                                                    <div className="thumbnail">
                                                    <i className="tag"></i>
                                                        <a href="/product_details"><img src={require("../../components/images/products/b2.jpg")} alt="" /></a>
                                                        <div className="caption">
                                                        <h5>Product name</h5>
                                                        <h4><a className="btn" href="/product_details">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="span3">
                                                    <div className="thumbnail">
                                                    <i className="tag"></i>
                                                        <a href="/product_details"><img src={require("../../components/images/products/b3.jpg")} alt=""/></a>
                                                        <div className="caption">
                                                        <h5>Product name</h5>
                                                        <h4><a className="btn" href="/product_details">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="span3">
                                                    <div className="thumbnail">
                                                        <i className="tag"></i>
                                                        <a href="/product_details"><img src={require("../../components/images/products/b4.jpg")} alt="" /></a>
                                                        <div className="caption">
                                                            <h5>Product name</h5>
                                                            <h4><a className="btn" href="/product_details">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            </div>
                                            <div className="item">

                                            <ul className="thumbnails">
                                                <li className="span3">
                                                    <div className="thumbnail">
                                                    <i className="tag"></i>
                                                        <a href="/product_details"><img src={require("../../components/images/products/5.jpg")} alt="" /></a>
                                                        <div className="caption">
                                                        <h5>Product name</h5>
                                                        <h4><a className="btn" href="/product_details">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="span3">
                                                    <div className="thumbnail">
                                                    <i className="tag"></i>
                                                        <a href="/product_details"><img src={require("../../components/images/products/6.jpg")} alt="" /></a>
                                                        <div className="caption">
                                                        <h5>Product name</h5>
                                                        <h4><a className="btn" href="/product_details">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="span3">
                                                    <div className="thumbnail">
                                                        <a href="/product_details"><img src={require("../../components/images/products/7.jpg")} alt=""/></a>
                                                        <div className="caption">
                                                        <h5>Product name</h5>
                                                        <h4><a className="btn" href="/product_details">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="span3">
                                                    <div className="thumbnail">
                                                        <a href="/product_details"><img src={require("../../components/images/products/8.jpg")} alt=""/></a>
                                                        <div className="caption">
                                                        <h5>Product name</h5>
                                                        <h4><a className="btn" href="/product_details">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="item">
                                            <ul className="thumbnails">
                                                <li className="span3">
                                                    <div className="thumbnail">
                                                        <a href="/product_details"><img src={require("../../components/images/products/9.jpg")} alt=""/></a>
                                                        <div className="caption">
                                                        <h5>Product name</h5>
                                                        <h4><a className="btn" href="/product_details">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="span3">
                                                    <div className="thumbnail">
                                                        <a href="/product_details"><img src={require("../../components/images/products/10.jpg")} alt=""/></a>
                                                        <div className="caption">
                                                        <h5>Product name</h5>
                                                        <h4><a className="btn" href="/product_details">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="span3">
                                                    <div className="thumbnail">
                                                        <a href="/product_details"><img src={require("../../components/images/products/11.jpg")} alt=""/></a>
                                                        <div className="caption">
                                                        <h5>Product name</h5>
                                                        <h4><a className="btn" href="/product_details">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="span3">
                                                    <div className="thumbnail">
                                                        <a href="/product_details"><img src={require("../../components/images/products/1.jpg")} alt=""/></a>
                                                        <div className="caption">
                                                        <h5>Product name</h5>
                                                        <h4><a className="btn" href="/product_details">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="item">
                                            <ul className="thumbnails">
                                                <li className="span3">
                                                    <div className="thumbnail">
                                                        <a href="/product_details"><img src={require("../../components/images/products/2.jpg")} alt=""/></a>
                                                        <div className="caption">
                                                        <h5>Product name</h5>
                                                        <h4><a className="btn" href="/product_details">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="span3">
                                                    <div className="thumbnail">
                                                        <a href="/product_details"><img src={require("../../components/images/products/3.jpg")} alt=""/></a>
                                                        <div className="caption">
                                                        <h5>Product name</h5>
                                                        <h4><a className="btn" href="/product_details">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="span3">
                                                    <div className="thumbnail">
                                                        <a href="/product_details"><img src={require("../../components/images/products/4.jpg")} alt=""/></a>
                                                        <div className="caption">
                                                        <h5>Product name</h5>
                                                        <h4><a className="btn" href="/product_details">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="span3">
                                                    <div className="thumbnail">
                                                        <a href="/product_details"><img src={require("../../components/images/products/5.jpg")} alt=""/></a>
                                                        <div className="caption">
                                                        <h5>Product name</h5>
                                                        <h4><a className="btn" href="/product_details">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                        <a className="left carousel-control" href="#featured" data-slide="prev">‹</a>
                                        <a className="right carousel-control" href="#featured" data-slide="next">›</a>
                                        </div>
                                    </div>
                                </div>

                                <h4>Latest Products </h4>
                                    <ul className="thumbnails">
                                        <li className="span3">
                                            <div className="thumbnail">
                                                <a  href="/product_details"><img src={require("../../components/images/products/6.jpg")} alt=""/></a>
                                                <div className="caption">
                                                <h5>Product name</h5>
                                                <p> 
                                                    Lorem Ipsum is simply dummy text. 
                                                </p>
                                                
                                                <h4 style={{textAlign:"center"}}><a className="btn" href="/product_details"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="span3">
                                            <div className="thumbnail">
                                                <a  href="/product_details"><img src={require("../../components/images/products/7.jpg")} alt=""/></a>
                                                <div className="caption">
                                                <h5>Product name</h5>
                                                <p> 
                                                    Lorem Ipsum is simply dummy text. 
                                                </p>
                                                <h4 style={{textAlign:"center"}}><a className="btn" href="/product_details"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="span3">
                                            <div className="thumbnail">
                                                <a  href="/product_details"><img src={require("../../components/images/products/8.jpg")} alt=""/></a>
                                                <div className="caption">
                                                <h5>Product name</h5>
                                                <p> 
                                                    Lorem Ipsum is simply dummy text. 
                                                </p>
                                                <h4 style={{textAlign:"center"}}><a className="btn" href="/product_details"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="span3">
                                            <div className="thumbnail">
                                                <a  href="/product_details"><img src={require("../../components/images/products/9.jpg")} alt=""/></a>
                                                <div className="caption">
                                                <h5>Product name</h5>
                                                <p> 
                                                    Lorem Ipsum is simply dummy text. 
                                                </p>
                                                <h4 style={{textAlign:"center"}}><a className="btn" href="/product_details"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="span3">
                                            <div className="thumbnail">
                                                <a  href="/product_details"><img src={require("../../components/images/products/10.jpg")} alt=""/></a>
                                                <div className="caption">
                                                <h5>Product name</h5>
                                                <p> 
                                                    Lorem Ipsum is simply dummy text. 
                                                </p>
                                                <h4 style={{textAlign:"center"}}><a className="btn" href="/product_details"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="span3">
                                            <div className="thumbnail">
                                                <a  href="/product_details"><img src={require("../../components/images/products/11.jpg")} alt=""/></a>
                                                <div className="caption">
                                                <h5>Product name</h5>
                                                <p> 
                                                    Lorem Ipsum is simply dummy text. 
                                                </p>
                                                <h4 style={{textAlign:"center"}}><a className="btn" href="/product_details"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>	
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            {/* <Themes /> */}
        </div>
        )
    }
}

export default Homepage;
