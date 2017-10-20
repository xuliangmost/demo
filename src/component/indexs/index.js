import React, {Component} from 'react'
import Cards from '../common/cards'
import './index.less'
import {DatePicker, List, Picker} from 'antd-mobile';
import SelectList from './selectList'

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
let contentOne = '被保险人在保险期间因意外吧啦吧啦吧被保险人在保险期间因意外吧啦吧啦吧被保险人在保险期间因意外吧啦吧啦吧被保险人在保险期间因意外吧啦吧啦吧被保险人在保险期间因意外吧啦吧啦吧被保险人在保险期间因意外吧啦吧啦吧';
const money = [
  [
    {
      label: '10W',
      value: '10W',
    },
    {
      label: '20W',
      value: '20W',
    },
  ]
];

const times = [
  [
    {
      label: '1年',
      value: '1年',
    },
    {
      label: '10年',
      value: '10年',
    },
  ]
];
const safeTime = [
  [
    {
      label: '1年',
      value: '1年',
    },
    {
      label: '5年',
      value: '5年',
    },
    {
      label: '10年',
      value: '10年',
    },
    {
      label: '20年',
      value: '20年',
    },
  ]
];

class Indexs extends Component {
  constructor (props) {
    super(props);
    this.state = {
      date: now,
      sex: '男',
      selectValue: 1,
      sValue: ['10W'],
      tValue: ['1年'],
      safeTime: ['1年']
    }
  }

  selectSex (sex) {
    this.setState({sex})
  }

  render () {
    return (
      <div className='page_one'>
        <Cards>
          <p style={{fontSize: '1.6rem'}}>复星联合康乐e生重大疾病保险</p>
          <p style={{color: '#777', fontSize: '0.8rem', marginTop: '1.4rem'}}>大病轻症都可保，缴费灵活，可保终身</p>
          <p style={{marginTop: '0.5rem'}}>投保年龄： 30-50周岁</p>
          <div className='flex_box'>
            <div className="flex_box_right">
              <DatePicker
                mode="date"
                title="被保人出生日期"
                extra="Optional"
                value={this.state.date}
                onChange={date => this.setState({date})}
              >
                <List.Item arrow="horizontal">被保人出生日期</List.Item>
              </DatePicker>
            </div>
          </div>
          <div className="flex_box">
            <span className='flex_box_left'>性别</span>
            <div className="flex_box_right_two">
              <span
                onClick={() => {
                  this.selectSex('男')
                }}
                style={{border: this.state.sex === '男' ? '1px solid #F95F1c' : '1px solid #333'}}>男</span>
              <span
                onClick={() => {
                  this.selectSex('女')
                }}
                style={{border: this.state.sex !== '男' ? '1px solid #F95F1c' : '1px solid #333'}}>女</span>
            </div>
          </div>

          <div className="flex_box">
            <div className="flex_box_right">
              <Picker
                data={money}
                title='保障额度'
                cascade={false}
                extra="请选择(可选)"
                value={this.state.sValue}
                onChange={v => this.setState({sValue: v})}
                onOk={v => this.setState({sValue: v})}
                col={1}
              >
                <List.Item arrow="horizontal">保障额度</List.Item>
              </Picker>
            </div>
          </div>

          <div className="flex_box">
            <div className="flex_box_right">
              <Picker
                data={times}
                title='缴费期限'
                cascade={false}
                extra="请选择(可选)"
                value={this.state.tValue}
                onChange={v => this.setState({tValue: v})}
                onOk={v => this.setState({tValue: v})}
                cols={1}>
                <List.Item arrow="horizontal">缴费期限</List.Item>
              </Picker>
            </div>
          </div>

          <div className="flex_box">
            <div className="flex_box_right">
              <Picker
                data={safeTime}
                title='保障期限'
                cascade={false}
                value={this.state.safeTime}
                onChange={v => this.setState({safeTime: v})}
                onOk={v => this.setState({safeTime: v})}
                cols={1}>
                <List.Item arrow="horizontal">保障期限</List.Item>
              </Picker>
            </div>
          </div>

          <div className="flex_box">
            <span className='flex_box_left'>职业类别</span>
            <div className="flex_box_right_three">
              <span>1-3类</span>
              <a href="">查询</a>
            </div>
          </div>
        </Cards>

        <Cards>
          <SelectList
            leftTitle='重大疾病保险金'
            rightTitle='10万'
            content={contentOne}
          />

          <SelectList
            leftTitle='身故保险金'
            rightTitle='10万'
            content={contentOne}
          />

          <SelectList
            leftTitle='轻症疾病保险金(35种/3次)'
            rightTitle='10万'
            content={contentOne}
          />
        </Cards>

        <ul className='product'>
          <li
            onClick={() => {
              this.setState({selectValue: 1})
            }}
            className={this.state.selectValue === 1 ? 'selected' : ''}>
            <i></i>
            <span>产品特色</span>
          </li>
          <li
            onClick={() => {
              this.setState({selectValue: 2})
            }}
            className={this.state.selectValue === 2 ? 'selected' : ''}>
            <i></i>
            <span>投保须知</span>
          </li>
          <li
            onClick={() => {
              this.setState({selectValue: 3})
            }}
            className={this.state.selectValue === 3 ? 'selected' : ''}>
            <i></i>
            <span>常见问题</span>
          </li>
          <li
            onClick={() => {
              this.setState({selectValue: 4})
            }}
            className={this.state.selectValue === 4 ? 'selected' : ''}>
            <i></i>
            <span>理赔服务</span>
          </li>
        </ul>

        <div
          className='sure_pay'
        >
          <span className='money'>¥<span>1049.20</span></span>
          <span className='sure'>投保</span>
        </div>
      </div>
    )
  }
}

export default Indexs