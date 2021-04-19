import React from 'react';
import './YoutubeComponent.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className= "img-thumb">
                <img src="http://i3.ytimg.com/vi/C94HDW9HYzU/maxresdefault.jpg" alt=""></img>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: "00.00",
    title: "FIBA final 2010",
    desc: "100k ditonton, 4 hari yang lalu"
}

export default YoutubeComp;