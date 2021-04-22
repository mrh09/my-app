import React, {Component, Fragment} from "react";
import {BrowserRouter as Router, Route, Link, BrowserRouter} from "react-router-dom";
import Product from "../Pages/Product/Product";
import BlogPost from "../Pages/BlogPost/BlogPost";
import YoutubeCompPage from "../Pages/YoutubeComp/YoutubeCompPage";
import DetailPost from "../Pages/BlogPost/DetailPost/DetailPost";
import "./Home.css";

class Home extends Component {
    state = {
        showComponent: true
    }

    render(){
        return(
            <BrowserRouter>
                <div>
                    {/* <p>Counter</p>
                    <hr/>
                    <Product /> */}
                    {/* <p>Life Cycle Component</p>
                    <hr/>
                    <LifeCycleComp/> */}
                    {/* <p>Blogpost</p> 
                    <hr/>
                    <BlogPost/> */}
                </div>
                <Fragment>
                    <div className="nav">
                        <Link to="/">BlogPost</Link>
                        <Link to="/Product">Product</Link>
                        <Link to="/YoutubeComponent">Youtube</Link>
                    </div>
                    <Route exact path="/"  component={BlogPost}/>
                    <Route path="/detail-post/:postId" component={DetailPost}/>
                    <Route path="/Product"  component={Product}/>
                    <Route path="/YoutubeComponent" component={YoutubeCompPage}/>
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;