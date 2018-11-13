import React, { Component } from 'react';
import {Navbar} from '../../components/Navbar/Navbar';
import CoverAds from '../../components/CoverAds/CoverAds';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';

export class Products extends React.Component{
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
                                        <li><a href="index.html">Home</a><span className="divider">/</span></li>
                                        <li className="active">Products Name</li>
                                    </ul>
                                    <h3> Products Name <small className="pull-right"> 40 products are available </small></h3>	
                                    <hr className="soft"/>
                                    <p>
                                        Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - that is why our goods are so popular and we have a great number of faithful customers all over the country.
                                    </p>
                                    <hr className="soft"/>
                                    <form className="form-horizontal span6">
                                        <div className="control-group">
                                        <label className="control-label alignL">Sort By </label>
                                            <select>
                                            <option>Priduct name A - Z</option>
                                            <option>Priduct name Z - A</option>
                                            <option>Priduct Stoke</option>
                                            <option>Price Lowest first</option>
                                            </select>
                                        </div>
                                    </form>
                                    
                                <div id="myTab" className="pull-right">
                                <a href="#listView" data-toggle="tab"><span className="btn btn-large"><i className="icon-list"></i></span></a>
                                <a href="#blockView" data-toggle="tab"><span className="btn btn-large btn-primary"><i className="icon-th-large"></i></span></a>
                                </div>
                                <br className="clr"/>
                                <div className="tab-content">
                                    <div className="tab-pane" id="listView">
                                        <div className="row">	  
                                            <div className="span2">
                                                <img src={require("../../components/images/products/3.jpg")} alt=""/>
                                            </div>
                                            <div className="span4">
                                                <h3>New | Available</h3>				
                                                <hr className="soft"/>
                                                <h5>Product Name </h5>
                                                <p>
                                                Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - 
                                                that is why our goods are so popular..
                                                </p>
                                                <a className="btn btn-small pull-right" href="product_details.html">View Details</a>
                                                <br className="clr"/>
                                            </div>
                                            <div className="span3 alignR">
                                            <form className="form-horizontal qtyFrm">
                                            <h3> $140.00</h3>
                                            <label className="checkbox">
                                                <input type="checkbox" />  Adds product to compair
                                            </label><br/>
                                            
                                            <a href="product_details.html" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart"></i></a>
                                            <a href="product_details.html" className="btn btn-large"><i className="icon-zoom-in"></i></a>
                                            
                                                </form>
                                            </div>
                                        </div>
                                        <hr className="soft"/>
                                        <div className="row">	  
                                            <div className="span2">
                                                <img src={require("../../components/images/products/1.jpg")} alt=""/>
                                            </div>
                                            <div className="span4">
                                                <h3>New | Available</h3>				
                                                <hr className="soft"/>
                                                <h5>Product Name </h5>
                                                <p>
                                                Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - 
                                                that is why our goods are so popular..
                                                </p>
                                                <a className="btn btn-small pull-right" href="product_details.html">View Details</a>
                                                <br className="clr"/>
                                            </div>
                                            <div className="span3 alignR">
                                            <form className="form-horizontal qtyFrm">
                                                <h3> $140.00</h3>
                                                <label className="checkbox">
                                                <input type="checkbox" />  Adds product to compair
                                                </label><br/>
                                                
                                                <a href="product_details.html" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart"></i></a>
                                                <a href="product_details.html" className="btn btn-large"><i className="icon-zoom-in"></i></a>
                                                
                                            </form>
                                            </div>
                                        </div>
                                        <hr className="soft"/>
                                        <div className="row">	  
                                            <div className="span2">
                                                <img src={require("../../components/images/products/3.jpg")} alt=""/>
                                            </div>
                                            <div className="span4">
                                                <h3>New | Available</h3>				
                                                <hr className="soft"/>
                                                <h5>Product Name </h5>
                                                <p>
                                                Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - 
                                                that is why our goods are so popular..
                                                </p>
                                                <a className="btn btn-small pull-right" href="product_details.html">View Details</a>
                                                <br className="clr"/>
                                            </div>
                                            <div className="span3 alignR">
                                            <form className="form-horizontal qtyFrm">
                                                <h3> $140.00</h3>
                                                <label className="checkbox">
                                                    <input type="checkbox" />  Adds product to compair
                                                </label><br/>
                                                
                                                <a href="product_details.html" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart"></i></a>
                                                <a href="product_details.html" className="btn btn-large"><i className="icon-zoom-in"></i></a>
                                                
                                            </form>
                                            </div>
                                        </div>
                                        <hr className="soft"/>
                                        <div className="row">	  
                                            <div className="span2">
                                                <img src={require("../../components/images/products/3.jpg")} alt=""/>
                                            </div>
                                            <div className="span4">
                                                <h3>New | Available</h3>				
                                                <hr className="soft"/>
                                                <h5>Product Name </h5>
                                                <p>
                                                Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - 
                                                that is why our goods are so popular..
                                                </p>
                                                <a className="btn btn-small pull-right" href="product_details.html">View Details</a>
                                                <br className="clr"/>
                                            </div>
                                            <div className="span3 alignR">
                                                <form className="form-horizontal qtyFrm">
                                                <h3> $140.00</h3>
                                                <label className="checkbox">
                                                <input type="checkbox" />  Adds product to compair
                                                </label><br/>
                                                
                                                <a href="product_details.html" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart"></i></a>
                                                <a href="product_details.html" className="btn btn-large"><i className="icon-zoom-in"></i></a>
                                                
                                                </form>
                                            </div>
                                        </div>
                                    
