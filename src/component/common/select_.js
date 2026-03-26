import React, {Component} from 'react'

function getFirstOptionValue (options) {
  if (!Array.isArray(options) || options.length === 0) {
    return ''
  }
  return options[0].value
}

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = Array.isArray(props.options) ? props.options : []
    this.state = {
      show: false,
      selectValue: getFirstOptionValue(options)
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const options = Array.isArray(this.props.options) ? this.props.options : []
      const hasCurrent = options.some((item) => item.value === this.state.selectValue)
      if (!hasCurrent) {
        this.setState({
          selectValue: getFirstOptionValue(options),
          show: false
        })
      }
    }
  }

  render () {
    const height_ = 50;
    let options = Array.isArray(this.props.options) ? this.props.options : [];
    return (
      <div
        onClick={() => {
          this.setState({show: !this.state.show})
        }}
        style={{
          width: 100,
          height: this.state.show ? height_ * options.length + 50 : height_, overflow: 'hidden',
          background: '#85E2FF',
          transition: 'all 0.4s ease',
        }}>
        <p style={styles.p1}>{this.state.selectValue}</p>
        {
          options.map((ele, index) => {
            return <p style={styles.p1} key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.setState({
                          selectValue: ele.value,
                          show: false
                        });
                        this.props.onChange && this.props.onChange(ele.value)
                      }}>{ele.value}</p>
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