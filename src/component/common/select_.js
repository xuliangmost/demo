import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = this.getOptions(props);
    this.state = {
      show: false,
      selectValue: this.getDefaultValue(options)
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const options = this.getOptions(this.props);
      const hasCurrentValue = options.some((item) => item.value === this.state.selectValue);
      if (!hasCurrentValue) {
        this.setState({selectValue: this.getDefaultValue(options)});
      }
    }
  }

  getOptions (props = this.props) {
    if (!Array.isArray(props.options)) {
      return [];
    }
    return props.options.filter((item) => item && Object.prototype.hasOwnProperty.call(item, 'value'));
  }

  getDefaultValue (options) {
    if (!options.length) {
      return '';
    }
    return options[0].value;
  }

  render () {
    const height_ = 50;
    const options = this.getOptions();
    const currentValue = this.state.selectValue || '请选择';
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
        <p style={styles.p1}>{currentValue}</p>
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