import React, {Component} from 'react'

function normalizeOptions (options) {
  return Array.isArray(options) ? options : [];
}

function getFirstOptionValue (options) {
  const normalized = normalizeOptions(options);
  return normalized.length > 0 && normalized[0] && normalized[0].value !== undefined
    ? normalized[0].value
    : '';
}

class Select_ extends Component {
  constructor (props) {
    super(props);
    this.state = {
      show: false,
      selectValue: getFirstOptionValue(props.options)
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const options = normalizeOptions(this.props.options);
      const hasCurrentValue = options.some((ele) => ele && ele.value === this.state.selectValue);

      if (!hasCurrentValue) {
        this.setState({
          selectValue: getFirstOptionValue(options)
        });
      }
    }
  }

  render () {
    const height_ = 50;
    let options = normalizeOptions(this.props.options);
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
            const currentValue = ele && ele.value !== undefined ? ele.value : '';
            return <p style={styles.p1} key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.setState({
                          selectValue: currentValue,
                          show: false
                        });
                        this.props.onChange && this.props.onChange(currentValue)
                      }}>{currentValue}</p>
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