import React, {Component} from 'react'

function normalizeOptions (options) {
  if (!Array.isArray(options)) {
    return []
  }
  return options.filter((item) => item && item.value !== undefined && item.value !== null)
}

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = normalizeOptions(props.options);
    this.state = {
      show: false,
      selectValue: options.length > 0 ? options[0].value : ''
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options === this.props.options) {
      return;
    }
    const options = normalizeOptions(this.props.options);
    if (options.length === 0) {
      if (this.state.selectValue !== '' || this.state.show) {
        this.setState({
          selectValue: '',
          show: false
        });
      }
      return;
    }
    const hasCurrentValue = options.some((item) => item.value === this.state.selectValue);
    if (!hasCurrentValue) {
      this.setState({
        selectValue: options[0].value
      });
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