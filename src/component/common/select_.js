import React, {Component} from 'react'

function normalizeOptions (options) {
  if (!Array.isArray(options)) {
    return []
  }
  return options.filter(item => item && item.value !== undefined && item.value !== null)
}

function getDefaultValue (options) {
  return options.length > 0 ? options[0].value : ''
}

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = normalizeOptions(props.options);
    this.state = {
      show: false,
      selectValue: getDefaultValue(options)
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options === this.props.options) {
      return
    }
    const options = normalizeOptions(this.props.options);
    const exists = options.some(item => item.value === this.state.selectValue);
    if (!exists) {
      this.setState({
        selectValue: getDefaultValue(options)
      });
    }
  }

  render () {
    const height_ = 50;
    const options = normalizeOptions(this.props.options);
    return (
      <div
        onClick={() => {
          if (options.length === 0) {
            return
          }
          this.setState({show: !this.state.show})
        }}
        style={{
          width: 100,
          height: this.state.show ? height_ * options.length + height_ : height_, overflow: 'hidden',
          background: '#85E2FF',
          transition: 'all 0.4s ease',
        }}>
        <p style={styles.p1}>{this.state.selectValue}</p>
        {
          options.map((ele, index) => {
            return <p style={styles.p1} key={`${ele.value}-${index}`}
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