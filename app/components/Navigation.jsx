import React from 'react'
import { Button, Popover, Tooltip, Modal, OverlayTrigger} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


function Img(props) {
    return <img src={require('../../images/navigate.png')} alt="navigate_img"/>
}

class AboutMe extends React.Component{
    constructor(props) {
        super(props);
        this.state = {showModal:false};
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        const school = (
            <Popover id="modal-popover" title="华南理工大学">
                <p>华南理工大学(SCUT)</p>
                <p>South China University of Technology</p>
                <p style={{textIndent: "28"}}>
                    简称华南理工，位于广东省广州市，创建于1934年，是中华人民共和国教育部直属的全国重点大学、首批国家“211工程”、“985工程”重点建设院校之一
                </p>
                <p  style={{textIndent: "28"}}>
                    入选“千人计划”、“111计划”、“卓越工程师教育培养计划”、“卓越法律人才教育培养计划”和“国家双创示范基地”
                </p>
                <p  style={{textIndent: "28"}}>
                    也是“建筑老八校”、“卓越大学联盟”、“中俄工科大学联盟”、“中欧工程教育平台”、“中英大学工程教育与研究联盟”主要成员。
                </p>
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );

        return (
            <div>
                <a onClick={this.open}><span>关于我</span></a>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>关于我</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2>凌嘉文</h2>
                        <hr/>
                        <p>就读于<OverlayTrigger overlay={school}><a href="#">华南理工大学</a></OverlayTrigger>软件学院</p>
                        <hr/>

                        <h4>Popover in a modal</h4>

                        <h4>Tooltips in a modal</h4>
                        <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

                        <hr />

                        <h4>Overflowing text to show scroll behavior</h4>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


class Exercitation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    render() {
        const company = (
            <Popover id="modal-popover" title="广东温氏食品集团有限公司">
                <p>广东温氏食品集团有限公司</p>
            </Popover>
        );

        return (
            <div>
                <a onClick={this.open}><span>实习</span></a>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>实习</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>2017.7-2017.9：<OverlayTrigger overlay={company
                        }><a href="#">广东温氏食品集团有限公司</a></OverlayTrigger> 软件开发工程师</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>关闭</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <Img/>
                <ul>
                    <li>
                        <a href="#take-me-home" className="nav-active"><span>Take Me Home</span></a>
                    </li>
                    <li>
                        <AboutMe />
                    </li>
                    <li>
                        <Exercitation />
                    </li>
                    <li>
                        <a href="#showcase"><span>生活</span></a>
                    </li>
                    <li>
                        <a href="#contact-us"><span>联系我</span></a>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Navigation