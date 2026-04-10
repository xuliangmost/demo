import React, {Component} from 'react'

function normalizeOptions (options) {
  return Array.isArray(options) ? options : []
}

function getOptionValue (option) {
  if (option && option.value !== undefined && option.value !== null) {
    return option.value
  }
  return ''
}

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = normalizeOptions(props.options);
    this.state = {
      show: false,
      selectValue: getOptionValue(options[0])
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const options = normalizeOptions(this.props.options);
      const hasSelected = options.some((option) => getOptionValue(option) === this.state.selectValue);
      if (!hasSelected) {
        this.setState({
          show: false,
          selectValue: getOptionValue(options[0])
        })
      }
    }
  }

  render () {
    const height_ = 50;
    const options = normalizeOptions(this.props.options);
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
            const value = getOptionValue(ele);
            return <p style={styles.p1} key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.setState({
                          selectValue: value,
                          show: false
                        });
                        this.props.onChange && this.props.onChange(value)
                      }}>{value}</p>
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