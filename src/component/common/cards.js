import React, {Component} from 'react'
import './cards.less'

class Cards extends Component {
  render () {
    return (
      <div className='cards'>
        {this.props.children}
      </div>
    )
  }
}

export default Cards