                                        <hr className="soft"/>
                                        <div className="row">	  
                                            <div className="span2">
                                                <img src={require("../../components/images/products/3.jpg")} alt=""/>
                                            </div>
                                            <div className="span4">
                                                <h3>New | Available</h3>				
                                                <hr className="soft"/>
                                                <h5>Product Name </h5>
                                                <p>
                                                Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - 
                                                that is why our goods are so popular..
                                                </p>
                                                <a className="btn btn-small pull-right" href="product_details.html">View Details</a>
                                                <br className="clr"/>
                                            </div>
                                            <div className="span3 alignR">
                                                <form className="form-horizontal qtyFrm">
                                                <h3> $140.00</h3>
                                                <label className="checkbox">
                                                <input type="checkbox" />  Adds product to compair
                                                </label><br/>
                                                <a href="product_details.html" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart"></i></a>
                                                <a href="product_details.html" className="btn btn-large"><i className="icon-zoom-in"></i></a>
                                                </form>
                                            </div>
                                        </div>
                                        <hr className="soft"/>
                                        <div className="row">	  
                                            <div className="span2">
                                                <img src={require("../../components/images/products/3.jpg")} alt=""/>
                                            </div>
                                            <div className="span4">
                                                <h3>New | Available</h3>				
                                                <hr className="soft"/>
                                                <h5>Product Name </h5>
                                                <p>
                                                Nowadays the lingerie industry is one of the most successful business spheres.We always stay in touch with the latest fashion tendencies - 
                                                that is why our goods are so popular..
                                                </p>
                                                <a className="btn btn-small pull-right" href="product_details.html">View Details</a>
                                                <br className="clr"/>
                                            </div>
                                            <div className="span3 alignR">
                                                <form className="form-horizontal qtyFrm">
                                                <h3> $140.00</h3>
                                                <label className="checkbox">
                                                <input type="checkbox" />  Adds product to compair
                                                </label><br/>
                                                
                                                <a href="product_details.html" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart"></i></a>
                                                <a href="product_details.html" className="btn btn-large"><i className="icon-zoom-in"></i></a>
                                                
                                                </form>
                                            </div>
                                        </div>
                                        <hr className="soft"/>
                                    </div>

                                    <div className="tab-pane  active" id="blockView">
                                        <ul className="thumbnails">
                                            <li className="span3">
                                            <div className="thumbnail">
                                                <a href="product_details.html"><img src={require("../../components/images/products/3.jpg")} alt=""/></a>
                                                <div className="caption">
                                                <h5>Manicure &amp; Pedicure</h5>
                                                <p> 
                                                    I'm a paragraph. Click here 
                                                </p>
                                                <h4 style={{textAlign:"center"}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">&euro;222.00</a></h4>
                                                </div>
                                            </div>
                                            </li>
                                            <li className="span3">
                                            <div className="thumbnail">
                                                <a href="product_details.html"><img src={require("../../components/images/products/3.jpg")} alt=""/></a>
                                                <div className="caption">
                                                <h5>Manicure &amp; Pedicure</h5>
                                                <p> 
                                                    I'm a paragraph. Click here 
                                                </p>
                                                <h4 style={{textalign:"center"}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">&euro;222.00</a></h4>
                                                </div>
                                            </div>
                                            </li>
                                            <li className="span3">
                                            <div className="thumbnail">
                                                <a href="product_details.html"><img src={require("../../components/images/products/3.jpg")} alt=""/></a>
                                                <div className="caption">
                                                <h5>Manicure &amp; Pedicure</h5>
                                                <p> 
                                                    I'm a paragraph. Click here 
                                                </p>
                                                    <h4 style={{textAlign:"center"}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">&euro;222.00</a></h4>
                                                </div>
                                            </div>
                                            </li>
                                            <li className="span3">
                                            <div className="thumbnail">
                                                <a href="product_details.html"><img src={require("../../components/images/products/3.jpg")} alt=""/></a>
                                                <div className="caption">
                                                <h5>Manicure &amp; Pedicure</h5>
                                                <p> 
                                                    I'm a paragraph. Click here 
                                                </p>
                                                    <h4 style={{textAlign:"center"}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">&euro;222.00</a></h4>
                                                </div>
                                            </div>
                                            </li>
                                            <li className="span3">
                                            <div className="thumbnail">
                                                <a href="product_details.html"><img src={require("../../components/images/products/3.jpg")} alt=""/></a>
                                                <div className="caption">
                                                <h5>Manicure &amp; Pedicure</h5>
                                                <p> 
                                                    I'm a paragraph. Click here 
                                                </p>
                                                    <h4 style={{textAlign:"center"}}><a className="btn" href="/product_details"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">&euro;222.00</a></h4>
                                                </div>
                                            </div>
                                            </li>
                                            <li className="span3">
                                            <div className="thumbnail">
                                                <a href="product_details.html"><img src={require("../../components/images/products/3.jpg")} alt=""/></a>
                                                <div className="caption">
                                                <h5>Manicure &amp; Pedicure</h5>
                                                <p> 
                                                    I'm a paragraph. Click here 
                                                </p>
                                                    <h4 style={{textAlign:"center"}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">&euro;222.00</a></h4>
                                                </div>
                                            </div>
                                            </li>
                                        </ul>
                                    <hr className="soft"/>
                                    </div>
                                </div>
                                <a href="compair.html" className="btn btn-large pull-right">Compair Product</a>
                                <div className="pagination">
                                    <ul>
                                    <li><a href="#">&lsaquo;</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">...</a></li>
                                    <li><a href="#">&rsaquo;</a></li>
                                    </ul>
                                    </div>
                                    <br className="clr"/>
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

export default Products;
