import React, {Componenet, Component} from "react";
import YoutubeComponent from "../../Component/Youtube/YoutubeComponent";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import Product from "../Product/Product";
import BlogPost from "../BlogPost/BlogPost";

class Home extends Component {
    state = {
        showComponent: true
    }

    render(){
        return(
            <div>
                {/* <p>Youtube Component</p>
                <hr/>
                <YoutubeComponent 
                    time="7.12" 
                    title="USA VS Spain FIBA"
                    desc="190k ditonton, 2 hari yang lalu"/>
                <YoutubeComponent 
                    time="8.35" 
                    title="Indonesia VS Philipina 2017"
                    desc="250k ditonton, 9 hari yang lalu"/>
                <YoutubeComponent 
                    time="6.23" 
                    title="FIBA USA VS France 2018"
                    desc="1000k ditonton, 29 hari yang lalu"/>
                <YoutubeComponent 
                    time="9.89" 
                    title="Final Basketball 2012"
                    desc="230k ditonton, 7 hari yang lalu"/>
                <YoutubeComponent/> */}
                {/* <p>Counter</p>
                <hr/>
                <Product /> */}
                {/* <p>Life Cycle Component</p>
                <hr/>
                <LifeCycleComp/> */}
                <p>Blogpost</p> 
                <hr/>
                <BlogPost/>
            </div>
        )
    }
}

export default Home;