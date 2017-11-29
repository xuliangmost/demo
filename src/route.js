import React, {Component} from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Index from './component/index'
import StepSing from './component/product'
class Page extends Component {
  render () {
    return (
      <div style={{height: '100%', width: "100%"}}>
        <HashRouter>
          <div style={{height: 'calc(100%)'}}>
            <Route exact path='/' component={Index}/>
            <Route exact path='/steps' component={StepSing}/>
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default Page