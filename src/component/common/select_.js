import React, {Component} from 'react'

function getSafeOptions (options) {
  return Array.isArray(options) ? options : [];
}

function getDefaultValue (options) {
  return options.length > 0 ? options[0].value : '';
}

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = getSafeOptions(props.options);
    this.state = {
      show: false,
      selectValue: getDefaultValue(options)
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const options = getSafeOptions(this.props.options);
      const currentValueExists = options.some((ele) => ele && ele.value === this.state.selectValue);
      if (!currentValueExists || !this.state.selectValue) {
        this.setState({
          selectValue: getDefaultValue(options),
          show: false
        });
      }
    }
  }

  render () {
    const height_ = 50;
    const options = getSafeOptions(this.props.options);
    return (
      <div
        onClick={() => {
          this.setState({show: !this.state.show})
        }}
        style={{
          width: 100,
          height: this.state.show ? height_ * options.length + height_ : height_,
          overflow: 'hidden',
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