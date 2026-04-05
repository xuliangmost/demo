import React, {Component} from 'react'

function normalizeOptions(options) {
  return Array.isArray(options) ? options : [];
}

function getOptionValue(option) {
  if (option && Object.prototype.hasOwnProperty.call(option, 'value')) {
    return option.value;
  }
  return '';
}

function getDefaultValue(options) {
  if (!options.length) {
    return '';
  }
  return getOptionValue(options[0]);
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

  componentDidUpdate(prevProps) {
    if (prevProps.options !== this.props.options) {
      const options = normalizeOptions(this.props.options);
      const hasCurrentValue = options.some((option) => getOptionValue(option) === this.state.selectValue);
      const nextValue = hasCurrentValue ? this.state.selectValue : getDefaultValue(options);

      if (nextValue !== this.state.selectValue) {
        this.setState({selectValue: nextValue});
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