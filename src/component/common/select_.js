import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const firstOptionValue = this.getFirstOptionValue(props.options);
    this.state = {
      show: false,
      selectValue: firstOptionValue
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const nextFirstValue = this.getFirstOptionValue(this.props.options);
      if (this.state.selectValue === '' || !this.optionExists(this.state.selectValue, this.props.options)) {
        this.setState({selectValue: nextFirstValue});
      }
    }
  }

  getFirstOptionValue (options) {
    if (Array.isArray(options) && options.length > 0 && options[0] && options[0].value !== undefined) {
      return options[0].value;
    }
    return '';
  }

  optionExists (value, options) {
    if (!Array.isArray(options)) {
      return false;
    }
    return options.some(item => item && item.value === value);
  }

  render () {
    const height_ = 50;
    let {options} = this.props;
    const safeOptions = Array.isArray(options) ? options : [];
    return (
      <div
        onClick={() => {
          if (safeOptions.length > 0) {
            this.setState({show: !this.state.show})
          }
        }}
        style={{
          width: 100,
          height: this.state.show ? height_ * safeOptions.length + 50 : height_, overflow: 'hidden',
          background: '#85E2FF',
          transition: 'all 0.4s ease',
        }}>
        <p style={styles.p1}>{this.state.selectValue || '暂无选项'}</p>
        {
          safeOptions.map((ele, index) => {
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