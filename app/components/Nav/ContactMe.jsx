import React from 'react'
import {Popover, Modal,} from 'react-bootstrap'

/*联系我*/
class ContactMe extends React.Component {
    constructor(props) {
        super(props);

        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeComments = this.handleChangeComments.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


        this.state = {
            showModal: false,
            name: "",
            email: "",
            comments: ""
        };
    }

    close() {
        this.setState({showModal: false});
        document.getElementById('navigation').style.display = "";
    }

    open() {
        this.setState({showModal: true});
        document.getElementById('navigation').style.display = "none";

    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangeComments(event) {
        this.setState({comments: event.target.value});
    }

    handleSubmit(event) {

        let address = "http://"+window.location.host;
        address = address.split(":")[0] + ":" + address.split(":")[1] + ":8081/send_mail";
        let name = this.state.name||'';
        let email = this.state.email||'';
        let comments = this.state.comments||'';
        if (name.trim() == '' || email.trim() == '' || comments.trim() == '') {
            alert("名字/邮箱/内容均不能为空");
        }
        else {
            $.ajax({
                type: "POST",
                url: address,
                data: {
                    name: name,
                    email: email,
                    comments: comments,
                },
                success: function (data) {
                    var data = JSON.parse(data);
                    alert(data.message);
                }
            });
        }
        event.preventDefault();
    }

    render() {
        const company = (
            <Popover id="modal-popover" title="广东温氏食品集团股份有限公司">
            </Popover>
        );

        return (
            <div>
                <a onClick={this.open}><span>联系我</span></a>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>联系我</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="contact-form">
                            <form onSubmit={this.handleSubmit}>
                                <label style={{display: "inline-block", float: "left"}}>Whats your name <span>*</span>
                                    <input name="name" id="name" type="text" value={this.state.name}
                                           onChange={this.handleChangeName}/>
                                </label>
                                <label style={{display: "inline-block", float: "right", marginRight: "10%"}}>Whats your
                                    email <span>*</span>
                                    <input name="email" id="email" type="email" value={this.state.email}
                                           onChange={this.handleChangeEmail}/>
                                </label>
                                <div className="clearfix"/>
                                <label style={{width: "100%"}}> Whats in your mind
                                    <textarea name="comments" id="comments" cols="" rows="" value={this.state.comments}
                                              onChange={this.handleChangeComments}/>
                                </label>
                                <div className="clearfix"></div>
                                <input type="submit" value="Send Mail"/>
                                <div className="clearfix"/>
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ContactMe;