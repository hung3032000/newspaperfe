import React, {  } from 'react';
const Header = function (props) {
  
  return (
    <>
     <header className="tech-header header">
            <div className="container-fluid">
                <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="tech-index.html"><img src="images/version/tech-logo.png" alt=""></img></a>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="tech-index.html">Home</a>
                            </li>
                            <li className="nav-item dropdown has-submenu menu-large hidden-md-down hidden-sm-down hidden-xs-down">
                                <a className="nav-link dropdown-toggle" href="!#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">News</a>
                                <ul className="dropdown-menu megamenu" aria-labelledby="dropdown01">
                                    <li>
                                        <div className="container">
                                            <div className="mega-menu-content clearfix">
                                                <div className="tab">
                                                    <button className="tablinks active" onclick="openCategory(event, 'cat01')">Science</button>
                                                    <button className="tablinks" onclick="openCategory(event, 'cat02')">Technology</button>
                                                    <button className="tablinks" onclick="openCategory(event, 'cat03')">Social Media</button>
                                                    <button className="tablinks" onclick="openCategory(event, 'cat04')">Car News</button>
                                                    <button className="tablinks" onclick="openCategory(event, 'cat05')">Worldwide</button>
                                                </div>

                                                <div className="tab-details clearfix">
                                                    <div id="cat01" className="tabcontent active">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="blog-box">
                                                                    <div className="post-media">
                                                                        <a href="tech-single.html" title="">
                                                                            <img src="upload/tech_menu_04.jpg" alt="" className="img-fluid"></img>
                                                                            <div className="hovereffect">
                                                                            </div>
                                                                            <span className="menucat">Science</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="blog-meta">
                                                                        <h4><a href="tech-single.html" title="">Relax with the unique warmth of candle flavor</a></h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="cat02" className="tabcontent">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="blog-box">
                                                                    <div className="post-media">
                                                                        <a href="tech-single.html" title="">
                                                                            <img src="upload/tech_menu_08.jpg" alt="" className="img-fluid"></img>
                                                                            <div className="hovereffect">
                                                                            </div>
                                                                            <span className="menucat">Technology</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="blog-meta">
                                                                        <h4><a href="tech-single.html" title="">The most trends of this year with color combination</a></h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="cat03" className="tabcontent">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="blog-box">
                                                                    <div className="post-media">
                                                                        <a href="tech-single.html" title="">
                                                                            <img src="upload/tech_menu_12.jpg" alt="" className="img-fluid"></img>
                                                                            <div className="hovereffect">
                                                                            </div>
                                                                            <span className="menucat">Social Media</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="blog-meta">
                                                                        <h4><a href="tech-single.html" title="">One of the most beautiful ports in the world</a></h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="cat04" className="tabcontent">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="blog-box">
                                                                    <div className="post-media">
                                                                        <a href="tech-single.html" title="">
                                                                            <img src="upload/tech_menu_13.jpg" alt="" className="img-fluid"></img>
                                                                            <div className="hovereffect">
                                                                            </div>
                                                                            <span className="menucat">Car News</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="blog-meta">
                                                                        <h4><a href="tech-single.html" title="">A collection of the most beautiful shop designs</a></h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="blog-box">
                                                                    <div className="post-media">
                                                                        <a href="tech-single.html" title="">
                                                                            <img src="upload/tech_menu_14.jpg" alt="" className="img-fluid"></img>
                                                                            <div className="hovereffect">
                                                                            </div>
                                                                            <span className="menucat">Car News</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="blog-meta">
                                                                        <h4><a href="tech-single.html" title="">America's and Canada's most beautiful wine houses</a></h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="blog-box">
                                                                    <div className="post-media">
                                                                        <a href="tech-single.html" title="">
                                                                            <img src="upload/tech_menu_15.jpg" alt="" className="img-fluid"></img>
                                                                            <div className="hovereffect">
                                                                            </div>
                                                                            <span className="menucat">Car News</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="blog-meta">
                                                                        <h4><a href="tech-single.html" title="">The most professional ways to color your walls</a></h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="blog-box">
                                                                    <div className="post-media">
                                                                        <a href="tech-single.html" title="">
                                                                            <img src="upload/tech_menu_16.jpg" alt="" className="img-fluid"></img>
                                                                            <div className="hovereffect">
                                                                            </div>
                                                                            <span className="menucat">Car News</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="blog-meta">
                                                                        <h4><a href="tech-single.html" title="">Stylish cabinet designs and furnitures</a></h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="cat05" className="tabcontent">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="blog-box">
                                                                    <div className="post-media">
                                                                        <a href="tech-single.html" title="">
                                                                            <img src="upload/tech_menu_17.jpg" alt="" className="img-fluid"></img>
                                                                            <div className="hovereffect">
                                                                            </div>
                                                                            <span className="menucat">Worldwide</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="blog-meta">
                                                                        <h4><a href="tech-single.html" title="">Grilled vegetable with fish prepared with fish</a></h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="blog-box">
                                                                    <div className="post-media">
                                                                        <a href="tech-single.html" title="">
                                                                            <img src="upload/tech_menu_18.jpg" alt="" className="img-fluid"></img>
                                                                            <div className="hovereffect">
                                                                            </div>
                                                                            <span className="menucat">Worldwide</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="blog-meta">
                                                                        <h4><a href="tech-single.html" title="">The world's finest and clean meat restaurants</a></h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="blog-box">
                                                                    <div className="post-media">
                                                                        <a href="tech-single.html" title="">
                                                                            <img src="upload/tech_menu_19.jpg" alt="" className="img-fluid"></img>
                                                                            <div className="hovereffect">
                                                                            </div>
                                                                            <span className="menucat">Worldwide</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="blog-meta">
                                                                        <h4><a href="tech-single.html" title="">Fried veal and vegetable dish</a></h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="blog-box">
                                                                    <div className="post-media">
                                                                        <a href="tech-single.html" title="">
                                                                            <img src="upload/tech_menu_20.jpg" alt="" className="img-fluid"></img>
                                                                            <div className="hovereffect">
                                                                            </div>
                                                                            <span className="menucat">Worldwide</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="blog-meta">
                                                                        <h4><a href="tech-single.html" title="">Tasty pasta sauces and recipes</a></h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="tech-category-01.html">Gadgets</a>
                            </li>                   
                            <li className="nav-item">
                                <a className="nav-link" href="tech-category-02.html">Videos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="tech-category-03.html">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="tech-contact.html">Contact Us</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav mr-2">
                            <li className="nav-item">
                                <a className="nav-link" href="!#"><i className="fa fa-rss"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="!#"><i className="fa fa-android"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="!#"><i className="fa fa-apple"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    </>
  );
};

export default Header;
