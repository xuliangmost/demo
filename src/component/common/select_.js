import React, {Component} from 'react'

function getInitialSelectValue (options = []) {
  if (!Array.isArray(options) || options.length === 0) {
    return '';
  }
  return options[0] && options[0].value !== undefined ? options[0].value : '';
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
      const hasCurrentValue = options.some((ele) => ele && ele.value === this.state.selectValue);
      if (!hasCurrentValue) {
        this.setState({
          selectValue: getInitialSelectValue(options)
        });
      }
    }
  }

  render () {
    const height_ = 50;
    const options = Array.isArray(this.props.options) ? this.props.options : [];
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
            const optionValue = ele && ele.value !== undefined ? ele.value : '';
            return <p style={styles.p1} key={ele && ele.value !== undefined ? String(ele.value) : `option-${index}`}
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