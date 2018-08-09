import React from 'react';
import styles from './App.css';

import RouteConf from '../routes/index';

//  extends 继承React.PureComponent 所有属性和方法
export default class App extends React.PureComponent {
    constructor(props) {
        // super 子类继承父类this对象
        super(props);
    }

    render() {
        return (
            <div className="app">
                <div className="header-image">
                    <div className="header-log"></div>
                </div>
                <div className="content">
                    <h1>Welcome to React item</h1>
                </div>
                <div className="example">
                    <h2 className="example-header">React-router</h2>
                    <RouteConf></RouteConf>
                </div>
            </div>
        );
    }
}
