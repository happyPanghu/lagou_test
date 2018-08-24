// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import {AppContainer} from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './components/App';
// import 语句是 Singleton 模式 -- 俗称单例子模式

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App);
    });
}//5//4//3/2//1
//6
//7
//8
//9
//10
//11
//12
//13
//dev4
//dev44
//test
//1
//2
//3
<<<<<<< HEAD
<<<<<<< HEAD

=======
//4
>>>>>>> 4
=======
//4
//5
>>>>>>> 4
