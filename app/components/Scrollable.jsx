import React from 'react'
import icon_book1 from '../../images/icon/icon_book1.png'
import icon_coffee4 from '../../images/icon/icon_coffee4.png'
import icon_picture1 from '../../images/icon/icon_picture.png'
import baguetteBox from '../../baguetteBox/js/baguetteBox.min.js';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

function Logo(props) {
    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="logo">
                    <img src={require('../../images/logo/logo.gif')} style={{borderRadius: "50%"}} alt="logo"/>
                </div>
            </div>
        </div>
    );
}


class Box extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // $("#box2").animate({width: "0px"},"slow", function(){
        // $(location).attr('href', 'http://localhost:10086/list')
        // })
        // $(location).attr('href', 'http://localhost:10086/list')
    }

    render() {
        return (
            <div className="col-sm-6 col-md-4">
                <div className={this.props.classN} id={this.props.id} onClick={this.handleClick}>
                    <div className="box_content">
                        <p className="box_title">{this.props.title}</p>
                        <p className="box_text">{this.props.text}</p>
                        <img src={this.props.picture} alt="icon" width="60px"/>
                    </div>
                </div>
            </div>
        );
    }
}

class Nav_container extends React.Component {
    render() {
        return (
            <div className="nav_container">
                <ReactCSSTransitionGroup
                    transitionName="box_one"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={300}  // 入场动画时间
                    transitionLeaveTimeout={300}  // 出场动画时间
                >
                    <a target="_blank" href="http://www.cnblogs.com/ljwTiey/" className="linkcontent"> <Box
                        classN="box box_1" id="box1" title="博客" text="前事不忘 后事之师" picture={icon_book1}/></a>
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup
                    transitionName="box_two"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={300}  // 入场动画时间
                    transitionLeaveTimeout={300}  // 出场动画时间
                >
                    <Link to="/photos" className="linkcontent"><Box classN="box box_2" id="box2" title="相册"
                                                                    text="流年似水 岁月如歌" picture={icon_picture1}/></Link>
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup
                    transitionName="box_three"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={300}  // 入场动画时间
                    transitionLeaveTimeout={300}  // 出场动画时间
                >
                    <Link to="/app_list" className="linkcontent"><Box classN="box box_3" id="box3" title="休闲"
                                                                      text="工善其事 先利其器" picture={icon_coffee4}/></Link>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

class Scrollable extends React.Component {
    render() {
        return (
            <div id="scrollable">
                <Logo/>
                <Nav_container/>
            </div>
        );
    }
}

export default Scrollable