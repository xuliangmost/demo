import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = Array.isArray(props.options) ? props.options : [];
    this.state = {
      show: false,
      selectValue: options.length > 0 ? options[0].value : ''
    }
  }

  render () {
    const height_ = 50;
    const options = Array.isArray(this.props.options) ? this.props.options : [];
    const displayValue = this.state.selectValue || '请选择';
    const containerHeight = this.state.show ? height_ * options.length + height_ : height_;
    return (
      <div
        onClick={() => {
          if (options.length > 0) {
            this.setState({show: !this.state.show})
          }
        }}
        style={{
          width: 100,
          height: containerHeight, overflow: 'hidden',
          background: '#85E2FF',
          transition: 'all 0.4s ease',
        }}>
        <p style={styles.p1}>{displayValue}</p>
        {
          options.map((ele, index) => {
            const optionValue = ele && ele.value !== undefined ? ele.value : '';
            return <p style={styles.p1} key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.setState({
                          selectValue: optionValue,
                          show: false
                        });
                        this.props.onChange && this.props.onChange(optionValue)
                      }}>{optionValue}</p>
          })
        }
      </div>
    )
  }
}

const styles = {
  p1: {
    width: 100, height: 50,
    lineHeight: '50px',
    textAlign: 'center'
  }
};
export default Select_