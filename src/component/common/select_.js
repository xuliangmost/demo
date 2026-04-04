import React, {Component} from 'react'

class Select_ extends Component {
  static defaultOptions (options) {
    return Array.isArray(options) ? options : [];
  }

  static getDefaultValue (options) {
    if (!options.length) {
      return '';
    }
    return options[0] && options[0].value !== undefined ? options[0].value : '';
  }

  constructor (props) {
    super(props);
    const options = Select_.defaultOptions(props.options);
    this.state = {
      show: false,
      selectValue: Select_.getDefaultValue(options)
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const options = Select_.defaultOptions(this.props.options);
      const hasCurrentValue = options.some((option) => option.value === this.state.selectValue);
      if (!hasCurrentValue) {
        this.setState({
          selectValue: Select_.getDefaultValue(options),
          show: false
        });
      }
    }
  }

  render () {
    const height_ = 50;
    const options = Select_.defaultOptions(this.props.options);
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