import React, {Component} from 'react'
import './msgList.less'

class MsgList extends Component {
  render () {
    return (
      <div className="flex_boxs">
        <span className='flex_box_left'>{this.props.leftTitle}</span>
        <div className="flex_box_right">
          {this.props.rightTitle}
        </div>
      </div>
    )
  }
}

export default MsgList