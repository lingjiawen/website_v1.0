import React from 'react'
import {Button, Popover, Modal, OverlayTrigger} from 'react-bootstrap'

export default class Resume extends React.Component {
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
        return (
            <div>
                <a onClick={this.open}><span>简历</span></a>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>简历</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       <img src={require("../images/gallery/building.jpg")} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>关闭</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}