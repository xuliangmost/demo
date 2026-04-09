import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = this.getOptions(props);
    this.state = {
      show: false,
      selectValue: this.getOptionValue(options[0])
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.options !== this.props.options) {
      const nextOptions = this.getOptions(nextProps);
      const hasCurrentValue = nextOptions.some(option => {
        return this.getOptionValue(option) === this.state.selectValue;
      });
      if (!hasCurrentValue) {
        this.setState({
          selectValue: this.getOptionValue(nextOptions[0]),
          show: false
        });
      }
    }
  }

  getOptions (props) {
    return Array.isArray(props.options) ? props.options : [];
  }

  getOptionValue (option) {
    if (!option || option.value === undefined || option.value === null) {
      return '';
    }
    return option.value;
  }

  render () {
    const height_ = 50;
    const options = this.getOptions(this.props);
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