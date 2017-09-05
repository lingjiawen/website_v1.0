import React from 'react'
import {
    Link,
} from 'react-router-dom'
import baguetteBox from '../../baguetteBox/js/baguetteBox.min.js';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


class Onepicture extends React.Component {
    constructor(props) {
        super(props);
        this.handleImageLoaded = this.handleImageLoaded.bind(this);
        this.handleImageError = this.handleImageError.bind(this);
    }

    componentDidMount() {
        const caption = ".caption";
        const outCaption = ".outCaption";
        const width = $(".thumbnail").width();
        $(caption).css({
            width: width,
            height: '160px',
            overflow: 'scroll'
        });
        $(outCaption).css({
            width: width - 17,
            height: "143px",
            position: 'relative',
            overflow: 'hidden'
        })
    }

    handleImageError() {
        // 让图片等宽高比缩放
        var picid = "#pic" + this.props.index;
        // var oldwidth = $(picid).width();
        // var newheight = oldwidth * 3 / 4;
        // $(picid).css({borderBottom: '1px solid grey'});
        $(picid).css({backgroundColor: '#cdc'});
        const picture = require(`./images/gallery/default1.png`);
        $(picid).attr("src", picture);
    }

    handleImageLoaded() {
        // 让图片等宽高比缩放
        var picid = "#pic" + this.props.index;
        var oldwidth = $(picid).width();
        var newheight = oldwidth * 3 / 4;
        $(picid).css({width: "100%", height: newheight + "px", overflow: "hidden", objectFit: "cover"});
        baguetteBox.run('.tz-gallery');
    }

    render() {
        var url = this.props.picture;
        url = "http://123.207.238.196/" + url;
        var pic_id = "pic" + this.props.index;
        return (
            <ReactCSSTransitionGroup
                transitionName="gallery"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={true}
                transitionLeave={true}
                transitionEnterTimeout={400}
                transitionLeaveTimeout={400}
            >
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <a className="lightbox" href={url}>
                            <img src={url} alt="Park" onLoad={this.handleImageLoaded} id={pic_id}
                                 onError={this.handleImageError}/>
                        </a>
                        <div className="outCaption">
                            <div className="caption">
                                <h3>{this.props.title}</h3>
                                <p>{this.props.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}


class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: new Array()
        }
    }

    componentDidMount() {
        var self = this;
        let address = "http://" + window.location.host;
        address = address.split(":")[0] + ":" + address.split(":")[1] + ":8081/process_post";
        $.ajax({
            type: "POST",
            async: false,
            url: address,
            success: function (data) {
                self.setState({
                    pictures: JSON.parse(data)
                }, function () {
                    // console.log(self.state.pictures)
                });
            }
        });
    }

    render() {
        var rows = [];
        var temp = 1;
        this.state.pictures.forEach((picture, index) => {
            rows.push(<Onepicture picture={picture.picture} title={picture.title} text={picture.text} key={index}
                                  index={temp}/>)
            temp++
        });
        return (
            <div>
                <div style={{position: "absolute", width: "100%"}}>
                    <Link to="/">
                        <div className="app_back_icon">Backく</div>
                    </Link>
                    <Link to="/test">
                        <div className="gallery_upload_icon">上传照片</div>
                    </Link>
                </div>
                <div className="galleryTitle">
                    <h1>Jiawen's Gallery</h1>
                    <div className="takeMeHome">
                        <Link to="/mygallery" className="linkcontent"><span>新版相册(建设中)</span></Link>
                    </div>
                    <p>回忆如风 流年似水</p>
                </div>
                <div className="htmleaf-container">
                    <div className="container gallery-container">
                        <div className="tz-gallery" id="tz_gallery">
                            <div className="row">
                                {rows}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Gallery