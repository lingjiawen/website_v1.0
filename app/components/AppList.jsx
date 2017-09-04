import React from 'react';
import FaLeaf from '../../node_modules/react-icons/lib/fa/leaf';
import FaQq from '../../node_modules/react-icons/lib/fa/qq';
import FaRa from '../../node_modules/react-icons/lib/fa/ra';
// import FaAtm from '../../node_modules/react-icons/fa/atm';
// import FaResume from '../../node_modules/react-icons/fa/resume';
// import FaMail from '../../node_modules/react-icons/fa/mail';
// import FaWens from '../../node_modules/react-icons/fa/wens';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {
    Link
} from 'react-router-dom'

class AppList extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnclick = this.handleOnclick.bind(this);
    }

    handleOnclick() {
        window.location.href = "http://localhost:8081"
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="app_list_animate"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnterTimeout={300}  // 入场动画时间
                transitionLeaveTimeout={300}  // 出场动画时间
            >
                <Link to="/">
                    <div className="app_back_icon"> Backㄑ</div>
                </Link>
                <div className="app_list_title">AppList</div>
                <div className="main_box">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-sm-4 col-xs-6">
                                <div className="app_box" onClick={this.handleOnclick}>
                                    <FaQq height="6em" width="6em" className="chat_home_icon"/>
                                    <div className="chat_home">聊天室</div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-6">
                                <div className="app_box">
                                    <FaRa height="6em" width="6em"/>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-6">
                                <div className="app_box">
                                    <FaLeaf height="6em" width="6em"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default AppList