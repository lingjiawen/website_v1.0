import React from 'react'
import {Button, Popover, Modal, OverlayTrigger} from 'react-bootstrap'
import "./resume.css"

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
                <Modal show={this.state.showModal} onHide={this.close} id="modal_resume">
                    <Modal.Header closeButton>
                        <Modal.Title>简历</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/*<img src={require("../images/gallery/building.jpg")} />*/}
                        <div id="resume_main">
                            <div id="resume_left">
                                <div id="resume_left_photos">
                                    <img src={require("./icons/0.jpg")}/>
                                </div>
                                <div id="resume_name_card">
                                    <div id="name"><strong>凌嘉文</strong></div>
                                    <div id="goal">求职目标：web开发工程师</div>
                                </div>
                                <div id="resume_baseInf_card">
                                    <div className="icons">
                                        <img src={require("./icons/1.png")}/>
                                        <div>1996/01/12</div>
                                    </div>
                                    <div className="icons">
                                        <img src={require("./icons/2.png")}/>
                                        <div>13268120382</div>
                                    </div>
                                    <div className="icons">
                                        <img src={require("./icons/3.png")}/>
                                        <div>26476395@qq.com</div>
                                    </div>
                                    <div className="icons">
                                        <img src={require("./icons/4.png")}/>
                                        <div>广东广州</div>
                                    </div>
                                </div>
                                <div id="resume_reward_card">
                                    <div className="card_title_left">
                                        <img src={require("./icons/5.png")}/>
                                        <div>奖项荣誉</div>
                                    </div>
                                    <div className="card_content">
                                        <div>2016.9：获得国家励志奖学金</div>
                                        <div>2015.3: 获得唯品会奖学金</div>
                                        <div>2015.9： 获得校三等奖学金</div>
                                        <div>2014.9-2017.9: 任辅导员助理（协助辅导员管理、筹办年级事务）</div>
                                        <div>2015.9-2016.7: 任班长职务</div>
                                    </div>
                                </div>
                                <div id="resume_eng_card">
                                    <div>英语水平：CET6</div>
                                </div>
                                <div id="resume_comment_card">
                                    <div className="card_title_left">
                                        <img src={require("./icons/6.png")}/>
                                        <div>自我评价</div>
                                    </div>
                                    <div className="card_content">
                                        <div>热爱互联网技术工作。</div>
                                        <div>喜欢新技术、研发新产品，对互联网的运营以及开发有浓厚的兴趣和热情。</div>
                                        <div>希望好的互联网产品为大家带来更好的生活，愿为互联网工作奋斗。</div>
                                    </div>
                                </div>
                            </div>
                            <div id="resume_right">
                                <div id="resume_project_card">
                                    <div className="card_title_right">
                                        <img src={require("./icons/7.png")}/>
                                        <div><strong>项目经验</strong></div>
                                    </div>
                                    <div className="project">
                                        <div className="card_content"><strong>
                                            <div className="col_2">2017.07-2017.09</div>
                                            <div className="col_2">个人项目</div>
                                        </strong>
                                        </div>
                                        <div className="card_content">
                                            <div>项目名称：个人网页</div>
                                            <div>软件环境：html/css/js+react+node.js/express+mongodb+webpack</div>
                                            <div>项目描述：这是一个利用业余时间写的项目、维护一个博客入口、项目展示、相册的上传与展示介绍自己的一个个人平台，
                                                采用MERN技术栈为基础进行开发，功能大致完成，部分加载、请求等有待优化。
                                            </div>
                                            <div>生产环境运行：<a href="http://123.207.238.196:10086/">http://123.207.238.196:10086/</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project">
                                        <div className="card_content">
                                            <strong>
                                                <div className="col_3"> 2017.07-2017.09</div>
                                                <div className="col_2">温氏食品集团股份有限公司</div>
                                                <div className="col_4">技术创新室</div>
                                            </strong>
                                        </div>
                                        <div className="card_content">
                                            <div>项目名称：会务管理</div>
                                            <div>软件环境：framwork7/bootstrap+odoo+python</div>
                                            <div>项目描述：项目主要供公司内部使用，后端采用传统的MVC架构，前端采用f7编写手机端页面、bootstrap用于pc端页面编写。</div>
                                            <div>前端功能：申请会议室、查询会议信息，下载附件等；后台View可审批申请、发布会议信息，上传/下载附件等。</div>
                                            <div>项目职责：负责前、后端主要代码的编写，权限管理等。</div>
                                        </div>
                                    </div>
                                    <div className="project">
                                        <div className="card_content">
                                            <strong>
                                                <div className="col_3"> 2017.02-2017.06</div>
                                                <div className="col_2">无象数码技术有限公司</div>
                                                <div className="col_4">iHCI实验室</div>
                                            </strong>
                                        </div>
                                        <div className="card_content">
                                            <div>项目名称：iHCI实验室主页</div>
                                            <div>软件环境：htm5/css3/es6+react+redux+node.js/express+mongodb</div>
                                            <div>项目职责：负责原型构建、react类模型构建、部分代码编写，后因时间原因离开项目组。</div>
                                        </div>
                                    </div>
                                </div>
                                <div id="resume_edu_card">
                                    <div className="card_title_right">
                                        <img src={require("./icons/8.png")}/>
                                        <div><strong>教育经验</strong></div>
                                    </div>
                                    <div className="card_content">
                                        <strong>
                                            <div className="col_3">2014.09-2018.09</div>
                                            <div className="col_3">华南理工大学</div>
                                            <div className="col_3">软件工程&nbsp;&nbsp;&nbsp;&nbsp;GPA:3.44</div>
                                        </strong>
                                    </div>
                                    <div className="card_content">
                                        离散数学，C++语言，数据结构，操作系统，数据库原理，编译原理，软件工程，计算机网络，计算机体系结构，UML
                                    </div>
                                    <div className="card_content">
                                        <strong>
                                            <div className="col_3">2014.09-2018.09</div>
                                            <div className="col_3">华南理工大学</div>
                                            <div className="col_3">金融学双学位</div>
                                        </strong>
                                    </div>
                                </div>
                                <div id="resume_skill_card">
                                    <div className="card_title_right">
                                        <img src={require("./icons/9.png")}/>
                                        <div><strong>职业技能</strong></div>
                                    </div>
                                    <div className="all_skill_card">
                                        <div className="one_skill_card">
                                            <div>HTML</div>
                                            <img src={require("./icons/html.png")}/>
                                        </div>
                                        <div className="one_skill_card">
                                            <div>CSS</div>
                                            <img src={require("./icons/css.png")}/>
                                        </div>
                                        <div className="one_skill_card">
                                            <div>JAVASCRIPT</div>
                                            <img src={require("./icons/js.png")}/>
                                        </div>
                                        <div className="one_skill_card">
                                            <div>REACT</div>
                                            <img src={require("./icons/react.png")}/>
                                        </div>
                                        <div className="one_skill_card">
                                            <div>NODE.JS</div>
                                            <img src={require("./icons/nodejs.png")}/>
                                        </div>
                                        <div className="one_skill_card">
                                            <div>PYTHON</div>
                                            <img src={require("./icons/python.png")}/>
                                        </div>
                                    </div>
                                </div>
                                <div id="resume_hobby_card">
                                    <div className="card_title_right">
                                        <img src={require("./icons/10.png")}/>
                                        <div><strong>兴趣爱好</strong></div>
                                    </div>
                                    <img id="resume_hobby_card_kinds" src={require("./icons/11.png")}/>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>关闭</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}