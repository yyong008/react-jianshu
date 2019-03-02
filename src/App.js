import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalStyle } from './styles.js'
import { IconFont } from './statics/iconfont/iconfont'
import Header from './common/header'
import store from './store'


// 引入组件, 用于路由

import Home from './pages/home'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/write'

class App extends Component {
  render() {
    return (
      <Fragment>
        
        <Provider store={store}>
          <Router>
            <div>
              <Header />
              <GlobalStyle />
              <IconFont />
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/write" exact component={Write} />
              <Route path="/detail/:id" exact component={Detail} />
            </div>
          </Router>
        </Provider>
      </Fragment>
    )
  }
}

export default App
