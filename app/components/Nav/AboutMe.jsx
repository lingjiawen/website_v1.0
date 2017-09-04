import React from 'react'
import {Button, Popover, Tooltip, Modal, OverlayTrigger} from 'react-bootstrap'
export default class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.setState({showModal: false});
        document.getElementById('navigation').style.display = "";
    }

    open() {
        this.setState({showModal: true});
        document.getElementById('navigation').style.display = "none";
    }

    render() {
        const school = (
            <Popover id="modal-popover" title="华南理工大学">
                <p>华南理工大学(SCUT)</p>
                <p>South China University of Technology</p>
                <p style={{textIndent: "28"}}>
                    简称华南理工，位于广东省广州市，创建于1934年，是中华人民共和国教育部直属的全国重点大学、首批国家“211工程”、“985工程”重点建设院校之一
                </p>
                <p style={{textIndent: "28"}}>
                    入选“千人计划”、“111计划”、“卓越工程师教育培养计划”、“卓越法律人才教育培养计划”和“国家双创示范基地”
                </p>
                <p style={{textIndent: "28"}}>
                    也是“建筑老八校”、“卓越大学联盟”、“中俄工科大学联盟”、“中欧工程教育平台”、“中英大学工程教育与研究联盟”主要成员。
                </p>
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                县级市.
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
                        <p>就读于<OverlayTrigger overlay={school}><a href="#">华南理工大学</a></OverlayTrigger>经济与贸易学院（双学位）</p>
                        <hr/>

                        <p>所在地：广东省广州市</p>
                        <p>现居地：广东省深圳市宝安区</p>
                        <p>籍贯：广东省梅州市<OverlayTrigger overlay={tooltip}><a href="#">兴宁市</a></OverlayTrigger></p>

                        <hr/>

                        <h4>兴趣爱好</h4>
                        <p>吃饭、睡觉、学习</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}