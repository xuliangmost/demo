import React, {Component} from 'react'
import {connect} from 'react-redux'
import {IndexAction} from "./actions";
import './index.less'
import {Link} from 'react-router-dom'
import {Button} from 'antd'
import Select from '../common/select_'

class Index extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [1, 2, 3, 4, 5, 6]
    }
  }

  clickValue (value) {
    this.props.clickValue(value);
    // axios.request({
    //     url: '',
    //     params: {},
    //     data: {},
    //     method: 'get||post',
    //     headers: {},
    // }).then(res => {
    //
    // }).catch(e => {

    // })

  }

  componentDidMount () {

  }

  render () {
    return (
      <div style={{
        height: '100%',
        backgroundColor: '#fff',
        width: '100%'
      }}>
        <h1>我是index~~</h1>
        <h2>点击的数字:{this.props.showValue ? this.props.showValue : '未点击'}</h2>
        <ul style={{overflow: 'hidden'}}>
          {
            this.state.list.map((ele, index) => {
              return (
                <Button type='primary'
                        className='showVal'
                        style={this.props.showValue === ele ? {
                          background: '#92FFFF'
                        } : {background: '-webkit-linear-gradient(left, #ACFAFF, #F6EAFF)'}}
                        onClick={() => {
                          this.clickValue(ele);
                        }} key={index}>{ele}</Button>
              )
            })
          }
        </ul>
        <div className='forms'>
          <input id='inputs' type="checkbox"/>
          <label className='labels' htmlFor="inputs">
          </label>
        </div>

        <Link to='steps'>跳转到页面</Link>

        <Select
          onChange={(value) => {
            console.log(value)
          }}
          options={
            [
              {value: 'value1'},
              {value: 'value2'},
              {value: 'value13'}
            ]}/>
      </div>
    )
  }
}

function mapState (state) {
  return {
    showValue: state.showValue
  }
}

export default connect(mapState, {...IndexAction})(Index)