import React, {Component} from 'react'
import './selectList.less'
import down from './down.png'

class SelectList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      show: false
    }
  }

  render () {
    return (
      <div
        onClick={() => {
          this.setState({show: !this.state.show})
        }}
        style={{
          height: !this.state.show ? '38px' : 'auto'
        }}
        className="select_boxs">
        <div className='select_container'>
          <span className='flex_box_left'>{this.props.leftTitle}</span>
          <div className="flex_box_right">
            {this.props.rightTitle}
          </div>
          <img
            src={down}
            style={this.state.show ? {transform: 'rotate(-180deg)'} : {}}
            alt=''
          />
        </div>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default SelectList