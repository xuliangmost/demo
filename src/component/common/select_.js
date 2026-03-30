import React, {Component} from 'react'

function normalizeOptions (options) {
  return Array.isArray(options) ? options : [];
}

function getOptionValue (option) {
  return option && option.value !== undefined ? option.value : '';
}

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = normalizeOptions(props.options);
    const firstValue = options.length > 0 ? getOptionValue(options[0]) : '';
    this.state = {
      show: false,
      selectValue: firstValue
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const options = normalizeOptions(this.props.options);
      const hasSelectedValue = options.some((option) => getOptionValue(option) === this.state.selectValue);
      if (!hasSelectedValue) {
        this.setState({
          show: false,
          selectValue: options.length > 0 ? getOptionValue(options[0]) : ''
        });
      }
    }
  }

  render () {
    const height_ = 50;
    const options = normalizeOptions(this.props.options);
    const computedHeight = this.state.show ? height_ * options.length + height_ : height_;
    return (
      <div
        onClick={() => {
          this.setState({show: !this.state.show})
        }}
        style={{
          width: 100,
          height: computedHeight, overflow: 'hidden',
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
export default Select_