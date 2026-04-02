import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = Array.isArray(props.options) ? props.options : [];
    const firstValue = options.length > 0 && options[0] ? options[0].value : '';
    this.state = {
      show: false,
      selectValue: firstValue
    }
  }

  componentDidUpdate (prevProps) {
    const prevOptions = Array.isArray(prevProps.options) ? prevProps.options : [];
    const currentOptions = Array.isArray(this.props.options) ? this.props.options : [];
    if (prevOptions !== currentOptions) {
      const hasSelectedValue = currentOptions.some(option => option && option.value === this.state.selectValue);
      if (!hasSelectedValue) {
        const firstValue = currentOptions.length > 0 && currentOptions[0] ? currentOptions[0].value : '';
        this.setState({selectValue: firstValue});
      }
    }
  }

  render () {
    const height_ = 50;
    const options = Array.isArray(this.props.options) ? this.props.options : [];
    return (
      <div
        onClick={() => {
          if (options.length > 0) {
            this.setState({show: !this.state.show})
          }
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