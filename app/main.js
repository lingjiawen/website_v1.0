//main.js
import React from 'react';
import ReactDom from 'react-dom';
import Load from './components/Load.jsx';
import Navigation from './components/Navigation.jsx';
import Scrollable from './components/Scrollable.jsx';
import Gallery from './components/Gallery.jsx';
import AppList from './components/AppList.jsx';
import '../build/site.css';
import '../baguetteBox/css/baguetteBox.min.css';
import '../baguetteBox/css/thumbnail-gallery.css';
import Test from './components/Test.jsx';
import TodoList from './components/Container.jsx';
import MyGallery from './components/MyGallery.jsx';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("Main组件即将加载")
    }

    componentDidMount() {
        // $("#main").css("-webkit-animation", "rotateFall 1s both ease-in")
        console.log("Main组件加载完成")
    }

    componentWillUnmount() {
        // sleep(2000);

    }

    render() {
        return (
            <div>
                <Navigation/>
                <Scrollable/>
            </div>
        )
    }
}


ReactDom.render(
    <Router>
        <div>
            <Route exact path="/" component={Main}/>
            <Route path="/photos" component={Gallery}/>
            <Route path="/app_list" component={AppList}/>
            <Route path="/test" component={Test}/>
            <Route path="/todo" component={TodoList}/>
            <Route path="/mygallery" component={MyGallery} />
        </div>
    </Router>,
    document.getElementById('main')
);