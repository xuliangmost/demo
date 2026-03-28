import React, {Component} from 'react'

export function getInitialSelectValue (options) {
  if (!Array.isArray(options) || options.length === 0) {
    return ''
  }
  const firstOption = options[0] || {};
  return firstOption.value === undefined || firstOption.value === null ? '' : firstOption.value
}

class Select_ extends Component {
  constructor (props) {
    super(props);
    this.state = {
      show: false,
      selectValue: getInitialSelectValue(props.options)
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const options = Array.isArray(this.props.options) ? this.props.options : [];
      const hasCurrentValue = options.some((item) => item && item.value === this.state.selectValue);
      if (!hasCurrentValue) {
        this.setState({
          selectValue: getInitialSelectValue(options)
        })
      }
    }
  }

  render () {
    const height_ = 50;
    let {options} = this.props;
    options = Array.isArray(options) ? options : [];
    return (
      <div
        onClick={() => {
          this.setState({show: !this.state.show})
        }}
        style={{
          width: 100,
          height: this.state.show ? height_ * (options.length + 1) : height_, overflow: 'hidden',
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
Select_.defaultProps = {
  options: []
};
export default Select_