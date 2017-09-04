import React from 'react'
import {Button, Popover, Modal, OverlayTrigger} from 'react-bootstrap'

export default class Exercitation extends React.Component {
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
        // document.getElementById('navigation').style.display = "none";
        $('#navigation')[0].style.display = "none";

        // console.log($('#navigation'));
        // console.log($('#navigation')[0]);
        // console.log($('.linkcontent'));
        // $('.linkcontent').each(function(){
        //     console.log(this);
        //     });

    }

    render() {
        const company = (
            <Popover id="modal-popover" title="广东温氏食品集团股份有限公司">
                <p style={{textIndent: "28"}}>广东温氏食品集团股份有限公司（简称“温氏股份”），创立于1983年，现已发展成一家以畜禽养殖为主业、配套相关业务的跨地区现代农牧企业集团。
                    截至2016年12月31日，温氏股份已在全国20多个省（市、自治区）拥有239家控股公司、5.86万户合作家庭农场、4.9万多名员工。2016年度实现上市
                    肉猪1713万头、肉鸡8.19亿只、肉鸭2626万只，总销售收入594亿元。位列“2015年广东省民营企业百强”第11位。</p>
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
                        }><a href="#">广东温氏食品集团股份有限公司</a></OverlayTrigger> 软件开发工程师</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>关闭</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}