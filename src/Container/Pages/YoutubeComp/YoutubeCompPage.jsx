import React, { Component, Fragment } from 'react'
import YoutubeComponent from "../../../Component/Youtube/YoutubeComponent"

class YoutubeCompPage extends Component {
    render(){
        return(
            <Fragment>
                <p>Youtube Component</p>
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
                    <YoutubeComponent/>
            </Fragment>
        )
    }
}

export default YoutubeCompPage