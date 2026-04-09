import React, {Component} from 'react'

function getFirstOptionValue(options) {
  if (!Array.isArray(options) || options.length === 0) {
    return '';
  }
  const [first] = options;
  return first && first.value ? first.value : '';
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
      const options = Array.isArray(this.props.options) ? this.props.options : [];
      const hasCurrentValue = options.some((item) => item && item.value === this.state.selectValue);
      if (!hasCurrentValue) {
        this.setState({
          selectValue: getFirstOptionValue(this.props.options),
          show: false
        });
      }
    }
  }

  render () {
    const height_ = 50;
    let {options} = this.props;
    const safeOptions = Array.isArray(options) ? options : [];
    return (
      <div
        onClick={() => {
          if (safeOptions.length === 0) {
            return;
          }
          this.setState({show: !this.state.show})
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