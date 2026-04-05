import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = this.getOptions(props);
    this.state = {
      show: false,
      selectValue: options.length > 0 ? options[0].value : ''
    }
  }

  getOptions (props = this.props) {
    return Array.isArray(props.options) ? props.options : []
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options === this.props.options) {
      return
    }
    const options = this.getOptions();
    if (options.length === 0) {
      if (this.state.selectValue !== '' || this.state.show) {
        this.setState({selectValue: '', show: false})
      }
      return
    }
    const hasCurrentValue = options.some((item) => item.value === this.state.selectValue);
    if (!hasCurrentValue) {
      this.setState({selectValue: options[0].value, show: false})
    }
  }

  render () {
    const height_ = 50;
    const options = this.getOptions();
    const hasOptions = options.length > 0;
    const displayValue = this.state.selectValue || '请选择';
    return (
      <div
        onClick={() => {
          if (!hasOptions) {
            return
          }
          this.setState({show: !this.state.show})
        }}
        style={{
          width: 100,
          height: this.state.show ? height_ * options.length + 50 : height_, overflow: 'hidden',
          background: '#85E2FF',
          transition: 'all 0.4s ease',
        }}>
        <p style={styles.p1}>{displayValue}</p>
        {
          hasOptions ? options.map((ele, index) => {
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
          }) : null
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