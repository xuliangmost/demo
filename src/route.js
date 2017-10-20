import React, {Component} from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Index from './component/index'
import Indexs from './component/indexs'
import 'antd-mobile/dist/antd-mobile.css'

class Page extends Component {
  render () {
    return (
      <div style={{height: '100%', width: "100%"}}>
        <HashRouter>
          <div style={{height: 'calc(100%)'}}>
            <Route exact path='/' component={Index}/>
            <Route exact path='/indexs' component={Indexs}/>
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default Page