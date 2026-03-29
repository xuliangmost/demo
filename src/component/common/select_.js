import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = this.getOptions(props.options);
    this.state = {
      show: false,
      selectValue: this.getDefaultValue(options)
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options === this.props.options) {
      return;
    }
    const options = this.getOptions(this.props.options);
    const shouldReset = !options.some((item) => item.value === this.state.selectValue);
    if (shouldReset) {
      this.setState({
        selectValue: this.getDefaultValue(options),
        show: false
      });
    }
  }

  getOptions (options) {
    return Array.isArray(options) ? options : [];
  }

  getDefaultValue (options) {
    return options.length > 0 ? options[0].value : '';
  }

  render () {
    const height_ = 50;
    const options = this.getOptions(this.props.options);
    const hasOptions = options.length > 0;
    const selectValue = this.state.selectValue || '请选择';
    return (
      <div
        onClick={() => {
          if (hasOptions) {
            this.setState({show: !this.state.show})
          }
        }}
        style={{
          width: 100,
          height: this.state.show && hasOptions ? height_ * options.length + 50 : height_, overflow: 'hidden',
          background: '#85E2FF',
          transition: 'all 0.4s ease',
        }}>
        <p style={styles.p1}>{selectValue}</p>
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